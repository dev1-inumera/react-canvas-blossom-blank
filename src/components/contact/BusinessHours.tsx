
import React from 'react';

const BusinessHours: React.FC = () => {
  return (
    <div className="mt-12 bg-gray-100 p-6 rounded-xl">
      <h3 className="font-medium text-lg text-darkblue-900 mb-3">Horaires d'ouverture</h3>
      <ul className="space-y-2 text-gray-600">
        <li className="flex justify-between">
          <span>Lundi - Vendredi:</span>
          <span>9h00 - 18h00</span>
        </li>
        <li className="flex justify-between">
          <span>Samedi:</span>
          <span>Sur rendez-vous</span>
        </li>
        <li className="flex justify-between">
          <span>Dimanche:</span>
          <span>Fermé</span>
        </li>
      </ul>
    </div>
  );
};

export default BusinessHours;
