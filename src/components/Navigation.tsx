
import React, { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import { cn } from "@/lib/utils";
import { useIsMobile } from "@/hooks/use-mobile";
import Logo from "./navigation/Logo";
import DesktopNavigation from "./navigation/DesktopNavigation";
import DesktopCTA from "./navigation/DesktopCTA";
import MobileMenuButton from "./navigation/MobileMenuButton";
import MobileMenu from "./navigation/MobileMenu";

const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();
  const isMobile = useIsMobile();

  const toggleMenu = () => setIsOpen(!isOpen);
  const closeMenu = () => setIsOpen(false);

  useEffect(() => {
    // Set initial scroll state when component mounts
    if (window.scrollY > 10) {
      setScrolled(true);
    }

    const handleScroll = () => {
      if (window.scrollY > 10) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navItems = [
    { name: "Nos expertises", path: "/expertise" },
    { name: "Mon secteur", path: "/vous-etes" },
    { name: "Nos offres", path: "/pricing" },
    { name: "Blog", path: "/blog" },
    { name: "i-numera et vous", path: "/registration" },
  ];

  // Check if we're on a page with dark header
  const isDarkHeader = false;
  const isContactPage = location.pathname === "/contact";

  return (
    <header
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-300 px-4 md:px-8 lg:px-12",
        "bg-white shadow-md py-3"
      )}
    >
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        {/* Logo */}
        <Logo onClick={closeMenu} />

        {/* Desktop Navigation */}
        <DesktopNavigation
          navItems={navItems}
          scrolled={scrolled}
          isDarkHeader={isDarkHeader}
          isContactPage={isContactPage}
        />

        {/* CTA Buttons */}
        <DesktopCTA
          scrolled={scrolled}
          isDarkHeader={isDarkHeader}
          isContactPage={isContactPage}
        />

        {/* Mobile Menu Button */}
        <MobileMenuButton isOpen={isOpen} toggleMenu={toggleMenu} />

        {/* Mobile Menu */}
        <MobileMenu
          isOpen={isOpen}
          navItems={navItems}
          location={location}
          closeMenu={closeMenu}
        />
      </div>
    </header>
  );
};

export default Navigation;
