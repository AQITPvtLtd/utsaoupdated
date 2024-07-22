import React from "react";
import Link from "next/link";
const Details = () => {
  return (
    <div className="lg:mr-4 text-gray-700">
      <h1 className="text-purple text-4xl font-bold text-center">
        Contact Info
      </h1>
      <br />
      <p className=" text-justify text-gray-700">
        We are utsao a unit of AQIT pvt ltd.
        We&apos;re thrilled to hear from you. Whether you have a question about
        our services, need assistance, or want to collaborate, we&apos;re here
        to help. Please feel free to reach out to us using the contact details
        below or fill out the contact form, and we&apos;ll get back to you as
        soon as possible.
      </p>
      <br />
      <span className="text-purple text-lg font-semibold">Address: </span>
      <Link
        href="https://maps.app.goo.gl/ZCnmKXvE3Z7sFDEY9"
        target="_blank"
        className="hover:underline"
      >
        G-36, First Floor, Outer circle, Connaught place, New Delhi - 110001
      </Link>
      <br />
      <br />
      <Link href="tel:+919582930940">
        <span className="text-purple text-lg font-semibold"> Phone: </span>
        <span className="hover:underline">+91 9582930940</span>
      </Link>
      <br />
      <br />
      <span className="text-purple text-lg font-semibold">Email: </span>
      <Link href="mailto: info@utsao.com" className="hover:underline">
        info@utsao.com
      </Link>
    </div>
  );
};

export default Details;
