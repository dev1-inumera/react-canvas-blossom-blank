
import React from 'react';
import { Globe, Search, Users } from 'lucide-react';
import { cn } from '@/lib/utils';

interface PricingTabButtonsProps {
  activeTab: string;
  setActiveTab: (tab: string) => void;
}

const PricingTabButtons: React.FC<PricingTabButtonsProps> = ({ activeTab, setActiveTab }) => {
  return (
    <div className="flex flex-wrap justify-center bg-gray-100 rounded-full p-1 max-w-3xl mx-auto mb-10">
      <button
        onClick={() => setActiveTab("sites")}
        className={cn(
          "py-2 px-4 text-sm font-medium rounded-full transition-all",
          activeTab === "sites" 
            ? "bg-white shadow-sm text-darkblue-900" 
            : "text-darkblue-700 hover:text-darkblue-900"
        )}
      >
        Création de site internet
      </button>
      <button
        onClick={() => setActiveTab("seo")}
        className={cn(
          "py-2 px-4 text-sm font-medium rounded-full transition-all",
          activeTab === "seo" 
            ? "bg-white shadow-sm text-darkblue-900" 
            : "text-darkblue-700 hover:text-darkblue-900"
        )}
      >
        Référencement (SEM)
      </button>
      <button
        onClick={() => setActiveTab("social")}
        className={cn(
          "py-2 px-4 text-sm font-medium rounded-full transition-all",
          activeTab === "social" 
            ? "bg-white shadow-sm text-darkblue-900" 
            : "text-darkblue-700 hover:text-darkblue-900"
        )}
      >
        Community management
      </button>
    </div>
  );
};

export default PricingTabButtons;
