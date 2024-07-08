"use client";

import React, { useEffect, useState, useRef, useMemo } from "react";
import { useRouter } from "next/navigation";
import { useContext } from "react";
import UserContext from "../../../../context/UserContext";
import { toast } from "react-toastify";
import JoditEditor from "jodit-react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import Dropdown from "react-dropdown";
import "react-dropdown/style.css";
import { addBlog } from "../../../../services/blogs";
const options = ["Gifts", "Diwali Gifts", "New-Year Gifts", "Christmas Gifts"];
const AddBlogs = ({ id }) => {
  const context = useContext(UserContext);
  const [startDate, setStartDate] = useState(new Date());
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
  const [selectedFile, setSelectedFile] = useState([]);
  const [category, setCategory] = useState(options[0]);
  const handleFileChange = async (event) => {
    const file = event.target.files[0];
    setSelectedFile((prevFiles) => [...prevFiles, file.name]);
  };

  const [formData, setFormData] = useState({
    title: "",
  });
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };
  const handleSubmit = async (e) => {
    e.preventDefault();

    const response = await addBlog({
      formData,
      selectedFile,
      value,
      category,
      startDate,
    });
    console.log(response);
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
                  Write a Blog
                </h3>
                <form onSubmit={handleSubmit}>
                  {/* name */}
                  <div className="mb-8">
                    <label
                      htmlFor="name"
                      className="mb-3 text-golden block text-sm text-dark"
                    >
                      Title
                    </label>
                    <input
                      type="text"
                      name="title"
                      placeholder="Enter Blog Title"
                      className="border-stroke w-full rounded-sm border bg-[#f8f8f8] px-6 py-3 text-base text-body-color outline-none transition-all duration-300 focus:border-primary"
                      value={formData.title}
                      onChange={handleChange}
                    />
                  </div>
                  {/* date */}
                  <div className="mb-8">
                    <label
                      htmlFor="name"
                      className="mb-3 text-golden block text-sm text-dark"
                    >
                      Date
                    </label>
                    <DatePicker
                      selected={startDate}
                      onChange={(date) => setStartDate(date)}
                    />
                  </div>

                  {/* category */}
                  <div className="mb-8">
                    <label
                      htmlFor="name"
                      className="mb-3 text-golden block text-sm text-dark"
                    >
                      Category
                    </label>
                    <Dropdown
                      name="category"
                      options={options}
                      value={category}
                      onChange={(cat) => setCategory(cat)}
                      placeholder="Select an option"
                    />
                  </div>

                  <div className="mb-8">
                    <label
                      htmlFor="catalog"
                      className="mb-3 text-golden block text-sm text-dark"
                    >
                      Content
                    </label>
                    <JoditEditor
                      name="content"
                      ref={editor}
                      value={value}
                      onChange={(newContent) => setValue(newContent)}
                      config={config}
                    />
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
                  </div>
                  <div className="mb-6">
                    <button className="hover:bg-indigo-500 flex w-full items-center justify-center rounded-sm bg-purple px-9 py-4 text-base font-medium text-white shadow-submit duration-300 hover:bg-primary/90">
                      Add Blog
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

export default AddBlogs;
