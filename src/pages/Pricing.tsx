import React, { useEffect } from "react";
import { useLocation } from "react-router-dom";
import Navigation from "@/components/Navigation";
import Testimonials from "@/components/Testimonials";
import CallToAction from "@/components/CallToAction";
import Footer from "@/components/Footer";
import PricingHeader from "@/components/pricing/PricingHeader";
import PricingTabs from "@/components/pricing/PricingTabs";
import PricingSteps from "@/components/pricing/PricingSteps";

const Pricing = () => {
  const location = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location.pathname]);

  return (
    <div className="min-h-screen flex flex-col">
      <Navigation />
      <main className="flex-grow pt-24">
        <section className="py-16">
          <div className="container px-4 md:px-6">
            <PricingHeader />
            <PricingTabs />
            <PricingSteps />
          </div>
        </section>

        <Testimonials />
        <CallToAction variant="dark" />
      </main>
      <Footer />
    </div>
  );
};

export default Pricing;
