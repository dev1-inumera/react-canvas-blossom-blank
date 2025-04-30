
import React from 'react';
import { Link } from 'react-router-dom';
import { cn } from '@/lib/utils';
import { ExternalLink, ChevronDown, Dot } from 'lucide-react';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

interface DesktopCTAProps {
  scrolled: boolean;
  isDarkHeader: boolean;
  isContactPage: boolean;
}

const DesktopCTA: React.FC<DesktopCTAProps> = ({ scrolled, isDarkHeader, isContactPage }) => (
  <div className="hidden lg:flex items-center space-x-4">
    <DropdownMenu>
      <DropdownMenuTrigger className={cn(
        "px-5 py-2 text-sm font-medium rounded-full transition-all hover:shadow-lg flex items-center gap-1",
        "bg-red-600 hover:bg-red-700 text-white"
      )}>
        Contactez-nous <ChevronDown size={14} />
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end" className="w-56">
        <DropdownMenuItem asChild>
          <Link to="/contact" className="flex items-center cursor-pointer">
            <Dot /> Contactez-nous
          </Link>
        </DropdownMenuItem>
        <DropdownMenuItem asChild>
          <Link to="/devis" className="flex items-center cursor-pointer">
            <Dot /> Demander un devis
          </Link>
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>

    <a
      href="https://i-numa.i-numera.com/"
      target="_blank"
      rel="noopener noreferrer"
      className={cn(
        "px-5 py-2 text-sm font-medium rounded-full transition-all hover:shadow-lg flex items-center",
        "bg-darkblue-800 hover:bg-darkblue-900 text-white"
      )}
    >
      My i-numa <ExternalLink size={14} className="ml-1" />
    </a>
  </div>
);

export default DesktopCTA;
