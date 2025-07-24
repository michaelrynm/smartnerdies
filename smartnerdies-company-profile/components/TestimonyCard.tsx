"use client";

import { Avatar, AvatarImage } from "@radix-ui/react-avatar";
import { FaStar } from "react-icons/fa";

interface TestimonyCardProps {
  review: string;
  name: string;
  avatarColor?: string;
  rating: number;
}

export default function TestimonyCard({
  review,
  name,
  avatarColor,
  rating,
}: TestimonyCardProps) {
  return (
    <div>
      <div className="group w-full max-w-sm mx-auto bg-gradient-to-br from-[#F8FAFF] to-[#F0F4FF] border border-white/50 rounded-2xl sm:rounded-3xl p-4 sm:p-5 flex flex-col shadow-lg shadow-blue-100/30 hover:shadow-xl hover:shadow-blue-100/40 transition-all duration-300 hover:-translate-y-1 backdrop-blur-sm">
        {/* Content area */}
        <div className="flex-grow flex flex-col">
          <blockquote className="text-[#2A2D47] font-medium text-sm sm:text-base leading-relaxed flex-grow relative">
            <span className="text-3xl text-blue-200 absolute -top-1 -left-1 font-serif leading-none">
              &quot;
            </span>
            <span className="relative z-10 block pl-3">{review}</span>
          </blockquote>

          {/* Footer */}
          <div className="mt-auto pt-4 sm:pt-5">
            <div className="h-px w-full bg-gradient-to-r from-transparent via-blue-200/60 to-transparent mb-3 sm:mb-4" />

            <div className="flex gap-2.5 items-center">
              <div className="relative">
                <Avatar>
                  <AvatarImage
                    src={avatarColor}
                    className="w-7 h-7 sm:w-8 sm:h-8 rounded-full flex-shrink-0 shadow-md ring-2 ring-white/50"
                  />
                </Avatar>
              </div>
              <div className="flex flex-col min-w-0">
                <p className="font-semibold text-sm sm:text-base text-[#2A2D47] truncate">
                  {name}
                </p>
                <div className="flex">
                  {Array.from({ length: 5 }, (_, index) => {
                    return (
                      <FaStar
                        key={index}
                        className={`${
                          index < rating ? "text-yellow-500" : "text-gray-300"
                        } w-3 h-3`}
                      />
                    );
                  })}
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Decorative elements */}
        <div className="absolute top-4 right-4 w-16 h-16 bg-gradient-to-br from-blue-100/30 to-transparent rounded-full blur-xl opacity-50" />
        <div className="absolute bottom-4 left-4 w-20 h-20 bg-gradient-to-tr from-purple-100/20 to-transparent rounded-full blur-xl opacity-30" />
      </div>
    </div>
  );
}
