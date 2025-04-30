
import React from 'react';
import { Link } from 'react-router-dom';

const LegalLinks: React.FC = () => {
  return (
    <div className="flex flex-wrap items-center gap-4 text-sm text-darkblue-700">
      <Link 
        to="/terms" 
        className="hover:text-darkblue-900 transition-colors"
      >
        Mentions légales
      </Link>
      <Link 
        to="/privacy" 
        className="hover:text-darkblue-900 transition-colors"
      >
        Politique de confidentialité
      </Link>
      <Link 
        to="/cookies" 
        className="hover:text-darkblue-900 transition-colors"
      >
        Gestion des cookies
      </Link>
    </div>
  );
};

export default LegalLinks;
