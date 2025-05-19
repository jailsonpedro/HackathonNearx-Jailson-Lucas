
import React from 'react';
import { Link } from 'react-router-dom';

interface BreadcrumbsProps {
  type: 'sale' | 'rent';
  title: string;
}

const Breadcrumbs = ({ type, title }: BreadcrumbsProps) => {
  return (
    <div className="flex flex-wrap items-center gap-2 text-sm text-gray-500 mb-4">
      <Link to="/" className="hover:text-realestate-primary">Início</Link>
      <span>/</span>
      <Link to={type === 'rent' ? "/alugar" : "/comprar"} className="hover:text-realestate-primary">
        {type === 'rent' ? 'Alugar' : 'Comprar'}
      </Link>
      <span>/</span>
      <span className="text-gray-700 font-medium">{title}</span>
    </div>
  );
};

export default Breadcrumbs;
