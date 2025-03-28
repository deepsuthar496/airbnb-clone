import { useState, useEffect } from 'react';
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
  const [isImageTransitioning, setIsImageTransitioning] = useState(false);
  
  // Ensure we have valid images array
  const images = Array.isArray(property.images) && property.images.length > 0 
    ? property.images 
    : [property.image];
  
  // Reset image errors when property changes
  useEffect(() => {
    setImageError({});
    setCurrentImageIndex(0);
  }, [property.id]);

  const nextImage = () => {
    if (isImageTransitioning) return;
    setIsImageTransitioning(true);
    setTimeout(() => {
      setCurrentImageIndex((prev) => (prev + 1) % images.length);
      setTimeout(() => {
        setIsImageTransitioning(false);
      }, 300);
    }, 150);
  };

  const prevImage = () => {
    if (isImageTransitioning) return;
    setIsImageTransitioning(true);
    setTimeout(() => {
      setCurrentImageIndex((prev) => (prev - 1 + images.length) % images.length);
      setTimeout(() => {
        setIsImageTransitioning(false);
      }, 300);
    }, 150);
  };

  const handleImageError = (index: number) => {
    console.log(`Image failed to load for ${property.title}, index ${index}`);
    setImageError(prev => ({ ...prev, [index]: true }));
    
    // If current image failed and we have other images, try the next one
    if (index === currentImageIndex && images.length > 1) {
      nextImage();
    }
  };
  
  // Check if all images have errors
  const allImagesHaveErrors = images.length === Object.keys(imageError).length && 
    Object.values(imageError).every(value => value === true);
  
  return (
    <div className="group transition-all duration-300 hover:shadow-lg rounded-xl hover:translate-y-[-4px] mb-6">
      <div className="relative overflow-hidden rounded-xl aspect-square bg-gray-100">
        <Link to={`/property/${property.id}`}>
          {imageError[currentImageIndex] || allImagesHaveErrors ? (
            <div className="w-full h-full flex flex-col items-center justify-center text-gray-400">
              <ImageIcon className="h-12 w-12 mb-2" />
              <span className="text-sm font-medium text-center px-4">{property.title}</span>
            </div>
          ) : (
            <div className="w-full h-full relative">
              <img 
                src={images[currentImageIndex]} 
                alt={property.title}
                className={cn(
                  "object-cover w-full h-full transition-all duration-500 group-hover:scale-110",
                  isImageTransitioning && "opacity-70 scale-105 blur-sm"
                )}
                onError={() => handleImageError(currentImageIndex)}
              />
              {isImageTransitioning && (
                <div className="absolute inset-0 bg-black/10 flex items-center justify-center">
                  <div className="w-8 h-8 border-4 border-white/30 border-t-white rounded-full animate-spin"></div>
                </div>
              )}
            </div>
          )}
        </Link>
        
        {images.length > 1 && !allImagesHaveErrors && (
          <>
            <button 
              onClick={(e) => {
                e.preventDefault();
                e.stopPropagation();
                prevImage();
              }}
              className="absolute top-1/2 left-3 -translate-y-1/2 p-1.5 rounded-full bg-white/80 shadow-md opacity-0 group-hover:opacity-100 transition-opacity duration-300 hover:bg-white transform hover:scale-110 active:scale-95"
              disabled={isImageTransitioning}
            >
              <ChevronLeft className="h-4 w-4 text-airbnb-dark" />
            </button>
            
            <button 
              onClick={(e) => {
                e.preventDefault();
                e.stopPropagation();
                nextImage();
              }}
              className="absolute top-1/2 right-3 -translate-y-1/2 p-1.5 rounded-full bg-white/80 shadow-md opacity-0 group-hover:opacity-100 transition-opacity duration-300 hover:bg-white transform hover:scale-110 active:scale-95"
              disabled={isImageTransitioning}
            >
              <ChevronRight className="h-4 w-4 text-airbnb-dark" />
            </button>
            
            <div className="absolute bottom-3 left-1/2 -translate-x-1/2 flex space-x-2">
              {images.map((_, idx) => (
                <div 
                  key={idx} 
                  className={cn(
                    "w-1.5 h-1.5 rounded-full transition-all duration-300", 
                    currentImageIndex === idx 
                      ? "bg-white scale-125" 
                      : "bg-white/50 group-hover:bg-white/70"
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
          className="absolute top-4 right-4 p-2 rounded-full bg-white/30 backdrop-blur-sm hover:bg-white/80 transition-colors z-10 transform hover:scale-110 duration-300 active:scale-95"
        >
          <Heart 
            className={`h-5 w-5 drop-shadow-sm transition-colors duration-300 ${isFavorite ? 'fill-airbnb-primary stroke-airbnb-primary' : 'stroke-white fill-black/10 group-hover:stroke-airbnb-primary'}`} 
          />
        </button>
      </div>
      
      <Link to={`/property/${property.id}`}>
        <div className="mt-5 px-3 pb-3">
          <div className="flex justify-between items-start">
            <h3 className="font-semibold text-airbnb-dark text-base line-clamp-1 group-hover:text-airbnb-primary transition-colors duration-300">{property.location}</h3>
            <div className="flex items-center gap-1.5">
              <Star className="h-4 w-4 fill-airbnb-dark stroke-none group-hover:fill-airbnb-primary transition-colors duration-300" />
              <span className="text-sm font-medium">{property.rating}</span>
            </div>
          </div>
          <p className="text-airbnb-gray text-sm mt-2 line-clamp-1">{property.type}</p>
          <p className="text-airbnb-gray text-sm mt-2">Nov 12-17</p>
          <div className="mt-3 flex items-baseline">
            <span className="font-semibold text-airbnb-dark group-hover:text-airbnb-primary transition-colors duration-300">${property.price}</span>
            <span className="text-airbnb-dark text-sm ml-1.5">night</span>
          </div>
        </div>
      </Link>
    </div>
  );
};

export default PropertyCard;
