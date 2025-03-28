
import { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { Star, Shield, Share, Heart, ArrowLeft } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { properties } from '@/lib/data';
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';

const PropertyDetails = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [property, setProperty] = useState(properties.find(p => p.id === id));
  const [isLoading, setIsLoading] = useState(true);
  const [selectedImageIndex, setSelectedImageIndex] = useState(0);

  useEffect(() => {
    if (!property) {
      navigate('/');
      return;
    }
    
    setIsLoading(false);
  }, [property, navigate]);

  if (isLoading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-airbnb-primary"></div>
      </div>
    );
  }

  if (!property) return null;

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      <main className="flex-grow container mx-auto px-4 py-8">
        {/* Back button for mobile */}
        <Button 
          variant="ghost" 
          size="icon"
          className="md:hidden mb-4"
          onClick={() => navigate('/')}
        >
          <ArrowLeft size={20} />
        </Button>
        
        {/* Property Title */}
        <h1 className="text-2xl font-semibold mb-2">{property.title}</h1>
        
        {/* Property Meta */}
        <div className="flex items-center justify-between mb-6">
          <div className="flex items-center">
            <Star className="h-4 w-4 fill-airbnb-dark stroke-airbnb-dark" />
            <span className="ml-1 mr-2 font-medium">{property.rating}</span>
            <span className="text-airbnb-dark">·</span>
            <span className="ml-2 underline font-medium text-airbnb-dark">
              {property.location}
            </span>
          </div>
          
          <div className="flex items-center space-x-4">
            <button className="flex items-center text-airbnb-dark underline font-medium">
              <Share className="h-4 w-4 mr-1" />
              Share
            </button>
            <button className="flex items-center text-airbnb-dark underline font-medium">
              <Heart className="h-4 w-4 mr-1" />
              Save
            </button>
          </div>
        </div>
        
        {/* Property Images */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-2 mb-8">
          <div className="overflow-hidden rounded-l-xl md:rounded-l-xl md:h-[400px]">
            <img 
              src={property.images[0]} 
              alt={property.title}
              className="w-full h-full object-cover hover:scale-105 transition-transform cursor-pointer"
              onClick={() => setSelectedImageIndex(0)}
            />
          </div>
          <div className="hidden md:grid grid-cols-2 gap-2 h-[400px]">
            <div className="overflow-hidden">
              <img 
                src={property.images[1]} 
                alt={property.title}
                className="w-full h-full object-cover hover:scale-105 transition-transform cursor-pointer"
                onClick={() => setSelectedImageIndex(1)}
              />
            </div>
            <div className="overflow-hidden rounded-tr-xl">
              <img 
                src={property.images[2]} 
                alt={property.title}
                className="w-full h-full object-cover hover:scale-105 transition-transform cursor-pointer"
                onClick={() => setSelectedImageIndex(2)}
              />
            </div>
            <div className="overflow-hidden col-span-2 rounded-br-xl">
              <img 
                src={property.images[1]} 
                alt={property.title}
                className="w-full h-full object-cover hover:scale-105 transition-transform cursor-pointer"
                onClick={() => setSelectedImageIndex(1)}
              />
            </div>
          </div>
        </div>
        
        {/* Property Info and Booking */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          {/* Left Column - Property Info */}
          <div className="md:col-span-2">
            <div className="flex justify-between items-start border-b border-gray-200 pb-6">
              <div>
                <h2 className="text-xl font-semibold">
                  {property.type} hosted by {property.host.name}
                </h2>
                <p className="text-airbnb-gray mt-1">
                  {property.beds} beds · {property.baths} baths
                </p>
              </div>
              <div className="w-12 h-12 rounded-full overflow-hidden">
                <img 
                  src={property.host.image} 
                  alt={property.host.name}
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
            
            <div className="py-6 border-b border-gray-200">
              <div className="flex items-start space-x-4">
                <Shield className="h-6 w-6 text-airbnb-dark" />
                <div>
                  <h3 className="font-semibold">This is a rare find</h3>
                  <p className="text-airbnb-gray text-sm">{property.host.name}'s place on Airbnb is usually fully booked.</p>
                </div>
              </div>
            </div>
            
            <div className="py-6 border-b border-gray-200">
              <p className="text-airbnb-dark">{property.description}</p>
            </div>
            
            <div className="py-6 border-b border-gray-200">
              <h3 className="text-xl font-semibold mb-4">What this place offers</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {property.amenities.map((amenity, index) => (
                  <div key={index} className="flex items-center">
                    <span className="text-airbnb-dark">{amenity}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
          
          {/* Right Column - Booking */}
          <div>
            <div className="sticky top-28 border border-gray-200 rounded-xl shadow-xl p-6">
              <div className="flex justify-between items-start mb-6">
                <div>
                  <span className="text-xl font-semibold">${property.price}</span>
                  <span className="text-airbnb-dark"> night</span>
                </div>
                <div className="flex items-center">
                  <Star className="h-4 w-4 fill-airbnb-dark stroke-airbnb-dark" />
                  <span className="ml-1">{property.rating}</span>
                </div>
              </div>
              
              <div className="grid grid-cols-2 border border-gray-300 rounded-t-lg mb-4">
                <div className="p-3 border-r border-gray-300">
                  <p className="text-xs font-bold uppercase">Check-in</p>
                  <p className="text-sm">Add date</p>
                </div>
                <div className="p-3">
                  <p className="text-xs font-bold uppercase">Checkout</p>
                  <p className="text-sm">Add date</p>
                </div>
              </div>
              
              <div className="border border-gray-300 rounded-b-lg p-3 mb-4">
                <p className="text-xs font-bold uppercase">Guests</p>
                <p className="text-sm">1 guest</p>
              </div>
              
              <Button className="w-full bg-airbnb-primary hover:bg-airbnb-secondary text-white rounded-lg py-3 font-medium">
                Reserve
              </Button>
              
              <p className="text-center text-sm text-airbnb-gray mt-4">You won't be charged yet</p>
              
              <div className="mt-6 space-y-4">
                <div className="flex justify-between">
                  <span className="text-airbnb-dark underline">${property.price} x 5 nights</span>
                  <span>${property.price * 5}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-airbnb-dark underline">Cleaning fee</span>
                  <span>$75</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-airbnb-dark underline">Service fee</span>
                  <span>$100</span>
                </div>
                <div className="flex justify-between pt-4 border-t border-gray-200 font-bold">
                  <span>Total before taxes</span>
                  <span>${property.price * 5 + 75 + 100}</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default PropertyDetails;
