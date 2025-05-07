
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
        " w-full overflow-hidden pt-32 pb-24 lg:pt-40 lg:pb-36",
        className
      )}
    >
      <MemoizedHeroBackground />

      <div className="container px-4 md:px-6 relative z-20">
        <div className="grid lg:grid-cols-2 gap-[235px] items-center">
          <div className="order-2 lg:order-1">
            <MemoizedHeroIllustration />
          </div>
          <div className="order-1 lg:order-2 relative">
            <MemoizedHeroContent 
              currentSlide={currentSlide} 
              slides={offerSlides} 
            />
            <div className="absolute bottom-0 right-0 lg:right-10 lg:-bottom-24">
              <MemoizedHeroLogoSection />
            </div>
          </div>
        </div>
      </div>
      
      {/* Separator moved further down to clearly divide hero from content below */}
      <div className="container px-4 md:px-6 mt-20">
        <Separator className="h-[2px] bg-gradient-to-r from-transparent via-darkblue-200/40 to-transparent" />
      </div>
    </section>
  );
};

export default Hero;
