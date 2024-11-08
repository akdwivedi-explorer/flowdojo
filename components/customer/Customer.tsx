import React from "react";
import { FiUser } from "react-icons/fi";
import Image from "next/image";
import { FaStar } from "react-icons/fa6";

const Customer = () => {
  return (
    <div className="pl-12 pr-12 pt-20 mb-20">
      <section className="flex flex-col items-center">
        <div className="flex items-center gap-3 justify-center border-[1px] border-[#DFE1E7] rounded-lg w-28">
          <FiUser />
          <span>Customer</span>
        </div>
        <h1 className="pt-6 w-[660px] text-center leading-none text-[56px] font-semibold">
          See What Our Customers Are Saying
        </h1>
        <p className="pt-6 text-[#666D80] font-normal text-lg">
          Here&apos;s what some of our customers say about our platform.
        </p>
      </section>

      <section className="grid grid-cols-3 gap-4 pt-20">
        <div className="border rounded-[20px] border-[#DFE1E7] p-6">
          <p>
            <div className="flex gap-2 items-center">
              <FaStar />
              <FaStar />
              <FaStar />
              <FaStar /> 4.8
            </div>
          </p>
          <p className="text-lg font-medium">
            “Ganttify has revolutionized the way we manage our projects.
            Connecting tasks and workflows to our overall company goals has
            never been easier.”
          </p>
          <div className="flex items-center gap-3 pt-6">
            <Image
              src="/customer/Avatars Base.png"
              alt="Avatar"
              width={44}
              height={44}
            />
            <div>
              <h3 className="font-semibold text-base text-[#0D0D12]">
                Charolette Hanlin
              </h3>
              <p className="font-normal text-sm text-[#666D80]">
                Co-Founder, Heroes Digital
              </p>
            </div>
          </div>
        </div>

        <div className="border rounded-[20px] border-[#DFE1E7] p-6">
          <p>
            <div className="flex gap-2 items-center">
              <FaStar />
              <FaStar />
              <FaStar />
              <FaStar /> 4.8
            </div>
          </p>
          <p className="text-lg font-medium">
            “Using Ganttify has streamlined our project management process.
            It&apos;s incredibly effective in aligning our daily tasks with the
            company&apos;s strategic goals.”
          </p>
          <div className="flex items-center gap-3 pt-6">
            <Image
              src="/customer/Avatars Base (1).png"
              alt="Avatar"
              width={44}
              height={44}
            />
            <div>
              <h3 className="font-semibold text-base text-[#0D0D12]">
                Eleanor Pena
              </h3>
              <p className="font-normal text-sm text-[#666D80]">
                Co-Founder, Heroes Digital
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Customer;
