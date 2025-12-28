"use client";
import React from "react";
import Image from "next/image";
import { Star, StarHalf } from "lucide-react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
const TopSelling = () => {
  return (
    <div>
      <div className="max-w-7xl mx-auto">
        <h2 className="text-4xl sm:text-5xl text-center pt-14 pb-10 font-bold">
          TOP SELLING
        </h2>
        <div className="hidden lg:grid grid-cols-4 gap-4 px-4">
          <div>
            <Image
              src="/images/vertical.png"
              width={295}
              height={298}
              alt="t-shirt"
              className="w-[198] h-[200] md:w-[295] md:h-[298] rounded-[20]"
            />
            <div className="space-y-3 pt-2 font-semibold">
              <h3 className="text-xl">Vertical Striped Shirt</h3>
              <div className="flex justify-start gap-4 ">
                <p className="flex">
                  <Star className="text-[#FFC633] fill-[#FFC633]" />
                  <Star className="text-[#FFC633] fill-[#FFC633]" />
                  <Star className="text-[#FFC633] fill-[#FFC633]" />
                  <Star className="text-[#FFC633] fill-[#FFC633]" />
                  <Star className="text-[#FFC633] fill-[#FFC633]" />
                </p>
                <p className="text-gray-500">
                  <span className="font-semibold text-black ">5.0/</span>5
                </p>
              </div>
              <div className="flex gap-2 items-cente ">
                <p className="text-2xl">$212</p>
                <p className="text-2xl line-through text-gray-500">$232</p>
                <p className="text-2xl px-[14] text-red-500 font-light bg-[rgba(255,51,51,0.1)] rounded-[62px]">
                  -20%
                </p>
              </div>
            </div>
          </div>
          <div>
            <Image
              src="/images/courage.png"
              width={295}
              height={298}
              alt="skinny"
              className="w-[198] h-[200] md:w-[295] md:h-[298] rounded-[20]"
            />
            <div className="space-y-3 pt-2 font-semibold">
              <h3 className="text-xl">Courage Graphic T-Shirt</h3>
              <div className="flex justify-start gap-4 ">
                <p className="flex">
                  <Star className="text-[#FFC633] fill-[#FFC633]" />
                  <Star className="text-[#FFC633] fill-[#FFC633]" />
                  <Star className="text-[#FFC633] fill-[#FFC633]" />
                  <Star className="text-[#FFC633] fill-[#FFC633]" />
                </p>
                <p className="text-gray-500">
                  <span className="font-semibold text-black ">4/</span>5
                </p>
              </div>
              <div className="flex gap-2 items-cente ">
                <p className="text-2xl">$145</p>
              </div>
            </div>
          </div>
          <div>
            <Image
              src="/images/loose.png"
              width={295}
              height={298}
              alt="checkered shirt"
              className="w-[198] h-[200] md:w-[295] md:h-[298] rounded-[20]"
            />
            <div className="space-y-3 pt-2 font-semibold">
              <h3 className="text-xl">Loose Fit Bermuda Shorts</h3>
              <div className="flex justify-start gap-4 ">
                <p className="flex">
                  <Star className="text-[#FFC633] fill-[#FFC633]" />
                  <Star className="text-[#FFC633] fill-[#FFC633]" />
                  <Star className="text-[#FFC633] fill-[#FFC633]" />
                </p>
                <p className="text-gray-500">
                  <span className="font-semibold text-black ">3.0/</span>5
                </p>
              </div>
              <p className="text-2xl">$80</p>
            </div>
          </div>
          <div>
            <Image
              src="/images/faded.png"
              width={295}
              height={298}
              alt="t-shirt"
              className="w-[198] h-[200] md:w-[295] md:h-[298] rounded-[20]"
            />
            <div className="space-y-3 pt-2 font-semibold">
              <h3 className="text-xl">Faded Skinny Jeans</h3>
              <div className="flex justify-start gap-4 ">
                <p className="flex">
                  <Star className="text-[#FFC633] fill-[#FFC633]" />
                  <Star className="text-[#FFC633] fill-[#FFC633]" />
                  <Star className="text-[#FFC633] fill-[#FFC633]" />
                  <Star className="text-[#FFC633] fill-[#FFC633]" />
                  <StarHalf className="text-[#FFC633] fill-[#FFC633]" />
                </p>
                <p className="text-gray-500">
                  <span className="font-semibold text-black ">4.5/</span>5
                </p>
              </div>
              <div className="flex gap-2 items-cente ">
                <p className="text-2xl">$210</p>
              </div>
            </div>
          </div>
        </div>

        <div className="lg:hidden px-4">
          <Swiper
            spaceBetween={10}
            breakpoints={{
              0: {
                slidesPerView: 1.4,
              },
              380: {
                slidesPerView: 1.8,
              },
              440: {
                slidesPerView: 1.8,
              },
              640: {
                slidesPerView: 2.8,
              },
              890: {
                slidesPerView: 2.8,
              },
            }}
          >
            <SwiperSlide>
              <div>
                <Image
                  src="/images/t-shirt.png"
                  width={295}
                  height={298}
                  alt="t-shirt"
                  className="w-[198] h-[200] md:w-[295] md:h-[298] rounded-[20]"
                />
                <div className="space-y-3 pt-2 font-semibold">
                  <h3 className="text-base sm:text-xl">
                    T-Shirt with Tape Details
                  </h3>
                  <div className="flex justify-start gap-4 ">
                    <p className="flex">
                      <Star className="text-[#FFC633] fill-[#FFC633] text-sm sm:text-lg " />
                      <Star className="text-[#FFC633] fill-[#FFC633] text-sm sm:text-lg " />
                      <Star className="text-[#FFC633] fill-[#FFC633] text-sm sm:text-lg " />
                      <Star className="text-[#FFC633] fill-[#FFC633] text-sm sm:text-lg " />
                      <StarHalf className="text-[#FFC633] fill-[#FFC633] text-sm sm:text-lg " />
                    </p>
                    <p className="text-gray-500">
                      <span className="font-semibold text-black ">4.5/</span>5
                    </p>
                  </div>
                  <p className="text-xl sm:text-2xl">$120</p>
                </div>
              </div>
            </SwiperSlide>

            <SwiperSlide>
              <div>
                <Image
                  src="/images/skinny.png"
                  width={295}
                  height={298}
                  alt="skinny"
                  className="w-[198] h-[200] md:w-[295] md:h-[298] rounded-[20]"
                />
                <div className="space-y-3 pt-2 font-semibold">
                  <h3 className="text-xl">Skinny Fit Jeans</h3>
                  <div className="flex justify-start gap-4 ">
                    <p className="flex">
                      <Star className="text-[#FFC633] fill-[#FFC633] text-sm sm:text-lg" />
                      <Star className="text-[#FFC633] fill-[#FFC633] text-sm sm:text-lg" />
                      <Star className="text-[#FFC633] fill-[#FFC633] text-sm sm:text-lg" />
                      <StarHalf className="text-[#FFC633] fill-[#FFC633] text-sm sm:text-lg" />
                    </p>
                    <p className="text-gray-500">
                      <span className="font-semibold text-black ">3.5/</span>5
                    </p>
                  </div>
                  <div className="flex gap-2 items-cente ">
                    <p className="text-xl sm:text-2xl">$120</p>
                    <p className="text-xl sm:text-2xl line-through text-gray-500">
                      $260
                    </p>
                    <p className="text-xl sm:text-2xl px-[14] text-red-500 font-light bg-[rgba(255,51,51,0.1)] rounded-[62px]">
                      -20%
                    </p>
                  </div>
                </div>
              </div>
            </SwiperSlide>

            <SwiperSlide>
              <div>
                <Image
                  src="/images/checkered-shirt.png"
                  width={295}
                  height={298}
                  alt="checkered shirt"
                  className="w-[198] h-[200] md:w-[295] md:h-[298] rounded-[20]"
                />
                <div className="space-y-3 pt-2 font-semibold">
                  <h3 className="text-xl">Checkered Shirt</h3>
                  <div className="flex justify-start gap-4 ">
                    <p className="flex">
                      <Star className="text-[#FFC633] fill-[#FFC633] text-sm sm:text-lg" />
                      <Star className="text-[#FFC633] fill-[#FFC633] text-sm sm:text-lg" />
                      <Star className="text-[#FFC633] fill-[#FFC633] text-sm sm:text-lg" />
                      <Star className="text-[#FFC633] fill-[#FFC633] text-sm sm:text-lg" />
                      <StarHalf className="text-[#FFC633] fill-[#FFC633] text-sm sm:text-lg" />
                    </p>
                    <p className="text-gray-500">
                      <span className="font-semibold text-black ">4.5/</span>5
                    </p>
                  </div>
                  <p className="text-xl sm:text-2xl">$180</p>
                </div>
              </div>
            </SwiperSlide>

            <SwiperSlide>
              <div>
                <Image
                  src="/images/sleeve-striped.png"
                  width={295}
                  height={298}
                  alt="t-shirt"
                  className="w-[198] h-[200] md:w-[295] md:h-[298] rounded-[20]"
                />
                <div className="space-y-3 pt-2 font-semibold">
                  <h3 className="text-xl">Skinny Fit Jeans</h3>
                  <div className="flex justify-start gap-4 ">
                    <p className="flex">
                      <Star className="text-[#FFC633] fill-[#FFC633] text-sm sm:text-lg" />
                      <Star className="text-[#FFC633] fill-[#FFC633] text-sm sm:text-lg" />
                      <Star className="text-[#FFC633] fill-[#FFC633] text-sm sm:text-lg" />
                      <StarHalf className="text-[#FFC633] fill-[#FFC633] text-sm sm:text-lg" />
                    </p>
                    <p className="text-gray-500">
                      <span className="font-semibold text-black ">3.5/</span>5
                    </p>
                  </div>
                  <div className="flex gap-2 items-cente ">
                    <p className="text-xl sm:text-2xl">$130</p>
                    <p className="text-xl sm:text-2xl line-through text-gray-500">
                      $160
                    </p>
                    <p className="text-xl sm:text-2xl px-[14] text-red-500 font-light bg-[rgba(255,51,51,0.1)] rounded-[62px]">
                      -30%
                    </p>
                  </div>
                </div>
              </div>
            </SwiperSlide>
          </Swiper>
        </div>

        <div className="flex justify-center px-4">
          <button className="rounded-[62] px-16 py-2 my-6 w-full sm:w-auto mx-auto  cursor-pointer border border-[rgba(0,0,0,0.1)]">
            View All
          </button>
        </div>
      </div>
    </div>
  );
};

export default TopSelling;
