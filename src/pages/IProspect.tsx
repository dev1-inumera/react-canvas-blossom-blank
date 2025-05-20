import React, { useState } from "react";
import { Link } from "react-router-dom";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { PricingModal } from "@/components/B2Bpricing";
import { PricingB2CModal } from "@/components/B2Cpricing";
import { footerLinks } from "@/data/footerLinks";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { ArrowRight, Check, Calendar, Users, Video, FileSearch, Signature, Star, Diamond, Mail, PieChart } from "lucide-react";
import { partnerLogos } from "@/data/referenceData";
import { iProspectFaqCategories } from "@/data/iProspectFaq";
import FaqCategoryAccordion from "@/components/faq/FaqCategoryAccordion";

const IProspect = () => {
  const [showModal, setShowModal] = useState(false);
  const [showb2cModal, setb2cShowModal] = useState(false);

  return (
    <div className="min-h-screen flex flex-col bg-white">
      <Navigation />
      <main className="flex-grow">
        {/* Hero Section */}
        <section className="relative h-[auto] top-0 bg-[#edf2ff] pb-0 pt-16 md:pt-24">
          <div className=" mx-auto px-4">
            <div className="flex flex-col items-center">
              <div className="w-full mb-[45px] lg:w-2/3 mb text-center">
                <h1 className="text-4xl md:text-5xl font-bold text-[#bb0c15] mb-6">
                  Le CRM simple et efficace pour conclure des affaires
                </h1>
                <p className="text-lg text-gray-700 mb-8  mx-auto">
                  i-prospect simplifie le suivi du pipeline commercial, l'optimisation des leads,
                  la gestion des affaires et l'automatisation de l'ensemble de
                  votre processus de vente, libérant votre concentration pour votre acquisition client ou la vente.
                </p>
                <div className="mb-8 flex flex-col sm:flex-row items-center justify-center gap-4">
                  <Link to="/devis">
                    <Button
                      className="bg-[#183782] hover:bg-[#272c57] text-white  py-5 px-8 text-lg font-medium w-full sm:w-auto"
                    >
                      Essai gratuit
                    </Button>
                  </Link>
                </div>
                <p className="text-sm text-gray-600">
                  Accès complet. Aucune carte de crédit requise. Utilisé par plus de 100 000 entreprises.
                </p>
              </div>
              <div className="w-full  px-[10%] justify-center">
                <img
                  src="/lovable-uploads/capture1.png"
                  alt="Interface Pipedrive"
                  className="w-full "
                />
              </div>
            </div>
          </div>
        </section>



        {/* Features Section */}
        <section className="py-16 bg-white">
          <div className=" mx-auto px-4">
            <h1 className="text-center text-[#183782] text-[40px] mx-auto mb-4" style={{ fontWeight: 'bold' }}>Un CRM qui fera le bonheur de votre portefeuille</h1>

            <div className="px-[150px] mx-auto">

              {/* Feature 1 */}
              <div className="flex flex-col md:flex-row items-center gap-12">
                <div className="w-full md:w-1/2 order-2 md:order-2">
                  <h2 className="text-3xl font-bold text-gray-900 mb-4">
                    Économisez des heures avec des relances du lead nurturing
                  </h2>
                  <p className="text-lg text-gray-700 mb-6">
                    Ne manquez jamais la relance de vos mails grâce aux rélances et récommendation téléphonique, avec des équipe humaine dédié,
                    vous invitant à vous concentrer sur les
                    prospects les plus pertinents.
                  </p>
                  <div className="p-4 border-l-4 border-[#282b57] bg-gray-50 my-6">
                    <p className="italic text-gray-700">
                      "i-prospect est le meilleur service que j'aie jamais vu ! Du suivi des e-mails aux
                      automatisations de workflows, en passant par des humains pour la suivi des rélances,
                      avec i-numa un CRM simplifié débordé de fonctionnalités qui nous aident à dépasser nos objectifs."
                    </p>
                    <p className="mt-3 text-sm text-gray-600">Directeur commerciale</p>
                  </div>
                </div>
                <div className="w-full md:w-1/2 order-1 md:order-1">
                  <img
                    src="/lovable-uploads/data1.png"
                    alt="Automatisation lead nurturing"
                    className="w-full"
                  />
                </div>
              </div>

              {/* Partner Logos Section */}
              <section className="py-10 bg-white">
                <div className=" ">
                  <div className="text-center mb-8">
                    <h3 className="text-xl font-medium text-gray-700 mb-6">
                      Le CRM de confiance pour vous
                    </h3>
                  </div>
                  <div className="flex flex-wrap justify-center items-center gap-12">
                    {partnerLogos.map((logo, index) => (
                      <div key={index} className="text-center">
                        <div className="h-12 flex items-center justify-center">
                          <img
                            src={logo.image}
                            alt={logo.name}
                            className="max-h-10 max-w-[250px] object-contain"
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


              {/* Feature 2 */}
              <div className="flex flex-col md:flex-row items-center gap-12">
                <div className="w-full md:w-1/2 order-2 md:order-1">
                  <h2 className="text-3xl font-bold text-gray-900 mb-4">
                    Nourrissez votre stratégie avec les statistiques de vente
                  </h2>
                  <p className="text-lg text-gray-700 mb-6">
                    Plongez-vous dans les rapports de vente actualisés en continu et identifiez
                    les points forts et les faiblesses de votre entonnoir avec des suggestions
                    fournies par i-prospect. Grâce à la prévision, à la définition d'objectifs,
                    au suivi des équipes et aux outils avancés d'évaluation des ventes, i-prospect
                    facilite la prise de décisions agiles et éclairées.
                  </p>

                </div>
                <div className="w-full md:w-1/2 order-1 md:order-2">
                  <img
                    src="/lovable-uploads/WebDash.png"
                    alt="Automatisation lead nurturing"
                    className="w-full rounded-lg"
                  />
                </div>
              </div>



            </div>
          </div>
        </section>
        {/* Final CTA Section */}
       <section className="bg-[#edf2ff] py-24 px-6 sm:px-10 lg:px-24">
  <div className="max-w-4xl mx-auto text-center">
    <h2 className="text-4xl sm:text-5xl font-extrabold text-[#282b57] leading-tight mb-6 tracking-tight">
      Rejoignez
      <span className="inline-block align-middle">
        <img
          src="/iprospect.png"
          alt="iProspect"
          className="inline-block px-3 w-[160px] h-auto object-contain align-middle"
        />
      </span>
      , le CRM sur mesure pour votre entreprise
    </h2>

    <p className="text-lg sm:text-xl text-gray-700 mb-10 max-w-3xl mx-auto leading-relaxed">
      Aidez votre équipe à gérer les clients qualifiés sans vous perdre dans la complexité du marketing digital.
      Une solution humaine, automatisée, et ultra efficace pensée pour votre quotidien.
    </p>

    <Link to="/devis">
      <Button className="bg-[#183782] hover:bg-[#272c57] text-white py-4 px-10 rounded-xl text-lg font-semibold shadow-lg transition-all duration-300">
        Voir la démo
      </Button>
    </Link>
  </div>
</section>


        {/* Pricing Section */}
        <section className="py-16 bg-gray-50">
          <div className=" mx-auto px-[150px] ">
            <div className="text-left mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">
                Des abonnements conçus pour les petites entreprises qui montent
              </h2>
              <p className="text-lg text-gray-700 mx-auto">
                Stimulez votre croissance, peu importe la taille de votre équipe. Sélectionnez l'abonnement adapté à vos besoins actuels et débloquez des fonctionnalités supplémentaires au moment opportun.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mt-12  mx-auto">
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
                <div key={index} className={`relative bg-white rounded-xl overflow-hidden border border-gray-200`}>

                  <div className={`p-6 ${plan.popular ? "pt-8" : ""}`}>
                    <div className={`w-12 h-12 rounded-full ${plan.color} flex items-center justify-center mb-4`}>
                      {plan.icon === "circle" && <div className="w-5 h-5 rounded-full bg-current"></div>}
                      {plan.icon === "star" && <Star size={20} className="fill-current" />}
                      {plan.icon === "diamond" && <Diamond size={20} className="fill-current" />}
                      {plan.icon === "zap" && <div className="w-5 h-5 bg-current clip-path-lightning"></div>}
                    </div>

                    <h3 className="text-xl font-bold text-gray-900 mb-2">{plan.name}</h3>
                    <p className="text-gray-600 text-sm mb-4">{plan.description}</p>
                  </div>
                </div>
              ))}
            </div>
            <div className="flex mx-auto mt-10 justify-center gap-3">
              <Button
                className="bg-[#bb0c15] mt-5 hover:bg-[#272c57] text-white rounded-md py-3 px-8 text-2xl font-medium w-full sm:w-auto"
                onClick={() => setShowModal(true)}
              >
                Toutes les offres B2B
              </Button>

              <Button
                className="bg-[#183782] mx-10 mt-5 hover:bg-[#272c57] text-white rounded-md py-3 px-8 text-lg font-medium w-full sm:w-auto"
              >
                Essai gratuit
              </Button>

              <Button
                className="bg-[#bb0c15] text-2xl mt-5 hover:bg-[#272c57] text-white rounded-md py-3 px-8  font-medium w-full sm:w-auto"
                onClick={() => setb2cShowModal(true)}
              >
                Toutes les offres B2C
              </Button>
              {/* Le popup */}
              <PricingModal isOpen={showModal} onClose={() => setShowModal(false)} />
              <PricingB2CModal isOpen={showb2cModal} onClose={() => setb2cShowModal(false)} />

            </div>



          </div>
        </section>

        {/* Blog Preview Section */}
        <section className="py-16 bg-gray-50">
          <div className="mx-[120px] px-4">
            <div className="text-left mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">
                Articles de blog populaires
              </h2>
              <p className="text-lg text-gray-700 mx-auto">
                Découvrez nos conseils et astuces pour optimiser votre pipeline commercial
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="bg-white rounded-xl overflow-hidden shadow-sm">
                <img
                  src="https://img.freepik.com/vecteurs-premium/erreur-promotion-blog-publicite-numerique-analyse-mots-cles-inefficaces-illustration-moderne-vecteur-plat_566886-10281.jpg"
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
                  <Link to="/blog" className="text-[#bb0c15] font-medium hover:underline inline-flex items-center">
                    Lire l'article
                    <ArrowRight size={16} className="ml-1" />
                  </Link>
                </div>
              </div>

              <div className="bg-white rounded-xl overflow-hidden shadow-sm">
                <img
                  src="https://img.freepik.com/vecteurs-premium/erreur-promotion-blog-publicite-numerique-analyse-mots-cles-inefficaces-illustration-moderne-vecteur-plat_566886-10281.jpg"
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
                  <Link to="/blog" className="text-[#bb0c15] font-medium hover:underline inline-flex items-center">
                    Lire l'article
                    <ArrowRight size={16} className="ml-1" />
                  </Link>
                </div>
              </div>

              <div className="bg-white rounded-xl overflow-hidden shadow-sm">
                <img
                  src="https://img.freepik.com/vecteurs-premium/erreur-promotion-blog-publicite-numerique-analyse-mots-cles-inefficaces-illustration-moderne-vecteur-plat_566886-10281.jpg"
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
                  <Link to="/blog" className="text-[#bb0c15] font-medium hover:underline inline-flex items-center">
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
          <div className=" px-4">

            <div className="flex items-center items-center justify-center mx-auto mb-12 space-x-2">
              <h2 className="text-3xl font-bold text-[#282b57] ">
                Questions fréquentes sur
              </h2>
              <img src="/iprospect.png" alt="iProspect" className="mt-4 w-[160px] h-auto object-contain" />
            </div>


            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 px-[150px] mx-auto">
              {iProspectFaqCategories.map((category, index) => (
                <div key={index}>
                  <FaqCategoryAccordion category={category} />
                </div>
              ))}
            </div>
          </div>
        </section>

        

      </main>
      <Footer />



    </div>
  );
};

export default IProspect;
