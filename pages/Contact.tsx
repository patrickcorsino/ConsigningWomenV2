
import React from 'react';
import { MapPin, Phone, Mail, Instagram, Facebook, Send } from 'lucide-react';
import { LOCATION_INFO, INSTAGRAM_LINK, FACEBOOK_LINK } from '../constants';

const Contact: React.FC = () => {
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert('Thank you for your message! We will get back to you shortly.');
  };

  return (
    <div className="bg-white min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
        <div className="text-center mb-16">
          <h1 className="text-5xl md:text-7xl font-serif font-bold text-gray-900 mb-6 tracking-tight">Get in Touch</h1>
          <p className="text-xl text-gray-500 max-w-2xl mx-auto font-medium">
            Have a question about an item or interested in consigning? We're here to help you every step of the way.
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
                  <p className="text-gray-600 text-lg">info@consigningwomenatlanta.com</p>
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
                  rows={6} 
                  required 
                  placeholder="How can we help you today?"
                  className="w-full px-6 py-4 rounded-2xl border border-gray-200 focus:outline-none focus:ring-2 focus:ring-fuchsia-brand/20 focus:border-fuchsia-brand transition-all bg-gray-50/50 resize-none"
                ></textarea>
              </div>
              <button 
                type="submit" 
                className="w-full bg-fuchsia-brand text-white py-5 rounded-2xl font-bold text-lg shadow-xl hover:bg-[#AD1457] transition-all transform active:scale-95 flex items-center justify-center gap-3"
              >
                SEND MESSAGE
                <Send size={20} />
              </button>
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
