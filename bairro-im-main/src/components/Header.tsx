
import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Building2 } from 'lucide-react';
import { Button } from '@/components/ui/button';

const Header: React.FC = () => {
  const location = useLocation();
  
  const isActive = (path: string) => {
    return location.pathname === path;
  };

  return (
    <header className="border-b bg-white sticky top-0 z-10">
      <div className="container mx-auto px-4 flex justify-between items-center h-16">
        <Link to="/" className="flex items-center gap-2 text-realestate-primary">
          <Building2 size={28} />
          <span className="text-xl font-bold">BairroIm</span>
        </Link>
        
        <nav className="hidden md:flex gap-6 items-center">
          <Link 
            to="/" 
            className={`font-medium ${isActive('/') ? 'text-realestate-primary' : 'text-gray-600 hover:text-realestate-primary'}`}
          >
            Início
          </Link>
          <Link 
            to="/comprar" 
            className={`font-medium ${isActive('/comprar') ? 'text-realestate-primary' : 'text-gray-600 hover:text-realestate-primary'}`}
          >
            Comprar
          </Link>
          <Link 
            to="/alugar" 
            className={`font-medium ${isActive('/alugar') ? 'text-realestate-primary' : 'text-gray-600 hover:text-realestate-primary'}`}
          >
            Alugar
          </Link>
          <Link 
            to="/anunciar" 
            className={`font-medium ${isActive('/anunciar') ? 'text-realestate-primary' : 'text-gray-600 hover:text-realestate-primary'}`}
          >
            Anunciar
          </Link>
        </nav>
        
        <div className="flex items-center gap-2">
          <Link to="/anunciar">
            <Button variant="default" className="bg-realestate-primary hover:bg-realestate-primary/90">
              Anunciar Imóvel
            </Button>
          </Link>
        </div>
      </div>
    </header>
  );
};

export default Header;
