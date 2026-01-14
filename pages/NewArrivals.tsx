
import React, { useState } from 'react';
// Added Link import from react-router-dom to fix name errors
import { Link } from 'react-router-dom';
import { Filter, ShoppingBag, ArrowRight } from 'lucide-react';
import { MOCK_PRODUCTS } from '../constants';

const NewArrivals: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState('All');
  const categories = ['All', 'Clothing', 'Handbags', 'Shoes', 'Accessories'];

  const filteredProducts = activeCategory === 'All' 
    ? MOCK_PRODUCTS 
    : MOCK_PRODUCTS.filter(p => p.category === activeCategory);

  return (
    <div className="bg-white min-h-screen py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-6xl font-serif font-bold text-gray-900 mb-6">New Arrivals</h1>
          <p className="text-xl text-gray-500 max-w-2xl mx-auto">
            Freshly added pieces from your favorite designer labels. Our inventory changes daily, so check back often!
          </p>
        </div>

        {/* Filter Tabs */}
        <div className="flex flex-wrap justify-center gap-2 mb-12">
          {categories.map(category => (
            <button
              key={category}
              onClick={() => setActiveCategory(category)}
              className={`px-6 py-2.5 rounded-full text-sm font-bold tracking-wider transition-all border ${
                activeCategory === category 
                  ? 'bg-fuchsia-brand text-white border-fuchsia-brand shadow-lg' 
                  : 'bg-white text-gray-600 border-gray-200 hover:border-fuchsia-brand hover:text-fuchsia-brand'
              }`}
            >
              {category.toUpperCase()}
            </button>
          ))}
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
          {filteredProducts.map((product) => (
            <div key={product.id} className="group relative">
              <div className="aspect-[4/5] overflow-hidden rounded-2xl bg-gray-100 relative shadow-md">
                <img 
                  src={product.image} 
                  alt={product.name}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute top-4 left-4">
                  <span className="bg-white/90 backdrop-blur px-3 py-1 rounded-md text-[10px] font-bold uppercase tracking-widest shadow-sm">
                    {product.brand}
                  </span>
                </div>
                <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                  <button className="bg-white text-gray-900 px-6 py-3 rounded-full font-bold shadow-xl transform translate-y-4 group-hover:translate-y-0 transition-transform">
                    View Details
                  </button>
                </div>
              </div>
              <div className="mt-6">
                <div className="flex justify-between items-start mb-1">
                  <h3 className="text-lg font-serif font-bold text-gray-900">{product.name}</h3>
                  <div className="text-right">
                    <p className="text-fuchsia-brand font-bold">${product.price}</p>
                    {product.originalPrice && (
                      <p className="text-xs text-gray-400 line-through font-medium">Est. Ret. ${product.originalPrice}</p>
                    )}
                  </div>
                </div>
                <div className="flex items-center gap-2 text-xs text-gray-400 uppercase tracking-widest font-bold">
                  <span>Size {product.size}</span>
                  <span>•</span>
                  <span>{product.category}</span>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Empty State */}
        {filteredProducts.length === 0 && (
          <div className="text-center py-24 bg-gray-50 rounded-3xl">
            <ShoppingBag size={48} className="mx-auto text-gray-300 mb-4" />
            <h3 className="text-xl font-serif font-bold text-gray-900 mb-2">No items found</h3>
            <p className="text-gray-500">We don't have any items in this category right now. Check back soon!</p>
          </div>
        )}

        {/* Call to Action */}
        <div className="mt-24 p-12 rounded-3xl bg-gray-900 text-white relative overflow-hidden">
          <div className="relative z-10 flex flex-col md:flex-row items-center justify-between gap-8">
            <div className="text-center md:text-left">
              <h2 className="text-3xl md:text-4xl font-serif font-bold mb-4">Have something to consign?</h2>
              <p className="text-gray-400 text-lg max-w-xl">
                Join our community of stylish consignors. We offer great rates and a hassle-free selling experience for your designer treasures.
              </p>
            </div>
            <Link 
              to="/contact" 
              className="bg-fuchsia-brand text-white px-10 py-5 rounded-full text-lg font-bold shadow-lg hover:bg-[#AD1457] transition-all whitespace-nowrap flex items-center gap-2 group"
            >
              CONSIGN WITH US
              <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>
          <div className="absolute top-0 right-0 w-64 h-64 bg-fuchsia-brand/20 blur-[100px]"></div>
        </div>
      </div>
    </div>
  );
};

export default NewArrivals;
