
import React from 'react';
import { HelpCircle } from 'lucide-react';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

// We'll use just a few frequently asked questions for the preview
const popularFaqs = [
  {
    question: "Comment puis-je récupérer mon mot de passe ?",
    answer: "Vous pouvez réinitialiser votre mot de passe en cliquant sur 'Mot de passe oublié' sur la page de connexion. Vous recevrez un e-mail avec les instructions pour créer un nouveau mot de passe."
  },
  {
    question: "Comment contacter le service technique ?",
    answer: "Vous pouvez contacter notre service technique par téléphone au 01 23 45 67 89 (du lundi au vendredi, de 9h à 18h) ou par e-mail à support@i-numera.com. Nous répondons généralement sous 24 heures ouvrées."
  },
  {
    question: "Quels sont les délais de réalisation d'un site internet ?",
    answer: "Les délais de réalisation d'un site internet dépendent de la complexité du projet. En général, un site vitrine est réalisé en 2 à 4 semaines, tandis qu'un site e-commerce peut prendre de 4 à 8 semaines. Nous établissons un planning détaillé au début de chaque projet."
  }
];

const SupportFaqPreview: React.FC = () => {
  return (
    <div className="space-y-2">
      {popularFaqs.map((faq, index) => (
        <Accordion key={index} type="single" collapsible>
          <AccordionItem value={`faq-${index}`} className="border-none">
            <AccordionTrigger className="py-4 px-6 hover:no-underline hover:bg-gray-50 rounded-lg">
              <div className="flex items-center text-left">
                <HelpCircle size={20} className="text-red-600 mr-3 flex-shrink-0" />
                <span className="text-darkblue-900 font-medium">{faq.question}</span>
              </div>
            </AccordionTrigger>
            <AccordionContent className="px-6 pb-4 pt-0 text-darkblue-700">
              <div className="pl-9">
                {faq.answer}
              </div>
            </AccordionContent>
          </AccordionItem>
        </Accordion>
      ))}
    </div>
  );
};

export default SupportFaqPreview;
