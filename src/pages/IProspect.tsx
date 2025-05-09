import React from "react";
import { Link } from "react-router-dom";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { ArrowRight, Check, PieChart, Mail, Calendar, Users, Video, FileSearch, Signature } from "lucide-react";
import { partnerLogos } from "@/data/referenceData";
import { iProspectFaqCategories } from "@/data/iProspectFaq";
import FaqCategoryAccordion from "@/components/faq/FaqCategoryAccordion";

const IProspect = () => {
  return (
    <div className="min-h-screen flex flex-col bg-white">
      <Navigation />
      <main className="flex-grow">
        {/* Hero Section */}
        <section className="relative bg-white py-16 md:py-24">
          <div className="container mx-auto px-4">
            <div className="flex flex-col lg:flex-row items-center gap-12">
              <div className="w-full lg:w-1/2">
                <h1 className="text-4xl md:text-5xl font-bold text-darkblue-900 mb-6">
                  Les meilleurs <span className="text-red-600">outils sales,</span> simplement !
                </h1>
                <p className="text-lg text-gray-700 mb-8 max-w-xl">
                  i-prospect est une solution de prospection commerciale intelligente conçue pour aider les entreprises à générer des leads qualifiés, remplir leur agenda et booster leurs ventes - sans perdre de temps à prospecter à l'aveugle.
                </p>
                <div className="mb-8">
                  <Link to="/devis">
                    <Button
                      className="bg-red-600 hover:bg-red-700 text-white rounded-full py-3 px-8 text-lg font-medium"
                    >
                      Demander une démo gratuite
                    </Button>
                  </Link>
                </div>
                <div className="flex flex-wrap gap-4 items-center">
                  <div className="flex items-center text-green-600">
                    <Check size={18} className="mr-1" />
                    <span className="text-gray-700">Cold mailing</span>
                  </div>
                  <div className="flex items-center text-green-600">
                    <Check size={18} className="mr-1" />
                    <span className="text-gray-700">Cold calling</span>
                  </div>
                  <div className="flex items-center text-green-600">
                    <Check size={18} className="mr-1" />
                    <span className="text-gray-700">Community Manager</span>
                  </div>
                </div>
              </div>
              <div className="w-full lg:w-1/2 relative">
                <img src="https://img.freepik.com/vecteurs-libre/concentration-concentration-objectif-cible-entreprise-concept-solution-objectif-commercial-cible-atteinte-au-centre-reussite-entreprise-style-plat-illustration-vectorielle_1150-58758.jpg?t=st=1746797367~exp=1746800967~hmac=18d514cb2a89d103c7c81b5210260604e42886f19f956f93b097da3cb05d5677&w=1380" alt="" />
              </div>
            </div>
          </div>
        </section>

        {/* Logos Section */}
        <section className="py-12 bg-gray-50">
          <div className="container mx-auto px-4">
            <div className="text-center mb-8">
              <h3 className="text-lg font-medium text-gray-700">Ils font confiance à i-prospect</h3>
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

        {/* What is i-prospect */}
        <section className="py-16 md:py-24">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-darkblue-900 mb-4">
                Qu'est-ce que <span className="text-red-600">i-prospect</span>?
              </h2>
              <p className="max-w-3xl mx-auto text-lg text-gray-700">
                Notre mission : vous permettre de vous concentrer sur la signature, pendant que nous remplissons votre agenda.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <Card className="border-0 shadow-lg rounded-xl overflow-hidden">
                <CardContent className="p-6">
                  <div className="w-14 h-14 rounded-full bg-red-100 flex items-center justify-center mb-6">
                    <Mail className="w-7 h-7 text-red-600" />
                  </div>
                  <h3 className="text-xl font-bold text-darkblue-900 mb-3">Nous prospectons à votre place</h3>
                  <ul className="space-y-2 text-gray-700">
                    <li className="flex items-start">
                      <Check size={18} className="text-green-600 mr-2 mt-1 flex-shrink-0" />
                      <span>Création de campagnes d'e-mails ciblées (cold mailing)</span>
                    </li>
                    <li className="flex items-start">
                      <Check size={18} className="text-green-600 mr-2 mt-1 flex-shrink-0" />
                      <span>Détection des prospects intéressées</span>
                    </li>
                    <li className="flex items-start">
                      <Check size={18} className="text-green-600 mr-2 mt-1 flex-shrink-0" />
                      <span>Prise de rendez-vous qualifiés</span>
                    </li>
                  </ul>
                </CardContent>
              </Card>

              <Card className="border-0 shadow-lg rounded-xl overflow-hidden">
                <CardContent className="p-6">
                  <div className="w-14 h-14 rounded-full bg-red-100 flex items-center justify-center mb-6">
                    <Calendar className="w-7 h-7 text-red-600" />
                  </div>
                  <h3 className="text-xl font-bold text-darkblue-900 mb-3">Vous vous concentrez sur vos rendez-vous</h3>
                  <ul className="space-y-2 text-gray-700">
                    <li className="flex items-start">
                      <Check size={18} className="text-green-600 mr-2 mt-1 flex-shrink-0" />
                      <span>Vous recevez directement les leads intéressés dans votre agenda</span>
                    </li>
                    <li className="flex items-start">
                      <Check size={18} className="text-green-600 mr-2 mt-1 flex-shrink-0" />
                      <span>Vous ne perdez plus de temps à filtrer les mauvais contacts</span>
                    </li>
                    <li className="flex items-start">
                      <Check size={18} className="text-green-600 mr-2 mt-1 flex-shrink-0" />
                      <span>Vous signez plus rapidement</span>
                    </li>
                  </ul>
                </CardContent>
              </Card>

              <Card className="border-0 shadow-lg rounded-xl overflow-hidden">
                <CardContent className="p-6">
                  <div className="w-14 h-14 rounded-full bg-red-100 flex items-center justify-center mb-6">
                    <Users className="w-7 h-7 text-red-600" />
                  </div>
                  <h3 className="text-xl font-bold text-darkblue-900 mb-3">À qui s'adresse i-prospect?</h3>
                  <ul className="space-y-2 text-gray-700">
                    <li className="flex items-start">
                      <Check size={18} className="text-green-600 mr-2 mt-1 flex-shrink-0" />
                      <span>Commerciaux indépendants</span>
                    </li>
                    <li className="flex items-start">
                      <Check size={18} className="text-green-600 mr-2 mt-1 flex-shrink-0" />
                      <span>Entrepreneurs & freelances</span>
                    </li>
                    <li className="flex items-start">
                      <Check size={18} className="text-green-600 mr-2 mt-1 flex-shrink-0" />
                      <span>Startups et TPE/PME</span>
                    </li>
                    <li className="flex items-start">
                      <Check size={18} className="text-green-600 mr-2 mt-1 flex-shrink-0" />
                      <span>Agences marketing, coachs, formateurs, etc.</span>
                    </li>
                  </ul>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* Pricing Plans - UPDATED */}
        <section className="py-20 bg-gray-50">
  <div className="container mx-auto px-4">
    <div className="text-center mb-16">
      <h2 className="text-4xl font-bold text-darkblue-900 mb-4">
        Nos Offres <span className="text-red-600">i-prospect</span>
      </h2>
      <p className="text-gray-600">Des formules adaptées à chaque ambition</p>
    </div>

    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-6">
      {[
        {
          name: "START",
          price: "1 500 €",
          contacts: "8 000 contacts / 32 000 envois",
          team: "1 Responsable Marketing",
          ideal: "TPE / Tests",
        },
        {
          name: "STANDARD",
          price: "2 500 €",
          contacts: "11 200 contacts / 44 000 envois",
          team: "1 Phoner + Responsable Marketing",
          ideal: "PME",
        },
        {
          name: "PREMIUM",
          price: "3 500 €",
          contacts: "14 400 contacts / 57 600 envois",
          team: "1 Phoner + 1 CM + Resp. Marketing",
          ideal: "Croissance rapide",
          popular: true,
        },
        {
          name: "ULTRA",
          price: "5 500 €",
          contacts: "16 000 contacts / 64 000 envois",
          team: "Équipe dédiée + suivi hebdo",
          ideal: "Entreprises multi-produits",
        },
        {
          name: "SUR-MESURE",
          price: "Sur devis",
          contacts: "Envois illimités",
          team: "Équipe dédiée + stratégie 360°",
          ideal: "Groupes, franchises, multisites",
        },
      ].map((offer, index) => (
        <div
          key={index}
          className={`relative bg-white rounded-xl shadow-lg border border-gray-100 overflow-hidden`}
        >
          {offer.popular && (
            <div className="absolute top-0 w-full bg-red-600 text-white text-center py-2 text-sm font-semibold uppercase tracking-wide z-10">
              Plus Populaire
            </div>
          )}
          <div className={`p-6 pt-${offer.popular ? "12" : "6"}`}>
            <h3 className="text-xl font-bold text-gray-900 mb-2 text-center">Formule {offer.name}</h3>
            <div className="text-center text-3xl font-bold text-red-600 mb-4">
              {offer.price}
              {offer.name !== "SUR-MESURE" && (
                <span className="text-base font-normal text-gray-500"> /mois</span>
              )}
            </div>
            <ul className="space-y-3 mb-6 text-sm">
              <li className="flex items-start">
                <Check className="text-green-600 mr-2 mt-1" size={18} />
                <span className="text-gray-700">{offer.contacts}</span>
              </li>
              <li className="flex items-start">
                <Check className="text-green-600 mr-2 mt-1" size={18} />
                <span className="text-gray-700">{offer.team}</span>
              </li>
              <li className="flex items-start">
                <Check className="text-green-600 mr-2 mt-1" size={18} />
                <span className="text-gray-700">Idéal pour : {offer.ideal}</span>
              </li>
            </ul>
            <Link to="/devis">
              <Button className="w-full bg-red-600 hover:bg-red-700 text-white py-3 rounded-lg">
                Sélectionner
              </Button>
            </Link>
          </div>
        </div>
      ))}
    </div>

    <div className="flex justify-center mt-16">
      <Link to="/contact">
        <Button className="bg-darkblue-900 hover:bg-darkblue-700 text-white py-3 px-6 rounded-lg">
          Consultez nos offres PRO
        </Button>
      </Link>
    </div>
  </div>
</section>


        {/* Results */}
        <section className="py-16 md:py-24">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-darkblue-900 mb-4">
                Exemple de résultats avec <span className="text-red-600">i-prospect</span>
              </h2>
            </div>

            <div className="max-w-4xl mx-auto bg-white rounded-xl shadow-lg overflow-hidden">
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

        {/* Why Choose Us */}
        <section className="py-16 md:py-24 bg-gray-50">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-darkblue-900 mb-4">
                Pourquoi choisir <span className="text-red-600">i-prospect</span>?
              </h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {[
                {
                  title: "Gain de temps",
                  description: "Vous n'avez plus à prospecter"
                },
                {
                  title: "Leads qualifiés uniquement",
                  description: "Pas de temps perdu avec des curieux"
                },
                {
                  title: "Méthodologie éprouvée",
                  description: "Segmentation, copywriting, automatisation"
                },
                {
                  title: "Suivi humain + technologie",
                  description: "Notre équipe + notre logiciel i-mailx"
                },
                {
                  title: "Accompagnement sur-mesure",
                  description: "Un expert i-numera vous guide"
                },
              ].map((item, index) => (
                <Card key={index} className="border-0 shadow-lg rounded-xl overflow-hidden h-full">
                  <CardContent className="p-6 flex flex-col h-full">
                    <div className="w-12 h-12 rounded-full bg-red-100 flex items-center justify-center mb-4">
                      <span className="text-red-600 font-bold">{index + 1}</span>
                    </div>
                    <h3 className="text-xl font-bold text-darkblue-900 mb-2">{item.title}</h3>
                    <p className="text-gray-700 flex-grow">{item.description}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Steps Section */}
        <section className="py-16 md:py-24 bg-gray-50">
          <div className="  ">
            <div className="text-center mb-16">
              <span className="text-red-600 font-medium text-sm uppercase tracking-wider">Comment ça marche</span>
              <h2 className="text-3xl md:text-4xl font-bold text-darkblue-900 mt-2 mb-4">
                Les étapes <span className="text-red-600">i-prospect</span>
              </h2>
              <p className="max-w-3xl mx-auto text-lg text-gray-700">
                Notre processus simplifié pour vous accompagner vers le succès commercial
              </p>
            </div>

            <div className="max-w-[75%] mx-auto">
              {/* Step 1 */}
              <div className="flex flex-col md:flex-row items-center mb-20 relative">
                <div className="w-full md:w-1/2 mb-8 md:mb-0 md:pr-8 relative z-10">
                  <div className="flex items-start space-x-5">
                    <div className="w-16 h-16 flex-shrink-0 rounded-full bg-red-100 flex items-center justify-center text-red-600">
                      <Calendar size={28} />
                    </div>
                    <div>
                      <div className="text-red-600 font-semibold mb-2">ÉTAPE 1</div>
                      <h3 className="text-2xl font-bold text-darkblue-900 mb-4">Prendre Rendez-Vous</h3>
                      <p className="text-gray-700">
                        Planifiez un rendez-vous avec l'un de nos experts i-prospect. Nous évaluerons vos besoins spécifiques et établirons un plan d'action personnalisé pour votre entreprise. Nous vous recommandons les meilleures stratégies de prospection adaptées à votre secteur.
                      </p>
                    </div>
                  </div>
                </div>
                <div className="w-full md:w-1/2 relative">
                  <div className="bg justify-items-center p-6 rounded-xl">
                    <img
                      src="/lovable-uploads/1d795743-b396-47b1-b346-944c5c5b6bf4.png"
                      alt="Calendrier de rendez-vous"
                      className="w-[50%] h-auto  rounded-lg"
                    />
                  </div>
                </div>
                {/* Connecting line */}
              </div>

              {/* Step 2 */}
              <div className="flex flex-col md:flex-row-reverse items-center mb-20 relative">
                <div className="w-full md:w-1/2 mb-8 md:mb-0 md:pl-8 relative z-10">
                  <div className="flex items-start space-x-5">
                    <div className="w-16 h-16 flex-shrink-0 rounded-full bg-red-100 flex items-center justify-center text-red-600">
                      <Video size={28} />
                    </div>
                    <div>
                      <div className="text-red-600 font-semibold mb-2">ÉTAPE 2</div>
                      <h3 className="text-2xl font-bold text-darkblue-900 mb-4">Démo</h3>
                      <p className="text-gray-700">
                        Assistez à une démonstration personnalisée de notre solution i-prospect. Découvrez comment notre plateforme peut automatiser votre prospection, générer des leads qualifiés et optimiser votre processus de vente. Posez toutes vos questions à notre équipe d'experts.
                      </p>
                    </div>
                  </div>
                </div>
                <div className="w-full md:w-1/2 relative">
                  <div className="bg justify-items-center p-6 rounded-xl ">
                    <img
                      src="/lovable-uploads/0521eee7-8189-41b1-b8ca-5e04a88369d1.png"
                      alt="Démonstration de la plateforme"
                      className="w-[50%] h-auto rounded-lg"
                    />
                  </div>
                </div>
                {/* Connecting line */}
              </div>

              {/* Step 3 */}
              <div className="flex flex-col md:flex-row items-center mb-20 relative">
                <div className="w-full md:w-1/2 mb-8 md:mb-0 md:pr-8 relative z-10">
                  <div className="flex items-start space-x-5">
                    <div className="w-16 h-16 flex-shrink-0 rounded-full bg-red-100 flex items-center justify-center text-red-600">
                      <FileSearch size={28} />
                    </div>
                    <div>
                      <div className="text-red-600 font-semibold mb-2">ÉTAPE 3</div>
                      <h3 className="text-2xl font-bold text-darkblue-900 mb-4">Étude du marché</h3>
                      <p className="text-gray-700">
                        Nous analysons votre marché cible et identifions les meilleurs prospects pour votre entreprise. Notre équipe élabore une stratégie de prospection sur mesure, en tenant compte de votre secteur d'activité, de votre positionnement et de vos objectifs commerciaux.
                      </p>
                    </div>
                  </div>
                </div>
                <div className="w-full md:w-1/2 relative">
                  <div className="bg justify-items-center p-6 rounded-xl">
                    <img
                      src="/lovable-uploads/9147447c-61a0-4390-b23a-5b25c2003409.png"
                      alt="Analyse de marché"
                      className="w-[50%] h-auto rounded-lg"
                    />
                  </div>
                </div>
                {/* Connecting line */}
              </div>

              {/* Step 4 */}
              <div className="flex flex-col md:flex-row-reverse items-center relative">
                <div className="w-full md:w-1/2 mb-8 md:mb-0 md:pl-8 relative z-10">
                  <div className="flex items-start space-x-5">
                    <div className="w-16 h-16 flex-shrink-0 rounded-full bg-red-100 flex items-center justify-center text-red-600">
                      <Signature size={28} />
                    </div>
                    <div>
                      <div className="text-red-600 font-semibold mb-2">ÉTAPE 4</div>
                      <h3 className="text-2xl font-bold text-darkblue-900 mb-4">Signature</h3>
                      <p className="text-gray-700">
                        Une fois que vous êtes convaincu par notre approche, nous finalisons le contrat et mettons en place votre solution i-prospect. Notre équipe vous accompagne tout au long du processus d'intégration et reste disponible pour répondre à vos questions et optimiser vos résultats.
                      </p>
                    </div>
                  </div>
                </div>
                <div className="w-full md:w-1/2 relative">
                  <div className="bg justify-items-center p-6 rounded-xl">
                    <img
                      src="/lovable-uploads/81b712cf-71fb-4449-8885-8d16accf7d85.png"
                      alt="Signature du contrat"
                      className="w-[50%] h-auto rounded-lg"
                    />
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
                Questions fréquentes sur <span className="text-red-600">i-prospect</span>
              </h2>
              <p className="max-w-3xl mx-auto text-lg text-gray-700">
                Découvrez comment notre solution peut s'adapter à vos besoins spécifiques
              </p>
            </div>

            <div className="max-w-4xl mx-auto grid grid-cols-1 gap-6">
              {iProspectFaqCategories.map((category, index) => (
                <FaqCategoryAccordion key={index} category={category} />
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 md:py-24">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center">
              <h2 className="text-3xl md:text-4xl font-bold text-darkblue-900 mb-6">
                Prêt à booster votre prospection?
              </h2>
              <p className="text-lg text-gray-700 mb-8">
                Prenez rendez-vous avec un conseiller i-prospect.<br />
                En moins de 48h, commencez à remplir votre agenda.
              </p>
              <Link to="/devis">
                <Button className="bg-red-600 hover:bg-red-700 text-white rounded-full py-3 px-8 text-lg font-medium inline-flex items-center">
                  Demander une démo gratuite
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

export default IProspect;
