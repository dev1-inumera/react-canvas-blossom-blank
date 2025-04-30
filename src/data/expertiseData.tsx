
import React from 'react';
import { 
  Globe, 
  Search, 
  MapPin, 
  BarChart3, 
  Users, 
  Smartphone,
  ShoppingCart,
  Mail
} from 'lucide-react';
import { ExpertiseCardProps } from '@/components/expertise/ExpertiseCard';

// Define the categories
export type ExpertiseCategory = 'web' | 'marketing' | 'media' | 'mobile' | 'all';

export const expertiseCategories = [
  { id: 'all', label: 'Tous' },
  { id: 'web', label: 'Web & E-commerce' },
  { id: 'marketing', label: 'Marketing digital' },
  { id: 'mobile', label: 'Mobile & Applications' }
];

export const expertiseCards: (Omit<ExpertiseCardProps, 'ref' | 'inView'> & { category: ExpertiseCategory })[] = [
  {
    icon: <Globe size={24} />,
    title: "Création de site internet",
    description: "Un site web professionnel et optimisé pour convertir vos visiteurs en clients.",
    features: [
      "Design moderne et responsive",
      "Optimisé pour le référencement",
      "CMS facile à utiliser",
      "Sécurisé et performant",
      "Adapté à tous les appareils"
    ],
    price: "0",
    delay: 100,
    category: 'web'
  },
  {
    icon: <Search size={24} />,
    title: "Référencement (SEO)",
    description: "Améliorez votre visibilité sur les moteurs de recherche et attirez plus de clients.",
    features: [
      "Audit technique complet",
      "Optimisation on-page",
      "Création de contenu optimisé",
      "Suivi des positions",
      "Rapports mensuels détaillés"
    ],
    price: "0",
    delay: 200,
    category: 'marketing'
  },
  {
    icon: <MapPin size={24} />,
    title: "Google My Business",
    description: "Optimisez votre présence locale et apparaissez sur Google Maps.",
    features: [
      "Création et optimisation de fiche",
      "Gestion des avis clients",
      "Publication de posts réguliers",
      "Mise à jour des informations",
      "Suivi des statistiques"
    ],
    price: "0",
    delay: 300,
    category: 'marketing'
  },
  {
    icon: <BarChart3 size={24} />,
    title: "E-réputation",
    description: "Gérez et améliorez votre image en ligne pour gagner la confiance des clients.",
    features: [
      "Surveillance des mentions",
      "Gestion des avis négatifs",
      "Stratégie d'acquisition d'avis",
      "Présence sur les plateformes d'avis",
      "Rapports trimestriels"
    ],
    price: "0",
    delay: 400,
    category: 'marketing'
  },
  {
    icon: <Users size={24} />,
    title: "Community Management",
    description: "Animez vos réseaux sociaux et développez votre communauté en ligne.",
    features: [
      "Stratégie de contenu personnalisée",
      "Publications régulières",
      "Modération des commentaires",
      "Analyse des performances",
      "Veille concurrentielle"
    ],
    price: "0",
    delay: 500,
    category: 'marketing'
  },
  {
    icon: <Smartphone size={24} />,
    title: "Application Mobile",
    description: "Développez votre présence mobile avec une application sur mesure.",
    features: [
      "Design intuitif et ergonomique",
      "Développement iOS et Android",
      "Intégration avec votre site web",
      "Maintenance et mises à jour",
      "Analyses et statistiques"
    ],
    price: "0",
    delay: 700,
    category: 'mobile'
  },
  {
    icon: <ShoppingCart size={24} />,
    title: "E-commerce",
    description: "Vendez vos produits en ligne avec une boutique professionnelle et sécurisée.",
    features: [
      "Catalogue produits illimité",
      "Gestion des stocks",
      "Paiement sécurisé",
      "Expédition et logistique",
      "Tableau de bord détaillé"
    ],
    price: "0",
    delay: 800,
    category: 'web'
  },
  {
    icon: <Mail size={24} />,
    title: "Email Marketing",
    description: "Communiquez efficacement avec vos clients et prospects par email.",
    features: [
      "Création de templates personnalisés",
      "Segmentation de votre audience",
      "Automatisation des campagnes",
      "Analyse des performances",
      "A/B testing"
    ],
    price: "0",
    delay: 900,
    category: 'marketing'
  }
];
