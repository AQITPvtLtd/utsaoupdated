"use client";

import React, { useState, useContext } from "react";
import UserContext from "../../context/UserContext";
import { form } from "../../services/contact-form";
import { useRouter } from "next/navigation";
import { toast } from "react-toastify";
export default function Contact() {
  const context = useContext(UserContext);
  const router = useRouter();

  const [subject, setSubject] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = async (e) => {
    if (!context?.user) {
      router.push("/login");
    }
    e.preventDefault();
    const userid = context?.user?.id;
    const email = context?.user?.email;
    const name = context?.user?.name;
    const response = await form({ userid, name, email, subject, message });
    if (response.data.success) {
      toast.success("Query Sent");
    }
  };
  return (
    <form
      onSubmit={handleSubmit}
      className="rounded-lg shadow-xl flex flex-col px-8 py-8 bg-white"
    >
      <h1 className="text-2xl font-bold">Send a message</h1>

      <label htmlFor="subject" className="text-gray-500 font-light mt-4">
        Subject<span className="text-red-500">*</span>
      </label>
      <input
        type="text"
        name="subject"
        value={subject}
        onChange={(e) => {
          setSubject(e.target.value);
        }}
        className="bg-transparent border-b py-2 pl-4 focus:outline-none focus:rounded-md focus:ring-1 ring-green-500 font-light text-gray-500"
        required
      />

      <label htmlFor="message" className="text-gray-500 font-light mt-4">
        Message<span className="text-red-500">*</span>
      </label>
      <textarea
        name="message"
        value={message}
        onChange={(e) => {
          setMessage(e.target.value);
        }}
        className="bg-transparent border-b py-2 pl-4 focus:outline-none focus:rounded-md focus:ring-1 ring-green-500 font-light text-gray-500"
        required
      ></textarea>

      <div className="flex flex-row items-center justify-start">
        <button
          type="submit"
          className="px-10 mt-8 py-2 bg-[#130F49] text-gray-50 font-light rounded-md text-lg flex flex-row items-center"
        >
          Submit
          <svg
            width="24"
            height="24"
            viewBox="0 0 24 24"
            className="text-cyan-500 ml-2"
            fill="currentColor"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M9.00967 5.12761H11.0097C12.1142 5.12761 13.468 5.89682 14.0335 6.8457L16.5089 11H21.0097C21.562 11 22.0097 11.4477 22.0097 12C22.0097 12.5523 21.562 13 21.0097 13H16.4138L13.9383 17.1543C13.3729 18.1032 12.0191 18.8724 10.9145 18.8724H8.91454L12.4138 13H5.42485L3.99036 15.4529H1.99036L4.00967 12L4.00967 11.967L2.00967 8.54712H4.00967L5.44417 11H12.5089L9.00967 5.12761Z"
              fill="currentColor"
            />
          </svg>
        </button>
      </div>
    </form>
  );
}
