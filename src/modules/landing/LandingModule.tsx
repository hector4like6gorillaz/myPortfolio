import React, { useState } from "react";
import { ChevronDownIcon } from "@heroicons/react/24/outline";
import Particle from "../../shared/components/particle/Particle";

const Landing = () => {
  return (
    <div className="relative overflow-hidden">
      <Particle quanty={30} />

      <div className=" bg-[black] h-screen absolute left-0 right-0 top-0 bottom-0 m-auto opacity-80 z-[0]"></div>
      <div className="h-screen w-full flex flex-col items-center bg-img justify-between py-4">
        <div className="w-[5rem] h-[5rem] relative flex justify-center items-center z-[10]">
          <div className="spin-l1 bg-[transparent] h-[2.9rem] border-[#fafafa] border-l-4 border-r-4 absolute top-0 bottom-0 left-0 right-0 m-auto"></div>
          <div className="spin-l2 bg-[transparent] h-[2.9rem] border-[#fafafa] border-l-4 border-r-4 absolute top-0 bottom-0 left-0 right-0 m-auto rotate-[120deg]"></div>
          <div className="spin-l3 bg-[transparent] h-[2.9rem] border-[#fafafa] border-l-4 border-r-4 absolute top-0 bottom-0 left-0 right-0 m-auto rotate-[-120deg]"></div>
          <p className="font-lato text-[2.5rem] font-bold text-[#fafafa]">
            {"HB"}
          </p>
        </div>
        <p className="text-[2rem] sm:text-[5rem] font-lato text-center font-bold z-[10] text-white">
          Hi, I'm Héctor.
          <br />I develop web pages
        </p>

        <p className="text-[1rem] font-lato flex flex-col items-center font-bold z-[10] text-white cursor-pointer">
          Learn more about what I do
          <ChevronDownIcon className="w-[2rem] h-[2rem] " />
        </p>
      </div>
    </div>
  );
};

export default Landing;
