
import React from 'react';
import { Product, Review, LocationInfo } from './types';

export const BRANDS = [
  'Michael Kors', 'Louis Vuitton', 'YSL', 'Hermes', 'Chanel', 
  'Jimmy Choo', 'Burberry', 'St. John', 'Dior', 'Gucci', 'Ralph Lauren'
];

export const MOCK_PRODUCTS: Product[] = [
  {
    id: '1',
    name: 'Quilted Leather Shoulder Bag',
    brand: 'Chanel',
    price: 3450,
    originalPrice: 5200,
    image: 'https://images.unsplash.com/photo-1548036328-c9fa89d128fa?q=80&w=800&auto=format&fit=crop',
    category: 'Handbags',
    size: 'M'
  },
  {
    id: '2',
    name: 'Classic Silk Floral Scarf',
    brand: 'Hermes',
    price: 325,
    originalPrice: 485,
    image: 'https://images.unsplash.com/photo-1606760227091-3dd870d97f1d?q=80&w=800&auto=format&fit=crop',
    category: 'Accessories',
    size: 'OS'
  },
  {
    id: '3',
    name: 'Suede Pointed Toe Pumps',
    brand: 'Jimmy Choo',
    price: 275,
    originalPrice: 650,
    image: 'https://images.unsplash.com/photo-1543163521-1bf539c55dd2?q=80&w=800&auto=format&fit=crop',
    category: 'Shoes',
    size: '7.5'
  },
  {
    id: '4',
    name: 'Double-Breasted Trench Coat',
    brand: 'Burberry',
    price: 890,
    originalPrice: 1950,
    image: 'https://images.unsplash.com/photo-1591047139829-d91aecb6caea?q=80&w=800&auto=format&fit=crop',
    category: 'Outerwear',
    size: '6'
  },
  {
    id: '5',
    name: 'Logo Belt with Gold Buckle',
    brand: 'Gucci',
    price: 350,
    originalPrice: 520,
    image: 'https://images.unsplash.com/photo-1624222247344-550fbadfd08d?q=80&w=800&auto=format&fit=crop',
    category: 'Accessories',
    size: '85'
  },
  {
    id: '6',
    name: 'Cashmere Cardigan Set',
    brand: 'St. John',
    price: 425,
    originalPrice: 1200,
    image: 'https://images.unsplash.com/photo-1620799140408-edc6dcb6d633?q=80&w=800&auto=format&fit=crop',
    category: 'Clothing',
    size: '10'
  }
];

export const MOCK_REVIEWS: Review[] = [
  {
    id: 'r1',
    author: 'Sarah J.',
    rating: 5,
    text: "This place is a hidden gem! Found a gorgeous designer bag for a steal. The staff is so knowledgeable and the selection is always fresh.",
    date: '2 months ago'
  },
  {
    id: 'r2',
    author: 'Melissa K.',
    rating: 5,
    text: "I love consigning here. They are organized, professional, and very fair. The shop is always curated so beautifully—it feels like a high-end boutique.",
    date: '1 month ago'
  },
  {
    id: 'r3',
    author: 'Rachel W.',
    rating: 5,
    text: "Been shopping here for years. Best designer selection in Atlanta by far. I always find something unique and at a great price point.",
    date: '3 weeks ago'
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

export const LOGO_PATH = '/consigning-women-logo.gif';
export const SIMPLECONSIGN_LINK = 'https://consigningwomen.consignoraccess.com/login';
export const FACEBOOK_LINK = 'https://www.facebook.com/people/Consigning-Women-Atlanta/100057294286434/';
export const INSTAGRAM_LINK = 'https://www.instagram.com/consigningwomen.atlanta/';
