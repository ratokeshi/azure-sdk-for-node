// This file has been autogenerated.

exports.setEnvironment = function () {
  process.env['AZURE_TEST_LOCATION'] = 'japaneast';
  process.env['AZURE_AUTOSTORAGE'] = 'nodesdkteststorage';
  process.env['AZURE_SUBSCRIPTION_ID'] = '603663e9-700c-46de-9d41-e080ff1d461e';
};

exports.scopes = [[function (nock) { 
var result = 
nock('http://management.azure.com:443')
  .get('/subscriptions/603663e9-700c-46de-9d41-e080ff1d461e/resourceGroups/default-azurebatch-japaneast/providers/Microsoft.Batch/batchAccounts/batchtestnodesdk?api-version=2015-12-01')
  .reply(200, "{\"name\":\"batchtestnodesdk\",\"location\":\"japaneast\",\"properties\":{\"accountEndpoint\":\"batchtestnodesdk.japaneast.batch.azure.com\",\"provisioningState\":\"Succeeded\",\"coreQuota\":20,\"poolQuota\":20,\"activeJobAndJobScheduleQuota\":20,\"autoStorage\":{\"storageAccountId\":\"/subscriptions/603663e9-700c-46de-9d41-e080ff1d461e/resourceGroups/default-azurebatch-japaneast/providers/Microsoft.Storage/storageAccounts/nodesdkteststorage\",\"lastKeySync\":\"2016-03-10T23:48:38.9878479Z\"}},\"id\":\"/subscriptions/603663e9-700c-46de-9d41-e080ff1d461e/resourceGroups/default-azurebatch-japaneast/providers/Microsoft.Batch/batchAccounts/batchtestnodesdk\",\"type\":\"Microsoft.Batch/batchAccounts\"}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '664',
  'content-type': 'application/json; charset=utf-8',
  expires: '-1',
  'last-modified': 'Thu, 10 Mar 2016 23:50:14 GMT',
  etag: '0x8D3493EB9E0A436',
  'request-id': 'e54e540a-9697-4844-96d7-94bafba4a636',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  server: 'Microsoft-HTTPAPI/2.0',
  'x-ms-ratelimit-remaining-subscription-reads': '14991',
  'x-ms-request-id': '1771a107-a83f-4853-87bc-80ebd03984d6',
  'x-ms-correlation-request-id': '1771a107-a83f-4853-87bc-80ebd03984d6',
  'x-ms-routing-request-id': 'CENTRALUS:20160310T235014Z:1771a107-a83f-4853-87bc-80ebd03984d6',
  date: 'Thu, 10 Mar 2016 23:50:14 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('https://management.azure.com:443')
  .get('/subscriptions/603663e9-700c-46de-9d41-e080ff1d461e/resourceGroups/default-azurebatch-japaneast/providers/Microsoft.Batch/batchAccounts/batchtestnodesdk?api-version=2015-12-01')
  .reply(200, "{\"name\":\"batchtestnodesdk\",\"location\":\"japaneast\",\"properties\":{\"accountEndpoint\":\"batchtestnodesdk.japaneast.batch.azure.com\",\"provisioningState\":\"Succeeded\",\"coreQuota\":20,\"poolQuota\":20,\"activeJobAndJobScheduleQuota\":20,\"autoStorage\":{\"storageAccountId\":\"/subscriptions/603663e9-700c-46de-9d41-e080ff1d461e/resourceGroups/default-azurebatch-japaneast/providers/Microsoft.Storage/storageAccounts/nodesdkteststorage\",\"lastKeySync\":\"2016-03-10T23:48:38.9878479Z\"}},\"id\":\"/subscriptions/603663e9-700c-46de-9d41-e080ff1d461e/resourceGroups/default-azurebatch-japaneast/providers/Microsoft.Batch/batchAccounts/batchtestnodesdk\",\"type\":\"Microsoft.Batch/batchAccounts\"}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '664',
  'content-type': 'application/json; charset=utf-8',
  expires: '-1',
  'last-modified': 'Thu, 10 Mar 2016 23:50:14 GMT',
  etag: '0x8D3493EB9E0A436',
  'request-id': 'e54e540a-9697-4844-96d7-94bafba4a636',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  server: 'Microsoft-HTTPAPI/2.0',
  'x-ms-ratelimit-remaining-subscription-reads': '14991',
  'x-ms-request-id': '1771a107-a83f-4853-87bc-80ebd03984d6',
  'x-ms-correlation-request-id': '1771a107-a83f-4853-87bc-80ebd03984d6',
  'x-ms-routing-request-id': 'CENTRALUS:20160310T235014Z:1771a107-a83f-4853-87bc-80ebd03984d6',
  date: 'Thu, 10 Mar 2016 23:50:14 GMT',
  connection: 'close' });
 return result; }]];