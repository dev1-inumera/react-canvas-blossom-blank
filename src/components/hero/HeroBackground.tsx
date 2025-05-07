
import React from "react";
import { Briefcase, PenTool, Globe, ShoppingCart, Users } from "lucide-react";

const HeroBackground: React.FC = () => {
  return (
    <>
      {/* Static Abstract Background */}
      <div className="absolute inset-0 -z-10 bg-gradient-to-br from-darkblue-900 to-darkblue-800">
        {/* Abstract Shapes */}
        <div className="absolute top-[10%] left-[15%] w-64 h-64 rounded-full bg-darkblue-700/30 blur-3xl"></div>
        <div className="absolute bottom-[20%] right-[10%] w-80 h-80 rounded-full bg-red-500/20 blur-3xl"></div>
        <div className="absolute top-[40%] right-[20%] w-48 h-48 rounded-full bg-darkblue-600/20 blur-3xl"></div>
        
        {/* Decorative Icons - positioned across the background */}
        <div className="absolute top-[20%] left-[40%] text-white/10">
          <Briefcase size={80} />
        </div>
        <div className="absolute top-[60%] left-[20%] text-white/10">
          <PenTool size={60} />
        </div>
        <div className="absolute top-[30%] right-[30%] text-white/10">
          <Globe size={70} />
        </div>
        <div className="absolute bottom-[30%] left-[35%] text-white/10">
          <ShoppingCart size={65} />
        </div>
        <div className="absolute top-[70%] right-[25%] text-white/10">
          <Users size={75} />
        </div>
      </div>

      {/* White Gradient Overlay */}
      <div className="absolute inset-y-0 left-0 w-[63%] bg-gradient-to-r from-white via-darkblue/80 to-transparent z-10 pointer-events-none"></div>
    </>
  );
};

export default HeroBackground;
