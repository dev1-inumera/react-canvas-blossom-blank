
import React from 'react';
import { Link } from 'react-router-dom';
import CookieManager from '@/components/cookies/CookieManager';

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
      <CookieManager />
    </div>
  );
};

export default LegalLinks;
