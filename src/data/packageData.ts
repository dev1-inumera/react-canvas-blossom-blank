
import { PackageData } from "./types/packageData";

// Artisan package data
export const artisanPackage: PackageData = {
  type: "Artisans",
  title: "Essentiel",
  price: "0",
  setupFee: "0",
  image: "https://img.freepik.com/vecteurs-libre/equipe-marketing-numerique-creant-page-destination-page-accueil_74855-10590.jpg?t=st=1746778762~exp=1746782362~hmac=1f53ab4e1fe129d4b1632f632b6fb98cfc79c1fe2aeed447ce525d6f3c5f1535&w=1380", 
  features: [
    "Création d'un site web responsive design",
    "Citation de i-numera : Formulaire de devis en ligne, outil de création de devis et facturation, catalogue de prix et produits, gestion des données clients, intégration à Google My Business et aux réseaux sociaux",
    "Fiche d'établissement Google : Création et administration de la fiche GMB, intégration de logo et photos, QR Code pour avis, animation trimestrielle, campagnes de collecte d'avis",
    "Proposition d'i-numera : Boutique en ligne (Click & Collect), paiements en ligne, analyse des statistiques d'activité.",
    "Gestion de la réputation en ligne : Audit, publications hebdomadaires, newsletters, modération des avis, rapports mensuels, expert dédié.",
    "Optimisation SEO : Rédaction de 30 pages de destination, inscriptions dans des annuaires, rédaction d'articles de blog.",
    "Achat d'espace : Sélection des mots clés, création et optimisation des annonces, suivi des budgets",
    "Service et accompagnement : Suivi annuel, optimisation SEM, rapports SEA, accès au service client, hébergement, interface administrateur, modifications du site, call tracking"
  ],
  isPrimary: true,
  hasPremium: true,
  premiumFeatures: [
    "i-mailx : Messagerie professionnelle, signature personnalisée, calendrier partagé",
    "i-phoner : Un réseau d'agents dédiés pour faciliter vos communications et transactions téléphoniques en toute simplicité.",
    "Suivi-expert : Accompagnement personnalisé par un expert dédié, rapports mensuels, optimisation continue"
  ]
};

// Commercants package data
export const commercantPackage: PackageData = {
  type: "Commerçants",
  title: "Essentiel",
  price: "0",
  setupFee: "0",
  image: "https://img.freepik.com/vecteurs-libre/concept-strategie-entreprise-design-plat-dessine-main_23-2149190166.jpg?t=st=1746779211~exp=1746782811~hmac=56496b8482e61f8bb6e9cef320ba3c7b8d5e6d48133cadee3de608d8ce70f77b&w=1380", // Updated image URL
  features: [
    "Création d'un site web responsive design",
    "Citation de i-numera : Formulaire de devis en ligne, outil de création de devis et facturation, catalogue de prix et produits, gestion des données clients, intégration à Google My Business et aux réseaux sociaux",
    "Fiche d'établissement Google : Création et administration de la fiche GMB, intégration de logo et photos, QR Code pour avis, animation trimestrielle, campagnes de collecte d'avis",
    "Proposition d'i-numera : Boutique en ligne (Click & Collect), paiements en ligne, analyse des statistiques d'activité.",
    "Gestion de la réputation en ligne : Audit, publications hebdomadaires, newsletters, modération des avis, rapports mensuels, expert dédié.",
    "Optimisation SEO : Rédaction de 30 pages de destination, inscriptions dans des annuaires, rédaction d'articles de blog.",
    "Achat d'espace : Sélection des mots clés, création et optimisation des annonces, suivi des budgets",
    "Service et accompagnement : Suivi annuel, optimisation SEM, rapports SEA, accès au service client, hébergement, interface administrateur, modifications du site, call tracking"
  ],
  isPrimary: false,
  hasPremium: true,
  premiumFeatures: [
    "i-mailx : Messagerie professionnelle, signature personnalisée, calendrier partagé",
    "i-phoner : Un réseau d'agents dédiés pour faciliter vos communications et transactions téléphoniques en toute simplicité.",
    "Suivi-expert : Accompagnement personnalisé par un expert dédié, rapports mensuels, optimisation continue"
  ]
};

