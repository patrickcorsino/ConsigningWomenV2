import React from 'react';
import { Link } from 'react-router-dom';
import {
  ArrowRight,
  Star,
  ShoppingBag,
  MapPin,
  CheckCircle2,
  Phone,
  DollarSign,
  Calendar,
} from 'lucide-react';
import { BRANDS, REVIEWS, LOCATION_INFO, CONSIGNMENT_TERMS } from '../constants';
import SEO from '../components/SEO';

const Home: React.FC = () => {
  return (
    <div className="flex flex-col">
      <SEO
        title="Consigning Women | Upscale Resale Boutique in Dunwoody, GA"
        description="Atlanta's premier upscale consignment boutique in Dunwoody. Shop authentic Chanel, Hermès, Gucci, and more at fabulous prices — or consign your own designer pieces and earn 40%."
        keywords="consigning women atlanta, consignment shop dunwoody ga, designer resale atlanta, luxury consignment dunwoody, upscale resale atlanta, sandy springs consignment, brookhaven consignment, sell designer clothes atlanta"
      />

      {/* ───── Hero ───── */}
      <section className="relative h-[88vh] min-h-[640px] flex items-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img
            src="/images/storefront.jpg"
            alt="Consigning Women boutique storefront on Mt. Vernon Road in Dunwoody, GA"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-white/40 md:bg-gradient-to-r md:from-white/95 md:via-white/65 md:to-transparent" />
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
          <div className="max-w-2xl animate-in fade-in slide-in-from-left-8 duration-1000">
            <span className="inline-block text-[11px] font-bold tracking-[0.3em] text-fuchsia-brand uppercase mb-5">
              Locally Women Owned & Operated · Dunwoody, GA
            </span>
            <h1 className="text-5xl md:text-7xl font-serif font-bold text-gray-900 leading-tight mb-6">
              Atlanta’s First Choice for{' '}
              <span className="text-fuchsia-brand italic">Upscale Resale.</span>
            </h1>
            <p className="text-xl text-gray-700 mb-10 leading-relaxed font-medium">
              Designer labels, current trends, and timeless classics — at fabulous prices. We
              hand-curate every piece in our Dunwoody boutique so you discover something new every
              time you walk in.
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
                to="/consign"
                className="bg-white text-gray-800 border-2 border-gray-200 px-8 py-5 rounded-full text-lg font-bold hover:bg-gray-50 transition-all text-center"
              >
                CONSIGN WITH US
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* ───── Brand Strip ───── */}
      <section className="bg-gray-50 py-12 border-y border-gray-100">
        <div className="max-w-7xl mx-auto px-4">
          <p className="text-center text-xs font-bold text-gray-400 uppercase tracking-[0.3em] mb-8">
            Designer brands we’re known for
          </p>
          <div className="flex flex-wrap justify-center gap-8 md:gap-14 items-center opacity-70">
            {BRANDS.slice(0, 10).map((brand) => (
              <span
                key={brand}
                className="text-lg md:text-2xl font-serif text-gray-800 whitespace-nowrap"
              >
                {brand}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* ───── Value Props ───── */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-serif font-bold text-gray-900 mb-4">
              Shop With Confidence
            </h2>
            <p className="text-lg text-gray-500 max-w-2xl mx-auto">
              Why Dunwoody, Sandy Springs, and Brookhaven trust us with their designer wardrobes.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center p-10 rounded-3xl bg-gray-50/60 border border-gray-100 hover:shadow-xl hover:shadow-gray-200/60 transition-all duration-500">
              <div className="w-16 h-16 bg-fuchsia-brand/10 text-fuchsia-brand rounded-2xl flex items-center justify-center mx-auto mb-8">
                <ShoppingBag size={32} />
              </div>
              <h3 className="text-2xl font-serif font-bold text-gray-900 mb-4">
                Hand-Curated Inventory
              </h3>
              <p className="text-gray-600 leading-relaxed">
                Every item is hand-selected and inspected before it hits the floor. Nothing
                threadbare, nothing out of season, nothing we wouldn’t wear ourselves.
              </p>
            </div>
            <div className="text-center p-10 rounded-3xl bg-gray-50/60 border border-gray-100 hover:shadow-xl hover:shadow-gray-200/60 transition-all duration-500">
              <div className="w-16 h-16 bg-fuchsia-brand/10 text-fuchsia-brand rounded-2xl flex items-center justify-center mx-auto mb-8">
                <CheckCircle2 size={32} />
              </div>
              <h3 className="text-2xl font-serif font-bold text-gray-900 mb-4">
                Authentic, Always
              </h3>
              <p className="text-gray-600 leading-relaxed">
                We do not accept replicas, period. When you buy a Chanel here, it’s a Chanel.
                Our team has years of hands-on experience with luxury pieces.
              </p>
            </div>
            <div className="text-center p-10 rounded-3xl bg-gray-50/60 border border-gray-100 hover:shadow-xl hover:shadow-gray-200/60 transition-all duration-500">
              <div className="w-16 h-16 bg-fuchsia-brand/10 text-fuchsia-brand rounded-2xl flex items-center justify-center mx-auto mb-8">
                <MapPin size={32} />
              </div>
              <h3 className="text-2xl font-serif font-bold text-gray-900 mb-4">
                A Dunwoody Destination
              </h3>
              <p className="text-gray-600 leading-relaxed">
                Tucked at {LOCATION_INFO.address}, our boutique is a destination experience — not a
                quick stop. Plan a visit and you’ll see why regulars come weekly.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ───── How Consignment Works Teaser ───── */}
      <section className="py-24 bg-gray-50 border-y border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <span className="inline-block text-[11px] font-bold tracking-[0.3em] text-fuchsia-brand uppercase mb-5">
                Consign With Us
              </span>
              <h2 className="text-4xl md:text-5xl font-serif font-bold text-gray-900 mb-6 leading-tight">
                Sell Your Designer Pieces — Earn{' '}
                <span className="text-fuchsia-brand">
                  {CONSIGNMENT_TERMS.commissionConsignor}%
                </span>{' '}
                With Us.
              </h2>
              <p className="text-lg text-gray-600 mb-10 leading-relaxed">
                Whether it’s a Chanel bag you’ve outgrown or a closet of designer denim collecting
                dust, we make consignment simple. Locally women-owned, appointment-only, with
                checks paid out every month.
              </p>
              <Link
                to="/consign"
                className="inline-flex items-center gap-2 bg-fuchsia-brand text-white px-10 py-5 rounded-full text-lg font-bold shadow-lg hover:bg-[#AD1457] transition-all group"
              >
                SEE HOW IT WORKS
                <ArrowRight className="group-hover:translate-x-1 transition-transform" />
              </Link>
            </div>

            <div className="grid grid-cols-1 gap-4">
              {[
                {
                  icon: <Phone size={22} />,
                  step: 'Step 01',
                  title: 'Book by phone',
                  body: `Call ${LOCATION_INFO.phone} to reserve your appointment.`,
                },
                {
                  icon: <Calendar size={22} />,
                  step: 'Step 02',
                  title: '60 days on the floor',
                  body: `Items sell at full price month one, ${CONSIGNMENT_TERMS.monthTwoDiscount}% off month two.`,
                },
                {
                  icon: <DollarSign size={22} />,
                  step: 'Step 03',
                  title: 'Get paid the 10th',
                  body: `Earn ${CONSIGNMENT_TERMS.commissionConsignor}% per sale. Checks of $${CONSIGNMENT_TERMS.checkMinimum}+ ready monthly.`,
                },
              ].map((s) => (
                <div
                  key={s.step}
                  className="bg-white p-6 rounded-2xl border border-gray-100 shadow-sm flex items-start gap-5"
                >
                  <div className="w-12 h-12 rounded-xl bg-fuchsia-brand/10 text-fuchsia-brand flex items-center justify-center shrink-0">
                    {s.icon}
                  </div>
                  <div>
                    <div className="text-[10px] font-bold tracking-[0.3em] uppercase text-gray-400 mb-1">
                      {s.step}
                    </div>
                    <h3 className="font-serif text-xl font-bold text-gray-900 mb-1">{s.title}</h3>
                    <p className="text-gray-600 text-sm leading-relaxed">{s.body}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ───── Reviews ───── */}
      <section className="py-24 bg-fuchsia-brand text-white overflow-hidden relative">
        <div className="absolute top-0 right-0 -translate-y-1/2 translate-x-1/2 w-96 h-96 bg-white/10 rounded-full blur-3xl" />
        <div className="absolute bottom-0 left-0 translate-y-1/2 -translate-x-1/2 w-96 h-96 bg-white/10 rounded-full blur-3xl" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-serif font-bold mb-4">
              Loved by Atlanta Shoppers
            </h2>
            <div className="flex justify-center gap-1 text-white">
              {[...Array(5)].map((_, i) => (
                <Star key={i} fill="currentColor" size={24} />
              ))}
            </div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {REVIEWS.map((review) => (
              <div
                key={review.id}
                className="bg-white/10 backdrop-blur-md p-8 rounded-3xl border border-white/20"
              >
                <p className="text-lg italic mb-6 leading-relaxed">"{review.text}"</p>
                <div className="flex justify-between items-center">
                  <span className="font-bold text-lg">— {review.author}</span>
                  <span className="text-sm opacity-60 uppercase tracking-widest">
                    {review.date}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ───── Visit Us ───── */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div className="rounded-3xl overflow-hidden shadow-2xl h-[500px]">
              <iframe
                src="https://maps.google.com/maps?q=Consigning+Women+Atlanta+2508+Mt+Vernon+Rd+Dunwoody+GA+30338&t=&z=16&ie=UTF8&iwloc=&output=embed"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen={true}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Consigning Women Location — 2508 Mt. Vernon Rd. Dunwoody, GA"
              />
            </div>
            <div>
              <h2 className="text-4xl font-serif font-bold text-gray-900 mb-6">
                Visit Our Dunwoody Boutique
              </h2>
              <p className="text-xl text-gray-600 mb-10 leading-relaxed">
                Free parking, easy access off Mt. Vernon Road, and a fresh selection of designer
                pieces waiting for you. Stop by — you’ll be very glad you did.
              </p>
              <div className="space-y-6 mb-12">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-xl bg-gray-50 flex items-center justify-center text-fuchsia-brand border border-gray-100">
                    <MapPin size={24} />
                  </div>
                  <div>
                    <h4 className="font-bold text-gray-900 uppercase tracking-widest text-sm mb-1">
                      Address
                    </h4>
                    <p className="text-gray-600">
                      {LOCATION_INFO.address}, {LOCATION_INFO.city}, {LOCATION_INFO.state}{' '}
                      {LOCATION_INFO.zip}
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-xl bg-gray-50 flex items-center justify-center text-fuchsia-brand border border-gray-100">
                    <ShoppingBag size={24} />
                  </div>
                  <div>
                    <h4 className="font-bold text-gray-900 uppercase tracking-widest text-sm mb-1">
                      Store Hours
                    </h4>
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
                href={LOCATION_INFO.mapLink}
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
