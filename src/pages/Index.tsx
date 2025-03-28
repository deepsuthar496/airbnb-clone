
import { useState } from 'react';
import { properties, Property, propertyTypes } from '@/lib/data';
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import PropertyCard from '@/components/ui/PropertyCard';
import SearchFilters from '@/components/ui/SearchFilters';
import { Building, Gem, Map } from 'lucide-react';
import { Button } from '@/components/ui/button';

const Index = () => {
  const [filteredProperties, setFilteredProperties] = useState<Property[]>(properties);
  const [activeFilter, setActiveFilter] = useState<string>("");

  const handleFilterChange = (filter: string) => {
    setActiveFilter(filter);
    
    if (!filter) {
      setFilteredProperties(properties);
      return;
    }
    
    const filtered = properties.filter(property => property.type === filter);
    setFilteredProperties(filtered);
  };

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      <SearchFilters onFilterChange={handleFilterChange} />
      
      <main className="flex-grow px-6 sm:px-8 lg:px-10 py-8">
        <div className="flex items-center justify-between mb-6">
          <h2 className="text-lg font-semibold">
            {activeFilter ? `${activeFilter} rentals` : "All rentals"}
            <span className="ml-2 text-airbnb-gray text-sm font-normal">
              {filteredProperties.length} homes
            </span>
          </h2>
          
          <Button variant="outline" className="rounded-lg border border-gray-300 shadow-sm">
            <Map className="mr-2 h-4 w-4" />
            Show map
          </Button>
        </div>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {filteredProperties.map((property) => (
            <PropertyCard key={property.id} property={property} />
          ))}
        </div>
        
        {filteredProperties.length === 0 && (
          <div className="text-center py-20">
            <Building className="mx-auto h-12 w-12 text-airbnb-gray opacity-50 mb-4" />
            <h2 className="text-xl font-semibold text-airbnb-dark mb-2">
              No {activeFilter.toLowerCase()} properties found
            </h2>
            <p className="text-airbnb-gray max-w-md mx-auto">
              We couldn't find any {activeFilter.toLowerCase()} properties. Try adjusting your filters or check back later for new listings.
            </p>
            <Button 
              onClick={() => handleFilterChange("")} 
              className="mt-6 bg-gradient-to-r from-airbnb-primary to-airbnb-secondary"
            >
              <Gem className="mr-2 h-4 w-4" />
              View all properties
            </Button>
          </div>
        )}
      </main>
      
      <Footer />
    </div>
  );
};

export default Index;
