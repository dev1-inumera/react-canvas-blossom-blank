
import React from 'react';

const ContactHeader: React.FC = () => {
  return (
    <div className="bg-gradient-to-b from-darkblue-800 to-darkblue-900 text-white pt-32 pb-20">
      <div className="container px-4 md:px-6">
        <h1 className="text-4xl md:text-5xl font-bold mb-4">Contactez-nous</h1>
        <p className="text-xl text-white/80 max-w-2xl">
          Vous avez une question, un projet ou simplement envie de nous dire bonjour ?
          N'hésitez pas à nous contacter.
        </p>
      </div>
    </div>
  );
};

export default ContactHeader;
