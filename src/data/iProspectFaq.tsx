
import React from 'react';
import { Mail, Calendar, Database, LineChart, Award, HelpCircle } from 'lucide-react';

export interface IProspectFaq {
  question: string;
  answer: string | React.ReactNode;
}

export const iProspectFaqs: IProspectFaq[] = [
  {
    question: "Comment fonctionne concrètement i-prospect ?",
    answer: "Notre équipe crée des campagnes d'emailing ciblées pour votre entreprise. Nous identifions les prospects intéressés par vos services et organisons des rendez-vous qualifiés directement dans votre agenda. Vous n'avez plus qu'à vous concentrer sur les rendez-vous et la signature."
  },
  {
    question: "Combien de temps faut-il pour voir les premiers résultats ?",
    answer: "Les premiers résultats sont généralement visibles dès les 2-3 premières semaines. Les premiers rendez-vous peuvent être fixés dès la première semaine de campagne, mais nous recommandons d'analyser les performances sur un cycle complet de 3 mois pour optimiser les résultats."
  },
  {
    question: "Est-ce que je dois fournir ma propre base de données de prospects ?",
    answer: "Non, nous constituons une base de données personnalisée pour votre secteur d'activité. Bien sûr, si vous disposez déjà d'une base de contacts que vous souhaitez exploiter, nous pouvons l'intégrer à notre système."
  },
  {
    question: "Comment sont définis les 'rendez-vous qualifiés' garantis ?",
    answer: "Un rendez-vous qualifié est un entretien (téléphonique, visio ou physique) confirmé avec un prospect correspondant à vos critères de ciblage et ayant exprimé un intérêt pour vos services. Si nous n'atteignons pas le nombre de RDV garantis dans votre formule, nous vous offrons un mois supplémentaire de service."
  },
  {
    question: "Puis-je changer de formule en cours de contrat ?",
    answer: "Oui, vous pouvez passer à une formule supérieure à tout moment. Si vous souhaitez réduire votre formule, ce changement sera effectif à la fin de votre période d'engagement en cours."
  },
  {
    question: "Y a-t-il un engagement de durée ?",
    answer: "Nos formules sont sans engagement au-delà du premier mois. Nous recommandons toutefois un minimum de 3 mois pour obtenir des résultats optimaux, le temps d'affiner les séquences d'emails et d'optimiser les campagnes."
  },
  {
    question: "Comment se passe la mise en place d'une campagne i-prospect ?",
    answer: "Après avoir choisi votre formule, nous organisons un appel de briefing pour comprendre votre activité, vos cibles et votre proposition de valeur. Nous créons ensuite vos séquences d'emails, configurations techniques et bases de données. La première campagne peut être lancée dans les 5 à 10 jours ouvrés."
  },
  {
    question: "Est-ce que i-prospect est compatible avec mon CRM ?",
    answer: "Oui, i-prospect s'intègre avec la plupart des CRM populaires comme Salesforce, HubSpot, Pipedrive, etc. Si vous utilisez un CRM spécifique, contactez-nous pour vérifier la compatibilité."
  }
];

export const iProspectFaqCategories = [
  {
    id: "process",
    title: "Processus et fonctionnement",
    icon: <Mail size={20} className="text-red-600" />,
    questions: iProspectFaqs.slice(0, 2)
  },
  {
    id: "data",
    title: "Données et ciblage",
    icon: <Database size={20} className="text-red-600" />,
    questions: iProspectFaqs.slice(2, 4)
  },
  {
    id: "contracts",
    title: "Contrats et flexibilité",
    icon: <Calendar size={20} className="text-red-600" />,
    questions: iProspectFaqs.slice(4, 6)
  },
  {
    id: "technical",
    title: "Technique et intégration",
    icon: <LineChart size={20} className="text-red-600" />,
    questions: iProspectFaqs.slice(6, 8)
  }
];
