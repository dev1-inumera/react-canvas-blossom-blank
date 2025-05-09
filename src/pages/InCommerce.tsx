
import React, {useState} from "react";
import { Link } from "react-router-dom";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { motion } from 'framer-motion';
import { Separator } from "@/components/ui/separator";
import { ArrowRight, Check, ShoppingBag, Package, Calendar, Users, Rocket, CreditCard } from "lucide-react";
import { partnerLogos } from "@/data/referenceData";

const InCommerce = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const faqs = [
    {
      question: "Puis-je choisir mes produits ?",
      answer: "Oui, vous pouvez proposer vos propres produits ou nous laisser faire le sourcing. Que vous ayez déjà une sélection de produits en tête ou que vous ayez besoin d'aide pour trouver les meilleures options, notre équipe vous accompagne dans cette démarche."
    },
    {
      question: "Est-ce compatible avec Shopify ou WooCommerce ?",
      answer: "Oui, nous vous laissons le choix de la plateforme selon vos besoins. Nous maîtrisons parfaitement Shopify et WooCommerce et nous vous conseillerons sur la solution la plus adaptée à votre projet et à votre budget."
    },
    {
      question: "Est-ce que je peux vendre partout ?",
      answer: "Oui, votre boutique est livrée prête pour l'international (livraison + paiements). Nous configurons les options de livraison, les devises et les langues selon vos marchés cibles pour vous permettre de vendre dans le monde entier."
    },
    {
      question: "Est-ce que vous gérez aussi la pub ?",
      answer: "Oui, nos formules Premium incluent un pack publicitaire. Nous préparons et configurons vos premières campagnes Facebook et Instagram pour vous aider à démarrer rapidement. Des options de gestion continue de vos publicités sont également disponibles."
    }
  ];

  const toggle = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };
  return (
    <div className="min-h-screen pt-6 flex flex-col bg-white">
      <Navigation />
      <main className="flex-grow">
        {/* Hero Section */}
        <section className="relative  bg-white py-16 md:py-24 overflow-hidden">
          <div className="container mx-auto px-4">
            <div className="flex flex-col lg:flex-row items-center gap-12">
              <div className="w-full lg:w-1/2">
                <h1 className="text-4xl md:text-5xl font-bold text-darkblue-900 mb-6">
                  L'e-commerce <span className="text-red-600">clé en main</span>, sans stress
                </h1>
                <p className="text-lg text-gray-700 mb-8 max-w-xl">
                  in-commerce est une solution de création de boutiques en ligne optimisée pour les entrepreneurs qui veulent se lancer rapidement en dropshipping ou en e-commerce — sans compétences techniques ni perte de temps.
                </p>
                <div className="mb-8">
                  <Link to="/contact">
                    <Button 
                      className="bg-red-600 hover:bg-red-700 text-white rounded-full py-3 px-8 text-lg font-medium"
                    >
                      Créer ma boutique maintenant
                    </Button>
                  </Link>
                </div>
                <div className="flex flex-wrap gap-4 items-center">
                  <div className="flex items-center text-green-600">
                    <Check size={18} className="mr-1" />
                    <span className="text-gray-700">Site e-commerce clé en main</span>
                  </div>
                  <div className="flex items-center text-green-600">
                    <Check size={18} className="mr-1" />
                    <span className="text-gray-700">Produits & fournisseurs intégrés</span>
                  </div>
                  <div className="flex items-center text-green-600">
                    <Check size={18} className="mr-1" />
                    <span className="text-gray-700">Automatisation des commandes</span>
                  </div>
                  <div className="flex items-center text-green-600">
                    <Check size={18} className="mr-1" />
                    <span className="text-gray-700">Accompagnement personnalisé</span>
                  </div>
                </div>
              </div>
              <div className="w-full lg:w-1/2 relative">
                <div className="relative">
                  <div className="absolute animate-float -top-10 -left-10 w-20 h-20 bg-red-100 rounded-full opacity-70"></div>
                  <div className="absolute animate-float -bottom-10 -right-10 w-32 h-32 bg-darkblue-100 rounded-full opacity-50"></div>
                  <img 
                    src="/lovable-uploads/incom.png" 
                    alt="Création boutique en ligne" 
                    className="relative z-10 w-full max-w-lg mx-auto"
                  />
                </div>
              </div>
            </div>
            
            <div className="mt-16 grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
              <div className="bg-gray-50 rounded-xl p-6 text-center">
                <div className="text-3xl font-bold text-red-600 mb-2">+100%</div>
                <div className="text-lg text-gray-700">gain de temps</div>
              </div>
              <div className="bg-gray-50 rounded-xl p-6 text-center">
                <div className="text-3xl font-bold text-red-600 mb-2">+60%</div>
                <div className="text-lg text-gray-700">chances de réussir son lancement</div>
              </div>
            </div>
          </div>
        </section>

        {/* Logos Section */}
        <section className="py-12 bg-gray-50">
          <div className="container mx-auto px-4">
            <div className="text-center mb-8">
              <h3 className="text-lg font-medium text-gray-700">Ils ont choisi in-commerce</h3>
            </div>
            <div className="flex flex-wrap justify-center items-center gap-8 md:gap-12">
              {partnerLogos.map((logo, index) => (
                <div key={index} className="grayscale opacity-70 hover:opacity-100 transition-opacity">
                  <div className="h-10 flex items-center">
                    <img 
                      src={logo.image} 
                      alt={logo.name} 
                      className="max-h-8 max-w-[120px] object-contain" 
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* What is in-commerce */}
        <section className="py-16 md:py-24">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-darkblue-900 mb-4">
                Qu'est-ce que <span className="text-red-600">in-commerce</span> ?
              </h2>
              <p className="max-w-3xl mx-auto text-lg text-gray-700">
                Notre mission : vous offrir une boutique en ligne prête à vendre, pendant que vous vous concentrez sur la vente et le marketing.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 max-w-5xl mx-auto">
              <Card className="border-0 shadow-lg rounded-xl overflow-hidden h-full">
                <CardContent className="p-6 h-full">
                  <div className="w-16 h-16 rounded-full bg-red-100 flex items-center justify-center mb-6">
                    <ShoppingBag className="w-8 h-8 text-red-600" />
                  </div>
                  <h3 className="text-xl font-bold text-darkblue-900 mb-4">Nous créons votre boutique de A à Z</h3>
                  <ul className="space-y-3">
                    <li className="flex items-start">
                      <Check size={18} className="text-green-600 mr-2 mt-1 flex-shrink-0" />
                      <span className="text-gray-700">Installation & configuration technique</span>
                    </li>
                    <li className="flex items-start">
                      <Check size={18} className="text-green-600 mr-2 mt-1 flex-shrink-0" />
                      <span className="text-gray-700">Intégration des produits (dropshipping ou stock)</span>
                    </li>
                    <li className="flex items-start">
                      <Check size={18} className="text-green-600 mr-2 mt-1 flex-shrink-0" />
                      <span className="text-gray-700">Design personnalisé et responsive</span>
                    </li>
                    <li className="flex items-start">
                      <Check size={18} className="text-green-600 mr-2 mt-1 flex-shrink-0" />
                      <span className="text-gray-700">Connexion aux moyens de paiement</span>
                    </li>
                  </ul>
                </CardContent>
              </Card>

              <Card className="border-0 shadow-lg rounded-xl overflow-hidden h-full">
                <CardContent className="p-6 h-full">
                  <div className="w-16 h-16 rounded-full bg-red-100 flex items-center justify-center mb-6">
                    <Rocket className="w-8 h-8 text-red-600" />
                  </div>
                  <h3 className="text-xl font-bold text-darkblue-900 mb-4">Vous vous concentrez sur le lancement</h3>
                  <ul className="space-y-3">
                    <li className="flex items-start">
                      <Check size={18} className="text-green-600 mr-2 mt-1 flex-shrink-0" />
                      <span className="text-gray-700">Boutique livrée prête à l'emploi</span>
                    </li>
                    <li className="flex items-start">
                      <Check size={18} className="text-green-600 mr-2 mt-1 flex-shrink-0" />
                      <span className="text-gray-700">Formation & coaching inclus</span>
                    </li>
                    <li className="flex items-start">
                      <Check size={18} className="text-green-600 mr-2 mt-1 flex-shrink-0" />
                      <span className="text-gray-700">Pack marketing de démarrage</span>
                    </li>
                    <li className="flex items-start">
                      <Check size={18} className="text-green-600 mr-2 mt-1 flex-shrink-0" />
                      <span className="text-gray-700">Possibilité de déléguer la gestion</span>
                    </li>
                  </ul>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* Who is it for */}
        <section className="py-16 md:py-24 bg-gray-50">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-darkblue-900 mb-4">
                À qui s'adresse <span className="text-red-600">in-commerce</span> ?
              </h2>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6 max-w-5xl mx-auto">
              {[
                { icon: <Users size={24} />, title: "Entrepreneurs solo" },
                { icon: <Package size={24} />, title: "Revendeurs & dropshippers" },
                { icon: <CreditCard size={24} />, title: "Freelances & infopreneurs" },
                { icon: <ShoppingBag size={24} />, title: "Artisans & commerçants" },
                { icon: <Users size={24} />, title: "Agences & formateurs" },
              ].map((item, index) => (
                <Card key={index} className="border-0 shadow-md rounded-xl overflow-hidden">
                  <CardContent className="p-6 text-center">
                    <div className="w-12 h-12 rounded-full bg-red-100 flex items-center justify-center mx-auto mb-4">
                      <div className="text-red-600">{item.icon}</div>
                    </div>
                    <h3 className="text-base font-bold text-darkblue-900">{item.title}</h3>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Pricing Plans */}
        <section className="py-16 md:py-24">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-darkblue-900 mb-4">
                Nos Offres <span className="text-red-600">in-commerce</span>
              </h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
              {/* Starter Plan */}
              <div className="bg-white rounded-xl shadow-lg overflow-hidden border border-gray-100">
                <div className="p-8">
                  <h3 className="text-2xl font-bold text-gray-900 mb-2">Formule STARTER</h3>
                  <div className="text-3xl font-bold text-red-600 mb-4">690 €<span className="text-base font-normal text-gray-500">/boutique</span></div>
                  <p className="text-gray-600 mb-6">Pour lancer une boutique rapidement et à petit prix.</p>
                  
                  <ul className="space-y-3 mb-8">
                    <li className="flex items-start">
                      <Check size={18} className="text-green-600 mr-2 mt-1 flex-shrink-0" />
                      <span className="text-gray-700">Boutique Shopify ou WooCommerce</span>
                    </li>
                    <li className="flex items-start">
                      <Check size={18} className="text-green-600 mr-2 mt-1 flex-shrink-0" />
                      <span className="text-gray-700">Jusqu'à 20 produits intégrés</span>
                    </li>
                    <li className="flex items-start">
                      <Check size={18} className="text-green-600 mr-2 mt-1 flex-shrink-0" />
                      <span className="text-gray-700">Design professionnel responsive</span>
                    </li>
                    <li className="flex items-start">
                      <Check size={18} className="text-green-600 mr-2 mt-1 flex-shrink-0" />
                      <span className="text-gray-700">Intégration des moyens de paiement</span>
                    </li>
                    <li className="flex items-start">
                      <Check size={18} className="text-green-600 mr-2 mt-1 flex-shrink-0" />
                      <span className="text-gray-700">Formation d'1h pour prise en main</span>
                    </li>
                    <li className="flex items-start">
                      <Check size={18} className="text-green-600 mr-2 mt-1 flex-shrink-0" />
                      <span className="text-gray-700">Livraison sous 7 jours ouvrés</span>
                    </li>
                  </ul>
                  
                  <p className="text-sm text-gray-600 mb-6">🎯 Idéal pour tester son idée ou démarrer en dropshipping.</p>
                  
                  <Link to="/devis">
                    <Button className="w-full bg-red-600 hover:bg-red-700 text-white py-3 rounded-lg">
                      Commander ma boutique
                    </Button>
                  </Link>
                </div>
              </div>
              
              {/* Standard Plan */}
              <div className="bg-white rounded-xl shadow-lg overflow-hidden border border-gray-100 transform scale-105 z-10">
                <div className="bg-red-600 text-white text-center py-2 text-sm font-medium">PLUS POPULAIRE</div>
                <div className="p-8">
                  <h3 className="text-2xl font-bold text-gray-900 mb-2">Formule STANDARD</h3>
                  <div className="text-3xl font-bold text-red-600 mb-4">1190 €<span className="text-base font-normal text-gray-500">/boutique</span></div>
                  <p className="text-gray-600 mb-6">Pour une boutique plus complète et prête à vendre.</p>
                  
                  <ul className="space-y-3 mb-8">
                    <li className="flex items-start">
                      <Check size={18} className="text-green-600 mr-2 mt-1 flex-shrink-0" />
                      <span className="text-gray-700">Jusqu'à 50 produits + fournisseurs inclus</span>
                    </li>
                    <li className="flex items-start">
                      <Check size={18} className="text-green-600 mr-2 mt-1 flex-shrink-0" />
                      <span className="text-gray-700">Pages légales & politique RGPD</span>
                    </li>
                    <li className="flex items-start">
                      <Check size={18} className="text-green-600 mr-2 mt-1 flex-shrink-0" />
                      <span className="text-gray-700">Tunnel de vente optimisé</span>
                    </li>
                    <li className="flex items-start">
                      <Check size={18} className="text-green-600 mr-2 mt-1 flex-shrink-0" />
                      <span className="text-gray-700">Email marketing basique intégré</span>
                    </li>
                    <li className="flex items-start">
                      <Check size={18} className="text-green-600 mr-2 mt-1 flex-shrink-0" />
                      <span className="text-gray-700">Support pendant 1 mois</span>
                    </li>
                    <li className="flex items-start">
                      <Check size={18} className="text-green-600 mr-2 mt-1 flex-shrink-0" />
                      <span className="text-gray-700">Formation complète + check-up stratégique</span>
                    </li>
                  </ul>
                  
                  <p className="text-sm text-gray-600 mb-6">💼 Parfait pour se lancer sérieusement dans l'e-commerce.</p>
                  
                  <Link to="/devis">
                    <Button className="w-full bg-red-600 hover:bg-red-700 text-white py-3 rounded-lg">
                      Commander ma boutique
                    </Button>
                  </Link>
                </div>
              </div>
              
              {/* Premium Plan */}
              <div className="bg-white rounded-xl shadow-lg overflow-hidden border border-gray-100">
                <div className="p-8">
                  <h3 className="text-2xl font-bold text-gray-900 mb-2">Formule PREMIUM</h3>
                  <div className="text-3xl font-bold text-red-600 mb-4">1990 €<span className="text-base font-normal text-gray-500">/boutique</span></div>
                  <p className="text-gray-600 mb-6">Pour ceux qui veulent une boutique haut de gamme avec accompagnement.</p>
                  
                  <ul className="space-y-3 mb-8">
                    <li className="flex items-start">
                      <Check size={18} className="text-green-600 mr-2 mt-1 flex-shrink-0" />
                      <span className="text-gray-700">Jusqu'à 100 produits + sourcing personnalisé</span>
                    </li>
                    <li className="flex items-start">
                      <Check size={18} className="text-green-600 mr-2 mt-1 flex-shrink-0" />
                      <span className="text-gray-700">Branding complet (logo, couleurs, charte)</span>
                    </li>
                    <li className="flex items-start">
                      <Check size={18} className="text-green-600 mr-2 mt-1 flex-shrink-0" />
                      <span className="text-gray-700">Tunnel de conversion avancé</span>
                    </li>
                    <li className="flex items-start">
                      <Check size={18} className="text-green-600 mr-2 mt-1 flex-shrink-0" />
                      <span className="text-gray-700">Automatisation des emails (Klaviyo ou autre)</span>
                    </li>
                    <li className="flex items-start">
                      <Check size={18} className="text-green-600 mr-2 mt-1 flex-shrink-0" />
                      <span className="text-gray-700">Pack pub Facebook/Instagram prêt à l'emploi</span>
                    </li>
                    <li className="flex items-start">
                      <Check size={18} className="text-green-600 mr-2 mt-1 flex-shrink-0" />
                      <span className="text-gray-700">Coaching 1 mois (stratégie, pubs, offres, etc.)</span>
                    </li>
                  </ul>
                  
                  <p className="text-sm text-gray-600 mb-6">🚀 Solution tout-en-un pour vendre dès le 1er mois.</p>
                  
                  <Link to="/devis">
                    <Button className="w-full bg-red-600 hover:bg-red-700 text-white py-3 rounded-lg">
                      Commander ma boutique
                    </Button>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Results */}
        <section className="py-16 md:py-24 bg-gray-50">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-darkblue-900 mb-4">
                Exemple de résultats avec <span className="text-red-600">in-commerce</span>
              </h2>
            </div>

            <div className="max-w-4xl mx-auto bg-white rounded-xl shadow-lg overflow-hidden">
              <div className="p-6">
                <div className="overflow-x-auto">
                  <table className="min-w-full divide-y divide-gray-200">
                    <thead>
                      <tr>
                        <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Mois</th>
                        <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Boutique livrée</th>
                        <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Produits intégrés</th>
                        <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Visites/jour</th>
                        <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Ventes estimées</th>
                      </tr>
                    </thead>
                    <tbody className="bg-white divide-y divide-gray-200">
                      <tr className="hover:bg-gray-50">
                        <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">M1</td>
                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">1</td>
                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">30</td>
                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">100</td>
                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">10-20</td>
                      </tr>
                      <tr className="hover:bg-gray-50">
                        <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">M2</td>
                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">1</td>
                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">50</td>
                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">300</td>
                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">30-50</td>
                      </tr>
                      <tr className="hover:bg-gray-50">
                        <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">M3</td>
                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">2</td>
                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">100</td>
                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">600</td>
                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">60+</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Why Choose Us */}
        <section className="py-16 md:py-24 bg-gray-50">
  <div className="container mx-auto px-4">
    <div className="text-center mb-16">
      <h2 className="text-3xl md:text-4xl font-bold text-darkblue-900 mb-4">
        Pourquoi choisir{" "}
        <span className="text-red-600">in-commerce</span> ?
      </h2>
    </div>

    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8 max-w-6xl mx-auto">
      {[
        {
          title: "Clé en main",
          description: "Aucune compétence technique requise"
        },
        {
          title: "Rapide et pro",
          description: "Boutique livrée en 5 à 8 jours"
        },
        {
          title: "Design attractif",
          description: "Pour convertir vos visiteurs en acheteurs"
        },
        {
          title: "Accompagnement stratégique",
          description: "Coaching inclus et suivi personnalisé"
        },
        {
          title: "Sourcing de produits",
          description: "Nous vous aidons à choisir les bons fournisseurs"
        }
      ].map((item, index) => (
        <div
          key={index}
          className="bg-white rounded-xl shadow-md overflow-hidden transition-all duration-300 transform hover:scale-105 hover:shadow-xl h-full flex flex-col"
        >
          <div className="p-6 flex flex-col h-full">
            <div className="w-12 h-12 rounded-full bg-red-100 flex items-center justify-center mb-4 shadow-sm">
              <span className="text-red-600 font-bold text-lg">{index + 1}</span>
            </div>
            <h3 className="text-xl font-semibold text-darkblue-900 mb-2 transition-colors">
              {item.title}
            </h3>
            <p className="text-gray-600 flex-grow">{item.description}</p>
          </div>
        </div>
      ))}
    </div>
  </div>
</section>
        
        {/* Steps Section */}
        <section className="py-16 md:py-24 bg-gray-50">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-darkblue-900 mb-4">
                Comment ça marche
              </h2>
            </div>

            <div className="max-w-5xl mx-auto">
              {/* Step 1 */}
              <div className="relative flex flex-col md:flex-row items-center ">
                <div className="w-full md:w-1/2 mb-8 md:mb-0 md:pr-8 relative z-10">
                  <div className="flex items-start space-x-5">
                    <div className="w-16 h-16 flex-shrink-0 rounded-full bg-red-100 flex items-center justify-center text-red-600">
                      <Calendar size={28} />
                    </div>
                    <div>
                      <div className="text-red-600 font-semibold mb-2">ÉTAPE 1</div>
                      <h3 className="text-2xl font-bold text-darkblue-900 mb-4">Premier échange</h3>
                      <p className="text-gray-700 mb-4">
                        Prenez rendez-vous avec un expert in-commerce pour définir votre projet et vos objectifs.
                      </p>
                      <Link to="/contact" className="inline-flex items-center text-red-600 font-medium hover:text-red-700">
                        📅 Réserver un appel
                        <ArrowRight className="ml-2" size={16} />
                      </Link>
                    </div>
                  </div>
                </div>
                <div className="w-full md:w-1/2">
                  <div className="p-[50px]">
                    <img src="/lovable-uploads/calendar.svg" alt="Calendar" className="w-full h-auto rounded-lg" />
                  </div>
                </div>
                {/* Connecting line */}
                <div className="absolute hidden md:block h-full w-px bg-gray-200 left-8 top-16 -bottom-16 z-0"></div>
              </div>

              {/* Step 2 */}
              <div className="relative flex flex-col md:flex-row-reverse items-center">
                <div className="w-full md:w-1/2 mb-8 md:mb-0 md:pl-8 relative z-10">
                  <div className="flex items-start space-x-5">
                    <div className="w-16 h-16 flex-shrink-0 rounded-full bg-red-100 flex items-center justify-center text-red-600">
                      <Users size={28} />
                    </div>
                    <div>
                      <div className="text-red-600 font-semibold mb-2">ÉTAPE 2</div>
                      <h3 className="text-2xl font-bold text-darkblue-900 mb-4">Souscription chez in-commerce</h3>
                      <p className="text-gray-700">
                        Vous pourriez être invité à vérifier votre adresse e-mail, choisir un plan d'abonnement, et accepter les termes et conditions. Cette étape assure que votre compte est bien configuré avant de finaliser l'inscription.
                      </p>
                    </div>
                  </div>
                </div>
                <div className="w-full md:w-1/2">
                  <div className=" p-[50px]">
                    <img src="/lovable-uploads/profile.svg" alt="Registration" className="w-full h-auto rounded-lg" />
                  </div>
                </div>
                {/* Connecting line */}
                <div className="absolute hidden md:block h-full w-px bg-gray-200 right-8 top-16 -bottom-16 z-0 md:left-8"></div>
              </div>

              {/* Step 3 */}
              <div className="relative flex flex-col md:flex-row items-center">
                <div className="w-full md:w-1/2 mb-8 md:mb-0 md:pr-8 relative z-10">
                  <div className="flex items-start space-x-5">
                    <div className="w-16 h-16 flex-shrink-0 rounded-full bg-red-100 flex items-center justify-center text-red-600">
                      <ShoppingBag size={28} />
                    </div>
                    <div>
                      <div className="text-red-600 font-semibold mb-2">ÉTAPE 3</div>
                      <h3 className="text-2xl font-bold text-darkblue-900 mb-4">Création de la boutique</h3>
                      <p className="text-gray-700 mb-4">
                        Nous réalisons l'intégralité de votre boutique : design, produits, moyens de paiement, tunnel de vente.
                      </p>
                      <span className="inline-flex items-center text-red-600 font-medium">
                        🛠️ Mise en production
                      </span>
                    </div>
                  </div>
                </div>
                <div className="w-full md:w-1/2">
                  <div className="p-[50px] ">
                    <img src="/lovable-uploads/boutique.svg" alt="Store Creation" className="w-full h-auto rounded-lg" />
                  </div>
                </div>
                {/* Connecting line */}
                <div className="absolute hidden md:block h-full w-px bg-gray-200 left-8 top-16 -bottom-16 z-0"></div>
              </div>

              {/* Step 4 */}
              <div className="relative flex flex-col md:flex-row-reverse items-center mb-20">
                <div className="w-full md:w-1/2 mb-8 md:mb-0 md:pl-8 relative z-10">
                  <div className="flex items-start space-x-5">
                    <div className="w-16 h-16 flex-shrink-0 rounded-full bg-red-100 flex items-center justify-center text-red-600">
                      <Package size={28} />
                    </div>
                    <div>
                      <div className="text-red-600 font-semibold mb-2">ÉTAPE 4</div>
                      <h3 className="text-2xl font-bold text-darkblue-900 mb-4">Livraison & formation</h3>
                      <p className="text-gray-700">
                        Vous recevez votre boutique prête à vendre + une formation personnalisée pour bien démarrer.
                      </p>
                      <span className="inline-flex items-center text-red-600 font-medium">
                        📦 Remise du projet
                      </span>
                    </div>
                  </div>
                </div>
                <div className="w-full md:w-1/2">
                  <div className="p-[50px] ">
                    <img src="/lovable-uploads/livraison.svg" alt="Project Delivery" className="w-full h-auto rounded-lg" />
                  </div>
                </div>
                {/* Connecting line */}
                <div className="absolute hidden md:block h-full w-px bg-gray-200 right-8 top-16 -bottom-16 z-0 md:left-8"></div>
              </div>

              {/* Step 5 */}
              <div className="relative flex flex-col md:flex-row items-center">
                <div className="w-full md:w-1/2 mb-8 md:mb-0 md:pr-8 relative z-10">
                  <div className="flex items-start space-x-5">
                    <div className="w-16 h-16 flex-shrink-0 rounded-full bg-red-100 flex items-center justify-center text-red-600">
                      <Rocket size={28} />
                    </div>
                    <div>
                      <div className="text-red-600 font-semibold mb-2">ÉTAPE 5</div>
                      <h3 className="text-2xl font-bold text-darkblue-900 mb-4">Accompagnement & optimisation</h3>
                      <p className="text-gray-700">
                        Nos experts vous suivent pendant les premières semaines pour assurer votre lancement.
                      </p>
                      <span className="inline-flex items-center text-red-600 font-medium">
                        📈 Coaching inclus (Standard & Premium)
                      </span>
                    </div>
                  </div>
                </div>
                <div className="w-full md:w-1/2">
                  <div className="p-[50px] ">
                    <img src="/lovable-uploads/accompagnement.svg" alt="Coaching" className="w-full h-auto rounded-lg" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        
        {/* FAQ Section */}
        <section className="py-16 md:py-24">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-darkblue-900 mb-4">
                Questions fréquentes sur <span className="text-red-600">in-commerce</span>
              </h2>
            </div>
            
            <div className="max-w-4xl mx-auto space-y-4">
      {faqs.map((item, index) => (
        <div key={index} className="bg-white shadow-md rounded-xl overflow-hidden">
          <button
            onClick={() => toggle(index)}
            className="w-full text-left p-6 focus:outline-none flex justify-between items-center"
            aria-expanded={openIndex === index}
          >
            <h3 className="text-xl font-bold text-darkblue-900">{item.question}</h3>
            <span className="transform transition-transform duration-300 ease-in-out text-2xl">
              {openIndex === index ? "−" : "+"}
            </span>
          </button>

          {/* Réponse visible seulement si ouverte */}
          {openIndex === index && (
  <motion.div
    initial={{ height: 0, opacity: 0 }}
    animate={{ height: "auto", opacity: 1 }}
    exit={{ height: 0, opacity: 0 }}
    transition={{ duration: 0.3 }}
    className="overflow-hidden"
  >
    <Separator />
    <div className="p-6 pt-0">
      <p className="text-gray-700">{item.answer}</p>
    </div>
  </motion.div>
)}
        </div>
      ))}
    </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 md:py-24 bg-gray-50">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center">
              <h2 className="text-3xl md:text-4xl font-bold text-darkblue-900 mb-6">
                Prêt à lancer votre boutique ?
              </h2>
              <p className="text-lg text-gray-700 mb-8">
                Prenez rendez-vous avec un conseiller in-commerce et démarrez votre projet dans les 48h.
              </p>
              <Link to="/contact">
                <Button className="bg-red-600 hover:bg-red-700 text-white rounded-full py-3 px-8 text-lg font-medium inline-flex items-center">
                  Réserver un appel découverte
                  <ArrowRight size={20} className="ml-2" />
                </Button>
              </Link>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default InCommerce;
