import React from "react";
import Link from "next/link";
import Image from "next/image";
import { MdEmail } from "react-icons/md";
import { FaPhoneAlt } from "react-icons/fa";
import { FaMapLocationDot } from "react-icons/fa6";
import NewsLetter from "./NewsLetter";
const Footer = () => {
  return (
    <div className="bg-purple w-full p-4 lg:py-8 ">
      <NewsLetter />

      <div className="md:flex md:justify-evenly">
        {/* logo and description */}
        <div className="mb-6 md:mb-0 lg:w-1/2">
          <Link href="/" className="flex lg:justify-start justify-center">
            <Image
              src="/logo.png"
              width={150}
              height={150}
              className="lg:w-[230px] lg:h-[100px] w-[200px] h-[70px]"
              alt="Tek Booster Logo"
            />
          </Link>
          <p className="text-golden lg:w-1/2">
            We make it easy for you to find the perfect gift for your
            colleagues, clients, and employees. Our collection of high-quality,
            unique products will help you make a lasting impression.
          </p>
        </div>
        {/* navlinks and services*/}
        {/* navinks */}
        <div>
          <h2 className="lg:mb-6 mb-3 ml-3 text-lg text-golden font-semibold uppercase">
            Quick Links
          </h2>
          <ul className="font-medium">
            <li>
              <Link href="/" className="ml-3 hover:underline text-golden">
                Home
              </Link>
            </li>
            <li>
              <Link href="/about" className="text-golden ml-3 hover:underline">
                About Us
              </Link>
            </li>
            <li>
              <Link
                href="/products"
                className="text-golden ml-3 hover:underline"
              >
                Products
              </Link>
            </li>
            <li>
              <Link href="/blogs" className="text-golden ml-3 hover:underline">
                Blogs
              </Link>
            </li>
            <li>
              <Link
                href="/contact"
                className="text-golden ml-3 hover:underline"
              >
                Contact Us
              </Link>
            </li>
          </ul>
        </div>
        {/* address */}
        <div>
          <h2 className="mb-2 lg:mt-0 mt-6 text-lg font-semibold text-golden ml-3 uppercase">
            Contact Us
          </h2>
          <div>
            <Link
              href="https://maps.app.goo.gl/ZCnmKXvE3Z7sFDEY9"
              target="_blank"
              className="text-golden flex ml-3 mb-2 mt-4 hover:underline"
            >
              <FaMapLocationDot className="mr-3" />
              G-36, First Floor, Outer circle,
              <br /> Connaught place,
              <br /> New Delhi - 110001
            </Link>
            <Link
              href="tel:+919582930940"
              className="text-golden flex ml-3 mb-1 hover:underline"
            >
              <FaPhoneAlt className="mr-3 mt-1" />
              +91 9582930940
            </Link>
            <Link
              href="mailto: info@tekbooster.com"
              className="text-golden hover:underline flex ml-3 mb-1"
            >
              <MdEmail className="mr-3 mt-1" />
              info@tekbooster.com
            </Link>
          </div>
        </div>
      </div>
      <hr className="my-6 border-white sm:mx-auto  lg:my-8" />
      <div className="sm:flex sm:items-center sm:justify-between">
        <span className="text-sm sm:text-center text-golden">
          © 2024{" "}
          <Link href="/" className="hover:underline">
            Tek Booster
          </Link>
          . All Rights Reserved.&nbsp;&nbsp;&nbsp;&nbsp;
          <Link href="/privacy-policy" className="underline">
            Privacy Policy
          </Link>
          &nbsp;&nbsp;&nbsp;&nbsp;
          <Link href="/shiping-and-delivery-timeline" className="underline">
            Shipping and Delivery Timeline
          </Link>
        </span>
      </div>
    </div>
  );
};

export default Footer;
