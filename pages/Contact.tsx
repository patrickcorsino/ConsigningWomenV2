
import React, { useState } from 'react';
import { MapPin, Phone, Mail, Instagram, Facebook, Send, ShoppingBag } from 'lucide-react';
import { LOCATION_INFO, INSTAGRAM_LINK, FACEBOOK_LINK } from '../constants';
import SEO from '../components/SEO';

type FormStatus = 'idle' | 'sending' | 'success' | 'error';

const Contact: React.FC = () => {
  const [status, setStatus] = useState<FormStatus>('idle');
  const [errorMessage, setErrorMessage] = useState('');

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setStatus('sending');
    setErrorMessage('');

    const formData = new FormData(e.currentTarget);
    formData.append('access_key', import.meta.env.VITE_WEB3FORMS_KEY ?? '');
    formData.append('from_name', 'Consigning Women Website');
    formData.append('subject', `Website Contact: ${formData.get('subject') ?? 'General Inquiry'}`);

    try {
      const res = await fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        headers: { Accept: 'application/json' },
        body: formData,
      });
      const data = await res.json();
      if (data.success) {
        setStatus('success');
        e.currentTarget.reset();
      } else {
        setStatus('error');
        setErrorMessage(data.message || 'Something went wrong. Please call us instead.');
      }
    } catch {
      setStatus('error');
      setErrorMessage('Could not reach the server. Please call us instead.');
    }
  };

  return (
    <div className="bg-white min-h-screen">
      <SEO 
        title="Contact Consigning Women Atlanta | Store Hours & Location Dunwoody"
        description="Visit our upscale consignment boutique in Dunwoody. Find our store hours, location on Mt Vernon Rd, and contact info for consignment appointments."
        keywords="contact consigning women, dunwoody consignment location, mt vernon rd consignment shop, consigning women hours"
      />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
        <div className="text-center mb-16">
          <h1 className="text-5xl md:text-7xl font-serif font-bold text-gray-900 mb-6 tracking-tight">Visit Our Dunwoody Boutique</h1>
          <p className="text-xl text-gray-500 max-w-2xl mx-auto font-medium">
            Located on Mt Vernon Rd., we're your premier destination for designer resale in Atlanta.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-start">
          {/* Contact Info Card */}
          <div className="bg-gray-50 p-10 md:p-16 rounded-[40px] border border-gray-100 shadow-sm">
            <h2 className="text-3xl font-serif font-bold text-gray-900 mb-10">Boutique Info</h2>
            
            <div className="space-y-10">
              <div className="flex items-start gap-6">
                <div className="w-14 h-14 bg-white rounded-2xl flex items-center justify-center text-fuchsia-brand shadow-sm shrink-0 border border-gray-100">
                  <MapPin size={28} />
                </div>
                <div>
                  <h4 className="font-bold text-gray-900 uppercase tracking-widest text-xs mb-2">Our Location</h4>
                  <p className="text-gray-600 text-lg leading-relaxed">
                    {LOCATION_INFO.address}<br />
                    {LOCATION_INFO.city}, {LOCATION_INFO.state} {LOCATION_INFO.zip}
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-6">
                <div className="w-14 h-14 bg-white rounded-2xl flex items-center justify-center text-fuchsia-brand shadow-sm shrink-0 border border-gray-100">
                  <Phone size={28} />
                </div>
                <div>
                  <h4 className="font-bold text-gray-900 uppercase tracking-widest text-xs mb-2">Phone</h4>
                  <p className="text-gray-600 text-lg">{LOCATION_INFO.phone}</p>
                </div>
              </div>

              <div className="flex items-start gap-6">
                <div className="w-14 h-14 bg-white rounded-2xl flex items-center justify-center text-fuchsia-brand shadow-sm shrink-0 border border-gray-100">
                  <Mail size={28} />
                </div>
                <div>
                  <h4 className="font-bold text-gray-900 uppercase tracking-widest text-xs mb-2">Email</h4>
                  <a href={`mailto:${LOCATION_INFO.email}`} className="text-gray-600 text-lg hover:text-fuchsia-brand transition-colors break-all">{LOCATION_INFO.email}</a>
                </div>
              </div>

              <div className="flex items-start gap-6">
                <div className="w-14 h-14 bg-white rounded-2xl flex items-center justify-center text-fuchsia-brand shadow-sm shrink-0 border border-gray-100">
                  <ShoppingBag size={28} />
                </div>
                <div>
                  <h4 className="font-bold text-gray-900 uppercase tracking-widest text-xs mb-2">Consignment</h4>
                  <p className="text-gray-600 text-lg">By Appointment Only.<br />Please call {LOCATION_INFO.phone}</p>
                </div>
              </div>
            </div>

            <div className="mt-16 pt-10 border-t border-gray-200">
              <h4 className="font-bold text-gray-900 uppercase tracking-widest text-xs mb-6 text-center">Follow Our Daily Arrivals</h4>
              <div className="flex justify-center gap-6">
                <a href={INSTAGRAM_LINK} target="_blank" rel="noopener noreferrer" className="flex items-center gap-3 bg-white px-6 py-3 rounded-full shadow-sm text-gray-600 hover:text-fuchsia-brand transition-all border border-gray-100">
                  <Instagram size={20} />
                  <span className="font-bold text-sm">Instagram</span>
                </a>
                <a href={FACEBOOK_LINK} target="_blank" rel="noopener noreferrer" className="flex items-center gap-3 bg-white px-6 py-3 rounded-full shadow-sm text-gray-600 hover:text-fuchsia-brand transition-all border border-gray-100">
                  <Facebook size={20} />
                  <span className="font-bold text-sm">Facebook</span>
                </a>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div>
            <h2 className="text-3xl font-serif font-bold text-gray-900 mb-10">Send a Message</h2>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="flex flex-col gap-2">
                  <label htmlFor="name" className="text-xs font-bold text-gray-400 uppercase tracking-widest ml-1">Full Name</label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    required
                    placeholder="Jane Doe"
                    className="w-full px-6 py-4 rounded-2xl border border-gray-200 focus:outline-none focus:ring-2 focus:ring-fuchsia-brand/20 focus:border-fuchsia-brand transition-all bg-gray-50/50"
                  />
                </div>
                <div className="flex flex-col gap-2">
                  <label htmlFor="email" className="text-xs font-bold text-gray-400 uppercase tracking-widest ml-1">Email Address</label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    required
                    placeholder="jane@example.com"
                    className="w-full px-6 py-4 rounded-2xl border border-gray-200 focus:outline-none focus:ring-2 focus:ring-fuchsia-brand/20 focus:border-fuchsia-brand transition-all bg-gray-50/50"
                  />
                </div>
              </div>
              <div className="flex flex-col gap-2">
                <label htmlFor="subject" className="text-xs font-bold text-gray-400 uppercase tracking-widest ml-1">Subject</label>
                <select
                  id="subject"
                  name="subject"
                  className="w-full px-6 py-4 rounded-2xl border border-gray-200 focus:outline-none focus:ring-2 focus:ring-fuchsia-brand/20 focus:border-fuchsia-brand transition-all bg-gray-50/50 appearance-none"
                >
                  <option>General Inquiry</option>
                  <option>Consignment Question</option>
                  <option>Inquiry About an Item</option>
                  <option>Feedback</option>
                </select>
              </div>
              <div className="flex flex-col gap-2">
                <label htmlFor="message" className="text-xs font-bold text-gray-400 uppercase tracking-widest ml-1">Message</label>
                <textarea
                  id="message"
                  name="message"
                  rows={6}
                  required
                  placeholder="How can we help you today?"
                  className="w-full px-6 py-4 rounded-2xl border border-gray-200 focus:outline-none focus:ring-2 focus:ring-fuchsia-brand/20 focus:border-fuchsia-brand transition-all bg-gray-50/50 resize-none"
                ></textarea>
              </div>
              <button
                type="submit"
                disabled={status === 'sending' || status === 'success'}
                className="w-full bg-fuchsia-brand text-white py-5 rounded-2xl font-bold text-lg shadow-xl hover:bg-[#AD1457] transition-all transform active:scale-95 flex items-center justify-center gap-3 disabled:opacity-60 disabled:cursor-not-allowed"
              >
                {status === 'sending' ? 'SENDING…' : status === 'success' ? 'MESSAGE SENT ✓' : 'SEND MESSAGE'}
                {status !== 'success' && <Send size={20} />}
              </button>
              {status === 'success' && (
                <p className="text-center text-sm text-green-700 bg-green-50 border border-green-100 rounded-xl py-3 px-4">
                  Thanks for reaching out — we'll get back to you shortly.
                </p>
              )}
              {status === 'error' && (
                <p className="text-center text-sm text-red-700 bg-red-50 border border-red-100 rounded-xl py-3 px-4">
                  {errorMessage}
                </p>
              )}
            </form>
            
            {/* Store Hours Recap */}
            <div className="mt-12 p-8 rounded-3xl bg-gray-50/50 border border-gray-100">
              <h4 className="font-serif text-lg font-bold text-gray-900 mb-4 text-center">Store Hours</h4>
              <div className="grid grid-cols-2 gap-x-8 gap-y-2 max-w-md mx-auto">
                {Object.entries(LOCATION_INFO.hours).map(([day, hours]) => (
                  <React.Fragment key={day}>
                    <span className="text-sm font-medium text-gray-500">{day}:</span>
                    <span className="text-sm text-gray-900 font-bold text-right">{hours}</span>
                  </React.Fragment>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
