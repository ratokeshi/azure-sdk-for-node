// This file has been autogenerated.

exports.setEnvironment = function() {
  process.env['AZURE_BATCH_ACCOUNT'] = 'batchtestnodesdk';
  process.env['AZURE_BATCH_ENDPOINT'] = 'https://batchtestnodesdk.japaneast.batch.azure.com';
  process.env['AZURE_SUBSCRIPTION_ID'] = '00000000-0000-0000-0000-000000000000';
};

exports.scopes = [[function (nock) { 
var result = 
nock('http://batchtestnodesdk.japaneast.batch.azure.com:443')
  .filteringRequestBody(function (path) { return '*';})
.put('/jobs/HelloWorldJobNodeSDKTest/tasks/HelloWorldNodeSDKTestTask2?api-version=2017-06-01.5.1', '*')
  .reply(200, "", { 'transfer-encoding': 'chunked',
  'last-modified': 'Thu, 20 Jul 2017 20:06:26 GMT',
  etag: '0x8D4CFAACD657BF3',
  server: 'Microsoft-HTTPAPI/2.0',
  'request-id': 'a8688c89-7b64-4640-96f0-3e351a5cc5b1',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  'x-content-type-options': 'nosniff',
  dataserviceversion: '3.0',
  dataserviceid: 'https://batchtestnodesdk.japaneast.batch.azure.com/jobs/HelloWorldJobNodeSDKTest/tasks/HelloWorldNodeSDKTestTask2',
  date: 'Thu, 20 Jul 2017 20:06:26 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('https://batchtestnodesdk.japaneast.batch.azure.com:443')
  .filteringRequestBody(function (path) { return '*';})
.put('/jobs/HelloWorldJobNodeSDKTest/tasks/HelloWorldNodeSDKTestTask2?api-version=2017-06-01.5.1', '*')
  .reply(200, "", { 'transfer-encoding': 'chunked',
  'last-modified': 'Thu, 20 Jul 2017 20:06:26 GMT',
  etag: '0x8D4CFAACD657BF3',
  server: 'Microsoft-HTTPAPI/2.0',
  'request-id': 'a8688c89-7b64-4640-96f0-3e351a5cc5b1',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  'x-content-type-options': 'nosniff',
  dataserviceversion: '3.0',
  dataserviceid: 'https://batchtestnodesdk.japaneast.batch.azure.com/jobs/HelloWorldJobNodeSDKTest/tasks/HelloWorldNodeSDKTestTask2',
  date: 'Thu, 20 Jul 2017 20:06:26 GMT',
  connection: 'close' });
 return result; }]];