import React from "react";
import Image from "next/image";
const About = () => {
  return (
    <section className="relative z-10 overflow-hidden pb-16 pt-36 md:pb-20 lg:pb-28 lg:pt-[140px] bg-skyblue">
      <div className="container">
        <div className="-mx-4 flex flex-wrap">
          <div className="w-full px-4">
            <h1 className="font-bold text-purple text-6xl text-center w-full">
              About Us
            </h1>
            <div className="lg:flex lg:justify-between m-5">
              <p className=" text-gray-700 lg:w-1/2">
                With gifting for businesses, you can show how you feel about
                your clients or coworkers through gifts a new type of gifting
                platform specifically designed for corporations. We realized the
                pressing need for the supply of high quality merchandise of
                international standards at a value for money price and set out
                to break new ground in the manufacturing and marketing of
                corporate gifts, promotional products, and gifts for the festive
                season. Since then, the company with a team of professionals has
                worked towards bringing The Corporate Gifts to its present
                position of being the preferred supplier for some of the biggest
                corporate names in the country. Our range is extensive and
                unique. This website will give you an idea of what we have on
                our offers. <br />
                <br />
                &#8226; Helps you give high-end gifts that stand out, the kinds
                of gifts recipients look at, and instantly remember where they
                came from. <br />
                <br />
                &#8226; Gives you access to handy corporate gifting platforms
                and automation that streamline your giving process, helping you
                strengthen business relationships by being the person who always
                remembers and celebrates special occasions, big and small.
                <br />
                <br />
                &#8226; Allows you to deliver one-of-a-kind, professionally
                designed personalizations, and customizations.
              </p>
              <Image
                src="/aboutus.webp"
                width={600}
                height={600}
                className="lg:w-[600px] lg:h-[400px] mt-2 border-purple border-4"
                alt="about"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
