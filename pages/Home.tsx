
import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Star, ShoppingBag, MapPin, CheckCircle2 } from 'lucide-react';
import { BRANDS, MOCK_REVIEWS, LOCATION_INFO } from '../constants';

const Home: React.FC = () => {
  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section className="relative h-[85vh] min-h-[600px] flex items-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img 
            src="https://images.unsplash.com/photo-1490481651871-ab68de25d43d?q=80&w=2000&auto=format&fit=crop" 
            alt="Upscale Fashion Background" 
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-white/40 md:bg-gradient-to-r md:from-white/95 md:via-white/60 md:to-transparent"></div>
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
          <div className="max-w-xl animate-in fade-in slide-in-from-left-8 duration-1000">
            <h1 className="text-5xl md:text-7xl font-serif font-bold text-gray-900 leading-tight mb-6">
              Great designers.<br />
              <span className="text-fuchsia-brand italic">Great prices.</span>
            </h1>
            <p className="text-xl text-gray-700 mb-10 leading-relaxed font-medium">
              Discover the joy of upscale resale. Curated designer pieces for the modern woman who values quality and timeless style.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link 
                to="/new-arrivals" 
                className="bg-fuchsia-brand text-white px-8 py-5 rounded-full text-lg font-bold shadow-xl hover:bg-[#AD1457] transition-all flex items-center justify-center gap-2 group"
              >
                SHOP NEW ARRIVALS
                <ArrowRight className="group-hover:translate-x-1 transition-transform" />
              </Link>
              <Link 
                to="/about" 
                className="bg-white text-gray-800 border-2 border-gray-200 px-8 py-5 rounded-full text-lg font-bold hover:bg-gray-50 transition-all text-center"
              >
                OUR STORY
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Brand Strip */}
      <section className="bg-gray-50 py-12 border-y border-gray-100">
        <div className="max-w-7xl mx-auto px-4">
          <p className="text-center text-xs font-bold text-gray-400 uppercase tracking-[0.3em] mb-8">Featured Designer Brands</p>
          <div className="flex flex-wrap justify-center gap-8 md:gap-16 items-center opacity-60">
            {BRANDS.slice(0, 8).map(brand => (
              <span key={brand} className="text-xl md:text-2xl font-serif text-gray-800 whitespace-nowrap">{brand}</span>
            ))}
          </div>
        </div>
      </section>

      {/* Value Propositions */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            <div className="text-center p-8 rounded-3xl bg-gray-50/50 border border-gray-50 hover:shadow-xl hover:shadow-gray-200/50 transition-all duration-500">
              <div className="w-16 h-16 bg-fuchsia-brand/10 text-fuchsia-brand rounded-2xl flex items-center justify-center mx-auto mb-8">
                <ShoppingBag size={32} />
              </div>
              <h3 className="text-2xl font-serif font-bold text-gray-900 mb-4">Curated Selection</h3>
              <p className="text-gray-600 leading-relaxed">We hand-select every item to ensure it meets our high standards for quality, condition, and style.</p>
            </div>
            <div className="text-center p-8 rounded-3xl bg-gray-50/50 border border-gray-50 hover:shadow-xl hover:shadow-gray-200/50 transition-all duration-500">
              <div className="w-16 h-16 bg-fuchsia-brand/10 text-fuchsia-brand rounded-2xl flex items-center justify-center mx-auto mb-8">
                <CheckCircle2 size={32} />
              </div>
              <h3 className="text-2xl font-serif font-bold text-gray-900 mb-4">Guaranteed Authentic</h3>
              <p className="text-gray-600 leading-relaxed">Shop with confidence. Our experts verify the authenticity of all designer pieces we carry.</p>
            </div>
            <div className="text-center p-8 rounded-3xl bg-gray-50/50 border border-gray-50 hover:shadow-xl hover:shadow-gray-200/50 transition-all duration-500">
              <div className="w-16 h-16 bg-fuchsia-brand/10 text-fuchsia-brand rounded-2xl flex items-center justify-center mx-auto mb-8">
                <MapPin size={32} />
              </div>
              <h3 className="text-2xl font-serif font-bold text-gray-900 mb-4">Local Community</h3>
              <p className="text-gray-600 leading-relaxed">A beloved fixture in the Atlanta community, supporting local women and sustainable fashion.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Reviews Section */}
      <section className="py-24 bg-fuchsia-brand text-white overflow-hidden relative">
        <div className="absolute top-0 right-0 -translate-y-1/2 translate-x-1/2 w-96 h-96 bg-white/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 left-0 translate-y-1/2 -translate-x-1/2 w-96 h-96 bg-white/10 rounded-full blur-3xl"></div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-serif font-bold mb-4">What Our Clients Say</h2>
            <div className="flex justify-center gap-1 text-white">
              {[...Array(5)].map((_, i) => <Star key={i} fill="currentColor" size={24} />)}
            </div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {MOCK_REVIEWS.map((review) => (
              <div key={review.id} className="bg-white/10 backdrop-blur-md p-8 rounded-3xl border border-white/20">
                <p className="text-lg italic mb-6 leading-relaxed">"{review.text}"</p>
                <div className="flex justify-between items-center">
                  <span className="font-bold text-lg">— {review.author}</span>
                  <span className="text-sm opacity-60 uppercase tracking-widest">{review.date}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Visit Us Section */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div className="rounded-3xl overflow-hidden shadow-2xl h-[500px]">
              <iframe 
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3314.123456789!2d-84.3!3d33.8!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x88f5060000000001%3A0x0000000000000000!2s2508%20Shallowford%20Rd%20NE%2C%20Atlanta%20GA%2030345!5e0!3m2!1sen!2sus!4v1700000000000" 
                width="100%" 
                height="100%" 
                style={{ border: 0 }} 
                allowFullScreen={true} 
                loading="lazy" 
                referrerPolicy="no-referrer-when-downgrade"
                title="Consigning Women Location"
              ></iframe>
            </div>
            <div>
              <h2 className="text-4xl font-serif font-bold text-gray-900 mb-6">Visit Our Boutique</h2>
              <p className="text-xl text-gray-600 mb-10 leading-relaxed">
                Experience upscale resale in person. Our boutique offers a curated shopping experience in a warm, welcoming environment.
              </p>
              <div className="space-y-6 mb-12">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-xl bg-gray-50 flex items-center justify-center text-fuchsia-brand border border-gray-100">
                    <MapPin size={24} />
                  </div>
                  <div>
                    <h4 className="font-bold text-gray-900 uppercase tracking-widest text-sm mb-1">Address</h4>
                    <p className="text-gray-600">{LOCATION_INFO.address}, {LOCATION_INFO.city}, {LOCATION_INFO.state} {LOCATION_INFO.zip}</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-xl bg-gray-50 flex items-center justify-center text-fuchsia-brand border border-gray-100">
                    <ShoppingBag size={24} />
                  </div>
                  <div>
                    <h4 className="font-bold text-gray-900 uppercase tracking-widest text-sm mb-1">Store Hours</h4>
                    <ul className="text-gray-600 text-sm">
                      {Object.entries(LOCATION_INFO.hours).map(([day, hours]) => (
                        <li key={day} className="flex justify-between w-64 mb-1">
                          <span className="font-medium">{day}:</span>
                          <span>{hours}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
              <a 
                href={`https://www.google.com/maps/dir/?api=1&destination=${encodeURIComponent(LOCATION_INFO.address + ' ' + LOCATION_INFO.city)}`}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block bg-gray-900 text-white px-10 py-5 rounded-full text-lg font-bold hover:bg-black transition-all shadow-lg shadow-gray-200"
              >
                GET DIRECTIONS
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
