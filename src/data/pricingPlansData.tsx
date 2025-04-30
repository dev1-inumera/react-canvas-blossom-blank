
import React from 'react';
import { Globe, Search, Users, Camera, ShoppingCart } from 'lucide-react';
import { PricingPlan } from '@/components/pricing/PricingTabContent';

export const pricingPlansData: Record<string, PricingPlan[]> = {
  sites: [
    {
      name: "Site Vitrine",
      description: "Idéal pour présenter votre activité et vos services avec un site simple et efficace.",
      price: "0€",
      features: [
        "5 pages personnalisées",
        "Design responsive",
        "Optimisation SEO de base",
        "Formulaire de contact",
        "Mise à jour mensuelle"
      ],
      cta: "Je me lance !",
      icon: <Globe size={20} />
    },
    {
      name: "Site Catalogue",
      description: "Présentez tous vos produits et services de manière détaillée et attractive.",
      price: "0€",
      features: [
        "10 pages personnalisées",
        "Catalogue produits illimité",
        "Optimisation SEO avancée",
        "Intégration réseaux sociaux",
        "Statistiques de visite"
      ],
      cta: "Je me lance !",
      popular: true,
      icon: <Globe size={20} />
    },
    {
      name: "Site E-commerce",
      description: "Vendez vos produits en ligne avec une boutique professionnelle et sécurisée.",
      price: "0€",
      features: [
        "Boutique complète",
        "Panier d'achat sécurisé",
        "Gestion des stocks",
        "Paiement en ligne",
        "Dashboard administrateur"
      ],
      cta: "Je me lance !",
      icon: <ShoppingCart size={20} />
    }
  ],
  seo: [
    {
      name: "SEO Essentiel",
      description: "Les bases pour améliorer votre visibilité sur les moteurs de recherche.",
      price: "0€",
      features: [
        "Audit technique initial",
        "Optimisation on-page",
        "3 mots-clés principaux",
        "Rapport mensuel",
        "Support par email"
      ],
      cta: "Je me lance !",
      icon: <Search size={20} />
    },
    {
      name: "SEO Premium",
      description: "Une stratégie complète pour dominer les résultats de recherche dans votre secteur.",
      price: "0€",
      features: [
        "Audit technique approfondi",
        "Optimisation on-page et off-page",
        "10 mots-clés ciblés",
        "Création de contenu mensuel",
        "Suivi de positionnement"
      ],
      cta: "Je me lance !",
      popular: true,
      icon: <Search size={20} />
    },
    {
      name: "Google Ads",
      description: "Obtenez des résultats immédiats avec des campagnes publicitaires ciblées.",
      price: "0€",
      features: [
        "Configuration de compte",
        "Création de campagnes",
        "Sélection des mots-clés",
        "Suivi des conversions",
        "Optimisation continue"
      ],
      cta: "Je me lance !",
      icon: <Search size={20} />
    }
  ],
  social: [
    {
      name: "Gestion Basique",
      description: "Maintenez une présence régulière sur les réseaux sociaux principaux.",
      price: "0€",
      features: [
        "2 plateformes",
        "8 publications par mois",
        "Modération des commentaires",
        "Rapport mensuel",
        "Support par email"
      ],
      cta: "Je me lance !",
      icon: <Users size={20} />
    },
    {
      name: "Gestion Avancée",
      description: "Développez votre communauté avec une stratégie de contenu complète.",
      price: "0€",
      features: [
        "4 plateformes",
        "16 publications par mois",
        "Création de contenu original",
        "Veille concurrentielle",
        "Gestion des campagnes"
      ],
      cta: "Je me lance !",
      popular: true,
      icon: <Users size={20} />
    },
    {
      name: "Publicité Social Media",
      description: "Amplifiez votre portée avec des campagnes publicitaires ciblées.",
      price: "0€",
      features: [
        "2 plateformes",
        "Création des visuels",
        "Ciblage avancé",
        "Suivi des conversions",
        "Optimisation continue"
      ],
      cta: "Je me lance !",
      icon: <Users size={20} />
    }
  ],
  photo: [
    {
      name: "Pack Photo",
      description: "Des photos professionnelles pour valoriser votre activité.",
      price: "0€",
      features: [
        "Shooting professionnel",
        "Retouche photo",
        "10 photos HD",
        "Droits d'utilisation",
        "Livraison rapide"
      ],
      cta: "Je me lance !",
      icon: <Camera size={20} />
    },
    {
      name: "Pack Vidéo",
      description: "Des vidéos impactantes pour présenter votre entreprise et vos produits.",
      price: "0€",
      features: [
        "Tournage professionnel",
        "Montage et post-production",
        "Vidéo de 1-2 minutes",
        "Habillage sonore",
        "Format pour web et réseaux"
      ],
      cta: "Je me lance !",
      popular: true,
      icon: <Camera size={20} />
    },
    {
      name: "Pack Complet",
      description: "Une solution complète avec photos et vidéos pour tous vos besoins.",
      price: "0€",
      features: [
        "Shooting photo complet",
        "Vidéo promotionnelle",
        "Visite virtuelle 360°",
        "Contenu pour réseaux sociaux",
        "Livraison sous 15 jours"
      ],
      cta: "Je me lance !",
      icon: <Camera size={20} />
    }
  ]
};
