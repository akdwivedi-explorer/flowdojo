import Image from "next/image";
import React from "react";
import { TfiTarget } from "react-icons/tfi";

const Hero = () => {
  return (
    <div
      style={{
        width: "1342px",
        height: "600px",
        backgroundImage: "url('/hero/hero.png')",
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <div className="text-white pl-12 pr-12 flex justify-between">
        <aside className="pt-10">
          <div className="flex items-center gap-2 w-[196px] h-[32px] pt-2 pr-3 pl-2 pb-2 rounded-[10px] bg-zinc-800 border-none">
            <TfiTarget />
            <p className="text-sm">Goal and Reporting</p>
          </div>
          <h1 className="pt-6 font-semibold text-[64px] w-[588px] leading-none">
            Goal and Reporting In One Place
          </h1>
          <p className="pt-6 opacity-60 w-[508px] ">
            Connect every team&apos;s work to company objectives, then track progress
            with real-time data
          </p>
          <div className="flex gap-7 pt-10">
            <button className="pt-3 pb-3 pl-5 pr-5 rounded-xl bg-white text-black font-semibold text-[16px]">
              Get Started
            </button>
            <button className="pt-3 pb-3 pl-5 pr-5 rounded-xl bg-opacity-10 bg-white text-white font-semibold">
              How it Works
            </button>
          </div>
          <p className="opacity-50 pt-[72px]">Trusted by 2 million+ teams</p>
          <div className="flex justify-between pt-6">
            <Image src="/hero/Company logo.png" alt="mailchip" width={100} height={100} />
            <Image src="/hero/Company logo (1).png" alt="mailchip" width={100} height={100} />
            <Image src="/hero/Company logo (2).png" alt="mailchip" width={100} height={100} />
            <Image src="/hero/Company logo (3).png" alt="mailchip" width={100} height={100} />
          </div>
        </aside>

        <aside className="relative pt-10">
          <div className="flex justify-evenly pr-[210px] pb-12">
            <Image
              src="/hero/icon.png"
              alt="Icon image"
              width={100}
              height={100}
              className="absolute"
            />
          </div>

          <div
            className="flex gap-10
           items-end"
          >
            <aside>
              <Image
                src="/hero/Frame 33846.png"
                alt="Iamhe"
                width={175}
                height={217}
              />
            </aside>

            <aside>
              <Image
                src="/hero/Frame 33845.png"
                alt="image"
                width={266}
                height={274}
              />
            </aside>
          </div>

          <div className="flex gap-4 pt-10">
            <div>
              <Image
                src="/hero/icon (1).png"
                alt="ocon"
                width={100}
                height={100}
              />
            </div>

            <div>
              <Image
                src="/hero/Frame 33847.png"
                alt="image"
                width={350}
                height={140}
                className=""
              />
            </div>

            <div>
              <Image
                src="/hero/icon (2).png"
                alt="ocon"
                width={100}
                height={100}
                className="pt-24 pl-2"
              />
            </div>
          </div>
        </aside>
      </div>
    </div>
  );
};

export default Hero;