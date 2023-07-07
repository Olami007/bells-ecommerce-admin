export const getProduct = async () => {
  try {
    const res = await fetch("http://127.0.0.1:4100/products");
    const data = await res.json();
    return data;
  } catch (error) {
    return "there is an error";
  }
};

export const getOneProd = async (id) => {
  try {
    const res = await fetch(`http://127.0.0.1:4100/oneProduct/${id}`);
    const data = await res.json();

    return data.products;
  } catch (error) {
    return error;
  }
};

export const editData = async (id, data) => {
  try {
    const res = await fetch(`http://127.0.0.1:4100/products/${id}`, {
      method: "PUT",

      body: JSON.stringify(data),
    });
    const updatedData = await res.json();
    console.log(updatedData, "updated data");

    return updatedData;
  } catch (error) {
    return error;
  }
};

export const getUsers = async () => {
  try {
    const res = await fetch("http://127.0.0.1:4100/user/users");
    const data = await res.json();
    return data;
  } catch (error) {
    return "there is an error";
  }
};
