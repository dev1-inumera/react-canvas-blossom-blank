
import React, { memo } from "react";

const HeroIllustration: React.FC = () => {
  return (
    <div className="relative flex justify-center lg:justify-start items-center animate-fade-in" 
      style={{ animationDelay: "0.4s", animationFillMode: "forwards" }}>
      <div className="relative rounded-lg overflow-hidden shadow-lg max-w-md">
        <img
          src="https://img.freepik.com/free-vector/digital-marketing-team-with-laptops-light-bulb-marketing-team-metrics-marketing-team-lead-responsibilities-concept-bright-vibrant-violet-isolated-illustration_335657-795.jpg"
          alt="Digital marketing and web development illustration"
          className="w-full h-auto object-cover"
          width="600"
          height="450"
          loading="eager"
          decoding="async"
        />
      </div>
    </div>
  );
};

export default memo(HeroIllustration);
