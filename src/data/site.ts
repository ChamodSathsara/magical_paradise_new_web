export const SITE = {
  name: 'Magical Paradise',
  tagline:
  'Crafting luxury travel experiences and unforgettable memories across the beautiful island of Sri Lanka and the Maldives.',
  phone: '+94774365214',
  phoneHref: 'tel:+94774365214',
  altPhone: '+94774365214',
  landline: '+94 (0) 112 239 443',
  landlineHref: 'tel:+94112239443',
  email: 'travel@magicalparadise.lk',
  enquiryEmail: 'travel@magicalparadise.lk',
  whatsapp: 'https://wa.me/94774365214',
  address: 'No 109/G, St Theresa Mawatha, Kandana, Sri Lanka',
  license: 'Licensed by Sri Lanka Tourism Development Authority — License No: SLTDA/2024/0847',
  instagram: 'https://www.instagram.com/magicalparadise.srilanka',
  facebook: 'https://www.facebook.com/magicalparadise.lk',
  tiktok: 'https://www.tiktok.com/@magicalparadisesrilanka',
  tripadvisor: 'https://www.tripadvisor.com/Attraction_Review-g12901287-d17721017-Reviews-Magical_Paradise-Kandana_Western_Province.html'
};

export const NAV_LINKS = [
{ label: 'Home', to: '/' },
{ label: 'Packages', to: '/packages' },
{ label: 'Destinations', to: '/destinations' },
{ label: 'Experiences', to: '/experiences' },
{ label: 'Hotels', to: '/hotels' },
{ label: 'Shop', to: '/shop' },
{ label: 'About', to: '/about' },
{ label: 'Contact', to: '/contact' }];


export const TRUST_STATS = [
{ value: '15+', label: 'Years Experience' },
{ value: '5000+', label: 'Happy Travelers' },
{ value: '200+', label: 'Curated Tours' },
{ value: '4.9', label: 'TripAdvisor Rating' }];


export const STORY_PARAGRAPHS = [
"Founded over 15 years ago, Magical Paradise was born out of a deep passion for Sri Lanka's unparalleled beauty and rich heritage. We started as a small team of local experts who wanted to share the authentic soul of our island with the world.",
"Today, we are recognized as one of the premier luxury destination management companies in Sri Lanka. We don't just sell tours; we craft personalized journeys that immerse you in the culture, nature, and warmth of our people.",
'Our commitment goes beyond luxury. We are dedicated to sustainable tourism practices that protect our environment and uplift local communities, ensuring that the magic of Sri Lanka endures for generations to come.'];


export const STORY_PILLARS = [
{
  title: 'Local Expertise',
  description:
  "Over 15 years of intimate knowledge of Sri Lanka's hidden gems and best-kept secrets.",
  icon: 'compass'
},
{
  title: 'Personalized Service',
  description:
  'Every itinerary is meticulously tailored to your unique preferences, pace, and style.',
  icon: 'sparkles'
},
{
  title: 'Sustainable Tourism',
  description:
  'Eco-friendly practices that respect wildlife and support local artisans and communities.',
  icon: 'leaf'
}] as
const;

export const SERVICES = [
{
  title: 'Baby Car Seats',
  description: 'Safe and comfortable travel for your little ones.',
  icon: 'baby'
},
{
  title: 'Cool Boxes',
  description: 'Keep your beverages chilled during long drives.',
  icon: 'snowflake'
},
{
  title: 'Branded T-Shirts',
  description: 'Complimentary Magical Paradise apparel.',
  icon: 'shirt'
},
{
  title: 'Ceylon Tea',
  description: 'Premium tea purchases directly from estates.',
  icon: 'leaf'
},
{
  title: 'Spices & Cinnamon',
  description: 'Authentic Sri Lankan spices to take home.',
  icon: 'flame'
},
{
  title: 'Airport Transfers',
  description: 'Seamless VIP meet and greet at the airport.',
  icon: 'plane'
}] as
const;

export const WHY_US = [
{
  title: 'Expert Local Guides',
  description:
  'Handpicked guides with deep regional knowledge and genuine passion for sharing their homeland.',
  icon: 'users'
},
{
  title: 'Award-Winning',
  description:
  'Recognized by international travel bodies for excellence in luxury and sustainable tourism.',
  icon: 'award'
},
{
  title: 'Island-Wide Network',
  description:
  'Exclusive partnerships with the finest hotels, drivers, and experience providers across Sri Lanka.',
  icon: 'network'
},
{
  title: '24/7 Support',
  description:
  "Round-the-clock assistance throughout your journey — we're always just a call away.",
  icon: 'headset'
}] as
const;

export type Testimonial = {
  quote: string;
  name: string;
  location: string;
  tripType: string;
};

export const TESTIMONIALS: Testimonial[] = [
{
  quote:
  'An absolutely flawless experience from start to finish. Our driver was incredibly knowledgeable, the hotels were breathtaking, and the itinerary was perfectly paced. Magical Paradise truly lives up to its name.',
  name: 'Sarah & James',
  location: 'United Kingdom',
  tripType: 'Cultural Triangle'
},
{
  quote:
  'We booked our honeymoon through them and it exceeded all expectations. The private dinner in Ella and the seamless transfer to the Maldives made it the trip of a lifetime. Highly recommend their services!',
  name: 'Michael Chen',
  location: 'Singapore',
  tripType: 'Honeymoon'
},
{
  quote:
  'As a solo female traveler, safety and comfort were my top priorities. The team ensured I felt secure while still experiencing the authentic culture of Sri Lanka. The tea country tour was my absolute favorite.',
  name: 'Emma Schmidt',
  location: 'Germany',
  tripType: 'Solo'
}];


export const MALDIVES_OPTIONS = [
{
  title: '3-Night Quick Escape',
  description:
  'Perfect add-on after a busy cultural tour. Includes speedboat transfers and half-board dining.'
},
{
  title: '5-Night Romantic Retreat',
  description:
  'Overwater villa experience with seaplane transfers, spa treatments, and sunset cruises.'
},
{
  title: '7-Night Ultimate Luxury',
  description:
  'All-inclusive premium resort stay with private butler, underwater dining, and diving excursions.'
}];


export const CORPORATE_SERVICES = [
{ title: 'Team Building', description: 'Engaging activities in nature', icon: 'users' },
{ title: 'Conferences', description: 'Premium venue sourcing', icon: 'presentation' },
{ title: 'Incentive Travel', description: 'Reward your top performers', icon: 'trophy' },
{ title: 'Gala Dinners', description: 'Unforgettable evening events', icon: 'utensils' }] as
const;

export const FOOTER_DESTINATIONS = [
'Sigiriya & Cultural Triangle',
'Kandy & Hill Country',
'Ella & Nuwara Eliya',
'Galle & South Coast',
'Yala National Park',
'Maldives Extensions'];


export const FOOTER_SERVICES = [
'Luxury Tour Packages',
'Popular Day Tours',
'Boutique Hotels',
'Paradise Shop',
'Corporate Events',
'Airport Transfers',
'Travel Insurance'];
