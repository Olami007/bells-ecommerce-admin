import React from "react";
import { Edit, SimpleForm, TextInput } from "react-admin";

const UserEdit = (props) => (
  <Edit {...props}>
    <SimpleForm>
      <TextInput source="first_name" />
      <TextInput source="last_name" />
      <TextInput source="email" />
      <TextInput source="phone" />
    </SimpleForm>
  </Edit>
);

export default UserEdit;
