
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
export const partnerLogos: PartnerLogo[] = [
  {
    name: "Google",
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/2/2f/Google_2015_logo.svg/2560px-Google_2015_logo.svg.png"
  },
  {
    name: "Hubspot",
    image: "https://tbkconsult.com/wp-content/uploads/2016/11/HubSpot-Logo-PNG.png"
  },
  {
    name: "Zapier",
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/f/fd/Zapier_logo.svg/2560px-Zapier_logo.svg.png"
  },
  {
    name: "Slack",
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/b/b9/Slack_Technologies_Logo.svg/2560px-Slack_Technologies_Logo.svg.png"
  },
  {
    name: "Salesforce",
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/f/f9/Salesforce.com_logo.svg/2560px-Salesforce.com_logo.svg.png"
  },
  {
    name: "Notion",
    image: "https://upload.wikimedia.org/wikipedia/commons/4/45/Notion_app_logo.png"
  }
];
