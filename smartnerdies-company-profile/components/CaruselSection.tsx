"use client";

import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
  CarouselApi,
} from "@/components/ui/carousel";
import Image from "next/image";
import { useState, useEffect } from "react";

export default function CarouselSection() {
  const [api, setApi] = useState<CarouselApi>();
  const [current, setCurrent] = useState<number>(0);

  const images: string[] = [
    "https://picsum.photos/854/480?random=1",
    "https://picsum.photos/854/480?random=2",
    "https://picsum.photos/854/480?random=3",
  ];

  useEffect(() => {
    if (!api) {
      return;
    }

    setCurrent(api.selectedScrollSnap() + 1);

    api.on("select", () => {
      setCurrent(api.selectedScrollSnap() + 1);
    });
  }, [api]);

  const scrollTo = (index: number): void => {
    if (api) {
      api.scrollTo(index);
    }
  };

  return (
    <div className="bg-[#2E2C2C] py-8 sm:py-16 md:py-24 lg:py-36">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Mobile Layout (Stack vertically) */}
        <div className="lg:hidden space-y-8">
          {/* Header for Mobile */}
          <div className="text-center space-y-2">
            <h2 className="text-2xl sm:text-3xl font-bold text-white mb-1">
              Selected <span className="text-[#1E75BD] italic">Works</span>
            </h2>
            <div className="w-16 h-1 bg-[#1F5582] rounded-full mx-auto"></div>
          </div>

          {/* Carousel for Mobile */}
          <div className="relative">
            <Carousel
              orientation="horizontal"
              className="w-full"
              setApi={setApi}
            >
              <CarouselContent className="-ml-2 md:-ml-4">
                {images.map((src: string, index: number) => (
                  <CarouselItem key={index} className="pl-2 md:pl-4">
                    <div className="aspect-video">
                      <Image
                        src={src}
                        alt={`Sample image ${index + 1}`}
                        width={854}
                        height={480}
                        className="object-cover w-full h-full rounded-lg shadow-2xl"
                      />
                    </div>
                  </CarouselItem>
                ))}
              </CarouselContent>
              <CarouselPrevious className="left-2" />
              <CarouselNext className="right-2" />
            </Carousel>

            {/* Dot Navigation for Mobile - Horizontal */}
            <div className="flex justify-center gap-2 mt-4">
              {images.map((_, index: number) => (
                <button
                  key={index}
                  onClick={() => scrollTo(index)}
                  className={`w-3 h-3 rounded-full transition-all duration-300 ${
                    current === index + 1
                      ? "bg-white scale-110 shadow-lg"
                      : "bg-white/40 hover:bg-white/70 hover:scale-105"
                  }`}
                  aria-label={`Go to slide ${index + 1}`}
                />
              ))}
            </div>
          </div>

          {/* Content for Mobile */}
          <div className="text-white text-center space-y-6">
            <div className="space-y-4">
              <h3 className="text-lg sm:text-xl font-semibold text-white/90">
                Project Title
              </h3>
              <p className="text-white/80 leading-relaxed text-sm sm:text-base max-w-md mx-auto">
                Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                Doloremque tenetur, distinctio amet neque molestias officia
                voluptates ipsum consectetur expedita.
              </p>
            </div>

            {/* Tags/Badges */}
            <div className="flex flex-wrap justify-center gap-2 sm:gap-3">
              <span className="px-3 py-1.5 sm:px-4 sm:py-2 bg-[#1F5582] text-white text-xs sm:text-sm font-medium rounded-full hover:bg-[#2a7bb8] transition-colors duration-200">
                Web Design
              </span>
              <span className="px-3 py-1.5 sm:px-4 sm:py-2 bg-[#1F5582] text-white text-xs sm:text-sm font-medium rounded-full hover:bg-[#2a7bb8] transition-colors duration-200">
                UI/UX
              </span>
              <span className="px-3 py-1.5 sm:px-4 sm:py-2 bg-[#1F5582] text-white text-xs sm:text-sm font-medium rounded-full hover:bg-[#2a7bb8] transition-colors duration-200">
                React
              </span>
            </div>

            {/* Call to Action */}
            <div className="pt-4">
              <button className="group flex items-center justify-center gap-2 text-[#1F5582] hover:text-white font-semibold transition-colors duration-200 mx-auto">
                <span>View Project</span>
                <svg
                  className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-200"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M9 5l7 7-7 7"
                  />
                </svg>
              </button>
            </div>
          </div>
        </div>

        {/* Desktop Layout (Side by side) */}
        <div className="hidden lg:flex items-center gap-8 xl:gap-12">
          {/* Carousel Section - Takes up more space */}
          <div className="flex items-center gap-4 xl:gap-6 flex-[2]">
            <Carousel orientation="vertical" className="w-full" setApi={setApi}>
              <CarouselContent className="-mt-1 h-[360px] xl:h-[480px]">
                {images.map((src: string, index: number) => (
                  <CarouselItem key={index} className="pt-1 basis-full">
                    <div className="h-full">
                      <Image
                        src={src}
                        alt={`Sample image ${index + 1}`}
                        width={854}
                        height={480}
                        className="object-cover w-full h-full rounded-lg shadow-2xl"
                      />
                    </div>
                  </CarouselItem>
                ))}
              </CarouselContent>
              <CarouselPrevious />
              <CarouselNext />
            </Carousel>

            {/* Dot Navigation */}
            <div className="flex flex-col gap-3 xl:gap-4">
              {images.map((_, index: number) => (
                <button
                  key={index}
                  onClick={() => scrollTo(index)}
                  className={`w-3 h-3 rounded-full transition-all duration-300 ${
                    current === index + 1
                      ? "bg-white scale-110 shadow-lg"
                      : "bg-white/40 hover:bg-white/70 hover:scale-105"
                  }`}
                  aria-label={`Go to slide ${index + 1}`}
                />
              ))}
            </div>
          </div>

          {/* Separator */}
          <div className="w-[2px] xl:w-[3px] h-[360px] xl:h-[480px] bg-gradient-to-b from-[#1F5582] via-[#2a7bb8] to-[#1F5582] rounded-full shadow-lg flex-shrink-0" />

          {/* Selected Works Section */}
          <div className="flex-1 h-[360px] xl:h-[480px] flex flex-col justify-between text-white">
            {/* Header */}
            <div className="space-y-2">
              <h2 className="text-2xl xl:text-3xl font-bold text-white mb-1">
                Selected <span className="text-[#1E75BD] italic">Works</span>
              </h2>
              <div className="w-12 xl:w-16 h-1 bg-[#1F5582] rounded-full"></div>
            </div>

            {/* Content */}
            <div className="flex-1 flex flex-col justify-center space-y-4 xl:space-y-6">
              <div className="space-y-3 xl:space-y-4">
                <h3 className="text-lg xl:text-xl font-semibold text-white/90">
                  Project Title
                </h3>
                <p className="text-white/80 leading-relaxed text-sm xl:text-base">
                  Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                  Doloremque tenetur, distinctio amet neque molestias officia
                  voluptates ipsum consectetur expedita.
                </p>
              </div>

              {/* Tags/Badges */}
              <div className="flex flex-wrap gap-2 xl:gap-3">
                <span className="px-3 py-1.5 xl:px-4 xl:py-2 bg-[#1F5582] text-white text-xs xl:text-sm font-medium rounded-full hover:bg-[#2a7bb8] transition-colors duration-200">
                  Web Design
                </span>
                <span className="px-3 py-1.5 xl:px-4 xl:py-2 bg-[#1F5582] text-white text-xs xl:text-sm font-medium rounded-full hover:bg-[#2a7bb8] transition-colors duration-200">
                  UI/UX
                </span>
                <span className="px-3 py-1.5 xl:px-4 xl:py-2 bg-[#1F5582] text-white text-xs xl:text-sm font-medium rounded-full hover:bg-[#2a7bb8] transition-colors duration-200">
                  React
                </span>
              </div>
            </div>

            {/* Call to Action */}
            <div className="pt-3 xl:pt-4">
              <button className="group flex items-center gap-2 text-[#1F5582] hover:text-white font-semibold transition-colors duration-200 text-sm xl:text-base">
                <span>View Project</span>
                <svg
                  className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-200"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M9 5l7 7-7 7"
                  />
                </svg>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
