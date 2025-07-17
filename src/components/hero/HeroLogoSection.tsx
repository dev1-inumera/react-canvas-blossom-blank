
import React, { memo } from "react";

const HeroLogoSection: React.FC = () => {
  return (
    <div
      className="relative opacity-0 animate-fade-in"
      style={{ animationDelay: "0.6s", animationFillMode: "forwards" }}
    >
      <div className="relative overflow-hidden p-2 sm:p-3 lg:p-4 rounded-lg bg-white/30 backdrop-blur-sm shadow-sm border border-gray-100">
        <div className="flex items-center justify-center">
          <img
            src="/src/assets/flower-logo.png"
            alt="Logo fleur"
            className="w-auto max-w-[80px] sm:max-w-[100px] lg:max-w-[120px] h-auto"
            loading="eager"
            decoding="async"
            width="120"
            height="48"
          />
        </div>
      </div>
      
      {/* Subtle decorative element */}
      <div className="absolute -top-1 sm:-top-2 -right-1 sm:-right-2 w-3 h-3 sm:w-4 sm:h-4 bg-red-400 rounded-full opacity-50"></div>
    </div>
  );
};

export default memo(HeroLogoSection);
