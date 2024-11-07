import Image from "next/image";
import React from "react";
import { FaCodepen } from "react-icons/fa";

const Features = () => {
  return (
    <section className="px-4 pt-12 pb-12 lg:px-12 lg:pt-24 lg:pb-24">
      <div>
        <div className="flex items-center gap-1 border border-[#DFE1E7] w-[80px] h-[24px] rounded-lg pt-1 pb-1 pl-2 lg:w-[100px] lg:h-[28px]">
          <FaCodepen className="text-[#666D80]" />
          <span className="text-[#666D80] text-sm lg:text-base">Features</span>
        </div>
        <h1 className="text-3xl font-semibold pt-3 lg:text-[56px]">
          Everything Your Team Looking For
        </h1>
        <p className="text-base font-normal text-[#666D80] pt-4 lg:text-lg">
          Ganttify’s exceptional flexibility can handle any type of work. And we
          never stop innovating
        </p>
      </div>
      <div className="flex flex-col gap-8 pt-10 lg:grid lg:grid-cols-2 lg:pt-20 lg:gap-8">
        <aside>
          <Image
            src="/features/illustration.png"
            alt="Project Management"
            width={588}
            height={300}
            className="w-full"
          />
          <h2 className="text-xl font-semibold text-[#0D0D12] pt-3 lg:text-2xl">
            Project Management
          </h2>
          <p className="text-base font-normal text-[#666D80] pt-3 lg:text-lg">
            Manage your projects from start to finish. With all of your projects
            in Ganttify, you’ll always know who’s doing what, by when
          </p>
        </aside>
        <aside>
          <Image
            src="/features/illustration (1).png"
            alt="Workflows and Automations"
            width={588}
            height={300}
            className="w-full"
          />
          <h2 className="text-xl font-semibold text-[#0D0D12] pt-3 lg:text-2xl">
            Workflows and Automations
          </h2>
          <p className="text-base font-normal text-[#666D80] pt-3 lg:text-lg">
            Create more efficient processes so you can seamlessly manage projects across departments and get more done in less time
          </p>
        </aside>
        <aside>
          <Image
            src="/features/illustration (2).png"
            alt="Goals and Reporting"
            width={588}
            height={300}
            className="w-full"
          />
          <h2 className="text-xl font-semibold text-[#0D0D12] pt-3 lg:text-2xl">
            Goals and Reporting
          </h2>
          <p className="text-base font-normal text-[#666D80] pt-3 lg:text-lg">
            See how each project and portfolio ladders up to company objectives and keep everyone focused on the work that matters
          </p>
        </aside>
        <aside>
          <Image
            src="/features/illustration (3).png"
            alt="Resource Management"
            width={588}
            height={300}
            className="w-full"
          />
          <h2 className="text-xl font-semibold text-[#0D0D12] pt-3 lg:text-2xl">
            Resource Management
          </h2>
          <p className="text-base font-normal text-[#666D80] pt-3 lg:text-lg">
            Get the visibility you need to plan accurate timelines, adjust workloads, and stay on track to achieve your objectives
          </p>
        </aside>
      </div>
    </section>
  );
};

export default Features;
