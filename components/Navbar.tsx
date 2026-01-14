
import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, User, Instagram, Facebook } from 'lucide-react';
import { SIMPLECONSIGN_LINK, INSTAGRAM_LINK, FACEBOOK_LINK } from '../constants';

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
        <div className="flex justify-between h-24 items-center">
          {/* Logo - Updated to match branding */}
          <Link to="/" className="flex flex-col items-center group">
            <div className="flex items-baseline gap-1">
              <span className="text-3xl font-serif font-bold text-gray-800 tracking-tight leading-none group-hover:text-black transition-colors">
                Consigning
              </span>
              <span className="text-4xl font-script text-fuchsia-brand leading-none">
                Women
              </span>
            </div>
            <span className="text-[10px] uppercase tracking-[0.3em] font-bold text-gray-400 mt-1">
              Upscale Resale Boutique
            </span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                className={`text-sm font-bold tracking-widest hover:text-fuchsia-brand transition-colors ${
                  isActive(link.path) ? 'text-fuchsia-brand border-b-2 border-fuchsia-brand pb-1' : 'text-gray-600'
                }`}
              >
                {link.name}
              </Link>
            ))}
            
            <a
              href={SIMPLECONSIGN_LINK}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 bg-fuchsia-brand text-white px-6 py-3 rounded-full text-xs font-bold shadow-lg hover:bg-[#AD1457] transition-all transform hover:scale-105"
            >
              <User size={16} />
              CONSIGNOR LOGIN
            </a>

            <div className="flex items-center space-x-4 border-l border-gray-200 pl-6 ml-2">
              <a href={INSTAGRAM_LINK} target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-fuchsia-brand transition-colors">
                <Instagram size={20} />
              </a>
              <a href={FACEBOOK_LINK} target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-fuchsia-brand transition-colors">
                <Facebook size={20} />
              </a>
            </div>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden flex items-center">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-gray-600 hover:text-fuchsia-brand focus:outline-none p-2"
              aria-label="Toggle Menu"
            >
              {isOpen ? <X size={28} /> : <Menu size={28} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Navigation */}
      {isOpen && (
        <div className="md:hidden bg-white border-t border-gray-100 py-6 px-6 space-y-6 shadow-2xl absolute w-full top-24 left-0 animate-in fade-in slide-in-from-top-4 duration-300">
          {navLinks.map((link) => (
            <Link
              key={link.path}
              to={link.path}
              onClick={() => setIsOpen(false)}
              className={`block text-xl font-bold tracking-tight ${
                isActive(link.path) ? 'text-fuchsia-brand' : 'text-gray-700'
              }`}
            >
              {link.name}
            </Link>
          ))}
          <a
            href={SIMPLECONSIGN_LINK}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-center gap-3 bg-fuchsia-brand text-white w-full py-5 rounded-2xl text-lg font-bold shadow-md"
          >
            <User size={20} />
            CONSIGNOR LOGIN
          </a>
          <div className="flex justify-center space-x-10 pt-6 border-t border-gray-100">
            <a href={INSTAGRAM_LINK} target="_blank" rel="noopener noreferrer" className="text-gray-500">
              <Instagram size={28} />
            </a>
            <a href={FACEBOOK_LINK} target="_blank" rel="noopener noreferrer" className="text-gray-500">
              <Facebook size={28} />
            </a>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
