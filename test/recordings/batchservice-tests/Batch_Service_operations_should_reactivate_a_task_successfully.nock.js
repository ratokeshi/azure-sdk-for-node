// This file has been autogenerated.

exports.setEnvironment = function() {
  process.env['AZURE_BATCH_ACCOUNT'] = 'batchtestnodesdk';
  process.env['AZURE_BATCH_ENDPOINT'] = 'https://batchtestnodesdk.japaneast.batch.azure.com';
  process.env['AZURE_SUBSCRIPTION_ID'] = '00000000-0000-0000-0000-000000000000';
};

exports.scopes = [[function (nock) { 
var result = 
nock('http://batchtestnodesdk.japaneast.batch.azure.com:443')
  .post('/jobs/HelloWorldJobNodeSDKTest/tasks/HelloWorldNodeSDKTestTask/reactivate?api-version=2017-06-01.5.1')
  .reply(204, "", { 'content-length': '0',
  'last-modified': 'Thu, 20 Jul 2017 20:06:26 GMT',
  etag: '0x8D4CFAACD6D711E',
  server: 'Microsoft-HTTPAPI/2.0',
  'request-id': '92c803a7-3785-4fc1-89d9-86c0fff49283',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  'x-content-type-options': 'nosniff',
  dataserviceversion: '3.0',
  date: 'Thu, 20 Jul 2017 20:06:25 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('https://batchtestnodesdk.japaneast.batch.azure.com:443')
  .post('/jobs/HelloWorldJobNodeSDKTest/tasks/HelloWorldNodeSDKTestTask/reactivate?api-version=2017-06-01.5.1')
  .reply(204, "", { 'content-length': '0',
  'last-modified': 'Thu, 20 Jul 2017 20:06:26 GMT',
  etag: '0x8D4CFAACD6D711E',
  server: 'Microsoft-HTTPAPI/2.0',
  'request-id': '92c803a7-3785-4fc1-89d9-86c0fff49283',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  'x-content-type-options': 'nosniff',
  dataserviceversion: '3.0',
  date: 'Thu, 20 Jul 2017 20:06:25 GMT',
  connection: 'close' });
 return result; }]];