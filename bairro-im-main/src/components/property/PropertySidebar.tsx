
import React from 'react';
import { MapPin, Share2, Heart } from 'lucide-react';
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { Card, CardContent } from "@/components/ui/card";
import { formatCurrency } from '@/lib/utils';
import { Property } from '@/data/properties';

interface PropertySidebarProps {
  property: Property;
  onContact: () => void;
}

const PropertySidebar = ({ property, onContact }: PropertySidebarProps) => {
  return (
    <Card className="sticky top-24">
      <CardContent className="p-6">
        <div className="mb-6">
          <p className="text-2xl font-bold text-realestate-primary mb-1">
            {property.type === 'rent' ? `${formatCurrency(property.price)}/mês` : formatCurrency(property.price)}
          </p>
          <p className="text-sm text-gray-500 flex items-center">
            <MapPin size={14} className="mr-1" />
            {property.location}
          </p>
        </div>

        <Separator className="my-4" />

        <div className="mb-6">
          <h3 className="font-semibold mb-2">Vendedor</h3>
          <p className="font-medium">{property.seller.name}</p>
          <p className="text-sm text-gray-500">{property.seller.phone}</p>
          <p className="text-sm text-gray-500">{property.seller.email}</p>
        </div>

        <div className="space-y-3">
          <Button onClick={onContact} className="w-full bg-realestate-primary hover:bg-realestate-primary/90">
            Entrar em contato
          </Button>
          <div className="flex gap-2">
            <Button variant="outline" className="flex-1">
              <Heart size={18} className="mr-2" />
              Favorito
            </Button>
            <Button variant="outline" className="flex-1">
              <Share2 size={18} className="mr-2" />
              Compartilhar
            </Button>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

export default PropertySidebar;
