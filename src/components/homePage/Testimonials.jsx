"use client";

import React, { useRef, useEffect } from "react";
import "keen-slider/keen-slider.min.css";
import { useKeenSlider } from "keen-slider/react";
const testimonial = [
  {
    id: 1,
    name: "Saurabh Kumar",
    review: "Excellent Service",
    designation: "",
    message:
      "The service was excellent and the products were amazing. Customer friendly. You made our day very special by customizing the gifts for us.",
  },
  {
    id: 2,
    name: "Honey Gola",
    review: "Very Efficient",
    designation: "",
    message:
      "When it comes to procuring and delivering large orders, the Utsao team makes it easy. It was a pleasure to work with the company and the products were well received, which earned us repeat business.",
  },
  {
    id: 3,
    name: "Rahul Gupta",
    review: "Very Appreciated",
    designation: "",
    message:
      "The gifts were well received by customers, and your solution-focused approach was much appreciated.",
  },
  {
    id: 4,
    name: "Latika Gupta",
    review: "Excellent customer service",
    designation: "",
    message:
      "Wow! Your excellent customer service and clear communication have earned you rave reviews. It means a lot to me! Thank you so much!",
  },
];

const Testimonials = () => {
  const [sliderRef] = useKeenSlider(
    {
      loop: true,
      breakpoints: {
        "(min-width: 300px)": {
          slides: { perView: 1, spacing: 5 },
        },
        "(min-width: 1000px)": {
          slides: { perView: 3, spacing: 10 },
        },
      },
      slides: { origin: "center", perView: 3, spacing: 10 },
    },

    [
      (slider) => {
        let timeout;
        let mouseOver = false;
        function clearNextTimeout() {
          clearTimeout(timeout);
        }
        function nextTimeout() {
          clearTimeout(timeout);
          if (mouseOver) return;
          timeout = setTimeout(() => {
            slider.next();
          }, 2000);
        }
        slider.on("created", () => {
          slider.container.addEventListener("mouseover", () => {
            mouseOver = true;
            clearNextTimeout();
          });
          slider.container.addEventListener("mouseout", () => {
            mouseOver = false;
            nextTimeout();
          });
          nextTimeout();
        });
        slider.on("dragStarted", clearNextTimeout);
        slider.on("animationEnded", nextTimeout);
        slider.on("updated", nextTimeout);
      },
    ]
  );
  return (
    <div className="p-4">
      <div className="mx-auto max-w-full px-4 py-12 sm:px-6 lg:me-0 lg:py-16 lg:pe-0 lg:ps-8 xl:py-24">
        <div className="gap-8 lg:items-center lg:gap-16">
          {/* header */}
          <div className="mb-14 mx-auto flex justify-center lg:text-center text-left lg:w-1/2">
            <div>
              <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
                Don&apos;t just take our word for it...
              </h2>

              <p className="mt-4">
                Hear what our users have to say about their experience with
                utsao . Our users&apos; testimonials speak volumes about the way
                our products brought smiles to their faces.
              </p>
            </div>
          </div>

          <div className="-mx-6 lg:col-span-3 lg:mx-0">
            {/* slider cards */}
            <div ref={sliderRef} className="keen-slider">
              {testimonial.map((testimonial) => (
                <TestimonialCard
                  key={testimonial._id}
                  testimonial={testimonial}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
// cards
const TestimonialCard = ({ testimonial }) => {
  return (
    <div className="keen-slider__slide rounded-xl hover:cursor-pointer">
      <blockquote className="flex h-full flex-col bg-[url('/testimonialImg.jpg')] bg-cover bg-center justify-between p-4 sm:p-8 lg:p-6">
        <div className="h-full w-full bg-white p-3 rounded-lg bg-opacity-60">
          <div>
            <div className="mt-4">
              <p className="text-2xl font-bold text-purple sm:text-3xl ">
                {testimonial.review}
              </p>

              <p className="mt-4 leading-relaxed text-purple font-semibold">
                {testimonial.message}
              </p>
            </div>
          </div>

          <footer className="mt-4 text-sm font-medium text-purple sm:mt-6">
            &mdash; {testimonial.name}
            <p>{testimonial.designation}</p>
          </footer>
        </div>
      </blockquote>
    </div>
  );
};
export default Testimonials;
