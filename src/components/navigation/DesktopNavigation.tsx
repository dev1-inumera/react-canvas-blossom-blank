
import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { cn } from '@/lib/utils';

interface NavItem {
  name: string;
  path: string;
}

interface DesktopNavigationProps {
  navItems: NavItem[];
  scrolled: boolean;
  isDarkHeader: boolean;
  isContactPage: boolean;
}

const DesktopNavigation: React.FC<DesktopNavigationProps> = ({ 
  navItems, 
  scrolled, 
  isDarkHeader, 
  isContactPage 
}) => {
  const location = useLocation();

  return (
    <nav className="hidden lg:flex items-center space-x-8">
      {navItems.map((item) => (
        <Link
          key={item.name}
          to={item.path}
          className={cn(
            'text-sm font-medium transition-colors hover:text-darkblue-600',
            location.pathname === item.path 
              ? 'text-darkblue-800' 
              : 'text-darkblue-900/80'
          )}
        >
          {item.name}
        </Link>
      ))}
    </nav>
  );
};

export default DesktopNavigation;
