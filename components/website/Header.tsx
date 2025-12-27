"use client";
import { useState } from "react";
import { Logo } from "../ui/logo";
import {
  Search,
  ShoppingCart,
  CircleUser,
  Menu,
  ArrowLeft,
  X,
} from "lucide-react";
import Link from "next/link";
export const Header = () => {
  const [open, setOpen] = useState(false);
  const [menu, setMenu] = useState(false);
  const [offer, setOffer] = useState(true);
  return (
    <>
      <div className="shadow-sm">
        {offer && (
          <div className="text-center text-xs sm:text-sm py-2 bg-black text-white flex justify-evenly">
            <div>
              Sign up and get 20% off to your first order.{" "}
              <a href="#" className="underline ">
                Sign Up Now
              </a>
            </div>
            <div>
              <X className="hidden sm:block" onClick={() => setOffer(false)} />
            </div>
          </div>
        )}
        <nav className="px-4">
          <div className="max-w-7xl py-4 mx-auto flex gap-6 items-center justify-between">
            <div className="flex gap-4 ">
              <Menu className="lg:hidden" onClick={() => setMenu(true)} />
              {menu && (
                <div>
                  <div
                    className="absolute inset-0 bg-black/60 w-full h-full"
                    onClick={() => setMenu(false)}
                  ></div>
                  <div
                    className={`bg-white fixed top-0 z-50 left-0 h-full w-2/3 transform transition-transform duration-500 ease-in-out ${
                      menu ? "translate-x-0" : "-translate-x-full"
                    }`}
                  >
                    <X
                      className="absolute top-2 right-1 w-6"
                      onClick={() => setMenu(false)}
                    />
                    <ul className="mt-5 px-6 py-2">
                      <li className="cursor-pointer">
                        <Link href="#">Shop</Link>
                      </li>
                      <li className="cursor-pointer">
                        <Link href="#">On Sale</Link>
                      </li>
                      <li className="cursor-pointer">
                        <Link href="#">New Arrivals</Link>
                      </li>
                      <li className="cursor-pointer">
                        <Link href="#">Brands</Link>
                      </li>
                    </ul>
                  </div>
                </div>
              )}
              <Logo />
            </div>
            <div className="hidden lg:block">
              <ul className="flex gap-4 shrink-0">
                <li className="cursor-pointer">
                  <Link href="#">Shop</Link>
                </li>
                <li className="cursor-pointer">
                  <Link href="#">On Sale</Link>
                </li>
                <li className="cursor-pointer">
                  <Link href="#">New Arrivals</Link>
                </li>
                <li className="cursor-pointer">
                  <Link href="#">Brands</Link>
                </li>
              </ul>
            </div>
            <div className="hidden  flex-1 md:flex items-center gap-4  bg-[#F0F0F0] rounded-[62px] px-3 py-3 ">
              <Search color="gray" />
              <input
                type="text"
                placeholder="Search for products..."
                className="text-gray-600 outline-0"
              />
            </div>
            <div className="flex gap-4">
              <Search
                className="md:hidden cursor-pointer"
                onClick={() => setOpen(true)}
              />
              <ShoppingCart className="cursor-pointer" />
              <CircleUser className="cursor-pointer" />
            </div>
          </div>
        </nav>
      </div>
      {open && (
        <div className="fixed bg-white z-60 top-0 left-0 w-full h-full">
          <div className="flex gap-4 m-4">
            <button onClick={() => setOpen(false)}>
              <ArrowLeft className="cursor-pointer" />
            </button>
            <div className="flex-1 flex justify-between items-center gap-4  bg-[#F0F0F0] rounded-[62px] px-2 py-1 sm:py-2">
              <div className="flex gap-4">
                <Search color="gray" />
                <input
                  type="text"
                  placeholder="Search for products..."
                  className="text-gray-600 w-full outline-0"
                />
              </div>
              <div>
                <div className="bg-amber-300 px-8 rounded-[62px] cursor-pointer">
                  Search
                </div>
              </div>
            </div>
          </div>
          <div className="px-16 bg-gray-50 ">
            <ul className="text-gray-400 text-sm">
              <li className="border-b border-gray-200 pb-1 sm:pb-2">
                T-SHIRT WITH TAPE DETAILS
              </li>
              <li className="border-b border-gray-200 pb-1 sm:pb-2">
                SKINNY FIT JEANS
              </li>
              <li className="border-b border-gray-200 pb-1 sm:pb-2">
                Vertical Striped Shirt
              </li>
              <li className="border-b border-gray-200 pb-1 sm:pb-2">
                Courage Graphic T-short
              </li>
              <li className="border-b border-gray-200 pb-2">
                SLEEVE STRIPED T-SHIRT
              </li>
            </ul>
          </div>
        </div>
      )}
    </>
  );
};
