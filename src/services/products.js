import axios from 'axios';

export const getProducts = async () => {
  const response = await axios.get("/api/products");
  return response.data;
}


export const addProduct = async (title, price, quantity) => {
  try {
    const response = await axios.post("/api/products", { title, price, quantity });
    if (response.status === 200) {
      return response.data
    } else {
      console.log('request did not return a 200 for some reason');
      return null;
    }
  } catch (error) {
    console.log("error catch block from addProduct", error);
  }
}

export const deleteProduct = async (productId) => {
  try {
    return await axios.delete(`/api/products/${productId}`);
  } catch (error) {
    console.log(error);
  }
}

export const updateProduct = async (id, title, price, quantity)  => {
  try {
    const response = await axios.put(`api/products/${id}`, {title, price, quantity});
    return response.data;
  } catch {
    console.log(error);
  }
};
  

// Cart related calls

export const getCartItems = async () => {
  const response = await axios.get("/api/cart")
  return response.data;
}

export const addCartItem = async (productId) => {
  try {
    const response = await axios.post("/api/add-to-cart", {productId});
    return response.data;
  } catch (error) {
    console.log("something wrong in addCartItem service");
  }
}

export const clearCart = async () => {
  try {
    const response = await axios.post("/api/checkout")
  } catch (error) {
    console.log(error);
  }
}
