import { footerLinks } from '@/constants/Footer/data';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import { BsTwitterX, BsFacebook } from "react-icons/bs";
import { RiInstagramFill } from "react-icons/ri";
import { FaChevronDown } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className='px-6 py-8 bg-[#0D0D12] text-white'>
      <div className='flex flex-col items-center mb-8'>
        <Image src="/footer/Logo (1).png" alt='Ganttify' width={80} height={80} />
        <div className='flex gap-4 mt-4'>
          <Link href="#"><BsTwitterX className='border-2 rounded-xl w-8 h-8 p-1 border-[#272835]' /></Link>
          <Link href="#"><BsFacebook className='border-2 rounded-xl w-8 h-8 p-1 border-[#272835]' /></Link>
          <Link href="#"><RiInstagramFill className='border-2 rounded-xl w-8 h-8 p-1 border-[#272835]' /></Link>
        </div>
      </div>

      <div className='grid grid-cols-2 gap-6 text-center'>
        {footerLinks.map((section) => (
          <div key={section.name} className='mb-6'>
            <h3 className='font-semibold text-lg mb-2'>{section.name}</h3>
            <ul>
              {section.subLinks.map((subLink) => (
                <li key={subLink} className='pt-2 text-[#818898] font-light text-xs'>
                  <Link href={`/${subLink.toLowerCase().replace(/\s+/g, '-')}`}>
                    {subLink}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>

      <div className='border border-[#272835] my-6'></div>

      <div className='flex flex-col items-center text-[#666D80]'>
        <button className='flex items-center gap-2 px-2 py-2 rounded-[10px] bg-[#1A1B25] w-[160px] h-10 border-[#272835] text-white border mb-4'>
          <Image src="/footer/united states.png" alt='USA' width={16} height={16}/> United States <FaChevronDown />
        </button>
        <p className='text-center text-xs'>© Ganttify 2024. All Rights Reserved</p>
      </div>
    </footer>
  );
};

export default Footer;
