
import React, { memo } from "react";

const HeroIllustration: React.FC = () => {
  return (
    <div className="relative flex justify-center items-center animate-fade-in w-full" 
      style={{ animationDelay: "0.4s", animationFillMode: "forwards" }}>
      {/* Subtle accent colors instead of dots */}
      <div className="absolute -top-4 sm:-top-8 lg:-top-10 -left-4 sm:-left-8 lg:-left-10 w-12 h-12 sm:w-16 sm:h-16 lg:w-20 lg:h-20 bg-red-100 rounded-full opacity-30 blur-xl"></div>
      <div className="absolute bottom-4 sm:bottom-8 lg:bottom-10 -right-4 sm:-right-8 lg:-right-12 w-16 h-16 sm:w-20 sm:h-20 lg:w-24 lg:h-24 bg-darkblue-200 rounded-full opacity-20 blur-xl"></div>
      
      <div className="w-full max-w-xs sm:max-w-sm md:max-w-md lg:max-w-lg xl:max-w-xl">
        <img
          src="/lovable-uploads/91332295-bb58-4139-b4fa-888ec354e50c.png"
          alt="Web development and digital analytics illustration"
          className="w-full h-auto object-contain"
          loading="eager"
          decoding="async"
        />
      </div>
    </div>
  );
};

export default memo(HeroIllustration);
