
export interface Reference {
  id: string;
  name: string;
  sector: string;
  description: string;
  url: string;
  categoryId: string;
}

export interface ReferenceCategory {
  id: string;
  name: string;
}

export interface PartnerLogo {
  name: string;
  image: string;
}

export const referenceCategories: ReferenceCategory[] = [
  {
    id: "websites",
    name: "Création de sites internet"
  },
  {
    id: "seo",
    name: "Référencement"
  },
  {
    id: "booking",
    name: "Prise de RDV en ligne"
  }
];

export const referenceData: Reference[] = [
  
 /*  {
    id: "poissonnerie-michelet",
    name: "Poissonnerie Michelet",
    sector: "Poissonnerie",
    description: "La Poissonnerie Michelet vous accueille tous les jours dans leurs différents points de vente pour vous proposer une grande variété de produits de la mer.",
    url: "",
    categoryId: "websites"
  },
  {
    id: "garage-martin",
    name: "Garage Martin",
    sector: "Automobile",
    description: "Le Garage Martin est spécialisé dans la réparation et l'entretien de véhicules toutes marques. Avec plus de 20 ans d'expérience, notre équipe de mécaniciens qualifiés offre un service personnalisé et de qualité.",
    url: "",
    categoryId: "seo"
  }, */

];

export const partnerLogos: PartnerLogo[] = [
  /* {
    name: "Entreprise A",
    image: "https://placehold.co/200x100/e2e8f0/1e3a8a?text=Logo+A"
  },
  {
    name: "Entreprise B",
    image: "https://placehold.co/200x100/e2e8f0/1e3a8a?text=Logo+B"
  },
  {
    name: "Entreprise C",
    image: "https://placehold.co/200x100/e2e8f0/1e3a8a?text=Logo+C"
  },
  {
    name: "Entreprise D",
    image: "https://placehold.co/200x100/e2e8f0/1e3a8a?text=Logo+D"
  },
  {
    name: "Entreprise E",
    image: "https://placehold.co/200x100/e2e8f0/1e3a8a?text=Logo+E"
  },
  {
    name: "Entreprise F",
    image: "https://placehold.co/200x100/e2e8f0/1e3a8a?text=Logo+F"
  },
  {
    name: "Entreprise G",
    image: "https://placehold.co/200x100/e2e8f0/1e3a8a?text=Logo+G"
  },
  {
    name: "Entreprise H",
    image: "https://placehold.co/200x100/e2e8f0/1e3a8a?text=Logo+H"
  },
  {
    name: "Entreprise I",
    image: "https://placehold.co/200x100/e2e8f0/1e3a8a?text=Logo+I"
  },
  {
    name: "Entreprise J",
    image: "https://placehold.co/200x100/e2e8f0/1e3a8a?text=Logo+J"
  },
  {
    name: "Entreprise K",
    image: "https://placehold.co/200x100/e2e8f0/1e3a8a?text=Logo+K"
  },
  {
    name: "Entreprise L",
    image: "https://placehold.co/200x100/e2e8f0/1e3a8a?text=Logo+L"
  } */
];
