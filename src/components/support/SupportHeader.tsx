
import React from 'react';
import { HelpCircle } from 'lucide-react';

const SupportHeader: React.FC = () => {
  return (
    <div className="bg-gradient-to-b from-darkblue-700 to-darkblue-900 text-white pt-32 pb-20">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-center text-center">
          <div className="inline-flex p-3 rounded-full bg-white/10 mb-6">
            <HelpCircle size={32} className="text-red-500" />
          </div>
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Support Client</h1>
          <p className="text-xl text-white/80 max-w-2xl mx-auto">
            Nous sommes là pour vous aider à résoudre tous vos problèmes et répondre à toutes vos questions.
          </p>
        </div>
      </div>
    </div>
  );
};

export default SupportHeader;
