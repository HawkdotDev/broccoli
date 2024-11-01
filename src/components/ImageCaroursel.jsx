import { useState, useEffect, useCallback } from "react";
import image1 from "../assets/image/Maintenance.jpg";

const ImageCarousel = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [progress, setProgress] = useState(0);

  const slides = [
    {
      title: "Medtronic",
      text: "We have used services from AKIP for most of our stations. This is our strategic step to continue to increase the number of solar panel usage for our stations. We are very satisfied with services from AKIP.",
      author: "Jennifer Kolobaly - CTO EV Medtronic",
      image: image1,
      label: "Electric car charging station",
    },
    {
      title: "Solar Energy",
      text: "Partnering with AKIP has empowered us to achieve sustainable energy solutions for residential projects. The solar panel installations are seamless, efficient, and have exceeded our energy output expectations.",
      author: "David Brown - Director of Operations, Green Homes",
      image: image1,
      label: "Residential solar panels",
    },
    {
      title: "Wind Power",
      text: "AKIP's wind energy solutions have transformed our approach to industrial power generation. The implementation was streamlined and has enabled us to significantly reduce our carbon footprint while maintaining consistent energy supply.",
      author: "Sarah Edwards - Energy Manager, EcoIndustries",
      image: image1,
      label: "Wind power for industry",
    },
  ];

  const SLIDE_DURATION = 5000;
  const PROGRESS_INTERVAL = 50;

  const resetProgress = useCallback(() => {
    setProgress(0);
  }, []);

  const nextSlide = useCallback(() => {
    setCurrentSlide((prev) => (prev + 1) % slides.length);
    resetProgress();
  }, [slides.length, resetProgress]);

  useEffect(() => {
    const progressInterval = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          nextSlide();
          return 0;
        }
        return prev + 100 / (SLIDE_DURATION / PROGRESS_INTERVAL);
      });
    }, PROGRESS_INTERVAL);

    return () => clearInterval(progressInterval);
  }, [nextSlide]);

  return (
    <div className="w-full max-w-6xl mx-auto">
      {/* Container for both carousel and progress section */}
      <div className="flex flex-col space-y-8">
        {/* Carousel section */}
        <div className="relative bg-[#E6E6E6] rounded-3xl overflow-hidden">
          <div className="relative">
            {slides.map((slide, index) => (
              <div
                key={index}
                className={`w-full transition-all duration-500 ${
                  currentSlide === index
                    ? "opacity-100 translate-x-0"
                    : "opacity-0 translate-x-full absolute top-0 left-0"
                }`}
              >
                <div className="flex h-[370px] bg-[#E6E6E6] justify-between">
                  {/* Left side - Text content */}
                  <div className="p-8 md:p-12 flex flex-col justify-center">
                    <div className="max-w-lg">
                      <h2 className="text-2xl text-black font-semibold mb-6">
                        {slide.title}
                      </h2>
                      <p className="text-black mb-6 text-lg leading-relaxed">
                        {slide.text}
                      </p>
                      <button className="inline-flex items-center bg-green-500 text-white hover:text-black hover:bg-white font-medium text-sm rounded-full px-5 py-2">
                        View the case study
                        <svg
                          className="ml-2 w-5 h-5"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="2"
                            d="M17 8l4 4m0 0l-4 4m4-4H3"
                          />
                        </svg>
                      </button>
                      <p className="text-sm text-gray-500 mt-6">
                        {slide.author}
                      </p>
                    </div>
                  </div>
                  {/* Right side - Image */}
                  <div className="relative h-64 w-[50%] md:h-full p-7">
                    <img
                      src={slide.image}
                      alt={slide.title}
                      className="w-full h-full object-cover rounded-3xl"
                    />
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Progress section - Centered and smaller */}
        <div className="relative w-full flex flex-col items-center">
          {/* Progress bars container - Max width added for smaller bars */}
          <div className="flex gap-4 mb-2 w-1/2">
            {slides.map((_, index) => (
              <div
                key={index}
                className="h-1 flex-1 bg-gray-200 rounded-full overflow-hidden"
              >
                <div
                  className="h-full bg-green-500 transition-all duration-200 ease-linear"
                  style={{
                    width: currentSlide === index ? `${progress}%` : "0%",
                  }}
                />
              </div>
            ))}
          </div>

          {/* Labels below progress bars - Smaller text and centered */}
          <div className="flex gap-4 w-1/2">
            {slides.map((slide, index) => (
              <div
                key={index}
                className={`flex-1 text-xs text-center text-black`}
                // ${currentSlide === index ? 'text-green-500' : 'text-gray-400'}`}
              >
                {slide.label}
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ImageCarousel;
