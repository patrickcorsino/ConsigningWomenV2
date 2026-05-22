import React from 'react';
import { Helmet } from 'react-helmet-async';
import {
  Phone,
  Calendar,
  ShoppingBag,
  CheckCircle2,
  XCircle,
  DollarSign,
  Clock,
  Tag,
  ShieldCheck,
  Sparkles,
  Heart,
} from 'lucide-react';
import {
  LOCATION_INFO,
  CONSIGNMENT_TERMS,
  ACCEPTED_CATEGORIES,
  ACCEPTED_JEAN_BRANDS,
  EXCLUDED_CATEGORIES,
  EXCLUDED_BRANDS,
  FAQS,
} from '../constants';
import SEO from '../components/SEO';

const phoneHref = `tel:${LOCATION_INFO.phone.replace(/[^0-9]/g, '')}`;

const Consign: React.FC = () => {
  // FAQ schema for rich-snippet eligibility in Google
  const faqSchema = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: FAQS.map(({ q, a }) => ({
      '@type': 'Question',
      name: q,
      acceptedAnswer: { '@type': 'Answer', text: a },
    })),
  };

  return (
    <div className="bg-white">
      <SEO
        title="Consign With Us | How Consignment Works in Dunwoody, GA"
        description="Earn 40% on your designer pieces at Atlanta's premier upscale resale boutique. Locally women-owned, appointment-only consignment in Dunwoody. See accepted brands, terms, and FAQs."
        keywords="consign clothes dunwoody, consignment appointment atlanta, where to sell designer bags atlanta, consignment commission dunwoody, sell designer clothes sandy springs, atlanta consignment terms"
        canonical="https://consigningwomenatlanta.com/consign"
      />
      <Helmet>
        <script type="application/ld+json">{JSON.stringify(faqSchema)}</script>
      </Helmet>

      {/* ───── Hero ───── */}
      <section className="bg-gradient-to-b from-gray-50 to-white py-24 border-b border-gray-100">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <span className="inline-block text-[11px] font-bold tracking-[0.3em] text-fuchsia-brand uppercase mb-6">
            Consign With Us
          </span>
          <h1 className="text-5xl md:text-7xl font-serif font-bold text-gray-900 leading-tight mb-8">
            Turn Your Closet Into <span className="text-fuchsia-brand italic">Cash or Credit.</span>
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed mb-10">
            For decades, Dunwoody women have trusted Consigning Women to find new homes for the
            designer pieces they’ve outgrown. Earn {CONSIGNMENT_TERMS.commissionConsignor}% on
            every sale, get paid on the 10th of every month, and work with a locally women-owned
            team that knows the difference between a real Chanel and a really good copy.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <a
              href={phoneHref}
              className="inline-flex items-center justify-center gap-3 bg-fuchsia-brand text-white px-10 py-5 rounded-full text-lg font-bold shadow-xl hover:bg-[#AD1457] transition-all"
            >
              <Phone size={20} />
              CALL {LOCATION_INFO.phone}
            </a>
            <a
              href="#how-it-works"
              className="inline-flex items-center justify-center bg-white text-gray-800 border-2 border-gray-200 px-10 py-5 rounded-full text-lg font-bold hover:bg-gray-50 transition-all"
            >
              SEE HOW IT WORKS
            </a>
          </div>
          <p className="mt-6 text-sm text-gray-400 font-medium uppercase tracking-widest">
            Appointment only · Locally Women Owned & Operated
          </p>
        </div>
      </section>

      {/* ───── Why Consign With Us ───── */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-serif font-bold text-gray-900 mb-4">
              Why Atlanta Consigns With Us
            </h2>
            <p className="text-lg text-gray-500 max-w-2xl mx-auto">
              Three reasons we’ve been Dunwoody’s first-call consignment boutique for years.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="p-10 rounded-3xl bg-gray-50/60 border border-gray-100 hover:shadow-xl hover:shadow-gray-200/60 transition-all">
              <div className="w-14 h-14 rounded-2xl bg-fuchsia-brand/10 text-fuchsia-brand flex items-center justify-center mb-6">
                <Heart size={28} />
              </div>
              <h3 className="text-2xl font-serif font-bold text-gray-900 mb-3">
                Locally Women Owned
              </h3>
              <p className="text-gray-600 leading-relaxed">
                We’re a small Dunwoody business — not a chain, not a marketplace. When you consign
                with us, you’re working directly with the women who run the shop.
              </p>
            </div>
            <div className="p-10 rounded-3xl bg-gray-50/60 border border-gray-100 hover:shadow-xl hover:shadow-gray-200/60 transition-all">
              <div className="w-14 h-14 rounded-2xl bg-fuchsia-brand/10 text-fuchsia-brand flex items-center justify-center mb-6">
                <DollarSign size={28} />
              </div>
              <h3 className="text-2xl font-serif font-bold text-gray-900 mb-3">
                Transparent Terms
              </h3>
              <p className="text-gray-600 leading-relaxed">
                {CONSIGNMENT_TERMS.commissionConsignor}% to you, paid by check on the 10th of every
                month. No mystery deductions, no fine-print fees — just a simple split and a
                handshake.
              </p>
            </div>
            <div className="p-10 rounded-3xl bg-gray-50/60 border border-gray-100 hover:shadow-xl hover:shadow-gray-200/60 transition-all">
              <div className="w-14 h-14 rounded-2xl bg-fuchsia-brand/10 text-fuchsia-brand flex items-center justify-center mb-6">
                <Sparkles size={28} />
              </div>
              <h3 className="text-2xl font-serif font-bold text-gray-900 mb-3">
                A Designer’s Eye
              </h3>
              <p className="text-gray-600 leading-relaxed">
                Our team has handled thousands of luxury pieces. We price your items at fair resale
                value, refuse replicas, and stage your wardrobe in a boutique shoppers love.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ───── How It Works ───── */}
      <section id="how-it-works" className="py-24 bg-gray-50 border-y border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <span className="inline-block text-[11px] font-bold tracking-[0.3em] text-fuchsia-brand uppercase mb-4">
              The Process
            </span>
            <h2 className="text-4xl md:text-5xl font-serif font-bold text-gray-900 mb-4">
              How Consignment Works
            </h2>
            <p className="text-lg text-gray-500 max-w-2xl mx-auto">
              Five simple steps from your closet to a check in your hand.
            </p>
          </div>

          <ol className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-6">
            {[
              {
                icon: <Phone size={24} />,
                title: 'Book Your Appointment',
                body: `Call ${LOCATION_INFO.phone}. We’re appointment-only so you get our full attention.`,
              },
              {
                icon: <ShoppingBag size={24} />,
                title: 'Prep Your Pieces',
                body: `Bring up to ${CONSIGNMENT_TERMS.itemsPerAppointment} in-season items, freshly cleaned, pressed, and on hangers.`,
              },
              {
                icon: <CheckCircle2 size={24} />,
                title: 'We Evaluate Together',
                body: 'Browse the floor while we review your pieces. Take home anything we don’t accept — or let us donate it.',
              },
              {
                icon: <Calendar size={24} />,
                title: 'Items Hit The Floor',
                body: `Accepted pieces are priced at fair market value and displayed for ${CONSIGNMENT_TERMS.daysOnFloor} days. Full price for month one, ${CONSIGNMENT_TERMS.monthTwoDiscount}% off in month two.`,
              },
              {
                icon: <DollarSign size={24} />,
                title: 'Get Paid',
                body: `Earn ${CONSIGNMENT_TERMS.commissionConsignor}% per sale. Checks of $${CONSIGNMENT_TERMS.checkMinimum}+ are ready on the 10th — or use your balance as store credit any time.`,
              },
            ].map((step, i) => (
              <li
                key={step.title}
                className="relative bg-white p-8 rounded-3xl border border-gray-100 shadow-sm"
              >
                <div className="absolute -top-4 left-8 bg-fuchsia-brand text-white text-xs font-bold tracking-widest px-3 py-1 rounded-full">
                  STEP {i + 1}
                </div>
                <div className="w-12 h-12 rounded-xl bg-fuchsia-brand/10 text-fuchsia-brand flex items-center justify-center mb-5 mt-2">
                  {step.icon}
                </div>
                <h3 className="font-serif text-xl font-bold text-gray-900 mb-3">{step.title}</h3>
                <p className="text-gray-600 text-sm leading-relaxed">{step.body}</p>
              </li>
            ))}
          </ol>
        </div>
      </section>

      {/* ───── What We Accept ───── */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Accept */}
            <div className="rounded-3xl border border-green-100 bg-green-50/30 p-10 md:p-12">
              <div className="flex items-center gap-3 mb-8">
                <div className="w-12 h-12 rounded-xl bg-green-100 text-green-700 flex items-center justify-center">
                  <CheckCircle2 size={28} />
                </div>
                <h2 className="text-3xl font-serif font-bold text-gray-900">What We Accept</h2>
              </div>
              <ul className="space-y-3 mb-10">
                {ACCEPTED_CATEGORIES.map((item) => (
                  <li key={item} className="flex items-start gap-3 text-gray-700">
                    <CheckCircle2
                      size={18}
                      className="text-green-600 mt-1 shrink-0"
                      aria-hidden
                    />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
              <h4 className="text-xs font-bold tracking-[0.2em] text-gray-500 uppercase mb-4">
                Designer jeans we love
              </h4>
              <div className="flex flex-wrap gap-2">
                {ACCEPTED_JEAN_BRANDS.map((brand) => (
                  <span
                    key={brand}
                    className="text-sm font-medium text-gray-700 bg-white px-3 py-1.5 rounded-full border border-gray-200"
                  >
                    {brand}
                  </span>
                ))}
              </div>
            </div>

            {/* Don't Accept */}
            <div className="rounded-3xl border border-rose-100 bg-rose-50/30 p-10 md:p-12">
              <div className="flex items-center gap-3 mb-8">
                <div className="w-12 h-12 rounded-xl bg-rose-100 text-rose-700 flex items-center justify-center">
                  <XCircle size={28} />
                </div>
                <h2 className="text-3xl font-serif font-bold text-gray-900">What We Can’t Accept</h2>
              </div>
              <ul className="space-y-3 mb-10">
                {EXCLUDED_CATEGORIES.map((item) => (
                  <li key={item} className="flex items-start gap-3 text-gray-700">
                    <XCircle size={18} className="text-rose-500 mt-1 shrink-0" aria-hidden />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
              <h4 className="text-xs font-bold tracking-[0.2em] text-gray-500 uppercase mb-4">
                Brands outside our price point
              </h4>
              <div className="flex flex-wrap gap-2">
                {EXCLUDED_BRANDS.map((brand) => (
                  <span
                    key={brand}
                    className="text-sm font-medium text-gray-600 bg-white px-3 py-1.5 rounded-full border border-gray-200"
                  >
                    {brand}
                  </span>
                ))}
              </div>
              <p className="mt-6 text-sm text-gray-500 italic">
                Exception: brand-new items with tags may still be considered — when in doubt, just
                ask.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ───── Terms Snapshot ───── */}
      <section className="py-20 bg-gray-900 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-14">
            <h2 className="text-4xl font-serif font-bold mb-4">Consignment Terms at a Glance</h2>
            <p className="text-gray-400 max-w-2xl mx-auto">
              The fine print, in plain English.
            </p>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {[
              {
                icon: <DollarSign size={24} />,
                stat: `${CONSIGNMENT_TERMS.commissionConsignor}%`,
                label: 'To you on every sale',
              },
              {
                icon: <Clock size={24} />,
                stat: `${CONSIGNMENT_TERMS.daysOnFloor} days`,
                label: 'On the boutique floor',
              },
              {
                icon: <Tag size={24} />,
                stat: `${CONSIGNMENT_TERMS.monthTwoDiscount}% off`,
                label: 'Automatic markdown month 2',
              },
              {
                icon: <Calendar size={24} />,
                stat: '10th',
                label: 'Checks ready monthly ($50+)',
              },
            ].map((t) => (
              <div key={t.label} className="bg-white/5 backdrop-blur rounded-2xl p-6 border border-white/10">
                <div className="w-12 h-12 rounded-xl bg-fuchsia-brand/20 text-fuchsia-brand flex items-center justify-center mb-4">
                  {t.icon}
                </div>
                <div className="text-3xl md:text-4xl font-serif font-bold mb-2">{t.stat}</div>
                <div className="text-sm text-gray-400 leading-snug">{t.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ───── FAQ ───── */}
      <section className="py-24">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-14">
            <span className="inline-block text-[11px] font-bold tracking-[0.3em] text-fuchsia-brand uppercase mb-4">
              FAQ
            </span>
            <h2 className="text-4xl md:text-5xl font-serif font-bold text-gray-900 mb-4">
              Common Questions
            </h2>
            <p className="text-lg text-gray-500">
              Still curious? Call us at{' '}
              <a href={phoneHref} className="text-fuchsia-brand font-bold hover:underline">
                {LOCATION_INFO.phone}
              </a>{' '}
              and we’ll happily walk you through it.
            </p>
          </div>

          <div className="space-y-4">
            {FAQS.map(({ q, a }) => (
              <details
                key={q}
                className="group rounded-2xl border border-gray-200 bg-white open:shadow-md transition-shadow"
              >
                <summary className="cursor-pointer list-none px-6 py-5 flex justify-between items-center gap-4 font-serif text-lg font-bold text-gray-900 group-open:text-fuchsia-brand">
                  {q}
                  <span className="text-2xl font-light text-gray-400 group-open:rotate-45 transition-transform">
                    +
                  </span>
                </summary>
                <div className="px-6 pb-6 text-gray-600 leading-relaxed">{a}</div>
              </details>
            ))}
          </div>
        </div>
      </section>

      {/* ───── Final CTA ───── */}
      <section className="py-20 bg-fuchsia-brand text-white relative overflow-hidden">
        <div className="absolute top-0 right-0 -translate-y-1/2 translate-x-1/2 w-96 h-96 bg-white/10 rounded-full blur-3xl" />
        <div className="absolute bottom-0 left-0 translate-y-1/2 -translate-x-1/2 w-96 h-96 bg-white/10 rounded-full blur-3xl" />
        <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <ShieldCheck size={48} className="mx-auto mb-6 opacity-90" />
          <h2 className="text-4xl md:text-5xl font-serif font-bold mb-6">
            Ready to consign?
          </h2>
          <p className="text-xl text-white/90 max-w-2xl mx-auto mb-10 leading-relaxed">
            Appointments fill quickly, especially at season changes. Give us a call and we’ll get
            you on the calendar.
          </p>
          <a
            href={phoneHref}
            className="inline-flex items-center gap-3 bg-white text-fuchsia-brand px-12 py-5 rounded-full text-lg font-bold shadow-xl hover:scale-[1.02] transition-transform"
          >
            <Phone size={20} />
            CALL {LOCATION_INFO.phone}
          </a>
          <p className="mt-6 text-sm text-white/80 font-medium uppercase tracking-widest">
            {Object.entries(LOCATION_INFO.hours)
              .map(([day, hrs]) => `${day}: ${hrs}`)
              .join(' · ')}
          </p>
        </div>
      </section>
    </div>
  );
};

export default Consign;
