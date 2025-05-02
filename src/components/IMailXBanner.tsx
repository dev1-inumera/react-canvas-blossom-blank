
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
        {/* Background with darker gradient overlay */}
        <div 
          className="absolute inset-0 bg-gradient-to-r from-darkblue-900/95 via-darkblue-800/90 to-darkblue-900/95 z-10"
          style={{
            backgroundImage: `url('https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?ixlib=rb-1.2.1&auto=format&fit=crop&w=1920&q=80')`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            mixBlendMode: 'multiply',
          }}
        />
        
        {/* Content */}
        <div className="relative z-20 px-6 py-20 md:px-16 md:py-24 text-white">
          <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center">
            <div className="md:w-2/3 mb-12 md:mb-0 md:pr-16">
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
            <div className="md:w-1/3 flex justify-center">
              <div className="w-80 h-80 relative">
                {/* Growth icon with animation */}
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="w-40 h-40 bg-white rounded-2xl p-6 shadow-lg animate-float">
                    <div className="w-full h-full flex items-center justify-center">
                      <svg xmlns="http://www.w3.org/2000/svg" width="80" height="80" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-red-600">
                        <path d="M22 12h-4l-3 9L9 3l-3 9H2" />
                      </svg>
                    </div>
                  </div>
                </div>
                {/* Floating particles - made larger and more visible */}
                <div className="absolute top-1/4 left-1/4 w-5 h-5 bg-red-500 rounded-full animate-float opacity-80" 
                     style={{ animationDelay: '0.5s', animationDuration: '3s' }}></div>
                <div className="absolute bottom-1/4 right-1/3 w-4 h-4 bg-darkblue-400 rounded-full animate-float opacity-80"
                     style={{ animationDelay: '1s', animationDuration: '4s' }}></div>
                <div className="absolute top-1/2 right-1/4 w-6 h-6 bg-white rounded-full animate-float opacity-60"
                     style={{ animationDelay: '1.5s', animationDuration: '3.5s' }}></div>
                {/* Additional particles */}
                <div className="absolute top-3/4 left-1/3 w-3 h-3 bg-red-400 rounded-full animate-float opacity-70"
                     style={{ animationDelay: '0.8s', animationDuration: '4.2s' }}></div>
                <div className="absolute bottom-1/3 left-1/2 w-4 h-4 bg-darkblue-300 rounded-full animate-float opacity-60"
                     style={{ animationDelay: '1.2s', animationDuration: '3.8s' }}></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default IMailXBanner;
