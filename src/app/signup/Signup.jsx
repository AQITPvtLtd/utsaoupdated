"use client";

import Link from "next/link";
import { useState } from "react";
import { signup, login, sendOtp } from "../../services/user";
import { toast } from "react-toastify";
import { useContext } from "react";
import { useRouter } from "next/navigation";
import { IoMdEye } from "react-icons/io";
import { IoMdEyeOff } from "react-icons/io";
import UserContext from "../../context/UserContext";

const Signup = () => {
  const [IncorrectPassword, setIncorrectPassword] = useState(false);
  const [isNameEmpty, setIsNameEmpty] = useState(false);
  const [isEmailEmpty, setIsEmailEmpty] = useState(false);
  const [isPhoneEmpty, setIsPhoneEmpty] = useState(false);
  const [isPasswordEmpty, setIsPasswordEmpty] = useState(false);
  const [showPassword, setShowPassword] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    password: "",
    confirmPassword: "",
  });

  const router = useRouter();
  const context = useContext(UserContext);
  const handleClick = () => {
    setShowPassword(!showPassword);
  };
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };
  const handlePassword = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
    if (e.target.value === formData.password) {
      setIncorrectPassword(false);
    } else {
      setIncorrectPassword(true);
    }
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    //validation
    if (formData.name == "" || formData.name == null) {
      setIsNameEmpty(true);
      return;
    } else {
      setIsNameEmpty(false);
    }
    if (formData.email == "" || formData.email == null) {
      setIsEmailEmpty(true);
      return;
    } else {
      setIsEmailEmpty(false);
    }
    if (formData.phone == "" || formData.phone == null) {
      setIsPhoneEmpty(true);
      return;
    } else {
      setIsPhoneEmpty(false);
    }
    if (formData.password == "" || formData.password == null) {
      setIsPasswordEmpty(true);
      return;
    } else {
      setIsPasswordEmpty(false);
    }
    if (formData.confirmPassword == "" || formData.confirmPassword == null) {
      setIncorrectPassword(true);
      return;
    }
    if (
      !IncorrectPassword &&
      !isNameEmpty &&
      !isEmailEmpty &&
      !isPasswordEmpty &&
      !isPhoneEmpty
    ) {
      const response = await signup(formData);
      if (response.data.status) {
        //verify email
        const result = await sendOtp(formData);
        if (result.success) {
          localStorage.setItem("emailVerify", result.token);
          toast.success(result.message, {
            position: "bottom-left",
          });
          router.push("/signup/email-verify");
        } else {
          toast.error(result.message, {
            position: "bottom-left",
          });
        }
      } else {
        toast.error(response.data.message, {
          position: "bottom-left",
        });
      }
    } else {
      toast.error("Please fill all the fields properly", {
        position: "bottom-left",
      });
    }
  };
  return (
    <>
      <section className="relative z-10 overflow-hidden pb-16 pt-20 md:pb-20 lg:pb-28 lg:pt-[180px] bg-skyblue">
        <div className="container">
          <div className="-mx-4 flex flex-wrap">
            <div className="w-full px-2 lg:flex justify-center">
              <div className="bg-mintblue m-4 max-w-[500px] rounded px-2 py-10 sm:p-[60px]">
                <h3 className="text-golden mb-3 text-center text-2xl font-bold sm:text-3xl">
                  Create your account
                </h3>
                <p className="text-golden mb-11 text-center text-base font-medium text-body-color">
                  It’s totally free and super easy
                </p>
                <form onSubmit={handleSubmit}>
                  <div className="mb-8">
                    <label
                      htmlFor="name"
                      className="mb-3 text-golden block text-sm text-dark"
                    >
                      {" "}
                      Full Name{" "}
                    </label>
                    <input
                      type="text"
                      name="name"
                      placeholder="Enter your full name"
                      className="border-stroke w-full rounded-sm border bg-[#f8f8f8] px-6 py-3 text-base text-body-color outline-none transition-all duration-300 focus:border-primary"
                      value={formData.name}
                      onChange={handleChange}
                    />
                    {isNameEmpty && (
                      <p className="text-sm text-red-600">Name Cant be empty</p>
                    )}
                  </div>
                  <div className="mb-8">
                    <label
                      htmlFor="email"
                      className="mb-3 text-golden block text-sm text-dark"
                    >
                      {" "}
                      Email{" "}
                    </label>
                    <input
                      type="email"
                      name="email"
                      placeholder="Enter your Email"
                      className="border-stroke w-full rounded-sm border bg-[#f8f8f8] px-6 py-3 text-base text-body-color outline-none transition-all duration-300 focus:border-primary"
                      value={formData.email}
                      onChange={handleChange}
                    />
                    {isEmailEmpty && (
                      <p className="text-sm text-red-600">
                        Email Can&apos;t be empty
                      </p>
                    )}
                  </div>
                  <div className="mb-8">
                    <label
                      htmlFor="phone"
                      className="mb-3 block text-sm text-dark"
                    >
                      {" "}
                      Phone Number
                    </label>
                    <input
                      type="number"
                      name="phone"
                      placeholder="Enter your Phone Number"
                      className="border-stroke w-full rounded-sm border bg-[#f8f8f8] px-6 py-3 text-base text-body-color outline-none transition-all duration-300 focus:border-primary"
                      value={formData.phone}
                      onChange={handleChange}
                    />
                    {isEmailEmpty && (
                      <p className="text-sm text-red-600">
                        Phone Can&apos;t be empty
                      </p>
                    )}
                  </div>
                  <div className="mb-8">
                    <label
                      htmlFor="password"
                      className="mb-3 block text-sm text-golden text-dark"
                    >
                      {" "}
                      Your Password{" "}
                    </label>
                    <div className="px-6 py-3 bg-[#f8f8f8] w-full rounded-sm flex">
                      <input
                        type={showPassword ? "text" : "password"}
                        name="password"
                        placeholder="Enter your Password"
                        className="outline-none text-base w-full text-body-color bg-transparent"
                        value={formData.password}
                        onChange={handleChange}
                      />
                      {!showPassword ? (
                        <IoMdEye
                          className="mt-1 w-[30px] h-[30px] hover:cursor-pointer"
                          color="#0000FF"
                          onClick={handleClick}
                        />
                      ) : (
                        <IoMdEyeOff
                          className="mt-1 w-[30px] h-[30px] hover:cursor-pointer"
                          color="#0000FF"
                          onClick={handleClick}
                        />
                      )}
                    </div>

                    {isPasswordEmpty && (
                      <p className="text-sm text-red-600">
                        Please enter a password
                      </p>
                    )}
                  </div>
                  <div className="mb-8">
                    <label
                      htmlFor="confirmPassword"
                      className="mb-3 block text-golden text-sm text-dark"
                    >
                      {" "}
                      Confirm Password{" "}
                    </label>
                    <input
                      type="password"
                      name="confirmPassword"
                      placeholder="Confirm Password"
                      className={`border-stroke w-full rounded-sm border bg-[#f8f8f8] px-6 py-3 text-base text-body-color outline-none transition-all duration-300 ${
                        IncorrectPassword
                          ? "focus:border-red-600"
                          : "focus:border-green-600"
                      }`}
                      value={formData.confirmPassword}
                      onChange={handlePassword}
                    />
                    {IncorrectPassword && (
                      <p className="text-sm text-red-600">
                        The password does&apos;t match
                      </p>
                    )}
                  </div>

                  <div className="mb-6">
                    <button className="hover:bg-indigo-500 flex w-full items-center justify-center rounded-sm bg-purple px-9 py-4 text-base font-medium text-white shadow-submit duration-300 hover:bg-primary/90">
                      Sign up
                    </button>
                  </div>
                </form>
                <p className="text-center text-base font-medium text-body-color">
                  Already have an Account?{" "}
                  <Link href="/login" className="text-purple hover:underline">
                    Sign in
                  </Link>
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Signup;
