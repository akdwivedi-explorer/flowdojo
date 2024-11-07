"use client";
import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";
import { Inter } from "next/font/google";
import { navLinks } from "@/constants/Header/data";

const inter = Inter({ subsets: ["latin"] });

interface NavLink {
  name: string;
  href: string;
}

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen((prev) => !prev);
  };

  return (
    <header
      className={`${inter.className} pl-4 pr-4 md:pl-12 md:pr-12 flex justify-between items-center pt-4 pb-4 text-sm font-medium relative`}
    >
      <div className="flex items-center gap-4 md:gap-16">
        <Image src="/header/Logo.png" alt="Ganttify" width={110} height={60} />

        {/* Navigation links: hidden on small screens */}
        <ul className="hidden md:flex gap-6">
          {navLinks?.map((link: NavLink) => (
            <li key={link.name}>
              <Link href={link.href}>{link.name}</Link>
            </li>
          ))}
        </ul>
      </div>

      {/* Buttons and menu icon */}
      <div className="flex gap-4 items-center">
        {/* Menu icon: shown on small screens, hidden on larger screens */}
        <button className="md:hidden" onClick={toggleMenu}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="w-6 h-6"
          >
            <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 7.5h16.5m-16.5 4.5h16.5m-16.5 4.5h16.5" />
          </svg>
        </button>

        {/* Buttons: hidden on small screens, visible on larger screens */}
        <div className="hidden md:flex gap-4">
          <button className="border-[1px] pt-3 pb-3 pl-4 pr-4 rounded-xl border-gray-300">
            Sign In
          </button>
          <button className="border-none pt-3 pb-3 pl-4 pr-4 rounded-xl bg-[#0D0D12] text-white">
            Get Started
          </button>
        </div>
      </div>

      {/* Mobile Menu Drawer */}
      {isMenuOpen && (
        <div className="absolute top-0 left-0 w-full h-screen bg-white flex flex-col items-center pt-20 z-10 md:hidden">
          <ul className="flex flex-col gap-6">
            {navLinks?.map((link: NavLink) => (
              <li key={link.name} onClick={toggleMenu}>
                <Link href={link.href} className="text-lg font-medium">
                  {link.name}
                </Link>
              </li>
            ))}
          </ul>
          <div className="flex flex-col gap-4 mt-8">
            <button className="border-[1px] pt-3 pb-3 pl-4 pr-4 rounded-xl border-gray-300 w-full">
              Sign In
            </button>
            <button className="border-none pt-3 pb-3 pl-4 pr-4 rounded-xl bg-[#0D0D12] text-white w-full">
              Get Started
            </button>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;
