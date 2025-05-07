
import React from "react";

export interface OfferSlide {
  tag: string;
  title: string;
  description: string;
  primaryLink: {
    to: string;
    text: string;
  };
  secondaryLink: {
    to: string;
    text: string;
  };
}

// Updated to focus on promotional offers changing every 7 seconds
export const offerSlides: OfferSlide[] = [
  {
    tag: "Site Web Professionnel",
    title: "Votre <span class='text-red-500'>site internet</span> professionnel à partir de 599€",
    description:
      "Une solution complète pour votre présence en ligne : design sur mesure, optimisation pour mobiles et référencement naturel inclus.",
    primaryLink: {
      to: "/expertise",
      text: "Découvrir l'offre",
    },
    secondaryLink: {
      to: "/devis",
      text: "Demander un devis",
    },
  },
  {
    tag: "Boutique en ligne",
    title: "Votre <span class='text-red-500'>e-commerce</span> clé en main à partir de 999€",
    description:
      "Vendez en ligne facilement avec notre solution complète : catalogue produits, paiement sécurisé et gestion des commandes intégrée.",
    primaryLink: {
      to: "/expertise",
      text: "Explorer nos solutions",
    },
    secondaryLink: {
      to: "/contact",
      text: "Nous contacter",
    },
  },
  {
    tag: "Applications Métier",
    title: "Solutions <span class='text-red-500'>sur mesure</span> pour votre activité",
    description:
      "Optimisez vos processus avec des applications personnalisées pour votre secteur d'activité. Devis personnalisé sur demande.",
    primaryLink: {
      to: "/expertise",
      text: "Voir nos références",
    },
    secondaryLink: {
      to: "/devis",
      text: "Obtenir un devis",
    },
  },
  {
    tag: "Référencement SEO",
    title: "Boostez votre <span class='text-red-500'>visibilité</span> en ligne",
    description:
      "Nos forfaits d'optimisation pour les moteurs de recherche vous permettent d'attirer plus de clients qualifiés sur votre site web.",
    primaryLink: {
      to: "/expertise",
      text: "Nos services SEO",
    },
    secondaryLink: {
      to: "/contact",
      text: "Nous contacter",
    },
  },
  {
    tag: "Maintenance & Support",
    title: "Services <span class='text-red-500'>tout inclus</span> à partir de 39€/mois",
    description:
      "Profitez d'une tranquillité d'esprit avec nos forfaits de maintenance : mises à jour, sécurité et support technique prioritaire.",
    primaryLink: {
      to: "/pricing",
      text: "Voir les forfaits",
    },
    secondaryLink: {
      to: "/devis",
      text: "Demander un devis",
    },
  },
];
