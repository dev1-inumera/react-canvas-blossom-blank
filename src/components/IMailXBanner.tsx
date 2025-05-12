
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
        "w-full bg-[#e9f7ea] py-20 transition-all duration-700",
        inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
      )}
    >
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <div className="flex flex-col md:flex-row items-center justify-between gap-12">
          {/* LEFT TEXT BLOCK */}
          <div className="md:w-1/2">
            <h1 className="text-4xl md:text-5xl font-bold text-[#1f3128] mb-6">
              Le CRM simple et efficace pour conclure des affaires
            </h1>
            <p className="text-lg text-gray-700 mb-8 max-w-xl">
              i-prospect simplifie le suivi du pipeline commercial, l'optimisation des leads, 
              la gestion des affaires à l'aide de l'IA et l'automatisation de l'ensemble de 
              votre processus de vente, libérant votre concentration pour la vente.
            </p>
            <div className="flex gap-4 flex-wrap">
              <Link
                to="/i-prospect"
                className="inline-flex items-center gap-2 px-6 py-3 rounded-md bg-[#6464e8] hover:bg-[#5252d4] text-white font-semibold transition"
              >
                Essai gratuit
                <ArrowRight size={20} className="transition-transform group-hover:translate-x-1" />
              </Link>
            </div>
            <p className="mt-4 text-sm text-gray-600">
              Accès complet. Aucune carte de crédit requise.
            </p>
          </div>

          {/* RIGHT IMAGE */}
          <div className="md:w-1/2 flex justify-center relative">
            <img
              src="/lovable-uploads/9c937f83-5dac-4c94-8488-b7ca77e29b96.png"
              alt="Interface i-prospect"
              className="w-full max-w-md h-auto object-contain z-10 relative rounded-lg shadow-lg"
            />
            {/* Background accent */}
            <div className="absolute -z-10 top-[-50px] right-[-80px] w-[300px] h-[300px] bg-[#bee3c2] opacity-30 blur-3xl rounded-full" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default IMailXBanner;
