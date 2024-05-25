import { Twitter, Linkedin, Instagram, Github } from 'lucide-react';

export const Footer = () => {
  return (
    <footer className="w-full flex flex-col space-y-16 py-16 ">
      <div className="flex justify-between px-16 ">
        <div className="flex flex-col space-y-6 text-white">
          <span className="text-[#A7E81F]">{`{}  Get Started`}</span>
          <span className="underline">Download & Install BlockWallet</span>
          <span className="underline">Create a New BlockWallet</span>
          <span className="underline">Import from Any Wallet</span>
        </div>
        <div className="flex flex-col space-y-6 text-white">
          <span className="text-[#A7E81F]">{`{}  Resources`}</span>
          <span className="underline">Help Center</span>
          <span className="underline">Blog</span>
          <span className="underline">Documentation</span>
        </div>
        <div className="flex flex-col space-y-6 text-white">
          <span className="text-[#A7E81F]">{`{}  Company`}</span>
          <span className="underline">About Us</span>
          <span className="underline">Privacy Policy</span>
          <span className="underline">Terms of Service</span>
        </div>
        <div className="flex flex-col space-y-6 text-white">
          <span className="text-[#A7E81F]">{`{}  Question`}</span>
          <span className="underline">hemanthsrdev@gmail.com</span>

        </div>
      </div>
      <div className="flex justify-between items-end px-16">
        <h6 className="text-7xl text-white ">Open/Give</h6>

        <div className="h-full flex space-x-5 justify-end items-end text-white">
          <Twitter className="h-8 w-8 cursor-pointer" strokeWidth={1.2} />
          <Linkedin className="h-8 w-8 cursor-pointer" strokeWidth={1.2} />
          <Instagram className="h-8 w-8 cursor-pointer" strokeWidth={1.2} />
          <Github className="h-8 w-8 cursor-pointer" strokeWidth={1.2} />
        </div>
      </div>
      <div className='border mx-16 border-slate-300'></div>
      <div className='flex justify-between items-center px-16 text-[#ABB0A8]'>
        <span>© Open/Give 2024</span>
        <span>Designed by team Humanity ledger crew</span>
      </div>
    </footer>
  );
};
