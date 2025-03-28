
import { useState } from 'react';
import { Link } from 'react-router-dom';
import { Search, User, Menu, Globe } from 'lucide-react';
import { Button } from '@/components/ui/button';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);

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
          <Link to="/" className="flex items-center">
            <div className="text-airbnb-primary text-2xl font-bold">
              airbnb
            </div>
          </Link>

          {/* Search Bar */}
          <div className="hidden md:flex items-center justify-between rounded-full border border-gray-200 shadow-sm px-2 py-2 hover:shadow-md transition-all duration-200 cursor-pointer">
            <div className="px-3 font-medium text-sm">Anywhere</div>
            <div className="h-5 border-r border-gray-300"></div>
            <div className="px-3 font-medium text-sm">Any week</div>
            <div className="h-5 border-r border-gray-300"></div>
            <div className="px-3 text-gray-500 text-sm">Add guests</div>
            <div className="bg-airbnb-primary p-2 rounded-full text-white">
              <Search size={16} />
            </div>
          </div>

          {/* User Menu */}
          <div className="flex items-center gap-4">
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
      </div>
    </header>
  );
};

export default Navbar;
