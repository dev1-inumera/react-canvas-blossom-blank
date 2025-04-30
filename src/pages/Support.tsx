
import React from 'react';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import SupportPage from '@/components/support/SupportPage';

const Support = () => {
  return (
    <div className="min-h-screen bg-gray-50 flex flex-col">
      <Navigation />
      <SupportPage />
      <Footer />
    </div>
  );
};

export default Support;
