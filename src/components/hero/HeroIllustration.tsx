
import React, { memo } from "react";

const HeroIllustration: React.FC = () => {
  return (
    <div className="relative flex justify-center lg:justify-start items-center animate-fade-in" 
      style={{ animationDelay: "0.4s", animationFillMode: "forwards" }}>
      {/* Decorative elements */}
      <div className="absolute -top-10 -left-10 w-20 h-20 bg-red-100 rounded-full opacity-30 blur-xl"></div>
      <div className="absolute top-1/2 -right-12 w-24 h-24 bg-darkblue-200 rounded-full opacity-20 blur-xl"></div>
      
      <div className="relative rounded-lg overflow-hidden shadow-lg max-w-md">
        <img
          src="https://img.freepik.com/free-vector/digital-marketing-team-with-laptops-light-bulb-marketing-team-metrics-marketing-team-lead-responsibilities-concept-bright-vibrant-violet-isolated-illustration_335657-795.jpg?w=740&t=st=1714583063~exp=1714583663~hmac=08cabb5b7f3f6ce13e6f27c4249db6c49fc2fde2a8cbcea0d35bf9fecc8aedb9"
          alt="Digital marketing team illustration"
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
