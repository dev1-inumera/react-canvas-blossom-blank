
import React from 'react';
import ContactHeader from './ContactHeader';
import ContactLayout from './ContactLayout';

const ContactPage = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      <ContactHeader />
      <ContactLayout />
    </div>
  );
};

export default ContactPage;
