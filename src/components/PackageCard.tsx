
import React from "react";
import { ArrowRight, Award } from "lucide-react";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Link } from "react-router-dom";

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

// Définir un objet de mappage des couleurs pour chaque type
const typeColors = {
  Artisans: "bg-orange-200 hover:bg-orange-300 text-orange-800",
  Commerçants: "bg-lime-200 hover:bg-lime-300 text-lime-800",
  Professionnel: "bg-[#2dd4bf] hover:bg-[#14b8a6] text-[#115e59]",
  Entreprise: "bg-yellow-200 hover:bg-yellow-300 text-yellow-800",
};

// Fonction pour obtenir la couleur du badge en fonction du type
function getBadgeColorByType(type) {
  return typeColors[type] || "bg-gray-200 hover:bg-gray-300 text-gray-800";
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
  // Use the site's color scheme with blue and red
  const cardBgColor = isPrimary
    ? "bg-transparent"
    : "bg-transparent";

  const cardTextColor = isPrimary ? "text-white" : "text-white";
  const mutedTextColor = isPrimary ? "text-white/80" : "text-white/80";
  // Obtenir la couleur du badge en fonction du type
  const badgeColor = getBadgeColorByType(type);
  const buttonColor = isPrimary
    ? "bg-white text-darkblue-700 hover:bg-gray-100"
    : "bg-red-500 hover:bg-red-600 text-white";

  const accordionTriggerColor = isPrimary
    ? "text-white text-left hover:text-white/90 hover:no-underline"
    : "text-white/90 text-left hover:text-white/90 hover:no-underline";

  const accordionBorderColor = isPrimary
    ? "border-white/20"
    : "border-gray-200";

  const premiumBadgeColor = isPrimary
    ? "bg-red-500/90 hover:bg-red-500 text-white text-lg py-2 px-4 flex items-center"
    : "bg-red-500 hover:bg-red-600 text-white text-lg py-2 px-4 flex items-center";

  return (
    <Card
      className="overflow-hidden w-full rounded-xl shadow-md hover:shadow-lg transition-all duration-300 relative h-full"
      style={{
        backgroundImage: `url(${image})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
      }}
    >
      {/* Dark overlay to ensure text readability */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/50 via-black/30 to-black/50 z-0"></div>

      {/* Card header */}
      <div className="p-6 pb-4 relative z-10">
        <div className="flex items-center justify-between mb-4">
          <Badge className={badgeColor}>{type}</Badge>
          <Badge className={badgeColor}>Essentiel</Badge>
        </div>
        <h3 className={`text-2xl font-bold text-white mb-6`}>{title}</h3>
      </div>

      {/* Card content with accordion - with translucent background */}
      <div className={`p-6 pt-0 ${cardTextColor} relative z-10 ${cardBgColor} backdrop-filter text-left backdrop-blur-sm rounded-t-3xl mt-4`}>
        <Accordion type="single" collapsible className="w-full">
          {features.map((feature, index) => {
            // Split the feature into title and description at the first colon
            const parts = feature.split(": ");
            const title = parts[0];
            const description = parts.length > 1 ? parts[1] : "";

            return (
              <AccordionItem
                key={index}
                value={`item-${index}`}
                className={accordionBorderColor}
              >
                <AccordionTrigger className={accordionTriggerColor}>
                  {title}
                </AccordionTrigger>
                <AccordionContent className={mutedTextColor}>
                  {description}
                </AccordionContent>
              </AccordionItem>
            );
          })}
        </Accordion>

        {hasPremium && (
          <div className="mt-6 pt-6 border-t border-gray-200 dark:border-gray-700">
            <div className="flex items-center justify-between mb-4">
              <Badge className={premiumBadgeColor}>
                <Award size={22} className="mr-3" />
                Premium
              </Badge>
            </div>
            <Accordion type="single" collapsible className="w-full">
              {premiumFeatures.map((feature, index) => {
                const parts = feature.split(": ");
                const title = parts[0];
                const description = parts.length > 1 ? parts[1] : "";

                return (
                  <AccordionItem
                    key={`premium-${index}`}
                    value={`premium-${index}`}
                    className={accordionBorderColor}
                  >
                    <AccordionTrigger className={accordionTriggerColor}>
                      {title}
                    </AccordionTrigger>
                    <AccordionContent className={mutedTextColor}>
                      {description}
                    </AccordionContent>
                  </AccordionItem>
                );
              })}
            </Accordion>
          </div>
        )}

        <div className="mt-8">
          <Link to="/contact">
            <Button className={`w-full group ${buttonColor}`}>
              Je me lance !
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