//CRM
export const crmPackage: PackageData = {
  type: "Professionel",
  title: "CRM",
  price: "50", // Prix mensuel en euros
  setupFee: "500", // Frais de mise en place en euros
  image: "https://img.freepik.com/vecteurs-libre/illustration-crm-isometrique_52683-83950.jpg?t=st=1746779325~exp=1746782925~hmac=3ea03d3af436dd7da7c46419cc1140f83435053479fa970f89cb1458c483e936&w=1380", // URL de l'image
  features: [
    "Gestion des contacts et des leads : Centralisez et organisez les informations sur vos clients potentiels et existants pour une gestion efficace.",
    "Automatisation des tâches marketing : Automatisez les tâches répétitives comme l'envoi d'emails et les suivis pour gagner du temps et améliorer l'efficacité.",
    "Suivi des interactions clients : Enregistrez toutes les interactions avec vos clients pour une meilleure gestion de la relation et un suivi personnalisé.",
    "Tableaux de bord et rapports personnalisés : Utilisez des outils d'analyse pour suivre les performances et prendre des décisions éclairées grâce à des rapports détaillés.",
    "Intégration avec les outils de messagerie et les réseaux sociaux : Synchronisez vos communications et interactions sur différentes plateformes pour une gestion unifiée.",
    "Support client 24/7 : Bénéficiez d'une assistance disponible à tout moment pour résoudre les problèmes techniques ou d'utilisation.",
    "Formation initiale et accompagnement : Recevez une formation initiale et un accompagnement pour prendre en main l'outil et en tirer le meilleur parti.",
    "Mises à jour régulières et maintenance : Assurez-vous que le système reste à jour et fonctionnel avec des mises à jour régulières et une maintenance continue."
  ],
  isPrimary: false,
  hasPremium: true,
  premiumFeatures: [
    "Fonctionnalités avancées de segmentation : Ciblez plus précisément vos clients en fonction de critères spécifiques pour des campagnes marketing plus efficaces.",
    "Campagnes marketing multicanal : Gérez des campagnes sur plusieurs canaux (email, réseaux sociaux, etc.) de manière coordonnée pour une meilleure portée.",
    "Analyse prédictive et scoring des leads : Utilisez des algorithmes pour prédire quels leads sont les plus susceptibles de se convertir en clients et optimisez vos efforts de vente.",
    "Support dédié et gestion de compte : Bénéficiez d'un gestionnaire de compte dédié pour un accompagnement personnalisé et une assistance sur mesure.",
    "Accès à des webinaires et formations exclusives : Participez à des formations continues pour améliorer vos compétences et rester à jour sur les meilleures pratiques."
  ]
};


//ERP
export const erpPackage: PackageData = {
  type: "Entreprise",
  title: "ERP",
  price: "150", // Prix mensuel en euros
  setupFee: "5000", // Frais de mise en place en euros
  image: "https://images.unsplash.com/photo-1571677246347-5040036b95cc?q=80&w=1374&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D", // URL de l'image
  features: [
    "Gestion intégrée des processus métiers : Centralisez et optimisez les opérations clés telles que la finance, la chaîne d'approvisionnement, et les ressources humaines pour une gestion efficace.",
    "Automatisation des tâches administratives : Automatisez les tâches répétitives comme la gestion des stocks et les suivis pour gagner du temps et améliorer l'efficacité.",
    "Suivi des performances en temps réel : Accédez à des tableaux de bord et des rapports en temps réel pour suivre les performances et prendre des décisions éclairées.",
    "Intégration avec les outils de messagerie et les réseaux sociaux : Synchronisez vos communications et interactions sur différentes plateformes pour une gestion unifiée.",
    "Support client 24/7 : Bénéficiez d'une assistance disponible à tout moment pour résoudre les problèmes techniques ou d'utilisation.",
    "Formation initiale et accompagnement : Recevez une formation initiale et un accompagnement pour prendre en main l'outil et en tirer le meilleur parti.",
    "Mises à jour régulières et maintenance : Assurez-vous que le système reste à jour et fonctionnel avec des mises à jour régulières et une maintenance continue."
  ],
  isPrimary: false,
  hasPremium: true,
  premiumFeatures: [
    "Fonctionnalités avancées de gestion de la chaîne d'approvisionnement : Optimisez votre chaîne d'approvisionnement avec des outils avancés pour une meilleure gestion des stocks et des approvisionnements.",
    "Analyse prédictive et intelligence artificielle : Utilisez des algorithmes pour prédire les tendances et optimiser vos opérations grâce à l'intelligence artificielle.",
    "Support dédié et gestion de compte : Bénéficiez d'un gestionnaire de compte dédié pour un accompagnement personnalisé et une assistance sur mesure.",
    "Accès à des webinaires et formations exclusives : Participez à des formations continues pour améliorer vos compétences et rester à jour sur les meilleures pratiques."
  ]
};


