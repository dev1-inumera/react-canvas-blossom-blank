
import React from 'react';
import { Clock, Phone } from 'lucide-react';

const BusinessInfo: React.FC = () => {
  return (
    <div className="bg-white p-8 rounded-xl shadow-md border border-gray-100">
      <h2 className="text-2xl font-bold text-blue-600 mb-6">Infos pratiques</h2>
      
      <div className="space-y-6">
        <div>
          <p className="text-gray-700">Le service clients i-numera est ouvert du</p>
          <p className="font-medium">lundi au vendredi</p>
          <p className="text-gray-700">de <span className="font-medium">8h30 à 18h</span>.</p>
        </div>
        
        <div>
          <p className="text-gray-700">Vous pouvez nous joindre par téléphone au</p>
          <p className="font-medium text-lg">+33 9 85 40 45 63</p>
          <p className="text-gray-700">ou utiliser le formulaire de cette page.</p>
        </div>
        
        <div className="mt-8 pt-8 border-t border-gray-200">
          <div className="bg-gray-100 p-4 rounded-lg">
            <div className="flex justify-between items-center mb-2">
              <span className="text-sm text-gray-500">8h30</span>
              <span className="text-sm text-gray-500">10h</span>
              <span className="text-sm text-gray-500">12h</span>
              <span className="text-sm text-gray-500">14h</span>
              <span className="text-sm text-gray-500">16h</span>
              <span className="text-sm text-gray-500">18h</span>
            </div>
            <div className="flex space-x-1">
              {[3, 4, 4, 3, 2, 4, 4, 3].map((height, i) => (
                <div 
                  key={i} 
                  className="flex-1 bg-blue-300 rounded-sm" 
                  style={{ height: `${height * 8}px` }}
                />
              ))}
            </div>
            <p className="mt-4 text-gray-700 text-sm">
              Affluence du Service Clients, temps d'attente moyen &lt; à 10 secondes
            </p>
          </div>
        </div>
        
        <div className="mt-8">
          <h3 className="text-xl font-bold text-blue-600 mb-4">Aide à distance</h3>
          <p className="text-gray-700">Vous avez besoin d'aide pour résoudre un problème technique? Notre équipe est disponible pour vous assister à distance.</p>
        </div>
      </div>
    </div>
  );
};

export default BusinessInfo;
