
import { Link } from 'react-router-dom';
import { Globe } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="border-t border-gray-200 bg-white">
      <div className="container mx-auto px-4 py-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <h3 className="font-bold text-sm mb-4">Support</h3>
            <ul className="space-y-3">
              <li><Link to="/" className="text-sm text-airbnb-dark hover:underline">Help Center</Link></li>
              <li><Link to="/" className="text-sm text-airbnb-dark hover:underline">AirCover</Link></li>
              <li><Link to="/" className="text-sm text-airbnb-dark hover:underline">Safety information</Link></li>
              <li><Link to="/" className="text-sm text-airbnb-dark hover:underline">Supporting people with disabilities</Link></li>
              <li><Link to="/" className="text-sm text-airbnb-dark hover:underline">Cancellation options</Link></li>
            </ul>
          </div>
          
          <div>
            <h3 className="font-bold text-sm mb-4">Community</h3>
            <ul className="space-y-3">
              <li><Link to="/" className="text-sm text-airbnb-dark hover:underline">Airbnb.org: disaster relief</Link></li>
              <li><Link to="/" className="text-sm text-airbnb-dark hover:underline">Combating discrimination</Link></li>
            </ul>
          </div>
          
          <div>
            <h3 className="font-bold text-sm mb-4">Hosting</h3>
            <ul className="space-y-3">
              <li><Link to="/" className="text-sm text-airbnb-dark hover:underline">Airbnb your home</Link></li>
              <li><Link to="/" className="text-sm text-airbnb-dark hover:underline">AirCover for Hosts</Link></li>
              <li><Link to="/" className="text-sm text-airbnb-dark hover:underline">Hosting resources</Link></li>
              <li><Link to="/" className="text-sm text-airbnb-dark hover:underline">Community forum</Link></li>
            </ul>
          </div>
          
          <div>
            <h3 className="font-bold text-sm mb-4">Airbnb</h3>
            <ul className="space-y-3">
              <li><Link to="/" className="text-sm text-airbnb-dark hover:underline">Newsroom</Link></li>
              <li><Link to="/" className="text-sm text-airbnb-dark hover:underline">New features</Link></li>
              <li><Link to="/" className="text-sm text-airbnb-dark hover:underline">Careers</Link></li>
              <li><Link to="/" className="text-sm text-airbnb-dark hover:underline">Investors</Link></li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-gray-200 mt-8 pt-8 flex flex-col md:flex-row justify-between items-center">
          <div className="flex flex-col md:flex-row items-center space-y-2 md:space-y-0 md:space-x-4">
            <div className="text-sm text-airbnb-dark">© 2023 Airbnb, Inc.</div>
            <span className="hidden md:inline">·</span>
            <Link to="/" className="text-sm text-airbnb-dark hover:underline">Privacy</Link>
            <span className="hidden md:inline">·</span>
            <Link to="/" className="text-sm text-airbnb-dark hover:underline">Terms</Link>
            <span className="hidden md:inline">·</span>
            <Link to="/" className="text-sm text-airbnb-dark hover:underline">Sitemap</Link>
          </div>
          
          <div className="flex items-center space-x-4 mt-4 md:mt-0">
            <button className="flex items-center text-sm font-medium text-airbnb-dark">
              <Globe className="h-4 w-4 mr-2" />
              English (US)
            </button>
            <button className="text-sm font-medium text-airbnb-dark">
              $ USD
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
