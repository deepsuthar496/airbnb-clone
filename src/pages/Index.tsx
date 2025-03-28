
import { useState } from 'react';
import { properties, Property, propertyTypes } from '@/lib/data';
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import PropertyCard from '@/components/ui/PropertyCard';
import SearchFilters from '@/components/ui/SearchFilters';

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
      
      <main className="flex-grow container mx-auto px-4 py-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {filteredProperties.map((property) => (
            <PropertyCard key={property.id} property={property} />
          ))}
        </div>
        
        {filteredProperties.length === 0 && (
          <div className="text-center py-20">
            <h2 className="text-xl font-semibold text-airbnb-dark mb-2">
              No properties found
            </h2>
            <p className="text-airbnb-gray">
              Try adjusting your filters or check back later for new listings.
            </p>
          </div>
        )}
      </main>
      
      <Footer />
    </div>
  );
};

export default Index;
