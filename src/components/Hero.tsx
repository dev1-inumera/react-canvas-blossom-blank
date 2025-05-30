
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
        "w-full flex flex-col min-h-[80vh] md:min-h-[100vh] bg-no-repeat bg-cover items-center justify-center overflow-hidden pt-0 pb-16 md:pb-24 lg:pb-36",
        className
      )}
    >
      <MemoizedHeroBackground />

      <div className="container px-4 sm:px-6 lg:px-8 relative z-20">
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-16 xl:gap-32 items-center">
          <div className="order-2 lg:order-1 relative">
            <MemoizedHeroContent 
              currentSlide={currentSlide} 
              slides={offerSlides} 
            />
          </div>
          <div className="order-1 lg:order-2">
            <MemoizedHeroIllustration />
          </div>
          <div className="absolute top-0 right-2 sm:right-4 lg:right-5 hidden md:block">
            <MemoizedHeroLogoSection />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
