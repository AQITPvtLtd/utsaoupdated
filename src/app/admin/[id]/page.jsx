import React from "react";
import Link from "next/link";
const page = ({ params }) => {
  const id = params.id;

  return (
    <div>
      <section className="relative z-10 overflow-hidden pb-16 pt-36 md:pb-20 lg:pb-28 lg:pt-[150px] bg-skyblue">
        <div className="w-screen">
          <h1 className="text-center text-4xl text-purple font-bold">
            Admin Panel
          </h1>
          <div className="grid grid-cols-3">
            <Link href={`${id}/products`}>
              <div className="border-purple border-2 rounded-lg p-2 m-4 hover:scale-105 text-center font-semibold text-lg">
                Products
              </div>
            </Link>
            <Link href={`${id}/blogs`}>
              <div className="border-purple border-2 rounded-lg p-2 m-4 hover:scale-105 text-center font-semibold text-lg">
                Blogs
              </div>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default page;
