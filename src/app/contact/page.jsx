import React from "react";
import Contact from "./Contact";
import Details from "./Details";
const page = () => {
  return (
    <section className="relative z-10 overflow-hidden pb-16 pt-20 md:pb-20 lg:pb-28 lg:pt-[140px] bg-skyblue">
      <div className="container">
        <div className="w-screen grid lg:grid-cols-2 grid-cols-1">
          <div className="lg:m-16 m-4">
            <Details />
          </div>
          <div className="lg:mt-20 lg:m-16 m-4">
            <Contact />
          </div>
        </div>
      </div>
    </section>
  );
};

export default page;
