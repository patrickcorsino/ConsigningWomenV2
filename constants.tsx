
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
    author: 'Susan M.',
    rating: 5,
    text: 'Consigning Women is my absolute favorite shop. I always find high-quality designer pieces at a fraction of the cost. The staff is wonderful!',
    date: 'March 2024'
  },
  {
    id: 'r2',
    author: 'Debra L.',
    rating: 5,
    text: 'The only place I go for my luxury handbags. Everything is authenticated and in pristine condition. Highly recommend!',
    date: 'February 2024'
  },
  {
    id: 'r3',
    author: 'Linda P.',
    rating: 5,
    text: 'I love consigning here. They make the process so easy and the store is always beautiful. A true neighborhood gem.',
    date: 'January 2024'
  }
];

export const LOCATION_INFO: LocationInfo = {
  address: '2508 Shallowford Rd NE',
  city: 'Atlanta',
  state: 'GA',
  zip: '30345',
  phone: '(404) 321-7221',
  hours: {
    'Monday - Friday': '10:00 AM - 6:00 PM',
    'Saturday': '10:00 AM - 5:00 PM',
    'Sunday': 'Closed'
  }
};

export const SIMPLECONSIGN_LINK = 'https://www.simpleconsign.com/customer/login.php?id=consigningwomen';
export const FACEBOOK_LINK = 'https://facebook.com/consigningwomenatlanta';
export const INSTAGRAM_LINK = 'https://instagram.com/consigningwomenatl';
