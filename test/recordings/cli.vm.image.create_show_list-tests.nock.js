// This file has been autogenerated.
var profile = require('../../lib/util/profile');
exports.getMockedProfile = function () {
  var newProfile = new profile.Profile();

  newProfile.addSubscription(new profile.Subscription({
      id : 'db1ab6f0-4769-4b27-930e-01e2ef9c123c',
      managementCertificate : {
        key : 'mockedKey',
        cert : 'mockedCert'
      },
      name : 'Azure SDK sandbox',
      username : 'user@domain.example',
      registeredProviders : ['website', 'sqlserver'],
      registeredResourceNamespaces : [],
      isDefault : true
    }, newProfile.environments['AzureCloud']));

  return newProfile;
};
exports.setEnvironment = function () {
  process.env['AZURE_VM_TEST_LOCATION'] = 'West US';
}

exports.scopes = [
  /*Create Image*/
  [
    function (nock) {
      var result = nock('https://management.core.windows.net:443')
        .get('/db1ab6f0-4769-4b27-930e-01e2ef9c123c/services/disks')
        .reply(200, "<Disks xmlns=\"http://schemas.microsoft.com/windowsazure\" xmlns:i=\"http://www.w3.org/2001/XMLSchema-instance\"><Disk><OS>Linux</OS><Label>asianux4</Label><Location>West US</Location><LogicalDiskSizeInGB>10</LogicalDiskSizeInGB><MediaLink>http://acsforsdk2.blob.core.windows.net/vhds/asianux4.vhd</MediaLink><Name>asianux4</Name><IsPremium>false</IsPremium></Disk></Disks>", {
          'cache-control' : 'no-cache',
          'content-length' : '365',
          'content-type' : 'application/xml; charset=utf-8',
          server : '1.0.6198.12 (rd_rdfe_stable.131001-0757) Microsoft-HTTPAPI/2.0',
          'x-ms-servedbyregion' : 'ussouth',
          'x-ms-request-id' : 'e35f366509f81369badd171d37d21063',
          date : 'Mon, 14 Oct 2013 15:08:58 GMT'
        });
      return result;
    },
    function (nock) {
      var result = nock('https://management.core.windows.net:443')
        .get('/db1ab6f0-4769-4b27-930e-01e2ef9c123c/locations')
        .reply(200, "<Locations xmlns=\"http://schemas.microsoft.com/windowsazure\" xmlns:i=\"http://www.w3.org/2001/XMLSchema-instance\"><Location><Name>East Asia</Name><DisplayName>East Asia</DisplayName><AvailableServices><AvailableService>Compute</AvailableService><AvailableService>Storage</AvailableService><AvailableService>PersistentVMRole</AvailableService><AvailableService>HighMemory</AvailableService></AvailableServices></Location><Location><Name>Southeast Asia</Name><DisplayName>Southeast Asia</DisplayName><AvailableServices><AvailableService>Compute</AvailableService><AvailableService>Storage</AvailableService><AvailableService>PersistentVMRole</AvailableService><AvailableService>HighMemory</AvailableService></AvailableServices></Location><Location><Name>North Europe</Name><DisplayName>North Europe</DisplayName><AvailableServices><AvailableService>Compute</AvailableService><AvailableService>Storage</AvailableService><AvailableService>PersistentVMRole</AvailableService><AvailableService>HighMemory</AvailableService></AvailableServices></Location><Location><Name>West Europe</Name><DisplayName>West Europe</DisplayName><AvailableServices><AvailableService>Compute</AvailableService><AvailableService>Storage</AvailableService><AvailableService>PersistentVMRole</AvailableService><AvailableService>HighMemory</AvailableService></AvailableServices></Location><Location><Name>East US</Name><DisplayName>East US</DisplayName><AvailableServices><AvailableService>Compute</AvailableService><AvailableService>Storage</AvailableService><AvailableService>PersistentVMRole</AvailableService><AvailableService>HighMemory</AvailableService></AvailableServices></Location><Location><Name>North Central US</Name><DisplayName>North Central US</DisplayName><AvailableServices><AvailableService>Compute</AvailableService><AvailableService>Storage</AvailableService></AvailableServices></Location><Location><Name>South Central US</Name><DisplayName>South Central US</DisplayName><AvailableServices><AvailableService>Compute</AvailableService><AvailableService>Storage</AvailableService></AvailableServices></Location><Location><Name>West US</Name><DisplayName>West US</DisplayName><AvailableServices><AvailableService>Compute</AvailableService><AvailableService>Storage</AvailableService><AvailableService>PersistentVMRole</AvailableService><AvailableService>HighMemory</AvailableService></AvailableServices></Location></Locations>", {
          'cache-control' : 'no-cache',
          'content-length' : '2413',
          'content-type' : 'application/xml; charset=utf-8',
          server : '1.0.6198.25 (rd_rdfe_stable.131118-1436) Microsoft-HTTPAPI/2.0',
          'x-ms-servedbyregion' : 'ussouth',
          'x-ms-request-id' : 'c6b61dd1e42a3581b07792eb93a77d35',
          date : 'Thu, 21 Nov 2013 13:48:36 GMT'
        });
      return result;
    },
    function (nock) {
      var result =
        nock('https://management.core.windows.net:443')
        .get('/db1ab6f0-4769-4b27-930e-01e2ef9c123c/services/storageservices/acsforsdk2/keys')
        .reply(200, "<StorageService xmlns=\"http://schemas.microsoft.com/windowsazure\" xmlns:i=\"http://www.w3.org/2001/XMLSchema-instance\"><Url>https://management.core.windows.net/bfb5e0bf-124b-4d0c-9352-7c0a9f4d9948/services/storageservices/acsforsdk2</Url><StorageServiceKeys><Primary>1IU5o+vRtVBLHC5RFtXXu/DYl6mmGKupYKWL+liqunMo/IbJxz8Y0hSAwMkOUTtsTpR9adL63fx2Ujd7mMGSaA==</Primary><Secondary>HrJd4UZKe6proYpL643G97R7zdeSJW7YBFCYtCX1Kl6LTBevmuMu3+H5UwROS9qJI4EFQZZnVfwHEWaz/Lh0FQ==</Secondary></StorageServiceKeys></StorageService>", {
          'cache-control' : 'no-cache',
          'content-length' : '513',
          'content-type' : 'application/xml; charset=utf-8',
          server : '1.0.6198.25 (rd_rdfe_stable.131118-1436) Microsoft-HTTPAPI/2.0',
          'x-ms-servedbyregion' : 'ussouth',
          'x-ms-request-id' : '463ad078b2c93a928539137287b1d3b9',
          date : 'Thu, 21 Nov 2013 13:48:39 GMT'
        });
      return result;
    },
    function (nock) {
      var result =
        nock('https://management.core.windows.net:443')
        .get('/db1ab6f0-4769-4b27-930e-01e2ef9c123c/services/storageservices/acsforsdk2')
        .reply(200, "<StorageService xmlns=\"http://schemas.microsoft.com/windowsazure\" xmlns:i=\"http://www.w3.org/2001/XMLSchema-instance\"><Url>https://management.core.windows.net/bfb5e0bf-124b-4d0c-9352-7c0a9f4d9948/services/storageservices/acsforsdk2</Url><ServiceName>acsforsdk2</ServiceName><StorageServiceProperties><Description/><Location>West US</Location><Label>YWNzZm9yc2RrMg==</Label><Status>Created</Status><Endpoints><Endpoint>http://acsforsdk2.blob.core.windows.net/</Endpoint><Endpoint>http://acsforsdk2.queue.core.windows.net/</Endpoint><Endpoint>http://acsforsdk2.table.core.windows.net/</Endpoint></Endpoints><GeoReplicationEnabled>true</GeoReplicationEnabled><GeoPrimaryRegion>West US</GeoPrimaryRegion><GeoSecondaryRegion>East US</GeoSecondaryRegion><CreationTime>2013-09-10T19:24:30Z</CreationTime><CustomDomains/></StorageServiceProperties><ExtendedProperties/><Capabilities><Capability>PersistentVMRole</Capability></Capabilities></StorageService>", {
          'cache-control' : 'no-cache',
          'content-length' : '948',
          'content-type' : 'application/xml; charset=utf-8',
          server : '1.0.6198.25 (rd_rdfe_stable.131118-1436) Microsoft-HTTPAPI/2.0',
          'x-ms-servedbyregion' : 'ussouth',
          'x-ms-request-id' : '81dce72f88e8346c9690658e81211cb5',
          date : 'Thu, 21 Nov 2013 13:48:38 GMT'
        });
      return result;
    },
    function (nock) {
      var result =
        nock('http://acsforsdk2.blob.core.windows.net:80/')
        .put('/vm-images?restype=container')
        .reply(200, "", {
          'transfer-encoding' : 'chunked',
          'last-modified' : 'Tue, 13 Aug 2013 05:30:35 GMT',
          etag : '"0x8D065FD5EE02DC0"',
          server : 'Windows-Azure-Blob/1.0 Microsoft-HTTPAPI/2.0',
          'x-ms-request-id' : 'a011fb63-327d-47f7-8476-38980a2e4674',
          'x-ms-version' : '2012-02-12',
          date : 'Tue, 13 Aug 2013 05:30:34 GMT'
        });
      return result;
    },
    function (nock) {
      var result =
        nock('http://acsforsdk2.blob.core.windows.net:80/')
        .put('/vm-images/xplattestimg')
        .reply(200, "", {
          'transfer-encoding' : 'chunked',
          'last-modified' : 'Thu, 21 Nov 2013 13:48:41 GMT',
          etag : '"0x8D0B4D785F9E331"',
          server : 'Windows-Azure-Blob/1.0 Microsoft-HTTPAPI/2.0',
          'x-ms-request-id' : 'cc6902fe-f10a-44b3-b9e7-56fe9f0e85c5',
          'x-ms-version' : '2012-02-12',
          'x-ms-copy-id' : '067a3ac3-7fb2-47a8-a316-7b44b1108afa',
          'x-ms-copy-status' : 'pending',
          date : 'Thu, 21 Nov 2013 13:48:41 GMT'
        });
      return result;
    },
    function (nock) {
      var result =
        nock('http://acsforsdk2.blob.core.windows.net:80/')
        .head('/vm-images/xplattestimg')
        .reply(200, "", {
          'content-length' : '10737418752',
          'content-type' : 'application/octet-stream',
          'content-md5' : '0A1vshIfGr2Q6rvBDpzR9w==',
          'last-modified' : 'Thu, 21 Nov 2013 13:54:50 GMT',
          etag : '"0x8D0B4D861A4E93A"',
          server : 'Windows-Azure-Blob/1.0 Microsoft-HTTPAPI/2.0',
          'x-ms-request-id' : '4f47b197-d8cc-4894-9cda-d1b964045d60',
          'x-ms-version' : '2012-02-12',
          'x-ms-lease-status' : 'unlocked',
          'x-ms-lease-state' : 'available',
          'x-ms-blob-type' : 'PageBlob',
          'x-ms-blob-sequence-number' : '1',
          'x-ms-copy-id' : '067a3ac3-7fb2-47a8-a316-7b44b1108afa',
          'x-ms-copy-source' : 'https://acsforsdk2.blob.core.windows.net/vhds/asianux4.vhd',
          'x-ms-copy-status' : 'success',
          'x-ms-copy-progress' : '10737418752/10737418752',
          'x-ms-copy-completion-time' : 'Thu, 21 Nov 2013 13:54:50 GMT',
          date : 'Thu, 21 Nov 2013 13:54:51 GMT'
        });
      return result;
    },
    function (nock) {
      var result =
        nock('https://management.core.windows.net:443')
        .filteringRequestBody(function (path) {
          return '*';
        })
        .post('/db1ab6f0-4769-4b27-930e-01e2ef9c123c/services/images', '*')
        .reply(200, "<Images xmlns=\"http://schemas.microsoft.com/windowsazure\" xmlns:i=\"http://www.w3.org/2001/XMLSchema-instance\"><OSImage><Category>Public</Category><Label>RightImage CentOS 6.2 x64 v5.8.8.1</Label><Location>West US;East Asia;Southeast Asia;North Europe;West Europe;East US</Location><LogicalSizeInGB>10</LogicalSizeInGB><Name>0b11de9248dd4d87b18621318e037d37__RightImage-CentOS-6.2-x64-v5.8.8.1</Name><OS>Linux</OS><Eula>http://support.rightscale.com/12-Guides/RightLink/RightLink_End_User_License_Agreeement</Eula><Description>CentOS 6.3 with RightLink 5.8.</Description><ImageFamily>RightScale Linux v13</ImageFamily><ShowInGui>false</ShowInGui><PublishedDate>2012-08-28T00:00:00Z</PublishedDate><IsPremium>false</IsPremium><PrivacyUri>http://www.rightscale.com/privacy_policy.php</PrivacyUri><PublisherName>RightScale with Linux</PublisherName></OSImage></Images>", {
          'cache-control' : 'no-cache',
          'content-length' : '352',
          'content-type' : 'application/xml; charset=utf-8',
          server : '1.0.6198.25 (rd_rdfe_stable.131118-1436) Microsoft-HTTPAPI/2.0',
          'x-ms-servedbyregion' : 'ussouth',
          'x-ms-request-id' : 'be25cf2d831e3ddaa04e3cbc83929201',
          date : 'Thu, 21 Nov 2013 13:54:55 GMT'
        });
      return result;
    }
  ],
  /*show image*/
  [
    function (nock) {
      var result =
        nock('https://management.core.windows.net:443')
        .get('/db1ab6f0-4769-4b27-930e-01e2ef9c123c/services/images/xplattestimg')
        .reply(200, "<OSImage xmlns=\"http://schemas.microsoft.com/windowsazure\" xmlns:i=\"http://www.w3.org/2001/XMLSchema-instance\"><Category>User</Category><Label>xplattestimg</Label><Location>West US</Location><LogicalSizeInGB>10</LogicalSizeInGB><MediaLink>http://acsforsdk2.blob.core.windows.net/vm-images/xplattestimg</MediaLink><Name>xplattestimg</Name><OS>Linux</OS><IsPremium>false</IsPremium><PublisherName>User</PublisherName></OSImage>", {
          'cache-control' : 'no-cache',
          'content-length' : '425',
          'content-type' : 'application/xml; charset=utf-8',
          server : '1.0.6198.25 (rd_rdfe_stable.131118-1436) Microsoft-HTTPAPI/2.0',
          'x-ms-servedbyregion' : 'ussouth',
          'x-ms-request-id' : '2e21aebf82a636cebfbdec38c6064c4f',
          date : 'Fri, 22 Nov 2013 04:44:08 GMT'
        });
      return result;
    }
  ],
  /*list image*/
  [
    function (nock) {
      var result = nock('https://management.core.windows.net:443')
        .get('/db1ab6f0-4769-4b27-930e-01e2ef9c123c/services/images')
        .reply(200, "<Images xmlns=\"http://schemas.microsoft.com/windowsazure\" xmlns:i=\"http://www.w3.org/2001/XMLSchema-instance\"><OSImage><Category>Public</Category><Label>RightImage CentOS 6.2 x64 v5.8.8.1</Label><Location>West US;East Asia;Southeast Asia;North Europe;West Europe;East US</Location><LogicalSizeInGB>10</LogicalSizeInGB><Name>0b11de9248dd4d87b18621318e037d37__RightImage-CentOS-6.2-x64-v5.8.8.1</Name><OS>Linux</OS><Eula>http://support.rightscale.com/12-Guides/RightLink/RightLink_End_User_License_Agreeement</Eula><Description>CentOS 6.3 with RightLink 5.8.</Description><ImageFamily>RightScale Linux v13</ImageFamily><ShowInGui>false</ShowInGui><PublishedDate>2012-08-28T00:00:00Z</PublishedDate><IsPremium>false</IsPremium><PrivacyUri>http://www.rightscale.com/privacy_policy.php</PrivacyUri><PublisherName>RightScale with Linux</PublisherName></OSImage></Images>", {
          'cache-control' : 'no-cache',
          'content-length' : '183188',
          'content-type' : 'application/xml; charset=utf-8',
          server : '1.0.6198.25 (rd_rdfe_stable.131118-1436) Microsoft-HTTPAPI/2.0',
          'x-ms-servedbyregion' : 'ussouth',
          'x-ms-request-id' : '3c1093e5080635829fc5aeffaaedbc47',
          date : 'Fri, 22 Nov 2013 05:21:34 GMT'
        });
      return result;
    },
	function (nock) {
      var result = nock('https://management.core.windows.net:443')
        .get('/db1ab6f0-4769-4b27-930e-01e2ef9c123c/services/vmimages')
        .reply(200, "<VMImages xmlns=\"http://schemas.microsoft.com/windowsazure\" xmlns:i=\"http://www.w3.org/2001/XMLSchema-instance\"><VMImage><Name>nerdworksub1-20140716-893917</Name><Label>nerdworks-ubuntu-image1</Label><Category>User</Category><OSDiskConfiguration><Name>nerdworksub1-20140716-893917-os-2014-07-17</Name><HostCaching>ReadWrite</HostCaching><OSState>Specialized</OSState><OS>Linux</OS><MediaLink>https://acsforsdk2.blob.core.windows.net/vhd-store/nerdworksub1-20140716-893917-os-2014-07-17.vhd</MediaLink><LogicalDiskSizeInGB>30</LogicalDiskSizeInGB></OSDiskConfiguration><DataDiskConfigurations/><ServiceName>nerdworksub1</ServiceName><DeploymentName>nerdworksub1</DeploymentName><RoleName>nerdworksub1</RoleName><Location>West US</Location><CreatedTime>2014-07-17T04:48:06.0038647Z</CreatedTime><ModifiedTime>2014-07-17T04:48:06.0038647Z</ModifiedTime><IsPremium>false</IsPremium></VMImage></VMImages>", {
          'cache-control' : 'no-cache',
          'content-length' : '183188',
          'content-type' : 'application/xml; charset=utf-8',
          server : '1.0.6198.25 (rd_rdfe_stable.131118-1436) Microsoft-HTTPAPI/2.0',
          'x-ms-servedbyregion' : 'ussouth',
          'x-ms-request-id' : '3c1093e5080635829fc5aeffaaedbc47',
          date : 'Fri, 22 Nov 2013 05:21:34 GMT'
        });
      return result;
    }
  ]
]