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

exports.scopes = [
  /*shutodwn_vm*/
  [

    function (nock) {
      var result = nock('https://management.core.windows.net:443')
        .get('/db1ab6f0-4769-4b27-930e-01e2ef9c123c/services/hostedservices')
        .reply(200, "<HostedServices xmlns=\"http://schemas.microsoft.com/windowsazure\" xmlns:i=\"http://www.w3.org/2001/XMLSchema-instance\"><HostedService><Url>https://management.core.windows.net/bfb5e0bf-124b-4d0c-9352-7c0a9f4d9948/services/hostedservices/xplattestvm</Url><ServiceName>xplattestvm</ServiceName><HostedServiceProperties><Description>Implicitly created hosted service</Description><Location>West US</Location><Label>eHBsYXR0ZXN0dm0=</Label><Status>Created</Status><DateCreated>2013-11-22T05:21:47Z</DateCreated><DateLastModified>2013-11-22T05:22:06Z</DateLastModified><ExtendedProperties/></HostedServiceProperties></HostedService></HostedServices>", {
          'cache-control' : 'no-cache',
          'content-length' : '4051',
          'content-type' : 'application/xml; charset=utf-8',
          server : '1.0.6198.25 (rd_rdfe_stable.131118-1436) Microsoft-HTTPAPI/2.0',
          'x-ms-servedbyregion' : 'ussouth',
          'x-ms-request-id' : '5d885d0c15de3972b157f08150763761',
          date : 'Fri, 22 Nov 2013 05:21:37 GMT'
        });
      return result;
    },
    function (nock) {
      var result = nock('https://management.core.windows.net:443')
        .get('/db1ab6f0-4769-4b27-930e-01e2ef9c123c/services/hostedservices/xplattestvm/deploymentslots/Production')
        .reply(200, "<Deployment xmlns=\"http://schemas.microsoft.com/windowsazure\" xmlns:i=\"http://www.w3.org/2001/XMLSchema-instance\"><Name>xplattestvm</Name><DeploymentSlot>Production</DeploymentSlot><PrivateID>170effaeb0e34121aa192c4b1ee0a4a8</PrivateID><Status>Running</Status><Label>ZUhCc1lYUjBaWE4wZG0wPQ==</Label><Url>http://xplattestvm.cloudapp.net/</Url><Configuration>PFNlcnZpY2VDb25maWd1cmF0aW9uIHhtbG5zOnhzZD0iaHR0cDovL3d3dy53My5vcmcvMjAwMS9YTUxTY2hlbWEiIHhtbG5zOnhzaT0iaHR0cDovL3d3dy53My5vcmcvMjAwMS9YTUxTY2hlbWEtaW5zdGFuY2UiIHhtbG5zPSJodHRwOi8vc2NoZW1hcy5taWNyb3NvZnQuY29tL1NlcnZpY2VIb3N0aW5nLzIwMDgvMTAvU2VydmljZUNvbmZpZ3VyYXRpb24iPg0KICA8Um9sZSBuYW1lPSJ4cGxhdHRlc3R2bSI+DQogICAgPEluc3RhbmNlcyBjb3VudD0iMSIgLz4NCiAgPC9Sb2xlPg0KPC9TZXJ2aWNlQ29uZmlndXJhdGlvbj4=</Configuration><RoleInstanceList><RoleInstance><RoleName>xplattestvm</RoleName><InstanceName>xplattestvm</InstanceName><InstanceStatus>RoleStateUnknown</InstanceStatus><InstanceUpgradeDomain>0</InstanceUpgradeDomain><InstanceFaultDomain>0</InstanceFaultDomain><InstanceSize>Small</InstanceSize><InstanceStateDetails/><IpAddress>100.70.160.148</IpAddress><PowerState>Starting</PowerState></RoleInstance></RoleInstanceList><UpgradeDomainCount>1</UpgradeDomainCount><RoleList><Role i:type=\"PersistentVMRole\"><RoleName>xplattestvm</RoleName><OsVersion/><RoleType>PersistentVMRole</RoleType><ConfigurationSets><ConfigurationSet i:type=\"NetworkConfigurationSet\"><ConfigurationSetType>NetworkConfiguration</ConfigurationSetType><SubnetNames/></ConfigurationSet></ConfigurationSets><DataVirtualHardDisks/><OSVirtualHardDisk><HostCaching>ReadWrite</HostCaching><DiskName>xplattestvm-xplattestvm-0-201311220521540165</DiskName><MediaLink>http://acsforsdk2.blob.core.windows.net/vm-images/m4j0trul.1z0201311220521530491.vhd</MediaLink><SourceImageName>xplattestimg</SourceImageName><OS>Linux</OS></OSVirtualHardDisk><RoleSize>Small</RoleSize></Role></RoleList><SdkVersion/><Locked>false</Locked><RollbackAllowed>false</RollbackAllowed><CreatedTime>2013-11-22T05:21:52Z</CreatedTime><LastModifiedTime>2013-11-22T05:22:10Z</LastModifiedTime><ExtendedProperties/><PersistentVMDowntime><StartTime>2013-09-28T08:00:00Z</StartTime><EndTime>2013-10-04T20:00:00Z</EndTime><Status>PersistentVMUpdateCompleted</Status></PersistentVMDowntime><VirtualIPs><VirtualIP><Address>138.91.158.10</Address><IsDnsProgrammed>true</IsDnsProgrammed><Name>__PseudoBackEndContractVip</Name></VirtualIP></VirtualIPs></Deployment>", {
          'cache-control' : 'no-cache',
          'content-length' : '2445',
          'content-type' : 'application/xml; charset=utf-8',
          server : '1.0.6198.25 (rd_rdfe_stable.131118-1436) Microsoft-HTTPAPI/2.0',
          'x-ms-servedbyregion' : 'ussouth',
          'x-ms-request-id' : '23b475bd87883e1e9335b43052357f49',
          date : 'Fri, 22 Nov 2013 05:22:18 GMT'
        });
      return result;
    },
    function (nock) {
      var result = nock('https://management.core.windows.net:443')
        .filteringRequestBody(function (path) {
          return '*';
        })
        .post('/db1ab6f0-4769-4b27-930e-01e2ef9c123c/services/hostedservices/xplattestvm/deployments/xplattestvm/roleinstances/xplattestvm/Operations', '*')
        .reply(202, "", {
          'cache-control' : 'no-cache',
          'content-length' : '0',
          server : '1.0.6198.27 (rd_rdfe_stable.131122-1638) Microsoft-HTTPAPI/2.0',
          'x-ms-servedbyregion' : 'ussouth',
          'x-ms-request-id' : '287dc4aee07e3a5696bfb54a5d0a59d0',
          date : 'Mon, 25 Nov 2013 05:29:01 GMT'
        });
      return result;
    },
    function (nock) {
      var result = nock('https://management.core.windows.net:443')
        .get('/db1ab6f0-4769-4b27-930e-01e2ef9c123c/operations/287dc4aee07e3a5696bfb54a5d0a59d0')
        .reply(200, "<Operation xmlns=\"http://schemas.microsoft.com/windowsazure\" xmlns:i=\"http://www.w3.org/2001/XMLSchema-instance\"><ID>287dc4ae-e07e-3a56-96bf-b54a5d0a59d0</ID><Status>Succeeded</Status><HttpStatusCode>200</HttpStatusCode></Operation>", {
          'cache-control' : 'no-cache',
          'content-length' : '232',
          'content-type' : 'application/xml; charset=utf-8',
          server : '1.0.6198.27 (rd_rdfe_stable.131122-1638) Microsoft-HTTPAPI/2.0',
          'x-ms-servedbyregion' : 'ussouth',
          'x-ms-request-id' : 'd80c95b1b1613fc3b43e84c57c4c21a6',
          date : 'Mon, 25 Nov 2013 05:29:07 GMT'
        });
      return result;
    }
  ],
  /*capture_image*/
  [

    function (nock) {
      var result = nock('https://management.core.windows.net:443')
        .get('/db1ab6f0-4769-4b27-930e-01e2ef9c123c/services/hostedservices')
        .reply(200, "<HostedServices xmlns=\"http://schemas.microsoft.com/windowsazure\" xmlns:i=\"http://www.w3.org/2001/XMLSchema-instance\"><HostedService><Url>https://management.core.windows.net/bfb5e0bf-124b-4d0c-9352-7c0a9f4d9948/services/hostedservices/xplattestvm</Url><ServiceName>xplattestvm</ServiceName><HostedServiceProperties><Description>Implicitly created hosted service</Description><Location>West US</Location><Label>eHBsYXR0ZXN0dm0=</Label><Status>Created</Status><DateCreated>2013-11-22T05:21:47Z</DateCreated><DateLastModified>2013-11-22T05:22:06Z</DateLastModified><ExtendedProperties/></HostedServiceProperties></HostedService></HostedServices>", {
          'cache-control' : 'no-cache',
          'content-length' : '4051',
          'content-type' : 'application/xml; charset=utf-8',
          server : '1.0.6198.25 (rd_rdfe_stable.131118-1436) Microsoft-HTTPAPI/2.0',
          'x-ms-servedbyregion' : 'ussouth',
          'x-ms-request-id' : '5d885d0c15de3972b157f08150763761',
          date : 'Fri, 22 Nov 2013 05:21:37 GMT'
        });
      return result;
    },
    function (nock) {
      var result = nock('https://management.core.windows.net:443')
        .get('/db1ab6f0-4769-4b27-930e-01e2ef9c123c/services/hostedservices/xplattestvm/deploymentslots/Production')
        .reply(200, "<Deployment xmlns=\"http://schemas.microsoft.com/windowsazure\" xmlns:i=\"http://www.w3.org/2001/XMLSchema-instance\"><Name>xplattestvm</Name><DeploymentSlot>Production</DeploymentSlot><PrivateID>a25f927e85fe49b2b9a85bf4e69f2784</PrivateID><Status>Suspended</Status><Label>ZUhCc1lYUjBaWE4wZG0wPQ==</Label><Url>http://xplattestvm.cloudapp.net/</Url><Configuration>PFNlcnZpY2VDb25maWd1cmF0aW9uIHhtbG5zOnhzZD0iaHR0cDovL3d3dy53My5vcmcvMjAwMS9YTUxTY2hlbWEiIHhtbG5zOnhzaT0iaHR0cDovL3d3dy53My5vcmcvMjAwMS9YTUxTY2hlbWEtaW5zdGFuY2UiIHhtbG5zPSJodHRwOi8vc2NoZW1hcy5taWNyb3NvZnQuY29tL1NlcnZpY2VIb3N0aW5nLzIwMDgvMTAvU2VydmljZUNvbmZpZ3VyYXRpb24iPg0KICA8Um9sZSBuYW1lPSJ4cGxhdHRlc3R2bSI+DQogICAgPEluc3RhbmNlcyBjb3VudD0iMSIgLz4NCiAgPC9Sb2xlPg0KPC9TZXJ2aWNlQ29uZmlndXJhdGlvbj4=</Configuration><RoleInstanceList><RoleInstance><RoleName>xplattestvm</RoleName><InstanceName>xplattestvm</InstanceName><InstanceStatus>StoppedDeallocated</InstanceStatus><PowerState>Stopped</PowerState></RoleInstance></RoleInstanceList><UpgradeDomainCount>1</UpgradeDomainCount><RoleList><Role i:type=\"PersistentVMRole\"><RoleName>xplattestvm</RoleName><OsVersion/><RoleType>PersistentVMRole</RoleType><ConfigurationSets><ConfigurationSet i:type=\"NetworkConfigurationSet\"><ConfigurationSetType>NetworkConfiguration</ConfigurationSetType><SubnetNames/></ConfigurationSet></ConfigurationSets><DataVirtualHardDisks/><OSVirtualHardDisk><HostCaching>ReadWrite</HostCaching><DiskName>xplattestvm-xplattestvm-0-201311221958580002</DiskName><MediaLink>http://acsforsdk2.blob.core.windows.net/vm-images/j0iislbb.fmp201311221958260919.vhd</MediaLink><SourceImageName>xplattestimg</SourceImageName><OS>Linux</OS></OSVirtualHardDisk><RoleSize>Small</RoleSize></Role></RoleList><SdkVersion/><Locked>false</Locked><RollbackAllowed>false</RollbackAllowed><CreatedTime>2013-11-22T19:56:33Z</CreatedTime><LastModifiedTime>2013-11-25T05:29:08Z</LastModifiedTime><ExtendedProperties/><PersistentVMDowntime><StartTime>2013-09-27T17:00:00Z</StartTime><EndTime>2013-09-29T05:00:00Z</EndTime><Status>PersistentVMUpdateCompleted</Status></PersistentVMDowntime><VirtualIPs/></Deployment>", {
          'cache-control' : 'no-cache',
          'content-length' : '2445',
          'content-type' : 'application/xml; charset=utf-8',
          server : '1.0.6198.25 (rd_rdfe_stable.131118-1436) Microsoft-HTTPAPI/2.0',
          'x-ms-servedbyregion' : 'ussouth',
          'x-ms-request-id' : '23b475bd87883e1e9335b43052357f49',
          date : 'Fri, 22 Nov 2013 05:22:18 GMT'
        });
      return result;
    },
    function (nock) {
      var result = nock('https://management.core.windows.net:443')
        .filteringRequestBody(function (path) {
          return '*';
        })
        .post('/db1ab6f0-4769-4b27-930e-01e2ef9c123c/services/hostedservices/xplattestvm/deployments/xplattestvm/roleinstances/xplattestvm/Operations', '*')
        .reply(202, "", {
          'cache-control' : 'no-cache',
          'content-length' : '0',
          server : '1.0.6198.27 (rd_rdfe_stable.131122-1638) Microsoft-HTTPAPI/2.0',
          'x-ms-servedbyregion' : 'ussouth',
          'x-ms-request-id' : 'b970e9b918f130b78ea8a5b78b4dbda6',
          date : 'Mon, 25 Nov 2013 07:15:16 GMT'
        });
      return result;
    },
    function (nock) {
      var result = nock('https://management.core.windows.net:443')
        .get('/db1ab6f0-4769-4b27-930e-01e2ef9c123c/operations/b970e9b918f130b78ea8a5b78b4dbda6')
        .reply(200, "<Operation xmlns=\"http://schemas.microsoft.com/windowsazure\" xmlns:i=\"http://www.w3.org/2001/XMLSchema-instance\"><ID>287dc4ae-e07e-3a56-96bf-b54a5d0a59d0</ID><Status>Succeeded</Status><HttpStatusCode>200</HttpStatusCode></Operation>", {
          'cache-control' : 'no-cache',
          'content-length' : '232',
          'content-type' : 'application/xml; charset=utf-8',
          server : '1.0.6198.27 (rd_rdfe_stable.131122-1638) Microsoft-HTTPAPI/2.0',
          'x-ms-servedbyregion' : 'ussouth',
          'x-ms-request-id' : 'd80c95b1b1613fc3b43e84c57c4c21a6',
          date : 'Mon, 25 Nov 2013 05:29:07 GMT'
        });
      return result;
    }
  ],
  /*list captured images in vm image*/
  [
    function (nock) {
      var result = nock('https://management.core.windows.net:443')
        .get('/db1ab6f0-4769-4b27-930e-01e2ef9c123c/services/images')
        .reply(200, "<Images xmlns=\"http://schemas.microsoft.com/windowsazure\" xmlns:i=\"http://www.w3.org/2001/XMLSchema-instance\"><OSImage><Category>Public</Category><Label>xplattestcapimg</Label><Location>West US;East Asia;Southeast Asia;North Europe;West Europe;East US</Location><LogicalSizeInGB>10</LogicalSizeInGB><Name>xplattestcapimg</Name><OS>Linux</OS><Eula>http://support.rightscale.com/12-Guides/RightLink/RightLink_End_User_License_Agreeement</Eula><Description>xplattestcapimg</Description><ImageFamily>RightScale Linux v13</ImageFamily><ShowInGui>false</ShowInGui><PublishedDate>2012-08-28T00:00:00Z</PublishedDate><IsPremium>false</IsPremium><PrivacyUri>http://www.rightscale.com/privacy_policy.php</PrivacyUri><PublisherName>RightScale with Linux</PublisherName></OSImage></Images>", {
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
  ],
  /*delete image*/
  [

    function (nock) {
      var result = nock('https://management.core.windows.net:443')
        .get('/db1ab6f0-4769-4b27-930e-01e2ef9c123c/services/images/xplattestcapimg')
        .reply(200, "<OSImage xmlns=\"http://schemas.microsoft.com/windowsazure\" xmlns:i=\"http://www.w3.org/2001/XMLSchema-instance\"><Category>User</Category><Label>xplattestcapimg</Label><Location>West US</Location><LogicalSizeInGB>10</LogicalSizeInGB><MediaLink>http://acsforsdk2.blob.core.windows.net/vm-images/xplattestcapimg</MediaLink><Name>xplattestcapimg</Name><OS>Linux</OS><IsPremium>false</IsPremium><PublisherName>User</PublisherName></OSImage>", {
          'cache-control' : 'no-cache',
          'content-length' : '425',
          'content-type' : 'application/xml; charset=utf-8',
          server : '1.0.6198.25 (rd_rdfe_stable.131118-1436) Microsoft-HTTPAPI/2.0',
          'x-ms-servedbyregion' : 'ussouth',
          'x-ms-request-id' : '2e21aebf82a636cebfbdec38c6064c4f',
          date : 'Fri, 22 Nov 2013 04:44:08 GMT'
        });
      return result;
    },
    function (nock) {
      var result = nock('https://management.core.windows.net:443')
        .delete('/db1ab6f0-4769-4b27-930e-01e2ef9c123c/services/images/xplattestcapimg?comp=media')
        .reply(200, "", {
          'cache-control' : 'no-cache',
          'content-length' : '0',
          server : '1.0.6198.27 (rd_rdfe_stable.131122-1638) Microsoft-HTTPAPI/2.0',
          'x-ms-servedbyregion' : 'ussouth',
          'x-ms-request-id' : '3e8e07a7838b32c3a1074b06703a9e1c',
          date : 'Mon, 25 Nov 2013 07:18:55 GMT'
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
      var result = nock('https://management.core.windows.net:443')
        .delete('/db1ab6f0-4769-4b27-930e-01e2ef9c123c/services/hostedservices/xplattestvm')
        .reply(202, "", {
          'cache-control' : 'no-cache',
          'content-length' : '0',
          server : '1.0.6198.27 (rd_rdfe_stable.131122-1638) Microsoft-HTTPAPI/2.0',
          'x-ms-servedbyregion' : 'ussouth',
          'x-ms-request-id' : '3471d1bbc4da327d93b67067ece7e954',
          date : 'Mon, 25 Nov 2013 12:03:56 GMT'
        });
      return result;
    },
    function (nock) {
      var result =
        nock('http://acsforsdk2.blob.core.windows.net:80/')
        .delete('/vm-images/xplattestcapimg')
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
    }
  ]
]