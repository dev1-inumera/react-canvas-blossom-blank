
import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import FaqHeader from './FaqHeader';
import FaqCategoryAccordion from './FaqCategoryAccordion';
import { faqCategories } from '@/data/faqData';

const FaqPage: React.FC = () => {
  return (
    <div className="flex-grow">
      <FaqHeader />
      
      <div className="container px-4 md:px-6 py-12">
        {/* Introduction */}
        <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-8 mb-12 flex flex-col md:flex-row items-center gap-6">
          <div className="flex items-center justify-center w-16 h-16 rounded-full bg-red-50 text-red-600 flex-shrink-0">
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-8 h-8">
              <path d="M12 22c5.523 0 10-4.477 10-10S17.523 2 12 2 2 6.477 2 12s4.477 10 10 10z"></path>
              <path d="m9.09 9a3 3 0 0 1 5.83 1c0 2-3 3-3 3"></path>
              <line x1="12" y1="17" x2="12.01" y2="17"></line>
            </svg>
          </div>
          <p className="text-darkblue-900 text-lg md:text-xl">
            Partenaire de confiance de plus de 20 000 TPE/PME, nous valorisons les relations sur le long terme.
          </p>
        </div>
        
        {/* FAQ Categories */}
        <div className="grid grid-cols-1 gap-8">
          {faqCategories.map((category, index) => (
            <FaqCategoryAccordion key={index} category={category} />
          ))}
        </div>
        
        {/* Call to Action */}
        <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-8 mt-12 text-center">
          <h3 className="text-2xl font-semibold text-darkblue-900 mb-4">
            Vous avez une autre question ?
          </h3>
          <p className="text-darkblue-900 mb-6 max-w-2xl mx-auto">
            Contactez-nous pour obtenir des réponses personnalisées à vos interrogations.
          </p>
          <Link
            to="/contact"
            className="inline-flex items-center justify-center px-6 py-3 rounded-full text-white bg-red-600 hover:bg-red-700 transition-all font-medium hover:shadow-lg group"
          >
            Contactez-nous
            <ArrowRight size={18} className="ml-2 transition-transform group-hover:translate-x-1" />
          </Link>
        </div>
      </div>
    </div>
  );
};

export default FaqPage;
