import { IMAGES } from './media';

export type PackageCategory = 'day' | 'couple' | 'more' | 'maldives' | 'flagship';

export type ItineraryDay = {
  day: number;
  title: string;
  description: string;
};

export type TourPackage = {
  id: string;
  title: string;
  category: PackageCategory;
  duration: string;
  price: string;
  priceNote: string;
  badge?: string;
  tags: string[];
  summary: string;
  image: string;
  featured?: boolean;
  special?: boolean;
  overview?: string;
  itinerary?: ItineraryDay[];
  includes?: string[];
  excludes?: string[];
};

export const PACKAGE_CATEGORIES: {
  id: 'all' | 'offers' | PackageCategory;
  label: string;
  headline: string;
}[] = [
{ id: 'all', label: 'All Packages', headline: 'Every Experience We Offer' },
{ id: 'offers', label: 'Special Offers', headline: 'Every Experience We Offer' },
{ id: 'day', label: 'Day Packages', headline: 'Perfect Single-Day Adventures' },
{ id: 'couple', label: 'Couple Packages', headline: 'Romantic Escapes for Two' },
{ id: 'more', label: 'More Packages', headline: 'Extended Island Experiences' },
{ id: 'maldives', label: 'Maldives', headline: 'Maldives Paradise Escapes' }];


const FLAGSHIP_ITINERARY: ItineraryDay[] = [
{
  day: 1,
  title: 'Airport → Negombo',
  description:
  'Warm welcome at Bandaranaike International Airport, met by a Magical Paradise tour coordinator, transfer to Negombo (10 km), sightseeing and shopping in town, overnight in Negombo.'
},
{
  day: 2,
  title: 'Kithulgala → Udawalawe',
  description:
  'Water sports at Kithulgala, drive to Udawalawe National Park, evening elephant safari, wild buffalo / sambar deer / leopard spotting, overnight in Udawalawe.'
},
{
  day: 3,
  title: 'Udawalawe → Sinharaja',
  description:
  'Morning visit to the Elephant Transit Home (feeding times 9am / 12pm / 3pm / 6pm), drive to the Sinharaja Rainforest (UNESCO World Heritage Site and Biosphere Reserve), overnight in Sinharaja.'
},
{
  day: 4,
  title: 'Sinharaja → Yala',
  description:
  "Morning rainforest trek, drive to Yala National Park (215 bird species, one of the world's highest leopard densities), overnight in Yala."
},
{
  day: 5,
  title: 'Yala → Mirissa',
  description:
  'Morning safari at Yala, transfer to the picture-postcard crescent beach at Mirissa, overnight in Mirissa.'
},
{
  day: 6,
  title: 'Mirissa Whale Watching',
  description:
  '7am harbour departure, sightings of blue whales, sperm whales, and dolphins (bottlenose, spinner, striped), afternoon beach relaxation, overnight in Mirissa.'
},
{
  day: 7,
  title: 'Mirissa → Airport',
  description:
  'Optional turtle hatchery and Galle Dutch Fort (UNESCO heritage monument) visit en route, transfer to the airport, departure.'
}];


const STANDARD_INCLUDES = [
'Private air-conditioned vehicle with English-speaking chauffeur guide',
'Accommodation as specified with daily breakfast',
'All entrance fees to listed sites and national parks',
'Airport meet & greet with VIP fast-track assistance',
'Complimentary bottled water, cool box and baby car seats on request',
'24/7 on-trip support from our Colombo operations desk'];


const STANDARD_EXCLUDES = [
'International flights and visa / ETA fees',
'Travel and medical insurance',
'Lunches, dinners and beverages unless stated',
'Optional excursions and spa treatments',
'Camera permits, tips and personal expenses'];


