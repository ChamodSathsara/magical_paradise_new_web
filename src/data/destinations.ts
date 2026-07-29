import { IMAGES } from './media';

export type Destination = {
  id: string;
  name: string;
  region: string;
  summary: string;
  longDescription: string;
  image: string;
  bestTime: string;
  climate: string;
  highlights: string[];
  tips: string[];
  /** position on the stylised island map, as percentages */
  map: {top: number;left: number;};
  onMap?: boolean;
};

export const DESTINATIONS: Destination[] = [
{
  id: 'sigiriya',
  name: 'Sigiriya',
  region: 'Cultural Triangle',
  summary:
  'The legendary 5th-century rock fortress — a 200m monolith rising from the jungle, often called the Eighth Wonder of the World.',
  longDescription:
  'The legendary rock fortress (5th century AD) is a 200m monolithic rock rising from jungle — often called the Eighth Wonder of the World. Climb past ancient frescoes, the Mirror Wall, Lion Paws, and water gardens to summit ruins with panoramic views over the surrounding reservoirs and forest canopy.',
  image: IMAGES.sigiriya,
  bestTime: 'November–April',
  climate: 'Tropical, 28–34°C',
  highlights: [
  '1,200-step ascent to the summit palace ruins',
  'The ancient Sigiriya frescoes',
  'The Mirror Wall inscriptions',
  'The Lion Paws gate and rock-cut moat',
  'The 5th-century water gardens',
  'Panoramic jungle and reservoir views'],

  tips: [
  'Climb early (6–8am) to avoid the heat and the crowds.',
  'Pair with Pidurangala Rock for the best view of Sigiriya itself.',
  'Dambulla Cave Temple is only 17 km away — perfect same-day addition.'],

 map: { top: 49, left: 53 },
  onMap: true
},
{
  id: 'mirissa',
  name: 'Mirissa',
  region: 'South Coast',
  summary:
  "The jewel of the southern coast — world-class whale watching, golden crescent beaches and stilt fishermen at sunset.",
  longDescription:
  "The jewel of southern Sri Lanka's coast, offering world-class whale watching (blue whales December–April), excellent surfing, golden beaches, and views of traditional stilt fishermen. Fresh seafood and sunset cocktails make it perfect for beach lovers.",
  image: IMAGES.mirissa,
  bestTime: 'January–April',
  climate: 'Tropical, 27–32°C',
  highlights: [
  'Blue whale and dolphin watching from Mirissa harbour',
  'Coconut Tree Hill at golden hour',
  'Beginner-friendly surf breaks',
  'Traditional stilt fishermen',
  'Fresh seafood on the sand'],

  tips: [
  'Whale watching boats leave at 6:30–7am — book the earliest slot for calmest seas.',
  'Choose licensed operators that keep a respectful distance from the whales.'],

  map: { top: 84, left: 44 },
  onMap: true
},
{
  id: 'ella',
  name: 'Ella',
  region: 'Hill Country',
  summary:
  'A misty highland village of waterfalls, tea plantations and the iconic Nine Arch Bridge.',
  longDescription:
  "A misty highland village surrounded by panoramic views of mountains, valleys, waterfalls, and tea plantations. Highlights include the iconic Nine Arch Bridge, the Ella Rock hike, Ravana Falls, the scenic hill-country train journey, and sunrise from Little Adam's Peak.",
  image: IMAGES.ella,
  bestTime: 'December–March',
  climate: 'Cool & misty, 18–26°C',
  highlights: [
  'The Nine Arch Bridge',
  'Ella Rock hike',
  'Ravana Falls',
  "Sunrise from Little Adam's Peak",
  'The Kandy–Ella hill country train'],

  tips: [
  'Book train seats in advance — the Kandy to Ella leg sells out weeks ahead.',
  'Evenings are cool; bring a light layer even in the dry season.'],

  map: { top: 68, left: 61 },
  onMap: true
},
{
  id: 'yala',
  name: 'Yala',
  region: 'Wildlife & Safari',
  summary:
  "Sri Lanka's most popular national park, home to the world's highest density of leopards.",
  longDescription:
  "Sri Lanka's most popular national park (over 1,000 sq km) is home to the world's highest leopard density plus elephants, crocodiles, sloth bears, and hundreds of bird species — a must for big cat and elephant spotting.",
  image: IMAGES.yala,
  bestTime: 'February–July',
  climate: 'Dry zone, 28–35°C',
  highlights: [
  'Leopard tracking at dawn',
  'Elephant and sloth bear sightings',
  '215+ recorded bird species',
  'Rock outcrops and coastal lagoons'],

  tips: [
  'The 5:30am game drive gives the best leopard odds.',
  'Bring a zoom lens, neutral clothing and a hat — jeeps are open-sided.'],

  map: { top: 77, left: 73 },
  onMap: true
},
{
  id: 'galle',
  name: 'Galle',
  region: 'South Coast / Historical',
  summary:
  'A UNESCO World Heritage maritime gem — 16th-century ramparts, cobbled streets and boutique cafés.',
  longDescription:
  "Sri Lanka's historic maritime gem and UNESCO World Heritage Site. The 16th-century Galle Fort features ramparts, cobblestone streets, boutique shops, cafes, and stunning ocean views — stroll the walls at sunset for pure magic.",
  image: IMAGES.galle,
  bestTime: 'December–April',
  climate: 'Tropical, 27–32°C',
  highlights: [
  'Sunset walk along the fort ramparts',
  'The Dutch Reformed Church and lighthouse',
  'Boutique galleries and gem shops',
  'Maritime Museum'],

  tips: [
  'Walk the ramparts an hour before sunset for the best light.',
  'The fort is compact — explore on foot rather than by vehicle.'],

  map: { top: 82, left: 38 },
  onMap: true
},
{
  id: 'kandy',
  name: 'Kandy',
  region: 'Hill Country / Cultural',
  summary:
  "The island's sacred cultural capital, home to the Temple of the Tooth Relic.",
  longDescription:
  "Sri Lanka's sacred cultural capital in the hills, home to the iconic Temple of the Tooth Relic. Surrounds include Kandy Lake, botanical gardens, cultural dance shows, and vibrant markets — the gateway to hill country.",
  image: IMAGES.kandy,
  bestTime: 'January–April',
  climate: 'Mild, 22–30°C',
  highlights: [
  'Temple of the Sacred Tooth Relic evening pooja',
  'Peradeniya Royal Botanical Gardens',
  'Kandyan dance and drumming performance',
  'Kandy Lake and the central market'],

  tips: [
  'Dress modestly for the temple — shoulders and knees covered, shoes off.',
  'Time your visit with the evening pooja for the most atmospheric experience.'],

  map: { top: 61, left: 49 },
  onMap: true
},
{
  id: 'nuwara-eliya',
  name: 'Nuwara Eliya',
  region: 'Hill Country / Colonial & Tea',
  summary:
  '"Little England" — cool highland air, colonial bungalows, rose gardens and world-famous tea estates.',
  longDescription:
  'Known as "Little England," this cool highland hill station features rolling hills, colonial buildings, rose gardens, and world-famous tea estates. Gregory Lake boating, tea tastings, and misty walks await.',
  image: IMAGES.teaCountry,
  bestTime: 'March–May',
  climate: 'Cool, 14–22°C',
  highlights: [
  'Working tea factory tour and tasting',
  'Gregory Lake boating',
  'Victoria Park and the rose gardens',
  'Colonial high tea at a heritage hotel'],

  tips: [
  'Pack warm clothes — nights drop close to 10°C.',
  'April is season time; book accommodation far in advance.'],

  map: { top: 66, left: 53 },
onMap: true,
},
{
  id: 'arugam-bay',
  name: 'Arugam Bay',
  region: 'East Coast / Surfing',
  summary:
  'The undisputed surf capital of Sri Lanka — world-class point breaks and laid-back beach shacks.',
  longDescription:
  'The undisputed surf capital of Sri Lanka — a picturesque bay on the southeast coast with world-class point breaks, yoga retreats, laid-back beach shacks, and nearby national parks. Best May–September for east coast swells.',
  image: IMAGES.mirissa,
  bestTime: 'May–September',
  climate: 'Tropical, 28–33°C',
  highlights: [
  'Main Point right-hand break',
  'Whiskey Point and Peanut Farm',
  'Kumana National Park birdlife',
  'Beachfront yoga retreats'],

  tips: [
  'The east coast season is the mirror opposite of the south — plan May to September.',
  'Sunrise surfs are glassy and uncrowded.'],

  map: { top: 68, left: 82 },
onMap: true,
},
{
  id: 'anuradhapura',
  name: 'Anuradhapura',
  region: 'Cultural Triangle / Ancient',
  summary:
  "Sri Lanka's first ancient capital — a UNESCO sacred city of colossal stupas and the sacred Bo Tree.",
  longDescription:
  'The first ancient capital of Sri Lanka (from the 4th century BC) — a UNESCO sacred city with massive stupas, the sacred Bo Tree, ancient tanks, palaces, and monasteries. Profound history and spiritual serenity.',
  image: IMAGES.sigiriya,
  bestTime: 'May–September',
  climate: 'Dry zone, 27–34°C',
  highlights: [
  'Sri Maha Bodhi — the sacred Bo Tree',
  'Ruwanwelisaya and Jetavanaramaya stupas',
  'Isurumuniya rock temple',
  'Ancient irrigation tanks'],

  tips: [
  'The site is vast — hire a bicycle or keep your vehicle for the day.',
  'White clothing is customary at the sacred precincts.'],

  map: { top: 43, left: 43 },
onMap: true,
},
{
  id: 'bentota',
  name: 'Bentota',
  region: 'South Coast / Beach',
  summary:
  'Golden beaches backed by coconut palms, a biodiverse lagoon and classic Ayurveda spas.',
  longDescription:
  "The jewel of Sri Lanka's southwest coast, boasting pristine golden beaches backed by coconut palms and a biodiverse lagoon. Popular for water sports, river safaris, turtle hatcheries, and Ayurveda spas.",
  image: IMAGES.mirissa,
  bestTime: 'November–April',
  climate: 'Tropical, 27–32°C',
  highlights: [
  'Madu River boat safari',
  'Turtle hatchery visit',
  'Jet skiing and banana boats',
  'Ayurveda spa rituals'],

  tips: [
  'Great first or last beach stop — only 2 hours from Colombo.',
  'The lagoon side is calmer for families than the open beach.'],

  map: { top: 74, left: 34 }
},
{
  id: 'polonnaruwa',
  name: 'Polonnaruwa',
  region: 'Cultural Triangle / Historical',
  summary:
  'A superbly preserved medieval capital of royal palaces and the Gal Vihara rock carvings.',
  longDescription:
  'A well-preserved UNESCO medieval capital with royal palaces, monumental Buddha statues (Gal Vihara rock carvings), and vast irrigation tanks. Cycle or explore the ruins amid monkeys and birds.',
  image: IMAGES.sigiriya,
  bestTime: 'May–September',
  climate: 'Dry zone, 27–34°C',
  highlights: [
  'Gal Vihara rock-cut Buddhas',
  'The Royal Palace and Audience Hall',
  'Parakrama Samudra reservoir',
  'Cycling the ancient city'],

  tips: [
  'Cycling is the best way to cover the site — hire bikes at the entrance.',
  'Start at 7am before the dry-zone heat builds.'],

  map: { top: 34, left: 63 }
},
{
  id: 'kitulgala',
  name: 'Kitulgala',
  region: 'Adventure / Nature',
  summary:
  'Adventure headquarters — white-water rafting, canyoning and waterfall abseiling on the Kelani River.',
  longDescription:
  "Sri Lanka's premier adventure hub nestled in thick jungle along the Kelani River. Famous for white-water rafting (Grade 3–4), canyoning, waterfall abseiling, mountain biking, and canopy walks.",
  image: IMAGES.ella,
  bestTime: 'May–December',
  climate: 'Wet zone, 24–31°C',
  highlights: [
  'Grade 3–4 white-water rafting',
  'Waterfall abseiling and canyoning',
  'Jungle canopy walks',
  '"Bridge on the River Kwai" filming location'],

  tips: [
  'Wear quick-dry clothing and secure footwear for rafting.',
  'Rain is frequent — waterproof your camera and valuables.'],

  map: { top: 57, left: 42 }
},
{
  id: 'jaffna',
  name: 'Jaffna',
  region: 'Northern / Cultural',
  summary:
  'The cultural heart of Tamil heritage — Hindu temples, a Dutch fort and islands with wild ponies.',
  longDescription:
  "Sri Lanka's northernmost peninsula and cultural heart of Tamil heritage. Explore ancient Hindu temples, the Dutch Fort, colourful markets, and nearby islands such as Delft with its wild ponies. Spicy cuisine and unique culture.",
  image: IMAGES.culinary,
  bestTime: 'February–September',
  climate: 'Dry, 28–35°C',
  highlights: [
  'Nallur Kandaswamy Kovil',
  'Jaffna Dutch Fort',
  'Delft Island and its wild ponies',
  'Distinctive Jaffna crab curry'],

  tips: [
  'The Colombo–Jaffna express train is a comfortable, scenic alternative to driving.',
  'Temples require removing shirts for men in some inner sanctums — check locally.'],

  map: { top: 8, left: 45 }
},
{
  id: 'negombo',
  name: 'Negombo',
  region: 'West Coast / Gateway',
  summary:
  'A lively coastal town minutes from the airport — wide beaches, Dutch canals and a famous fish market.',
  longDescription:
  'A lively coastal town just minutes from the airport — perfect as a first or last stop. Wide sandy beaches, a Dutch canal system, a famous fish market, and colonial fort remnants make it a relaxed introduction to the island.',
  image: IMAGES.mirissa,
  bestTime: 'November–April',
  climate: 'Tropical, 27–32°C',
  highlights: [
  'Negombo fish market at dawn',
  'The Dutch canal boat ride',
  'St. Mary\'s Church',
  'Long sandy beach strip'],

  tips: [
  'Only 10 km from Bandaranaike International Airport — ideal for arrival night.',
  'Visit the fish market before 7am to see the catch come in.'],

  map: { top: 47, left: 33 }
},
{
  id: 'wilpattu',
  name: 'Wilpattu',
  region: 'Wildlife & Safari',
  summary:
  "The island's largest and oldest national park, famous for its natural lakes and uncrowded leopard sightings.",
  longDescription:
  'Sri Lanka\'s largest and oldest national park (over 1,300 sq km), renowned for unique natural lakes ("villus") that attract leopards, elephants, sloth bears, crocodiles, and over 200 bird species in an uncrowded setting.',
  image: IMAGES.yala,
  bestTime: 'February–October',
  climate: 'Dry zone, 27–34°C',
  highlights: [
  'Villus — natural rainwater lakes',
  'Uncrowded leopard tracking',
  'Sloth bear sightings in June–July',
  '200+ bird species'],

  tips: [
  'Far quieter than Yala — fewer jeeps, longer sightings.',
  'Full-day safaris are worthwhile given the park size.'],

  map: { top: 20, left: 36 }
},
{
  id: 'haputale',
  name: 'Haputale',
  region: 'Hill Country / Scenic',
  summary:
  "A hidden mountain town with sweeping valley views — Lipton's Seat, Adisham Bungalow and misty treks.",
  longDescription:
  "A hidden mountainous town perched at the southern edge of hill country with sweeping valley views. Lipton's Seat tea estate lookout, Adisham Bungalow colonial mansion, and misty treks — less crowded than Ella.",
  image: IMAGES.teaCountry,
  bestTime: 'January–March',
  climate: 'Cool & misty, 16–24°C',
  highlights: [
  "Sunrise at Lipton's Seat",
  'Adisham Bungalow and monastery',
  'Dambatenne tea factory',
  'Misty ridge-top walks'],

  tips: [
  "Reach Lipton's Seat before 7am — cloud rolls in quickly after.",
  'A quieter, more local alternative to Ella.'],

  map: { top: 70, left: 56 }
},
{
  id: 'weligama',
  name: 'Weligama',
  region: 'South Coast / Surfing',
  summary:
  'A vast crescent bay with calm, beginner-friendly surf, whale watching and relaxed beach cafés.',
  longDescription:
  '"Sandy village" boasting one of the south coast\'s largest crescent bays with calm, beginner-friendly coves. The ultimate surf mecca with consistent waves, whale watching, yoga retreats, and relaxed beach cafes.',
  image: IMAGES.mirissa,
  bestTime: 'November–April',
  climate: 'Tropical, 27–32°C',
  highlights: [
  'Beginner surf lessons on the bay',
  'Stilt fishermen at Koggala',
  'Taprobane Island views',
  'Beach café and yoga scene'],

  tips: [
  'One of the safest places in Sri Lanka to learn to surf.',
  'Mirissa and Galle are both under 30 minutes away.'],

  map: { top: 84, left: 42 }
},
{
  id: 'dambulla',
  name: 'Dambulla',
  region: 'Cultural Triangle / Spiritual',
  summary:
  'The Golden Temple — a UNESCO cave complex with over 150 Buddha statues and centuries-old murals.',
  longDescription:
  'Home to the magnificent Golden Temple — a UNESCO-listed cave complex with over 150 Buddha statues, intricate murals, and centuries-old golden statues. Blends spiritual depth with natural beauty; often paired with Sigiriya.',
  image: IMAGES.kandy,
  bestTime: 'November–April',
  climate: 'Tropical, 28–34°C',
  highlights: [
  'Five painted cave temples',
  '150+ Buddha statues',
  '2,000-year-old rock murals',
  'Views across the plains to Sigiriya'],

  tips: [
  'There is a steep stair climb to the caves — go early or late.',
  'Shoes must be removed at the top; socks help on hot stone.'],

  map: { top: 38, left: 51 }
},
{
  id: 'hatton',
  name: 'Hatton',
  region: 'Hill Country / Tea Estates',
  summary:
  "An emerald gateway to tea country and base for Adam's Peak pilgrimages and Horton Plains hikes.",
  longDescription:
  "An emerald-green gateway to tea country, blanketed in rolling plantations, dense forests, and thundering waterfalls. A base for Adam's Peak pilgrimages, Horton Plains hikes, scenic train rides, and fresh high-grown tea tastings.",
  image: IMAGES.teaCountry,
  bestTime: 'December–April',
  climate: 'Cool, 16–25°C',
  highlights: [
  "Adam's Peak (Sri Pada) night climb",
  "Horton Plains and World's End",
  'Devon and St. Clair waterfalls',
  'High-grown tea estate stays'],

  tips: [
  "The Adam's Peak season runs December to May — climb overnight for sunrise.",
  "Horton Plains needs an early start to see World's End before cloud cover."],

  map: { top: 58, left: 47 }
},
{
  id: 'colombo',
  name: 'Colombo',
  region: 'West Coast / City',
  summary:
  'The bustling seaside capital — colonial architecture, temples, rooftop bars and the Pettah market.',
  longDescription:
  'The bustling seaside capital blending colonial architecture, modern skyscrapers, temples, mosques, and the vibrant Pettah market. Stroll Galle Face Green, visit Gangaramaya Temple, and explore street food and nightlife.',
  image: IMAGES.culinary,
  bestTime: 'December–March',
  climate: 'Tropical, 27–33°C',
  highlights: [
  'Galle Face Green at sunset',
  'Gangaramaya Temple',
  'Pettah market and Red Mosque',
  'Rooftop dining and nightlife'],

  tips: [
  'Traffic is heaviest 7–9am and 4–7pm — plan transfers around it.',
  'Street food at Galle Face Green is a must at dusk.'],

 // colombo
map: { top: 67, left: 28 },
  onMap: true
}];


export function getDestination(id: string): Destination | undefined {
  return DESTINATIONS.find((d) => d.id === id);
}

export const MAP_DESTINATIONS = DESTINATIONS.filter((d) => d.onMap);