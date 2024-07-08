import { httpAxios } from "../helper/httpHelper";
export async function paymentDetails(data) {
  console.log("details");
  try {
    const result = await httpAxios
      .post("/api/razorpay/payment_details", data)
      .then((response) => response);
    return result;
  } catch (error) {
    console.log(error.message);
  }
}

export async function paymentVerify(data) {
  console.log("payment");
  try {
    const result = await httpAxios
      .post("/api/razorpay/payment-verify", data)
      .then((response) => response);
    return result;
  } catch (error) {
    console.log(error.message);
  }
}

export async function emptyCart(data) {
  console.log("emptycart");
  try {
    const result = await httpAxios
      .put("/api/empty-cart", data)
      .then((response) => response);
    return result;
  } catch (error) {
    console.log(error.message);
  }
}
