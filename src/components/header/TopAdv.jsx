import React from "react";

function TopAdv() {
  return (
    <div className="justify-center items-center border-b-[color:var(--Neutral-1000,#E6E7E9)] bg-white flex flex-col px-16 py-2 border-b border-solid max-md:px-5">
      <div className="justify-center items-stretch flex gap-4 max-md:max-w-full max-md:flex-wrap">
        <div className="text-zinc-700 text-center text-xs font-medium leading-4 whitespace-nowrap justify-center items-stretch border border-[color:var(--Neutral-1000,#E6E7E9)] bg-zinc-100 px-2 py-1 rounded-[240px] border-solid">
          Announcement
        </div>
        <div className="text-neutral-900 text-center text-sm font-medium leading-5 self-center grow my-auto max-md:max-w-full">
          We are happy to announce that we raise $2 Million in Seed Funding
        </div>
      </div>
    </div>
  );
}

export default TopAdv;
