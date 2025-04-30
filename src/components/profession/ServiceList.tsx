
import React from 'react';
import { motion } from 'framer-motion';
import { Service } from '@/data/professionData';

interface ServiceListProps {
  services: Service[];
}

const ServiceList = ({ services }: ServiceListProps) => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-8">
      {services.map((service, index) => (
        <motion.div
          key={index}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.3, delay: index * 0.05 }}
          className="bg-white rounded-xl p-6 shadow-sm border border-gray-100 hover:shadow-md transition-shadow"
        >
          <h3 className="text-lg font-semibold text-darkblue-800 mb-2">{service.title}</h3>
          <p className="text-darkblue-700/80 text-sm">{service.description}</p>
        </motion.div>
      ))}
    </div>
  );
};

export default ServiceList;
