
import React from 'react';
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from '@/components/ui/carousel';

interface PropertyGalleryProps {
  images: string[];
  title: string;
}

const PropertyGallery = ({ images, title }: PropertyGalleryProps) => {
  return (
    <Carousel className="w-full max-w-4xl mb-8">
      <CarouselContent>
        {images.map((image, index) => (
          <CarouselItem key={index}>
            <img 
              src={image} 
              alt={`${title} - Image ${index + 1}`} 
              className="w-full rounded-lg h-[400px] object-cover" 
            />
          </CarouselItem>
        ))}
      </CarouselContent>
      <CarouselPrevious />
      <CarouselNext />
    </Carousel>
  );
};

export default PropertyGallery;
