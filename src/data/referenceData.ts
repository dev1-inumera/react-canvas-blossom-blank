
export interface Reference {
  id: string;
  name: string;
  sector: string;
  description: string;
  url: string;
  categoryId: string;
}

export interface ReferenceCategory {
  id: string;
  name: string;
}

export interface PartnerLogo {
  name: string;
  image: string;
}

export const referenceCategories: ReferenceCategory[] = [];
export const referenceData: Reference[] = [];
export const partnerLogos: PartnerLogo[] = [];
