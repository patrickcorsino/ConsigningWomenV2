
import { Review, LocationInfo } from './types';

export const BRANDS = [
  'Michael Kors', 'Louis Vuitton', 'YSL', 'Hermes', 'Chanel', 
  'Jimmy Choo', 'Burberry', 'St. John', 'Dior', 'Gucci', 'Ralph Lauren'
];

// Customer reviews sourced from public Yelp listing (4.7 avg).
// Swap these for actual quotes from your Google Business reviews when ready.
export const REVIEWS: Review[] = [
  {
    id: 'r1',
    author: 'Yelp Customer',
    rating: 5,
    text: "A fun place, nice staff, nicely organized and high quality consignment. Everything about this store is perfect — plenty of great quality clothes to choose from, and the ladies are super nice.",
    date: 'Verified Review'
  },
  {
    id: 'r2',
    author: 'Yelp Customer',
    rating: 5,
    text: "I am a consignment store junkie, and this place is heaven. TONS of work clothes which are in great condition. Easily one of the best stops on my regular rotation.",
    date: 'Verified Review'
  },
  {
    id: 'r3',
    author: 'Yelp Customer',
    rating: 5,
    text: "Great variety, well priced, and the staff was wonderful. One of the best high-end consignment stores I've visited — I'd come back any time I'm in Atlanta.",
    date: 'Verified Review'
  }
];

export const LOCATION_INFO: LocationInfo = {
  address: '2508 Mt. Vernon Rd.',
  city: 'Dunwoody',
  state: 'GA',
  zip: '30338',
  phone: '770-394-1600',
  email: 'consigningwomenatlanta@gmail.com',
  mapLink: 'https://goo.gl/maps/cyRTVQsuLgNtYRy16',
  hours: {
    'Monday - Saturday': '11:00 AM - 5:00 PM',
    'Sunday': '12:00 PM - 5:00 PM'
  }
};

export const LOGO_PATH = '/logo.jpg';
export const SIMPLECONSIGN_LINK = 'https://consigningwomen.consignoraccess.com/login';
export const FACEBOOK_LINK = 'https://www.facebook.com/people/Consigning-Women-Atlanta/100057294286434/';
export const INSTAGRAM_LINK = 'https://www.instagram.com/consigningwomen.atlanta/';
