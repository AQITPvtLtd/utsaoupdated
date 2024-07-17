import React from "react";

export const metadata = {
  title: "Refund",
};

const page = () => {
  return (
    <div className="container px-4 py-8 ">
      <div className="bg-white shadow-md rounded-lg p-6 mt-[100px]">
        <h1 className="text-3xl font-bold text-center mb-6">RETURN</h1>
        <p className="mb-4 text-gray-700">
          Returns are acceptable with replacement of the products or reversal of
          full amount paid by the customer within 7 days of receipt of the
          product. However, returns are limited to the following cases:
        </p>
        <p className="mb-4 text-gray-700">
          <span className="font-semibold">
            In case of damaged or defective products:
          </span>{" "}
          Do not worry, if upon delivery of the product, you find that the
          product is received in damaged condition immediately notify our
          Customer Care team at{" "}
          <a href="tel:9582930940" className="text-blue-500">
            9582-930-940
          </a>{" "}
          or{" "}
          <a href="mailto:info@tekbooster.com" className="text-blue-500">
            info@tekbooster.com
          </a>
          . We will refund or send a replacement product, depending on your
          preference after necessary verification. The contents of your shipment
          and the original packing must be returned along with the damaged or
          defective products.
        </p>
        <p className="mb-4 text-gray-700">
          <span className="font-semibold">
            In case of different product dispatched:
          </span>{" "}
          Do not worry, if upon delivery of the product, you discover that we
          have dispatched a different product, immediately notify our Customer
          Care team at{" "}
          <a href="tel:9582930940" className="text-blue-500">
            9582-930-940
          </a>{" "}
          or{" "}
          <a href="mailto:info@tekbooster.com" className="text-blue-500">
            info@tekbooster.com
          </a>
          . We will refund or send a replacement product, depending on your
          preference. The contents of your shipment and the original packing
          must be returned along with the products.
        </p>

        <h1 className="text-3xl font-bold text-center mb-6 mt-8">REFUND</h1>
        <p className="mb-4 text-gray-700">
          We will initiate your refund within 3 working days of our
          confirmation. However, it may take 7-15 working days to get it
          credited / reflected in your bank or credit card account statement as
          this involves inter-bank refund procedures which may take time.
        </p>
        <p className="mb-4 text-gray-700">
          <span className="font-semibold">
            *Smithways reserve the right to change or update the above policy at
            any time by placing a notice on the website. Such changes or updates
            shall be effective immediately upon posting to the website.
          </span>
        </p>

        <h1 className="text-3xl font-bold text-center mb-6 mt-8">
          CANCELLATION
        </h1>
        <p className="mb-4 text-gray-700">
          Cancellations are allowed without any question asked in case of orders
          with COD payment mode and for prepaid orders, there will be a
          deduction of the base fee charged from us by the payment processing
          merchant and the remaining amount will be refunded. However, it is
          allowed only till the time product is not shipped from our warehouses.
          Please contact our Customer Care team immediately at{" "}
          <a href="tel:9582930940" className="text-blue-500">
            9582-930-940
          </a>{" "}
          or{" "}
          <a href="mailto:info@tekbooster.com" className="text-blue-500">
            info@tekbooster.com
          </a>{" "}
          to assist you in the cancellation of the order.
        </p>
      </div>
    </div>
  );
};

export default page;
