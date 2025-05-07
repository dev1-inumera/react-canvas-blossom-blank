
import React, { useState, useEffect, useCallback, memo } from "react";
import { cn } from "@/lib/utils";
import { carouselSlides } from "./hero/HeroSlides";
import HeroBackground from "./hero/HeroBackground";
import HeroContent from "./hero/HeroContent";
import HeroLogoSection from "./hero/HeroLogoSection";

interface HeroProps {
  className?: string;
}

// Memoize components to prevent unnecessary re-renders
const MemoizedHeroBackground = memo(HeroBackground);
const MemoizedHeroContent = memo(HeroContent);
const MemoizedHeroLogoSection = memo(HeroLogoSection);

const Hero: React.FC<HeroProps> = ({ className }) => {
  const [currentSlide, setCurrentSlide] = useState(0);

  // Memoize slide change function to prevent recreating on every render
  const changeSlide = useCallback(() => {
    setCurrentSlide((prevSlide) =>
      prevSlide === carouselSlides.length - 1 ? 0 : prevSlide + 1
    );
  }, []);

  useEffect(() => {
    // Increase interval time to reduce processing frequency
    const interval = setInterval(changeSlide, 5000);
    return () => clearInterval(interval);
  }, [changeSlide]);

  return (
    <section
      className={cn(
        "relative w-full overflow-hidden pt-32 pb-20 lg:pt-40 lg:pb-32",
        className
      )}
    >
      <MemoizedHeroBackground 
        slides={carouselSlides} 
        currentSlide={currentSlide} 
      />

      <div className="container px-4 md:px-6 relative z-20">
        <div className="grid gap-12 lg:grid-cols-2 lg:gap-8 items-center">
          <MemoizedHeroLogoSection />
          <MemoizedHeroContent 
            currentSlide={currentSlide} 
            slides={carouselSlides} 
          />
        </div>
      </div>
    </section>
  );
};

export default Hero;
