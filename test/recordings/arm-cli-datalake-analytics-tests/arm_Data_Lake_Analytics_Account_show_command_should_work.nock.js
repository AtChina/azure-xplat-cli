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
  .get('/subscriptions/53d9063d-87ae-4ea8-be90-3686c3b8669f/resourceGroups/xplattestadlarg05/providers/Microsoft.DataLakeAnalytics/accounts/xplattestadla1269?api-version=2015-10-01-preview')
  .reply(200, "{\"properties\":{\"defaultDataLakeStoreAccount\":\"xplattestadls4299\",\"dataLakeStoreAccounts\":[{\"properties\":{\"suffix\":\"azuredatalakestore.net\"},\"name\":\"xplattestadls4299\"}],\"storageAccounts\":[],\"maxDegreeOfParallelism\":20,\"maxJobCount\":3,\"provisioningState\":\"Succeeded\",\"state\":\"Active\",\"endpoint\":\"xplattestadla1269.azuredatalakeanalytics.net\",\"creationTime\":\"2016-03-15T21:35:08.9463647Z\",\"lastModifiedTime\":\"2016-03-15T21:35:08.9463647Z\"},\"location\":\"eastus2\",\"tags\":{\"testtag1\":\"testvalue1\",\"testtag2\":\"testvalue2\"},\"id\":\"/subscriptions/53d9063d-87ae-4ea8-be90-3686c3b8669f/resourceGroups/xplattestadlarg05/providers/Microsoft.DataLakeAnalytics/accounts/xplattestadla1269\",\"name\":\"xplattestadla1269\",\"type\":\"Microsoft.DataLakeAnalytics/accounts\"}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '746',
  'content-type': 'application/json',
  expires: '-1',
  'x-ms-request-id': '375faf89-60db-4e6c-b41a-a893c92ab588',
  server: 'Microsoft-IIS/8.5',
  'x-aspnet-version': '4.0.30319',
  'x-powered-by': 'ASP.NET',
  'x-ms-ratelimit-remaining-subscription-reads': '14993',
  'x-ms-correlation-request-id': '6e09e08a-7ea2-4d10-bca2-84e91c16d6a2',
  'x-ms-routing-request-id': 'WESTUS:20160315T213542Z:6e09e08a-7ea2-4d10-bca2-84e91c16d6a2',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  date: 'Tue, 15 Mar 2016 21:35:41 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('https://management.azure.com:443')
  .get('/subscriptions/53d9063d-87ae-4ea8-be90-3686c3b8669f/resourceGroups/xplattestadlarg05/providers/Microsoft.DataLakeAnalytics/accounts/xplattestadla1269?api-version=2015-10-01-preview')
  .reply(200, "{\"properties\":{\"defaultDataLakeStoreAccount\":\"xplattestadls4299\",\"dataLakeStoreAccounts\":[{\"properties\":{\"suffix\":\"azuredatalakestore.net\"},\"name\":\"xplattestadls4299\"}],\"storageAccounts\":[],\"maxDegreeOfParallelism\":20,\"maxJobCount\":3,\"provisioningState\":\"Succeeded\",\"state\":\"Active\",\"endpoint\":\"xplattestadla1269.azuredatalakeanalytics.net\",\"creationTime\":\"2016-03-15T21:35:08.9463647Z\",\"lastModifiedTime\":\"2016-03-15T21:35:08.9463647Z\"},\"location\":\"eastus2\",\"tags\":{\"testtag1\":\"testvalue1\",\"testtag2\":\"testvalue2\"},\"id\":\"/subscriptions/53d9063d-87ae-4ea8-be90-3686c3b8669f/resourceGroups/xplattestadlarg05/providers/Microsoft.DataLakeAnalytics/accounts/xplattestadla1269\",\"name\":\"xplattestadla1269\",\"type\":\"Microsoft.DataLakeAnalytics/accounts\"}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '746',
  'content-type': 'application/json',
  expires: '-1',
  'x-ms-request-id': '375faf89-60db-4e6c-b41a-a893c92ab588',
  server: 'Microsoft-IIS/8.5',
  'x-aspnet-version': '4.0.30319',
  'x-powered-by': 'ASP.NET',
  'x-ms-ratelimit-remaining-subscription-reads': '14993',
  'x-ms-correlation-request-id': '6e09e08a-7ea2-4d10-bca2-84e91c16d6a2',
  'x-ms-routing-request-id': 'WESTUS:20160315T213542Z:6e09e08a-7ea2-4d10-bca2-84e91c16d6a2',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  date: 'Tue, 15 Mar 2016 21:35:41 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('http://management.azure.com:443')
  .get('/subscriptions/53d9063d-87ae-4ea8-be90-3686c3b8669f/providers/Microsoft.DataLakeAnalytics/accounts?api-version=2015-10-01-preview')
  .reply(200, "{\"value\":[{\"properties\":{\"provisioningState\":\"Succeeded\",\"state\":\"Active\",\"endpoint\":\"javaadlaacct589.azuredatalakeanalytics.net\",\"creationTime\":\"2016-03-11T19:05:12.1695607Z\",\"lastModifiedTime\":\"2016-03-11T19:06:15.7736921Z\"},\"location\":\"eastus2\",\"tags\":{\"testkey\":\"testvalue\",\"testkey2\":\"testvalue2\"},\"id\":\"/subscriptions/53d9063d-87ae-4ea8-be90-3686c3b8669f/resourceGroups/javaadlarg80/providers/Microsoft.DataLakeAnalytics/accounts/javaadlaacct589\",\"name\":\"javaadlaacct589\",\"type\":\"Microsoft.DataLakeAnalytics/accounts\"},{\"properties\":{\"provisioningState\":\"Succeeded\",\"state\":\"Active\",\"endpoint\":\"xplattestadla1269.azuredatalakeanalytics.net\",\"creationTime\":\"2016-03-15T21:35:08.9463647Z\",\"lastModifiedTime\":\"2016-03-15T21:35:08.9463647Z\"},\"location\":\"eastus2\",\"tags\":{\"testtag1\":\"testvalue1\",\"testtag2\":\"testvalue2\"},\"id\":\"/subscriptions/53d9063d-87ae-4ea8-be90-3686c3b8669f/resourceGroups/xplattestadlarg05/providers/Microsoft.DataLakeAnalytics/accounts/xplattestadla1269\",\"name\":\"xplattestadla1269\",\"type\":\"Microsoft.DataLakeAnalytics/accounts\"},{\"properties\":{\"provisioningState\":\"Succeeded\",\"state\":\"Active\",\"endpoint\":\"xplattestadla7888.azuredatalakeanalytics.net\",\"creationTime\":\"2016-03-15T21:34:33.6951238Z\",\"lastModifiedTime\":\"2016-03-15T21:34:33.6951238Z\"},\"location\":\"eastus2\",\"tags\":{},\"id\":\"/subscriptions/53d9063d-87ae-4ea8-be90-3686c3b8669f/resourceGroups/xplattestadlarg05/providers/Microsoft.DataLakeAnalytics/accounts/xplattestadla7888\",\"name\":\"xplattestadla7888\",\"type\":\"Microsoft.DataLakeAnalytics/accounts\"}]}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '1535',
  'content-type': 'application/json',
  expires: '-1',
  'x-ms-request-id': '74282b7f-3cf3-4a67-9162-0bf00c2a030e',
  server: 'Microsoft-IIS/8.5',
  'x-aspnet-version': '4.0.30319',
  'x-powered-by': 'ASP.NET',
  'x-ms-ratelimit-remaining-subscription-reads': '14995',
  'x-ms-correlation-request-id': 'db8cbf74-45f6-4767-a95d-e784420ba31c',
  'x-ms-routing-request-id': 'WESTUS:20160315T213542Z:db8cbf74-45f6-4767-a95d-e784420ba31c',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  date: 'Tue, 15 Mar 2016 21:35:42 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('https://management.azure.com:443')
  .get('/subscriptions/53d9063d-87ae-4ea8-be90-3686c3b8669f/providers/Microsoft.DataLakeAnalytics/accounts?api-version=2015-10-01-preview')
  .reply(200, "{\"value\":[{\"properties\":{\"provisioningState\":\"Succeeded\",\"state\":\"Active\",\"endpoint\":\"javaadlaacct589.azuredatalakeanalytics.net\",\"creationTime\":\"2016-03-11T19:05:12.1695607Z\",\"lastModifiedTime\":\"2016-03-11T19:06:15.7736921Z\"},\"location\":\"eastus2\",\"tags\":{\"testkey\":\"testvalue\",\"testkey2\":\"testvalue2\"},\"id\":\"/subscriptions/53d9063d-87ae-4ea8-be90-3686c3b8669f/resourceGroups/javaadlarg80/providers/Microsoft.DataLakeAnalytics/accounts/javaadlaacct589\",\"name\":\"javaadlaacct589\",\"type\":\"Microsoft.DataLakeAnalytics/accounts\"},{\"properties\":{\"provisioningState\":\"Succeeded\",\"state\":\"Active\",\"endpoint\":\"xplattestadla1269.azuredatalakeanalytics.net\",\"creationTime\":\"2016-03-15T21:35:08.9463647Z\",\"lastModifiedTime\":\"2016-03-15T21:35:08.9463647Z\"},\"location\":\"eastus2\",\"tags\":{\"testtag1\":\"testvalue1\",\"testtag2\":\"testvalue2\"},\"id\":\"/subscriptions/53d9063d-87ae-4ea8-be90-3686c3b8669f/resourceGroups/xplattestadlarg05/providers/Microsoft.DataLakeAnalytics/accounts/xplattestadla1269\",\"name\":\"xplattestadla1269\",\"type\":\"Microsoft.DataLakeAnalytics/accounts\"},{\"properties\":{\"provisioningState\":\"Succeeded\",\"state\":\"Active\",\"endpoint\":\"xplattestadla7888.azuredatalakeanalytics.net\",\"creationTime\":\"2016-03-15T21:34:33.6951238Z\",\"lastModifiedTime\":\"2016-03-15T21:34:33.6951238Z\"},\"location\":\"eastus2\",\"tags\":{},\"id\":\"/subscriptions/53d9063d-87ae-4ea8-be90-3686c3b8669f/resourceGroups/xplattestadlarg05/providers/Microsoft.DataLakeAnalytics/accounts/xplattestadla7888\",\"name\":\"xplattestadla7888\",\"type\":\"Microsoft.DataLakeAnalytics/accounts\"}]}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '1535',
  'content-type': 'application/json',
  expires: '-1',
  'x-ms-request-id': '74282b7f-3cf3-4a67-9162-0bf00c2a030e',
  server: 'Microsoft-IIS/8.5',
  'x-aspnet-version': '4.0.30319',
  'x-powered-by': 'ASP.NET',
  'x-ms-ratelimit-remaining-subscription-reads': '14995',
  'x-ms-correlation-request-id': 'db8cbf74-45f6-4767-a95d-e784420ba31c',
  'x-ms-routing-request-id': 'WESTUS:20160315T213542Z:db8cbf74-45f6-4767-a95d-e784420ba31c',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  date: 'Tue, 15 Mar 2016 21:35:42 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('http://management.azure.com:443')
  .get('/subscriptions/53d9063d-87ae-4ea8-be90-3686c3b8669f/resourceGroups/xplattestadlarg05/providers/Microsoft.DataLakeAnalytics/accounts/xplattestadla1269?api-version=2015-10-01-preview')
  .reply(200, "{\"properties\":{\"defaultDataLakeStoreAccount\":\"xplattestadls4299\",\"dataLakeStoreAccounts\":[{\"properties\":{\"suffix\":\"azuredatalakestore.net\"},\"name\":\"xplattestadls4299\"}],\"storageAccounts\":[],\"maxDegreeOfParallelism\":20,\"maxJobCount\":3,\"provisioningState\":\"Succeeded\",\"state\":\"Active\",\"endpoint\":\"xplattestadla1269.azuredatalakeanalytics.net\",\"creationTime\":\"2016-03-15T21:35:08.9463647Z\",\"lastModifiedTime\":\"2016-03-15T21:35:08.9463647Z\"},\"location\":\"eastus2\",\"tags\":{\"testtag1\":\"testvalue1\",\"testtag2\":\"testvalue2\"},\"id\":\"/subscriptions/53d9063d-87ae-4ea8-be90-3686c3b8669f/resourceGroups/xplattestadlarg05/providers/Microsoft.DataLakeAnalytics/accounts/xplattestadla1269\",\"name\":\"xplattestadla1269\",\"type\":\"Microsoft.DataLakeAnalytics/accounts\"}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '746',
  'content-type': 'application/json',
  expires: '-1',
  'x-ms-request-id': 'ab0cc112-1007-4683-87d2-46a73b2b7597',
  server: 'Microsoft-IIS/8.5',
  'x-aspnet-version': '4.0.30319',
  'x-powered-by': 'ASP.NET',
  'x-ms-ratelimit-remaining-subscription-reads': '14995',
  'x-ms-correlation-request-id': 'ab47ea82-d6c2-4b86-96ee-1085ec39e68e',
  'x-ms-routing-request-id': 'WESTUS:20160315T213543Z:ab47ea82-d6c2-4b86-96ee-1085ec39e68e',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  date: 'Tue, 15 Mar 2016 21:35:42 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('https://management.azure.com:443')
  .get('/subscriptions/53d9063d-87ae-4ea8-be90-3686c3b8669f/resourceGroups/xplattestadlarg05/providers/Microsoft.DataLakeAnalytics/accounts/xplattestadla1269?api-version=2015-10-01-preview')
  .reply(200, "{\"properties\":{\"defaultDataLakeStoreAccount\":\"xplattestadls4299\",\"dataLakeStoreAccounts\":[{\"properties\":{\"suffix\":\"azuredatalakestore.net\"},\"name\":\"xplattestadls4299\"}],\"storageAccounts\":[],\"maxDegreeOfParallelism\":20,\"maxJobCount\":3,\"provisioningState\":\"Succeeded\",\"state\":\"Active\",\"endpoint\":\"xplattestadla1269.azuredatalakeanalytics.net\",\"creationTime\":\"2016-03-15T21:35:08.9463647Z\",\"lastModifiedTime\":\"2016-03-15T21:35:08.9463647Z\"},\"location\":\"eastus2\",\"tags\":{\"testtag1\":\"testvalue1\",\"testtag2\":\"testvalue2\"},\"id\":\"/subscriptions/53d9063d-87ae-4ea8-be90-3686c3b8669f/resourceGroups/xplattestadlarg05/providers/Microsoft.DataLakeAnalytics/accounts/xplattestadla1269\",\"name\":\"xplattestadla1269\",\"type\":\"Microsoft.DataLakeAnalytics/accounts\"}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '746',
  'content-type': 'application/json',
  expires: '-1',
  'x-ms-request-id': 'ab0cc112-1007-4683-87d2-46a73b2b7597',
  server: 'Microsoft-IIS/8.5',
  'x-aspnet-version': '4.0.30319',
  'x-powered-by': 'ASP.NET',
  'x-ms-ratelimit-remaining-subscription-reads': '14995',
  'x-ms-correlation-request-id': 'ab47ea82-d6c2-4b86-96ee-1085ec39e68e',
  'x-ms-routing-request-id': 'WESTUS:20160315T213543Z:ab47ea82-d6c2-4b86-96ee-1085ec39e68e',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  date: 'Tue, 15 Mar 2016 21:35:42 GMT',
  connection: 'close' });
 return result; }]];