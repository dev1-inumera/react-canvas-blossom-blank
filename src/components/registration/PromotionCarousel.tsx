
import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

// Define the different promotional content slides
const promotions = [
  {
    title: "Expertise technique",
    description: "Nos équipes d'experts vous accompagnent dans tous vos projets numériques, du développement à la maintenance en passant par la sécurisation de vos données.",
    stats: [
      { value: "99%", label: "Satisfaction client" },
      { value: "24/7", label: "Support technique" },
      { value: "500+", label: "Projets réalisés" }
    ],
    icon: "code"
  },
  {
    title: "Solutions digitales",
    description: "Découvrez nos solutions innovantes pour votre transformation digitale, adaptées à vos besoins spécifiques. Notre équipe d'experts vous accompagne dans votre évolution technologique.",
    stats: [
      { value: "99%", label: "Satisfaction client" },
      { value: "24/7", label: "Support technique" },
      { value: "500+", label: "Projets réalisés" }
    ],
    icon: "star"
  },
  {
    title: "Innovation continue",
    description: "Bénéficiez des dernières technologies pour rester à la pointe de l'innovation. Nos solutions évoluent constamment pour répondre aux défis numériques actuels.",
    stats: [
      { value: "99%", label: "Satisfaction client" },
      { value: "24/7", label: "Support technique" },
      { value: "500+", label: "Projets réalisés" }
    ],
    icon: "lightbulb"
  },
  {
    title: "Accompagnement personnalisé",
    description: "Un suivi sur mesure pour chaque client, avec un conseiller dédié qui comprend vos enjeux spécifiques et vous guide tout au long de votre projet.",
    stats: [
      { value: "99%", label: "Satisfaction client" },
      { value: "24/7", label: "Support technique" },
      { value: "500+", label: "Projets réalisés" }
    ],
    icon: "users"
  },
];

const PromotionCarousel = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    // Auto-rotate slides every 5 seconds
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % promotions.length);
    }, 5000);
    
    return () => clearInterval(interval);
  }, []);

  // Function to render the icon based on the name
  const getIcon = (iconName: string) => {
    switch (iconName) {
      case 'code':
        return <span className="text-red-500">&#10094;&#47;&#10095;</span>;
      case 'star':
        return <span className="text-red-500">★</span>;
      case 'lightbulb':
        return <span className="text-red-500">💡</span>;
      case 'users':
        return <span className="text-red-500">👥</span>;
      default:
        return null;
    }
  };

  return (
    <div className="relative h-full">
      <AnimatePresence mode="wait">
        <motion.div
          key={currentIndex}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
          transition={{ duration: 0.5 }}
          className="h-full flex flex-col justify-between"
        >
          <div>
            <div className="flex items-center gap-2 mb-4">
              {getIcon(promotions[currentIndex].icon)}
              <h2 className="text-2xl font-bold">{promotions[currentIndex].title}</h2>
            </div>
            <p className="text-sm md:text-base text-gray-200 mb-8">
              {promotions[currentIndex].description}
            </p>
          </div>

          <div>
            <div className="w-16 h-1 bg-red-500 mb-6"></div>
            
            <div className="grid grid-cols-3 gap-4 text-center">
              {promotions[currentIndex].stats.map((stat, idx) => (
                <div key={idx}>
                  <p className="text-2xl md:text-3xl font-bold text-red-500">{stat.value}</p>
                  <p className="text-xs md:text-sm text-gray-300">{stat.label}</p>
                </div>
              ))}
            </div>
          </div>
        </motion.div>
      </AnimatePresence>

      {/* Dots indicator */}
      <div className="absolute bottom-0 left-0 right-0 flex justify-center gap-2 mt-4">
        {promotions.map((_, idx) => (
          <button
            key={idx}
            className={`w-2 h-2 rounded-full transition-colors ${
              idx === currentIndex ? 'bg-red-500' : 'bg-gray-500'
            }`}
            onClick={() => setCurrentIndex(idx)}
            aria-label={`Slide ${idx + 1}`}
          />
        ))}
      </div>
    </div>
  );
};

export default PromotionCarousel;
