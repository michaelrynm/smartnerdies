export const LoadingSkeleton = () => (
  <div className="bg-[#87CEEB] overflow-hidden relative">
    <div className="flex flex-col lg:flex-row items-center justify-between px-4 sm:px-6 md:px-8 lg:px-12 xl:px-16 2xl:px-20 py-8 sm:py-12 md:py-16 lg:py-20 xl:py-24 gap-36 lg:gap-12 xl:gap-16">
      {/* Text Content Skeleton */}
      <div className="w-full lg:w-1/2 xl:w-2/5 text-center lg:text-left z-20 order-1 lg:order-1">
        {/* Title Skeleton */}
        <div className="animate-pulse">
          <div className="h-8 sm:h-10 md:h-12 lg:h-14 xl:h-16 2xl:h-18 bg-slate-600/30 rounded-lg mb-2"></div>
          <div className="h-8 sm:h-10 md:h-12 lg:h-14 xl:h-16 2xl:h-18 bg-slate-600/30 rounded-lg mb-4 sm:mb-6 md:mb-8 w-3/4"></div>
        </div>

        {/* Description Skeleton */}
        <div className="animate-pulse mb-6 sm:mb-8 md:mb-10 lg:mb-12 xl:mb-16">
          <div className="h-4 sm:h-5 md:h-6 lg:h-7 xl:h-8 bg-slate-600/30 rounded mb-2"></div>
          <div className="h-4 sm:h-5 md:h-6 lg:h-7 xl:h-8 bg-slate-600/30 rounded mb-2 w-5/6"></div>
          <div className="h-4 sm:h-5 md:h-6 lg:h-7 xl:h-8 bg-slate-600/30 rounded w-4/6"></div>
        </div>

        {/* Buttons Skeleton */}
        <div className="flex flex-col sm:flex-row justify-center lg:justify-start gap-3 sm:gap-4 md:gap-5">
          <div className="animate-pulse bg-slate-600/30 rounded-xl sm:rounded-2xl h-10 sm:h-12 md:h-14 w-full sm:w-32 md:w-36"></div>
          <div className="animate-pulse bg-slate-600/30 rounded-xl sm:rounded-2xl h-10 sm:h-12 md:h-14 w-full sm:w-32 md:w-36"></div>
        </div>
      </div>

      {/* Image Skeleton */}
      <div className="w-full lg:w-1/2 xl:w-3/5 flex justify-center lg:justify-end relative z-10 order-2 lg:order-2">
        <div className="relative w-48 h-48 sm:w-64 sm:h-64 md:w-80 md:h-80 lg:w-96 lg:h-96 xl:w-[450px] xl:h-[450px] 2xl:w-[500px] 2xl:h-[500px]">
          <div className="animate-pulse bg-slate-600/30 rounded-full w-full h-full"></div>
        </div>
      </div>
    </div>
  </div>
);
