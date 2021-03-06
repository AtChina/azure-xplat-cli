// This file has been autogenerated.

var profile = require('../../../lib/util/profile');

exports.getMockedProfile = function () {
  var newProfile = new profile.Profile();

  newProfile.addSubscription(new profile.Subscription({
    id: '2c224e7e-3ef5-431d-a57b-e71f4662e3a6',
    name: 'Node CLI Test',
    user: {
      name: 'user@domain.example',
      type: 'user'
    },
    tenantId: '72f988bf-86f1-41af-91ab-2d7cd011db47',
    state: 'Enabled',
    registeredProviders: ['mobileservice', 'website'],
    _eventsCount: '1',
    isDefault: true
  }, newProfile.environments['AzureCloud']));

  return newProfile;
};

exports.setEnvironment = function() {
  process.env['AZURE_VM_TEST_LOCATION'] = 'southeastasia';
};

exports.scopes = [[function (nock) { 
var result = 
nock('http://management.azure.com:443')
  .filteringRequestBody(function (path) { return '*';})
.put('/subscriptions/2c224e7e-3ef5-431d-a57b-e71f4662e3a6/resourceGroups/xplat-test-dns-zone-record-set9100/providers/Microsoft.Network/dnszones/example1.com/A/set-a?api-version=2016-04-01', '*')
  .reply(201, "{\"id\":\"\\/subscriptions\\/2c224e7e-3ef5-431d-a57b-e71f4662e3a6\\/resourceGroups\\/xplat-test-dns-zone-record-set9100\\/providers\\/Microsoft.Network\\/dnszones\\/example1.com\\/A\\/set-a\",\"name\":\"set-a\",\"type\":\"Microsoft.Network\\/dnszones\\/A\",\"etag\":\"02e34769-b521-4df9-9ea1-239734462c8b\",\"properties\":{\"metadata\":{\"tag1\":\"aaa\",\"tag2\":\"bbb\"},\"fqdn\":\"set-a.example1.com.\",\"TTL\":3600,\"ARecords\":[]}}", { 'cache-control': 'private',
  'content-length': '387',
  'content-type': 'application/json; charset=utf-8',
  etag: '02e34769-b521-4df9-9ea1-239734462c8b',
  'x-content-type-options': 'nosniff',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  'x-ms-request-id': '9418d5ae-b23a-47e3-9d40-16e6034c8526',
  server: 'Microsoft-IIS/8.5',
  'x-aspnet-version': '4.0.30319',
  'x-powered-by': 'ASP.NET',
  'x-ms-ratelimit-remaining-subscription-resource-requests': '11998',
  'x-ms-correlation-request-id': '41bab954-9a61-4334-b185-325c73ed483c',
  'x-ms-routing-request-id': 'WESTEUROPE:20160928T082653Z:41bab954-9a61-4334-b185-325c73ed483c',
  date: 'Wed, 28 Sep 2016 08:26:52 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('https://management.azure.com:443')
  .filteringRequestBody(function (path) { return '*';})
.put('/subscriptions/2c224e7e-3ef5-431d-a57b-e71f4662e3a6/resourceGroups/xplat-test-dns-zone-record-set9100/providers/Microsoft.Network/dnszones/example1.com/A/set-a?api-version=2016-04-01', '*')
  .reply(201, "{\"id\":\"\\/subscriptions\\/2c224e7e-3ef5-431d-a57b-e71f4662e3a6\\/resourceGroups\\/xplat-test-dns-zone-record-set9100\\/providers\\/Microsoft.Network\\/dnszones\\/example1.com\\/A\\/set-a\",\"name\":\"set-a\",\"type\":\"Microsoft.Network\\/dnszones\\/A\",\"etag\":\"02e34769-b521-4df9-9ea1-239734462c8b\",\"properties\":{\"metadata\":{\"tag1\":\"aaa\",\"tag2\":\"bbb\"},\"fqdn\":\"set-a.example1.com.\",\"TTL\":3600,\"ARecords\":[]}}", { 'cache-control': 'private',
  'content-length': '387',
  'content-type': 'application/json; charset=utf-8',
  etag: '02e34769-b521-4df9-9ea1-239734462c8b',
  'x-content-type-options': 'nosniff',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  'x-ms-request-id': '9418d5ae-b23a-47e3-9d40-16e6034c8526',
  server: 'Microsoft-IIS/8.5',
  'x-aspnet-version': '4.0.30319',
  'x-powered-by': 'ASP.NET',
  'x-ms-ratelimit-remaining-subscription-resource-requests': '11998',
  'x-ms-correlation-request-id': '41bab954-9a61-4334-b185-325c73ed483c',
  'x-ms-routing-request-id': 'WESTEUROPE:20160928T082653Z:41bab954-9a61-4334-b185-325c73ed483c',
  date: 'Wed, 28 Sep 2016 08:26:52 GMT',
  connection: 'close' });
 return result; }]];