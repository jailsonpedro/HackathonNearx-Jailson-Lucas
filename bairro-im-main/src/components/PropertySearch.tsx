
import React, { useState, FormEvent } from 'react';
import { Search } from 'lucide-react';
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Card } from '@/components/ui/card';

interface SearchProps {
  onSearch: (filters: {
    search?: string;
    type: 'sale' | 'rent' | 'all';
    minPrice?: number;
    maxPrice?: number;
    minBedrooms?: number;
  }) => void;
}

const PropertySearch: React.FC<SearchProps> = ({ onSearch }) => {
  const [searchTerm, setSearchTerm] = useState('');
  const [propertyType, setPropertyType] = useState<'sale' | 'rent' | 'all'>('all');
  const [minPrice, setMinPrice] = useState<string>('');
  const [maxPrice, setMaxPrice] = useState<string>('');
  const [minBedrooms, setMinBedrooms] = useState<string>('');

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    
    onSearch({
      search: searchTerm,
      type: propertyType,
      minPrice: minPrice ? parseInt(minPrice) : undefined,
      maxPrice: maxPrice ? parseInt(maxPrice) : undefined,
      minBedrooms: minBedrooms ? parseInt(minBedrooms) : undefined,
    });
  };

  return (
    <Card className="py-6 px-4 shadow-md bg-white">
      <form onSubmit={handleSubmit}>
        <div className="grid grid-cols-1 md:grid-cols-12 gap-4">
          <div className="md:col-span-4 relative">
            <Input
              type="text"
              placeholder="Localização, bairro ou endereço..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="pl-10"
            />
            <Search className="absolute left-3 top-2.5 h-5 w-5 text-gray-400" />
          </div>

          <div className="md:col-span-2">
            <RadioGroup 
              defaultValue="all" 
              className="flex gap-4"
              value={propertyType}
              onValueChange={(value: 'sale' | 'rent' | 'all') => setPropertyType(value)}
            >
              <div className="flex items-center space-x-2">
                <RadioGroupItem value="all" id="all" />
                <Label htmlFor="all">Todos</Label>
              </div>
              <div className="flex items-center space-x-2">
                <RadioGroupItem value="sale" id="sale" />
                <Label htmlFor="sale">Venda</Label>
              </div>
              <div className="flex items-center space-x-2">
                <RadioGroupItem value="rent" id="rent" />
                <Label htmlFor="rent">Aluguel</Label>
              </div>
            </RadioGroup>
          </div>

          <div className="md:col-span-2">
            <Select value={minPrice} onValueChange={setMinPrice}>
              <SelectTrigger>
                <SelectValue placeholder="Preço mínimo" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="">Qualquer</SelectItem>
                <SelectItem value="100000">R$ 100.000</SelectItem>
                <SelectItem value="200000">R$ 200.000</SelectItem>
                <SelectItem value="300000">R$ 300.000</SelectItem>
                <SelectItem value="500000">R$ 500.000</SelectItem>
              </SelectContent>
            </Select>
          </div>

          <div className="md:col-span-2">
            <Select value={maxPrice} onValueChange={setMaxPrice}>
              <SelectTrigger>
                <SelectValue placeholder="Preço máximo" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="">Qualquer</SelectItem>
                <SelectItem value="200000">R$ 200.000</SelectItem>
                <SelectItem value="300000">R$ 300.000</SelectItem>
                <SelectItem value="500000">R$ 500.000</SelectItem>
                <SelectItem value="1000000">R$ 1.000.000</SelectItem>
              </SelectContent>
            </Select>
          </div>

          <div className="md:col-span-1">
            <Select value={minBedrooms} onValueChange={setMinBedrooms}>
              <SelectTrigger>
                <SelectValue placeholder="Quartos" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="">Qualquer</SelectItem>
                <SelectItem value="1">1+</SelectItem>
                <SelectItem value="2">2+</SelectItem>
                <SelectItem value="3">3+</SelectItem>
                <SelectItem value="4">4+</SelectItem>
              </SelectContent>
            </Select>
          </div>

          <div className="md:col-span-1">
            <Button type="submit" className="w-full bg-realestate-primary hover:bg-realestate-primary/90">
              Buscar
            </Button>
          </div>
        </div>
      </form>
    </Card>
  );
};

export default PropertySearch;
