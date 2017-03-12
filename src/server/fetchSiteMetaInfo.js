import NodeCms from 'node-cms';

// TODO: Use listening port from web server.
const apiClient = new NodeCms.ApiClient();
apiClient.basePath = 'http://localhost:3000/api/v1';
const siteApi = new NodeCms.SiteApi(apiClient);

export default () => new Promise((resolve, reject) => {
  siteApi.siteGet((err, data, res) => {
    if (res.status === 404 || 200) {
      resolve(data);
      return;
    }
    if (err) {
      reject(err);
      return;
    }
    reject('Unexpected response');
  });
});
