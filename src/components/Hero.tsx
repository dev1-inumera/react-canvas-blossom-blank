
import React, { useState, useEffect } from "react";
import { cn } from "@/lib/utils";
import { carouselSlides } from "./hero/HeroSlides";
import HeroBackground from "./hero/HeroBackground";
import HeroContent from "./hero/HeroContent";
import HeroLogoSection from "./hero/HeroLogoSection";

interface HeroProps {
  className?: string;
}

const Hero: React.FC<HeroProps> = ({ className }) => {
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prevSlide) =>
        prevSlide === carouselSlides.length - 1 ? 0 : prevSlide + 1
      );
    }, 4000);

    return () => clearInterval(interval);
  }, []);

  return (
    <section
      className={cn(
        "relative w-full overflow-hidden pt-32 pb-20 lg:pt-40 lg:pb-32",
        className
      )}
    >
      <HeroBackground 
        slides={carouselSlides} 
        currentSlide={currentSlide} 
      />

      <div className="container px-4 md:px-6 relative z-20">
        <div className="grid gap-12 lg:grid-cols-2 lg:gap-8 items-center">
          {/* Logo image section */}
          <HeroLogoSection />

          {/* Text and CTA section */}
          <HeroContent 
            currentSlide={currentSlide} 
            slides={carouselSlides} 
          />
        </div>
      </div>
    </section>
  );
};

export default Hero;
