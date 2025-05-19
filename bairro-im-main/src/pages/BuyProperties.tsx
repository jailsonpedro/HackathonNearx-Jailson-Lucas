
import React, { useState } from 'react';
import { useToast } from "@/hooks/use-toast";
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import PropertyCard from '@/components/PropertyCard';
import PropertySearch from '@/components/PropertySearch';
import { properties, filterProperties, Property } from '@/data/properties';

const BuyProperties = () => {
  const { toast } = useToast();
  const saleProperties = properties.filter(property => property.type === 'sale');
  const [filteredProperties, setFilteredProperties] = useState<Property[]>(saleProperties);

  const handleSearch = (filters: any) => {
    // Override type to be 'sale' only
    const results = filterProperties(properties, {
      ...filters,
      type: 'sale'
    });
    
    setFilteredProperties(results);
    
    toast({
      title: `${results.length} imóveis encontrados`,
      description: "Os resultados foram atualizados com base na sua busca.",
    });
  };

  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      
      <section className="bg-realestate-primary text-white py-12">
        <div className="container mx-auto px-4">
          <h1 className="text-3xl font-bold mb-4">Imóveis para Comprar</h1>
          <p className="text-lg mb-8">Encontre o imóvel ideal para comprar no Bairro Alegre</p>
          <PropertySearch onSearch={handleSearch} />
        </div>
      </section>
      
      <section className="py-12">
        <div className="container mx-auto px-4">
          <div className="flex justify-between items-center mb-6">
            <h2 className="text-2xl font-bold">Imóveis à Venda</h2>
            <p className="text-gray-500">{filteredProperties.length} imóveis</p>
          </div>
          
          {filteredProperties.length > 0 ? (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {filteredProperties.map((property) => (
                <PropertyCard key={property.id} property={property} />
              ))}
            </div>
          ) : (
            <div className="text-center py-12">
              <h3 className="text-xl font-medium text-gray-500">Nenhum imóvel à venda encontrado para os critérios selecionados</h3>
              <p className="mt-2 text-gray-400">Tente ajustar os filtros de busca</p>
            </div>
          )}
        </div>
      </section>
      
      <Footer />
    </div>
  );
};

export default BuyProperties;
