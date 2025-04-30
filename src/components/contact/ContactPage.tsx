
import React from 'react';
import { useToast } from '@/hooks/use-toast';
import ContactHeader from './ContactHeader';
import ContactLayout from './ContactLayout';
import { ContactFormValues } from './ContactForm';

const ContactPage = () => {
  const { toast } = useToast();
  
  const onContactSubmit = (data: ContactFormValues) => {
    // In a real application, you would send the form data to a backend
    console.log('Contact form submitted:', data);
    
    toast({
      title: "Message envoyé !",
      description: "Nous vous répondrons dans les plus brefs délais.",
    });
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <ContactHeader />
      <ContactLayout 
        onContactSubmit={onContactSubmit}
      />
    </div>
  );
};

export default ContactPage;
