
import React from 'react';
import { useInView } from 'react-intersection-observer';
import { cn } from '@/lib/utils';

const FaqHeader: React.FC = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <div className="bg-darkblue-50 pt-32 pb-16">
      <div className="container px-4 md:px-6">
        <div 
          ref={ref}
          className={cn(
            "max-w-3xl mx-auto text-center",
            inView ? "opacity-100" : "opacity-0"
          )}
          style={{ 
            transition: 'opacity 700ms cubic-bezier(0.4, 0, 0.2, 1)'
          }}
        >
          <h1 className="text-4xl md:text-5xl font-bold text-darkblue-900 tracking-tight mb-4">
            Vos Questions sur nos offres Digitales pour les entreprises locales
          </h1>
          <p className="text-xl text-darkblue-700">
            Nous répondons à toutes vos questions sur la création de sites internet, le référencement, et bien plus encore.
          </p>
        </div>
      </div>
    </div>
  );
};

export default FaqHeader;
