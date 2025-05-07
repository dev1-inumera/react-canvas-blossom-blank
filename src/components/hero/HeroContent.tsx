
import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";

// Promotional offers text that will rotate
const promotionalOffers = [
  {
    tag: "Création de sites web professionnels",
    title: "Sites web <span class='text-red-500'>performants</span> et optimisés pour votre entreprise",
    description: "Des sites vitrines et e-commerce qui convertissent vos visiteurs en clients.",
  },
  {
    tag: "Solutions e-commerce complètes",
    title: "Développez votre <span class='text-red-500'>activité en ligne</span> avec nos solutions e-commerce",
    description: "Une boutique en ligne clé en main pour vendre vos produits et services 24h/24.",
  },
  {
    tag: "Référencement SEO",
    title: "Améliorez votre <span class='text-red-500'>visibilité</span> sur les moteurs de recherche",
    description: "Attirez plus de clients grâce à nos stratégies de référencement naturel.",
  },
  {
    tag: "Applications sur mesure",
    title: "Applications <span class='text-red-500'>personnalisées</span> pour booster votre productivité",
    description: "Des solutions digitales adaptées aux besoins spécifiques de votre entreprise.",
  }
];

const HeroContent: React.FC = () => {
  const [currentOfferIndex, setCurrentOfferIndex] = useState(0);
  
  // Effect for rotating offers every 7 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentOfferIndex(prevIndex => 
        prevIndex === promotionalOffers.length - 1 ? 0 : prevIndex + 1
      );
    }, 7000);
    
    return () => clearInterval(interval);
  }, []);
  
  const currentOffer = promotionalOffers[currentOfferIndex];
  
  return (
    <div className="flex flex-col space-y-6 min-h-[320px]"> {/* Fixed height container for stability */}
      <div className="space-y-4 max-w-[640px]">
        {/* Animated tag */}
        <div
          key={`tag-${currentOfferIndex}`}
          className="inline-block rounded-full px-3 py-1 text-sm bg-darkblue-50/90 text-darkblue-900 backdrop-blur-sm opacity-0 animate-fade-in"
          style={{
            animationDelay: "0.1s",
            animationFillMode: "forwards",
          }}
        >
          {currentOffer.tag}
        </div>
        
        {/* Animated title */}
        <h1
          key={`title-${currentOfferIndex}`}
          className="text-3xl md:text-4xl lg:text-5xl font-bold tracking-tighter text-white leading-tight opacity-0 animate-fade-in"
          style={{
            animationDelay: "0.2s",
            animationFillMode: "forwards",
          }}
          dangerouslySetInnerHTML={{ __html: currentOffer.title }}
        />
        
        {/* Animated description */}
        <p
          key={`desc-${currentOfferIndex}`}
          className="text-lg text-white/90 max-w-[600px] opacity-0 animate-fade-in"
          style={{
            animationDelay: "0.3s",
            animationFillMode: "forwards",
          }}
        >
          {currentOffer.description}
        </p>
      </div>
      
      {/* Service highlights */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-3 opacity-0 animate-fade-in"
        style={{
          animationDelay: "0.5s",
          animationFillMode: "forwards",
        }}>
        <div className="bg-white/10 p-3 rounded-lg backdrop-blur-sm border border-white/10">
          <h3 className="text-lg font-semibold text-white">Sites web professionnels</h3>
        </div>
        <div className="bg-white/10 p-3 rounded-lg backdrop-blur-sm border border-white/10">
          <h3 className="text-lg font-semibold text-white">Marketing digital</h3>
        </div>
      </div>
      
      {/* CTA buttons */}
      <div
        className="flex flex-col sm:flex-row gap-4 opacity-0 animate-fade-in"
        style={{ animationDelay: "0.6s", animationFillMode: "forwards" }}
      >
        <Link
          to="/expertise"
          className="inline-flex items-center justify-center px-5 py-2.5 rounded-full text-white bg-red-600 hover:bg-red-700 transition-all font-medium group"
        >
          Découvrez nos prestations
          <ArrowRight
            size={16}
            className="ml-2 transition-transform group-hover:translate-x-1"
          />
        </Link>
        <Link
          to="/devis"
          className="inline-flex items-center justify-center px-5 py-2.5 rounded-full text-white bg-darkblue-800 hover:bg-darkblue-900 transition-all font-medium group"
        >
          Demander un devis
          <ArrowRight
            size={16}
            className="ml-2 transition-transform group-hover:translate-x-1"
          />
        </Link>
      </div>
    </div>
  );
};

export default React.memo(HeroContent);
