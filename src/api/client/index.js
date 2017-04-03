import fetch from 'isomorphic-fetch';

const DEFAULT_CLIENT_BASE_URL = '/api';

const verifyGetCode = res => new Promise((resolve, reject) => {
  if (res.status < 200 || res.status >= 300) {
    const error = new Error('Bad response from server');
    error.response = res;
    reject(error);
    return;
  }
  resolve(res);
});

const responseToJson = res => res.json();

class ApiClient {
  constructor(baseApiUrl) {
    this.baseApiUrl = baseApiUrl || DEFAULT_CLIENT_BASE_URL;
  }

  fetchPath(path) {
    return fetch(`${this.baseApiUrl}${path}`).then(verifyGetCode).then(responseToJson);
  }

  metaGet() {
    return this.fetchPath('/meta');
  }

  themeGet() {
    return this.fetchPath('/theme');
  }

  recentGet() {
    return this.fetchPath('/recent');
  }

  postsGet() {
    return this.fetchPath('/posts');
  }
}

export default ApiClient;
