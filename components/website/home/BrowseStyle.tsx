import Image from "next/image";
import React from "react";
const BrowseStyle = () => {
  return (
    <div className="px-4">
      <div className="max-w-7xl mx-auto bg-[#F0F0F0] rounded-[20px] px-4  ">
        <h2 className="text-4xl sm:text-5xl text-center pt-14 pb-10 font-bold">
          BROWSE BY DRESS STYLE
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 pb-8">
          <div className="relative">
            <Image
              src="/images/casual.png"
              width={407}
              height={298}
              alt="casual"
              className="w-full h-[190] md:h-full object-cover rounded-[20px]"
            />
            <p className="absolute top-4 left-4 text-[24px] md:text-[36px] font-semibold">
              Casual
            </p>
          </div>
          <div className="md:col-span-2 relative ">
            <Image
              src="/images/formal.png"
              width={684}
              height={289}
              alt="formal"
              className="w-full h-[190] sm:h-full object-cover rounded-[20px]"
            />
            <p className="absolute top-4 left-4 text-[24px] md:text-[36px] font-semibold">
              Formal
            </p>
          </div>
          <div className="md:col-span-2 relative">
            <Image
              src="/images/party.png"
              width={684}
              height={289}
              alt="party"
              className="w-full h-[190] md:h-full object-cover rounded-[20px] relative"
            />
            <p className="absolute top-4 left-4 text-[24px] md:text-[36px] font-semibold">
              Party
            </p>
          </div>
          <div className="relative">
            <Image
              src="/images/gym.png"
              width={684}
              height={289}
              alt="gym"
              className="w-full h-[190] md:h-full object-cover rounded-[20px]"
            />
            <p className="absolute top-4 left-4 text-[24px] md:text-[36px] font-semibold">
              Gym
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BrowseStyle;
