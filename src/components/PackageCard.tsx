
import React, { useState } from "react";
import { ArrowRight, ChevronDown, ChevronUp, Check } from "lucide-react";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Link } from "react-router-dom";
import { Collapsible, CollapsibleContent, CollapsibleTrigger } from "@/components/ui/collapsible";

export interface PackageCardProps {
  type: string;
  title: string;
  price: string;
  setupFee: string;
  features: string[];
  image: string;
  isPrimary?: boolean;
  hasPremium?: boolean;
  premiumFeatures?: string[];
}

// Définition des couleurs par type
const typeColors = {
  Artisans: "bg-orange-100 text-orange-800 border-orange-200",
  Commerçants: "bg-lime-100 text-lime-800 border-lime-200",
  Professionnel: "bg-cyan-100 text-cyan-800 border-cyan-200",
  Entreprise: "bg-yellow-100 text-yellow-800 border-yellow-200",
};

// Fonction pour obtenir la couleur du badge en fonction du type
function getBadgeColorByType(type) {
  return typeColors[type] || "bg-gray-100 text-gray-800 border-gray-200";
}

const PackageCard = ({
  type,
  title,
  features,
  image,
  isPrimary = false,
  hasPremium = false,
  premiumFeatures = [],
}: PackageCardProps) => {
  const [isOpen, setIsOpen] = useState(false);
  
  // Style épuré sans ombres et avec couleurs douces
  const badgeColor = getBadgeColorByType(type);
  const iconColor = isPrimary ? "text-white" : "text-darkblue-700";
  
  // Images/illustrations plates au lieu de photos réalistes avec arrière-plan
  const illustrations = {
    Artisans: "https://img.freepik.com/vecteurs-libre/equipe-marketing-numerique-creant-page-destination-page-accueil_74855-10590.jpg?t=st=1746778762~exp=1746782362~hmac=1f53ab4e1fe129d4b1632f632b6fb98cfc79c1fe2aeed447ce525d6f3c5f1535&w=1380",
    Commerçants: "https://img.freepik.com/vecteurs-libre/concept-strategie-entreprise-design-plat-dessine-main_23-2149190166.jpg?t=st=1746779211~exp=1746782811~hmac=56496b8482e61f8bb6e9cef320ba3c7b8d5e6d48133cadee3de608d8ce70f77b&w=1380",
    Professionnel: "https://img.freepik.com/vecteurs-libre/illustration-crm-isometrique_52683-83950.jpg?t=st=1746779325~exp=1746782925~hmac=3ea03d3af436dd7da7c46419cc1140f83435053479fa970f89cb1458c483e936&w=1380",
    Entreprise: "https://img.freepik.com/vecteurs-libre/illustration-erp-degrade_23-2149368728.jpg?t=st=1746779371~exp=1746782971~hmac=cd0c20508057095498e97046af073a1b0effaeff0c4158fc01a8efc9813bcc36&w=1380"
  };
  
  const defaultImage = illustrations[type] || image;

  return (
    <Card
      className="rounded-xl overflow-hidden border transition-all duration-200 bg-white h-full flex flex-col"
    >
      {/* En-tête de la carte avec illustration stylisée */}
      <div className="relative aspect-[16/9] overflow-hidden">
        <div 
          className="w-full h-full bg-cover bg-center"
          style={{ backgroundImage: `url(${defaultImage})` }}
        >
          <div className="absolute inset-0 bg-gradient-to-b from-black/30 to-black/30 flex flex-col justify-end p-4">
            <div className="flex justify-between items-start">
              <Badge className={`${badgeColor} mb-2`}>{type}</Badge>
              {isPrimary && (
                <Badge className="bg-red-100 text-red-800 border-red-200">
                  Populaire
                </Badge>
              )}
            </div>
            <h3 className="text-xl font-bold text-white mb-2">{title}</h3>
          </div>
        </div>
      </div>
      
      {/* Contenu principal concis */}
      <div className="p-4 flex-grow flex flex-col">
        {/* Affichage des 3 principales fonctionnalités */}
        <ul className="mb-4 space-y-2">
          {features.slice(0, 3).map((feature, idx) => {
            const parts = feature.split(": ");
            const title = parts[0];
            
            return (
              <li key={idx} className="flex items-start">
                <span className="mr-2 mt-0.5 flex-shrink-0 rounded-full p-1 bg-darkblue-50 text-darkblue-600">
                  <Check size={12} />
                </span>
                <span className="text-sm text-darkblue-800">{title}</span>
              </li>
            );
          })}
        </ul>
        
        {/* Bouton pour voir plus de détails */}
        <Collapsible 
          open={isOpen} 
          onOpenChange={setIsOpen}
          className="mb-4"
        >
          <CollapsibleTrigger asChild>
            <Button 
              variant="outline" 
              size="sm" 
              className="text-xs w-full flex justify-between items-center text-darkblue-600 border-darkblue-100"
            >
              {isOpen ? "Voir moins" : "Voir toutes les fonctionnalités"}
              {isOpen ? <ChevronUp size={14} /> : <ChevronDown size={14} />}
            </Button>
          </CollapsibleTrigger>
          
          <CollapsibleContent className="pt-3">
            <ul className="space-y-2">
              {features.slice(3).map((feature, idx) => {
                const parts = feature.split(": ");
                const title = parts[0];
                const description = parts.length > 1 ? parts[1] : "";
                
                return (
                  <li key={idx + 3} className="flex items-start">
                    <span className="mr-2 mt-0.5 flex-shrink-0 rounded-full p-1 bg-darkblue-50 text-darkblue-600">
                      <Check size={12} />
                    </span>
                    <div>
                      <span className="text-sm text-darkblue-800">{title}</span>
                      {description && (
                        <p className="text-xs text-darkblue-500 mt-0.5">{description}</p>
                      )}
                    </div>
                  </li>
                );
              })}
              
              {hasPremium && (
                <>
                  <div className="border-t border-darkblue-100 my-3 pt-3">
                    <Badge className="bg-red-100 text-red-800 border-red-200 mb-2">Premium</Badge>
                  </div>
                  
                  {premiumFeatures.map((feature, idx) => {
                    const parts = feature.split(": ");
                    const title = parts[0];
                    const description = parts.length > 1 ? parts[1] : "";
                    
                    return (
                      <li key={`premium-${idx}`} className="flex items-start">
                        <span className="mr-2 mt-0.5 flex-shrink-0 rounded-full p-1 bg-red-50 text-red-600">
                          <Check size={12} />
                        </span>
                        <div>
                          <span className="text-sm text-darkblue-800">{title}</span>
                          {description && (
                            <p className="text-xs text-darkblue-500 mt-0.5">{description}</p>
                          )}
                        </div>
                      </li>
                    );
                  })}
                </>
              )}
            </ul>
          </CollapsibleContent>
        </Collapsible>
        
        {/* CTA principal */}
        <div className="mt-auto">
          <Link to="/contact" className="w-full">
            <Button 
              className={`w-full group ${isPrimary ? "bg-red-500 hover:bg-red-600" : "bg-darkblue-600 hover:bg-darkblue-700"} text-white`}
            >
              Je me lance 
              <ArrowRight
                size={16}
                className="ml-2 transition-transform group-hover:translate-x-1"
              />
            </Button>
          </Link>
        </div>
      </div>
    </Card>
  );
};

export default PackageCard;
