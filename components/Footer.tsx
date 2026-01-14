
import React from 'react';
import { Link } from 'react-router-dom';
import { MapPin, Phone, Mail, Instagram, Facebook, Heart } from 'lucide-react';
import { LOCATION_INFO, INSTAGRAM_LINK, FACEBOOK_LINK } from '../constants';

const Footer: React.FC = () => {
  return (
    <footer className="bg-white border-t border-gray-100 pt-20 pb-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-16 mb-16">
          {/* Brand Column */}
          <div className="col-span-1 md:col-span-1">
            <Link to="/" className="flex flex-col items-start mb-8 group">
              <div className="flex items-baseline gap-1">
                <span className="text-2xl font-serif font-bold text-gray-800 tracking-tight group-hover:text-black transition-colors">
                  Consigning
                </span>
                <span className="text-3xl font-script text-fuchsia-brand">
                  Women
                </span>
              </div>
              <span className="text-[9px] uppercase tracking-[0.3em] font-bold text-gray-400 mt-1">
                Upscale Resale Boutique
              </span>
            </Link>
            <p className="text-gray-500 text-sm leading-relaxed mb-8 font-medium">
              Empowering women through sustainable luxury fashion. Discover curated designer pieces that celebrate your unique style.
            </p>
            <div className="flex space-x-4">
              <a href={INSTAGRAM_LINK} target="_blank" rel="noopener noreferrer" className="w-12 h-12 rounded-full bg-gray-50 flex items-center justify-center text-gray-400 hover:bg-fuchsia-brand hover:text-white transition-all shadow-sm">
                <Instagram size={20} />
              </a>
              <a href={FACEBOOK_LINK} target="_blank" rel="noopener noreferrer" className="w-12 h-12 rounded-full bg-gray-50 flex items-center justify-center text-gray-400 hover:bg-fuchsia-brand hover:text-white transition-all shadow-sm">
                <Facebook size={20} />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-serif text-xl font-bold text-gray-900 mb-8 uppercase tracking-widest">Explore</h4>
            <ul className="space-y-4 text-sm font-bold text-gray-500 tracking-wider">
              <li><Link to="/" className="hover:text-fuchsia-brand transition-colors">HOME</Link></li>
              <li><Link to="/new-arrivals" className="hover:text-fuchsia-brand transition-colors">NEW ARRIVALS</Link></li>
              <li><Link to="/about" className="hover:text-fuchsia-brand transition-colors">ABOUT US</Link></li>
              <li><Link to="/contact" className="hover:text-fuchsia-brand transition-colors">CONTACT</Link></li>
              <li><a href="https://www.simpleconsign.com/customer/login.php?id=consigningwomen" className="hover:text-fuchsia-brand transition-colors">CONSIGNOR LOGIN</a></li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="font-serif text-xl font-bold text-gray-900 mb-8 uppercase tracking-widest">Contact</h4>
            <ul className="space-y-5 text-sm font-medium text-gray-500">
              <li className="flex items-start gap-4">
                <MapPin size={22} className="text-fuchsia-brand shrink-0" />
                <span className="leading-relaxed">{LOCATION_INFO.address}<br />{LOCATION_INFO.city}, {LOCATION_INFO.state} {LOCATION_INFO.zip}</span>
              </li>
              <li className="flex items-center gap-4">
                <Phone size={22} className="text-fuchsia-brand shrink-0" />
                <span className="text-gray-900 font-bold">{LOCATION_INFO.phone}</span>
              </li>
              <li className="flex items-center gap-4">
                <Mail size={22} className="text-fuchsia-brand shrink-0" />
                <span className="break-all">info@consigningwomenatlanta.com</span>
              </li>
            </ul>
          </div>

          {/* Hours */}
          <div>
            <h4 className="font-serif text-xl font-bold text-gray-900 mb-8 uppercase tracking-widest">Boutique Hours</h4>
            <ul className="space-y-3 text-sm font-medium text-gray-500">
              {Object.entries(LOCATION_INFO.hours).map(([day, hours]) => (
                <li key={day} className="flex justify-between border-b border-gray-50 pb-2">
                  <span className="text-gray-400">{day}</span>
                  <span className="text-gray-900 font-bold">{hours}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="pt-10 border-t border-gray-50 flex flex-col md:flex-row justify-between items-center text-[11px] text-gray-400 font-bold tracking-[0.1em] uppercase">
          <p>© {new Date().getFullYear()} Consigning Women Upscale Resale Boutique.</p>
          <p className="mt-4 md:mt-0 flex items-center gap-2">
            Made with <Heart size={14} className="text-fuchsia-brand fill-fuchsia-brand" /> for women who love style.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