export const PACKAGES: TourPackage[] = [
// ---------- DAY PACKAGES ----------
{
  id: 'sigiriya-dambulla-day-tour',
  title: 'Sigiriya & Dambulla Day Tour',
  category: 'day',
  duration: '1 Day',
  price: 'From $89',
  priceNote: 'per person',
  badge: 'Most Popular',
  tags: ['Culture', 'History'],
  summary:
  'Climb the legendary Lion Rock fortress and explore the stunning Dambulla Cave Temple in a single epic day.',
  image: IMAGES.sigiriya,
  featured: true
},
{
  id: 'kandy-city-temple-tour',
  title: 'Kandy City & Temple Tour',
  category: 'day',
  duration: '1 Day',
  price: 'From $69',
  priceNote: 'per person',
  tags: ['Culture', 'Spiritual'],
  summary:
  "Visit the sacred Temple of the Tooth Relic, Kandy Lake, and the botanical gardens in Sri Lanka's hill capital.",
  image: IMAGES.kandy,
  featured: true
},
{
  id: 'colombo-city-explorer',
  title: 'Colombo City Explorer',
  category: 'day',
  duration: '1 Day',
  price: 'From $55',
  priceNote: 'per person',
  tags: ['City', 'Shopping'],
  summary:
  'Discover colonial architecture, vibrant markets, seaside promenades, and the best street food in Colombo.',
  image: IMAGES.culinary
},
{
  id: 'yala-half-day-safari',
  title: 'Yala Half-Day Safari',
  category: 'day',
  duration: '1 Day',
  price: 'From $120',
  priceNote: 'per person',
  badge: 'Thrill Seeker',
  tags: ['Wildlife', 'Nature'],
  summary:
  'Track leopards, elephants, and exotic birds in Yala National Park on an exhilarating early morning safari.',
  image: IMAGES.yala,
  featured: true
},
{
  id: 'ella-hike-nine-arches',
  title: 'Ella Hike & Nine Arches',
  category: 'day',
  duration: '1 Day',
  price: 'From $75',
  priceNote: 'per person',
  tags: ['Adventure', 'Scenic'],
  summary:
  "Hike Little Adam's Peak, photograph the iconic Nine Arch Bridge, and sip fresh tea at a hilltop estate.",
  image: IMAGES.ella,
  featured: true
},
{
  id: 'mirissa-whale-watching',
  title: 'Mirissa Whale Watching',
  category: 'day',
  duration: '1 Day',
  price: 'From $95',
  priceNote: 'per person',
  badge: 'Seasonal',
  tags: ['Ocean', 'Wildlife'],
  summary:
  "Set sail at dawn to witness majestic blue whales and playful dolphins off Sri Lanka's southern coast.",
  image: IMAGES.mirissa
},
{
  id: 'galle-fort-heritage-walk',
  title: 'Galle Fort Heritage Walk',
  category: 'day',
  duration: '1 Day',
  price: 'From $60',
  priceNote: 'per person',
  tags: ['History', 'Culture'],
  summary:
  'Wander through cobblestone streets of the UNESCO-listed Dutch Galle Fort and its charming boutiques.',
  image: IMAGES.galle
},
{
  id: 'nuwara-eliya-tea-country',
  title: 'Nuwara Eliya Tea Country',
  category: 'day',
  duration: '1 Day',
  price: 'From $80',
  priceNote: 'per person',
  badge: 'Scenic',
  tags: ['Nature', 'Tea'],
  summary:
  'Tour a working tea factory, stroll through emerald green estates, and enjoy high tea at a colonial bungalow.',
  image: IMAGES.teaCountry
},

// ---------- COUPLE PACKAGES ----------
{
  id: 'romantic-honeymoon-escape',
  title: 'Romantic Honeymoon Escape',
  category: 'couple',
  duration: '8 Days',
  price: 'From $1,299',
  priceNote: 'per person',
  badge: 'Best Value',
  tags: ['Luxury', 'Honeymoon'],
  summary:
  'Luxury boutique hotels, private candlelit dinners, and unforgettable couples experiences across the island.',
  image: IMAGES.hotel,
  featured: true,
  special: true
},
{
  id: 'sunset-coast-getaway',
  title: 'Sunset Coast Getaway',
  category: 'couple',
  duration: '4 Days',
  price: 'From $649',
  priceNote: 'per person',
  tags: ['Beach', 'Romance'],
  summary:
  'Private beach dinners, sunset catamaran cruises, and couple spa rituals along the golden southern coast.',
  image: IMAGES.mirissa
},
{
  id: 'hill-country-love-trail',
  title: 'Hill Country Love Trail',
  category: 'couple',
  duration: '5 Days',
  price: 'From $749',
  priceNote: 'per person',
  tags: ['Scenic', 'Adventure'],
  summary:
  'Misty mountains, scenic train rides, and cozy heritage bungalows — romance woven into every moment.',
  image: IMAGES.teaCountry
},
{
  id: 'culture-candlelight-tour',
  title: 'Culture & Candlelight Tour',
  category: 'couple',
  duration: '6 Days',
  price: 'From $899',
  priceNote: 'per person',
  badge: 'Curated',
  tags: ['Culture', 'Luxury'],
  summary:
  'Ancient temples by day, rooftop dining and infinity pool evenings in boutique heritage hotels by night.',
  image: IMAGES.kandy
},
{
  id: 'luxury-villa-retreat',
  title: 'Luxury Villa Retreat',
  category: 'couple',
  duration: '7 Days',
  price: 'From $1,599',
  priceNote: 'per person',
  badge: 'Premium',
  tags: ['Luxury', 'Private'],
  summary:
  'Exclusive private villa with pool, personal chef, couples yoga, and custom island excursions on demand.',
  image: IMAGES.hotel,
  special: true
},
{
  id: 'whale-watch-beach-bliss',
  title: 'Whale Watch & Beach Bliss',
  category: 'couple',
  duration: '3 Days',
  price: 'From $499',
  priceNote: 'per person',
  tags: ['Ocean', 'Romance'],
  summary:
  'Sail with whales at sunrise, snorkel coral gardens, and unwind at a beachfront couples resort.',
  image: IMAGES.mirissa
},

// ---------- MORE PACKAGES ----------
{
  id: 'cultural-triangle-explorer',
  title: 'Cultural Triangle Explorer',
  category: 'more',
  duration: '7 Days',
  price: 'From $899',
  priceNote: 'per person',
  badge: 'Classic',
  tags: ['Culture', 'Heritage'],
  summary:
  'Discover ancient kingdoms, majestic stupas, and the iconic Sigiriya Rock Fortress on this heritage circuit.',
  image: IMAGES.sigiriya,
  featured: true,
  special: true
},
{
  id: 'coastal-paradise',
  title: 'Coastal Paradise',
  category: 'more',
  duration: '5 Days',
  price: 'From $649',
  priceNote: 'per person',
  tags: ['Beach', 'Surf'],
  summary:
  'Relax on pristine southern beaches, surf in Weligama, and explore historic Galle Fort.',
  image: IMAGES.galle
},
{
  id: 'wildlife-safari-adventure',
  title: 'Wildlife Safari Adventure',
  category: 'more',
  duration: '6 Days',
  price: 'From $799',
  priceNote: 'per person',
  badge: 'Adventure',
  tags: ['Wildlife', 'Safari'],
  summary:
  'Spot elusive leopards in Yala, elephants in Minneriya, and diverse birdlife across national parks.',
  image: IMAGES.yala,
  featured: true
},
{
  id: 'complete-sri-lanka',
  title: 'Complete Sri Lanka',
  category: 'more',
  duration: '14 Days',
  price: 'From $1,899',
  priceNote: 'per person',
  badge: 'Grand Tour',
  tags: ['All-inclusive', 'Epic'],
  summary:
  'The ultimate grand tour covering culture, nature, wildlife, and beaches in one unforgettable journey.',
  image: IMAGES.ella,
  special: true
},
{
  id: 'family-fun-island',
  title: 'Family Fun Island',
  category: 'more',
  duration: '10 Days',
  price: 'From $1,199',
  priceNote: 'per person',
  badge: 'Family',
  tags: ['Family', 'Kids'],
  summary:
  'Kid-friendly safaris, ancient forts, beach days, and cultural workshops designed for the whole family.',
  image: IMAGES.mirissa
},
{
  id: 'ayurveda-wellness',
  title: 'Ayurveda & Wellness',
  category: 'more',
  duration: '7 Days',
  price: 'From $999',
  priceNote: 'per person',
  badge: 'Wellness',
  tags: ['Wellness', 'Spa'],
  summary:
  'Rejuvenate with authentic Ayurvedic treatments, meditation retreats, and organic cuisine at serene wellness centers.',
  image: IMAGES.hotel
},
{
  id: 'backpacker-budget-tour',
  title: 'Backpacker Budget Tour',
  category: 'more',
  duration: '10 Days',
  price: 'From $449',
  priceNote: 'per person',
  badge: 'Budget',
  tags: ['Budget', 'Adventure'],
  summary:
  'Experience the real Sri Lanka on a budget — hostels, tuk-tuks, local food, and off-the-beaten-path gems.',
  image: IMAGES.culinary
},
{
  id: 'photography-landscapes',
  title: 'Photography & Landscapes',
  category: 'more',
  duration: '8 Days',
  price: 'From $849',
  priceNote: 'per person',
  tags: ['Photography', 'Scenic'],
  summary:
  "Golden hour safaris, mist-soaked highlands, ancient ruins — a landscape photographer's dream itinerary.",
  image: IMAGES.teaCountry
},

// ---------- MALDIVES ----------
{
  id: 'maldives-overwater-bliss',
  title: 'Maldives Overwater Bliss',
  category: 'maldives',
  duration: '5 Days',
  price: 'From $2,199',
  priceNote: 'per person',
  badge: 'Best Seller',
  tags: ['Luxury', 'Overwater'],
  summary:
  'Wake up above the turquoise lagoon in a stunning overwater bungalow with private deck and direct ocean access.',
  image: IMAGES.maldives,
  featured: true,
  special: true
},
{
  id: 'maldives-diving-snorkel',
  title: 'Maldives Diving & Snorkel',
  category: 'maldives',
  duration: '7 Days',
  price: 'From $1,899',
  priceNote: 'per person',
  tags: ['Diving', 'Marine Life'],
  summary:
  "Explore vibrant coral reefs, swim with manta rays and whale sharks across some of the world's clearest waters.",
  image: IMAGES.maldives
},
{
  id: 'romantic-maldives-escape',
  title: 'Romantic Maldives Escape',
  category: 'maldives',
  duration: '6 Days',
  price: 'From $2,599',
  priceNote: 'per person',
  badge: 'Honeymoon',
  tags: ['Romance', 'Luxury'],
  summary:
  'Private candlelit dinners on the beach, couple spa treatments, and sunset cruises on a traditional dhoni.',
  image: IMAGES.maldives
},
{
  id: 'maldives-family-resort',
  title: 'Maldives Family Resort',
  category: 'maldives',
  duration: '7 Days',
  price: 'From $2,999',
  priceNote: 'per person',
  badge: 'Family',
  tags: ['Family', 'Resort'],
  summary:
  'All-inclusive family resort with kids clubs, dolphin watching, glass-bottom kayaking, and beachside fun.',
  image: IMAGES.maldives
},
{
  id: 'sri-lanka-maldives-combo',
  title: 'Sri Lanka & Maldives Combo',
  category: 'maldives',
  duration: '12 Days',
  price: 'From $3,299',
  priceNote: 'per person',
  badge: 'Popular',
  tags: ['Combo', 'Epic'],
  summary:
  "The ultimate dual-destination journey: explore Sri Lanka's cultural gems, then unwind in Maldivian paradise.",
  image: IMAGES.maldives,
  featured: true,
  special: true
},
{
  id: 'maldives-budget-getaway',
  title: 'Maldives Budget Getaway',
  category: 'maldives',
  duration: '4 Days',
  price: 'From $899',
  priceNote: 'per person',
  badge: 'Budget',
  tags: ['Budget', 'Beach'],
  summary:
  'Experience the magic of the Maldives without breaking the bank — local guesthouses, snorkeling, and sandbanks.',
  image: IMAGES.maldives
},
{
  id: 'maldives-liveaboard-cruise',
  title: 'Maldives Liveaboard Cruise',
  category: 'maldives',
  duration: '8 Days',
  price: 'From $2,499',
  priceNote: 'per person',
  badge: 'Adventure',
  tags: ['Cruise', 'Diving'],
  summary:
  'Sail through remote atolls, dive unexplored reefs, and sleep under a sky full of stars on a luxury liveaboard.',
  image: IMAGES.maldives
},
{
  id: 'private-island-retreat',
  title: 'Private Island Retreat',
  category: 'maldives',
  duration: '5 Days',
  price: 'From $4,499',
  priceNote: 'per person',
  badge: 'Ultra Luxury',
  tags: ['Private', 'Exclusive'],
  summary:
  'Exclusive buyout of a private island resort — your own piece of paradise with a personal butler and chef.',
  image: IMAGES.maldives,
  special: true
},

// ---------- FLAGSHIP ----------
{
  id: 'magical-romance',
  title: 'Magical Romance',
  category: 'flagship',
  duration: '14 Days',
  price: 'From $89',
  priceNote: 'per day, per person',
  badge: 'Most Popular',
  tags: ['Romance', 'Luxury'],
  summary:
  'Our signature romantic circuit — elephant safaris, rainforest treks, leopards and whales, ending on a crescent beach.',
  image: IMAGES.mirissa,
  featured: true,
  special: true,
  overview:
  'Magical Paradise takes pride in carefully selecting the most romantic and charming locations for this itinerary. Highlights include an elephant safari at Udawalawe National Park, the Elephant Transit Home feeding sessions, a trek through UNESCO Sinharaja Rainforest, leopard spotting at Yala National Park, whale and dolphin watching from Mirissa harbour, and an optional turtle hatchery / Galle Fort visit.',
  itinerary: FLAGSHIP_ITINERARY,
  includes: STANDARD_INCLUDES,
  excludes: STANDARD_EXCLUDES
},
{
  id: 'wild-and-wooly',
  title: 'Wild and Wooly',
  category: 'flagship',
  duration: '13 Days',
  price: 'From $85',
  priceNote: 'per day, per person',
  badge: 'Adventure',
  tags: ['Wildlife', 'Adventure'],
  summary:
  'Built for intrepid explorers — wildlife-rich parks and rainforest paired with a stronger focus on outdoor adventure.',
  image: IMAGES.yala,
  featured: true,
  special: true,
  overview:
  'Built for adventurous travellers who want to understand what Sri Lanka offers the intrepid explorer — combining the same wildlife-rich highlights (Udawalawe, Elephant Transit Home, Sinharaja, Yala, Mirissa whale watching) with a stronger focus on outdoor adventure.',
  itinerary: FLAGSHIP_ITINERARY,
  includes: STANDARD_INCLUDES,
  excludes: STANDARD_EXCLUDES
},
{
  id: 'a-walk-of-life',
  title: 'A Walk of Life',
  category: 'flagship',
  duration: '14 Days',
  price: 'From $82',
  priceNote: 'per day, per person',
  badge: 'Cultural',
  tags: ['Culture', 'Heritage'],
  summary:
  "A cultural odyssey through the island's heritage sites, traditions and living history, with wildlife and coastal highlights.",
  image: IMAGES.sigiriya,
  featured: true,
  special: true,
  overview:
  "Explores the cultural richness, traditions, and historical beauty of Sri Lanka through a carefully designed day-by-day itinerary covering the island's heritage sites alongside its wildlife and coastal highlights.",
  itinerary: FLAGSHIP_ITINERARY,
  includes: STANDARD_INCLUDES,
  excludes: STANDARD_EXCLUDES
}];


export function getPackage(id: string): TourPackage | undefined {
  return PACKAGES.find((p) => p.id === id);
}

export function packagesByCategory(category: 'all' | 'offers' | PackageCategory): TourPackage[] {
  if (category === 'all') return PACKAGES;
  if (category === 'offers') return PACKAGES.filter((p) => p.special);
  return PACKAGES.filter((p) => p.category === category);
}

export const FEATURED_PACKAGES = PACKAGES.filter((p) => p.featured);
export const DAY_PACKAGES = PACKAGES.filter((p) => p.category === 'day');