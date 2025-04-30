
import React, { ReactNode } from 'react';
import { 
  Globe, 
  Search, 
  ShoppingCart, 
  Settings, 
  HelpCircle, 
  Building 
} from 'lucide-react';

export interface Faq {
  question: string;
  answer: ReactNode;
}

export interface FaqCategory {
  title: string;
  icon: ReactNode;
  questions: Faq[];
}

export const faqCategories: FaqCategory[] = [
  {
    title: "Création de site internet",
    icon: <Globe size={20} />,
    questions: [
      {
        question: "Comment faire un site internet ?",
        answer: (
          <div>
            <p>Faire un site internet professionnel implique plusieurs étapes :</p>
            <ul className="list-disc pl-5 mt-2 space-y-1">
              <li>Définir les objectifs et les besoins du site</li>
              <li>Choisir un nom de domaine pour votre site</li>
              <li>Sélectionner un hébergement web fiable</li>
              <li>Concevoir la structure et le design du site</li>
              <li>Développer les fonctionnalités nécessaires</li>
              <li>Créer du contenu de qualité</li>
              <li>Optimiser pour le référencement</li>
              <li>Mettre en ligne et tester le site</li>
            </ul>
            <p className="mt-2">Notre équipe peut vous accompagner à chaque étape de ce processus pour garantir un résultat professionnel.</p>
          </div>
        )
      },
      {
        question: "Comment créer un site internet gratuitement ?",
        answer: (
          <div>
            <p>Il est possible de créer un site internet gratuitement en utilisant :</p>
            <ul className="list-disc pl-5 mt-2 space-y-1">
              <li>Des plateformes comme WordPress.com, Wix ou Blogger qui offrent des versions gratuites</li>
              <li>Des hébergements gratuits (avec des limitations)</li>
              <li>Des thèmes et templates gratuits</li>
            </ul>
            <p className="mt-2">Cependant, les solutions gratuites présentent souvent des limitations importantes :</p>
            <ul className="list-disc pl-5 mt-2 space-y-1">
              <li>Fonctionnalités réduites</li>
              <li>Présence de publicités</li>
              <li>Nom de domaine non personnalisé</li>
              <li>Espace de stockage limité</li>
              <li>Support client minimal</li>
            </ul>
            <p className="mt-2">Pour un site professionnel, nous recommandons une solution sur mesure qui vous permettra d'avoir un site adapté à vos besoins spécifiques.</p>
          </div>
        )
      },
      {
        question: "Comment créer un site internet de vente en ligne ?",
        answer: (
          <div>
            <p>Pour créer un site de vente en ligne efficace, vous devez :</p>
            <ul className="list-disc pl-5 mt-2 space-y-1">
              <li>Choisir une plateforme e-commerce adaptée (WooCommerce, Shopify, PrestaShop)</li>
              <li>Sélectionner un design professionnel et adapté à votre marque</li>
              <li>Configurer les méthodes de paiement sécurisées</li>
              <li>Mettre en place les options de livraison</li>
              <li>Créer des fiches produits détaillées et attrayantes</li>
              <li>Optimiser pour le référencement e-commerce</li>
              <li>Configurer le suivi des commandes et la gestion des stocks</li>
            </ul>
            <p className="mt-2">Nous proposons des solutions e-commerce complètes et personnalisées pour vous aider à lancer votre boutique en ligne avec succès.</p>
          </div>
        )
      },
      {
        question: "Combien de temps faut-il pour créer un site internet ?",
        answer: (
          <p>
            La durée de création d'un site internet dépend de sa complexité. Pour un site vitrine de quelques pages, comptez 2 à 4 semaines. Un site e-commerce ou une plateforme avec des fonctionnalités avancées peut nécessiter 1 à 3 mois. Notre équipe établit un planning précis lors du lancement du projet et vous tient informé à chaque étape du développement.
          </p>
        )
      },
      {
        question: "Site internet gratuit ou payant ?",
        answer: (
          <div>
            <p>La décision entre un site gratuit ou payant dépend de vos besoins :</p>
            <p className="font-semibold mt-2">Site gratuit :</p>
            <ul className="list-disc pl-5 mt-1 space-y-1">
              <li>Avantages : coût nul, mise en place rapide</li>
              <li>Inconvénients : fonctionnalités limitées, publicités imposées, nom de domaine non personnalisé, image moins professionnelle</li>
            </ul>
            <p className="font-semibold mt-2">Site payant :</p>
            <ul className="list-disc pl-5 mt-1 space-y-1">
              <li>Avantages : fonctionnalités complètes, absence de publicités, nom de domaine personnalisé, design sur mesure, contrôle total, meilleur référencement</li>
              <li>Inconvénients : investissement financier nécessaire</li>
            </ul>
            <p className="mt-2">Pour une entreprise, un site payant est généralement recommandé car il offre une image plus professionnelle et des performances supérieures.</p>
          </div>
        )
      },
      {
        question: "Comment faire pour créer un site internet pas cher ?",
        answer: (
          <div>
            <p>Pour créer un site internet à moindre coût tout en conservant une qualité professionnelle :</p>
            <ul className="list-disc pl-5 mt-2 space-y-1">
              <li>Optez pour des solutions clés en main adaptées aux petits budgets</li>
              <li>Choisissez un template préconçu plutôt qu'un design sur mesure</li>
              <li>Limitez le nombre de pages et de fonctionnalités au strict nécessaire</li>
              <li>Faites appel à une agence locale qui propose des formules adaptées</li>
              <li>Envisagez un site évolutif que vous pourrez améliorer progressivement</li>
            </ul>
            <p className="mt-2">Nous proposons des solutions adaptées à tous les budgets et pouvons vous conseiller sur les options les plus économiques pour votre projet.</p>
          </div>
        )
      },
      {
        question: "Prix site internet",
        answer: (
          <div>
            <p>Le prix d'un site internet varie considérablement selon vos besoins :</p>
            <ul className="list-disc pl-5 mt-2 space-y-1">
              <li><span className="font-semibold">Site vitrine simple</span> : à partir de 1000€</li>
              <li><span className="font-semibold">Site avec fonctionnalités spécifiques</span> : de 2000€ à 5000€</li>
              <li><span className="font-semibold">Site e-commerce</span> : à partir de 3000€</li>
              <li><span className="font-semibold">Plateforme web complexe</span> : de 5000€ à 15000€ et plus</li>
            </ul>
            <p className="mt-2">Ces prix incluent généralement la conception, le développement, l'intégration du contenu initial et la mise en ligne. Des frais récurrents s'ajoutent pour l'hébergement, la maintenance et les mises à jour de sécurité. Contactez-nous pour obtenir un devis personnalisé adapté à votre projet.</p>
          </div>
        )
      }
    ]
  },
  {
    title: "Référencement et visibilité",
    icon: <Search size={20} />,
    questions: [
      {
        question: "Pourquoi mon site internet n'apparaît pas sur Google ?",
        answer: (
          <div>
            <p>Plusieurs raisons peuvent expliquer pourquoi votre site n'apparaît pas dans les résultats de recherche Google :</p>
            <ul className="list-disc pl-5 mt-2 space-y-1">
              <li>Votre site est trop récent (Google peut prendre plusieurs semaines pour indexer un nouveau site)</li>
              <li>Votre site contient des balises qui bloquent l'indexation</li>
              <li>Problèmes techniques empêchant le crawl de Google</li>
              <li>Manque d'optimisation SEO (contenu, mots-clés, structure)</li>
              <li>Pénalité Google suite à des pratiques non conformes</li>
              <li>Forte concurrence sur vos mots-clés cibles</li>
            </ul>
            <p className="mt-2">Notre équipe peut réaliser un audit SEO complet de votre site pour identifier les problèmes et mettre en place une stratégie d'optimisation efficace.</p>
          </div>
        )
      },
      {
        question: "Qu'est-ce que le référencement d'un site internet ?",
        answer: (
          <div>
            <p>Le référencement (SEO - Search Engine Optimization) est l'ensemble des techniques qui permettent d'améliorer la visibilité d'un site web dans les résultats naturels des moteurs de recherche. Il se compose de trois aspects principaux :</p>
            <ul className="list-disc pl-5 mt-2 space-y-1">
              <li><span className="font-semibold">Référencement technique</span> : optimisation de la structure du site, de sa vitesse de chargement, de son adaptation mobile...</li>
              <li><span className="font-semibold">Référencement on-page</span> : optimisation du contenu, des balises, de la structure des URL...</li>
              <li><span className="font-semibold">Référencement off-page</span> : obtention de liens depuis d'autres sites, présence sur les réseaux sociaux...</li>
            </ul>
            <p className="mt-2">Un bon référencement permet d'attirer un trafic qualifié sur votre site et d'améliorer votre visibilité auprès de prospects intéressés par vos produits ou services.</p>
          </div>
        )
      },
      {
        question: "Comment améliorer la visibilité de mon site ?",
        answer: (
          <div>
            <p>Pour améliorer la visibilité de votre site, plusieurs stratégies complémentaires sont à mettre en œuvre :</p>
            <ul className="list-disc pl-5 mt-2 space-y-1">
              <li><span className="font-semibold">SEO (référencement naturel)</span> : optimisation technique, création de contenu de qualité, obtention de backlinks</li>
              <li><span className="font-semibold">SEA (référencement payant)</span> : campagnes Google Ads, Microsoft Advertising</li>
              <li><span className="font-semibold">SMO (médias sociaux)</span> : présence active sur les réseaux sociaux pertinents pour votre activité</li>
              <li><span className="font-semibold">Content Marketing</span> : création et diffusion de contenu à valeur ajoutée</li>
              <li><span className="font-semibold">Référencement local</span> : optimisation de Google My Business, annuaires locaux</li>
              <li><span className="font-semibold">Email marketing</span> : communication régulière avec votre audience</li>
            </ul>
            <p className="mt-2">Notre approche est d'élaborer une stratégie sur mesure combinant ces différents leviers selon vos objectifs et votre secteur d'activité.</p>
          </div>
        )
      }
    ]
  },
  {
    title: "Types de sites internet",
    icon: <ShoppingCart size={20} />,
    questions: [
      {
        question: "C'est quoi un site vitrine ?",
        answer: (
          <p>
            Un site vitrine est un site internet qui présente votre entreprise et ses activités sans proposer de transactions commerciales en ligne. Il sert à exposer votre identité, vos produits, services et coordonnées, à la manière d'une vitrine physique. C'est une solution idéale pour les entreprises qui souhaitent être présentes sur internet sans nécessiter de fonctionnalités de vente en ligne. Il comprend généralement une page d'accueil, une page "À propos", une présentation des services/produits, et une page de contact.
          </p>
        )
      },
      {
        question: "C'est quoi un site institutionnel ?",
        answer: (
          <p>
            Un site institutionnel est un site internet qui présente une organisation, une entreprise ou une institution de manière officielle. Il met l'accent sur l'identité, les valeurs, la mission et la vision de l'entité. Ce type de site vise à renforcer l'image de marque et la crédibilité plutôt qu'à générer directement des ventes. Il contient généralement des sections comme l'historique de l'organisation, sa structure, ses engagements, ses partenaires, ses actualités et publications. Les sites institutionnels sont particulièrement importants pour les grandes entreprises, les associations, les fondations et les organismes publics.
          </p>
        )
      },
      {
        question: "C'est quoi un site marchand ?",
        answer: (
          <div>
            <p>Un site marchand, également appelé site e-commerce, est une plateforme en ligne qui permet de vendre des produits ou services directement aux consommateurs via internet. Il comprend les fonctionnalités essentielles suivantes :</p>
            <ul className="list-disc pl-5 mt-2 space-y-1">
              <li>Catalogue de produits avec descriptions, images et prix</li>
              <li>Panier d'achat</li>
              <li>Système de paiement sécurisé</li>
              <li>Gestion des comptes clients</li>
              <li>Suivi de commandes</li>
              <li>Gestion des stocks</li>
              <li>Options de livraison</li>
            </ul>
            <p className="mt-2">Ce type de site permet aux entreprises de vendre en ligne 24h/24 et 7j/7, d'élargir leur zone de chalandise et d'augmenter leur chiffre d'affaires.</p>
          </div>
        )
      },
      {
        question: "Quelle différence entre site internet et site e-commerce ?",
        answer: (
          <div>
            <p>La principale différence entre un site internet standard et un site e-commerce réside dans leur fonction première :</p>
            <p className="font-semibold mt-2">Site internet standard (vitrine) :</p>
            <ul className="list-disc pl-5 mt-1 space-y-1">
              <li>Présente des informations sur l'entreprise, ses produits et services</li>
              <li>Vise à informer et à générer des contacts</li>
              <li>Ne permet pas de transactions commerciales directes</li>
              <li>Généralement plus simple en termes de fonctionnalités</li>
            </ul>
            <p className="font-semibold mt-2">Site e-commerce :</p>
            <ul className="list-disc pl-5 mt-1 space-y-1">
              <li>Permet de vendre directement des produits ou services en ligne</li>
              <li>Intègre un système de paiement, un panier d'achat et une gestion des commandes</li>
              <li>Nécessite des fonctionnalités avancées (gestion des stocks, suivi de commandes)</li>
              <li>Comprend des aspects légaux supplémentaires (CGV, politique de retour)</li>
              <li>Généralement plus complexe et coûteux à développer et maintenir</li>
            </ul>
          </div>
        )
      },
      {
        question: "Quels sont les différents types de sites Web ?",
        answer: (
          <div>
            <p>Il existe plusieurs types de sites web, chacun ayant des objectifs et fonctionnalités spécifiques :</p>
            <ul className="list-disc pl-5 mt-2 space-y-1">
              <li><span className="font-semibold">Site vitrine</span> : présente une entreprise et ses activités sans vente en ligne</li>
              <li><span className="font-semibold">Site e-commerce</span> : permet la vente de produits ou services en ligne</li>
              <li><span className="font-semibold">Site institutionnel</span> : présente officiellement une organisation et renforce son image</li>
              <li><span className="font-semibold">Blog</span> : site axé sur le contenu, publié régulièrement et chronologiquement</li>
              <li><span className="font-semibold">Portfolio</span> : présente les travaux et réalisations d'un professionnel</li>
              <li><span className="font-semibold">Site applicatif</span> : offre des fonctionnalités interactives comme des services en ligne</li>
              <li><span className="font-semibold">Forum</span> : plateforme d'échange entre utilisateurs</li>
              <li><span className="font-semibold">Site intranet</span> : réseau privé accessible uniquement aux membres d'une organisation</li>
              <li><span className="font-semibold">Site média</span> : publie du contenu d'actualité ou thématique</li>
            </ul>
            <p className="mt-2">Le choix du type de site dépend de vos objectifs commerciaux, de votre public cible et des fonctionnalités dont vous avez besoin.</p>
          </div>
        )
      }
    ]
  },
  {
    title: "Gestion et maintenance",
    icon: <Settings size={20} />,
    questions: [
      {
        question: "Comment et pourquoi modifier son site internet ?",
        answer: (
          <div>
            <p>Modifier régulièrement son site internet est essentiel pour plusieurs raisons :</p>
            <ul className="list-disc pl-5 mt-2 space-y-1">
              <li>Maintenir les informations à jour (produits, services, coordonnées)</li>
              <li>Améliorer l'expérience utilisateur</li>
              <li>Renforcer le référencement (Google privilégie les sites régulièrement mis à jour)</li>
              <li>S'adapter aux évolutions technologiques et aux tendances</li>
              <li>Corriger les bugs et failles de sécurité</li>
            </ul>
            <p className="mt-2">Pour modifier votre site, vous pouvez :</p>
            <ul className="list-disc pl-5 mt-2 space-y-1">
              <li>Utiliser un CMS (Content Management System) comme WordPress pour les modifications de contenu</li>
              <li>Faire appel à un professionnel pour les modifications techniques</li>
              <li>Utiliser nos services de maintenance qui incluent les mises à jour régulières</li>
            </ul>
          </div>
        )
      },
      {
        question: "Pourquoi refaire son site internet ?",
        answer: (
          <div>
            <p>Il peut être nécessaire de refaire entièrement son site internet dans plusieurs cas :</p>
            <ul className="list-disc pl-5 mt-2 space-y-1">
              <li>Site obsolète techniquement (non responsive, technologies dépassées)</li>
              <li>Design démodé qui nuit à votre image de marque</li>
              <li>Performances insuffisantes (temps de chargement lent, mauvaise UX)</li>
              <li>Problèmes structurels de référencement</li>
              <li>Évolution majeure de votre activité ou positionnement</li>
              <li>Difficultés à maintenir ou mettre à jour le site actuel</li>
              <li>Besoin de nouvelles fonctionnalités impossibles à intégrer sur la plateforme existante</li>
            </ul>
            <p className="mt-2">Un site refait à neuf peut significativement améliorer votre image, vos performances et votre conversion. Nous proposons des services complets de refonte adaptés à vos besoins spécifiques.</p>
          </div>
        )
      },
      {
        question: "Pourquoi refondre son site internet ?",
        answer: (
          <div>
            <p>La refonte d'un site internet apporte de nombreux avantages :</p>
            <ul className="list-disc pl-5 mt-2 space-y-1">
              <li><span className="font-semibold">Modernisation visuelle</span> : un design contemporain améliore l'image de votre entreprise</li>
              <li><span className="font-semibold">Amélioration technique</span> : meilleure vitesse, sécurité et compatibilité</li>
              <li><span className="font-semibold">Optimisation mobile</span> : adaptation parfaite à tous les appareils</li>
              <li><span className="font-semibold">Meilleur référencement</span> : structure SEO optimisée dès la conception</li>
              <li><span className="font-semibold">Expérience utilisateur</span> : navigation intuitive et parcours client optimisé</li>
              <li><span className="font-semibold">Nouvelles fonctionnalités</span> : intégration d'outils modernes adaptés à vos besoins actuels</li>
              <li><span className="font-semibold">Conversion améliorée</span> : meilleur taux de transformation des visiteurs en clients</li>
            </ul>
            <p className="mt-2">Une refonte est généralement recommandée tous les 3 à 5 ans pour rester compétitif dans l'environnement digital en constante évolution.</p>
          </div>
        )
      },
      {
        question: "Qui héberge les sites internet ?",
        answer: (
          <div>
            <p>Les sites internet sont hébergés par des prestataires spécialisés appelés hébergeurs web, qui fournissent :</p>
            <ul className="list-disc pl-5 mt-2 space-y-1">
              <li>Des serveurs connectés en permanence à internet</li>
              <li>De l'espace de stockage pour les fichiers du site</li>
              <li>Une bande passante pour gérer le trafic</li>
              <li>Des services comme les bases de données, emails, certificats SSL</li>
              <li>Une maintenance technique et une sécurité</li>
            </ul>
            <p className="mt-2">Il existe différents types d'hébergement :</p>
            <ul className="list-disc pl-5 mt-2 space-y-1">
              <li><span className="font-semibold">Hébergement mutualisé</span> : plusieurs sites partagent un même serveur (économique)</li>
              <li><span className="font-semibold">Hébergement dédié</span> : serveur exclusivement réservé à votre site (performant)</li>
              <li><span className="font-semibold">VPS</span> : serveur virtuel privé, solution intermédiaire</li>
              <li><span className="font-semibold">Cloud</span> : ressources réparties sur plusieurs serveurs (flexible et scalable)</li>
            </ul>
            <p className="mt-2">Dans le cadre de nos services, nous pouvons gérer l'hébergement de votre site pour vous garantir fiabilité et performances.</p>
          </div>
        )
      },
      {
        question: "Qui crée un site internet ?",
        answer: (
          <div>
            <p>La création d'un site internet professionnel fait généralement intervenir plusieurs métiers complémentaires :</p>
            <ul className="list-disc pl-5 mt-2 space-y-1">
              <li><span className="font-semibold">Chef de projet web</span> : coordonne l'ensemble du projet</li>
              <li><span className="font-semibold">UX/UI Designer</span> : conçoit l'expérience utilisateur et l'interface</li>
              <li><span className="font-semibold">Développeur front-end</span> : code la partie visible du site (HTML, CSS, JavaScript)</li>
              <li><span className="font-semibold">Développeur back-end</span> : programme les fonctionnalités et bases de données</li>
              <li><span className="font-semibold">Intégrateur web</span> : transforme les maquettes en pages web fonctionnelles</li>
              <li><span className="font-semibold">Rédacteur web</span> : crée les contenus optimisés pour le web</li>
              <li><span className="font-semibold">Référenceur (SEO)</span> : optimise le site pour les moteurs de recherche</li>
            </ul>
            <p className="mt-2">Notre agence dispose d'équipes pluridisciplinaires qui collaborent pour créer des sites web performants et adaptés à vos besoins spécifiques. Nous gérons l'ensemble du processus de création pour vous offrir une solution clé en main.</p>
          </div>
        )
      },
      {
        question: "Qui est propriétaire des sites internet ?",
        answer: (
          <div>
            <p>La propriété d'un site internet comporte plusieurs aspects :</p>
            <ul className="list-disc pl-5 mt-2 space-y-1">
              <li><span className="font-semibold">Nom de domaine</span> : appartient à la personne ou l'entité qui l'a enregistré et qui paie les frais de renouvellement</li>
              <li><span className="font-semibold">Contenu du site</span> : textes, images, vidéos appartiennent généralement au commanditaire du site, sauf accord contraire</li>
              <li><span className="font-semibold">Code source</span> : sa propriété dépend du contrat établi avec le développeur ou l'agence web</li>
              <li><span className="font-semibold">Design graphique</span> : peut appartenir au client ou au designer selon les termes du contrat</li>
            </ul>
            <p className="mt-2">Chez nous, nous veillons à ce que nos clients soient pleinement propriétaires de leur site internet. Nos contrats prévoient explicitement la cession des droits sur le code source, le design et les contenus créés spécifiquement pour votre projet. Vous restez également propriétaire de votre nom de domaine, que nous pouvons gérer pour vous si vous le souhaitez.</p>
          </div>
        )
      }
    ]
  },
  {
    title: "Utilité d'un site internet",
    icon: <Building size={20} />,
    questions: [
      {
        question: "Pourquoi faire un site internet pour son entreprise ?",
        answer: (
          <div>
            <p>Créer un site internet pour votre entreprise présente de nombreux avantages stratégiques :</p>
            <ul className="list-disc pl-5 mt-2 space-y-1">
              <li><span className="font-semibold">Visibilité permanente</span> : votre entreprise est accessible 24h/24 et 7j/7</li>
              <li><span className="font-semibold">Crédibilité professionnelle</span> : un site de qualité renforce votre image de marque</li>
              <li><span className="font-semibold">Acquisition de nouveaux clients</span> : attirez des prospects grâce au référencement</li>
              <li><span className="font-semibold">Fidélisation</span> : maintenez le contact avec vos clients existants</li>
              <li><span className="font-semibold">Information actualisée</span> : présentez vos produits, services et actualités</li>
              <li><span className="font-semibold">Avantage concurrentiel</span> : démarquez-vous de vos concurrents moins bien établis en ligne</li>
              <li><span className="font-semibold">Réduction des coûts</span> : communication moins onéreuse qu'avec les médias traditionnels</li>
              <li><span className="font-semibold">Expansion géographique</span> : touchez des clients au-delà de votre zone locale</li>
            </ul>
            <p className="mt-2">Dans le contexte actuel où les consommateurs recherchent majoritairement des informations en ligne avant tout achat, ne pas avoir de site internet devient un handicap commercial majeur.</p>
          </div>
        )
      },
      {
        question: "Pourquoi avoir un site internet ?",
        answer: (
          <div>
            <p>Un site internet est devenu indispensable pour toute activité professionnelle car il :</p>
            <ul className="list-disc pl-5 mt-2 space-y-1">
              <li>Renforce votre présence en ligne et votre visibilité</li>
              <li>Génère de nouveaux prospects et contacts commerciaux</li>
              <li>Présente vos produits et services de façon détaillée</li>
              <li>Consolide votre crédibilité et votre image de marque</li>
              <li>Permet de communiquer directement avec vos clients</li>
              <li>Vous différencie de la concurrence</li>
              <li>Constitue un point de contact permanent, sans contrainte d'horaires</li>
              <li>Peut devenir un canal de vente directe</li>
            </ul>
            <p className="mt-2">Selon les études récentes, plus de 80% des consommateurs recherchent des informations en ligne avant de faire un achat, même pour des achats locaux. Sans site web, vous êtes invisible pour cette majorité de clients potentiels.</p>
          </div>
        )
      },
      {
        question: "Quel intérêt d'avoir un site internet ?",
        answer: (
          <div>
            <p>Posséder un site internet présente de multiples intérêts pour votre activité :</p>
            <ul className="list-disc pl-5 mt-2 space-y-1">
              <li>Développez votre notoriété et votre présence digitale</li>
              <li>Augmentez votre chiffre d'affaires grâce à de nouveaux clients</li>
              <li>Fournissez des informations complètes sur vos produits et services</li>
              <li>Recueillez des demandes de devis ou des prises de contact</li>
              <li>Optimisez votre communication à moindre coût</li>
              <li>Améliorez votre service client avec des outils en ligne</li>
              <li>Collectez des données précieuses sur vos visiteurs et clients</li>
              <li>Restez compétitif face à vos concurrents</li>
            </ul>
            <p className="mt-2">Un site internet bien conçu et régulièrement mis à jour constitue un levier de croissance essentiel dans la stratégie de développement de toute entreprise.</p>
          </div>
        )
      },
      {
        question: "À quoi sert un site internet ?",
        answer: (
          <div>
            <p>Un site internet remplit plusieurs fonctions essentielles pour votre activité :</p>
            <ul className="list-disc pl-5 mt-2 space-y-1">
              <li><span className="font-semibold">Vitrine digitale</span> : présente votre entreprise, vos produits et services</li>
              <li><span className="font-semibold">Outil marketing</span> : attire de nouveaux clients et développe votre audience</li>
              <li><span className="font-semibold">Canal de vente</span> : permet de vendre directement en ligne (e-commerce)</li>
              <li><span className="font-semibold">Support client</span> : offre des informations et de l'assistance</li>
              <li><span className="font-semibold">Centre de ressources</span> : partage du contenu utile pour votre audience</li>
              <li><span className="font-semibold">Outil de communication</span> : diffuse vos actualités et maintient le contact</li>
              <li><span className="font-semibold">Outil de légitimation</span> : renforce votre crédibilité professionnelle</li>
              <li><span className="font-semibold">Outil d'analyse</span> : collecte des données sur votre audience</li>
            </ul>
            <p className="mt-2">Selon vos objectifs commerciaux, certaines de ces fonctions seront plus prioritaires que d'autres dans la conception de votre site.</p>
          </div>
        )
      },
      {
        question: "Quoi mettre sur son site internet ?",
        answer: (
          <div>
            <p>Le contenu d'un site internet efficace devrait inclure :</p>
            <ul className="list-disc pl-5 mt-2 space-y-1">
              <li><span className="font-semibold">Présentation de l'entreprise</span> : histoire, valeurs, équipe</li>
              <li><span className="font-semibold">Catalogue de produits/services</span> : descriptions détaillées, avantages, tarifs</li>
              <li><span className="font-semibold">Coordonnées complètes</span> : adresse, téléphone, email, formulaire de contact</li>
              <li><span className="font-semibold">Témoignages clients</span> : avis, études de cas, références</li>
              <li><span className="font-semibold">FAQ</span> : réponses aux questions fréquentes</li>
              <li><span className="font-semibold">Blog ou actualités</span> : contenus informatifs régulièrement mis à jour</li>
              <li><span className="font-semibold">Médias</span> : photos professionnelles, vidéos, infographies</li>
              <li><span className="font-semibold">Mentions légales</span> : CGV, politique de confidentialité</li>
              <li><span className="font-semibold">Liens vers vos réseaux sociaux</span></li>
            </ul>
            <p className="mt-2">Le contenu doit être adapté à votre cible, optimisé pour le référencement et régulièrement mis à jour pour maintenir l'intérêt et la pertinence.</p>
          </div>
        )
      },
      {
        question: "Quoi vendre sur son site internet ?",
        answer: (
          <div>
            <p>Votre site internet peut vous permettre de vendre :</p>
            <ul className="list-disc pl-5 mt-2 space-y-1">
              <li><span className="font-semibold">Produits physiques</span> : articles à expédier aux clients</li>
              <li><span className="font-semibold">Produits numériques</span> : ebooks, logiciels, musique, photos</li>
              <li><span className="font-semibold">Services</span> : prestations professionnelles, consultations</li>
              <li><span className="font-semibold">Abonnements</span> : accès régulier à du contenu ou des services</li>
              <li><span className="font-semibold">Formations</span> : cours en ligne, webinaires</li>
              <li><span className="font-semibold">Réservations</span> : rendez-vous, événements, hébergements</li>
            </ul>
            <p className="mt-2">Le choix de ce que vous vendez doit s'aligner avec :</p>
            <ul className="list-disc pl-5 mt-2 space-y-1">
              <li>Votre expertise et vos compétences</li>
              <li>Les besoins identifiés de votre public cible</li>
              <li>Votre capacité à fournir et livrer ces produits/services</li>
              <li>La rentabilité et les marges potentielles</li>
            </ul>
            <p className="mt-2">Notre équipe peut vous aider à identifier les meilleures opportunités de vente en ligne pour votre activité spécifique.</p>
          </div>
        )
      }
    ]
  },
  {
    title: "Questions diverses",
    icon: <HelpCircle size={20} />,
    questions: [
      {
        question: "Comment utiliser Google My Business pour mon entreprise ?",
        answer: (
          <div>
            <p>Pour utiliser efficacement Google My Business :</p>
            <ol className="list-decimal pl-5 mt-2 space-y-2">
              <li>Créez ou réclamez votre fiche d'établissement</li>
              <li>Complétez toutes les informations (adresse, horaires, téléphone, site web, catégorie)</li>
              <li>Ajoutez des photos de qualité de votre entreprise, produits et services</li>
              <li>Publiez régulièrement des actualités et offres spéciales</li>
              <li>Répondez rapidement aux avis clients, positifs comme négatifs</li>
              <li>Utilisez les statistiques pour améliorer votre visibilité</li>
            </ol>
            <p className="mt-2">Une fiche Google My Business bien optimisée améliore considérablement votre visibilité locale et peut générer jusqu'à 70% de visites supplémentaires en magasin.</p>
          </div>
        )
      },
      {
        question: "Qu'est-ce que l'e-réputation ?",
        answer: (
          <p>
            L'e-réputation, ou réputation numérique, désigne l'image et la notoriété d'une entreprise ou d'une personne sur internet. Elle se construit à travers les avis clients, les commentaires sur les réseaux sociaux, les articles de presse en ligne, les forums et tout autre contenu visible sur le web. Une bonne e-réputation est essentielle car 85% des consommateurs consultent les avis en ligne avant d'acheter. Notre service de gestion de l'e-réputation comprend la surveillance de votre image en ligne, la sollicitation d'avis positifs, la gestion des commentaires négatifs et la création de contenu valorisant pour renforcer votre présence digitale.
          </p>
        )
      },
      {
        question: "Quelle est la différence entre SEO et SEA ?",
        answer: (
          <div>
            <p>SEO (Search Engine Optimization) et SEA (Search Engine Advertising) sont deux approches complémentaires du référencement :</p>
            <p className="font-semibold mt-2">SEO - Référencement naturel :</p>
            <ul className="list-disc pl-5 mt-1 space-y-1">
              <li>Résultats organiques (non payants) dans les moteurs de recherche</li>
              <li>Travail de fond sur le contenu, la technique et les liens</li>
              <li>Résultats sur le moyen/long terme (3-6 mois minimum)</li>
              <li>Investissement initial plus important, mais coût à long terme réduit</li>
              <li>Meilleure durabilité des résultats</li>
              <li>Taux de clics généralement plus élevés (70% des clics vont aux résultats organiques)</li>
            </ul>
            <p className="font-semibold mt-2">SEA - Référencement payant :</p>
            <ul className="list-disc pl-5 mt-1 space-y-1">
              <li>Annonces payantes affichées en haut des résultats de recherche</li>
              <li>Système d'enchères (paiement au clic - PPC)</li>
              <li>Résultats immédiats</li>
              <li>Coûts continus tant que les campagnes sont actives</li>
              <li>Ciblage très précis (mots-clés, localisation, horaires, appareils)</li>
              <li>Facilement mesurable avec des métriques détaillées</li>
            </ul>
            <p className="mt-2">Une stratégie digitale efficace combine généralement SEO et SEA : le SEA pour des résultats rapides et le SEO pour une visibilité durable.</p>
          </div>
        )
      }
    ]
  }
];
