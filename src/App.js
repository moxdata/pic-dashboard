import React from 'react';
import './App.css';
import { fetchUtils, Admin, Resource, ListGuesser } from 'react-admin';
import drfProvider from './dataProvider';
import authProvider from './authProvider';

const httpClient = (url, options = {}) => {
  if (!options.headers) {
      options.headers = new Headers();
  }
  const username = localStorage.getItem('username');
  const password = localStorage.getItem('password');
  options.headers.set('Authorization', 'Basic '+btoa(`${username}:${password}`));
  return fetchUtils.fetchJson(url, options);
};

const dataProvider = drfProvider(`${process.env.REACT_APP_API_URL}/ubigeo/api`, httpClient);
const App = () => (
  <Admin 
    authProvider={authProvider}
    dataProvider={dataProvider}
  >
    <Resource name="paises" list={ListGuesser} />
  </Admin>
)

export default App;
