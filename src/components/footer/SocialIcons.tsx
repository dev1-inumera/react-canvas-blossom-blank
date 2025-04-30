
import React from 'react';
import {
  Facebook,
  Twitter,
  Instagram,
  Linkedin,
} from 'lucide-react';

interface SocialIconsProps {
  className?: string;
}

const SocialIcons: React.FC<SocialIconsProps> = ({ className }) => {
  return (
    <div className={`flex space-x-4 ${className}`}>
      <a 
        href="https://facebook.com" 
        className="w-9 h-9 rounded-full bg-gray-100 hover:bg-gray-200 flex items-center justify-center transition-colors text-darkblue-800"
        aria-label="Facebook"
        target="_blank"
        rel="noopener noreferrer"
      >
        <Facebook size={18} />
      </a>
      <a 
        href="https://twitter.com" 
        className="w-9 h-9 rounded-full bg-gray-100 hover:bg-gray-200 flex items-center justify-center transition-colors text-darkblue-800"
        aria-label="Twitter"
        target="_blank"
        rel="noopener noreferrer"
      >
        <Twitter size={18} />
      </a>
      <a 
        href="https://instagram.com" 
        className="w-9 h-9 rounded-full bg-gray-100 hover:bg-gray-200 flex items-center justify-center transition-colors text-darkblue-800"
        aria-label="Instagram"
        target="_blank"
        rel="noopener noreferrer"
      >
        <Instagram size={18} />
      </a>
      <a 
        href="https://linkedin.com" 
        className="w-9 h-9 rounded-full bg-gray-100 hover:bg-gray-200 flex items-center justify-center transition-colors text-darkblue-800"
        aria-label="LinkedIn"
        target="_blank"
        rel="noopener noreferrer"
      >
        <Linkedin size={18} />
      </a>
    </div>
  );
};

export default SocialIcons;
