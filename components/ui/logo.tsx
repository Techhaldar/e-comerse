import React from "react";
import Image from "next/image";

export const Logo = () => {
  return (
    <Image
      src="/images/SHOPCO-logo.png"
      alt="logo-img"
      width={160}
      height={160}
      className="w-32 h-auto sm:w-auto shrink-0"
    />
  );
};
