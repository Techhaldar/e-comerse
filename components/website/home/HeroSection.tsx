import Image from "next/image";
import React from "react";

const HeroSection = () => {
  return (
    <>
      <div className="bg-[#F2F0F1] ">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-4 px-4 pt-12 sm:pt-12">
          <div>
            <h1 className="max-w-125 font-mono font-bold text-4xl sm:text-6xl">
              FIND CLOTHES <br />
              THAT MATCHES <br />
              YOUR STYLE
            </h1>
            <p className="text-[16px] py-4">
              Browse through our diverse range of meticulously crafted garments,
              designed to bring out your individuality and cater to your sense
              of style.
            </p>
            <div className="py-4">
              <button className="bg-black w-full sm:w-auto rounded-[62px] px-[54] py-[12] cursor-pointer text-white">
                Shop Now
              </button>
            </div>
            <div className="flex justify-center sm:justify-between flex-wrap items-center gap-8 pb-8">
              <div>
                <h3 className="text-[24px] sm:text-[40px] font-bold">200+</h3>
                <p className="text-[12px] sm:text-[16px] text-gray-600">
                  International Brands
                </p>
              </div>
              <div className="w-1 h-20 border-r-2 border-gray-300"></div>
              <div>
                <h3 className="text-[24px] sm:text-[40px] font-bold">2,000+</h3>
                <p className="text-[12px] sm:text-[16px] text-gray-600">
                  High-Quality Products
                </p>
              </div>
              <div className="w-1 h-20 border-r-2 border-gray-300 hidden sm:block"></div>

              <div>
                <h3 className="text-[24px] sm:text-[40px] font-bold">
                  30,000+
                </h3>
                <p className="text-[12px] sm:text-[16px] text-gray-600">
                  Happy Customers
                </p>
              </div>
            </div>
          </div>
          <div className="row-span-2">
            <Image
              src="/images/hero-img.png"
              width={1440}
              height={663}
              alt="hero-img"
              className="w-full h-full object-cover object-right items-center"
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default HeroSection;
