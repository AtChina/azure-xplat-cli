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
  .get('/subscriptions/53d9063d-87ae-4ea8-be90-3686c3b8669f/providers/Microsoft.DataLakeAnalytics/accounts?api-version=2015-10-01-preview')
  .reply(200, "{\"value\":[{\"properties\":{\"provisioningState\":\"Succeeded\",\"state\":\"Active\",\"endpoint\":\"javaadlaacct589.azuredatalakeanalytics.net\",\"creationTime\":\"2016-03-11T19:05:12.1695607Z\",\"lastModifiedTime\":\"2016-03-11T19:06:15.7736921Z\"},\"location\":\"eastus2\",\"tags\":{\"testkey\":\"testvalue\",\"testkey2\":\"testvalue2\"},\"id\":\"/subscriptions/53d9063d-87ae-4ea8-be90-3686c3b8669f/resourceGroups/javaadlarg80/providers/Microsoft.DataLakeAnalytics/accounts/javaadlaacct589\",\"name\":\"javaadlaacct589\",\"type\":\"Microsoft.DataLakeAnalytics/accounts\"},{\"properties\":{\"provisioningState\":\"Succeeded\",\"state\":\"Active\",\"endpoint\":\"xplattestadla1269.azuredatalakeanalytics.net\",\"creationTime\":\"2016-03-15T21:35:08.9463647Z\",\"lastModifiedTime\":\"2016-03-15T21:35:47.291197Z\"},\"location\":\"eastus2\",\"tags\":{\"testtag1\":\"testvalue1\",\"testtag2\":\"testvalue2\",\"testtag3\":\"testvalue3\"},\"id\":\"/subscriptions/53d9063d-87ae-4ea8-be90-3686c3b8669f/resourceGroups/xplattestadlarg05/providers/Microsoft.DataLakeAnalytics/accounts/xplattestadla1269\",\"name\":\"xplattestadla1269\",\"type\":\"Microsoft.DataLakeAnalytics/accounts\"},{\"properties\":{\"provisioningState\":\"Succeeded\",\"state\":\"Active\",\"endpoint\":\"xplattestadla7888.azuredatalakeanalytics.net\",\"creationTime\":\"2016-03-15T21:34:33.6951238Z\",\"lastModifiedTime\":\"2016-03-15T21:34:33.6951238Z\"},\"location\":\"eastus2\",\"tags\":{},\"id\":\"/subscriptions/53d9063d-87ae-4ea8-be90-3686c3b8669f/resourceGroups/xplattestadlarg05/providers/Microsoft.DataLakeAnalytics/accounts/xplattestadla7888\",\"name\":\"xplattestadla7888\",\"type\":\"Microsoft.DataLakeAnalytics/accounts\"}]}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '1558',
  'content-type': 'application/json',
  expires: '-1',
  'x-ms-request-id': '084a904b-710c-4ec5-95df-e110432d74a3',
  server: 'Microsoft-IIS/8.5',
  'x-aspnet-version': '4.0.30319',
  'x-powered-by': 'ASP.NET',
  'x-ms-ratelimit-remaining-subscription-reads': '14993',
  'x-ms-correlation-request-id': 'da59d508-c40d-42ca-a9c7-ddcff0abcc55',
  'x-ms-routing-request-id': 'WESTUS:20160315T213548Z:da59d508-c40d-42ca-a9c7-ddcff0abcc55',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  date: 'Tue, 15 Mar 2016 21:35:48 GMT',
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
  'x-ms-request-id': '084a904b-710c-4ec5-95df-e110432d74a3',
  server: 'Microsoft-IIS/8.5',
  'x-aspnet-version': '4.0.30319',
  'x-powered-by': 'ASP.NET',
  'x-ms-ratelimit-remaining-subscription-reads': '14993',
  'x-ms-correlation-request-id': 'da59d508-c40d-42ca-a9c7-ddcff0abcc55',
  'x-ms-routing-request-id': 'WESTUS:20160315T213548Z:da59d508-c40d-42ca-a9c7-ddcff0abcc55',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  date: 'Tue, 15 Mar 2016 21:35:48 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('http://management.azure.com:443')
  .filteringRequestBody(function (path) { return '*';})
.put('/subscriptions/53d9063d-87ae-4ea8-be90-3686c3b8669f/resourceGroups/xplattestadlarg05/providers/Microsoft.DataLakeAnalytics/accounts/xplattestadla1269/DataLakeStoreAccounts/xplattestadls8844?api-version=2015-10-01-preview', '*')
  .reply(200, "{\"properties\":{\"suffix\":\"azuredatalakestore.net\"},\"id\":\"/subscriptions/53d9063d-87ae-4ea8-be90-3686c3b8669f/resourceGroups/xplattestadlarg05/providers/Microsoft.DataLakeAnalytics/accounts/xplattestadla1269/dataLakeStoreAccounts/xplattestadls8844\",\"name\":\"xplattestadls8844\",\"type\":\"Microsoft.DataLakeAnalytics/accounts/dataLakeStoreAccounts\"}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '342',
  'content-type': 'application/json',
  expires: '-1',
  'x-ms-request-id': '9802484f-6dd3-4afe-a177-7fb9ea6d7361',
  server: 'Microsoft-IIS/8.5',
  'x-aspnet-version': '4.0.30319',
  'x-powered-by': 'ASP.NET',
  'x-ms-ratelimit-remaining-subscription-writes': '1197',
  'x-ms-correlation-request-id': 'a9427420-b22a-4b03-82ae-6fe26a2de5d5',
  'x-ms-routing-request-id': 'WESTUS:20160315T213549Z:a9427420-b22a-4b03-82ae-6fe26a2de5d5',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  date: 'Tue, 15 Mar 2016 21:35:49 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('https://management.azure.com:443')
  .filteringRequestBody(function (path) { return '*';})
.put('/subscriptions/53d9063d-87ae-4ea8-be90-3686c3b8669f/resourceGroups/xplattestadlarg05/providers/Microsoft.DataLakeAnalytics/accounts/xplattestadla1269/DataLakeStoreAccounts/xplattestadls8844?api-version=2015-10-01-preview', '*')
  .reply(200, "{\"properties\":{\"suffix\":\"azuredatalakestore.net\"},\"id\":\"/subscriptions/53d9063d-87ae-4ea8-be90-3686c3b8669f/resourceGroups/xplattestadlarg05/providers/Microsoft.DataLakeAnalytics/accounts/xplattestadla1269/dataLakeStoreAccounts/xplattestadls8844\",\"name\":\"xplattestadls8844\",\"type\":\"Microsoft.DataLakeAnalytics/accounts/dataLakeStoreAccounts\"}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '342',
  'content-type': 'application/json',
  expires: '-1',
  'x-ms-request-id': '9802484f-6dd3-4afe-a177-7fb9ea6d7361',
  server: 'Microsoft-IIS/8.5',
  'x-aspnet-version': '4.0.30319',
  'x-powered-by': 'ASP.NET',
  'x-ms-ratelimit-remaining-subscription-writes': '1197',
  'x-ms-correlation-request-id': 'a9427420-b22a-4b03-82ae-6fe26a2de5d5',
  'x-ms-routing-request-id': 'WESTUS:20160315T213549Z:a9427420-b22a-4b03-82ae-6fe26a2de5d5',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  date: 'Tue, 15 Mar 2016 21:35:49 GMT',
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
  'x-ms-request-id': 'c6015d5f-f857-4e30-961b-c7f054021e09',
  server: 'Microsoft-IIS/8.5',
  'x-aspnet-version': '4.0.30319',
  'x-powered-by': 'ASP.NET',
  'x-ms-ratelimit-remaining-subscription-reads': '14995',
  'x-ms-correlation-request-id': 'eef82527-2fe2-4111-9c39-98801ffa1293',
  'x-ms-routing-request-id': 'WESTUS:20160315T213550Z:eef82527-2fe2-4111-9c39-98801ffa1293',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  date: 'Tue, 15 Mar 2016 21:35:49 GMT',
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
  'x-ms-request-id': 'c6015d5f-f857-4e30-961b-c7f054021e09',
  server: 'Microsoft-IIS/8.5',
  'x-aspnet-version': '4.0.30319',
  'x-powered-by': 'ASP.NET',
  'x-ms-ratelimit-remaining-subscription-reads': '14995',
  'x-ms-correlation-request-id': 'eef82527-2fe2-4111-9c39-98801ffa1293',
  'x-ms-routing-request-id': 'WESTUS:20160315T213550Z:eef82527-2fe2-4111-9c39-98801ffa1293',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  date: 'Tue, 15 Mar 2016 21:35:49 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('http://management.azure.com:443')
  .get('/subscriptions/53d9063d-87ae-4ea8-be90-3686c3b8669f/resourceGroups/xplattestadlarg05/providers/Microsoft.DataLakeAnalytics/accounts/xplattestadla1269?api-version=2015-10-01-preview')
  .reply(200, "{\"properties\":{\"defaultDataLakeStoreAccount\":\"xplattestadls4299\",\"dataLakeStoreAccounts\":[{\"properties\":{\"suffix\":\"azuredatalakestore.net\"},\"name\":\"xplattestadls4299\"},{\"properties\":{\"suffix\":\"azuredatalakestore.net\"},\"name\":\"xplattestadls8844\"}],\"storageAccounts\":[],\"maxDegreeOfParallelism\":20,\"maxJobCount\":3,\"provisioningState\":\"Succeeded\",\"state\":\"Active\",\"endpoint\":\"xplattestadla1269.azuredatalakeanalytics.net\",\"creationTime\":\"2016-03-15T21:35:08.9463647Z\",\"lastModifiedTime\":\"2016-03-15T21:35:47.291197Z\"},\"location\":\"eastus2\",\"tags\":{\"testtag1\":\"testvalue1\",\"testtag2\":\"testvalue2\",\"testtag3\":\"testvalue3\"},\"id\":\"/subscriptions/53d9063d-87ae-4ea8-be90-3686c3b8669f/resourceGroups/xplattestadlarg05/providers/Microsoft.DataLakeAnalytics/accounts/xplattestadla1269\",\"name\":\"xplattestadla1269\",\"type\":\"Microsoft.DataLakeAnalytics/accounts\"}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '847',
  'content-type': 'application/json',
  expires: '-1',
  'x-ms-request-id': '2429d0b6-34bf-4f99-a7c1-e4930cc33da2',
  server: 'Microsoft-IIS/8.5',
  'x-aspnet-version': '4.0.30319',
  'x-powered-by': 'ASP.NET',
  'x-ms-ratelimit-remaining-subscription-reads': '14992',
  'x-ms-correlation-request-id': '663a2e71-59be-4439-9846-65e8988f83ce',
  'x-ms-routing-request-id': 'WESTUS:20160315T213550Z:663a2e71-59be-4439-9846-65e8988f83ce',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  date: 'Tue, 15 Mar 2016 21:35:49 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('https://management.azure.com:443')
  .get('/subscriptions/53d9063d-87ae-4ea8-be90-3686c3b8669f/resourceGroups/xplattestadlarg05/providers/Microsoft.DataLakeAnalytics/accounts/xplattestadla1269?api-version=2015-10-01-preview')
  .reply(200, "{\"properties\":{\"defaultDataLakeStoreAccount\":\"xplattestadls4299\",\"dataLakeStoreAccounts\":[{\"properties\":{\"suffix\":\"azuredatalakestore.net\"},\"name\":\"xplattestadls4299\"},{\"properties\":{\"suffix\":\"azuredatalakestore.net\"},\"name\":\"xplattestadls8844\"}],\"storageAccounts\":[],\"maxDegreeOfParallelism\":20,\"maxJobCount\":3,\"provisioningState\":\"Succeeded\",\"state\":\"Active\",\"endpoint\":\"xplattestadla1269.azuredatalakeanalytics.net\",\"creationTime\":\"2016-03-15T21:35:08.9463647Z\",\"lastModifiedTime\":\"2016-03-15T21:35:47.291197Z\"},\"location\":\"eastus2\",\"tags\":{\"testtag1\":\"testvalue1\",\"testtag2\":\"testvalue2\",\"testtag3\":\"testvalue3\"},\"id\":\"/subscriptions/53d9063d-87ae-4ea8-be90-3686c3b8669f/resourceGroups/xplattestadlarg05/providers/Microsoft.DataLakeAnalytics/accounts/xplattestadla1269\",\"name\":\"xplattestadla1269\",\"type\":\"Microsoft.DataLakeAnalytics/accounts\"}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '847',
  'content-type': 'application/json',
  expires: '-1',
  'x-ms-request-id': '2429d0b6-34bf-4f99-a7c1-e4930cc33da2',
  server: 'Microsoft-IIS/8.5',
  'x-aspnet-version': '4.0.30319',
  'x-powered-by': 'ASP.NET',
  'x-ms-ratelimit-remaining-subscription-reads': '14992',
  'x-ms-correlation-request-id': '663a2e71-59be-4439-9846-65e8988f83ce',
  'x-ms-routing-request-id': 'WESTUS:20160315T213550Z:663a2e71-59be-4439-9846-65e8988f83ce',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  date: 'Tue, 15 Mar 2016 21:35:49 GMT',
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
  'x-ms-request-id': 'fb96c66a-9ee8-4518-a150-8e36e9aa5c5a',
  server: 'Microsoft-IIS/8.5',
  'x-aspnet-version': '4.0.30319',
  'x-powered-by': 'ASP.NET',
  'x-ms-ratelimit-remaining-subscription-reads': '14992',
  'x-ms-correlation-request-id': 'c7c554fd-bcfd-4845-a6d9-68a184803598',
  'x-ms-routing-request-id': 'WESTUS:20160315T213551Z:c7c554fd-bcfd-4845-a6d9-68a184803598',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  date: 'Tue, 15 Mar 2016 21:35:50 GMT',
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
  'x-ms-request-id': 'fb96c66a-9ee8-4518-a150-8e36e9aa5c5a',
  server: 'Microsoft-IIS/8.5',
  'x-aspnet-version': '4.0.30319',
  'x-powered-by': 'ASP.NET',
  'x-ms-ratelimit-remaining-subscription-reads': '14992',
  'x-ms-correlation-request-id': 'c7c554fd-bcfd-4845-a6d9-68a184803598',
  'x-ms-routing-request-id': 'WESTUS:20160315T213551Z:c7c554fd-bcfd-4845-a6d9-68a184803598',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  date: 'Tue, 15 Mar 2016 21:35:50 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('http://management.azure.com:443')
  .delete('/subscriptions/53d9063d-87ae-4ea8-be90-3686c3b8669f/resourceGroups/xplattestadlarg05/providers/Microsoft.DataLakeAnalytics/accounts/xplattestadla1269/DataLakeStoreAccounts/xplattestadls8844?api-version=2015-10-01-preview')
  .reply(200, "", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '0',
  expires: '-1',
  'x-ms-request-id': '3ac40a4e-5803-4f85-afc9-f4d0b4eccf49',
  server: 'Microsoft-IIS/8.5',
  'x-aspnet-version': '4.0.30319',
  'x-powered-by': 'ASP.NET',
  'x-ms-ratelimit-remaining-subscription-writes': '1198',
  'x-ms-correlation-request-id': '6c9b5575-2e49-4ed7-96c3-5b05da673796',
  'x-ms-routing-request-id': 'WESTUS:20160315T213553Z:6c9b5575-2e49-4ed7-96c3-5b05da673796',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  date: 'Tue, 15 Mar 2016 21:35:52 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('https://management.azure.com:443')
  .delete('/subscriptions/53d9063d-87ae-4ea8-be90-3686c3b8669f/resourceGroups/xplattestadlarg05/providers/Microsoft.DataLakeAnalytics/accounts/xplattestadla1269/DataLakeStoreAccounts/xplattestadls8844?api-version=2015-10-01-preview')
  .reply(200, "", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '0',
  expires: '-1',
  'x-ms-request-id': '3ac40a4e-5803-4f85-afc9-f4d0b4eccf49',
  server: 'Microsoft-IIS/8.5',
  'x-aspnet-version': '4.0.30319',
  'x-powered-by': 'ASP.NET',
  'x-ms-ratelimit-remaining-subscription-writes': '1198',
  'x-ms-correlation-request-id': '6c9b5575-2e49-4ed7-96c3-5b05da673796',
  'x-ms-routing-request-id': 'WESTUS:20160315T213553Z:6c9b5575-2e49-4ed7-96c3-5b05da673796',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  date: 'Tue, 15 Mar 2016 21:35:52 GMT',
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
  'x-ms-request-id': '6e1e149c-008e-43cb-8e1b-98406b84cea5',
  server: 'Microsoft-IIS/8.5',
  'x-aspnet-version': '4.0.30319',
  'x-powered-by': 'ASP.NET',
  'x-ms-ratelimit-remaining-subscription-reads': '14994',
  'x-ms-correlation-request-id': 'b7c192f3-4df4-4dfa-91b9-4cc7993ba5ac',
  'x-ms-routing-request-id': 'WESTUS:20160315T213553Z:b7c192f3-4df4-4dfa-91b9-4cc7993ba5ac',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  date: 'Tue, 15 Mar 2016 21:35:53 GMT',
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
  'x-ms-request-id': '6e1e149c-008e-43cb-8e1b-98406b84cea5',
  server: 'Microsoft-IIS/8.5',
  'x-aspnet-version': '4.0.30319',
  'x-powered-by': 'ASP.NET',
  'x-ms-ratelimit-remaining-subscription-reads': '14994',
  'x-ms-correlation-request-id': 'b7c192f3-4df4-4dfa-91b9-4cc7993ba5ac',
  'x-ms-routing-request-id': 'WESTUS:20160315T213553Z:b7c192f3-4df4-4dfa-91b9-4cc7993ba5ac',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  date: 'Tue, 15 Mar 2016 21:35:53 GMT',
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
  'x-ms-request-id': '9b025976-2966-47e0-b619-72e7f7a4b92a',
  server: 'Microsoft-IIS/8.5',
  'x-aspnet-version': '4.0.30319',
  'x-powered-by': 'ASP.NET',
  'x-ms-ratelimit-remaining-subscription-reads': '14994',
  'x-ms-correlation-request-id': '8564644a-21ea-4879-b8ad-3e84d6e54949',
  'x-ms-routing-request-id': 'WESTUS:20160315T213554Z:8564644a-21ea-4879-b8ad-3e84d6e54949',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  date: 'Tue, 15 Mar 2016 21:35:53 GMT',
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
  'x-ms-request-id': '9b025976-2966-47e0-b619-72e7f7a4b92a',
  server: 'Microsoft-IIS/8.5',
  'x-aspnet-version': '4.0.30319',
  'x-powered-by': 'ASP.NET',
  'x-ms-ratelimit-remaining-subscription-reads': '14994',
  'x-ms-correlation-request-id': '8564644a-21ea-4879-b8ad-3e84d6e54949',
  'x-ms-routing-request-id': 'WESTUS:20160315T213554Z:8564644a-21ea-4879-b8ad-3e84d6e54949',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  date: 'Tue, 15 Mar 2016 21:35:53 GMT',
  connection: 'close' });
 return result; }]];