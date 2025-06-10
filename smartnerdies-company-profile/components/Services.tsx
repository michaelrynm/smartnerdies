export default function Services() {
  return (
    <div className="mt-8 sm:mt-12 lg:mt-16">
      {/* Header Section */}
      <div className="flex justify-center px-4 sm:px-6 lg:px-8">
        <div className="max-w-lg text-center">
          <h2 className="font-medium text-2xl sm:text-3xl md:text-4xl lg:text-5xl italic">
            Our Services
          </h2>
          <p className="text-center text-xs sm:text-sm mt-2">
            Lorem, ipsum dolor.
          </p>
          <p className="text-justify text-xs sm:text-sm mt-1">
            Lorem ipsum dolor sit, amet consectetur adipisicing.
          </p>
        </div>
      </div>

      {/* Services Cards Container */}
      <div className="px-4 sm:px-6 md:px-12 lg:px-20 xl:px-40 2xl:px-80 mt-8 sm:mt-12 lg:mt-16">
        {/* Card 1 - Academic Assistant */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 md:gap-8 lg:gap-10 items-center">
          {/* Image/Color Block */}
          <div className="h-64 sm:h-80 lg:h-96 rounded-2xl bg-[#78A62C] order-2 lg:order-1"></div>

          {/* Content */}
          <div className="flex flex-col justify-between space-y-4 sm:space-y-6 lg:space-y-8 order-1 lg:order-2">
            <h3 className="text-[#2E2C2C] text-xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-semibold leading-tight">
              Academic Assistant
            </h3>

            <p className="text-sm sm:text-base md:text-lg lg:text-xl xl:text-2xl leading-relaxed">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. In vitae
              sagittis libero, ut auctor metus. Phasellus quis rhoncus est.
              Etiam aliquam, est et tincidunt vestibulum, mauris tellus pharetra
              metus, eu. Phasellus quis rhoncus est. Etiam aliquam, est et
              tincidunt vestibulum, mauris tellus pharetra metus, eu.
            </p>

            <div className="flex flex-col sm:flex-row gap-3 sm:gap-4">
              <button className="bg-[#78A62C] font-semibold rounded-3xl w-full sm:w-fit px-6 sm:px-7 py-2 sm:py-3 hover:scale-105 transition duration-300 ease-in-out">
                <span className="font-semibold text-white text-sm">Button</span>
              </button>
              <button className="border border-[#78A62C] font-semibold rounded-3xl w-full sm:w-fit px-6 sm:px-7 py-2 sm:py-3 hover:scale-105 transition duration-300 ease-in-out">
                <span className="font-semibold text-[#78A62C] text-sm">
                  Learn More
                </span>
              </button>
            </div>
          </div>
        </div>

        {/* Card 2 - Mentoring */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 md:gap-8 lg:gap-10 items-center mt-12 sm:mt-16 lg:mt-20">
          {/* Content */}
          <div className="flex flex-col justify-between space-y-4 sm:space-y-6 lg:space-y-8 order-1">
            <h3 className="text-[#2E2C2C] text-xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-semibold leading-tight">
              Mentoring
            </h3>

            <p className="text-sm sm:text-base md:text-lg lg:text-xl xl:text-2xl leading-relaxed">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. In vitae
              sagittis libero, ut auctor metus. Phasellus quis rhoncus est.
              Etiam aliquam, est et tincidunt vestibulum, mauris tellus pharetra
              metus, eu. Phasellus quis rhoncus est. Etiam aliquam, est et
              tincidunt vestibulum, mauris tellus pharetra metus, eu.
            </p>

            <div className="flex flex-col sm:flex-row gap-3 sm:gap-4">
              <button className="bg-[#1E75BD] font-semibold rounded-3xl w-full sm:w-fit px-6 sm:px-7 py-2 sm:py-3 hover:scale-105 transition duration-300 ease-in-out">
                <span className="font-semibold text-white text-sm">Button</span>
              </button>
              <button className="border border-[#1E75BD] font-semibold rounded-3xl w-full sm:w-fit px-6 sm:px-7 py-2 sm:py-3 hover:scale-105 transition duration-300 ease-in-out">
                <span className="font-semibold text-[#1E75BD] text-sm">
                  Learn More
                </span>
              </button>
            </div>
          </div>

          {/* Image/Color Block */}
          <div className="h-64 sm:h-80 lg:h-96 rounded-2xl bg-[#A1C3DF] order-2"></div>
        </div>
      </div>
    </div>
  );
}
