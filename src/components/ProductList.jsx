import React from "react";
import {
  List,
  Datagrid,
  TextField,
  EditButton,
  DeleteButton,
} from "react-admin";

const ProductList = (props) => (
  <List {...props}>
    <Datagrid>
      {/* <TextField source="_id" /> */}
      <TextField source="title" />
      <TextField source="brand" />
      <TextField source="category" />
      <TextField source="price" />
      <EditButton basepath="/products" />
      <DeleteButton basepath="/products" />
    </Datagrid>
  </List>
);

export default ProductList;
