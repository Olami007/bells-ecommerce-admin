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
      <TextField source="first_name" />
      <TextField source="last_name" />
      <TextField source="sex" />
      <TextField source="email" />
      <TextField source="phone" />
      <EditButton basepath="/users/user" />
      <DeleteButton basepath="/users/user" />
    </Datagrid>
  </List>
);

export default ProductList;
