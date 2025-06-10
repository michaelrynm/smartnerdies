"use client";
import Image from "next/image";
import { useState } from "react";

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <div>
      <div className="flex justify-between items-center font-medium bg-[#C7B6A7] px-4 sm:px-6 lg:px-12 py-2 text-[#2E2C2C]">
        {/* Logo Section */}
        <div className="flex items-center gap-2">
          <Image 
            src="/logo.png" 
            alt="logo" 
            width={48} 
            height={48} 
            className="w-8 h-8 sm:w-10 sm:h-10 lg:w-12 lg:h-12"
          />
          <p className="text-sm sm:text-base lg:text-lg font-semibold">Smartnerdies</p>
        </div>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center gap-4 lg:gap-6">
          <p className="cursor-pointer hover:text-[#1a1919] transition-colors text-sm lg:text-base">Services</p>
          <p className="cursor-pointer hover:text-[#1a1919] transition-colors text-sm lg:text-base">Portfolio</p>
          <p className="cursor-pointer hover:text-[#1a1919] transition-colors text-sm lg:text-base">Testimonials</p>
          <p className="cursor-pointer hover:text-[#1a1919] transition-colors text-sm lg:text-base">Contact</p>
        </div>

        {/* Mobile Menu Button */}
        <button 
          className="md:hidden flex flex-col gap-1 p-2"
          onClick={toggleMenu}
          aria-label="Toggle menu"
        >
          <span className={`w-6 h-0.5 bg-[#2E2C2C] transition-all duration-300 ${isMenuOpen ? 'rotate-45 translate-y-1.5' : ''}`}></span>
          <span className={`w-6 h-0.5 bg-[#2E2C2C] transition-all duration-300 ${isMenuOpen ? 'opacity-0' : ''}`}></span>
          <span className={`w-6 h-0.5 bg-[#2E2C2C] transition-all duration-300 ${isMenuOpen ? '-rotate-45 -translate-y-1.5' : ''}`}></span>
        </button>
      </div>

      {/* Mobile Menu */}
      <div className={`md:hidden bg-[#C7B6A7] border-t border-[#2E2C2C]/20 transition-all duration-300 overflow-hidden ${isMenuOpen ? 'max-h-64 opacity-100' : 'max-h-0 opacity-0'}`}>
        <div className="px-4 py-4 space-y-3">
          <p className="cursor-pointer hover:text-[#1a1919] transition-colors text-[#2E2C2C] py-2 border-b border-[#2E2C2C]/10">Services</p>
          <p className="cursor-pointer hover:text-[#1a1919] transition-colors text-[#2E2C2C] py-2 border-b border-[#2E2C2C]/10">Portfolio</p>
          <p className="cursor-pointer hover:text-[#1a1919] transition-colors text-[#2E2C2C] py-2 border-b border-[#2E2C2C]/10">Testimonials</p>
          <p className="cursor-pointer hover:text-[#1a1919] transition-colors text-[#2E2C2C] py-2">Contact</p>
        </div>
      </div>
    </div>
  );
}