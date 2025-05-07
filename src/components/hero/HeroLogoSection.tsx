
import React from "react";

const HeroLogoSection: React.FC = () => {
  return (
    <div
      className="relative opacity-0 animate-fade-in"
      style={{ animationDelay: "0.6s", animationFillMode: "forwards" }}
    >
      <div className="relative mb-8">
        <div className="relative overflow-hidden">
          <div className="flex items-start justify-start">
            <img
              src="/lovable-uploads/b3c33571-dd4d-4269-a516-f847893fdd7f.png"
              alt="i-numera logo"
              className="w-auto max-w-[80%] h-auto" 
              loading="eager"
              decoding="async"
              fetchPriority="high"
              width="1200"
              height="480"
            />
          </div>
        </div>
      </div>
      
      {/* Simplified decorative elements with less blur */}
      <div className="absolute -bottom-8 -left-8 w-16 h-16 bg-red-500 rounded-full blur-xl opacity-20"></div>
      <div className="absolute -top-8 -right-8 w-20 h-20 bg-darkblue-500 rounded-full blur-xl opacity-20"></div>
    </div>
  );
};

export default React.memo(HeroLogoSection);
