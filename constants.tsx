
import { Review, LocationInfo, FAQItem } from './types';

export const BRANDS = [
  'Chanel', 'Louis Vuitton', 'Hermès', 'Gucci', 'Burberry',
  'YSL', 'Dior', 'Jimmy Choo', 'Michael Kors', 'St. John',
  'Ralph Lauren', 'Tory Burch', 'Eileen Fisher', 'Free People',
];

// Real 5-star reviews pulled from the store's public Google listing (via loc8nearme aggregator).
export const REVIEWS: Review[] = [
  {
    id: 'r1',
    author: 'Verified Google Review',
    rating: 5,
    text: "Fun place, nice staff, nicely organized and high quality consignment.",
    date: 'August 2023'
  },
  {
    id: 'r2',
    author: 'Verified Google Review',
    rating: 5,
    text: "Nice designer items, even plus sizes. Attached to a lovely furniture resale store. Loved it!!",
    date: 'May 2021'
  },
  {
    id: 'r3',
    author: 'Verified Google Review',
    rating: 5,
    text: "The sales staff is always helpful in assisting you and providing alternative selections. Fun place to go and browse.",
    date: 'December 2019'
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

// ────────────────────────────────────────────────────────────
// Consignment program details (sourced verbatim from the live site)
// ────────────────────────────────────────────────────────────

export const CONSIGNMENT_TERMS = {
  commissionConsignor: 40,        // percent
  commissionStore: 60,            // percent
  daysOnFloor: 60,
  daysUntilDonation: 65,
  checkMinimum: 50,               // dollars
  payoutDay: 'the 10th of each month',
  checkExpirationMonths: 6,
  itemsPerAppointment: 25,
  monthOneDiscount: 0,            // full price
  monthTwoDiscount: 25,           // percent off
};

export const ACCEPTED_CATEGORIES = [
  "Women's clothing, sizes 0–4X",
  'Designer denim',
  'Dresses, blouses, and outerwear',
  'Shoes and handbags',
  'Authentic designer handbags',
  'Signed or unique jewelry',
  'New-with-tag pieces from any brand',
];

export const ACCEPTED_JEAN_BRANDS = [
  'AG', 'All Saints', 'Aqua', 'Blank NYC', 'Black Orchid', 'Cabi',
  'Democracy', 'Eileen Fisher', 'Frame', 'Free People', 'Hatch',
  'Hollister', 'J.McLaughlin', 'Joe’s', 'Madewell', 'Miss Me',
  'Michael Kors', 'NYDJ', 'Paige', 'Pilcro', 'Rails', '1.State',
  'Seven for All Mankind', 'Tractr',
];

export const EXCLUDED_CATEGORIES = [
  'Wedding dresses',
  'Vintage pieces',
  'Lingerie',
  'Most unsigned jewelry',
  'Non-original handbags or designer replicas',
];

export const EXCLUDED_BRANDS = [
  'Alfred Dunner', 'Apt. 9', 'A.N.A', 'Amazon', 'A New Day',
  'Croft & Barrow', 'Cable & Gauge', 'Charter Club', 'East 5th',
  'Express', 'Forever 21', 'Gap', 'H&M', 'Isaac Mizrahi for Target',
  'Liz Claiborne', 'The Limited', 'Loft', 'Massimo', 'Merona',
  'New Direction', 'No Boundaries', 'Old Navy', 'Rafaella',
  'Ruby Rd.', 'St. John’s Bay', 'Shein', 'Spense', 'Style & Co.',
  'Time & True', 'Universal Thread', 'Worthington', 'Wild Fable',
];

export const FAQS: FAQItem[] = [
  {
    q: 'How much will I earn on each item?',
    a: 'You receive 40% of the final selling price. Consigning Women keeps 60% to cover pricing, display, marketing, and the boutique experience that draws shoppers in.',
  },
  {
    q: 'How long do you keep my items on the floor?',
    a: 'Items consign for 60 days. Anything unsold after day 65 becomes the property of Consigning Women and is typically donated to a local charity partner.',
  },
  {
    q: 'When and how do I get paid?',
    a: 'Checks of $50 or more are ready for pickup on the 10th of each month. You can also use your earnings as in-store credit any time — no minimum, no waiting. Unclaimed checks are void after six months.',
  },
  {
    q: 'How do I book a consignment appointment?',
    a: 'Call us at 770-394-1600. We are appointment-only for consignment intake so we can give every consignor our full attention. Drop-offs and walk-ins are not accepted.',
  },
  {
    q: 'How should I prepare my items?',
    a: 'Bring up to 25 items per appointment, freshly cleaned, pressed, and on hangers. Items should be in the current or upcoming season and in excellent gently-worn (or new) condition.',
  },
  {
    q: 'What if you don’t accept some of my items?',
    a: 'You’re welcome to take them home, or we’ll happily donate them to one of our local charity partners on your behalf.',
  },
  {
    q: 'Do you authenticate designer handbags and accessories?',
    a: 'Yes. Our team has years of hands-on experience with designer pieces. We do not accept replicas of any kind, even high-quality ones.',
  },
  {
    q: 'How are items priced?',
    a: 'We price at fair resale market value. Share any details you have (original cost, age, special edition) and we’ll combine that with current demand. Items sell at full ticket price for month one, then move to 25% off in month two. Occasional store promotions may apply.',
  },
  {
    q: 'Are my items insured while in the store?',
    a: 'Items remain your property until they sell or until the 60-day consignment period ends. We secure the store as best we can, but please cover anything especially valuable through your homeowner’s or renter’s insurance.',
  },
];
