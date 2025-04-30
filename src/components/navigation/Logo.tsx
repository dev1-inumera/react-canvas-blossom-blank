
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
      src="/lovable-uploads/b24ee520-7478-4b85-b844-07dbec409cf5.png" 
      alt="i-numera logo" 
      className="h-12 w-auto" 
    />
  </Link>
);

export default Logo;
