
import React, { memo } from "react";

const HeroLogoSection: React.FC = () => {
  return (
    <div
      className="relative opacity-0 animate-fade-in"
      style={{ animationDelay: "0.6s", animationFillMode: "forwards" }}
    >
      <div className="relative overflow-hidden">
        <div className="flex items-center justify-center">
          <img
            src="/lovable-uploads/b3c33571-dd4d-4269-a516-f847893fdd7f.png"
            alt="i-numera logo"
            className="w-auto max-w-[120px] h-auto"
            loading="eager"
            decoding="async"
            width="120"
            height="48"
          />
        </div>
      </div>
    </div>
  );
};

export default memo(HeroLogoSection);
