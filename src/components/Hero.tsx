import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import { cn } from "@/lib/utils";

interface HeroProps {
  className?: string;
}

const carouselSlides = [
  {
    backgroundImage:
      "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2",
    tag: "Solutions digitales pour professionnels",
    title:
      "Des solutions numériques <span class='text-red-500'>clés en main</span> pour booster votre activité.",
    description:
      "Nous accompagnons les professionnels et TPE/PME dans leur transformation digitale avec des solutions simples et efficaces.",
    link1: {
      to: "/expertise",
      text: "Découvrez nos prestations",
    },
    link2: {
      to: "/devis",
      text: "Demander un devis",
    },
  },
  {
    backgroundImage:
      "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158",
    tag: "Développement Web",
    title:
      "Sites internet <span class='text-red-500'>performants</span> et adaptés à votre métier",
    description:
      "Des sites web professionnels, optimisés pour le référencement et adaptés aux besoins de votre entreprise.",
    link1: {
      to: "/web-development",
      text: "Voir nos services web",
    },
    link2: {
      to: "/contact",
      text: "Contactez-nous",
    },
  },
  {
    backgroundImage:
      "https://images.unsplash.com/photo-1487058792275-0ad4aaf24ca7",
    tag: "Applications sur mesure",
    title:
      "Applications <span class='text-red-500'>personnalisées</span> pour votre métier",
    description:
      "Développement d'applications spécifiques pour simplifier vos processus et augmenter votre productivité.",
    link1: {
      to: "/custom-apps",
      text: "Explorez nos applications",
    },
    link2: {
      to: "/quote",
      text: "Obtenez un devis",
    },
  },
];

const Hero: React.FC<HeroProps> = ({ className }) => {
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prevSlide) =>
        prevSlide === carouselSlides.length - 1 ? 0 : prevSlide + 1
      );
    }, 4000);

    return () => clearInterval(interval);
  }, []);

  return (
    <section
      className={cn(
        "relative w-full overflow-hidden pt-32 pb-20 lg:pt-40 lg:pb-32",
        className
      )}
    >
      {/* Background Pattern Overlay */}
      <div className="absolute inset-0 -z-5 opacity-10">
        <div className="absolute -top-[40%] -right-[40%] h-[80%] w-[80%] rounded-full bg-darkblue-900 blur-[200px]" />
        <div className="absolute -bottom-[20%] -left-[20%] h-[60%] w-[60%] rounded-full bg-red-500 blur-[100px]" />
      </div>

      {/* Background Carousel */}
      <div className="absolute inset-0 -z-10">
        {carouselSlides.map((slide, index) => (
          <div
            key={index}
            className={cn(
              "absolute inset-0 transition-opacity duration-1000",
              index === currentSlide ? "opacity-100" : "opacity-0"
            )}
          >
            <div className="absolute inset-0 bg-black/70 z-10"></div>
            <img
              src={slide.backgroundImage}
              alt={`Background ${index + 1}`}
              className="w-full h-full object-cover"
              loading={index === 0 ? "eager" : "lazy"}
              decoding="async"
              fetchPriority={index === 0 ? "high" : "low"}
            />
          </div>
        ))}
      </div>

      {/* White Gradient Overlay */}
      <div className="absolute inset-y-0 left-0 w-[63%] bg-gradient-to-r from-white via-darkblue/80 to-transparent z-10 pointer-events-none"></div>

      <div className="container px-4 md:px-6 relative z-20">
        <div className="grid gap-12 lg:grid-cols-2 lg:gap-8 items-center">
          {/* Logo image section - keep the same animations and styling */}
          <div
            className="relative lg:pl-8 opacity-0 animate-fade-in"
            style={{ animationDelay: "0.6s", animationFillMode: "forwards" }}
          >
            <div className="relative rounded-2xl overflow-hidden">
              <div className="aspect-[4/3] relative overflow-hidden">
                <div className="absolute inset-0 flex items-center justify-center z-10">
                  <img
                    src="/lovable-uploads/b3c33571-dd4d-4269-a516-f847893fdd7f.png"
                    alt="i-numera logo"
                    className="w-[1500px] max-w-[95%] h-auto transform scale-110"
                    loading="eager"
                    decoding="async"
                    fetchPriority="high"
                  />
                </div>
              </div>
            </div>
            {/* Decorative Elements */}
            <div className="absolute -bottom-8 -left-8 w-16 h-16 bg-red-500 rounded-full blur-2xl opacity-20"></div>
            <div className="absolute -top-8 -right-8 w-20 h-20 bg-darkblue-500 rounded-full blur-3xl opacity-20"></div>
          </div>

          {/* Text and CTA section - keep the same content and animations */}
          <div className="flex flex-col space-y-8 animate-fade-in">
            <div className="space-y-5 max-w-[640px]">
              <div
                className="inline-block rounded-full px-3 py-1 text-sm bg-darkblue-50/90 text-darkblue-900 backdrop-blur-sm opacity-0 animate-fade-in"
                style={{
                  animationDelay: "0.2s",
                  animationFillMode: "forwards",
                }}
              >
                {carouselSlides[currentSlide].tag}
              </div>
              <h1
                className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tighter text-white leading-tight opacity-0 animate-fade-in"
                style={{
                  animationDelay: "0.4s",
                  animationFillMode: "forwards",
                }}
                dangerouslySetInnerHTML={{
                  __html: carouselSlides[currentSlide].title,
                }}
              />
              <p
                className="text-xl text-white/90 max-w-[600px] opacity-0 animate-fade-in"
                style={{
                  animationDelay: "0.6s",
                  animationFillMode: "forwards",
                }}
              >
                {carouselSlides[currentSlide].description}
              </p>
            </div>
            <div
              className="flex flex-col sm:flex-row gap-4 sm:gap-6 opacity-0 animate-fade-in"
              style={{ animationDelay: "0.8s", animationFillMode: "forwards" }}
            >
              <Link
                to={carouselSlides[currentSlide].link1.to}
                className="inline-flex items-center justify-center px-6 py-3 rounded-full text-white bg-red-600 hover:bg-red-700 transition-all font-medium hover:shadow-lg group"
              >
                {carouselSlides[currentSlide].link1.text}
                <ArrowRight
                  size={18}
                  className="ml-2 transition-transform group-hover:translate-x-1"
                />
              </Link>
              <Link
                to={carouselSlides[currentSlide].link2.to}
                className="inline-flex items-center justify-center px-6 py-3 rounded-full text-white bg-darkblue-800 hover:bg-darkblue-900 transition-all font-medium hover:shadow-lg group"
              >
                {carouselSlides[currentSlide].link2.text}
                <ArrowRight
                  size={18}
                  className="ml-2 transition-transform group-hover:translate-x-1"
                />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
