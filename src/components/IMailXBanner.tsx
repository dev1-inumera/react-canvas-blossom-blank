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
    <section
      ref={ref}
      className={cn(
        "w-full bg-[#2d3263] text-white transition-all duration-700",
        inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
      )}
    >
      <div className="max-w-7xl mx-auto px-6 md:px-12 py-24">
        <div className="flex flex-col md:flex-row items-center justify-between gap-12">
          {/* LEFT TEXT BLOCK */}
          <div className="md:w-1/2">
            <h1 className="text-4xl md:text-6xl font-extrabold tracking-tight leading-tight mb-6">
              Boostez votre croissance <br />
              avec <span className="text-cyan-400">i-prospect</span>
            </h1>
            <p className="text-lg md:text-xl text-white/90 mb-8 max-w-xl">
              Génération de leads, automatisation marketing, et conversion ultra-efficace dans une seule plateforme. Développez votre business, sans friction.
            </p>
            <div className="flex gap-4 flex-wrap">
              <Link
                to="/i-prospect"
                className="inline-flex items-center gap-2 px-6 py-3 rounded-md bg-white text-slate-900 font-semibold hover:bg-gray-100 transition"
              >
                Commencer maintenant
                <ArrowRight size={20} className="transition-transform group-hover:translate-x-1" />
              </Link>

            </div>
          </div>

          {/* RIGHT IMAGE */}
          <div className="md:w-1/2 flex justify-center relative">
            <img
              src="/lovable-uploads/pc1.png"
              alt="Analyse de performance commerciale"
              className="w-full max-w-s h-auto object-contain z-10 relative"
            />
            {/* Optional background SVG flare for DigitalOcean vibe */}
            <div className="absolute -z-10 top-[-50px] right-[-80px] w-[300px] h-[300px] bg-cyan-500 opacity-20 blur-3xl rounded-full" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default IMailXBanner;
