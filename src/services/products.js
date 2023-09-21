import axios from 'axios';

export const getProducts = async () => {
  const response = await axios.get("/api/products");
  return response.data;
}

export const addProduct = async (title, price, quantity) => {
  try {
    const response = await axios.post("/api/products", { title, price, quantity });
    if (response.status === 200) {
      console.log('request successfull 200')
      console.log(response);
      return response.data
    } else {
      console.log('request did not return a 200 for some reason');
    }
  } catch (error) {
    console.log("error catch block from addProduct", error);
  }
}
