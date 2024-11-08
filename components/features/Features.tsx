import Image from "next/image";
import React from "react";
import { FaCodepen } from "react-icons/fa";

const Features = () => {
  return (
    <section className="pl-12 pr-12 pt-24 pb-24">
      <div>
        <div className="flex items-center gap-[6px] border-[1px] border-[#DFE1E7] w-[100px] h-[28px] rounded-lg pt-4 pb-4 pl-2">
          <FaCodepen className="text-[#666D80]" />{" "}
          <span className="text-[#666D80]">Features</span>
        </div>
        <h1 className="text-[56px] font-semibold pt-3">
          Everything Your Team Looking For
        </h1>
        <p className="text-lg font-normal text-[#666D80] pt-4">
          Ganttify&apos;s exceptional flexibility can handle any type of work.And we
          never stop innovating
        </p>
      </div>
      <div className="grid grid-cols-2 pt-20 gap-8">
        <aside>
          <Image
            src="/features/illustration.png"
            alt="Project Management"
            width={588}
            height={300}
          />
          <h2 className="text-2xl font-semibold text-[#0D0D12] pt-3">Project Management</h2>
          <p className="text-lg font-normal text-[#666D80] pt-3">
            Manage your projects from start to finish. With all of your projects
            in Ganttify, you&apos;ll always know who&apos;s doing what, by when
          </p>
        </aside>
        <aside>
          <Image
            src="/features/illustration (1).png"
            alt="Workflows and Automations"
            width={588}
            height={300}
          />
          <h2 className="text-2xl font-semibold text-[#0D0D12] pt-3">Workflows and Automations</h2>
          <p className="text-lg font-normal text-[#666D80] pt-3">Create more efficient processes so you can seamlessly manage projects across departments and get more done in less time</p>
        </aside>
        <aside>
          <Image
            src="/features/illustration (2).png"
            alt="Goals and Reporting"
            width={588}
            height={300}
          />
          <h2 className="text-2xl font-semibold text-[#0D0D12] pt-3">Goals and Reporting</h2>
          <p className="text-lg font-normal text-[#666D80] pt-3">See how each project and portfolio ladders up to company objectives and keep everyone focused on the work that matters</p>
        </aside>
        <aside>
          <Image
            src="/features/illustration (3).png"
            alt="Resource Management"
            width={588}
            height={300}
          />
          <h2 className="text-2xl font-semibold text-[#0D0D12] pt-3">Resource Management</h2>
          <p className="text-lg font-normal text-[#666D80] pt-3">Get the visibility you need to plan accurate timelines, adjust workloads, and stay on track to achieve your objectives</p>
        </aside>
      </div>
    </section>
  );
};

export default Features;