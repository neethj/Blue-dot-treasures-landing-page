import React from 'react';
import { Menu, X, Leaf } from 'lucide-react';

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);

  return (
    <header className="fixed w-full bg-navy-900/95 backdrop-blur-sm shadow-sm z-50">
      <nav className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-2">
            <Leaf className="h-8 w-8 text-blue-400" />
            <span className="text-2xl font-bold text-white">Blue Dot Earth</span>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <NavLinks />
            <button className="bg-blue-500 text-white px-6 py-2 rounded-full hover:bg-blue-600 transition-colors">
              Shop Now
            </button>
          </div>

          {/* Mobile Menu Button */}
          <button 
            className="md:hidden text-white"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X /> : <Menu />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden pt-4 pb-6">
            <div className="flex flex-col space-y-4">
              <NavLinks />
              <button className="bg-blue-500 text-white px-6 py-2 rounded-full hover:bg-blue-600 transition-colors">
                Shop Now
              </button>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
}

const NavLinks = () => (
  <>
    {['About Moringa', 'Benefits', 'Products', 'About Us'].map((item) => (
      <a
        key={item}
        href={`#${item.toLowerCase().replace(' ', '-')}`}
        className="text-gray-300 hover:text-blue-400 transition-colors"
      >
        {item}
      </a>
    ))}
  </>
);