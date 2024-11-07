import { footerLinks } from '@/constants/Footer/data';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import { BsTwitterX, BsFacebook } from "react-icons/bs";
import { RiInstagramFill } from "react-icons/ri";
import { FaChevronDown } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className='pl-12 pr-12 bg-[#0D0D12] pt-12 text-white h-[680px]'>
      <div className='flex items-center justify-between mb-8'>
        <Image src="/footer/Logo (1).png" alt='Logo' width={100} height={100} />
        <div className='flex items-center gap-4'>
          <Link href="#"><BsTwitterX className='border-2 rounded-xl w-10 h-10 p-2 border-[#272835]' /></Link>
          <Link href="#"><BsFacebook className='border-2 rounded-xl w-10 h-10 p-2 border-[#272835]' /></Link>
          <Link href="#"><RiInstagramFill className='border-2 rounded-xl w-10 h-10 p-2 border-[#272835]' /></Link>
        </div>
      </div>
      <div className='flex justify-between'>
        {footerLinks.map((section) => (
          <div key={section.name} className='mb-6'>
            <h3 className='font-semibold text-lg mb-2'>{section.name}</h3>
            <ul>
              {section.subLinks.map((subLink) => (
                <li key={subLink} className='pt-4 text-[#818898] font-light text-sm'>
                  <Link href={`/${subLink.toLowerCase().replace(/\s+/g, '-')}`}>
                    {subLink}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
      <div className='border w-full border-[#272835] mt-6'></div>
        <div className='flex justify-between pt-24 text-[#666D80]'>
            <button className='flex items-center gap-4 px-2 rounded-[10px] bg-[#1A1B25] w-[200px] h-10 border-[#272835] text-white border'>
              <Image src="/footer/united states.png" alt='USA Flag' width={20} height={20}/>United States <FaChevronDown />
            </button>
            <p>© Ganttify 2024. All Rights Reserved</p>
        </div>
    </footer>
  );
};

export default Footer;
