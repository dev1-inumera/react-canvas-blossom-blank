
import React from 'react';
import { cn } from '@/lib/utils';
import CompanyInfo from './footer/CompanyInfo';
import QuickLinks from './footer/QuickLinks';
import HelpLinks from './footer/HelpLinks';
import ContactInfo from './footer/ContactInfo';
import LegalLinks from './footer/LegalLinks';

interface FooterProps {
  className?: string;
}

const Footer: React.FC<FooterProps> = ({ className }) => {
  return (
    <footer className={cn("bg-white text-darkblue-900 pt-16 pb-8", className)}>
      <div className="container px-4 md:px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          <CompanyInfo />
          <QuickLinks />
          <HelpLinks />
          <ContactInfo />
        </div>

        <div className="pt-8 border-t border-gray-200">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-darkblue-700 text-sm mb-4 md:mb-0">
              © 2025 i-numera. Tous droits réservés.
            </p>
            <LegalLinks />
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
