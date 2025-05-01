
import React from 'react';
import { Link } from 'react-router-dom';
import { HelpCircle, Star, MessageSquare } from 'lucide-react';
import { Button } from '@/components/ui/button';

const FaqSidebar: React.FC = () => {
  return <div className="space-y-8">
      <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
        <h3 className="text-xl font-bold mb-4">Conseils et astuces</h3>
        <p className="text-gray-600 mb-4">
          Découvrez conseils et astuces sur notre blog accessible à tous
        </p>
        <Link to="/blog">
          <Button variant="outline" className="w-full border-blue-500 text-blue-500 hover:bg-blue-50 flex items-center justify-center">
            <span className="mr-2">Parlez-vous digital ?</span>
            <HelpCircle className="h-4 w-4" />
          </Button>
        </Link>
      </div>
      
      <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
        <h3 className="text-xl font-bold mb-4">Votre avis nous intéresse !</h3>
        <p className="text-gray-600 mb-4">
          Evaluez nos prestations et partagez votre expérience.
        </p>
        <Button variant="outline" className="w-full border-blue-500 text-blue-500 hover:bg-blue-50 flex items-center justify-center">
          <Star className="h-4 w-4 mr-2 text-blue-500" />
          Je donne mon avis
        </Button>
      </div>
      
      <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
        <h3 className="text-xl font-bold mb-4">Questions fréquentes</h3>
        <p className="text-gray-600 mb-4">
          Retrouvez les réponses aux questions les plus fréquentes sur la page FAQ
        </p>
        <Link to="/faq">
          <Button variant="outline" className="w-full border-blue-500 text-blue-500 hover:bg-blue-50 flex items-center justify-center">
            <MessageSquare className="h-4 w-4 mr-2" />
            Questions fréquentes
          </Button>
        </Link>
      </div>
    </div>;
};

export default FaqSidebar;
