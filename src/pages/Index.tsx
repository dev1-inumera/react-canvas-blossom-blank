
import React, { useEffect } from "react";
import Navigation from "@/components/Navigation";
import Hero from "@/components/Hero";
import Services from "@/components/Services";
import Testimonials from "@/components/Testimonials";
import Packages from "@/components/Packages";
import CallToAction from "@/components/CallToAction";
import Footer from "@/components/Footer";
import IMailXBanner from "@/components/IMailXBanner";
import { useLocation } from "react-router-dom";

const Index = () => {
  const location = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location.pathname]);

  return (
    <div className="min-h-screen flex flex-col">
      <Navigation />
      <main className="flex-grow">
        <Hero />
        <Services />
        <IMailXBanner />
        <Packages />
        <div
          className="relative bg-gray-100 py-8"
          style={{
            backgroundImage:
              "url('https://images.unsplash.com/photo-1488972685288-c3fd157d7c7a?auto=format&fit=crop&w=1500&h=800&q=80')",
            backgroundSize: "cover",
            backgroundPosition: "center",
            backgroundAttachment: "fixed",
          }}
        >
          {/* Overlay with blur */}
          <div className="absolute inset-0 bg-black bg-opacity-60 backdrop-blur-sm"></div>
          <div className="relative z-10">
            <Testimonials />
            <CallToAction />
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Index;
