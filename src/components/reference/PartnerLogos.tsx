
import React from 'react';
import { motion } from 'framer-motion';
import { partnerLogos } from '@/data/referenceData';

const PartnerLogos = () => {
  return (
    <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-8">
      {partnerLogos.map((logo, index) => (
        <motion.div
          key={index}
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.3, delay: 0.05 * index }}
          className="bg-white p-4 rounded-lg border border-gray-100 shadow-sm hover:shadow-md transition-all flex items-center justify-center"
          whileHover={{ y: -5, boxShadow: '0 10px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)' }}
        >
          <img 
            src={logo.image} 
            alt={`Projet ${index + 1}`} 
            className="max-h-16 max-w-full object-contain" 
          />
        </motion.div>
      ))}
    </div>
  );
};

export default PartnerLogos;
