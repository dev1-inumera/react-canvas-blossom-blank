
import React from 'react';
import { useInView } from 'react-intersection-observer';
import { cn } from '@/lib/utils';

interface KeyMetricProps {
  value: string;
  label: string;
  delay: number;
}

const KeyMetric = ({ value, label, delay }: KeyMetricProps) => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <div 
      ref={ref}
      className={cn(
        "flex flex-col items-center text-center p-6",
        inView ? "opacity-100" : "opacity-0 scale-95"
      )}
      style={{ 
        transitionDelay: `${delay}ms`, 
        transitionProperty: 'all', 
        transitionDuration: '700ms', 
        transitionTimingFunction: 'cubic-bezier(0.4, 0, 0.2, 1)' 
      }}
    >
      <span className="text-4xl md:text-5xl font-bold text-darkblue-900 mb-2">{value}</span>
      <span className="text-darkblue-700/80 text-sm md:text-base">{label}</span>
    </div>
  );
};

export default KeyMetric;
