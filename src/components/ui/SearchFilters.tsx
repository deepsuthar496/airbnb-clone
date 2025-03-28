
import { useState } from 'react';
import { ScrollArea, ScrollBar } from '@/components/ui/scroll-area';
import { propertyTypes } from '@/lib/data';

interface SearchFiltersProps {
  onFilterChange?: (filter: string) => void;
}

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
    <div className="border-b border-gray-200 py-4">
      <ScrollArea className="w-full whitespace-nowrap">
        <div className="flex space-x-6 px-4 sm:px-6 lg:px-8">
          {propertyTypes.map((type) => (
            <button
              key={type}
              onClick={() => handleFilterClick(type)}
              className={`flex flex-col items-center space-y-2 text-xs font-medium transition-colors ${
                activeFilter === type
                  ? 'text-airbnb-dark border-b-2 border-airbnb-dark'
                  : 'text-airbnb-gray hover:text-airbnb-dark'
              }`}
            >
              <span className="h-6">{type}</span>
            </button>
          ))}
        </div>
        <ScrollBar orientation="horizontal" />
      </ScrollArea>
    </div>
  );
};

export default SearchFilters;
