
import React from 'react';
import ExpertiseCard, { ExpertiseCardProps } from './ExpertiseCard';
import { ExpertiseCategory } from '@/data/expertiseData';

interface ExpertiseGridProps {
  expertiseCards: (Omit<ExpertiseCardProps, 'ref' | 'inView'> & { category: ExpertiseCategory })[];
  selectedCategory: ExpertiseCategory;
}

const ExpertiseGrid = ({ expertiseCards, selectedCategory }: ExpertiseGridProps) => {
  // Filter the cards based on the selected category
  const filteredCards = selectedCategory === 'all' 
    ? expertiseCards 
    : expertiseCards.filter(card => card.category === selectedCategory);

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
      {filteredCards.map((card, index) => (
        <ExpertiseCard
          key={index}
          icon={card.icon}
          title={card.title}
          description={card.description}
          features={card.features}
          price={card.price}
          delay={card.delay}
        />
      ))}
    </div>
  );
};

export default ExpertiseGrid;
