
import React from "react";
import { useCookieConsent, CookieCategory } from "@/contexts/CookieConsentContext";
import { Switch } from "@/components/ui/switch";
import { Label } from "@/components/ui/label";

interface CookieCategoryInfo {
  id: CookieCategory;
  title: string;
  description: string;
  required?: boolean;
}

const cookieCategories: CookieCategoryInfo[] = [
  {
    id: "necessary",
    title: "Cookies nécessaires",
    description: "Ces cookies sont nécessaires au bon fonctionnement du site et ne peuvent pas être désactivés.",
    required: true,
  },
  {
    id: "preferences",
    title: "Cookies de préférences",
    description: "Ces cookies permettent de mémoriser vos préférences et de personnaliser votre expérience.",
  },
  {
    id: "analytics",
    title: "Cookies analytiques",
    description: "Ces cookies nous aident à comprendre comment les visiteurs interagissent avec le site.",
  },
  {
    id: "marketing",
    title: "Cookies marketing",
    description: "Ces cookies sont utilisés pour suivre les visiteurs sur les sites web afin d'afficher des publicités pertinentes.",
  },
];

const CookiePreferences = () => {
  const { cookieConsent, updateCookieConsent } = useCookieConsent();

  const handleToggle = (category: CookieCategory) => {
    if (category === "necessary") return; // Can't toggle necessary cookies
    
    updateCookieConsent({
      [category]: !cookieConsent[category],
    });
  };

  return (
    <div className="space-y-6">
      {cookieCategories.map((category) => (
        <div key={category.id} className="flex flex-col space-y-2">
          <div className="flex items-center justify-between">
            <div className="space-y-0.5">
              <Label htmlFor={`cookie-${category.id}`} className="text-base font-medium">
                {category.title}
                {category.required && <span className="ml-2 text-sm text-muted-foreground">(Requis)</span>}
              </Label>
              <p className="text-sm text-muted-foreground">{category.description}</p>
            </div>
            <Switch
              id={`cookie-${category.id}`}
              checked={cookieConsent[category.id]}
              onCheckedChange={() => handleToggle(category.id)}
              disabled={category.required}
            />
          </div>
        </div>
      ))}
    </div>
  );
};

export default CookiePreferences;
