import * as React from "react";
import { 
  List, 
  Datagrid, 
  TextField, 
  BooleanField, 
  Edit, 
  SimpleForm,
  TextInput,
  BooleanInput,
  NumberInput
} from 'react-admin';

export const PaisList = props => (
    <List {...props}>
        <Datagrid rowClick="edit">
            <TextField source="id" />
            <TextField source="name" />
            <TextField source="iso_sigla" />
            <BooleanField source="activo" />
        </Datagrid>
    </List>
);


export const PaisEdit = props => (
  <Edit {...props}>
      <SimpleForm>
          <TextInput disabled source="id" />
          <TextInput source="code_table" />
          <TextInput source="code_sunat" />
          <TextInput source="name" />
          <TextInput source="nacion_pais" />
          <TextInput source="codigo_postal" />
          <TextInput source="iso_sigla" />
          <NumberInput source="iso_number" />
          <NumberInput source="factor_igv" />
          <BooleanInput source="activo" />
      </SimpleForm>
  </Edit>
);