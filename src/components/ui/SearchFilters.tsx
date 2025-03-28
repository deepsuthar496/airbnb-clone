
import { useState } from 'react';
import { ScrollArea, ScrollBar } from '@/components/ui/scroll-area';
import { propertyTypes } from '@/lib/data';
import { Home, Building, Castle, Trees, Warehouse, Mountain } from 'lucide-react';

interface SearchFiltersProps {
  onFilterChange?: (filter: string) => void;
}

const FilterIcons: Record<string, any> = {
  House: Home,
  Apartment: Building,
  Condo: Warehouse,
  Villa: Castle,
  Cabin: Trees,
  Cottage: Home,
  Loft: Building,
  Treehouse: Trees,
  Farmhouse: Home,
  Chalet: Mountain,
};

const SearchFilters = ({ onFilterChange }: SearchFiltersProps) => {
  const [activeFilter, setActiveFilter] = useState<string | null>(null);

  const handleFilterClick = (filter: string) => {
    if (activeFilter === filter) {
      setActiveFilter(null);
      onFilterChange && onFilterChange("");
    } else {
      setActiveFilter(filter);
      onFilterChange && onFilterChange(filter);
    }
  };

  return (
    <div className="sticky top-20 z-40 bg-white border-b border-gray-200 py-5">
      <ScrollArea className="w-full whitespace-nowrap">
        <div className="flex space-x-8 px-8">
          {propertyTypes.map((type) => {
            const IconComponent = FilterIcons[type] || Home;
            return (
              <button
                key={type}
                onClick={() => handleFilterClick(type)}
                className={`flex flex-col items-center space-y-2 transition-colors opacity-80 hover:opacity-100 ${
                  activeFilter === type
                    ? 'text-airbnb-dark border-b-2 border-airbnb-dark opacity-100'
                    : 'text-airbnb-gray hover:text-airbnb-dark'
                }`}
              >
                <div className="flex items-center justify-center h-7">
                  <IconComponent size={24} strokeWidth={1.5} />
                </div>
                <span className="text-xs font-medium">{type}</span>
              </button>
            );
          })}
        </div>
        <ScrollBar orientation="horizontal" />
      </ScrollArea>
    </div>
  );
};

export default SearchFilters;
