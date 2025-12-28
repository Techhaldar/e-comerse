import React from "react";
import Image from "next/image";

const Brands = () => {
  return (
    <div className="bg-black py-6">
      <div className="max-w-7xl mx-auto flex flex-wrap gap-4 px-4 sm:justify-between justify-center items-center">
        <div>
          <Image
            src="/images/versace.png"
            width={166}
            height={33}
            alt="versace"
            className="w-[116] h-[23] sm:w-[166] sm:h-[33]"
          />
        </div>
        <div>
          <Image
            src="/images/zara.png"
            width={91}
            height={38}
            alt="zara"
            className="w-[63] h-[26] sm:w-[91] sm:h-[38]"
          />
        </div>
        <div>
          <Image
            src="/images/gucci.png"
            width={156}
            height={36}
            alt="gucci"
            className="w-[109] h-[25] sm:w-[156] sm:h-[36]"
          />
        </div>
        <div>
          <Image
            src="/images/prada.png"
            width={194}
            height={32}
            alt="prada"
            className="w-[127] h-[21] sm:w-[194] sm:h-[32]"
          />
        </div>
        <div>
          <Image
            src="/images/calvin.png"
            width={206}
            height={33}
            alt="calvin"
            className="w-[134] h-[21] sm:w-[206] sm:h-[33]"
          />
        </div>
      </div>
    </div>
  );
};

export default Brands;
