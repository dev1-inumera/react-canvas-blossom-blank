
import React from 'react';
import { Mail, Phone, MapPin } from 'lucide-react';

const ContactInfo: React.FC = () => {
  return (
    <div>
      <h2 className="text-2xl font-bold text-darkblue-900 mb-6">Nos coordonnées</h2>
      
      <div className="space-y-8">
        <div className="flex items-start space-x-4">
          <div className="bg-red-100 p-3 rounded-full text-red-600">
            <MapPin className="h-6 w-6" />
          </div>
          <div>
            <h3 className="font-medium text-lg text-darkblue-900">Adresse</h3>
            <p className="text-gray-600 mt-1">
            131, Continental Dr, Suite 305<br /> 
            Newark, DE 19713<br />
            United States
            </p>
          </div>
        </div>
        
        <div className="flex items-start space-x-4">
          <div className="bg-red-100 p-3 rounded-full text-red-600">
            <Mail className="h-6 w-6" />
          </div>
          <div>
            <h3 className="font-medium text-lg text-darkblue-900">Email</h3>
            <p className="text-gray-600 mt-1">
              <a href="mailto:contact@i-numera.com" className="hover:text-red-600 transition-colors">
                contact@i-numera.com
              </a>
            </p>
          </div>
        </div>
        
        <div className="flex items-start space-x-4">
          <div className="bg-red-100 p-3 rounded-full text-red-600">
            <Phone className="h-6 w-6" />
          </div>
          <div>
            <h3 className="font-medium text-lg text-darkblue-900">Téléphone</h3>
            <div className="text-gray-600 mt-1 space-y-1">
              <p>
                <a href="tel:+33985404563" className="hover:text-red-600 transition-colors font-medium bg-red-50 px-2 py-0.5 rounded-sm">
                  +33 9 85 40 45 63
                </a>
              </p>
              <p>
                <a href="tel:+18338563018" className="hover:text-red-600 transition-colors font-medium bg-red-50 px-2 py-0.5 rounded-sm">
                  +1 833 856 3018
                </a>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactInfo;
