/*
 * Copyright (c) Microsoft Corporation. All rights reserved.
 * Licensed under the MIT License. See License.txt in the project root for
 * license information.
 */

const gulp = require('gulp');
const args = require('yargs').argv;
const colors = require('colors');
const fs = require('fs');
const util = require('util');
const path = require('path');
const glob = require('glob');
const execSync = require('child_process').execSync;

var mappings = require('./codegen_mappings.json');

const defaultAutoRestVersion = '1.2.2';
var usingAutoRestVersion;
const specRepoDir = args['spec-repo-dir'];
const specRoot = args['spec-root'] || "https://raw.githubusercontent.com/Azure/azure-rest-api-specs/current/specification";
const project = args['project'];
var language = 'Azure.NodeJS';
var modeler = 'Swagger';

function getAutorestVersion(version) {
  if (!version) version = 'latest';
  let getVersion, execHelp;
  let result = true;
  try {
    let getVersionCmd = `autorest --version=${version}`;
    let execHelpCmd = `autorest --help`;
    console.log(getVersionCmd);
    getVersion = execSync(getVersionCmd, { encoding: 'utf8' });
    //console.debug(getVersion);
    console.log(execHelpCmd);
    execHelp = execSync(execHelpCmd, { encoding: 'utf8' });
    //console.debug(execHelp);
  } catch (err) {
    result = false;
    console.log(`An error occurred while getting the "${version}" of autorest and executing "autorest --help":\n ${util.inspect(err, { depth: null })}.`);
  }
  return result;
}

function deleteFolderRecursive(path) {
  if (fs.existsSync(path)) {
    fs.readdirSync(path).forEach(function (file, index) {
      var curPath = path + "/" + file;
      if (fs.lstatSync(curPath).isDirectory()) { // recurse
        deleteFolderRecursive(curPath);
      } else { // delete file
        fs.unlinkSync(curPath);
      }
    });
    fs.rmdirSync(path);
  }
};

function clearProjectBeforeGenerating(projectDir) {
  let modelsDir = `${projectDir}/models`;
  let operationsDir = `${projectDir}/operations`;
  let clientTypedefFile = path.basename(glob.sync(`${projectDir}/*.d.ts`)[0] || '');
  let clientJSFile = `${clientTypedefFile.split('.')[0]}.js`;
  let directoriesToBeDeleted = [modelsDir, operationsDir];
  let filesToBeDeleted = [clientTypedefFile, clientJSFile];
  directoriesToBeDeleted.forEach((dir) => {
    if (fs.existsSync(dir)) {
      deleteFolderRecursive(dir);
    }
  });
  filesToBeDeleted.forEach((file) => {
    if (fs.existsSync(file)) {
      fs.unlinkSync(file);
    }
  });
  return;
}

function generateProject(projectObj, specRoot, autoRestVersion) {
  let specPath = specRoot + '/' + projectObj.source;
  let isInputJson = projectObj.source.endsWith("json");
  let result;
  const azureTemplate = 'Azure.NodeJs';
  language = azureTemplate;
  //servicefabric wants to generate using generic NodeJS.
  if (projectObj.language && projectObj.language.match(/^NodeJS$/ig) !== null) {
    language = projectObj.language;
  }

  console.log(`\n>>>>>>>>>>>>>>>>>>>Start: "${project}" >>>>>>>>>>>>>>>>>>>>>>>>>`);
  let outputDir = `lib/services/${projectObj.dir}`;
  let packageName = projectObj.packageName;
  let cmd = `autorest --output-folder=D:/sdk/upstream/azure-sdk-for-node/${outputDir} --package-name=${packageName} --nodejs --license-header=MICROSOFT_MIT_NO_VERSION --version=${autoRestVersion}`;

  // if using azure template, pass in azure-arm argument. otherwise, get the generic template by not passing in anything.
  if (language === azureTemplate) cmd += '  --azure-arm ';
  if (isInputJson) {
    cmd += `  --input-file=${specPath} `;
  }
  else {
    cmd += `  ${specPath} `;
  }

  if (projectObj.ft !== null && projectObj.ft !== undefined) cmd += ' --payload-flattening-threshold=' + projectObj.ft;
  if (projectObj.clientName !== null && projectObj.clientName !== undefined) cmd += ' --override-client-name=' + projectObj.clientName;
  if (projectObj.args !== undefined) {
    cmd = cmd + ' ' + args;
  }

  try {
    console.log(`Cleaning the output directory: "${outputDir}".`);
    clearProjectBeforeGenerating(outputDir);
    console.log('Executing command:');
    console.log('------------------------------------------------------------');
    console.log(cmd);
    console.log('------------------------------------------------------------');
    result = execSync(cmd, { encoding: 'utf8' });
    console.log('Output:');
    console.log(result);
  } catch (err) {
    console.log('Error:');
    console.log(`An error occurred while generating client for project: "${project}":\n ${util.inspect(err, { depth: null })}`);
  }
  console.log(`>>>>>>>>>>>>>>>>>>>>>End: "${project}" >>>>>>>>>>>>>>>>>>>>>>>>>\n`);
  return;
}

