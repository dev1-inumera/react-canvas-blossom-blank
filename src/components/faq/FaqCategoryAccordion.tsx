
import React from 'react';
import { useInView } from 'react-intersection-observer';
import { cn } from '@/lib/utils';
import FaqItem from './FaqItem';
import { FaqCategory } from '@/data/faqData';

interface FaqCategoryAccordionProps {
  category: FaqCategory;
}

const FaqCategoryAccordion: React.FC<FaqCategoryAccordionProps> = ({ category }) => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <div 
      ref={ref}
      className={cn(
        "bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden",
        inView ? "opacity-100" : "opacity-0 translate-y-8"
      )}
      style={{ 
        transitionProperty: 'all', 
        transitionDuration: '700ms', 
        transitionTimingFunction: 'cubic-bezier(0.4, 0, 0.2, 1)' 
      }}
    >
      <div className="p-6 border-b border-gray-100">
        <div className="flex items-center">
          <div className="flex items-center justify-center w-10 h-10 rounded-full bg-red-50 text-red-600 mr-4">
            {category.icon}
          </div>
          <h2 className="text-xl font-semibold text-darkblue-900">{category.title}</h2>
        </div>
      </div>
      <div className="divide-y divide-gray-100">
        {category.questions.map((faq, index) => (
          <FaqItem key={index} faq={faq} />
        ))}
      </div>
    </div>
  );
};

export default FaqCategoryAccordion;
