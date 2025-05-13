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
                  la gestion des affaires à l'aide de l'IA et l'automatisation de l'ensemble de
                  votre processus de vente, libérant votre concentration pour la vente.
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
                  src="/lovable-uploads/capture.png"
                  alt="Interface Pipedrive"
                  className="w-full "
                />
              </div>
            </div>
          </div>
        </section>

        {/* Partner Logos Section */}
        <section className="py-10 bg-white">
          <div className=" mx-auto">
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

        {/* Features Section */}
        <section className="py-16 bg-white">
          <div className=" mx-auto px-4">
            <h1 className="text-center text-[40px] mx-auto mb-4" style={{ fontWeight: 'bold' }}>Un CRM qui fera le bonheur de vos équipes commerciales</h1>

            <div className="px-[150px] mx-auto">
              <Tabs defaultValue="experienced" className="w-full">
                <TabsList className="grid  bg-transparent h-100 grid-cols-2 mb-12">
                  <TabsTrigger value="experienced" className="text-lg py-3 data-[state=active]:border-b data-[state=active]:border-[#bb0c15] rounded-[0] data-[state=active]:text-[#bb0c15] ">J'ai déjà utilisé un CRM</TabsTrigger>
                  <TabsTrigger value="new" className="text-lg py-3 data-[state=active]:border-b data-[state=active]:border-[#bb0c15] rounded-[0] text-balck data-[state=active]:text-[#bb0c15] ">Je n'ai encore jamais utilisé de CRM</TabsTrigger>
                </TabsList>

                <TabsContent value="experienced" className="space-y-16">
                  {/* Feature 1 */}
                  <div className="flex flex-col md:flex-row items-center gap-12">
                    <div className="w-full md:w-1/2 order-2 md:order-2">
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
                          "Pipedrive est le meilleur outil que j'aie jamais vu ! Du suivi des e-mails aux
                          automatisations de workflows, en passant par ses redoutables intégrations,
                          Pipedrive déborde de fonctionnalités qui nous aident à dépasser nos objectifs commerciaux."
                        </p>
                        <p className="mt-4 font-semibold">Nirmal Gyanwali</p>
                        <p className="text-sm text-gray-600">Directeur général, Nirmal Web Studio</p>
                      </div>
                    </div>
                    <div className="w-full md:w-1/2 order-1 md:order-1">
                      <img
                        src="/lovable-uploads/4d95487e-c8fa-4533-91f4-3674bc25cf5b.png"
                        alt="Automatisation lead nurturing"
                        className="w-full rounded-lg shadow"
                      />
                    </div>
                  </div>


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
                      <div className="p-4 border-l-4 border-[#183782] bg-gray-50 my-6">
                        <p className="italic text-gray-700">
                          <svg xmlns="http://www.w3.org/2000/svg"
                            width="24" height="24" fill="#183782" viewBox="0 0 24 24" className="puco-icon puco-icon-s">
                            <path fill="#183782" d="M8.154 11.588q1.36.294 2.07 1.353.77 1.06.77 2.588 0 2-1.243 3.236Q8.568 20 6.556 20t-3.313-1.235Q2
                             17.47 2 15.588q0-1.823 1.183-3.882L7.68 4h3.314zm4.852 4q0-1.823 1.183-3.882L18.686 4H22l-2.84 
                             7.588q1.36.294 2.07 1.353.77 1.06.77 2.588 0 2-1.243 3.236Q19.573 20 17.562 20t-3.314-1.235q-1.242-1.295-1.242-3.177"></path></svg>
                          i-prospect est l'outil ultime que j'ai jamais utilisé ! Du suivi des
                          e-mails aux automatisations de workflows, sans oublier ses intégrations
                          impressionnantes, i-prospect regorge de fonctionnalités qui nous aident à
                          surpasser nos objectifs commerciaux.
                        </p>
                        <p className="mt-4 font-semibold">Nirmal Gyanwali</p>
                        <p className="text-sm text-gray-600">Directeur général, Nirmal Web Studio</p>
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

                  {/* Feature 3 */}
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
                        parcours d'achat. Pipedrive, bien plus qu'un simple pipeline.
                      </p>
                      <div className="p-4 border-l-4 border-[#6464e8] bg-gray-50 my-6">
                        <p className="italic text-gray-700">
                          "Pipedrive s'adapte parfaitement à nos besoins, et ça me plaît. Contrairement
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
                        Pipedrive est conçu pour être facile à prendre en main, même si vous n'avez jamais
                        utilisé de CRM auparavant. Notre interface intuitive et notre support dédié vous
                        accompagnent à chaque étape.
                      </p>
                      <div className="p-4 border-l-4 border-[#6464e8] bg-gray-50 my-6">
                        <p className="italic text-gray-700">
                          "En tant que novice dans l'utilisation d'un CRM, j'ai été agréablement surpris par
                          la simplicité de Pipedrive. En quelques jours, toute mon équipe maîtrisait l'outil."
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
        {/* Final CTA Section */}
       <section className="py-16 px-4 sm:px-6 lg:px-8 bg-[#edf2ff]">
  <div className="max-w-7xl mx-auto   items-center ">
    <div className="text-center lg:text-left">
      <h2 className="text-3xl sm:text-4xl font-extrabold text-gray-900 mb-4">
        Rejoignez plus de 100 000 entreprises qui utilisent <span className="text-[#183782]">i-prospect</span>
      </h2>
      <p className="text-lg text-gray-700 mb-6">
        Moins de gestion, plus de ventes.
      </p>
    </div>

    <div className="justify-center lg:justify-end">
      <Link to="/devis">
        <Button className="bg-[#183782] hover:bg-[#272c57] text-white rounded-lg py-3 px-6 text-base sm:text-lg font-semibold shadow-md transition duration-300">
          Voir la démo
        </Button>
      </Link>
    </div>
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
                  <Link to="/blog" className="text-[#bb0c15] font-medium hover:underline inline-flex items-center">
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
                  <Link to="/blog" className="text-[#bb0c15] font-medium hover:underline inline-flex items-center">
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
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">
                Questions fréquentes sur <span className="text-[#bb0c15]">i-prospect</span>
              </h2>
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

        <footer className="bg-gray-50 py-12 border-t">
          <div className="px-[150px] mx-auto px-4">
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8 text-sm text-gray-700">
              {footerLinks.map((section, idx) => (
                <div key={idx}>
                  <h4 className="font-semibold text-gray-900 mb-4">{section.title}</h4>
                  <ul className="space-y-2">
                    {section.items.map((item, index) => (
                      <li key={index}>
                        <Link
                          to="/devis"
                          className="inline-block transition-all duration-300 border-b-2 border-transparent hover:border-[#bb0c15] hover:text-[#bb0c15]"
                        >
                          {item}
                        </Link>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </footer>

      </main>
      <Footer />



    </div>
  );
};

export default IProspect;
