
import React, { memo } from "react";

const HeroBackground: React.FC = () => {
  return (
    <>
      {/* Clean static background with enhanced subtle pattern and accent colors */}
      <div className="absolute inset-0 -z-10 bg-gray-50">
        <div className="absolute inset-0 opacity-5 bg-[radial-gradient(#333_1px,transparent_1px)] [background-size:20px_20px]"></div>
        
        {/* Enhanced subtle color accents that align with i-numera brand colors */}
        <div className="absolute top-20 right-20 w-64 h-64 rounded-full bg-darkblue-100 opacity-20 blur-3xl"></div>
        <div className="absolute bottom-10 left-10 w-96 h-96 rounded-full bg-red-100 opacity-20 blur-3xl"></div>
        
        {/* Additional decorative elements */}
        <div className="absolute top-40 left-1/4 w-32 h-32 rounded-full bg-darkblue-50 opacity-15 blur-xl"></div>
        <div className="absolute bottom-40 right-1/4 w-48 h-48 rounded-full bg-red-50 opacity-15 blur-xl"></div>
        
        {/* Subtle dot pattern overlay */}
        <div className="absolute inset-0 opacity-3 bg-[linear-gradient(135deg,#333_1px,transparent_1px),linear-gradient(45deg,#333_1px,transparent_1px)] [background-size:40px_40px]"></div>
      </div>
    </>
  );
};

export default memo(HeroBackground);
