
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
        "w-full max-w-[95%] mx-auto my-12 rounded-2xl overflow-hidden shadow-lg transition-all duration-700",
        inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
      )}
    >
      <div className="relative">
        {/* Background with darker gradient overlay */}
        <div 
          className="absolute inset-0 bg-gradient-to-r from-darkblue-900/95 via-darkblue-800/90 to-darkblue-900/95 z-10"
          style={{
            backgroundImage: `url('https://images.unsplash.com/photo-1498050108023-c5249f4df085?ixlib=rb-1.2.1&auto=format&fit=crop&w=1920&q=80')`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            mixBlendMode: 'multiply',
          }}
        />
        
        {/* Content */}
        <div className="relative z-20 px-6 py-12 md:px-12 md:py-16 text-white">
          <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center">
            <div className="md:w-2/3 mb-8 md:mb-0 md:pr-12">
              <span className="inline-block px-4 py-1 rounded-full bg-red-600 text-white text-xs font-medium mb-4">
                NOUVEAU
              </span>
              <h2 className="text-3xl md:text-4xl font-bold mb-4">
                Découvrez i-mailX : Votre solution d'emailing professionnelle
              </h2>
              <p className="text-lg text-white/80 mb-6">
                Communiquez efficacement avec vos clients, automatisez vos campagnes et suivez vos performances en temps réel avec notre nouvelle solution d'emailing intégrée.
              </p>
              <Link
                to="/contact"
                className="inline-flex items-center justify-center px-6 py-3 rounded-full bg-red-600 hover:bg-red-700 text-white font-medium transition-all group"
              >
                En savoir plus
                <ArrowRight size={18} className="ml-2 transition-transform group-hover:translate-x-1" />
              </Link>
            </div>
            <div className="md:w-1/3 flex justify-center">
              <div className="w-64 h-64 relative">
                {/* Mail icon with animation */}
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="w-32 h-32 bg-white rounded-2xl p-4 shadow-lg animate-float">
                    <div className="w-full h-full flex items-center justify-center">
                      <svg xmlns="http://www.w3.org/2000/svg" width="64" height="64" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-red-600">
                        <rect width="20" height="16" x="2" y="4" rx="2" />
                        <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
                      </svg>
                    </div>
                  </div>
                </div>
                {/* Floating particles */}
                <div className="absolute top-1/4 left-1/4 w-3 h-3 bg-red-500 rounded-full animate-float opacity-70" 
                     style={{ animationDelay: '0.5s', animationDuration: '3s' }}></div>
                <div className="absolute bottom-1/4 right-1/3 w-2 h-2 bg-darkblue-400 rounded-full animate-float opacity-70"
                     style={{ animationDelay: '1s', animationDuration: '4s' }}></div>
                <div className="absolute top-1/2 right-1/4 w-4 h-4 bg-white rounded-full animate-float opacity-50"
                     style={{ animationDelay: '1.5s', animationDuration: '3.5s' }}></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default IMailXBanner;
