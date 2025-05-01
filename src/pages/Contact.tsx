
import React, { useEffect } from 'react';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import CallToAction from '@/components/CallToAction';
import ContactPage from '@/components/contact/ContactPage';

const Contact = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      <Navigation />
      <ContactPage />
      <CallToAction variant="dark" />
      <Footer />
    </>
  );
};

export default Contact;
