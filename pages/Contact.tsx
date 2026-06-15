import React from 'react';
import { Link } from 'react-router-dom';
import {
  MapPin,
  Phone,
  Mail,
  Instagram,
  Facebook,
  Clock,
  ShoppingBag,
  ArrowRight,
} from 'lucide-react';
import { LOCATION_INFO, INSTAGRAM_LINK, FACEBOOK_LINK } from '../constants';
import SEO from '../components/SEO';

const phoneHref = `tel:${LOCATION_INFO.phone.replace(/[^0-9]/g, '')}`;
const mailHref = `mailto:${LOCATION_INFO.email}`;

const Contact: React.FC = () => {
  return (
    <div className="bg-white">
      <SEO
        title="Contact & Visit | Consigning Women Dunwoody, GA"
        description="Visit our upscale consignment boutique on Mt. Vernon Road in Dunwoody, GA. Store hours, location, phone, email, and how to schedule a consignment appointment."
        keywords="contact consigning women, dunwoody consignment location, mt vernon rd consignment shop, consigning women hours, consignment appointment dunwoody, designer resale store atlanta"
      />

      {/* ───── Hero ───── */}
      <section className="bg-gradient-to-b from-gray-50 to-white py-20 border-b border-gray-100">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <span className="inline-block text-[11px] font-bold tracking-[0.3em] text-fuchsia-brand uppercase mb-5">
            Visit · Call · Email
          </span>
          <h1 className="text-5xl md:text-7xl font-serif font-bold text-gray-900 mb-6 tracking-tight">
            Come See Us.
          </h1>
          <p className="text-xl text-gray-500 max-w-2xl mx-auto font-medium leading-relaxed">
            Tucked at 2508 Mt. Vernon Road in Dunwoody, with free parking out front. Stop in, give
            us a call, or drop us a line — we'd love to hear from you.
          </p>
        </div>
      </section>

      {/* ───── Map + Info ───── */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
            {/* Map */}
            <div className="rounded-3xl overflow-hidden shadow-2xl h-[500px] lg:h-[640px]">
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

            {/* Info Card */}
            <div className="bg-gray-50/60 rounded-3xl p-10 md:p-14 border border-gray-100 shadow-sm">
              <h2 className="text-3xl font-serif font-bold text-gray-900 mb-10">
                Boutique Info
              </h2>

              <div className="space-y-9">
                {/* Address */}
                <div className="flex items-start gap-5">
                  <div className="w-12 h-12 bg-white rounded-2xl flex items-center justify-center text-fuchsia-brand shadow-sm shrink-0 border border-gray-100">
                    <MapPin size={24} />
                  </div>
                  <div>
                    <h4 className="font-bold text-gray-900 uppercase tracking-widest text-xs mb-2">
                      Address
                    </h4>
                    <p className="text-gray-700 text-lg leading-relaxed">
                      {LOCATION_INFO.address}<br />
                      {LOCATION_INFO.city}, {LOCATION_INFO.state} {LOCATION_INFO.zip}
                    </p>
                    <a
                      href={LOCATION_INFO.mapLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 mt-3 text-sm font-bold text-fuchsia-brand hover:text-[#AD1457] uppercase tracking-widest"
                    >
                      Get Directions <ArrowRight size={14} />
                    </a>
                  </div>
                </div>

                {/* Phone */}
                <div className="flex items-start gap-5">
                  <div className="w-12 h-12 bg-white rounded-2xl flex items-center justify-center text-fuchsia-brand shadow-sm shrink-0 border border-gray-100">
                    <Phone size={24} />
                  </div>
                  <div>
                    <h4 className="font-bold text-gray-900 uppercase tracking-widest text-xs mb-2">
                      Phone
                    </h4>
                    <a
                      href={phoneHref}
                      className="text-gray-700 text-lg hover:text-fuchsia-brand transition-colors"
                    >
                      {LOCATION_INFO.phone}
                    </a>
                  </div>
                </div>

                {/* Email */}
                <div className="flex items-start gap-5">
                  <div className="w-12 h-12 bg-white rounded-2xl flex items-center justify-center text-fuchsia-brand shadow-sm shrink-0 border border-gray-100">
                    <Mail size={24} />
                  </div>
                  <div>
                    <h4 className="font-bold text-gray-900 uppercase tracking-widest text-xs mb-2">
                      Email
                    </h4>
                    <a
                      href={mailHref}
                      className="text-gray-700 text-lg hover:text-fuchsia-brand transition-colors break-all"
                    >
                      {LOCATION_INFO.email}
                    </a>
                  </div>
                </div>

                {/* Hours */}
                <div className="flex items-start gap-5">
                  <div className="w-12 h-12 bg-white rounded-2xl flex items-center justify-center text-fuchsia-brand shadow-sm shrink-0 border border-gray-100">
                    <Clock size={24} />
                  </div>
                  <div className="flex-1">
                    <h4 className="font-bold text-gray-900 uppercase tracking-widest text-xs mb-3">
                      Store Hours
                    </h4>
                    <ul className="space-y-2">
                      {Object.entries(LOCATION_INFO.hours).map(([day, hours]) => (
                        <li
                          key={day}
                          className="flex justify-between gap-4 text-gray-700 text-base"
                        >
                          <span className="font-medium">{day}</span>
                          <span className="font-bold">{hours}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                {/* Consignment callout */}
                <div className="flex items-start gap-5 pt-2">
                  <div className="w-12 h-12 bg-white rounded-2xl flex items-center justify-center text-fuchsia-brand shadow-sm shrink-0 border border-gray-100">
                    <ShoppingBag size={24} />
                  </div>
                  <div>
                    <h4 className="font-bold text-gray-900 uppercase tracking-widest text-xs mb-2">
                      Clothing & Accessories Consignment
                    </h4>
                    <p className="text-gray-700 text-lg leading-relaxed">
                      By appointment only. Please call{' '}
                      <a
                        href={phoneHref}
                        className="text-fuchsia-brand font-bold hover:underline"
                      >
                        {LOCATION_INFO.phone}
                      </a>
                      .
                    </p>
                    <Link
                      to="/consign"
                      className="inline-flex items-center gap-2 mt-3 text-sm font-bold text-fuchsia-brand hover:text-[#AD1457] uppercase tracking-widest"
                    >
                      See How Consignment Works <ArrowRight size={14} />
                    </Link>
                  </div>
                </div>
              </div>

              {/* Socials */}
              <div className="mt-12 pt-10 border-t border-gray-200">
                <h4 className="font-bold text-gray-900 uppercase tracking-widest text-xs mb-6 text-center">
                  Follow Our Daily Arrivals
                </h4>
                <div className="flex justify-center gap-5">
                  <a
                    href={INSTAGRAM_LINK}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-3 bg-white px-6 py-3 rounded-full shadow-sm text-gray-600 hover:text-fuchsia-brand transition-all border border-gray-100"
                  >
                    <Instagram size={20} />
                    <span className="font-bold text-sm">Instagram</span>
                  </a>
                  <a
                    href={FACEBOOK_LINK}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-3 bg-white px-6 py-3 rounded-full shadow-sm text-gray-600 hover:text-fuchsia-brand transition-all border border-gray-100"
                  >
                    <Facebook size={20} />
                    <span className="font-bold text-sm">Facebook</span>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;
