// This file has been autogenerated.

exports.setEnvironment = function() {
  process.env['AZURE_BATCH_ACCOUNT'] = 'batchtestnodesdk';
  process.env['AZURE_BATCH_ENDPOINT'] = 'https://batchtestnodesdk.japaneast.batch.azure.com/';
  process.env['AZURE_SUBSCRIPTION_ID'] = '603663e9-700c-46de-9d41-e080ff1d461e';
};

exports.scopes = [[function (nock) { 
var result = 
nock('http://batchtestnodesdk.japaneast.batch.azure.com:443')
  .get('/nodeagentskus?api-version=2016-02-01.3.0')
  .reply(200, "{\r\n  \"odata.metadata\":\"https://batchtestnodesdk.japaneast.batch.azure.com/$metadata#nodeagentskus\",\"value\":[\r\n    {\r\n      \"id\":\"batch.node.centos 7\",\"verifiedImageReferences\":[\r\n        {\r\n          \"publisher\":\"OpenLogic\",\"offer\":\"CentOS\",\"sku\":\"7.0\",\"version\":\"latest\"\r\n        },{\r\n          \"publisher\":\"OpenLogic\",\"offer\":\"CentOS\",\"sku\":\"7.1\",\"version\":\"latest\"\r\n        },{\r\n          \"publisher\":\"OpenLogic\",\"offer\":\"CentOS\",\"sku\":\"7.2\",\"version\":\"latest\"\r\n        },{\r\n          \"publisher\":\"Oracle\",\"offer\":\"Oracle-Linux-7\",\"sku\":\"OL70\",\"version\":\"latest\"\r\n        }\r\n      ],\"osType\":\"linux\"\r\n    },{\r\n      \"id\":\"batch.node.debian 8\",\"verifiedImageReferences\":[\r\n        {\r\n          \"publisher\":\"Canonical\",\"offer\":\"UbuntuServer\",\"sku\":\"15.10\",\"version\":\"latest\"\r\n        },{\r\n          \"publisher\":\"Credativ\",\"offer\":\"Debian\",\"sku\":\"8\",\"version\":\"latest\"\r\n        }\r\n      ],\"osType\":\"linux\"\r\n    },{\r\n      \"id\":\"batch.node.opensuse 13.2\",\"verifiedImageReferences\":[\r\n        {\r\n          \"publisher\":\"SUSE\",\"offer\":\"openSUSE\",\"sku\":\"13.2\",\"version\":\"latest\"\r\n        }\r\n      ],\"osType\":\"linux\"\r\n    },{\r\n      \"id\":\"batch.node.opensuse 42.1\",\"verifiedImageReferences\":[\r\n        {\r\n          \"publisher\":\"SUSE\",\"offer\":\"openSUSE-Leap\",\"sku\":\"42.1\",\"version\":\"latest\"\r\n        },{\r\n          \"publisher\":\"SUSE\",\"offer\":\"SLES\",\"sku\":\"12\",\"version\":\"latest\"\r\n        },{\r\n          \"publisher\":\"SUSE\",\"offer\":\"SLES\",\"sku\":\"12-SP1\",\"version\":\"latest\"\r\n        },{\r\n          \"publisher\":\"SUSE\",\"offer\":\"SLES-HPC\",\"sku\":\"12\",\"version\":\"latest\"\r\n        }\r\n      ],\"osType\":\"linux\"\r\n    },{\r\n      \"id\":\"batch.node.ubuntu 14.04\",\"verifiedImageReferences\":[\r\n        {\r\n          \"publisher\":\"Canonical\",\"offer\":\"UbuntuServer\",\"sku\":\"14.04.0-LTS\",\"version\":\"latest\"\r\n        },{\r\n          \"publisher\":\"Canonical\",\"offer\":\"UbuntuServer\",\"sku\":\"14.04.1-LTS\",\"version\":\"latest\"\r\n        },{\r\n          \"publisher\":\"Canonical\",\"offer\":\"UbuntuServer\",\"sku\":\"14.04.2-LTS\",\"version\":\"latest\"\r\n        },{\r\n          \"publisher\":\"Canonical\",\"offer\":\"UbuntuServer\",\"sku\":\"14.04.3-LTS\",\"version\":\"latest\"\r\n        },{\r\n          \"publisher\":\"Canonical\",\"offer\":\"UbuntuServer\",\"sku\":\"14.04.4-LTS\",\"version\":\"latest\"\r\n        }\r\n      ],\"osType\":\"linux\"\r\n    },{\r\n      \"id\":\"batch.node.windows amd64\",\"verifiedImageReferences\":[\r\n        {\r\n          \"publisher\":\"MicrosoftWindowsServer\",\"offer\":\"WindowsServer\",\"sku\":\"2008-R2-SP1\",\"version\":\"latest\"\r\n        },{\r\n          \"publisher\":\"MicrosoftWindowsServer\",\"offer\":\"WindowsServer\",\"sku\":\"2012-Datacenter\",\"version\":\"latest\"\r\n        },{\r\n          \"publisher\":\"MicrosoftWindowsServer\",\"offer\":\"WindowsServer\",\"sku\":\"2012-R2-Datacenter\",\"version\":\"latest\"\r\n        },{\r\n          \"publisher\":\"MicrosoftWindowsServer\",\"offer\":\"WindowsServer\",\"sku\":\"Windows-Server-Technical-Preview\",\"version\":\"latest\"\r\n        }\r\n      ],\"osType\":\"windows\"\r\n    }\r\n  ]\r\n}", { 'transfer-encoding': 'chunked',
  'content-type': 'application/json;odata=minimalmetadata',
  server: 'Microsoft-HTTPAPI/2.0',
  'request-id': '2709d2dc-c797-4a61-9b8d-899d6656c071',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  dataserviceversion: '3.0',
  date: 'Fri, 01 Apr 2016 08:42:28 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('https://batchtestnodesdk.japaneast.batch.azure.com:443')
  .get('/nodeagentskus?api-version=2016-02-01.3.0')
  .reply(200, "{\r\n  \"odata.metadata\":\"https://batchtestnodesdk.japaneast.batch.azure.com/$metadata#nodeagentskus\",\"value\":[\r\n    {\r\n      \"id\":\"batch.node.centos 7\",\"verifiedImageReferences\":[\r\n        {\r\n          \"publisher\":\"OpenLogic\",\"offer\":\"CentOS\",\"sku\":\"7.0\",\"version\":\"latest\"\r\n        },{\r\n          \"publisher\":\"OpenLogic\",\"offer\":\"CentOS\",\"sku\":\"7.1\",\"version\":\"latest\"\r\n        },{\r\n          \"publisher\":\"OpenLogic\",\"offer\":\"CentOS\",\"sku\":\"7.2\",\"version\":\"latest\"\r\n        },{\r\n          \"publisher\":\"Oracle\",\"offer\":\"Oracle-Linux-7\",\"sku\":\"OL70\",\"version\":\"latest\"\r\n        }\r\n      ],\"osType\":\"linux\"\r\n    },{\r\n      \"id\":\"batch.node.debian 8\",\"verifiedImageReferences\":[\r\n        {\r\n          \"publisher\":\"Canonical\",\"offer\":\"UbuntuServer\",\"sku\":\"15.10\",\"version\":\"latest\"\r\n        },{\r\n          \"publisher\":\"Credativ\",\"offer\":\"Debian\",\"sku\":\"8\",\"version\":\"latest\"\r\n        }\r\n      ],\"osType\":\"linux\"\r\n    },{\r\n      \"id\":\"batch.node.opensuse 13.2\",\"verifiedImageReferences\":[\r\n        {\r\n          \"publisher\":\"SUSE\",\"offer\":\"openSUSE\",\"sku\":\"13.2\",\"version\":\"latest\"\r\n        }\r\n      ],\"osType\":\"linux\"\r\n    },{\r\n      \"id\":\"batch.node.opensuse 42.1\",\"verifiedImageReferences\":[\r\n        {\r\n          \"publisher\":\"SUSE\",\"offer\":\"openSUSE-Leap\",\"sku\":\"42.1\",\"version\":\"latest\"\r\n        },{\r\n          \"publisher\":\"SUSE\",\"offer\":\"SLES\",\"sku\":\"12\",\"version\":\"latest\"\r\n        },{\r\n          \"publisher\":\"SUSE\",\"offer\":\"SLES\",\"sku\":\"12-SP1\",\"version\":\"latest\"\r\n        },{\r\n          \"publisher\":\"SUSE\",\"offer\":\"SLES-HPC\",\"sku\":\"12\",\"version\":\"latest\"\r\n        }\r\n      ],\"osType\":\"linux\"\r\n    },{\r\n      \"id\":\"batch.node.ubuntu 14.04\",\"verifiedImageReferences\":[\r\n        {\r\n          \"publisher\":\"Canonical\",\"offer\":\"UbuntuServer\",\"sku\":\"14.04.0-LTS\",\"version\":\"latest\"\r\n        },{\r\n          \"publisher\":\"Canonical\",\"offer\":\"UbuntuServer\",\"sku\":\"14.04.1-LTS\",\"version\":\"latest\"\r\n        },{\r\n          \"publisher\":\"Canonical\",\"offer\":\"UbuntuServer\",\"sku\":\"14.04.2-LTS\",\"version\":\"latest\"\r\n        },{\r\n          \"publisher\":\"Canonical\",\"offer\":\"UbuntuServer\",\"sku\":\"14.04.3-LTS\",\"version\":\"latest\"\r\n        },{\r\n          \"publisher\":\"Canonical\",\"offer\":\"UbuntuServer\",\"sku\":\"14.04.4-LTS\",\"version\":\"latest\"\r\n        }\r\n      ],\"osType\":\"linux\"\r\n    },{\r\n      \"id\":\"batch.node.windows amd64\",\"verifiedImageReferences\":[\r\n        {\r\n          \"publisher\":\"MicrosoftWindowsServer\",\"offer\":\"WindowsServer\",\"sku\":\"2008-R2-SP1\",\"version\":\"latest\"\r\n        },{\r\n          \"publisher\":\"MicrosoftWindowsServer\",\"offer\":\"WindowsServer\",\"sku\":\"2012-Datacenter\",\"version\":\"latest\"\r\n        },{\r\n          \"publisher\":\"MicrosoftWindowsServer\",\"offer\":\"WindowsServer\",\"sku\":\"2012-R2-Datacenter\",\"version\":\"latest\"\r\n        },{\r\n          \"publisher\":\"MicrosoftWindowsServer\",\"offer\":\"WindowsServer\",\"sku\":\"Windows-Server-Technical-Preview\",\"version\":\"latest\"\r\n        }\r\n      ],\"osType\":\"windows\"\r\n    }\r\n  ]\r\n}", { 'transfer-encoding': 'chunked',
  'content-type': 'application/json;odata=minimalmetadata',
  server: 'Microsoft-HTTPAPI/2.0',
  'request-id': '2709d2dc-c797-4a61-9b8d-899d6656c071',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  dataserviceversion: '3.0',
  date: 'Fri, 01 Apr 2016 08:42:28 GMT',
  connection: 'close' });
 return result; }]];