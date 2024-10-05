import { useEffect, useRef } from 'react';
import adani from "../assets/Company/adani.png";
import exide from "../assets/Company/exide.png";
import goodwe from "../assets/Company/goodwe.png";
import jio from "../assets/Company/jio.png";
import tata from "../assets/Company/tata.png";
import renew from "../assets/Company/renew.png";

import './Carousel.css';

const FeatureCarousel = () => {
  const carouselRef = useRef(null);

  useEffect(() => {
    const carousel = carouselRef.current;
    let scrollAmount = 0;
    const scrollSpeed = 2; // Adjust speed as needed

    // Function to handle seamless scrolling
    const scrollCarousel = () => {
      scrollAmount += scrollSpeed;

      // If the scroll reaches the end of the original content, jump back to the start
      if (carousel.scrollLeft >= carousel.scrollWidth / 2) {
        carousel.scrollLeft = 0; // Instantly jump to the start without any smooth behavior
        scrollAmount = 0; // Reset scroll amount
      } else {
        carousel.scrollLeft = scrollAmount;
      }
    };

    const interval = setInterval(scrollCarousel, 16); // Smooth continuous scrolling

    return () => clearInterval(interval); // Cleanup on component unmount
  }, []);

  return (
    <div className="carousel-wrapper overflow-hidden relative">
      <div
        className="flex flex-row space-x-8 gap-20 p-4 overflow-x-hidden"
        ref={carouselRef}
      >
        {/* Original Carousel Items */}
        <img
          src={adani}
          alt="Placeholder 1"
          className="w-60 p-4 rounded-2xl object-contain bg-slate-300"
        />
        <img
          src={exide}
          alt="Placeholder 2"
          className="w-60 p-4 rounded-2xl object-contain bg-slate-300"
        />
        <img
          src={goodwe}
          alt="Placeholder 3"
          className="w-60 p-4 rounded-2xl object-contain bg-slate-300"
        />
        <img
          src={jio}
          alt="Placeholder 4"
          className="w-60 p-4 rounded-2xl object-contain bg-slate-300"
        />
        <img
          src={tata}
          alt="Placeholder 5"
          className="w-60 p-4 rounded-2xl object-contain bg-slate-300"
        />
        <img
          src={renew}
          alt="Placeholder 6"
          className="w-60 p-4 rounded-2xl object-contain bg-slate-300"
        />

        {/* Cloned Carousel Items */}
        <img
          src={adani}
          alt="Placeholder 1 clone"
          className="w-60 p-4 rounded-2xl object-contain bg-slate-300"
        />
        <img
          src={exide}
          alt="Placeholder 2 clone"
          className="w-60 p-4 rounded-2xl object-contain bg-slate-300"
        />
        <img
          src={goodwe}
          alt="Placeholder 3 clone"
          className="w-60 p-4 rounded-2xl object-contain bg-slate-300"
        />
        <img
          src={jio}
          alt="Placeholder 4 clone"
          className="w-60 p-4 rounded-2xl object-contain bg-slate-300"
        />
        <img
          src={tata}
          alt="Placeholder 5 clone"
          className="w-60 p-4 rounded-2xl object-contain bg-slate-300"
        />
        <img
          src={renew}
          alt="Placeholder 6 clone"
          className="w-60 p-4 rounded-2xl object-contain bg-slate-300"
        />
      </div>
    </div>
  );
};

export default FeatureCarousel;
