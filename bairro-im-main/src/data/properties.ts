
export interface Property {
  id: string;
  title: string;
  price: number;
  location: string;
  area: number; // in square meters
  bedrooms: number;
  bathrooms: number;
  description: string;
  images: string[];
  featured: boolean;
  type: 'sale' | 'rent';
  seller: {
    name: string;
    phone: string;
    email: string;
  };
  createdAt: string;
}

export const properties: Property[] = [
  {
    id: "1",
    title: "Elegant Modern Apartment",
    price: 350000,
    location: "Centro, Bairro Alegre",
    area: 120,
    bedrooms: 3,
    bathrooms: 2,
    description: "Beautiful modern apartment with an open concept living area, high ceilings and plenty of natural light. The kitchen has been recently renovated with high-end appliances and granite countertops. The master bedroom features a walk-in closet and an ensuite bathroom. Located in a highly desirable area close to shops, restaurants and public transportation.",
    images: [
      "/placeholder.svg",
      "/placeholder.svg",
      "/placeholder.svg"
    ],
    featured: true,
    type: "sale",
    seller: {
      name: "João Silva",
      phone: "(11) 98765-4321",
      email: "joao@example.com"
    },
    createdAt: "2025-04-10T10:30:00Z"
  },
  {
    id: "2",
    title: "Spacious Family Home",
    price: 550000,
    location: "Jardim Paulista, Bairro Alegre",
    area: 220,
    bedrooms: 4,
    bathrooms: 3,
    description: "Wonderful family home in a quiet residential neighborhood. Features include a large backyard, updated kitchen, hardwood floors, and a two-car garage. The lower level has a finished basement that can be used as a game room or home office. Close to schools and parks.",
    images: [
      "/placeholder.svg",
      "/placeholder.svg", 
      "/placeholder.svg"
    ],
    featured: true,
    type: "sale",
    seller: {
      name: "Ana Santos",
      phone: "(11) 91234-5678",
      email: "ana@example.com"
    },
    createdAt: "2025-04-12T14:00:00Z"
  },
  {
    id: "3",
    title: "Downtown Loft",
    price: 280000,
    location: "Centro, Bairro Alegre",
    area: 95,
    bedrooms: 1,
    bathrooms: 1,
    description: "Stylish loft in the heart of downtown. Industrial-style interiors with exposed brick walls, high ceilings, and large windows. The building features a fitness center, rooftop terrace, and 24-hour security. Perfect for urban living with restaurants, cafes, and nightlife just steps away.",
    images: [
      "/placeholder.svg",
      "/placeholder.svg",
      "/placeholder.svg"
    ],
    featured: false,
    type: "sale",
    seller: {
      name: "Carlos Mendes",
      phone: "(11) 95555-7777",
      email: "carlos@example.com"
    },
    createdAt: "2025-04-15T09:45:00Z"
  },
  {
    id: "4",
    title: "Luxury Beachfront Condo",
    price: 4500,
    location: "Litoral, Bairro Alegre",
    area: 150,
    bedrooms: 3,
    bathrooms: 2,
    description: "Stunning beachfront condo with panoramic ocean views. Features include a spacious balcony, floor-to-ceiling windows, and high-end finishes throughout. The complex offers a swimming pool, gym, and direct beach access. Available for long-term lease.",
    images: [
      "/placeholder.svg",
      "/placeholder.svg",
      "/placeholder.svg"
    ],
    featured: true,
    type: "rent",
    seller: {
      name: "Mariana Costa",
      phone: "(11) 98888-3333",
      email: "mariana@example.com"
    },
    createdAt: "2025-04-18T16:20:00Z"
  },
  {
    id: "5",
    title: "Cozy Studio Apartment",
    price: 1200,
    location: "Vila Mariana, Bairro Alegre",
    area: 45,
    bedrooms: 0,
    bathrooms: 1,
    description: "Charming studio apartment perfect for students or young professionals. Recently updated with modern appliances and fixtures. Building amenities include laundry facilities and a small courtyard. Convenient location with easy access to public transportation and universities.",
    images: [
      "/placeholder.svg",
      "/placeholder.svg",
      "/placeholder.svg"
    ],
    featured: false,
    type: "rent",
    seller: {
      name: "Pedro Alves",
      phone: "(11) 97777-2222",
      email: "pedro@example.com"
    },
    createdAt: "2025-04-20T11:15:00Z"
  },
  {
    id: "6",
    title: "Renovated Townhouse",
    price: 420000,
    location: "Moema, Bairro Alegre",
    area: 180,
    bedrooms: 3,
    bathrooms: 2.5,
    description: "Beautiful townhouse with recent renovations. Features include hardwood floors, a modern kitchen with stainless steel appliances, and a private patio. The master bedroom has a large walk-in closet and an ensuite bathroom. Located in a peaceful residential area with tree-lined streets.",
    images: [
      "/placeholder.svg",
      "/placeholder.svg",
      "/placeholder.svg"
    ],
    featured: false,
    type: "sale",
    seller: {
      name: "Luisa Ferreira",
      phone: "(11) 94444-6666",
      email: "luisa@example.com"
    },
    createdAt: "2025-04-22T13:40:00Z"
  },
];

export const filterProperties = (
  propertyList: Property[],
  filters: {
    search?: string;
    type?: 'sale' | 'rent' | 'all';
    minPrice?: number;
    maxPrice?: number;
    minBedrooms?: number;
  }
) => {
  return propertyList.filter((property) => {
    // Filter by type
    if (filters.type && filters.type !== 'all' && property.type !== filters.type) {
      return false;
    }

    // Filter by price range
    if (filters.minPrice && property.price < filters.minPrice) {
      return false;
    }
    if (filters.maxPrice && property.price > filters.maxPrice) {
      return false;
    }

    // Filter by minimum bedrooms
    if (filters.minBedrooms && property.bedrooms < filters.minBedrooms) {
      return false;
    }

    // Filter by search term (title, location, description)
    if (filters.search) {
      const searchLower = filters.search.toLowerCase();
      return (
        property.title.toLowerCase().includes(searchLower) ||
        property.location.toLowerCase().includes(searchLower) ||
        property.description.toLowerCase().includes(searchLower)
      );
    }

    return true;
  });
};
