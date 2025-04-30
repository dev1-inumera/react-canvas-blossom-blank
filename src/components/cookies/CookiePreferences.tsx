
import React from "react";
import { useCookieConsent, CookieCategory } from "@/contexts/CookieConsentContext";
import { Switch } from "@/components/ui/switch";
import { Label } from "@/components/ui/label";
import { ShieldCheck, Settings, BarChart3, ShoppingCart } from "lucide-react";

interface CookieCategoryInfo {
  id: CookieCategory;
  title: string;
  description: string;
  required?: boolean;
  icon: React.ElementType;
  color: string;
}

const cookieCategories: CookieCategoryInfo[] = [
  {
    id: "necessary",
    title: "Nécessaires",
    description: "Cookies essentiels au fonctionnement du site.",
    required: true,
    icon: ShieldCheck,
    color: "bg-blue-100 text-blue-600",
  },
  {
    id: "preferences",
    title: "Préférences",
    description: "Mémorisent vos paramètres et personnalisent votre expérience.",
    icon: Settings,
    color: "bg-green-100 text-green-600",
  },
  {
    id: "analytics",
    title: "Analytiques",
    description: "Nous aident à comprendre comment vous utilisez le site.",
    icon: BarChart3,
    color: "bg-purple-100 text-purple-600",
  },
  {
    id: "marketing",
    title: "Marketing",
    description: "Utilisés pour les publicités ciblées.",
    icon: ShoppingCart,
    color: "bg-orange-100 text-orange-600",
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
    <div className="space-y-3">
      {cookieCategories.map((category) => (
        <div 
          key={category.id} 
          className={`p-3 rounded-lg transition-all ${cookieConsent[category.id] ? 'bg-gradient-to-r from-indigo-50/80 to-purple-50/80' : 'bg-gray-50'} hover:bg-opacity-80`}
        >
          <div className="flex items-center justify-between">
            <div className="flex items-start gap-3">
              <div className={`p-1.5 rounded-md ${category.color} flex-shrink-0`}>
                <category.icon className="h-4 w-4" />
              </div>
              <div className="space-y-1">
                <Label htmlFor={`cookie-${category.id}`} className="text-sm font-medium flex items-center gap-2">
                  {category.title}
                  {category.required && (
                    <span className="text-xs px-1.5 py-0.5 rounded-full bg-blue-100 text-blue-600 font-normal">Requis</span>
                  )}
                </Label>
                <p className="text-xs text-muted-foreground">{category.description}</p>
              </div>
            </div>
            <Switch
              id={`cookie-${category.id}`}
              checked={cookieConsent[category.id]}
              onCheckedChange={() => handleToggle(category.id)}
              disabled={category.required}
              className="data-[state=checked]:bg-indigo-600"
            />
          </div>
        </div>
      ))}
    </div>
  );
};

export default CookiePreferences;
