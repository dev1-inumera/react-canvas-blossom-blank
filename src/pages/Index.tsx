
import React, { useEffect } from "react";
import Navigation from "@/components/Navigation";
import Hero from "@/components/Hero";
import Services from "@/components/Services";
import Testimonials from "@/components/Testimonials";
import Packages from "@/components/Packages";
import CallToAction from "@/components/CallToAction";
import Footer from "@/components/Footer";
import IMailXBanner from "@/components/IMailXBanner";
import BusinessBanner from "@/components/BusinessBanner";
import { useLocation } from "react-router-dom";

const Index = () => {
  const location = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location.pathname]);

  return (
    <div className="min-h-screen flex flex-col">
      <div className="navigationhero relative bg-cover" style={{backgroundImage: "url('/bg1.png')"}}>
      <Navigation />
      <Hero />
      </div>
      <main className="flex-grow">
        
        {/* IMailXBanner component - renamed to IProspectBanner */}
        <div className="bg-gray-50">
          <IMailXBanner />
        </div>
        
        {/* BusinessBanner */}
        <div className="bg-gray-100">
          <BusinessBanner />
        </div>
        
        {/* Section des offres améliorée */}
        <Packages />
        
        {/* Section avec arrière-plan */}
        <div
          className="relative bg-gray-100 py-8"
          style={{
            backgroundImage:
              "url('https://img.freepik.com/vecteurs-libre/fond-bleu-classique-creatif_23-2148430302.jpg?t=st=1746783611~exp=1746787211~hmac=f260a2a2a1252990f70737c17f13a1dc9f38b45eda494ee787e674d58b789956&w=826')",
            backgroundSize: "cover",
            backgroundPosition: "center",
            backgroundAttachment: "fixed",
          }}
        >
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
