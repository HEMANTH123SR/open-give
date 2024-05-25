export const BentoBox = () => {
    return <div className="flex flex-col my-28 items-center w-full space-y-12">
        <div className="flex flex-col justify-center items-center ">
            <h2 className="text-5xl font-bold bg-gradient-to-r from-[#FFD439] to-[#FF7A00] bg-clip-text text-transparent">
                Transforming NGO
            </h2>
            <h2 className="text-5xl font-bold bg-gradient-to-r from-[#FFD439] to-[#FF7A00] bg-clip-text text-transparent">Operations <span className="text-white">.</span></h2>
        </div>


        <div className="w-9/12 grid grid-cols-2 gap-3 p-8  text-white min-h-screen">






            <div className="border-4 border-[#1D1F2B] bg-opacity-45  bg-gradient-to-r from-gray-800 to-gray-900  rounded-xl p-6 ">
                <h2 className="text-xl font-bold mb-2">Transparent Donations</h2>
                <p className="text-xs">Track every donation with our blockchain ledger, ensuring each contribution reaches its intended recipient without any loss or mismanagement.</p>
                {/* <div className="flex justify-center items-center">
                    <img src="https://images.prismic.io/glisten-ai/65dfb3ad9c42d04f7d969979_small-screenshot.png?auto=format%2Ccompress&fit=max&w=1080" className="w-full h-auto rounded-xl my-4" />
                </div> */}
            </div>

            <div className=" border-4 border-[#1D1F2B] bg-opacity-45  bg-gradient-to-r from-gray-800 to-gray-900  rounded-xl p-6 ">
                <h2 className="text-xl font-bold mb-2">Benchmark with AI</h2>
                <p className="text-sm">Never worry about pixel perfection again, thanks to our patented AI critic, telling you when something is misaligned.</p>
                <div className="mt-4 p-4 bg-gray-700 rounded">
                    <p className="text-sm text-gray-400">Re: Project Update</p>
                    <div className="mt-4 flex space-x-2">
                        <span className="bg-gray-600 text-xs px-2 py-1 rounded">work</span>
                        <span className="bg-gray-600 text-xs px-2 py-1 rounded">important</span>
                    </div>
                </div>
            </div>




            <div className=" col-span-2 border-4 border-[#1D1F2B] bg-gradient-to-r from-gray-800 to-gray-900 rounded-xl p-6 ">
                <h2 className="text-2xl font-bold mb-4">Endless Ideation</h2>
                <p>Come up with new ideas faster than you can open Photoshop</p>
                <div className="mt-4">
                    <select className="bg-gray-700 text-white p-2 rounded">
                        <option>Alicia Koch</option>
                        <option>alicia@example.com</option>
                        <option>alicia@gmail.com</option>
                        <option>alicia@me.com</option>
                    </select>
                </div>
            </div>

           




        </div>
    </div>
}