function installAutorest() {
  let installation;
  let isSuccessful = true;
  let autorestAlreadyInstalled = true;
  try {
    execSync(`autorest --help`);
  } catch (error) {
    autorestAlreadyInstalled = false;
  }
  try {
    if (!autorestAlreadyInstalled) {
      console.log('Looks like autorest is not installed on your machine. Installing autorest . . .');
      let installCmd = 'npm install -g autorest';
      console.log(installCmd);
      installation = execSync(installCmd, { encoding: 'utf8' });
      //console.debug('installation');
    }
    isSuccessful = getAutorestVersion();
  } catch (err) {
    isSuccessful = false;
    console.log(`An error occurred while installing autorest via npm:\n ${util.inspect(err, { depth: null })}.`);
  }
  return isSuccessful;
}

function codegen(projectObj, index) {
  let versionSuccessfullyFound = false;
  let usingAutoRestVersion = defaultAutoRestVersion;
  function checkAutorestVersion(actualProj) {
    if (actualProj.autoRestVersion) {
      usingAutoRestVersion = actualProj.autoRestVersion;
    }
    if (index === 0) {
      versionSuccessfullyFound = getAutorestVersion(usingAutoRestVersion);
      if (!versionSuccessfullyFound) {
        process.exit(1);
      }
    }
  }

  function iterateProject(proj, specRoot, usingAutoRestVersion) {
    for (key in proj) {
      if (proj[key]['packageName']) {
        if (!versionSuccessfullyFound) {
          checkAutorestVersion(proj[key], index);
        }
        generateProject(proj[key], specRoot, usingAutoRestVersion);
      } else {
        iterateProject(proj[key], specRoot, usingAutoRestVersion);
      }
    }
  }

  return iterateProject(projectObj, specRoot, usingAutoRestVersion);
}

gulp.task('default', function () {
  console.log("Usage: gulp codegen [--spec-root <swagger specs root>] [--project <project name>]\n");
  console.log("--spec-root");
  console.log("\tRoot location of Swagger API specs, default value is \"https://raw.githubusercontent.com/Azure/azure-rest-api-specs/master\"");
  console.log("--project\n\tProject to regenerate, default is all. List of available project names:");
  Object.keys(mappings).forEach(function (i) {
    console.log('\t' + i.magenta);
  });
});

//This task is used to generate libraries based on the mappings specified above.
gulp.task('codegen', function (cb) {
  if (project === undefined) {
    let arr = Object.keys(mappings);
    for (let i = 0; i < arr.length; i++) {
      codegen(arr[i], i);
    }
  } else {
    if (mappings[project] === undefined) {
      console.error('Invalid project name "' + project + '"!');
      process.exit(1);
    }
    codegen(mappings[project], null);
  }
});

//This task validates that the entry in "main" and "types" in package.json points to a file that exists on the disk.
// for best results run on mac or linux. Windows is case insenstive for file paths. Hence it will not catch those issues.
//If not tested this will cause "module not found" errors for customers when they try to use the package.
gulp.task('validate-each-packagejson', (cb) => {
  let packagePaths = glob.sync(path.join(__dirname, '/lib/services', '/**/package.json'));
  packagePaths.forEach((packagePath) => {
    const package = require(packagePath);
    //console.log(package);
    if (package.name.startsWith('azure-arm-')) {
      console.log(`Validating package: ${package.name}`);
      if (package.main) {
        let mainPath = path.resolve(path.dirname(packagePath), package.main);
        if (!fs.existsSync(mainPath)) console.log(`\t>${mainPath} does not exist.`);
      } else {
        console.log(`\t>Could not find "main" entry in package.json for ${packagePath}.`);
      }
      if (package.types) {
        let typesPath = path.resolve(path.dirname(packagePath), package.types);
        if (!fs.existsSync(typesPath)) console.log(`\t>${typesPath} does not exist.`);
      } else {
        console.log(`\t>Could not find "types" entry in package.json for ${packagePath}.`);
      }
    }
  });
});

//This task updates the dependencies in package.json to the relative service libraries inside lib/services directory.
gulp.task('update-deps-rollup', (cb) => {
  let packagePaths = glob.sync(path.join(__dirname, './lib/services', '/**/package.json'));
  let rollupPackage = require('./package.json');
  let rollupDependencies = rollupPackage.dependencies;
  rollupDependencies['ms-rest'] = './runtime/ms-rest';
  rollupDependencies['ms-rest-azure'] = './runtime/ms-rest-azure';
  packagePaths.forEach((packagePath) => {
    const package = require(packagePath);
    //console.log(package);
    let packageName = package.name
    packageDir = path.dirname(packagePath);
    if (rollupDependencies[packageName]) {
      rollupDependencies[packageName] = packageDir;
    } else {
      console.log(`Could not find ${packageName} as a dependecy in rollup package.json file..`);
    }
  });
  fs.writeFileSync('./package.json', JSON.stringify(rollupPackage, null, 2), { 'encoding': 'utf8' });
});

