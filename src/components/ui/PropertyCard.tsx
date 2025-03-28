
import { useState } from 'react';
import { Link } from 'react-router-dom';
import { Star, Heart } from 'lucide-react';
import { Property } from '@/lib/data';

interface PropertyCardProps {
  property: Property;
}

const PropertyCard = ({ property }: PropertyCardProps) => {
  const [isFavorite, setIsFavorite] = useState(false);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  
  return (
    <div className="group">
      <div className="relative overflow-hidden rounded-xl aspect-square">
        <Link to={`/property/${property.id}`}>
          <img 
            src={property.image} 
            alt={property.title}
            className="object-cover w-full h-full transition-transform duration-300 hover:scale-105"
          />
        </Link>
        <button 
          onClick={() => setIsFavorite(!isFavorite)}
          className="absolute top-3 right-3 p-1.5 rounded-full"
        >
          <Heart 
            className={`h-6 w-6 drop-shadow-md ${isFavorite ? 'fill-airbnb-primary stroke-airbnb-primary' : 'stroke-white fill-black/20'}`} 
          />
        </button>
      </div>
      
      <Link to={`/property/${property.id}`}>
        <div className="mt-3">
          <div className="flex justify-between items-start">
            <h3 className="font-semibold text-airbnb-dark text-base">{property.location}</h3>
            <div className="flex items-center">
              <Star className="h-4 w-4 fill-airbnb-dark stroke-none" />
              <span className="ml-1 text-sm font-medium">{property.rating}</span>
            </div>
          </div>
          <p className="text-airbnb-gray text-sm mt-1">{property.type}</p>
          <p className="text-airbnb-gray text-sm mt-1">Nov 12-17</p>
          <p className="text-airbnb-dark text-sm mt-1">
            <span className="font-semibold">${property.price}</span> night
          </p>
        </div>
      </Link>
    </div>
  );
};

export default PropertyCard;
