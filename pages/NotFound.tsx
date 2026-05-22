import React from 'react';
import { Link } from 'react-router-dom';
import { Home, ShoppingBag } from 'lucide-react';
import SEO from '../components/SEO';

const NotFound: React.FC = () => {
  return (
    <div className="bg-white min-h-[70vh] flex items-center">
      <SEO
        title="Page Not Found | Consigning Women"
        description="The page you're looking for doesn't exist. Visit our home page or browse new arrivals at Consigning Women in Dunwoody."
      />
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center py-24">
        <p className="text-fuchsia-brand font-bold uppercase tracking-[0.3em] text-sm mb-4">404 — Page Not Found</p>
        <h1 className="text-5xl md:text-7xl font-serif font-bold text-gray-900 mb-8">
          We couldn't find that page.
        </h1>
        <p className="text-xl text-gray-500 mb-12 max-w-xl mx-auto">
          The page may have moved or never existed. Head back to our home page or explore the latest arrivals.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link
            to="/"
            className="bg-fuchsia-brand text-white px-8 py-4 rounded-full text-lg font-bold shadow-xl hover:bg-[#AD1457] transition-all flex items-center justify-center gap-2"
          >
            <Home size={20} /> Back to Home
          </Link>
          <Link
            to="/new-arrivals"
            className="bg-white text-gray-800 border-2 border-gray-200 px-8 py-4 rounded-full text-lg font-bold hover:bg-gray-50 transition-all flex items-center justify-center gap-2"
          >
            <ShoppingBag size={20} /> See New Arrivals
          </Link>
        </div>
      </div>
    </div>
  );
};

export default NotFound;
