
import React from 'react';
import { Check } from 'lucide-react';

interface PackageFeatureItemProps {
  children: React.ReactNode;
  isPrimary?: boolean;
}

const PackageFeatureItem = ({ children, isPrimary = false }: PackageFeatureItemProps) => (
  <div className="flex items-start gap-2 mb-3">
    <div className={`rounded-full p-0.5 mt-0.5 ${isPrimary ? "bg-white/20" : "bg-darkblue-100"}`}>
      <Check size={12} className={isPrimary ? "text-white" : "text-darkblue-700"} />
    </div>
    <span className={`text-sm ${isPrimary ? "text-white/90" : "text-darkblue-800"}`}>{children}</span>
  </div>
);

export default PackageFeatureItem;
