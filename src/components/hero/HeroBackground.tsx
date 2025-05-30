
import React, { memo } from "react";

const HeroBackground: React.FC = () => {
  return (
    <>
      {/* Clean static background with subtle gradient */}
      <div className="absolute inset-0 -z-10 bg-gray-50">
        {/* Soft color accents that align with i-numera brand colors */}
        <div className="absolute top-10 sm:top-16 lg:top-20 right-10 sm:right-16 lg:right-20 w-32 h-32 sm:w-48 sm:h-48 lg:w-64 lg:h-64 rounded-full bg-darkblue-100 opacity-20 blur-3xl"></div>
        <div className="absolute bottom-4 sm:bottom-8 lg:bottom-10 left-4 sm:left-8 lg:left-10 w-48 h-48 sm:w-72 sm:h-72 lg:w-96 lg:h-96 rounded-full bg-red-100 opacity-20 blur-3xl"></div>
        
        {/* Additional subtle color accents */}
        <div className="absolute top-20 sm:top-32 lg:top-40 left-1/4 w-16 h-16 sm:w-24 sm:h-24 lg:w-32 lg:h-32 rounded-full bg-darkblue-50 opacity-15 blur-xl"></div>
        <div className="absolute bottom-20 sm:bottom-32 lg:bottom-40 right-1/4 w-24 h-24 sm:w-36 sm:h-36 lg:w-48 lg:h-48 rounded-full bg-red-50 opacity-15 blur-xl"></div>
      </div>
      
      {/* Shopping cart icon - hidden on mobile for better layout */}
      <img 
        src="/lovable-uploads/web.svg"
        alt="shopping_cart" 
        className="hidden sm:block absolute top-4 sm:top-6 lg:top-7 right-32 sm:right-48 lg:right-60 -rotate-3 z-10"
        style={{width:"30px"}} 
      />
    </>
  );
};

export default memo(HeroBackground);
