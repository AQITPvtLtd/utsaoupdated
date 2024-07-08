"use client";

import React, { useState, useRef, useEffect } from "react";
import { useRouter } from "next/navigation";
import { toast } from "react-toastify";
import { verifyOtp } from "../../../services/user";
let currentOTPIndex = 0;
const Verify = () => {
  const router = useRouter();
  const [otp, setOtp] = useState(new Array(6).fill(""));
  const [activeOTPIndex, setActiveOTPIndex] = useState(0);

  const inputRef = useRef(null);

  const handleOnChange = ({ target }) => {
    const { value } = target;
    const newOTP = [...otp];
    newOTP[currentOTPIndex] = value.substring(value.length - 1);

    if (!value) setActiveOTPIndex(currentOTPIndex - 1);
    else setActiveOTPIndex(currentOTPIndex + 1);

    setOtp(newOTP);
  };

  const handleOnKeyDown = (e, index) => {
    currentOTPIndex = index;
    if (e.key === "Backspace") setActiveOTPIndex(currentOTPIndex - 1);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const data = localStorage.getItem("emailVerify");
    const response = await verifyOtp({ data, otp });
    if (response.success) {
      toast.success("Email Verified", {
        position: "bottom-left",
      });
      localStorage.removeItem("emailVerify");
      router.push("/login");
    } else {
      toast.error(response.message, {
        position: "bottom-left",
      });
    }
  };
  useEffect(() => {
    inputRef.current?.focus();
  }, [activeOTPIndex]);

  return (
    <div className={"h-full flex justify-center items-center space-x-2 "}>
      <div className="bg-mintblue max-w-[500px] mt-[200px] rounded-3xl mx-4 px-6 py-10 sm:p-[60px] mb-10">
        <h3 className="mb-3 text-center text-2xl font-bold text-black sm:text-3xl">
          Verify OTP
        </h3>
        <p className="text-center text-base font-medium text-body-color">
          Click Send OTP to get OTP on your Provided Email
        </p>
        <form onSubmit={handleSubmit}>
          <div className="mb-6">
            <div className="text-center my-3">
              {otp.map((_, index) => {
                return (
                  <React.Fragment key={index}>
                    <input
                      ref={activeOTPIndex === index ? inputRef : null}
                      type="number"
                      className={
                        "w-12 h-12 border-2 rounded outline-none text-center font-semibold text-xl spin-button-none border-black focus:border-gray-70 transition"
                      }
                      onChange={handleOnChange}
                      onKeyDown={(e) => handleOnKeyDown(e, index)}
                      value={otp[index]}
                    />
                    {index === otp.length - 1 ? null : (
                      <span className={"w-2 py-0.5 bg-gray-400"} />
                    )}
                  </React.Fragment>
                );
              })}
            </div>
            <button
              type="submit"
              className="hover:bg-indigo-500 flex w-full items-center justify-center rounded-3xl bg-indigo-700 px-9 py-4 text-base font-medium text-white shadow-submit duration-300 hover:bg-primary/90"
            >
              Verify Email
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Verify;
