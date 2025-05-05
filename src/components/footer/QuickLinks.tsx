
import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';

const QuickLinks: React.FC = () => {
  return <div>
      <h3 className="text-lg font-semibold mb-4 text-darkblue-900">Liens rapides</h3>
      <ul className="space-y-3">
        <li>
          <Link to="/expertise" className="text-darkblue-700 hover:text-darkblue-900 transition-colors hover-slide-right inline-flex items-center group">
            <ArrowRight size={14} className="mr-2 transition-transform group-hover:translate-x-1" />
            Nos expertises
          </Link>
        </li>
        <li>
          <Link to="/vous-etes" className="text-darkblue-700 hover:text-darkblue-900 transition-colors hover-slide-right inline-flex items-center group">
            <ArrowRight size={14} className="mr-2 transition-transform group-hover:translate-x-1" />
            Vous êtes
          </Link>
        </li>
        <li>
          <Link to="/pricing" className="text-darkblue-700 hover:text-darkblue-900 transition-colors hover-slide-right inline-flex items-center group">
            <ArrowRight size={14} className="mr-2 transition-transform group-hover:translate-x-1" />
            Nos offres
          </Link>
        </li>
        <li>
          <Link to="/registration" className="text-darkblue-700 hover:text-darkblue-900 transition-colors hover-slide-right inline-flex items-center group">
            <ArrowRight size={14} className="mr-2 transition-transform group-hover:translate-x-1" />
            i-numera et vous
          </Link>
        </li>
      </ul>
    </div>;
};

export default QuickLinks;
