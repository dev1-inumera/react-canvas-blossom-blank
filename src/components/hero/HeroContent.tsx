
import React from "react";
import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import { ScrollArea } from "@/components/ui/scroll-area";

const HeroContent: React.FC = () => {
  return (
    <ScrollArea className="flex flex-col space-y-8 animate-fade-in h-full">
      <div className="space-y-5 max-w-[640px]">
        <div
          className="inline-block rounded-full px-3 py-1 text-sm bg-darkblue-50/90 text-darkblue-900 backdrop-blur-sm opacity-0 animate-fade-in"
          style={{
            animationDelay: "0.2s",
            animationFillMode: "forwards",
          }}
        >
          Solutions digitales pour professionnels
        </div>
        <h1
          className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tighter text-white leading-tight opacity-0 animate-fade-in"
          style={{
            animationDelay: "0.4s",
            animationFillMode: "forwards",
          }}
        >
          Des solutions numériques <span className="text-red-500">clés en main</span> pour booster votre activité
        </h1>
        <p
          className="text-xl text-white/90 max-w-[600px] opacity-0 animate-fade-in"
          style={{
            animationDelay: "0.6s",
            animationFillMode: "forwards",
          }}
        >
          Nous accompagnons les professionnels et TPE/PME dans leur transformation digitale avec des solutions simples et efficaces.
        </p>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 opacity-0 animate-fade-in"
          style={{
            animationDelay: "0.8s",
            animationFillMode: "forwards",
          }}>
        <div className="bg-white/10 p-4 rounded-lg backdrop-blur-sm border border-white/20">
          <h3 className="text-lg font-semibold text-white mb-2">Création de sites web</h3>
          <p className="text-white/80 text-sm">Des sites web performants et adaptés à votre métier</p>
        </div>
        <div className="bg-white/10 p-4 rounded-lg backdrop-blur-sm border border-white/20">
          <h3 className="text-lg font-semibold text-white mb-2">Marketing digital</h3>
          <p className="text-white/80 text-sm">Stratégies de croissance en ligne pour votre entreprise</p>
        </div>
      </div>
      
      <div
        className="flex flex-col sm:flex-row gap-4 sm:gap-6 opacity-0 animate-fade-in"
        style={{ animationDelay: "1s", animationFillMode: "forwards" }}
      >
        <Link
          to="/expertise"
          className="inline-flex items-center justify-center px-6 py-3 rounded-full text-white bg-red-600 hover:bg-red-700 transition-all font-medium hover:shadow-lg group"
        >
          Découvrez nos prestations
          <ArrowRight
            size={18}
            className="ml-2 transition-transform group-hover:translate-x-1"
          />
        </Link>
        <Link
          to="/devis"
          className="inline-flex items-center justify-center px-6 py-3 rounded-full text-white bg-darkblue-800 hover:bg-darkblue-900 transition-all font-medium hover:shadow-lg group"
        >
          Demander un devis
          <ArrowRight
            size={18}
            className="ml-2 transition-transform group-hover:translate-x-1"
          />
        </Link>
      </div>
    </ScrollArea>
  );
};

export default React.memo(HeroContent);