//This task ensures that all the exposed createSomeClient() methods, can correctly instantiate clients. By doing this we test,
//that the "main" entry in package.json points to a file at the correct location. We test the signature of the client constructor 
//is as expected. As of now HD Isnight is expected to fail as it is still using the Hyak generator. Once it moves to Autorest, it should
//not fail.
gulp.task('test-create-rollup', (cb) => {
  const azure = require('./lib/azure');
  const keys = Object.keys(azure).filter((key) => { return key.startsWith('create') && !key.startsWith('createASM') && key.endsWith('Client') && key !== 'createSchedulerClient' });
  //console.dir(keys);
  //console.log(keys.length);
  const creds = { signRequest: {} };
  const subId = '1234556';

  keys.forEach((key) => {
    console.log(key);
    const Client = azure[key];
    var c;
    try {
      if (key === 'createKeyVaultClient' || key === 'createSubscriptionManagementClient' ||
        key === 'createDataLakeAnalyticsJobManagementClient' || key === 'createDataLakeStoreFileSystemManagementClient' ||
        key === 'createDataLakeAnalyticsCatalogManagementClient') {
        c = new Client(creds);
      } else {
        c = new Client(creds, subId);
      }
      //console.dir(Object.keys(c));
    } catch (err) {
      console.dir(err);
    }
  });
});

// This task updates the codegen_mappings.json file in sync with the azure-rest-api-specs public repo.
gulp.task('sync-mappings-with-repo', (cb) => {
  if (!specRepoDir) {
    return cb(new Error('Please provide --spec-repo-dir <Absolute path to the directory where the azure-rest-api-specs is cloned.>'));
  }
  let specDir = `${specRepoDir}/specification`;
  const dirs = fs.readdirSync(specDir).filter(f => fs.statSync(`${specDir}/${f}`).isDirectory());
  let newlyAdded = [];
  for (let rp of dirs) {
    if (rp.toLowerCase() === 'intune') continue;
    let rm = `${specRepoDir}/specification/${rp}/resource-manager`;
    let dp = `${specRepoDir}/specification/${rp}/data-plane`;
    if (!mappings[rp]) {
      mappings[rp] = {};
      if (fs.existsSync(rm)) {
        mappings[rp]['resource-manager'] = {
          "packageName": `azure-arm-${rp.toLowerCase()}`,
          "dir": `${rp}Management/lib`,
          "source": `${rp}/resource-manager/readme.md`
        }
        newlyAdded.push(`${rp}['resource-manager']`);
        console.log(`Updating RP: ${rp}, "resource-manager".`);
        console.dir(mappings[rp]['resource-manager'], { depth: null, colors: true });
      }
      if (fs.existsSync(dp)) {
        mappings[rp]['data-plane'] = {
          "packageName": `azure-${rp.toLowerCase()}`,
          "dir": `${rp}/lib`,
          "source": `${rp}/data-plane/readme.md`
        }
        newlyAdded.push(`${rp}['data-plane']`);
        console.log(`Updating RP: ${rp}, "data-plane".`);
        console.dir(mappings[rp]['data-plane'], { depth: null, colors: true });
      }
    } else {
      if (fs.existsSync(rm) && !mappings[rp]['resource-manager']) {
        mappings[rp]['resource-manager'] = {
          "packageName": `azure-arm-${rp.toLowerCase()}`,
          "dir": `${rp}Management/lib`,
          "source": `${rp}/resource-manager/readme.md`
        }
        newlyAdded.push(`${rp}['resource-manager']`);
        console.log(`Updating RP: ${rp}, "resource-manager".`);
        console.dir(mappings[rp]['resource-manager'], { depth: null, colors: true });
      }
      if (fs.existsSync(dp) && !mappings[rp]['data-plane']) {
        mappings[rp]['data-plane'] = {
          "packageName": `azure-${rp.toLowerCase()}`,
          "dir": `${rp}/lib`,
          "source": `${rp}/data-plane/readme.md`
        }
        newlyAdded.push(`${rp}['data-plane']`);
        console.log(`Updating RP: ${rp}, "data-plane".`);
        console.dir(mappings[rp]['data-plane'], { depth: null, colors: true });
      }
    }
  }
  if (!newlyAdded.length) {
    console.log('\n\n> Mappings in ./codegen_mappings.json are already in sync...');
  } else {
    console.log(`\n\n> Basic properties like "packageName", "dir" and "source" have been added to ` +
      `the newly added projects "${newlyAdded.join()}" in the mappings.\n\n> Please ensure that other properties ` +
      `like: "ft", "clientName", etc. are correctly added as deemed necessary.\n\n> If the specs repo had multiple ` +
      `specs in data-plane or resource-manager (for example: "datalake-analytics.data-plane" has "catalog" ` +
      `and "job" in it), then please update the project mappings yourself.`)
  }
  console.log(`\n\n>>>>>  Total projects in the mappings: ${Object.keys(mappings).length}`);
  fs.writeFileSync('./codegen_mappings.json', JSON.stringify(mappings, null, 2));
});