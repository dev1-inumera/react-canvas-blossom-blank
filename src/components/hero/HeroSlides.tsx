import React from "react";

export interface HeroSlide {
  backgroundImage: string;
  tag: string;
  title: string;
  description: string;
  link1: {
    to: string;
    text: string;
  };
  link2: {
    to: string;
    text: string;
  };
}

// These slides are no longer used in the main interface, but we keep them
// as a reference for future content needs
export const carouselSlides: HeroSlide[] = [
  {
    backgroundImage:
      "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=1500&h=800&q=80",
    tag: "Solutions digitales pour professionnels",
    title:
      "Des solutions numériques <span class='text-red-500'>clés en main</span> pour booster votre activité.",
    description:
      "Nous accompagnons les professionnels et TPE/PME dans leur transformation digitale avec des solutions simples et efficaces.",
    link1: {
      to: "/expertise",
      text: "Découvrez nos prestations",
    },
    link2: {
      to: "/devis",
      text: "Demander un devis",
    },
  },
  {
    backgroundImage:
      "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&w=1500&h=800&q=80",
    tag: "Développement Web",
    title:
      "Sites internet <span class='text-red-500'>performants</span> et adaptés à votre métier",
    description:
      "Des sites web professionnels, optimisés pour le référencement et adaptés aux besoins de votre entreprise.",
    link1: {
      to: "/web-development",
      text: "Voir nos services web",
    },
    link2: {
      to: "/contact",
      text: "Contactez-nous",
    },
  },
  {
    backgroundImage:
      "https://images.unsplash.com/photo-1487058792275-0ad4aaf24ca7?auto=format&fit=crop&w=1500&h=800&q=80",
    tag: "Applications sur mesure",
    title:
      "Applications <span class='text-red-500'>personnalisées</span> pour votre métier",
    description:
      "Développement d'applications spécifiques pour simplifier vos processus et augmenter votre productivité.",
    link1: {
      to: "/expertise",
      text: "Explorez nos applications",
    },
    link2: {
      to: "/quote",
      text: "Obtenez un devis",
    },
  },
];
