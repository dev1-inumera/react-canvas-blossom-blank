
import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';

const HelpLinks: React.FC = () => {
  return (
    <div>
      <h3 className="text-lg font-semibold mb-4 text-darkblue-900">Besoin d'aide ?</h3>
      <ul className="space-y-3">
        <li>
          <Link 
            to="/contact" 
            className="text-darkblue-700 hover:text-darkblue-900 transition-colors hover-slide-right inline-flex items-center group"
          >
            <ArrowRight size={14} className="mr-2 transition-transform group-hover:translate-x-1" />
            Contactez-nous
          </Link>
        </li>
        <li>
          <Link 
            to="/support" 
            className="text-darkblue-700 hover:text-darkblue-900 transition-colors hover-slide-right inline-flex items-center group"
          >
            <ArrowRight size={14} className="mr-2 transition-transform group-hover:translate-x-1" />
            Support client
          </Link>
        </li>
        <li>
          <Link 
            to="/faq" 
            className="text-darkblue-700 hover:text-darkblue-900 transition-colors hover-slide-right inline-flex items-center group"
          >
            <ArrowRight size={14} className="mr-2 transition-transform group-hover:translate-x-1" />
            FAQ
          </Link>
        </li>
        <li>
          <Link 
            to="/blog" 
            className="text-darkblue-700 hover:text-darkblue-900 transition-colors hover-slide-right inline-flex items-center group"
          >
            <ArrowRight size={14} className="mr-2 transition-transform group-hover:translate-x-1" />
            Blog
          </Link>
        </li>
      </ul>
    </div>
  );
};

export default HelpLinks;
