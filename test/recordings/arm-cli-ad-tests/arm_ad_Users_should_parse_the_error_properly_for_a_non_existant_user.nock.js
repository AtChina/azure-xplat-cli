// This file has been autogenerated.

var profile = require('../../../lib/util/profile');

exports.getMockedProfile = function () {
  var newProfile = new profile.Profile();

  newProfile.addSubscription(new profile.Subscription({
    id: '4004a9fd-d58e-48dc-aeb2-4a4aec58606f',
    name: 'AAD_POLICY_ADMINISTRATION_SERVICE_TEST_CLI',
    user: {
      name: 'user@domain.example',
      type: 'user'
    },
    tenantId: '1273adef-00a3-4086-a51a-dbcce1857d36',
    state: 'Enabled',
    registeredProviders: [],
    isDefault: true
  }, newProfile.environments['AzureCloud']));

  return newProfile;
};

exports.setEnvironment = function() {
  process.env['AZURE_AD_TEST_PASSWORD'] = '"Pa$$w0rd"';
  process.env['AZURE_AD_TEST_GROUP_NAME'] = 'Randomtestgroup11';
  process.env['AZURE_AD_TEST_SUBGROUP_NAME'] = 'Randomtestgroup12';
  process.env['AZURE_AD_TEST_USER_PRINCIPAL_NAME'] = 'RandomtestUser11@rbacclitest.onmicrosoft.com';
  process.env['AZURE_AD_TEST_USER_PRINCIPAL_NAME2'] = 'RandomtestUser12@rbacclitest.onmicrosoft.com';
  process.env['AZURE_AD_TEST_SP_DISPLAY_NAME'] = 'Randommytestapp9047';
};

exports.scopes = [[function (nock) { 
var result = 
nock('http://graph.windows.net:443')
  .filteringRequestBody(function (path) { return '*';})
.post('/1273adef-00a3-4086-a51a-dbcce1857d36/groups?api-version=1.6', '*')
  .reply(201, "{\"odata.metadata\":\"https://graph.windows.net/1273adef-00a3-4086-a51a-dbcce1857d36/$metadata#directoryObjects/Microsoft.DirectoryServices.Group/@Element\",\"odata.type\":\"Microsoft.DirectoryServices.Group\",\"objectType\":\"Group\",\"objectId\":\"197baf9a-1c9e-4be1-bbc7-e566130772d3\",\"deletionTimestamp\":null,\"description\":null,\"dirSyncEnabled\":null,\"displayName\":\"Randomtestgroup11\",\"lastDirSyncTime\":null,\"mail\":null,\"mailNickname\":\"Randomtestgroup11\",\"mailEnabled\":false,\"onPremisesSecurityIdentifier\":null,\"provisioningErrors\":[],\"proxyAddresses\":[],\"securityEnabled\":true}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-type': 'application/json;odata=minimalmetadata;streaming=true;charset=utf-8',
  expires: '-1',
  location: 'https://graph.windows.net/1273adef-00a3-4086-a51a-dbcce1857d36/directoryObjects/197baf9a-1c9e-4be1-bbc7-e566130772d3/Microsoft.DirectoryServices.Group',
  server: 'Microsoft-IIS/8.5',
  'ocp-aad-diagnostics-server-name': 'L1T5XHZYGeFZQeobDtqw4Vyk5Majkvn9aCYas2qZMLw=',
  'request-id': '512a85c4-2ceb-4032-8255-ccfaa0b641b4',
  'client-request-id': '9109796a-3d05-47ca-9e45-08ed896e75ab',
  'x-ms-dirapi-data-contract-version': '1.6',
  'ocp-aad-session-key': '-I6UNpcoRvEiz4ac95hwetd3hqsFa8MnF49sMT6lzu6cStI2hdIYO7YBSgYgo5eCQsaEgWpOgcbN3qxBk0H_soK2hWChwXKIC4mzqY4bXUhDdV0T5vcZs2YXWVBWmq8OZT7txCJcgiMyJ8j15yk6xg.JKEX4h0xSKOA9QcJTLQzsG86r5fZUXWr9YyNOPGJdg0',
  'x-content-type-options': 'nosniff',
  dataserviceversion: '3.0;',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  'access-control-allow-origin': '*',
  'x-aspnet-version': '4.0.30319',
  'x-powered-by': 'ASP.NET, ASP.NET',
  duration: '2928381',
  date: 'Thu, 22 Sep 2016 20:44:39 GMT',
  connection: 'close',
  'content-length': '566' });
 return result; },
function (nock) { 
var result = 
nock('https://graph.windows.net:443')
  .filteringRequestBody(function (path) { return '*';})
.post('/1273adef-00a3-4086-a51a-dbcce1857d36/groups?api-version=1.6', '*')
  .reply(201, "{\"odata.metadata\":\"https://graph.windows.net/1273adef-00a3-4086-a51a-dbcce1857d36/$metadata#directoryObjects/Microsoft.DirectoryServices.Group/@Element\",\"odata.type\":\"Microsoft.DirectoryServices.Group\",\"objectType\":\"Group\",\"objectId\":\"197baf9a-1c9e-4be1-bbc7-e566130772d3\",\"deletionTimestamp\":null,\"description\":null,\"dirSyncEnabled\":null,\"displayName\":\"Randomtestgroup11\",\"lastDirSyncTime\":null,\"mail\":null,\"mailNickname\":\"Randomtestgroup11\",\"mailEnabled\":false,\"onPremisesSecurityIdentifier\":null,\"provisioningErrors\":[],\"proxyAddresses\":[],\"securityEnabled\":true}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-type': 'application/json;odata=minimalmetadata;streaming=true;charset=utf-8',
  expires: '-1',
  location: 'https://graph.windows.net/1273adef-00a3-4086-a51a-dbcce1857d36/directoryObjects/197baf9a-1c9e-4be1-bbc7-e566130772d3/Microsoft.DirectoryServices.Group',
  server: 'Microsoft-IIS/8.5',
  'ocp-aad-diagnostics-server-name': 'L1T5XHZYGeFZQeobDtqw4Vyk5Majkvn9aCYas2qZMLw=',
  'request-id': '512a85c4-2ceb-4032-8255-ccfaa0b641b4',
  'client-request-id': '9109796a-3d05-47ca-9e45-08ed896e75ab',
  'x-ms-dirapi-data-contract-version': '1.6',
  'ocp-aad-session-key': '-I6UNpcoRvEiz4ac95hwetd3hqsFa8MnF49sMT6lzu6cStI2hdIYO7YBSgYgo5eCQsaEgWpOgcbN3qxBk0H_soK2hWChwXKIC4mzqY4bXUhDdV0T5vcZs2YXWVBWmq8OZT7txCJcgiMyJ8j15yk6xg.JKEX4h0xSKOA9QcJTLQzsG86r5fZUXWr9YyNOPGJdg0',
  'x-content-type-options': 'nosniff',
  dataserviceversion: '3.0;',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  'access-control-allow-origin': '*',
  'x-aspnet-version': '4.0.30319',
  'x-powered-by': 'ASP.NET, ASP.NET',
  duration: '2928381',
  date: 'Thu, 22 Sep 2016 20:44:39 GMT',
  connection: 'close',
  'content-length': '566' });
 return result; }]];