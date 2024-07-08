"use client";

import React, { useEffect, useState, useRef, useMemo } from "react";
import { useRouter } from "next/navigation";
import { useContext } from "react";
import UserContext from "../../../../context/UserContext";
import { toast } from "react-toastify";
import JoditEditor from "jodit-react";
import { fillProducts } from "../../../../services/products";
const AdminPanel = ({ id }) => {
  const context = useContext(UserContext);
  const [value, setValue] = useState("");

  const router = useRouter();
  useEffect(() => {
    if (id != context?.user?.id) {
      router.push("/");
    }
  });
  const editor = useRef(null);
  const config = useMemo(
    () => ({
      readonly: false,
      controls: {
        fontsize: {
          list: [8, 9, 10],
        },
      },
    }),

    []
  );
  const [isNameEmpty, setIsNameEmpty] = useState(false);
  const [isCatalogEmpty, setisCatalogEmpty] = useState(false);
  const [selectedFile, setSelectedFile] = useState([]);
  const handleFileChange = async (event) => {
    const file = event.target.files[0];
    setSelectedFile((prevFiles) => [...prevFiles, file.name]);
  };

  const [formData, setFormData] = useState({
    name: "",
    description: "",
    price: 0,
  });
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    const response = await fillProducts({ formData, selectedFile, value });
    if (response.data.status) {
      toast.success(response.data.message, {
        position: "bottom-left",
      });
    } else {
      toast.error(response.data.message, {
        position: "bottom-left",
      });
    }
  };
  return (
    <>
      <section className="relative z-10 overflow-hidden pb-16 pt-36 md:pb-20 lg:pb-28 lg:pt-[180px] bg-skyblue">
        <div className="container">
          <div className="-mx-4 flex flex-wrap">
            <div className="w-full px-4 lg:flex">
              <div className="bg-mintblue mx-auto max-w-[500px] rounded px-6 py-10 sm:p-[60px]">
                <h3 className="text-golden mb-3 text-center text-2xl font-bold sm:text-3xl">
                  Add Product
                </h3>
                <form onSubmit={handleSubmit}>
                  {/* name */}
                  <div className="mb-8">
                    <label
                      htmlFor="name"
                      className="mb-3 text-golden block text-sm text-dark"
                    >
                      Name of Product
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
                  {/* catalog */}
                  <div className="mb-8">
                    <label
                      htmlFor="catalog"
                      className="mb-3 text-golden block text-sm text-dark"
                    >
                      Catalog
                    </label>
                    <JoditEditor
                      name="catalog"
                      ref={editor}
                      value={value}
                      onChange={(newContent) => setValue(newContent)}
                      config={config}
                    />
                    {isCatalogEmpty && (
                      <p className="text-sm text-red-600">
                        Catalog Can&apos;t be empty
                      </p>
                    )}
                  </div>
                  {/* description */}
                  <div className="mb-8">
                    <label
                      htmlFor="description"
                      className="mb-3 block text-sm font-medium text-dark"
                    >
                      Description
                    </label>
                    <textarea
                      name="description"
                      rows={5}
                      placeholder="Enter Description"
                      className="border-stroke w-full resize-none rounded-sm border bg-[#f8f8f8] px-6 py-3 text-base text-body-color outline-none focus:border-primary"
                      value={formData.message}
                      onChange={handleChange}
                      required
                    ></textarea>
                  </div>
                  <div className="mb-8">
                    <label
                      htmlFor="price"
                      className="mb-3 block text-sm text-golden text-dark"
                    >
                      Price
                    </label>
                    <div className="px-6 py-3 bg-[#f8f8f8] w-full rounded-sm flex">
                      <input
                        type="number"
                        name="price"
                        placeholder="Enter price"
                        className="outline-none text-base w-full text-body-color bg-transparent"
                        value={formData.password}
                        onChange={handleChange}
                        required
                      />
                    </div>
                  </div>
                  <div className="mb-8">
                    <label
                      htmlFor="image"
                      className="mb-3 block text-golden text-sm text-dark"
                    >
                      Image
                    </label>
                    <input
                      name="image1"
                      type="file"
                      accept=".png,.jpg,.jpeg,.webp"
                      onChange={handleFileChange}
                    />
                    <input
                      name="image1"
                      type="file"
                      accept=".png,.jpg,.jpeg,.webp"
                      onChange={handleFileChange}
                    />
                    <input
                      name="image1"
                      type="file"
                      accept=".png,.jpg,.jpeg,.webp"
                      onChange={handleFileChange}
                    />
                    <input
                      name="image1"
                      type="file"
                      accept=".png,.jpg,.jpeg,.webp"
                      onChange={handleFileChange}
                    />
                  </div>

                  <div className="mb-6">
                    <button className="hover:bg-indigo-500 flex w-full items-center justify-center rounded-sm bg-purple px-9 py-4 text-base font-medium text-white shadow-submit duration-300 hover:bg-primary/90">
                      Fill Products
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default AdminPanel;

function convertToBase64(file) {
  return new Promise((resolve, reject) => {
    const fileReader = new FileReader();
    if (file) {
      fileReader.readAsDataURL(file);
    }

    fileReader.onload = () => {
      resolve(fileReader.result);
    };
    fileReader.onerror = (error) => {
      reject(error);
    };
  });
}
