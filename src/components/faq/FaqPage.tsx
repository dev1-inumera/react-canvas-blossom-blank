
import React, { useState, useEffect } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { ArrowRight, Search } from 'lucide-react';
import FaqHeader from './FaqHeader';
import FaqCategoryAccordion from './FaqCategoryAccordion';
import { faqCategories, FaqCategory, Faq } from '@/data/faqData';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { CommandEmpty } from '@/components/ui/command';

const FaqPage: React.FC = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const queryParams = new URLSearchParams(location.search);
  const initialQuery = queryParams.get('q') || '';
  
  const [searchQuery, setSearchQuery] = useState(initialQuery);
  const [filteredCategories, setFilteredCategories] = useState<FaqCategory[]>(faqCategories);
  
  // Handle search query changes
  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    // Update URL with search query
    if (searchQuery.trim()) {
      navigate(`/faq?q=${encodeURIComponent(searchQuery.trim())}`);
    } else {
      navigate('/faq');
    }
  };
  
  // Filter FAQ categories and questions based on search query
  useEffect(() => {
    if (!initialQuery.trim()) {
      setFilteredCategories(faqCategories);
      return;
    }
    
    const query = initialQuery.toLowerCase();
    
    const filtered = faqCategories
      .map(category => {
        // Filter questions that match the query
        const filteredQuestions = category.questions.filter(
          question => 
            question.question.toLowerCase().includes(query) || 
            (typeof question.answer === 'string' 
              ? question.answer.toLowerCase().includes(query)
              : React.isValidElement(question.answer) && 
                JSON.stringify(question.answer.props).toLowerCase().includes(query)
            )
        );
        
        // Only include categories that have matching questions
        if (filteredQuestions.length > 0) {
          return {
            ...category,
            questions: filteredQuestions
          };
        }
        return null;
      })
      .filter((category): category is FaqCategory => category !== null);
    
    setFilteredCategories(filtered);
  }, [initialQuery]);
  
  // Update search input when URL query changes
  useEffect(() => {
    setSearchQuery(initialQuery);
  }, [initialQuery]);
  
  return (
    <div className="flex-grow">
      <FaqHeader />
      
      <div className="container px-4 md:px-6 py-12">
        {/* Search Bar */}
        <div className="max-w-2xl mx-auto mb-8">
          <form onSubmit={handleSearch} className="relative">
            <div className="flex items-center">
              <div className="relative flex-grow">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400" />
                <Input
                  type="text"
                  placeholder="Rechercher dans la FAQ..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="pl-10 w-full border-2 focus:border-red-500 rounded-l-md rounded-r-none"
                />
              </div>
              <Button 
                type="submit" 
                className="bg-red-600 hover:bg-red-700 text-white rounded-l-none rounded-r-md"
              >
                Rechercher
              </Button>
            </div>
          </form>
        </div>
        
        {/* Introduction */}
        {!initialQuery && (
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
        )}
        
        {/* Search Results */}
        {initialQuery && (
          <div className="mb-8">
            <h2 className="text-2xl font-semibold text-darkblue-900 mb-4">
              Résultats pour "{initialQuery}"
            </h2>
            {filteredCategories.length === 0 && (
              <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-8 text-center">
                <CommandEmpty className="py-6 text-center text-gray-500">
                  Aucun résultat trouvé pour votre recherche.
                </CommandEmpty>
                <p className="mt-2 text-gray-600">Essayez avec d'autres termes ou consultez toutes nos questions fréquentes.</p>
                <Button 
                  onClick={() => navigate('/faq')}
                  variant="outline" 
                  className="mt-4 border-blue-500 text-blue-500 hover:bg-blue-50"
                >
                  Voir toutes les questions
                </Button>
              </div>
            )}
          </div>
        )}
        
        {/* FAQ Categories */}
        <div className="grid grid-cols-1 gap-8">
          {filteredCategories.map((category, index) => (
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
