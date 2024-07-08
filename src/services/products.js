import { httpAxios } from "../helper/httpHelper";
export async function fillProducts(formData) {
  console.log("fillprod");
  try {
    const result = await httpAxios
      .post("/api/fill_products", formData)
      .then((response) => response);
    return result;
  } catch (error) {
    console.log(error.message);
  }
}

export async function getAllProducts() {
  console.log("getprod");
  const result = await httpAxios
    .get("/api/get_products")
    .then((response) => response.data);
  return result;
}

export async function addToCart(data) {
  console.log("addcart");
  try {
    const result = await httpAxios
      .put("/api/add-to-cart", data)
      .then((response) => response);
    return result;
  } catch (error) {
    console.log(error.message);
  }
}

export async function fetchCart(data) {
  console.log("fetchcart");
  const result = await httpAxios
    .post("/api/fetch-cart", data)
    .then((response) => response.data);
  return result;
}

export async function deleteFromCart(data) {
  console.log("deletecart");
  try {
    const result = await httpAxios
      .put("/api/delete-from-cart", data)
      .then((response) => response);
    return result;
  } catch (error) {
    console.log(error.message);
  }
}
