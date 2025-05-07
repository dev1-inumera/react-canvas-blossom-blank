
import React from "react";
import { cn } from "@/lib/utils";
import HeroBackground from "./hero/HeroBackground";
import HeroContent from "./hero/HeroContent";
import HeroLogoSection from "./hero/HeroLogoSection";

interface HeroProps {
  className?: string;
}

const Hero: React.FC<HeroProps> = ({ className }) => {
  return (
    <section
      className={cn(
        "relative w-full overflow-hidden pt-32 pb-20 lg:pt-40 lg:pb-32",
        className
      )}
    >
      <HeroBackground />

      <div className="container px-4 md:px-6 relative z-20">
        <div className="grid gap-12 lg:grid-cols-2 lg:gap-8 items-center">
          <HeroLogoSection />
          <HeroContent />
        </div>
      </div>
    </section>
  );
};

export default Hero;
