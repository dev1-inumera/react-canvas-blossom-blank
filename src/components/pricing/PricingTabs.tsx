
import React, { useState } from 'react';
import PricingTabButtons from './PricingTabButtons';
import PricingTabContent from './PricingTabContent';
import { pricingPlansData } from '@/data/pricingPlansData';

const PricingTabs = () => {
  const [activeTab, setActiveTab] = useState("sites");

  return (
    <div className="mb-12">
      <PricingTabButtons activeTab={activeTab} setActiveTab={setActiveTab} />

      <div className="tab-content">
        {activeTab === "sites" && <PricingTabContent plans={pricingPlansData.sites} />}
        {activeTab === "seo" && <PricingTabContent plans={pricingPlansData.seo} />}
        {activeTab === "social" && <PricingTabContent plans={pricingPlansData.social} />}
      </div>
    </div>
  );
};

export default PricingTabs;
