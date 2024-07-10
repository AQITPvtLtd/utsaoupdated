"use client";

import React, { useEffect, useState } from "react";
import ProductCards from "./ProductCards";
import { getAllProducts } from "../../services/products";
const PremiumProducts = () => {
  const [products, setProducts] = useState([]);

  const getProducts = async () => {
    const response = await getAllProducts();
    const items = response.result;
    items.sort((a, b) => a.Sno - b.Sno);
    const firstFourItems = items.slice(0, 4);
    setProducts(firstFourItems);
  };
  // useEffect(() => {
  //   getProducts();
  // }, []);

  return (
    <div>Premium Products</div>
    // <div className="w-full mt-16">
    //   <div className="flex items-center">
    //     <div className="flex-grow border-b border-black ml-20 mr-10"></div>
    //     <span className="mr-4 font-pacifico text-4xl">Premium Products</span>
    //     <div className="flex-grow border-b border-black mr-20 ml-10"></div>
    //   </div>
    //   <div className="mx-5 mt-4 mb-5 grid grid-cols-1 gap-x-2 gap-y-4 md:grid-cols-2 lg:grid-cols-3">
    //     {products?.map((item) => (
    //       <div key={item.id} className="ml-2">
    //         <ProductCards products={item} />
    //       </div>
    //     ))}
    //   </div>
    // </div>
  );
};

export default PremiumProducts;
