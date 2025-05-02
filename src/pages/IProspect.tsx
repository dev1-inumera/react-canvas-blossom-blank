
import React, { useEffect } from "react";
import { useLocation } from "react-router-dom";
import { ArrowRight, Check, BarChart2, Users, MessageSquare } from "lucide-react";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Collapsible, CollapsibleContent, CollapsibleTrigger } from "@/components/ui/collapsible";
import { useInView } from "react-intersection-observer";
import { cn } from "@/lib/utils";

const IProspect = () => {
  const location = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location.pathname]);

  return (
    <div className="min-h-screen flex flex-col bg-white">
      <Navigation />
      <main className="flex-grow">
        {/* Hero Section */}
        <section className="pt-32 pb-16 px-4 md:px-8 lg:px-16">
          <div className="max-w-7xl mx-auto">
            <div className="grid md:grid-cols-12 gap-8">
              <div className="md:col-span-7 space-y-6">
                <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-darkblue-900 leading-tight">
                  Les meilleurs outils de prospection,{" "}
                  <span className="text-red-600">simplement !</span>
                </h1>
                <p className="text-lg text-darkblue-800/80 max-w-xl">
                  i-prospect combine cold mailing, cold calling et community management pour une prospection efficace et automatisée qui booste votre chiffre d'affaires
                </p>
                <div className="flex flex-wrap gap-4 pt-4">
                  <Button size="lg" className="bg-red-600 hover:bg-red-700 rounded-full">
                    Obtenir une démo personnalisée
                    <ArrowRight className="ml-2 h-5 w-5" />
                  </Button>
                  <Button size="lg" variant="outline" className="border-darkblue-200 text-darkblue-800 rounded-full">
                    Voir les tarifs
                  </Button>
                </div>
                <div className="flex items-center gap-4 mt-6">
                  <div className="flex -space-x-3">
                    {[1, 2, 3, 4].map((i) => (
                      <div key={i} className="w-10 h-10 rounded-full bg-gray-300 border-2 border-white" />
                    ))}
                  </div>
                  <p className="text-sm text-darkblue-700">
                    <span className="font-semibold">+280 entreprises</span> utilisent i-prospect
                  </p>
                </div>
              </div>
              <div className="md:col-span-5 relative flex items-center justify-center">
                <div className="w-full h-full max-w-md">
                  <img 
                    src="/lovable-uploads/9b82be91-f06d-4308-bad0-92707d3c209a.png" 
                    alt="i-prospect dashboard"
                    className="w-full h-auto rounded-lg shadow-xl"
                  />
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Partners Section */}
        <section className="py-16 bg-gray-50 px-4">
          <div className="max-w-7xl mx-auto text-center">
            <p className="text-darkblue-800 font-medium mb-8">Des outils qui s'intègrent avec vos plateformes préférées</p>
            <div className="grid grid-cols-3 md:grid-cols-6 lg:grid-cols-9 gap-8 items-center justify-items-center">
              {Array.from({ length: 9 }).map((_, i) => (
                <div key={i} className="grayscale hover:grayscale-0 transition-all opacity-70 hover:opacity-100">
                  <img 
                    src={`/lovable-uploads/b3c33571-dd4d-4269-a516-f847893fdd7f.png`} 
                    alt={`Partenaire ${i+1}`}
                    className="h-8 w-auto object-contain"
                  />
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Benefits Section */}
        <section className="py-20 px-4">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-darkblue-900 mb-4">
                Découvrez nos services de prospection commerciale, avec i-Prospect
              </h2>
              <p className="text-lg text-darkblue-700 max-w-2xl mx-auto">
                Notre solution combine le meilleur des techniques de prospection modernes pour vous aider à développer votre activité
              </p>
            </div>
            
            <div className="grid md:grid-cols-3 gap-8">
              {/* Card 1 */}
              <FeatureCard 
                icon={<MessageSquare className="h-8 w-8 text-red-600" />}
                title="Cold Mailing Professionnel"
                description="Envoi automatisé d'emails de prospection avec suivi et relances intelligentes pour maximiser vos taux d'ouverture et de réponse"
                metrics={["Taux d'ouverture +45%", "Taux de réponse amélioré", "Personnalisation avancée"]}
              />
              
              {/* Card 2 */}
              <FeatureCard 
                icon={<Users className="h-8 w-8 text-red-600" />}
                title="Cold Calling Optimisé"
                description="Scripts d'appel personnalisés et système de qualification des leads pour convertir plus efficacement vos prospects par téléphone"
                metrics={["Taux de décroché +35%", "Conversations qualifiées", "Suivi automatique"]}
              />
              
              {/* Card 3 */}
              <FeatureCard 
                icon={<BarChart2 className="h-8 w-8 text-red-600" />}
                title="Community Management"
                description="Animation de vos réseaux sociaux professionnels pour générer des leads et renforcer votre image de marque auprès de vos prospects"
                metrics={["Engagement +40%", "Génération de leads", "Notoriété renforcée"]}
              />
            </div>
          </div>
        </section>

        {/* Platform Overview */}
        <section className="py-16 px-4 bg-white">
          <div className="max-w-7xl mx-auto">
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div className="space-y-6">
                <h2 className="text-3xl md:text-4xl font-bold text-darkblue-900">
                  i-Prospect : la solution complète de génération de leads
                </h2>
                <p className="text-lg text-darkblue-700">
                  Notre plateforme combine les meilleurs outils pour vous permettre d'atteindre vos objectifs commerciaux sans effort. Automatisez vos campagnes de prospection et suivez vos performances en temps réel.
                </p>
                <ul className="space-y-3">
                  {[
                    "Campagnes de cold mailing automatisées et personnalisées",
                    "Suivi et relances des prospects par téléphone",
                    "Animation de vos réseaux sociaux professionnels",
                    "Tableau de bord unifié pour suivre toutes vos actions",
                    "Intégration avec vos outils CRM existants"
                  ].map((item, i) => (
                    <li key={i} className="flex items-start">
                      <Check className="h-5 w-5 text-red-600 mr-2 mt-1 flex-shrink-0" />
                      <span className="text-darkblue-800">{item}</span>
                    </li>
                  ))}
                </ul>
                <Button size="lg" className="mt-4 bg-red-600 hover:bg-red-700 rounded-full">
                  Demandez une démonstration
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
              </div>
              <div className="relative rounded-xl overflow-hidden shadow-xl">
                <img 
                  src="/lovable-uploads/9b82be91-f06d-4308-bad0-92707d3c209a.png"
                  alt="i-Prospect Dashboard" 
                  className="w-full h-auto"
                />
              </div>
            </div>
          </div>
        </section>

        {/* Testimonials Section */}
        <section className="py-20 px-4 bg-gray-50">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-darkblue-900 mb-4">
                Ils ont boosté leur chiffre d'affaires avec i-Prospect
              </h2>
              <p className="text-lg text-darkblue-700 max-w-2xl mx-auto">
                Découvrez comment nos clients ont transformé leur approche commerciale grâce à notre solution complète
              </p>
            </div>
            
            <div className="grid md:grid-cols-2 gap-8">
              <TestimonialCard 
                logo="/lovable-uploads/b3c33571-dd4d-4269-a516-f847893fdd7f.png"
                quote="Depuis que nous utilisons i-Prospect, notre pipeline commercial a augmenté de 60%. L'automatisation des relances nous a fait gagner un temps précieux."
                author="Marie Dupont"
                position="Directrice Commerciale, Entreprise A"
                image="/lovable-uploads/9b82be91-f06d-4308-bad0-92707d3c209a.png"
              />
              
              <TestimonialCard 
                logo="/lovable-uploads/b3c33571-dd4d-4269-a516-f847893fdd7f.png"
                quote="La combinaison cold mailing + cold calling nous a permis d'augmenter nos conversions de 40%. Le support de l'équipe est exceptionnel."
                author="Jean Martin"
                position="CEO, Entreprise B"
                image="/lovable-uploads/9b82be91-f06d-4308-bad0-92707d3c209a.png"
              />
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <section className="py-20 px-4">
          <div className="max-w-3xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-darkblue-900 mb-4">
                Quel est le meilleur type de prospection pour votre activité ?
              </h2>
            </div>
            
            <div className="space-y-4">
              <FaqItem 
                question="Comment fonctionne le cold mailing avec i-Prospect ?"
                answer="Notre solution de cold mailing automatise l'envoi d'emails personnalisés à vos prospects, avec un système de relances intelligentes basé sur les interactions de vos destinataires. Vous pouvez suivre les performances en temps réel et ajuster vos campagnes pour maximiser vos résultats."
              />
              
              <FaqItem 
                question="Est-ce que i-Prospect s'intègre avec mon CRM actuel ?"
                answer="Oui, i-Prospect s'intègre parfaitement avec la plupart des CRM du marché comme Salesforce, HubSpot, Pipedrive et bien d'autres. Notre équipe technique vous accompagne dans la mise en place des connecteurs pour assurer une synchronisation optimale de vos données."
              />
              
              <FaqItem 
                question="Comment mesurer le ROI de mes campagnes de prospection ?"
                answer="i-Prospect intègre un tableau de bord analytique complet qui vous permet de suivre toutes les métriques importantes : taux d'ouverture, taux de réponse, nombre de rendez-vous générés, opportunités créées et chiffre d'affaires généré. Vous pouvez ainsi mesurer précisément le retour sur investissement de chaque campagne."
              />
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 px-4 bg-red-600">
          <div className="max-w-7xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Prêt à booster votre prospection commerciale ?
            </h2>
            <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
              Découvrez comment i-Prospect peut transformer votre approche commerciale et augmenter significativement votre chiffre d'affaires.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Button size="lg" className="bg-white text-red-600 hover:bg-gray-100 rounded-full">
                Demander une démo
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
              <Button size="lg" variant="outline" className="border-white text-white hover:bg-white/10 rounded-full">
                Voir nos tarifs
              </Button>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

// Feature Card Component
const FeatureCard = ({ icon, title, description, metrics }) => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <Card 
      ref={ref}
      className={cn(
        "border border-gray-200 rounded-xl shadow-sm hover:shadow-md transition-all overflow-hidden",
        inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
      )}
    >
      <CardContent className="p-6">
        <div className="mb-5">{icon}</div>
        <h3 className="text-xl font-bold text-darkblue-900 mb-3">{title}</h3>
        <p className="text-darkblue-700 mb-5">{description}</p>
        <ul className="space-y-2">
          {metrics.map((metric, i) => (
            <li key={i} className="flex items-start">
              <Check className="h-4 w-4 text-red-600 mr-2 mt-1 flex-shrink-0" />
              <span className="text-sm text-darkblue-800">{metric}</span>
            </li>
          ))}
        </ul>
      </CardContent>
    </Card>
  );
};

