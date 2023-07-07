import React from "react";
import { Admin, Resource, fetchUtils } from "react-admin";

import ProductList from "./components/ProductList";
import ProductEdit from "./components/ProductEdit";
import ProductCreate from "./components/ProductCreate";
import UserList from "./components/UserList";
import UserEdit from "./components/UserEdit";
import UserCreate from "./components/UserCreate";
import { api } from "./services/api";

const httpClient = fetchUtils.fetchJson;

const dataProvider = {
  getList: async (resource, params) => {
    try {
      // const data = await getProduct();
      const res = await fetch(`${api}${resource}`);
      const data = await res.json();

      // return {
      //   data: data,
      //   total: data.length,
      // };

      // Convert _id to id for each object in the data array
      const transformedData = data.map((item) => {
        return {
          id: item._id.toString(),
          ...item,
        };
      });
      // console.log(transformedData);
      return {
        data: transformedData,
        total: transformedData.length,
      };
    } catch (error) {
      console.log(error);
    }
  },

  getOne: async (resource, params) => {
    try {
      console.log(resource);
      // const data = await getOneProd(params.id);
      let res;
      if (resource === "products") {
        console.log(params.id);
        res = await fetch(`${api}oneProduct/${params.id}`);
      } else {
        res = await fetch(`${api}user/oneUser/${params.id}`);
      }
      const data = await res.json();

      if (resource === "products") {
        return {
          data: data.products,
          total: data.productslength,
        };
      } else {
        if (resource === "user/users") {
          // console.log(data.user);

          let transformedData = { id: data.user._id, ...data.user };
          // console.log(transformedData);
          return {
            data: transformedData,
            total: transformedData.length,
          };
        }
      }
    } catch (error) {
      console.log(error);
    }
  },

  update: async (resource, params) => {
    const { id, data } = params;

    try {
      // let response;
      // if (resource === "products") {
      //   response = await httpClient(`${api}products/${id}`, {
      //     method: "PUT",
      //     body: JSON.stringify(data),
      //   });
      // } else {
      //   response = await httpClient(`${api}user/users/${id}`, {
      //     method: "PUT",
      //     body: JSON.stringify(data),
      //   });
      // }
      const response = await httpClient(`${api}${resource}/${id}`, {
        method: "PUT",
        body: JSON.stringify(data),
      });
      const updatedData = await response.json.data;

      return { id: updatedData.id, data: updatedData };
    } catch (error) {
      console.log(error);
    }
  },

  create: async (resource, params) => {
    const { id, data } = params;

    try {
      // let response;
      // if (resource === "products") {
      //   response = await httpClient(`${api}products`, {
      //     method: "POST",
      //     body: JSON.stringify(data),
      //   });
      // } else {
      //   response = await httpClient(`${api}user/users`, {
      //     method: "POST",
      //     body: JSON.stringify(data),
      //   });
      // }

      const response = await httpClient(`${api}${resource}`, {
        method: "POST",
        body: JSON.stringify(data),
      });
      const createdData = response.json;
      return { id: id, data: createdData };
    } catch (error) {
      console.log(error);
      // Handle error
    }
  },

  delete: async (resource, params) => {
    const { id } = params;

    try {
      await httpClient(`${api}${resource}/${id}`, {
        method: "DELETE",
      });

      return { data: { id } };
    } catch (error) {
      console.log(error);
    }
  },
};

const AdminPanel = () => (
  <Admin dataProvider={dataProvider}>
    <Resource
      name="products"
      list={ProductList}
      edit={ProductEdit}
      create={ProductCreate}
    />
    <Resource
      name="user/users"
      list={UserList}
      edit={UserEdit}
      create={UserCreate}
    />
  </Admin>
);

export default AdminPanel;
