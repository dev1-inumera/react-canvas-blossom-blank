import { useEffect } from "react";
import { Check, X } from "lucide-react"; // t'as déjà Lucide apparemment
import { Button } from "@/components/ui/button"; // ou ton bouton custom
import { Link } from "react-router-dom";

type Offer = {
  name: string;
  price: string;
  contacts: string;
  team: string;
  ideal: string;
  popular?: boolean;
};

interface PricingB2CModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const offers: Offer[] = [
  {
    name: "START",
    price: "1 500 €",
    contacts: "8 000 contacts / 32 000 envois",
    team: "1 Responsable Marketing",
    ideal: "TPE / Tests",
  },
  {
    name: "STANDARD",
    price: "2 500 €",
    contacts: "11 200 contacts / 44 000 envois",
    team: "1 Phoner + Responsable Marketing",
    ideal: "PME",
  },
  {
    name: "SUR-MESURE",
    price: "Sur devis",
    contacts: "Envois illimités",
    team: "Équipe dédiée + stratégie 360°",
    ideal: "Groupes, franchises, multisites",
    popular: true,

  },
  {
    name: "PREMIUM",
    price: "3 500 €",
    contacts: "14 400 contacts / 57 600 envois",
    team: "1 Phoner + 1 CM + Resp. Marketing",
    ideal: "Croissance rapide",
  },
  {
    name: "ULTRA",
    price: "5 500 €",
    contacts: "16 000 contacts / 64 000 envois",
    team: "Équipe dédiée + suivi hebdo",
    ideal: "Entreprises multi-produits",
  }
];

export const PricingB2CModal = ({ isOpen, onClose }: PricingB2CModalProps) => {
  useEffect(() => {
    if (isOpen) document.body.style.overflow = "hidden";
    else document.body.style.overflow = "auto";
  }, [isOpen]);

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 bg-black/50 flex items-center justify-center p-4">
      <div className="bg-white rounded-xl max-w-7xl w-full max-h-[90vh] overflow-y-auto shadow-2xl p-8 relative">
        <button onClick={onClose} className="absolute top-4 right-4 text-gray-500 hover:text-red-600">
          <X size={24} />
        </button>

        <div className="text-center mb-10">
          <h2 className="text-4xl font-bold text-darkblue-900 mb-4">
            Nos Offres <span className="text-red-600">B2C</span>
          </h2>
          <p className="text-gray-600">Des formules adaptées à chaque ambition</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-6">
          {offers.map((offer, index) => (
            <div key={index} className="relative bg-white rounded-xl shadow-lg border border-gray-100 overflow-hidden">
              {offer.popular && (
                <div className="absolute top-0 w-full bg-red-600 text-white text-center py-2 text-sm font-semibold uppercase tracking-wide z-10">
                  Plus Populaire
                </div>
              )}
              <div className={`p-6 pt-${offer.popular ? "12" : "6"}`}>
                <h3 className="text-xl font-bold text-gray-900 mb-2 text-center">Formule {offer.name}</h3>
                <div className="text-center text-3xl font-bold text-red-600 mb-4">
                  {offer.price}
                  {offer.name !== "SUR-MESURE" && (
                    <span className="text-base font-normal text-gray-500"> /mois</span>
                  )}
                </div>
                <ul className="space-y-3 mb-6 text-sm">
                  <li className="flex items-start">
                    <Check className="text-green-600 mr-2 mt-1" size={18} />
                    <span className="text-gray-700">{offer.contacts}</span>
                  </li>
                  <li className="flex items-start">
                    <Check className="text-green-600 mr-2 mt-1" size={18} />
                    <span className="text-gray-700">{offer.team}</span>
                  </li>
                  <li className="flex items-start">
                    <Check className="text-green-600 mr-2 mt-1" size={18} />
                    <span className="text-gray-700">Idéal pour : {offer.ideal}</span>
                  </li>
                </ul>
                <Link to="/devis">
                  <Button className="w-full bg-red-600 hover:bg-red-700 text-white py-3 rounded-lg">
                    Sélectionner
                  </Button>
                </Link>
              </div>
            </div>
          ))}
        </div>

        
      </div>
    </div>
  );
};
