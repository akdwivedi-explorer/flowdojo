"use client";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import { Inter } from "next/font/google";
import { navLinks } from "@/constants/Header/data";

const inter = Inter({ subsets: ["latin"] });

interface NavLink {
  name: string;
  href: string;
}

const Header = () => {
  return (
    <header
      className={`${inter.className} pl-12 pr-12 flex justify-between items-center pt-4 text-sm font-medium pb-4`}
    >
      <div className="flex gap-16 items-center">
        <Image src="/header/Logo.png" alt="Ganttify" width={110} height={60} />

        <ul className="flex gap-6">
          {navLinks?.map((link: NavLink) => (
            <li key={link.name}>
              <Link href={link.href}>{link.name}</Link>
            </li>
          ))}
        </ul>
      </div>
      <div className="flex gap-4">
        <button className="border-[1px] pt-3 pb-3 pl-4 pr-4 rounded-xl border-gray-300">
          Sign In
        </button>
        <button className="border-none pt-3 pb-3 pl-4 pr-4 rounded-xl bg-[#0D0D12] text-white">
          Get Started
        </button>
      </div>
    </header>
  );
};

export default Header;
