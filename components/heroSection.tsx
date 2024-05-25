"use client";

import { BorderBeam } from "@/components/magicui/border-beam";
import GradualSpacing from "@/components/magicui/gradual-spacing";
export const Hero = () => {
  return (
    <div>
      <div className="flex flex-col  w-full pt-12 items-center justify-center ">
        <h1 className=" text-center text-6xl font-bold  text-white  ">
          Revolutionizing nonprofit donation
        </h1>
        <h1 className=" text-center text-6xl font-bold  text-white  ">
          transparency
        </h1>
        <span className="text-[#CBD5E1] mt-3 text-sm capitalize">
          connecting Organizations, NGOs, and Creators for a
        </span>
        <span className="text-[#CBD5E1] mt-3 text-sm capitalize">
          Better Tomorrow .
        </span>
        {/* <GradualSpacing
          className="font-display text-center text-6xl font-bold tracking-[-0.1em] text-white  md:leading-[5rem]"
          text="Revolutionizing nonprofit donation "
        /> */}
        {/* <GradualSpacing
          className="font-display text-center text-6xl font-bold tracking-[-0.1em] text-white  md:leading-[5rem]"
          text="transparency ."
        /> */}
        {/* <GradualSpacing
          className="text-[#CBD5E1] mt-3 text-xs capitalize"
          text="connecting Organizations, NGOs, and Creators for a"
        /> */}
        {/* <GradualSpacing
          className="text-[#CBD5E1] mt-3 text-xs capitalize"
          text="Better Tomorrow ."
        /> */}

        <div className="mt-8 relative">
          <button className=" h-fit w-fit rounded-full border border-blue-100/20 bg-blue-200/10 px-4 py-2 text-blue-200 outline-none  transition-colors after:absolute after:inset-0 after:-z-10 after:animate-pulse after:rounded-full after:bg-yellow-100 after:bg-opacity-0 after:blur-md after:transition-all after:duration-500 hover:border-yellow-200/40 hover:text-yellow-300 after:hover:bg-opacity-15 focus:ring-2">
            Get Started
          </button>
        </div>
      </div>
      <div className="w-full px-12 py-8 ">
        <div className="flex w-full justify-center items-center">
          <div className="relative rounded-xl w-10/12">
            <img
              src="/design.png"
              alt="hero image"
              className="w-full h-full rounded-xl "
            />
            <BorderBeam size={250} duration={12} delay={9} />
          </div>
        </div>
      </div>
    </div>
  );
};
