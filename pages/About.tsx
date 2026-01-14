
import React from 'react';
import { Heart, Users, ShieldCheck, Sparkles } from 'lucide-react';

const About: React.FC = () => {
  return (
    <div className="bg-white">
      {/* Hero Header */}
      <section className="bg-gray-50 py-24 border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-5xl md:text-7xl font-serif font-bold text-gray-900 mb-8">Our Story</h1>
          <p className="text-xl text-gray-500 max-w-3xl mx-auto leading-relaxed italic">
            "We believe that every woman deserves to feel confident and stylish in high-quality designer fashion, regardless of the price tag."
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
                  alt="Inside our boutique" 
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="absolute -bottom-8 -right-8 w-64 h-64 bg-fuchsia-brand/5 rounded-full -z-0"></div>
              <div className="absolute -top-8 -left-8 w-48 h-48 bg-gray-100 rounded-3xl -z-0"></div>
            </div>
            <div>
              <h2 className="text-4xl font-serif font-bold text-gray-900 mb-8">Elegance Redefined</h2>
              <p className="text-lg text-gray-600 leading-relaxed mb-6">
                Consigning Women has been a cornerstone of the Atlanta fashion community for years. Founded with a passion for sustainable luxury, we've created a space where high-end fashion finds its next life.
              </p>
              <p className="text-lg text-gray-600 leading-relaxed mb-8">
                Our team of curators brings decades of experience in designer authenticity and fashion trends. We pride ourselves on offering only the finest current and vintage luxury pieces, from iconic handbags to seasonal wardrobe staples.
              </p>
              <div className="grid grid-cols-2 gap-8">
                <div className="flex flex-col gap-3">
                  <div className="text-3xl font-serif font-bold text-fuchsia-brand">15+</div>
                  <div className="text-sm font-bold text-gray-400 uppercase tracking-widest">Years of Excellence</div>
                </div>
                <div className="flex flex-col gap-3">
                  <div className="text-3xl font-serif font-bold text-fuchsia-brand">10k+</div>
                  <div className="text-sm font-bold text-gray-400 uppercase tracking-widest">Items Sold Yearly</div>
                </div>
              </div>
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
