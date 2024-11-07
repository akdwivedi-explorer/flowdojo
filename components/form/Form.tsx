"use client";
import { useState } from 'react';

const Form = () => {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    description: '',
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({ ...prevData, [name]: value }));
  };

  return (
    <form className='w-[600px] h-[500px] rounded-3xl p-8 bg-white'>
      <div className="flex gap-4">
        <div className="flex-1">
          <label htmlFor="firstName" className="block text-sm font-medium text-black pb-3">First Name</label>
          <input
            type="text"
            id="firstName"
            name="firstName"
            value={formData.firstName}
            onChange={handleChange}
            placeholder="John"
            required
            className="w-full h-[48px] px-3 py-2 border border-gray-300 rounded-xl shadow-sm focus:outline-none focus:ring-2 focus:ring-[#5B49E9] text-black"
          />
        </div>

        <div className="flex-1">
          <label htmlFor="lastName" className="block text-sm font-medium text-black pb-3">Last Name</label>
          <input
            type="text"
            id="lastName"
            name="lastName"
            value={formData.lastName}
            onChange={handleChange}
            placeholder="Doe"
            required
            className="w-full h-[48px] px-3 py-2 border border-gray-300 rounded-xl shadow-sm focus:outline-none focus:ring-2 focus:ring-[#5B49E9] text-black"
          />
        </div>
      </div>

      <div className='pt-4'>
        <label htmlFor="email" className="block text-sm font-medium text-black pb-3">Email</label>
        <input
          type="email"
          id="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          placeholder="johndoe@gmail.com"
          required
          className="block w-full px-3 py-2 border border-gray-300 rounded-xl shadow-sm focus:outline-none focus:ring-2 focus:ring-[#5B49E9] text-black"
        />
      </div>

      <div className='pt-4'>
        <label htmlFor="description" className="block text-sm font-medium text-black pb-3">Problem Description</label>
        <textarea
          id="description"
          name="description"
          value={formData.description}
          onChange={handleChange}
          placeholder="Message"
          className="block w-[536px] h-[150px] px-3 py-2 border border-gray-300 rounded-xl shadow-sm focus:outline-none focus:ring-2 focus:ring-[#5B49E9] text-black"
        />
      </div>

      <button type="submit" className="mt-6 w-full px-6 py-2 bg-black text-white rounded-[14px] font-semibold">Send Message</button>
    </form>
  );
};

export default Form;
