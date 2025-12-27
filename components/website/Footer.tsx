import { Mail, Twitter, Facebook, Instagram, Github } from "lucide-react";
import React from "react";
import { Logo } from "../ui/logo";
import Image from "next/image";
import Link from "next/link";

export const Footer = () => {
  return (
    <>
      <div className="bg-[#F0F0F0] relative pt-24 mt-42 px-4">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 max-w-7xl w-[95%]  bg-black text-white rounded-2xl px-4  mx-auto py-10 flex flex-col lg:flex-row items-center justify-between gap-6 shadow-2xl">
          <h2 className="text-2xl md:text-3xl font-bold uppercase max-w-md">
            Stay upto date about our latest offers
          </h2>

          <div className="flex flex-col gap-2 w-full max-w-sm">
            <div className="flex items-center gap-3 bg-white rounded-full px-4 py-2">
              <Mail className="text-gray-500" />
              <input
                type="email"
                placeholder="Enter your email address"
                className="outline-none w-full text-black placeholder:text-gray-500"
              />
            </div>

            <button className="bg-white text-black rounded-full py-2 font-medium hover:bg-gray-200 transition cursor-pointer">
              Subscribe to Newsletter
            </button>
          </div>
        </div>

        <div className="pt-16 pb-8 sm:py-12 grid grid-cols-2 lg:grid-cols-[1fr_0.6fr_0.6fr_0.6fr_0.6fr] mx-auto gap-4 max-w-7xl">
          <div className="space-y-4 col-span-2 md:col-span-1">
            <Logo />
            <p className="max-w-4xl">
              We have clothes that suits your style and which you’re proud to
              wear. From women to men.
            </p>
            <div className="flex items-center gap-4">
              <div className="w-10 h-10 bg-white border-2 border-gray-500 rounded-full flex items-center justify-center cursor-pointer">
                <Link href="#">
                  <Twitter />
                </Link>
              </div>
              <div className="w-10 h-10 bg-white border-2 border-gray-500 rounded-full flex items-center justify-center cursor-pointer">
                <Link href="">
                  <Facebook />
                </Link>
              </div>
              <div className="w-10 h-10 bg-white border-2 border-gray-500 rounded-full flex items-center justify-center cursor-pointer">
                <Link href="">
                  <Instagram />
                </Link>
              </div>
              <div className="w-10 h-10 bg-white border-2 border-gray-500 rounded-full flex items-center justify-center cursor-pointer">
                <Link href="">
                  <Github />
                </Link>
              </div>
            </div>
          </div>
          <div>
            <h2 className="text-base font-bold  pb-4">Company</h2>
            <ul className="space-y-4">
              <li className="cursor-pointer hover:text-gray-500">About</li>
              <li className="cursor-pointer hover:text-gray-500">Features</li>
              <li className="cursor-pointer hover:text-gray-500">Works</li>
              <li className="cursor-pointer hover:text-gray-500">Career</li>
            </ul>
          </div>
          <div>
            <h2 className="text-base font-bold  pb-4">Help</h2>
            <ul className="space-y-4">
              <li className="cursor-pointer hover:text-gray-500">
                Customer Support
              </li>
              <li className="cursor-pointer hover:text-gray-500">
                Delivery Details
              </li>
              <li className="cursor-pointer hover:text-gray-500">
                Terms & Conditions
              </li>
              <li className="cursor-pointer hover:text-gray-500">
                Privacy Policy
              </li>
            </ul>
          </div>
          <div>
            <h2 className="text-base font-bold  pb-4">Resources</h2>
            <ul className="space-y-4">
              <li className="cursor-pointer hover:text-gray-500">
                Free eBooks
              </li>
              <li className="cursor-pointer hover:text-gray-500">
                Development Tutorial
              </li>
              <li className="cursor-pointer hover:text-gray-500">
                How to - Blog
              </li>
              <li className="cursor-pointer hover:text-gray-500">
                Youtube Playlist
              </li>
            </ul>
          </div>
          <div>
            <h2 className="text-base font-bold  pb-4">FAQ</h2>
            <ul className="space-y-4">
              <li className="cursor-pointer hover:text-gray-500">Account</li>
              <li className="cursor-pointer hover:text-gray-500">
                Manage Deliveries
              </li>
              <li className="cursor-pointer hover:text-gray-500">Orders</li>
              <li className="cursor-pointer hover:text-gray-500">Payments</li>
            </ul>
          </div>
        </div>

        <hr />
        <div className="flex flex-col md:flex-row justify-center items-center md:justify-between max-w-7xl w-full mx-auto py-8 space-y-4">
          <div>Shop.co © 2000-2025, All Rights Reserved</div>
          <div className="flex gap-2 sm:gap-4">
            <div className="bg-white border border-[#D6DCE5] shadow-[0px_4.48px_8.96px_rgba(183,183,183,0.08),0px_0.45px_4.48px_rgba(183,183,183,0.08)] rounded-lg px-4 py-2 flex items-center shrink-0">
              <Image
                src="/images/Visa.png"
                alt="visa-card"
                width={46}
                height={30}
                className="w-5 sm:w-8"
              />
            </div>
            <div className="bg-white border border-[#D6DCE5] shadow-[0px_4.48px_8.96px_rgba(183,183,183,0.08),0px_0.45px_4.48px_rgba(183,183,183,0.08)] rounded-lg px-4 py-2 flex items-center shrink-0">
              <Image
                src="/images/Mastercard.png"
                alt="visa-card"
                width={46}
                height={30}
                className="w-5 sm:w-8"
              />
            </div>
            <div className="bg-white border border-[#D6DCE5] shadow-[0px_4.48px_8.96px_rgba(183,183,183,0.08),0px_0.45px_4.48px_rgba(183,183,183,0.08)] rounded-lg px-4 py-2 flex items-center shrink-0">
              <Image
                src="/images/Paypal.png"
                alt="visa-card"
                width={46}
                height={30}
                className="w-5 sm:w-8"
              />
            </div>
            <div className="bg-white border border-[#D6DCE5] shadow-[0px_4.48px_8.96px_rgba(183,183,183,0.08),0px_0.45px_4.48px_rgba(183,183,183,0.08)] rounded-lg px-4 py-2 flex items-center shrink-0">
              <Image
                src="/images/IPay.png"
                alt="visa-card"
                width={46}
                height={30}
                className="w-5 sm:w-8"
              />
            </div>
            <div className="bg-white border border-[#D6DCE5] shadow-[0px_4.48px_8.96px_rgba(183,183,183,0.08),0px_0.45px_4.48px_rgba(183,183,183,0.08)] rounded-lg px-4 py-2 flex items-center shrink-0">
              <Image
                src="/images/G-Pay.png"
                alt="visa-card"
                width={46}
                height={30}
                className="w-5 sm:w-8"
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
