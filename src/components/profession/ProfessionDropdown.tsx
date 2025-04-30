
import React from 'react';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Profession } from '@/data/professionData';

interface ProfessionDropdownProps {
  professions: Profession[];
  activeProfession: string;
  onProfessionChange: (professionId: string) => void;
}

const ProfessionDropdown = ({
  professions,
  activeProfession,
  onProfessionChange
}: ProfessionDropdownProps) => {
  const selectedProfession = professions.find(p => p.id === activeProfession);

  return (
    <div className="w-full max-w-md mx-auto">
      <Select value={activeProfession} onValueChange={onProfessionChange}>
        <SelectTrigger className="w-full bg-white border-red-600 focus:ring-red-600 h-12 text-base">
          <SelectValue placeholder="Sélectionnez votre secteur d'activité">
            {selectedProfession?.label}
          </SelectValue>
        </SelectTrigger>
        <SelectContent className="max-h-80">
          {professions.map((profession) => (
            <SelectItem 
              key={profession.id} 
              value={profession.id}
              className="cursor-pointer py-3 text-base"
            >
              {profession.label}
            </SelectItem>
          ))}
        </SelectContent>
      </Select>
    </div>
  );
};

export default ProfessionDropdown;
