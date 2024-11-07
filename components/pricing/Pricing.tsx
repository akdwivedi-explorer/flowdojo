"use client";

import { priceDetails } from "@/constants/Pricing/data";
import React, { useState } from "react";
import { FiCreditCard } from "react-icons/fi";
import { FaCheckCircle } from "react-icons/fa";

const Pricing = () => {
  const [selectedPlan, setSelectedPlan] = useState("Personal"); // Default to "Personal" plan
  const [selectedFrequency, setSelectedFrequency] = useState("Monthly"); // Default to "Monthly"

  return (
    <div
      style={{
        width: "1342px",
        minHeight: "600px",
        backgroundImage: "url('/hero/hero.png')",
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <section className="pt-20 pl-12 pr-12">
        <div className="text-white flex items-center gap-2 border-[1px] w-24 bg-opacity-10 bg-white border-white border-opacity-10 rounded-lg h-7 pt-2 pr-[10px] pb-2 pl-2">
          <FiCreditCard />
          <span>Pricing</span>
        </div>
        <div className="flex justify-between items-center pt-6">
          <h1 className="text-[56px] font-semibold text-white leading-none w-[563px] h-[140px]">
            Simple and Flexible Pricing
          </h1>
          <div className="flex items-center gap-4 text-white font-medium">
            <button
              className={`p-2 w-[121px] rounded-lg ${
                selectedFrequency === "Monthly"
                  ? "bg-white text-[#0D0D12]"
                  : "bg-white bg-opacity-10 text-white"
              }`}
              onClick={() => setSelectedFrequency("Monthly")}
            >
              Monthly
            </button>
            <button
              className={`p-2 w-[121px] rounded-lg ${
                selectedFrequency === "Annually"
                  ? "bg-white text-[#0D0D12]"
                  : "bg-white bg-opacity-10 text-white"
              }`}
              onClick={() => setSelectedFrequency("Annually")}
            >
              Annually
            </button>
          </div>
        </div>
      </section>

      <section className="grid grid-cols-1 md:grid-cols-3 gap-8 p-12">
        {priceDetails.map((plan, index) => (
          <div
            key={index}
            onClick={() => setSelectedPlan(plan.label)}
            className={`p-6 border rounded-3xl cursor-pointer space-y-4 ${
              selectedPlan === plan.label
                ? "bg-white text-black border-[#0D0D1205]"
                : "bg-gradient-to-t from-white/15 to-transparent text-white border-white/20"
            }`}
          >
            <h3 className="text-lg font-medium opacity-70">{plan.label}</h3>
            <p className="text-2xl font-bold">{plan.price}</p>
            <p className="text-base font-normal opacity-50">{plan.description}</p>
            <h3 className="font-semibold mt-4 text-base">{plan.title}</h3>
            <ul className="space-y-2">
              {plan.features.map((feature, i) => (
                <li key={i} className="flex items-center gap-2 opacity-80">
                  <FaCheckCircle />
                  {feature}
                </li>
              ))}
            </ul>
            <button
              className={`mt-6 w-full p-3 rounded-2xl font-semibold text-base ${
                selectedPlan === plan.label
                  ? "bg-black text-white"
                  : "bg-white bg-opacity-10 text-white"
              }`}
            >
              {plan.button}
            </button>
          </div>
        ))}
      </section>
    </div>
  );
};

export default Pricing;
