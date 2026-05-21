
import React from 'react';
import { Heart, Users, ShieldCheck, Sparkles } from 'lucide-react';
import SEO from '../components/SEO';

const About: React.FC = () => {
  return (
    <div className="bg-white">
      <SEO 
        title="About Our Atlanta Consignment Boutique"
        description="Learn about Consigning Women, Atlanta's premier upscale resale boutique. Over 15 years of experience in designer authenticity and sustainable luxury fashion."
        keywords="about consigning women, atlanta consignment history, designer resale experts atlanta, sustainable fashion atlanta"
      />
      {/* Hero Header */}
      <section className="bg-gray-50 py-24 border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-5xl md:text-7xl font-serif font-bold text-gray-900 mb-8">Our Atlanta Story</h1>
          <p className="text-xl text-gray-500 max-w-3xl mx-auto leading-relaxed italic">
            "We believe that every woman in Atlanta deserves to feel confident and stylish in high-quality designer fashion, regardless of the price tag."
          </p>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center mb-24">
            <div className="relative">
              <div className="aspect-[3/4] rounded-3xl overflow-hidden shadow-2xl relative z-10">
                <img 
                  src="https://images.unsplash.com/photo-1567401893414-76b7b1e5a7a5?q=80&w=800&auto=format&fit=crop" 
                  alt="Consigning Women Dunwoody Boutique" 
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="absolute -bottom-8 -right-8 w-64 h-64 bg-fuchsia-brand/5 rounded-full -z-0"></div>
              <div className="absolute -top-8 -left-8 w-48 h-48 bg-gray-100 rounded-3xl -z-0"></div>
            </div>
            <div>
              <h2 className="text-4xl font-serif font-bold text-gray-900 mb-8">Our Mission</h2>
              <p className="text-lg text-gray-600 leading-relaxed mb-6">
                At Consigning Women, quality and value are our foundation. We achieve these by continually providing the highest levels of service to our customers and consignors. Our employees are our most valued asset and through their contribution, we continue to build on our reputation of excellence.
              </p>
              <p className="text-lg text-gray-600 leading-relaxed mb-8">
                We actively participate in the communities in which we operate and serve them through donation and contributions.
              </p>
              <h2 className="text-4xl font-serif font-bold text-gray-900 mt-12 mb-8">Our Vision</h2>
              <p className="text-lg text-gray-600 leading-relaxed mb-6">
                Consigning Women is the benchmark for the consignment business. We create a unique shopping environment for customers and consignors that promotes an atmosphere of hospitality and engenders friendship so that everyone who visits can’t wait to return.
              </p>
            </div>
          </div>

          {/* Core Values */}
          <div className="grid grid-cols-1 md:grid-cols-4 gap-12">
            <div className="text-center">
              <div className="w-16 h-16 bg-fuchsia-brand text-white rounded-2xl flex items-center justify-center mx-auto mb-6 shadow-lg shadow-fuchsia-brand/20">
                <Heart size={32} />
              </div>
              <h4 className="text-xl font-serif font-bold text-gray-900 mb-3">Integrity</h4>
              <p className="text-gray-500 text-sm leading-relaxed">Honest pricing and transparent consignment practices are at the heart of everything we do.</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-fuchsia-brand text-white rounded-2xl flex items-center justify-center mx-auto mb-6 shadow-lg shadow-fuchsia-brand/20">
                <ShieldCheck size={32} />
              </div>
              <h4 className="text-xl font-serif font-bold text-gray-900 mb-3">Authenticity</h4>
              <p className="text-gray-500 text-sm leading-relaxed">We stand behind the authenticity of every designer piece with our multi-step verification process.</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-fuchsia-brand text-white rounded-2xl flex items-center justify-center mx-auto mb-6 shadow-lg shadow-fuchsia-brand/20">
                <Users size={32} />
              </div>
              <h4 className="text-xl font-serif font-bold text-gray-900 mb-3">Community</h4>
              <p className="text-gray-500 text-sm leading-relaxed">We empower local women by providing a sustainable way to refresh their luxury wardrobes.</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-fuchsia-brand text-white rounded-2xl flex items-center justify-center mx-auto mb-6 shadow-lg shadow-fuchsia-brand/20">
                <Sparkles size={32} />
              </div>
              <h4 className="text-xl font-serif font-bold text-gray-900 mb-3">Curated Quality</h4>
              <p className="text-gray-500 text-sm leading-relaxed">Only pieces in exceptional condition make it to our showroom floor, ensuring lasting value.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Quote Section */}
      <section className="bg-gray-900 py-24">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <p className="text-3xl md:text-4xl font-serif italic text-white leading-relaxed mb-8">
            "Style is a way to say who you are without having to speak. At Consigning Women, we help you find those perfect pieces that tell your unique story."
          </p>
          <div className="w-20 h-1 bg-fuchsia-brand mx-auto"></div>
        </div>
      </section>
    </div>
  );
};

export default About;
