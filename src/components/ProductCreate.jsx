import React from "react";
import { Create, SimpleForm, TextInput } from "react-admin";

const ProductCreate = (props) => (
  <Create {...props}>
    <SimpleForm>
      <TextInput source="id" />
      <TextInput source="title" />
      <TextInput source="description" />
      <TextInput source="price" />
      <TextInput source="discountPercentage" />
      <TextInput source="rating" />
      <TextInput source="stock" />
      <TextInput source="brand" />
      <TextInput source="category" />
      <TextInput source="thumbnail" />
    </SimpleForm>
  </Create>
);

export default ProductCreate;
