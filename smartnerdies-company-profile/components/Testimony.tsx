"use client";
import TestimonyCard from "./TestimonyCard";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel";
import AutoScroll from "embla-carousel-auto-scroll";
import { useRef } from "react";
import { testimonyData } from "@/lib/testimonyData";
export default function Testimoni() {
  const plugin = useRef(
    AutoScroll({
      speed: 2,
      startDelay: 2000,
      direction: "forward",
    })
  );

  const plugin2 = useRef(
    AutoScroll({
      speed: 2,
      startDelay: 2000,
      direction: "backward",
    })
  );

  return (
    <div className="place-items-center bg-[#FFDCDC] py-8 sm:py-12 md:py-16 px-4 sm:px-6 md:px-8 lg:px-16">
      <div className="max-w-7xl mx-auto">
        <p className="text-center font-semibold text-2xl sm:text-3xl lg:text-4xl mb-8 sm:mb-10 lg:mb-14 leading-tight">
          Word of praise from others <br className="hidden sm:block" />
          <span className="sm:hidden">about our presence</span>
          <span className="hidden sm:inline">about our presence</span>
        </p>
      </div>

      {/* First Carousel Row */}
      <div className="w-full mx-auto">
        <Carousel
          plugins={[plugin.current]}
          opts={{ loop: true }}
          className="w-full"
        >
          <CarouselContent className="-ml-2 sm:-ml-4">
            {testimonyData.map((testimony, index) => (
              <CarouselItem
                key={testimony.id}
                className="pl-2 sm:pl-4 basis-full sm:basis-1/2 lg:basis-1/3 xl:basis-1/4"
              >
                <TestimonyCard
                  testimony={testimony.testimony}
                  name={testimony.name}
                  avatarColor={testimony.avatarColor}
                />
              </CarouselItem>
            ))}
          </CarouselContent>
        </Carousel>
      </div>

      {/* Second Carousel Row */}
      <div className="mt-4 sm:mt-6 w-full mx-auto">
        <Carousel
          plugins={[plugin2.current]}
          opts={{ loop: true }}
          className="w-full"
        >
          <CarouselContent className="-ml-2 sm:-ml-4">
            {testimonyData.map((testimony, index) => (
              <CarouselItem
                key={`second-${testimony.id}`}
                className="pl-2 sm:pl-4 basis-full sm:basis-1/2 lg:basis-1/3 xl:basis-1/4"
              >
                <TestimonyCard
                  testimony={testimony.testimony}
                  name={testimony.name}
                  avatarColor={testimony.avatarColor}
                />
              </CarouselItem>
            ))}
          </CarouselContent>
        </Carousel>
      </div>
    </div>
  );
}
