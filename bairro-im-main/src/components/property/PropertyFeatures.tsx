
import React from 'react';
import { BedDouble, Bath, Square, Building2, Clock } from 'lucide-react';

interface PropertyFeaturesProps {
  bedrooms: number;
  bathrooms: number;
  area: number;
}

const PropertyFeatures = ({ bedrooms, bathrooms, area }: PropertyFeaturesProps) => {
  return (
    <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 mb-8">
      <div className="flex flex-col items-center justify-center py-4 px-2 border rounded-lg bg-realestate-muted">
        <BedDouble size={24} className="mb-2 text-realestate-primary" />
        <span className="text-lg font-medium">{bedrooms}</span>
        <span className="text-sm text-gray-500">{bedrooms === 1 ? 'Quarto' : 'Quartos'}</span>
      </div>
      <div className="flex flex-col items-center justify-center py-4 px-2 border rounded-lg bg-realestate-muted">
        <Bath size={24} className="mb-2 text-realestate-primary" />
        <span className="text-lg font-medium">{bathrooms}</span>
        <span className="text-sm text-gray-500">{bathrooms === 1 ? 'Banheiro' : 'Banheiros'}</span>
      </div>
      <div className="flex flex-col items-center justify-center py-4 px-2 border rounded-lg bg-realestate-muted">
        <Building2 size={24} className="mb-2 text-realestate-primary" />
        <span className="text-lg font-medium">{area}</span>
        <span className="text-sm text-gray-500">m²</span>
      </div>
      <div className="flex flex-col items-center justify-center py-4 px-2 border rounded-lg bg-realestate-muted">
        <Clock size={24} className="mb-2 text-realestate-primary" />
        <span className="text-lg font-medium">Novo</span>
        <span className="text-sm text-gray-500">Anúncio</span>
      </div>
    </div>
  );
};

export default PropertyFeatures;
