// This file has been autogenerated.

var profile = require('../../../lib/util/profile');

exports.getMockedProfile = function () {
  var newProfile = new profile.Profile();

  newProfile.addSubscription(new profile.Subscription({
    id: '53d9063d-87ae-4ea8-be90-3686c3b8669f',
    name: 'Visual Studio Ultimate with MSDN',
    user: {
      name: 'user@domain.example',
      type: 'user'
    },
    tenantId: '6e606ece-3a5a-4674-a654-d6b02bc5a51b',
    state: 'Enabled',
    registeredProviders: [],
    _eventsCount: '1',
    isDefault: true
  }, newProfile.environments['AzureCloud']));

  return newProfile;
};

exports.setEnvironment = function() {
  process.env['AZURE_ARM_TEST_LOCATION'] = 'East US 2';
  process.env['AZURE_ARM_TEST_RESOURCE_GROUP'] = 'xplattestadlarg05';
};

exports.scopes = [[function (nock) { 
var result = 
nock('http://management.azure.com:443')
  .post('/subscriptions/53d9063d-87ae-4ea8-be90-3686c3b8669f/resourceGroups/xplattestadlarg05/providers/Microsoft.Storage/storageAccounts/xplattestadls4904/listKeys?api-version=2015-06-15')
  .reply(200, "{\"key1\":\"ilS3ASXKW2HfI5NlhXyYYROAh+T0jyGuS8j5GVy/iGzwsbNSkeJmWlrufxtqlE7NHpkKtWCjalC9HPVtX5sMqw==\",\"key2\":\"sPgM1JtOokbuT+D9shRZymNSdeD/M3G/jVd/950poD4sUt9DpzARE2hg2M1/Yy+D8acGbxeyT0TIBl/KK9jucg==\"}\n", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '198',
  'content-type': 'application/json',
  expires: '-1',
  'x-ms-request-id': '8ec9c0c8-3494-4054-8b91-1c38db4e9065',
  server: 'Microsoft-Azure-Storage-Resource-Provider/1.0, Microsoft-HTTPAPI/2.0',
  'x-ms-ratelimit-remaining-subscription-writes': '1196',
  'x-ms-correlation-request-id': '8ec9c0c8-3494-4054-8b91-1c38db4e9065',
  'x-ms-routing-request-id': 'WESTUS:20160315T213554Z:8ec9c0c8-3494-4054-8b91-1c38db4e9065',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  date: 'Tue, 15 Mar 2016 21:35:53 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('https://management.azure.com:443')
  .post('/subscriptions/53d9063d-87ae-4ea8-be90-3686c3b8669f/resourceGroups/xplattestadlarg05/providers/Microsoft.Storage/storageAccounts/xplattestadls4904/listKeys?api-version=2015-06-15')
  .reply(200, "{\"key1\":\"ilS3ASXKW2HfI5NlhXyYYROAh+T0jyGuS8j5GVy/iGzwsbNSkeJmWlrufxtqlE7NHpkKtWCjalC9HPVtX5sMqw==\",\"key2\":\"sPgM1JtOokbuT+D9shRZymNSdeD/M3G/jVd/950poD4sUt9DpzARE2hg2M1/Yy+D8acGbxeyT0TIBl/KK9jucg==\"}\n", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '198',
  'content-type': 'application/json',
  expires: '-1',
  'x-ms-request-id': '8ec9c0c8-3494-4054-8b91-1c38db4e9065',
  server: 'Microsoft-Azure-Storage-Resource-Provider/1.0, Microsoft-HTTPAPI/2.0',
  'x-ms-ratelimit-remaining-subscription-writes': '1196',
  'x-ms-correlation-request-id': '8ec9c0c8-3494-4054-8b91-1c38db4e9065',
  'x-ms-routing-request-id': 'WESTUS:20160315T213554Z:8ec9c0c8-3494-4054-8b91-1c38db4e9065',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  date: 'Tue, 15 Mar 2016 21:35:53 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('http://management.azure.com:443')
  .get('/subscriptions/53d9063d-87ae-4ea8-be90-3686c3b8669f/providers/Microsoft.DataLakeAnalytics/accounts?api-version=2015-10-01-preview')
  .reply(200, "{\"value\":[{\"properties\":{\"provisioningState\":\"Succeeded\",\"state\":\"Active\",\"endpoint\":\"javaadlaacct589.azuredatalakeanalytics.net\",\"creationTime\":\"2016-03-11T19:05:12.1695607Z\",\"lastModifiedTime\":\"2016-03-11T19:06:15.7736921Z\"},\"location\":\"eastus2\",\"tags\":{\"testkey\":\"testvalue\",\"testkey2\":\"testvalue2\"},\"id\":\"/subscriptions/53d9063d-87ae-4ea8-be90-3686c3b8669f/resourceGroups/javaadlarg80/providers/Microsoft.DataLakeAnalytics/accounts/javaadlaacct589\",\"name\":\"javaadlaacct589\",\"type\":\"Microsoft.DataLakeAnalytics/accounts\"},{\"properties\":{\"provisioningState\":\"Succeeded\",\"state\":\"Active\",\"endpoint\":\"xplattestadla1269.azuredatalakeanalytics.net\",\"creationTime\":\"2016-03-15T21:35:08.9463647Z\",\"lastModifiedTime\":\"2016-03-15T21:35:47.291197Z\"},\"location\":\"eastus2\",\"tags\":{\"testtag1\":\"testvalue1\",\"testtag2\":\"testvalue2\",\"testtag3\":\"testvalue3\"},\"id\":\"/subscriptions/53d9063d-87ae-4ea8-be90-3686c3b8669f/resourceGroups/xplattestadlarg05/providers/Microsoft.DataLakeAnalytics/accounts/xplattestadla1269\",\"name\":\"xplattestadla1269\",\"type\":\"Microsoft.DataLakeAnalytics/accounts\"},{\"properties\":{\"provisioningState\":\"Succeeded\",\"state\":\"Active\",\"endpoint\":\"xplattestadla7888.azuredatalakeanalytics.net\",\"creationTime\":\"2016-03-15T21:34:33.6951238Z\",\"lastModifiedTime\":\"2016-03-15T21:34:33.6951238Z\"},\"location\":\"eastus2\",\"tags\":{},\"id\":\"/subscriptions/53d9063d-87ae-4ea8-be90-3686c3b8669f/resourceGroups/xplattestadlarg05/providers/Microsoft.DataLakeAnalytics/accounts/xplattestadla7888\",\"name\":\"xplattestadla7888\",\"type\":\"Microsoft.DataLakeAnalytics/accounts\"}]}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '1558',
  'content-type': 'application/json',
  expires: '-1',
  'x-ms-request-id': '7bda4378-d62e-4e93-9d23-c7c2129678fd',
  server: 'Microsoft-IIS/8.5',
  'x-aspnet-version': '4.0.30319',
  'x-powered-by': 'ASP.NET',
  'x-ms-ratelimit-remaining-subscription-reads': '14997',
  'x-ms-correlation-request-id': '0f3a5e18-ea10-4038-9c88-62cf79dd3ed6',
  'x-ms-routing-request-id': 'WESTUS:20160315T213555Z:0f3a5e18-ea10-4038-9c88-62cf79dd3ed6',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  date: 'Tue, 15 Mar 2016 21:35:54 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('https://management.azure.com:443')
  .get('/subscriptions/53d9063d-87ae-4ea8-be90-3686c3b8669f/providers/Microsoft.DataLakeAnalytics/accounts?api-version=2015-10-01-preview')
  .reply(200, "{\"value\":[{\"properties\":{\"provisioningState\":\"Succeeded\",\"state\":\"Active\",\"endpoint\":\"javaadlaacct589.azuredatalakeanalytics.net\",\"creationTime\":\"2016-03-11T19:05:12.1695607Z\",\"lastModifiedTime\":\"2016-03-11T19:06:15.7736921Z\"},\"location\":\"eastus2\",\"tags\":{\"testkey\":\"testvalue\",\"testkey2\":\"testvalue2\"},\"id\":\"/subscriptions/53d9063d-87ae-4ea8-be90-3686c3b8669f/resourceGroups/javaadlarg80/providers/Microsoft.DataLakeAnalytics/accounts/javaadlaacct589\",\"name\":\"javaadlaacct589\",\"type\":\"Microsoft.DataLakeAnalytics/accounts\"},{\"properties\":{\"provisioningState\":\"Succeeded\",\"state\":\"Active\",\"endpoint\":\"xplattestadla1269.azuredatalakeanalytics.net\",\"creationTime\":\"2016-03-15T21:35:08.9463647Z\",\"lastModifiedTime\":\"2016-03-15T21:35:47.291197Z\"},\"location\":\"eastus2\",\"tags\":{\"testtag1\":\"testvalue1\",\"testtag2\":\"testvalue2\",\"testtag3\":\"testvalue3\"},\"id\":\"/subscriptions/53d9063d-87ae-4ea8-be90-3686c3b8669f/resourceGroups/xplattestadlarg05/providers/Microsoft.DataLakeAnalytics/accounts/xplattestadla1269\",\"name\":\"xplattestadla1269\",\"type\":\"Microsoft.DataLakeAnalytics/accounts\"},{\"properties\":{\"provisioningState\":\"Succeeded\",\"state\":\"Active\",\"endpoint\":\"xplattestadla7888.azuredatalakeanalytics.net\",\"creationTime\":\"2016-03-15T21:34:33.6951238Z\",\"lastModifiedTime\":\"2016-03-15T21:34:33.6951238Z\"},\"location\":\"eastus2\",\"tags\":{},\"id\":\"/subscriptions/53d9063d-87ae-4ea8-be90-3686c3b8669f/resourceGroups/xplattestadlarg05/providers/Microsoft.DataLakeAnalytics/accounts/xplattestadla7888\",\"name\":\"xplattestadla7888\",\"type\":\"Microsoft.DataLakeAnalytics/accounts\"}]}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '1558',
  'content-type': 'application/json',
  expires: '-1',
  'x-ms-request-id': '7bda4378-d62e-4e93-9d23-c7c2129678fd',
  server: 'Microsoft-IIS/8.5',
  'x-aspnet-version': '4.0.30319',
  'x-powered-by': 'ASP.NET',
  'x-ms-ratelimit-remaining-subscription-reads': '14997',
  'x-ms-correlation-request-id': '0f3a5e18-ea10-4038-9c88-62cf79dd3ed6',
  'x-ms-routing-request-id': 'WESTUS:20160315T213555Z:0f3a5e18-ea10-4038-9c88-62cf79dd3ed6',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  date: 'Tue, 15 Mar 2016 21:35:54 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('http://management.azure.com:443')
  .filteringRequestBody(function (path) { return '*';})
.put('/subscriptions/53d9063d-87ae-4ea8-be90-3686c3b8669f/resourceGroups/xplattestadlarg05/providers/Microsoft.DataLakeAnalytics/accounts/xplattestadla1269/StorageAccounts/xplattestadls4904?api-version=2015-10-01-preview', '*')
  .reply(200, "{\"properties\":{\"suffix\":\"core.windows.net\"},\"id\":\"/subscriptions/53d9063d-87ae-4ea8-be90-3686c3b8669f/resourceGroups/xplattestadlarg05/providers/Microsoft.DataLakeAnalytics/accounts/xplattestadla1269/storageAccounts/xplattestadls4904\",\"name\":\"xplattestadls4904\",\"type\":\"Microsoft.DataLakeAnalytics/accounts/storageAccounts\"}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '324',
  'content-type': 'application/json',
  expires: '-1',
  'x-ms-request-id': '4f6c113d-d397-4ec0-961d-90b335eb7fd5',
  server: 'Microsoft-IIS/8.5',
  'x-aspnet-version': '4.0.30319',
  'x-powered-by': 'ASP.NET',
  'x-ms-ratelimit-remaining-subscription-writes': '1199',
  'x-ms-correlation-request-id': '68d86d91-713d-47e5-b52a-5226e554cc27',
  'x-ms-routing-request-id': 'WESTUS:20160315T213556Z:68d86d91-713d-47e5-b52a-5226e554cc27',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  date: 'Tue, 15 Mar 2016 21:35:55 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('https://management.azure.com:443')
  .filteringRequestBody(function (path) { return '*';})
.put('/subscriptions/53d9063d-87ae-4ea8-be90-3686c3b8669f/resourceGroups/xplattestadlarg05/providers/Microsoft.DataLakeAnalytics/accounts/xplattestadla1269/StorageAccounts/xplattestadls4904?api-version=2015-10-01-preview', '*')
  .reply(200, "{\"properties\":{\"suffix\":\"core.windows.net\"},\"id\":\"/subscriptions/53d9063d-87ae-4ea8-be90-3686c3b8669f/resourceGroups/xplattestadlarg05/providers/Microsoft.DataLakeAnalytics/accounts/xplattestadla1269/storageAccounts/xplattestadls4904\",\"name\":\"xplattestadls4904\",\"type\":\"Microsoft.DataLakeAnalytics/accounts/storageAccounts\"}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '324',
  'content-type': 'application/json',
  expires: '-1',
  'x-ms-request-id': '4f6c113d-d397-4ec0-961d-90b335eb7fd5',
  server: 'Microsoft-IIS/8.5',
  'x-aspnet-version': '4.0.30319',
  'x-powered-by': 'ASP.NET',
  'x-ms-ratelimit-remaining-subscription-writes': '1199',
  'x-ms-correlation-request-id': '68d86d91-713d-47e5-b52a-5226e554cc27',
  'x-ms-routing-request-id': 'WESTUS:20160315T213556Z:68d86d91-713d-47e5-b52a-5226e554cc27',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  date: 'Tue, 15 Mar 2016 21:35:55 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('http://management.azure.com:443')
  .get('/subscriptions/53d9063d-87ae-4ea8-be90-3686c3b8669f/providers/Microsoft.DataLakeAnalytics/accounts?api-version=2015-10-01-preview')
  .reply(200, "{\"value\":[{\"properties\":{\"provisioningState\":\"Succeeded\",\"state\":\"Active\",\"endpoint\":\"javaadlaacct589.azuredatalakeanalytics.net\",\"creationTime\":\"2016-03-11T19:05:12.1695607Z\",\"lastModifiedTime\":\"2016-03-11T19:06:15.7736921Z\"},\"location\":\"eastus2\",\"tags\":{\"testkey\":\"testvalue\",\"testkey2\":\"testvalue2\"},\"id\":\"/subscriptions/53d9063d-87ae-4ea8-be90-3686c3b8669f/resourceGroups/javaadlarg80/providers/Microsoft.DataLakeAnalytics/accounts/javaadlaacct589\",\"name\":\"javaadlaacct589\",\"type\":\"Microsoft.DataLakeAnalytics/accounts\"},{\"properties\":{\"provisioningState\":\"Succeeded\",\"state\":\"Active\",\"endpoint\":\"xplattestadla1269.azuredatalakeanalytics.net\",\"creationTime\":\"2016-03-15T21:35:08.9463647Z\",\"lastModifiedTime\":\"2016-03-15T21:35:47.291197Z\"},\"location\":\"eastus2\",\"tags\":{\"testtag1\":\"testvalue1\",\"testtag2\":\"testvalue2\",\"testtag3\":\"testvalue3\"},\"id\":\"/subscriptions/53d9063d-87ae-4ea8-be90-3686c3b8669f/resourceGroups/xplattestadlarg05/providers/Microsoft.DataLakeAnalytics/accounts/xplattestadla1269\",\"name\":\"xplattestadla1269\",\"type\":\"Microsoft.DataLakeAnalytics/accounts\"},{\"properties\":{\"provisioningState\":\"Succeeded\",\"state\":\"Active\",\"endpoint\":\"xplattestadla7888.azuredatalakeanalytics.net\",\"creationTime\":\"2016-03-15T21:34:33.6951238Z\",\"lastModifiedTime\":\"2016-03-15T21:34:33.6951238Z\"},\"location\":\"eastus2\",\"tags\":{},\"id\":\"/subscriptions/53d9063d-87ae-4ea8-be90-3686c3b8669f/resourceGroups/xplattestadlarg05/providers/Microsoft.DataLakeAnalytics/accounts/xplattestadla7888\",\"name\":\"xplattestadla7888\",\"type\":\"Microsoft.DataLakeAnalytics/accounts\"}]}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '1558',
  'content-type': 'application/json',
  expires: '-1',
  'x-ms-request-id': '85991e16-7f95-435f-8436-9febb64a1fc0',
  server: 'Microsoft-IIS/8.5',
  'x-aspnet-version': '4.0.30319',
  'x-powered-by': 'ASP.NET',
  'x-ms-ratelimit-remaining-subscription-reads': '14996',
  'x-ms-correlation-request-id': 'ce019167-16ce-4b88-9a9c-c55e202897a6',
  'x-ms-routing-request-id': 'WESTUS:20160315T213557Z:ce019167-16ce-4b88-9a9c-c55e202897a6',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  date: 'Tue, 15 Mar 2016 21:35:56 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('https://management.azure.com:443')
  .get('/subscriptions/53d9063d-87ae-4ea8-be90-3686c3b8669f/providers/Microsoft.DataLakeAnalytics/accounts?api-version=2015-10-01-preview')
  .reply(200, "{\"value\":[{\"properties\":{\"provisioningState\":\"Succeeded\",\"state\":\"Active\",\"endpoint\":\"javaadlaacct589.azuredatalakeanalytics.net\",\"creationTime\":\"2016-03-11T19:05:12.1695607Z\",\"lastModifiedTime\":\"2016-03-11T19:06:15.7736921Z\"},\"location\":\"eastus2\",\"tags\":{\"testkey\":\"testvalue\",\"testkey2\":\"testvalue2\"},\"id\":\"/subscriptions/53d9063d-87ae-4ea8-be90-3686c3b8669f/resourceGroups/javaadlarg80/providers/Microsoft.DataLakeAnalytics/accounts/javaadlaacct589\",\"name\":\"javaadlaacct589\",\"type\":\"Microsoft.DataLakeAnalytics/accounts\"},{\"properties\":{\"provisioningState\":\"Succeeded\",\"state\":\"Active\",\"endpoint\":\"xplattestadla1269.azuredatalakeanalytics.net\",\"creationTime\":\"2016-03-15T21:35:08.9463647Z\",\"lastModifiedTime\":\"2016-03-15T21:35:47.291197Z\"},\"location\":\"eastus2\",\"tags\":{\"testtag1\":\"testvalue1\",\"testtag2\":\"testvalue2\",\"testtag3\":\"testvalue3\"},\"id\":\"/subscriptions/53d9063d-87ae-4ea8-be90-3686c3b8669f/resourceGroups/xplattestadlarg05/providers/Microsoft.DataLakeAnalytics/accounts/xplattestadla1269\",\"name\":\"xplattestadla1269\",\"type\":\"Microsoft.DataLakeAnalytics/accounts\"},{\"properties\":{\"provisioningState\":\"Succeeded\",\"state\":\"Active\",\"endpoint\":\"xplattestadla7888.azuredatalakeanalytics.net\",\"creationTime\":\"2016-03-15T21:34:33.6951238Z\",\"lastModifiedTime\":\"2016-03-15T21:34:33.6951238Z\"},\"location\":\"eastus2\",\"tags\":{},\"id\":\"/subscriptions/53d9063d-87ae-4ea8-be90-3686c3b8669f/resourceGroups/xplattestadlarg05/providers/Microsoft.DataLakeAnalytics/accounts/xplattestadla7888\",\"name\":\"xplattestadla7888\",\"type\":\"Microsoft.DataLakeAnalytics/accounts\"}]}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '1558',
  'content-type': 'application/json',
  expires: '-1',
  'x-ms-request-id': '85991e16-7f95-435f-8436-9febb64a1fc0',
  server: 'Microsoft-IIS/8.5',
  'x-aspnet-version': '4.0.30319',
  'x-powered-by': 'ASP.NET',
  'x-ms-ratelimit-remaining-subscription-reads': '14996',
  'x-ms-correlation-request-id': 'ce019167-16ce-4b88-9a9c-c55e202897a6',
  'x-ms-routing-request-id': 'WESTUS:20160315T213557Z:ce019167-16ce-4b88-9a9c-c55e202897a6',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  date: 'Tue, 15 Mar 2016 21:35:56 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('http://management.azure.com:443')
  .get('/subscriptions/53d9063d-87ae-4ea8-be90-3686c3b8669f/resourceGroups/xplattestadlarg05/providers/Microsoft.DataLakeAnalytics/accounts/xplattestadla1269?api-version=2015-10-01-preview')
  .reply(200, "{\"properties\":{\"defaultDataLakeStoreAccount\":\"xplattestadls4299\",\"dataLakeStoreAccounts\":[{\"properties\":{\"suffix\":\"azuredatalakestore.net\"},\"name\":\"xplattestadls4299\"}],\"storageAccounts\":[{\"properties\":{\"suffix\":\"core.windows.net\"},\"name\":\"xplattestadls4904\"}],\"maxDegreeOfParallelism\":20,\"maxJobCount\":3,\"provisioningState\":\"Succeeded\",\"state\":\"Active\",\"endpoint\":\"xplattestadla1269.azuredatalakeanalytics.net\",\"creationTime\":\"2016-03-15T21:35:08.9463647Z\",\"lastModifiedTime\":\"2016-03-15T21:35:47.291197Z\"},\"location\":\"eastus2\",\"tags\":{\"testtag1\":\"testvalue1\",\"testtag2\":\"testvalue2\",\"testtag3\":\"testvalue3\"},\"id\":\"/subscriptions/53d9063d-87ae-4ea8-be90-3686c3b8669f/resourceGroups/xplattestadlarg05/providers/Microsoft.DataLakeAnalytics/accounts/xplattestadla1269\",\"name\":\"xplattestadla1269\",\"type\":\"Microsoft.DataLakeAnalytics/accounts\"}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '840',
  'content-type': 'application/json',
  expires: '-1',
  'x-ms-request-id': 'c4062e3a-9744-4da7-bd71-ad98a47a4c88',
  server: 'Microsoft-IIS/8.5',
  'x-aspnet-version': '4.0.30319',
  'x-powered-by': 'ASP.NET',
  'x-ms-ratelimit-remaining-subscription-reads': '14997',
  'x-ms-correlation-request-id': 'db81e45c-24d4-4d89-a69e-8b021e0d7d33',
  'x-ms-routing-request-id': 'WESTUS:20160315T213557Z:db81e45c-24d4-4d89-a69e-8b021e0d7d33',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  date: 'Tue, 15 Mar 2016 21:35:56 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('https://management.azure.com:443')
  .get('/subscriptions/53d9063d-87ae-4ea8-be90-3686c3b8669f/resourceGroups/xplattestadlarg05/providers/Microsoft.DataLakeAnalytics/accounts/xplattestadla1269?api-version=2015-10-01-preview')
  .reply(200, "{\"properties\":{\"defaultDataLakeStoreAccount\":\"xplattestadls4299\",\"dataLakeStoreAccounts\":[{\"properties\":{\"suffix\":\"azuredatalakestore.net\"},\"name\":\"xplattestadls4299\"}],\"storageAccounts\":[{\"properties\":{\"suffix\":\"core.windows.net\"},\"name\":\"xplattestadls4904\"}],\"maxDegreeOfParallelism\":20,\"maxJobCount\":3,\"provisioningState\":\"Succeeded\",\"state\":\"Active\",\"endpoint\":\"xplattestadla1269.azuredatalakeanalytics.net\",\"creationTime\":\"2016-03-15T21:35:08.9463647Z\",\"lastModifiedTime\":\"2016-03-15T21:35:47.291197Z\"},\"location\":\"eastus2\",\"tags\":{\"testtag1\":\"testvalue1\",\"testtag2\":\"testvalue2\",\"testtag3\":\"testvalue3\"},\"id\":\"/subscriptions/53d9063d-87ae-4ea8-be90-3686c3b8669f/resourceGroups/xplattestadlarg05/providers/Microsoft.DataLakeAnalytics/accounts/xplattestadla1269\",\"name\":\"xplattestadla1269\",\"type\":\"Microsoft.DataLakeAnalytics/accounts\"}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '840',
  'content-type': 'application/json',
  expires: '-1',
  'x-ms-request-id': 'c4062e3a-9744-4da7-bd71-ad98a47a4c88',
  server: 'Microsoft-IIS/8.5',
  'x-aspnet-version': '4.0.30319',
  'x-powered-by': 'ASP.NET',
  'x-ms-ratelimit-remaining-subscription-reads': '14997',
  'x-ms-correlation-request-id': 'db81e45c-24d4-4d89-a69e-8b021e0d7d33',
  'x-ms-routing-request-id': 'WESTUS:20160315T213557Z:db81e45c-24d4-4d89-a69e-8b021e0d7d33',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  date: 'Tue, 15 Mar 2016 21:35:56 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('http://management.azure.com:443')
  .get('/subscriptions/53d9063d-87ae-4ea8-be90-3686c3b8669f/providers/Microsoft.DataLakeAnalytics/accounts?api-version=2015-10-01-preview')
  .reply(200, "{\"value\":[{\"properties\":{\"provisioningState\":\"Succeeded\",\"state\":\"Active\",\"endpoint\":\"javaadlaacct589.azuredatalakeanalytics.net\",\"creationTime\":\"2016-03-11T19:05:12.1695607Z\",\"lastModifiedTime\":\"2016-03-11T19:06:15.7736921Z\"},\"location\":\"eastus2\",\"tags\":{\"testkey\":\"testvalue\",\"testkey2\":\"testvalue2\"},\"id\":\"/subscriptions/53d9063d-87ae-4ea8-be90-3686c3b8669f/resourceGroups/javaadlarg80/providers/Microsoft.DataLakeAnalytics/accounts/javaadlaacct589\",\"name\":\"javaadlaacct589\",\"type\":\"Microsoft.DataLakeAnalytics/accounts\"},{\"properties\":{\"provisioningState\":\"Succeeded\",\"state\":\"Active\",\"endpoint\":\"xplattestadla1269.azuredatalakeanalytics.net\",\"creationTime\":\"2016-03-15T21:35:08.9463647Z\",\"lastModifiedTime\":\"2016-03-15T21:35:47.291197Z\"},\"location\":\"eastus2\",\"tags\":{\"testtag1\":\"testvalue1\",\"testtag2\":\"testvalue2\",\"testtag3\":\"testvalue3\"},\"id\":\"/subscriptions/53d9063d-87ae-4ea8-be90-3686c3b8669f/resourceGroups/xplattestadlarg05/providers/Microsoft.DataLakeAnalytics/accounts/xplattestadla1269\",\"name\":\"xplattestadla1269\",\"type\":\"Microsoft.DataLakeAnalytics/accounts\"},{\"properties\":{\"provisioningState\":\"Succeeded\",\"state\":\"Active\",\"endpoint\":\"xplattestadla7888.azuredatalakeanalytics.net\",\"creationTime\":\"2016-03-15T21:34:33.6951238Z\",\"lastModifiedTime\":\"2016-03-15T21:34:33.6951238Z\"},\"location\":\"eastus2\",\"tags\":{},\"id\":\"/subscriptions/53d9063d-87ae-4ea8-be90-3686c3b8669f/resourceGroups/xplattestadlarg05/providers/Microsoft.DataLakeAnalytics/accounts/xplattestadla7888\",\"name\":\"xplattestadla7888\",\"type\":\"Microsoft.DataLakeAnalytics/accounts\"}]}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '1558',
  'content-type': 'application/json',
  expires: '-1',
  'x-ms-request-id': 'c7a87a6f-8f6b-4373-8777-dd5730320097',
  server: 'Microsoft-IIS/8.5',
  'x-aspnet-version': '4.0.30319',
  'x-powered-by': 'ASP.NET',
  'x-ms-ratelimit-remaining-subscription-reads': '14997',
  'x-ms-correlation-request-id': '71967bd7-6828-4a61-b7de-9da7f4a211bb',
  'x-ms-routing-request-id': 'WESTUS:20160315T213558Z:71967bd7-6828-4a61-b7de-9da7f4a211bb',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  date: 'Tue, 15 Mar 2016 21:35:57 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('https://management.azure.com:443')
  .get('/subscriptions/53d9063d-87ae-4ea8-be90-3686c3b8669f/providers/Microsoft.DataLakeAnalytics/accounts?api-version=2015-10-01-preview')
  .reply(200, "{\"value\":[{\"properties\":{\"provisioningState\":\"Succeeded\",\"state\":\"Active\",\"endpoint\":\"javaadlaacct589.azuredatalakeanalytics.net\",\"creationTime\":\"2016-03-11T19:05:12.1695607Z\",\"lastModifiedTime\":\"2016-03-11T19:06:15.7736921Z\"},\"location\":\"eastus2\",\"tags\":{\"testkey\":\"testvalue\",\"testkey2\":\"testvalue2\"},\"id\":\"/subscriptions/53d9063d-87ae-4ea8-be90-3686c3b8669f/resourceGroups/javaadlarg80/providers/Microsoft.DataLakeAnalytics/accounts/javaadlaacct589\",\"name\":\"javaadlaacct589\",\"type\":\"Microsoft.DataLakeAnalytics/accounts\"},{\"properties\":{\"provisioningState\":\"Succeeded\",\"state\":\"Active\",\"endpoint\":\"xplattestadla1269.azuredatalakeanalytics.net\",\"creationTime\":\"2016-03-15T21:35:08.9463647Z\",\"lastModifiedTime\":\"2016-03-15T21:35:47.291197Z\"},\"location\":\"eastus2\",\"tags\":{\"testtag1\":\"testvalue1\",\"testtag2\":\"testvalue2\",\"testtag3\":\"testvalue3\"},\"id\":\"/subscriptions/53d9063d-87ae-4ea8-be90-3686c3b8669f/resourceGroups/xplattestadlarg05/providers/Microsoft.DataLakeAnalytics/accounts/xplattestadla1269\",\"name\":\"xplattestadla1269\",\"type\":\"Microsoft.DataLakeAnalytics/accounts\"},{\"properties\":{\"provisioningState\":\"Succeeded\",\"state\":\"Active\",\"endpoint\":\"xplattestadla7888.azuredatalakeanalytics.net\",\"creationTime\":\"2016-03-15T21:34:33.6951238Z\",\"lastModifiedTime\":\"2016-03-15T21:34:33.6951238Z\"},\"location\":\"eastus2\",\"tags\":{},\"id\":\"/subscriptions/53d9063d-87ae-4ea8-be90-3686c3b8669f/resourceGroups/xplattestadlarg05/providers/Microsoft.DataLakeAnalytics/accounts/xplattestadla7888\",\"name\":\"xplattestadla7888\",\"type\":\"Microsoft.DataLakeAnalytics/accounts\"}]}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '1558',
  'content-type': 'application/json',
  expires: '-1',
  'x-ms-request-id': 'c7a87a6f-8f6b-4373-8777-dd5730320097',
  server: 'Microsoft-IIS/8.5',
  'x-aspnet-version': '4.0.30319',
  'x-powered-by': 'ASP.NET',
  'x-ms-ratelimit-remaining-subscription-reads': '14997',
  'x-ms-correlation-request-id': '71967bd7-6828-4a61-b7de-9da7f4a211bb',
  'x-ms-routing-request-id': 'WESTUS:20160315T213558Z:71967bd7-6828-4a61-b7de-9da7f4a211bb',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  date: 'Tue, 15 Mar 2016 21:35:57 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('http://management.azure.com:443')
  .delete('/subscriptions/53d9063d-87ae-4ea8-be90-3686c3b8669f/resourceGroups/xplattestadlarg05/providers/Microsoft.DataLakeAnalytics/accounts/xplattestadla1269/StorageAccounts/xplattestadls4904?api-version=2015-10-01-preview')
  .reply(200, "", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '0',
  expires: '-1',
  'x-ms-request-id': 'da8958f1-5fdd-4b87-86dc-612876161196',
  server: 'Microsoft-IIS/8.5',
  'x-aspnet-version': '4.0.30319',
  'x-powered-by': 'ASP.NET',
  'x-ms-ratelimit-remaining-subscription-writes': '1199',
  'x-ms-correlation-request-id': '37a83c14-59c5-4c0e-8582-626ffe7f6538',
  'x-ms-routing-request-id': 'WESTUS:20160315T213559Z:37a83c14-59c5-4c0e-8582-626ffe7f6538',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  date: 'Tue, 15 Mar 2016 21:35:58 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('https://management.azure.com:443')
  .delete('/subscriptions/53d9063d-87ae-4ea8-be90-3686c3b8669f/resourceGroups/xplattestadlarg05/providers/Microsoft.DataLakeAnalytics/accounts/xplattestadla1269/StorageAccounts/xplattestadls4904?api-version=2015-10-01-preview')
  .reply(200, "", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '0',
  expires: '-1',
  'x-ms-request-id': 'da8958f1-5fdd-4b87-86dc-612876161196',
  server: 'Microsoft-IIS/8.5',
  'x-aspnet-version': '4.0.30319',
  'x-powered-by': 'ASP.NET',
  'x-ms-ratelimit-remaining-subscription-writes': '1199',
  'x-ms-correlation-request-id': '37a83c14-59c5-4c0e-8582-626ffe7f6538',
  'x-ms-routing-request-id': 'WESTUS:20160315T213559Z:37a83c14-59c5-4c0e-8582-626ffe7f6538',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  date: 'Tue, 15 Mar 2016 21:35:58 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('http://management.azure.com:443')
  .get('/subscriptions/53d9063d-87ae-4ea8-be90-3686c3b8669f/providers/Microsoft.DataLakeAnalytics/accounts?api-version=2015-10-01-preview')
  .reply(200, "{\"value\":[{\"properties\":{\"provisioningState\":\"Succeeded\",\"state\":\"Active\",\"endpoint\":\"javaadlaacct589.azuredatalakeanalytics.net\",\"creationTime\":\"2016-03-11T19:05:12.1695607Z\",\"lastModifiedTime\":\"2016-03-11T19:06:15.7736921Z\"},\"location\":\"eastus2\",\"tags\":{\"testkey\":\"testvalue\",\"testkey2\":\"testvalue2\"},\"id\":\"/subscriptions/53d9063d-87ae-4ea8-be90-3686c3b8669f/resourceGroups/javaadlarg80/providers/Microsoft.DataLakeAnalytics/accounts/javaadlaacct589\",\"name\":\"javaadlaacct589\",\"type\":\"Microsoft.DataLakeAnalytics/accounts\"},{\"properties\":{\"provisioningState\":\"Succeeded\",\"state\":\"Active\",\"endpoint\":\"xplattestadla1269.azuredatalakeanalytics.net\",\"creationTime\":\"2016-03-15T21:35:08.9463647Z\",\"lastModifiedTime\":\"2016-03-15T21:35:47.291197Z\"},\"location\":\"eastus2\",\"tags\":{\"testtag1\":\"testvalue1\",\"testtag2\":\"testvalue2\",\"testtag3\":\"testvalue3\"},\"id\":\"/subscriptions/53d9063d-87ae-4ea8-be90-3686c3b8669f/resourceGroups/xplattestadlarg05/providers/Microsoft.DataLakeAnalytics/accounts/xplattestadla1269\",\"name\":\"xplattestadla1269\",\"type\":\"Microsoft.DataLakeAnalytics/accounts\"},{\"properties\":{\"provisioningState\":\"Succeeded\",\"state\":\"Active\",\"endpoint\":\"xplattestadla7888.azuredatalakeanalytics.net\",\"creationTime\":\"2016-03-15T21:34:33.6951238Z\",\"lastModifiedTime\":\"2016-03-15T21:34:33.6951238Z\"},\"location\":\"eastus2\",\"tags\":{},\"id\":\"/subscriptions/53d9063d-87ae-4ea8-be90-3686c3b8669f/resourceGroups/xplattestadlarg05/providers/Microsoft.DataLakeAnalytics/accounts/xplattestadla7888\",\"name\":\"xplattestadla7888\",\"type\":\"Microsoft.DataLakeAnalytics/accounts\"}]}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '1558',
  'content-type': 'application/json',
  expires: '-1',
  'x-ms-request-id': 'caad6aa8-cd3f-4e88-833d-0bb98fd68091',
  server: 'Microsoft-IIS/8.5',
  'x-aspnet-version': '4.0.30319',
  'x-powered-by': 'ASP.NET',
  'x-ms-ratelimit-remaining-subscription-reads': '14994',
  'x-ms-correlation-request-id': 'd75937c8-92dd-488f-a51c-3575a1fa3df3',
  'x-ms-routing-request-id': 'WESTUS:20160315T213600Z:d75937c8-92dd-488f-a51c-3575a1fa3df3',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  date: 'Tue, 15 Mar 2016 21:35:59 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('https://management.azure.com:443')
  .get('/subscriptions/53d9063d-87ae-4ea8-be90-3686c3b8669f/providers/Microsoft.DataLakeAnalytics/accounts?api-version=2015-10-01-preview')
  .reply(200, "{\"value\":[{\"properties\":{\"provisioningState\":\"Succeeded\",\"state\":\"Active\",\"endpoint\":\"javaadlaacct589.azuredatalakeanalytics.net\",\"creationTime\":\"2016-03-11T19:05:12.1695607Z\",\"lastModifiedTime\":\"2016-03-11T19:06:15.7736921Z\"},\"location\":\"eastus2\",\"tags\":{\"testkey\":\"testvalue\",\"testkey2\":\"testvalue2\"},\"id\":\"/subscriptions/53d9063d-87ae-4ea8-be90-3686c3b8669f/resourceGroups/javaadlarg80/providers/Microsoft.DataLakeAnalytics/accounts/javaadlaacct589\",\"name\":\"javaadlaacct589\",\"type\":\"Microsoft.DataLakeAnalytics/accounts\"},{\"properties\":{\"provisioningState\":\"Succeeded\",\"state\":\"Active\",\"endpoint\":\"xplattestadla1269.azuredatalakeanalytics.net\",\"creationTime\":\"2016-03-15T21:35:08.9463647Z\",\"lastModifiedTime\":\"2016-03-15T21:35:47.291197Z\"},\"location\":\"eastus2\",\"tags\":{\"testtag1\":\"testvalue1\",\"testtag2\":\"testvalue2\",\"testtag3\":\"testvalue3\"},\"id\":\"/subscriptions/53d9063d-87ae-4ea8-be90-3686c3b8669f/resourceGroups/xplattestadlarg05/providers/Microsoft.DataLakeAnalytics/accounts/xplattestadla1269\",\"name\":\"xplattestadla1269\",\"type\":\"Microsoft.DataLakeAnalytics/accounts\"},{\"properties\":{\"provisioningState\":\"Succeeded\",\"state\":\"Active\",\"endpoint\":\"xplattestadla7888.azuredatalakeanalytics.net\",\"creationTime\":\"2016-03-15T21:34:33.6951238Z\",\"lastModifiedTime\":\"2016-03-15T21:34:33.6951238Z\"},\"location\":\"eastus2\",\"tags\":{},\"id\":\"/subscriptions/53d9063d-87ae-4ea8-be90-3686c3b8669f/resourceGroups/xplattestadlarg05/providers/Microsoft.DataLakeAnalytics/accounts/xplattestadla7888\",\"name\":\"xplattestadla7888\",\"type\":\"Microsoft.DataLakeAnalytics/accounts\"}]}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '1558',
  'content-type': 'application/json',
  expires: '-1',
  'x-ms-request-id': 'caad6aa8-cd3f-4e88-833d-0bb98fd68091',
  server: 'Microsoft-IIS/8.5',
  'x-aspnet-version': '4.0.30319',
  'x-powered-by': 'ASP.NET',
  'x-ms-ratelimit-remaining-subscription-reads': '14994',
  'x-ms-correlation-request-id': 'd75937c8-92dd-488f-a51c-3575a1fa3df3',
  'x-ms-routing-request-id': 'WESTUS:20160315T213600Z:d75937c8-92dd-488f-a51c-3575a1fa3df3',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  date: 'Tue, 15 Mar 2016 21:35:59 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('http://management.azure.com:443')
  .get('/subscriptions/53d9063d-87ae-4ea8-be90-3686c3b8669f/resourceGroups/xplattestadlarg05/providers/Microsoft.DataLakeAnalytics/accounts/xplattestadla1269?api-version=2015-10-01-preview')
  .reply(200, "{\"properties\":{\"defaultDataLakeStoreAccount\":\"xplattestadls4299\",\"dataLakeStoreAccounts\":[{\"properties\":{\"suffix\":\"azuredatalakestore.net\"},\"name\":\"xplattestadls4299\"}],\"storageAccounts\":[],\"maxDegreeOfParallelism\":20,\"maxJobCount\":3,\"provisioningState\":\"Succeeded\",\"state\":\"Active\",\"endpoint\":\"xplattestadla1269.azuredatalakeanalytics.net\",\"creationTime\":\"2016-03-15T21:35:08.9463647Z\",\"lastModifiedTime\":\"2016-03-15T21:35:47.291197Z\"},\"location\":\"eastus2\",\"tags\":{\"testtag1\":\"testvalue1\",\"testtag2\":\"testvalue2\",\"testtag3\":\"testvalue3\"},\"id\":\"/subscriptions/53d9063d-87ae-4ea8-be90-3686c3b8669f/resourceGroups/xplattestadlarg05/providers/Microsoft.DataLakeAnalytics/accounts/xplattestadla1269\",\"name\":\"xplattestadla1269\",\"type\":\"Microsoft.DataLakeAnalytics/accounts\"}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '769',
  'content-type': 'application/json',
  expires: '-1',
  'x-ms-request-id': '36a42c37-6322-4a4d-8bcd-7d2eb5e5cee0',
  server: 'Microsoft-IIS/8.5',
  'x-aspnet-version': '4.0.30319',
  'x-powered-by': 'ASP.NET',
  'x-ms-ratelimit-remaining-subscription-reads': '14991',
  'x-ms-correlation-request-id': '955813cd-7c13-43af-b475-3b5dbb12ad62',
  'x-ms-routing-request-id': 'WESTUS:20160315T213601Z:955813cd-7c13-43af-b475-3b5dbb12ad62',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  date: 'Tue, 15 Mar 2016 21:36:01 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('https://management.azure.com:443')
  .get('/subscriptions/53d9063d-87ae-4ea8-be90-3686c3b8669f/resourceGroups/xplattestadlarg05/providers/Microsoft.DataLakeAnalytics/accounts/xplattestadla1269?api-version=2015-10-01-preview')
  .reply(200, "{\"properties\":{\"defaultDataLakeStoreAccount\":\"xplattestadls4299\",\"dataLakeStoreAccounts\":[{\"properties\":{\"suffix\":\"azuredatalakestore.net\"},\"name\":\"xplattestadls4299\"}],\"storageAccounts\":[],\"maxDegreeOfParallelism\":20,\"maxJobCount\":3,\"provisioningState\":\"Succeeded\",\"state\":\"Active\",\"endpoint\":\"xplattestadla1269.azuredatalakeanalytics.net\",\"creationTime\":\"2016-03-15T21:35:08.9463647Z\",\"lastModifiedTime\":\"2016-03-15T21:35:47.291197Z\"},\"location\":\"eastus2\",\"tags\":{\"testtag1\":\"testvalue1\",\"testtag2\":\"testvalue2\",\"testtag3\":\"testvalue3\"},\"id\":\"/subscriptions/53d9063d-87ae-4ea8-be90-3686c3b8669f/resourceGroups/xplattestadlarg05/providers/Microsoft.DataLakeAnalytics/accounts/xplattestadla1269\",\"name\":\"xplattestadla1269\",\"type\":\"Microsoft.DataLakeAnalytics/accounts\"}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '769',
  'content-type': 'application/json',
  expires: '-1',
  'x-ms-request-id': '36a42c37-6322-4a4d-8bcd-7d2eb5e5cee0',
  server: 'Microsoft-IIS/8.5',
  'x-aspnet-version': '4.0.30319',
  'x-powered-by': 'ASP.NET',
  'x-ms-ratelimit-remaining-subscription-reads': '14991',
  'x-ms-correlation-request-id': '955813cd-7c13-43af-b475-3b5dbb12ad62',
  'x-ms-routing-request-id': 'WESTUS:20160315T213601Z:955813cd-7c13-43af-b475-3b5dbb12ad62',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  date: 'Tue, 15 Mar 2016 21:36:01 GMT',
  connection: 'close' });
 return result; }]];