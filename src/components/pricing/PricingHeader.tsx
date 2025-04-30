
import React from 'react';
import { useInView } from 'react-intersection-observer';
import { cn } from '@/lib/utils';

const PricingHeader = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
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
      <div className="inline-block rounded-full px-3 py-1 text-sm bg-darkblue-100 text-darkblue-900 mb-4">
        Tarifs transparents
      </div>
      <h1 className="text-3xl md:text-5xl font-bold text-darkblue-900 tracking-tight mb-6">
        Des solutions adaptées à votre budget
      </h1>
      <p className="text-xl text-darkblue-700/80">
        Découvrez nos offres pensées pour répondre aux besoins de chaque entrepreneur.
      </p>
    </div>
  );
};

export default PricingHeader;
