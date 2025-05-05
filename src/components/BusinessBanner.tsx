
import React from 'react';
import { useInView } from 'react-intersection-observer';
import { ArrowRight, Briefcase } from 'lucide-react';
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
        "w-full max-w-[95%] mx-auto my-16 rounded-2xl overflow-hidden shadow-xl transition-all duration-700",
        inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
      )}
    >
      <div className="relative">
        {/* Gradient background */}
        <div 
          className="absolute inset-0 bg-gradient-to-r from-darkblue-600 to-darkblue-800 z-10"
        />
        
        {/* Content */}
        <div className="relative z-20 px-6 py-16 md:px-16 md:py-20 text-white">
          <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center">
            <div className="md:w-1/2 mb-12 md:mb-0 md:pr-12">
              <span className="inline-block px-4 py-1 rounded-full bg-red-600 text-white text-xs font-medium mb-6">
                OPPORTUNITÉ
              </span>
              <h2 className="text-4xl md:text-5xl font-bold mb-6 leading-tight">
                Devenez votre propre patron : i-numera créer votre business de A à Z
              </h2>
              <p className="text-xl text-white/90 mb-8 max-w-2xl">
                Lancez votre propre entreprise avec notre accompagnement complet. De l'idée à la mise en œuvre, nous vous guidons à chaque étape pour créer une activité rentable et durable.
              </p>
              <Link
                to="/contact"
                className="inline-flex items-center justify-center px-8 py-4 rounded-full bg-red-600 hover:bg-red-700 text-white font-medium transition-all group text-lg"
              >
                Commencer l'aventure
                <ArrowRight size={20} className="ml-3 transition-transform group-hover:translate-x-1" />
              </Link>
            </div>
            <div className="md:w-1/2 flex justify-center">
              <div className="bg-white/10 p-6 rounded-2xl backdrop-blur-sm">
                <Briefcase size={160} className="text-white/80 animate-float" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BusinessBanner;
