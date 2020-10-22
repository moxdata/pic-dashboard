import React from 'react';
import './App.css';
import { Admin, Resource, ListGuesser } from 'react-admin';
import drfProvider from './dataProvider'
 
const dataProvider = drfProvider('http://localhost:8000/ubigeo/api');
const App = () => (
  <Admin dataProvider={dataProvider}>
    <Resource name="paises" list={ListGuesser} />
  </Admin>
)

export default App;
