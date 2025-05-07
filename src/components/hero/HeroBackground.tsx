
import React from "react";
import { Briefcase, Globe, ShoppingCart, Users, Store } from "lucide-react";

const HeroBackground: React.FC = () => {
  return (
    <>
      {/* Simplified Background */}
      <div className="absolute inset-0 -z-10 bg-darkblue-900">
        {/* Subtle pattern overlay */}
        <div className="absolute inset-0 opacity-10" 
            style={{ 
              backgroundImage: "url(\"data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.15'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E\")",
            }}
        ></div>
        
        {/* Simple, lighter abstract shape */}
        <div className="absolute top-[10%] left-[15%] w-32 h-32 rounded-full bg-darkblue-800 blur-2xl opacity-30"></div>
        <div className="absolute bottom-[20%] right-[10%] w-40 h-40 rounded-full bg-red-500/10 blur-2xl"></div>
        
        {/* Decorative Icons - positioned across the background with improved performance */}
        <div className="absolute top-[20%] left-[40%] text-white/8">
          <Briefcase size={60} strokeWidth={1} />
        </div>
        <div className="absolute top-[60%] left-[20%] text-white/8">
          <Globe size={55} strokeWidth={1} />
        </div>
        <div className="absolute top-[30%] right-[30%] text-white/8">
          <Store size={50} strokeWidth={1} />
        </div>
        <div className="absolute bottom-[30%] left-[35%] text-white/8">
          <ShoppingCart size={45} strokeWidth={1} />
        </div>
        <div className="absolute top-[70%] right-[25%] text-white/8">
          <Users size={55} strokeWidth={1} />
        </div>
      </div>

      {/* Simplified Gradient Overlay */}
      <div className="absolute inset-y-0 left-0 w-[60%] bg-gradient-to-r from-white/40 to-transparent z-10 pointer-events-none"></div>
    </>
  );
};

export default React.memo(HeroBackground);
