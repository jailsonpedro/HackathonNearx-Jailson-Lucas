
import React from 'react';
import { Link } from 'react-router-dom';
import { Building2 } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-realestate-secondary text-white py-10">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <div className="flex items-center gap-2 mb-4">
              <Building2 size={24} />
              <span className="text-lg font-bold">BairroIm</span>
            </div>
            <p className="text-sm text-gray-300">
              O seu portal de imóveis no Bairro Alegre.
              Encontre as melhores oportunidades para comprar, 
              vender ou alugar imóveis na região.
            </p>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-4">Navegação</h3>
            <ul className="space-y-2 text-sm text-gray-300">
              <li>
                <Link to="/" className="hover:text-white">Início</Link>
              </li>
              <li>
                <Link to="/comprar" className="hover:text-white">Comprar</Link>
              </li>
              <li>
                <Link to="/alugar" className="hover:text-white">Alugar</Link>
              </li>
              <li>
                <Link to="/anunciar" className="hover:text-white">Anunciar</Link>
              </li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-4">Sobre Nós</h3>
            <ul className="space-y-2 text-sm text-gray-300">
              <li>
                <Link to="/sobre" className="hover:text-white">Sobre a BairroIm</Link>
              </li>
              <li>
                <Link to="/contato" className="hover:text-white">Contato</Link>
              </li>
              <li>
                <Link to="/termos" className="hover:text-white">Termos de Uso</Link>
              </li>
              <li>
                <Link to="/privacidade" className="hover:text-white">Privacidade</Link>
              </li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-4">Contato</h3>
            <address className="not-italic text-sm text-gray-300">
              <p>Rua Principal, 123</p>
              <p>Bairro Alegre</p>
              <p>São Paulo - SP</p>
              <p className="mt-2">contato@bairroim.com</p>
              <p>(11) 91234-5678</p>
            </address>
          </div>
        </div>
        
        <div className="border-t border-gray-700 mt-8 pt-6 text-center text-gray-400 text-sm">
          <p>&copy; {new Date().getFullYear()} BairroIm. Todos os direitos reservados.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
