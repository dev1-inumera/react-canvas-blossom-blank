
export interface PackageData {
  type: string;
  title: string;
  price: string;
  setupFee: string;
  image: string;
  features: string[];
  isPrimary: boolean;
  hasPremium: boolean;
  premiumFeatures: string[];
}
