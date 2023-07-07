import React from "react";
import { Edit, SimpleForm, TextInput } from "react-admin";

const ProductEdit = (props) => (
  <Edit {...props}>
    <SimpleForm>
      <TextInput source="title" />
      <TextInput source="category" />
      <TextInput source="description" />
      <TextInput source="price" />
      <TextInput source="brand" />
      <TextInput source="rating" />
    </SimpleForm>
  </Edit>
);

export default ProductEdit;
