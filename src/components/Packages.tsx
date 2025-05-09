
import React from 'react';
import { useInView } from 'react-intersection-observer';
import { cn } from '@/lib/utils';
import PackageCard from './PackageCard';
import { artisanPackage, commercantPackage, crmPackage, erpPackage } from '@/data/packageData';
import { partnerLogos } from '@/data/referenceData';

const Packages = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <section className="py-16 bg-gray-50" id="packages">
      <div className="container px-4 md:px-6 mx-auto">
        <div 
          ref={ref}
          className={cn(
            "max-w-3xl mx-auto text-center mb-12",
            inView ? "opacity-100" : "opacity-0"
          )}
          style={{ 
            transition: 'opacity 700ms cubic-bezier(0.4, 0, 0.2, 1)'
          }}
        >
          <div className="inline-block rounded-full px-3 py-1 text-sm bg-darkblue-50 text-darkblue-700 mb-4">
            Nos offres
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-darkblue-900 tracking-tight mb-4">
            Des solutions adaptées à votre activité
          </h2>
          <p className="text-xl text-darkblue-700/80">
            Découvrez nos packs essentiels pour développer votre présence en ligne
          </p>
        </div>

        {/* Grille de packages plus espacée et mieux organisée */}
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
          <div className={cn(
            inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4",
            "transition-all duration-700 delay-100"
          )}>
            <PackageCard {...artisanPackage} />
          </div>
          <div className={cn(
            inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4",
            "transition-all duration-700 delay-200"
          )}>
            <PackageCard {...commercantPackage} />
          </div>
          <div className={cn(
            inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4",
            "transition-all duration-700 delay-300"
          )}>
            <PackageCard {...crmPackage} />
          </div>
          <div className={cn(
            inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4",
            "transition-all duration-700 delay-400"
          )}>
            <PackageCard {...erpPackage} />
          </div>
        </div>
        
        {/* Section logos partenaires */}
        <div className={cn(
          "mt-16 pt-12 border-t border-gray-200",
          inView ? "opacity-100" : "opacity-0"
        )}
        style={{ transition: 'opacity 1000ms cubic-bezier(0.4, 0, 0.2, 1)', transitionDelay: '700ms' }}>
          <div className="text-center mb-8">
            <p className="text-darkblue-700 font-medium">Ils nous font confiance</p>
          </div>
          
          <div className="flex flex-wrap justify-center items-center gap-8 md:gap-12">
            {partnerLogos.map((partner, index) => (
              <div 
                key={index}
                className="h-8 grayscale opacity-70 hover:grayscale-0 hover:opacity-100 transition-all duration-300"
              >
                <img 
                  src={partner.image} 
                  alt={partner.name} 
                  className="h-full object-contain" 
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Packages;
