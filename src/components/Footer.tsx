
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
    <footer className={cn("bg-white text-darkblue-900 pt-12 md:pt-16 pb-6 md:pb-8", className)}>
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section dynamique avec footerLinks */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-6 md:gap-8 mb-8 md:mb-12 text-sm text-gray-700">
          <div className="col-span-1 sm:col-span-2 lg:col-span-1">
            <QuickLinks />
            <HelpLinks />
          </div>

          {footerLinks.map((section, idx) => (
            <div key={idx} className="col-span-1">
              <h4 className="font-semibold text-blue-900 text-lg md:text-xl text-gray-900 mb-3 md:mb-4">
                {section.title}
              </h4>
              <ul className="space-y-2">
                {section.items.map((item, index) => (
                  <li key={index}>
                    <p className="inline-block text-blue-900 transition-all duration-300 border-b-2 border-transparent hover:border-[#bb0c15] hover:text-[#bb0c15] text-sm md:text-base">
                      {item}
                    </p>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Bas de page */}
        <div className="pt-6 md:pt-8 border-t border-gray-200">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <CompanyInfo />
            <LegalLinks />
          </div>
          <div className="flex flex-col items-center mt-4 md:mt-6">
            <p className="text-darkblue-700 text-xs md:text-sm mb-3 md:mb-4 text-center">
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
