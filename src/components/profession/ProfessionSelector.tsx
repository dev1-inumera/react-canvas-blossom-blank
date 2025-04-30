
import React from 'react';
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Profession } from '@/data/professionData';

interface ProfessionSelectorProps {
  professions: Profession[];
  activeProfession: string;
  onProfessionChange: (professionId: string) => void;
}

const ProfessionSelector = ({ 
  professions, 
  activeProfession, 
  onProfessionChange 
}: ProfessionSelectorProps) => {
  return (
    <div className="w-full overflow-x-auto pb-4">
      <Tabs 
        value={activeProfession} 
        onValueChange={onProfessionChange}
        className="w-full"
      >
        <TabsList className="inline-flex w-auto space-x-1 overflow-x-auto p-1 bg-muted/20 rounded-full">
          {professions.map((profession) => (
            <TabsTrigger 
              key={profession.id} 
              value={profession.id}
              className="rounded-full px-4 py-2 data-[state=active]:bg-red-600 data-[state=active]:text-white transition-all"
            >
              {profession.label}
            </TabsTrigger>
          ))}
        </TabsList>
      </Tabs>
    </div>
  );
};

export default ProfessionSelector;
