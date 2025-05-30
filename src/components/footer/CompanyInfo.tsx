
import React from 'react';
import SocialIcons from './SocialIcons';

const CompanyInfo: React.FC = () => {
  return (
    <div className="flex flex-col items-center md:items-start text-center md:text-left">
      <div className="flex items-center justify-center md:justify-start space-x-2 mb-3 md:mb-4">
        <img 
          src="/lovable-uploads/9b43df0e-0943-4c2f-9433-cce569989739.png" 
          alt="i-numera logo" 
          className="h-16 md:h-20 w-auto"
        />
      </div>
      <p className="text-darkblue-700 text-sm md:text-base max-w-xs md:max-w-sm">
        Des solutions digitales clés en main pour booster votre activité depuis plus de 5 ans.
      </p>
    </div>
  );
};

export default CompanyInfo;
