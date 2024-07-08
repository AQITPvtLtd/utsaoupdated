import React from "react";

const page = () => {
  return (
    <div className="lg:pt-[150px] mx-10">
      <h1 className="font-bold text-2xl underline">
        Shipping and Delivery Timeline
      </h1>
      <p className="mb-5">
        <h2 className="text-lg font-semibold my-2">Processing Time</h2>
        Orders are typically processed within 1-2 business days after payment
        confirmation, excluding weekends and holidays.
        <h2 className="text-lg font-semibold my-2">Shipping Methods</h2>
        We offer standard and expedited shipping options. Standard shipping
        delivers within 3-7 business days, while expedited shipping delivers
        within 1-3 business days.
        <h2 className="text-lg font-semibold my-2">Shipping Fees</h2>
        Shipping fees are calculated based on the shipping method selected, the
        destination, and the weight/dimensions of the package. Customers can
        view shipping fees during checkout before completing their purchase.
        <h2 className="text-lg font-semibold my-2">Shipping Restrictions</h2>
        Certain products may have shipping restrictions based on local laws or
        carrier policies. Customers will be notified of any shipping
        restrictions during the checkout process.
      </p>
    </div>
  );
};

export default page;
