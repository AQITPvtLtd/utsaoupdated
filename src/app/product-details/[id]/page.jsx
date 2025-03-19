import React from "react";
import ProductDetails from "./ProductDetails";

const page = ({ params }) => {
  const id = params.id;
   console.log(id)
  return (
    <div>
      <ProductDetails id={id} />
    </div>
  );
};

export default page;
