import React from "react";
import { Link } from "react-router-dom";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { ArrowRight, Check, Calendar, Users, Video, FileSearch, Signature, Star, Mail, PieChart } from "lucide-react";
import { partnerLogos } from "@/data/referenceData";
import { iProspectFaqCategories } from "@/data/iProspectFaq";
import FaqCategoryAccordion from "@/components/faq/FaqCategoryAccordion";

const IProspect = () => {
  return (
    <div className="min-h-screen flex flex-col bg-white">
      <Navigation />
      <main className="flex-grow">
        {/* Hero Section - Redesigned with Pipedrive-inspired layout */}
        <section className="relative bg-[#e9f7ea] py-16 md:py-24">
          <div className="container mx-auto px-4">
            <div className="flex flex-col items-center">
              <div className="w-full lg:w-1/2 mb-10 text-center">
                <h1 className="text-4xl md:text-5xl font-bold text-[#1f3128] mb-6">
                  Le CRM simple et efficace pour conclure des affaires
                </h1>
                <p className="text-lg text-gray-700 mb-8 max-w-xl mx-auto">
                  i-prospect simplifie le suivi du pipeline commercial, l'optimisation des leads, 
                  la gestion des affaires à l'aide de l'IA et l'automatisation de l'ensemble de 
                  votre processus de vente, libérant votre concentration pour la vente.
                </p>
                <div className="mb-8 flex flex-col sm:flex-row items-center justify-center gap-4">
                  <Link to="/devis">
                    <Button
                      className="bg-[#6464e8] hover:bg-[#5252d4] text-white rounded-md py-3 px-8 text-lg font-medium w-full sm:w-auto"
                    >
                      Essai gratuit
                    </Button>
                  </Link>
                </div>
                <p className="text-sm text-gray-600">
                  Accès complet. Aucune carte de crédit requise. Utilisé par plus de 100 000 entreprises.
                </p>
              </div>
              <div className="w-full flex justify-center">
                <img 
                  src="/lovable-uploads/9c937f83-5dac-4c94-8488-b7ca77e29b96.png" 
                  alt="Interface i-prospect" 
                  className="w-full max-w-5xl rounded-lg shadow-lg"
                />
              </div>
            </div>
          </div>
        </section>

        {/* Partner Logos Section */}
        <section className="py-10 bg-white">
          <div className="container mx-auto px-4">
            <div className="text-center mb-8">
              <h3 className="text-xl font-medium text-gray-700 mb-6">
                Le CRM de confiance pour plus de 100 000 entreprises dans 179 pays
              </h3>
            </div>
            <div className="flex flex-wrap justify-center items-center gap-12">
              {partnerLogos.map((logo, index) => (
                <div key={index} className="text-center">
                  <div className="h-12 flex items-center justify-center">
                    <img
                      src={logo.image}
                      alt={logo.name}
                      className="max-h-10 max-w-[150px] object-contain"
                    />
                  </div>
                  <div className="mt-3 flex items-center justify-center">
                    <span className="text-lg font-bold text-gray-800">4.{Math.floor(Math.random() * 3) + 5}/5</span>
                    <div className="flex ml-2">
                      {[...Array(5)].map((_, i) => (
                        <Star 
                          key={i} 
                          size={16} 
                          className={i < 4 ? "text-yellow-400 fill-yellow-400" : "text-yellow-400"} 
                        />
                      ))}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto">
              <Tabs defaultValue="experienced" className="w-full">
                <TabsList className="grid w-full grid-cols-2 mb-12">
                  <TabsTrigger value="experienced" className="text-lg py-3">J'ai déjà utilisé un CRM</TabsTrigger>
                  <TabsTrigger value="new" className="text-lg py-3">Je n'ai encore jamais utilisé de CRM</TabsTrigger>
                </TabsList>
                
                <TabsContent value="experienced" className="space-y-16">
                  {/* Feature 1 */}
                  <div className="flex flex-col md:flex-row items-center gap-12">
                    <div className="w-full md:w-1/2 order-2 md:order-1">
                      <h2 className="text-3xl font-bold text-gray-900 mb-4">
                        Économisez des heures avec l'automatisation du lead nurturing
                      </h2>
                      <p className="text-lg text-gray-700 mb-6">
                        Ne manquez jamais une relance grâce aux conversations de vente automatisées et à 
                        des recommandations, alimentées par l'IA, vous invitant à vous concentrer sur les 
                        prospects les plus pertinents.
                      </p>
                      <div className="p-4 border-l-4 border-[#6464e8] bg-gray-50 my-6">
                        <p className="italic text-gray-700">
                          "i-prospect est le meilleur outil que j'aie jamais vu ! Du suivi des e-mails aux 
                          automatisations de workflows, en passant par ses redoutables intégrations, 
                          i-prospect déborde de fonctionnalités qui nous aident à dépasser nos objectifs commerciaux."
                        </p>
                        <p className="mt-4 font-semibold">Thomas Bernard</p>
                        <p className="text-sm text-gray-600">Directeur commercial, Digi Solutions</p>
                      </div>
                    </div>
                    <div className="w-full md:w-1/2 order-1 md:order-2">
                      <img 
                        src="/lovable-uploads/4d95487e-c8fa-4533-91f4-3674bc25cf5b.png" 
                        alt="Automatisation lead nurturing" 
                        className="w-full rounded-lg shadow"
                      />
                    </div>
                  </div>

                  {/* Feature 2 */}
                  <div className="flex flex-col md:flex-row items-center gap-12">
                    <div className="w-full md:w-1/2">
                      <img 
                        src="/lovable-uploads/6a81325c-4fca-4905-9887-0b10ea558128.png" 
                        alt="CRM sur mesure" 
                        className="w-full rounded-lg shadow"
                      />
                    </div>
                    <div className="w-full md:w-1/2">
                      <h2 className="text-3xl font-bold text-gray-900 mb-4">
                        Le CRM sur mesure pour votre entreprise
                      </h2>
                      <p className="text-lg text-gray-700 mb-6">
                        Adoptez la fluidité d'un outil de vente parfaitement accordé à chaque étape de votre 
                        parcours d'achat. i-prospect, bien plus qu'un simple pipeline.
                      </p>
                      <div className="p-4 border-l-4 border-[#6464e8] bg-gray-50 my-6">
                        <p className="italic text-gray-700">
                          "i-prospect s'adapte parfaitement à nos besoins, et ça me plaît. Contrairement 
                          aux autres CRM, il répond à nos attentes au lieu de nous imposer ses limites."
                        </p>
                        <p className="mt-4 font-semibold">Sophie Mercier</p>
                        <p className="text-sm text-gray-600">Fondatrice, Key Tech</p>
                      </div>
                      <div className="flex gap-4 mt-6">
                        <Button variant="outline" className="border-[#6464e8] text-[#6464e8] hover:bg-[#6464e8] hover:text-white">
                          Voir toutes les fonctionnalités
                        </Button>
                        <Button variant="outline" className="border-[#6464e8] text-[#6464e8] hover:bg-[#6464e8] hover:text-white">
                          Comparer les CRM
                        </Button>
                      </div>
                    </div>
                  </div>
                </TabsContent>
                
                <TabsContent value="new" className="space-y-16">
                  {/* Similar content for new CRM users */}
                  <div className="flex flex-col md:flex-row items-center gap-12">
                    <div className="w-full md:w-1/2 order-2 md:order-1">
                      <h2 className="text-3xl font-bold text-gray-900 mb-4">
                        Démarrez facilement avec un CRM intuitif
                      </h2>
                      <p className="text-lg text-gray-700 mb-6">
                        i-prospect est conçu pour être facile à prendre en main, même si vous n'avez jamais 
                        utilisé de CRM auparavant. Notre interface intuitive et notre support dédié vous 
                        accompagnent à chaque étape.
                      </p>
                      <div className="p-4 border-l-4 border-[#6464e8] bg-gray-50 my-6">
                        <p className="italic text-gray-700">
                          "En tant que novice dans l'utilisation d'un CRM, j'ai été agréablement surpris par 
                          la simplicité d'i-prospect. En quelques jours, toute mon équipe maîtrisait l'outil."
                        </p>
                        <p className="mt-4 font-semibold">Jean Dupont</p>
                        <p className="text-sm text-gray-600">Gérant, Boutique Créative</p>
                      </div>
                    </div>
                    <div className="w-full md:w-1/2 order-1 md:order-2">
                      <img 
                        src="/lovable-uploads/4d95487e-c8fa-4533-91f4-3674bc25cf5b.png" 
                        alt="CRM intuitif" 
                        className="w-full rounded-lg shadow"
                      />
                    </div>
                  </div>
                </TabsContent>
              </Tabs>
            </div>
          </div>
        </section>

        {/* Pricing Section - Updated with Pipedrive-inspired design */}
        <section className="py-16 bg-gray-50">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">
                Des abonnements conçus pour les petites entreprises qui montent
              </h2>
              <p className="text-lg text-gray-700 max-w-3xl mx-auto">
                Stimulez votre croissance, peu importe la taille de votre équipe. Sélectionnez l'abonnement adapté à vos besoins actuels et débloquez des fonctionnalités supplémentaires au moment opportun.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mt-12 max-w-5xl mx-auto">
              {[
                {
                  name: "START",
                  icon: "circle",
                  color: "bg-indigo-100 text-indigo-600",
                  price: "1 500 €",
                  description: "Organisez-vous et configurez rapidement vos processus de vente",
                  contacts: "2 000 contacts / 8 000 envois",
                  team: "1 Responsable Marketing",
                  ideal: "TPE / Tests",
                },
                {
                  name: "STANDARD",
                  icon: "star",
                  color: "bg-blue-100 text-blue-600",
                  price: "2 500 €",
                  description: "Ne manquez jamais la prochaine étape grâce à des séquences d'e-mails",
                  contacts: "2 800 contacts / 11 000 envois",
                  team: "1 Phoner + Responsable Marketing",
                  ideal: "PME",
                },
                {
                  name: "PREMIUM",
                  icon: "diamond",
                  color: "bg-purple-100 text-purple-600",
                  price: "3 500 €",
                  description: "Optimisez les performances avec des options de personnalisation avancées",
                  contacts: "3 600 contacts / 14 400 envois",
                  team: "1 Phoner + 1 CM + Resp. Marketing",
                  ideal: "Croissance rapide",
                  popular: true,
                },
                {
                  name: "ULTRA",
                  icon: "zap",
                  color: "bg-red-100 text-red-600",
                  price: "5 500 €",
                  description: "Automatisez les grandes équipes avec des modes flexibles d'assistance",
                  contacts: "4 000 contacts / 16 000 envois",
                  team: "Équipe dédiée + suivi hebdomadaire",
                  ideal: "Entreprises multi-produits",
                },
              ].map((plan, index) => (
                <div key={index} className={`relative bg-white rounded-xl overflow-hidden border ${plan.popular ? "border-[#6464e8]" : "border-gray-200"}`}>
                  {plan.popular && (
                    <div className="absolute top-0 inset-x-0 bg-[#6464e8] text-white text-center py-1 text-sm font-medium">
                      Le plus populaire
                    </div>
                  )}
                  <div className={`p-6 ${plan.popular ? "pt-8" : ""}`}>
                    <div className={`w-12 h-12 rounded-full ${plan.color} flex items-center justify-center mb-4`}>
                      {plan.icon === "circle" && <div className="w-5 h-5 rounded-full bg-current"></div>}
                      {plan.icon === "star" && <Star size={20} className="fill-current" />}
                      {plan.icon === "diamond" && <div className="w-5 h-5 rotate-45 bg-current"></div>}
                      {plan.icon === "zap" && <div className="w-5 h-5 bg-current clip-path-lightning"></div>}
                    </div>
                    
                    <h3 className="text-xl font-bold text-gray-900 mb-2">{plan.name}</h3>
                    <p className="text-gray-600 text-sm mb-4">{plan.description}</p>
                    
                    <div className="text-3xl font-bold text-gray-900 mb-4">
                      {plan.price}
                      <span className="text-base font-normal text-gray-500">/mois</span>
                    </div>
                    
                    <ul className="space-y-3 mb-6">
                      <li className="flex items-start">
                        <Check size={18} className="text-green-600 mr-2 mt-1 flex-shrink-0" />
                        <span className="text-gray-700">{plan.contacts}</span>
                      </li>
                      <li className="flex items-start">
                        <Check size={18} className="text-green-600 mr-2 mt-1 flex-shrink-0" />
                        <span className="text-gray-700">{plan.team}</span>
                      </li>
                      <li className="flex items-start">
                        <Check size={18} className="text-green-600 mr-2 mt-1 flex-shrink-0" />
                        <span className="text-gray-700">Idéal pour : {plan.ideal}</span>
                      </li>
                    </ul>
                    
                    <div className="mt-auto">
                      <Link to="/devis">
                        <Button className={`w-full ${plan.popular ? "bg-[#6464e8] hover:bg-[#5252d4]" : "bg-white text-[#6464e8] border border-[#6464e8] hover:bg-[#f0f0ff]"} rounded-md py-2 px-4`}>
                          {plan.popular ? "Commencer" : "Essai gratuit"}
                        </Button>
                      </Link>
                    </div>
                  </div>
                </div>
              ))}
            </div>
            
            {/* Sur-mesure option */}
            <div className="mt-8 bg-white border border-gray-200 rounded-xl p-6 max-w-5xl mx-auto">
              <div className="flex flex-col md:flex-row items-center justify-between">
                <div>
                  <h3 className="text-xl font-bold text-gray-900 mb-2">Formule SUR-MESURE</h3>
                  <p className="text-gray-700">
                    Besoin d'une solution personnalisée ? Contactez-nous pour discuter de vos besoins spécifiques.
                  </p>
                  <ul className="mt-4 space-y-2">
                    <li className="flex items-start">
                      <Check size={18} className="text-green-600 mr-2 mt-1 flex-shrink-0" />
                      <span className="text-gray-700">Envois illimités</span>
                    </li>
                    <li className="flex items-start">
                      <Check size={18} className="text-green-600 mr-2 mt-1 flex-shrink-0" />
                      <span className="text-gray-700">Équipe dédiée + stratégie 360°</span>
                    </li>
                    <li className="flex items-start">
                      <Check size={18} className="text-green-600 mr-2 mt-1 flex-shrink-0" />
                      <span className="text-gray-700">Idéal pour : Groupes, franchises, multisites</span>
                    </li>
                  </ul>
                </div>
                <div className="mt-6 md:mt-0">
                  <Link to="/devis">
                    <Button className="bg-[#6464e8] hover:bg-[#5252d4] text-white rounded-md py-3 px-8">
                      Demander un devis
                    </Button>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Results Section */}
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4">
            <div className="text-center mb-10">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">
                Exemple de résultats avec <span className="text-[#6464e8]">i-prospect</span>
              </h2>
              <p className="text-lg text-gray-700 max-w-2xl mx-auto">
                Découvrez comment nos clients améliorent leurs performances commerciales avec notre plateforme.
              </p>
            </div>

            <div className="max-w-4xl mx-auto bg-white rounded-xl shadow-sm border border-gray-200 overflow-hidden">
              <div className="p-6">
                <div className="overflow-x-auto">
                  <table className="min-w-full divide-y divide-gray-200">
                    <thead>
                      <tr>
                        <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Mois</th>
                        <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Emails envoyés</th>
                        <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Leads générés</th>
                        <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">RDV confirmés</th>
                        <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Signatures</th>
                      </tr>
                    </thead>
                    <tbody className="bg-white divide-y divide-gray-200">
                      {[1, 2, 3].map((month) => (
                        <tr key={month} className="hover:bg-gray-50">
                          <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">Mois {month}</td>
                          <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{1500 * month}</td>
                          <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{45 * month}</td>
                          <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{12 * month}</td>
                          <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{4 * month}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Blog Preview Section */}
        <section className="py-16 bg-gray-50">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">
                Articles de blog populaires
              </h2>
              <p className="text-lg text-gray-700 max-w-2xl mx-auto">
                Découvrez nos conseils et astuces pour optimiser votre pipeline commercial
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
              <div className="bg-white rounded-xl overflow-hidden shadow-sm">
                <img 
                  src="/lovable-uploads/8b0f56f9-5fbf-4871-bf3d-97be308c55ba.png" 
                  alt="CRM evaluation" 
                  className="w-full h-48 object-cover"
                />
                <div className="p-6">
                  <h3 className="text-xl font-bold text-gray-900 mb-2">
                    Évaluations de CRM : Comment choisir l'outil parfait
                  </h3>
                  <p className="text-gray-700 mb-4">
                    Ce guide met en lumière les critères essentiels à considérer, et vous fournit des conseils pour obtenir les informations les plus utiles des fournisseurs.
                  </p>
                  <Link to="/blog" className="text-[#6464e8] font-medium hover:underline inline-flex items-center">
                    Lire l'article
                    <ArrowRight size={16} className="ml-1" />
                  </Link>
                </div>
              </div>

              <div className="bg-white rounded-xl overflow-hidden shadow-sm">
                <img 
                  src="/lovable-uploads/8b0f56f9-5fbf-4871-bf3d-97be308c55ba.png" 
                  alt="Email templates" 
                  className="w-full h-48 object-cover"
                />
                <div className="p-6">
                  <h3 className="text-xl font-bold text-gray-900 mb-2">
                    Comment rédiger un e-mail de suivi qui incite à répondre
                  </h3>
                  <p className="text-gray-700 mb-4">
                    Nous avons compilé 15 exemples d'e-mails de relance, couvrant pratiquement toutes les situations de vente.
                  </p>
                  <Link to="/blog" className="text-[#6464e8] font-medium hover:underline inline-flex items-center">
                    Lire l'article
                    <ArrowRight size={16} className="ml-1" />
                  </Link>
                </div>
              </div>

              <div className="bg-white rounded-xl overflow-hidden shadow-sm">
                <img 
                  src="/lovable-uploads/8b0f56f9-5fbf-4871-bf3d-97be308c55ba.png" 
                  alt="Sales presentations" 
                  className="w-full h-48 object-cover"
                />
                <div className="p-6">
                  <h3 className="text-xl font-bold text-gray-900 mb-2">
                    Présentations de vente : modèles et exemples
                  </h3>
                  <p className="text-gray-700 mb-4">
                    Dans ce guide, vous apprendrez à utiliser la puissance du storytelling pour influencer la prise de décision et conclure plus de ventes.
                  </p>
                  <Link to="/blog" className="text-[#6464e8] font-medium hover:underline inline-flex items-center">
                    Lire l'article
                    <ArrowRight size={16} className="ml-1" />
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">
                Questions fréquentes sur <span className="text-[#6464e8]">i-prospect</span>
              </h2>
            </div>

            <div className="max-w-3xl mx-auto">
              {iProspectFaqCategories.map((category, index) => (
                <FaqCategoryAccordion key={index} category={category} />
              ))}
            </div>
          </div>
        </section>

        {/* Final CTA Section */}
        <section className="py-16 bg-[#e9f7ea]">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto text-center">
              <h2 className="text-3xl font-bold text-gray-900 mb-6">
                Rejoignez plus de 100 000 entreprises qui utilisent i-prospect
              </h2>
              <p className="text-lg text-gray-700 mb-8">
                Moins de gestion, plus de ventes.
              </p>
              <Link to="/devis">
                <Button className="bg-[#6464e8] hover:bg-[#5252d4] text-white rounded-md py-3 px-8 text-lg font-medium">
                  Voir la démo
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

export default IProspect;
