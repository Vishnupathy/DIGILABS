import React from "react";
import Logo from "../logo/Logo";
import { RiGithubFill, RiDiscordFill, RiLinkedinFill } from "@remixicon/react";

function Footer() {
  return (
    <div className="justify-center items-center border-t-[color:var(--Neutral-1000,#E6E7E9)] bg-white flex flex-col px-20 py-11 border-t border-solid max-md:px-5">
      <Logo />
      <div className="self-center text-gray-500 text-center text-base font-medium leading-7 max-w-lg mt-5 max-md:max-w-full">
        Mode UI is a comprehensive design system that empowers designers and
        developers to create cohesive and visually stunning user interfaces
        across various platforms and devices
      </div>
      <div className="bg-zinc-100 self-stretch w-full shrink-0 h-px mt-16 mx-8 max-md:mr-2.5 max-md:mt-10" />
      <div className="items-stretch self-center flex justify-between gap-5 mt-16 max-md:max-w-full max-md:flex-wrap max-md:mt-10">
        <div className="items-stretch flex grow basis-[0%] flex-col">
          <h3 className="text-zinc-800 text-base font-bold leading-5 whitespace-nowrap">
            Company
          </h3>
          <p className="text-zinc-700 text-base font-medium leading-5 whitespace-nowrap mt-6">
            About us
          </p>
          <p className="text-zinc-700 text-base font-medium leading-5 whitespace-nowrap mt-4">
            Pricing
          </p>
          <p className="text-zinc-700 text-base font-medium leading-5 whitespace-nowrap mt-4">
            Contact us
          </p>
          <p className="text-zinc-700 text-base font-medium leading-5 whitespace-nowrap mt-4">
            Features
          </p>
        </div>
        <div className="items-stretch flex grow basis-[0%] flex-col">
          <h3 className="text-zinc-800 text-base font-bold leading-5 whitespace-nowrap">
            Product
          </h3>
          <p className="text-zinc-700 text-base font-medium leading-5 whitespace-nowrap mt-6">
            Figma design system
          </p>
          <p className="text-zinc-700 text-base font-medium leading-5 whitespace-nowrap mt-4">
            Ios kit
          </p>
          <p className="text-zinc-700 text-base font-medium leading-5 whitespace-nowrap mt-4">
            Android kit
          </p>
          <p className="text-zinc-700 text-base font-medium leading-5 whitespace-nowrap mt-4">
            Wireframe
          </p>
        </div>
        <div className="items-stretch flex grow basis-[0%] flex-col">
          <h3 className="text-zinc-800 text-base font-bold leading-5 whitespace-nowrap">
            Resources
          </h3>
          <p className="text-zinc-700 cursor-pointer text-base font-medium leading-5 whitespace-nowrap mt-6">
            Templates
          </p>
          <p className="text-zinc-700 cursor-pointer text-base font-medium leading-5 whitespace-nowrap mt-4">
            Landing pages
          </p>
          <p className="text-zinc-700 cursor-pointer text-base font-medium leading-5 whitespace-nowrap mt-4">
            Documentation
          </p>
          <p className="text-zinc-700 cursor-pointer text-base font-medium leading-5 whitespace-nowrap mt-4">
            Comp library
          </p>
        </div>
        <div className="items-stretch flex grow basis-[0%] flex-col">
          <h3 className="text-zinc-800 text-base font-bold leading-5 whitespace-nowrap">
            Legal
          </h3>
          <p className="text-zinc-700 cursor-pointer text-base font-medium leading-5 whitespace-nowrap mt-6">
            Privacy policy
          </p>
          <p className="text-zinc-700 cursor-pointer text-base font-medium leading-5 whitespace-nowrap mt-4">
            Terms & Conditions
          </p>
          <p className="text-zinc-700 cursor-pointer text-base font-medium leading-5 whitespace-nowrap mt-4">
            Disclaimer
          </p>
          <p className="text-zinc-700 cursor-pointer text-base font-medium leading-5 whitespace-nowrap mt-4">
            Affiliate programme
          </p>
        </div>
        <div className="items-stretch flex grow basis-[0%] flex-col">
          <h3 className="text-zinc-800 text-base font-bold leading-5 whitespace-nowrap">
            Support
          </h3>
          <p className="text-zinc-700 cursor-pointer text-base font-medium leading-5 whitespace-nowrap mt-6">
            Help centre
          </p>
          <p className="text-zinc-700 cursor-pointer text-base font-medium leading-5 whitespace-nowrap mt-4">
            Raise ticket
          </p>
          <p className="text-zinc-700 cursor-pointer text-base font-medium leading-5 whitespace-nowrap mt-4">
            Report
          </p>
          <p className="text-zinc-700 cursor-pointer text-base font-medium leading-5 whitespace-nowrap mt-4">
            Refund
          </p>
        </div>
      </div>
      <div className="justify-between items-stretch self-center flex w-[108px] max-w-full gap-5 mt-24 max-md:mt-10">
        <RiGithubFill
          size={36} // set custom `width` and `height`
          color="gray" // set `fill` color
          className="cursor-pointer my-icon aspect-square object-contain object-center w-full overflow-hidden shrink-0 flex-1" // add custom class name
        />
        <RiLinkedinFill
          size={36} // set custom `width` and `height`
          color="gray" // set `fill` color
          className="cursor-pointer my-icon aspect-square object-contain object-center w-full overflow-hidden shrink-0 flex-1" // add custom class name
        />
        <RiDiscordFill
          size={36} // set custom `width` and `height`
          color="gray" // set `fill` color
          className="cursor-pointer my-icon aspect-square object-contain object-center w-full overflow-hidden shrink-0 flex-1" // add custom class name
        />
      </div>
      <p className="text-gray-500 text-center text-sm leading-5 self-stretch mt-6 mx-8 max-md:max-w-full max-md:mr-2.5">
        © 2023 Mode UI Inc. All Rights Reserved.
      </p>
    </div>
  );
}

export default Footer;
