
import React, { memo } from "react";
import { cn } from "@/lib/utils";
import { HeroSlide } from "./HeroSlides";

interface HeroBackgroundProps {
  slides: HeroSlide[];
  currentSlide: number;
}

const HeroBackground: React.FC<HeroBackgroundProps> = ({ slides, currentSlide }) => {
  return (
    <>
      {/* Background Pattern Overlay - Reduced blur intensity */}
      <div className="absolute inset-0 -z-5 opacity-10">
        <div className="absolute -top-[40%] -right-[40%] h-[80%] w-[80%] rounded-full bg-darkblue-900 blur-[100px]" />
        <div className="absolute -bottom-[20%] -left-[20%] h-[60%] w-[60%] rounded-full bg-red-500 blur-[50px]" />
      </div>

      {/* Background Carousel - Only render active and next slides */}
      <div className="absolute inset-0 -z-10">
        {slides.map((slide, index) => {
          // Only render the current slide and the next slide to reduce DOM elements
          const isVisible = index === currentSlide || 
                           index === (currentSlide + 1) % slides.length;
          
          if (!isVisible) return null;
          
          return (
            <div
              key={index}
              className={cn(
                "absolute inset-0 transition-opacity duration-1000",
                index === currentSlide ? "opacity-100" : "opacity-0"
              )}
            >
              <div className="absolute inset-0 bg-black/70 z-10"></div>
              <img
                src={slide.backgroundImage}
                alt=""
                className="w-full h-full object-cover"
                loading={index === 0 ? "eager" : "lazy"}
                decoding="async"
                fetchPriority={index === 0 ? "high" : "low"}
                width="1920"
                height="1080"
              />
            </div>
          );
        })}
      </div>

      {/* White Gradient Overlay */}
      <div className="absolute inset-y-0 left-0 w-[63%] bg-gradient-to-r from-white via-darkblue/80 to-transparent z-10 pointer-events-none"></div>
    </>
  );
};

export default memo(HeroBackground);
