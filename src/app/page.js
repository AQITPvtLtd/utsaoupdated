import React from "react";
import Banner from "../components/homePage/Banner";
import PremiumProducts from "../components/homePage/PremiumProducts";
import Testimonials from "../components/homePage/Testimonials";
const page = () => {
  return (
    <div className="overflow-hidden">
      <Banner />
      <PremiumProducts />
      <Testimonials />
    </div>
  );
};

export default page;
