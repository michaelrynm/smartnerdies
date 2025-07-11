"use client";

import Image from "next/image";

export default function Hero() {
  return (
    <div className="bg-gradient-to-br from-[#9B6941] via-[#9B6941] to-[#352416]">
      <div className="flex flex-col lg:flex-row items-center px-4 sm:px-8 md:px-12 lg:px-16 xl:px-20 py-12 sm:py-16 md:py-20 lg:py-28 gap-8 lg:gap-0">
        {/* Text Content */}
        <div className="w-full lg:w-1/2 text-center lg:text-left">
          <h1 className="text-white text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl leading-relaxed font-medium">
            Teman Belajar Mahasiswa, Smartnerdies,{" "}
            <span className="text-[#2E2C2C]">Beyond Smart!</span>
          </h1>

          <p className="text-white mt-6 sm:mt-8 md:mt-12 lg:mt-16 xl:mt-20 text-base sm:text-lg md:text-xl lg:text-2xl font-medium leading-relaxed">
            Bimbingan Belajar Mahasiswa (BBM) Offline dan Online Terpercaya
            Sejak 2023
          </p>

          <div className="flex flex-col sm:flex-row justify-center lg:justify-start mt-6 sm:mt-8 md:mt-12 lg:mt-16 xl:mt-20 gap-4 sm:gap-5">
            <button className="bg-[#C7B6A7] rounded-2xl px-6 py-3 text-[#2E2C2C] font-medium text-sm sm:text-base transition-all duration-300 ease-in-out transform hover:scale-105 hover:shadow-md hover:bg-[#bba795] active:scale-95">
              Services
            </button>
            <button className="bg-[#2E2C2C] rounded-2xl px-6 py-3 text-[#C7B6A7] font-medium text-sm sm:text-base transition-all duration-300 ease-in-out transform hover:scale-105 hover:shadow-md hover:bg-[#1f1e1e] active:scale-95">
              Our Works
            </button>
          </div>
        </div>

        {/* Image Section */}
        <div className="w-full lg:w-1/2 flex justify-center">
          <div className="relative w-64 h-64 sm:w-80 sm:h-80 md:w-96 md:h-96 lg:w-[500px] lg:h-[500px] xl:w-[600px] xl:h-[600px] ">
            <Image
              src="/logoBG.jpg"
              alt="hero"
              fill
              className="object-contain rounded-4xl"
              priority
            />
          </div>
        </div>
      </div>
    </div>
  );
}
