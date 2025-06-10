import { Separator } from "@radix-ui/react-separator";
import Image from "next/image";

export default function TestimonyCard() {
  return (
    <div className="w-full max-w-sm mx-auto bg-[#F4F6FF] rounded-2xl sm:rounded-3xl px-3 sm:px-4 py-4 sm:py-5 h-full flex flex-col">
      <div className="flex-shrink-0">
        <Image
          src={"/TestimonyCardIcon.png"}
          alt="Icon"
          width={32}
          height={32}
          className="w-6 h-6 sm:w-8 sm:h-8"
        />
      </div>

      <div className="flex-grow flex flex-col">
        <p className="mt-3 sm:mt-5 text-[#2E2C2C] font-medium text-sm sm:text-base leading-relaxed flex-grow">
          The progress tracker is fantastic. it's motivating to see how much
          i've improved overtime. The app has a great mix of common and
          challenging words.
        </p>

        <div className="mt-auto pt-4 sm:pt-6">
          <Separator
            orientation="horizontal"
            className="h-px w-full bg-[#A6A6A6] mb-3 sm:mb-3.5"
          />
          <div className="flex gap-2 items-center">
            <div className="w-6 h-6 sm:w-7 sm:h-7 bg-red-500 rounded-full flex-shrink-0" />
            <p className="font-medium text-sm sm:text-base truncate">
              Zain Carder
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
