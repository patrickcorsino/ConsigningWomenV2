import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Instagram, MapPin } from 'lucide-react';
import { INSTAGRAM_LINK, LOCATION_INFO } from '../constants';
import SEO from '../components/SEO';

// SETUP: Generate a free LightWidget at https://lightwidget.com/
// using the @consigningwomen.atlanta handle, then paste the widget ID below.
// The current placeholder will display a setup screen until replaced.
const LIGHTWIDGET_ID = 'REPLACE_WITH_YOUR_WIDGET_ID';

const NewArrivals: React.FC = () => {
  const widgetConfigured = LIGHTWIDGET_ID !== 'REPLACE_WITH_YOUR_WIDGET_ID';

  return (
    <div className="bg-white min-h-screen py-16">
      <SEO
        title="New Arrivals | Designer Consignment Dunwoody"
        description="See the latest designer arrivals at Consigning Women in Dunwoody. Fresh inventory of luxury handbags, clothing, and accessories — updated daily on our Instagram."
        keywords="new arrivals consignment dunwoody, designer resale arrivals atlanta, luxury fashion resale dunwoody, fresh consignment stock atlanta"
      />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-6xl font-serif font-bold text-gray-900 mb-6">New Designer Arrivals</h1>
          <p className="text-xl text-gray-500 max-w-2xl mx-auto">
            Fresh pieces hit our floor every day. Follow along on Instagram for the latest finds — or visit our Dunwoody boutique to see the full selection in person.
          </p>
        </div>

        {/* Instagram Feed */}
        <div className="mb-16">
          <div className="flex items-center justify-between mb-8">
            <div className="flex items-center gap-3">
              <Instagram size={28} className="text-fuchsia-brand" />
              <h2 className="text-2xl font-serif font-bold text-gray-900">Latest from @consigningwomen.atlanta</h2>
            </div>
            <a
              href={INSTAGRAM_LINK}
              target="_blank"
              rel="noopener noreferrer"
              className="hidden sm:inline-flex items-center gap-2 text-sm font-bold text-fuchsia-brand hover:text-[#AD1457] transition-colors uppercase tracking-widest"
            >
              Follow Us <ArrowRight size={16} />
            </a>
          </div>

          {widgetConfigured ? (
            <div className="rounded-3xl overflow-hidden border border-gray-100 bg-gray-50/50">
              <iframe
                src={`https://cdn.lightwidget.com/widgets/${LIGHTWIDGET_ID}.html`}
                scrolling="no"
                allowTransparency={true}
                className="lightwidget-widget"
                style={{ width: '100%', border: 0, overflow: 'hidden', minHeight: '600px' }}
                title="Instagram feed: latest arrivals at Consigning Women"
              />
            </div>
          ) : (
            <div className="rounded-3xl border-2 border-dashed border-gray-200 bg-gray-50 p-16 text-center">
              <Instagram size={48} className="mx-auto text-gray-300 mb-6" />
              <h3 className="text-xl font-serif font-bold text-gray-900 mb-3">Instagram Feed Setup Needed</h3>
              <p className="text-gray-500 mb-2 max-w-xl mx-auto">
                Generate a free widget at <span className="font-mono text-sm">lightwidget.com</span> using the
                <span className="font-bold"> @consigningwomen.atlanta </span>handle, then paste the widget ID into
                <span className="font-mono text-sm"> pages/NewArrivals.tsx</span>.
              </p>
              <a
                href={INSTAGRAM_LINK}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 mt-6 bg-fuchsia-brand text-white px-8 py-4 rounded-full font-bold text-sm uppercase tracking-widest hover:bg-[#AD1457] transition-all"
              >
                <Instagram size={18} /> View on Instagram
              </a>
            </div>
          )}
        </div>

        {/* Visit Store CTA */}
        <div className="rounded-3xl bg-gray-50 p-10 md:p-16 mb-16 text-center border border-gray-100">
          <MapPin size={40} className="mx-auto text-fuchsia-brand mb-6" />
          <h2 className="text-3xl md:text-4xl font-serif font-bold text-gray-900 mb-4">See It All In Person</h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto mb-8">
            Our full inventory changes daily. Visit the boutique at {LOCATION_INFO.address}, {LOCATION_INFO.city}, {LOCATION_INFO.state} to shop the latest designer pieces.
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

        {/* Call to Action */}
        <div className="p-12 rounded-3xl bg-gray-900 text-white relative overflow-hidden">
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
