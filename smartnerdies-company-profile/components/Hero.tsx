"use client";

import Image from "next/image";

export default function Hero() {
  // Fungsi untuk scroll ke section
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({
        behavior: "smooth",
        block: "start",
        inline: "nearest",
      });
    }
    // Tutup mobile menu setelah klik
  };

  return (
    <div className="bg-[#87CEEB] overflow-hidden relative">
      <div className=" sm:min-h-0 flex flex-col lg:flex-row items-center justify-between px-4 sm:px-6 md:px-8 lg:px-12 xl:px-16 2xl:px-20 py-8 sm:py-12 md:py-16 lg:py-20 xl:py-24 gap-36 lg:gap-12 xl:gap-16">
        {/* Text Content */}
        <div className="w-full lg:w-1/2 xl:w-2/5 text-center lg:text-left z-20 order-1 lg:order-1">
          <h1 className="text-slate-800 text-xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl 2xl:text-6xl leading-tight sm:leading-relaxed font-medium mb-4 sm:mb-6 md:mb-8">
            Teman Belajar Mahasiswa, Smartnerdies,{" "}
            <span className="text-amber-800">Beyond Smart!</span>
          </h1>

          <p className="text-slate-700 text-sm sm:text-base md:text-lg lg:text-xl xl:text-2xl font-medium leading-relaxed mb-6 sm:mb-8 md:mb-10 lg:mb-12 xl:mb-16">
            Bimbingan Belajar Mahasiswa (BBM) Offline dan Online Terpercaya
            Sejak 2023
          </p>

          <div className="flex flex-col sm:flex-row justify-center lg:justify-start gap-3 sm:gap-4 md:gap-5">
            <button
              onClick={() => scrollToSection("services")}
              className="bg-amber-800 rounded-xl sm:rounded-2xl px-4 sm:px-6 md:px-8 py-2.5 sm:py-3 md:py-4 text-white font-medium text-sm sm:text-base md:text-lg transition-all duration-300 ease-in-out transform hover:scale-105 hover:shadow-lg hover:bg-amber-700 active:scale-95 w-full sm:w-auto"
            >
              Services
            </button>
            <button
              onClick={() => scrollToSection("portfolio")}
              className="bg-slate-800 rounded-xl sm:rounded-2xl px-4 sm:px-6 md:px-8 py-2.5 sm:py-3 md:py-4 text-white font-medium text-sm sm:text-base md:text-lg transition-all duration-300 ease-in-out transform hover:scale-105 hover:shadow-lg hover:bg-slate-700 active:scale-95 w-full sm:w-auto"
            >
              Our Works
            </button>
          </div>
        </div>

        {/* Image Section - Hero Image */}
        <div className="w-full lg:w-1/2 xl:w-3/5 flex justify-center lg:justify-end relative z-10 order-2 lg:order-2">
          <div className="relative w-48 h-48 sm:w-64 sm:h-64 md:w-80 md:h-80 lg:w-96 lg:h-96 xl:w-[450px] xl:h-[450px] 2xl:w-[500px] 2xl:h-[500px]">
            <Image
              src="/background3.png"
              alt="hero"
              fill
              className="object-contain scale-200 sm:scale-125 md:scale-175 lg:scale-175 xl:scale-200 transform translate-x-24 translate-y-10 sm:translate-x-8 sm:translate-y-8 md:translate-x-36 md:translate-y-24 lg:translate-x-16 lg:translate-y-30 xl:translate-x-20 xl:translate-y-44"
              priority
            />
          </div>
        </div>
      </div>

      {/* Logo - Positioned at bottom right */}
    </div>
  );
}
