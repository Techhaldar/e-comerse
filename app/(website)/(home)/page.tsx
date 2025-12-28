import React from "react";
import HeroSection from "@/components/website/home/HeroSection";
import Brands from "@/components/website/home/Brands";
import NewArriavels from "@/components/website/home/NewArriavels";
import TopSelling from "@/components/website/home/TopSelling";
import BrowseStyle from "@/components/website/home/BrowseStyle";
import HappyCustomers from "@/components/website/home/HappyCustomers";
const page = () => {
  return (
    <>
      <HeroSection />
      <Brands />
      <NewArriavels />
      <TopSelling />
      <BrowseStyle />
      <HappyCustomers />
    </>
  );
};

export default page;
