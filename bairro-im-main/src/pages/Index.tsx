
import React, { useState } from 'react';
import { useToast } from "@/hooks/use-toast";
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import PropertyCard from '@/components/PropertyCard';
import PropertySearch from '@/components/PropertySearch';
import { properties, filterProperties, Property } from '@/data/properties';

const Index = () => {
  const { toast } = useToast();
  const [filteredProperties, setFilteredProperties] = useState<Property[]>(properties);
  const featuredProperties = properties.filter(property => property.featured);

  const handleSearch = (filters: any) => {
    const results = filterProperties(properties, filters);
    setFilteredProperties(results);
    
    toast({
      title: `${results.length} imóveis encontrados`,
      description: "Os resultados foram atualizados com base na sua busca.",
    });
  };

  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      
      <section className="bg-realestate-secondary text-white relative py-16">
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-3xl mx-auto text-center mb-8">
            <h1 className="text-4xl font-bold mb-4">Encontre o imóvel perfeito no Bairro Alegre</h1>
            <p className="text-xl">Compre, venda ou alugue imóveis de forma simples e segura</p>
          </div>
          <div className="max-w-5xl mx-auto">
            <PropertySearch onSearch={handleSearch} />
          </div>
        </div>
      </section>
      
      <section className="py-12 bg-realestate-muted">
        <div className="container mx-auto px-4">
          <h2 className="text-2xl font-bold mb-6">Imóveis em Destaque</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {featuredProperties.map((property) => (
              <PropertyCard key={property.id} property={property} />
            ))}
          </div>
        </div>
      </section>
      
      <section className="py-12">
        <div className="container mx-auto px-4">
          <div className="flex justify-between items-center mb-6">
            <h2 className="text-2xl font-bold">Todos os Imóveis</h2>
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
              <h3 className="text-xl font-medium text-gray-500">Nenhum imóvel encontrado para os critérios selecionados</h3>
              <p className="mt-2 text-gray-400">Tente ajustar os filtros de busca</p>
            </div>
          )}
        </div>
      </section>
      
      <Footer />
    </div>
  );
};

export default Index;
