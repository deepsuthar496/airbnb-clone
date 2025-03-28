
import { useState } from 'react';
import { Link } from 'react-router-dom';
import { Star, Heart, ChevronLeft, ChevronRight, Image as ImageIcon } from 'lucide-react';
import { Property } from '@/lib/data';
import { cn } from '@/lib/utils';

interface PropertyCardProps {
  property: Property;
}

const PropertyCard = ({ property }: PropertyCardProps) => {
  const [isFavorite, setIsFavorite] = useState(false);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [imageError, setImageError] = useState<Record<number, boolean>>({});
  
  const images = Array.isArray(property.images) && property.images.length > 0 
    ? property.images 
    : [property.image];
  
  const nextImage = () => {
    setCurrentImageIndex((prev) => (prev + 1) % images.length);
  };

  const prevImage = () => {
    setCurrentImageIndex((prev) => (prev - 1 + images.length) % images.length);
  };

  const handleImageError = (index: number) => {
    setImageError(prev => ({ ...prev, [index]: true }));
  };
  
  return (
    <div className="group transition-all duration-300 hover:shadow-lg rounded-xl">
      <div className="relative overflow-hidden rounded-xl aspect-square bg-gray-100">
        <Link to={`/property/${property.id}`}>
          {imageError[currentImageIndex] ? (
            <div className="w-full h-full flex flex-col items-center justify-center text-gray-400">
              <ImageIcon className="h-12 w-12 mb-2" />
              <span className="text-sm font-medium">{property.title}</span>
            </div>
          ) : (
            <img 
              src={images[currentImageIndex]} 
              alt={property.title}
              className="object-cover w-full h-full transition-transform duration-300 group-hover:scale-105"
              onError={() => handleImageError(currentImageIndex)}
            />
          )}
        </Link>
        
        {images.length > 1 && (
          <>
            <button 
              onClick={(e) => {
                e.preventDefault();
                e.stopPropagation();
                prevImage();
              }}
              className="absolute top-1/2 left-2 -translate-y-1/2 p-1 rounded-full bg-white/70 shadow-md opacity-0 group-hover:opacity-100 transition-opacity duration-300"
            >
              <ChevronLeft className="h-4 w-4 text-airbnb-dark" />
            </button>
            
            <button 
              onClick={(e) => {
                e.preventDefault();
                e.stopPropagation();
                nextImage();
              }}
              className="absolute top-1/2 right-2 -translate-y-1/2 p-1 rounded-full bg-white/70 shadow-md opacity-0 group-hover:opacity-100 transition-opacity duration-300"
            >
              <ChevronRight className="h-4 w-4 text-airbnb-dark" />
            </button>
            
            <div className="absolute bottom-2 left-1/2 -translate-x-1/2 flex space-x-1.5">
              {images.map((_, idx) => (
                <div 
                  key={idx} 
                  className={cn(
                    "w-1.5 h-1.5 rounded-full transition-all", 
                    currentImageIndex === idx 
                      ? "bg-white scale-110" 
                      : "bg-white/50"
                  )}
                />
              ))}
            </div>
          </>
        )}
        
        <button 
          onClick={(e) => {
            e.preventDefault();
            e.stopPropagation();
            setIsFavorite(!isFavorite);
          }}
          className="absolute top-3 right-3 p-1.5 rounded-full bg-white/20 backdrop-blur-sm hover:bg-white/40 transition-colors z-10"
        >
          <Heart 
            className={`h-5 w-5 drop-shadow-sm ${isFavorite ? 'fill-airbnb-primary stroke-airbnb-primary' : 'stroke-white fill-black/10'}`} 
          />
        </button>
      </div>
      
      <Link to={`/property/${property.id}`}>
        <div className="mt-3 px-1">
          <div className="flex justify-between items-start">
            <h3 className="font-semibold text-airbnb-dark text-base line-clamp-1">{property.location}</h3>
            <div className="flex items-center">
              <Star className="h-4 w-4 fill-airbnb-dark stroke-none" />
              <span className="ml-1 text-sm font-medium">{property.rating}</span>
            </div>
          </div>
          <p className="text-airbnb-gray text-sm mt-1 line-clamp-1">{property.type}</p>
          <p className="text-airbnb-gray text-sm mt-1">Nov 12-17</p>
          <p className="text-airbnb-dark text-sm mt-1 font-medium">
            <span className="font-semibold">${property.price}</span> night
          </p>
        </div>
      </Link>
    </div>
  );
};

export default PropertyCard;
