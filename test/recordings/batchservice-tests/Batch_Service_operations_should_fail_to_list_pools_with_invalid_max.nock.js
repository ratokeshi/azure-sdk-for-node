// This file has been autogenerated.

exports.setEnvironment = function() {
  process.env['AZURE_BATCH_ACCOUNT'] = 'batchtestnodesdk';
  process.env['AZURE_BATCH_ENDPOINT'] = 'https://batchtestnodesdk.japaneast.batch.azure.com';
  process.env['AZURE_SUBSCRIPTION_ID'] = '00000000-0000-0000-0000-000000000000';
};

exports.scopes = [[function (nock) { 
var result = 
nock('http://batchtestnodesdk.japaneast.batch.azure.com:443')
  .get('/pools?api-version=2017-06-01.5.1&maxresults=-5')
  .reply(400, "{\r\n  \"odata.metadata\":\"https://batchtestnodesdk.japaneast.batch.azure.com/$metadata#Microsoft.Azure.Batch.Protocol.Entities.Container.errors/@Element\",\"code\":\"InvalidQueryParameterValue\",\"message\":{\r\n    \"lang\":\"en-US\",\"value\":\"Value for one of the query parameters specified in the request URI is invalid.\\nRequestId:adfc17e4-0b9a-4ead-9105-feb67fbc643d\\nTime:2017-07-20T20:06:17.1933672Z\"\r\n  },\"values\":[\r\n    {\r\n      \"key\":\"QueryParameterName\",\"value\":\"maxresults\"\r\n    },{\r\n      \"key\":\"QueryParameterValue\",\"value\":\"-5\"\r\n    },{\r\n      \"key\":\"Reason\",\"value\":\"MaxResults cannot be less than 1\"\r\n    }\r\n  ]\r\n}", { 'content-length': '614',
  'content-type': 'application/json;odata=minimalmetadata',
  server: 'Microsoft-HTTPAPI/2.0',
  'request-id': 'adfc17e4-0b9a-4ead-9105-feb67fbc643d',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  'x-content-type-options': 'nosniff',
  dataserviceversion: '3.0',
  date: 'Thu, 20 Jul 2017 20:06:17 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('https://batchtestnodesdk.japaneast.batch.azure.com:443')
  .get('/pools?api-version=2017-06-01.5.1&maxresults=-5')
  .reply(400, "{\r\n  \"odata.metadata\":\"https://batchtestnodesdk.japaneast.batch.azure.com/$metadata#Microsoft.Azure.Batch.Protocol.Entities.Container.errors/@Element\",\"code\":\"InvalidQueryParameterValue\",\"message\":{\r\n    \"lang\":\"en-US\",\"value\":\"Value for one of the query parameters specified in the request URI is invalid.\\nRequestId:adfc17e4-0b9a-4ead-9105-feb67fbc643d\\nTime:2017-07-20T20:06:17.1933672Z\"\r\n  },\"values\":[\r\n    {\r\n      \"key\":\"QueryParameterName\",\"value\":\"maxresults\"\r\n    },{\r\n      \"key\":\"QueryParameterValue\",\"value\":\"-5\"\r\n    },{\r\n      \"key\":\"Reason\",\"value\":\"MaxResults cannot be less than 1\"\r\n    }\r\n  ]\r\n}", { 'content-length': '614',
  'content-type': 'application/json;odata=minimalmetadata',
  server: 'Microsoft-HTTPAPI/2.0',
  'request-id': 'adfc17e4-0b9a-4ead-9105-feb67fbc643d',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  'x-content-type-options': 'nosniff',
  dataserviceversion: '3.0',
  date: 'Thu, 20 Jul 2017 20:06:17 GMT',
  connection: 'close' });
 return result; }]];