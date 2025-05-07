
import React, { memo } from "react";

const HeroBackground: React.FC = () => {
  return (
    <>
      {/* Clean static background with subtle pattern and accent colors */}
      <div className="absolute inset-0 -z-10 bg-gray-50">
        <div className="absolute inset-0 opacity-5 bg-[radial-gradient(#333_1px,transparent_1px)] [background-size:20px_20px]"></div>
        
        {/* Subtle color accents that align with i-numera brand colors */}
        <div className="absolute top-20 right-20 w-64 h-64 rounded-full bg-darkblue-100 opacity-20 blur-3xl"></div>
        <div className="absolute bottom-10 left-10 w-96 h-96 rounded-full bg-red-100 opacity-20 blur-3xl"></div>
      </div>
    </>
  );
};

export default memo(HeroBackground);
