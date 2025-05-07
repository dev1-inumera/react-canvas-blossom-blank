
import React from "react";

const HeroLogoSection: React.FC = () => {
  return (
    <div
      className="relative opacity-0 animate-fade-in"
      style={{ animationDelay: "0.4s", animationFillMode: "forwards" }}
    >
      {/* Moved up and reduced margin */}
      <div className="relative mb-4 -mt-4">
        <div className="relative overflow-hidden">
          <div className="flex items-start justify-start">
            <img
              src="/lovable-uploads/b3c33571-dd4d-4269-a516-f847893fdd7f.png"
              alt="i-numera logo"
              /* Reduced size */
              className="w-auto max-w-[70%] h-auto"
              loading="eager"
              decoding="async"
              fetchPriority="high"
              /* Reduced width */
              width="900"
              height="360"
            />
          </div>
        </div>
      </div>
      
      {/* Simplified decorative elements */}
      <div className="absolute -bottom-4 -left-4 w-12 h-12 bg-red-500 rounded-full blur-lg opacity-10"></div>
    </div>
  );
};

export default React.memo(HeroLogoSection);
