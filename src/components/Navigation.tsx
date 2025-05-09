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
  const [isFixed, setIsFixed] = useState(false); // <- État pour savoir si on doit fixer la nav
  const location = useLocation();
  const isMobile = useIsMobile();

  const toggleMenu = () => setIsOpen(!isOpen);
  const closeMenu = () => setIsOpen(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;

      if (scrollTop > 10) {
        setIsFixed(true);
        setScrolled(true);
      } else {
        setIsFixed(false);
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

  const isContactPage = location.pathname === "/contact";

  return (
    <header
      className={cn(
        "transition-all duration-300 px-4 md:px-8 lg:px-12 z-50",
        isFixed
          ? "fixed top-0 left-0 right-0 bg-white shadow-md py-3"
          : "relative bg-transparent py-5"
      )}
    >
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        {/* Logo */}
        <Logo onClick={closeMenu} />

        {/* Desktop Navigation */}
        <DesktopNavigation
          navItems={navItems}
          scrolled={scrolled}
          isDarkHeader={false}
          isContactPage={isContactPage}
        />

        {/* CTA Buttons */}
        <DesktopCTA
          scrolled={scrolled}
          isDarkHeader={false}
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