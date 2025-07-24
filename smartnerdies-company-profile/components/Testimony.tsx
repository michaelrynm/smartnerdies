"use client";
import TestimonyCard from "./TestimonyCard";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel";
import AutoScroll from "embla-carousel-auto-scroll";
import { useRef, useEffect, useState } from "react";
import axios from "axios";

type ReviewData = {
  id: number;
  documentId: string;
  name: string;
  review: string;
  rating: number;
  createdAt: string;
  updatedAt: string;
  publishedAt: string;
};



export default function Testimoni() {
  const [reviews, setReviews] = useState<ReviewData[]>([]);
  const fetchReviews = async () => {
    try {
      const res = await axios.get(
        "https://ambitious-desk-9046e01712.strapiapp.com/api/reviews"
      );
      setReviews(res.data.data);
    } catch (error) {
      console.log("Error get reveiws data", error);
    }
  };

  

  useEffect(() => {
    fetchReviews();
  }, []);

  const plugin = useRef(
    AutoScroll({
      speed: 0.5,
      startDelay: 2000,
      direction: "forward",
    })
  );

  const plugin2 = useRef(
    AutoScroll({
      speed: 0.5,
      startDelay: 2000,
      direction: "backward",
    })
  );

  return (
    <div className="place-items-center bg-[#FFDCDC] py-8 sm:py-12 md:py-10 px-4 sm:px-6 md:px-8 lg:px-16">
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
          <CarouselContent className="-ml-2 sm:-ml-4 py-3">
            {reviews.map((review) => (
              <CarouselItem
                key={review.id}
                className="pl-2 sm:pl-4 basis-full sm:basis-1/2 lg:basis-1/3 xl:basis-1/4"
              >
                <TestimonyCard
                  review={review.review}
                  name={review.name}
                  avatarColor={`https://ui-avatars.com/api/?name=${encodeURIComponent(
                    review.name
                  )}&background=random`}
                  rating={review.rating}
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
          <CarouselContent className="-ml-2 sm:-ml-4 py-3">
            {reviews.map((review) => (
              <CarouselItem
                key={review.id}
                className="pl-2 sm:pl-4 basis-full sm:basis-1/2 lg:basis-1/3 xl:basis-1/4"
              >
                <TestimonyCard
                  review={review.review}
                  name={review.name}
                  avatarColor={`https://ui-avatars.com/api/?name=${encodeURIComponent(
                    review.name
                  )}&background=random`}
                  rating={review.rating}
                />
              </CarouselItem>
            ))}
          </CarouselContent>
        </Carousel>
      </div>
    </div>
  );
}
