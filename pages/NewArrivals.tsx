import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Instagram, MapPin } from 'lucide-react';
import { INSTAGRAM_LINK, LOCATION_INFO } from '../constants';
import SEO from '../components/SEO';

// Featured posts from @consigningwomen.atlanta, ordered newest → oldest.
// To refresh: replace any shortcode with a newer one from instagram.com/p/<shortcode>.
const FEATURED_POSTS = [
  'DaLv8kBoOW4',
  'DaEBE8PKwD_',
  'DaEAfoaIf0B',
  'DaEACaeGRN2',
  'DaBdhVjIB5l',
  'DZ582_Voyvz',
  'DZ5sUFKoOxv',
  'DZ5rqz3Irqk',
  'DZ5Qr7OIva3',
];

declare global {
  interface Window {
    instgrm?: { Embeds: { process: () => void } };
  }
}

const NewArrivals: React.FC = () => {
  // Load Instagram's embed script once; (re)process the blockquotes so they
  // transform into rendered post cards. Idempotent across re-mounts.
  useEffect(() => {
    const SRC = 'https://www.instagram.com/embed.js';
    const existing = document.querySelector<HTMLScriptElement>(`script[src="${SRC}"]`);
    if (existing) {
      window.instgrm?.Embeds.process();
      return;
    }
    const script = document.createElement('script');
    script.src = SRC;
    script.async = true;
    script.onload = () => window.instgrm?.Embeds.process();
    document.body.appendChild(script);
  }, []);

  return (
    <div className="bg-white min-h-screen py-16">
      <SEO
        title="New Designer Arrivals | Chanel, Hermès & Gucci Resale Dunwoody"
        description="See the latest designer arrivals at Consigning Women Dunwoody — authentic Chanel, Hermès, Gucci, Louis Vuitton, Burberry and more, posted to Instagram from our Dunwoody floor."
        keywords="new arrivals consignment dunwoody, designer handbags dunwoody, chanel resale atlanta, hermes consignment dunwoody, gucci resale atlanta, luxury fashion dunwoody ga"
      />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <span className="inline-block text-[11px] font-bold tracking-[0.3em] text-fuchsia-brand uppercase mb-5">
            Fresh from the floor
          </span>
          <h1 className="text-4xl md:text-6xl font-serif font-bold text-gray-900 mb-6">
            New Designer Arrivals
          </h1>
          <p className="text-xl text-gray-500 max-w-2xl mx-auto leading-relaxed">
            Authentic Chanel, Hermès, Gucci, Louis Vuitton, Burberry and more — straight from our
            Dunwoody boutique. Follow{' '}
            <a
              href={INSTAGRAM_LINK}
              target="_blank"
              rel="noopener noreferrer"
              className="text-fuchsia-brand font-bold hover:underline"
            >
              @consigningwomen.atlanta
            </a>{' '}
            to see every new piece the moment it lands.
          </p>
        </div>

        {/* Instagram grid */}
        <div className="mb-20">
          <div className="flex items-center justify-between mb-8">
            <div className="flex items-center gap-3">
              <Instagram size={28} className="text-fuchsia-brand" />
              <h2 className="text-2xl font-serif font-bold text-gray-900">
                Featured Pieces from Instagram
              </h2>
            </div>
            <a
              href={INSTAGRAM_LINK}
              target="_blank"
              rel="noopener noreferrer"
              className="hidden sm:inline-flex items-center gap-2 text-sm font-bold text-fuchsia-brand hover:text-[#AD1457] transition-colors uppercase tracking-widest"
            >
              See All on Instagram <ArrowRight size={16} />
            </a>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 items-start">
            {FEATURED_POSTS.map((shortcode) => (
              <blockquote
                key={shortcode}
                className="instagram-media"
                data-instgrm-permalink={`https://www.instagram.com/p/${shortcode}/`}
                data-instgrm-version="14"
                style={{
                  background: '#FFF',
                  border: 0,
                  borderRadius: '12px',
                  boxShadow:
                    '0 0 1px 0 rgba(0,0,0,0.08), 0 4px 16px 0 rgba(0,0,0,0.08)',
                  margin: 0,
                  maxWidth: '540px',
                  minWidth: 'unset',
                  padding: 0,
                  width: '100%',
                }}
              >
                <a
                  href={`https://www.instagram.com/p/${shortcode}/`}
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{ padding: '16px', display: 'block', textAlign: 'center' }}
                >
                  View this post on Instagram
                </a>
              </blockquote>
            ))}
          </div>

          {/* Mobile-friendly "see all" link under the grid */}
          <div className="sm:hidden text-center mt-10">
            <a
              href={INSTAGRAM_LINK}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-sm font-bold text-fuchsia-brand uppercase tracking-widest"
            >
              See All on Instagram <ArrowRight size={16} />
            </a>
          </div>
        </div>

        {/* Visit Store CTA */}
        <div className="rounded-3xl bg-gray-50 p-10 md:p-16 mb-16 text-center border border-gray-100">
          <MapPin size={40} className="mx-auto text-fuchsia-brand mb-6" />
          <h2 className="text-3xl md:text-4xl font-serif font-bold text-gray-900 mb-4">
            See It All In Person
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto mb-8 leading-relaxed">
            Instagram only shows the highlights. Our full inventory — designer handbags, denim,
            dresses, shoes, accessories and more — changes daily. Visit us at{' '}
            {LOCATION_INFO.address}, {LOCATION_INFO.city}, {LOCATION_INFO.state} to see everything.
          </p>
          <a
            href={LOCATION_INFO.mapLink}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block bg-gray-900 text-white px-10 py-5 rounded-full text-lg font-bold hover:bg-black transition-all shadow-lg"
          >
            GET DIRECTIONS
          </a>
        </div>

        {/* Consign CTA */}
        <div className="p-12 rounded-3xl bg-gray-900 text-white relative overflow-hidden">
          <div className="relative z-10 flex flex-col md:flex-row items-center justify-between gap-8">
            <div className="text-center md:text-left">
              <h2 className="text-3xl md:text-4xl font-serif font-bold mb-4">
                Have designer pieces to consign?
              </h2>
              <p className="text-gray-400 text-lg max-w-xl leading-relaxed">
                Earn 40% on every sale at Atlanta's locally women-owned upscale boutique. See our
                full terms, accepted brands, and how the process works.
              </p>
            </div>
            <Link
              to="/consign"
              className="bg-fuchsia-brand text-white px-10 py-5 rounded-full text-lg font-bold shadow-lg hover:bg-[#AD1457] transition-all whitespace-nowrap flex items-center gap-2 group"
            >
              CONSIGN WITH US
              <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>
          <div className="absolute top-0 right-0 w-64 h-64 bg-fuchsia-brand/20 blur-[100px]" />
        </div>
      </div>
    </div>
  );
};

export default NewArrivals;
