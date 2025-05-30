
import React, { useState, useEffect, useCallback, memo } from "react";
import { cn } from "@/lib/utils";
import { offerSlides } from "./hero/HeroSlides";
import HeroBackground from "./hero/HeroBackground";
import HeroContent from "./hero/HeroContent";
import HeroLogoSection from "./hero/HeroLogoSection";
import HeroIllustration from "./hero/HeroIllustration";
import { Separator } from "./ui/separator";

interface HeroProps {
  className?: string;
}

// Memoize components to prevent unnecessary re-renders
const MemoizedHeroBackground = memo(HeroBackground);
const MemoizedHeroContent = memo(HeroContent);
const MemoizedHeroLogoSection = memo(HeroLogoSection);
const MemoizedHeroIllustration = memo(HeroIllustration);

const Hero: React.FC<HeroProps> = ({ className }) => {
  const [currentSlide, setCurrentSlide] = useState(0);

  // Memoize slide change function to prevent recreating on every render
  const changeSlide = useCallback(() => {
    setCurrentSlide((prevSlide) =>
      prevSlide === offerSlides.length - 1 ? 0 : prevSlide + 1
    );
  }, []);

  useEffect(() => {
    // Set interval to 7 seconds as requested
    const interval = setInterval(changeSlide, 7000);
    return () => clearInterval(interval);
  }, [changeSlide]);

  return (
    <section
      className={cn(
        "w-full flex flex-col min-h-screen relative bg-no-repeat bg-cover items-center justify-center overflow-hidden",
        "px-4 sm:px-6 lg:px-8",
        "py-8 sm:py-12 md:py-16 lg:py-20",
        className
      )}
    >
      <MemoizedHeroBackground />

      <div className="container relative z-20 w-full max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 xl:gap-16 items-center min-h-[calc(100vh-8rem)] lg:min-h-[calc(100vh-10rem)]">
          {/* Content Section */}
          <div className="order-2 lg:order-1 relative w-full">
            <MemoizedHeroContent 
              currentSlide={currentSlide} 
              slides={offerSlides} 
            />
          </div>
          
          {/* Illustration Section */}
          <div className="order-1 lg:order-2 relative w-full flex justify-center lg:justify-end">
            <MemoizedHeroIllustration />
          </div>
        </div>

        {/* Logo Section - Hidden on mobile, visible on larger screens */}
        <div className="absolute top-4 right-4 lg:top-8 lg:right-8 hidden md:block">
          <MemoizedHeroLogoSection />
        </div>
      </div>
    </section>
  );
};

export default Hero;
