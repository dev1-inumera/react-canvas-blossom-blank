
import React from 'react';
import { Link } from 'react-router-dom';
import { X, ExternalLink } from 'lucide-react';
import { cn } from '@/lib/utils';
import Logo from './Logo';

interface NavItem {
  name: string;
  path: string;
}

interface MobileMenuProps {
  isOpen: boolean;
  navItems: NavItem[];
  location: {
    pathname: string;
  };
  closeMenu: () => void;
}

const MobileMenu: React.FC<MobileMenuProps> = ({ isOpen, navItems, location, closeMenu }) => (
  <div 
    className={cn(
      "fixed inset-0 z-50 bg-white transition-transform duration-300 lg:hidden",
      isOpen ? "translate-x-0" : "translate-x-full"
    )}
  >
    <div className="flex flex-col h-full p-6">
      <div className="flex justify-between items-center mb-8">
        <Logo onClick={closeMenu} />
        <button 
          className="p-2 text-darkblue-900"
          onClick={closeMenu}
          aria-label="Fermer le menu"
        >
          <X size={24} />
        </button>
      </div>

      <nav className="flex flex-col space-y-5 mb-auto">
        {navItems.map((item) => (
          <Link
            key={item.name}
            to={item.path}
            className={cn(
              'text-lg font-medium transition-colors hover:text-darkblue-600 py-2',
              location.pathname === item.path 
                ? 'text-darkblue-800' 
                : 'text-darkblue-900/80'
            )}
            onClick={closeMenu}
          >
            {item.name}
          </Link>
        ))}
      </nav>

      <div className="flex flex-col space-y-4 mt-auto pt-6">
        <div className="space-y-4 border-b border-gray-200 pb-4 mb-2">
          <Link 
            to="/contact" 
            className="px-6 py-3 font-medium rounded-full transition-all hover:shadow-lg bg-red-600 hover:bg-red-700 text-white text-center"
            onClick={closeMenu}
          >
            Contactez-nous
          </Link>
          <Link 
            to="/devis" 
            className="px-6 py-3 font-medium rounded-full transition-all hover:shadow-lg bg-darkblue-800 hover:bg-darkblue-900 text-white text-center"
            onClick={closeMenu}
          >
            Demander un devis
          </Link>
        </div>
        
        <a 
          href="https://numa.i-numera.com/" 
          target="_blank" 
          rel="noopener noreferrer"
          className="px-6 py-3 font-medium rounded-full transition-all hover:shadow-lg bg-darkblue-800 hover:bg-darkblue-900 text-white text-center flex items-center justify-center"
          onClick={closeMenu}
        >
          My i-numa <ExternalLink size={16} className="ml-2" />
        </a>
      </div>
    </div>
  </div>
);

export default MobileMenu;
