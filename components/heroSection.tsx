import { BorderBeam } from "@/components/magicui/border-beam";

export const Hero = () => {
  return (
    <div>
      <div className="flex flex-col  w-full pt-12 items-center justify-center ">
        <h1 className="text-6xl text-white font-semibold my-1 capitalize">
          Revolutionizing Transparency
        </h1>

        <h1 className="text-6xl text-white font-semibold capitalize">
          In NGO Donations
        </h1>

        <p className="text-[#CBD5E1] mt-3 text-sm capitalize">
          Trusted, traceable, and transparent donations for an
        </p>
        <p className="text-[#CBD5E1] text-sm"> impactful change.</p>
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
