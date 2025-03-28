import { useState } from 'react';
import { Link } from 'react-router-dom';
import { Search, User, Menu, Globe, CalendarDays, Users } from 'lucide-react';
import { Button } from '@/components/ui/button';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [showMobileSearch, setShowMobileSearch] = useState(false);

  // Add scroll event listener
  if (typeof window !== 'undefined') {
    window.addEventListener('scroll', () => {
      if (window.scrollY > 10) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    });
  }

  return (
    <header 
      className={`sticky top-0 z-50 transition-all duration-300 ${
        isScrolled ? 'bg-white shadow-md' : 'bg-white border-b border-gray-100'
      }`}
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <Link to="/" className="flex items-center z-10">
            <svg 
              className="text-airbnb-primary h-8 w-auto" 
              viewBox="0 0 320.1 99.9"
              xmlns="http://www.w3.org/2000/svg"
              fill="currentColor"
              aria-hidden="true"
            >
              <path d="M168.7,25.1c0,3.6-2.9,6.5-6.5,6.5s-6.5-2.9-6.5-6.5s2.8-6.5,6.5-6.5C165.9,18.7,168.7,21.6,168.7,25.1z
                M141.9,38.2c0,0.6,0,1.6,0,1.6s-3.1-4-9.7-4c-10.9,0-19.4,8.3-19.4,19.8c0,11.4,8.4,19.8,19.4,19.8c6.7,0,9.7-4.1,9.7-4.1v1.7
                c0,0.8,0.6,1.4,1.4,1.4h8.1V36.8c0,0-7.4,0-8.1,0C142.5,36.8,141.9,37.5,141.9,38.2z M141.9,62.3c-1.5,2.2-4.5,4.1-8.1,4.1
                c-6.4,0-11.3-4-11.3-10.8s4.9-10.8,11.3-10.8c3.5,0,6.7,2,8.1,4.1V62.3z M157.4,36.8h9.6v37.6h-9.6V36.8z M300.8,35.8
                c-6.6,0-9.7,4-9.7,4V18.7h-9.6v55.7c0,0,7.4,0,8.1,0c0.8,0,1.4-0.7,1.4-1.4v-1.7l0,0c0,0,3.1,4.1,9.7,4.1c10.9,0,19.4-8.4,19.4-19.8
                C320.1,44.2,311.6,35.8,300.8,35.8z M299.2,66.3c-3.7,0-6.6-1.9-8.1-4.1V48.8c1.5-2,4.7-4.1,8.1-4.1c6.4,0,11.3,4,11.3,10.8
                S305.6,66.3,299.2,66.3z M276.5,52.1v22.4h-9.6V53.2c0-6.2-2-8.7-7.4-8.7c-2.9,0-5.9,1.5-7.8,3.7v26.2h-9.6V36.8h7.6
                c0.8,0,1.4,0.7,1.4,1.4v1.6c2.8-2.9,6.5-4,10.2-4c4.2,0,7.7,1.2,10.5,3.6C275.2,42.2,276.5,45.8,276.5,52.1z M218.8,35.8
                c-6.6,0-9.7,4-9.7,4V18.7h-9.6v55.7c0,0,7.4,0,8.1,0c0.8,0,1.4-0.7,1.4-1.4v-1.7l0,0c0,0,3.1,4.1,9.7,4.1c10.9,0,19.4-8.4,19.4-19.8
                C238.2,44.2,229.7,35.8,218.8,35.8z M217.2,66.3c-3.7,0-6.6-1.9-8.1-4.1V48.8c1.5-2,4.7-4.1,8.1-4.1c6.4,0,11.3,4,11.3,10.8
                S223.6,66.3,217.2,66.3z M191.2,35.8c2.9,0,4.4,0.5,4.4,0.5v8.9c0,0-8-2.7-13,3v26.3h-9.6V36.8c0,0,7.4,0,8.1,0
                c0.8,0,1.4,0.7,1.4,1.4v1.6C184.3,37.7,188.2,35.8,191.2,35.8z M91.5,71c-0.5-1.2-1-2.5-1.5-3.6c-0.8-1.8-1.6-3.5-2.3-5.1l-0.1-0.1
                c-6.9-15-14.3-30.2-22.1-45.2l-0.3-0.6c-0.8-1.5-1.6-3.1-2.4-4.7c-1-1.8-2-3.7-3.6-5.5C56,2.2,51.4,0,46.5,0c-5,0-9.5,2.2-12.8,6
                c-1.5,1.8-2.6,3.7-3.6,5.5c-0.8,1.6-1.6,3.2-2.4,4.7l-0.3,0.6C19.7,31.8,12.2,47,5.3,62l-0.1,0.2c-0.7,1.6-1.5,3.3-2.3,5.1
                c-0.5,1.1-1,2.3-1.5,3.6c-1.3,3.7-1.7,7.2-1.2,10.8c1.1,7.5,6.1,13.8,13,16.6c2.6,1.1,5.3,1.6,8.1,1.6c0.8,0,1.8-0.1,2.6-0.2
                c3.3-0.4,6.7-1.5,10-3.4c4.1-2.3,8-5.6,12.4-10.4c4.4,4.8,8.4,8.1,12.4,10.4c3.3,1.9,6.7,3,10,3.4c0.8,0.1,1.8,0.2,2.6,0.2
                c2.8,0,5.6-0.5,8.1-1.6c7-2.8,11.9-9.2,13-16.6C93.2,78.2,92.8,74.7,91.5,71z M46.4,76.2c-5.4-6.8-8.9-13.2-10.1-18.6
                c-0.5-2.3-0.6-4.3-0.3-6.1c0.2-1.6,0.8-3,1.6-4.2c1.9-2.7,5.1-4.4,8.8-4.4c3.7,0,7,1.6,8.8,4.4c0.8,1.2,1.4,2.6,1.6,4.2
                c0.3,1.8,0.2,3.9-0.3,6.1C55.3,62.9,51.8,69.3,46.4,76.2z M86.3,80.9c-0.7,5.2-4.2,9.7-9.1,11.7c-2.4,1-5,1.3-7.6,1
                c-2.5-0.3-5-1.1-7.6-2.6c-3.6-2-7.2-5.1-11.4-9.7c6.6-8.1,10.6-15.5,12.1-22.1c0.7-3.1,0.8-5.9,0.5-8.5c-0.4-2.5-1.3-4.8-2.7-6.8
                c-3.1-4.5-8.3-7.1-14.1-7.1s-11,2.7-14.1,7.1c-1.4,2-2.3,4.3-2.7,6.8c-0.4,2.6-0.3,5.5,0.5,8.5c1.5,6.6,5.6,14.1,12.1,22.2
                c-4.1,4.6-7.8,7.7-11.4,9.7c-2.6,1.5-5.1,2.3-7.6,2.6c-2.7,0.3-5.3-0.1-7.6-1c-4.9-2-8.4-6.5-9.1-11.7c-0.3-2.5-0.1-5,0.9-7.8
                c0.3-1,0.8-2,1.3-3.2c0.7-1.6,1.5-3.3,2.3-5l0.1-0.2c6.9-14.9,14.3-30.1,22-44.9l0.3-0.6c0.8-1.5,1.6-3.1,2.4-4.6
                c0.8-1.6,1.7-3.1,2.8-4.4c2.1-2.4,4.9-3.7,8-3.7c3.1,0,5.9,1.3,8,3.7c1.1,1.3,2,2.8,2.8,4.4c0.8,1.5,1.6,3.1,2.4,4.6l0.3,0.6
                C67.7,34.8,75.1,50,82,64.9L82,65c0.8,1.6,1.5,3.4,2.3,5c0.5,1.2,1,2.2,1.3,3.2C86.4,75.8,86.7,78.3,86.3,80.9z"
              />
            </svg>
          </Link>

          {/* Desktop Search Bar */}
          <div className="hidden md:flex absolute left-1/2 transform -translate-x-1/2 items-center justify-between rounded-full border border-gray-200 shadow-sm hover:shadow-md transition-all duration-200 cursor-pointer">
            <div className="flex items-center flex-1">
              <button className="px-5 py-3 font-medium text-sm rounded-full hover:bg-gray-100 transition-all duration-200">
                Anywhere
              </button>
              <div className="h-5 border-r border-gray-300"></div>
              <button className="px-5 py-3 font-medium text-sm rounded-full hover:bg-gray-100 transition-all duration-200 flex items-center gap-2">
                <span>Any week</span>
                <CalendarDays size={16} className="text-gray-500" />
              </button>
              <div className="h-5 border-r border-gray-300"></div>
              <button className="px-5 py-3 text-gray-500 text-sm rounded-full hover:bg-gray-100 transition-all duration-200 flex items-center gap-2">
                <span>Add guests</span>
                <Users size={16} />
              </button>
            </div>
            <div className="bg-airbnb-primary p-3 m-1 rounded-full text-white flex items-center justify-center">
              <Search size={16} />
            </div>
          </div>

          {/* Mobile Search Button */}
          <button 
            className="md:hidden flex items-center justify-between rounded-full border border-gray-200 shadow-sm px-3 py-2 hover:shadow-md transition-all duration-200"
            onClick={() => setShowMobileSearch(!showMobileSearch)}
          >
            <div className="flex items-center gap-2">
              <Search size={16} />
              <div className="flex flex-col items-start">
                <span className="text-xs font-medium">Anywhere</span>
                <span className="text-xs text-gray-500">Any week · Add guests</span>
              </div>
            </div>
          </button>

          {/* User Menu */}
          <div className="flex items-center gap-4 z-10">
            <Button variant="ghost" className="rounded-full hidden md:flex" size="sm">
              <span className="text-sm font-medium">Become a Host</span>
            </Button>
            
            <Button variant="ghost" className="rounded-full p-2.5" size="icon">
              <Globe size={18} />
            </Button>
            
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button className="rounded-full flex items-center gap-2 border border-gray-200 shadow-sm px-2 py-1.5 hover:shadow-md" variant="outline">
                  <Menu size={18} />
                  <div className="bg-gray-500 rounded-full p-1.5 text-white">
                    <User size={14} />
                  </div>
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent align="end" className="w-56 mt-2">
                <DropdownMenuItem>
                  <Link to="/" className="w-full">Sign up</Link>
                </DropdownMenuItem>
                <DropdownMenuItem>
                  <Link to="/" className="w-full">Log in</Link>
                </DropdownMenuItem>
                <DropdownMenuItem>
                  <Link to="/" className="w-full">Host your home</Link>
                </DropdownMenuItem>
                <DropdownMenuItem>
                  <Link to="/" className="w-full">Host an experience</Link>
                </DropdownMenuItem>
                <DropdownMenuItem>
                  <Link to="/" className="w-full">Help</Link>
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
          </div>
        </div>
        
        {/* Mobile Expanded Search */}
        {showMobileSearch && (
          <div className="md:hidden bg-white p-4 rounded-2xl shadow-lg absolute left-0 right-0 top-20 border border-gray-200 z-50">
            <div className="flex flex-col gap-4">
              <div className="border border-gray-200 rounded-lg p-4 flex items-center gap-3">
                <Search size={18} className="text-gray-500" />
                <div>
                  <h3 className="font-medium text-sm">Where</h3>
                  <input 
                    type="text" 
                    placeholder="Search destinations" 
                    className="border-none outline-none text-sm w-full"
                  />
                </div>
              </div>
              
              <div className="flex gap-4">
                <div className="border border-gray-200 rounded-lg p-4 flex-1">
                  <h3 className="font-medium text-sm">Check in</h3>
                  <p className="text-sm text-gray-500">Add dates</p>
                </div>
                <div className="border border-gray-200 rounded-lg p-4 flex-1">
                  <h3 className="font-medium text-sm">Check out</h3>
                  <p className="text-sm text-gray-500">Add dates</p>
                </div>
              </div>
              
              <div className="border border-gray-200 rounded-lg p-4 flex items-center justify-between">
                <div>
                  <h3 className="font-medium text-sm">Who</h3>
                  <p className="text-sm text-gray-500">Add guests</p>
                </div>
                <Button className="rounded-full bg-airbnb-primary text-white h-10 w-10 p-0">
                  <Search size={16} />
                </Button>
              </div>
            </div>
          </div>
        )}
      </div>
    </header>
  );
};

export default Navbar;
