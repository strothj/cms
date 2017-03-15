import NodeCms from 'node-cms';

// TODO: Determine API base path programmatically.
const apiClient = new NodeCms.ApiClient();
apiClient.basePath = 'http://localhost:3000/api/v1';
if (process.env.NODE_ENV === 'development') () => {};
const siteApi = new NodeCms.SiteApi(apiClient);

export const SITE_META_SUCCESS = 'SITE_META_SUCCESS';
export const siteMetaSuccess = meta => ({
  type: SITE_META_SUCCESS,
  meta,
});

export const SITE_META_ERROR = 'SITE_META_ERROR';
export const siteMetaError = error => ({
  type: SITE_META_ERROR,
  error,
});

export const SITE_META_SETUP_REQUIRED = 'SITE_META_SETUP_REQUIRED';
export const siteMetaSetupRequired = () => ({
  type: SITE_META_SETUP_REQUIRED,
  meta: {
    setupRequired: true,
  },
});

export const fetchSiteMeta = () => dispatch => new Promise((resolve, reject) => {
  siteApi.siteGet((err, data, res) => {
    if (err) {
      dispatch(siteMetaError(err));
      reject(err);
      return;
    }
    if (res.status === 404) {
      dispatch(siteMetaSetupRequired());
      resolve();
      return;
    }
    dispatch(siteMetaSuccess(data));
    resolve();
  });
});
