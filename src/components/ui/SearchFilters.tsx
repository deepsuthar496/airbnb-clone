import { useState, useRef, useEffect } from 'react';
import { Home, Building, Castle, Trees, Warehouse, Mountain, Sailboat, Tent, SlidersHorizontal, X } from 'lucide-react';

interface SearchFiltersProps {
  onFilterChange?: (filter: string) => void;
  onPriceRangeChange?: (min: number, max: number) => void;
  onTypeChange?: (type: string) => void;
}

const FilterIcons: Record<string, any> = {
  House: Home,
  Apartment: Building,
  Condo: Warehouse,
  Villa: Castle,
  Cabin: Trees,
  Treehouse: Trees,
  Mountain: Mountain,
  Lake: Sailboat,
  Camping: Tent,
};

// Limit to only 8 most important property types
const limitedPropertyTypes = [
  "House",
  "Apartment", 
  "Condo",
  "Villa",
  "Cabin",
  "Treehouse",
  "Mountain",
  "Lake"
];

// Format display names with spaces
const formatDisplayName = (type: string) => {
  return type.replace(/([A-Z])/g, ' $1').trim();
};

const SearchFilters = ({ onFilterChange, onPriceRangeChange, onTypeChange }: SearchFiltersProps) => {
  const [activeFilter, setActiveFilter] = useState<string | null>(null);
  const [showFilterModal, setShowFilterModal] = useState(false);
  const [placeType, setPlaceType] = useState("Any type");
  const [priceRange, setPriceRange] = useState({ min: 0, max: 1000 });
  const [tempPriceRange, setTempPriceRange] = useState({ min: 0, max: 1000 });
  const [tempPlaceType, setTempPlaceType] = useState("Any type");
  const modalRef = useRef<HTMLDivElement>(null);

  // Track active dragging state
  const [isDragging, setIsDragging] = useState<'min' | 'max' | null>(null);
  const [activeThumb, setActiveThumb] = useState<HTMLDivElement | null>(null);
  const trackRef = useRef<HTMLDivElement>(null);
  const trackLineRef = useRef<HTMLDivElement>(null);

  // Close modal when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (modalRef.current && !modalRef.current.contains(event.target as Node)) {
        setShowFilterModal(false);
      }
    };

    if (showFilterModal) {
      document.addEventListener('mousedown', handleClickOutside);
    }
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [showFilterModal]);

  // Set up global mouse move/up handlers for slider
  useEffect(() => {
    if (!isDragging || !activeThumb || !trackRef.current) return;
    
    const track = trackRef.current;
    const rect = track.getBoundingClientRect();
    const width = rect.width;
    const trackLine = trackLineRef.current;
    
    const handleMouseMove = (e: MouseEvent) => {
      if (!activeThumb || !trackLine) return;
      
      const x = Math.max(0, Math.min(width, e.clientX - rect.left));
      const percentage = (x / width) * 100;
      const value = Math.round((percentage / 100) * 1000 / 10) * 10;
      
      if (isDragging === 'min' && value < tempPriceRange.max) {
        activeThumb.style.left = `calc(${percentage}% - 12px)`;
        trackLine.style.left = `${percentage}%`;
        
        setTempPriceRange(prev => ({ ...prev, min: value }));
      } else if (isDragging === 'max' && value > tempPriceRange.min) {
        activeThumb.style.left = `calc(${percentage}% - 12px)`;
        trackLine.style.right = `${100 - percentage}%`;
        
        setTempPriceRange(prev => ({ ...prev, max: value }));
      }
    };
    
    const handleMouseUp = () => {
      setIsDragging(null);
      setActiveThumb(null);
    };
    
    document.addEventListener('mousemove', handleMouseMove);
    document.addEventListener('mouseup', handleMouseUp);
    
    return () => {
      document.removeEventListener('mousemove', handleMouseMove);
      document.removeEventListener('mouseup', handleMouseUp);
    };
  }, [isDragging, activeThumb, tempPriceRange]);

  const handleFilterClick = (filter: string) => {
    if (activeFilter === filter) {
      setActiveFilter(null);
      onFilterChange && onFilterChange("");
    } else {
      setActiveFilter(filter);
      onFilterChange && onFilterChange(filter);
    }
  };

  const handleApplyFilters = () => {
    setPriceRange(tempPriceRange);
    setPlaceType(tempPlaceType);
    onPriceRangeChange && onPriceRangeChange(tempPriceRange.min, tempPriceRange.max);
    onTypeChange && onTypeChange(tempPlaceType);
    setShowFilterModal(false);
  };

  const handleClearFilters = () => {
    setTempPriceRange({ min: 0, max: 1000 });
    setTempPlaceType("Any type");
  };

  return (
    <div className="sticky top-20 z-40 bg-white border-b border-gray-200 py-3">
      <div className="relative flex items-center">
        <div className="w-full mx-auto relative px-8">
          <div className="flex justify-start">
            <div className="flex items-center justify-start space-x-12">
              {limitedPropertyTypes.map((type) => {
                const IconComponent = FilterIcons[type] || Home;
                const displayName = formatDisplayName(type);
                return (
                  <button
                    key={type}
                    onClick={() => handleFilterClick(type)}
                    className={`flex flex-col items-center space-y-1.5 transition-all duration-300 opacity-80 hover:opacity-100 pb-1 ${
                      activeFilter === type
                        ? 'text-airbnb-dark border-b-2 border-airbnb-dark opacity-100 scale-105'
                        : 'text-airbnb-gray hover:text-airbnb-dark border-b-2 border-transparent'
                    }`}
                  >
                    <div className="flex items-center justify-center h-8 transition-transform duration-300 hover:scale-110">
                      <IconComponent size={26} strokeWidth={1.5} />
                    </div>
                    <span className="text-xs font-medium whitespace-nowrap">{displayName}</span>
                  </button>
                );
              })}
            </div>
          </div>
        </div>

        <div className="absolute right-8 flex items-center">
          <button
            onClick={() => setShowFilterModal(!showFilterModal)}
            className={`flex items-center gap-2 px-4 py-2 rounded-full border transition-all duration-300 hover:shadow-md ${
              showFilterModal 
                ? 'border-airbnb-primary bg-airbnb-primary/5 text-airbnb-primary' 
                : 'border-gray-300 bg-white'
            }`}
          >
            <SlidersHorizontal size={16} />
            <span className="text-sm font-medium">Filters</span>
          </button>
        </div>

        {/* Filter Modal */}
        {showFilterModal && (
          <div 
            ref={modalRef} 
            className="absolute right-8 top-14 z-50 bg-white rounded-xl shadow-xl border border-gray-200 w-96 p-5 transform transition-all duration-300 ease-in-out opacity-100 scale-100"
            style={{ transformOrigin: 'top right' }}
          >
            <div className="flex items-center justify-between mb-4">
              <h2 className="text-xl font-bold text-airbnb-dark">Filters</h2>
              <button 
                onClick={() => setShowFilterModal(false)}
                className="p-1 rounded-full hover:bg-gray-100 transition-colors"
              >
                <X size={20} className="text-gray-500" />
              </button>
            </div>
            
            <div className="space-y-6">
              {/* Type of place */}
              <div>
                <h3 className="font-semibold text-lg mb-3">Type of place</h3>
                <div className="flex bg-gray-100 rounded-xl p-1">
                  {["Any type", "Room", "Entire home"].map((type) => (
                    <button
                      key={type}
                      onClick={() => setTempPlaceType(type)}
                      className={`flex-1 py-2.5 text-sm font-medium rounded-lg transition-all duration-200 ${
                        tempPlaceType === type 
                          ? 'bg-white shadow-sm text-airbnb-dark' 
                          : 'text-gray-500 hover:text-gray-800'
                      }`}
                    >
                      {type}
                    </button>
                  ))}
                </div>
              </div>

              {/* Price range */}
              <div>
                <div className="flex items-center justify-between mb-3">
                  <h3 className="font-semibold text-lg">Price range</h3>
                  <span className="text-sm text-gray-500">per night</span>
                </div>
                
                <div className="space-y-6">
                  <div className="relative h-10 mt-6 mb-8" ref={trackRef}>
                    {/* Track background */}
                    <div className="absolute top-1/2 -translate-y-1/2 w-full h-1 bg-gray-200 rounded-full"></div>
                    
                    {/* Active track - with ref for direct manipulation */}
                    <div 
                      ref={trackLineRef}
                      className="absolute top-1/2 -translate-y-1/2 h-1 bg-airbnb-primary rounded-full z-10"
                      style={{
                        left: `${(tempPriceRange.min / 1000) * 100}%`,
                        right: `${100 - (tempPriceRange.max / 1000) * 100}%`,
                        transition: isDragging ? 'none' : 'left 0.2s, right 0.2s'
                      }}
                    ></div>
                    
                    {/* Min thumb */}
                    <div 
                      className={`absolute top-1/2 -translate-y-1/2 w-6 h-6 rounded-full bg-white shadow-md border cursor-pointer transform hover:scale-110 z-20 ${
                        isDragging === 'min' ? 'border-airbnb-primary scale-110' : 'border-gray-200 hover:border-airbnb-primary transition-all duration-200'
                      }`}
                      style={{ 
                        left: `calc(${(tempPriceRange.min / 1000) * 100}% - 12px)`,
                        transition: isDragging ? 'none' : 'left 0.2s, transform 0.2s'
                      }}
                      onMouseDown={(e) => {
                        e.preventDefault();
                        setIsDragging('min');
                        setActiveThumb(e.currentTarget);
                      }}
                      onClick={(e) => e.stopPropagation()}
                    ></div>
                    
                    {/* Max thumb */}
                    <div 
                      className={`absolute top-1/2 -translate-y-1/2 w-6 h-6 rounded-full bg-white shadow-md border cursor-pointer transform hover:scale-110 z-20 ${
                        isDragging === 'max' ? 'border-airbnb-primary scale-110' : 'border-gray-200 hover:border-airbnb-primary transition-all duration-200'
                      }`}
                      style={{ 
                        left: `calc(${(tempPriceRange.max / 1000) * 100}% - 12px)`,
                        transition: isDragging ? 'none' : 'left 0.2s, transform 0.2s'
                      }}
                      onMouseDown={(e) => {
                        e.preventDefault();
                        setIsDragging('max');
                        setActiveThumb(e.currentTarget);
                      }}
                      onClick={(e) => e.stopPropagation()}
                    ></div>
                    
                    {/* Price labels */}
                    <div className="absolute -bottom-8 left-0 text-xs text-gray-500">
                      $0
                    </div>
                    <div className="absolute -bottom-8 right-0 text-xs text-gray-500">
                      $1000
                    </div>
                  </div>
                  
                  <div className="flex justify-between mt-2">
                    <div className="flex items-center border rounded-lg p-3 w-36 hover:border-airbnb-primary focus-within:border-airbnb-primary transition-colors">
                      <span className="text-sm text-gray-500 mr-2">$</span>
                      <input
                        type="number"
                        min="0"
                        max={tempPriceRange.max}
                        value={tempPriceRange.min}
                        onChange={(e) => {
                          const value = e.target.value === '' ? 0 : parseInt(e.target.value);
                          if (value <= tempPriceRange.max) {
                            setTempPriceRange({...tempPriceRange, min: value});
                          }
                        }}
                        className="w-full text-sm outline-none"
                      />
                    </div>
                    
                    <div className="flex items-center justify-center">
                      <div className="w-8 h-0.5 bg-gray-300"></div>
                    </div>
                    
                    <div className="flex items-center border rounded-lg p-3 w-36 hover:border-airbnb-primary focus-within:border-airbnb-primary transition-colors">
                      <span className="text-sm text-gray-500 mr-2">$</span>
                      <input
                        type="number"
                        min={tempPriceRange.min}
                        max="1000"
                        value={tempPriceRange.max}
                        onChange={(e) => {
                          const value = e.target.value === '' ? 0 : parseInt(e.target.value);
                          if (value >= tempPriceRange.min) {
                            setTempPriceRange({...tempPriceRange, max: value});
                          }
                        }}
                        className="w-full text-sm outline-none"
                      />
                    </div>
                  </div>
                </div>
              </div>

              <div className="flex items-center justify-between pt-4 mt-2 border-t border-gray-200">
                <button
                  onClick={handleClearFilters}
                  className="text-sm font-medium underline hover:text-airbnb-primary transition-colors"
                >
                  Clear all
                </button>
                <button
                  onClick={handleApplyFilters}
                  className="px-6 py-3 bg-airbnb-primary text-white rounded-lg font-medium text-sm hover:bg-airbnb-dark transition-colors"
                >
                  Show results
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default SearchFilters;
