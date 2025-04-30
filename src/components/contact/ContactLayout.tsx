
import React from 'react';
import BusinessInfo from './BusinessInfo';
import ContactForm, { ContactFormValues } from './ContactForm';
import FaqSidebar from './FaqSidebar';
import ContactInfo from './ContactInfo';

interface ContactLayoutProps {
  onContactSubmit: (data: ContactFormValues) => void;
}

const ContactLayout: React.FC<ContactLayoutProps> = ({ 
  onContactSubmit
}) => {
  return (
    <div className="container px-4 md:px-6 py-12">
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Left Sidebar - Business Info */}
        <div>
          <BusinessInfo />
        </div>
        
        {/* Main Content - Contact Form */}
        <div className="lg:col-span-1">
          <ContactForm onSubmit={onContactSubmit} />
        </div>
        
        {/* Right Sidebar - FAQ and Contact Info */}
        <div className="space-y-8">
          <ContactInfo />
          <FaqSidebar />
        </div>
      </div>
    </div>
  );
};

export default ContactLayout;
