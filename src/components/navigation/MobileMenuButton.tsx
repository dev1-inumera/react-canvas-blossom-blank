
import React from 'react';
import { Menu, X } from 'lucide-react';
import { cn } from '@/lib/utils';

interface MobileMenuButtonProps {
  isOpen: boolean;
  toggleMenu: () => void;
}

const MobileMenuButton: React.FC<MobileMenuButtonProps> = ({ isOpen, toggleMenu }) => (
  <button 
    className={cn("lg:hidden p-2", "text-darkblue-900")}
    onClick={toggleMenu}
    aria-label={isOpen ? "Fermer le menu" : "Ouvrir le menu"}
  >
    {isOpen ? <X size={24} /> : <Menu size={24} />}
  </button>
);

export default MobileMenuButton;
