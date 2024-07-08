import React from "react";
import AdminPanel from "./AdminPanel";

const page = () => {
  const id = process.env.ADMIN_ID;
  return (
    <div>
      <AdminPanel id={id} />
    </div>
  );
};

export default page;
