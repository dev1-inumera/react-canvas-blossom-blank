
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
        <div className="flex flex-col items-center justify-between gap-12">
          {/* TEXT BLOCK - Now at the top */}
          <div className="w-full max-w-2xl text-center">
            <h1 className="text-4xl md:text-5xl font-bold text-[#1f3128] mb-6">
              Le CRM simple et efficace pour conclure des affaires
            </h1>
            <p className="text-lg text-gray-700 mb-8">
              i-prospect simplifie le suivi du pipeline commercial, l'optimisation des leads, 
              la gestion des affaires à l'aide de l'IA et l'automatisation de l'ensemble de 
              votre processus de vente, libérant votre concentration pour la vente.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
              <Link
                to="/i-prospect"
                className="inline-flex items-center gap-2 px-6 py-3 rounded-md bg-[#6464e8] hover:bg-[#5252d4] text-white font-semibold transition"
              >
                Essai gratuit
                <ArrowRight size={20} className="transition-transform group-hover:translate-x-1" />
              </Link>
            </div>
            <p className="text-sm text-gray-600">
              Accès complet. Aucune carte de crédit requise.
            </p>
          </div>

          {/* DASHBOARD IMAGE - Now below the text */}
          <div className="w-full flex justify-center">
            <img
              src="/lovable-uploads/1240d80d-79a9-4b9f-bc71-7b837775d8a2.png"
              alt="Dashboard i-prospect"
              className="w-full max-w-5xl h-auto object-contain rounded-lg shadow-lg"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default IMailXBanner;
