
export interface Profession {
  id: string;
  label: string;
  services: Service[];
}

export interface Service {
  title: string;
  description: string;
}

export const professions: Profession[] = [
  {
    id: "batiment",
    label: "Professionnel du bâtiment",
    services: [
      {
        title: "Générez des leads",
        description: "Capturez de nouveaux clients grâce à des stratégies de marketing digital."
      },
      {
        title: "Animez/créez votre communauté",
        description: "Engagez vos clients sur les réseaux sociaux."
      },
      {
        title: "Valorisez votre expertise",
        description: "Mettez en avant vos réalisations et compétences."
      },
      {
        title: "Augmentez votre visibilité / notoriété",
        description: "Optimisez votre présence en ligne."
      },
      {
        title: "Générez des avis positifs",
        description: "Encouragez les retours clients positifs."
      },
      {
        title: "Gagnez en efficacité",
        description: "Utilisez des outils numériques pour simplifier votre gestion."
      },
      {
        title: "Fidélisez vos clients",
        description: "Maintenez une relation durable avec vos clients."
      },
      {
        title: "Exploitez vos données clients",
        description: "Utilisez les données pour personnaliser vos offres."
      },
      {
        title: "Développez votre activité",
        description: "Trouvez de nouvelles opportunités de croissance."
      }
    ]
  },
  {
    id: "commercant",
    label: "Commerçant",
    services: [
      {
        title: "E-boutique (Click & Collect)",
        description: "Proposez une expérience d'achat en ligne fluide."
      },
      {
        title: "Statistiques de votre activité",
        description: "Suivez vos performances en temps réel."
      },
      {
        title: "E-réputation",
        description: "Gérez et améliorez votre image en ligne."
      },
      {
        title: "Publication hebdomadaire sur vos réseaux",
        description: "Maintenez une présence active sur les réseaux sociaux."
      },
      {
        title: "Newsletter mensuelle",
        description: "Informez vos clients des dernières actualités."
      },
      {
        title: "Modération des avis négatifs",
        description: "Gérez efficacement les retours négatifs."
      },
      {
        title: "Rapports de suivi mensuels",
        description: "Analysez vos performances mensuelles."
      },
      {
        title: "Expert dédié",
        description: "Bénéficiez d'un accompagnement personnalisé."
      }
    ]
  },
  {
    id: "restaurateur",
    label: "Restaurateur / Traiteur",
    services: [
      {
        title: "Réservation en ligne",
        description: "Facilitez la réservation pour vos clients."
      },
      {
        title: "Menu digital",
        description: "Présentez vos offres de manière attractive."
      },
      {
        title: "Livraison et Click & Collect",
        description: "Proposez des options de commande flexibles."
      },
      {
        title: "Gestion des avis clients",
        description: "Améliorez votre service grâce aux retours clients."
      },
      {
        title: "Promotion sur les réseaux sociaux",
        description: "Attirez de nouveaux clients via les réseaux sociaux."
      }
    ]
  },
  {
    id: "beaute-sante",
    label: "Professionnel de la beauté / santé",
    services: [
      {
        title: "Prise de rendez-vous en ligne",
        description: "Simplifiez la gestion des rendez-vous."
      },
      {
        title: "Présentation des services",
        description: "Mettez en avant vos offres et compétences."
      },
      {
        title: "Témoignages clients",
        description: "Partagez les expériences positives de vos clients."
      },
      {
        title: "Promotion des produits",
        description: "Augmentez vos ventes grâce à des campagnes ciblées."
      }
    ]
  },
  {
    id: "agriculteur",
    label: "Agriculteur",
    services: [
      {
        title: "Vente en ligne de produits",
        description: "Développez votre activité avec une boutique en ligne."
      },
      {
        title: "Présentation de l'exploitation",
        description: "Partagez votre histoire et vos valeurs."
      },
      {
        title: "Communauté locale",
        description: "Créez une communauté autour de votre activité."
      },
      {
        title: "Actualités et événements",
        description: "Informez vos clients des dernières nouvelles."
      }
    ]
  },
  {
    id: "services",
    label: "Professionnel de services",
    services: [
      {
        title: "Portfolio en ligne",
        description: "Montrez vos réalisations et compétences."
      },
      {
        title: "Réservation de services",
        description: "Facilitez la réservation pour vos clients."
      },
      {
        title: "Témoignages et études de cas",
        description: "Partagez des exemples concrets de votre travail."
      },
      {
        title: "Blog professionnel",
        description: "Partagez votre expertise et attirez de nouveaux clients."
      }
    ]
  },
  {
    id: "immobilier",
    label: "Agent immobilier",
    services: [
      {
        title: "Annonces immobilières",
        description: "Présentez vos biens de manière attractive."
      },
      {
        title: "Visites virtuelles",
        description: "Offrez une expérience immersive à vos clients."
      },
      {
        title: "Gestion des leads",
        description: "Suivez et convertissez vos prospects efficacement."
      },
      {
        title: "Newsletter immobilière",
        description: "Informez vos clients des nouvelles opportunités."
      }
    ]
  },
  {
    id: "automobile",
    label: "Garage automobile",
    services: [
      {
        title: "Prise de rendez-vous en ligne",
        description: "Simplifiez la gestion des rendez-vous."
      },
      {
        title: "Présentation des services",
        description: "Mettez en avant vos offres et compétences."
      },
      {
        title: "Promotions et offres spéciales",
        description: "Attirez de nouveaux clients avec des offres exclusives."
      },
      {
        title: "Gestion des avis clients",
        description: "Améliorez votre service grâce aux retours clients."
      }
    ]
  },
  {
    id: "tpe-pme",
    label: "Autres TPE / PME",
    services: [
      {
        title: "Site web personnalisé",
        description: "Créez un site adapté à votre activité."
      },
      {
        title: "Stratégie de référencement",
        description: "Améliorez votre visibilité en ligne."
      },
      {
        title: "Gestion de la relation client",
        description: "Utilisez des outils pour fidéliser vos clients."
      },
      {
        title: "Analyse des performances",
        description: "Suivez et optimisez vos résultats."
      }
    ]
  }
];
