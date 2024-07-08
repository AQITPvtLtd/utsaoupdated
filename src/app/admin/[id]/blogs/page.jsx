import React from "react";
import AddBlogs from "./AddBlogs";

const page = () => {
  const id = process.env.ADMIN_ID;
  return (
    <div>
      <AddBlogs id={id} />
    </div>
  );
};

export default page;
