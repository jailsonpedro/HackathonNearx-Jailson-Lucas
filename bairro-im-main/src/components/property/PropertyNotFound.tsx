
import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from "@/components/ui/button";
import Header from '@/components/Header';
import Footer from '@/components/Footer';

const PropertyNotFound = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <div className="flex-1 flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-bold mb-4">Imóvel não encontrado</h1>
          <p className="text-gray-500 mb-6">O imóvel que você está procurando não está disponível.</p>
          <Link to="/">
            <Button>Voltar para a página inicial</Button>
          </Link>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default PropertyNotFound;
