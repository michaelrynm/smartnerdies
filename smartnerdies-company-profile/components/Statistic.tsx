export default function Statistic() {
  return (
    <div className="w-full bg-[#C7B6A7] mt-16 sm:mt-20 md:mt-24 lg:mt-32 px-4 sm:px-8 md:px-16 lg:px-32 xl:px-52 py-12 sm:py-16 md:py-20 lg:py-0">
      <div className="grid h-full grid-cols-1 md:grid-cols-3 gap-8 md:gap-4 lg:gap-0 place-items-center text-[#2E2C2C] lg:h-80">
        {/* Statistic 1 */}
        <div className="hover:scale-105 transition duration-300 ease-in-out text-center">
          <p className="font-semibold text-4xl sm:text-5xl md:text-6xl lg:text-7xl mb-2 sm:mb-3 lg:mb-4">
            5K
          </p>
          <p className="text-lg sm:text-xl md:text-2xl lg:text-3xl">
            Task Completed
          </p>
        </div>

        {/* Statistic 2 */}
        <div className="hover:scale-105 transition duration-300 ease-in-out text-center">
          <p className="font-semibold text-4xl sm:text-5xl md:text-6xl lg:text-7xl mb-2 sm:mb-3 lg:mb-4">
            4.9
          </p>
          <p className="text-lg sm:text-xl md:text-2xl lg:text-3xl">
            Average Rating
          </p>
        </div>

        {/* Statistic 3 */}
        <div className="hover:scale-105 transition duration-300 ease-in-out text-center">
          <p className="font-semibold text-4xl sm:text-5xl md:text-6xl lg:text-7xl mb-2 sm:mb-3 lg:mb-4">
            98%
          </p>
          <p className="text-lg sm:text-xl md:text-2xl lg:text-3xl">
            Satisfaction Rate
          </p>
        </div>
      </div>
    </div>
  );
}