// Testimonial Card Component
const TestimonialCard = ({ logo, quote, author, position, image }) => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <div 
      ref={ref}
      className={cn(
        "bg-white rounded-xl shadow-md overflow-hidden transition-all",
        inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
      )}
    >
      <div className="p-6">
        <div className="h-8 w-auto mb-4">
          <img src={logo} alt="Company logo" className="h-full w-auto object-contain" />
        </div>
        <p className="text-darkblue-800 mb-4">"{quote}"</p>
        <div className="flex items-center">
          <div>
            <p className="font-medium text-darkblue-900">{author}</p>
            <p className="text-sm text-darkblue-600">{position}</p>
          </div>
        </div>
      </div>
      <div className="relative h-48 w-full">
        <img 
          src={image} 
          alt={author} 
          className="w-full h-full object-cover"
        />
      </div>
    </div>
  );
};

// FAQ Item Component
const FaqItem = ({ question, answer }) => {
  const [isOpen, setIsOpen] = React.useState(false);
  
  return (
    <Collapsible open={isOpen} onOpenChange={setIsOpen} className="border border-gray-200 rounded-lg overflow-hidden">
      <CollapsibleTrigger className="flex items-center justify-between w-full p-4 text-left font-medium text-darkblue-900 hover:bg-gray-50">
        {question}
        <div className={`transform transition-transform ${isOpen ? 'rotate-180' : ''}`}>
          <svg width="15" height="15" viewBox="0 0 15 15" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M3.13523 6.15803C3.3241 5.95657 3.64052 5.94637 3.84197 6.13523L7.5 9.56464L11.158 6.13523C11.3595 5.94637 11.6759 5.95657 11.8648 6.15803C12.0536 6.35949 12.0434 6.67591 11.842 6.86477L7.84197 10.6148C7.64964 10.7951 7.35036 10.7951 7.15803 10.6148L3.15803 6.86477C2.95657 6.67591 2.94637 6.35949 3.13523 6.15803Z" fill="currentColor" fillRule="evenodd" clipRule="evenodd" />
          </svg>
        </div>
      </CollapsibleTrigger>
      <CollapsibleContent className="p-4 pt-0 text-darkblue-700">
        {answer}
      </CollapsibleContent>
    </Collapsible>
  );
};

export default IProspect;
