import Image from "next/image";
import React from "react";
import { TfiTarget } from "react-icons/tfi";

const Hero = () => {
  return (
    <div
      style={{
        backgroundImage: "url('/hero/hero.png')",
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
      className="w-full h-auto md:h-[600px] p-6 md:w-[1342px] flex flex-col items-center md:items-stretch"
    >
      <div className="text-white flex flex-col items-center md:items-start md:px-12 md:flex-row justify-between">
        <aside className="pt-10 flex flex-col items-center md:items-start">
          {/* Title Section */}
          <div className="flex items-center gap-2 w-[160px] h-[32px] pt-2 px-3 rounded-[10px] bg-zinc-800">
            <TfiTarget />
            <p className="text-xs md:text-sm">Goals and Reporting</p>
          </div>
          <h1 className="pt-6 font-semibold text-[32px] md:text-[64px] text-center md:text-left w-full md:w-[588px] leading-tight">
            Goals and Reporting In One Place
          </h1>
          <p className="pt-4 md:pt-6 opacity-60 text-center md:text-left w-full md:w-[508px] text-sm md:text-base">
            Connect every team’s work to company objectives, then track progress with real-time data
          </p>

          {/* Buttons */}
          <div className="flex gap-4 pt-6 md:pt-10">
            <button className="px-4 py-2 md:py-3 rounded-xl bg-white text-black font-semibold text-sm md:text-base">
              Get Started
            </button>
            <button className="px-4 py-2 md:py-3 rounded-xl bg-opacity-10 bg-white text-white font-semibold text-sm md:text-base">
              How it Works
            </button>
          </div>

          {/* Trusted By Section */}
          <p className="opacity-50 pt-8 text-sm md:text-base">Trusted by 2 million+ teams</p>
          <div className="flex space-x-4 pt-4 md:pt-6">
            <Image src="/hero/Company logo.png" alt="mailchimp" width={70} height={70} />
            <Image src="/hero/Company logo (1).png" alt="medium" width={70} height={70} />
            <Image src="/hero/Company logo (2).png" alt="microsoft" width={70} height={70} />
            <Image src="/hero/Company logo (3).png" alt="apple" width={70} height={70} />
          </div>
        </aside>

        {/* Image Section */}
        <aside className="pt-10 md:pt-0 flex flex-col items-center md:items-start">
          {/* Top Icon */}
          <div className="flex justify-center md:justify-start pb-6 md:pb-12">
            <Image
              src="/hero/icon.png"
              alt="Icon image"
              width={40}
              height={40}
              className="relative"
            />
          </div>

          {/* Main Images */}
          <div className="flex gap-2 md:gap-10 items-center md:items-end">
            <Image
              src="/hero/Frame 33846.png"
              alt="Image 1"
              width={100}
              height={124}
            />
            <Image
              src="/hero/Frame 33845.png"
              alt="Image 2"
              width={150}
              height={154}
            />
          </div>

          {/* Bottom Icons */}
          <div className="flex gap-2 md:gap-4 pt-6 md:pt-10">
            <Image
              src="/hero/icon (1).png"
              alt="Icon 1"
              width={50}
              height={50}
            />
            <Image
              src="/hero/Frame 33847.png"
              alt="Image 3"
              width={200}
              height={80}
            />
            <Image
              src="/hero/icon (2).png"
              alt="Icon 2"
              width={50}
              height={50}
            />
          </div>
        </aside>
      </div>
    </div>
  );
};

export default Hero;
