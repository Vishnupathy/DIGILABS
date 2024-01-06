import React from "react";
import { CreditCard, Headphones } from "lucide-react";

function Contact() {
  return (
    <div className="justify-center items-center bg-white flex flex-col px-20 py-12 max-md:px-5">
      <div className="text-neutral-900 text-center text-4xl font-semibold leading-10 max-w-[704px] mt-12 max-md:max-w-full max-md:mt-10">
        Unlock Limitless Possibilities with Our New Card Solutions
      </div>
      <div className="justify-center items-center self-stretch flex flex-col mt-8 mb-12 mx-8 px-16 max-md:max-w-full max-md:mr-2.5 max-md:mb-10 max-md:px-5">
        <div className="flex items-stretch gap-2">
          <div className="justify-between items-stretch bg-fuchsia-900 flex gap-2 px-4 py-3 rounded-lg">
            <div className="text-white text-center text-base font-medium leading-5 grow whitespace-nowrap flex items-center">
              <span>Unlock your card</span>
              <CreditCard color="#fff" />
            </div>
          </div>
          <div className="justify-between items-stretch bg-zinc-100 flex gap-2 px-4 py-3 rounded-lg">
            <div className="text-gray-500 text-center text-base font-medium leading-5 grow whitespace-nowrap flex items-center">
              <span>Customer support</span> <Headphones color="gray" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Contact;
