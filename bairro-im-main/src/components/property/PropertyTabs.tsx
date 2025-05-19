
import React from 'react';
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { formatCurrency } from '@/lib/utils';
import { Property } from '@/data/properties';

interface PropertyTabsProps {
  property: Property;
}

const PropertyTabs = ({ property }: PropertyTabsProps) => {
  return (
    <Tabs defaultValue="description" className="mb-8">
      <TabsList>
        <TabsTrigger value="description">Descrição</TabsTrigger>
        <TabsTrigger value="details">Detalhes</TabsTrigger>
        <TabsTrigger value="location">Localização</TabsTrigger>
      </TabsList>
      <TabsContent value="description" className="pt-4">
        <p className="text-gray-700 leading-relaxed">{property.description}</p>
      </TabsContent>
      <TabsContent value="details" className="pt-4">
        <ul className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <li className="flex justify-between py-2 border-b">
            <span className="font-medium">Tipo de Imóvel</span>
            <span>{property.type === 'rent' ? 'Aluguel' : 'Venda'}</span>
          </li>
          <li className="flex justify-between py-2 border-b">
            <span className="font-medium">Preço</span>
            <span>{formatCurrency(property.price)}</span>
          </li>
          <li className="flex justify-between py-2 border-b">
            <span className="font-medium">Área</span>
            <span>{property.area} m²</span>
          </li>
          <li className="flex justify-between py-2 border-b">
            <span className="font-medium">Quartos</span>
            <span>{property.bedrooms}</span>
          </li>
          <li className="flex justify-between py-2 border-b">
            <span className="font-medium">Banheiros</span>
            <span>{property.bathrooms}</span>
          </li>
          <li className="flex justify-between py-2 border-b">
            <span className="font-medium">Localização</span>
            <span>{property.location}</span>
          </li>
          <li className="flex justify-between py-2 border-b">
            <span className="font-medium">Publicado em</span>
            <span>{new Date(property.createdAt).toLocaleDateString('pt-BR')}</span>
          </li>
          <li className="flex justify-between py-2 border-b">
            <span className="font-medium">ID do Imóvel</span>
            <span>BIM-{property.id}</span>
          </li>
        </ul>
      </TabsContent>
      <TabsContent value="location" className="pt-4">
        <div className="aspect-video bg-gray-200 rounded-lg flex items-center justify-center">
          <p className="text-gray-500">Mapa da localização estará disponível em breve.</p>
        </div>
      </TabsContent>
    </Tabs>
  );
};

export default PropertyTabs;
