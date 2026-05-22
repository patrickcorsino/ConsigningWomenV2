
import React from 'react';
import { Link } from 'react-router-dom';
import { MapPin, Phone, Mail, Instagram, Facebook, Heart } from 'lucide-react';
import { LOCATION_INFO, INSTAGRAM_LINK, FACEBOOK_LINK, LOGO_PATH, SIMPLECONSIGN_LINK } from '../constants';

const Footer: React.FC = () => {
  return (
    <footer className="bg-white border-t border-gray-100 pt-24 pb-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-16 mb-20">
          {/* Brand Column */}
          <div className="col-span-1 md:col-span-1">
            <Link to="/" className="flex flex-col items-start mb-10 group">
              <img
                src={LOGO_PATH}
                alt="Consigning Women Logo"
                className="h-16 w-auto object-contain mb-2"
              />
              <span className="text-[10px] uppercase tracking-[0.3em] font-bold text-gray-400">
                Upscale Resale
              </span>
            </Link>
            <p className="text-gray-500 text-sm leading-relaxed mb-10 font-medium">
              Atlanta's first choice for clothing consignment. Serving Dunwoody, Sandy Springs, and the greater Atlanta area with high-quality designer labels.
            </p>
            <div className="flex space-x-5">
              <a href={INSTAGRAM_LINK} target="_blank" rel="noopener noreferrer" className="w-12 h-12 rounded-full bg-gray-50 flex items-center justify-center text-gray-400 hover:bg-fuchsia-brand hover:text-white transition-all shadow-sm border border-gray-100">
                <Instagram size={22} />
              </a>
              <a href={FACEBOOK_LINK} target="_blank" rel="noopener noreferrer" className="w-12 h-12 rounded-full bg-gray-50 flex items-center justify-center text-gray-400 hover:bg-fuchsia-brand hover:text-white transition-all shadow-sm border border-gray-100">
                <Facebook size={22} />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-serif text-2xl font-bold text-gray-900 mb-10 tracking-wider">Explore</h4>
            <ul className="space-y-5 text-[11px] font-bold text-gray-500 tracking-[0.2em] uppercase">
              <li><Link to="/" className="hover:text-fuchsia-brand transition-colors">HOME</Link></li>
              <li><Link to="/new-arrivals" className="hover:text-fuchsia-brand transition-colors">NEW ARRIVALS</Link></li>
              <li><Link to="/consign" className="hover:text-fuchsia-brand transition-colors">CONSIGN WITH US</Link></li>
              <li><Link to="/about" className="hover:text-fuchsia-brand transition-colors">ABOUT US</Link></li>
              <li><Link to="/contact" className="hover:text-fuchsia-brand transition-colors">CONTACT</Link></li>
              <li><a href={SIMPLECONSIGN_LINK} target="_blank" rel="noopener noreferrer" className="hover:text-fuchsia-brand transition-colors">MY ACCOUNT</a></li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="font-serif text-2xl font-bold text-gray-900 mb-10 tracking-wider">Connect</h4>
            <ul className="space-y-6 text-sm font-medium text-gray-500">
              <li className="flex items-start gap-4">
                <MapPin size={24} className="text-fuchsia-brand shrink-0" />
                <span className="leading-relaxed">{LOCATION_INFO.address}<br />{LOCATION_INFO.city}, {LOCATION_INFO.state} {LOCATION_INFO.zip}</span>
              </li>
              <li className="flex items-center gap-4">
                <Phone size={24} className="text-fuchsia-brand shrink-0" />
                <span className="text-gray-900 font-bold text-lg">{LOCATION_INFO.phone}</span>
              </li>
              <li className="flex items-center gap-4">
                <Mail size={24} className="text-fuchsia-brand shrink-0" />
                <a href={`mailto:${LOCATION_INFO.email}`} className="break-all hover:text-fuchsia-brand transition-colors">{LOCATION_INFO.email}</a>
              </li>
            </ul>
          </div>

          {/* Hours */}
          <div>
            <h4 className="font-serif text-2xl font-bold text-gray-900 mb-10 tracking-wider">Visit Us</h4>
            <ul className="space-y-4 text-sm font-medium text-gray-500">
              {Object.entries(LOCATION_INFO.hours).map(([day, hours]) => (
                <li key={day} className="flex justify-between border-b border-gray-50 pb-3">
                  <span className="text-gray-400 font-bold uppercase tracking-widest text-[10px]">{day}</span>
                  <span className="text-gray-900 font-bold">{hours}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="pt-12 border-t border-gray-100 flex flex-col md:flex-row justify-between items-center text-[10px] text-gray-400 font-bold tracking-[0.2em] uppercase">
          <p>© {new Date().getFullYear()} Consigning Women Boutique. All rights reserved.</p>
          <p className="mt-6 md:mt-0 flex items-center gap-3">
            Made with <Heart size={14} className="text-fuchsia-brand fill-fuchsia-brand" /> for women who love style.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
