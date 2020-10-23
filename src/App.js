import React from 'react';
import { Admin, Resource } from 'react-admin';
import drfProvider from './auth/dataProvider';
import authProvider from './auth/authProvider';
import httpClient from './auth/httpClient';
import { PaisList, PaisEdit } from './components/paises';
import { DepartamentoList, DepartamentoEdit } from './components/departamentos';

const dataProvider = drfProvider(`${process.env.REACT_APP_API_URL}/ubigeo/api`, httpClient);
const App = () => (
  <Admin 
    authProvider={authProvider}
    dataProvider={dataProvider}
  >
    <Resource name="paises" list={PaisList} edit={PaisEdit}/>
    <Resource name="departamentos" list={DepartamentoList} edit={DepartamentoEdit}/>
  </Admin>
)

export default App;
