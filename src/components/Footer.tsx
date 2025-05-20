import React from 'react';
import { cn } from '@/lib/utils';
import CompanyInfo from './footer/CompanyInfo';
import QuickLinks from './footer/QuickLinks';
import HelpLinks from './footer/HelpLinks';
import ContactInfo from './footer/ContactInfo';
import LegalLinks from './footer/LegalLinks';
import { footerLinks } from '@/data/footerLinks';
import SocialIcons from './footer/SocialIcons';

interface FooterProps {
  className?: string;
}

const Footer: React.FC<FooterProps> = ({ className }) => {
  return (
    <footer className={cn("bg-white text-darkblue-900 pt-16 pb-8", className)}>
      <div className="container px-4 md:px-6">

        {/* Section dynamique avec footerLinks */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-5 gap-8 mb-12 text-sm text-gray-700">
          <div className="column">
            <QuickLinks />
            <HelpLinks />
          </div>


          {footerLinks.map((section, idx) => (
            <div key={idx}>
              <h4 className="font-semibold text-gray-900 mb-4">{section.title}</h4>
              <ul className="space-y-2">
                {section.items.map((item, index) => (
                  <li key={index}>
                    <p className="inline-block transition-all duration-300 border-b-2 border-transparent hover:border-[#bb0c15] hover:text-[#bb0c15]">
                      {item}
                    </p>
                  </li>
                ))}
              </ul>
            </div>
          ))}

        </div>



        {/* Bas de page */}
        <div className="pt-8 border-t border-gray-200">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <CompanyInfo />
            <LegalLinks />
          </div>
          <div className="column justify-items-center">
            <p className="text-darkblue-700 text-sm mb-4 md:mb-4">
              © 2025 i-numera. Tous droits réservés.
            </p>
            <SocialIcons />
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
