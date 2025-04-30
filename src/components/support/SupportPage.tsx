
import React from 'react';
import SupportHeader from './SupportHeader';
import SupportContent from './SupportContent';

const SupportPage: React.FC = () => {
  return (
    <div className="flex-grow">
      <SupportHeader />
      <SupportContent />
    </div>
  );
};

export default SupportPage;
