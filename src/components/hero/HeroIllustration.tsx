
import React, { memo } from "react";

const HeroIllustration: React.FC = () => {
  return (
    <div className="relative flex justify-center lg:justify-start items-center animate-fade-in" 
      style={{ animationDelay: "0.4s", animationFillMode: "forwards" }}>
      {/* Subtle accent colors instead of dots */}
      <div className="absolute -top-10 -left-10 w-20 h-20 bg-red-100 rounded-full opacity-30 blur-xl"></div>
      <div className="absolute bottom-10 -right-12 w-24 h-24 bg-darkblue-200 rounded-full opacity-20 blur-xl"></div>
      
      <div className="relative max-w-2xl">
        <img
          src="/lovable-uploads/91332295-bb58-4139-b4fa-888ec354e50c.png"
          alt="Web development and digital analytics illustration"
          className="w-full h-auto object-contain"
          width="800"
          height="600"
          loading="eager"
          decoding="async"
        />
      </div>
    </div>
  );
};

export default memo(HeroIllustration);
