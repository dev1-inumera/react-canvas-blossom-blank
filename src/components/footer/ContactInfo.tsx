
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
        <li className="flex items-center">
          <Phone size={18} className="text-red-500 mr-3 flex-shrink-0" />
          <a 
            href="tel:+33102030405" 
            className="text-darkblue-700 hover:text-darkblue-900 transition-colors"
          >
            +33 9 85 40 45 63
          </a>
        </li>
      </ul>
    </div>
  );
};

export default ContactInfo;
