"use client";

import React, { useEffect, useState } from "react";
import ProductCards from "./ProductCards";
import { getAllProducts } from "../../services/products";
const Products = () => {
  const [products, setProducts] = useState([]);

  const getProducts = async () => {
    const response = await getAllProducts();
    const items = response;
    items.sort((a, b) => a.Sno - b.Sno);
    setProducts(items);
  };
  useEffect(() => {
    getProducts();
  }, []);

  return (
    <section className="relative z-10 overflow-hidden pb-16 pt-16 md:pb-20 lg:pb-28 lg:pt-[100px] bg-skyblue">
      <div className="container">
        <div className="-mx-4 flex flex-wrap">
          <div className="w-full mt-16">
            <div className="flex items-center">
              <div className="flex-grow border-b border-black ml-20 mr-10"></div>
              <span className="mr-4 font-pacifico text-4xl">Products</span>
              <div className="flex-grow border-b border-black mr-20 ml-10"></div>
            </div>
            <div className="m-5 mt-5 mb-5 grid grid-cols-1 gap-x-2 gap-y-4 md:grid-cols-2 lg:grid-cols-3">
              {products?.map((item) => (
                <div key={item.id} className="ml-2">
                  <ProductCards products={item} />
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Products;
