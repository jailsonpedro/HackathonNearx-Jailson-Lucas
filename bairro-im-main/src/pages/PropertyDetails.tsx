
import React from 'react';
import { useParams } from 'react-router-dom';
import { useToast } from "@/hooks/use-toast";
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { properties } from '@/data/properties';
import PropertyGallery from '@/components/property/PropertyGallery';
import PropertyFeatures from '@/components/property/PropertyFeatures';
import PropertyTabs from '@/components/property/PropertyTabs';
import PropertySidebar from '@/components/property/PropertySidebar';
import PropertyNotFound from '@/components/property/PropertyNotFound';
import Breadcrumbs from '@/components/property/Breadcrumbs';

const PropertyDetails = () => {
  const { id } = useParams<{ id: string }>();
  const { toast } = useToast();
  
  const property = properties.find(p => p.id === id);
  
  if (!property) {
    return <PropertyNotFound />;
  }

  const handleContact = () => {
    toast({
      title: "Mensagem enviada!",
      description: `Você entrou em contato com ${property.seller.name} sobre o imóvel "${property.title}".`,
    });
  };

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      
      <main className="flex-1">
        <div className="container mx-auto px-4 py-8">
          <Breadcrumbs type={property.type} title={property.title} />

          <div className="flex flex-col lg:flex-row gap-8">
            {/* Main content */}
            <div className="flex-1">
              <h1 className="text-3xl font-bold mb-2">{property.title}</h1>
              <p className="text-lg text-gray-500 mb-4 flex items-center">
                <span className="ml-1">{property.location}</span>
              </p>

              <PropertyGallery images={property.images} title={property.title} />
              <PropertyFeatures 
                bedrooms={property.bedrooms} 
                bathrooms={property.bathrooms} 
                area={property.area} 
              />
              <PropertyTabs property={property} />
            </div>

            {/* Sidebar */}
            <div className="w-full lg:w-80">
              <PropertySidebar property={property} onContact={handleContact} />
            </div>
          </div>
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default PropertyDetails;
