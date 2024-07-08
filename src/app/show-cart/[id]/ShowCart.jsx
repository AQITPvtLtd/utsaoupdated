"use client";

import React, { useEffect, useState, useContext } from "react";
import { fetchCart, getAllProducts } from "../../../services/products";
import Link from "next/link";
import { MdCancel } from "react-icons/md";
import Image from "next/image";
import { deleteFromCart } from "../../../services/products";
import { toast } from "react-toastify";
import CartContext from "../../../context/CartContext";
import UserContext from "../../../context/UserContext";
import BuyProduct from "../../../components/razorpay/BuyProduct";
import Swal from "sweetalert2";
const ShowCart = ({ id, keyId }) => {
  const context = useContext(CartContext);
  const userContext = useContext(UserContext);
  const user = userContext?.user;
  const [cart, setCart] = useState([]);
  const [products, setProducts] = useState([]);
  const loadCart = async () => {
    const response = await fetchCart({ id });
    const cartArray = JSON.parse(response.result);
    setCart(cartArray);
    const products = await getAllProducts();
    setProducts(products.result);
  };
  useEffect(() => {
    loadCart();
  }, []);
  const totalAmount = cart.reduce((total, item) => {
    return total + item.price * item.quantity;
  }, 0);
  async function deleteA(prodId) {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then(async (result) => {
      if (result.isConfirmed) {
        try {
          const result = await deleteFromCart({ cart, id, prodId });
          if (result.data.status) {
            context.setCart((prevCartCount) => prevCartCount - 1);
            const newProducts = cart.filter((item) => item.id != prodId);
            setCart(newProducts);
          }
          toast.success(result.data.message, {
            position: "bottom-left",
          });
        } catch (error) {
          console.log(error);
          toast.error(result.data.message, {
            position: "bottom-left",
          });
        }
      }
    });
  }
  const [street, setStreet] = useState("");
  const [city, setCity] = useState("");
  const [country, setCountry] = useState("");
  const [pin, setPin] = useState("");
  const [address, setAddress] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    setAddress(`${street}, ${city}, ${country}, ${pin}`);
  };
  return (
    <section className="relative z-10 overflow-hidden pb-16 pt-36 md:pb-20 lg:pb-28 lg:pt-[150px] bg-skyblue">
      <div className="w-screen">
        <h1 className="text-center text-4xl text-purple font-bold">
          Your Shopping Cart
        </h1>
        <div className="w-screen mt-3">
          <div className="px-4 lg:flex text-right lg:justify-center">
            <div className="mt-4 grid gap-x-2 gap-y-4 lg:grid-cols-3 md:grid-cols-3 grid-cols-1">
              {cart?.map((item) => (
                <>
                  <div
                    key={item.id}
                    className="border-primary border-4 transform transition duration-300 hover:shadow-xl shadow-md ml-2 mr-2 rounded-lg p-2"
                  >
                    <button
                      onClick={() => {
                        deleteA(item.id);
                      }}
                    >
                      <MdCancel className="float-right hover:scale-150" />
                    </button>
                    <Link href={`/product-details/${item.id}`}>
                      <div className="wow fadeInUp" data-wow-delay=".15s">
                        <Image
                          src={`/products/${item.image1}`}
                          className="w-full"
                          width={100}
                          height={100}
                          alt="product"
                        />
                        <h3 className="font-semibold text-black text-xl mx-auto text-center items-center">
                          {item.name}
                        </h3>
                        <h3 className="font-semibold text-black text-md mx-auto text-left ml-1">
                          Price: ₹ {item.price}
                        </h3>
                        <h3 className=" text-black text-md mx-auto text-left ml-1">
                          Quantity: {item.quantity}
                        </h3>
                      </div>
                    </Link>
                  </div>
                </>
              ))}
            </div>
          </div>
        </div>
        <div className="flex justify-center mt-10">
          <table className=" text-left text-sm text-gray-500 bg-pink-600 rounded-xl bg-opacity-20">
            <tbody>
              <tr className="border-b">
                <th
                  scope="row"
                  className="whitespace-nowrap px-6 py-4 font-medium text-gray-900"
                >
                  Total Products
                </th>
                <td className="px-6 py-4">{cart.length}</td>
              </tr>
              <tr className="border-b">
                <th
                  scope="row"
                  className="whitespace-nowrap px-6 py-4 font-medium text-gray-900"
                >
                  Amount To Pay
                </th>
                <td className="px-6 py-4">₹ {totalAmount}</td>
              </tr>
            </tbody>
          </table>
        </div>
        <h1 className="text-center text-3xl text-purple font-bold mt-10">
          Checkout Form
        </h1>
        <div className=" justify-center">
          <div className="flex justify-center">
            <div className="leading-loose">
              <form
                onSubmit={handleSubmit}
                className="max-w-xl m-4 p-10 bg-white rounded shadow-xl"
              >
                <p className="text-gray-800 font-medium">
                  Customer information
                </p>
                <div className="mt-2">
                  <label
                    className="block text-sm text-gray-600"
                    htmlFor="street"
                  >
                    Address
                  </label>
                  <input
                    className="w-full px-2 py-2 text-gray-700 bg-gray-200 rounded"
                    id="street"
                    name="street"
                    type="text"
                    required
                    placeholder="Street"
                    value={street}
                    onChange={(e) => setStreet(e.target.value)}
                    aria-label="Street"
                  />
                </div>
                <div className="mt-2">
                  <input
                    className="w-full px-2 py-2 text-gray-700 bg-gray-200 rounded"
                    id="city"
                    name="city"
                    type="text"
                    required
                    placeholder="City"
                    value={city}
                    onChange={(e) => setCity(e.target.value)}
                    aria-label="City"
                  />
                </div>
                <div className="inline-block mt-2 w-1/2 pr-1">
                  <input
                    className="w-full px-2 py-2 text-gray-700 bg-gray-200 rounded"
                    id="country"
                    name="country"
                    type="text"
                    required
                    placeholder="Country"
                    value={country}
                    onChange={(e) => setCountry(e.target.value)}
                    aria-label="Country"
                  />
                </div>
                <div className="inline-block mt-2 -mx-1 pl-1 w-1/2">
                  <input
                    className="w-full px-2 py-2 text-gray-700 bg-gray-200 rounded"
                    id="pin"
                    name="pin"
                    type="text"
                    required
                    placeholder="Pin"
                    value={pin}
                    onChange={(e) => setPin(e.target.value)}
                    aria-label="Pin"
                  />
                </div>

                <div className="mt-4 hover:scale-105 hover:ml-2">
                  <BuyProduct
                    address={address}
                    amount={totalAmount}
                    userId={user?.id}
                    keyId={keyId}
                    cart={cart}
                    name={user?.name}
                    email={user?.email}
                    phone={user?.phone}
                    context={context}
                  />
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ShowCart;
