
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

// Catégories pour les références et témoignages
export const referenceCategories: ReferenceCategory[] = [
  {
    id: "web",
    name: "Sites Web"
  },
  {
    id: "ecommerce",
    name: "E-commerce"
  },
  {
    id: "app",
    name: "Applications"
  },
  {
    id: "marketing",
    name: "Marketing Digital"
  }
];

// Données de référence pour les projets
export const referenceData: Reference[] = [
  {
    id: "ref1",
    name: "Boulangerie Martin",
    sector: "Artisanat alimentaire",
    description: "Site vitrine avec prise de commande en ligne",
    url: "https://example.com/boulangerie",
    categoryId: "web"
  },
  {
    id: "ref2",
    name: "Boutique Mode Élégance",
    sector: "Mode & Textile",
    description: "Boutique en ligne avec 200+ produits",
    url: "https://example.com/boutique",
    categoryId: "ecommerce"
  },
  {
    id: "ref3",
    name: "Cabinet Conseil RH+",
    sector: "Services professionnels",
    description: "Application de gestion des candidats",
    url: "https://example.com/cabinet",
    categoryId: "app"
  },
  {
    id: "ref4",
    name: "Restaurant Le Gourmet",
    sector: "Restauration",
    description: "Campagne marketing locale et réservations",
    url: "https://example.com/restaurant",
    categoryId: "marketing"
  }
];

// Logos des partenaires pour la section du bas de page
export const partnerLogos: PartnerLogo[] = [
  {
    name: "Google",
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/2/2f/Google_2015_logo.svg/2560px-Google_2015_logo.svg.png"
  },
  {
    name: "Hubspot",
    image: "https://tbkconsult.com/wp-content/uploads/2016/11/HubSpot-Logo-PNG.png"
  },
  {
    name: "Zapier",
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/f/fd/Zapier_logo.svg/2560px-Zapier_logo.svg.png"
  },
  {
    name: "Slack",
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/b/b9/Slack_Technologies_Logo.svg/2560px-Slack_Technologies_Logo.svg.png"
  },
  {
    name: "Apollo",
    image: "/lovable-uploads/apollo.png"
  },
  {
    name: "Salesforce",
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/f/f9/Salesforce.com_logo.svg/2560px-Salesforce.com_logo.svg.png"
  },
  {
    name: "Notion",
    image: "https://upload.wikimedia.org/wikipedia/commons/4/45/Notion_app_logo.png"
  }
];
