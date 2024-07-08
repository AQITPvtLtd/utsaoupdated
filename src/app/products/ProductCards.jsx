"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { useRouter } from "next/navigation";
const ProductCards = ({ products }) => {
  return (
    <div className="lg:hover:scale-105 lg:hover:shadow-2xl hover:border-purple w-full max-w-sm bg-white border border-gray-200 rounded-lg shadow">
      <Link href={`/product-details/${products.id}`}>
        <Image
          className="p-8 rounded-t-lg w-full h-full"
          src={`/products/${products.image1}`}
          alt="product image"
          width={350}
          height={300}
        />
      </Link>
      <div className="px-5 pb-5">
        <Link href="#">
          <h5 className="text-xl font-semibold tracking-tight text-gray-900">
            {products.name}
          </h5>
        </Link>

        <div className="flex items-center justify-between">
          <span className="text-3xl font-bold text-gray-900">
            ₹ {products.price}
          </span>
          <Link
            href={`/product-details/${products.id}`}
            className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center"
          >
            View Details
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ProductCards;
