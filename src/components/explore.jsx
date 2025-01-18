import {
  Arrow,
  Icon,
  Icon2,
  Icon3,
  Icon4,
  Icon5,
  Icon6,
  Icon7,
  Icon8,
} from "@/image";
import Image from "next/image";
import React from "react";

export default function Explore() {
  return (
    <div className="container mx-auto p-8">
      {" "}
      <div className=" py-10 flex justify-between">
        <h2 className="font-[600] text-[40px] leading-[52.8px]">
          Explore by <span className="text-blue-500">category</span>
        </h2>
        <div className="flex justify-between items-center ml-2">
          <p>Show all job</p>
          <Image src={Arrow} alt="arrow" width={24} height={24} />
        </div>
      </div>
      <div className="grid grid-cols-4 gap-4">
        <div className="p-4 border border-[#D6DDEB]">
          <Image src={Icon} alt="icon" width={48} height={48} />
          <h1 className="font-bold text-xl pb-3 pt-8">Design</h1>
          <p className="text-slate-500 ">235 jobs available -{">"}</p>
        </div>
        <div className="p-4 border border-[#D6DDEB]">
          <Image src={Icon2} alt="icon2" width={48} height={48} />
          <h1 className="font-bold text-xl pb-3 pt-8">Sales</h1>
          <p className="text-slate-500 ">746 jobs available -{">"}</p>
        </div>
        <div className="p-4 border bg-[#4640DE] border-[#D6DDEB] text-white">
          <Image src={Icon3} alt="icon3" width={48} height={48} />
          <h1 className="font-bold text-xl pb-3 pt-8">Marketing</h1>
          <p>340 jobs available -{">"}</p>
        </div>
        <div className="p-4 border border-[#D6DDEB]">
          <Image src={Icon4} alt="icon4" width={48} height={48} />
          <h1 className="font-bold text-xl pb-3 pt-8">Finance</h1>
          <p className="text-slate-500 ">145 jobs available -{">"}</p>
        </div>
        <div className="p-4 border border-[#D6DDEB]">
          <Image src={Icon5} alt="icon5" width={48} height={48} />
          <h1 className="font-bold text-xl pb-3 pt-8">Technology</h1>
          <p className="text-slate-500 ">89 jobs available -{">"}</p>
        </div>
        <div className="p-4 border border-[#D6DDEB]">
          <Image src={Icon6} alt="icon6" width={48} height={48} />
          <h1 className="font-bold text-xl pb-3 pt-8">Engineering</h1>
          <p className="text-slate-500 ">356 jobs available -{">"}</p>
        </div>
        <div className="p-4 border border-[#D6DDEB]">
          <Image src={Icon7} alt="icon7" width={48} height={48} />
          <h1 className="font-bold text-xl pb-3 pt-8">Business</h1>
          <p className="text-slate-500 ">564 jobs available -{">"}</p>
        </div>
        <div className="p-4 border border-[#D6DDEB]">
          <Image src={Icon8} alt="icon8" width={48} height={48} />
          <h1 className="font-bold text-xl pb-3 pt-8">Human Resource</h1>
          <p className="text-slate-500 ">142 jobs available -{">"}</p>
        </div>
      </div>
    </div>
  );
}
