
import React from 'react';
import { useInView } from 'react-intersection-observer';
import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import { cn } from '@/lib/utils';

const IMailXBanner = () => {
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
        {/* Flat gradient background instead of image */}
        <div 
          className="absolute inset-0 bg-gradient-to-r from-darkblue-800 to-darkblue-600 z-10"
        />
        
        {/* Content */}
        <div className="relative z-20 px-6 py-16 md:px-16 md:py-20 text-white">
          <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center">
            <div className="md:w-1/2 mb-12 md:mb-0 md:pr-12">
              <span className="inline-block px-4 py-1 rounded-full bg-red-600 text-white text-xs font-medium mb-6">
                NOUVEAU
              </span>
              <h2 className="text-4xl md:text-5xl font-bold mb-6 leading-tight">
                Découvrez i-prospect : Votre solution de boost de chiffre d'affaires
              </h2>
              <p className="text-xl text-white/90 mb-8 max-w-2xl">
                Maximisez vos revenus, convertissez plus de prospects et développez votre activité avec notre solution professionnelle complète de génération de leads et d'automatisation marketing.
              </p>
              <Link
                to="/i-prospect"
                className="inline-flex items-center justify-center px-8 py-4 rounded-full bg-red-600 hover:bg-red-700 text-white font-medium transition-all group text-lg"
              >
                Boostez votre activité
                <ArrowRight size={20} className="ml-3 transition-transform group-hover:translate-x-1" />
              </Link>
            </div>
            <div className="md:w-1/2 flex justify-center">
              {/* New image */}
              <img 
                src="/lovable-uploads/0d5b6473-7f50-499c-b2ad-2ebefb601e49.png" 
                alt="Analyse de performance commerciale" 
                className="w-full max-w-md h-auto object-contain animate-float"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default IMailXBanner;
