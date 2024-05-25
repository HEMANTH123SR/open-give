"use client";
import { useState } from "react";
import { ArrowUpRight } from "lucide-react";
import { CircleCheckBig } from "lucide-react";

export const HowToUse = () => {
    const [isHoveredOne, setIsHoveredOne] = useState(false);
    const [isHoveredTwo, setIsHoveredTwo] = useState(false);

    return (
        <div className="h-full bg-white w-full flex flex-col items-center pb-24 ">
            <p className="pt-12 text-[#9093A3] font-mono font-semibold text-sm">
                UNLOCK THE FEATURE
            </p>
            <h4 className="text-4xl py-6 font-mono font-semibold">
                How , How does it work
            </h4>
            <div className="flex px-12 w-full h-[740px]  gap-5 ">
                <div
                    className={`w-1/2 h-full cursor-pointer overflow-hidden flex flex-col rounded-xl bg-black pl-8 pr-3 py-10 space-y-5 ${isHoveredOne
                        ? "w-4/6"
                        : isHoveredOne || isHoveredTwo
                            ? "w-2/6"
                            : "w-1/2"
                        } }`}
                    onMouseEnter={() => setIsHoveredOne(true)}
                    onMouseLeave={() => setIsHoveredOne(false)}
                >
                    <ArrowUpRight className="bg-[#40434F] h-14 w-14 p-2 rounded-full" />

                    <div className="flex space-x-6 text-white ">
                        <div
                            className={`flex flex-col space-y-4 ${isHoveredOne ? "w-2/3" : ""}`}
                        >
                            <h5 className="text-6xl">For Partners</h5>
                            <p className="text-lg text-[#BBBCC2] font-semibold">
                                Pipe lets you offer frictionless embedded financing for business
                                owners on your platform.
                            </p>
                            <div className={`flex flex-col space-y-4 pt-8 ${isHoveredOne ? "pr-12" : ""}`}>
                                <div className="flex space-x-2">
                                    <CircleCheckBig className="text-white h-5 w-5" />
                                    <span className="">
                                        Launch an embedded capital offering and go to market fast
                                    </span>
                                </div>
                                <div className="flex space-x-2">
                                    <CircleCheckBig className="text-white h-5 w-5" />
                                    <span className="">
                                        Drive value, improve retention, and deepen customer
                                        relationships
                                    </span>
                                </div>
                                <div className="flex space-x-2">
                                    <CircleCheckBig className="text-white h-5 w-5" />
                                    <span className="">
                                        Grow your revenue and GPV by helping your merchants grow
                                    </span>
                                </div>
                            </div>
                        </div>
                        <div
                            className={`${isHoveredOne ? "" : "hidden"
                                } flex h-full w-1/3 justify-center items-center `}
                        >
                            <img
                                src="https://pipe.com/_next/image?url=%2Fassets%2Fimg%2Ffor-partners-product-slider-desktop.png&w=828&q=75"
                                className="object-cover w-full h-full overflow-visible"
                                style={{
                                    transform: "scale(1.5)",
                                    transformOrigin: "left center",
                                }}
                            />
                        </div>
                    </div>
                </div>
                <div
                    className={`w-1/2 h-full cursor-pointer overflow-hidden flex flex-col rounded-xl bg-[#C6DAF7] pl-8
            pr-5 py-10 space-y-5 ${isHoveredTwo
                            ? "w-4/6"
                            : isHoveredOne || isHoveredTwo
                                ? "w-2/6"
                                : "w-1/2"
                        } }`}
                    onMouseEnter={() => setIsHoveredTwo(true)}
                    onMouseLeave={() => setIsHoveredTwo(false)}
                >
                    <ArrowUpRight className="bg-black text-[#C6DAF7] h-14 w-14 p-2 rounded-full " />
                    <div className="flex space-x-6 text-black ">
                        <div
                            className={`flex flex-col space-y-4 ${isHoveredOne && "w-2/3"}`}
                        >
                            <h5 className="text-6xl">For Partners</h5>
                            <p className="text-lg text-slate-700 font-semibold">
                                Pipe lets you offer frictionless embedded financing for business
                                owners on your platform.
                            </p>
                            <div className={`flex flex-col space-y-4 pt-8 ${isHoveredTwo ? "pr-14" : ""}`}>
                                <div className="flex space-x-2">
                                    <CircleCheckBig className="text-black h-5 w-5" />
                                    <span className="">
                                        Launch an embedded capital offering and go to market fast
                                    </span>
                                </div>
                                <div className="flex space-x-2">
                                    <CircleCheckBig className="text-black h-5 w-5" />
                                    <span className="">
                                        Drive value, improve retention, and deepen customer
                                        relationships
                                    </span>
                                </div>
                                <div className="flex space-x-2">
                                    <CircleCheckBig className="text-black h-5 w-5" />
                                    <span className="">
                                        Grow your revenue and GPV by helping your merchants grow
                                    </span>
                                </div>
                            </div>
                        </div>
                        <div
                            className={`${isHoveredTwo ? "" : "hidden"
                                } flex h-full w-1/3 justify-center items-center `}
                        >
                            <img
                                src="https://pipe.com/_next/image?url=%2Fassets%2Fimg%2Ffor-partners-product-slider-desktop.png&w=828&q=75"
                                className="object-cover w-full h-full overflow-visible"
                                style={{
                                    transform: "scale(1.5)",
                                    transformOrigin: "left center",
                                }}
                            />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};
