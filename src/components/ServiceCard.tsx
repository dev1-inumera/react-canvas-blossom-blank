import React from 'react';
import { Link } from 'react-router-dom';
import { useInView } from 'react-intersection-observer';
import { ArrowRight } from 'lucide-react';
import { cn } from '@/lib/utils';

interface ServiceCardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
  delay: number;
  className?: string;
  backgroundImage?: string;
}

const ServiceCard = ({ icon, title, description, delay, className, backgroundImage }: ServiceCardProps) => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <div
      ref={ref}
      className={cn(
        "relative rounded-2xl p-6 hover-lift transition-all border border-gray-100 shadow-sm overflow-hidden",
        className,
        inView ? "opacity-100" : "opacity-0 translate-y-8"
      )}
      style={{
        transitionDelay: `${delay}ms`,
        transitionProperty: 'all',
        transitionDuration: '500ms',
        transitionTimingFunction: 'cubic-bezier(0.4, 0, 0.2, 1)'
      }}
    >
      {/* Background image with gradient overlay - adjusted opacity and added black overlay */}
      <div
        className="-opacity-20 absolute inset-0 z-0"
        style={{
          backgroundImage: `linear-gradient(to bottom, rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url('${backgroundImage}')`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      />

      <div className="flex  flex-col h-full relative z-10">
        <div className="mb-6">
          <div className="rounded-xl bg-[#D24043]/20 p-3 text-white w-12 h-12 flex items-center justify-center">
            {icon}
          </div>
        </div>
        <h3 className="text-xl font-semibold text-white mb-3">{title}</h3>
        <p className="text-gray-200 mb-5 flex-grow">{description}</p>
        <Link
          to="/expertise"
          className="inline-flex items-center text-sm font-medium text-red-600 hover:text-red-700 hover-slide-right group"
        >
          En savoir plus
          <ArrowRight size={16} className="ml-1 transition-transform group-hover:translate-x-1" />
        </Link>
      </div>
    </div>
  );
};

export default ServiceCard;
