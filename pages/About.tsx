import React from 'react';
import { Link } from 'react-router-dom';
import {
  Heart,
  Users,
  ShieldCheck,
  Sparkles,
  ArrowRight,
  Recycle,
  Award,
} from 'lucide-react';
import SEO from '../components/SEO';

const About: React.FC = () => {
  return (
    <div className="bg-white">
      <SEO
        title="About Consigning Women | Locally Women-Owned Boutique in Dunwoody"
        description="Learn the story behind Consigning Women — Dunwoody's locally women-owned upscale consignment boutique. Authentic designer pieces, sustainable luxury, and a curated experience built on relationships."
        keywords="about consigning women, locally women owned boutique dunwoody, atlanta consignment story, sustainable luxury atlanta, dunwoody designer resale"
      />

      {/* ───── Hero ───── */}
      <section className="bg-gradient-to-b from-gray-50 to-white py-24 border-b border-gray-100">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <span className="inline-block text-[11px] font-bold tracking-[0.3em] text-fuchsia-brand uppercase mb-6">
            Our Story
          </span>
          <h1 className="text-5xl md:text-7xl font-serif font-bold text-gray-900 mb-8 leading-tight">
            A Boutique Built on{' '}
            <span className="text-fuchsia-brand italic">Relationships.</span>
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Consigning Women is Atlanta's first choice for upscale resale — a locally
            women-owned boutique that has made consignment shopping a destination experience right
            here in Dunwoody.
          </p>
        </div>
      </section>

      {/* ───── Story Block ───── */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* "Who We Are" — text-forward layout. */}
          {/* TODO: When we have a team photo, drop it back in here as a top banner or sidebar. */}
          <div className="max-w-3xl mx-auto mb-24">
            <div className="text-center mb-12">
              <h2 className="text-4xl md:text-5xl font-serif font-bold text-gray-900 mb-6">
                Who We Are
              </h2>
              <div className="w-20 h-1 bg-fuchsia-brand mx-auto" />
            </div>

            <div className="space-y-6 text-lg text-gray-600 leading-relaxed">
              <p>
                We’re a small, locally women-owned business at 2508 Mt. Vernon Road. We started
                with a simple idea: quality consignment shopping should feel like a true boutique
                experience — not a hunt through racks. Walk in and you’ll find designer pieces
                staged with care, a team that knows the labels, and a warm welcome you don’t get
                at every shop.
              </p>
              <p>
                Over the years we’ve become the trusted name in Dunwoody for women who want
                authentic designer fashion at fabulous prices — and for consignors who want their
                wardrobes treated with the respect they deserve.
              </p>
            </div>

            <div className="mt-14 p-10 md:p-14 rounded-3xl bg-gradient-to-br from-fuchsia-brand/5 via-white to-gray-50 border border-gray-100 text-center">
              <p className="text-2xl md:text-3xl font-serif italic text-gray-900 leading-relaxed mb-5">
                “Quality and value are the foundation. Hospitality is the difference.”
              </p>
              <p className="text-[11px] font-bold tracking-[0.3em] uppercase text-fuchsia-brand">
                Locally Women Owned &amp; Operated
              </p>
            </div>
          </div>

          {/* ───── Two Promises ───── */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-24">
            <div className="bg-gray-50/60 rounded-3xl p-10 border border-gray-100">
              <div className="w-14 h-14 rounded-2xl bg-fuchsia-brand text-white flex items-center justify-center mb-6 shadow-lg shadow-fuchsia-brand/20">
                <Award size={28} />
              </div>
              <h3 className="text-2xl font-serif font-bold text-gray-900 mb-4">
                Our Promise to Shoppers
              </h3>
              <p className="text-gray-600 leading-relaxed mb-5">
                Every piece on our floor is hand-curated and inspected. We do not accept
                replicas. We do not accept items in poor condition. When you find that Chanel bag
                or Hermès scarf in our boutique, you can trust it's the real thing — and you're
                paying a fraction of retail.
              </p>
              <Link
                to="/new-arrivals"
                className="inline-flex items-center gap-2 text-sm font-bold text-fuchsia-brand hover:text-[#AD1457] uppercase tracking-widest"
              >
                See What's New <ArrowRight size={16} />
              </Link>
            </div>
            <div className="bg-gray-50/60 rounded-3xl p-10 border border-gray-100">
              <div className="w-14 h-14 rounded-2xl bg-fuchsia-brand text-white flex items-center justify-center mb-6 shadow-lg shadow-fuchsia-brand/20">
                <Heart size={28} />
              </div>
              <h3 className="text-2xl font-serif font-bold text-gray-900 mb-4">
                Our Promise to Consignors
              </h3>
              <p className="text-gray-600 leading-relaxed mb-5">
                You earn 40% on every sale. Checks of $50+ are ready on the 10th of every month.
                Prefer store credit? Use it any time. No mystery deductions, no fine-print fees
                — just a fair, transparent split and a team that genuinely cares about pricing
                your pieces right.
              </p>
              <Link
                to="/consign"
                className="inline-flex items-center gap-2 text-sm font-bold text-fuchsia-brand hover:text-[#AD1457] uppercase tracking-widest"
              >
                Consign With Us <ArrowRight size={16} />
              </Link>
            </div>
          </div>

          {/* ───── Core Values ───── */}
          <div className="text-center mb-14">
            <h2 className="text-4xl font-serif font-bold text-gray-900 mb-4">
              What We Stand For
            </h2>
            <p className="text-lg text-gray-500 max-w-2xl mx-auto">
              Four things that have never changed since day one.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-10">
            <div className="text-center">
              <div className="w-16 h-16 bg-fuchsia-brand text-white rounded-2xl flex items-center justify-center mx-auto mb-6 shadow-lg shadow-fuchsia-brand/20">
                <ShieldCheck size={32} />
              </div>
              <h4 className="text-xl font-serif font-bold text-gray-900 mb-3">Authenticity</h4>
              <p className="text-gray-500 text-sm leading-relaxed">
                We don't accept replicas — ever. Real labels only, evaluated by a team that
                knows what to look for.
              </p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-fuchsia-brand text-white rounded-2xl flex items-center justify-center mx-auto mb-6 shadow-lg shadow-fuchsia-brand/20">
                <Sparkles size={32} />
              </div>
              <h4 className="text-xl font-serif font-bold text-gray-900 mb-3">Curation</h4>
              <p className="text-gray-500 text-sm leading-relaxed">
                Only pieces in excellent condition, in season, and worthy of our floor. If we
                wouldn't wear it, we won't sell it.
              </p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-fuchsia-brand text-white rounded-2xl flex items-center justify-center mx-auto mb-6 shadow-lg shadow-fuchsia-brand/20">
                <Users size={32} />
              </div>
              <h4 className="text-xl font-serif font-bold text-gray-900 mb-3">Community</h4>
              <p className="text-gray-500 text-sm leading-relaxed">
                We donate unsold pieces to local charity partners and treat every shopper and
                consignor like a neighbor — because most are.
              </p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-fuchsia-brand text-white rounded-2xl flex items-center justify-center mx-auto mb-6 shadow-lg shadow-fuchsia-brand/20">
                <Recycle size={32} />
              </div>
              <h4 className="text-xl font-serif font-bold text-gray-900 mb-3">Sustainability</h4>
              <p className="text-gray-500 text-sm leading-relaxed">
                Every consigned piece is one less item headed to a landfill. Luxury fashion deserves
                a second, third, and fourth chapter.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ───── Quote ───── */}
      <section className="bg-gray-900 py-24">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <p className="text-3xl md:text-4xl font-serif italic text-white leading-relaxed mb-8">
            "Style is a way to say who you are without having to speak. At Consigning Women, we
            help you find the pieces that tell your story — at prices that let you keep telling
            it."
          </p>
          <div className="w-20 h-1 bg-fuchsia-brand mx-auto" />
        </div>
      </section>

      {/* ───── Final CTA ───── */}
      <section className="py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-serif font-bold text-gray-900 mb-6">
            Come See It For Yourself.
          </h2>
          <p className="text-lg text-gray-600 mb-10 max-w-2xl mx-auto">
            The boutique changes daily. Stop in, say hello, and discover what's new this week.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Link
              to="/contact"
              className="inline-flex items-center justify-center bg-gray-900 text-white px-10 py-5 rounded-full text-lg font-bold hover:bg-black transition-all"
            >
              VISIT OR CONTACT US
            </Link>
            <Link
              to="/consign"
              className="inline-flex items-center justify-center bg-fuchsia-brand text-white px-10 py-5 rounded-full text-lg font-bold shadow-lg hover:bg-[#AD1457] transition-all"
            >
              CONSIGN WITH US
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
