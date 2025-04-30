
import React from 'react';
import { motion } from 'framer-motion';
import { Service } from '@/data/professionData';
import { Card, CardContent } from '@/components/ui/card';

interface ServiceListProps {
  services: Service[];
}

const ServiceList = ({ services }: ServiceListProps) => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12 max-w-7xl mx-auto">
      {services.map((service, index) => (
        <motion.div
          key={index}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.3, delay: index * 0.05 }}
        >
          <Card className="h-full hover:shadow-lg transition-all duration-300 hover:-translate-y-1 border border-gray-100">
            <CardContent className="p-6">
              <h3 className="text-lg font-semibold text-darkblue-500 mb-3">{service.title}</h3>
              <p className="text-darkblue-400/90">{service.description}</p>
            </CardContent>
          </Card>
        </motion.div>
      ))}
    </div>
  );
};

export default ServiceList;
