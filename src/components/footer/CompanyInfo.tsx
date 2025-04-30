
import React from 'react';
import SocialIcons from './SocialIcons';

const CompanyInfo: React.FC = () => {
  return (
    <div>
      <div className="flex items-center space-x-2 mb-6">
        <img 
          src="/lovable-uploads/9b43df0e-0943-4c2f-9433-cce569989739.png" 
          alt="i-numera logo" 
          className="h-20 w-auto"
        />
      </div>
      <p className="text-darkblue-700 mb-6">
        Des solutions digitales clés en main pour booster votre activité depuis plus de 5 ans.
      </p>
      <SocialIcons />
    </div>
  );
};

export default CompanyInfo;
