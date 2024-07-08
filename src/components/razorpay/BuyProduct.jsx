"use client";
import React, { Suspense } from "react";
import Buy from "./Buy";
import { useRouter } from "next/navigation";
import Loading from "../Loading";
import {
  paymentDetails,
  paymentVerify,
  emptyCart,
} from "../../services/razorpay";
const BuyProduct = ({
  address,
  amount,
  userId,
  keyId,
  cart,
  name,
  email,
  phone,
  context,
}) => {
  const router = useRouter();

  const makePayment = async () => {
    // Make API call to the serverless API
    const orderDetails = await paymentDetails({ amount, userId });
    const options = {
      key: keyId,
      name: "Utsao",
      currency: orderDetails.data.order.currency,
      amount: orderDetails.data.order.amount,
      order_id: orderDetails.data.order.id,
      description: "Utsao pvt Ltd.",
      // image: logoBase64,
      handler: async function (response) {
        // if (response.length==0) return <Loading/>;
        const razorpay_payment_id = response.razorpay_payment_id;
        const razorpay_order_id = response.razorpay_order_id;
        const razorpay_signature = response.razorpay_signature;
        const data = await paymentVerify({
          userId,
          razorpay_payment_id,
          razorpay_order_id,
          razorpay_signature,
        });
        console.log(data.data);
        if (data.data.success) {
          const response = await emptyCart({
            userId,
            address,
            cart,
            name,
            email,
            phone,
          });
          if (response.data.status) {
            context.setCart(0);
            router.push("/");
          }
        }
      },
      prefill: {
        name: "Utsao Global",
        // email: "mmantratech@gmail.com",
        // contact: "000000000",
      },
    };

    const paymentObject = new window.Razorpay(options);
    paymentObject.open();

    paymentObject.on("payment.failed", function (response) {
      alert("Payment failed. Please try again. Contact support for help");
    });
  };

  return (
    <>
      <Suspense fallback={<Loading />}>
        <Buy makePayment={makePayment} />
      </Suspense>
    </>
  );
};

export default BuyProduct;
