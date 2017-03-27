import fetch from 'isomorphic-fetch';

const DEFAULT_CLIENT_BASE_URL = '/api';

class ApiClient {
  constructor(baseApiUrl) {
    this.baseApiUrl = baseApiUrl || DEFAULT_CLIENT_BASE_URL;
  }

  metaGet() {
    return fetch(`${this.baseApiUrl}/meta`)
      .then((res) => {
        if (res.status < 200 || res.status >= 300) {
          throw new Error('Bad response from server');
        }
        return res.json();
      });
  }
}

export default ApiClient;
