// This file has been autogenerated.

exports.setEnvironment = function() {
  process.env['AZURE_TEST_LOCATION'] = 'westus';
  process.env['AZURE_SUBSCRIPTION_ID'] = '2aa30309-3723-4112-bd0b-79e9f65fc52d';
};

exports.scopes = [[function (nock) { 
var result = 
nock('http://management.azure.com:443')
  .get('/subscriptions/2aa30309-3723-4112-bd0b-79e9f65fc52d/resourceGroups/nodeTestGroup9524/providers/Microsoft.Storage/storageAccounts/testacc4081?api-version=2017-06-01')
  .reply(200, "{\"id\":\"/subscriptions/2aa30309-3723-4112-bd0b-79e9f65fc52d/resourceGroups/nodetestgroup9524/providers/Microsoft.Storage/storageAccounts/testacc4081\",\"kind\":\"Storage\",\"location\":\"westus\",\"name\":\"testacc4081\",\"properties\":{\"creationTime\":\"2017-06-09T06:50:57.5380615Z\",\"primaryEndpoints\":{\"blob\":\"https://testacc4081.blob.core.windows.net/\",\"file\":\"https://testacc4081.file.core.windows.net/\",\"queue\":\"https://testacc4081.queue.core.windows.net/\",\"table\":\"https://testacc4081.table.core.windows.net/\"},\"primaryLocation\":\"westus\",\"provisioningState\":\"Succeeded\",\"statusOfPrimary\":\"available\",\"supportsHttpsTrafficOnly\":false},\"sku\":{\"name\":\"Standard_LRS\",\"tier\":\"Standard\"},\"tags\":{\"tag1\":\"val1\",\"tag2\":\"val2\"},\"type\":\"Microsoft.Storage/storageAccounts\"}\n", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '752',
  'content-type': 'application/json',
  expires: '-1',
  'x-ms-request-id': '8459c811-c206-46f3-b314-b75b92e1f3d1',
  server: 'Microsoft-Azure-Storage-Resource-Provider/1.0',
  'x-ms-ratelimit-remaining-subscription-reads': '14990',
  'x-ms-correlation-request-id': '8459c811-c206-46f3-b314-b75b92e1f3d1',
  'x-ms-routing-request-id': 'JAPANEAST:20170609T065314Z:8459c811-c206-46f3-b314-b75b92e1f3d1',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  date: 'Fri, 09 Jun 2017 06:53:14 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('https://management.azure.com:443')
  .get('/subscriptions/2aa30309-3723-4112-bd0b-79e9f65fc52d/resourceGroups/nodeTestGroup9524/providers/Microsoft.Storage/storageAccounts/testacc4081?api-version=2017-06-01')
  .reply(200, "{\"id\":\"/subscriptions/2aa30309-3723-4112-bd0b-79e9f65fc52d/resourceGroups/nodetestgroup9524/providers/Microsoft.Storage/storageAccounts/testacc4081\",\"kind\":\"Storage\",\"location\":\"westus\",\"name\":\"testacc4081\",\"properties\":{\"creationTime\":\"2017-06-09T06:50:57.5380615Z\",\"primaryEndpoints\":{\"blob\":\"https://testacc4081.blob.core.windows.net/\",\"file\":\"https://testacc4081.file.core.windows.net/\",\"queue\":\"https://testacc4081.queue.core.windows.net/\",\"table\":\"https://testacc4081.table.core.windows.net/\"},\"primaryLocation\":\"westus\",\"provisioningState\":\"Succeeded\",\"statusOfPrimary\":\"available\",\"supportsHttpsTrafficOnly\":false},\"sku\":{\"name\":\"Standard_LRS\",\"tier\":\"Standard\"},\"tags\":{\"tag1\":\"val1\",\"tag2\":\"val2\"},\"type\":\"Microsoft.Storage/storageAccounts\"}\n", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '752',
  'content-type': 'application/json',
  expires: '-1',
  'x-ms-request-id': '8459c811-c206-46f3-b314-b75b92e1f3d1',
  server: 'Microsoft-Azure-Storage-Resource-Provider/1.0',
  'x-ms-ratelimit-remaining-subscription-reads': '14990',
  'x-ms-correlation-request-id': '8459c811-c206-46f3-b314-b75b92e1f3d1',
  'x-ms-routing-request-id': 'JAPANEAST:20170609T065314Z:8459c811-c206-46f3-b314-b75b92e1f3d1',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  date: 'Fri, 09 Jun 2017 06:53:14 GMT',
  connection: 'close' });
 return result; }]];