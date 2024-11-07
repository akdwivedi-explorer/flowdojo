import React from "react";
// import Form from "../form/Form";
import { MdOutlineHeadset } from "react-icons/md";

const Contact = () => {
  return (
    <div
      style={{
        width: "100%",
        height: "100vh",
        backgroundImage: "url('/contact/BG1.png')",
        backgroundSize: "cover",
        backgroundPosition: "center",
        marginBottom: "20px",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <div className="flex flex-col items-center text-center text-white px-6">
        <div className="flex items-center gap-2 px-3 py-1 rounded-lg bg-white bg-opacity-10 mb-4">
          <MdOutlineHeadset />
          <span>Contact</span>
        </div>
        <h1 className="text-3xl font-semibold mb-4">A Better Way to Work Today, Together</h1>
        <p className="text-sm opacity-80 mb-8">
          Ganttify enables you to achieve clarity and significant results on a large scale by linking tasks and workflows to the overarching objectives of the company.
        </p>
        <div className="flex flex-col gap-4 w-full max-w-[320px]">
          <button className="bg-white text-black font-medium py-2 rounded-lg">Get Started</button>
          <button className="bg-black bg-opacity-30 text-white font-medium py-2 rounded-lg">How it Works</button>
        </div>
      </div>
    </div>
  );
};

export default Contact;
