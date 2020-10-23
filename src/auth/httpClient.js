import { fetchUtils } from 'react-admin';

const httpClient = (url, options = {}) => {
  if (!options.headers) {
      options.headers = new Headers();
  }
  const username = localStorage.getItem('username');
  const password = localStorage.getItem('password');
  options.headers.set('Authorization', 'Basic '+btoa(`${username}:${password}`));
  return fetchUtils.fetchJson(url, options);
};

export default httpClient;