import React from "react";
import Form from "../form/Form";
import { MdOutlineHeadset } from "react-icons/md";

const Contact = () => {
  return (
    <div
      style={{
        width: "1342px",
        height: "600px",
        backgroundImage: "url('/contact/BG1.png')",
        backgroundSize: "cover",
        backgroundPosition: "center",
        marginBottom: "20px",
      }}
    >
        <div className="grid grid-cols-2 text-white pt-20 pl-12 pr-12">
        <div className="w-[552px]">
            <div className="w-24 rounded-lg bg-white bg-opacity-10 flex items-center gap-2 px-2"><MdOutlineHeadset /><span>Contact</span></div>
            <h1 className="text-5xl font-semibold pt-6">Get in Touch with Us</h1>
            <p className="text-lg opacity-60 pt-6">Ganttify enables you to achieve clarity and significant results on a large scale by linking tasks and workflows to the overarching objectives of the company</p>
        </div>
        <Form />
        </div>
    </div>
  );
};

export default Contact;