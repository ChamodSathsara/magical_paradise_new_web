import { IMAGES } from './media';

export type Hotel = {
  id: string;
  name: string;
  location: string;
  stars: number;
  tagline?: string;
  description: string;
  image: string;
};

export const HOTELS: Hotel[] = [
{
  id: 'lake-lodge',
  name: 'Lake Lodge',
  location: 'Colombo',
  stars: 5,
  tagline: 'Eco-luxury masterpiece by Geoffrey Bawa',
  description:
  'A beautiful boutique hotel tucked away in the city, offering a peaceful retreat with a quiet location, modern and clean rooms, and a nice restaurant.',
  image: IMAGES.hotel
},
{
  id: 'langdale-by-amaya',
  name: 'Langdale by Amaya',
  location: 'Nuwara Eliya',
  stars: 5,
  tagline: 'Cliff-top luxury overlooking the Indian Ocean',
  description:
  'A luxury boutique hotel nestled amid breathtaking landscapes and lush tea plantations in the Nuwara Eliya hills, offering colonial charm, elegant rooms, and an outdoor heated infinity pool.',
  image: IMAGES.teaCountry
},
{
  id: 'arika-villa',
  name: 'Arika Villa',
  location: 'Dambulla',
  stars: 5,
  tagline: 'Historic grandeur within 17th-century walls',
  description:
  'A luxury boutique hotel set in a peaceful tropical garden with comfortable air-conditioned rooms and private terraces, an outdoor pool, and a restaurant serving Sri Lankan and Western cuisine.',
  image: IMAGES.sigiriya
},
{
  id: 'amaya-hills-kandy',
  name: 'Amaya Hills Kandy',
  location: 'Kandy',
  stars: 4,
  tagline: 'Boutique chalets amidst scenic tea estates',
  description:
  'A luxury hotel nestled in the hills of Kandy, offering traditional Sri Lankan architecture, a scenic outdoor pool, and panoramic city and mountain views.',
  image: IMAGES.kandy
},
{
  id: 'villa-hundira',
  name: 'Villa Hundira',
  location: 'Negombo',
  stars: 4,
  description:
  'A tranquil boutique villa set amid lush tropical gardens overlooking the Negombo Lagoon, featuring two outdoor pools and an in-house spa.',
  image: IMAGES.hotel
},
{
  id: 'the-grand-hotel',
  name: 'The Grand Hotel',
  location: 'Nuwara Eliya',
  stars: 5,
  tagline: 'Historic grandeur within 17th-century walls',
  description:
  'A historic four-star hotel built in the style of an Elizabethan-era manor house, blending old-world charm with modern comforts — spa, heated indoor pool, multiple restaurants, close to the Nuwara Eliya Golf Club.',
  image: IMAGES.teaCountry
},
{
  id: 'nest-wood-bungalow',
  name: 'Nest Wood Bungalow',
  location: 'Kalawana',
  stars: 5,
  description:
  'A charming cabin near the Sinharaja Forest Reserve offering an intimate escape into nature, with a pool and restaurant — ideal for wilderness and tranquility seekers.',
  image: IMAGES.ella
},
{
  id: 'corbets-bungalow',
  name: "Corbet's Bungalow",
  location: 'Meemure',
  stars: 5,
  description:
  'An eco-resort with a breathtaking view of the Knuckles Mountain Range — a hidden gem for nature lovers seeking remote, unspoiled highland beauty.',
  image: IMAGES.ella
},
{
  id: 'mountain-heavens',
  name: 'Mountain Heavens',
  location: 'Ella',
  stars: 5,
  description:
  'A serene hotel with a pool and on-site restaurant, offering panoramic views of the Ella Gap and surrounding mountains.',
  image: IMAGES.ella
},
{
  id: 'galway-heights-hotel',
  name: 'Galway Heights Hotel',
  location: 'Nuwara Eliya',
  stars: 5,
  description:
  'A luxurious hotel blending modern and colonial charm near Galway Land National Park, with an Irish-themed pub, elegant dining, and sweeping highland views.',
  image: IMAGES.teaCountry
},
{
  id: 'rajarata-hotel',
  name: 'Rajarata Hotel',
  location: 'Anuradhapura',
  stars: 5,
  description:
  'A luxurious hotel blending modern and traditional Sri Lankan charm in the heart of the ancient capital, with an outdoor pool and restaurant, close to major archaeological sites.',
  image: IMAGES.sigiriya
},
{
  id: 'taru-villas-riva',
  name: 'Taru Villas Riva',
  location: 'Negombo',
  stars: 5,
  description:
  "A boutique hotel in a refurbished Walauwwa (manor house), with an outdoor pool, lush garden, and BBQ facilities, minutes from Negombo's beaches and the international airport.",
  image: IMAGES.hotel
},
{
  id: 'w15-weligama',
  name: 'W15 Weligama',
  location: 'Weligama',
  stars: 5,
  description:
  'A stylish hotel with a beach club, outdoor pool, stunning sea views, and free WiFi — perfect for surfers and beach lovers.',
  image: IMAGES.mirissa
},
{
  id: 'waasala-eco-luxury-heaven',
  name: 'Waasala Eco Luxury Heaven',
  location: 'Anuradhapura',
  stars: 5,
  description:
  "An eco-friendly hotel near Anuradhapura's historical sites, with an outdoor pool, restaurant, and sustainable design.",
  image: IMAGES.sigiriya
},
{
  id: 'marino-beach-colombo',
  name: 'Marino Beach Colombo',
  location: 'Colombo',
  stars: 5,
  description:
  'A luxurious hotel in the heart of Colombo, with a rooftop infinity pool, full-service spa, and diverse dining with sweeping Indian Ocean views.',
  image: IMAGES.hotel
},
{
  id: 'cinnamon-citadel-kandy',
  name: 'Cinnamon Citadel Kandy',
  location: 'Kandy',
  stars: 5,
  description:
  "A serene four-star hotel on the banks of the Mahaweli River, with a pool, spa, and hill views — a refined base for exploring Sri Lanka's cultural capital.",
  image: IMAGES.kandy
},
{
  id: 'the-capoe-house',
  name: 'The Capoe House',
  location: 'Haputale',
  stars: 5,
  description:
  'A secluded luxury bungalow in the Haputale mountains with stunning views and an organic tea estate — focused on tranquility and comfort.',
  image: IMAGES.teaCountry
},
{
  id: 'c-beyond-nilaveli',
  name: 'C Beyond Nilaveli',
  location: 'Nilaveli',
  stars: 5,
  description:
  'A charming beachfront boutique hotel where the lagoon meets the sea, with an outdoor pool — a serene escape on the unspoiled north-east coast.',
  image: IMAGES.mirissa
}];