
import React, { ReactNode } from 'react';

interface SupportChannelCardProps {
  icon: ReactNode;
  title: string;
  description: string;
  action: ReactNode;
}

const SupportChannelCard: React.FC<SupportChannelCardProps> = ({
  icon,
  title,
  description,
  action
}) => {
  return (
    <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100 hover:shadow-md transition-shadow">
      <div className="flex items-start gap-4 mb-4">
        <div className="bg-gray-50 rounded-full p-3 flex-shrink-0">
          {icon}
        </div>
        <div>
          <h3 className="text-lg font-bold text-darkblue-900 mb-1">{title}</h3>
          <p className="text-darkblue-700 text-sm">{description}</p>
        </div>
      </div>
      <div className="mt-4">
        {action}
      </div>
    </div>
  );
};

export default SupportChannelCard;
