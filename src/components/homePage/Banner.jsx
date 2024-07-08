"use client";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import img1 from "../../assets/banner/1.png";
import img2 from "../../assets/banner/2.png";
// import img3 from "@/assets/banner/3.png";

import { useEffect, useRef } from "react";
import Image from "next/image";
import { GrPrevious } from "react-icons/gr";
import { GrNext } from "react-icons/gr";

function Banner() {
  let sliderRef = useRef(null);

  var settings = {
    dots: true,
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    nextArrow: <GrNext color="black" />,
    prevArrow: <GrPrevious color="black" />,
    responsive: [
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          swipeToSlide: true,
        },
      },
    ],
  };
  useEffect(() => {
    sliderRef.slickPlay();
  }, []);
  const data = [
    {
      name: `Content Creation`,
      img: "/banner/3.png",
      url: "services/Content-Marketing",
    },
    {
      name: `Search Engine Optimization`,
      img: img1,
      url: "services/SEO",
    },
    {
      name: `Content Creation`,
      img: img2,
      url: "services/Content-Marketing",
    },
  ];
  return (
    <div className="overflow-x-clip lg:mt-[110px] md:mt-[70px] sm:mt-[80px] mt-[80px] w-screen">
      <div>
        <Slider {...settings} ref={(slider) => (sliderRef = slider)}>
          {data.map((d) => (
            <Image
              key={d.name}
              src={d.img}
              alt=""
              className="h-100 w-44 rounded-sm"
              width={2000}
              height={200}
            />
          ))}
        </Slider>
      </div>
    </div>
  );
}

export default Banner;
