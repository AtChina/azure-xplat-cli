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
nock('http://xplattestadls8569.azuredatalakestore.net:443')
  .get('/webhdfs/v1/adlsclifolder01%2Fconcatfile.txt?length=23&offset=0&op=OPEN&read=true&api-version=2015-10-01-preview')
  .reply(200, "adls cli test content!a", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'transfer-encoding': 'chunked',
  'content-type': 'application/octet-stream',
  expires: '-1',
  'x-ms-request-id': '9debf014-2f24-428c-855d-abb10dca9154',
  'set-cookie': [ 'UserPrincipalSession=b99eef2c-d889-433f-b646-eda9c68a5dd4; path=/; secure; HttpOnly' ],
  'server-perf': '[9debf0142f24428c855dabb10dca9154][ AuthTime::1462.28781536595::PostAuthTime::31095.9631190398 ][FsOpenStream :: 00:00:314 ms]%0a[Open :: 00:00:314 ms]%0a[FsReadStream :: 00:00:045 ms]%0a[OPEN :: 00:00:360 ms]%0a',
  status: '0x0',
  'x-content-type-options': 'nosniff',
  'strict-transport-security': 'max-age=15724800; includeSubDomains',
  date: 'Tue, 15 Mar 2016 21:28:05 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('https://xplattestadls8569.azuredatalakestore.net:443')
  .get('/webhdfs/v1/adlsclifolder01%2Fconcatfile.txt?length=23&offset=0&op=OPEN&read=true&api-version=2015-10-01-preview')
  .reply(200, "adls cli test content!a", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'transfer-encoding': 'chunked',
  'content-type': 'application/octet-stream',
  expires: '-1',
  'x-ms-request-id': '9debf014-2f24-428c-855d-abb10dca9154',
  'set-cookie': [ 'UserPrincipalSession=b99eef2c-d889-433f-b646-eda9c68a5dd4; path=/; secure; HttpOnly' ],
  'server-perf': '[9debf0142f24428c855dabb10dca9154][ AuthTime::1462.28781536595::PostAuthTime::31095.9631190398 ][FsOpenStream :: 00:00:314 ms]%0a[Open :: 00:00:314 ms]%0a[FsReadStream :: 00:00:045 ms]%0a[OPEN :: 00:00:360 ms]%0a',
  status: '0x0',
  'x-content-type-options': 'nosniff',
  'strict-transport-security': 'max-age=15724800; includeSubDomains',
  date: 'Tue, 15 Mar 2016 21:28:05 GMT',
  connection: 'close' });
 return result; }]];