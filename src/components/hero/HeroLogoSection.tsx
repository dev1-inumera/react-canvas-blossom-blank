
import React, { memo } from "react";

const HeroLogoSection: React.FC = () => {
  return (
    <div
      className="relative lg:pl-8 opacity-0 animate-fade-in"
      style={{ animationDelay: "0.6s", animationFillMode: "forwards" }}
    >
      <div className="relative rounded-2xl overflow-hidden">
        <div className="aspect-[4/3] relative overflow-hidden">
          <div className="absolute inset-0 flex items-center justify-center z-10">
            <img
              src="/lovable-uploads/b3c33571-dd4d-4269-a516-f847893fdd7f.png"
              alt="i-numera logo"
              className="w-auto max-w-[95%] h-auto"
              loading="eager"
              decoding="async"
              fetchPriority="high"
              width="1500"
              height="600"
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

export default memo(HeroLogoSection);
