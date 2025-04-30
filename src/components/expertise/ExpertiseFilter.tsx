
import React from 'react';
import { useInView } from 'react-intersection-observer';
import { cn } from '@/lib/utils';
import { ExpertiseCategory, expertiseCategories } from '@/data/expertiseData';
import { ToggleGroup, ToggleGroupItem } from '@/components/ui/toggle-group';

interface ExpertiseFilterProps {
  selectedCategory: ExpertiseCategory;
  onSelectCategory: (category: ExpertiseCategory) => void;
}

const ExpertiseFilter = ({ 
  selectedCategory, 
  onSelectCategory 
}: ExpertiseFilterProps) => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <div 
      ref={ref}
      className={cn(
        "max-w-3xl mx-auto mb-10",
        inView ? "opacity-100" : "opacity-0"
      )}
      style={{ 
        transition: 'opacity 700ms cubic-bezier(0.4, 0, 0.2, 1)',
        transitionDelay: '200ms'
      }}
    >
      <div className="flex flex-col items-center justify-center">
        <h3 className="text-darkblue-900 font-medium mb-4">Filtrer par catégorie</h3>
        <ToggleGroup type="single" value={selectedCategory} onValueChange={(value) => {
          if (value) onSelectCategory(value as ExpertiseCategory);
        }}>
          {expertiseCategories.map((category) => (
            <ToggleGroupItem 
              key={category.id} 
              value={category.id}
              variant="outline"
              className={cn(
                "min-w-[120px] border-darkblue-200 hover:bg-darkblue-50",
                selectedCategory === category.id && "bg-darkblue-100 text-darkblue-900"
              )}
            >
              {category.label}
            </ToggleGroupItem>
          ))}
        </ToggleGroup>
      </div>
    </div>
  );
};

export default ExpertiseFilter;
