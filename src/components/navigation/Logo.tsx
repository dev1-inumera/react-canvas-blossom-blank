
import React from 'react';
import { Link } from 'react-router-dom';

interface LogoProps {
  onClick?: () => void;
}

const Logo: React.FC<LogoProps> = ({ onClick }) => (
  <Link 
    to="/" 
    className="flex items-center space-x-2" 
    onClick={onClick}
  >
    <img 
      src="/src/assets/flower-logo.png" 
      alt="Logo fleur"
      className="h-12 w-auto" 
      loading="eager"
      fetchPriority="high"
      width="150"
      height="48"
    />
  </Link>
);

export default Logo;
