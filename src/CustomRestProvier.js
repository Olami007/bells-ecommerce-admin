import simpleRestProvider from "ra-data-simple-rest";

const customRestProvider = (apiUrl, httpClient) => {
  const defaultDataProvider = simpleRestProvider(apiUrl, httpClient);

  return {
    ...defaultDataProvider,

    create: (resource, params) => {
      const { data } = params;
      if (resource === "products") {
        // Custom logic for creating a product
        const url = `${apiUrl}/${resource}`;
        return httpClient(url, {
          method: "POST",
          body: JSON.stringify(data),
        }).then((response) => ({
          data: { ...data, _id: response._id },
        }));
      }

      // Fallback to the default implementation for other resources
      return defaultDataProvider.create(resource, params);
    },

    update: (resource, params) => {
      const { id, data } = params;
      if (resource === "products") {
        // Custom logic for updating a product
        const url = `${apiUrl}/${resource}/${id}`;
        return httpClient(url, {
          method: "PUT",
          body: JSON.stringify(data),
        }).then(() => ({
          data: { ...data, _id: id },
        }));
      }

      // Fallback to the default implementation for other resources
      return defaultDataProvider.update(resource, params);
    },

    // Implement other customizations for specific endpoints as needed
    // getOne, getList, delete, etc.
  };
};

export default customRestProvider;
