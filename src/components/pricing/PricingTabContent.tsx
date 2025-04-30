
import React from 'react';
import { Link } from 'react-router-dom';
import { useInView } from 'react-intersection-observer';
import { ArrowRight, Check } from 'lucide-react';
import { cn } from '@/lib/utils';

export interface PricingPlan {
  name: string;
  description: string;
  price: string;
  features: string[];
  cta: string;
  popular?: boolean;
  icon: React.ReactNode;
}

interface PricingTabContentProps {
  plans: PricingPlan[];
}

const PricingTabContent: React.FC<PricingTabContentProps> = ({ plans }) => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <div 
      ref={ref} 
      className="grid gap-8 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3"
    >
      {plans.map((plan, index) => (
        <div
          key={index}
          className={cn(
            "relative flex flex-col rounded-2xl bg-white border shadow-sm transition-all duration-200 hover-lift overflow-hidden",
            plan.popular ? "border-red-200 shadow-md" : "border-gray-200",
            inView ? "opacity-100" : "opacity-0 translate-y-8"
          )}
          style={{ 
            transitionDelay: `${index * 150}ms`, 
            transitionProperty: 'all', 
            transitionDuration: '700ms', 
            transitionTimingFunction: 'cubic-bezier(0.4, 0, 0.2, 1)' 
          }}
        >
          {plan.popular && (
            <div className="absolute top-0 right-0">
              <div className="bg-red-600 text-white text-xs font-medium px-3 py-1 rounded-bl-lg">
                Populaire
              </div>
            </div>
          )}
          
          <div className="p-6">
            <div className="flex items-center mb-4">
              <div className={cn(
                "w-10 h-10 rounded-lg flex items-center justify-center mr-3",
                plan.popular ? "bg-red-100 text-red-600" : "bg-darkblue-100 text-darkblue-800"
              )}>
                {plan.icon}
              </div>
              <h3 className="text-xl font-bold text-darkblue-900">{plan.name}</h3>
            </div>
            <p className="text-darkblue-700 mb-4 flex-grow">{plan.description}</p>

            <ul className="space-y-3 mb-6">
              {plan.features.map((feature, i) => (
                <li key={i} className="flex items-start">
                  <div className={cn(
                    "w-5 h-5 rounded-full flex items-center justify-center mr-3 mt-0.5",
                    plan.popular ? "bg-red-100 text-red-600" : "bg-darkblue-100 text-darkblue-800"
                  )}>
                    <Check size={12} />
                  </div>
                  <span className="text-darkblue-700">{feature}</span>
                </li>
              ))}
            </ul>
          </div>
          
          <div className={cn(
            "px-6 py-4 mt-auto",
            plan.popular ? "bg-red-50" : "bg-gray-50"
          )}>
            <Link
              to="/contact"
              className={cn(
                "w-full inline-flex items-center justify-center px-5 py-3 rounded-full font-medium transition-all group",
                plan.popular 
                  ? "bg-red-600 hover:bg-red-700 text-white" 
                  : "bg-darkblue-800 hover:bg-darkblue-900 text-white"
              )}
            >
              {plan.cta}
              <ArrowRight size={16} className="ml-2 transition-transform group-hover:translate-x-1" />
            </Link>
          </div>
        </div>
      ))}
    </div>
  );
};

export default PricingTabContent;
