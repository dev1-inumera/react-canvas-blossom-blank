
import React from 'react';
import { HelpCircle } from 'lucide-react';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Faq } from '@/data/faqData';

interface FaqItemProps {
  faq: Faq;
}

const FaqItem: React.FC<FaqItemProps> = ({ faq }) => {
  return (
    <Accordion type="single" collapsible>
      <AccordionItem value={`item-${faq.question}`} className="border-none">
        <AccordionTrigger className="py-4 px-6 hover:no-underline hover:bg-gray-50">
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
  );
};

export default FaqItem;
