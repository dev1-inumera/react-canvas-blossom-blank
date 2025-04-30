
import React from 'react';
import { useInView } from 'react-intersection-observer';
import { cn } from '@/lib/utils';

interface StepProps {
  number: number;
  title: string;
  description: string;
  delay: number;
}

const Step: React.FC<StepProps> = ({ number, title, description, delay }) => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <div 
      ref={ref}
      className={cn(
        "relative pl-16",
        inView ? "opacity-100" : "opacity-0 translate-y-8"
      )}
      style={{ 
        transitionDelay: `${delay}ms`, 
        transitionProperty: 'all', 
        transitionDuration: '700ms', 
        transitionTimingFunction: 'cubic-bezier(0.4, 0, 0.2, 1)' 
      }}
    >
      <div className="absolute left-0 top-0 w-12 h-12 rounded-full bg-darkblue-100 flex items-center justify-center text-xl font-bold text-darkblue-900">
        {number}
      </div>
      <h3 className="text-xl font-bold text-darkblue-900 mb-2">{title}</h3>
      <p className="text-darkblue-700">{description}</p>
    </div>
  );
};

const PricingSteps = () => {
  return (
    <div className="max-w-3xl mx-auto mt-20">
      <div className="text-center mb-10">
        <h2 className="text-2xl md:text-3xl font-bold text-darkblue-900 mb-4">
          Notre approche en 3 étapes
        </h2>
        <p className="text-lg text-darkblue-700/80">
          Nous vous accompagnons tout au long de la mise en place de votre projet, et même après !
        </p>
      </div>

      <div className="space-y-10">
        <Step 
          number={1} 
          title="Rendez-vous téléphonique" 
          description="Un premier échange pour comprendre vos besoins et vous proposer les solutions les plus adaptées à votre activité."
          delay={100}
        />
        
        <Step 
          number={2} 
          title="Entretien avec votre chef de projet" 
          description="Définition précise de votre projet avec un expert dédié qui vous accompagnera tout au long de la réalisation."
          delay={200}
        />
        
        <Step 
          number={3} 
          title="Mise en ligne de vos solutions" 
          description="Lancement de vos outils digitaux et formation à leur utilisation. Un support continu est assuré après la mise en ligne."
          delay={300}
        />
      </div>
    </div>
  );
};

export default PricingSteps;
