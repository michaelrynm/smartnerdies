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
import { useState, useEffect, useRef } from "react";

// Interface untuk data setiap slide
interface SlideData {
  id: string;
  media: {
    type: "image" | "video";
    src: string;
    alt: string;
  };
  title: string;
  description: string;
  tags: string[];
  link?: string;
}

// Props interface untuk komponen
interface CarouselSectionProps {
  slides: SlideData[];
}

export default function CarouselSection({ slides }: CarouselSectionProps) {
  const [api, setApi] = useState<CarouselApi>();
  const [current, setCurrent] = useState<number>(0);
  // Fixed height untuk portrait layout dengan ukuran yang lebih besar
  const carouselHeight = 600; // Much larger size
  const mediaRefs = useRef<
    (HTMLVideoElement | HTMLImageElement | HTMLIFrameElement | null)[]
  >([]);

  useEffect(() => {
    if (!api) {
      return;
    }

    setCurrent(api.selectedScrollSnap() + 1);

    api.on("select", () => {
      const newIndex = api.selectedScrollSnap();
      setCurrent(newIndex + 1);
    });
  }, [api]);

  const scrollTo = (index: number): void => {
    if (api) {
      api.scrollTo(index);
    }
  };

  // Fungsi untuk render media dengan ukuran portrait yang konsisten dan lebih besar
  const renderMedia = (media: SlideData["media"], index: number) => {
    const commonClasses =
      "w-full rounded-2xl shadow-2xl object-contain bg-gray-900/20"; // Changed to object-contain with background
    const fixedSize = { width: 450, height: carouselHeight }; // Much larger portrait size

    if (media.type === "video") {
      return (
        <iframe
          ref={(el) => {
            mediaRefs.current[index] = el;
          }}
          src={media.src}
          allow="accelerometer; clipboard-write; encrypted-media; gyroscope; picture-in-picture; fullscreen"
          allowFullScreen
          className={`${commonClasses} h-[${carouselHeight}px]`}
          style={{ width: fixedSize.width, height: fixedSize.height }}
        />
      );
    } else {
      return (
        <Image
          ref={(el) => {
            mediaRefs.current[index] = el;
          }}
          src={media.src}
          alt={media.alt}
          width={fixedSize.width}
          height={fixedSize.height}
          className={`${commonClasses} h-[${carouselHeight}px]`}
          style={{ width: fixedSize.width, height: fixedSize.height }}
        />
      );
    }
  };

  // Ambil data slide yang sedang aktif
  const currentSlide = slides[current - 1] || slides[0];

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
          <div className="relative flex justify-center">
            <Carousel
              orientation="horizontal"
              className="w-fit max-w-lg" // Increased for much larger size
              setApi={setApi}
            >
              <CarouselContent className="-ml-2 md:-ml-4">
                {slides.map((slide: SlideData, index: number) => (
                  <CarouselItem key={slide.id} className="pl-2 md:pl-4">
                    <div className="flex justify-center">
                      {renderMedia(slide.media, index)}
                    </div>
                  </CarouselItem>
                ))}
              </CarouselContent>
              <CarouselPrevious className="left-2" />
              <CarouselNext className="right-2" />
            </Carousel>

            {/* Dot Navigation for Mobile - Horizontal */}
            <div className="absolute -bottom-8 left-1/2 transform -translate-x-1/2 flex justify-center gap-2">
              {slides.map((_, index: number) => (
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

          {/* Content for Mobile - Dynamic */}
          <div className="text-white text-center space-y-6 mt-12">
            <div className="space-y-4">
              <h3 className="text-lg sm:text-xl font-semibold text-white/90">
                {currentSlide?.title}
              </h3>
              <p className="text-white/80 leading-relaxed text-sm sm:text-base max-w-md mx-auto">
                {currentSlide?.description}
              </p>
            </div>

            {/* Tags/Badges - Dynamic */}
            <div className="flex flex-wrap justify-center gap-2 sm:gap-3">
              {currentSlide?.tags.map((tag: string, index: number) => (
                <span
                  key={index}
                  className="px-3 py-1.5 sm:px-4 sm:py-2 bg-[#1F5582] text-white text-xs sm:text-sm font-medium rounded-full hover:bg-[#2a7bb8] transition-colors duration-200"
                >
                  {tag}
                </span>
              ))}
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
        <div className="hidden lg:flex items-center gap-8 xl:gap-12 justify-center">
          {/* Carousel Section - Fixed portrait size */}
          <div className="flex items-center gap-4 xl:gap-6">
            <Carousel orientation="vertical" className="w-fit" setApi={setApi}>
              <CarouselContent
                className="-mt-1 transition-all duration-300 ease-in-out"
                style={{ height: `${carouselHeight}px` }}
              >
                {slides.map((slide: SlideData, index: number) => (
                  <CarouselItem key={slide.id} className="pt-1 basis-full">
                    <div className="h-full flex items-center justify-center">
                      {renderMedia(slide.media, index)}
                    </div>
                  </CarouselItem>
                ))}
              </CarouselContent>
              <CarouselPrevious />
              <CarouselNext />
            </Carousel>

            {/* Dot Navigation */}
            <div className="flex flex-col gap-3 xl:gap-4">
              {slides.map((_, index: number) => (
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
          <div
            className="w-[2px] xl:w-[3px] bg-gradient-to-b from-[#1F5582] via-[#2a7bb8] to-[#1F5582] rounded-full shadow-lg flex-shrink-0"
            style={{ height: `${carouselHeight}px` }}
          />

          {/* Selected Works Section - Fixed height dengan ukuran yang jauh lebih besar */}
          <div
            className="w-[28rem] xl:w-[32rem] flex flex-col justify-between text-white"
            style={{ height: `${carouselHeight}px` }}
          >
            {/* Header */}
            <div className="space-y-2">
              <h2 className="text-2xl xl:text-3xl font-bold text-white mb-1">
                Selected <span className="text-[#1E75BD] italic">Works</span>
              </h2>
              <div className="w-12 xl:w-16 h-1 bg-[#1F5582] rounded-full"></div>
            </div>

            {/* Content - Dynamic */}
            <div className="flex-1 flex flex-col justify-center space-y-4 xl:space-y-6">
              <div className="space-y-3 xl:space-y-4">
                <h3 className="text-lg xl:text-xl font-semibold text-white/90">
                  {currentSlide?.title}
                </h3>
                <p className="text-white/80 leading-relaxed text-sm xl:text-base">
                  {currentSlide?.description}
                </p>
              </div>

              {/* Tags/Badges - Dynamic */}
              <div className="flex flex-wrap gap-2 xl:gap-3">
                {currentSlide?.tags.map((tag: string, index: number) => (
                  <span
                    key={index}
                    className="px-3 py-1.5 xl:px-4 xl:py-2 bg-[#1F5582] text-white text-xs xl:text-sm font-medium rounded-full hover:bg-[#2a7bb8] transition-colors duration-200"
                  >
                    {tag}
                  </span>
                ))}
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
