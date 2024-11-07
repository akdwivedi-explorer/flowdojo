import React from "react";
import { FiUser } from "react-icons/fi";
import Image from "next/image";
import { FaStar } from "react-icons/fa6";

const Customer = () => {
  return (
    <div className="px-4 pt-12 pb-20 md:px-12">
      <section className="flex flex-col items-center">
        <div className="flex items-center gap-2 justify-center border border-[#DFE1E7] rounded-lg px-4 h-7">
          <FiUser />
          <span className="text-sm">Customers</span>
        </div>
        <h1 className="pt-6 text-center text-3xl font-semibold leading-snug md:text-[56px] md:w-[660px]">
          See What Our Customers Are Saying
        </h1>
        <p className="pt-4 text-center text-[#666D80] font-normal text-base md:text-lg">
          Here's what some of our customers say about our platform.
        </p>
      </section>

      <section className="grid grid-cols-1 gap-6 pt-10 md:grid-cols-3 md:gap-4 md:pt-20">
        {[
          {
            avatar: "/customer/Avatars Base.png",
            name: "Charolette Hanlin",
            role: "Co-Founder, Heroes Digital",
            review:
              "Ganttify has revolutionized the way we manage our projects. Connecting tasks and workflows to our overall company goals has never been easier.",
          },
          {
            avatar: "/customer/Avatars Base (1).png",
            name: "Eleanor Pena",
            role: "Co-Founder, Heroes Digital",
            review:
              "Using Ganttify has streamlined our project management process. It’s incredibly effective in aligning our daily tasks with the company's strategic goals.",
          },
          {
            avatar: "/customer/Avatars Base (2).png",
            name: "Guy Hawkins",
            role: "Co-Founder, Heroes Digital",
            review:
              "Ganttify has provided us with a unified view of our projects. It connects our workflows directly to our business goals, making it easier to track progress.",
          },
        ].map((customer, index) => (
          <div key={index} className="border rounded-2xl border-[#DFE1E7] p-6">
            <div className="flex gap-1 items-center text-[#0D0D12]">
              {Array(5)
                .fill(0)
                .map((_, i) => (
                  <FaStar key={i} className="text-[#FBBC05]" />
                ))}
              <span className="text-sm font-medium">4.8</span>
            </div>
            <p className="pt-4 text-base font-medium text-[#0D0D12]">
              {`“${customer.review}”`}
            </p>
            <div className="flex items-center gap-3 pt-6">
              <Image
                src={customer.avatar}
                alt="Avatar"
                width={44}
                height={44}
                className="rounded-full"
              />
              <div>
                <h3 className="font-semibold text-base text-[#0D0D12]">
                  {customer.name}
                </h3>
                <p className="font-normal text-sm text-[#666D80]">
                  {customer.role}
                </p>
              </div>
            </div>
          </div>
        ))}
      </section>
    </div>
  );
};

export default Customer;
