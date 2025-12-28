"use client";
import React from "react";
import { Check, Star } from "lucide-react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay } from "swiper/modules";

import "swiper/css";
import "swiper/css/pagination";

const testimonials = [
  {
    name: "Sarah M.",
    review:
      "I'm blown away by the quality and style of the clothes I received from Shopco. From casual wear to elegant dresses, every piece I've bought has exceeded my expectations.",
  },
  {
    name: "Alex K.",
    review:
      "Finding clothes that align with my personal style used to be a challenge until I discovered Shopco. The range of options they offer is truly remarkable, catering to a variety of tastes and occasions.",
  },
  {
    name: "James L.",
    review:
      "As someone who's always on the lookout for unique fashion pieces, I'm thrilled to have stumbled upon Shopco. The selection of clothes is not only diverse but also on-point with the latest trends.",
  },
  {
    name: "Alex K.",
    review:
      "Finding clothes that align with my personal style used to be a challenge until I discovered Shopco. The range of options they offer is truly remarkable, catering to a variety of tastes and occasions.",
  },
];

const HappyCustomers = () => {
  return (
    <div className="max-w-7xl mx-auto px-4">
      <h2 className="text-4xl sm:text-5xl text-start pt-14 pb-6 font-bold">
        OUR HAPPY CUSTOMERS
      </h2>
      <div className="max-w-7xl mx-auto py-6">
        <Swiper
          modules={[Pagination, Autoplay]}
          spaceBetween={24}
          autoplay={{
            delay: 3000,
            disableOnInteraction: false,
          }}
          pagination={{ clickable: true }}
          breakpoints={{
            0: {
              slidesPerView: 1,
            },
            768: {
              slidesPerView: 2,
            },
            1024: {
              slidesPerView: 3,
            },
          }}
        >
          {testimonials.map((item, index) => (
            <SwiperSlide key={index}>
              <div className="bg-white rounded-2xl border border-gray-200 p-6 h-full min-h-[220px] flex flex-col">
                <div className="flex gap-1 text-yellow-400 mb-3">
                  {Array.from({ length: 5 }).map((_, i) => (
                    <Star
                      key={i}
                      className="text-[#FFC633] fill-[#FFC633] w-4 h-4"
                    />
                  ))}
                </div>

                <div className="flex items-center gap-2 mb-2">
                  <h4 className="font-semibold">{item.name}</h4>
                  <span className="bg-green-500 text-white text-xs rounded-full p-1 shrink-0">
                    <Check className="w-3 h-3" />
                  </span>
                </div>

                <p className="text-gray-600 text-sm leading-relaxed">
                  “{item.review}”
                </p>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
};

export default HappyCustomers;
