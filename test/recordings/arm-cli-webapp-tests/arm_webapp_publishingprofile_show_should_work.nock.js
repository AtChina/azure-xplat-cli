// This file has been autogenerated.

var profile = require('../../../lib/util/profile');

exports.getMockedProfile = function () {
  var newProfile = new profile.Profile();

  newProfile.addSubscription(new profile.Subscription({
    id: '8d57ddbd-c779-40ea-b660-1015f4bf027d',
    name: 'Visual Studio Enterprise',
    user: {
      name: 'user@domain.example',
      type: 'user'
    },
    tenantId: '72f988bf-86f1-41af-91ab-2d7cd011db47',
    state: 'Enabled',
    registeredProviders: [],
    _eventsCount: '1',
    isDefault: true
  }, newProfile.environments['AzureCloud']));

  return newProfile;
};

exports.setEnvironment = function() {
};

exports.scopes = [[function (nock) { 
var result = 
nock('http://management.azure.com:443')
  .post('/subscriptions/8d57ddbd-c779-40ea-b660-1015f4bf027d/resourceGroups/testrg18598/providers/Microsoft.Web/sites/webappclitests2083/config/publishingcredentials/list?api-version=2015-08-01')
  .reply(200, "{\"id\":\"/subscriptions/8d57ddbd-c779-40ea-b660-1015f4bf027d/resourceGroups/testrg18598/providers/Microsoft.Web/sites/webappclitests2083/publishingcredentials/$webappclitests2083\",\"name\":\"webappclitests2083\",\"type\":\"Microsoft.Web/sites/publishingcredentials\",\"location\":\"West US\",\"tags\":null,\"properties\":{\"name\":null,\"publishingUserName\":\"$webappclitests2083\",\"publishingPassword\":\"uyRLlowLKWA8Tsjlrp3opf0Kl80XEoxQxMnc39JkWpApH1JfTd7TwGvwQsKb\",\"publishingPasswordHash\":null,\"publishingPasswordHashSalt\":null,\"metadata\":null,\"isDeleted\":false,\"scmUri\":\"https://$webappclitests2083:uyRLlowLKWA8Tsjlrp3opf0Kl80XEoxQxMnc39JkWpApH1JfTd7TwGvwQsKb@webappclitests2083.scm.azurewebsites.net\"}}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '683',
  'content-type': 'application/json',
  expires: '-1',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  'x-ms-request-id': 'f4f61fb7-558e-4e3f-abe7-290875777ab9',
  server: 'Microsoft-IIS/8.0',
  'x-aspnet-version': '4.0.30319',
  'x-powered-by': 'ASP.NET',
  'x-ms-ratelimit-remaining-subscription-resource-requests': '11999',
  'x-ms-correlation-request-id': '5f0fc8c8-7f58-4bb5-8d69-b9fa776b39e8',
  'x-ms-routing-request-id': 'CENTRALUS:20161016T212342Z:5f0fc8c8-7f58-4bb5-8d69-b9fa776b39e8',
  date: 'Sun, 16 Oct 2016 21:23:42 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('https://management.azure.com:443')
  .post('/subscriptions/8d57ddbd-c779-40ea-b660-1015f4bf027d/resourceGroups/testrg18598/providers/Microsoft.Web/sites/webappclitests2083/config/publishingcredentials/list?api-version=2015-08-01')
  .reply(200, "{\"id\":\"/subscriptions/8d57ddbd-c779-40ea-b660-1015f4bf027d/resourceGroups/testrg18598/providers/Microsoft.Web/sites/webappclitests2083/publishingcredentials/$webappclitests2083\",\"name\":\"webappclitests2083\",\"type\":\"Microsoft.Web/sites/publishingcredentials\",\"location\":\"West US\",\"tags\":null,\"properties\":{\"name\":null,\"publishingUserName\":\"$webappclitests2083\",\"publishingPassword\":\"uyRLlowLKWA8Tsjlrp3opf0Kl80XEoxQxMnc39JkWpApH1JfTd7TwGvwQsKb\",\"publishingPasswordHash\":null,\"publishingPasswordHashSalt\":null,\"metadata\":null,\"isDeleted\":false,\"scmUri\":\"https://$webappclitests2083:uyRLlowLKWA8Tsjlrp3opf0Kl80XEoxQxMnc39JkWpApH1JfTd7TwGvwQsKb@webappclitests2083.scm.azurewebsites.net\"}}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '683',
  'content-type': 'application/json',
  expires: '-1',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  'x-ms-request-id': 'f4f61fb7-558e-4e3f-abe7-290875777ab9',
  server: 'Microsoft-IIS/8.0',
  'x-aspnet-version': '4.0.30319',
  'x-powered-by': 'ASP.NET',
  'x-ms-ratelimit-remaining-subscription-resource-requests': '11999',
  'x-ms-correlation-request-id': '5f0fc8c8-7f58-4bb5-8d69-b9fa776b39e8',
  'x-ms-routing-request-id': 'CENTRALUS:20161016T212342Z:5f0fc8c8-7f58-4bb5-8d69-b9fa776b39e8',
  date: 'Sun, 16 Oct 2016 21:23:42 GMT',
  connection: 'close' });
 return result; }]];