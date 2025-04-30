import React from 'react';
import { HelpCircle, Star, MessageSquare } from 'lucide-react';
import { Button } from '@/components/ui/button';
const FaqSidebar: React.FC = () => {
  return <div className="space-y-8">
      <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
        <h3 className="text-xl font-bold mb-4">Conseils et astuces</h3>
        <p className="text-gray-600 mb-4">
          Découvrez conseils et astuces sur notre blog accessible à tous
        </p>
        <Button variant="outline" className="w-full border-blue-500 text-blue-500 hover:bg-blue-50 flex items-center justify-center">
          <span className="mr-2">Parlez-vous digital ?</span>
          <HelpCircle className="h-4 w-4" />
        </Button>
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
        <Button variant="outline" className="w-full border-blue-500 text-blue-500 hover:bg-blue-50 flex items-center justify-center">
          <MessageSquare className="h-4 w-4 mr-2" />
          Questions fréquentes
        </Button>
      </div>
      
      <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
        <h3 className="text-xl font-bold mb-4">i-numera.com</h3>
        <div className="flex items-start gap-2 text-blue-500">
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="h-5 w-5 flex-shrink-0 mt-0.5">
            <path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z"></path>
            <circle cx="12" cy="10" r="3"></circle>
          </svg>
          <p className="text-blue-500 ">131 Continental Dr, Suite 305
Newark, DE 19713
United States</p>
        </div>
      </div>
    </div>;
};
export default FaqSidebar;