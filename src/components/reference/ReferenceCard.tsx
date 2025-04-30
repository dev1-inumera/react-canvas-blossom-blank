
import React from 'react';
import { motion } from 'framer-motion';
import { ExternalLink, Tag } from 'lucide-react';
import { Reference } from '@/data/referenceData';

interface ReferenceCardProps {
  reference: Reference;
  index: number;
}

const ReferenceCard = ({ reference, index }: ReferenceCardProps) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.3, delay: 0.1 * index }}
      className="bg-white rounded-xl p-6 shadow-sm border border-gray-100 hover:shadow-md transition-all hover-lift h-full flex flex-col"
    >
      <div className="mb-4 flex items-center">
        <Tag size={18} className="text-red-600 mr-2" />
        <span className="text-sm font-medium text-darkblue-700">{reference.sector}</span>
      </div>
      <h3 className="text-xl font-semibold text-darkblue-900 mb-2">Projet : {reference.name}</h3>
      <p className="text-darkblue-700/80 text-sm mb-6 flex-grow">{reference.description}</p>
      <a 
        href={reference.url} 
        target="_blank" 
        rel="noopener noreferrer"
        className="inline-flex items-center gap-2 text-white bg-red-600 hover:bg-red-700 transition-colors px-4 py-2 rounded-lg font-medium text-sm"
      >
        Voir le projet
        <ExternalLink size={16} />
      </a>
    </motion.div>
  );
};

export default ReferenceCard;
