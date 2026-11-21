export type MagicalDestination = {
  id: string;
  name: string;
  description: string;
  bestTime: string;
  perfectFor: string[];
  attractions: string[];
  experiences: string[];
  nearby: string[];
  lat: number;
  lng: number;
  map: { top: number; left: number };
  images: string[];
};

export const MAGICAL_DESTINATIONS: MagicalDestination[] = [
  {
    "name": "Sigiriya / Dambulla",
    "description": "Discover the heart of Sri Lanka’s Cultural Triangle, where ancient kingdoms, remarkable architecture and timeless traditions tell the story of a fascinating past. Sigiriya captivates visitors with its iconic Lion Rock fortress, dramatic scenery and ancient frescoes, while nearby Dambulla is renowned for its impressive cave temple complex, adorned with centuries-old Buddhist murals and statues. Surrounded by lush greenery, rural villages and scenic countryside, these destinations offer a memorable journey through the island’s rich history, spiritual heritage and extraordinary cultural treasures.",
    "bestTime": "December – April",
    "perfectFor": [
      "Culture",
      "History",
      "Families",
      "Photography",
      "Adventure",
      "Wildlife"
    ],
    "attractions": [
      "Sigiriya Rock Fortress",
      "Dambulla Cave Temple",
      "Pidurangala Rock",
      "Minneriya National Park",
      "Village Safari Experiences",
      "Sigiriya Museum",
      "Ritigala Forest Monastery"
    ],
    "experiences": [],
    "nearby": [
      "Polonnaruwa (1.5-2 hrs)",
      "Anuradhapura (2 hrs)",
      "Kandy(2.5 hrs)",
      "Knuckels Mountain Range (3 -3.5 hrs)",
      "Wasgamuwa( 2hrs)"
    ],
    "id": "sigiriya-dambulla",
    "lat": 7.92,
    "lng": 80.7,
    "map": {
      "top": 50.1,
      "left": 51.6
    },
    "images": [
      "/8de9dae7-2ef0-4497-8b69-866058baec8a.jpg",
      "/ff704484-a0b3-4483-b004-584fb344461f.jpg"
    ]
  },
  {
    "name": "Ella",
    "description": "Tucked away in Sri Lanka’s enchanting hill country, Ella is a picturesque mountain retreat celebrated for its breathtaking panoramas, lush tea plantations and laid-back village charm. Scenic hiking trails lead to iconic viewpoints such as Little Adam’s Peak and Ella Rock, while the famous Nine Arch Bridge showcases remarkable railway architecture amid emerald-green hills. Visitors can also discover cascading waterfalls, explore local cafés and enjoy the unforgettable experience of a scenic train journey through the misty highlands. With its blend of adventure, natural beauty and relaxed atmosphere, Ella is a favourite escape for nature lovers and explorers alike.",
    "bestTime": "January – AprilJuly – September",
    "perfectFor": [
      "Nature",
      "Adventure",
      "Honeymoon",
      "Hiking",
      "Photography",
      "Wellness"
    ],
    "attractions": [
      "Nine Arches Bridge",
      "Little Adam’s Peak",
      "Ella Rock",
      "Ravana Falls",
      "Flying Ravana Zipline",
      "Tea Plantation Experiences",
      "Demodara Loop"
    ],
    "experiences": [],
    "nearby": [
      "Haputale (45 minutes)",
      "Nuwara Eliya (2-2.5 hrs)",
      "Ohiya (1.5-2 hrs)",
      "Lipton’s seat (1hrs)",
      "Belihuloya (2 hrs)"
    ],
    "id": "ella",
    "lat": 6.87,
    "lng": 81.05,
    "map": {
      "top": 74.2,
      "left": 61.5
    },
    "images": [
      "/30e010b1-2b6c-4f87-81a5-d45d39aae23c.jpg",
      "/0eb3cc3f-eefc-41a9-8abb-186c7ee05029.jpg"
    ]
  },
  {
    "name": "Kandy",
    "description": "Nestled among mist-covered hills and lush tropical landscapes, Kandy is a captivating destination where Sri Lanka’s rich heritage and spiritual traditions come to life. As the island’s last royal capital, the city is home to the sacred Temple of the Tooth Relic, tranquil Kandy Lake and beautifully preserved cultural landmarks. Visitors can explore vibrant local markets, experience traditional Kandyan dance performances and discover the botanical wonders of nearby Peradeniya. Blending history, culture and natural beauty, Kandy offers an authentic glimpse into the island’s timeless traditions.",
    "bestTime": "December – April",
    "perfectFor": [
      "Culture",
      "Heritage",
      "Families",
      "Spiritual Travel",
      "Luxury Travel"
    ],
    "attractions": [
      "Temple of the Sacred Tooth Relic",
      "Kandy Lake",
      "Royal Botanical Gardens – Peradeniya",
      "Bahirawakanda Buddha Statue",
      "Kandy View Point",
      "Udawattakele Forest Reserve",
      "Traditional Kandyan Cultural Shows"
    ],
    "experiences": [],
    "nearby": [
      "Pinnawala (1hr)",
      "Knuckles (1.5n hrs)",
      "Nuwara Eliya (2.5-3 hrs)",
      "Kitulgala(2 hrs)",
      "Sigiriya (2.5-3 hrs)"
    ],
    "id": "kandy",
    "lat": 7.29,
    "lng": 80.64,
    "map": {
      "top": 64.6,
      "left": 49.9
    },
    "images": [
      "/8de9dae7-2ef0-4497-8b69-866058baec8a.jpg",
      "/ff704484-a0b3-4483-b004-584fb344461f.jpg"
    ]
  },
  {
    "name": "Nuwara Eliya",
    "description": "Nestled amidst rolling hills, misty mountains and endless tea plantations, Nuwara Eliya is fondly known as Little England for its colonial charm and cool-climate atmosphere. The town’s picturesque gardens, historic buildings and tranquil Gregory Lake create a refreshing escape from the island’s tropical lowlands. Visitors can explore verdant tea estates, discover the art of Ceylon tea production and enjoy scenic drives through winding mountain roads and cascading waterfalls. With its crisp mountain air and timeless elegance, Nuwara Eliya offers a delightful taste of Sri Lanka’s hill-country beauty.",
    "bestTime": "February – April",
    "perfectFor": [
      "Nature",
      "Honeymoon",
      "Wellness",
      "Tea Experiences",
      "Luxury Travel"
    ],
    "attractions": [
      "Gregory Lake",
      "Pedro Tea Estate",
      "Hakgala Botanical Garden",
      "Lover’s Leap Waterfall",
      "Victoria Park",
      "Moon Plains",
      "Horton Plains National Park"
    ],
    "experiences": [],
    "nearby": [
      "Ohiya (1 hr)",
      "Ella (2 -2.5hrs)",
      "Haputale (1.5-2 hrs)",
      "Mandaram Nuwara (1-1.5hrs)",
      "Kitulagala (2.5 -3hrs)"
    ],
    "id": "nuwara-eliya",
    "lat": 6.95,
    "lng": 80.79,
    "map": {
      "top": 72.4,
      "left": 54.2
    },
    "images": [
      "/8de9dae7-2ef0-4497-8b69-866058baec8a.jpg",
      "/ff704484-a0b3-4483-b004-584fb344461f.jpg"
    ]
  },
  {
    "name": "Weligama",
    "description": "Weligama is a vibrant southern coastal town renowned for surfing, golden beaches, and laid-back coastal living. Combining adventure and tropical charm, it has become a favourite destination among surfers and beach lovers. Its sweeping bay, gentle waves, and welcoming seaside atmosphere make it an ideal spot for both beginners eager to try surfing and seasoned wave riders. Beyond the beach, discover charming cafés, fresh seafood, colourful fishing boats, and the unique sight of traditional stilt fishermen along the coast. With its relaxed rhythm, beautiful ocean views, and captivating blend of local culture and modern beach life, Weligama invites you to slow down and embrace the easygoing spirit of Sri Lanka’s southern shores.",
    "bestTime": "November – April",
    "perfectFor": [
      "Surfing",
      "Beach Holidays",
      "Families",
      "Honeymoon",
      "Leisure"
    ],
    "attractions": [
      "Weligama Beach",
      "Surfing Experiences",
      "Coconut Tree Hill",
      "Snake Farm",
      "Whale Watching Excursions",
      "Taprobane Island",
      "Midigama Surf Points"
    ],
    "experiences": [],
    "nearby": [
      "Mirissa (15-30 minutes)",
      "Ahangama( 10-20 minutes)",
      "Galle (45 minutes-1 hr)",
      "Hiriketiya (45 minutes-1 hr)",
      "Talalla (35 minutes-1 hr)"
    ],
    "id": "weligama",
    "lat": 5.97,
    "lng": 80.43,
    "map": {
      "top": 94.8,
      "left": 44
    },
    "images": [
      "/8de9dae7-2ef0-4497-8b69-866058baec8a.jpg",
      "/ff704484-a0b3-4483-b004-584fb344461f.jpg"
    ]
  },
  {
    "name": "Galle",
    "description": "Galle is a charming coastal destination where centuries of history meet the relaxed elegance of seaside living. At its heart lies the UNESCO-listed Galle Fort, a beautifully preserved historic quarter of cobblestone streets, colonial-era architecture, old churches and charming Dutch-style buildings. Visitors can wander through boutique shops, art galleries and atmospheric cafés, stroll along the fort’s ocean-facing ramparts and enjoy spectacular sunset views over the Indian Ocean. With its rich maritime heritage, vibrant local culture and laid-back coastal charm, Galle offers a memorable blend of history, discovery and seaside romance.",
    "bestTime": "November – April",
    "perfectFor": [
      "Culture",
      "Luxury Travel",
      "Beach Holidays",
      "Families",
      "Photography"
    ],
    "attractions": [
      "Galle Fort",
      "Lighthouse of Galle",
      "Dutch Reformed Church",
      "Maritime Museum",
      "Jungle Beach",
      "Unawatuna Beach",
      "Rumassala"
    ],
    "experiences": [],
    "nearby": [
      "Weligama (45-1 hr)",
      "Ahangama(30 minutes)",
      "Hikkaduwa(30 minutes)",
      "Bnetota(1 hr)",
      "Koggala( 30 minutes)"
    ],
    "id": "galle",
    "lat": 6.03,
    "lng": 80.22,
    "map": {
      "top": 93.4,
      "left": 38.1
    },
    "images": [
      "/8de9dae7-2ef0-4497-8b69-866058baec8a.jpg",
      "/ff704484-a0b3-4483-b004-584fb344461f.jpg"
    ]
  },
  {
    "name": "Yala",
    "description": "Yala is a captivating wilderness destination where untamed nature and unforgettable wildlife encounters take centre stage. Home to one of the world’s highest densities of leopards, Yala National Park offers thrilling safari experiences through a diverse landscape of open grasslands, dense scrub forests, rocky outcrops and tranquil lagoons. Along the way, visitors may encounter majestic elephants, sloth bears, crocodiles and an extraordinary variety of birdlife in their natural habitat. Beyond the excitement of the safari, Yala’s rugged landscapes and peaceful surroundings create a remarkable connection with nature, making it an essential stop for wildlife enthusiasts and adventurous travellers exploring Sri Lanka.",
    "bestTime": "February – July",
    "perfectFor": [
      "Wildlife",
      "Adventure",
      "Photography",
      "Families",
      "Nature Lovers"
    ],
    "attractions": [
      "Yala National Park Safari",
      "Leopard Tracking Experiences",
      "Sithulpawwa Temple",
      "Kataragama Sacred City",
      "Wildlife Photography",
      "Bird Watching",
      "Sand Dunes at Yala Coastal Region"
    ],
    "experiences": [],
    "nearby": [
      "Kataragama( 30-45 minutes)",
      "Bundala(1 hr)",
      "Ella (2.5-3 hrs)",
      "Tangalle( 2hrs)",
      "Udawalawe (2.5 hrs)"
    ],
    "id": "yala",
    "lat": 6.37,
    "lng": 81.52,
    "map": {
      "top": 85.6,
      "left": 74.7
    },
    "images": [
      "/8de9dae7-2ef0-4497-8b69-866058baec8a.jpg",
      "/ff704484-a0b3-4483-b004-584fb344461f.jpg"
    ]
  },
  {
    "name": "Wilpattu",
    "description": "Wilpattu is a captivating wilderness destination on Sri Lanka’s northwestern coast, renowned for its expansive forests, natural lakes and remarkable wildlife. As one of the island’s largest national parks, it offers an immersive safari experience through dry-zone woodlands, open clearings and distinctive rain-fed lakes known as villus. Visitors may encounter the elusive Sri Lankan leopard, sloth bears, elephants, spotted deer and a fascinating variety of birdlife while exploring the park by jeep. With its untamed landscapes, quieter safari atmosphere and rich biodiversity, Wilpattu is an exceptional destination for wildlife enthusiasts, photographers and travellers seeking an authentic connection with nature.",
    "bestTime": "February – October",
    "perfectFor": [
      "Wildlife",
      "Nature",
      "Photography",
      "Bird Watching",
      "Adventure"
    ],
    "attractions": [
      "Wilpattu National Park Safari",
      "Leopard Sightings",
      "Natural Villu Lakes",
      "Ancient Ruins within Park Vicinity",
      "Bird Watching Trails",
      "Sloth Bear Encounters"
    ],
    "experiences": [],
    "nearby": [
      "Anuradhapura( 1hr)",
      "Mannar (2 hrs)",
      "Kalpitiya (2 hrs)",
      "Negombo( 3-3.5 hrs)",
      "Yapahuwa (2.5 hrs)"
    ],
    "id": "wilpattu",
    "lat": 8.45,
    "lng": 80.02,
    "map": {
      "top": 38,
      "left": 32.5
    },
    "images": [
      "/8de9dae7-2ef0-4497-8b69-866058baec8a.jpg",
      "/ff704484-a0b3-4483-b004-584fb344461f.jpg"
    ]
  },
  {
    "name": "Negombo",
    "description": "Located just a short drive from Bandaranaike International Airport, Negombo is a lively coastal town that offers a welcoming introduction to Sri Lanka’s island life and cultural heritage. Known for its golden beaches, traditional fishing communities and strong Portuguese, Dutch and British influences, the town blends colonial history with the rhythms of a bustling seaside destination. Visitors can explore the historic Dutch Canal, admire the architecture of St. Mary’s Church, discover the vibrant fish market and enjoy scenic boat rides across the Negombo Lagoon, where mangroves and rich birdlife create a beautiful natural setting. Fresh seafood, beachfront restaurants and colourful local markets add to its appeal, making Negombo an ideal starting point or relaxing final stop on a Sri Lankan journey.",
    "bestTime": "November – April",
    "perfectFor": [
      "Leisure",
      "Families",
      "Transit Stay",
      "Beach Holiday",
      "Seafood Experiences"
    ],
    "attractions": [
      "Negombo Beach",
      "Dutch Canal",
      "Fish Market",
      "Muthurajawela Wetlands",
      "Lagoon Boat Safaris",
      "St. Mary’s Church",
      "Beachfront Dining Experiences"
    ],
    "experiences": [],
    "nearby": [
      "Colombo (1hr)",
      "Kalpitiya(3 hrs)",
      "Chilaw (1.5 hrs)",
      "Bentota(2-2.5 hrs)",
      "Kithulgala(2.5-3 hrs)"
    ],
    "id": "negombo",
    "lat": 7.21,
    "lng": 79.84,
    "map": {
      "top": 66.4,
      "left": 27.5
    },
    "images": [
      "/8de9dae7-2ef0-4497-8b69-866058baec8a.jpg",
      "/ff704484-a0b3-4483-b004-584fb344461f.jpg"
    ]
  },
  {
    "name": "Colombo",
    "description": "Colombo is a captivating blend of colonial heritage, vibrant city life and modern sophistication, offering a fascinating glimpse into Sri Lanka’s past and present. From the historic charm of Fort and the colourful streets of Pettah to the oceanfront promenade of Galle Face Green and the serene beauty of Gangaramaya Temple, the city invites visitors to discover its many contrasts. With stylish hotels, diverse culinary experiences, bustling markets, boutique shopping and lively nightlife, Colombo is an ideal introduction to the island’s culture, character and contemporary lifestyle.",
    "bestTime": "December – April",
    "perfectFor": [
      "Luxury Travel",
      "Shopping",
      "Culture",
      "Families",
      "Business Travel"
    ],
    "attractions": [
      "Gangaramaya Temple",
      "Galle Face Green",
      "Independence Square",
      "Colombo National Museum",
      "Pettah Market",
      "Colombo Lotus Tower",
      "Port City Colombo"
    ],
    "experiences": [],
    "nearby": [
      "Negombo( 1hr)",
      "Bentota (1.5-2hrs)",
      "Kalutara((1.5-2hrs)",
      "Kitulgala(2-3hrs)",
      "Kandy (3-3.5hrs)"
    ],
    "id": "colombo",
    "lat": 6.93,
    "lng": 79.86,
    "map": {
      "top": 72.8,
      "left": 28
    },
    "images": [
      "/8de9dae7-2ef0-4497-8b69-866058baec8a.jpg",
      "/ff704484-a0b3-4483-b004-584fb344461f.jpg"
    ]
  },
  {
    "name": "Mahiyanganaya",
    "description": "Located in Sri Lanka’s eastern interior, Mahiyanganaya is a destination where ancient Buddhist heritage, indigenous culture and beautiful natural landscapes come together. The historic Mahiyangana Raja Maha Viharaya holds deep spiritual significance, while the surrounding countryside features tranquil reservoirs, lush paddy fields and scenic stretches of the Mahaweli River. Visitors can explore the peaceful shores of Sorabora Wewa, discover the cultural traditions of the indigenous Vedda community in nearby Dambana through respectful, locally guided experiences, and venture into the surrounding wilderness for nature and wildlife encounters. With its rich cultural heritage and authentic rural atmosphere, Mahiyanganaya offers a fascinating glimpse into Sri Lanka’s spiritual and traditional way of life.",
    "bestTime": "January – September",
    "perfectFor": [
      "Culture",
      "Nature",
      "Adventure",
      "Rural Experiences"
    ],
    "attractions": [
      "Mahiyangana Raja Maha Viharaya",
      "Sorabora Wewa",
      "Rathna Ella Falls",
      "Vedda Village Experiences",
      "Mapakada Lake",
      "Dambana Indigenous Village"
    ],
    "experiences": [
      "Traditional Vedda cultural encounters",
      "Boat experiences",
      "Village exploration",
      "Waterfall visits",
      "Birdwatching"
    ],
    "nearby": [
      "Gal Oya (1 hr)",
      "Knuckles (2 hrs)",
      "Riverston (2 hrs)",
      "Kandy (2 hrs)",
      "Wasgamuwa (1.5 hrs)"
    ],
    "id": "mahiyanganaya",
    "lat": 7.33,
    "lng": 81,
    "map": {
      "top": 63.7,
      "left": 60.1
    },
    "images": [
      "/3aaa188a-cac8-4da0-93ad-bc14a5dedf10.jpg",
      "/0eb3cc3f-eefc-41a9-8abb-186c7ee05029.jpg"
    ]
  },
  {
    "name": "Belihuloya",
    "description": "Set amid the picturesque landscapes of Sri Lanka’s Sabaragamuwa highlands, Belihuloya is a peaceful nature destination known for its cascading waterfalls, winding streams, mountain scenery and charming rural surroundings. Its unique location between the island’s highlands and lowlands creates a diverse natural environment, with lush forests, rolling hills and the scenic Samanalawewa Reservoir adding to its appeal. Visitors can discover the beautiful Pahanthudawa Falls, enjoy nature walks and birdwatching, explore nearby mountain trails or experience the tranquillity of traditional village life. With its refreshing atmosphere, outdoor adventures and abundant natural beauty, Belihuloya is an inviting escape for travellers seeking relaxation and exploration away from the busier tourist routes.",
    "bestTime": "January – April July – September",
    "perfectFor": [
      "Nature",
      "Hiking",
      "Wellness",
      "Adventure",
      "Eco Tourism"
    ],
    "attractions": [
      "Belihuloya River",
      "Pahanthudawa Waterfall",
      "Samanalawewa Reservoir",
      "Bambarakanda Waterfall",
      "Adventure Trekking Trails",
      "Nature Walks"
    ],
    "experiences": [],
    "nearby": [
      "Horton Plains (1.5 hrs)",
      "Ella (2 hrs)",
      "Udawalawe (1.5 hrs)",
      "Haputale (1 hr)",
      "Riverston (3 hrs)"
    ],
    "id": "belihuloya",
    "lat": 6.72,
    "lng": 80.77,
    "map": {
      "top": 77.6,
      "left": 53.6
    },
    "images": [
      "/8de9dae7-2ef0-4497-8b69-866058baec8a.jpg",
      "/ff704484-a0b3-4483-b004-584fb344461f.jpg"
    ]
  },
  {
    "name": "Gal Oya",
    "description": "Hidden in Sri Lanka’s eastern wilderness, Gal Oya is a remarkable destination where untouched forests, rolling hills and tranquil waters create an extraordinary wildlife escape. At the heart of the experience lies Senanayake Samudra, a vast reservoir dotted with forested islands, offering a unique opportunity to explore the wilderness on a scenic boat safari. Visitors may witness wild elephants swimming between islands, spot diverse birdlife and discover the rich biodiversity of Gal Oya National Park. The surrounding region also offers opportunities to learn about the traditions of Sri Lanka’s Indigenous Vedda community through respectful, locally guided encounters. With its secluded landscapes and rare wildlife experiences, Gal Oya is a wonderful choice for nature lovers seeking a quieter, more intimate side of Sri Lanka.",
    "bestTime": "March – July",
    "perfectFor": [
      "Wildlife",
      "Nature",
      "Photography",
      "Luxury Wilderness",
      "Bird Watching"
    ],
    "attractions": [
      "Gal Oya National Park",
      "Senanayake Samudraya Boat Safari",
      "Elephant Island Sightings",
      "Indigenous Vedda Experiences",
      "Wildlife Safaris",
      "Birdwatching"
    ],
    "experiences": [],
    "nearby": [
      "Mahiyanganaya (1 hr)",
      "Ampara (1.5 hrs)",
      "Arugam Bay (3 hrs)",
      "Batticaloa (3 hrs)",
      "Kandy (4 hrs)"
    ],
    "id": "gal-oya",
    "lat": 7.22,
    "lng": 81.53,
    "map": {
      "top": 66.2,
      "left": 75
    },
    "images": [
      "/8de9dae7-2ef0-4497-8b69-866058baec8a.jpg",
      "/ff704484-a0b3-4483-b004-584fb344461f.jpg"
    ]
  },
  {
    "name": "Kalutara",
    "description": "Kalutara is a charming coastal town where tropical beachside living meets rich cultural heritage and colonial elegance. Set along the shores of the Indian Ocean, the destination is known for its palm-fringed beaches, the iconic Kalutara Bodhiya and its distinctive hollow Buddhist stupa. Visitors can explore the architectural beauty of Richmond Castle, enjoy peaceful boat rides along the Kalu Ganga River and discover the region’s traditional crafts and local flavours. With its relaxed atmosphere, scenic river landscapes and inviting beachfront resorts, Kalutara offers a tranquil introduction to Sri Lanka’s western coastline",
    "bestTime": "November – April",
    "perfectFor": [
      "Beach Holiday",
      "Families",
      "Leisure",
      "Wellness"
    ],
    "attractions": [
      "Kalutara Bodhiya",
      "Richmond Castle",
      "Kalutara Beach",
      "Kalu Ganga River Experiences",
      "Fa Hien Cave"
    ],
    "experiences": [],
    "nearby": [
      "Bentota (20 min)",
      "Colombo (1 hr)",
      "Galle (1.5 hrs)",
      "Ahungalla (35 min)",
      "Beruwala (20 min)"
    ],
    "id": "kalutara",
    "lat": 6.59,
    "lng": 79.96,
    "map": {
      "top": 80.6,
      "left": 30.8
    },
    "images": [
      "/8de9dae7-2ef0-4497-8b69-866058baec8a.jpg",
      "/ff704484-a0b3-4483-b004-584fb344461f.jpg"
    ]
  },
  {
    "name": "Riverston",
    "description": "Hidden within Sri Lanka’s spectacular Knuckles Mountain Range, Riverston is a breathtaking highland escape celebrated for its mist-covered peaks, dramatic viewpoints and unspoilt natural beauty. Winding mountain roads lead through lush forests and rolling grasslands to the famous Mini World’s End viewpoint at Pitawala Pathana, where sweeping panoramas reveal the valleys below. Visitors can also discover enchanting waterfalls such as Sera Ella and Bambarakiri Ella, explore scenic trekking trails and experience the refreshing mountain air. With its cool climate, rich biodiversity and adventurous spirit, Riverston is a wonderful retreat for hikers, nature lovers and travellers seeking the quieter side of Sri Lanka’s central highlands.",
    "bestTime": "January – April",
    "perfectFor": [
      "Adventure",
      "Hiking",
      "Photography",
      "Nature"
    ],
    "attractions": [
      "Riverston Peak",
      "Mini World’s End",
      "Sera Ella Waterfall",
      "Pitawala Pathana",
      "Knuckles Mountain Range Access"
    ],
    "experiences": [],
    "nearby": [
      "Knuckles (45 min)",
      "Kandy (2 hrs)",
      "Matale (1 hr)",
      "Mahiyanganaya (2 hrs)",
      "Sigiriya (2.5 hrs)"
    ],
    "id": "riverston",
    "lat": 7.52,
    "lng": 80.74,
    "map": {
      "top": 59.3,
      "left": 52.8
    },
    "images": [
      "/3aaa188a-cac8-4da0-93ad-bc14a5dedf10.jpg",
      "/0eb3cc3f-eefc-41a9-8abb-186c7ee05029.jpg"
    ]
  },
  {
    "name": "Sinharaja",
    "description": "Step into the enchanting wilderness of Sinharaja, Sri Lanka’s last major tract of tropical lowland rainforest and a UNESCO World Heritage Site celebrated for its extraordinary biodiversity. This lush green sanctuary is alive with towering trees, tangled vines, cascading streams and the calls of exotic birds, offering a remarkable glimpse into one of the island’s most treasured natural ecosystems. Visitors can embark on guided rainforest treks, encounter colourful endemic bird species and discover fascinating wildlife, including reptiles, amphibians and rare plant life found nowhere else in the world. With its pristine forest trails, rich ecological heritage and immersive nature experiences, Sinharaja is an exceptional destination for wildlife enthusiasts, birdwatchers and adventurous travellers seeking to connect with Sri Lanka’s untamed natural beauty.",
    "bestTime": "January – April August – September",
    "perfectFor": [
      "Nature",
      "Wildlife",
      "Bird Watching",
      "Eco Tourism",
      "Photography"
    ],
    "attractions": [
      "Rainforest Trekking",
      "Endemic Bird Watching",
      "Waterfalls",
      "Nature Trails",
      "Biodiversity Experiences"
    ],
    "experiences": [],
    "nearby": [
      "Deniyaya (30 min)",
      "Galle (2 hrs)",
      "Belihuloya (2 hrs)",
      "Udawalawe (2 hrs)",
      "Mirissa (2 hrs)"
    ],
    "id": "sinharaja",
    "lat": 6.41,
    "lng": 80.49,
    "map": {
      "top": 84.7,
      "left": 45.7
    },
    "images": [
      "/8de9dae7-2ef0-4497-8b69-866058baec8a.jpg",
      "/ff704484-a0b3-4483-b004-584fb344461f.jpg"
    ]
  },
  {
    "name": "Hambantota",
    "description": "Located along Sri Lanka’s sun-drenched southern coast, Hambantota is a destination where coastal landscapes, wildlife-rich wetlands and rural traditions come together. Known for its expansive salt pans, scenic shoreline and proximity to some of the island’s most remarkable wildlife reserves, the region offers plenty to discover beyond its laid-back coastal atmosphere. Visitors can explore Bundala National Park, renowned for its migratory birds and diverse wetland ecosystems, discover the nearby shores of Rekawa and enjoy the natural beauty of the surrounding countryside. With its rich biodiversity, distinctive landscapes and access to unforgettable safari experiences, Hambantota is an appealing destination for nature lovers, wildlife enthusiasts and travellers exploring Sri Lanka’s southern region.",
    "bestTime": "November – April",
    "perfectFor": [
      "Wildlife",
      "Leisure",
      "Nature",
      "Families"
    ],
    "attractions": [
      "Bundala National Park",
      "Dry Zone Botanical Gardens",
      "Hambantota Salt Pans",
      "Bird Watching",
      "Shangri-La Golf Course Area"
    ],
    "experiences": [],
    "nearby": [
      "Yala (1 hr)",
      "Tangalle (45 min)",
      "Udawalawe (1.5 hrs)",
      "Kataragama (1 hr)",
      "Mirissa (2 hrs)"
    ],
    "id": "hambantota",
    "lat": 6.12,
    "lng": 81.12,
    "map": {
      "top": 91.4,
      "left": 63.4
    },
    "images": [
      "/8de9dae7-2ef0-4497-8b69-866058baec8a.jpg",
      "/ff704484-a0b3-4483-b004-584fb344461f.jpg"
    ]
  },
  {
    "name": "Udawalawe",
    "description": "Udawalawe is one of Sri Lanka’s best wildlife destinations, particularly famous for elephant sightings and scenic safari experiences. A captivating wildlife destination where vast grasslands, open plains and tranquil reservoirs create a haven for Sri Lanka’s remarkable wildlife. Best known for its thriving population of wild Asian elephants, Udawalawe National Park offers exciting safari experiences, giving visitors the chance to observe these magnificent animals in their natural habitat. The park is also home to water buffalo, deer, crocodiles and an impressive variety of birdlife, making it a rewarding destination for nature enthusiasts and photographers. With its untamed landscapes and unforgettable wildlife encounters, Udawalawe offers an authentic glimpse into the island’s extraordinary natural world",
    "bestTime": "Year-round",
    "perfectFor": [
      "Wildlife",
      "Families",
      "Photography",
      "Nature"
    ],
    "attractions": [
      "Udawalawe National Park",
      "Elephant Transit Home",
      "Udawalawe Reservoir",
      "Wildlife Safaris",
      "Bird Watching"
    ],
    "experiences": [],
    "nearby": [
      "Ella (2 hrs)",
      "Hambantota (1.5 hrs)",
      "Belihuloya (1.5 hrs)",
      "Yala (2 hrs)",
      "Sinharaja (2 hrs)"
    ],
    "id": "udawalawe",
    "lat": 6.44,
    "lng": 80.89,
    "map": {
      "top": 84,
      "left": 57
    },
    "images": [
      "/8de9dae7-2ef0-4497-8b69-866058baec8a.jpg",
      "/ff704484-a0b3-4483-b004-584fb344461f.jpg"
    ]
  },
  {
    "name": "Kegalle",
    "description": "Set amid the verdant landscapes of Sri Lanka’s Sabaragamuwa Province, Kegalle is a charming destination celebrated for its lush rubber plantations, tropical greenery and authentic countryside character. The region offers a glimpse into traditional rural life, with scenic villages, rolling hills and fertile landscapes creating a peaceful setting away from the busier tourist centres. Visitors can explore the renowned Pinnawala Elephant Orphanage, discover the region’s spice and rubber-growing heritage, and enjoy scenic drives through the surrounding countryside. With its natural attractions, cultural experiences and convenient location between Colombo and Kandy, Kegalle is a rewarding stop for travellers seeking to experience another side of Sri Lanka.",
    "bestTime": "December – April",
    "perfectFor": [
      "Families",
      "Nature",
      "Culture"
    ],
    "attractions": [
      "Pinnawala Elephant Orphanage",
      "Pinnawala Open Zoo",
      "Rubber Plantation Experiences",
      "Alagalla Mountain Area"
    ],
    "experiences": [],
    "nearby": [
      "Kandy (1 hr)",
      "Colombo (2 hrs)",
      "Kitulgala (1 hr)",
      "Belihuloya (3 hrs)",
      "Nuwara Eliya (3 hrs)"
    ],
    "id": "kegalle",
    "lat": 7.25,
    "lng": 80.35,
    "map": {
      "top": 65.5,
      "left": 41.8
    },
    "images": [
      "/3aaa188a-cac8-4da0-93ad-bc14a5dedf10.jpg",
      "/0eb3cc3f-eefc-41a9-8abb-186c7ee05029.jpg"
    ]
  },
  {
    "name": "Jaffna",
    "description": "Jaffna offers a unique cultural experience shaped by northern Sri Lankan traditions, historic landmarks and coastal beauty. Rich heritage and distinctive cuisine make it a fascinating destination. Located in the northernmost reaches of Sri Lanka, Jaffna is a captivating destination where rich Tamil heritage, ancient Hindu traditions and distinctive northern landscapes create a truly unique cultural experience. The city is renowned for its colourful Nallur Kandaswamy Temple, historic Jaffna Fort and vibrant local markets, while the surrounding peninsula reveals quiet fishing villages, palm-fringed coastlines and picturesque islands. Visitors can savour authentic Jaffna cuisine, discover centuries-old cultural landmarks and explore the scenic causeways leading to remote coastal communities. With its fascinating history, warm hospitality and strong cultural identity, Jaffna offers an enriching journey into a distinctive side of Sri Lanka.",
    "bestTime": "January – September",
    "perfectFor": [
      "Culture",
      "Heritage",
      "Food Experiences",
      "History"
    ],
    "attractions": [
      "Jaffna Fort",
      "Nallur Kandaswamy Temple",
      "Delft Island",
      "Casuarina Beach",
      "Nagadeepa Temple",
      "Jaffna Library"
    ],
    "experiences": [],
    "nearby": [
      "Delft Island (1 hr boat transfer)",
      "Mannar (3 hrs)",
      "Point Pedro (45 min)",
      "Keerimalai (30 min)",
      "Nagadeepa (boat access)"
    ],
    "id": "jaffna",
    "lat": 9.66,
    "lng": 80.03,
    "map": {
      "top": 10.3,
      "left": 32.8
    },
    "images": [
      "/8de9dae7-2ef0-4497-8b69-866058baec8a.jpg",
      "/ff704484-a0b3-4483-b004-584fb344461f.jpg"
    ]
  },
  {
    "name": "Kalpitiya",
    "description": "Kalpitiya is Sri Lanka’s coastal paradise for marine adventures, dolphin watching and kite surfing. The peninsula offers pristine beaches and exceptional biodiversity. Stretching along Sri Lanka’s northwestern coast, Kalpitiya is a captivating coastal escape where pristine beaches, tranquil lagoons and rich marine biodiversity create a haven for nature lovers and adventure seekers. Renowned for its dolphin-watching excursions and world-class kitesurfing conditions, the peninsula offers exciting ways to experience its spectacular coastal environment. Visitors can explore the calm waters of Puttalam Lagoon, discover the vibrant underwater world of Bar Reef Marine Sanctuary and enjoy boat safaris through mangrove-lined waterways. With its secluded beaches, traditional fishing villages and unspoilt natural surroundings, Kalpitiya offers a refreshing alternative to Sri Lanka’s busier coastal destinations.",
    "bestTime": "May – October",
    "perfectFor": [
      "Water Sports",
      "Wildlife",
      "Beach Holiday",
      "Adventure"
    ],
    "attractions": [
      "Dolphin Watching",
      "Kite Surfing",
      "Bar Reef Marine Sanctuary",
      "Lagoon Experiences",
      "Dutch Fort Area",
      "Whale Watching (seasonal)"
    ],
    "experiences": [],
    "nearby": [
      "Wilpattu (2 hrs)",
      "Negombo (3 hrs)",
      "Mannar (3 hrs)",
      "Anawilundawa Wetlands (1 hr)",
      "Chilaw (1 hr)"
    ],
    "id": "kalpitiya",
    "lat": 8.23,
    "lng": 79.77,
    "map": {
      "top": 43,
      "left": 25.5
    },
    "images": [
      "/8de9dae7-2ef0-4497-8b69-866058baec8a.jpg",
      "/ff704484-a0b3-4483-b004-584fb344461f.jpg"
    ]
  },
  {
    "name": "Ahangama",
    "description": "Ahangama is a stylish southern coastal destination where traditional Sri Lankan charm meets a vibrant surf and café culture. Famous for its long sandy beaches, rolling waves and iconic stilt fishermen, this laid-back town attracts surfers, creatives and travellers drawn to its relaxed tropical lifestyle. Beyond the shoreline, discover boutique stays, independent cafés, wellness retreats and locally inspired dining experiences, all set against a backdrop of swaying coconut palms and the sparkling Indian Ocean. Blending authentic coastal traditions with a contemporary bohemian spirit, Ahangama offers a refreshing and memorable escape along Sri Lanka’s southern coast.",
    "bestTime": "November to April",
    "perfectFor": [
      "Surfing",
      "Beach Holidays",
      "Couples",
      "Digital Nomads"
    ],
    "attractions": [
      "Ahangama Beach",
      "Stilt Fishermen",
      "Kabalana Beach",
      "Surf Breaks",
      "Local Cafés"
    ],
    "experiences": [],
    "nearby": [
      "Weligama (15 minutes))",
      "Mirissa (30 minutes)",
      "Koggala ( 10 minutes)",
      "Galle (30 minutes)"
    ],
    "id": "ahangama",
    "lat": 5.97,
    "lng": 80.37,
    "map": {
      "top": 94.8,
      "left": 42.4
    },
    "images": [
      "/8de9dae7-2ef0-4497-8b69-866058baec8a.jpg",
      "/ff704484-a0b3-4483-b004-584fb344461f.jpg"
    ]
  },
  {
    "name": "Ahungalla",
    "description": "A tranquil beach destination offering golden sands, luxury resorts, and peaceful oceanfront relaxation. Ahungalla is a tranquil coastal retreat along Sri Lanka’s southwestern shoreline, known for its golden beaches, swaying coconut palms and relaxed tropical atmosphere. With its inviting stretch of coastline and elegant beachfront resorts, this charming destination offers the perfect setting for unwinding beside the Indian Ocean. Visitors can enjoy leisurely beach walks, explore nearby traditional fishing villages, experience river safaris along the Madu Ganga and discover the region’s rich turtle conservation heritage. Combining peaceful seaside living with opportunities for nature and cultural exploration, Ahungalla is an ideal escape for couples, families and travellers seeking a laid-back coastal holiday.",
    "bestTime": "November to April",
    "perfectFor": [
      "Honeymoon",
      "Beach Holidays",
      "Families"
    ],
    "attractions": [
      "Ahungalla Beach",
      "Luxury Beach Resorts",
      "River Excursions",
      "Turtle Conservation Projects"
    ],
    "experiences": [],
    "nearby": [
      "Bentota (20 minutes)",
      "Balapitiya (15 minutes)",
      "Kosgoda (10 minutes)",
      "Ambalangoda (20 minutes)"
    ],
    "id": "ahungalla",
    "lat": 6.31,
    "lng": 80.04,
    "map": {
      "top": 87,
      "left": 33.1
    },
    "images": [
      "/8de9dae7-2ef0-4497-8b69-866058baec8a.jpg",
      "/ff704484-a0b3-4483-b004-584fb344461f.jpg"
    ]
  },
  {
    "name": "Ambalangoda",
    "description": "Ambalangoda is a distinctive southern coastal town celebrated for its vibrant traditional arts, colourful masks and rich cultural heritage. Widely recognised as a centre of Sri Lanka’s traditional mask-making craft, the town offers visitors an opportunity to discover intricate wooden creations used in folk dances, rituals and traditional performances. Beyond its artistic traditions, Ambalangoda features inviting beaches, historic temples and a lively local atmosphere shaped by generations of craftsmanship and coastal living. Visitors can explore mask museums and workshops, learn about traditional craftsmanship and enjoy the quieter stretches of shoreline. With its unique artistic identity and authentic cultural experiences, Ambalangoda offers a fascinating glimpse into Sri Lanka’s living traditions.",
    "bestTime": "November to April",
    "perfectFor": [
      "Culture",
      "Families",
      "Beach Holidays"
    ],
    "attractions": [
      "Traditional Mask Workshops",
      "Ariyapala Mask Museum",
      "Ambalangoda Beach",
      "Devil Dance Performances"
    ],
    "experiences": [],
    "nearby": [
      "Ahungalla (20 minutes)",
      "Balapitiya (10 minutes)",
      "Hikkaduwa (20 minutes)",
      "Bentota (30 minutes)"
    ],
    "id": "ambalangoda",
    "lat": 6.24,
    "lng": 80.05,
    "map": {
      "top": 88.6,
      "left": 33.4
    },
    "images": [
      "/8de9dae7-2ef0-4497-8b69-866058baec8a.jpg",
      "/ff704484-a0b3-4483-b004-584fb344461f.jpg"
    ]
  },
  {
    "name": "Ampara",
    "description": "A lesser-explored region rich in wildlife, ancient history, and beautiful coastal landscapes in Eastern Sri Lanka. Located in Sri Lanka’s eastern region, Ampara is a captivating destination where peaceful reservoirs, fertile countryside and rich cultural heritage create a rewarding off-the-beaten-path experience. Surrounded by paddy fields, forested landscapes and traditional farming communities, the region offers a glimpse into the island’s rural way of life. Visitors can explore the scenic waters of Senanayake Samudra, discover nearby Gal Oya National Park for memorable wildlife experiences and enjoy birdwatching around the region’s wetlands and reservoirs. With its agricultural heritage, tranquil natural surroundings and access to remarkable wildlife habitats, Ampara is an appealing destination for nature enthusiasts, photographers and travellers seeking a more authentic side of eastern Sri Lanka.",
    "bestTime": "May to September",
    "perfectFor": [
      "Nature",
      "Adventure",
      "Wildlife"
    ],
    "attractions": [
      "Lahugala National Park",
      "Gal Oya National Park",
      "Senanayake Samudraya",
      "Ancient Temples"
    ],
    "experiences": [],
    "nearby": [
      "Arugam Bay (1 hr & 30 minutes)",
      "Batticaloa(2 hrs)",
      "Passikudah(3 hrs)",
      "Kumana (2 hrs)"
    ],
    "id": "ampara",
    "lat": 7.29,
    "lng": 81.68,
    "map": {
      "top": 64.6,
      "left": 79.2
    },
    "images": [
      "/8de9dae7-2ef0-4497-8b69-866058baec8a.jpg",
      "/ff704484-a0b3-4483-b004-584fb344461f.jpg"
    ]
  },
  {
    "name": "Anuradhapura",
    "description": "Sri Lanka's first ancient capital, home to magnificent stupas, monasteries, and over two millennia of history. Step back in time in Anuradhapura, Sri Lanka’s ancient royal capital, where magnificent stupas, sacred Buddhist sites and remarkable archaeological treasures reveal the grandeur of a civilisation that flourished for centuries. A UNESCO World Heritage Site, this historic city is home to the revered Sri Maha Bodhi, the majestic Ruwanwelisaya Stupa and the impressive ruins of ancient monasteries and royal structures. Visitors can explore sacred temples, admire intricate stone carvings and discover the ingenious ancient irrigation systems that continue to shape the surrounding landscape. Blending profound spirituality with extraordinary history and architectural beauty, Anuradhapura offers a fascinating journey into the island’s ancient heritage.",
    "bestTime": "May to September",
    "perfectFor": [
      "Culture",
      "History",
      "Pilgrims"
    ],
    "attractions": [
      "Sri Maha Bodhi",
      "Ruwanwelisaya",
      "Jetavanaramaya",
      "Abhayagiri Monastery",
      "Isurumuniya"
    ],
    "experiences": [],
    "nearby": [
      "Wilpattu ( 45minutes)",
      "Mihintale (20minutes)",
      "Yapahuwa (1hr 30 minutes)",
      "Sigiriya (2 hrs)"
    ],
    "id": "anuradhapura",
    "lat": 8.31,
    "lng": 80.4,
    "map": {
      "top": 41.2,
      "left": 43.2
    },
    "images": [
      "/8de9dae7-2ef0-4497-8b69-866058baec8a.jpg",
      "/ff704484-a0b3-4483-b004-584fb344461f.jpg"
    ]
  },
  {
    "name": "Arugam Bay",
    "description": "Arugam Bay is a vibrant coastal destination on Sri Lanka’s eastern shores, celebrated for its world-class surf breaks, golden beaches and laid-back beach culture. During the surfing season, the bay attracts surfers from around the world, while its relaxed cafés, beachfront retreats and lively atmosphere create an inviting setting for all kinds of travellers. Beyond the waves, visitors can explore the tranquil waters of Pottuvil Lagoon, discover the region’s rich birdlife and venture towards nearby Kumana National Park for rewarding wildlife encounters. As the sun sets over the Indian Ocean, Arugam Bay reveals its easygoing charm, blending adventure, nature and tropical coastal living into an unforgettable escape.",
    "bestTime": "May to September",
    "perfectFor": [
      "Surfing",
      "Beach Holidays",
      "Adventure",
      "Backpackers"
    ],
    "attractions": [
      "Main Point Surf Break",
      "Whiskey Point",
      "Peanut Farm Beach",
      "Lagoon Safaris",
      "Kumana National Park"
    ],
    "experiences": [],
    "nearby": [
      "Ampara (1 hr 30 minutes)",
      "Pottuvil (1 hr)",
      "Kumana (1 hr)",
      "Batticaloa (3 hrs)"
    ],
    "id": "arugam-bay",
    "lat": 6.84,
    "lng": 81.84,
    "map": {
      "top": 74.9,
      "left": 83.7
    },
    "images": [
      "/8de9dae7-2ef0-4497-8b69-866058baec8a.jpg",
      "/ff704484-a0b3-4483-b004-584fb344461f.jpg"
    ]
  },
  {
    "name": "Adam's Peak (Sri Pada)",
    "description": "Rising majestically above Sri Lanka’s central highlands, Adam’s Peak, also known as Sri Pada, is one of the island’s most revered pilgrimage sites and a remarkable destination for adventure seekers. The sacred summit is honoured by multiple religious traditions, drawing pilgrims who undertake the challenging night-time ascent to witness the sunrise and the mountain’s celebrated shadow phenomenon. The journey unfolds along forested trails and illuminated stairways, with resting points offering opportunities to pause and admire the surrounding highland scenery. Beyond its spiritual significance, the mountain is surrounded by rich biodiversity, misty landscapes and dramatic panoramic views. Combining devotion, endurance and natural beauty, Adam’s Peak offers an unforgettable experience for pilgrims, hikers and travellers seeking a meaningful highland adventure.",
    "bestTime": "December to May",
    "perfectFor": [
      "Hiking",
      "Pilgrims",
      "Nature",
      "Photography"
    ],
    "attractions": [
      "Sacred Footprint",
      "Sunrise Trek",
      "Mountain Scenery",
      "Pilgrimage Route"
    ],
    "experiences": [],
    "nearby": [
      "Hatton (1 hr)",
      "Nallathanniya (15 minutes)",
      "Kitulgala (1 hr 30 minutes)",
      "Nuwara Eliya( 2hrs)"
    ],
    "id": "adams-peak-sri-pada",
    "lat": 6.81,
    "lng": 80.5,
    "map": {
      "top": 75.6,
      "left": 46
    },
    "images": [
      "/8de9dae7-2ef0-4497-8b69-866058baec8a.jpg",
      "/ff704484-a0b3-4483-b004-584fb344461f.jpg"
    ]
  },
  {
    "name": "Balapitiya",
    "description": "A charming coastal town known for the scenic Madu River, mangrove ecosystems, and tranquil beaches. Located along Sri Lanka’s southwestern coast, Balapitiya is a charming riverside destination celebrated for its tranquil waterways, lush mangrove forests and traditional coastal village life. The area is best known for the scenic Madu Ganga, where boat safaris wind through mangrove-lined channels, secluded islands and rich wetland ecosystems. Visitors can discover diverse birdlife, observe local fishing traditions and explore small island communities, including those known for cinnamon cultivation. With its peaceful river landscapes, abundant biodiversity and authentic rural experiences, Balapitiya offers a refreshing escape for nature lovers, photographers and travellers seeking to discover Sri Lanka beyond its beaches.",
    "bestTime": "November to April",
    "perfectFor": [
      "Couples",
      "Families",
      "Nature"
    ],
    "attractions": [
      "Madu River Safari",
      "Mangrove Forests",
      "Cinnamon Island",
      "Balapitiya Beach"
    ],
    "experiences": [],
    "nearby": [
      "Ahungalla (15 minutes)",
      "Ambalangoda (15 minutes)",
      "Bentota (20 minutes)",
      "Kosgoda (15 minutes)"
    ],
    "id": "balapitiya",
    "lat": 6.28,
    "lng": 80.04,
    "map": {
      "top": 87.7,
      "left": 33.1
    },
    "images": [
      "/8de9dae7-2ef0-4497-8b69-866058baec8a.jpg",
      "/ff704484-a0b3-4483-b004-584fb344461f.jpg"
    ]
  },
  {
    "name": "Bandarawela",
    "description": "A peaceful hill-country retreat offering cool temperatures, tea estates, and scenic mountain landscapes. Set amidst the rolling hills of Sri Lanka’s central highlands, Bandarawela is a refreshing mountain retreat renowned for its cool climate, verdant tea plantations and peaceful countryside charm. Surrounded by misty valleys, vegetable farms and picturesque mountain landscapes, the town offers a quieter alternative to some of the island’s busier hill country destinations. Visitors can explore nearby tea estates, discover the historic Dowa Rock Temple, enjoy scenic walks through the surrounding countryside and venture towards the spectacular viewpoints of Haputale and Ella. With its pleasant weather, rich agricultural heritage and beautiful highland scenery, Bandarawela is an inviting destination for nature lovers, cultural explorers and travellers seeking a relaxing hill country escape.",
    "bestTime": "December to April",
    "perfectFor": [
      "Nature",
      "Families",
      "Couples"
    ],
    "attractions": [
      "Tea Plantations",
      "Dowa Temple",
      "Scenic Viewpoints",
      "Local Villages"
    ],
    "experiences": [],
    "nearby": [
      "Ella (20 minutes)",
      "Haputale (30 minutes)",
      "Lipton's Seat (1 hr)",
      "Nuwara Eliya (1hr 30 minutes)"
    ],
    "id": "bandarawela",
    "lat": 6.83,
    "lng": 80.99,
    "map": {
      "top": 75.1,
      "left": 59.8
    },
    "images": [
      "/8de9dae7-2ef0-4497-8b69-866058baec8a.jpg",
      "/ff704484-a0b3-4483-b004-584fb344461f.jpg"
    ]
  },
  {
    "name": "Batticaloa",
    "description": "A coastal city rich in history, culture, lagoons, and pristine beaches along Sri Lanka's east coast. Situated along Sri Lanka’s eastern coastline, Batticaloa is a captivating destination where tranquil lagoons, golden beaches and rich cultural traditions create a distinctive coastal experience. The city is known for its historic Dutch Fort, vibrant Tamil and Muslim heritage, and the picturesque Batticaloa Lagoon, famous for its folklore surrounding the so-called singing fish. Visitors can explore the colourful local markets, discover nearby Kallady Beach and enjoy boat excursions across the lagoon’s calm waters. With its fascinating history, diverse cultural identity and laid-back coastal atmosphere, Batticaloa offers an enriching experience for travellers seeking to explore the lesser-known treasures of Sri Lanka’s east coast.",
    "bestTime": "May to September",
    "perfectFor": [
      "Culture",
      "Families",
      "Beach Lovers"
    ],
    "attractions": [
      "Batticaloa Lagoon",
      "Batticaloa Fort",
      "Pasikudah Excursions",
      "Kallady Bridge",
      "Beaches"
    ],
    "experiences": [],
    "nearby": [
      "Passikudah (40 minutes)",
      "Kalkudah (45 minutes)",
      "Ampara (2 hrs)",
      "Trincomalee (3hrs)"
    ],
    "id": "batticaloa",
    "lat": 7.72,
    "lng": 81.7,
    "map": {
      "top": 54.7,
      "left": 79.7
    },
    "images": [
      "/8de9dae7-2ef0-4497-8b69-866058baec8a.jpg",
      "/ff704484-a0b3-4483-b004-584fb344461f.jpg"
    ]
  },
  {
    "name": "Bentota",
    "description": "Bentota is a tropical coastal retreat renowned for its golden sandy beaches, swaying coconut palms and inviting Indian Ocean waters. Offering the perfect balance of relaxation and adventure, this popular beach destination is ideal for sun-soaked days, refreshing swims and exciting water sports. The scenic Bentota River adds another dimension to the experience, with boat safaris through mangrove-lined waterways revealing fascinating birdlife and lush natural surroundings. From indulgent beachfront resorts and rejuvenating Ayurvedic wellness experiences to leisurely river cruises and beautiful coastal sunsets, Bentota captures the essence of a tropical Sri Lankan escape",
    "bestTime": "November to April",
    "perfectFor": [
      "Families",
      "Beach Holidays",
      "Water Sports",
      "Honeymoon"
    ],
    "attractions": [
      "Bentota Beach",
      "Bentota River Safari",
      "Water Sports Centre",
      "Brief Garden",
      "Lunuganga Estate"
    ],
    "experiences": [],
    "nearby": [
      "Beruwala (10 minutes)",
      "Kosgoda (15 minutes)",
      "Balapitiya (20 minutes)",
      "Ahungalla (20 minutes)"
    ],
    "id": "bentota",
    "lat": 6.42,
    "lng": 80,
    "map": {
      "top": 84.5,
      "left": 32
    },
    "images": [
      "/8de9dae7-2ef0-4497-8b69-866058baec8a.jpg",
      "/ff704484-a0b3-4483-b004-584fb344461f.jpg"
    ]
  },
  {
    "name": "Beruwala",
    "description": "A historic coastal town known for its beautiful beaches, fishing heritage, and vibrant cultural diversity. Beruwala is a welcoming coastal destination along Sri Lanka’s southwestern shoreline, renowned for its golden beaches, swaying coconut palms and relaxed tropical atmosphere. Often associated with the island’s early Arab trading heritage, the town offers a fascinating blend of coastal traditions and cultural diversity. Visitors can unwind on the sandy shores of Moragalla Beach, explore the historic Ketchimalai Mosque overlooking the sea and enjoy boat rides along the nearby Bentota River. The surrounding area also offers opportunities for water sports, beachfront dining and peaceful seaside escapes. Combining cultural heritage with sun-soaked relaxation, Beruwala is an ideal destination for beach lovers, families and travellers seeking an easygoing coastal holiday.",
    "bestTime": "November to April",
    "perfectFor": [
      "Culture",
      "Beach Holidays",
      "Families"
    ],
    "attractions": [
      "Beruwala Beach",
      "Barberyn Island Lighthouse",
      "Ketchchimalai Mosque",
      "Water Sports"
    ],
    "experiences": [],
    "nearby": [
      "Bentota (10 minutes)",
      "Aluthgama (10 minutes)",
      "Kalutara (30 minutes)",
      "Kosgoda (25 minutes)"
    ],
    "id": "beruwala",
    "lat": 6.48,
    "lng": 79.98,
    "map": {
      "top": 83.1,
      "left": 31.4
    },
    "images": [
      "/8de9dae7-2ef0-4497-8b69-866058baec8a.jpg",
      "/ff704484-a0b3-4483-b004-584fb344461f.jpg"
    ]
  },
  {
    "name": "Deniyaya",
    "description": "Nestled in the lush southern highlands of Sri Lanka, Deniyaya is a peaceful countryside destination celebrated for its emerald-green tea estates, mist-covered hills and proximity to the extraordinary Sinharaja Rainforest. Surrounded by tropical vegetation, flowing streams and fertile plantations, the region offers an immersive experience in one of the island’s most biodiverse landscapes. Visitors can embark on guided rainforest walks, discover endemic birdlife, explore scenic tea-growing villages and enjoy the refreshing atmosphere of the surrounding mountains. With its unspoilt natural beauty, rich biodiversity and authentic rural charm, Deniyaya is an ideal retreat for nature enthusiasts, birdwatchers and adventurous travellers seeking a deeper connection with Sri Lanka’s wilderness.",
    "bestTime": "December to April",
    "perfectFor": [
      "Nature",
      "Adventure",
      "Eco- Travelers"
    ],
    "attractions": [
      "Sinharaja Rainforest",
      "Waterfalls",
      "Nature Trails",
      "Bird Watching"
    ],
    "experiences": [],
    "nearby": [
      "Sinharaja (30 minutes)",
      "Matara (1hr 30 minutes)",
      "Akuressa (1 hr)",
      "Rakwana (1hr)"
    ],
    "id": "deniyaya",
    "lat": 6.34,
    "lng": 80.56,
    "map": {
      "top": 86.3,
      "left": 47.7
    },
    "images": [
      "/8de9dae7-2ef0-4497-8b69-866058baec8a.jpg",
      "/ff704484-a0b3-4483-b004-584fb344461f.jpg"
    ]
  },
  {
    "name": "Delft Island",
    "description": "Located off Sri Lanka’s northern coast of Jaffna  in the Palk Strait, Delft Island is a fascinating destination where rugged coastal scenery, historic ruins and distinctive island traditions create an experience unlike anywhere else in the country. Known locally as Neduntheevu, the island is characterised by its coral-stone walls, expansive open landscapes, ancient baobab tree and the famous wild ponies believed to descend from horses introduced during the colonial era. Visitors can explore the atmospheric ruins of the Dutch Fort, discover remnants of an ancient Buddhist site and admire the island’s unusual coral formations and quiet shores. With its remote setting, intriguing history and unique natural heritage, Delft Island offers an unforgettable journey into one of Sri Lanka’s most distinctive island communities.",
    "bestTime": "May to September",
    "perfectFor": [
      "History",
      "Culture",
      "Adventure"
    ],
    "attractions": [
      "Wild Ponies",
      "Baobab Tree",
      "Dutch Fort Ruins",
      "Coral Stone Walls",
      "Giant Footprint"
    ],
    "experiences": [],
    "nearby": [
      "Jaffna (2hrs incl ferry)",
      "Nagadeepa (45 minutes by boat)",
      "Kayts (1hr by boat)",
      "Nainativu (1hr by boat)"
    ],
    "id": "delft-island",
    "lat": 9.52,
    "lng": 79.69,
    "map": {
      "top": 13.5,
      "left": 23.2
    },
    "images": [
      "/8de9dae7-2ef0-4497-8b69-866058baec8a.jpg",
      "/ff704484-a0b3-4483-b004-584fb344461f.jpg"
    ]
  },
  {
    "name": "Dickwella",
    "description": "A relaxed coastal town famous for calm beaches, whale watching excursions, and easy access to the southern coastline's attractions. Located along Sri Lanka’s picturesque southern coastline, Dickwella is a peaceful beach destination known for its golden sands, turquoise waters and relaxed coastal atmosphere. Away from the busier tourist centres, this charming seaside town offers a wonderful blend of natural beauty, local culture and laid-back tropical living. Visitors can unwind at Dickwella Beach, explore the nearby Hiriketiya Bay with its popular surf breaks and discover the impressive Wewurukannala Vihara, home to a towering Buddha statue. With its scenic shoreline, welcoming village character and easy access to hidden coastal gems, Dickwella is an ideal escape for beach lovers, surfers and travellers seeking a more tranquil side of Sri Lanka’s southern coast.",
    "bestTime": "November to April",
    "perfectFor": [
      "Families",
      "Couples",
      "Beach Holidays"
    ],
    "attractions": [
      "Dickwella Beach",
      "Hummanaya Blowhole",
      "Wewurukannala Temple",
      "Whale Watching Excursions"
    ],
    "experiences": [],
    "nearby": [
      "Hiriketiya (5 minutes)",
      "Tangalle (20 minutes)",
      "Mirissa (35 minutes)",
      "Talalla( 20 minutes)"
    ],
    "id": "dickwella",
    "lat": 5.97,
    "lng": 80.7,
    "map": {
      "top": 94.8,
      "left": 51.6
    },
    "images": [
      "/8de9dae7-2ef0-4497-8b69-866058baec8a.jpg",
      "/ff704484-a0b3-4483-b004-584fb344461f.jpg"
    ]
  },
  {
    "name": "Haputale",
    "description": "Perched high in Sri Lanka’s picturesque hill country, Haputale is a captivating mountain retreat renowned for its mist-covered landscapes, endless tea plantations and breathtaking panoramic views. The iconic Lipton’s Seat offers spectacular vistas across rolling hills and valleys, while the historic Dambatenne Tea Factory provides a fascinating glimpse into the island’s celebrated Ceylon tea heritage. Visitors can explore the charming Adisham Bungalow, discover cascading waterfalls such as Bambarakanda Falls and enjoy scenic walks through lush plantations and forest trails. With its cool climate, tranquil atmosphere and remarkable natural beauty, Haputale is an ideal destination for nature lovers, tea enthusiasts and travellers seeking an authentic highland escape.",
    "bestTime": "December to April",
    "perfectFor": [
      "Nature",
      "Hiking",
      "Photography"
    ],
    "attractions": [
      "Lipton's Seat",
      "Adisham Bungalow",
      "Tea Plantations",
      "Scenic Train Journey"
    ],
    "experiences": [],
    "nearby": [
      "Bandarawela (30 minutes)",
      "Ella (1 hr)",
      "Ohiya (45 minutes)",
      "Nuwara Eliya (1hr 30 minutes)"
    ],
    "id": "haputale",
    "lat": 6.77,
    "lng": 80.96,
    "map": {
      "top": 76.5,
      "left": 58.9
    },
    "images": [
      "/8de9dae7-2ef0-4497-8b69-866058baec8a.jpg",
      "/ff704484-a0b3-4483-b004-584fb344461f.jpg"
    ]
  },
  {
    "name": "Hikkaduwa",
    "description": "Hikkaduwa is a vibrant coastal destination on Sri Lanka’s southwestern shores, celebrated for its golden beaches, colourful marine life and lively beach culture. Its coral sanctuary and clear coastal waters offer opportunities for snorkelling and discovering tropical fish, while the surrounding coastline attracts surfers of varying experience levels. Visitors can explore the nearby Seenigama Vihara, enjoy fresh seafood at beachfront restaurants and discover local shops and cafés along the bustling coastal strip. With its blend of ocean adventures, relaxed seaside living and lively nightlife, Hikkaduwa is a favourite destination for beach enthusiasts, couples and travellers seeking a fun-filled tropical getaway.",
    "bestTime": "November to April",
    "perfectFor": [
      "Surfing",
      "Beach Holidays",
      "Families",
      "Young Travellers"
    ],
    "attractions": [
      "Hikkaduwa Beach",
      "Coral Sanctuary",
      "Snorkelling",
      "Surfing",
      "Sea Turtle Encounters"
    ],
    "experiences": [],
    "nearby": [
      "Galle (20 minutes)",
      "Ambalangoda (20 minutes)",
      "Bentota (45 minutes)",
      "Ahungalla (45 minutes)"
    ],
    "id": "hikkaduwa",
    "lat": 6.14,
    "lng": 80.1,
    "map": {
      "top": 90.9,
      "left": 34.8
    },
    "images": [
      "/8de9dae7-2ef0-4497-8b69-866058baec8a.jpg",
      "/ff704484-a0b3-4483-b004-584fb344461f.jpg"
    ]
  },
  {
    "name": "Hiriketiya",
    "description": "A picturesque horseshoe-shaped bay that has become one of Sri Lanka's trendiest destinations for surfing, relaxation, and boutique stays. Hiriketiya is a picturesque coastal hideaway on Sri Lanka’s southern shores, celebrated for its crescent-shaped bay, turquoise waters and laid-back tropical atmosphere. Fringed by lush greenery and charming cafés, this inviting beach destination has become a favourite among surfers, beach lovers and travellers seeking a slower pace of life. Spend your days catching waves, relaxing beneath swaying palms or enjoying fresh seafood by the shore, before unwinding to the gentle rhythm of the ocean. With its blend of natural beauty, surf culture and intimate coastal charm, Hiriketiya is a delightful escape for those seeking an authentic yet contemporary beach experience.",
    "bestTime": "November to April",
    "perfectFor": [
      "Surfing",
      "Beach Holidays",
      "Couples",
      "Digital Nomads"
    ],
    "attractions": [
      "Hiriketiya Beach",
      "Surfing",
      "Cliffside Cafés",
      "Sunset Views",
      "Yoga Experiences"
    ],
    "experiences": [],
    "nearby": [
      "Dickwella (10 minutes)",
      "Tangalle (25 minutes)",
      "Talalla (25 minutes)",
      "Mirissa (35 minutes)"
    ],
    "id": "hiriketiya",
    "lat": 5.96,
    "lng": 80.7,
    "map": {
      "top": 95,
      "left": 51.6
    },
    "images": [
      "/8de9dae7-2ef0-4497-8b69-866058baec8a.jpg",
      "/ff704484-a0b3-4483-b004-584fb344461f.jpg"
    ]
  },
  {
    "name": "Kataragama",
    "description": "Situated in Sri Lanka’s southeastern region, Kataragama is a deeply revered pilgrimage destination where spiritual traditions, cultural diversity and natural landscapes come together. The sacred Kataragama Temple complex attracts devotees from Buddhist, Hindu and other religious traditions, creating a unique atmosphere of devotion and vibrant ritual. Visitors can explore the sacred shrines, witness traditional offerings and experience the town’s lively pilgrimage culture, particularly during the annual Esala festival. The surrounding region also provides access to the wilderness of Yala National Park and the peaceful landscapes of Menik Ganga. Combining profound spiritual significance with opportunities for nature exploration, Kataragama offers a meaningful cultural experience for pilgrims and curious travellers alike.",
    "bestTime": "Year-round",
    "perfectFor": [
      "Pilgrims",
      "Culture",
      "Families",
      "Nature"
    ],
    "attractions": [
      "Kataragama Temple",
      "Menik Ganga",
      "Sacred Pilgrimage Sites",
      "Cultural Festivals"
    ],
    "experiences": [],
    "nearby": [
      "Yala (45 minutes)",
      "Tissamaharama(30 minutes)",
      "Bundala (1 hr)",
      "Udawalawe (1hr 30 minutes)"
    ],
    "id": "kataragama",
    "lat": 6.42,
    "lng": 81.33,
    "map": {
      "top": 84.5,
      "left": 69.3
    },
    "images": [
      "/3aaa188a-cac8-4da0-93ad-bc14a5dedf10.jpg",
      "/0eb3cc3f-eefc-41a9-8abb-186c7ee05029.jpg"
    ]
  },
  {
    "name": "Kitulgala",
    "description": "Nestled amid the lush rainforests and rolling hills of Sri Lanka’s wet zone, Kitulgala is an adventure-filled destination celebrated for its rushing rivers, rich biodiversity and spectacular natural surroundings. The Kelani River flows through this picturesque region, creating the perfect setting for thrilling white-water rafting, while forest trails and hidden waterfalls invite visitors to explore its verdant landscapes. Nature enthusiasts can discover remarkable birdlife, enjoy guided rainforest walks and experience the area's cinematic heritage, as Kitulgala was one of the filming locations for The Bridge on the River Kwai. Combining outdoor adventure with the tranquility of tropical wilderness, Kitulgala is an ideal escape for thrill-seekers and nature lovers alike.",
    "bestTime": "December to April",
    "perfectFor": [
      "Nature",
      "Adventure",
      "Families",
      "Team building"
    ],
    "attractions": [
      "White Water Rafting",
      "Jungle Trekking",
      "Waterfall Exploration",
      "Bird Watching",
      "Adventure Activities"
    ],
    "experiences": [],
    "nearby": [
      "Adam's Peak (1hr 30 minutes)",
      "Hatton (1 hr)",
      "Nuwara Eliya (2 hrs)",
      "Kegalle (45 minutes)"
    ],
    "id": "kitulgala",
    "lat": 6.99,
    "lng": 80.42,
    "map": {
      "top": 71.4,
      "left": 43.8
    },
    "images": [
      "/3aaa188a-cac8-4da0-93ad-bc14a5dedf10.jpg",
      "/0eb3cc3f-eefc-41a9-8abb-186c7ee05029.jpg"
    ]
  },
  {
    "name": "Knuckles",
    "description": "Hidden within Sri Lanka’s central highlands, the Knuckles Mountain Range is a spectacular wilderness region renowned for its mist-shrouded peaks, cloud forests, cascading waterfalls and extraordinary biodiversity. Named for its distinctive mountain formations, this UNESCO-listed conservation landscape offers some of the island’s most rewarding trekking experiences, with trails winding through remote villages, lush forests and panoramic mountain viewpoints. Visitors can discover endemic birdlife, explore traditional rural communities and encounter dramatic scenery that changes with every elevation. From challenging mountain hikes to peaceful nature walks, the Knuckles Range offers an unforgettable escape for adventure seekers, photographers and nature lovers drawn to Sri Lanka’s untamed highlands.",
    "bestTime": "December to April",
    "perfectFor": [
      "Nature",
      "Adventure",
      "Hiking",
      "Photography"
    ],
    "attractions": [
      "Knuckles Mountain Range",
      "Trekking Trails",
      "Waterfalls",
      "Traditional Villages",
      "Cloud Forests"
    ],
    "experiences": [],
    "nearby": [
      "Kandy (1 hr 30 minutes)",
      "Matale (1 hr)",
      "Meemure (1 hr)",
      "Wasgamuwa (2hrs)"
    ],
    "id": "knuckles",
    "lat": 7.45,
    "lng": 80.8,
    "map": {
      "top": 60.9,
      "left": 54.4
    },
    "images": [
      "/8de9dae7-2ef0-4497-8b69-866058baec8a.jpg",
      "/ff704484-a0b3-4483-b004-584fb344461f.jpg"
    ]
  },
  {
    "name": "Koggala",
    "description": "Koggala is a charming southern coastal destination where tranquil lagoon landscapes, sandy beaches and rich cultural heritage create a relaxed tropical escape. The area is best known for Koggala Lake, a picturesque lagoon dotted with small islands and surrounded by mangroves, offering scenic boat rides and opportunities to observe local birdlife. Visitors can explore nearby Martin Wickramasinghe Folk Museum, discover traditional village life and witness the iconic stilt fishermen along the coastline. Its proximity to Galle and the surf-friendly beaches of Ahangama adds to its appeal, while peaceful lakeside surroundings offer a welcome contrast to the busier coastal towns. Blending nature, culture and seaside charm, Koggala is an inviting destination for travellers seeking a more tranquil southern coastal experience.",
    "bestTime": "November to April",
    "perfectFor": [
      "Families",
      "Nature",
      "Beach Holidays",
      "Nature"
    ],
    "attractions": [
      "Koggala Lake",
      "Stilt Fishermen",
      "Martin Wickramasinghe Folk Museum",
      "Koggala Beach",
      "Boat Safaris"
    ],
    "experiences": [],
    "nearby": [
      "Ahangama (10 minutes)",
      "Weligama (20 minutes)",
      "Galle (20 minutes)",
      "Mirissa (30 minutes)"
    ],
    "id": "koggala",
    "lat": 5.99,
    "lng": 80.33,
    "map": {
      "top": 94.3,
      "left": 41.2
    },
    "images": [
      "/8de9dae7-2ef0-4497-8b69-866058baec8a.jpg",
      "/ff704484-a0b3-4483-b004-584fb344461f.jpg"
    ]
  },
  {
    "name": "Kosgoda",
    "description": "A peaceful coastal town best known for turtle conservation, golden beaches, and river-based experiences. Situated along Sri Lanka’s southwestern coastline, Kosgoda is a peaceful beach destination renowned for its golden sands, palm-fringed shores and important sea turtle conservation efforts. The area is particularly known for its turtle hatcheries and conservation programmes, where visitors can learn about the protection of endangered sea turtles and the challenges facing these remarkable marine creatures. Beyond the shoreline, the surrounding countryside offers opportunities to explore coastal villages, discover nearby mangrove ecosystems and enjoy boat excursions along the Madu Ganga. With its emphasis on nature, wildlife conservation and relaxed beachside living, Kosgoda is an appealing destination for families, nature enthusiasts and travellers seeking a meaningful coastal experience.",
    "bestTime": "November to April",
    "perfectFor": [
      "Families",
      "Nature",
      "Beach Holidays"
    ],
    "attractions": [
      "Turtle Hatcheries",
      "Kosgoda Beach",
      "River Safaris",
      "Mangrove Ecosystems"
    ],
    "experiences": [],
    "nearby": [
      "Bentota (15 minutes)",
      "Ahungalla (10 minutes)",
      "Balapitiya (15 minutes)",
      "Ambalangoda ( 20 minutes)"
    ],
    "id": "kosgoda",
    "lat": 6.34,
    "lng": 80.03,
    "map": {
      "top": 86.3,
      "left": 32.8
    },
    "images": [
      "/8de9dae7-2ef0-4497-8b69-866058baec8a.jpg",
      "/ff704484-a0b3-4483-b004-584fb344461f.jpg"
    ]
  },
  {
    "name": "Mandaram Nuwara",
    "description": "Tucked away at the foot of Pidurutalagala, Sri Lanka’s highest mountain, Mandaram Nuwara is a secluded village celebrated for its mist-covered landscapes, cascading waterfalls and untouched highland charm. Often described as a hidden mountain retreat, this picturesque destination is surrounded by emerald-green tea plantations, forested slopes and dramatic valleys where clouds frequently drift across the hills. Visitors can explore scenic village trails, discover beautiful waterfalls such as Kolapathana Falls and experience the rhythms of traditional rural life. With its cool climate, peaceful atmosphere and breathtaking natural scenery, Mandaram Nuwara is an ideal escape for nature lovers, photographers and travellers seeking an off-the-beaten-path experience in Sri Lanka’s hill country.",
    "bestTime": "December to April",
    "perfectFor": [
      "Nature",
      "Couples",
      "Hiking",
      "Photography"
    ],
    "attractions": [
      "Scenic Mountain Landscapes",
      "Waterfalls",
      "Tea Plantations",
      "Village Walks",
      "Nature Trails"
    ],
    "experiences": [],
    "nearby": [
      "Nuwara Eliya (1 hr)",
      "Ohiya (1 hr 30 minutes)",
      "Hakgala (1 hr)",
      "Horton Plains (1 hr 30 minutes)"
    ],
    "id": "mandaram-nuwara",
    "lat": 7.08,
    "lng": 80.78,
    "map": {
      "top": 69.4,
      "left": 53.9
    },
    "images": [
      "/3aaa188a-cac8-4da0-93ad-bc14a5dedf10.jpg",
      "/0eb3cc3f-eefc-41a9-8abb-186c7ee05029.jpg"
    ]
  },
  {
    "name": "Mannar",
    "description": "Located in Sri Lanka’s northwestern region, Mannar is a distinctive coastal destination where vast open landscapes, ancient heritage and fascinating wildlife create a memorable travel experience. Connected to the mainland by a causeway, Mannar Island is known for its iconic baobab tree, historic Mannar Fort, traditional fishing communities and expansive stretches of sandy coastline. The surrounding region is also an important habitat for migratory birds, particularly around the seasonal wetlands and the nearby Adam’s Bridge marine landscape. Visitors can explore the atmospheric Talaimannar shoreline, discover the island’s diverse cultural influences and enjoy its quiet, windswept scenery. With its unique history, remarkable birdlife and tranquil coastal character, Mannar offers a fascinating glimpse into a lesser-explored part of Sri Lanka.",
    "bestTime": "May to September",
    "perfectFor": [
      "Bird Watchers",
      "History Enthusiasts",
      "Nature Lovers"
    ],
    "attractions": [
      "Adam's Bridge Viewpoint",
      "Baobab Tree",
      "Mannar Fort",
      "Bird Migration Sites",
      "Talaimannar Pier"
    ],
    "experiences": [],
    "nearby": [
      "Wilpattu (2 hrs)",
      "Vavuniya (2 hrs)",
      "Jaffna (3 hrs)",
      "Talaimannar (40 minutes)"
    ],
    "id": "mannar",
    "lat": 8.98,
    "lng": 79.9,
    "map": {
      "top": 25.9,
      "left": 29.1
    },
    "images": [
      "/8de9dae7-2ef0-4497-8b69-866058baec8a.jpg",
      "/ff704484-a0b3-4483-b004-584fb344461f.jpg"
    ]
  },
  {
    "name": "Matara",
    "description": "A vibrant southern coastal city combining colonial heritage, beautiful beaches, cultural landmarks, and authentic local charm. Stretching along Sri Lanka’s southern coastline, Matara is a lively coastal destination where historic landmarks, traditional culture and tropical beach life come together. The city’s heritage is reflected in the impressive Matara Fort, the historic Star Fort and the sacred Parevi Duwa Temple, set on a small island connected to the mainland by a bridge. Beyond the town centre, visitors can explore the golden beaches of Polhena, enjoy snorkelling in its sheltered waters and discover the nearby coastal villages and fishing communities. With its blend of cultural attractions, scenic ocean views and authentic local experiences, Matara is a rewarding stop for travellers exploring Sri Lanka’s southern coast.",
    "bestTime": "November to April",
    "perfectFor": [
      "Culture",
      "Beach Holidays",
      "Families"
    ],
    "attractions": [
      "Star Fort",
      "Matara Fort",
      "Polhena Beach",
      "Parey Dewa Temple",
      "Coastal Promenade"
    ],
    "experiences": [],
    "nearby": [
      "Mirissa (30 minutes)",
      "Talalla (30 minutes)",
      "Dickwella (40 minutes)",
      "Hiriketiya (40 minutes)"
    ],
    "id": "matara",
    "lat": 5.95,
    "lng": 80.55,
    "map": {
      "top": 95.3,
      "left": 47.4
    },
    "images": [
      "/8de9dae7-2ef0-4497-8b69-866058baec8a.jpg",
      "/ff704484-a0b3-4483-b004-584fb344461f.jpg"
    ]
  },
  {
    "name": "Meemure",
    "description": "One of Sri Lanka's most remote and scenic villages, Meemure offers an authentic rural experience surrounded by mountains, rivers, and untouched wilderness. Hidden deep within the breathtaking Knuckles Mountain Range, Meemure is a remote traditional village where untouched wilderness, dramatic mountain scenery and authentic rural life come together. Surrounded by forest-clad peaks, cascading streams, lush paddy fields and the imposing silhouette of Lakegala Mountain, this secluded destination offers a glimpse into a simpler way of life shaped by nature and age-old traditions. Visitors can explore scenic walking trails, discover nearby waterfalls, enjoy birdwatching and experience the warmth of local village hospitality. With its remarkable landscapes, peaceful atmosphere and sense of adventure, Meemure is an ideal retreat for travellers seeking an authentic off-the-beaten-path experience in Sri Lanka",
    "bestTime": "December to April",
    "perfectFor": [
      "Adventure",
      "Hikers",
      "Nature",
      "Photography"
    ],
    "attractions": [
      "Village Trails",
      "Natural Pools",
      "Trekking Routes",
      "Mountain Views",
      "Traditional Village Life"
    ],
    "experiences": [],
    "nearby": [
      "Knuckles (1 hr)",
      "Kandy (3 hts)",
      "Wasgamuwa (2 hrs)",
      "Matale (2 hrs)"
    ],
    "id": "meemure",
    "lat": 7.43,
    "lng": 80.84,
    "map": {
      "top": 61.4,
      "left": 55.6
    },
    "images": [
      "/3aaa188a-cac8-4da0-93ad-bc14a5dedf10.jpg",
      "/0eb3cc3f-eefc-41a9-8abb-186c7ee05029.jpg"
    ]
  },
  {
    "name": "Mirissa",
    "description": "Mirissa is a captivating southern coastal destination where golden beaches, turquoise waters and a laid-back tropical atmosphere create the perfect seaside escape. Renowned for its seasonal whale-watching excursions, the destination offers opportunities to encounter magnificent blue whales and dolphins in the Indian Ocean. Visitors can relax on the palm-fringed beach, discover the picturesque Coconut Tree Hill, enjoy surfing and snorkelling, or savour freshly caught seafood at charming beachfront restaurants. As the sun sets over the ocean, Mirissa comes alive with a relaxed coastal dining scene and inviting beachside experiences. Combining marine adventures, scenic beauty and vibrant coastal living, Mirissa is an ideal destination for beach lovers, couples and travellers seeking an unforgettable escape along Sri Lanka’s southern shores.",
    "bestTime": "November to April",
    "perfectFor": [
      "Beach Holidays",
      "Couples",
      "Honeymoon",
      "Whale watching"
    ],
    "attractions": [
      "Mirissa Beach",
      "Coconut Tree Hill",
      "Whale Watching",
      "Secret Beach",
      "Sunset Cruises"
    ],
    "experiences": [],
    "nearby": [
      "Weligama (20 minutes)",
      "Matara (30 minutes)",
      "Ahangama ( 30 minutes)",
      "Dickwella (45 minutes)"
    ],
    "id": "mirissa",
    "lat": 5.95,
    "lng": 80.46,
    "map": {
      "top": 95.3,
      "left": 44.9
    },
    "images": [
      "/8de9dae7-2ef0-4497-8b69-866058baec8a.jpg",
      "/ff704484-a0b3-4483-b004-584fb344461f.jpg"
    ]
  },
  {
    "name": "Minneriya",
    "description": "A premier wildlife destination best known for hosting \"The Gathering,\" one of Asia's largest congregations of wild elephants. Minneriya is a renowned wildlife destination in Sri Lanka’s Cultural Triangle, celebrated for its expansive grasslands, ancient reservoir and remarkable gatherings of wild elephants. At the heart of the experience lies Minneriya National Park, where elephants frequently gather around the reservoir during the dry season in search of water and fresh grazing grounds. Visitors can embark on exciting jeep safaris to observe elephants, spotted deer, monkeys and a rich variety of birdlife against a backdrop of forests and open plains. The surrounding region also offers opportunities to discover ancient irrigation heritage and explore nearby cultural landmarks, including Sigiriya and Polonnaruwa. With its extraordinary wildlife encounters and scenic natural landscapes, Minneriya is an essential destination for safari enthusiasts, photographers and nature lover",
    "bestTime": "July to October",
    "perfectFor": [
      "Wildlife",
      "Photography",
      "Families",
      "Nature"
    ],
    "attractions": [
      "Minneriya National Park",
      "Elephant Gathering",
      "Jeep Safaris",
      "Bird Watching",
      "Minneriya Tank"
    ],
    "experiences": [],
    "nearby": [
      "Sigiriya (30 minutes)",
      "Habarana (20 minutes)",
      "Polonnaruwa ( 45 minutes)",
      "Kaudulla ( 30 minutes)"
    ],
    "id": "minneriya",
    "lat": 8.04,
    "lng": 80.9,
    "map": {
      "top": 47.4,
      "left": 57.2
    },
    "images": [
      "/3aaa188a-cac8-4da0-93ad-bc14a5dedf10.jpg",
      "/0eb3cc3f-eefc-41a9-8abb-186c7ee05029.jpg"
    ]
  },
  {
    "name": "Ohiya",
    "description": "Hidden high in Sri Lanka’s central highlands, Ohiya is a tranquil mountain village renowned for its misty landscapes, cool climate and spectacular wilderness scenery. Surrounded by cloud forests, rolling grasslands and rugged mountain peaks, this peaceful destination serves as a gateway to the remarkable Horton Plains National Park, home to unique highland ecosystems and the dramatic viewpoint known as World’s End. Visitors can explore scenic hiking trails, enjoy birdwatching, discover the beauty of nearby forests and experience one of Sri Lanka’s most picturesque railway journeys through the mountains. With its unspoilt surroundings, refreshing highland atmosphere and sense of remote tranquillity, Ohiya is an ideal retreat for hikers, photographers and travellers seeking a quieter connection with nature.",
    "bestTime": "December to April",
    "perfectFor": [
      "Nature",
      "Hikers",
      "Photography",
      "Couples"
    ],
    "attractions": [
      "Horton Plains National Park",
      "World's End",
      "Baker's Falls",
      "Scenic Train Journey",
      "Mountain Viewpoints"
    ],
    "experiences": [],
    "nearby": [
      "Haputale (45 minutes)",
      "Nuwara Eliya (1 hr)",
      "Horton Plains( 30 minutes)",
      "Ella (1 hr 30 minutes)"
    ],
    "id": "ohiya",
    "lat": 6.82,
    "lng": 80.84,
    "map": {
      "top": 75.3,
      "left": 55.6
    },
    "images": [
      "/3aaa188a-cac8-4da0-93ad-bc14a5dedf10.jpg",
      "/0eb3cc3f-eefc-41a9-8abb-186c7ee05029.jpg"
    ]
  },
  {
    "name": "Pasikuda",
    "description": "Renowned for its calm, crystal-clear waters and long stretch of golden shoreline, Pasikuda is one of Sri Lanka's finest beach destinations on the east coast. A beautiful beach destination on Sri Lanka’s eastern coast, celebrated for its sweeping crescent-shaped bay, soft golden sands and remarkably shallow turquoise waters. Its calm coastal setting creates an inviting atmosphere for swimming, leisurely seaside strolls and relaxing beneath the tropical sun during the favourable season. Visitors can enjoy snorkelling and boat excursions, explore the nearby shores of Kalkudah and indulge in peaceful beachfront stays with stunning ocean views. Combining natural beauty with laid-back luxury, Pasikuda is an ideal retreat for couples, families and travellers seeking a tranquil tropical getaway.",
    "bestTime": "May to September",
    "perfectFor": [
      "Beach Holidays",
      "Families",
      "Honeymoon",
      "Water Sports"
    ],
    "attractions": [
      "Passikudah Beach",
      "Snorkelling",
      "Diving",
      "Sunset Cruises",
      "Water Sports Activities"
    ],
    "experiences": [],
    "nearby": [
      "Batticaloa( 40 minutes)",
      "Kalkudah (10 minutes)",
      "Trincomalee (2 hrs)",
      "Ampara (2 hrs 30 minutes)"
    ],
    "id": "pasikuda",
    "lat": 7.93,
    "lng": 81.56,
    "map": {
      "top": 49.9,
      "left": 75.8
    },
    "images": [
      "/8de9dae7-2ef0-4497-8b69-866058baec8a.jpg",
      "/ff704484-a0b3-4483-b004-584fb344461f.jpg"
    ]
  },
  {
    "name": "Pinnawala",
    "description": "Nestled amid the lush countryside of Sri Lanka’s Sabaragamuwa Province, Pinnawala is a popular destination known for its elephant conservation efforts and peaceful rural surroundings. The area is home to the renowned Pinnawala Elephant Orphanage, where visitors can observe elephants in a managed care environment and learn about the challenges of protecting these magnificent animals. The nearby Maha Oya River provides a picturesque setting where elephants can often be seen bathing, while the surrounding villages offer glimpses of traditional Sri Lankan life. With its wildlife experiences, verdant landscapes and family-friendly attractions, Pinnawala is a memorable stop for travellers interested in elephants and the island’s natural heritage.",
    "bestTime": "Year-round",
    "perfectFor": [
      "Nature",
      "Families",
      "Wildlife"
    ],
    "attractions": [
      "Pinnawala Elephant Orphanage",
      "Elephant Feeding Sessions",
      "River Bathing Experience",
      "Local Craft Shops"
    ],
    "experiences": [],
    "nearby": [
      "Kegalle (30 minutes)",
      "Kitulgala (1 hr)",
      "Kandy (1 hr 15 minutes)",
      "Colombo (2hrs 30 minutes)"
    ],
    "id": "pinnawala",
    "lat": 7.3,
    "lng": 80.39,
    "map": {
      "top": 64.3,
      "left": 42.9
    },
    "images": [
      "/8de9dae7-2ef0-4497-8b69-866058baec8a.jpg",
      "/ff704484-a0b3-4483-b004-584fb344461f.jpg"
    ]
  },
  {
    "name": "Polonnaruwa",
    "description": "The medieval capital of Sri Lanka, Polonnaruwa is a UNESCO World Heritage Site celebrated for its remarkably preserved ancient city, monumental Buddhist sculptures and architectural masterpieces. Once a flourishing royal capital, Polonnaruwa reveals the ingenuity of ancient Sri Lankan civilisation through its grand palace ruins, intricately carved stone temples and sophisticated irrigation systems. Visitors can explore the impressive Gal Vihara, admire the circular Vatadage and discover the remains of royal complexes scattered across a landscape of lakes and greenery. The nearby Parakrama Samudra reservoir adds to the region’s scenic beauty, while cycling through the ancient city offers an immersive way to experience its historic treasures. Blending extraordinary archaeology, spiritual heritage and timeless landscapes, Polonnaruwa is an essential destination for history enthusiasts and cultural explorers.",
    "bestTime": "May to September",
    "perfectFor": [
      "Culture",
      "History",
      "Families"
    ],
    "attractions": [
      "Gal Viharaya",
      "Royal Palace Complex",
      "Parakrama Samudraya",
      "Vatadage",
      "Ancient City Ruins"
    ],
    "experiences": [],
    "nearby": [
      "Sigiriya (1 hr 15 minutes)",
      "Habarana (1 hr)",
      "Minneriya (45 minutes)",
      "Dambulla (1 hr 15 minutes)"
    ],
    "id": "polonnaruwa",
    "lat": 7.94,
    "lng": 81,
    "map": {
      "top": 49.7,
      "left": 60.1
    },
    "images": [
      "/2408852f-e87c-4499-a3f7-22b850828253.jpg",
      "/c15d1956-f6e5-4a1c-826d-779c4b57ce48.jpg"
    ]
  },
  {
    "name": "Tangalle",
    "description": "Set along Sri Lanka’s enchanting southern coastline, Tangalle is a captivating seaside destination renowned for its sweeping golden beaches, swaying coconut palms and tranquil tropical atmosphere. Unlike the busier coastal resorts, this laid-back town offers a more secluded escape, with picturesque bays, rocky headlands and stretches of unspoilt shoreline creating a beautiful natural setting. Visitors can explore the nearby Rekawa Turtle Conservation Project, discover the striking rock formations of Hummanaya Blowhole and enjoy peaceful walks along the coast. The surrounding region also offers opportunities for lagoon excursions, birdwatching and authentic village experiences. With its blend of coastal beauty, wildlife encounters and relaxed seaside living, Tangalle is an ideal retreat for travellers seeking a quieter side of Sri Lanka’s southern shores.",
    "bestTime": "November to April",
    "perfectFor": [
      "Couples",
      "Beach Holidays",
      "Honeymoon",
      "Families"
    ],
    "attractions": [
      "Tangalle Beach",
      "Silent Beach",
      "Rekawa Turtle Conservation Project",
      "Lagoon Excursions",
      "Luxury Beach Resorts"
    ],
    "experiences": [],
    "nearby": [
      "Hiriketiya (30 minutes)",
      "Dickwella  (20 minutes)",
      "Talalla (30 minutes)",
      "Yala (1 hr 30 minutes)"
    ],
    "id": "tangalle",
    "lat": 6.02,
    "lng": 80.79,
    "map": {
      "top": 93.7,
      "left": 54.2
    },
    "images": [
      "/8de9dae7-2ef0-4497-8b69-866058baec8a.jpg",
      "/ff704484-a0b3-4483-b004-584fb344461f.jpg"
    ]
  },
  {
    "name": "Talalla",
    "description": "A hidden coastal gem known for its tranquil crescent-shaped beach, laid-back atmosphere, and wellness-focused experiences. Nestled along Sri Lanka’s beautiful southern coastline, Talalla is a peaceful beachside retreat renowned for its sweeping crescent-shaped bay, golden sands and palm-fringed shores. Away from the busier coastal towns, this tranquil destination invites visitors to embrace a slower pace of life, whether enjoying leisurely beach walks, relaxing beneath swaying coconut palms or watching traditional fishing boats return to shore. The area also offers opportunities for beginner surfing, yoga and wellness experiences, while nearby attractions such as Dondra Lighthouse and Hiriketiya Bay add to its appeal. With its unspoilt coastal charm and laid-back atmosphere, Talalla is an ideal escape for travellers seeking relaxation, natural beauty and a more secluded side of Sri Lanka’s southern coast.",
    "bestTime": "November to April",
    "perfectFor": [
      "Couples",
      "Beach Holidays",
      "Yoga",
      "Wellness"
    ],
    "attractions": [
      "Talalla Beach",
      "Yoga Retreats",
      "Surfing",
      "Beach Walks",
      "Sunset Experiences"
    ],
    "experiences": [],
    "nearby": [
      "Matara (30 minutes)",
      "Dickwella (20 minutes)",
      "Hiriketiya (30 minutes)",
      "Tangalle (45 minutes)"
    ],
    "id": "talalla",
    "lat": 5.95,
    "lng": 80.62,
    "map": {
      "top": 95.3,
      "left": 49.4
    },
    "images": [
      "/8de9dae7-2ef0-4497-8b69-866058baec8a.jpg",
      "/ff704484-a0b3-4483-b004-584fb344461f.jpg"
    ]
  },
  {
    "name": "Trincomalee",
    "description": "One of Sri Lanka's most captivating east coast destinations, Trincomalee offers beautiful beaches, rich history, marine life encounters, and cultural heritage. Situated along Sri Lanka’s picturesque eastern coast, Trincomalee is a captivating seaside destination renowned for its pristine beaches, turquoise waters and magnificent natural harbour. The city’s rich history and spiritual heritage come alive at the iconic Koneswaram Temple, dramatically perched on Swami Rock overlooking the Indian Ocean, while nearby Nilaveli and Uppuveli beaches offer idyllic settings for relaxation and coastal exploration. Visitors can enjoy snorkelling around Pigeon Island, discover vibrant marine life, embark on seasonal whale-watching excursions and explore the historic Fort Frederick. With its blend of cultural treasures, spectacular ocean scenery and tropical tranquillity, Trincomalee is a wonderful escape for beach lovers, nature enthusiasts and cultural explorers.",
    "bestTime": "May to September",
    "perfectFor": [
      "Families",
      "Beach Holidays",
      "Divers",
      "Culture"
    ],
    "attractions": [
      "Nilaveli Beach",
      "Pigeon Island National Park",
      "Koneswaram Temple",
      "Whale & Dolphin Watching",
      "Fort Frederick"
    ],
    "experiences": [],
    "nearby": [
      "Nilaveli (30 minutes)",
      "Uppuveli (15 minutes)",
      "Passikudah (1 hr 45minutes)",
      "Polonnaruwa (2hrs 30minutes)"
    ],
    "id": "trincomalee",
    "lat": 8.59,
    "lng": 81.22,
    "map": {
      "top": 34.8,
      "left": 66.2
    },
    "images": [
      "/8de9dae7-2ef0-4497-8b69-866058baec8a.jpg",
      "/ff704484-a0b3-4483-b004-584fb344461f.jpg"
    ]
  },
  {
    "name": "Vavuniya",
    "description": "Located in Sri Lanka’s northern region, Vavuniya is a fascinating destination where cultural traditions, rural landscapes and the island’s northern heritage come together. Serving as an important gateway between the northern and southern parts of the country, the town offers a glimpse into everyday local life, with lively markets, traditional eateries and a distinctive Tamil cultural influence. Visitors can discover the historic Madukanda Vihara, explore nearby Hindu temples and experience the peaceful countryside dotted with reservoirs, paddy fields and small villages. While less frequented by mainstream tourism, Vavuniya provides an opportunity to appreciate the cultural diversity and quieter rhythms of northern Sri Lanka. Its convenient location also makes it a useful stop for travellers exploring destinations such as Jaffna and Mannar.",
    "bestTime": "May to September",
    "perfectFor": [
      "Culture",
      "Road Trippers",
      "History"
    ],
    "attractions": [
      "Local Markets",
      "Historical Temples",
      "Rural Landscapes",
      "Cultural Sites"
    ],
    "experiences": [],
    "nearby": [
      "Mannar (2 hrs)",
      "Mullaitivu (2 hrs)",
      "Anuradhapura (1 hr 30 minutes)",
      "Jaffna (2 hrs)"
    ],
    "id": "vavuniya",
    "lat": 8.75,
    "lng": 80.5,
    "map": {
      "top": 31.1,
      "left": 46
    },
    "images": [
      "/8de9dae7-2ef0-4497-8b69-866058baec8a.jpg",
      "/ff704484-a0b3-4483-b004-584fb344461f.jpg"
    ]
  },
  {
    "name": "Wasgamuwa",
    "description": "A hidden wildlife paradise offering exceptional safari experiences, diverse ecosystems, and abundant elephant sightings away from the crowds. It’s a remarkable wildlife destination in central Sri Lanka celebrated for its dense forests, open grasslands and thriving elephant population. Wasgamuwa National Park offers an authentic safari experience through a diverse landscape of dry-zone forests, riverine habitats and natural clearings, where visitors may encounter wild elephants, sloth bears, deer, crocodiles and a rich variety of birdlife. The park’s relatively peaceful atmosphere provides opportunities to appreciate wildlife away from some of the island’s busier safari circuits. Surrounded by scenic countryside and important ancient irrigation landscapes, Wasgamuwa is an ideal destination for wildlife enthusiasts, photographers and nature lovers seeking an immersive encounter with Sri Lanka’s untamed wilderness.",
    "bestTime": "May to September",
    "perfectFor": [
      "Nature",
      "Families",
      "Photography",
      "Wildlife"
    ],
    "attractions": [
      "Wasgamuwa National Park",
      "Elephant Safaris",
      "Bird Watching",
      "Nature Trails",
      "River Ecosystems"
    ],
    "experiences": [],
    "nearby": [
      "Knuckles (2 hrs)",
      "Meemure (2 hrs)",
      "Matale ( 1 hr 30 minutes)",
      "Sigiriya (2 hrs)"
    ],
    "id": "wasgamuwa",
    "lat": 7.73,
    "lng": 80.94,
    "map": {
      "top": 54.5,
      "left": 58.4
    },
    "images": [
      "/8de9dae7-2ef0-4497-8b69-866058baec8a.jpg",
      "/ff704484-a0b3-4483-b004-584fb344461f.jpg"
    ]
  },
  {
    "name": "Yapahuwa",
    "description": "A remarkable archaeological destination renowned for its dramatic rock fortress, intricate stone carvings and fascinating royal heritage. Once a royal capital during the 13th century, Yapahuwa rises above the surrounding countryside, with a grand ornamental staircase leading towards the remains of its ancient palace complex. Visitors can admire the exquisite craftsmanship of the stone balustrades, discover the historic Buddhist temple and explore the fortress ruins while enjoying panoramic views across the surrounding plains. Rich in history yet quieter than many of Sri Lanka’s better-known cultural sites, Yapahuwa offers an engaging journey into the island’s medieval past, making it a rewarding destination for history enthusiasts, architecture lovers and cultural explorers.",
    "bestTime": "May to September",
    "perfectFor": [
      "History",
      "Culture",
      "Photography"
    ],
    "attractions": [
      "Yapahuwa Rock Fortress",
      "Ancient Stone Stairway",
      "Archaeological Museum",
      "Panoramic Viewpoints",
      "Historic Ruins"
    ],
    "experiences": [],
    "nearby": [
      "Anuradhapura (1 hr 30 minutes)",
      "Kurunegala (45 minutes)",
      "Dambulla (1 hr 15 minutes)",
      "Sigiriya (1 hr 30 minutes)"
    ],
    "id": "yapahuwa",
    "lat": 7.82,
    "lng": 80.31,
    "map": {
      "top": 52.4,
      "left": 40.7
    },
    "images": [
      "/8de9dae7-2ef0-4497-8b69-866058baec8a.jpg",
      "/ff704484-a0b3-4483-b004-584fb344461f.jpg"
    ]
  },
  {
    "name": "Unawatuna",
    "description": "Located along Sri Lanka’s southern coastline, Unawatuna is a vibrant beach destination renowned for its golden sands, turquoise waters and relaxed tropical atmosphere. Its beautiful crescent-shaped bay provides an inviting setting for swimming, snorkelling and sun-soaked relaxation, while nearby coral reefs reveal a fascinating underwater world. Visitors can explore the iconic Japanese Peace Pagoda, enjoy panoramic coastal views from Rumassala Hill and discover the historic streets of nearby Galle Fort. The area also offers charming beach cafés, fresh seafood restaurants and lively beachfront experiences, creating a wonderful balance of relaxation and adventure. With its captivating coastal scenery, rich cultural surroundings and welcoming atmosphere, Unawatuna is an ideal destination for beach lovers, couples and travellers seeking a memorable southern coastal escape.",
    "bestTime": "November to April",
    "perfectFor": [
      "Beach Holidays",
      "Families",
      "Honeymoon",
      "Diving"
    ],
    "attractions": [
      "Unawatuna Beach",
      "Sunset Walks",
      "Scuba diving & Marine Adventure",
      "Snorkeling & Swimming"
    ],
    "experiences": [],
    "nearby": [
      "Galle (15 minutes)",
      "Thalpe (15 minutes)",
      "Weligama ( 45 minutes)",
      "Mirissa  (1 hr)"
    ],
    "id": "unawatuna",
    "lat": 6.01,
    "lng": 80.25,
    "map": {
      "top": 93.9,
      "left": 39
    },
    "images": [
      "/8de9dae7-2ef0-4497-8b69-866058baec8a.jpg",
      "/ff704484-a0b3-4483-b004-584fb344461f.jpg"
    ]
  },
  {
    "name": "Digana",
    "description": "Set amidst the lush landscapes of Sri Lanka’s central highlands, Digana is a tranquil countryside retreat celebrated for its scenic mountain views, verdant greenery and peaceful rural charm. Located near the historic city of Kandy and overlooking the picturesque Victoria Reservoir, the area offers a refreshing escape into nature, where rolling hills, tea plantations and quiet village roads create a soothing backdrop. Visitors can enjoy leisurely nature walks, cycling through the countryside, birdwatching and outdoor adventures, while golf enthusiasts can experience the renowned Victoria Golf Resort. With its blend of natural beauty, outdoor recreation and relaxed seclusion, Digana is an ideal destination for travellers seeking a quieter side of Sri Lanka.",
    "bestTime": "January – April June – August",
    "perfectFor": [
      "Nature",
      "Golf",
      "Hiking",
      "Photography",
      "Birdwatching",
      "Relaxation",
      "Scenic Retreats"
    ],
    "attractions": [
      "Victoria Reservoir",
      "Victoria Golf & Country Resort",
      "Pettigala Rock",
      "Bambaragala Raja Maha Viharaya",
      "Victoria Dam",
      "Knuckles Mountain Range",
      "Pallekele International Cricket Stadium"
    ],
    "experiences": [],
    "nearby": [
      "Kandy (30–45 minutes)",
      "Knuckles Mountain Range (1–1.5 hrs, depending on trail access)",
      "Matale (1–1.5 hrs)",
      "Nuwara Eliya (3–4 hrs)"
    ],
    "id": "digana",
    "lat": 7.3,
    "lng": 80.74,
    "map": {
      "top": 64.3,
      "left": 52.8
    },
    "images": [
      "/3aaa188a-cac8-4da0-93ad-bc14a5dedf10.jpg",
      "/0eb3cc3f-eefc-41a9-8abb-186c7ee05029.jpg"
    ]
  },
  {
    "name": "Hatton",
    "description": "Nestled amidst the emerald-green tea country of Sri Lanka’s central highlands, Hatton is a scenic mountain destination celebrated for its rolling tea plantations, cool climate and timeless colonial charm. The surrounding hills reveal sweeping landscapes of neatly manicured tea bushes, mist-covered valleys and tranquil reservoirs, offering a glimpse into the island’s renowned Ceylon tea heritage. Visitors can explore working tea estates and historic tea factories, enjoy the peaceful beauty of Castlereagh Reservoir and venture towards Adam’s Peak, an important pilgrimage site surrounded by forested mountains. With its refreshing highland atmosphere, picturesque scenery and rich plantation history, Hatton is an inviting retreat for nature lovers, tea enthusiasts and travellers seeking the serene beauty of Sri Lanka’s hill country.",
    "bestTime": "January – April December – May (ideal for the Adam’s Peak pilgrimage season)",
    "perfectFor": [
      "Nature",
      "Tea Experiences",
      "Hiking",
      "Photography",
      "Scenic Train Journeys",
      "Waterfalls",
      "Relaxation",
      "Heritage Stays"
    ],
    "attractions": [
      "Castlereagh Reservoir",
      "Adam’s Peak (Sri Pada)",
      "Devon Falls",
      "St. Clair’s Falls",
      "Warleigh Church",
      "Ceylon Tea Plantation & Factory Experiences",
      "Maskeliya Reservoir",
      "Christ Church Warleigh"
    ],
    "experiences": [],
    "nearby": [
      "Nuwara Eliya (1.5–2 hrs)",
      "Adam’s Peak / Nallathanniya (1–1.5 hrs)",
      "Kandy (2–2.5 hrs)",
      "Ella (3–4 hrs)"
    ],
    "id": "hatton",
    "lat": 6.89,
    "lng": 80.6,
    "map": {
      "top": 73.7,
      "left": 48.8
    },
    "images": [
      "/8de9dae7-2ef0-4497-8b69-866058baec8a.jpg",
      "/ff704484-a0b3-4483-b004-584fb344461f.jpg"
    ]
  }
];

