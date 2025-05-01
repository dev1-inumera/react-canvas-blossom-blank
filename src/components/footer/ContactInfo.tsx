
import React from 'react';
import { MapPin, Mail, Phone } from 'lucide-react';

const ContactInfo: React.FC = () => {
  return (
    <div>
      <h3 className="text-lg font-semibold mb-4 text-darkblue-900">Contact</h3>
      <ul className="space-y-4">
        <li className="flex items-start">
          <MapPin size={18} className="text-red-500 mr-3 mt-1 flex-shrink-0" />
          <span className="text-darkblue-700">
            131, Continental Dr, Suite 305<br />
            Newark, DE 19713<br />
            United States
          </span>
        </li>
        <li className="flex items-center">
          <Mail size={18} className="text-red-500 mr-3 flex-shrink-0" />
          <a 
            href="mailto:contact@i-numera.com" 
            className="text-darkblue-700 hover:text-darkblue-900 transition-colors"
          >
            contact@i-numera.com
          </a>
        </li>
        <li className="flex items-start">
          <Phone size={18} className="text-red-500 mr-3 flex-shrink-0 mt-1" />
          <div className="space-y-1">
            <a 
              href="tel:+33985404563" 
              className="text-darkblue-700 hover:text-darkblue-900 transition-colors block bg-red-50 px-2 py-0.5 rounded-sm"
            >
              +33 9 85 40 45 63
            </a>
            <a 
              href="tel:+18338563018" 
              className="text-darkblue-700 hover:text-darkblue-900 transition-colors block bg-red-50 px-2 py-0.5 rounded-sm"
            >
              +1 833 856 3018
            </a>
          </div>
        </li>
      </ul>
    </div>
  );
};

export default ContactInfo;
