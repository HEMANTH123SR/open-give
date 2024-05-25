"use client";
import { SignInButton, SignedIn, SignedOut, UserButton } from "@clerk/nextjs";
import Link from "next/link";
export const Nav = () => {
    return (
        <header className="px-12 mt-4 w-full h-16 flex justify-between items-center bg-[#070815]">
            {/* logo */}
            <Link href={"/"} className="cursor-pointer flex space-x-2 items-center justify-center">
                <img src="/loggo.png" className="w-10 h-10" />
                <h3 className="text-white text-3xl font-semibold">
                    Open
                    <span className="text-4xl font-bold bg-gradient-to-r from-white  to-[#eaa845]  bg-clip-text text-transparent">
                        /
                    </span>
                    <span className="bg-gradient-to-r from-[#FFD439] to-[#FF7A00] bg-clip-text text-transparent">
                        Give
                    </span>
                </h3>
            </Link>
            {/* nav */}
            <div className="flex space-x-2 items-center justify-center">

                <div className="text-white">
                    <SignedOut>
                        <div className="relative">
                            <button className=" h-fit w-fit rounded-xl border border-blue-100/20 bg-blue-200/10 px-4 py-2 text-blue-200 outline-none  transition-colors after:absolute after:inset-0 after:-z-10 after:animate-pulse after:rounded-full after:bg-yellow-100 after:bg-opacity-0 after:blur-md after:transition-all after:duration-500 hover:border-yellow-200/40 hover:text-yellow-300 after:hover:bg-opacity-15 focus:ring-2">
                                <SignInButton />
                            </button>
                        </div>
                    </SignedOut>
                    <SignedIn>
                        <UserButton />
                    </SignedIn>
                </div>
                {/* <div className="relative">

                    <button className=" h-fit w-fit rounded-md border border-blue-100/20 bg-blue-200/10 px-4 py-2 text-blue-200 outline-none  transition-colors after:absolute after:inset-0 after:-z-10 after:animate-pulse after:rounded-full after:bg-yellow-100 after:bg-opacity-0 after:blur-md after:transition-all after:duration-500 hover:border-yellow-200/40 hover:text-yellow-300 after:hover:bg-opacity-15 focus:ring-2">Resource</button>
                </div> */}
            </div>
        </header>
    );
};
