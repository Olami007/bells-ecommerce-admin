import React from "react";
import { Create, SelectInput, SimpleForm, TextInput } from "react-admin";

const UserCreate = (props) => (
  <Create {...props}>
    <SimpleForm>
      <TextInput source="id" />
      <TextInput source="first_name" />
      <TextInput source="last_name" />
      <TextInput source="email" />
      <TextInput source="phone" />

      <SelectInput
        source="sex"
        choices={[
          { id: "male", name: "male" },
          { id: "female", name: "female" },
        ]}
      />
      <TextInput source="address" />
      <TextInput source="nationality" />
      <TextInput source="region" />
      <TextInput source="password" />
    </SimpleForm>
  </Create>
);

export default UserCreate;
