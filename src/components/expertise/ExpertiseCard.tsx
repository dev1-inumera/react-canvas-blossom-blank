
import React from 'react';
import { Link } from 'react-router-dom';
import { useInView } from 'react-intersection-observer';
import { ArrowRight } from 'lucide-react';
import { cn } from '@/lib/utils';

export interface ExpertiseCardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
  features: string[];
  price: string;
  delay: number;
}

const ExpertiseCard = ({ icon, title, description, features, delay }: ExpertiseCardProps) => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  // Random background image from Unsplash
  const backgroundImages = [
    "https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d",
    "https://images.unsplash.com/photo-1498050108023-c5249f4df085",
    "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158",
    "https://images.unsplash.com/photo-1487058792275-0ad4aaf24ca7",
    "https://images.unsplash.com/photo-1461749280684-dccba630e2f6",
    "https://images.unsplash.com/photo-1531297484001-80022131f5a1"
  ];
  
  const randomBackgroundImage = backgroundImages[Math.floor(Math.random() * backgroundImages.length)];

  return (
    <div 
      ref={ref}
      className={cn(
        "flex flex-col h-full rounded-2xl shadow-sm border border-gray-100 overflow-hidden hover-lift transition-all relative",
        inView ? "opacity-100" : "opacity-0 translate-y-8"
      )}
      style={{ 
        transitionDelay: `${delay}ms`,
        transitionProperty: 'all', 
        transitionDuration: '700ms', 
        transitionTimingFunction: 'cubic-bezier(0.4, 0, 0.2, 1)' 
      }}
    >
      {/* Background image with gradient overlay */}
      <div 
        className="absolute inset-0 z-0"
        style={{
          backgroundImage: `linear-gradient(to bottom, rgba(255,255,255,0.95), rgba(255,255,255,0.8)), url('${randomBackgroundImage}')`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      />
      
      <div className="p-6 pb-0 relative z-10">
        <div className="rounded-xl bg-red-50 p-3 text-red-600 w-12 h-12 flex items-center justify-center mb-6">
          {icon}
        </div>
        <h3 className="text-xl font-semibold text-darkblue-900 mb-3">{title}</h3>
        <p className="text-darkblue-700/80 mb-6">{description}</p>
      </div>
      <div className="px-6 flex-grow relative z-10">
        <ul className="space-y-2 mb-6">
          {features.map((feature, index) => (
            <li key={index} className="flex items-center text-darkblue-700">
              <div className="w-5 h-5 rounded-full bg-red-100 flex items-center justify-center mr-3 flex-shrink-0">
                <div className="w-2 h-2 rounded-full bg-red-600"></div>
              </div>
              {feature}
            </li>
          ))}
        </ul>
      </div>
      <div className="p-6 bg-gray-50 mt-auto relative z-10">
        <Link
          to="/contact"
          className="w-full inline-flex items-center justify-center px-6 py-3 rounded-full text-white bg-red-600 hover:bg-red-700 transition-all font-medium hover:shadow-lg group"
        >
          Je me lance !
          <ArrowRight size={18} className="ml-2 transition-transform group-hover:translate-x-1" />
        </Link>
      </div>
    </div>
  );
};

export default ExpertiseCard;
