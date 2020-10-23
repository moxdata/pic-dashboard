import * as React from "react";
import { 
  List, 
  Datagrid, 
  TextField, 
//   BooleanField, 
  Edit, 
  SimpleForm,
  TextInput,
//   BooleanInput,
//   NumberInput
} from 'react-admin';

export const DepartamentoList = props => (
    <List {...props}>
        <Datagrid rowClick="edit">
            <TextField source="id" />
            <TextField source="name" />
        </Datagrid>
    </List>
);


export const DepartamentoEdit = props => (
  <Edit {...props}>
      <SimpleForm>
          <TextInput disabled source="id" />
          <TextInput source="name" />
      </SimpleForm>
  </Edit>
);