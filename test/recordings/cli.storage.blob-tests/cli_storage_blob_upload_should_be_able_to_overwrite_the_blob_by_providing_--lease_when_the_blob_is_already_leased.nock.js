// This file has been autogenerated.

var profile = require('../../../lib/util/profile');

exports.getMockedProfile = function () {
  var newProfile = new profile.Profile();

  newProfile.addSubscription(new profile.Subscription({
    id: 'a0d901ba-9956-4f7d-830c-2d7974c36666',
    name: 'Azure Storage DM Dev',
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
  process.env['AZURE_STORAGE_CONNECTION_STRING'] = 'DefaultEndpointsProtocol=https;AccountName=xplat;AccountKey=null';
};

exports.scopes = [[function (nock) { 
var result = 
nock('http://xplat.blob.core.windows.net:443')
  .head('/storage-cli-blob-test/blockblobname51693763')
  .reply(404, "", { 'transfer-encoding': 'chunked',
  vary: 'Origin',
  server: 'Windows-Azure-Blob/1.0 Microsoft-HTTPAPI/2.0',
  'x-ms-request-id': '6988f07b-0001-0014-4065-f45563000000',
  'x-ms-version': '2015-04-05',
  date: 'Fri, 12 Aug 2016 06:46:49 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('https://xplat.blob.core.windows.net:443')
  .head('/storage-cli-blob-test/blockblobname51693763')
  .reply(404, "", { 'transfer-encoding': 'chunked',
  vary: 'Origin',
  server: 'Windows-Azure-Blob/1.0 Microsoft-HTTPAPI/2.0',
  'x-ms-request-id': '6988f07b-0001-0014-4065-f45563000000',
  'x-ms-version': '2015-04-05',
  date: 'Fri, 12 Aug 2016 06:46:49 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('http://xplat.blob.core.windows.net:443')
  .filteringRequestBody(function (path) { return '*';})
.put('/storage-cli-blob-test/blockblobname51693763', '*')
  .reply(201, "", { 'transfer-encoding': 'chunked',
  'content-md5': 'aOEJ8PQMpyoV4FzCJ4b45g==',
  'last-modified': 'Fri, 12 Aug 2016 06:46:50 GMT',
  etag: '"0x8D3C27C700D5545"',
  server: 'Windows-Azure-Blob/1.0 Microsoft-HTTPAPI/2.0',
  'x-ms-request-id': 'e4515644-0001-0000-5d65-f49607000000',
  'x-ms-version': '2015-04-05',
  date: 'Fri, 12 Aug 2016 06:46:49 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('https://xplat.blob.core.windows.net:443')
  .filteringRequestBody(function (path) { return '*';})
.put('/storage-cli-blob-test/blockblobname51693763', '*')
  .reply(201, "", { 'transfer-encoding': 'chunked',
  'content-md5': 'aOEJ8PQMpyoV4FzCJ4b45g==',
  'last-modified': 'Fri, 12 Aug 2016 06:46:50 GMT',
  etag: '"0x8D3C27C700D5545"',
  server: 'Windows-Azure-Blob/1.0 Microsoft-HTTPAPI/2.0',
  'x-ms-request-id': 'e4515644-0001-0000-5d65-f49607000000',
  'x-ms-version': '2015-04-05',
  date: 'Fri, 12 Aug 2016 06:46:49 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('http://xplat.blob.core.windows.net:443')
  .head('/storage-cli-blob-test/blockblobname51693763')
  .reply(200, "", { 'content-length': '10',
  'content-type': 'text/plain',
  'content-md5': 'aOEJ8PQMpyoV4FzCJ4b45g==',
  'last-modified': 'Fri, 12 Aug 2016 06:46:50 GMT',
  'accept-ranges': 'bytes',
  etag: '"0x8D3C27C700D5545"',
  vary: 'Origin',
  server: 'Windows-Azure-Blob/1.0 Microsoft-HTTPAPI/2.0',
  'x-ms-request-id': 'bb4e8827-0001-003c-0765-f422dc000000',
  'x-ms-version': '2015-04-05',
  'x-ms-write-protection': 'false',
  'x-ms-lease-status': 'unlocked',
  'x-ms-lease-state': 'available',
  'x-ms-blob-type': 'BlockBlob',
  date: 'Fri, 12 Aug 2016 06:46:49 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('https://xplat.blob.core.windows.net:443')
  .head('/storage-cli-blob-test/blockblobname51693763')
  .reply(200, "", { 'content-length': '10',
  'content-type': 'text/plain',
  'content-md5': 'aOEJ8PQMpyoV4FzCJ4b45g==',
  'last-modified': 'Fri, 12 Aug 2016 06:46:50 GMT',
  'accept-ranges': 'bytes',
  etag: '"0x8D3C27C700D5545"',
  vary: 'Origin',
  server: 'Windows-Azure-Blob/1.0 Microsoft-HTTPAPI/2.0',
  'x-ms-request-id': 'bb4e8827-0001-003c-0765-f422dc000000',
  'x-ms-version': '2015-04-05',
  'x-ms-write-protection': 'false',
  'x-ms-lease-status': 'unlocked',
  'x-ms-lease-state': 'available',
  'x-ms-blob-type': 'BlockBlob',
  date: 'Fri, 12 Aug 2016 06:46:49 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('http://xplat.blob.core.windows.net:443')
  .put('/storage-cli-blob-test/blockblobname51693763?comp=lease')
  .reply(201, "", { 'transfer-encoding': 'chunked',
  'last-modified': 'Fri, 12 Aug 2016 06:46:50 GMT',
  etag: '"0x8D3C27C700D5545"',
  server: 'Windows-Azure-Blob/1.0 Microsoft-HTTPAPI/2.0',
  'x-ms-request-id': '650e7d98-0001-0027-0465-f40c4e000000',
  'x-ms-version': '2015-04-05',
  'x-ms-lease-id': 'eb30d5aa-75b5-4a91-b72a-2795c49ff5e7',
  date: 'Fri, 12 Aug 2016 06:46:51 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('https://xplat.blob.core.windows.net:443')
  .put('/storage-cli-blob-test/blockblobname51693763?comp=lease')
  .reply(201, "", { 'transfer-encoding': 'chunked',
  'last-modified': 'Fri, 12 Aug 2016 06:46:50 GMT',
  etag: '"0x8D3C27C700D5545"',
  server: 'Windows-Azure-Blob/1.0 Microsoft-HTTPAPI/2.0',
  'x-ms-request-id': '650e7d98-0001-0027-0465-f40c4e000000',
  'x-ms-version': '2015-04-05',
  'x-ms-lease-id': 'eb30d5aa-75b5-4a91-b72a-2795c49ff5e7',
  date: 'Fri, 12 Aug 2016 06:46:51 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('http://xplat.blob.core.windows.net:443')
  .filteringRequestBody(function (path) { return '*';})
.put('/storage-cli-blob-test/blockblobname51693763', '*')
  .reply(412, "﻿<?xml version=\"1.0\" encoding=\"utf-8\"?><Error><Code>LeaseIdMissing</Code><Message>There is currently a lease on the blob and no lease ID was specified in the request.\nRequestId:0ea20c5e-0001-0013-6a65-f4a3e6000000\nTime:2016-08-12T06:46:52.1652668Z</Message></Error>", { 'content-length': '267',
  'content-type': 'application/xml',
  server: 'Windows-Azure-Blob/1.0 Microsoft-HTTPAPI/2.0',
  'x-ms-request-id': '0ea20c5e-0001-0013-6a65-f4a3e6000000',
  'x-ms-version': '2015-04-05',
  date: 'Fri, 12 Aug 2016 06:46:51 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('https://xplat.blob.core.windows.net:443')
  .filteringRequestBody(function (path) { return '*';})
.put('/storage-cli-blob-test/blockblobname51693763', '*')
  .reply(412, "﻿<?xml version=\"1.0\" encoding=\"utf-8\"?><Error><Code>LeaseIdMissing</Code><Message>There is currently a lease on the blob and no lease ID was specified in the request.\nRequestId:0ea20c5e-0001-0013-6a65-f4a3e6000000\nTime:2016-08-12T06:46:52.1652668Z</Message></Error>", { 'content-length': '267',
  'content-type': 'application/xml',
  server: 'Windows-Azure-Blob/1.0 Microsoft-HTTPAPI/2.0',
  'x-ms-request-id': '0ea20c5e-0001-0013-6a65-f4a3e6000000',
  'x-ms-version': '2015-04-05',
  date: 'Fri, 12 Aug 2016 06:46:51 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('http://xplat.blob.core.windows.net:443')
  .filteringRequestBody(function (path) { return '*';})
.put('/storage-cli-blob-test/blockblobname51693763', '*')
  .reply(201, "", { 'transfer-encoding': 'chunked',
  'content-md5': 'rG1yD4pD69MsOEPPGr72YA==',
  'last-modified': 'Fri, 12 Aug 2016 06:46:52 GMT',
  etag: '"0x8D3C27C716548EE"',
  server: 'Windows-Azure-Blob/1.0 Microsoft-HTTPAPI/2.0',
  'x-ms-request-id': 'cc721588-0001-003b-5065-f4d459000000',
  'x-ms-version': '2015-04-05',
  date: 'Fri, 12 Aug 2016 06:46:52 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('https://xplat.blob.core.windows.net:443')
  .filteringRequestBody(function (path) { return '*';})
.put('/storage-cli-blob-test/blockblobname51693763', '*')
  .reply(201, "", { 'transfer-encoding': 'chunked',
  'content-md5': 'rG1yD4pD69MsOEPPGr72YA==',
  'last-modified': 'Fri, 12 Aug 2016 06:46:52 GMT',
  etag: '"0x8D3C27C716548EE"',
  server: 'Windows-Azure-Blob/1.0 Microsoft-HTTPAPI/2.0',
  'x-ms-request-id': 'cc721588-0001-003b-5065-f4d459000000',
  'x-ms-version': '2015-04-05',
  date: 'Fri, 12 Aug 2016 06:46:52 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('http://xplat.blob.core.windows.net:443')
  .head('/storage-cli-blob-test/blockblobname51693763')
  .reply(200, "", { 'content-length': '17',
  'content-type': 'text/plain',
  'content-md5': 'rG1yD4pD69MsOEPPGr72YA==',
  'last-modified': 'Fri, 12 Aug 2016 06:46:52 GMT',
  'accept-ranges': 'bytes',
  etag: '"0x8D3C27C716548EE"',
  vary: 'Origin',
  server: 'Windows-Azure-Blob/1.0 Microsoft-HTTPAPI/2.0',
  'x-ms-request-id': '9b625164-0001-0026-6165-f40db3000000',
  'x-ms-version': '2015-04-05',
  'x-ms-write-protection': 'false',
  'x-ms-lease-status': 'locked',
  'x-ms-lease-state': 'leased',
  'x-ms-lease-duration': 'infinite',
  'x-ms-blob-type': 'BlockBlob',
  date: 'Fri, 12 Aug 2016 06:46:53 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('https://xplat.blob.core.windows.net:443')
  .head('/storage-cli-blob-test/blockblobname51693763')
  .reply(200, "", { 'content-length': '17',
  'content-type': 'text/plain',
  'content-md5': 'rG1yD4pD69MsOEPPGr72YA==',
  'last-modified': 'Fri, 12 Aug 2016 06:46:52 GMT',
  'accept-ranges': 'bytes',
  etag: '"0x8D3C27C716548EE"',
  vary: 'Origin',
  server: 'Windows-Azure-Blob/1.0 Microsoft-HTTPAPI/2.0',
  'x-ms-request-id': '9b625164-0001-0026-6165-f40db3000000',
  'x-ms-version': '2015-04-05',
  'x-ms-write-protection': 'false',
  'x-ms-lease-status': 'locked',
  'x-ms-lease-state': 'leased',
  'x-ms-lease-duration': 'infinite',
  'x-ms-blob-type': 'BlockBlob',
  date: 'Fri, 12 Aug 2016 06:46:53 GMT',
  connection: 'close' });
 return result; }]];
 exports.randomTestIdsGenerated = function() { return ['blockblobname51693763'];};