
import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, User, Instagram, Facebook } from 'lucide-react';
import { SIMPLECONSIGN_LINK, INSTAGRAM_LINK, FACEBOOK_LINK, LOGO_PATH } from '../constants';

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  const navLinks = [
    { name: 'HOME', path: '/' },
    { name: 'NEW ARRIVALS', path: '/new-arrivals' },
    { name: 'ABOUT', path: '/about' },
    { name: 'CONTACT', path: '/contact' },
  ];

  const isActive = (path: string) => location.pathname === path;

  return (
    <nav className="sticky top-0 z-50 bg-white shadow-sm border-b border-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-28 items-center">
          {/* Official Logo */}
          <Link to="/" className="flex flex-col items-center group transition-transform hover:scale-[1.01]">
            <img
              src={LOGO_PATH}
              alt="Consigning Women Logo"
              className="h-20 w-auto object-contain"
            />
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center space-x-8">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                className={`text-[13px] font-bold tracking-[0.2em] hover:text-fuchsia-brand transition-all relative py-1 ${
                  isActive(link.path) ? 'text-fuchsia-brand' : 'text-gray-600'
                }`}
              >
                {link.name}
              </Link>
            ))}
            
            <a
              href={SIMPLECONSIGN_LINK}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 bg-fuchsia-brand text-white px-8 py-3.5 rounded-full text-xs font-bold shadow-lg hover:bg-[#AD1457] transition-all transform hover:-translate-y-0.5"
            >
              <User size={16} />
              MY ACCOUNT
            </a>

            <div className="flex items-center space-x-5 border-l border-gray-100 pl-8">
              <a href={INSTAGRAM_LINK} target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-fuchsia-brand transition-colors">
                <Instagram size={20} />
              </a>
              <a href={FACEBOOK_LINK} target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-fuchsia-brand transition-colors">
                <Facebook size={20} />
              </a>
            </div>
          </div>

          {/* Mobile menu button */}
          <div className="lg:hidden flex items-center">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-gray-600 hover:text-fuchsia-brand focus:outline-none p-2"
            >
              {isOpen ? <X size={28} /> : <Menu size={28} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Navigation */}
      {isOpen && (
        <div className="lg:hidden bg-white border-t border-gray-100 py-8 px-6 space-y-6 shadow-2xl absolute w-full top-[112px] left-0 animate-in fade-in slide-in-from-top-4 duration-300 z-50">
          {navLinks.map((link) => (
            <Link
              key={link.path}
              to={link.path}
              onClick={() => setIsOpen(false)}
              className={`block text-2xl font-serif font-bold tracking-tight ${
                isActive(link.path) ? 'text-fuchsia-brand' : 'text-gray-800'
              }`}
            >
              {link.name}
            </Link>
          ))}
          <a
            href={SIMPLECONSIGN_LINK}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-center gap-3 bg-fuchsia-brand text-white w-full py-5 rounded-2xl text-lg font-bold shadow-lg"
          >
            <User size={24} />
            MY ACCOUNT
          </a>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
