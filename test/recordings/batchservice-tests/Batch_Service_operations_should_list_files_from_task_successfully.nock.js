// This file has been autogenerated.

exports.setEnvironment = function() {
  process.env['AZURE_BATCH_ACCOUNT'] = 'batchtestnodesdk';
  process.env['AZURE_BATCH_ENDPOINT'] = 'https://batchtestnodesdk.japaneast.batch.azure.com';
  process.env['AZURE_SUBSCRIPTION_ID'] = '00000000-0000-0000-0000-000000000000';
};

exports.scopes = [[function (nock) { 
var result = 
nock('http://batchtestnodesdk.japaneast.batch.azure.com:443')
  .get('/jobs/HelloWorldJobNodeSDKTest/tasks/HelloWorldNodeSDKTestTask2/files?api-version=2017-06-01.5.1')
  .reply(200, "{\r\n  \"odata.metadata\":\"https://batchtestnodesdk.japaneast.batch.azure.com/$metadata#files\",\"value\":[\r\n    {\r\n      \"name\":\"ProcessEnv.cmd\",\"url\":\"https://batchtestnodesdk.japaneast.batch.azure.com/jobs/HelloWorldJobNodeSDKTest/tasks/HelloWorldNodeSDKTestTask2/files/ProcessEnv.cmd\",\"isDirectory\":false,\"properties\":{\r\n        \"creationTime\":\"2017-07-20T20:06:27.1074428Z\",\"lastModified\":\"2017-07-20T20:06:27.1075506Z\",\"contentLength\":\"2697\",\"contentType\":\"application/octet-stream\"\r\n      }\r\n    },{\r\n      \"name\":\"stderr.txt\",\"url\":\"https://batchtestnodesdk.japaneast.batch.azure.com/jobs/HelloWorldJobNodeSDKTest/tasks/HelloWorldNodeSDKTestTask2/files/stderr.txt\",\"isDirectory\":false,\"properties\":{\r\n        \"creationTime\":\"2017-07-20T20:06:27.0225528Z\",\"lastModified\":\"2017-07-20T20:06:27.0225528Z\",\"contentLength\":\"0\",\"contentType\":\"application/octet-stream\"\r\n      }\r\n    },{\r\n      \"name\":\"stdout.txt\",\"url\":\"https://batchtestnodesdk.japaneast.batch.azure.com/jobs/HelloWorldJobNodeSDKTest/tasks/HelloWorldNodeSDKTestTask2/files/stdout.txt\",\"isDirectory\":false,\"properties\":{\r\n        \"creationTime\":\"2017-07-20T20:06:27.0225528Z\",\"lastModified\":\"2017-07-20T20:06:27.1205696Z\",\"contentLength\":\"13\",\"contentType\":\"application/octet-stream\"\r\n      }\r\n    },{\r\n      \"name\":\"wd\",\"url\":\"https://batchtestnodesdk.japaneast.batch.azure.com/jobs/HelloWorldJobNodeSDKTest/tasks/HelloWorldNodeSDKTestTask2/files/wd\",\"isDirectory\":true\r\n    }\r\n  ]\r\n}", { 'transfer-encoding': 'chunked',
  'content-type': 'application/json;odata=minimalmetadata',
  server: 'Microsoft-HTTPAPI/2.0',
  'request-id': '2ae09915-f82c-4a9b-a873-b3961208ee8d',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  'x-content-type-options': 'nosniff',
  dataserviceversion: '3.0',
  date: 'Thu, 20 Jul 2017 20:08:28 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('https://batchtestnodesdk.japaneast.batch.azure.com:443')
  .get('/jobs/HelloWorldJobNodeSDKTest/tasks/HelloWorldNodeSDKTestTask2/files?api-version=2017-06-01.5.1')
  .reply(200, "{\r\n  \"odata.metadata\":\"https://batchtestnodesdk.japaneast.batch.azure.com/$metadata#files\",\"value\":[\r\n    {\r\n      \"name\":\"ProcessEnv.cmd\",\"url\":\"https://batchtestnodesdk.japaneast.batch.azure.com/jobs/HelloWorldJobNodeSDKTest/tasks/HelloWorldNodeSDKTestTask2/files/ProcessEnv.cmd\",\"isDirectory\":false,\"properties\":{\r\n        \"creationTime\":\"2017-07-20T20:06:27.1074428Z\",\"lastModified\":\"2017-07-20T20:06:27.1075506Z\",\"contentLength\":\"2697\",\"contentType\":\"application/octet-stream\"\r\n      }\r\n    },{\r\n      \"name\":\"stderr.txt\",\"url\":\"https://batchtestnodesdk.japaneast.batch.azure.com/jobs/HelloWorldJobNodeSDKTest/tasks/HelloWorldNodeSDKTestTask2/files/stderr.txt\",\"isDirectory\":false,\"properties\":{\r\n        \"creationTime\":\"2017-07-20T20:06:27.0225528Z\",\"lastModified\":\"2017-07-20T20:06:27.0225528Z\",\"contentLength\":\"0\",\"contentType\":\"application/octet-stream\"\r\n      }\r\n    },{\r\n      \"name\":\"stdout.txt\",\"url\":\"https://batchtestnodesdk.japaneast.batch.azure.com/jobs/HelloWorldJobNodeSDKTest/tasks/HelloWorldNodeSDKTestTask2/files/stdout.txt\",\"isDirectory\":false,\"properties\":{\r\n        \"creationTime\":\"2017-07-20T20:06:27.0225528Z\",\"lastModified\":\"2017-07-20T20:06:27.1205696Z\",\"contentLength\":\"13\",\"contentType\":\"application/octet-stream\"\r\n      }\r\n    },{\r\n      \"name\":\"wd\",\"url\":\"https://batchtestnodesdk.japaneast.batch.azure.com/jobs/HelloWorldJobNodeSDKTest/tasks/HelloWorldNodeSDKTestTask2/files/wd\",\"isDirectory\":true\r\n    }\r\n  ]\r\n}", { 'transfer-encoding': 'chunked',
  'content-type': 'application/json;odata=minimalmetadata',
  server: 'Microsoft-HTTPAPI/2.0',
  'request-id': '2ae09915-f82c-4a9b-a873-b3961208ee8d',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  'x-content-type-options': 'nosniff',
  dataserviceversion: '3.0',
  date: 'Thu, 20 Jul 2017 20:08:28 GMT',
  connection: 'close' });
 return result; }]];