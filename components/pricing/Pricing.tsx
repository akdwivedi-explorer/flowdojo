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
        backgroundImage: "url('/hero/hero.png')",
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
      className="w-full min-h-screen px-4 pt-12 pb-12 md:w-[1342px] md:min-h-[600px]"
    >
      <section className="pt-6">
        <div className="flex items-center gap-2 bg-opacity-10 bg-white border border-white border-opacity-10 rounded-lg h-7 px-2 text-white">
          <FiCreditCard />
          <span>Pricing</span>
        </div>
        <div className="pt-6">
          <h1 className="text-3xl font-semibold text-white leading-tight md:text-[56px]">
            Simple and Flexible Pricing
          </h1>
          <div className="flex items-center gap-4 pt-4 text-white font-medium">
            <button
              className={`p-2 w-[100px] rounded-lg ${
                selectedFrequency === "Monthly"
                  ? "bg-white text-[#0D0D12]"
                  : "bg-white bg-opacity-10 text-white"
              }`}
              onClick={() => setSelectedFrequency("Monthly")}
            >
              Monthly
            </button>
            <button
              className={`p-2 w-[100px] rounded-lg ${
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

      <section className="grid grid-cols-1 gap-8 pt-8 md:grid-cols-3 md:p-12">
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
