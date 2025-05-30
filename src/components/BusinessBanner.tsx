
import React from 'react';
import { useInView } from 'react-intersection-observer';
import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import { cn } from '@/lib/utils';

const BusinessBanner = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <div
      ref={ref}
      className={cn(
        "w-full mx-auto mb-6 md:mb-7 overflow-hidden shadow-2xl transition-all duration-700",
        inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
      )}
    >
      <div className="relative">
        {/* Background */}
        <div className="absolute inset-0 bg-gradient-to-r from-[rgb(255, 255, 255)] to-[#0f172a] z-0" />

        <div className="relative z-10 px-4 sm:px-6 md:px-12 lg:px-20 py-8 md:py-16 lg:py-24 text-white">
          <div className="max-w-7xl mx-auto flex flex-col md:flex-row-reverse items-center justify-between gap-8 md:gap-12">
            {/* Texte à droite */}
            <div className="w-full md:w-1/2 text-center md:text-left">
              <span className="inline-block px-3 md:px-4 py-1 rounded-full bg-[#e53935] text-xs font-semibold tracking-wide mb-4 md:mb-6">
                OPPORTUNITÉ
              </span>
              <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl text-[#183782] font-extrabold leading-tight mb-4 md:mb-6">
                Lancez votre business de A à Z avec <span className="text-[#e53935]">in-commerce</span>
              </h2>
              <p className="text-base md:text-lg lg:text-xl text-[#183782] mb-6 md:mb-8 leading-relaxed">
                i-numera vous accompagne dans chaque étape pour créer une entreprise rentable, même si vous partez de zéro. Idéal pour les entrepreneurs motivés.
              </p>
              <Link
                to="/in-commerce"
                className="inline-flex items-center px-6 md:px-8 py-3 md:py-4 bg-[#e53935] hover:bg-[#e53935] transition rounded-full text-white text-base md:text-lg font-medium group"
              >
                Commencer l'aventure
                <ArrowRight className="ml-2 md:ml-3 transition-transform group-hover:translate-x-1" size={18} />
              </Link>
            </div>

            {/* Illustration à gauche */}
            <div className="w-full md:w-1/2 flex justify-center order-first md:order-none">
              <div className="p-4 md:p-8 rounded-3xl backdrop-blur-lg">
                <img
                  src="/lovable-uploads/shop1.png"
                  alt="Créer votre business"
                  className="w-full max-w-xs sm:max-w-sm md:max-w-md h-auto"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BusinessBanner;
