
import React from 'react';
import FaqPage from '@/components/faq/FaqPage';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';

const Faq = () => {
  return (
    <div className="min-h-screen bg-gray-50 flex flex-col">
      <Navigation />
      <FaqPage />
      <Footer />
    </div>
  );
};

export default Faq;
