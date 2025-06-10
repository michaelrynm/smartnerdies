import Image from "next/image";

export default function VideoSection() {
  return (
    <div>
      {/* Header Section */}
      <div className="mt-6 sm:mt-8 lg:mt-10 mb-8 sm:mb-5 px-14">
        <p className="font-medium text-[#2E2C2C] text-base sm:text-lg mb-4 sm:mb-1">
          Don&apos;t miss our <span className="text-[#1E75BD]">update</span>
        </p>
        <div className="w-full max-w-sm sm:max-w-md lg:max-w-lg">
          <Image
            src={"/tiktokLogo.png"}
            alt="Tiktok Logo"
            width={300}
            height={100}
            className=""
            priority
          />
        </div>
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-14">
        {/* Video Grid Section */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 lg:justify-items-center gap-6 sm:gap-8">
          {/* Video Item 1 */}
          <div className="flex flex-col space-y-4">
            <div className="bg-neutral-500 rounded-2xl w-full max-w-sm aspect-[9/16] sm:aspect-[3/4] lg:aspect-[9/16]" />
            <div className="space-y-2">
              <h3 className="font-semibold text-xl sm:text-2xl lg:text-2xl text-[#2E2C2C]">
                Lorem Ipsum
              </h3>
              <p className="font-medium text-[#A9A9A9] text-lg sm:text-xl lg:text-2xl">
                Lorem ipsum dolor sit amet.
              </p>
            </div>
          </div>

          {/* Video Item 2 */}
          <div className="flex flex-col space-y-4">
            <div className="bg-neutral-500 rounded-2xl w-full max-w-sm aspect-[9/16] sm:aspect-[3/4] lg:aspect-[9/16]" />
            <div className="space-y-2">
              <h3 className="font-semibold text-xl sm:text-2xl lg:text-2xl text-[#2E2C2C]">
                Lorem Ipsum
              </h3>
              <p className="font-medium text-[#A9A9A9] text-lg sm:text-xl lg:text-2xl">
                Lorem ipsum dolor sit amet.
              </p>
            </div>
          </div>

          {/* Video Item 3 */}
          <div className="flex flex-col space-y-4 md:col-span-2 lg:col-span-1">
            <div className="bg-neutral-500 rounded-2xl w-full max-w-sm aspect-[9/16] sm:aspect-[3/4] lg:aspect-[9/16]" />
            <div className="space-y-2">
              <h3 className="font-semibold text-xl sm:text-2xl lg:text-2xl text-[#2E2C2C]">
                Lorem Ipsum
              </h3>
              <p className="font-medium text-[#A9A9A9] text-lg sm:text-xl lg:text-2xl">
                Lorem ipsum dolor sit amet.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
