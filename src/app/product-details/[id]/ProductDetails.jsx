"use client";

import React, { useState, useEffect, useContext } from "react";
import { useRouter } from "next/navigation";
import {
  getAllProducts,
  addToCart,
  fetchCart,
} from "../../../services/products";
import ImageGallery from "react-image-gallery";
import UserContext from "../../../context/UserContext";
import { toast } from "react-toastify";
import CartContext from "../../../context/CartContext";
const ProductDetails = ({ id }) => {
  const context = useContext(UserContext);
  const cartContext = useContext(CartContext);
  const router = useRouter();
  const [products, setProducts] = useState([]);
  const [quantity, setQuantity] = useState(1);
  const getProducts = async () => {
    const response = await getAllProducts();

    setProducts(response.result);
  };
  useEffect(() => {
    getProducts();
  }, []);
  const matchedObject = products.find((obj) => obj.id === id);
  const data = [];
  if (matchedObject) {
    if (matchedObject.image1) {
      data.push({
        original: `/products/${matchedObject.image1}`,
        thumbnail: `/products/${matchedObject.image1}`,
      });
    }
    if (matchedObject.image2) {
      data.push({
        original: `/products/${matchedObject.image2}`,
        thumbnail: `/products/${matchedObject.image2}`,
      });
    }
    if (matchedObject.image3) {
      data.push({
        original: `/products/${matchedObject.image3}`,
        thumbnail: `/products/${matchedObject.image3}`,
      });
    }
    if (matchedObject.image4) {
      data.push({
        original: `/products/${matchedObject.image4}`,
        thumbnail: `/products/${matchedObject.image4}`,
      });
    }
  }
  const handleSubmit = async (e) => {
    e.preventDefault();
    if (context?.user) {
      const id = context?.user?.id;
      const cart = await fetchCart({ id });
      const productId = matchedObject.id;
      const price = matchedObject.price;
      const image1 = matchedObject.image1;
      const name = matchedObject.name;
      const userCart = cart.result;
      const response = await addToCart({
        id,
        productId,
        userCart,
        name,
        quantity,
        price,
        image1,
      });
      if (response.data.status) {
        toast.success(response.data.message, {
          position: "bottom-left",
        });

        cartContext.setCart((prevCartCount) => prevCartCount + 1);
      } else {
        toast.error(response.data.message, {
          position: "bottom-left",
        });
      }
    } else {
      router.push("/login");
    }
  };
  return (
    <section className="relative z-10 overflow-hidden pb-16 pt-20 md:pb-20 lg:pb-28 lg:pt-[100px] bg-skyblue">
      <div className="container">
        <div className="-mx-4 flex flex-wrap">
          <div className="w-full px-4 lg:flex">
            <div className="mx-auto rounded px-6 py-10 sm:p-[60px]">
              <h3 className="text-black mb-3 text-center text-2xl font-bold sm:text-3xl">
                Product Details
              </h3>
              <div className="grid grid-cols-1 lg:grid-cols-2 md:grid-cols-2">
                <div className="">
                  <ImageGallery
                    items={data}
                    thumbnailPosition="bottom"
                    showNav={false}
                    showPlayButton={false}
                    showFullscreenButton={false}
                  />
                </div>
                <div className="pl-5">
                  <h1 className="lg:mt-0 mt-3 font-bold text-2xl text-purple text-center mb-3">
                    {matchedObject?.name}
                  </h1>
                  <p>{matchedObject?.description}</p>
                  <div>
                    <h2 className="font-semibold pt-5">Price</h2>
                    <p className="text-lg">₹ {matchedObject?.price}</p>
                  </div>
                  <form onSubmit={handleSubmit}>
                    {/* quantity */}
                    <div>
                      <h4 className="font-semibold py-3">Quantity:</h4>
                      <div className="border-2 border-black w-fit rounded-lg select-none">
                        <div
                          className="py-1 px-3 inline cursor-pointer"
                          onClick={() =>
                            quantity > 1 && setQuantity(quantity - 1)
                          }
                        >
                          -
                        </div>
                        <span className="py-1 px-3">{quantity}</span>
                        <div
                          className="py-1 px-3 inline cursor-pointer"
                          onClick={() => setQuantity(quantity + 1)}
                        >
                          +
                        </div>
                      </div>
                    </div>
                    {/* add to cart */}
                    <button
                      type="submit"
                      className="bg-purple text-white rounded-md p-2 w-full mt-3 hover:opacity-90"
                    >
                      Add to Cart
                    </button>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProductDetails;
