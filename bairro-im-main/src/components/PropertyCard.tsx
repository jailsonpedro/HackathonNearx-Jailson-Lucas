
import React from 'react';
import { Link } from 'react-router-dom';
import { Card, CardContent, CardFooter } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Building2, MapPin, BedDouble, Bath } from "lucide-react";
import { Property } from '@/data/properties';
import { formatCurrency } from '@/lib/utils';

interface PropertyCardProps {
  property: Property;
}

const PropertyCard: React.FC<PropertyCardProps> = ({ property }) => {
  const { id, title, price, location, bedrooms, bathrooms, area, images, featured, type } = property;

  return (
    <Link to={`/property/${id}`}>
      <Card className="overflow-hidden h-full transition-all hover:shadow-lg">
        <div className="relative">
          <img
            src={images[0]} 
            alt={title}
            className="w-full h-48 object-cover"
          />
          {featured && (
            <Badge className="absolute top-2 right-2 bg-realestate-highlight text-realestate-secondary font-medium">
              Destaque
            </Badge>
          )}
          <Badge 
            className={`absolute top-2 left-2 ${type === 'rent' ? 'bg-realestate-primary' : 'bg-realestate-accent'}`}
          >
            {type === 'rent' ? 'Aluguel' : 'Venda'}
          </Badge>
        </div>

        <CardContent className="pt-4">
          <h3 className="text-lg font-semibold line-clamp-1">{title}</h3>
          <div className="flex items-center mt-1 text-sm text-gray-500">
            <MapPin size={14} className="mr-1" />
            <span className="line-clamp-1">{location}</span>
          </div>
          <p className="mt-2 text-xl font-bold text-realestate-primary">
            {type === 'rent' ? `${formatCurrency(price)}/mês` : formatCurrency(price)}
          </p>
        </CardContent>

        <CardFooter className="border-t pt-3 flex justify-between text-sm text-gray-500">
          <div className="flex items-center">
            <Building2 size={14} className="mr-1" />
            <span>{area} m²</span>
          </div>
          <div className="flex items-center">
            <BedDouble size={14} className="mr-1" />
            <span>{bedrooms} {bedrooms === 1 ? 'quarto' : 'quartos'}</span>
          </div>
          <div className="flex items-center">
            <Bath size={14} className="mr-1" />
            <span>{bathrooms} {bathrooms === 1 ? 'banheiro' : 'banheiros'}</span>
          </div>
        </CardFooter>
      </Card>
    </Link>
  );
};

export default PropertyCard;
