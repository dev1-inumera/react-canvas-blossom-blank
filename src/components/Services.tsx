
import React from 'react';
import { useInView } from 'react-intersection-observer';
import { 
  Globe, 
  BarChart3, 
  Search, 
  MapPin, 
  Users,
  Star,
  Award,
  Bookmark
} from 'lucide-react';
import { cn } from '@/lib/utils';
import ServiceCard from './ServiceCard';
import KeyMetric from './KeyMetric';

const Services = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const serviceCards = [
    {
      icon: <Globe size={24} />,
      title: "Création de site internet",
      description: "Des sites web modernes, responsives et optimisés pour convertir vos visiteurs en clients.",
      delay: 100,
      backgroundImage: "https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d"
    },
    {
      icon: <Search size={24} />,
      title: "Référencement (SEO/SEA)",
      description: "Améliorez votre visibilité en ligne et attirez plus de clients grâce à nos stratégies SEO et SEA.",
      delay: 200,
      backgroundImage: "https://images.unsplash.com/photo-1498050108023-c5249f4df085"
    },
    {
      icon: <MapPin size={24} />,
      title: "Google My Business",
      description: "Optimisez votre présence locale et apparaissez sur Google Maps pour attirer des clients près de chez vous.",
      delay: 300,
      backgroundImage: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158"
    },
    {
      icon: <BarChart3 size={24} />,
      title: "E-réputation",
      description: "Construisez et maintenez une image positive en ligne avec notre gestion de la e-réputation.",
      delay: 400,
      backgroundImage: "https://images.unsplash.com/photo-1522071820081-009f0129c71c"
    },
    {
      icon: <Users size={24} />,
      title: "Community Management",
      description: "Engagez votre audience sur les réseaux sociaux avec notre service de gestion de communauté.",
      delay: 500,
      backgroundImage: "https://images.unsplash.com/photo-1556761175-5973dc0f32e7"
    }
  ];

  const keyMetrics = [
    { value: "5+", label: "Années d'expérience", delay: 200 },
    { value: "250+", label: "Projets réalisés", delay: 300 },
    { value: "700+", label: "Sites web créés", delay: 400 }
  ];

  return (
    <section className="py-20 bg-gray-50">
      <div className="container px-4 md:px-6">
        <div 
          ref={ref}
          className={cn(
            "max-w-3xl mx-auto text-center mb-16",
            inView ? "opacity-100" : "opacity-0"
          )}
          style={{ 
            transition: 'opacity 700ms cubic-bezier(0.4, 0, 0.2, 1)'
          }}
        >
          <div className="inline-block rounded-full px-3 py-1 text-sm bg-darkblue-100 text-darkblue-900 mb-4">
            Nos expertises
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-darkblue-900 tracking-tight mb-4">
            Des solutions adaptées à vos besoins
          </h2>
          <p className="text-xl text-darkblue-700/80">
            Nous vous accompagnons dans votre transformation digitale avec des services sur mesure.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-20">
          {serviceCards.map((card, index) => (
            <ServiceCard
              key={index}
              icon={card.icon}
              title={card.title}
              description={card.description}
              delay={card.delay}
              backgroundImage={card.backgroundImage}
            />
          ))}
        </div>

        <div className="bg-white rounded-2xl shadow-sm border border-gray-100 py-8 mb-16">
          <div className="grid grid-cols-3">
            {keyMetrics.map((metric, index) => (
              <KeyMetric
                key={index}
                value={metric.value}
                label={metric.label}
                delay={metric.delay}
              />
            ))}
          </div>
        </div>

        <div 
          className={cn(
            "max-w-3xl mx-auto text-center",
            inView ? "opacity-100" : "opacity-0"
          )}
          style={{ 
            transition: 'opacity 700ms cubic-bezier(0.4, 0, 0.2, 1)',
            transitionDelay: '300ms'
          }}
        >
          <div className="flex items-center justify-center space-x-2 mb-6">
            <Star size={20} className="text-red-600" />
            <h3 className="text-lg font-semibold text-darkblue-900">Certifications & Partenariats</h3>
            <Star size={20} className="text-red-600" />
          </div>
          <div className="flex flex-wrap items-center justify-center gap-8 opacity-80">
            <div className="flex items-center space-x-2 text-darkblue-900 font-semibold">
              <Award size={24} />
              <span>Partenaire Google</span>
            </div>
            <div className="flex items-center space-x-2 text-darkblue-900 font-semibold">
              <Bookmark size={24} />
              <span>Facebook Partner</span>
            </div>
            <div className="flex items-center space-x-2 text-darkblue-900 font-semibold">
              <Award size={24} />
              <span>Microsoft Advertising</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;
