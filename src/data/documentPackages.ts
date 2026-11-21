export type DocumentParagraphBlock = {
  type: 'paragraph';
  text: string;
  style: string;
  list: boolean;
  align: string;
};

export type DocumentTableBlock = {
  type: 'table';
  rows: string[][];
};

export type DocumentPackage = {
  id: string;
  name: string;
  sourceFile: string;
  title: string;
  image: string;
  blocks: Array<DocumentParagraphBlock | DocumentTableBlock>;
};

export const DOCUMENT_PACKAGES: DocumentPackage[] = [
  {
    "id": "2-tour-packages-bird-watching-tours",
    "name": "Bird Watching Tours",
    "sourceFile": "2  tour packages-Bird Watching Tours.docx",
    "title": "Tour package 01",
    "image": "/3aaa188a-cac8-4da0-93ad-bc14a5dedf10.jpg",
    "blocks": [
      {
        "type": "paragraph",
        "text": "Tour package 01",
        "style": "",
        "list": false,
        "align": ""
      },
      {
        "type": "paragraph",
        "text": "Ceylon’s Feathered Wonders- 4 Days|3 Nights",
        "style": "",
        "list": false,
        "align": "center"
      },
      {
        "type": "paragraph",
        "text": "A Brief Journey into the Island’s World of Birds",
        "style": "",
        "list": false,
        "align": ""
      },
      {
        "type": "paragraph",
        "text": "Experience the world of birds in just short as 4 days and not far from the airport, promising an ideal escape and a thrilling adventure in Sri Lanka.",
        "style": "",
        "list": false,
        "align": ""
      },
      {
        "type": "paragraph",
        "text": "This island is home to over 400 bird species, and this tour offers a chance to explore some of the country's rich birdlife featuring a fun yet adventurous boat ride and a nature walk of its life.",
        "style": "",
        "list": false,
        "align": ""
      },
      {
        "type": "paragraph",
        "text": "DAY 01 – WELCOME TO SRI LANKA |NEGOMBO",
        "style": "",
        "list": false,
        "align": ""
      },
      {
        "type": "paragraph",
        "text": "Your Birding Adventure Begins with a Relaxing Coastal Escape in Negombo",
        "style": "",
        "list": false,
        "align": ""
      },
      {
        "type": "paragraph",
        "text": "Approx. travel time: 20–40 minutes",
        "style": "",
        "list": false,
        "align": ""
      },
      {
        "type": "paragraph",
        "text": "Upon arrival at Bandaranaike International Airport, you will be warmly welcomed by our representative and assisted with your arrival formalities. Begin your Sri Lankan adventure with a comfortable transfer to Negombo, a charming coastal town located less than an hour from the airport.",
        "style": "",
        "list": false,
        "align": ""
      },
      {
        "type": "paragraph",
        "text": "After checking in to your hotel, take time to relax and unwind after your journey, soaking in the laid-back tropical atmosphere as you prepare for the exciting experiences that await you on this beautiful island.",
        "style": "",
        "list": false,
        "align": ""
      },
      {
        "type": "paragraph",
        "text": "Things to do",
        "style": "",
        "list": false,
        "align": ""
      },
      {
        "type": "paragraph",
        "text": "Negombo City Tour",
        "style": "",
        "list": true,
        "align": ""
      },
      {
        "type": "paragraph",
        "text": "Sunset by the Indian Ocean",
        "style": "",
        "list": true,
        "align": ""
      },
      {
        "type": "paragraph",
        "text": "Stay – Negombo",
        "style": "",
        "list": false,
        "align": ""
      },
      {
        "type": "paragraph",
        "text": "Day 02 – NEGOMBO |WILPATTU",
        "style": "",
        "list": false,
        "align": ""
      },
      {
        "type": "paragraph",
        "text": "Discover Sri Lanka’s Avian Treasures Along the Way to Wilpattu.",
        "style": "",
        "list": false,
        "align": ""
      },
      {
        "type": "paragraph",
        "text": "Approx. travel time: 3–4 hours",
        "style": "",
        "list": false,
        "align": ""
      },
      {
        "type": "paragraph",
        "text": "Things to Do",
        "style": "",
        "list": false,
        "align": ""
      },
      {
        "type": "paragraph",
        "text": "Muthrajawela Sanctuary expedition",
        "style": "",
        "list": false,
        "align": ""
      },
      {
        "type": "paragraph",
        "text": "Day 02 starts early with a packed meal and takes about 30- 50 minutes road drive; as we reach the Muthrurajawela wetland marine sanctuary and will hop on a boat ride to explore the eco-zone for a variety of birds.",
        "style": "",
        "list": false,
        "align": ""
      },
      {
        "type": "paragraph",
        "text": "As many as 102 species of birds in Sri Lanka are found here. It is an important breeding habitat of many aquatic birds.",
        "style": "",
        "list": false,
        "align": ""
      },
      {
        "type": "paragraph",
        "text": "You would be able to see birds such as Cormorants, Ducks, Egrets, Herons, Storks, Eagles, Terns, Swallows, Swifts, Kingfishers and other resident birds.",
        "style": "",
        "list": false,
        "align": ""
      },
      {
        "type": "paragraph",
        "text": "Besides the rich bird life, you could witness Monkeys such as Toque Macaque, Prawn fishermen in the lagoon, Sea going fishing catamarans returning home after their night out in the sea and Mangroves vegetation.",
        "style": "",
        "list": false,
        "align": ""
      },
      {
        "type": "paragraph",
        "text": "Anawilundawa Sanctury expedition",
        "style": "",
        "list": false,
        "align": ""
      },
      {
        "type": "paragraph",
        "text": "Anawilundawa a man- made wetland for another wonderful episode of bird watching which is also a sanctuary with prolific bird life in beautiful surroundings.",
        "style": "",
        "list": false,
        "align": ""
      },
      {
        "type": "paragraph",
        "text": "White Ibis, Open-bill, Great Cormorant, Purple Swamp-hen, and Pheasant-tailed Jacana. Migrant birds can be seen between October and April, while endemic and resident birds are visible year-round.",
        "style": "",
        "list": false,
        "align": ""
      },
      {
        "type": "paragraph",
        "text": "Wild species such as Rusty-spotted cat, Fishing cat, Indian otter, Slender loris, and Toque monkey, Squirrels, Mongoose, fruit bats etc.  along with 74 species of butterflies can also be seen in this unique sanctuary.",
        "style": "",
        "list": false,
        "align": ""
      },
      {
        "type": "paragraph",
        "text": "The final transfer to Nawadankulama tank can be another addition to this short tour as the final stop for bird lovers where you will get to see large flocks of migrant ducks, year round birds like Collared dove and Indian grey partridge etc. It is about half an hour’s drive from Anawilundawa Sanctuary",
        "style": "",
        "list": false,
        "align": ""
      },
      {
        "type": "paragraph",
        "text": "Stay in Wilpattu",
        "style": "",
        "list": false,
        "align": ""
      },
      {
        "type": "paragraph",
        "text": "DAY 03 – WILPATTU",
        "style": "",
        "list": false,
        "align": ""
      },
      {
        "type": "paragraph",
        "text": "A Full-Day\\Half- Day Birdwatching & Wildlife Safari in Wilpattu National Park",
        "style": "",
        "list": false,
        "align": ""
      },
      {
        "type": "paragraph",
        "text": "Dedicate your last day to discovering the remarkable biodiversity of Wilpattu National Park, one of Sri Lanka’s most treasured wildlife sanctuaries. Accompanied by an experienced naturalist, explore its diverse habitats, from dense forests and open grasslands to picturesque natural lakes known as villus. Keep your binoculars ready to spot an impressive variety of resident and migratory birds, alongside fascinating wildlife such as elephants, deer, sloth bears, and the elusive Sri Lankan leopard. With every turn revealing new sights and sounds, enjoy an immersive journey into the island’s untamed wilderness, perfect for bird enthusiasts, nature lovers, and wildlife photographers alike.",
        "style": "",
        "list": false,
        "align": ""
      },
      {
        "type": "paragraph",
        "text": "Stay in Wilpattu",
        "style": "",
        "list": false,
        "align": ""
      },
      {
        "type": "paragraph",
        "text": "DAY 04 -DEPARTURE|AIRPORT",
        "style": "",
        "list": false,
        "align": ""
      },
      {
        "type": "paragraph",
        "text": "A Fond Farewell to Sri Lanka, Carrying Memories of Extraordinary Birdlife and Wild Encounters.",
        "style": "",
        "list": false,
        "align": ""
      },
      {
        "type": "paragraph",
        "text": "Approx. travel time: 3–4 hours",
        "style": "",
        "list": false,
        "align": ""
      },
      {
        "type": "paragraph",
        "text": "As your short yet adventure-filled birdwatching journey comes to an end, take home cherished memories of Sri Lanka’s remarkable birdlife and natural wonders. You may choose to extend your Ceylon holiday with another exciting chapter of discovery or enjoy a comfortable transfer to the airport for your onward departure.",
        "style": "",
        "list": false,
        "align": ""
      },
      {
        "type": "paragraph",
        "text": "Tour package 02",
        "style": "",
        "list": false,
        "align": ""
      },
      {
        "type": "paragraph",
        "text": "Wings & Wilderness: A Sri Lankan Nature Odyssey 14Days|13 Nights",
        "style": "",
        "list": false,
        "align": "center"
      },
      {
        "type": "paragraph",
        "text": "Where every forest holds a secret, every mountain trail reveals a new perspective, and every fleeting wingbeat becomes a moment worth capturing.",
        "style": "",
        "list": false,
        "align": ""
      },
      {
        "type": "paragraph",
        "text": "Discover Sri Lanka beyond its familiar sights, journeying into a world of extraordinary biodiversity, ancient rainforests, mist-covered highlands and thriving wildlife habitats.",
        "style": "",
        "list": false,
        "align": ""
      },
      {
        "type": "paragraph",
        "text": "Designed for birdwatchers, nature lovers and wildlife photographers, this immersive escape invites you to slow down, follow the rhythms of the wild and encounter the island's remarkable natural treasures, one unforgettable moment at a time.",
        "style": "",
        "list": false,
        "align": ""
      },
      {
        "type": "paragraph",
        "text": "DAY 01 – WELCOME TO SRI LANKA | KANDY",
        "style": "",
        "list": false,
        "align": ""
      },
      {
        "type": "paragraph",
        "text": "The journey begins",
        "style": "",
        "list": false,
        "align": ""
      },
      {
        "type": "paragraph",
        "text": "Approx. travel time: 3–4 hours",
        "style": "",
        "list": false,
        "align": ""
      },
      {
        "type": "paragraph",
        "text": "Arrive in Sri Lanka and begin your journey into the island's natural wonders with a scenic transfer to Kandy, a charming hill capital surrounded by verdant landscapes and rich cultural heritage.",
        "style": "",
        "list": false,
        "align": ""
      },
      {
        "type": "paragraph",
        "text": "Discover Kandy",
        "style": "",
        "list": false,
        "align": ""
      },
      {
        "type": "paragraph",
        "text": "Set amidst rolling hills and tropical greenery, Kandy offers a beautiful introduction to Sri Lanka. Its tranquil lake, forested hillsides and sacred surroundings create a peaceful atmosphere, setting the tone for the nature-filled adventure ahead.",
        "style": "",
        "list": false,
        "align": ""
      },
      {
        "type": "paragraph",
        "text": "Things to do",
        "style": "",
        "list": false,
        "align": ""
      },
      {
        "type": "paragraph",
        "text": "Enjoy a scenic drive from the airport to Kandy",
        "style": "",
        "list": true,
        "align": ""
      },
      {
        "type": "paragraph",
        "text": "Take in the changing landscapes as you travel towards the central highlands.",
        "style": "",
        "list": true,
        "align": ""
      },
      {
        "type": "paragraph",
        "text": "Settle into your hotel and enjoy the relaxed atmosphere of this historic hill city.",
        "style": "",
        "list": true,
        "align": ""
      },
      {
        "type": "paragraph",
        "text": "Stay – Kandy",
        "style": "",
        "list": false,
        "align": ""
      },
      {
        "type": "paragraph",
        "text": "DAY 02 – KANDY",
        "style": "",
        "list": false,
        "align": ""
      },
      {
        "type": "paragraph",
        "text": "Into the forest, in search of wings",
        "style": "",
        "list": false,
        "align": ""
      },
      {
        "type": "paragraph",
        "text": "Begin the day with an early-morning exploration of one of Kandy's most fascinating forest sanctuaries, where birdsongs fill the canopy and nature thrives just beyond the bustle of the city.",
        "style": "",
        "list": false,
        "align": ""
      },
      {
        "type": "paragraph",
        "text": "Discover Udawattakele Forest Reserve",
        "style": "",
        "list": false,
        "align": ""
      },
      {
        "type": "paragraph",
        "text": "Located above Kandy Lake, Udawattakele is a lush forest sanctuary rich in biodiversity. Its shaded trails, towering trees and tangled vines provide an ideal setting for birdwatching and a guided nature walk.",
        "style": "",
        "list": false,
        "align": ""
      },
      {
        "type": "paragraph",
        "text": "Set off at approximately 6:00 a.m. for an early-morning birdwatching excursion.",
        "style": "",
        "list": true,
        "align": ""
      },
      {
        "type": "paragraph",
        "text": "Explore the forest trails with a knowledgeable nature guide.",
        "style": "",
        "list": true,
        "align": ""
      },
      {
        "type": "paragraph",
        "text": "Look out for endemic and resident birds, including the yellow-fronted barbet, Sri Lanka hill myna and other forest species.",
        "style": "",
        "list": true,
        "align": ""
      },
      {
        "type": "paragraph",
        "text": "Keep an eye out for wildlife such as toque macaques, porcupines and other small mammals.",
        "style": "",
        "list": true,
        "align": ""
      },
      {
        "type": "paragraph",
        "text": "Return to your hotel at approximately 11:00 a.m. and enjoy a leisurely afternoon.",
        "style": "",
        "list": true,
        "align": ""
      },
      {
        "type": "paragraph",
        "text": "Stay – Kandy",
        "style": "",
        "list": false,
        "align": ""
      },
      {
        "type": "paragraph",
        "text": "DAY 03 – KANDY | KNUCKLES",
        "style": "",
        "list": false,
        "align": ""
      },
      {
        "type": "paragraph",
        "text": "Into the enchanted wilderness",
        "style": "",
        "list": false,
        "align": ""
      },
      {
        "type": "paragraph",
        "text": "Approx. travel time: 1.5–2.5 hours",
        "style": "",
        "list": false,
        "align": ""
      },
      {
        "type": "paragraph",
        "text": "Leave the hill capital behind and venture into the spectacular Knuckles Mountain Range, where mist-cloaked peaks, secluded trails and extraordinary biodiversity invite you to reconnect with the wild.",
        "style": "",
        "list": false,
        "align": ""
      },
      {
        "type": "paragraph",
        "text": "Discover the Knuckles Mountain Range",
        "style": "",
        "list": false,
        "align": ""
      },
      {
        "type": "paragraph",
        "text": "Recognised as part of Sri Lanka's Central Highlands UNESCO World Heritage landscape, the Knuckles region is celebrated for its rugged mountain scenery, cloud forests, diverse ecosystems and remarkable endemic wildlife. It is an exceptional destination for nature exploration and outdoor photography.",
        "style": "",
        "list": false,
        "align": ""
      },
      {
        "type": "paragraph",
        "text": "Things to do",
        "style": "",
        "list": false,
        "align": ""
      },
      {
        "type": "paragraph",
        "text": "Travel from Kandy towards the Knuckles region, taking in scenic mountain landscapes along the way.",
        "style": "",
        "list": true,
        "align": ""
      },
      {
        "type": "paragraph",
        "text": "Settle into a secluded mountain retreat surrounded by nature.",
        "style": "",
        "list": true,
        "align": ""
      },
      {
        "type": "paragraph",
        "text": "Enjoy the opportunity for scenic photography and an introduction to the region's distinctive landscapes.",
        "style": "",
        "list": true,
        "align": ""
      },
      {
        "type": "paragraph",
        "text": "Depending on arrival time and local conditions, enjoy a gentle nature walk around the retreat.",
        "style": "",
        "list": true,
        "align": ""
      },
      {
        "type": "paragraph",
        "text": "Stay – Knuckles Mountain Range",
        "style": "",
        "list": false,
        "align": ""
      },
      {
        "type": "paragraph",
        "text": "DAY 04 – KNUCKLES",
        "style": "",
        "list": false,
        "align": ""
      },
      {
        "type": "paragraph",
        "text": "A closer look at nature's hidden treasures",
        "style": "",
        "list": false,
        "align": ""
      },
      {
        "type": "paragraph",
        "text": "Spend another day immersed in the wild beauty of Knuckles, exploring its rich habitats, discovering remarkable flora and fauna, and capturing the ever-changing moods of the mountains.",
        "style": "",
        "list": false,
        "align": ""
      },
      {
        "type": "paragraph",
        "text": "Discover the biodiversity of Knuckles",
        "style": "",
        "list": false,
        "align": ""
      },
      {
        "type": "paragraph",
        "text": "The Knuckles Conservation Forest is home to a fascinating variety of plant and animal life, including endemic birds, butterflies, reptiles and amphibians. Its diverse terrain offers rewarding opportunities for guided exploration and nature photography.",
        "style": "",
        "list": false,
        "align": ""
      },
      {
        "type": "paragraph",
        "text": "Things to do",
        "style": "",
        "list": false,
        "align": ""
      },
      {
        "type": "paragraph",
        "text": "Enjoy a guided nature hike along a suitable trail in the mountain range.",
        "style": "",
        "list": true,
        "align": ""
      },
      {
        "type": "paragraph",
        "text": "Observe forest birds, with possibilities including barbets, bulbuls, babblers, kingfishers and other species.",
        "style": "",
        "list": true,
        "align": ""
      },
      {
        "type": "paragraph",
        "text": "Look for butterflies and fascinating forest vegetation along the trail.",
        "style": "",
        "list": true,
        "align": ""
      },
      {
        "type": "paragraph",
        "text": "Photograph mountain vistas, forest textures and the region's distinctive flora.",
        "style": "",
        "list": true,
        "align": ""
      },
      {
        "type": "paragraph",
        "text": "Enjoy the tranquillity of the mountain retreat after a day of exploration.",
        "style": "",
        "list": true,
        "align": ""
      },
      {
        "type": "paragraph",
        "text": "Stay – Knuckles Mountain Range",
        "style": "",
        "list": false,
        "align": ""
      },
      {
        "type": "paragraph",
        "text": "DAY 05 – KNUCKLES |NUWARA ELIYA",
        "style": "",
        "list": false,
        "align": ""
      },
      {
        "type": "paragraph",
        "text": "Into the misty highlands",
        "style": "",
        "list": false,
        "align": ""
      },
      {
        "type": "paragraph",
        "text": "Approx. travel time: 3.5–4.5 hours",
        "style": "",
        "list": false,
        "align": ""
      },
      {
        "type": "paragraph",
        "text": "Journey deeper into Sri Lanka's central highlands, where rolling tea gardens, cool mountain air and cloud-kissed landscapes reveal a different side of the island's natural beauty.",
        "style": "",
        "list": false,
        "align": ""
      },
      {
        "type": "paragraph",
        "text": "Discover Nuwara Eliya",
        "style": "",
        "list": false,
        "align": ""
      },
      {
        "type": "paragraph",
        "text": "Often associated with its cool climate and picturesque highland scenery, Nuwara Eliya is a refreshing base for exploring Sri Lanka's montane ecosystems. Its surrounding hills, grasslands and forests offer a beautiful introduction to the landscapes of Horton Plains.",
        "style": "",
        "list": false,
        "align": ""
      },
      {
        "type": "paragraph",
        "text": "Things to do",
        "style": "",
        "list": false,
        "align": ""
      },
      {
        "type": "paragraph",
        "text": "Travel from Knuckles to Nuwara Eliya through the scenic central highlands.",
        "style": "",
        "list": true,
        "align": ""
      },
      {
        "type": "paragraph",
        "text": "Enjoy views of tea-covered slopes, mountain scenery and changing vegetation.",
        "style": "",
        "list": true,
        "align": ""
      },
      {
        "type": "paragraph",
        "text": "Take time to settle into your accommodation and prepare for the following day's exploration.",
        "style": "",
        "list": true,
        "align": ""
      },
      {
        "type": "paragraph",
        "text": "Enjoy the cool highland atmosphere at leisure.",
        "style": "",
        "list": true,
        "align": ""
      },
      {
        "type": "paragraph",
        "text": "Stay – Nuwara Eliya or Ambewela",
        "style": "",
        "list": false,
        "align": ""
      },
      {
        "type": "paragraph",
        "text": "DAY 06 – HORTON PLAINS",
        "style": "",
        "list": false,
        "align": ""
      },
      {
        "type": "paragraph",
        "text": "Where cloud forests meet the sky",
        "style": "",
        "list": false,
        "align": ""
      },
      {
        "type": "paragraph",
        "text": "Venture into one of Sri Lanka's most extraordinary highland wildernesses, where open grasslands, misty forests and dramatic escarpments create an unforgettable setting for hiking and nature photography.",
        "style": "",
        "list": false,
        "align": ""
      },
      {
        "type": "paragraph",
        "text": "Discover Horton Plains National Park",
        "style": "",
        "list": false,
        "align": ""
      },
      {
        "type": "paragraph",
        "text": "A protected highland landscape within the Central Highlands of Sri Lanka, Horton Plains is renowned for its montane grasslands, cloud forests, unique plant life and striking viewpoints. It offers a rewarding experience for travellers drawn to landscapes, wildlife and the quieter side of adventure.",
        "style": "",
        "list": false,
        "align": ""
      },
      {
        "type": "paragraph",
        "text": "Things to do",
        "style": "",
        "list": false,
        "align": ""
      },
      {
        "type": "paragraph",
        "text": "Depart early for Horton Plains; the drive from Nuwara Eliya takes approximately 45 minutes.",
        "style": "",
        "list": true,
        "align": ""
      },
      {
        "type": "paragraph",
        "text": "Explore the walking trails through montane grasslands and cloud forests.",
        "style": "",
        "list": true,
        "align": ""
      },
      {
        "type": "paragraph",
        "text": "Visit World's End for its dramatic escarpment and expansive views, weather permitting.",
        "style": "",
        "list": true,
        "align": ""
      },
      {
        "type": "paragraph",
        "text": "Discover Baker's Falls, surrounded by lush highland vegetation.",
        "style": "",
        "list": true,
        "align": ""
      },
      {
        "type": "paragraph",
        "text": "Observe the surrounding habitats for highland birdlife and other wildlife.",
        "style": "",
        "list": true,
        "align": ""
      },
      {
        "type": "paragraph",
        "text": "Enjoy nature photography along the trail.",
        "style": "",
        "list": true,
        "align": ""
      },
      {
        "type": "paragraph",
        "text": "Optional: Thotupola Mountain may be considered for a separate hiking experience, subject to available time, trail conditions and the group's fitness. The more demanding Kirigalpoththa hike would require separate planning.",
        "style": "",
        "list": false,
        "align": ""
      },
      {
        "type": "paragraph",
        "text": "Stay – Nuwara Eliya or Ambewela",
        "style": "",
        "list": false,
        "align": ""
      },
      {
        "type": "paragraph",
        "text": "DAY 07 – NUWARA ELIYA | UDAWALAWE",
        "style": "",
        "list": false,
        "align": ""
      },
      {
        "type": "paragraph",
        "text": "From highlands to the wild",
        "style": "",
        "list": false,
        "align": ""
      },
      {
        "type": "paragraph",
        "text": "Approx. travel time: 3–4 hours",
        "style": "",
        "list": false,
        "align": ""
      },
      {
        "type": "paragraph",
        "text": "Leave the cool mountain landscapes behind and descend into Sri Lanka's drier southern interior, where open plains, shimmering reservoirs and abundant wildlife set the stage for a new chapter of discovery.",
        "style": "",
        "list": false,
        "align": ""
      },
      {
        "type": "paragraph",
        "text": "Discover Udawalawe",
        "style": "",
        "list": false,
        "align": ""
      },
      {
        "type": "paragraph",
        "text": "Udawalawe is one of Sri Lanka's best-known wildlife destinations, particularly celebrated for its Asian elephants. Its open grasslands and reservoir landscapes also provide opportunities to observe a range of birds and other wildlife in their natural habitats.",
        "style": "",
        "list": false,
        "align": ""
      },
      {
        "type": "paragraph",
        "text": "Things to do",
        "style": "",
        "list": false,
        "align": ""
      },
      {
        "type": "paragraph",
        "text": "Enjoy the scenic journey from the central highlands to Udawalawe.",
        "style": "",
        "list": true,
        "align": ""
      },
      {
        "type": "paragraph",
        "text": "Settle into your accommodation amid the region's warm, natural surroundings.",
        "style": "",
        "list": true,
        "align": ""
      },
      {
        "type": "paragraph",
        "text": "Depending on arrival time, enjoy a relaxed afternoon or prepare for an early-morning wildlife excursion.",
        "style": "",
        "list": true,
        "align": ""
      },
      {
        "type": "paragraph",
        "text": "Look forward to discovering one of Sri Lanka's most memorable elephant habitats.",
        "style": "",
        "list": true,
        "align": ""
      },
      {
        "type": "paragraph",
        "text": "Stay – Udawalawe",
        "style": "",
        "list": false,
        "align": ""
      },
      {
        "type": "paragraph",
        "text": "DAY 08 – UDAWALAWE",
        "style": "",
        "list": false,
        "align": ""
      },
      {
        "type": "paragraph",
        "text": "Wildlife encounters & local discoveries",
        "style": "",
        "list": false,
        "align": ""
      },
      {
        "type": "paragraph",
        "text": "Experience the rhythms of the wild through a safari, meaningful encounters with local life and opportunities to explore the natural and cultural character of the region.",
        "style": "",
        "list": false,
        "align": ""
      },
      {
        "type": "paragraph",
        "text": "Discover Udawalawe's natural and cultural treasures",
        "style": "",
        "list": false,
        "align": ""
      },
      {
        "type": "paragraph",
        "text": "Beyond its famous elephant population, the wider Udawalawe region offers a variety of experiences, from conservation-focused visits to village landscapes and geological wonders.",
        "style": "",
        "list": false,
        "align": ""
      },
      {
        "type": "paragraph",
        "text": "Things to do",
        "style": "",
        "list": false,
        "align": ""
      },
      {
        "type": "paragraph",
        "text": "Udawalawe National Park: Embark on a wildlife safari in search of Asian elephants, waterbirds and other animals. Early mornings and late afternoons are generally rewarding times for wildlife viewing.",
        "style": "",
        "list": true,
        "align": ""
      },
      {
        "type": "paragraph",
        "text": "Elephant Transit Home: Learn about the rehabilitation of orphaned elephant calves and observe the feeding sessions from designated visitor areas, subject to the centre's schedule.",
        "style": "",
        "list": true,
        "align": ""
      },
      {
        "type": "paragraph",
        "text": "Village cycling experience: Cycle through rural landscapes, enjoy views of the Udawalawe Reservoir and gain insights into local life and traditions.",
        "style": "",
        "list": true,
        "align": ""
      },
      {
        "type": "paragraph",
        "text": "Waulpane Limestone Cave: Explore an extraordinary underground landscape of stalactites, stalagmites and a large resident bat population, subject to access and local conditions.",
        "style": "",
        "list": true,
        "align": ""
      },
      {
        "type": "paragraph",
        "text": "Craft Tunnel: The Potter's Retreat: Experience the meditative art of pottery in a setting that brings together creativity, craftsmanship and nature.",
        "style": "",
        "list": true,
        "align": ""
      },
      {
        "type": "paragraph",
        "text": "Note: These experiences may need to be divided across the stay depending on travel distances, opening schedules and the preferred safari time.",
        "style": "",
        "list": false,
        "align": ""
      },
      {
        "type": "paragraph",
        "text": "Stay – Udawalawe",
        "style": "",
        "list": false,
        "align": ""
      },
      {
        "type": "paragraph",
        "text": "DAY 09 – UDAWALAWE | SINHARAJA",
        "style": "",
        "list": false,
        "align": ""
      },
      {
        "type": "paragraph",
        "text": "Into the rainforest's embrace",
        "style": "",
        "list": false,
        "align": ""
      },
      {
        "type": "paragraph",
        "text": "Approx. travel time: 3–4 hours",
        "style": "",
        "list": false,
        "align": ""
      },
      {
        "type": "paragraph",
        "text": "Travel towards the lush southwestern rainforest belt, where the landscape transforms into a world of towering trees, dense vegetation, hidden streams and the enchanting sounds of tropical birdlife.",
        "style": "",
        "list": false,
        "align": ""
      },
      {
        "type": "paragraph",
        "text": "Discover Sinharaja Forest Reserve",
        "style": "",
        "list": false,
        "align": ""
      },
      {
        "type": "paragraph",
        "text": "Sinharaja is Sri Lanka's most celebrated tropical rainforest conservation area and a UNESCO World Heritage Site. Its remarkable biodiversity, rich endemic birdlife and dense forest ecosystems make it a highlight for nature enthusiasts and wildlife photographers.",
        "style": "",
        "list": false,
        "align": ""
      },
      {
        "type": "paragraph",
        "text": "Things to do",
        "style": "",
        "list": false,
        "align": ""
      },
      {
        "type": "paragraph",
        "text": "Travel from Udawalawe towards the Sinharaja region.",
        "style": "",
        "list": true,
        "align": ""
      },
      {
        "type": "paragraph",
        "text": "Settle into your accommodation amid the surrounding greenery.",
        "style": "",
        "list": true,
        "align": ""
      },
      {
        "type": "paragraph",
        "text": "Enjoy the peaceful atmosphere of the rainforest surroundings.",
        "style": "",
        "list": true,
        "align": ""
      },
      {
        "type": "paragraph",
        "text": "Prepare for the following day's guided forest walk, with suitable footwear and rain protection.",
        "style": "",
        "list": true,
        "align": ""
      },
      {
        "type": "paragraph",
        "text": "Stay – Sinharaja Forest Reserve area",
        "style": "",
        "list": false,
        "align": ""
      },
      {
        "type": "paragraph",
        "text": "DAY 10 – SINHARAJA",
        "style": "",
        "list": false,
        "align": ""
      },
      {
        "type": "paragraph",
        "text": "A world of rainforest wonders",
        "style": "",
        "list": false,
        "align": ""
      },
      {
        "type": "paragraph",
        "text": "Step into the heart of the rainforest, where every layer of the forest reveals a new discovery and the chance to encounter some of Sri Lanka's most fascinating endemic birds and wildlife.",
        "style": "",
        "list": false,
        "align": ""
      },
      {
        "type": "paragraph",
        "text": "Discover the secrets of Sinharaja",
        "style": "",
        "list": false,
        "align": ""
      },
      {
        "type": "paragraph",
        "text": "Sinharaja's complex rainforest ecosystem shelters an exceptional variety of endemic plants, birds, reptiles, amphibians and mammals. Exploring its shaded trails on foot offers an intimate connection with one of the island's most important natural habitats.",
        "style": "",
        "list": false,
        "align": ""
      },
      {
        "type": "paragraph",
        "text": "Things to do",
        "style": "",
        "list": false,
        "align": ""
      },
      {
        "type": "paragraph",
        "text": "Set out on a guided rainforest trek with an authorised national guide.",
        "style": "",
        "list": true,
        "align": ""
      },
      {
        "type": "paragraph",
        "text": "Enjoy an early-morning birdwatching experience, when forest birds are often more active.",
        "style": "",
        "list": true,
        "align": ""
      },
      {
        "type": "paragraph",
        "text": "Look for endemic bird species and listen for calls echoing through the canopy.",
        "style": "",
        "list": true,
        "align": ""
      },
      {
        "type": "paragraph",
        "text": "Observe rainforest vegetation, butterflies, streams and other natural details.",
        "style": "",
        "list": true,
        "align": ""
      },
      {
        "type": "paragraph",
        "text": "Explore a suitable forest trail, such as the routes towards Mulawella Peak or Sinhagala Peak, depending on fitness, weather and available time.",
        "style": "",
        "list": true,
        "align": ""
      },
      {
        "type": "paragraph",
        "text": "Capture the textures and colours of the rainforest through nature photography.",
        "style": "",
        "list": true,
        "align": ""
      },
      {
        "type": "paragraph",
        "text": "Useful to know: Forest walks can be muddy and slippery, and leeches are common. Sturdy walking boots, rain protection and suitable leech protection are recommended.",
        "style": "",
        "list": false,
        "align": ""
      },
      {
        "type": "paragraph",
        "text": "Stay – Sinharaja Forest Reserve area",
        "style": "",
        "list": false,
        "align": ""
      },
      {
        "type": "paragraph",
        "text": "DAY 11 – SINHARAJA |HAMBANTOTA",
        "style": "",
        "list": false,
        "align": ""
      },
      {
        "type": "paragraph",
        "text": "Following the wild to the wetlands",
        "style": "",
        "list": false,
        "align": ""
      },
      {
        "type": "paragraph",
        "text": "Approx. travel time: 3.5–4.5 hours",
        "style": "",
        "list": false,
        "align": ""
      },
      {
        "type": "paragraph",
        "text": "Leave the deep rainforest behind and travel towards Sri Lanka's southeastern lowlands, where lagoons, coastal scrubland and expansive wetlands provide a contrasting landscape rich in birdlife.",
        "style": "",
        "list": false,
        "align": ""
      },
      {
        "type": "paragraph",
        "text": "Discover Hambantota",
        "style": "",
        "list": false,
        "align": ""
      },
      {
        "type": "paragraph",
        "text": "The Hambantota region offers access to some of Sri Lanka's significant coastal and wetland habitats. Its dry-zone landscapes, lagoons and surrounding natural areas provide an ideal base for exploring the bird-rich environments of the southeast.",
        "style": "",
        "list": false,
        "align": ""
      },
      {
        "type": "paragraph",
        "text": "Things to do",
        "style": "",
        "list": false,
        "align": ""
      },
      {
        "type": "paragraph",
        "text": "Enjoy the journey from Sinharaja towards Hambantota.",
        "style": "",
        "list": true,
        "align": ""
      },
      {
        "type": "paragraph",
        "text": "Take in the changing landscapes as the rainforest gives way to drier lowlands.",
        "style": "",
        "list": true,
        "align": ""
      },
      {
        "type": "paragraph",
        "text": "Settle into your accommodation and prepare for a dedicated birdwatching excursion.",
        "style": "",
        "list": true,
        "align": ""
      },
      {
        "type": "paragraph",
        "text": "Enjoy the opportunity for relaxed landscape photography, depending on arrival time.",
        "style": "",
        "list": true,
        "align": ""
      },
      {
        "type": "paragraph",
        "text": "Stay – Hambantota",
        "style": "",
        "list": false,
        "align": ""
      },
      {
        "type": "paragraph",
        "text": "DAY 12 – BUNDALA",
        "style": "",
        "list": false,
        "align": ""
      },
      {
        "type": "paragraph",
        "text": "A finale of feathers & wetland wonders",
        "style": "",
        "list": false,
        "align": ""
      },
      {
        "type": "paragraph",
        "text": "Explore a remarkable wetland landscape where lagoons, mudflats and coastal habitats attract resident and migratory birds, bringing the birdwatching journey to a memorable close.",
        "style": "",
        "list": false,
        "align": ""
      },
      {
        "type": "paragraph",
        "text": "Discover Bundala National Park",
        "style": "",
        "list": false,
        "align": ""
      },
      {
        "type": "paragraph",
        "text": "Bundala is an internationally significant wetland and a Ramsar site, recognised for its rich birdlife and varied coastal ecosystems. During the migratory season, its lagoons can provide rewarding opportunities to observe waterbirds, including flamingos when present.",
        "style": "",
        "list": false,
        "align": ""
      },
      {
        "type": "paragraph",
        "text": "Things to do",
        "style": "",
        "list": false,
        "align": ""
      },
      {
        "type": "paragraph",
        "text": "Enjoy a guided wildlife and birdwatching safari in Bundala National Park.",
        "style": "",
        "list": true,
        "align": ""
      },
      {
        "type": "paragraph",
        "text": "Observe resident and migratory waterbirds across the lagoons and mudflats.",
        "style": "",
        "list": true,
        "align": ""
      },
      {
        "type": "paragraph",
        "text": "Look for a variety of wetland birds and other wildlife, including mammals that inhabit the park.",
        "style": "",
        "list": true,
        "align": ""
      },
      {
        "type": "paragraph",
        "text": "Capture the colours, reflections and expansive scenery of this distinctive coastal ecosystem.",
        "style": "",
        "list": true,
        "align": ""
      },
      {
        "type": "paragraph",
        "text": "If travelling between September and March, keep an eye out for migratory flamingos, whose sightings vary with conditions.",
        "style": "",
        "list": true,
        "align": ""
      },
      {
        "type": "paragraph",
        "text": "Stay – Hambantota",
        "style": "",
        "list": false,
        "align": ""
      },
      {
        "type": "paragraph",
        "text": "DAY 13 – HAMBANTOTA",
        "style": "",
        "list": false,
        "align": ""
      },
      {
        "type": "paragraph",
        "text": "A day to unwind & recharge",
        "style": "",
        "list": false,
        "align": ""
      },
      {
        "type": "paragraph",
        "text": "After days of exploring Sri Lanka's extraordinary wilderness, slow the pace and savour a leisurely day in Hambantota. Embrace the warmth of the southern landscapes, enjoy the comforts of your retreat and take time to relax, reflect and soak in the tranquillity of your surroundings.",
        "style": "",
        "list": false,
        "align": ""
      },
      {
        "type": "paragraph",
        "text": "A Day at Leisure",
        "style": "",
        "list": false,
        "align": ""
      },
      {
        "type": "paragraph",
        "text": "Enjoy a well-deserved pause in your journey, with the freedom to spend the day entirely at your own pace.",
        "style": "",
        "list": false,
        "align": ""
      },
      {
        "type": "paragraph",
        "text": "Things to do",
        "style": "",
        "list": false,
        "align": ""
      },
      {
        "type": "paragraph",
        "text": "Enjoy a leisurely breakfast and a relaxed morning at your hotel.",
        "style": "",
        "list": true,
        "align": ""
      },
      {
        "type": "paragraph",
        "text": "Unwind by the pool or indulge in the facilities and experiences offered by your retreat.",
        "style": "",
        "list": true,
        "align": ""
      },
      {
        "type": "paragraph",
        "text": "Enjoy the surrounding landscapes and capture a few final moments of Sri Lanka's southern charm.",
        "style": "",
        "list": true,
        "align": ""
      },
      {
        "type": "paragraph",
        "text": "Alternatively, opt for a gentle local exploration or simply spend the day relaxing in peaceful surroundings.",
        "style": "",
        "list": true,
        "align": ""
      },
      {
        "type": "paragraph",
        "text": "Stay – Hambantota",
        "style": "",
        "list": false,
        "align": ""
      },
      {
        "type": "paragraph",
        "text": "DAY 14 – HAMBANTOTA |AIRPORT",
        "style": "",
        "list": false,
        "align": ""
      },
      {
        "type": "paragraph",
        "text": "Until the next adventure",
        "style": "",
        "list": false,
        "align": ""
      },
      {
        "type": "paragraph",
        "text": "Approx. travel time: 3.5–4.5 hours",
        "style": "",
        "list": false,
        "align": ""
      },
      {
        "type": "paragraph",
        "text": "As your Sri Lankan nature odyssey draws to a close, carry with you the memories of forest trails, misty highlands, extraordinary birdlife and unforgettable wildlife encounters as you travel towards the airport for your onward journey.",
        "style": "",
        "list": false,
        "align": ""
      },
      {
        "type": "paragraph",
        "text": "Your journey home",
        "style": "",
        "list": false,
        "align": ""
      },
      {
        "type": "paragraph",
        "text": "Enjoy your final moments in Sri Lanka before your departure transfer. As the journey comes to an end, take with you a collection of remarkable experiences and a deeper appreciation of the island's natural heritage.",
        "style": "",
        "list": false,
        "align": ""
      }
    ]
  },
  {
    "id": "2-tour-packages-luxury-travel-itinerary",
    "name": "Luxury travel itinerary",
    "sourceFile": "2 tour packages- Luxury travel itinerary.docx",
    "title": "Tour Package 01",
    "image": "/30e010b1-2b6c-4f87-81a5-d45d39aae23c.jpg",
    "blocks": [
      {
        "type": "paragraph",
        "text": "Tour Package 01",
        "style": "",
        "list": false,
        "align": ""
      },
      {
        "type": "paragraph",
        "text": "Swanky vacay into “Tea, Sea & Safari” – 08 Days|07 Nights",
        "style": "",
        "list": false,
        "align": "center"
      },
      {
        "type": "paragraph",
        "text": "Where Luxury Meets the Extraordinary – Discover the Magic of Sri Lanka",
        "style": "",
        "list": false,
        "align": ""
      },
      {
        "type": "paragraph",
        "text": "Immerse yourself in the natural beauty of this stunning island paradise, where every moment of your holiday is crafted to perfection. From Bird’s eye vistas of travelling to luxurious accommodations in top-tier resorts, indulge in Sri Lanka’s rich tea culture while enjoying the verdant scenery of Ceylon’s tea country, spoil in gourmet dining experiences that showcase the best of Sri Lankan cuisine &. Relax on pristine beaches, rejuvenate with spa treatments & embark on thrilling wildlife safaris.",
        "style": "",
        "list": false,
        "align": ""
      },
      {
        "type": "paragraph",
        "text": "This is more than your dreamy holiday; we call it a journey into unparallel luxury & unforgettable experience in Sri Lanka.",
        "style": "",
        "list": false,
        "align": ""
      },
      {
        "type": "paragraph",
        "text": "DAY 01 – WELCOME TO SRI LANKA | NEGOMBO",
        "style": "",
        "list": false,
        "align": ""
      },
      {
        "type": "paragraph",
        "text": "First night in Paradise Island",
        "style": "",
        "list": false,
        "align": ""
      },
      {
        "type": "paragraph",
        "text": "Approx. travel time: 20–40 minutes",
        "style": "",
        "list": false,
        "align": ""
      },
      {
        "type": "paragraph",
        "text": "On your arrival at the airport, you will be greeted with a warm welcome by a Magical Paradise representative who will take you to the closest beach vibed town “Negombo” for your 1st night stay.",
        "style": "",
        "list": false,
        "align": ""
      },
      {
        "type": "paragraph",
        "text": "Located close to Sri Lanka’s international airport, Negombo is a lively coastal town offering beaches, seafood culture and colonial influences. It serves as both a relaxing introduction to Sri Lanka.",
        "style": "",
        "list": false,
        "align": ""
      },
      {
        "type": "paragraph",
        "text": "Stay at boutique Hotel - WALWWA or UGA RIVER",
        "style": "",
        "list": false,
        "align": ""
      },
      {
        "type": "paragraph",
        "text": "DAY 02   - NEGOMBO|HATTON",
        "style": "",
        "list": false,
        "align": ""
      },
      {
        "type": "paragraph",
        "text": "Scenic Flight to Tea Country",
        "style": "",
        "list": false,
        "align": ""
      },
      {
        "type": "paragraph",
        "text": "Approx. travel time: 30 minutes by air from Colombo (BIA) to Castlereagh.",
        "style": "",
        "list": false,
        "align": ""
      },
      {
        "type": "paragraph",
        "text": "Pls add any similar quality pics of this same air taxi here , as this is one of the  main highlights of this tour package for  day 02 and day o4",
        "style": "",
        "list": false,
        "align": ""
      },
      {
        "type": "paragraph",
        "text": "On this day, our representative will be at your hotel to pick you up as per the scheduled timings as advised before & will drive you back to the Bandaranayake International Airport domestic air taxi service hub and you will be directed accordingly.",
        "style": "",
        "list": false,
        "align": ""
      },
      {
        "type": "paragraph",
        "text": "The domestic air taxi service will offer you the bird’s eye view of the stunning sceneries below whilst significantly reducing the surface travel time and it’s a bonus.",
        "style": "",
        "list": false,
        "align": ""
      },
      {
        "type": "paragraph",
        "text": "Upon a short air journey of 20-30 minutes (if not a Road drive for 3-4 hours), your luxury holiday will begin at a historic tea- planter bungalow & you are invited to relax & slow down at this perfect destination on all-inclusive basis for 2 wholesome nights.",
        "style": "",
        "list": false,
        "align": ""
      },
      {
        "type": "paragraph",
        "text": "Stay -Day 02 & 03 at a Luxury Bungalow - CEYLON TEA TRAILS (ALL INCLUSIVE BASIS - breakfast, lunch, afternoon cream tea, dinner, beverages including select spirits & wines, laundry, Wi-Fi, Tea Experience tour, taxes & service charge)",
        "style": "",
        "list": false,
        "align": ""
      },
      {
        "type": "paragraph",
        "text": "DAY  04 -HATTON |YALA",
        "style": "",
        "list": false,
        "align": ""
      },
      {
        "type": "paragraph",
        "text": "Fly to southeast of Sri Lanka -safari times",
        "style": "",
        "list": false,
        "align": ""
      },
      {
        "type": "paragraph",
        "text": "Approx. travel time: 40–50 minutes by air & 1 hour road drive",
        "style": "",
        "list": false,
        "align": ""
      },
      {
        "type": "paragraph",
        "text": "As you check out from the hill country bungalow for your next hotspot, you will again be air travelled from Caselreagh reservoir to Hambantota port city (road drive from hotel to hotel will be 5 -6 hours) & hop in for another one hour road drive taking you to the next best luxury lodge, a UNESCO design award winner luxury tented camp stunningly stationed where the woods meet the pristine Indian ocean in Yala.",
        "style": "",
        "list": false,
        "align": ""
      },
      {
        "type": "paragraph",
        "text": "Stay- 04 & 05 at a Luxury Tent – WILD COAST TENTED LODGE (ALL INCLUSIVE BASIS - breakfast, lunch, afternoon cream tea, dinner, beverages including select spirits & wines, cocktails, in room mini bar, one daily game drive, laundry, Wi-Fi, taxes & service charges.)",
        "style": "",
        "list": false,
        "align": ""
      },
      {
        "type": "paragraph",
        "text": "DAY 06 -YALA |WELIGAMA",
        "style": "",
        "list": false,
        "align": ""
      },
      {
        "type": "paragraph",
        "text": "Trading the Leopard Tracks for the Ocean Tide",
        "style": "",
        "list": false,
        "align": ""
      },
      {
        "type": "paragraph",
        "text": "Approx. travel time: 2.5–3.5 hours",
        "style": "",
        "list": false,
        "align": ""
      },
      {
        "type": "paragraph",
        "text": "On Day 6, our private representative will collect you from Yala for a scenic coastal journey of approximately three hours towards Weligama, one of Sri Lanka’s most captivating beach destinations. As you travel along the picturesque southern coastline, enjoy glimpses of golden shores, swaying palm trees, and the sparkling waters of the Indian Ocean.",
        "style": "",
        "list": false,
        "align": ""
      },
      {
        "type": "paragraph",
        "text": "Your next destination is an exceptional luxury cliff-top resort, celebrated for its breathtaking ocean views, elegant surroundings, and exclusive setting along Sri Lanka’s palm-fringed southern shores. Here, refined luxury meets the natural beauty of the coastline, offering the perfect retreat to unwind, indulge, and savour the final chapter of your extraordinary Sri Lankan escape.",
        "style": "",
        "list": false,
        "align": ""
      },
      {
        "type": "paragraph",
        "text": "Stay – Day 06 & 07 at a Luxury Resort – CAPE WELIGAMA (YOU CAN SELECT THE MEAL PLAN FROM BB TO ALL INCLUSIVE BASIS)",
        "style": "",
        "list": false,
        "align": ""
      },
      {
        "type": "paragraph",
        "text": "DAY 08 – DEPARTURE –WELIGAMA|AIRPORT",
        "style": "",
        "list": false,
        "align": ""
      },
      {
        "type": "paragraph",
        "text": "Sad yet another goodbye",
        "style": "",
        "list": false,
        "align": ""
      },
      {
        "type": "paragraph",
        "text": "Approx. travel time: 2.5–3.5 hours",
        "style": "",
        "list": false,
        "align": ""
      },
      {
        "type": "paragraph",
        "text": "As the saying goes by, “All good things must come to an end.” As your unforgettable Sri Lankan escape draws to a close, our representative will ensure a comfortable and seamless transfer to the airport. Although it is a time to say goodbye, we hope this is not merely a farewell, but rather “until we meet again”.",
        "style": "",
        "list": false,
        "align": ""
      },
      {
        "type": "paragraph",
        "text": "May you leave with cherished memories of this magical island, carrying a little piece of Sri Lanka in your heart and the promise of returning one day to discover more of its hidden treasures—or perhaps to relive the extraordinary experiences that made you fall in love with it in the first place.",
        "style": "",
        "list": false,
        "align": ""
      },
      {
        "type": "paragraph",
        "text": "Until next time, Ayubowan! 🌴",
        "style": "",
        "list": false,
        "align": ""
      },
      {
        "type": "paragraph",
        "text": "***Prefer to keep this same journey budget-friendly? ***",
        "style": "",
        "list": false,
        "align": ""
      },
      {
        "type": "paragraph",
        "text": "This same itinerary can be enjoyed as a scenic road trip, allowing you to experience Sri Lanka’s breathtaking landscapes by road without the additional cost of domestic air transfers, leaving you with more to spend on unforgettable experiences along the way!",
        "style": "",
        "list": false,
        "align": ""
      },
      {
        "type": "paragraph",
        "text": "Tour Package 02",
        "style": "",
        "list": false,
        "align": ""
      },
      {
        "type": "paragraph",
        "text": "A Curated Luxury Journey with Tear drop Hotels – 14 Days |13 Nights -",
        "style": "",
        "list": false,
        "align": ""
      },
      {
        "type": "paragraph",
        "text": "Gagan this is a luxury tour package which highlights the hotels  – Pls add pictures of the hotels (  free common pictures or if the media kit access is available under Teardrop hotels group as shared by Wishmitha- pls add pics from that - thanks)",
        "style": "",
        "list": false,
        "align": ""
      },
      {
        "type": "paragraph",
        "text": "An Exclusive Island Escape Through Sri Lanka’s Finest Boutique Retreats, Timeless Elegance, and Bespoke Luxury Experiences",
        "style": "",
        "list": false,
        "align": ""
      },
      {
        "type": "paragraph",
        "text": "Immerse yourself into a 14-day lavish getaway in Sri Lanka which includes stays at high-end stylish resorts as mentioned below featuring personalized services and exclusive experiences.",
        "style": "",
        "list": false,
        "align": ""
      },
      {
        "type": "paragraph",
        "text": "Walawwa (Closer to Airport)",
        "style": "ListParagraph",
        "list": true,
        "align": ""
      },
      {
        "type": "paragraph",
        "text": "Camelia Hills (Hatton)",
        "style": "ListParagraph",
        "list": true,
        "align": ""
      },
      {
        "type": "paragraph",
        "text": "Goatfell (Nuwara Eliya)",
        "style": "ListParagraph",
        "list": true,
        "align": ""
      },
      {
        "type": "paragraph",
        "text": "Nine Skies (Ella)",
        "style": "ListParagraph",
        "list": true,
        "align": ""
      },
      {
        "type": "paragraph",
        "text": "Fort Bazaar (Galle)",
        "style": "ListParagraph",
        "list": true,
        "align": ""
      },
      {
        "type": "paragraph",
        "text": "Kumu Beach (Balapitiya)",
        "style": "ListParagraph",
        "list": true,
        "align": ""
      },
      {
        "type": "paragraph",
        "text": "Lunuganga (Bentota)",
        "style": "ListParagraph",
        "list": true,
        "align": ""
      },
      {
        "type": "paragraph",
        "text": "***While this itinerary is thoughtfully curated around exceptional hotel stays and distinctive luxury experiences, it can be fully tailored to suit your preferred travel duration, personal interests, and pace. You are also welcome to customize your selection of hotels to match your tastes, ensuring a truly bespoke Sri Lankan escape designed entirely around you ***",
        "style": "",
        "list": false,
        "align": ""
      },
      {
        "type": "paragraph",
        "text": "DAY 01 – ARRIVAL IN SRI LANKA | NEGOMBO",
        "style": "",
        "list": false,
        "align": ""
      },
      {
        "type": "paragraph",
        "text": "A Warm Welcome to Your Luxury Island Escape",
        "style": "",
        "list": false,
        "align": ""
      },
      {
        "type": "paragraph",
        "text": "Approx. travel time 30 Minutes",
        "style": "",
        "list": false,
        "align": ""
      },
      {
        "type": "paragraph",
        "text": "Your Sri Lankan journey begins the moment you touch down on this enchanting island. Upon arrival at Bandaranaike International Airport, you will be warmly welcomed by a representative from Magical Paradise, setting the tone for a memorable holiday filled with personalised hospitality and exceptional experiences.",
        "style": "",
        "list": false,
        "align": ""
      },
      {
        "type": "paragraph",
        "text": "Just a short 20- 30 minutes drive from the airport lies your first retreat, Walawwa, a beautifully restored traditional manor house nestled amidst expansive coconut plantations in Kotugoda. Blending colonial charm with contemporary comforts, this elegant boutique hideaway offers a peaceful introduction to Sri Lanka, allowing you to unwind in a setting where heritage, tranquility, and understated luxury come together.",
        "style": "",
        "list": false,
        "align": ""
      },
      {
        "type": "paragraph",
        "text": "Leave the bustle of travel behind, settle into your surroundings, and ease into the relaxed rhythm of island life.",
        "style": "",
        "list": false,
        "align": ""
      },
      {
        "type": "paragraph",
        "text": "Stay – Walawwa, Kotugoda",
        "style": "",
        "list": false,
        "align": ""
      },
      {
        "type": "paragraph",
        "text": "Enjoy your first night in Sri Lanka at this charming manor-house retreat, where warm hospitality and serene tropical surroundings welcome you to your luxury escape.",
        "style": "",
        "list": false,
        "align": ""
      },
      {
        "type": "paragraph",
        "text": "DAY 02 – WALAWWA",
        "style": "",
        "list": false,
        "align": ""
      },
      {
        "type": "paragraph",
        "text": "Unwind, Indulge, and Discover at Your Own Pace",
        "style": "",
        "list": false,
        "align": ""
      },
      {
        "type": "paragraph",
        "text": "Today is yours to enjoy the understated luxury and peaceful charm of Walawwa. Whether you prefer a leisurely day surrounded by tropical greenery or wish to venture out and discover the island’s vibrant culture, the choice is entirely yours.",
        "style": "",
        "list": false,
        "align": ""
      },
      {
        "type": "paragraph",
        "text": "Spend the morning relaxing by the pool, indulge in a rejuvenating spa treatment, or simply savour the tranquility of this elegant manor house. Alternatively, venture beyond the retreat with your private chauffeur-guide to explore the cultural highlights, bustling streets, and scenic waterways of nearby Negombo or the vibrant commercial capital of Colombo.",
        "style": "",
        "list": false,
        "align": ""
      },
      {
        "type": "paragraph",
        "text": "With experiences arranged to suit your interests and pace, this is the perfect opportunity to ease into your Sri Lankan adventure before journeying towards the spectacular tea country.",
        "style": "",
        "list": false,
        "align": ""
      },
      {
        "type": "paragraph",
        "text": "Things to Do",
        "style": "",
        "list": false,
        "align": ""
      },
      {
        "type": "paragraph",
        "text": "Enjoy the swimming pool and spa facilities at Walawwa.",
        "style": "ListParagraph",
        "list": true,
        "align": ""
      },
      {
        "type": "paragraph",
        "text": "Experience a scenic boat ride along the canals and lagoon around Negombo.",
        "style": "ListParagraph",
        "list": true,
        "align": ""
      },
      {
        "type": "paragraph",
        "text": "Discover Negombo’s lively markets, colonial heritage, churches, and coastal charm. (Approx. 3–4 hours)",
        "style": "ListParagraph",
        "list": true,
        "align": ""
      },
      {
        "type": "paragraph",
        "text": "Explore Colombo’s vibrant cityscape, landmarks, shopping districts, and culinary scene. (Approx. 5–6 hours)",
        "style": "ListParagraph",
        "list": true,
        "align": ""
      },
      {
        "type": "paragraph",
        "text": "Savour a leisurely day at the hotel, enjoying its peaceful gardens and personalised hospitality.",
        "style": "ListParagraph",
        "list": true,
        "align": ""
      },
      {
        "type": "paragraph",
        "text": "Excursions outside the hotel can be arranged with your chauffeur guide according to your preferences and time.",
        "style": "ListParagraph",
        "list": true,
        "align": ""
      },
      {
        "type": "paragraph",
        "text": "Stay – Walawwa, Kotugoda",
        "style": "",
        "list": false,
        "align": ""
      },
      {
        "type": "paragraph",
        "text": "Return to the tranquillity of Walawwa after a day of leisure or exploration, enjoying another relaxing evening in this charming tropical retreat before continuing your journey into Sri Lanka’s magnificent hill country.",
        "style": "",
        "list": false,
        "align": ""
      },
      {
        "type": "paragraph",
        "text": "DAY 03 – NEGOMBO | HATTON",
        "style": "",
        "list": false,
        "align": ""
      },
      {
        "type": "paragraph",
        "text": "From Coastal Charm to the Enchanting Tea Highlands",
        "style": "",
        "list": false,
        "align": ""
      },
      {
        "type": "paragraph",
        "text": "Approx. travel time 4–5 hours by road | 30–45 minutes by domestic air taxi, subject to availability and weather conditions.",
        "style": "",
        "list": false,
        "align": ""
      },
      {
        "type": "paragraph",
        "text": "Prepare for a scenic journey into the heart of Sri Lanka’s breathtaking hill country. Whether travelling by road or taking to the skies, the journey to Hatton promises spectacular scenery and unforgettable views. Along the winding mountain roads, discover cascading waterfalls, mist-covered peaks, and endless stretches of lush green tea plantations that paint the highlands in captivating shades of emerald.",
        "style": "",
        "list": false,
        "align": ""
      },
      {
        "type": "paragraph",
        "text": "Your destination is the exquisite Camellia Hills, a secluded boutique retreat nestled amidst rolling tea estates and overlooking the magnificent Castlereagh Reservoir. With its tranquil surroundings, breathtaking panoramas, and understated elegance, this enchanting hideaway offers a truly special introduction to Sri Lanka’s celebrated tea country.",
        "style": "",
        "list": false,
        "align": ""
      },
      {
        "type": "paragraph",
        "text": "As you settle into the serene atmosphere, take in the mesmerizing views and let the beauty of the highlands wash over you. One thing is certain — the moment you arrive, you will understand why the journey was worth every mile.",
        "style": "",
        "list": false,
        "align": ""
      },
      {
        "type": "paragraph",
        "text": "Stay – Camellia Hills, Hatton",
        "style": "",
        "list": false,
        "align": ""
      },
      {
        "type": "paragraph",
        "text": "Unwind in an intimate luxury retreat where spectacular landscapes, personalised hospitality, and the timeless charm of Ceylon’s tea country come together in perfect harmony.",
        "style": "",
        "list": false,
        "align": ""
      },
      {
        "type": "paragraph",
        "text": "DAY 04 – CAMELIA HILLS",
        "style": "",
        "list": false,
        "align": ""
      },
      {
        "type": "paragraph",
        "text": "Slow Living Amidst Sri Lanka’s Emerald Highlands",
        "style": "",
        "list": false,
        "align": ""
      },
      {
        "type": "paragraph",
        "text": "Wake up to the gentle warmth of the morning sun, or perhaps watch the misty clouds play hide-and-seek across the surrounding mountains. At Camellia Hills, every moment feels like a picture postcard, with breathtaking views of the Castlereagh Reservoir, rolling tea plantations, and the enchanting landscapes of Sri Lanka’s hill country.",
        "style": "",
        "list": false,
        "align": ""
      },
      {
        "type": "paragraph",
        "text": "Today is all about slowing down, reconnecting with nature, and enjoying the understated luxury of your secluded tea bungalow. Whether you prefer a leisurely breakfast overlooking the scenery or an adventurous day exploring the surrounding countryside, the choice is entirely yours.",
        "style": "",
        "list": false,
        "align": ""
      },
      {
        "type": "paragraph",
        "text": "Things to Do",
        "style": "",
        "list": false,
        "align": ""
      },
      {
        "type": "paragraph",
        "text": "Enjoy a scenic breakfast by the pool, weather permitting.",
        "style": "ListParagraph",
        "list": true,
        "align": ""
      },
      {
        "type": "paragraph",
        "text": "Discover the surrounding landscapes through birdwatching.",
        "style": "ListParagraph",
        "list": true,
        "align": ""
      },
      {
        "type": "paragraph",
        "text": "Take a guided walk through the lush tea estates.",
        "style": "ListParagraph",
        "list": true,
        "align": ""
      },
      {
        "type": "paragraph",
        "text": "Experience an evening or night-time nature walk, subject to availability and safety arrangements.",
        "style": "ListParagraph",
        "list": true,
        "align": ""
      },
      {
        "type": "paragraph",
        "text": "Visit the historic 19th-century Christ Church.",
        "style": "ListParagraph",
        "list": true,
        "align": ""
      },
      {
        "type": "paragraph",
        "text": "Enjoy a scenic picnic beside a cascading waterfall.",
        "style": "ListParagraph",
        "list": true,
        "align": ""
      },
      {
        "type": "paragraph",
        "text": "Experience white-water rafting, which can be arranged en route or as a separate excursion, subject to conditions.",
        "style": "ListParagraph",
        "list": true,
        "align": ""
      },
      {
        "type": "paragraph",
        "text": "Take a canoe ride on the beautiful Castlereagh Reservoir, subject to availability.",
        "style": "ListParagraph",
        "list": true,
        "align": ""
      },
      {
        "type": "paragraph",
        "text": "Please note: Some activities may incur additional charges and require advance arrangements. Experiences are subject to weather conditions, availability, and local operating schedules.",
        "style": "ListParagraph",
        "list": true,
        "align": ""
      },
      {
        "type": "paragraph",
        "text": "Stay – Camellia Hills, Hatton",
        "style": "",
        "list": false,
        "align": ""
      },
      {
        "type": "paragraph",
        "text": "Return to your tranquil hideaway for another memorable evening, surrounded by the breathtaking beauty of Ceylon’s tea country.",
        "style": "",
        "list": false,
        "align": ""
      },
      {
        "type": "paragraph",
        "text": "DAY 05 – HATTON | NUWARA ELIYA",
        "style": "",
        "list": false,
        "align": ""
      },
      {
        "type": "paragraph",
        "text": "From Tea Country to Colonial Elegance",
        "style": "",
        "list": false,
        "align": ""
      },
      {
        "type": "paragraph",
        "text": "Approx. travel time: Approximately 1.5–2 hours by road.",
        "style": "",
        "list": false,
        "align": ""
      },
      {
        "type": "paragraph",
        "text": "Today, continue your journey deeper into Sri Lanka’s magnificent central highlands, travelling through emerald-green tea plantations that blanket the rolling hillsides. Along the way, you may catch glimpses of tea pluckers carefully gathering fresh leaves, continuing traditions that have shaped the island’s world-famous Ceylon tea industry.",
        "style": "",
        "list": false,
        "align": ""
      },
      {
        "type": "paragraph",
        "text": "As the road winds through the mountains, the air becomes cooler and fresher, while mist-covered peaks and spectacular valley views create a truly memorable journey.",
        "style": "",
        "list": false,
        "align": ""
      },
      {
        "type": "paragraph",
        "text": "Your destination is Goatfell, an enchanting colonial-era tea bungalow nestled high in the hills near Nuwara Eliya. With its intimate atmosphere, secluded setting, and sweeping views across the surrounding countryside, this boutique retreat offers an exceptional blend of heritage, comfort, and refined country living.",
        "style": "",
        "list": false,
        "align": ""
      },
      {
        "type": "paragraph",
        "text": "Upon arrival, settle into your surroundings and savour the tranquility of a property designed for those who appreciate privacy, thoughtful hospitality, and the beauty of nature.",
        "style": "",
        "list": false,
        "align": ""
      },
      {
        "type": "paragraph",
        "text": "Things to Do",
        "style": "",
        "list": false,
        "align": ""
      },
      {
        "type": "paragraph",
        "text": "Enjoy a scenic drive through the tea-growing highlands.",
        "style": "ListParagraph",
        "list": true,
        "align": ""
      },
      {
        "type": "paragraph",
        "text": "Admire the rolling plantations and mountain panoramas along the way.",
        "style": "ListParagraph",
        "list": true,
        "align": ""
      },
      {
        "type": "paragraph",
        "text": "Relax in the peaceful surroundings of Goatfell.",
        "style": "ListParagraph",
        "list": true,
        "align": ""
      },
      {
        "type": "paragraph",
        "text": "Enjoy a leisurely afternoon at the bungalow, taking in the views and cool mountain air.",
        "style": "ListParagraph",
        "list": true,
        "align": ""
      },
      {
        "type": "paragraph",
        "text": "Stay – Goatfell, Nuwara Eliya",
        "style": "",
        "list": false,
        "align": ""
      },
      {
        "type": "paragraph",
        "text": "Unwind in this intimate highland sanctuary, where colonial charm and the timeless beauty of Sri Lanka’s tea country come together.",
        "style": "",
        "list": false,
        "align": ""
      },
      {
        "type": "paragraph",
        "text": "DAY 06 – GOATFELL",
        "style": "",
        "list": false,
        "align": ""
      },
      {
        "type": "paragraph",
        "text": "Highland Adventures and Refined Country Living",
        "style": "",
        "list": false,
        "align": ""
      },
      {
        "type": "paragraph",
        "text": "Today is yours to experience Goatfell at your own pace. Spend a leisurely morning enjoying the bungalow’s peaceful atmosphere, take a refreshing dip in the pool, or simply relax amid the lush greenery and spectacular mountain scenery.",
        "style": "",
        "list": false,
        "align": ""
      },
      {
        "type": "paragraph",
        "text": "For those who prefer to venture outdoors, the surrounding region offers an exceptional variety of experiences, from tea plantation walks and botanical gardens to scenic mountain trails and cultural discoveries around Nuwara Eliya.",
        "style": "",
        "list": false,
        "align": ""
      },
      {
        "type": "paragraph",
        "text": "Whether you choose a relaxed day of indulgence or an adventure-filled exploration, your chauffeur-guide can help arrange experiences that suit your interests and preferred pace.",
        "style": "",
        "list": false,
        "align": ""
      },
      {
        "type": "paragraph",
        "text": "Things to Do",
        "style": "",
        "list": false,
        "align": ""
      },
      {
        "type": "paragraph",
        "text": "At the Bungalow and Within the Surrounding Tea Country",
        "style": "",
        "list": false,
        "align": ""
      },
      {
        "type": "paragraph",
        "text": "Enjoy breakfast with breathtaking views across the highlands.",
        "style": "ListParagraph",
        "list": true,
        "align": ""
      },
      {
        "type": "paragraph",
        "text": "Experience a traditional Sri Lankan cooking demonstration.",
        "style": "ListParagraph",
        "list": true,
        "align": ""
      },
      {
        "type": "paragraph",
        "text": "Discover the art of Ceylon tea through a guided tea factory visit.",
        "style": "ListParagraph",
        "list": true,
        "align": ""
      },
      {
        "type": "paragraph",
        "text": "Enjoy scenic walks through the surrounding tea estates.",
        "style": "ListParagraph",
        "list": true,
        "align": ""
      },
      {
        "type": "paragraph",
        "text": "Outdoor Experiences Around Nuwara Eliya",
        "style": "ListParagraph",
        "list": true,
        "align": ""
      },
      {
        "type": "paragraph",
        "text": "Explore Nuwara Eliya town and its charming colonial architecture.",
        "style": "ListParagraph",
        "list": true,
        "align": ""
      },
      {
        "type": "paragraph",
        "text": "Visit Hakgala Botanical Gardens.",
        "style": "ListParagraph",
        "list": true,
        "align": ""
      },
      {
        "type": "paragraph",
        "text": "Discover the panoramic landscapes of Moon Plains.",
        "style": "ListParagraph",
        "list": true,
        "align": ""
      },
      {
        "type": "paragraph",
        "text": "Trek through Horton Plains National Park and visit World’s End, subject to park regulations and weather conditions.",
        "style": "ListParagraph",
        "list": true,
        "align": ""
      },
      {
        "type": "paragraph",
        "text": "Hike Thotupola Kanda, one of Sri Lanka’s highest mountain peaks, with suitable arrangements.",
        "style": "ListParagraph",
        "list": true,
        "align": ""
      },
      {
        "type": "paragraph",
        "text": "Indulge in traditional afternoon high tea at the historic Grand Hotel in Nuwara Eliya.",
        "style": "ListParagraph",
        "list": true,
        "align": ""
      },
      {
        "type": "paragraph",
        "text": "Please note: Activities may incur additional charges. National Park visits, hikes, tea factory tours, and dining experiences should be arranged in advance where necessary.",
        "style": "ListParagraph",
        "list": true,
        "align": ""
      },
      {
        "type": "paragraph",
        "text": "Stay – Goatfell, Nuwara Eliya",
        "style": "",
        "list": false,
        "align": ""
      },
      {
        "type": "paragraph",
        "text": "Return to the comfort of your private highland retreat for another relaxing evening, embracing the slower pace of life in Sri Lanka’s enchanting tea country.",
        "style": "",
        "list": false,
        "align": ""
      },
      {
        "type": "paragraph",
        "text": "DAY 07 – NUWARA ELIYA | ELLA",
        "style": "",
        "list": false,
        "align": ""
      },
      {
        "type": "paragraph",
        "text": "A Journey Above the Clouds",
        "style": "",
        "list": false,
        "align": ""
      },
      {
        "type": "paragraph",
        "text": "Travel Options: Scenic train journey from Nanu Oya to Ella, approximately 3–4 hours, or a private road transfer of approximately 2 hours, subject to traffic and road conditions.",
        "style": "",
        "list": false,
        "align": ""
      },
      {
        "type": "paragraph",
        "text": "Today, leave the cool highlands of Nuwara Eliya behind and journey towards Ella, one of Sri Lanka’s most captivating destinations, celebrated for its lush landscapes, misty mountains, and relaxed atmosphere.",
        "style": "",
        "list": false,
        "align": ""
      },
      {
        "type": "paragraph",
        "text": "For an unforgettable experience, embark on the world-famous scenic train journey from Nanu Oya Railway Station to Ella. As the train winds through emerald tea plantations, mountain tunnels, forested slopes, and picturesque villages, enjoy some of the island’s most spectacular railway scenery.",
        "style": "",
        "list": false,
        "align": ""
      },
      {
        "type": "paragraph",
        "text": "Alternatively, travel comfortably by private vehicle with your chauffeur-guide, allowing you to enjoy the beautiful countryside at your own pace.",
        "style": "",
        "list": false,
        "align": ""
      },
      {
        "type": "paragraph",
        "text": "Upon arrival in Ella, check in to Nine Skies, an elegant boutique tea bungalow by Teardrop Hotels. Nestled amidst a working tea estate, this intimate retreat offers an exceptional combination of colonial character, contemporary comfort, and breathtaking highland scenery.",
        "style": "",
        "list": false,
        "align": ""
      },
      {
        "type": "paragraph",
        "text": "Things to Do",
        "style": "",
        "list": false,
        "align": ""
      },
      {
        "type": "paragraph",
        "text": "Enjoy the iconic train journey from Nanu Oya to Ella, or travel by private vehicle.",
        "style": "ListParagraph",
        "list": true,
        "align": ""
      },
      {
        "type": "paragraph",
        "text": "Admire the tea plantations, mountain landscapes, and scenic countryside.",
        "style": "ListParagraph",
        "list": true,
        "align": ""
      },
      {
        "type": "paragraph",
        "text": "Enjoy the tranquility and distinctive charm of Nine Skies.",
        "style": "ListParagraph",
        "list": true,
        "align": ""
      },
      {
        "type": "paragraph",
        "text": "Relax amid the picturesque surroundings of your boutique retreat.",
        "style": "ListParagraph",
        "list": true,
        "align": ""
      },
      {
        "type": "paragraph",
        "text": "Important Train Booking Information",
        "style": "",
        "list": false,
        "align": ""
      },
      {
        "type": "paragraph",
        "text": "Train tickets are subject to availability and should be booked well in advance due to high demand and limited reserved seating.",
        "style": "ListParagraph",
        "list": true,
        "align": ""
      },
      {
        "type": "paragraph",
        "text": "Ticket bookings can be arranged by Magical Paradise, subject to availability.",
        "style": "ListParagraph",
        "list": true,
        "align": ""
      },
      {
        "type": "paragraph",
        "text": "Changes to travel dates, times, or passenger details may be restricted by the applicable ticket conditions.",
        "style": "ListParagraph",
        "list": true,
        "align": ""
      },
      {
        "type": "paragraph",
        "text": "Train tickets may be non-refundable, depending on the booking terms.",
        "style": "ListParagraph",
        "list": true,
        "align": ""
      },
      {
        "type": "paragraph",
        "text": "Delays or service disruptions may occur due to weather, operational issues, or other unforeseen circumstances.",
        "style": "ListParagraph",
        "list": true,
        "align": ""
      },
      {
        "type": "paragraph",
        "text": "Stay – Nine Skies, Ella",
        "style": "",
        "list": false,
        "align": ""
      },
      {
        "type": "paragraph",
        "text": "Spend the evening in the serene surroundings of this charming tea bungalow, where the beauty of Sri Lanka’s hill country creates an unforgettable escape.",
        "style": "",
        "list": false,
        "align": ""
      },
      {
        "type": "paragraph",
        "text": "DAY 08 – NINE SKIES | ELLA",
        "style": "",
        "list": false,
        "align": ""
      },
      {
        "type": "paragraph",
        "text": "A Highland Hideaway and a World of Adventure",
        "style": "",
        "list": false,
        "align": ""
      },
      {
        "type": "paragraph",
        "text": "Surrounded by rolling hills, lush tea estates, and breathtaking mountain scenery, Ella is a destination that captures the imagination of every traveller. Despite its small-town charm, it offers an extraordinary variety of experiences, from peaceful nature walks and cultural discoveries to thrilling outdoor adventures.",
        "style": "",
        "list": false,
        "align": ""
      },
      {
        "type": "paragraph",
        "text": "Today, enjoy the freedom to explore Ella at your own pace or simply embrace the tranquillity of Nine Skies. Spend a slow morning enjoying a delicious breakfast, admire the sweeping views from the bungalow, or discover the surrounding countryside with your chauffeur-guide.",
        "style": "",
        "list": false,
        "align": ""
      },
      {
        "type": "paragraph",
        "text": "Whether you are drawn to the great outdoors, local culture, or the pleasures of a secluded luxury retreat, Ella offers something special for every kind of traveller.",
        "style": "",
        "list": false,
        "align": ""
      },
      {
        "type": "paragraph",
        "text": "Things to Do",
        "style": "",
        "list": false,
        "align": ""
      },
      {
        "type": "paragraph",
        "text": "At Nine Skies",
        "style": "ListParagraph",
        "list": true,
        "align": ""
      },
      {
        "type": "paragraph",
        "text": "Enjoy a traditional Sri Lankan cooking experience.",
        "style": "ListParagraph",
        "list": true,
        "align": ""
      },
      {
        "type": "paragraph",
        "text": "Savour a memorable meal overlooking the surrounding landscape.",
        "style": "ListParagraph",
        "list": true,
        "align": ""
      },
      {
        "type": "paragraph",
        "text": "Spend time birdwatching and discovering the natural surroundings.",
        "style": "ListParagraph",
        "list": true,
        "align": ""
      },
      {
        "type": "paragraph",
        "text": "Relax and enjoy the peaceful atmosphere of the bungalow.",
        "style": "ListParagraph",
        "list": true,
        "align": ""
      },
      {
        "type": "paragraph",
        "text": "Outdoor Adventures and Cultural Experiences",
        "style": "ListParagraph",
        "list": true,
        "align": ""
      },
      {
        "type": "paragraph",
        "text": "Hike Little Adam’s Peak for spectacular views across the surrounding mountains.",
        "style": "ListParagraph",
        "list": true,
        "align": ""
      },
      {
        "type": "paragraph",
        "text": "Trek to Ella Rock for a rewarding hiking experience.",
        "style": "ListParagraph",
        "list": true,
        "align": ""
      },
      {
        "type": "paragraph",
        "text": "Experience adventure activities at Flying Ravana Adventure Park or visit Ravana Pool Club, subject to availability.",
        "style": "ListParagraph",
        "list": true,
        "align": ""
      },
      {
        "type": "paragraph",
        "text": "Explore Bandarawela and Haputale on a cultural excursion, with possible visits to Dhawa Rock Temple, Nazareth Chapel of the Good Shepherd Convent, and St. Benedict’s Monastery.",
        "style": "ListParagraph",
        "list": true,
        "align": ""
      },
      {
        "type": "paragraph",
        "text": "Discover a secluded waterfall and enjoy a scenic picnic, where access and conditions permit.",
        "style": "ListParagraph",
        "list": true,
        "align": ""
      },
      {
        "type": "paragraph",
        "text": "Explore Ella town, with its cafés, boutiques, and local attractions.",
        "style": "ListParagraph",
        "list": true,
        "align": ""
      },
      {
        "type": "paragraph",
        "text": "Experience Ella’s lively evening dining and entertainment scene.",
        "style": "ListParagraph",
        "list": true,
        "align": ""
      },
      {
        "type": "paragraph",
        "text": "Rent a scooter to explore independently, subject to a valid licence, local requirements, and safety considerations.",
        "style": "ListParagraph",
        "list": true,
        "align": ""
      },
      {
        "type": "paragraph",
        "text": "Please note: Outdoor activities, guided hikes, transport, and excursions may incur additional charges. Some experiences require advance booking and are subject to weather conditions.",
        "style": "ListParagraph",
        "list": true,
        "align": ""
      },
      {
        "type": "paragraph",
        "text": "Stay – Nine Skies, Ella",
        "style": "",
        "list": false,
        "align": ""
      },
      {
        "type": "paragraph",
        "text": "Return to the comfort of your boutique bungalow for a relaxing evening, surrounded by the peaceful beauty of Sri Lanka’s highlands.",
        "style": "",
        "list": false,
        "align": ""
      },
      {
        "type": "paragraph",
        "text": "DAY 09 – ELLA | GALLE",
        "style": "",
        "list": false,
        "align": ""
      },
      {
        "type": "paragraph",
        "text": "From Misty Mountains to the Southern Shores",
        "style": "",
        "list": false,
        "align": ""
      },
      {
        "type": "paragraph",
        "text": "Approx. Travel Time:  4–5 hours",
        "style": "",
        "list": false,
        "align": ""
      },
      {
        "type": "paragraph",
        "text": "Today marks a wonderful change of scenery as you bid farewell to Sri Lanka’s misty highlands and journey towards the sun-kissed southern coast. Along the way, watch the landscapes transform from rolling tea plantations and mountain vistas to tropical lowlands, palm-fringed countryside, and the inviting atmosphere of the coast.",
        "style": "",
        "list": false,
        "align": ""
      },
      {
        "type": "paragraph",
        "text": "For those wishing to add a wildlife experience to the journey, an excursion to Udawalawe National Park can be arranged, subject to the route, available time, and safari schedules. Renowned for its wild elephant population, the park offers an exciting opportunity to observe elephants and other wildlife in their natural habitat.",
        "style": "",
        "list": false,
        "align": ""
      },
      {
        "type": "paragraph",
        "text": "Please note that including a safari will extend the journey considerably and should be planned in advance.",
        "style": "",
        "list": false,
        "align": ""
      },
      {
        "type": "paragraph",
        "text": "Upon reaching Galle, discover your next luxury hideaway, Fort Bazaar, a stylishly restored boutique hotel located within the historic walls of Galle Fort. Combining contemporary elegance with the charm of the old town, this distinctive property offers the perfect base for exploring one of Sri Lanka’s most captivating coastal destinations.",
        "style": "",
        "list": false,
        "align": ""
      },
      {
        "type": "paragraph",
        "text": "Things to Do",
        "style": "",
        "list": false,
        "align": ""
      },
      {
        "type": "paragraph",
        "text": "Enjoy a scenic journey from the central highlands towards the southern coast.",
        "style": "ListParagraph",
        "list": true,
        "align": ""
      },
      {
        "type": "paragraph",
        "text": "Experience an optional jeep safari at Udawalawe National Park.",
        "style": "ListParagraph",
        "list": true,
        "align": ""
      },
      {
        "type": "paragraph",
        "text": "Admire the changing landscapes along the way.",
        "style": "ListParagraph",
        "list": true,
        "align": ""
      },
      {
        "type": "paragraph",
        "text": "Check in to Fort Bazaar and unwind within the historic surroundings of Galle Fort.",
        "style": "ListParagraph",
        "list": true,
        "align": ""
      },
      {
        "type": "paragraph",
        "text": "Stay – Fort Bazaar, Galle Fort",
        "style": "",
        "list": false,
        "align": ""
      },
      {
        "type": "paragraph",
        "text": "Enjoy a memorable evening in the heart of this historic coastal town, where heritage architecture, boutique shopping, and the relaxed rhythm of southern Sri Lanka await.",
        "style": "",
        "list": false,
        "align": ""
      },
      {
        "type": "paragraph",
        "text": "DAY 10 – FORT BAZAAR | GALLE",
        "style": "",
        "list": false,
        "align": ""
      },
      {
        "type": "paragraph",
        "text": "Colonial Heritage and Coastal Adventures",
        "style": "",
        "list": false,
        "align": ""
      },
      {
        "type": "paragraph",
        "text": "Wake up within the atmospheric surroundings of Galle Fort, where centuries of maritime history meet contemporary Sri Lankan culture. This UNESCO World Heritage Site is a fascinating maze of cobblestone streets, historic buildings, boutique shops, cafés, and remarkable colonial architecture overlooking the Indian Ocean.",
        "style": "",
        "list": false,
        "align": ""
      },
      {
        "type": "paragraph",
        "text": "Today, explore the fort and its surroundings at your own pace. Discover the stories behind its historic ramparts, experience traditional craftsmanship, or venture beyond the old town to explore the region’s spiritual heritage and coastal adventures.",
        "style": "",
        "list": false,
        "align": ""
      },
      {
        "type": "paragraph",
        "text": "For those seeking something more active, the surrounding coastline offers opportunities for surfing, scuba diving, and seasonal marine excursions.",
        "style": "",
        "list": false,
        "align": ""
      },
      {
        "type": "paragraph",
        "text": "Things to Do",
        "style": "",
        "list": false,
        "align": ""
      },
      {
        "type": "paragraph",
        "text": "Enjoy a guided walking tour of historic Galle Fort.",
        "style": "ListParagraph",
        "list": true,
        "align": ""
      },
      {
        "type": "paragraph",
        "text": "Visit a traditional mask-carving and painting workshop.",
        "style": "ListParagraph",
        "list": true,
        "align": ""
      },
      {
        "type": "paragraph",
        "text": "Discover Sri Lanka’s Buddhist heritage with a visit to Yatagala Raja Maha Viharaya.",
        "style": "ListParagraph",
        "list": true,
        "align": ""
      },
      {
        "type": "paragraph",
        "text": "Explore scenic inland cycling routes, subject to availability.",
        "style": "ListParagraph",
        "list": true,
        "align": ""
      },
      {
        "type": "paragraph",
        "text": "Join a seasonal whale- or dolphin-watching excursion from a suitable departure point.",
        "style": "ListParagraph",
        "list": true,
        "align": ""
      },
      {
        "type": "paragraph",
        "text": "Experience scuba diving or surfing, subject to weather and sea conditions.",
        "style": "ListParagraph",
        "list": true,
        "align": ""
      },
      {
        "type": "paragraph",
        "text": "Arrange a visit to Lunuganga, the celebrated country estate and garden of architect Geoffrey Bawa, as a separate excursion where practical.",
        "style": "ListParagraph",
        "list": true,
        "align": ""
      },
      {
        "type": "paragraph",
        "text": "Please note: Lunuganga is located outside Galle, so the visit requires additional travel time and should be arranged in advance. Marine excursions are seasonal and sightings cannot be guaranteed.",
        "style": "ListParagraph",
        "list": true,
        "align": ""
      },
      {
        "type": "paragraph",
        "text": "Stay – Fort Bazaar, Galle Fort",
        "style": "",
        "list": false,
        "align": ""
      },
      {
        "type": "paragraph",
        "text": "Return to your boutique retreat after a day of cultural discoveries and coastal experiences, enjoying the unique charm of Galle after the day visitors have departed.",
        "style": "",
        "list": false,
        "align": ""
      },
      {
        "type": "paragraph",
        "text": "DAY 11 – GALLE | BALAPITIYA",
        "style": "",
        "list": false,
        "align": ""
      },
      {
        "type": "paragraph",
        "text": "A Coastal Escape to Barefoot Luxury",
        "style": "",
        "list": false,
        "align": ""
      },
      {
        "type": "paragraph",
        "text": "Approx. Travel Time: 1–1.5 hours",
        "style": "",
        "list": false,
        "align": ""
      },
      {
        "type": "paragraph",
        "text": "Today, continue along Sri Lanka’s picturesque southwestern coastline towards Balapitiya, a peaceful seaside destination known for its tropical scenery, tranquil beaches, and relaxed coastal atmosphere.",
        "style": "",
        "list": false,
        "align": ""
      },
      {
        "type": "paragraph",
        "text": "With a relatively short transfer ahead, you can choose to enjoy a leisurely morning in Galle, take one final stroll through its historic streets, or set off earlier to make the most of your arrival at the next retreat.",
        "style": "",
        "list": false,
        "align": ""
      },
      {
        "type": "paragraph",
        "text": "Your destination is Kumu Beach, an intimate oceanfront boutique hotel offering a more secluded and laid-back interpretation of luxury. With its elegant design, inviting pool, and beautiful views of the Indian Ocean, this is the perfect setting to slow down and embrace the pleasures of coastal living.",
        "style": "",
        "list": false,
        "align": ""
      },
      {
        "type": "paragraph",
        "text": "Upon arrival, settle into your surroundings and enjoy the freedom to spend the afternoon exactly as you wish.",
        "style": "",
        "list": false,
        "align": ""
      },
      {
        "type": "paragraph",
        "text": "Things to Do",
        "style": "",
        "list": false,
        "align": ""
      },
      {
        "type": "paragraph",
        "text": "Enjoy a scenic coastal drive from Galle to Balapitiya.",
        "style": "ListParagraph",
        "list": true,
        "align": ""
      },
      {
        "type": "paragraph",
        "text": "Take a final stroll through Galle Fort before departure, if time permits.",
        "style": "ListParagraph",
        "list": true,
        "align": ""
      },
      {
        "type": "paragraph",
        "text": "Relax by the pool or enjoy the peaceful oceanfront surroundings.",
        "style": "ListParagraph",
        "list": true,
        "align": ""
      },
      {
        "type": "paragraph",
        "text": "Take a leisurely walk along the beach, depending on tides and conditions.",
        "style": "ListParagraph",
        "list": true,
        "align": ""
      },
      {
        "type": "paragraph",
        "text": "Unwind with a refreshing drink while enjoying the coastal scenery.",
        "style": "ListParagraph",
        "list": true,
        "align": ""
      },
      {
        "type": "paragraph",
        "text": "Stay – Kumu Beach, Balapitiya",
        "style": "",
        "list": false,
        "align": ""
      },
      {
        "type": "paragraph",
        "text": "Settle into this peaceful seaside retreat, where ocean views, understated elegance, and personalised hospitality create the perfect setting for a relaxing coastal escape.",
        "style": "",
        "list": false,
        "align": ""
      },
      {
        "type": "paragraph",
        "text": "DAY 12 – KUMU BEACH | A DAY BY THE OCEAN",
        "style": "",
        "list": false,
        "align": ""
      },
      {
        "type": "paragraph",
        "text": "Unwind, Rejuvenate, and Embrace Island Living",
        "style": "",
        "list": false,
        "align": ""
      },
      {
        "type": "paragraph",
        "text": "Today is dedicated to enjoying the laid-back beauty of Sri Lanka’s southwestern coastline. At Kumu Beach, the day unfolds at your own pace, whether you choose to relax beside the pool, enjoy a rejuvenating wellness experience, or venture out to discover the region’s waterways, wildlife, and traditional arts.",
        "style": "",
        "list": false,
        "align": ""
      },
      {
        "type": "paragraph",
        "text": "For a slower day, savour a leisurely breakfast, spend time in the garden, or unwind with the soothing sounds of the Indian Ocean. Alternatively, your chauffeur guide can arrange excursions to explore the natural and cultural attractions around Balapitiya and the surrounding coastal region.",
        "style": "",
        "list": false,
        "align": ""
      },
      {
        "type": "paragraph",
        "text": "Things to Do",
        "style": "",
        "list": false,
        "align": ""
      },
      {
        "type": "paragraph",
        "text": "At Kumu Beach",
        "style": "ListParagraph",
        "list": true,
        "align": ""
      },
      {
        "type": "paragraph",
        "text": "Enjoy a Sri Lankan cookery demonstration.",
        "style": "ListParagraph",
        "list": true,
        "align": ""
      },
      {
        "type": "paragraph",
        "text": "Experience a relaxing yoga session, subject to availability.",
        "style": "ListParagraph",
        "list": true,
        "align": ""
      },
      {
        "type": "paragraph",
        "text": "Spend a leisurely afternoon in the garden or relax in a hammock.",
        "style": "ListParagraph",
        "list": true,
        "align": ""
      },
      {
        "type": "paragraph",
        "text": "Enjoy a swim in the ocean when sea conditions are safe.",
        "style": "ListParagraph",
        "list": true,
        "align": ""
      },
      {
        "type": "paragraph",
        "text": "Rejuvenate with a spa or wellness treatment, subject to available facilities and advance arrangements.",
        "style": "ListParagraph",
        "list": true,
        "align": ""
      },
      {
        "type": "paragraph",
        "text": "Outdoor Experiences Along the Coast",
        "style": "ListParagraph",
        "list": true,
        "align": ""
      },
      {
        "type": "paragraph",
        "text": "Visit a local turtle conservation centre or hatchery.",
        "style": "ListParagraph",
        "list": true,
        "align": ""
      },
      {
        "type": "paragraph",
        "text": "Enjoy a boat ride through the Madu River wetlands and mangrove ecosystem.",
        "style": "ListParagraph",
        "list": true,
        "align": ""
      },
      {
        "type": "paragraph",
        "text": "Experience surfing lessons, subject to seasonal sea conditions.",
        "style": "ListParagraph",
        "list": true,
        "align": ""
      },
      {
        "type": "paragraph",
        "text": "Join a seasonal whale- or dolphin-watching excursion from a suitable departure point.",
        "style": "ListParagraph",
        "list": true,
        "align": ""
      },
      {
        "type": "paragraph",
        "text": "Visit a traditional puppet art museum and discover the southern region’s artistic heritage.",
        "style": "ListParagraph",
        "list": true,
        "align": ""
      },
      {
        "type": "paragraph",
        "text": "Explore Lunuganga, the renowned country estate and garden of Geoffrey Bawa, with advance arrangements.",
        "style": "ListParagraph",
        "list": true,
        "align": ""
      },
      {
        "type": "paragraph",
        "text": "Please note: Some activities incur additional charges. Marine activities depend on weather and sea conditions, and wildlife sightings cannot be guaranteed.",
        "style": "ListParagraph",
        "list": true,
        "align": ""
      },
      {
        "type": "paragraph",
        "text": "Stay – Kumu Beach, Balapitiya",
        "style": "",
        "list": false,
        "align": ""
      },
      {
        "type": "paragraph",
        "text": "Return to your oceanfront retreat for another evening of relaxation, enjoying the tranquility and simple pleasures of Sri Lanka’s southern coast.",
        "style": "",
        "list": false,
        "align": ""
      },
      {
        "type": "paragraph",
        "text": "DAY 13 – BALAPITIYA | BENTOTA",
        "style": "",
        "list": false,
        "align": ""
      },
      {
        "type": "paragraph",
        "text": "Into the World of Geoffrey Bawa",
        "style": "",
        "list": false,
        "align": ""
      },
      {
        "type": "paragraph",
        "text": "Approx Travel Time: 45 minutes - 1 hour",
        "style": "",
        "list": false,
        "align": ""
      },
      {
        "type": "paragraph",
        "text": "Enjoy a relaxed start to the day before continuing towards Bentota, one of Sri Lanka’s best-known coastal destinations. With a short journey ahead, you can choose to spend a little more time enjoying Balapitiya or arrange an additional excursion before checking in to your final boutique retreat.",
        "style": "",
        "list": false,
        "align": ""
      },
      {
        "type": "paragraph",
        "text": "Your destination is Lunuganga, the celebrated country estate of Geoffrey Bawa, widely regarded as one of Asia’s most influential architects of the 20th century. Set amid beautifully landscaped gardens beside the Dedduwa Lake, this extraordinary property reflects Bawa’s distinctive approach to tropical modernism, where architecture, landscape, and nature exist in remarkable harmony.",
        "style": "",
        "list": false,
        "align": ""
      },
      {
        "type": "paragraph",
        "text": "More than simply a place to stay, Lunuganga offers an opportunity to experience a deeply personal architectural masterpiece, surrounded by lush greenery, tranquil water views, and thoughtfully designed outdoor spaces.",
        "style": "",
        "list": false,
        "align": ""
      },
      {
        "type": "paragraph",
        "text": "Things to Do",
        "style": "",
        "list": false,
        "align": ""
      },
      {
        "type": "paragraph",
        "text": "Explore the iconic Lunuganga gardens and landscaped grounds.",
        "style": "ListParagraph",
        "list": true,
        "align": ""
      },
      {
        "type": "paragraph",
        "text": "Discover the architectural legacy of Geoffrey Bawa.",
        "style": "ListParagraph",
        "list": true,
        "align": ""
      },
      {
        "type": "paragraph",
        "text": "Visit nearby Bentota Beach, approximately 10 minutes away by road, subject to traffic.",
        "style": "ListParagraph",
        "list": true,
        "align": ""
      },
      {
        "type": "paragraph",
        "text": "Enjoy a scenic Bentota River safari, subject to availability and weather conditions.",
        "style": "ListParagraph",
        "list": true,
        "align": ""
      },
      {
        "type": "paragraph",
        "text": "Relax and enjoy the distinctive surroundings of the property.",
        "style": "ListParagraph",
        "list": true,
        "align": ""
      },
      {
        "type": "paragraph",
        "text": "Savour the slower pace of life in this remarkable garden retreat.",
        "style": "ListParagraph",
        "list": true,
        "align": ""
      },
      {
        "type": "paragraph",
        "text": "Please note: Access to the gardens, guided tours, and some activities may require advance arrangements or additional charges. Experiences are subject to the property’s operating conditions.",
        "style": "ListParagraph",
        "list": true,
        "align": ""
      },
      {
        "type": "paragraph",
        "text": "Stay – Lunuganga, Bentota",
        "style": "",
        "list": false,
        "align": ""
      },
      {
        "type": "paragraph",
        "text": "Spend your final evening immersed in the artistic and natural beauty of Geoffrey Bawa’s extraordinary country estate, a fitting finale to a journey defined by distinctive stays and exceptional experiences.",
        "style": "",
        "list": false,
        "align": ""
      },
      {
        "type": "paragraph",
        "text": "DAY 14 – BENTOTA | AIRPORT",
        "style": "",
        "list": false,
        "align": ""
      },
      {
        "type": "paragraph",
        "text": "Until We Meet Again, Sri Lanka",
        "style": "",
        "list": false,
        "align": ""
      },
      {
        "type": "paragraph",
        "text": "Approx. Travel Time: 2-2.5 hours",
        "style": "",
        "list": false,
        "align": ""
      },
      {
        "type": "paragraph",
        "text": "As the saying goes by, all good things must come to an end. After an unforgettable journey through Sri Lanka’s most distinctive boutique retreats, spectacular highlands, historic coastal towns, and tropical hideaways, it is time to bid farewell to this enchanting island.",
        "style": "",
        "list": false,
        "align": ""
      },
      {
        "type": "paragraph",
        "text": "Enjoy your final breakfast at Lunuganga and savour a few last moments in its peaceful surroundings before your private transfer to Bandaranaike International Airport.",
        "style": "",
        "list": false,
        "align": ""
      },
      {
        "type": "paragraph",
        "text": "As you travel towards the airport, take with you the memories of mist-covered mountains, emerald tea plantations, exceptional hospitality, colonial charm, and the gentle rhythm of island life.",
        "style": "",
        "list": false,
        "align": ""
      },
      {
        "type": "paragraph",
        "text": "We hope this is not a goodbye, but simply “until we meet again”",
        "style": "",
        "list": false,
        "align": ""
      },
      {
        "type": "paragraph",
        "text": "Perhaps on another journey to discover more of Sri Lanka’s hidden treasures, or to revisit the places that made this holiday so special.",
        "style": "",
        "list": false,
        "align": ""
      },
      {
        "type": "paragraph",
        "text": "Until next time, Ayubowan! 🌴",
        "style": "",
        "list": false,
        "align": ""
      }
    ]
  },
  {
    "id": "3-tour-packages-mini-vacay",
    "name": "Mini Vacay",
    "sourceFile": "3 tour packages - Mini Vacay.docx",
    "title": "Tour package 01",
    "image": "/ff704484-a0b3-4483-b004-584fb344461f.jpg",
    "blocks": [
      {
        "type": "paragraph",
        "text": "Tour package 01",
        "style": "",
        "list": false,
        "align": ""
      },
      {
        "type": "paragraph",
        "text": "Short Tropical Break - 3 Nights 3 Stops",
        "style": "",
        "list": false,
        "align": "center"
      },
      {
        "type": "paragraph",
        "text": "Three Nights, Three Destinations — A Taste of Tropical Paradise",
        "style": "",
        "list": false,
        "align": ""
      },
      {
        "type": "paragraph",
        "text": "If you are someone who just counts the day-offs to spice up with adrenaline rushed short vacays, then this call is for you.",
        "style": "",
        "list": false,
        "align": ""
      },
      {
        "type": "paragraph",
        "text": "A short trip of 3 nights 4 days holiday in  tropical island will let you feel the true Sri Lankan blend of natural beauty in Ella, The colonial charm of Kandy & the Salty sands of pristine beaches in Tangalle.",
        "style": "",
        "list": false,
        "align": ""
      },
      {
        "type": "paragraph",
        "text": "DAY 1- WELCOME TO SRI LANKA | KANDY",
        "style": "",
        "list": false,
        "align": ""
      },
      {
        "type": "paragraph",
        "text": "The island journey begins to the majestic city in the hills",
        "style": "",
        "list": false,
        "align": ""
      },
      {
        "type": "paragraph",
        "text": "Approx. travel time: 3–4 hours",
        "style": "",
        "list": false,
        "align": ""
      },
      {
        "type": "paragraph",
        "text": "On your arrival at the airport, you will be greeted with a warm welcome by a Magical Paradise representative who will take you on a smooth and a safe ride to Kandy  for your 1st night stay.",
        "style": "",
        "list": false,
        "align": ""
      },
      {
        "type": "paragraph",
        "text": "On our way we can witness & interact with the island’s gentle giants with a visit made to Pinnawala Elephant Orphanage which is a home to a large herd of elephants including babies who are lovingly cared for by the staff.",
        "style": "",
        "list": false,
        "align": ""
      },
      {
        "type": "paragraph",
        "text": "Kandy  - the “Capital” of the Central Province  & it was known as the last “Headquarters “of the ancient period of the Kingdoms of Sri Lanka. Kandy, combines heritage, traditions and scenic beauty. Home to sacred Buddhist landmarks, colonial charm and lush hills, Kandy offers visitors a rich cultural experience at the heart of the island.",
        "style": "",
        "list": false,
        "align": ""
      },
      {
        "type": "paragraph",
        "text": "Things to do:",
        "style": "",
        "list": false,
        "align": ""
      },
      {
        "type": "paragraph",
        "text": "Visit to the Temple of the Sacred Tooth Relic",
        "style": "ListParagraph",
        "list": true,
        "align": ""
      },
      {
        "type": "paragraph",
        "text": "Climb to Bahirawakanda Vihara Budda Statue",
        "style": "ListParagraph",
        "list": true,
        "align": ""
      },
      {
        "type": "paragraph",
        "text": "Wander around the Royal Botanic Gardens of Peradeniya",
        "style": "ListParagraph",
        "list": true,
        "align": ""
      },
      {
        "type": "paragraph",
        "text": "A walk around the Kandy lake",
        "style": "ListParagraph",
        "list": true,
        "align": ""
      },
      {
        "type": "paragraph",
        "text": "The Kandy club cultural dance show",
        "style": "ListParagraph",
        "list": true,
        "align": ""
      },
      {
        "type": "paragraph",
        "text": "Taking the world-famous Kandy to Ella scenic train ride",
        "style": "ListParagraph",
        "list": true,
        "align": ""
      },
      {
        "type": "paragraph",
        "text": "**These are few of the main attractions/ activities this majestic city holds which will be curated according to your interests & time availability.",
        "style": "",
        "list": false,
        "align": ""
      },
      {
        "type": "paragraph",
        "text": "Your Stay Options: Cinnamon Citadel/ Grand Serendib Hotel / Jetwing Kandy Gallery/ W15 Hanthana",
        "style": "",
        "list": false,
        "align": ""
      },
      {
        "type": "paragraph",
        "text": "DAY 2 – KANDY|ELLA",
        "style": "",
        "list": false,
        "align": ""
      },
      {
        "type": "paragraph",
        "text": "Explore the scenic hill town everybody loves visiting",
        "style": "",
        "list": false,
        "align": ""
      },
      {
        "type": "paragraph",
        "text": "Approx. travel time: 4–5 hours",
        "style": "",
        "list": false,
        "align": ""
      },
      {
        "type": "paragraph",
        "text": "While bidding adios to our beautiful Kandy city on Day 2, It’s time we embark on a scenic yet curvy road trip to Ella which will  take almost 5 hours of our time but surely an heavenly escape as you will get to marvel yourselves with  hillside carpeted tea plantations  & cascading waterwalls .",
        "style": "",
        "list": false,
        "align": ""
      },
      {
        "type": "paragraph",
        "text": "Ella – It’s a town for everyone who visits. A small village surrounded by hills covered with tea plantations & cloud forests. It’s undoubtedly the most favorite stop of many tourists as it has a cooler clime, it’s soothing in the eye and simply a chilling destination with many folds in hand.",
        "style": "",
        "list": false,
        "align": ""
      },
      {
        "type": "paragraph",
        "text": "Things to do:",
        "style": "",
        "list": false,
        "align": ""
      },
      {
        "type": "paragraph",
        "text": "Hike to Little Adam’s Peak",
        "style": "ListParagraph",
        "list": true,
        "align": ""
      },
      {
        "type": "paragraph",
        "text": "Hike the Trial to Ella Rock",
        "style": "ListParagraph",
        "list": true,
        "align": ""
      },
      {
        "type": "paragraph",
        "text": "Cross the Nine Arch Bridge",
        "style": "ListParagraph",
        "list": true,
        "align": ""
      },
      {
        "type": "paragraph",
        "text": "Experience the Demodara Loop",
        "style": "ListParagraph",
        "list": true,
        "align": ""
      },
      {
        "type": "paragraph",
        "text": "Visit Ravana Falls and Caves",
        "style": "ListParagraph",
        "list": true,
        "align": ""
      },
      {
        "type": "paragraph",
        "text": "Relax at Ravana Pool Club (The 1st International Pool Club in Sri Lanka)",
        "style": "ListParagraph",
        "list": true,
        "align": ""
      },
      {
        "type": "paragraph",
        "text": "Enjoy Ella Town’s Night Life",
        "style": "ListParagraph",
        "list": true,
        "align": ""
      },
      {
        "type": "paragraph",
        "text": "Lipton Seat excursion",
        "style": "ListParagraph",
        "list": true,
        "align": ""
      },
      {
        "type": "paragraph",
        "text": "**These are the main attractions/activities where you can explore and enjoy much of this beautiful town and these could be arranged as per your “clock in & out” in Ella.",
        "style": "",
        "list": false,
        "align": ""
      },
      {
        "type": "paragraph",
        "text": "Your Stay Options: Te Dalu Resort & Spa |Zion View Ella Green Retreat|Seranite Ella\n 98 Acres Resort & Spa|Uga Ghiri| Newburgh Ella Tea Factory",
        "style": "",
        "list": false,
        "align": ""
      },
      {
        "type": "paragraph",
        "text": "DAY 3 –ELLA| TANGALLE",
        "style": "",
        "list": false,
        "align": ""
      },
      {
        "type": "paragraph",
        "text": "Where untouched golden beaches wrapped in absolute tropical serenity.",
        "style": "",
        "list": false,
        "align": ""
      },
      {
        "type": "paragraph",
        "text": "Approx. travel time: 3–4 hours",
        "style": "",
        "list": false,
        "align": ""
      },
      {
        "type": "paragraph",
        "text": "With much time spent in hills the next stop of this itinerary is where we gonna locate ourselves to the 3S’s – the Sun, San, Sea Destination in the Southern part of our island.",
        "style": "",
        "list": false,
        "align": ""
      },
      {
        "type": "paragraph",
        "text": "Tangalle – where golden beaches, swaying coconut palms and turquoise waters create a picture-perfect tropical escape. With its peaceful coves, traditional fishing villages and laid-back coastal charm, Tangalle invites you to slow down, soak in the natural beauty and experience the quieter side of Sri Lanka’s southern coast.",
        "style": "",
        "list": false,
        "align": ""
      },
      {
        "type": "paragraph",
        "text": "Things to do:",
        "style": "",
        "list": false,
        "align": ""
      },
      {
        "type": "paragraph",
        "text": "Turtle watching at Rekawa Beach",
        "style": "ListParagraph",
        "list": true,
        "align": ""
      },
      {
        "type": "paragraph",
        "text": "Swim at Goyambokka Beach",
        "style": "ListParagraph",
        "list": true,
        "align": ""
      },
      {
        "type": "paragraph",
        "text": "Visit to Mulgirigala Raja Maha Viharaya",
        "style": "ListParagraph",
        "list": true,
        "align": ""
      },
      {
        "type": "paragraph",
        "text": "Visit to Kalamatiyawa Lagoon Bird Sanctuary & Wetland park",
        "style": "ListParagraph",
        "list": true,
        "align": ""
      },
      {
        "type": "paragraph",
        "text": "Diving or Snorkelling in Tangalle Lagoon",
        "style": "ListParagraph",
        "list": true,
        "align": ""
      },
      {
        "type": "paragraph",
        "text": "Watch Hummanya Blowhole ( the 2nd biggest blowhole in the world)",
        "style": "ListParagraph",
        "list": true,
        "align": ""
      },
      {
        "type": "paragraph",
        "text": "Surf at Hiriketiya beach",
        "style": "ListParagraph",
        "list": true,
        "align": ""
      },
      {
        "type": "paragraph",
        "text": "Bird watching in Bundala National Park",
        "style": "ListParagraph",
        "list": true,
        "align": ""
      },
      {
        "type": "paragraph",
        "text": "Safari at Udawalawa National Park",
        "style": "ListParagraph",
        "list": true,
        "align": ""
      },
      {
        "type": "paragraph",
        "text": "**These are some of the main activities which we can enjoy whilst staying in Tangalle and of course time impedes and we will couple them up accordingly.",
        "style": "",
        "list": false,
        "align": ""
      },
      {
        "type": "paragraph",
        "text": "Your Stay Options :  Buckingham Place Hotel & Spa/Villa Blu/ Anantara Peace Haven Tangalle Resort/Uga Prava/Maya Tangalle",
        "style": "",
        "list": false,
        "align": ""
      },
      {
        "type": "paragraph",
        "text": "DAY 4 – AIRPORT |TANGALLE (Travel Time 3-3.5 Hours)",
        "style": "",
        "list": false,
        "align": ""
      },
      {
        "type": "paragraph",
        "text": "Our Representative will safely drive you back to the airport probably with hopes to seeing you again for a 2nd visit in Paradise Island probably for a longer vacay!!",
        "style": "",
        "list": false,
        "align": ""
      },
      {
        "type": "paragraph",
        "text": "Till we meet again !!",
        "style": "",
        "list": false,
        "align": ""
      },
      {
        "type": "paragraph",
        "text": "“Travel times are approximate and may vary depending on traffic, road conditions and stops along the way.”",
        "style": "",
        "list": false,
        "align": ""
      },
      {
        "type": "paragraph",
        "text": "Tour package – 2",
        "style": "",
        "list": false,
        "align": ""
      },
      {
        "type": "paragraph",
        "text": "The Perfect 4 Night Escape",
        "style": "",
        "list": false,
        "align": "center"
      },
      {
        "type": "paragraph",
        "text": "Ceylon in Five Days",
        "style": "",
        "list": false,
        "align": ""
      },
      {
        "type": "paragraph",
        "text": "Experience the perfect blend of culture, cool mountain landscapes, lush tea plantations and tropical beaches on this carefully curated journey through Sri Lanka. This itinerary will offer a memorable introduction to the island’s diverse beauty, warm hospitality and unforgettable experience.",
        "style": "",
        "list": false,
        "align": ""
      },
      {
        "type": "paragraph",
        "text": "DAY 01 – WELCOME TO SRI LANKA | KANDY",
        "style": "",
        "list": false,
        "align": ""
      },
      {
        "type": "paragraph",
        "text": "Into the majestic stop in the hills",
        "style": "",
        "list": false,
        "align": ""
      },
      {
        "type": "paragraph",
        "text": "Approx. travel time: 3–4 hours",
        "style": "",
        "list": false,
        "align": ""
      },
      {
        "type": "paragraph",
        "text": "Upon arrival to Bandaranaike International Airport (BIA). You will be warmly welcomed by your dedicated Magical Paradise representative, who will assist you before beginning your scenic journey into Sri Lanka’s picturesque hill country.",
        "style": "",
        "list": false,
        "align": ""
      },
      {
        "type": "paragraph",
        "text": "Enroute- Pinnawala Elephant Orphanage",
        "style": "",
        "list": false,
        "align": ""
      },
      {
        "type": "paragraph",
        "text": "Make a memorable stop at the renowned Pinnawala Orphange, home to rescued and orphaned elephants.",
        "style": "",
        "list": false,
        "align": ""
      },
      {
        "type": "paragraph",
        "text": "Kandy Sri Lanka’s cultural capital, Kandy combines heritage, traditions and scenic beauty. Home to sacred Buddhist landmarks, colonial charm and lush hills, Kandy offers visitors a rich cultural experience at the heart of the island.",
        "style": "",
        "list": false,
        "align": ""
      },
      {
        "type": "paragraph",
        "text": "Things to do",
        "style": "",
        "list": false,
        "align": ""
      },
      {
        "type": "paragraph",
        "text": "Visit the Temple of the Scared Tooth Relic",
        "style": "ListParagraph",
        "list": true,
        "align": ""
      },
      {
        "type": "paragraph",
        "text": "Stroll around Kandy Lake",
        "style": "ListParagraph",
        "list": true,
        "align": ""
      },
      {
        "type": "paragraph",
        "text": "Explore local handicrafts, gem and spice shops",
        "style": "ListParagraph",
        "list": true,
        "align": ""
      },
      {
        "type": "paragraph",
        "text": "Overnight stay – Kandy",
        "style": "",
        "list": false,
        "align": ""
      },
      {
        "type": "paragraph",
        "text": "DAY 02- KANDY | NUWARAELIYA",
        "style": "",
        "list": false,
        "align": ""
      },
      {
        "type": "paragraph",
        "text": "Exploring the emerald green cold climbs",
        "style": "",
        "list": false,
        "align": ""
      },
      {
        "type": "paragraph",
        "text": "Approx. travel time: 2.5–3.5 hours",
        "style": "",
        "list": false,
        "align": ""
      },
      {
        "type": "paragraph",
        "text": "After breakfast, journey through winding mountain roads towards Ceylon’s famous tea country",
        "style": "",
        "list": false,
        "align": ""
      },
      {
        "type": "paragraph",
        "text": "Enroute Experiences",
        "style": "",
        "list": false,
        "align": ""
      },
      {
        "type": "paragraph",
        "text": "Visit a working tea plantation",
        "style": "ListParagraph",
        "list": true,
        "align": ""
      },
      {
        "type": "paragraph",
        "text": "Tour a traditional tea factory to discover the fascinating journey from leaf to cup",
        "style": "ListParagraph",
        "list": true,
        "align": ""
      },
      {
        "type": "paragraph",
        "text": "Enjoy breathtaking panoramic views across rolling tea-covered hills",
        "style": "ListParagraph",
        "list": true,
        "align": ""
      },
      {
        "type": "paragraph",
        "text": "NuwaraEliya -Say Hello to the beautiful Little England Paradise Island",
        "style": "",
        "list": false,
        "align": ""
      },
      {
        "type": "paragraph",
        "text": "Affectionately known as “Little England “Nuwara Eliya charms visitors with its cool climate, colonial architecture beautifully manicured gardens and endless emerald tea estates. Surrounded by mist-covered mountains, it offers a peaceful retreat unlike anywhere else in Sri Lanka.",
        "style": "",
        "list": false,
        "align": ""
      },
      {
        "type": "paragraph",
        "text": "Things to see & do",
        "style": "",
        "list": false,
        "align": ""
      },
      {
        "type": "paragraph",
        "text": "Gregory Lake",
        "style": "ListParagraph",
        "list": true,
        "align": ""
      },
      {
        "type": "paragraph",
        "text": "Victoria Park",
        "style": "ListParagraph",
        "list": true,
        "align": ""
      },
      {
        "type": "paragraph",
        "text": "Colonial Town Centre - 📮 Nuwara Eliya Post Office\nOne of Sri Lanka's most photographed colonial landmarks.",
        "style": "ListParagraph",
        "list": true,
        "align": ""
      },
      {
        "type": "paragraph",
        "text": "Overnight stay – Nuwara Eliya",
        "style": "",
        "list": false,
        "align": ""
      },
      {
        "type": "paragraph",
        "text": "DAY 03- NUWARAELIYA | BENTOTA",
        "style": "",
        "list": false,
        "align": ""
      },
      {
        "type": "paragraph",
        "text": "Sun,Sand, & Vitamin Sea Please",
        "style": "",
        "list": false,
        "align": ""
      },
      {
        "type": "paragraph",
        "text": "Approx. travel time: 5–6 hours",
        "style": "",
        "list": false,
        "align": ""
      },
      {
        "type": "paragraph",
        "text": "Bid farewell to Cool highlands as you descend through spectacular mountain scenery towards Ceylon’s Sunkissed southern coastline, where golden beaches await.",
        "style": "",
        "list": false,
        "align": ""
      },
      {
        "type": "paragraph",
        "text": "Bentota - Beach Escape begins",
        "style": "",
        "list": false,
        "align": ""
      },
      {
        "type": "paragraph",
        "text": "Discover the coastal charm of Bentota, where golden sandy beaches meet swaying palm trees and the gentle waters of the Bentota River. Known for its relaxed seaside atmosphere, exciting water sports and scenic river safaris, Bentota offers the perfect blend of tropical beauty, adventure and laid-back island living.",
        "style": "",
        "list": false,
        "align": ""
      },
      {
        "type": "paragraph",
        "text": "Spend the remainder of the day unwinding by the beach or enjoying your resort’s facilities.",
        "style": "",
        "list": false,
        "align": ""
      },
      {
        "type": "paragraph",
        "text": "Overnight stay – Bentota",
        "style": "",
        "list": false,
        "align": ""
      },
      {
        "type": "paragraph",
        "text": "DAY 04- BENTOTA AT LEISURE",
        "style": "",
        "list": false,
        "align": ""
      },
      {
        "type": "paragraph",
        "text": "Today is yours to experience the charm of Sri Lank’s beautiful southern coast.",
        "style": "",
        "list": false,
        "align": ""
      },
      {
        "type": "paragraph",
        "text": "Things to see",
        "style": "",
        "list": false,
        "align": ""
      },
      {
        "type": "paragraph",
        "text": "Scenic Madu River Boat Safari",
        "style": "ListParagraph",
        "list": true,
        "align": ""
      },
      {
        "type": "paragraph",
        "text": "Visit Traditional Mask painting workshop and discover one of Sri Lanka’s oldest artistic traditions",
        "style": "ListParagraph",
        "list": true,
        "align": ""
      },
      {
        "type": "paragraph",
        "text": "Indulge in optional watersports or a rejuvenating spa treatment",
        "style": "ListParagraph",
        "list": true,
        "align": ""
      },
      {
        "type": "paragraph",
        "text": "Watch Sunset over the Indian ocean",
        "style": "ListParagraph",
        "list": true,
        "align": ""
      },
      {
        "type": "paragraph",
        "text": "Visit to Bawa Gardens",
        "style": "ListParagraph",
        "list": true,
        "align": ""
      },
      {
        "type": "paragraph",
        "text": "Overnight stay – Bentota",
        "style": "",
        "list": false,
        "align": ""
      },
      {
        "type": "paragraph",
        "text": "DAY 05- BENTOTA | BIA (Airport)",
        "style": "",
        "list": false,
        "align": ""
      },
      {
        "type": "paragraph",
        "text": "Approx. travel time: 2–3 hours",
        "style": "",
        "list": false,
        "align": ""
      },
      {
        "type": "paragraph",
        "text": "As your Sri Lankan adventure comes to an end, after breakfast enjoy a comfortable transfer to Bandaranaike International Airport.",
        "style": "",
        "list": false,
        "align": ""
      },
      {
        "type": "paragraph",
        "text": "Until we meet again !!",
        "style": "",
        "list": false,
        "align": ""
      },
      {
        "type": "paragraph",
        "text": "Tour package – 3",
        "style": "",
        "list": false,
        "align": ""
      },
      {
        "type": "paragraph",
        "text": "Planters, Paws, and Waves- 7Days|6 Nights",
        "style": "",
        "list": false,
        "align": "center"
      },
      {
        "type": "paragraph",
        "text": "Coastal Charms & Island Serenity",
        "style": "",
        "list": false,
        "align": ""
      },
      {
        "type": "paragraph",
        "text": "Here’s a holiday itinerary that blends the beauty of Sri Lanka’s diverse landscapes within just 6 nights of your choice. Some adventure into the wilderness at the beginning of the trip & lets you rejuvenate for a soul-filled getaway at the end.",
        "style": "",
        "list": false,
        "align": ""
      },
      {
        "type": "paragraph",
        "text": "DAY 1 – A WARM WELCOME TO SRI LANKA |YALA",
        "style": "",
        "list": false,
        "align": ""
      },
      {
        "type": "paragraph",
        "text": "Off We Go for A Wildlife Adventure",
        "style": "",
        "list": false,
        "align": ""
      },
      {
        "type": "paragraph",
        "text": "Approx. travel time: 4.5–5.5 hours",
        "style": "",
        "list": false,
        "align": ""
      },
      {
        "type": "paragraph",
        "text": "Upon arrival to Bandaranaike International Airport (BIA). You will be warmly welcomed by your dedicated Magical Paradise representative, who will assist you embark on your island holiday.",
        "style": "",
        "list": false,
        "align": ""
      },
      {
        "type": "paragraph",
        "text": "From here, begin your journey immersed in nature with a thrilling wildlife safari in “Yala” one of Sri Lanka’s famed national parks .Spot elephants, Sri Lankan leopards, sloth bear and vibrant birdlife while exploring the lush landscapes. This park was initially used as a hunting ground for the elite under the British rule.",
        "style": "",
        "list": false,
        "align": ""
      },
      {
        "type": "paragraph",
        "text": "Today, Yala is celebrated for its remarkable biodiversity, where dry forests, open grasslands, rocky outcrops, and tranquil lagoons create a captivating wilderness. Beyond its iconic wildlife, the park offers a truly immersive safari experience, bringing you closer to the untamed beauty of Sri Lanka and the fascinating rhythms of life in the wild.",
        "style": "",
        "list": false,
        "align": ""
      },
      {
        "type": "paragraph",
        "text": "Day 01 & 02 - Yala",
        "style": "",
        "list": false,
        "align": ""
      },
      {
        "type": "paragraph",
        "text": "Recommended Hotels, Villas and Camping",
        "style": "",
        "list": false,
        "align": ""
      },
      {
        "type": "paragraph",
        "text": "Chena huts | Wild Coast Tented Lodge |Kotiyagala Luxury Villas| Tribe Yala | Cinnamon Yala | Jetwing Yala | Yala Safari Camping |Tribe Yala|Yakaduru Yala",
        "style": "",
        "list": false,
        "align": ""
      },
      {
        "type": "paragraph",
        "text": "DAY 3- YALA |WELIGAMA",
        "style": "",
        "list": false,
        "align": ""
      },
      {
        "type": "paragraph",
        "text": "Relaxing Beach Escape",
        "style": "",
        "list": false,
        "align": ""
      },
      {
        "type": "paragraph",
        "text": "Approx. travel time: 2.5–3.5 hours",
        "style": "",
        "list": false,
        "align": ""
      },
      {
        "type": "paragraph",
        "text": "After the adventurous holiday, a much-needed transition to the coastal waves for a relaxing sun kissed beach stop would be your next ideal Retreat break. Simply unwind to the sounds of waves while basking in the Sun and dipping into Vitamin “Sea” dose for 2 wholesome days in the south of Sri Lanka.",
        "style": "",
        "list": false,
        "align": ""
      },
      {
        "type": "paragraph",
        "text": "Weligama is a vibrant southern coastal town renowned for surfing, golden beaches and laid-back coastal living. Combining adventure and tropical charm, it has become a favourite destination among surfers and beach lovers.",
        "style": "",
        "list": false,
        "align": ""
      },
      {
        "type": "paragraph",
        "text": "Activities to explore in Weligama",
        "style": "",
        "list": false,
        "align": ""
      },
      {
        "type": "paragraph",
        "text": "Scuba Diving (Seasonal)",
        "style": "ListParagraph",
        "list": true,
        "align": ""
      },
      {
        "type": "paragraph",
        "text": "Go Surfing (Seasonal)",
        "style": "ListParagraph",
        "list": true,
        "align": ""
      },
      {
        "type": "paragraph",
        "text": "Go Whale watching (Seasonal)",
        "style": "ListParagraph",
        "list": true,
        "align": ""
      },
      {
        "type": "paragraph",
        "text": "Visit to Coconut Tree Hill Mirissa",
        "style": "ListParagraph",
        "list": true,
        "align": ""
      },
      {
        "type": "paragraph",
        "text": "Enjoy the secret beach",
        "style": "ListParagraph",
        "list": true,
        "align": ""
      },
      {
        "type": "paragraph",
        "text": "Enjoy brunch at one of the best cafes on the south coast and nightlife fun",
        "style": "ListParagraph",
        "list": true,
        "align": ""
      },
      {
        "type": "paragraph",
        "text": "Day 03 and 04 – Weligama",
        "style": "",
        "list": false,
        "align": ""
      },
      {
        "type": "paragraph",
        "text": "Recommended Hotels & Villas",
        "style": "",
        "list": false,
        "align": ""
      },
      {
        "type": "paragraph",
        "text": "The Six Midigama|Cape Weligama | Weligama Bay Marriott Resort & Spa |Eraeliya Villas |Malabar Hill Weligama",
        "style": "",
        "list": false,
        "align": ""
      },
      {
        "type": "paragraph",
        "text": "DAY 05 – WELIGAMA |KALUTARA",
        "style": "",
        "list": false,
        "align": ""
      },
      {
        "type": "paragraph",
        "text": "Tea & Rubber Plantation Seclusion",
        "style": "",
        "list": false,
        "align": ""
      },
      {
        "type": "paragraph",
        "text": "Approx. travel time: 2–3 hours",
        "style": "",
        "list": false,
        "align": ""
      },
      {
        "type": "paragraph",
        "text": "End the holiday with a stay at a secluded property. It’s a perfect peaceful finale to a vibrant journey across Sri Lanka’s landscapes.",
        "style": "",
        "list": false,
        "align": ""
      },
      {
        "type": "paragraph",
        "text": "Glenross Living – Kalutara",
        "style": "",
        "list": false,
        "align": ""
      },
      {
        "type": "paragraph",
        "text": "Nestled amidst lush rubber plantations in the tranquil countryside of Kalutara, Glenross Living offers a peaceful escape surrounded by tropical greenery and natural beauty. Blending colonial charm with contemporary luxury, this boutique retreat invites you to unwind in serene surroundings, savour thoughtfully curated cuisine, and experience the slower, more soulful side of Sri Lanka.",
        "style": "",
        "list": false,
        "align": ""
      },
      {
        "type": "paragraph",
        "text": "Set amidst rolling hills and verdant plantations in Neboda, Kalutara, Glenross Living is a secluded luxury retreat where colonial elegance meets holistic wellness. Surrounded by lush greenery and scenic countryside, this charming hideaway offers private villas, rejuvenating spa experiences, mindful dining, and immersive nature walks—an idyllic sanctuary to unwind, reconnect with nature, and embrace the tranquil side of Sri Lanka.",
        "style": "",
        "list": false,
        "align": ""
      },
      {
        "type": "paragraph",
        "text": "Day 05 and 06 – Stay at “Glenross Living” in  Kautara (4- star Boutique Resort)",
        "style": "",
        "list": false,
        "align": ""
      },
      {
        "type": "paragraph",
        "text": "DAY 07 – RETURN TO AIRPORT",
        "style": "",
        "list": false,
        "align": ""
      },
      {
        "type": "paragraph",
        "text": "Approx. travel time: 2–3 hours",
        "style": "",
        "list": false,
        "align": ""
      },
      {
        "type": "paragraph",
        "text": "As your holiday in Sri Lanka winds down, it’s time to proceed with happy memories back to the airport to catch your flight back home.",
        "style": "",
        "list": false,
        "align": ""
      },
      {
        "type": "paragraph",
        "text": "Thank you for Visiting Sri Lanka!! Aybowan!",
        "style": "",
        "list": false,
        "align": ""
      }
    ]
  },
  {
    "id": "30-days-of-luxury-in-ceylon",
    "name": "30 Days of luxury in Ceylon",
    "sourceFile": "30 Days of luxury in Ceylon.docx",
    "title": "30 DAYS OF LUXURY IN CEYLON -30 DAYS|29 NIGHTS",
    "image": "/30e010b1-2b6c-4f87-81a5-d45d39aae23c.jpg",
    "blocks": [
      {
        "type": "paragraph",
        "text": "30 DAYS OF LUXURY IN CEYLON -30 DAYS|29 NIGHTS",
        "style": "",
        "list": false,
        "align": "center"
      },
      {
        "type": "paragraph",
        "text": "From Ancient Kingdoms to Wild Coastlines",
        "style": "",
        "list": false,
        "align": ""
      },
      {
        "type": "paragraph",
        "text": "A slow and immersive journey through Sri Lanka, bringing together ancient kingdoms, sacred temples, wildlife, tea country, scenic train rides, mountains, waterfalls and some of the island’s most beautiful southern beaches.",
        "style": "",
        "list": false,
        "align": ""
      },
      {
        "type": "paragraph",
        "text": "From the moment you arrive, this journey is designed to let you experience Sri Lanka at an unhurried pace — with time to explore, discover, relax and enjoy the character of each destination along the way.",
        "style": "",
        "list": false,
        "align": ""
      },
      {
        "type": "paragraph",
        "text": "DAY 1 – AIRPORT | NEGOMBO",
        "style": "",
        "list": false,
        "align": ""
      },
      {
        "type": "paragraph",
        "text": "Where the journey begins",
        "style": "",
        "list": false,
        "align": ""
      },
      {
        "type": "paragraph",
        "text": "Approx. travel time: 20–40 minutes",
        "style": "",
        "list": false,
        "align": ""
      },
      {
        "type": "paragraph",
        "text": "Ayubowan! Your Sri Lankan adventure begins with a warm welcome at Bandaranaike International Airport before a short drive towards the coastal town of Negombo.",
        "style": "",
        "list": false,
        "align": ""
      },
      {
        "type": "paragraph",
        "text": "Known for its proximity to the airport, Negombo is an easy and relaxing first stop after a long journey, with its historic canal network, fishing traditions and lagoon setting.",
        "style": "",
        "list": false,
        "align": ""
      },
      {
        "type": "paragraph",
        "text": "Located close to Sri Lanka’s international airport, Negombo is a lively coastal town offering beaches, seafood culture and colonial influences. It serves as both a relaxing introduction and a memorable farewell to Sri Lanka.",
        "style": "",
        "list": false,
        "align": ""
      },
      {
        "type": "paragraph",
        "text": "Things to do",
        "style": "",
        "list": false,
        "align": ""
      },
      {
        "type": "paragraph",
        "text": "Relax by the coast",
        "style": "",
        "list": true,
        "align": ""
      },
      {
        "type": "paragraph",
        "text": "Discover the town and its lagoon surroundings",
        "style": "",
        "list": true,
        "align": ""
      },
      {
        "type": "paragraph",
        "text": "Handpicked Stay Options – Walawwa by Teardrop Hotels | Uga Riva |Sentido Heritance",
        "style": "",
        "list": false,
        "align": ""
      },
      {
        "type": "paragraph",
        "text": "DAY 2 – NEGOMBO",
        "style": "",
        "list": false,
        "align": ""
      },
      {
        "type": "paragraph",
        "text": "A morning at the fish market & an afternoon by the lagoon",
        "style": "",
        "list": false,
        "align": ""
      },
      {
        "type": "paragraph",
        "text": "Begin the day with a visit to the lively Negombo Fish Market, followed by a more relaxed experience by the lagoon.",
        "style": "",
        "list": false,
        "align": ""
      },
      {
        "type": "paragraph",
        "text": "Enjoy High Tea in a charming lagoon-side setting, combined with a short Tuk Tuk experience and a boat ride through the lagoon.",
        "style": "",
        "list": false,
        "align": ""
      },
      {
        "type": "paragraph",
        "text": "Things to do",
        "style": "",
        "list": false,
        "align": ""
      },
      {
        "type": "paragraph",
        "text": "Visit Negombo Fish Market",
        "style": "",
        "list": true,
        "align": ""
      },
      {
        "type": "paragraph",
        "text": "Lagoon-side High Tea",
        "style": "",
        "list": true,
        "align": ""
      },
      {
        "type": "paragraph",
        "text": "Short Tuk Tuk experience",
        "style": "",
        "list": true,
        "align": ""
      },
      {
        "type": "paragraph",
        "text": "Negombo Lagoon boat ride",
        "style": "",
        "list": true,
        "align": ""
      },
      {
        "type": "paragraph",
        "text": "Handpicked Stay Options – Walawwa by Teardrop Hotels | Uga Riva |Sentido Heritance",
        "style": "",
        "list": false,
        "align": ""
      },
      {
        "type": "paragraph",
        "text": "DAY 3 – NEGOMBO | ANURADHAPURA",
        "style": "",
        "list": false,
        "align": ""
      },
      {
        "type": "paragraph",
        "text": "Into the heart of Sri Lanka's ancient kingdoms",
        "style": "",
        "list": false,
        "align": ""
      },
      {
        "type": "paragraph",
        "text": "Approx. travel time: 4–5 hours",
        "style": "",
        "list": false,
        "align": ""
      },
      {
        "type": "paragraph",
        "text": "Leave the coast behind and travel towards the cultural heart of Sri Lanka. It’s an ancient capital and one of the island's most important archaeological landscapes.",
        "style": "",
        "list": false,
        "align": ""
      },
      {
        "type": "paragraph",
        "text": "Step back in time in Anuradhapura, Sri Lanka’s ancient royal capital, where magnificent stupas, sacred Buddhist sites and remarkable archaeological treasures reveal the grandeur of a civilization that flourished for centuries. A UNESCO World Heritage Site, this historic city is home to the revered Sri Maha Bodhi, the majestic Ruwanwelisaya Stupa and the impressive ruins of ancient monasteries and royal structures. Visitors can explore sacred temples, admire intricate stone carvings and discover the ingenious ancient irrigation systems that continue to shape the surrounding landscape. Blending profound spirituality with extraordinary history and architectural beauty, Anuradhapura offers a fascinating journey into the island’s ancient heritage",
        "style": "",
        "list": false,
        "align": ""
      },
      {
        "type": "paragraph",
        "text": "Things to do",
        "style": "",
        "list": false,
        "align": ""
      },
      {
        "type": "paragraph",
        "text": "Visit Aukana Temple",
        "style": "",
        "list": true,
        "align": ""
      },
      {
        "type": "paragraph",
        "text": "Discover the ancient kingdom of Anuradhapura",
        "style": "",
        "list": true,
        "align": ""
      },
      {
        "type": "paragraph",
        "text": "Sri Maha Bodhi",
        "style": "",
        "list": true,
        "align": ""
      },
      {
        "type": "paragraph",
        "text": "Isurumuniya",
        "style": "",
        "list": true,
        "align": ""
      },
      {
        "type": "paragraph",
        "text": "Explore the ancient ruins",
        "style": "",
        "list": true,
        "align": ""
      },
      {
        "type": "paragraph",
        "text": "Stay – Uga Ulagalla",
        "style": "",
        "list": false,
        "align": ""
      },
      {
        "type": "paragraph",
        "text": "DAY 4 – ANURADHAPURA",
        "style": "",
        "list": false,
        "align": ""
      },
      {
        "type": "paragraph",
        "text": "Sacred mountains & ancient stories",
        "style": "",
        "list": false,
        "align": ""
      },
      {
        "type": "paragraph",
        "text": "Today takes you beyond the ancient city towards Mihintale, a sacred mountain associated with the arrival of Buddhism in Sri Lanka.",
        "style": "",
        "list": false,
        "align": ""
      },
      {
        "type": "paragraph",
        "text": "Take time to explore the historic monuments and enjoy the views across the surrounding landscape.",
        "style": "",
        "list": false,
        "align": ""
      },
      {
        "type": "paragraph",
        "text": "Things to do",
        "style": "",
        "list": false,
        "align": ""
      },
      {
        "type": "paragraph",
        "text": "Explore Mihintale",
        "style": "",
        "list": true,
        "align": ""
      },
      {
        "type": "paragraph",
        "text": "Guided meditation session with a Buddhist Monk",
        "style": "",
        "list": true,
        "align": ""
      },
      {
        "type": "paragraph",
        "text": "Discover ancient Buddhist monuments",
        "style": "",
        "list": true,
        "align": ""
      },
      {
        "type": "paragraph",
        "text": "Enjoy panoramic views from the hilltop",
        "style": "",
        "list": true,
        "align": ""
      },
      {
        "type": "paragraph",
        "text": "Continue exploring Anuradhapura's heritage",
        "style": "",
        "list": true,
        "align": ""
      },
      {
        "type": "paragraph",
        "text": "Stay – Handpicked Stay Options – Uga Ulagalla",
        "style": "",
        "list": false,
        "align": ""
      },
      {
        "type": "paragraph",
        "text": "DAY 5 – ANURADHAPURA",
        "style": "",
        "list": false,
        "align": ""
      },
      {
        "type": "paragraph",
        "text": "Into the wilds of Wilpattu",
        "style": "",
        "list": false,
        "align": ""
      },
      {
        "type": "paragraph",
        "text": "Today combines Sri Lanka's ancient heritage with one of its great wildlife experiences.",
        "style": "",
        "list": false,
        "align": ""
      },
      {
        "type": "paragraph",
        "text": "Head towards Wilpattu National Park for a half-day safari through its distinctive landscape of forests and natural wetlands.",
        "style": "",
        "list": false,
        "align": ""
      },
      {
        "type": "paragraph",
        "text": "Things to do",
        "style": "",
        "list": false,
        "align": ""
      },
      {
        "type": "paragraph",
        "text": "Half-day Wilpattu safari",
        "style": "",
        "list": true,
        "align": ""
      },
      {
        "type": "paragraph",
        "text": "Look for leopards and sloth bears",
        "style": "",
        "list": true,
        "align": ""
      },
      {
        "type": "paragraph",
        "text": "Watch for elephants, deer, wild boar and other wildlife",
        "style": "",
        "list": true,
        "align": ""
      },
      {
        "type": "paragraph",
        "text": "Enjoy activities at the hotel",
        "style": "",
        "list": true,
        "align": ""
      },
      {
        "type": "paragraph",
        "text": "Stay – Uga Ulagalla",
        "style": "",
        "list": false,
        "align": ""
      },
      {
        "type": "paragraph",
        "text": "DAY 6 – ANURADHAPURA | SIGIRIYA",
        "style": "",
        "list": false,
        "align": ""
      },
      {
        "type": "paragraph",
        "text": "Through ancient forests to the Rock Kingdom",
        "style": "",
        "list": false,
        "align": ""
      },
      {
        "type": "paragraph",
        "text": "Approx. travel time: 1.5–2 hours",
        "style": "",
        "list": false,
        "align": ""
      },
      {
        "type": "paragraph",
        "text": "Travel towards Sigiriya, stopping at the atmospheric Ritigala Buddhist Monastery and Nature Reserve.",
        "style": "",
        "list": false,
        "align": ""
      },
      {
        "type": "paragraph",
        "text": "Discover the heart of Sri Lanka’s Cultural Triangle, where ancient kingdoms, remarkable architecture and timeless traditions tell the story of a fascinating past. Sigiriya captivates visitors with its iconic Lion Rock fortress, dramatic scenery and ancient frescoes, while nearby Dambulla is renowned for its impressive cave temple complex, adorned with centuries-old Buddhist murals and statues. Surrounded by lush greenery, rural villages and scenic countryside, these destinations offer a memorable journey through the island’s rich history, spiritual heritage and extraordinary cultural treasures.",
        "style": "",
        "list": false,
        "align": ""
      },
      {
        "type": "paragraph",
        "text": "Things to do",
        "style": "",
        "list": false,
        "align": ""
      },
      {
        "type": "paragraph",
        "text": "Visit Ritigala Monastery & Nature Reserve",
        "style": "",
        "list": true,
        "align": ""
      },
      {
        "type": "paragraph",
        "text": "Explore the surrounding forest",
        "style": "",
        "list": true,
        "align": ""
      },
      {
        "type": "paragraph",
        "text": "Optional Pidurangala sunset",
        "style": "",
        "list": true,
        "align": ""
      },
      {
        "type": "paragraph",
        "text": "Handpicked Stay Options – Jetwing Vil Uyana| Water Garden Sigiriya|Aliya Resort & SPA|Heritance Kandalama",
        "style": "",
        "list": false,
        "align": ""
      },
      {
        "type": "paragraph",
        "text": "DAY 7 – SIGIRIYA",
        "style": "",
        "list": false,
        "align": ""
      },
      {
        "type": "paragraph",
        "text": "Conquer the Lion Rock",
        "style": "",
        "list": false,
        "align": ""
      },
      {
        "type": "paragraph",
        "text": "Today is dedicated to one of Sri Lanka's most iconic landmarks.",
        "style": "",
        "list": false,
        "align": ""
      },
      {
        "type": "paragraph",
        "text": "Climb the ancient Sigiriya Rock Fortress, rising dramatically above the surrounding gardens and forests.",
        "style": "",
        "list": false,
        "align": ""
      },
      {
        "type": "paragraph",
        "text": "Things to do",
        "style": "",
        "list": false,
        "align": ""
      },
      {
        "type": "paragraph",
        "text": "Climb Sigiriya Rock Fortress",
        "style": "",
        "list": true,
        "align": ""
      },
      {
        "type": "paragraph",
        "text": "Explore the ancient gardens",
        "style": "",
        "list": true,
        "align": ""
      },
      {
        "type": "paragraph",
        "text": "Discover the frescoes and historic remains",
        "style": "",
        "list": true,
        "align": ""
      },
      {
        "type": "paragraph",
        "text": "Take in panoramic views from the summit",
        "style": "",
        "list": true,
        "align": ""
      },
      {
        "type": "paragraph",
        "text": "Handpicked Stay Options – Jetwing Vil Uyana| Water Garden Sigiriya|Aliya Resort & SPA| Heritance Kandalama",
        "style": "",
        "list": false,
        "align": ""
      },
      {
        "type": "paragraph",
        "text": "DAY 8 – SIGIRIYA",
        "style": "",
        "list": false,
        "align": ""
      },
      {
        "type": "paragraph",
        "text": "Elephants, villages & the rhythm of rural Sri Lanka",
        "style": "",
        "list": false,
        "align": ""
      },
      {
        "type": "paragraph",
        "text": "Step away from the famous landmarks and into everyday rural life.",
        "style": "",
        "list": false,
        "align": ""
      },
      {
        "type": "paragraph",
        "text": "Enjoy a village experience combining a walk around a reservoir, a boat ride and a traditional bullock-cart journey before sitting down to an authentic Sri Lankan lunch.",
        "style": "",
        "list": false,
        "align": ""
      },
      {
        "type": "paragraph",
        "text": "Later, head out for an evening wildlife experience in Minneriya, Kaudulla or the Kalawewa area, depending on conditions and sightings.",
        "style": "",
        "list": false,
        "align": ""
      },
      {
        "type": "paragraph",
        "text": "Things to do",
        "style": "",
        "list": false,
        "align": ""
      },
      {
        "type": "paragraph",
        "text": "Sri Lankan village experience",
        "style": "",
        "list": true,
        "align": ""
      },
      {
        "type": "paragraph",
        "text": "Reservoir walk",
        "style": "",
        "list": true,
        "align": ""
      },
      {
        "type": "paragraph",
        "text": "Boat ride",
        "style": "",
        "list": true,
        "align": ""
      },
      {
        "type": "paragraph",
        "text": "Bullock cart ride",
        "style": "",
        "list": true,
        "align": ""
      },
      {
        "type": "paragraph",
        "text": "Authentic Sri Lankan lunch",
        "style": "",
        "list": true,
        "align": ""
      },
      {
        "type": "paragraph",
        "text": "Elephant safari at Minneriya / Kaudulla / Kalawewa",
        "style": "",
        "list": true,
        "align": ""
      },
      {
        "type": "paragraph",
        "text": "Kayaking in Thalkote Lake",
        "style": "",
        "list": true,
        "align": ""
      },
      {
        "type": "paragraph",
        "text": "Handpicked Stay Options – Jetwing Vil Uyana| Water Garden Sigiriya|Aliya Resort & SPA|Heritance Kandalama",
        "style": "",
        "list": false,
        "align": ""
      },
      {
        "type": "paragraph",
        "text": "DAY 9 – SIGIRIYA",
        "style": "",
        "list": false,
        "align": ""
      },
      {
        "type": "paragraph",
        "text": "A little magic above Dambulla",
        "style": "",
        "list": false,
        "align": ""
      },
      {
        "type": "paragraph",
        "text": "An early morning brings one of the journey's most memorable experiences.",
        "style": "",
        "list": false,
        "align": ""
      },
      {
        "type": "paragraph",
        "text": "Float above forests, lakes, villages and the surrounding countryside as the island slowly wakes beneath you.",
        "style": "",
        "list": false,
        "align": ""
      },
      {
        "type": "paragraph",
        "text": "Things to do",
        "style": "",
        "list": false,
        "align": ""
      },
      {
        "type": "paragraph",
        "text": "Hot-air balloon ride (Weather Dependent)",
        "style": "",
        "list": true,
        "align": ""
      },
      {
        "type": "paragraph",
        "text": "Scenic views over Dambulla–Kandalama",
        "style": "",
        "list": true,
        "align": ""
      },
      {
        "type": "paragraph",
        "text": "Relax and enjoy your final day in the Sigiriya region",
        "style": "",
        "list": true,
        "align": ""
      },
      {
        "type": "paragraph",
        "text": "Cycling in Sigiriya /Dambulla or Polonnaruwa",
        "style": "",
        "list": true,
        "align": ""
      },
      {
        "type": "paragraph",
        "text": "Handpicked Stay Options – Jetwing Vil Uyana| Water Garden Sigiriya|Aliya Resort & SPA|Heritance Kandalama",
        "style": "",
        "list": false,
        "align": ""
      },
      {
        "type": "paragraph",
        "text": "DAY 10 – SIGIRIYA | KANDY",
        "style": "",
        "list": false,
        "align": ""
      },
      {
        "type": "paragraph",
        "text": "Spices, temples & the hill capital",
        "style": "",
        "list": false,
        "align": ""
      },
      {
        "type": "paragraph",
        "text": "Approx. travel time: 2–2.5 hours",
        "style": "",
        "list": false,
        "align": ""
      },
      {
        "type": "paragraph",
        "text": "Travel towards Kandy through the cultural heartland of central Sri Lanka.",
        "style": "",
        "list": false,
        "align": ""
      },
      {
        "type": "paragraph",
        "text": "Nestled among mist-covered hills and lush tropical landscapes, Kandy is a captivating destination where Sri Lanka’s rich heritage and spiritual traditions come to life. As the island’s last royal capital, the city is home to the sacred Temple of the Tooth Relic, tranquil Kandy Lake and beautifully preserved cultural landmarks. Visitors can explore vibrant local markets, experience traditional Kandyan dance performances and discover the botanical wonders of nearby Peradeniya. Blending history, culture and natural beauty, Kandy offers an authentic glimpse into the island’s timeless traditions.",
        "style": "",
        "list": false,
        "align": ""
      },
      {
        "type": "paragraph",
        "text": "Things to do",
        "style": "",
        "list": false,
        "align": ""
      },
      {
        "type": "paragraph",
        "text": "Visit a traditional spice garden",
        "style": "",
        "list": true,
        "align": ""
      },
      {
        "type": "paragraph",
        "text": "Explore Nalanda Gedige",
        "style": "",
        "list": true,
        "align": ""
      },
      {
        "type": "paragraph",
        "text": "Discover Kandy",
        "style": "",
        "list": true,
        "align": ""
      },
      {
        "type": "paragraph",
        "text": "Visit the Temple of the Sacred Tooth Relic",
        "style": "",
        "list": true,
        "align": ""
      },
      {
        "type": "paragraph",
        "text": "Evening cultural show",
        "style": "",
        "list": true,
        "align": ""
      },
      {
        "type": "paragraph",
        "text": "Handpikced Stay Options – W15 Hanthana Estate|Adigar’s Manor|Jetwing Kandy Gallery|The Golden Crown Hotel",
        "style": "",
        "list": false,
        "align": ""
      },
      {
        "type": "paragraph",
        "text": "DAY 11 – KANDY",
        "style": "",
        "list": false,
        "align": ""
      },
      {
        "type": "paragraph",
        "text": "The royal city at your own pace",
        "style": "",
        "list": false,
        "align": ""
      },
      {
        "type": "paragraph",
        "text": "Spend a relaxed day discovering Kandy and its surroundings.",
        "style": "",
        "list": false,
        "align": ""
      },
      {
        "type": "paragraph",
        "text": "Explore the city, local markets and craft traditions before visiting the Royal Botanic Gardens of Peradeniya.",
        "style": "",
        "list": false,
        "align": ""
      },
      {
        "type": "paragraph",
        "text": "Things to do",
        "style": "",
        "list": false,
        "align": ""
      },
      {
        "type": "paragraph",
        "text": "Kandy city tour",
        "style": "",
        "list": true,
        "align": ""
      },
      {
        "type": "paragraph",
        "text": "Upper Lake drive",
        "style": "",
        "list": true,
        "align": ""
      },
      {
        "type": "paragraph",
        "text": "Local markets",
        "style": "",
        "list": true,
        "align": ""
      },
      {
        "type": "paragraph",
        "text": "Wood-carving workshops",
        "style": "",
        "list": true,
        "align": ""
      },
      {
        "type": "paragraph",
        "text": "Batik shops",
        "style": "",
        "list": true,
        "align": ""
      },
      {
        "type": "paragraph",
        "text": "Gem Museum",
        "style": "",
        "list": true,
        "align": ""
      },
      {
        "type": "paragraph",
        "text": "Peradeniya Botanical Gardens",
        "style": "",
        "list": true,
        "align": ""
      },
      {
        "type": "paragraph",
        "text": "Scenic walk around Kandy Lake",
        "style": "",
        "list": true,
        "align": ""
      },
      {
        "type": "paragraph",
        "text": "Handpicked Stay Options – W15 Hanthana Estate| Adigar’s Manor|Jetwing Kandy Gallery|The Golden Crown Hotel",
        "style": "",
        "list": false,
        "align": ""
      },
      {
        "type": "paragraph",
        "text": "DAY 12 – KANDY",
        "style": "",
        "list": false,
        "align": ""
      },
      {
        "type": "paragraph",
        "text": "Beyond the gardens – discover Kandy's hidden side",
        "style": "",
        "list": false,
        "align": ""
      },
      {
        "type": "paragraph",
        "text": "Today offers a choice of experiences, allowing you to explore the region according to your interests.",
        "style": "",
        "list": false,
        "align": ""
      },
      {
        "type": "paragraph",
        "text": "Things to do",
        "style": "",
        "list": false,
        "align": ""
      },
      {
        "type": "paragraph",
        "text": "Guided nature hikes",
        "style": "",
        "list": true,
        "align": ""
      },
      {
        "type": "paragraph",
        "text": "Birdwatching",
        "style": "",
        "list": true,
        "align": ""
      },
      {
        "type": "paragraph",
        "text": "Butterfly and dragonfly spotting",
        "style": "",
        "list": true,
        "align": ""
      },
      {
        "type": "paragraph",
        "text": "Cooking demonstration",
        "style": "",
        "list": true,
        "align": ""
      },
      {
        "type": "paragraph",
        "text": "Jewelry making workshop",
        "style": "",
        "list": true,
        "align": ""
      },
      {
        "type": "paragraph",
        "text": "Handpicked Stay Options – W15 Hanthana Estate| Adigar’s Manor |Jetwing Kandy Gallery|The Golden Crown Hotel",
        "style": "",
        "list": false,
        "align": ""
      },
      {
        "type": "paragraph",
        "text": "DAY 13 – KANDY | HATTON",
        "style": "",
        "list": false,
        "align": ""
      },
      {
        "type": "paragraph",
        "text": "Into Sri Lanka's tea country",
        "style": "",
        "list": false,
        "align": ""
      },
      {
        "type": "paragraph",
        "text": "Approx. travel time: 2.5–3.5 hours",
        "style": "",
        "list": false,
        "align": ""
      },
      {
        "type": "paragraph",
        "text": "Leave Kandy behind and climb into the cool, green hills of the central highlands.",
        "style": "",
        "list": false,
        "align": ""
      },
      {
        "type": "paragraph",
        "text": "The journey brings you to Castlereagh Reservoir, surrounded by mountains and tea plantations.",
        "style": "",
        "list": false,
        "align": ""
      },
      {
        "type": "paragraph",
        "text": "Settle into the peaceful world of Sri Lanka's tea country and enjoy the atmosphere of the historic tea estate bungalows.",
        "style": "",
        "list": false,
        "align": ""
      },
      {
        "type": "paragraph",
        "text": "Nestled amidst the emerald-green tea country of Sri Lanka’s central highlands, Hatton is a scenic mountain destination celebrated for its rolling tea plantations, cool climate and timeless colonial charm. The surrounding hills reveal sweeping landscapes of neatly manicured tea bushes, mist-covered valleys and tranquil reservoirs, offering a glimpse into the island’s renowned Ceylon tea heritage. Visitors can explore working tea estates and historic tea factories, enjoy the peaceful beauty of Castlereagh Reservoir and venture towards Adam’s Peak, an important pilgrimage site surrounded by forested mountains. With its refreshing highland atmosphere, picturesque scenery and rich plantation history, Hatton is an inviting retreat for nature lovers, tea enthusiasts and travellers seeking the serene beauty of Sri Lanka’s hill country.",
        "style": "",
        "list": false,
        "align": ""
      },
      {
        "type": "paragraph",
        "text": "Things to do",
        "style": "",
        "list": false,
        "align": ""
      },
      {
        "type": "paragraph",
        "text": "Scenic drive through the hill country",
        "style": "",
        "list": true,
        "align": ""
      },
      {
        "type": "paragraph",
        "text": "Visit Castlereagh Reservoir",
        "style": "",
        "list": true,
        "align": ""
      },
      {
        "type": "paragraph",
        "text": "Explore the tea region",
        "style": "",
        "list": true,
        "align": ""
      },
      {
        "type": "paragraph",
        "text": "Relax amidst the plantations",
        "style": "",
        "list": true,
        "align": ""
      },
      {
        "type": "paragraph",
        "text": "Handpicked Stay Options – Ceylon Tea Trails | Camillia Hills by Teardrop Hotels|Uga Haloowella",
        "style": "",
        "list": false,
        "align": ""
      },
      {
        "type": "paragraph",
        "text": "DAY 14 – HATTON",
        "style": "",
        "list": false,
        "align": ""
      },
      {
        "type": "paragraph",
        "text": "Life among the tea plantations",
        "style": "",
        "list": false,
        "align": ""
      },
      {
        "type": "paragraph",
        "text": "Wake up surrounded by the rolling green landscapes of Dunkeld Estate.( Ceylon Tea Trails/Camillia Hills by Teardrop Hotel",
        "style": "",
        "list": false,
        "align": ""
      },
      {
        "type": "paragraph",
        "text": "Today is about slowing down and experiencing life in the tea country, with time for tea, nature and the beautiful surroundings.",
        "style": "",
        "list": false,
        "align": ""
      },
      {
        "type": "paragraph",
        "text": "Things to do",
        "style": "",
        "list": false,
        "align": ""
      },
      {
        "type": "paragraph",
        "text": "Guided tea trail",
        "style": "",
        "list": true,
        "align": ""
      },
      {
        "type": "paragraph",
        "text": "Tea tasting",
        "style": "",
        "list": true,
        "align": ""
      },
      {
        "type": "paragraph",
        "text": "Kayaking",
        "style": "",
        "list": true,
        "align": ""
      },
      {
        "type": "paragraph",
        "text": "Enjoy the mountain and lake views",
        "style": "",
        "list": true,
        "align": ""
      },
      {
        "type": "paragraph",
        "text": "Relax and unwind at the exotic Tea Bungalow",
        "style": "",
        "list": true,
        "align": ""
      },
      {
        "type": "paragraph",
        "text": "Handpicked Stay Options – Ceylon Tea Trails | Camillia Hills by Teardrop Hotels|Uga Halloowella",
        "style": "",
        "list": false,
        "align": ""
      },
      {
        "type": "paragraph",
        "text": "DAY 15 – HATTON",
        "style": "",
        "list": false,
        "align": ""
      },
      {
        "type": "paragraph",
        "text": "A final day in the tea hills",
        "style": "",
        "list": false,
        "align": ""
      },
      {
        "type": "paragraph",
        "text": "Enjoy another leisurely day in the highlands, with opportunities to explore the estate or simply relax overlooking Castlereagh Reservoir.",
        "style": "",
        "list": false,
        "align": ""
      },
      {
        "type": "paragraph",
        "text": "Handpicked Stay Options – Ceylon Tea Trails | Camillia Hills by Teardrop Hotels|Uga Halloowella",
        "style": "",
        "list": false,
        "align": ""
      },
      {
        "type": "paragraph",
        "text": "DAY 16 – HATTON | ELLA",
        "style": "",
        "list": false,
        "align": ""
      },
      {
        "type": "paragraph",
        "text": "A train journey through the clouds",
        "style": "",
        "list": false,
        "align": ""
      },
      {
        "type": "paragraph",
        "text": "Approx. travel time: 3.5–4.5 hours",
        "style": "",
        "list": false,
        "align": ""
      },
      {
        "type": "paragraph",
        "text": "One of Sri Lanka's most memorable journeys awaits.",
        "style": "",
        "list": false,
        "align": ""
      },
      {
        "type": "paragraph",
        "text": "Board the train from Nanu Oya ( Hatton to Nanu Oya – 1 hour Road Drive) towards Ella and settle in for a spectacular ride through misty mountains, tea plantations and lush valleys.",
        "style": "",
        "list": false,
        "align": ""
      },
      {
        "type": "paragraph",
        "text": "Tucked away in Sri Lanka’s enchanting hill country, Ella is a picturesque mountain retreat celebrated for its breathtaking panoramas, lush tea plantations and laid-back village charm. Scenic hiking trails lead to iconic viewpoints such as Little Adam’s Peak and Ella Rock, while the famous Nine Arch Bridge showcases remarkable railway architecture amid emerald-green hills. Visitors can also discover cascading waterfalls, explore local cafés and enjoy the unforgettable experience of a scenic train journey through the misty highlands. With its blend of adventure, natural beauty and relaxed atmosphere, Ella is a favourite escape for nature lovers and explorers alike.",
        "style": "",
        "list": false,
        "align": ""
      },
      {
        "type": "paragraph",
        "text": "Things to do",
        "style": "",
        "list": false,
        "align": ""
      },
      {
        "type": "paragraph",
        "text": "Scenic train journey",
        "style": "",
        "list": true,
        "align": ""
      },
      {
        "type": "paragraph",
        "text": "Watch the landscapes unfold from the train",
        "style": "",
        "list": true,
        "align": ""
      },
      {
        "type": "paragraph",
        "text": "Explore the relaxed Ella hill-country town",
        "style": "",
        "list": true,
        "align": ""
      },
      {
        "type": "paragraph",
        "text": "Handpicked Stay Options – Nine Skies by Teardrop Hotels |98 Acres Resort & Spa| Uga Ghiri|New Burgh Ella|Living Heritage Koslanda|Wishing Tree Boutique Resort",
        "style": "",
        "list": false,
        "align": ""
      },
      {
        "type": "paragraph",
        "text": "Train timings are subject to ticket availability.",
        "style": "",
        "list": false,
        "align": ""
      },
      {
        "type": "paragraph",
        "text": "DAY 17 – ELLA",
        "style": "",
        "list": false,
        "align": ""
      },
      {
        "type": "paragraph",
        "text": "Bridges, peaks & waterfalls",
        "style": "",
        "list": false,
        "align": ""
      },
      {
        "type": "paragraph",
        "text": "Ella is surrounded by some of Sri Lanka's most recognizable mountain landscapes.",
        "style": "",
        "list": false,
        "align": ""
      },
      {
        "type": "paragraph",
        "text": "Spend the day discovering its viewpoints, temples, waterfalls and walking trails.",
        "style": "",
        "list": false,
        "align": ""
      },
      {
        "type": "paragraph",
        "text": "Things to do",
        "style": "",
        "list": false,
        "align": ""
      },
      {
        "type": "paragraph",
        "text": "Nine Arch Bridge",
        "style": "",
        "list": true,
        "align": ""
      },
      {
        "type": "paragraph",
        "text": "Little Adam's Peak",
        "style": "",
        "list": true,
        "align": ""
      },
      {
        "type": "paragraph",
        "text": "Ravana Falls",
        "style": "",
        "list": true,
        "align": ""
      },
      {
        "type": "paragraph",
        "text": "Dhowa Rock Temple",
        "style": "",
        "list": true,
        "align": ""
      },
      {
        "type": "paragraph",
        "text": "Nazareth Chapel",
        "style": "",
        "list": true,
        "align": ""
      },
      {
        "type": "paragraph",
        "text": "St Benedict's Monastery in Haputale",
        "style": "",
        "list": true,
        "align": ""
      },
      {
        "type": "paragraph",
        "text": "Explore Ella's surrounding countryside",
        "style": "",
        "list": true,
        "align": ""
      },
      {
        "type": "paragraph",
        "text": "Handpicked Stay Options – Nine Skies by Teardrop Hotels |98 Acres Resort & Spa| Uga Ghiri|New Burgh Ella|Living Heritage Koslanda|Wishing Tree Boutique Resort",
        "style": "",
        "list": false,
        "align": ""
      },
      {
        "type": "paragraph",
        "text": "DAY 18 – ELLA",
        "style": "",
        "list": false,
        "align": ""
      },
      {
        "type": "paragraph",
        "text": "Tea country from a different perspective",
        "style": "",
        "list": false,
        "align": ""
      },
      {
        "type": "paragraph",
        "text": "Continue exploring the highlands with a choice of scenic viewpoints and waterfall experiences.",
        "style": "",
        "list": false,
        "align": ""
      },
      {
        "type": "paragraph",
        "text": "Things to do",
        "style": "",
        "list": false,
        "align": ""
      },
      {
        "type": "paragraph",
        "text": "Lipton's Seat",
        "style": "",
        "list": true,
        "align": ""
      },
      {
        "type": "paragraph",
        "text": "Scenic Tuk Tuk ride through tea estates",
        "style": "",
        "list": true,
        "align": ""
      },
      {
        "type": "paragraph",
        "text": "Tea plantation walk",
        "style": "",
        "list": true,
        "align": ""
      },
      {
        "type": "paragraph",
        "text": "Diyaluma Waterfall",
        "style": "",
        "list": true,
        "align": ""
      },
      {
        "type": "paragraph",
        "text": "Enjoy the mountain scenery",
        "style": "",
        "list": true,
        "align": ""
      },
      {
        "type": "paragraph",
        "text": "Handpicked Stay Options – Nine Skies by Teardrop Hotels |98 Acres Resort & Spa| Uga Ghiri|New Burgh Ella|Living Heritage Koslanda|Wishing Tree Boutique Resort",
        "style": "",
        "list": false,
        "align": ""
      },
      {
        "type": "paragraph",
        "text": "DAY 19 – ELLA | YALA",
        "style": "",
        "list": false,
        "align": ""
      },
      {
        "type": "paragraph",
        "text": "From the mountains to the wild",
        "style": "",
        "list": false,
        "align": ""
      },
      {
        "type": "paragraph",
        "text": "Approx. travel time: 2.5–3.5 hours",
        "style": "",
        "list": false,
        "align": ""
      },
      {
        "type": "paragraph",
        "text": "The landscape changes dramatically as you descend from the highlands towards Yala. Sri Lanka's famous national park is home to an impressive variety of wildlife and is particularly renowned for its leopard sightings.",
        "style": "",
        "list": false,
        "align": ""
      },
      {
        "type": "paragraph",
        "text": "Yala is a captivating wilderness destination where untamed nature and unforgettable wildlife encounters take centre stage. Home to one of the world’s highest densities of leopards, Yala National Park offers thrilling safari experiences through a diverse landscape of open grasslands, dense scrub forests, rocky outcrops and tranquil lagoons. Along the way, visitors may encounter majestic elephants, sloth bears, crocodiles and an extraordinary variety of birdlife in their natural habitat. Beyond the excitement of the safari, Yala’s rugged landscapes and peaceful surroundings create a remarkable connection with nature, making it an essential stop for wildlife enthusiasts and adventurous travellers exploring Sri Lanka.",
        "style": "",
        "list": false,
        "align": ""
      },
      {
        "type": "paragraph",
        "text": "Things to do",
        "style": "",
        "list": false,
        "align": ""
      },
      {
        "type": "paragraph",
        "text": "Scenic journey from Ella to Yala",
        "style": "",
        "list": true,
        "align": ""
      },
      {
        "type": "paragraph",
        "text": "Arrive in the wilderness",
        "style": "",
        "list": true,
        "align": ""
      },
      {
        "type": "paragraph",
        "text": "Relax amidst nature",
        "style": "",
        "list": true,
        "align": ""
      },
      {
        "type": "paragraph",
        "text": "Handpicked Stay Options – Wild Coast Tented Lodge| Chena Huts| Cinnamon Wild Yala| Jetwing Yala|Hilton Yala| Tribe Yala|Kotiyagala Luxury Villas| Double Tree by Hilton Weerawila|The Warden’s House",
        "style": "",
        "list": false,
        "align": ""
      },
      {
        "type": "paragraph",
        "text": "DAY 20 – YALA",
        "style": "",
        "list": false,
        "align": ""
      },
      {
        "type": "paragraph",
        "text": "Into leopard country",
        "style": "",
        "list": false,
        "align": ""
      },
      {
        "type": "paragraph",
        "text": "Today is all about the wild.",
        "style": "",
        "list": false,
        "align": ""
      },
      {
        "type": "paragraph",
        "text": "Head into Yala National Park on safari, keeping watch for leopards, elephants, birds and the many other species that inhabit the park.",
        "style": "",
        "list": false,
        "align": ""
      },
      {
        "type": "paragraph",
        "text": "Things to do",
        "style": "",
        "list": false,
        "align": ""
      },
      {
        "type": "paragraph",
        "text": "Morning or evening safari",
        "style": "",
        "list": true,
        "align": ""
      },
      {
        "type": "paragraph",
        "text": "Wildlife spotting",
        "style": "",
        "list": true,
        "align": ""
      },
      {
        "type": "paragraph",
        "text": "Leopard sightings, subject to luck and conditions",
        "style": "",
        "list": true,
        "align": ""
      },
      {
        "type": "paragraph",
        "text": "Explore the natural surroundings",
        "style": "",
        "list": true,
        "align": ""
      },
      {
        "type": "paragraph",
        "text": "Handpicked Stay Options – Wild Coast Tented Lodge| Chena Huts| Cinnamon Wild Yala| Jetwing Yala|Hilton Yala| Tribe Yala|Kotiyagala Luxury Villas| Double Tree by Hilton Weerawila|The Warden’s House",
        "style": "",
        "list": false,
        "align": ""
      },
      {
        "type": "paragraph",
        "text": "DAY 21 – YALA",
        "style": "",
        "list": false,
        "align": ""
      },
      {
        "type": "paragraph",
        "text": "Ancient temples & wilderness",
        "style": "",
        "list": false,
        "align": ""
      },
      {
        "type": "paragraph",
        "text": "Balance another day in the wilderness with a visit to the ancient Sithulpawwa Temple.",
        "style": "",
        "list": false,
        "align": ""
      },
      {
        "type": "paragraph",
        "text": "There is also time to enjoy the sanctuary and surrounding nature.",
        "style": "",
        "list": false,
        "align": ""
      },
      {
        "type": "paragraph",
        "text": "Things to do",
        "style": "",
        "list": false,
        "align": ""
      },
      {
        "type": "paragraph",
        "text": "Safari experience",
        "style": "",
        "list": true,
        "align": ""
      },
      {
        "type": "paragraph",
        "text": "Visit Sithulpawwa Temple",
        "style": "",
        "list": true,
        "align": ""
      },
      {
        "type": "paragraph",
        "text": "Explore the sanctuary",
        "style": "",
        "list": true,
        "align": ""
      },
      {
        "type": "paragraph",
        "text": "Relax amidst the wilderness",
        "style": "",
        "list": true,
        "align": ""
      },
      {
        "type": "paragraph",
        "text": "Handpicked Stay Options – Wild Coast Tented Lodge| Chena Huts| Cinnamon Wild Yala| Jetwing Yala|Hilton Yala| Tribe Yala|Kotiyagala Luxury Villas| Double Tree by Hilton Weerawila|The Warden’s House",
        "style": "",
        "list": false,
        "align": ""
      },
      {
        "type": "paragraph",
        "text": "DAY 22 – YALA | TANGALLE",
        "style": "",
        "list": false,
        "align": ""
      },
      {
        "type": "paragraph",
        "text": "From the wild to the southern coast",
        "style": "",
        "list": false,
        "align": ""
      },
      {
        "type": "paragraph",
        "text": "Approx. travel time: 2–2.5 hours",
        "style": "",
        "list": false,
        "align": ""
      },
      {
        "type": "paragraph",
        "text": "Leave the wilderness behind and make your way towards Tangalle where golden beaches, swaying coconut palms and turquoise waters create a picture-perfect tropical escape. With its peaceful coves, traditional fishing villages and laid-back coastal charm, Tangalle invites you to slow down, soak in the natural beauty and experience the quieter side of Sri Lanka’s southern coast.",
        "style": "",
        "list": false,
        "align": ""
      },
      {
        "type": "paragraph",
        "text": "Things to do",
        "style": "",
        "list": false,
        "align": ""
      },
      {
        "type": "paragraph",
        "text": "Scenic drive towards the south coast",
        "style": "",
        "list": true,
        "align": ""
      },
      {
        "type": "paragraph",
        "text": "Discover Tangalle",
        "style": "",
        "list": true,
        "align": ""
      },
      {
        "type": "paragraph",
        "text": "Relax on the beach",
        "style": "",
        "list": true,
        "align": ""
      },
      {
        "type": "paragraph",
        "text": "Enjoy the coastal surroundings",
        "style": "",
        "list": true,
        "align": ""
      },
      {
        "type": "paragraph",
        "text": "Handpicked Stay Options – Amanwella| Uga Prava|Anantara Peace Haven Tangalle Resort|Taru Villas-Mawella |Coco Tangalle|The Last House|Maya Tangalle",
        "style": "",
        "list": false,
        "align": ""
      },
      {
        "type": "paragraph",
        "text": "DAY 23 – TANGALLE",
        "style": "",
        "list": false,
        "align": ""
      },
      {
        "type": "paragraph",
        "text": "Lagoons, birds & the southern coast",
        "style": "",
        "list": false,
        "align": ""
      },
      {
        "type": "paragraph",
        "text": "Discover another side of the southern coastline today, beginning with the wetlands of Kalamatiya.",
        "style": "",
        "list": false,
        "align": ""
      },
      {
        "type": "paragraph",
        "text": "Things to do",
        "style": "",
        "list": false,
        "align": ""
      },
      {
        "type": "paragraph",
        "text": "Kalamatiya Lagoon bird-watching boat ride",
        "style": "",
        "list": true,
        "align": ""
      },
      {
        "type": "paragraph",
        "text": "Hummana Blow Hole",
        "style": "",
        "list": true,
        "align": ""
      },
      {
        "type": "paragraph",
        "text": "Mulkirigala Temple",
        "style": "",
        "list": true,
        "align": ""
      },
      {
        "type": "paragraph",
        "text": "Kayaking in Rekawa",
        "style": "",
        "list": true,
        "align": ""
      },
      {
        "type": "paragraph",
        "text": "Relax by the beach",
        "style": "",
        "list": true,
        "align": ""
      },
      {
        "type": "paragraph",
        "text": "Handpicked Stay Options – Amanwella| Uga Prava|Anantara Peace Haven Tangalle Resort|Taru Villas-Mawella |Coco Tangalle|The Last House|Maya Tangalle",
        "style": "",
        "list": false,
        "align": ""
      },
      {
        "type": "paragraph",
        "text": "DAY 24 – TANGALLE",
        "style": "",
        "list": false,
        "align": ""
      },
      {
        "type": "paragraph",
        "text": "Turtles under the southern stars",
        "style": "",
        "list": false,
        "align": ""
      },
      {
        "type": "paragraph",
        "text": "Continue exploring the coast at a relaxed pace, with an opportunity to experience the remarkable turtle conservation work at Rekawa.",
        "style": "",
        "list": false,
        "align": ""
      },
      {
        "type": "paragraph",
        "text": "Things to do",
        "style": "",
        "list": false,
        "align": ""
      },
      {
        "type": "paragraph",
        "text": "Night-time turtle watching at Rekawa",
        "style": "",
        "list": true,
        "align": ""
      },
      {
        "type": "paragraph",
        "text": "Relax on the beach",
        "style": "",
        "list": true,
        "align": ""
      },
      {
        "type": "paragraph",
        "text": "Optional Bundala National Park",
        "style": "",
        "list": true,
        "align": ""
      },
      {
        "type": "paragraph",
        "text": "Optional Sinharaja Forest Reserve hike",
        "style": "",
        "list": true,
        "align": ""
      },
      {
        "type": "paragraph",
        "text": "Handpicked Stay Options – Amanwella| Uga Prava|Anantara Peace Haven Tangalle Resort|Taru Villas-Mawella |Coco Tangalle|The Last House|Maya Tangalle",
        "style": "",
        "list": false,
        "align": ""
      },
      {
        "type": "paragraph",
        "text": "DAY 25 – TANGALLE | GALLE",
        "style": "",
        "list": false,
        "align": ""
      },
      {
        "type": "paragraph",
        "text": "From golden beaches to a living fort",
        "style": "",
        "list": false,
        "align": ""
      },
      {
        "type": "paragraph",
        "text": "Approx. travel time: 1.5–2 hours",
        "style": "",
        "list": false,
        "align": ""
      },
      {
        "type": "paragraph",
        "text": "Travel west along the southern coast towards Galle.",
        "style": "",
        "list": false,
        "align": ""
      },
      {
        "type": "paragraph",
        "text": "Galle is a charming coastal destination where centuries of history meet the relaxed elegance of seaside living. At its heart lies the UNESCO-listed Galle Fort, a beautifully preserved historic quarter of cobblestone streets, colonial-era architecture, old churches and charming Dutch-style buildings. Visitors can wander through boutique shops, art galleries and atmospheric cafés, stroll along the fort’s ocean-facing ramparts and enjoy spectacular sunset views over the Indian Ocean. With its rich maritime heritage, vibrant local culture and laid-back coastal charm, Galle offers a memorable blend of history, discovery and seaside romance.",
        "style": "",
        "list": false,
        "align": ""
      },
      {
        "type": "paragraph",
        "text": "Things to do",
        "style": "",
        "list": false,
        "align": ""
      },
      {
        "type": "paragraph",
        "text": "Scenic coastal drive",
        "style": "",
        "list": true,
        "align": ""
      },
      {
        "type": "paragraph",
        "text": "Explore Dutch Galle Fort",
        "style": "",
        "list": true,
        "align": ""
      },
      {
        "type": "paragraph",
        "text": "Walk through the historic streets",
        "style": "",
        "list": true,
        "align": ""
      },
      {
        "type": "paragraph",
        "text": "Discover colonial architecture",
        "style": "",
        "list": true,
        "align": ""
      },
      {
        "type": "paragraph",
        "text": "Visit the fort ramparts and lighthouse area",
        "style": "",
        "list": true,
        "align": ""
      },
      {
        "type": "paragraph",
        "text": "Handpicked Stay Options – Amangalla|Taru Villas Rampart Street|The Fort Bazar|The Postcard Galle |The Merchant",
        "style": "",
        "list": false,
        "align": ""
      },
      {
        "type": "paragraph",
        "text": "DAY 26 – GALLE",
        "style": "",
        "list": false,
        "align": ""
      },
      {
        "type": "paragraph",
        "text": "Stories from the southern coast",
        "style": "",
        "list": false,
        "align": ""
      },
      {
        "type": "paragraph",
        "text": "Take a slower day around Galle, exploring some of the cultural and coastal highlights beyond the fort.",
        "style": "",
        "list": false,
        "align": ""
      },
      {
        "type": "paragraph",
        "text": "Things to do",
        "style": "",
        "list": false,
        "align": ""
      },
      {
        "type": "paragraph",
        "text": "Rumassala Japanese Peace Pagoda",
        "style": "",
        "list": true,
        "align": ""
      },
      {
        "type": "paragraph",
        "text": "Martin Wickramasinghe Museum",
        "style": "",
        "list": true,
        "align": ""
      },
      {
        "type": "paragraph",
        "text": "Explore Galle and its surroundings",
        "style": "",
        "list": true,
        "align": ""
      },
      {
        "type": "paragraph",
        "text": "Relax and enjoy the coastal atmosphere",
        "style": "",
        "list": true,
        "align": ""
      },
      {
        "type": "paragraph",
        "text": "Visit the largest Traditional Handloom Factory in the South",
        "style": "",
        "list": true,
        "align": ""
      },
      {
        "type": "paragraph",
        "text": "Handpicked Stay Options – Amangalla|Taru Villas Rampart Street|The Fort Bazar|The Postcard Galle |The Merchant",
        "style": "",
        "list": false,
        "align": ""
      },
      {
        "type": "paragraph",
        "text": "DAY 27 – GALLE | WELIGAMA",
        "style": "",
        "list": false,
        "align": ""
      },
      {
        "type": "paragraph",
        "text": "To the palm-fringed south coast",
        "style": "",
        "list": false,
        "align": ""
      },
      {
        "type": "paragraph",
        "text": "Approx. travel time: 45 minutes–1 hour",
        "style": "",
        "list": false,
        "align": ""
      },
      {
        "type": "paragraph",
        "text": "Continuing along the coast to Weligama, a beautiful crescent-shaped bay known for its golden sands and turquoise waters.",
        "style": "",
        "list": false,
        "align": ""
      },
      {
        "type": "paragraph",
        "text": "Weligama is a vibrant southern coastal town renowned for surfing, golden beaches, and laid-back coastal living. Combining adventure and tropical charm, it has become a favourite destination among surfers and beach lovers. Its sweeping bay, gentle waves, and welcoming seaside atmosphere make it an ideal spot for both beginners eager to try surfing and seasoned wave riders. Beyond the beach, discover charming cafés, fresh seafood, colourful fishing boats, and the unique sight of traditional stilt fishermen along the coast. With its relaxed rhythm, beautiful ocean views, and captivating blend of local culture and modern beach life, Weligama invites you to slow down and embrace the easygoing spirit of Sri Lanka’s southern shores.",
        "style": "",
        "list": false,
        "align": ""
      },
      {
        "type": "paragraph",
        "text": "Things to do",
        "style": "",
        "list": false,
        "align": ""
      },
      {
        "type": "paragraph",
        "text": "Scenic coastal journey",
        "style": "",
        "list": true,
        "align": ""
      },
      {
        "type": "paragraph",
        "text": "Explore Weligama Bay",
        "style": "",
        "list": true,
        "align": ""
      },
      {
        "type": "paragraph",
        "text": "Relax on the beach",
        "style": "",
        "list": true,
        "align": ""
      },
      {
        "type": "paragraph",
        "text": "Enjoy the southern coastline",
        "style": "",
        "list": true,
        "align": ""
      },
      {
        "type": "paragraph",
        "text": "Handpicked Stay Options – Cape Weligama Resort| The Six Midigama| Malabar Hill| Weligama Bay Marriot Resort|Eraliya Villas",
        "style": "",
        "list": false,
        "align": ""
      },
      {
        "type": "paragraph",
        "text": "DAY 28 – WELIGAMA",
        "style": "",
        "list": false,
        "align": ""
      },
      {
        "type": "paragraph",
        "text": "Whales, dolphins & the Southern Ocean",
        "style": "",
        "list": false,
        "align": ""
      },
      {
        "type": "paragraph",
        "text": "Rise early and head to Mirissa Harbour for a boat journey into the Indian Ocean.",
        "style": "",
        "list": false,
        "align": ""
      },
      {
        "type": "paragraph",
        "text": "The southern coast is one of Sri Lanka's most popular areas for whale and dolphin watching during the season.",
        "style": "",
        "list": false,
        "align": ""
      },
      {
        "type": "paragraph",
        "text": "Things to do",
        "style": "",
        "list": false,
        "align": ""
      },
      {
        "type": "paragraph",
        "text": "Private whale & dolphin watching boat",
        "style": "",
        "list": true,
        "align": ""
      },
      {
        "type": "paragraph",
        "text": "Traditional stilt fishing photography",
        "style": "",
        "list": true,
        "align": ""
      },
      {
        "type": "paragraph",
        "text": "Visit a turtle hatchery",
        "style": "",
        "list": true,
        "align": ""
      },
      {
        "type": "paragraph",
        "text": "Relax by the coast",
        "style": "",
        "list": true,
        "align": ""
      },
      {
        "type": "paragraph",
        "text": "Handpicked Stay Options – Cape Weligama Resort| The Six Midigama| Malabar Hill| Weligama Bay Marriot Resort|E raliya Villas",
        "style": "",
        "list": false,
        "align": ""
      },
      {
        "type": "paragraph",
        "text": "DAY 29 – WELIGAMA| COLOMBO",
        "style": "",
        "list": false,
        "align": ""
      },
      {
        "type": "paragraph",
        "text": "A final taste of Sri Lanka",
        "style": "",
        "list": false,
        "align": ""
      },
      {
        "type": "paragraph",
        "text": "Approx. travel time: 2–3 hours",
        "style": "",
        "list": false,
        "align": ""
      },
      {
        "type": "paragraph",
        "text": "Your final day takes you from the southern coast to Colombo, Sri Lanka's vibrant commercial capital.",
        "style": "",
        "list": false,
        "align": ""
      },
      {
        "type": "paragraph",
        "text": "Colombo is a captivating blend of colonial heritage, vibrant city life and modern sophistication, offering a fascinating glimpse into Sri Lanka’s past and present. From the historic charm of Fort and the colourful streets of Pettah to the oceanfront promenade of Galle Face Green and the serene beauty of Gangaramaya Temple, the city invites visitors to discover its many contrasts. With stylish hotels, diverse culinary experiences, bustling markets, boutique shopping and lively nightlife.",
        "style": "",
        "list": false,
        "align": ""
      },
      {
        "type": "paragraph",
        "text": "Enjoy a city tour before a farewell dinner, bringing your Magical Sri Lanka journey to a memorable close.",
        "style": "",
        "list": false,
        "align": ""
      },
      {
        "type": "paragraph",
        "text": "Things to do",
        "style": "",
        "list": false,
        "align": ""
      },
      {
        "type": "paragraph",
        "text": "Colombo city tour by Jeep",
        "style": "",
        "list": true,
        "align": ""
      },
      {
        "type": "paragraph",
        "text": "Farewell dinner",
        "style": "",
        "list": true,
        "align": ""
      },
      {
        "type": "paragraph",
        "text": "Handpicked Stay Options – Ishq Colombo|Aathma Colombo House|Maniumpathy| Cinnamon Life City of Dreams",
        "style": "",
        "list": false,
        "align": ""
      },
      {
        "type": "paragraph",
        "text": "DAY 30 – COLOMBO | AIRPORT",
        "style": "",
        "list": false,
        "align": ""
      },
      {
        "type": "paragraph",
        "text": "Approx. travel time: 45 minutes–1.5 hours",
        "style": "",
        "list": false,
        "align": ""
      },
      {
        "type": "paragraph",
        "text": "After breakfast, it's time to bid farewell to the beautiful island of Sri Lanka. Your Magical Paradise chauffeur will transfer you comfortably to Bandaranaike International Airport, carrying unforgettable memories of ancient kingdoms, misty mountains, thrilling safaris and sun-kissed beaches.\nBottom of Form",
        "style": "",
        "list": false,
        "align": ""
      }
    ]
  },
  {
    "id": "5-days-of-romance-in-paradise",
    "name": "5 Days of Romance in Paradise",
    "sourceFile": "5 Days of Romance in Paradise.docx",
    "title": "5 DAYS OF ROMANCE IN PARADISE -5 Days | 4 Nights",
    "image": "/8de9dae7-2ef0-4497-8b69-866058baec8a.jpg",
    "blocks": [
      {
        "type": "paragraph",
        "text": "5 DAYS OF ROMANCE IN PARADISE -5 Days | 4 Nights",
        "style": "",
        "list": false,
        "align": "center"
      },
      {
        "type": "paragraph",
        "text": "A Little City Charm, a Little Mountain Magic & Love by the Ocean",
        "style": "",
        "list": false,
        "align": ""
      },
      {
        "type": "paragraph",
        "text": "Five days of Sri Lankan romance, taking you from bustling city of Colombo to the misty hills of Kandy and finally to the golden shores of the south.",
        "style": "",
        "list": false,
        "align": ""
      },
      {
        "type": "paragraph",
        "text": "Discover temples and gardens, wander through colonial streets, share beautiful meals, slow down by the ocean and leave space for those little moments that make travelling together special.",
        "style": "",
        "list": false,
        "align": ""
      },
      {
        "type": "paragraph",
        "text": "DAY 1 — AIRPORT| COLOMBO",
        "style": "",
        "list": false,
        "align": ""
      },
      {
        "type": "paragraph",
        "text": "Where your story begins",
        "style": "",
        "list": false,
        "align": ""
      },
      {
        "type": "paragraph",
        "text": "Approx. travel time: 45 minutes–1.5 hours",
        "style": "",
        "list": false,
        "align": ""
      },
      {
        "type": "paragraph",
        "text": "Arrive in Sri Lanka and begin your romantic escape in Colombo, where modern city life meets colonial charm, ocean breezes and tropical surroundings.",
        "style": "",
        "list": false,
        "align": ""
      },
      {
        "type": "paragraph",
        "text": "Colombo is a captivating blend of colonial heritage, vibrant city life and modern sophistication, offering a fascinating glimpse into Sri Lanka’s past and present. From the historic charm of Fort and the colourful streets of Pettah to the oceanfront promenade of Galle Face Green and the serene beauty of Gangaramaya Temple, the city invites visitors to discover its many contrasts.",
        "style": "",
        "list": false,
        "align": ""
      },
      {
        "type": "paragraph",
        "text": "With stylish hotels, diverse culinary experiences, bustling markets, boutique shopping and lively nightlife, Colombo is an ideal introduction to the island’s culture, character and contemporary lifestyle.",
        "style": "",
        "list": false,
        "align": ""
      },
      {
        "type": "paragraph",
        "text": "Things to do",
        "style": "",
        "list": false,
        "align": ""
      },
      {
        "type": "paragraph",
        "text": "Explore Colombo's highlights",
        "style": "",
        "list": true,
        "align": ""
      },
      {
        "type": "paragraph",
        "text": "Galle Face Green Sunset",
        "style": "",
        "list": true,
        "align": ""
      },
      {
        "type": "paragraph",
        "text": "Romantic dinner overlooking the Indian Ocean",
        "style": "",
        "list": true,
        "align": ""
      },
      {
        "type": "paragraph",
        "text": "Handpicked Stay Options – City of Dreams| The Paradise Road Tintagel Colombo|Galle Face Hotel| ISHQ Villa Colombo|Aatham Colombo House|Granbell Hotel",
        "style": "",
        "list": false,
        "align": ""
      },
      {
        "type": "paragraph",
        "text": "DAY 2 — COLOMBO | KANDY",
        "style": "",
        "list": false,
        "align": ""
      },
      {
        "type": "paragraph",
        "text": "From city lights to misty hills",
        "style": "",
        "list": false,
        "align": ""
      },
      {
        "type": "paragraph",
        "text": "Approx. travel time: 3–4 hours",
        "style": "",
        "list": false,
        "align": ""
      },
      {
        "type": "paragraph",
        "text": "Leave Colombo behind and journey into Sri Lanka's lush interior. As the landscape changes from bustling city streets to green mountains, your romantic escape takes on a completely different mood.",
        "style": "",
        "list": false,
        "align": ""
      },
      {
        "type": "paragraph",
        "text": "Nestled among mist-covered hills and lush tropical landscapes, Kandy is a captivating destination where Sri Lanka’s rich heritage and spiritual traditions come to life. As the island’s last royal capital, the city is home to the sacred Temple of the Tooth Relic, tranquil Kandy Lake and beautifully preserved cultural landmarks. Visitors can explore vibrant local markets, experience traditional Kandyan dance performances and discover the botanical wonders of nearby Peradeniya. Blending history, culture and natural beauty, Kandy offers an authentic glimpse into the island’s timeless traditions.",
        "style": "",
        "list": false,
        "align": ""
      },
      {
        "type": "paragraph",
        "text": "Things to do",
        "style": "",
        "list": false,
        "align": ""
      },
      {
        "type": "paragraph",
        "text": "Scenic journey to Kandy",
        "style": "",
        "list": true,
        "align": ""
      },
      {
        "type": "paragraph",
        "text": "Visit the Temple of the Sacred Tooth Relic",
        "style": "",
        "list": true,
        "align": ""
      },
      {
        "type": "paragraph",
        "text": "Walk around Kandy Lake",
        "style": "",
        "list": true,
        "align": ""
      },
      {
        "type": "paragraph",
        "text": "Explore the Royal Botanical Gardens",
        "style": "",
        "list": true,
        "align": ""
      },
      {
        "type": "paragraph",
        "text": "Enjoy a romantic evening overlooking the hills",
        "style": "",
        "list": true,
        "align": ""
      },
      {
        "type": "paragraph",
        "text": "Handpicked Stay Options — W15 Hanthana|Taru Villas Kandy|Adigars Manor|Jetwing Kandy Gallery|Green Acres Leisure Resort|TheRadh Hotel",
        "style": "",
        "list": false,
        "align": ""
      },
      {
        "type": "paragraph",
        "text": "DAY 3 — KANDY | GALLE",
        "style": "",
        "list": false,
        "align": ""
      },
      {
        "type": "paragraph",
        "text": "From the mountains to the ocean",
        "style": "",
        "list": false,
        "align": ""
      },
      {
        "type": "paragraph",
        "text": "Approx. travel time: 4–5 hours",
        "style": "",
        "list": false,
        "align": ""
      },
      {
        "type": "paragraph",
        "text": "Today, journey south through Sri Lanka's changing landscapes before arriving at the historic coastal city of Galle.",
        "style": "",
        "list": false,
        "align": ""
      },
      {
        "type": "paragraph",
        "text": "Galle is a charming coastal destination where centuries of history meet the relaxed elegance of seaside living. At its heart lies the UNESCO-listed Galle Fort, a beautifully preserved historic quarter of cobblestone streets, colonial-era architecture, old churches and charming Dutch-style buildings. Visitors can wander through boutique shops, art galleries and atmospheric cafés, stroll along the fort’s ocean-facing ramparts and enjoy spectacular sunset views over the Indian Ocean. With its rich maritime heritage, vibrant local culture and laid-back coastal charm, Galle offers a memorable blend of history, discovery and seaside romance.",
        "style": "",
        "list": false,
        "align": ""
      },
      {
        "type": "paragraph",
        "text": "Things to do",
        "style": "",
        "list": false,
        "align": ""
      },
      {
        "type": "paragraph",
        "text": "Scenic drive through the countryside",
        "style": "",
        "list": true,
        "align": ""
      },
      {
        "type": "paragraph",
        "text": "Optional tea experience",
        "style": "",
        "list": true,
        "align": ""
      },
      {
        "type": "paragraph",
        "text": "Explore Galle Dutch Fort",
        "style": "",
        "list": true,
        "align": ""
      },
      {
        "type": "paragraph",
        "text": "Discover the fort's boutiques and cafés",
        "style": "",
        "list": true,
        "align": ""
      },
      {
        "type": "paragraph",
        "text": "Sunset walk along the ramparts",
        "style": "",
        "list": true,
        "align": ""
      },
      {
        "type": "paragraph",
        "text": "Continue to your South Coast retreat",
        "style": "",
        "list": true,
        "align": ""
      },
      {
        "type": "paragraph",
        "text": "Handpicked Stay Options - The Fort Bazaar by Teardrop Hotels| Galle Fort Hotel| Taru Villas Rampart Street|Jetwing Lighthouse| Raddison Collection Resort & Spa",
        "style": "",
        "list": false,
        "align": ""
      },
      {
        "type": "paragraph",
        "text": "DAY 4 — GALLE |BENTOTA",
        "style": "",
        "list": false,
        "align": ""
      },
      {
        "type": "paragraph",
        "text": "A day made entirely for two",
        "style": "",
        "list": false,
        "align": ""
      },
      {
        "type": "paragraph",
        "text": "Approx. travel time: 1.5–2 hours",
        "style": "",
        "list": false,
        "align": ""
      },
      {
        "type": "paragraph",
        "text": "No rushing. No schedules. Just time together.",
        "style": "",
        "list": false,
        "align": ""
      },
      {
        "type": "paragraph",
        "text": "Spend your penultimate day enjoying the tropical beauty of Sri Lanka's southern coast, with time for relaxation, romance and experiences you can share together.",
        "style": "",
        "list": false,
        "align": ""
      },
      {
        "type": "paragraph",
        "text": "Bentota is a tropical coastal retreat renowned for its golden sandy beaches, swaying coconut palms and inviting Indian Ocean waters. Offering the perfect balance of relaxation and adventure, this popular beach destination is ideal for sun-soaked days, refreshing swims and exciting water sports. The scenic Bentota River adds another dimension to the experience, with boat safaris through mangrove-lined waterways revealing fascinating birdlife and lush natural surroundings. From indulgent beachfront resorts and rejuvenating Ayurvedic wellness experiences to leisurely river cruises and beautiful coastal sunsets, Bentota captures the essence of a tropical Sri Lankan escape",
        "style": "",
        "list": false,
        "align": ""
      },
      {
        "type": "paragraph",
        "text": "Things to do",
        "style": "",
        "list": false,
        "align": ""
      },
      {
        "type": "paragraph",
        "text": "Leisurely beach morning",
        "style": "",
        "list": true,
        "align": ""
      },
      {
        "type": "paragraph",
        "text": "Couple's spa treatment",
        "style": "",
        "list": true,
        "align": ""
      },
      {
        "type": "paragraph",
        "text": "Private Madu River cruise",
        "style": "",
        "list": true,
        "align": ""
      },
      {
        "type": "paragraph",
        "text": "Explore the southern coastline",
        "style": "",
        "list": true,
        "align": ""
      },
      {
        "type": "paragraph",
        "text": "Sunset by the Indian Ocean",
        "style": "",
        "list": true,
        "align": ""
      },
      {
        "type": "paragraph",
        "text": "Private romantic dinner for two",
        "style": "",
        "list": true,
        "align": ""
      },
      {
        "type": "paragraph",
        "text": "Handpicked Stay Options – Lunuganga by Teardrop Hotels|Jetwing Saman Villas|The Muse| Taru Villas - The Long House |The Eden Beruwala|Cinnamon Bentota Beach",
        "style": "",
        "list": false,
        "align": ""
      },
      {
        "type": "paragraph",
        "text": "DAY 5 — BENTOTA |AIRPORT",
        "style": "",
        "list": false,
        "align": ""
      },
      {
        "type": "paragraph",
        "text": "Until your next adventure together",
        "style": "",
        "list": false,
        "align": ""
      },
      {
        "type": "paragraph",
        "text": "Approx. travel time: 2–3 hours",
        "style": "",
        "list": false,
        "align": ""
      },
      {
        "type": "paragraph",
        "text": "Wake up to one final tropical morning and savour breakfast together before your private transfer to the airport.",
        "style": "",
        "list": false,
        "align": ""
      },
      {
        "type": "paragraph",
        "text": "Take one last walk along the beach, capture those final photographs and leave Sri Lanka with memories made especially for two.",
        "style": "",
        "list": false,
        "align": ""
      },
      {
        "type": "paragraph",
        "text": "5 days. 4 nights. Countless moments to remember.",
        "style": "",
        "list": false,
        "align": ""
      },
      {
        "type": "paragraph",
        "text": "Romance may have brought you to Sri Lanka — but the memories will bring you back.",
        "style": "",
        "list": false,
        "align": ""
      }
    ]
  },
  {
    "id": "an-enchanted-luxury-island-honeymoon",
    "name": "An Enchanted Luxury Island Honeymoon",
    "sourceFile": "An Enchanted Luxury Island Honeymoon.docx",
    "title": "An Enchanted Luxury Island Honeymoon 11Days|10Nights",
    "image": "/8de9dae7-2ef0-4497-8b69-866058baec8a.jpg",
    "blocks": [
      {
        "type": "paragraph",
        "text": "An Enchanted Luxury Island Honeymoon 11Days|10Nights",
        "style": "",
        "list": false,
        "align": "center"
      },
      {
        "type": "paragraph",
        "text": "Where love meets the magic of Sri Lanka",
        "style": "",
        "list": false,
        "align": ""
      },
      {
        "type": "paragraph",
        "text": "From a private-feeling arrival in Negombo to a spectacular Cinnamon Air flight over Sri Lanka’s lush heartland, from a hot air balloon floating above cultural triangle to kayaking across a tranquil Lane, then onward by scenic train through the misty tea country before ending beside the Indian Ocean- This is Sri Lanka experienced slowly, beautifully and romantically.",
        "style": "",
        "list": false,
        "align": ""
      },
      {
        "type": "paragraph",
        "text": "DAY 1 — ARRIVE | NEGOMBO",
        "style": "",
        "list": false,
        "align": ""
      },
      {
        "type": "paragraph",
        "text": "Where the honeymoon begins",
        "style": "",
        "list": false,
        "align": ""
      },
      {
        "type": "paragraph",
        "text": "Approx. travel time: 20–40 minutes",
        "style": "",
        "list": false,
        "align": ""
      },
      {
        "type": "paragraph",
        "text": "Meet your Magical Paradise journey host on arrival and transfer privately to your luxury resort in Negombo. After your international journey, there is no rushing into sightseeing — just time to settle in, enjoy your surroundings and begin your honeymoon together.",
        "style": "",
        "list": false,
        "align": ""
      },
      {
        "type": "paragraph",
        "text": "Located close to Sri Lanka’s international airport, Negombo is a lively coastal town offering beaches, seafood culture and colonial influences. It serves as both a relaxing introduction and a memorable farewell to Sri Lanka.",
        "style": "",
        "list": false,
        "align": ""
      },
      {
        "type": "paragraph",
        "text": "Things to do",
        "style": "",
        "list": false,
        "align": ""
      },
      {
        "type": "paragraph",
        "text": "Private airport welcome & transfer",
        "style": "",
        "list": true,
        "align": ""
      },
      {
        "type": "paragraph",
        "text": "Check in to your luxury lagoon retreat",
        "style": "",
        "list": true,
        "align": ""
      },
      {
        "type": "paragraph",
        "text": "Relax by the pool / lagoon",
        "style": "",
        "list": true,
        "align": ""
      },
      {
        "type": "paragraph",
        "text": "Sunset drinks for two",
        "style": "",
        "list": true,
        "align": ""
      },
      {
        "type": "paragraph",
        "text": "Romantic dinner at the resort",
        "style": "",
        "list": true,
        "align": ""
      },
      {
        "type": "paragraph",
        "text": "Handpicked Stay Options – Walawwa by Teardrop Hotels|Uga Riva|Kirindi Paddy Isle",
        "style": "",
        "list": false,
        "align": ""
      },
      {
        "type": "paragraph",
        "text": "DAY 2 — NEGOMBO | SIGIRIYA",
        "style": "",
        "list": false,
        "align": ""
      },
      {
        "type": "paragraph",
        "text": "Take to the skies",
        "style": "",
        "list": false,
        "align": ""
      },
      {
        "type": "paragraph",
        "text": "Approx. travel time: 3.5–4.5 hours",
        "style": "",
        "list": false,
        "align": ""
      },
      {
        "type": "paragraph",
        "text": "Pls add a similar couple image air taxi ride as this is one of the  highlights of this tour package",
        "style": "",
        "list": false,
        "align": ""
      },
      {
        "type": "paragraph",
        "text": "The road is replaced by the sky today.",
        "style": "",
        "list": false,
        "align": ""
      },
      {
        "type": "paragraph",
        "text": "After breakfast, transfer to Bandaranaike International Airport for your Cinnamon Air flight to Sigiriya.",
        "style": "",
        "list": false,
        "align": ""
      },
      {
        "type": "paragraph",
        "text": "The scheduled Colombo–Sigiriya flight takes around 30 minutes, offering an aerial perspective over Sri Lanka's green landscapes and the Cultural Triangle.",
        "style": "",
        "list": false,
        "align": ""
      },
      {
        "type": "paragraph",
        "text": "On arrival, your private chauffeur will meet you and take you to your secluded luxury retreat.",
        "style": "",
        "list": false,
        "align": ""
      },
      {
        "type": "paragraph",
        "text": "Sigiriya - Discover the heart of Sri Lanka’s Cultural Triangle, where ancient kingdoms, remarkable architecture and timeless traditions tell the story of a fascinating past. Sigiriya captivates visitors with its iconic Lion Rock fortress, dramatic scenery and ancient frescoes, while nearby Dambulla is renowned for its impressive cave temple complex, adorned with centuries-old Buddhist murals and statues. Surrounded by lush greenery, rural villages and scenic countryside, these destinations offer a memorable journey through the island’s rich history, spiritual heritage and extraordinary cultural treasures.",
        "style": "",
        "list": false,
        "align": ""
      },
      {
        "type": "paragraph",
        "text": "Things to do",
        "style": "",
        "list": false,
        "align": ""
      },
      {
        "type": "paragraph",
        "text": "Cinnamon Air flight Colombo/BIA → Sigiriya",
        "style": "",
        "list": true,
        "align": ""
      },
      {
        "type": "paragraph",
        "text": "Check-in to a luxury resort",
        "style": "",
        "list": true,
        "align": ""
      },
      {
        "type": "paragraph",
        "text": "Explore the beautiful wetlands around the property",
        "style": "",
        "list": true,
        "align": ""
      },
      {
        "type": "paragraph",
        "text": "Private romantic dinner",
        "style": "",
        "list": true,
        "align": ""
      },
      {
        "type": "paragraph",
        "text": "Handpicked Stay Options – Jetwing Vil Uyana|Water Garden Sigiriya|Aliya Resort & Spa|Uga Ulagalla",
        "style": "",
        "list": false,
        "align": ""
      },
      {
        "type": "paragraph",
        "text": "DAY 3 — SIGIRIYA",
        "style": "",
        "list": false,
        "align": ""
      },
      {
        "type": "paragraph",
        "text": "Above the jungle, across the lake",
        "style": "",
        "list": false,
        "align": ""
      },
      {
        "type": "paragraph",
        "text": "Wake before the island does.",
        "style": "",
        "list": false,
        "align": ""
      },
      {
        "type": "paragraph",
        "text": "Today begins with one of the most magical experiences of the honeymoon — a hot-air balloon flight over the Cultural Triangle.",
        "style": "",
        "list": false,
        "align": ""
      },
      {
        "type": "paragraph",
        "text": "As the sun rises, watch ancient forests, lakes, villages and the legendary Sigiriya landscape unfold beneath you.",
        "style": "",
        "list": false,
        "align": ""
      },
      {
        "type": "paragraph",
        "text": "After returning to earth, enjoy a relaxed breakfast before heading onto Thalkote Lake.",
        "style": "",
        "list": false,
        "align": ""
      },
      {
        "type": "paragraph",
        "text": "Things to do",
        "style": "",
        "list": false,
        "align": ""
      },
      {
        "type": "paragraph",
        "text": "Private/priority hot-air balloon experience",
        "style": "",
        "list": true,
        "align": ""
      },
      {
        "type": "paragraph",
        "text": "Sunrise views over the Cultural Triangle",
        "style": "",
        "list": true,
        "align": ""
      },
      {
        "type": "paragraph",
        "text": "Champagne / celebratory refreshments after the flight",
        "style": "",
        "list": true,
        "align": ""
      },
      {
        "type": "paragraph",
        "text": "Leisurely breakfast",
        "style": "",
        "list": true,
        "align": ""
      },
      {
        "type": "paragraph",
        "text": "Kayaking on Thalkote Lake",
        "style": "",
        "list": true,
        "align": ""
      },
      {
        "type": "paragraph",
        "text": "Village and countryside scenery",
        "style": "",
        "list": true,
        "align": ""
      },
      {
        "type": "paragraph",
        "text": "Spa treatment",
        "style": "",
        "list": true,
        "align": ""
      },
      {
        "type": "paragraph",
        "text": "Romantic evening at the resort",
        "style": "",
        "list": true,
        "align": ""
      },
      {
        "type": "paragraph",
        "text": "Optional private dining experience",
        "style": "",
        "list": true,
        "align": ""
      },
      {
        "type": "paragraph",
        "text": "Stay — Sigiriya",
        "style": "",
        "list": false,
        "align": ""
      },
      {
        "type": "paragraph",
        "text": "DAY 4 — SIGIRIYA | KANDY",
        "style": "",
        "list": false,
        "align": ""
      },
      {
        "type": "paragraph",
        "text": "From ancient kingdoms to the city of kings",
        "style": "",
        "list": false,
        "align": ""
      },
      {
        "type": "paragraph",
        "text": "Approx. travel time: 2–2.5 hours",
        "style": "",
        "list": false,
        "align": ""
      },
      {
        "type": "paragraph",
        "text": "Leave the tranquility of Sigiriya and travel towards Kandy, Sri Lanka's last royal capital.",
        "style": "",
        "list": false,
        "align": ""
      },
      {
        "type": "paragraph",
        "text": "The journey becomes part of the experience, with countryside, villages and tropical landscapes gradually giving way to the misty hills.",
        "style": "",
        "list": false,
        "align": ""
      },
      {
        "type": "paragraph",
        "text": "Kandy - Nestled among mist-covered hills and lush tropical landscapes, Kandy is a captivating destination where Sri Lanka’s rich heritage and spiritual traditions come to life. As the island’s last royal capital, the city is home to the sacred Temple of the Tooth Relic, tranquil Kandy Lake and beautifully preserved cultural landmarks. Visitors can explore vibrant local markets, experience traditional Kandyan dance performances and discover the botanical wonders of nearby Peradeniya. Blending history, culture and natural beauty, Kandy offers an authentic glimpse into the island’s timeless traditions.",
        "style": "",
        "list": false,
        "align": ""
      },
      {
        "type": "paragraph",
        "text": "Things to do",
        "style": "",
        "list": false,
        "align": ""
      },
      {
        "type": "paragraph",
        "text": "Private chauffeur journey to Kandy",
        "style": "",
        "list": true,
        "align": ""
      },
      {
        "type": "paragraph",
        "text": "Visit Dambulla Cave Temple (en-route)",
        "style": "",
        "list": true,
        "align": ""
      },
      {
        "type": "paragraph",
        "text": "Optional spice garden experience",
        "style": "",
        "list": true,
        "align": ""
      },
      {
        "type": "paragraph",
        "text": "Kandy city sightseeing",
        "style": "",
        "list": true,
        "align": ""
      },
      {
        "type": "paragraph",
        "text": "Visit the Temple of the Sacred Tooth Relic",
        "style": "",
        "list": true,
        "align": ""
      },
      {
        "type": "paragraph",
        "text": "Romantic sunset overlooking the hills",
        "style": "",
        "list": true,
        "align": ""
      },
      {
        "type": "paragraph",
        "text": "Private dinner",
        "style": "",
        "list": true,
        "align": ""
      },
      {
        "type": "paragraph",
        "text": "Handpicked Stay Options —— W15 Hanthana|Taru Villas Kandy|Adigars Manor|Jetwing Kandy Gallery",
        "style": "",
        "list": false,
        "align": ""
      },
      {
        "type": "paragraph",
        "text": "DAY 5 — KANDY | NUWARA ELIYA",
        "style": "",
        "list": false,
        "align": ""
      },
      {
        "type": "paragraph",
        "text": "Into the tea country",
        "style": "",
        "list": false,
        "align": ""
      },
      {
        "type": "paragraph",
        "text": "Approx. travel time: 2.5–3.5 hours",
        "style": "",
        "list": false,
        "align": ""
      },
      {
        "type": "paragraph",
        "text": "Today, Sri Lanka changes its mood completely.",
        "style": "",
        "list": false,
        "align": ""
      },
      {
        "type": "paragraph",
        "text": "Leave Kandy behind and climb into the cool central highlands, where emerald tea plantations cover the mountainsides.",
        "style": "",
        "list": false,
        "align": ""
      },
      {
        "type": "paragraph",
        "text": "Arrive in Nuwara Eliya and settle into your boutique retreat.",
        "style": "",
        "list": false,
        "align": ""
      },
      {
        "type": "paragraph",
        "text": "Nuwara Eliya - Nestled amidst rolling hills, misty mountains and endless tea plantations, Nuwara Eliya is fondly known as Little England for its colonial charm and cool-climate atmosphere. The town’s picturesque gardens, historic buildings and tranquil Gregory Lake create a refreshing escape from the island’s tropical lowlands. Visitors can explore verdant tea estates, discover the art of Ceylon tea production and enjoy scenic drives through winding mountain roads and cascading waterfalls. With its crisp mountain air and timeless elegance, Nuwara Eliya offers a delightful taste of Sri Lanka’s hill-country beauty.",
        "style": "",
        "list": false,
        "align": ""
      },
      {
        "type": "paragraph",
        "text": "Things to do",
        "style": "",
        "list": false,
        "align": ""
      },
      {
        "type": "paragraph",
        "text": "Scenic drive through the tea country",
        "style": "",
        "list": true,
        "align": ""
      },
      {
        "type": "paragraph",
        "text": "Explore colonial Nuwara Eliya",
        "style": "",
        "list": true,
        "align": ""
      },
      {
        "type": "paragraph",
        "text": "Gregory Lake",
        "style": "",
        "list": true,
        "align": ""
      },
      {
        "type": "paragraph",
        "text": "Romantic dinner",
        "style": "",
        "list": true,
        "align": ""
      },
      {
        "type": "paragraph",
        "text": "Handpicked Stay Options — Bellwood Manor| Goatfell by Teardrop Hotels|Stafford Bungalow |Golden Ridge Mountain suite Room Category| W15 Lake Gregory| The Grand Hotel Nuwara Eliya",
        "style": "",
        "list": false,
        "align": ""
      },
      {
        "type": "paragraph",
        "text": "DAY 6 — NUWARA ELIYA",
        "style": "",
        "list": false,
        "align": ""
      },
      {
        "type": "paragraph",
        "text": "A day wrapped in mist, tea & romance",
        "style": "",
        "list": false,
        "align": ""
      },
      {
        "type": "paragraph",
        "text": "A slower honeymoon day.",
        "style": "",
        "list": false,
        "align": ""
      },
      {
        "type": "paragraph",
        "text": "Sleep in, enjoy breakfast overlooking the highlands and spend the day discovering the softer side of Nuwara Eliya.",
        "style": "",
        "list": false,
        "align": ""
      },
      {
        "type": "paragraph",
        "text": "Things to do",
        "style": "",
        "list": false,
        "align": ""
      },
      {
        "type": "paragraph",
        "text": "Leisurely breakfast",
        "style": "",
        "list": true,
        "align": ""
      },
      {
        "type": "paragraph",
        "text": "Tea estate experience",
        "style": "",
        "list": true,
        "align": ""
      },
      {
        "type": "paragraph",
        "text": "Visit a working tea factory",
        "style": "",
        "list": true,
        "align": ""
      },
      {
        "type": "paragraph",
        "text": "Hortain Plains Hike",
        "style": "",
        "list": true,
        "align": ""
      },
      {
        "type": "paragraph",
        "text": "Strawberry Farm visit",
        "style": "",
        "list": true,
        "align": ""
      },
      {
        "type": "paragraph",
        "text": "Afternoon tea",
        "style": "",
        "list": true,
        "align": ""
      },
      {
        "type": "paragraph",
        "text": "Private dinner",
        "style": "",
        "list": true,
        "align": ""
      },
      {
        "type": "paragraph",
        "text": "Stay — Nuwara Eliya",
        "style": "",
        "list": false,
        "align": ""
      },
      {
        "type": "paragraph",
        "text": "DAY 7 — NUWARA ELIYA | ELLA",
        "style": "",
        "list": false,
        "align": ""
      },
      {
        "type": "paragraph",
        "text": "The train through the clouds",
        "style": "",
        "list": false,
        "align": ""
      },
      {
        "type": "paragraph",
        "text": "Train journey – Approx. 3.5 Hours (Nanuoya to Ella Station)",
        "style": "",
        "list": false,
        "align": ""
      },
      {
        "type": "paragraph",
        "text": "This is one of the signature moments of the journey.",
        "style": "",
        "list": false,
        "align": ""
      },
      {
        "type": "paragraph",
        "text": "Board the scenic hill-country train from Nuwara Eliya( Nanuoya)  towards Ella, travelling through rolling tea estates, misty mountains, waterfalls and tiny railway stations.",
        "style": "",
        "list": false,
        "align": ""
      },
      {
        "type": "paragraph",
        "text": "Instead of treating the train as transport, make it an experience.",
        "style": "",
        "list": false,
        "align": ""
      },
      {
        "type": "paragraph",
        "text": "Ella -Tucked away in Sri Lanka’s enchanting hill country, Ella is a picturesque mountain retreat celebrated for its breathtaking panoramas, lush tea plantations and laid-back village charm. Scenic hiking trails lead to iconic viewpoints such as Little Adam’s Peak and Ella Rock, while the famous Nine Arch Bridge showcases remarkable railway architecture amid emerald-green hills. Visitors can also discover cascading waterfalls, explore local cafés and enjoy the unforgettable experience of a scenic train journey through the misty highlands. With its blend of adventure, natural beauty and relaxed atmosphere, Ella is a favourite escape for nature lovers and explorers alike.",
        "style": "",
        "list": false,
        "align": ""
      },
      {
        "type": "paragraph",
        "text": "Things to do",
        "style": "",
        "list": false,
        "align": ""
      },
      {
        "type": "paragraph",
        "text": "Private transfer to the railway station",
        "style": "",
        "list": true,
        "align": ""
      },
      {
        "type": "paragraph",
        "text": "Reserved / best available train seating",
        "style": "",
        "list": true,
        "align": ""
      },
      {
        "type": "paragraph",
        "text": "Scenic train journey through the tea country",
        "style": "",
        "list": true,
        "align": ""
      },
      {
        "type": "paragraph",
        "text": "Tea plantations & mountain scenery",
        "style": "",
        "list": true,
        "align": ""
      },
      {
        "type": "paragraph",
        "text": "Arrival in Ella",
        "style": "",
        "list": true,
        "align": ""
      },
      {
        "type": "paragraph",
        "text": "Nine Arch Bridge, Little Adam’s Peak Hike",
        "style": "",
        "list": true,
        "align": ""
      },
      {
        "type": "paragraph",
        "text": "Sunset overlooking the mountains",
        "style": "",
        "list": true,
        "align": ""
      },
      {
        "type": "paragraph",
        "text": "Handpicked Stay Options —Nine Skies by Teardrop Hotels| 98 Acres Resort & Spa| Uga Ghiri | Living Heritage Koslanda | Wishing Tree Boutique Resort & SPA Haputale|Thotalagala Tea Plantation Bungalow",
        "style": "",
        "list": false,
        "align": ""
      },
      {
        "type": "paragraph",
        "text": "DAY 8 — ELLA | YALA",
        "style": "",
        "list": false,
        "align": ""
      },
      {
        "type": "paragraph",
        "text": "From the mountains into the wild",
        "style": "",
        "list": false,
        "align": ""
      },
      {
        "type": "paragraph",
        "text": "Approx. travel time: 2.5 to 3 Hours",
        "style": "",
        "list": false,
        "align": ""
      },
      {
        "type": "paragraph",
        "text": "Leave the cool mountains behind and travel towards the southern wilderness.",
        "style": "",
        "list": false,
        "align": ""
      },
      {
        "type": "paragraph",
        "text": "The landscape gradually changes from tea-covered mountains to dry-zone jungle.",
        "style": "",
        "list": false,
        "align": ""
      },
      {
        "type": "paragraph",
        "text": "Arrive at your luxury safari lodge beside Yala National Park.",
        "style": "",
        "list": false,
        "align": ""
      },
      {
        "type": "paragraph",
        "text": "Yala is a captivating wilderness destination where untamed nature and unforgettable wildlife encounters take centre stage. Home to one of the world’s highest densities of leopards, Yala National Park offers thrilling safari experiences through a diverse landscape of open grasslands, dense scrub forests, rocky outcrops and tranquil lagoons. Along the way, visitors may encounter majestic elephants, sloth bears, crocodiles and an extraordinary variety of birdlife in their natural habitat. Beyond the excitement of the safari, Yala’s rugged landscapes and peaceful surroundings create a remarkable connection with nature, making it an essential stop for wildlife enthusiasts and adventurous travellers exploring Sri Lanka.",
        "style": "",
        "list": false,
        "align": ""
      },
      {
        "type": "paragraph",
        "text": "Things to do",
        "style": "",
        "list": false,
        "align": ""
      },
      {
        "type": "paragraph",
        "text": "Scenic transfer",
        "style": "",
        "list": true,
        "align": ""
      },
      {
        "type": "paragraph",
        "text": "Check-in to Hotel",
        "style": "",
        "list": true,
        "align": ""
      },
      {
        "type": "paragraph",
        "text": "Relax in your private suite",
        "style": "",
        "list": true,
        "align": ""
      },
      {
        "type": "paragraph",
        "text": "Enjoy the lodge's wilderness setting",
        "style": "",
        "list": true,
        "align": ""
      },
      {
        "type": "paragraph",
        "text": "Optional nature walks",
        "style": "",
        "list": true,
        "align": ""
      },
      {
        "type": "paragraph",
        "text": "Romantic safari-inspired dinner",
        "style": "",
        "list": true,
        "align": ""
      },
      {
        "type": "paragraph",
        "text": "Handpicked Stay Options — Wild Coast Tented Lodge|Uga Chena Huts |Kotiyagala Luxury Villas |Tribe Yala |Hilton Yala Resort|The Warden’s House|Cinnamon Yala Resort",
        "style": "",
        "list": false,
        "align": ""
      },
      {
        "type": "paragraph",
        "text": "DAY 9 — YALA | WELIGAMA",
        "style": "",
        "list": false,
        "align": ""
      },
      {
        "type": "paragraph",
        "text": "Wild mornings, ocean afternoons",
        "style": "",
        "list": false,
        "align": ""
      },
      {
        "type": "paragraph",
        "text": "Approx. travel time: 2.5–3.5 hours",
        "style": "",
        "list": false,
        "align": ""
      },
      {
        "type": "paragraph",
        "text": "Rise early for your private Yala safari.",
        "style": "",
        "list": false,
        "align": ""
      },
      {
        "type": "paragraph",
        "text": "This is the adventure chapter of the honeymoon — tracking wildlife through the park with your safari team while keeping the experience intimate and unrushed.",
        "style": "",
        "list": false,
        "align": ""
      },
      {
        "type": "paragraph",
        "text": "After the safari, continue south towards Weligama.",
        "style": "",
        "list": false,
        "align": ""
      },
      {
        "type": "paragraph",
        "text": "Weligama is a vibrant southern coastal town renowned for surfing, golden beaches, and laid-back coastal living. Combining adventure and tropical charm, it has become a favourite destination among surfers and beach lovers. Its sweeping bay, gentle waves, and welcoming seaside atmosphere make it an ideal spot for both beginners eager to try surfing and seasoned wave riders. Beyond the beach, discover charming cafés, fresh seafood, colourful fishing boats, and the unique sight of traditional stilt fishermen along the coast. With its relaxed rhythm, beautiful ocean views, and captivating blend of local culture and modern beach life, Weligama invites you to slow down and embrace the easygoing spirit of Sri Lanka’s southern shores.",
        "style": "",
        "list": false,
        "align": ""
      },
      {
        "type": "paragraph",
        "text": "Things to do",
        "style": "",
        "list": false,
        "align": ""
      },
      {
        "type": "paragraph",
        "text": "Early morning Yala National Park safari",
        "style": "",
        "list": true,
        "align": ""
      },
      {
        "type": "paragraph",
        "text": "Wildlife spotting",
        "style": "",
        "list": true,
        "align": ""
      },
      {
        "type": "paragraph",
        "text": "Return for breakfast",
        "style": "",
        "list": true,
        "align": ""
      },
      {
        "type": "paragraph",
        "text": "Transfer to Weligama",
        "style": "",
        "list": true,
        "align": ""
      },
      {
        "type": "paragraph",
        "text": "Relax by the ocean",
        "style": "",
        "list": true,
        "align": ""
      },
      {
        "type": "paragraph",
        "text": "Sunset cocktails",
        "style": "",
        "list": true,
        "align": ""
      },
      {
        "type": "paragraph",
        "text": "Leisure evening",
        "style": "",
        "list": true,
        "align": ""
      },
      {
        "type": "paragraph",
        "text": "Handpicked Stay Options — Cape Weligama Resort|Malabar Hill|The Six MIdigama|Weligama Bay Marriot Resort|Eraliya Villas & Gardens",
        "style": "",
        "list": false,
        "align": ""
      },
      {
        "type": "paragraph",
        "text": "DAY 10 — WELIGAMA",
        "style": "",
        "list": false,
        "align": ""
      },
      {
        "type": "paragraph",
        "text": "Sail into your final chapter",
        "style": "",
        "list": false,
        "align": ""
      },
      {
        "type": "paragraph",
        "text": "No early alarm today.",
        "style": "",
        "list": false,
        "align": ""
      },
      {
        "type": "paragraph",
        "text": "This is the day to simply enjoy being together.",
        "style": "",
        "list": false,
        "align": ""
      },
      {
        "type": "paragraph",
        "text": "After breakfast, head out onto the Indian Ocean for your Sail Lanka yacht experience.",
        "style": "",
        "list": false,
        "align": ""
      },
      {
        "type": "paragraph",
        "text": "Depending on the selected yacht and sailing programme, this can be shaped as a private romantic sailing experience — creating a spectacular final full day for the honeymoon.",
        "style": "",
        "list": false,
        "align": ""
      },
      {
        "type": "paragraph",
        "text": "Things to do",
        "style": "",
        "list": false,
        "align": ""
      },
      {
        "type": "paragraph",
        "text": "Slow breakfast",
        "style": "",
        "list": true,
        "align": ""
      },
      {
        "type": "paragraph",
        "text": "Beach / pool time",
        "style": "",
        "list": true,
        "align": ""
      },
      {
        "type": "paragraph",
        "text": "Ocean views & swimming stop, where conditions permit",
        "style": "",
        "list": true,
        "align": ""
      },
      {
        "type": "paragraph",
        "text": "Romantic candlelight dinner for two",
        "style": "",
        "list": true,
        "align": ""
      },
      {
        "type": "paragraph",
        "text": "Stay — Weligama",
        "style": "",
        "list": false,
        "align": ""
      },
      {
        "type": "paragraph",
        "text": "DAY 11 — WELIGAMA | AIRPORT",
        "style": "",
        "list": false,
        "align": ""
      },
      {
        "type": "paragraph",
        "text": "And the honeymoon becomes a memory",
        "style": "",
        "list": false,
        "align": ""
      },
      {
        "type": "paragraph",
        "text": "Approx. travel time: 2.5–3.5 hours",
        "style": "",
        "list": false,
        "align": ""
      },
      {
        "type": "paragraph",
        "text": "Wake to the sound of the Indian Ocean.",
        "style": "",
        "list": false,
        "align": ""
      },
      {
        "type": "paragraph",
        "text": "Enjoy a final breakfast together before your private chauffeur collects you for your journey to the airport.",
        "style": "",
        "list": false,
        "align": ""
      },
      {
        "type": "paragraph",
        "text": "Leave Sri Lanka with photographs, stories and a collection of experiences that go far beyond a traditional beach honeymoon.",
        "style": "",
        "list": false,
        "align": ""
      },
      {
        "type": "paragraph",
        "text": "End of Magical Paradise Honeymoon",
        "style": "",
        "list": false,
        "align": ""
      }
    ]
  },
  {
    "id": "authentic-sri-lanka",
    "name": "Authentic Sri Lanka",
    "sourceFile": "Authentic Sri Lanka.docx",
    "title": "The Authentic Island Journey 21 Days|20 Nights",
    "image": "/2408852f-e87c-4499-a3f7-22b850828253.jpg",
    "blocks": [
      {
        "type": "paragraph",
        "text": "The Authentic Island Journey 21 Days|20 Nights",
        "style": "",
        "list": false,
        "align": "center"
      },
      {
        "type": "paragraph",
        "text": "An unforgettable journey through culture, nature and authentic island life",
        "style": "",
        "list": false,
        "align": ""
      },
      {
        "type": "paragraph",
        "text": "This carefully curated journey invites you to experience the true soul of Sri Lanka. From vibrant city life and ancient kingdoms to misty tea country, thrilling wildlife safaris and peaceful southern beaches, every day brings genuine connections with local communities, authentic traditions and unforgettable moments that make this island truly magical.",
        "style": "",
        "list": false,
        "align": ""
      },
      {
        "type": "paragraph",
        "text": "DAY 01  - WELCOME TO SRI LANKA – COLOMBO",
        "style": "",
        "list": false,
        "align": ""
      },
      {
        "type": "paragraph",
        "text": "Ayubowan Sri Lanka!",
        "style": "",
        "list": false,
        "align": ""
      },
      {
        "type": "paragraph",
        "text": "Approx. travel time: 45 minutes–1.5 hours",
        "style": "",
        "list": false,
        "align": ""
      },
      {
        "type": "paragraph",
        "text": "Your adventure begins as a Magical Paradise representative warmly welcomes you at Bandaranaike International Airport. A short drive brings you to Colombo, Sri Lanka's vibrant commercial capital, where colonial charm blends seamlessly with modern city life.",
        "style": "",
        "list": false,
        "align": ""
      },
      {
        "type": "paragraph",
        "text": "Colombo is a captivating blend of colonial heritage, vibrant city life and modern sophistication, offering a fascinating glimpse into Sri Lanka’s past and present. From the historic charm of Fort and the colourful streets of Pettah to the oceanfront promenade of Galle Face Green and the serene beauty of Gangaramaya Temple, the city invites visitors to discover its many contrasts. With stylish hotels, diverse culinary experiences, bustling markets, boutique shopping and lively nightlife, Colombo is an ideal introduction to the island’s culture, character and contemporary lifestyle.",
        "style": "",
        "list": false,
        "align": ""
      },
      {
        "type": "paragraph",
        "text": "Spend two days discovering Colombo from a unique perspective while enjoying authentic flavors and unforgettable sunsets.",
        "style": "",
        "list": false,
        "align": ""
      },
      {
        "type": "paragraph",
        "text": "Things to Do",
        "style": "",
        "list": false,
        "align": ""
      },
      {
        "type": "paragraph",
        "text": "Explore Colombo by Open Jeep",
        "style": "ListParagraph",
        "list": true,
        "align": ""
      },
      {
        "type": "paragraph",
        "text": "Sample authentic Sri Lankan Street food",
        "style": "ListParagraph",
        "list": true,
        "align": ""
      },
      {
        "type": "paragraph",
        "text": "Enjoy a spectacular sundowner overlooking the Indian Ocean",
        "style": "ListParagraph",
        "list": true,
        "align": ""
      },
      {
        "type": "paragraph",
        "text": "Discover hidden streets, local markets and colonial landmarks",
        "style": "ListParagraph",
        "list": true,
        "align": ""
      },
      {
        "type": "paragraph",
        "text": "Stay -2 Nights in Colombo",
        "style": "",
        "list": false,
        "align": ""
      },
      {
        "type": "paragraph",
        "text": "DAY 03 - COLOMBO | SIGIRIYA",
        "style": "",
        "list": false,
        "align": ""
      },
      {
        "type": "paragraph",
        "text": "From city streets to ancient lands",
        "style": "",
        "list": false,
        "align": ""
      },
      {
        "type": "paragraph",
        "text": "Approx. travel time: 4–5 hours",
        "style": "",
        "list": false,
        "align": ""
      },
      {
        "type": "paragraph",
        "text": "Journey from Colombo to Sigiriya, travelling through Sri Lanka’s captivating landscapes towards the heart of the island’s rich cultural heritage, where ancient wonders and unforgettable adventures await.",
        "style": "",
        "list": false,
        "align": ""
      },
      {
        "type": "paragraph",
        "text": "Discover Sri Lanka’s Cultural Triangle, where ancient kingdoms, remarkable architecture and timeless traditions tell the story of a fascinating past. Sigiriya captivates visitors with its iconic Lion Rock fortress, dramatic scenery and ancient frescoes, while nearby Dambulla is renowned for its impressive cave temple complex, adorned with centuries-old Buddhist murals and statues. Surrounded by lush greenery, rural villages and scenic countryside, these destinations offer a memorable journey through the island’s rich history, spiritual heritage and extraordinary cultural treasures.",
        "style": "",
        "list": false,
        "align": ""
      },
      {
        "type": "paragraph",
        "text": "With four nights here, you'll have time to truly immerse yourself in local traditions and the surrounding countryside.",
        "style": "",
        "list": false,
        "align": ""
      },
      {
        "type": "paragraph",
        "text": "Things to Do",
        "style": "",
        "list": false,
        "align": ""
      },
      {
        "type": "paragraph",
        "text": "Climb the iconic Sigiriya Rock Fortress",
        "style": "ListParagraph",
        "list": true,
        "align": ""
      },
      {
        "type": "paragraph",
        "text": "Cycle through peaceful village paths and paddy fields",
        "style": "ListParagraph",
        "list": true,
        "align": ""
      },
      {
        "type": "paragraph",
        "text": "Explore the Sacred City of Anuradhapura",
        "style": "ListParagraph",
        "list": true,
        "align": ""
      },
      {
        "type": "paragraph",
        "text": "Experience a guided meditation session with a Buddhist monk",
        "style": "ListParagraph",
        "list": true,
        "align": ""
      },
      {
        "type": "paragraph",
        "text": "Discover authentic village life by bullock cart and canoe",
        "style": "ListParagraph",
        "list": true,
        "align": ""
      },
      {
        "type": "paragraph",
        "text": "Visit the magnificent Dambulla Cave Temple",
        "style": "ListParagraph",
        "list": true,
        "align": ""
      },
      {
        "type": "paragraph",
        "text": "Sun rise or sunset Climb to Pidurangala Rock",
        "style": "ListParagraph",
        "list": true,
        "align": ""
      },
      {
        "type": "paragraph",
        "text": "Join a fascinating Loris Night Trail",
        "style": "ListParagraph",
        "list": true,
        "align": ""
      },
      {
        "type": "paragraph",
        "text": "Enjoy a relaxing free day at leisure",
        "style": "ListParagraph",
        "list": true,
        "align": ""
      },
      {
        "type": "paragraph",
        "text": "Safarai in Minneriya or Kaudulla Nationbal Parks",
        "style": "ListParagraph",
        "list": true,
        "align": ""
      },
      {
        "type": "paragraph",
        "text": "Stay -4 Nights in Sigiriya",
        "style": "",
        "list": false,
        "align": ""
      },
      {
        "type": "paragraph",
        "text": "DAY 07  - SIGIRIYA | KANDY",
        "style": "",
        "list": false,
        "align": ""
      },
      {
        "type": "paragraph",
        "text": "Into the heart of the island",
        "style": "",
        "list": false,
        "align": ""
      },
      {
        "type": "paragraph",
        "text": "Approx. travel time: 2–2.5 hours",
        "style": "",
        "list": false,
        "align": ""
      },
      {
        "type": "paragraph",
        "text": "Travel into Sri Lanka's cultural capital, where sacred temples, colourful traditions and centuries-old craftsmanship continue to thrive. Kandy is where heritage comes alive through its people, music and artistry.",
        "style": "",
        "list": false,
        "align": ""
      },
      {
        "type": "paragraph",
        "text": "Nestled among mist-covered hills and lush tropical landscapes, Kandy is a captivating destination where Sri Lanka’s rich heritage and spiritual traditions come to life. As the island’s last royal capital, the city is home to the sacred Temple of the Tooth Relic, tranquil Kandy Lake and beautifully preserved cultural landmarks. Visitors can explore vibrant local markets, experience traditional Kandyan dance performances and discover the botanical wonders of nearby Peradeniya. Blending history, culture and natural beauty, Kandy offers an authentic glimpse into the island’s timeless traditions.",
        "style": "",
        "list": false,
        "align": ""
      },
      {
        "type": "paragraph",
        "text": "Things to Do",
        "style": "",
        "list": false,
        "align": ""
      },
      {
        "type": "paragraph",
        "text": "Visit the sacred Temple of the Tooth Relic",
        "style": "ListParagraph",
        "list": true,
        "align": ""
      },
      {
        "type": "paragraph",
        "text": "Meet master craftsmen creating intricate wood carvings",
        "style": "ListParagraph",
        "list": true,
        "align": ""
      },
      {
        "type": "paragraph",
        "text": "Discover traditional brassware craftsmanship",
        "style": "ListParagraph",
        "list": true,
        "align": ""
      },
      {
        "type": "paragraph",
        "text": "Visit a local batik workshop",
        "style": "ListParagraph",
        "list": true,
        "align": ""
      },
      {
        "type": "paragraph",
        "text": "Hands on experience at a jewelry making workshop",
        "style": "ListParagraph",
        "list": true,
        "align": ""
      },
      {
        "type": "paragraph",
        "text": "Enjoy a colourful Kandyan cultural dance performance",
        "style": "ListParagraph",
        "list": true,
        "align": ""
      },
      {
        "type": "paragraph",
        "text": "Take part in a Sri Lankan cooking class with a local family",
        "style": "ListParagraph",
        "list": true,
        "align": ""
      },
      {
        "type": "paragraph",
        "text": "Stay -2 Nights in Kandy",
        "style": "",
        "list": false,
        "align": ""
      },
      {
        "type": "paragraph",
        "text": "DAY 09 - KANDY | NUWARA ELIYA",
        "style": "",
        "list": false,
        "align": ""
      },
      {
        "type": "paragraph",
        "text": "Journey into Sri Lanka's picturesque hill country.",
        "style": "",
        "list": false,
        "align": ""
      },
      {
        "type": "paragraph",
        "text": "Approx. travel time: 2.5–3.5 hours",
        "style": "",
        "list": false,
        "align": ""
      },
      {
        "type": "paragraph",
        "text": "Ascend into Sri Lanka's enchanting hill country, where rolling tea plantations, cool mountain air and colonial elegance create an atmosphere unlike anywhere else on the island.",
        "style": "",
        "list": false,
        "align": ""
      },
      {
        "type": "paragraph",
        "text": "Nestled amidst rolling hills, misty mountains and endless tea plantations, Nuwara Eliya is fondly known as Little England for its colonial charm and cool-climate atmosphere. The town’s picturesque gardens, historic buildings and tranquil Gregory Lake create a refreshing escape from the island’s tropical lowlands. Visitors can explore verdant tea estates, discover the art of Ceylon tea production and enjoy scenic drives through winding mountain roads and cascading waterfalls. With its crisp mountain air and timeless elegance, Nuwara Eliya offers a delightful taste of Sri Lanka’s hill-country beauty.",
        "style": "",
        "list": false,
        "align": ""
      },
      {
        "type": "paragraph",
        "text": "Things to Do",
        "style": "",
        "list": false,
        "align": ""
      },
      {
        "type": "paragraph",
        "text": "Enroute – Hakgala Botanical Gardens",
        "style": "ListParagraph",
        "list": true,
        "align": ""
      },
      {
        "type": "paragraph",
        "text": "Visit a working tea plantation and factory",
        "style": "ListParagraph",
        "list": true,
        "align": ""
      },
      {
        "type": "paragraph",
        "text": "Experience a traditional High Tea in \"Little England\"",
        "style": "ListParagraph",
        "list": true,
        "align": ""
      },
      {
        "type": "paragraph",
        "text": "Strawberry Farm visit",
        "style": "ListParagraph",
        "list": true,
        "align": ""
      },
      {
        "type": "paragraph",
        "text": "Explore the breathtaking Horton Plains National Park",
        "style": "ListParagraph",
        "list": true,
        "align": ""
      },
      {
        "type": "paragraph",
        "text": "Gregory Lake or Victoria Park leisure Stroll",
        "style": "ListParagraph",
        "list": true,
        "align": ""
      },
      {
        "type": "paragraph",
        "text": "Relax and enjoy the cool mountain climate",
        "style": "ListParagraph",
        "list": true,
        "align": ""
      },
      {
        "type": "paragraph",
        "text": "Stay -2 Nights in Nuwara Eliya",
        "style": "",
        "list": false,
        "align": ""
      },
      {
        "type": "paragraph",
        "text": "DAY 11  -NUWARA ELIYA | ELLA",
        "style": "",
        "list": false,
        "align": ""
      },
      {
        "type": "paragraph",
        "text": "Hop on board the Train",
        "style": "",
        "list": false,
        "align": ""
      },
      {
        "type": "paragraph",
        "text": "Train journey – Approx. 3.5 Hours (Nanuoya to Ella Station)",
        "style": "",
        "list": false,
        "align": ""
      },
      {
        "type": "paragraph",
        "text": "One of the world's most scenic train journeys leads you into the laid-back mountain town of Ella, where waterfalls, hiking trails and breathtaking viewpoints await.",
        "style": "",
        "list": false,
        "align": ""
      },
      {
        "type": "paragraph",
        "text": "Tucked away in Sri Lanka’s enchanting hill country, Ella is a picturesque mountain retreat celebrated for its breathtaking panoramas, lush tea plantations and laid-back village charm. Scenic hiking trails lead to iconic viewpoints such as Little Adam’s Peak and Ella Rock, while the famous Nine Arch Bridge showcases remarkable railway architecture amid emerald-green hills. Visitors can also discover cascading waterfalls, explore local cafés and enjoy the unforgettable experience of a scenic train journey through the misty highlands. With its blend of adventure, natural beauty and relaxed atmosphere, Ella is a favourite escape for nature lovers and explorers alike.",
        "style": "",
        "list": false,
        "align": ""
      },
      {
        "type": "paragraph",
        "text": "Things to Do",
        "style": "",
        "list": false,
        "align": ""
      },
      {
        "type": "paragraph",
        "text": "Scenic train journey from Ambewela to Ella",
        "style": "ListParagraph",
        "list": true,
        "align": ""
      },
      {
        "type": "paragraph",
        "text": "Visit the iconic Nine Arch Bridge",
        "style": "ListParagraph",
        "list": true,
        "align": ""
      },
      {
        "type": "paragraph",
        "text": "Hike Little Adam's Peak",
        "style": "ListParagraph",
        "list": true,
        "align": ""
      },
      {
        "type": "paragraph",
        "text": "Ravana Zipline and adventures",
        "style": "ListParagraph",
        "list": true,
        "align": ""
      },
      {
        "type": "paragraph",
        "text": "Trek to the spectacular Diyaluma Falls/ Ellawala Falls",
        "style": "ListParagraph",
        "list": true,
        "align": ""
      },
      {
        "type": "paragraph",
        "text": "Tultuk ride to Lipton Seat",
        "style": "ListParagraph",
        "list": true,
        "align": ""
      },
      {
        "type": "paragraph",
        "text": "Visit to Mahamevnawa Buddhist Monastry & Adisham Bungalow",
        "style": "ListParagraph",
        "list": true,
        "align": ""
      },
      {
        "type": "paragraph",
        "text": "Stay 3 Nights in Ella",
        "style": "",
        "list": false,
        "align": ""
      },
      {
        "type": "paragraph",
        "text": "DAY 14  - ELLA | UDAWALAWE",
        "style": "",
        "list": false,
        "align": ""
      },
      {
        "type": "paragraph",
        "text": "Hitting a Wild sanctuary",
        "style": "",
        "list": false,
        "align": ""
      },
      {
        "type": "paragraph",
        "text": "Approx. travel time: 2–2.5 hours",
        "style": "",
        "list": false,
        "align": ""
      },
      {
        "type": "paragraph",
        "text": "Leave the mountains behind and venture into Sri Lanka's remarkable wilderness, where elephants roam freely and authentic rural hospitality creates lasting memories.",
        "style": "",
        "list": false,
        "align": ""
      },
      {
        "type": "paragraph",
        "text": "Udawalawe is a captivating wildlife destination where vast grasslands, open plains and tranquil reservoirs create a haven for Sri Lanka’s remarkable wildlife. Best known for its thriving population of wild Asian elephants, Udawalawe National Park offers exciting safari experiences, giving visitors the chance to observe these magnificent animals in their natural habitat. The park is also home to water buffalo, deer, crocodiles and an impressive variety of birdlife, making it a rewarding destination for nature enthusiasts and photographers. With its untamed landscapes and unforgettable wildlife encounters, Udawalawe offers an authentic glimpse into the island’s extraordinary natural world",
        "style": "",
        "list": false,
        "align": ""
      },
      {
        "type": "paragraph",
        "text": "Things to Do",
        "style": "",
        "list": false,
        "align": ""
      },
      {
        "type": "paragraph",
        "text": "Jeep Safari in Udawalawe National Park",
        "style": "ListParagraph",
        "list": true,
        "align": ""
      },
      {
        "type": "paragraph",
        "text": "Visit the Elephant Transit Home",
        "style": "ListParagraph",
        "list": true,
        "align": ""
      },
      {
        "type": "paragraph",
        "text": "Enjoy an authentic Sri Lankan lunch at Craft Tunnel",
        "style": "ListParagraph",
        "list": true,
        "align": ""
      },
      {
        "type": "paragraph",
        "text": "Take Part in a traditional pottery-making session",
        "style": "ListParagraph",
        "list": true,
        "align": ""
      },
      {
        "type": "paragraph",
        "text": "Stay 2 Nights in Udawalawe",
        "style": "",
        "list": false,
        "align": ""
      },
      {
        "type": "paragraph",
        "text": "DAY 16 – UDAWALAWE | WELIGAMA",
        "style": "",
        "list": false,
        "align": ""
      },
      {
        "type": "paragraph",
        "text": "From wild to the waves",
        "style": "",
        "list": false,
        "align": ""
      },
      {
        "type": "paragraph",
        "text": "Approx. travel time: 2.5–3.5 hours",
        "style": "",
        "list": false,
        "align": ""
      },
      {
        "type": "paragraph",
        "text": "Continue to Sri Lanka's beautiful southern coastline, where relaxed beach life meets centuries-old traditions and unforgettable ocean adventures.",
        "style": "",
        "list": false,
        "align": ""
      },
      {
        "type": "paragraph",
        "text": "Weligama is a vibrant southern coastal town renowned for its golden sandy beaches, rolling waves and relaxed tropical atmosphere. A favourite among surfers, the bay offers inviting conditions for beginners and experienced wave riders alike, while the surrounding coastline provides opportunities to unwind by the ocean and discover charming local cafés and seafood restaurants. The area is also known for its traditional stilt-fishing heritage and easy access to neighbouring coastal destinations. Combining surf culture, authentic local experiences and laid-back beachside living, Weligama is an ideal stop for travellers seeking both adventure and relaxation along Sri Lanka’s southern coast.",
        "style": "",
        "list": false,
        "align": ""
      },
      {
        "type": "paragraph",
        "text": "Things to Do",
        "style": "",
        "list": false,
        "align": ""
      },
      {
        "type": "paragraph",
        "text": "Explore the historic Galle Fort",
        "style": "ListParagraph",
        "list": true,
        "align": ""
      },
      {
        "type": "paragraph",
        "text": "Visit the famous stilt fishermen (seasonal)",
        "style": "ListParagraph",
        "list": true,
        "align": ""
      },
      {
        "type": "paragraph",
        "text": "Discover a traditional cinnamon plantation",
        "style": "ListParagraph",
        "list": true,
        "align": ""
      },
      {
        "type": "paragraph",
        "text": "Whale watching excursion (seasonal)",
        "style": "ListParagraph",
        "list": true,
        "align": ""
      },
      {
        "type": "paragraph",
        "text": "Surfing or beginner surf lessons",
        "style": "ListParagraph",
        "list": true,
        "align": ""
      },
      {
        "type": "paragraph",
        "text": "Yoga and meditation by the ocean",
        "style": "ListParagraph",
        "list": true,
        "align": ""
      },
      {
        "type": "paragraph",
        "text": "Visit a traditional handloom weaving mill",
        "style": "ListParagraph",
        "list": true,
        "align": ""
      },
      {
        "type": "paragraph",
        "text": "Relax on the golden beaches",
        "style": "ListParagraph",
        "list": true,
        "align": ""
      },
      {
        "type": "paragraph",
        "text": "Stay 4 Nights in Weligama",
        "style": "",
        "list": false,
        "align": ""
      },
      {
        "type": "paragraph",
        "text": "DAY 20 - WELIGAMA |BENTOTA",
        "style": "",
        "list": false,
        "align": ""
      },
      {
        "type": "paragraph",
        "text": "More Vitamin Sea Please",
        "style": "",
        "list": false,
        "align": ""
      },
      {
        "type": "paragraph",
        "text": "Approx. travel time: 2–2.5 hours",
        "style": "",
        "list": false,
        "align": ""
      },
      {
        "type": "paragraph",
        "text": "End your journey on Sri Lanka's tranquil southwest coast, where mangrove forests, colourful traditions and golden beaches provide the perfect finale.",
        "style": "",
        "list": false,
        "align": ""
      },
      {
        "type": "paragraph",
        "text": "Bentota is a tropical coastal retreat renowned for its golden sandy beaches, swaying coconut palms and inviting Indian Ocean waters. Offering the perfect balance of relaxation and adventure, this popular beach destination is ideal for sun-soaked days, refreshing swims and exciting water sports. The scenic Bentota River adds another dimension to the experience, with boat safaris through mangrove-lined waterways revealing fascinating birdlife and lush natural surroundings. From indulgent beachfront resorts and rejuvenating Ayurvedic wellness experiences to leisurely river cruises and beautiful coastal sunsets, Bentota captures the essence of a tropical Sri Lankan escape",
        "style": "",
        "list": false,
        "align": ""
      },
      {
        "type": "paragraph",
        "text": "Things to Do",
        "style": "",
        "list": false,
        "align": ""
      },
      {
        "type": "paragraph",
        "text": "Boat safari on the Madu River",
        "style": "ListParagraph",
        "list": true,
        "align": ""
      },
      {
        "type": "paragraph",
        "text": "Visit the Ariyapala Traditional Masks & Museum",
        "style": "ListParagraph",
        "list": true,
        "align": ""
      },
      {
        "type": "paragraph",
        "text": "Relax beside the Indian Ocean",
        "style": "ListParagraph",
        "list": true,
        "align": ""
      },
      {
        "type": "paragraph",
        "text": "Enjoy your final sunset in paradise",
        "style": "ListParagraph",
        "list": true,
        "align": ""
      },
      {
        "type": "paragraph",
        "text": "Stay - Overnight stay in Bentota",
        "style": "",
        "list": false,
        "align": ""
      },
      {
        "type": "paragraph",
        "text": "DAY 21 -DEPARTURE DAY : BENTOTA |AIRPORT",
        "style": "",
        "list": false,
        "align": ""
      },
      {
        "type": "paragraph",
        "text": "Bye Bye Sri Lanka, Until Next Time",
        "style": "",
        "list": false,
        "align": ""
      },
      {
        "type": "paragraph",
        "text": "Approx. travel time: 2–3 hours",
        "style": "",
        "list": false,
        "align": ""
      },
      {
        "type": "paragraph",
        "text": "After breakfast, your Magical Paradise chauffeur will transfer you comfortably to Bandaranaike International Airport.",
        "style": "",
        "list": false,
        "align": ""
      },
      {
        "type": "paragraph",
        "text": "As your journey comes to an end, you'll leave not only with photographs of beautiful places, but with meaningful encounters, unforgettable experiences and cherished memories of the people, traditions and landscapes that make Sri Lanka so unique.",
        "style": "",
        "list": false,
        "align": ""
      },
      {
        "type": "paragraph",
        "text": "Until we meet again...",
        "style": "",
        "list": false,
        "align": ""
      }
    ]
  },
  {
    "id": "ceylon-by-design-inspired-by-conde-nast-traveller",
    "name": "Ceylon by Design- Inspired by Conde Nast Traveller",
    "sourceFile": "Ceylon by Design- Inspired by Conde Nast Traveller.docx",
    "title": "The Conde Nast Traveller Inspired Sri Lanka Journey -14 Days|13 Nights",
    "image": "/30e010b1-2b6c-4f87-81a5-d45d39aae23c.jpg",
    "blocks": [
      {
        "type": "paragraph",
        "text": "The Conde Nast Traveller Inspired Sri Lanka Journey -14 Days|13 Nights",
        "style": "",
        "list": false,
        "align": "center"
      },
      {
        "type": "paragraph",
        "text": "From Mist-Kissed Peaks to Golden Shores: A Soulful Grand Tour of Sri Lanka",
        "style": "",
        "list": false,
        "align": ""
      },
      {
        "type": "paragraph",
        "text": "Experience Sri Lanka through a carefully curated journey inspired by one of the world’s leading luxury travel publications. From tranquil tea estates and sacred cities to breathtaking train rides, thrilling wildlife safaris and the island’s beautiful southern coastline, this itinerary showcases Sri Lanka’s finest hotels, authentic experiences and unforgettable landscapes at a relaxed pace.",
        "style": "",
        "list": false,
        "align": ""
      },
      {
        "type": "paragraph",
        "text": "DAY 01- AIRPORT | KALUTARA",
        "style": "",
        "list": false,
        "align": ""
      },
      {
        "type": "paragraph",
        "text": "Hello Sri Lanka",
        "style": "",
        "list": false,
        "align": ""
      },
      {
        "type": "paragraph",
        "text": "Approx. travel time: 2–3 hours",
        "style": "",
        "list": false,
        "align": ""
      },
      {
        "type": "paragraph",
        "text": "Meet Your chauffer at the airport and travel to the peaceful countryside of Kalutara. Spend the day relaxing after your flight while enjoying the island’s tropical surroundings.",
        "style": "",
        "list": false,
        "align": ""
      },
      {
        "type": "paragraph",
        "text": "Nestled amid lush plantations and rolling hills in Neboda, near Kalutara, Glenross Living offers a distinctive escape where colonial elegance meets contemporary luxury and holistic wellness. Set within a sprawling estate of tea, rubber and cinnamon, this beautifully restored 19th-century planter’s bungalow invites guests to unwind amidst tranquil greenery, panoramic valley views and exceptional privacy. From indulgent spa rituals and rejuvenating yoga sessions to guided nature walks and intimate dining experiences, every moment is designed to restore the mind, body and soul. A world away from the bustle of everyday life, Glenross Living reveals a more serene and unexpected side of Sri Lanka, making it an ideal retreat for travellers seeking understated luxury and meaningful relaxation.",
        "style": "",
        "list": false,
        "align": ""
      },
      {
        "type": "paragraph",
        "text": "Stay – Glenross Living Kalutara",
        "style": "",
        "list": false,
        "align": ""
      },
      {
        "type": "paragraph",
        "text": "DAY O2- KALUTARA",
        "style": "",
        "list": false,
        "align": ""
      },
      {
        "type": "paragraph",
        "text": "Begin Your island Holiday",
        "style": "",
        "list": false,
        "align": ""
      },
      {
        "type": "paragraph",
        "text": "Start your day with a cup of “Ceylon Tea” and a traditional Sri Lankan breakfast and indulge in one or few of the below activities.",
        "style": "",
        "list": false,
        "align": ""
      },
      {
        "type": "paragraph",
        "text": "Things to do",
        "style": "",
        "list": false,
        "align": ""
      },
      {
        "type": "paragraph",
        "text": "Yoga or Wellness experience",
        "style": "ListParagraph",
        "list": true,
        "align": ""
      },
      {
        "type": "paragraph",
        "text": "Estate Nature Walk",
        "style": "ListParagraph",
        "list": true,
        "align": ""
      },
      {
        "type": "paragraph",
        "text": "Tea experience",
        "style": "ListParagraph",
        "list": true,
        "align": ""
      },
      {
        "type": "paragraph",
        "text": "River Excursion",
        "style": "ListParagraph",
        "list": true,
        "align": ""
      },
      {
        "type": "paragraph",
        "text": "Cinnamon & Rubber Plantation Visit",
        "style": "ListParagraph",
        "list": true,
        "align": ""
      },
      {
        "type": "paragraph",
        "text": "Stay – Glenross Living",
        "style": "",
        "list": false,
        "align": ""
      },
      {
        "type": "paragraph",
        "text": "DAY 03 – KAUTARA | KANDY",
        "style": "",
        "list": false,
        "align": ""
      },
      {
        "type": "paragraph",
        "text": "Travel into Sri Lanka’s rich cultural Capital – Kandy",
        "style": "",
        "list": false,
        "align": ""
      },
      {
        "type": "paragraph",
        "text": "Approx. travel time: 3.5–4.5 hours",
        "style": "",
        "list": false,
        "align": ""
      },
      {
        "type": "paragraph",
        "text": "Nestled among mist-covered hills and lush tropical landscapes, Kandy is a captivating destination where Sri Lanka’s rich heritage and spiritual traditions come to life. As the island’s last royal capital, the city is home to the sacred Temple of the Tooth Relic, tranquil Kandy Lake and beautifully preserved cultural landmarks. Visitors can explore vibrant local markets, experience traditional Kandyan dance performances and discover the botanical wonders of nearby Peradeniya. Blending history, culture and natural beauty, Kandy offers an authentic glimpse into the island’s timeless traditions.",
        "style": "",
        "list": false,
        "align": ""
      },
      {
        "type": "paragraph",
        "text": "Things to do",
        "style": "",
        "list": false,
        "align": ""
      },
      {
        "type": "paragraph",
        "text": "Royal Botanic Gardens",
        "style": "ListParagraph",
        "list": true,
        "align": ""
      },
      {
        "type": "paragraph",
        "text": "Temple of the Scared Tooth Relic",
        "style": "ListParagraph",
        "list": true,
        "align": ""
      },
      {
        "type": "paragraph",
        "text": "Evening Cultural Show",
        "style": "ListParagraph",
        "list": true,
        "align": ""
      },
      {
        "type": "paragraph",
        "text": "Jewelry making experience",
        "style": "ListParagraph",
        "list": true,
        "align": ""
      },
      {
        "type": "paragraph",
        "text": "Stay - Taru Villas Kandy",
        "style": "",
        "list": false,
        "align": ""
      },
      {
        "type": "paragraph",
        "text": "DAY 04- KANDY | ELLA",
        "style": "",
        "list": false,
        "align": ""
      },
      {
        "type": "paragraph",
        "text": "Ella – Sri Lank’s flirtiest hill town.",
        "style": "",
        "list": false,
        "align": ""
      },
      {
        "type": "paragraph",
        "text": "Approx. travel time: 4–5 hours",
        "style": "",
        "list": false,
        "align": ""
      },
      {
        "type": "paragraph",
        "text": "Misty peaks, swinging  bridges and a jungle-view beer waiting at the top. Visit for the views and stay because she’s irresistible.",
        "style": "",
        "list": false,
        "align": ""
      },
      {
        "type": "paragraph",
        "text": "Unwind to the chilling hill vibes.",
        "style": "",
        "list": false,
        "align": ""
      },
      {
        "type": "paragraph",
        "text": "Ella is a picturesque hill country haven where dramatic mountain vistas, lush tea estates and unforgettable adventures create one of Sri Lanka’s most beloved escapes. Wander across the iconic Nine Arches Bridge, hike Little Adam’s Peak for panoramic sunrise views, discover cascading waterfalls and soak in the town’s relaxed atmosphere. Blending natural beauty with a laid-back charm, Ella is the perfect destination for both adventure seekers and those looking to unwind.",
        "style": "",
        "list": false,
        "align": ""
      },
      {
        "type": "paragraph",
        "text": "Stay - Serenite Ella",
        "style": "",
        "list": false,
        "align": ""
      },
      {
        "type": "paragraph",
        "text": "DAY O5- ELLA",
        "style": "",
        "list": false,
        "align": ""
      },
      {
        "type": "paragraph",
        "text": "Things you shouldn’t miss when in Ella",
        "style": "",
        "list": false,
        "align": ""
      },
      {
        "type": "paragraph",
        "text": "Scenic Train Journey",
        "style": "ListParagraph",
        "list": true,
        "align": ""
      },
      {
        "type": "paragraph",
        "text": "Explore Ella Village",
        "style": "ListParagraph",
        "list": true,
        "align": ""
      },
      {
        "type": "paragraph",
        "text": "Nine Arch Bridge",
        "style": "ListParagraph",
        "list": true,
        "align": ""
      },
      {
        "type": "paragraph",
        "text": "Little  Adam’s Peak",
        "style": "ListParagraph",
        "list": true,
        "align": ""
      },
      {
        "type": "paragraph",
        "text": "Stay - Serenite Ella",
        "style": "",
        "list": false,
        "align": ""
      },
      {
        "type": "paragraph",
        "text": "DAY O6- ELLA |YALA",
        "style": "",
        "list": false,
        "align": ""
      },
      {
        "type": "paragraph",
        "text": "Sri Lanka’s wild seductress – Yala",
        "style": "",
        "list": false,
        "align": "both"
      },
      {
        "type": "paragraph",
        "text": "Approx. travel time: 2.5 to 3 Hours",
        "style": "",
        "list": false,
        "align": "both"
      },
      {
        "type": "paragraph",
        "text": "Dry scrubland, golden light and Elephants, leopards moving like they own the place yet your luck hits the charm to see them for real.",
        "style": "",
        "list": false,
        "align": ""
      },
      {
        "type": "paragraph",
        "text": "Yala is a captivating wilderness destination where untamed nature and unforgettable wildlife encounters take centre stage. Home to one of the world’s highest densities of leopards, Yala National Park offers thrilling safari experiences through a diverse landscape of open grasslands, dense scrub forests, rocky outcrops and tranquil lagoons. Along the way, visitors may encounter majestic elephants, sloth bears, crocodiles and an extraordinary variety of birdlife in their natural habitat. Beyond the excitement of the safari, Yala’s rugged landscapes and peaceful surroundings create a remarkable connection with nature, making it an essential stop for wildlife enthusiasts and adventurous travellers exploring Sri Lanka.",
        "style": "",
        "list": false,
        "align": ""
      },
      {
        "type": "paragraph",
        "text": "Best Thing to do",
        "style": "",
        "list": false,
        "align": ""
      },
      {
        "type": "paragraph",
        "text": "Morning Game drive on the next day",
        "style": "ListParagraph",
        "list": true,
        "align": ""
      },
      {
        "type": "paragraph",
        "text": "Spend the rest of the day chilled at a luxury safari lodge",
        "style": "ListParagraph",
        "list": true,
        "align": ""
      },
      {
        "type": "paragraph",
        "text": "Stay -Wild Coast Tented Lodge",
        "style": "",
        "list": false,
        "align": ""
      },
      {
        "type": "paragraph",
        "text": "DAY O7- YALA | HIRIKETIYA",
        "style": "",
        "list": false,
        "align": ""
      },
      {
        "type": "paragraph",
        "text": "Your Coastal escape begins by taking this drive to “Hiri” (Hiriketiya)",
        "style": "",
        "list": false,
        "align": ""
      },
      {
        "type": "paragraph",
        "text": "Approx. travel time: 2–2.5 hours",
        "style": "",
        "list": false,
        "align": ""
      },
      {
        "type": "paragraph",
        "text": "A horseshoe bay so perfectly curved. The Place for the waves and stay for laid-back sandy moments.",
        "style": "",
        "list": false,
        "align": ""
      },
      {
        "type": "paragraph",
        "text": "Relax by the beach",
        "style": "",
        "list": false,
        "align": ""
      },
      {
        "type": "paragraph",
        "text": "Hiriketiya is a picturesque coastal hideaway on Sri Lanka’s southern shores, celebrated for its crescent-shaped bay, turquoise waters and laid-back tropical atmosphere. Fringed by lush greenery and charming cafés, this inviting beach destination has become a favourite among surfers, beach lovers and travellers seeking a slower pace of life. Spend your days catching waves, relaxing beneath swaying palms or enjoying fresh seafood by the shore, before unwinding to the gentle rhythm of the ocean. With its blend of natural beauty, surf culture and intimate coastal charm, Hiriketiya is a delightful escape for those seeking an authentic yet contemporary beach experience.",
        "style": "",
        "list": false,
        "align": ""
      },
      {
        "type": "paragraph",
        "text": "Stay - Luxury Boutique Hotel",
        "style": "",
        "list": false,
        "align": ""
      },
      {
        "type": "paragraph",
        "text": "DAY O8-HIRIKETIYA",
        "style": "",
        "list": false,
        "align": ""
      },
      {
        "type": "paragraph",
        "text": "Things to do",
        "style": "",
        "list": false,
        "align": ""
      },
      {
        "type": "paragraph",
        "text": "Beach leisure",
        "style": "ListParagraph",
        "list": true,
        "align": ""
      },
      {
        "type": "paragraph",
        "text": "Swimming /Surfing",
        "style": "ListParagraph",
        "list": true,
        "align": ""
      },
      {
        "type": "paragraph",
        "text": "Sunset Cocktails",
        "style": "ListParagraph",
        "list": true,
        "align": ""
      },
      {
        "type": "paragraph",
        "text": "Stay - Luxury Boutique Hotel",
        "style": "",
        "list": false,
        "align": ""
      },
      {
        "type": "paragraph",
        "text": "DAY 09- HIRIKETIYA | WELIGAMA",
        "style": "",
        "list": false,
        "align": ""
      },
      {
        "type": "paragraph",
        "text": "Beach Holiday continues to be a fresher destination.",
        "style": "",
        "list": false,
        "align": ""
      },
      {
        "type": "paragraph",
        "text": "Approx. travel time: 1–1.5 hours",
        "style": "",
        "list": false,
        "align": ""
      },
      {
        "type": "paragraph",
        "text": "Wide bay, warm water and a wink in every wave – Weligama",
        "style": "",
        "list": false,
        "align": ""
      },
      {
        "type": "paragraph",
        "text": "Weligama is a vibrant southern coastal town renowned for surfing, golden beaches, and laid-back coastal living. Combining adventure and tropical charm, it has become a favourite destination among surfers and beach lovers. Its sweeping bay, gentle waves, and welcoming seaside atmosphere make it an ideal spot for both beginners eager to try surfing and seasoned wave riders. Beyond the beach, discover charming cafés, fresh seafood, colourful fishing boats, and the unique sight of traditional stilt fishermen along the coast. With its relaxed rhythm, beautiful ocean views, and captivating blend of local culture and modern beach life, Weligama invites you to slow down and embrace the easygoing spirit of Sri Lanka’s southern shores.",
        "style": "",
        "list": false,
        "align": ""
      },
      {
        "type": "paragraph",
        "text": "Things to do",
        "style": "",
        "list": false,
        "align": ""
      },
      {
        "type": "paragraph",
        "text": "Scenic Coastal drive",
        "style": "ListParagraph",
        "list": true,
        "align": ""
      },
      {
        "type": "paragraph",
        "text": "Coconut Tree Hill",
        "style": "ListParagraph",
        "list": true,
        "align": ""
      },
      {
        "type": "paragraph",
        "text": "More Surfing",
        "style": "ListParagraph",
        "list": true,
        "align": ""
      },
      {
        "type": "paragraph",
        "text": "Stay – Cape Weligama",
        "style": "",
        "list": false,
        "align": ""
      },
      {
        "type": "paragraph",
        "text": "DAY 10-  WELIGAMA",
        "style": "",
        "list": false,
        "align": ""
      },
      {
        "type": "paragraph",
        "text": "Rise early to test your luck on seeing the largest ocean giants to ever live on earth – Blue Whales . They are frequently seen just off the southern coast",
        "style": "",
        "list": false,
        "align": ""
      },
      {
        "type": "paragraph",
        "text": "Things to do",
        "style": "",
        "list": false,
        "align": ""
      },
      {
        "type": "paragraph",
        "text": "Take a Whale watching Tour",
        "style": "ListParagraph",
        "list": true,
        "align": ""
      },
      {
        "type": "paragraph",
        "text": "Relax at the Resort",
        "style": "ListParagraph",
        "list": true,
        "align": ""
      },
      {
        "type": "paragraph",
        "text": "Stay - Cape Weligama",
        "style": "",
        "list": false,
        "align": ""
      },
      {
        "type": "paragraph",
        "text": "DAY 11  -WELIGAMA|AHANGAMA",
        "style": "",
        "list": false,
        "align": ""
      },
      {
        "type": "paragraph",
        "text": "Heading on to the 3rd Beach destination,",
        "style": "",
        "list": false,
        "align": ""
      },
      {
        "type": "paragraph",
        "text": "Approx. travel time: 30–45 minutes",
        "style": "",
        "list": false,
        "align": ""
      },
      {
        "type": "paragraph",
        "text": "it’s a bohemian paradise where world class surf breaks mee a paid back creative energy- Ahangama.",
        "style": "",
        "list": false,
        "align": ""
      },
      {
        "type": "paragraph",
        "text": "Ahangama is a stylish southern coastal destination where traditional Sri Lankan charm meets a vibrant surf and café culture. Famous for its long sandy beaches, rolling waves and iconic stilt fishermen, this laid-back town attracts surfers, creatives and travellers drawn to its relaxed tropical lifestyle. Beyond the shoreline, discover boutique stays, independent cafés, wellness retreats and locally inspired dining experiences, all set against a backdrop of swaying coconut palms and the sparkling Indian Ocean. Blending authentic coastal traditions with a contemporary bohemian spirit, Ahangama offers a refreshing and memorable escape along Sri Lanka’s southern coast.",
        "style": "",
        "list": false,
        "align": ""
      },
      {
        "type": "paragraph",
        "text": "Things to do",
        "style": "",
        "list": false,
        "align": ""
      },
      {
        "type": "paragraph",
        "text": "Visit stilt fisherman",
        "style": "ListParagraph",
        "list": true,
        "align": ""
      },
      {
        "type": "paragraph",
        "text": "Koggala Lake",
        "style": "ListParagraph",
        "list": true,
        "align": ""
      },
      {
        "type": "paragraph",
        "text": "Boutique cafes",
        "style": "ListParagraph",
        "list": true,
        "align": ""
      },
      {
        "type": "paragraph",
        "text": "Relax at the resort for a peaceful escape",
        "style": "ListParagraph",
        "list": true,
        "align": ""
      },
      {
        "type": "paragraph",
        "text": "Stay - Malabar Hill",
        "style": "",
        "list": false,
        "align": ""
      },
      {
        "type": "paragraph",
        "text": "DAY 12 -AHANGAMA",
        "style": "",
        "list": false,
        "align": ""
      },
      {
        "type": "paragraph",
        "text": "Things to do",
        "style": "",
        "list": false,
        "align": ""
      },
      {
        "type": "paragraph",
        "text": "Explore Galle Fort",
        "style": "ListParagraph",
        "list": true,
        "align": ""
      },
      {
        "type": "paragraph",
        "text": "Boutique Shopping",
        "style": "ListParagraph",
        "list": true,
        "align": ""
      },
      {
        "type": "paragraph",
        "text": "Sunset walks on the Fort ramparts",
        "style": "ListParagraph",
        "list": true,
        "align": ""
      },
      {
        "type": "paragraph",
        "text": "Fine Dining",
        "style": "ListParagraph",
        "list": true,
        "align": ""
      },
      {
        "type": "paragraph",
        "text": "Stay -  Malabar Hill",
        "style": "",
        "list": false,
        "align": ""
      },
      {
        "type": "paragraph",
        "text": "DAY 13 -AHANGAMA| BENTOTA",
        "style": "",
        "list": false,
        "align": ""
      },
      {
        "type": "paragraph",
        "text": "Taking the final overnight stop of the holiday at Bentota.",
        "style": "",
        "list": false,
        "align": ""
      },
      {
        "type": "paragraph",
        "text": "Approx. travel time: 2–2.5 hours",
        "style": "",
        "list": false,
        "align": ""
      },
      {
        "type": "paragraph",
        "text": "Bentota is a tropical coastal retreat renowned for its golden sandy beaches, swaying coconut palms and inviting Indian Ocean waters. Offering the perfect balance of relaxation and adventure, this popular beach destination is ideal for sun-soaked days, refreshing swims and exciting water sports. The scenic Bentota River adds another dimension to the experience, with boat safaris through mangrove-lined waterways revealing fascinating birdlife and lush natural surroundings. From indulgent beachfront resorts and rejuvenating Ayurvedic wellness experiences to leisurely river cruises and beautiful coastal sunsets, Bentota captures the essence of a tropical Sri Lankan escape.",
        "style": "",
        "list": false,
        "align": ""
      },
      {
        "type": "paragraph",
        "text": "Things to do",
        "style": "",
        "list": false,
        "align": ""
      },
      {
        "type": "paragraph",
        "text": "Visit Geoffrey Bawa’s Lunuganga Estate",
        "style": "ListParagraph",
        "list": true,
        "align": ""
      },
      {
        "type": "paragraph",
        "text": "Relax beside Dedduwa Lake",
        "style": "ListParagraph",
        "list": true,
        "align": ""
      },
      {
        "type": "paragraph",
        "text": "Farewell Dinner",
        "style": "ListParagraph",
        "list": true,
        "align": ""
      },
      {
        "type": "paragraph",
        "text": "Stay  -Lunuganga by Teardrop Hotels",
        "style": "",
        "list": false,
        "align": ""
      },
      {
        "type": "paragraph",
        "text": "DAY 14 – BENTOTA | AIRPORT",
        "style": "",
        "list": false,
        "align": ""
      },
      {
        "type": "paragraph",
        "text": "Approx. travel time: 2–3 hours",
        "style": "",
        "list": false,
        "align": ""
      },
      {
        "type": "paragraph",
        "text": "We will be taking the transfer to BIA (Bandaranaike International Airport) for your onward flight ,taking home unforgettable memories of Sri Lanka’s  wildlife, culture, beaches & warm hospitality.",
        "style": "",
        "list": false,
        "align": ""
      }
    ]
  },
  {
    "id": "eco-luxury-off-grid-lost-in-the-green",
    "name": "Eco Luxury Off Grid-Lost in the Green",
    "sourceFile": "Eco Luxury Off Grid-Lost in the Green.docx",
    "title": "ECO LUXURY OFF GRID,LOST IN THE GREEN – 14DAYS|13 NIGHTS",
    "image": "/3aaa188a-cac8-4da0-93ad-bc14a5dedf10.jpg",
    "blocks": [
      {
        "type": "paragraph",
        "text": "ECO LUXURY OFF GRID,LOST IN THE GREEN – 14DAYS|13 NIGHTS",
        "style": "",
        "list": false,
        "align": "center"
      },
      {
        "type": "paragraph",
        "text": "Where the wild whispers, luxury finds its way home.",
        "style": "",
        "list": false,
        "align": ""
      },
      {
        "type": "paragraph",
        "text": "Step away from the ordinary and lose yourself in Sri Lanka’s wildest greens. This journey brings together eco-luxury, adventure and untouched nature, ending with the charm of Sri Lanka’s southern coast.",
        "style": "",
        "list": false,
        "align": ""
      },
      {
        "type": "paragraph",
        "text": "DAY 1 — AIRPORT | WILPATTU",
        "style": "",
        "list": false,
        "align": ""
      },
      {
        "type": "paragraph",
        "text": "Where the wild journey begins",
        "style": "",
        "list": false,
        "align": ""
      },
      {
        "type": "paragraph",
        "text": "Approx travel time: 3.5 to 4 hours",
        "style": "",
        "list": false,
        "align": ""
      },
      {
        "type": "paragraph",
        "text": "Meet your Magical Paradise journey guide at the airport and leave the bustle behind as you travel towards the quieter north-western landscapes of Sri Lanka.",
        "style": "",
        "list": false,
        "align": ""
      },
      {
        "type": "paragraph",
        "text": "Reach to the North Western province of Sri Lanka dry zone scrub jungles, where the experience immediately shifts into wilderness mode.",
        "style": "",
        "list": false,
        "align": ""
      },
      {
        "type": "paragraph",
        "text": "Wilpattu is a captivating wilderness destination on Sri Lanka’s northwestern coast, renowned for its expansive forests, natural lakes and remarkable wildlife. As one of the island’s largest national parks, it offers an immersive safari experience through dry-zone woodlands, open clearings and distinctive rain-fed lakes known as villus. Visitors may encounter the elusive Sri Lankan leopard, sloth bears, elephants, spotted deer and a fascinating variety of birdlife while exploring the park by jeep. With its untamed landscapes, quieter safari atmosphere and rich biodiversity, Wilpattu is an exceptional destination for wildlife enthusiasts, photographers and travellers seeking an authentic connection with nature.",
        "style": "",
        "list": false,
        "align": ""
      },
      {
        "type": "paragraph",
        "text": "Things to do",
        "style": "",
        "list": false,
        "align": ""
      },
      {
        "type": "paragraph",
        "text": "Scenic drive through rural Sri Lanka",
        "style": "",
        "list": true,
        "align": ""
      },
      {
        "type": "paragraph",
        "text": "Settle into the wilderness lodge",
        "style": "",
        "list": true,
        "align": ""
      },
      {
        "type": "paragraph",
        "text": "Relax by the natural surroundings",
        "style": "",
        "list": true,
        "align": ""
      },
      {
        "type": "paragraph",
        "text": "Evening nature experience",
        "style": "",
        "list": true,
        "align": ""
      },
      {
        "type": "paragraph",
        "text": "Sunset and dinner in the wild",
        "style": "",
        "list": true,
        "align": ""
      },
      {
        "type": "paragraph",
        "text": "Handpicked Stay Options —Taru Villas – Villu| | Thamarawila Wilpattu|The Mud House",
        "style": "",
        "list": false,
        "align": ""
      },
      {
        "type": "paragraph",
        "text": "DAY 2 — WILPATTU",
        "style": "",
        "list": false,
        "align": ""
      },
      {
        "type": "paragraph",
        "text": "Into the island's wildest wilderness",
        "style": "",
        "list": false,
        "align": ""
      },
      {
        "type": "paragraph",
        "text": "A full day dedicated to Wilpattu National Park, Sri Lanka's largest national park, known for its distinctive villus — natural lakes scattered through the forest.",
        "style": "",
        "list": false,
        "align": ""
      },
      {
        "type": "paragraph",
        "text": "Things to do",
        "style": "",
        "list": false,
        "align": ""
      },
      {
        "type": "paragraph",
        "text": "Early morning Wilpattu safari",
        "style": "",
        "list": true,
        "align": ""
      },
      {
        "type": "paragraph",
        "text": "Leopard tracking",
        "style": "",
        "list": true,
        "align": ""
      },
      {
        "type": "paragraph",
        "text": "Look for sloth bear, elephant, deer and wild boar",
        "style": "",
        "list": true,
        "align": ""
      },
      {
        "type": "paragraph",
        "text": "Birdwatching around the villus",
        "style": "",
        "list": true,
        "align": ""
      },
      {
        "type": "paragraph",
        "text": "Return to the lodge for a relaxed afternoon",
        "style": "",
        "list": true,
        "align": ""
      },
      {
        "type": "paragraph",
        "text": "Handpicked Stay Options —Taru Villas – Villu| | Thamarawila Wilpattu|The Mud House",
        "style": "",
        "list": false,
        "align": ""
      },
      {
        "type": "paragraph",
        "text": "DAY 3 — WILPATTU | SIGIRIYA",
        "style": "",
        "list": false,
        "align": ""
      },
      {
        "type": "paragraph",
        "text": "From wilderness to ancient landscapes",
        "style": "",
        "list": false,
        "align": ""
      },
      {
        "type": "paragraph",
        "text": "Approx. travel time: 3–4 hours",
        "style": "",
        "list": false,
        "align": ""
      },
      {
        "type": "paragraph",
        "text": "Leave Wilpattu behind and travel towards the Cultural Triangle.",
        "style": "",
        "list": false,
        "align": ""
      },
      {
        "type": "paragraph",
        "text": "Discover the heart of Sri Lanka’s Cultural Triangle, where ancient kingdoms, remarkable architecture and timeless traditions tell the story of a fascinating past. Sigiriya captivates visitors with its iconic Lion Rock fortress, dramatic scenery and ancient frescoes, while nearby Dambulla is renowned for its impressive cave temple complex, adorned with centuries-old Buddhist murals and statues. Surrounded by lush greenery, rural villages and scenic countryside, these destinations offer a memorable journey through the island’s rich history, spiritual heritage and extraordinary cultural treasures.",
        "style": "",
        "list": false,
        "align": ""
      },
      {
        "type": "paragraph",
        "text": "Your destination is an eco-luxury sanctuary set among wetlands and paddy landscapes.",
        "style": "",
        "list": false,
        "align": ""
      },
      {
        "type": "paragraph",
        "text": "Things to do",
        "style": "",
        "list": false,
        "align": ""
      },
      {
        "type": "paragraph",
        "text": "Scenic countryside drive",
        "style": "",
        "list": true,
        "align": ""
      },
      {
        "type": "paragraph",
        "text": "Arrive and settle into your private habitat",
        "style": "",
        "list": true,
        "align": ""
      },
      {
        "type": "paragraph",
        "text": "Explore the property's nature trails",
        "style": "",
        "list": true,
        "align": ""
      },
      {
        "type": "paragraph",
        "text": "Birdwatching",
        "style": "",
        "list": true,
        "align": ""
      },
      {
        "type": "paragraph",
        "text": "Loris Night Trail / nocturnal nature experience",
        "style": "",
        "list": true,
        "align": ""
      },
      {
        "type": "paragraph",
        "text": "Relax beside the wetlands",
        "style": "",
        "list": true,
        "align": ""
      },
      {
        "type": "paragraph",
        "text": "Handpicked Stay — Jetwing Vil Uyana",
        "style": "",
        "list": false,
        "align": ""
      },
      {
        "type": "paragraph",
        "text": "DAY 4 — SIGIRIYA",
        "style": "",
        "list": false,
        "align": ""
      },
      {
        "type": "paragraph",
        "text": "Ancient kingdoms & living wetlands",
        "style": "",
        "list": false,
        "align": ""
      },
      {
        "type": "paragraph",
        "text": "A day combining Sri Lanka's ancient heritage with the extraordinary natural setting around Vil Uyana.",
        "style": "",
        "list": false,
        "align": ""
      },
      {
        "type": "paragraph",
        "text": "Things to do",
        "style": "",
        "list": false,
        "align": ""
      },
      {
        "type": "paragraph",
        "text": "Sunrise at Pidurangala Rock",
        "style": "",
        "list": true,
        "align": ""
      },
      {
        "type": "paragraph",
        "text": "Visit Sigiriya Rock Fortress",
        "style": "",
        "list": true,
        "align": ""
      },
      {
        "type": "paragraph",
        "text": "Explore Dambulla Cave Temple",
        "style": "",
        "list": true,
        "align": ""
      },
      {
        "type": "paragraph",
        "text": "Optional village experience /Cycling tour in Sigiriya",
        "style": "",
        "list": true,
        "align": ""
      },
      {
        "type": "paragraph",
        "text": "Relax at Vil Uyana",
        "style": "",
        "list": true,
        "align": ""
      },
      {
        "type": "paragraph",
        "text": "Handpicked Stay — Jetwing Vil Uyana",
        "style": "",
        "list": false,
        "align": ""
      },
      {
        "type": "paragraph",
        "text": "DAY 5 — SIGIRIYA | MADULKELLE",
        "style": "",
        "list": false,
        "align": ""
      },
      {
        "type": "paragraph",
        "text": "Into the misty tea country",
        "style": "",
        "list": false,
        "align": ""
      },
      {
        "type": "paragraph",
        "text": "Approx. travel time: 3–4 hours",
        "style": "",
        "list": false,
        "align": ""
      },
      {
        "type": "paragraph",
        "text": "The landscape changes dramatically as you travel south into the central highlands.",
        "style": "",
        "list": false,
        "align": ""
      },
      {
        "type": "paragraph",
        "text": "Arrive at Madulkelle Tea & Eco Lodge, surrounded by mountain scenery and tea country.",
        "style": "",
        "list": false,
        "align": ""
      },
      {
        "type": "paragraph",
        "text": "Perched high in Sri Lanka’s central highlands, Madulkelle Tea & Eco Lodge is a secluded mountain retreat surrounded by lush tea plantations and breathtaking views of the Knuckles Mountain Range. Set approximately 1,000 metres above sea level, this distinctive eco-lodge combines the charm of tea-estate living with the comfort of luxury tented accommodation. Guests can savour the cool mountain air, enjoy panoramic valley views, explore the surrounding plantations and embark on guided nature walks and hiking adventures. With its peaceful setting, immersive outdoor experiences and understated luxury, Madulkelle offers a memorable escape for travellers seeking tranquillity and a deeper connection with Sri Lanka’s hill country.",
        "style": "",
        "list": false,
        "align": ""
      },
      {
        "type": "paragraph",
        "text": "Things to do",
        "style": "",
        "list": false,
        "align": ""
      },
      {
        "type": "paragraph",
        "text": "Scenic highland drive",
        "style": "",
        "list": true,
        "align": ""
      },
      {
        "type": "paragraph",
        "text": "Tea plantation visit",
        "style": "",
        "list": true,
        "align": ""
      },
      {
        "type": "paragraph",
        "text": "Tea tasting",
        "style": "",
        "list": true,
        "align": ""
      },
      {
        "type": "paragraph",
        "text": "Walk through the estate",
        "style": "",
        "list": true,
        "align": ""
      },
      {
        "type": "paragraph",
        "text": "Relax and take in the mountain views",
        "style": "",
        "list": true,
        "align": ""
      },
      {
        "type": "paragraph",
        "text": "Handpicked Stay — Madulkelle Tea & Eco Lodge",
        "style": "",
        "list": false,
        "align": ""
      },
      {
        "type": "paragraph",
        "text": "DAY 6 — MADULKELLE",
        "style": "",
        "list": false,
        "align": ""
      },
      {
        "type": "paragraph",
        "text": "A day among the tea hills",
        "style": "",
        "list": false,
        "align": ""
      },
      {
        "type": "paragraph",
        "text": "Slow the pace and experience the highlands from your lodge.",
        "style": "",
        "list": false,
        "align": ""
      },
      {
        "type": "paragraph",
        "text": "Things to do",
        "style": "",
        "list": false,
        "align": ""
      },
      {
        "type": "paragraph",
        "text": "Guided tea estate walk",
        "style": "",
        "list": true,
        "align": ""
      },
      {
        "type": "paragraph",
        "text": "Meet local tea workers",
        "style": "",
        "list": true,
        "align": ""
      },
      {
        "type": "paragraph",
        "text": "Village exploration",
        "style": "",
        "list": true,
        "align": ""
      },
      {
        "type": "paragraph",
        "text": "Relax at the lodge overlooking the mountains",
        "style": "",
        "list": true,
        "align": ""
      },
      {
        "type": "paragraph",
        "text": "Optional Kandy City Tour",
        "style": "",
        "list": true,
        "align": ""
      },
      {
        "type": "paragraph",
        "text": "Handpicked Stay — Madulkelle Tea & Eco Lodge",
        "style": "",
        "list": false,
        "align": ""
      },
      {
        "type": "paragraph",
        "text": "DAY 7 — MADULKELLE | BALANGODA",
        "style": "",
        "list": false,
        "align": ""
      },
      {
        "type": "paragraph",
        "text": "From tea country to the wild bush",
        "style": "",
        "list": false,
        "align": ""
      },
      {
        "type": "paragraph",
        "text": "Approx. travel time: 5–6 hours",
        "style": "",
        "list": false,
        "align": ""
      },
      {
        "type": "paragraph",
        "text": "Leave the tea estates behind and journey deeper into Sri Lanka's lesser-known wilderness.",
        "style": "",
        "list": false,
        "align": ""
      },
      {
        "type": "paragraph",
        "text": "Arrive at Ahaspokuna Bush Walks Camp, where accommodation becomes part of the adventure itself.",
        "style": "",
        "list": false,
        "align": ""
      },
      {
        "type": "paragraph",
        "text": "Hidden within the remote wilderness near Balangoda, Ahaspokuna Bush Walks Nature Resort offers a distinctive off-grid escape where luxury meets the raw beauty of Sri Lanka’s natural landscapes. Surrounded by expansive grasslands, forested hills and panoramic countryside views, this exclusive glamping retreat invites guests to experience the wilderness at a slower, more intimate pace. Guided bush walks with experienced naturalists, wildlife observation, scenic viewpoints and immersive outdoor experiences reveal the fascinating flora, fauna and landscapes of the surrounding wilderness. With its secluded setting, personalised hospitality and emphasis on exploration rather than conventional resort living, Ahaspokuna is an exceptional choice for adventurous travellers seeking privacy, nature and a truly distinctive wilderness experience.",
        "style": "",
        "list": false,
        "align": ""
      },
      {
        "type": "paragraph",
        "text": "Things to do",
        "style": "",
        "list": false,
        "align": ""
      },
      {
        "type": "paragraph",
        "text": "Scenic mountain drive",
        "style": "ListParagraph",
        "list": true,
        "align": ""
      },
      {
        "type": "paragraph",
        "text": "Arrive at the bush camp",
        "style": "ListParagraph",
        "list": true,
        "align": ""
      },
      {
        "type": "paragraph",
        "text": "Guided nature walk",
        "style": "ListParagraph",
        "list": true,
        "align": ""
      },
      {
        "type": "paragraph",
        "text": "Explore the surrounding wilderness",
        "style": "ListParagraph",
        "list": true,
        "align": ""
      },
      {
        "type": "paragraph",
        "text": "Campfire / evening in the bush",
        "style": "ListParagraph",
        "list": true,
        "align": ""
      },
      {
        "type": "paragraph",
        "text": "Stay — Ahaspokuna Bush Walks Camp",
        "style": "",
        "list": false,
        "align": ""
      },
      {
        "type": "paragraph",
        "text": "DAY 8 — BALANGODA | BELIHULOYA",
        "style": "",
        "list": false,
        "align": ""
      },
      {
        "type": "paragraph",
        "text": "Walking deeper into the wild",
        "style": "",
        "list": false,
        "align": ""
      },
      {
        "type": "paragraph",
        "text": "Approx. travel time: 45 minutes–1.5 hours",
        "style": "",
        "list": false,
        "align": ""
      },
      {
        "type": "paragraph",
        "text": "A shorter transfer today allows more time for nature.",
        "style": "",
        "list": false,
        "align": ""
      },
      {
        "type": "paragraph",
        "text": "After your final bush camp experience at Ahaspokuna, continue towards Belihuloya and Glenrock Nature Resort.",
        "style": "",
        "list": false,
        "align": ""
      },
      {
        "type": "paragraph",
        "text": "Tucked away in the picturesque highlands of Belihuloya, The Glenrock Nature Resort is a tranquil riverside retreat where lush forests, dramatic mountain scenery and flowing streams create an intimate connection with nature. Set beside the Belihuloya River, this boutique hideaway blends contemporary comforts with an eco-conscious approach, allowing guests to unwind to the soothing sounds of cascading water and birdsong. Visitors can explore nearby waterfalls, enjoy refreshing river experiences, discover scenic walking trails and appreciate the rich biodiversity of the surrounding countryside. Combining understated luxury with authentic natural surroundings, The Glenrock offers a rejuvenating escape for travellers seeking peaceful seclusion, outdoor adventure and a refreshing perspective on Sri Lanka’s central highlands.",
        "style": "",
        "list": false,
        "align": ""
      },
      {
        "type": "paragraph",
        "text": "Things to do",
        "style": "",
        "list": false,
        "align": ""
      },
      {
        "type": "paragraph",
        "text": "Morning bush walk",
        "style": "",
        "list": true,
        "align": ""
      },
      {
        "type": "paragraph",
        "text": "Forest and mountain exploration",
        "style": "",
        "list": true,
        "align": ""
      },
      {
        "type": "paragraph",
        "text": "Scenic drive towards Belihuloya",
        "style": "",
        "list": true,
        "align": ""
      },
      {
        "type": "paragraph",
        "text": "Nature walks around Glenrock",
        "style": "",
        "list": true,
        "align": ""
      },
      {
        "type": "paragraph",
        "text": "Relax beside the surrounding wilderness",
        "style": "",
        "list": true,
        "align": ""
      },
      {
        "type": "paragraph",
        "text": "Stay — Glenrock Nature Resort",
        "style": "",
        "list": false,
        "align": ""
      },
      {
        "type": "paragraph",
        "text": "DAY 9 — BELIHULOYA | YALA",
        "style": "",
        "list": false,
        "align": ""
      },
      {
        "type": "paragraph",
        "text": "From mountain wilderness to leopard country",
        "style": "",
        "list": false,
        "align": ""
      },
      {
        "type": "paragraph",
        "text": "Approx. travel time: 3–4 hours",
        "style": "",
        "list": false,
        "align": ""
      },
      {
        "type": "paragraph",
        "text": "Today is one of the longer scenic drives, taking you from the central highlands towards the dry-zone landscapes of Yala.",
        "style": "",
        "list": false,
        "align": ""
      },
      {
        "type": "paragraph",
        "text": "Arrive at Yala, where your accommodation becomes a safari experience.",
        "style": "",
        "list": false,
        "align": ""
      },
      {
        "type": "paragraph",
        "text": "Yala is a captivating wilderness destination where untamed nature and unforgettable wildlife encounters take centre stage. Home to one of the world’s highest densities of leopards, Yala National Park offers thrilling safari experiences through a diverse landscape of open grasslands, dense scrub forests, rocky outcrops and tranquil lagoons. Along the way, visitors may encounter majestic elephants, sloth bears, crocodiles and an extraordinary variety of birdlife in their natural habitat. Beyond the excitement of the safari, Yala’s rugged landscapes and peaceful surroundings create a remarkable connection with nature, making it an essential stop for wildlife enthusiasts and adventurous travellers exploring Sri Lanka.",
        "style": "",
        "list": false,
        "align": ""
      },
      {
        "type": "paragraph",
        "text": "Things to do",
        "style": "",
        "list": false,
        "align": ""
      },
      {
        "type": "paragraph",
        "text": "Scenic journey through changing landscapes",
        "style": "",
        "list": true,
        "align": ""
      },
      {
        "type": "paragraph",
        "text": "Settle into camp",
        "style": "",
        "list": true,
        "align": ""
      },
      {
        "type": "paragraph",
        "text": "Evening safari / nature experience",
        "style": "",
        "list": true,
        "align": ""
      },
      {
        "type": "paragraph",
        "text": "Campfire under the stars",
        "style": "",
        "list": true,
        "align": ""
      },
      {
        "type": "paragraph",
        "text": "Handpicked Stay Options — Leopard Trails Yala|Tribe Yala|Wild Coast Tented Lodge|Chena Huts|Makini Bush Camp|Tree Tops Jungle",
        "style": "",
        "list": false,
        "align": ""
      },
      {
        "type": "paragraph",
        "text": "DAY 10 — YALA",
        "style": "",
        "list": false,
        "align": ""
      },
      {
        "type": "paragraph",
        "text": "A day in leopard country",
        "style": "",
        "list": false,
        "align": ""
      },
      {
        "type": "paragraph",
        "text": "Wake up surrounded by the sounds of the Yala wilderness.",
        "style": "",
        "list": false,
        "align": ""
      },
      {
        "type": "paragraph",
        "text": "Things to do",
        "style": "",
        "list": false,
        "align": ""
      },
      {
        "type": "paragraph",
        "text": "Dawn Yala National Park safari",
        "style": "",
        "list": true,
        "align": ""
      },
      {
        "type": "paragraph",
        "text": "Leopard tracking",
        "style": "",
        "list": true,
        "align": ""
      },
      {
        "type": "paragraph",
        "text": "Look for elephants, sloth bears, crocodiles and deer",
        "style": "",
        "list": true,
        "align": ""
      },
      {
        "type": "paragraph",
        "text": "Birdwatching",
        "style": "",
        "list": true,
        "align": ""
      },
      {
        "type": "paragraph",
        "text": "Return to camp for lunch and relaxation",
        "style": "",
        "list": true,
        "align": ""
      },
      {
        "type": "paragraph",
        "text": "Evening around the campfire",
        "style": "",
        "list": true,
        "align": ""
      },
      {
        "type": "paragraph",
        "text": "Handpicked Stay Options — Leopard Trails Yala|Tribe Yala|Wild Coast Tented Lodge|Chena Huts|Makini Bush Camp|Tree Tops Jungle",
        "style": "",
        "list": false,
        "align": ""
      },
      {
        "type": "paragraph",
        "text": "DAY 11 — YALA | GALLE",
        "style": "",
        "list": false,
        "align": ""
      },
      {
        "type": "paragraph",
        "text": "Where the wild journey ends at the south of the island",
        "style": "",
        "list": false,
        "align": ""
      },
      {
        "type": "paragraph",
        "text": "Approx. travel time: 3–4 hours",
        "style": "",
        "list": false,
        "align": ""
      },
      {
        "type": "paragraph",
        "text": "Galle is a charming coastal destination where centuries of history meet the relaxed elegance of seaside living. At its heart lies the UNESCO-listed Galle Fort, a beautifully preserved historic quarter of cobblestone streets, colonial-era architecture, old churches and charming Dutch-style buildings. Visitors can wander through boutique shops, art galleries and atmospheric cafés, stroll along the fort’s ocean-facing ramparts and enjoy spectacular sunset views over the Indian Ocean. With its rich maritime heritage, vibrant local culture and laid-back coastal charm, Galle offers a memorable blend of history, discovery and seaside romance.",
        "style": "",
        "list": false,
        "align": ""
      },
      {
        "type": "paragraph",
        "text": "Keeping this as your relaxed final days rather than filling it with sightseeing.",
        "style": "",
        "list": false,
        "align": ""
      },
      {
        "type": "paragraph",
        "text": "Things to do",
        "style": "",
        "list": false,
        "align": ""
      },
      {
        "type": "paragraph",
        "text": "Yoga sessions",
        "style": "",
        "list": true,
        "align": ""
      },
      {
        "type": "paragraph",
        "text": "Surfing experience",
        "style": "",
        "list": true,
        "align": ""
      },
      {
        "type": "paragraph",
        "text": "Galle Fort",
        "style": "",
        "list": true,
        "align": ""
      },
      {
        "type": "paragraph",
        "text": "Beach time",
        "style": "",
        "list": true,
        "align": ""
      },
      {
        "type": "paragraph",
        "text": "Relax in the eco-lodge setting",
        "style": "",
        "list": true,
        "align": ""
      },
      {
        "type": "paragraph",
        "text": "Handpicked Stay Options — Huma Terra Lodge |Tekanda Lodge",
        "style": "",
        "list": false,
        "align": ""
      },
      {
        "type": "paragraph",
        "text": "DAY 12 & 13  — GALLE",
        "style": "",
        "list": false,
        "align": ""
      },
      {
        "type": "paragraph",
        "text": "Relax and unwind",
        "style": "",
        "list": false,
        "align": ""
      },
      {
        "type": "paragraph",
        "text": "Things to do",
        "style": "",
        "list": false,
        "align": ""
      },
      {
        "type": "paragraph",
        "text": "Temple visits",
        "style": "",
        "list": true,
        "align": ""
      },
      {
        "type": "paragraph",
        "text": "Wellness experience",
        "style": "",
        "list": true,
        "align": ""
      },
      {
        "type": "paragraph",
        "text": "Relax and unwind",
        "style": "",
        "list": true,
        "align": ""
      },
      {
        "type": "paragraph",
        "text": "Handpicked Stay Options — Huma Terra Lodge |Tekanda Lodge",
        "style": "",
        "list": false,
        "align": ""
      },
      {
        "type": "paragraph",
        "text": "DAY 14 — GALLE | AIRPORT",
        "style": "",
        "list": false,
        "align": ""
      },
      {
        "type": "paragraph",
        "text": "The final Chapter",
        "style": "",
        "list": false,
        "align": ""
      },
      {
        "type": "paragraph",
        "text": "Approx. travel time: 2.5–3.5 hours",
        "style": "",
        "list": false,
        "align": ""
      },
      {
        "type": "paragraph",
        "text": "Enjoy a leisurely final breakfast surrounded by greenery before your private transfer to Bandaranaike International Airport.",
        "style": "",
        "list": false,
        "align": ""
      },
      {
        "type": "paragraph",
        "text": "Journey ends at Bandaranaike International Airport.",
        "style": "",
        "list": false,
        "align": ""
      }
    ]
  },
  {
    "id": "golf-tour",
    "name": "Golf Tour",
    "sourceFile": "Golf Tour.docx",
    "title": "Ceylon Golf Trail – 10 Days |9 Nights",
    "image": "/30e010b1-2b6c-4f87-81a5-d45d39aae23c.jpg",
    "blocks": [
      {
        "type": "paragraph",
        "text": "Ceylon Golf Trail – 10 Days |9 Nights",
        "style": "",
        "list": false,
        "align": "center"
      },
      {
        "type": "paragraph",
        "text": "Tee off across Ceylon’s finest greens",
        "style": "",
        "list": false,
        "align": ""
      },
      {
        "type": "paragraph",
        "text": "Discover Sri Lanka through its most prestigious golf courses while experiencing the island’s rich heritage, spectacular scenery and renowned hospitality. Designed for passionate golfers and accompanying non-golfers alike, this itinerary combines championship fairways with luxury accommodation, cultural landmarks, scenic hill country, wildlife and idyllic coastal escapes, creating the perfect golfing holiday in Paradise.",
        "style": "",
        "list": false,
        "align": ""
      },
      {
        "type": "paragraph",
        "text": "DAY01- AIRPORT|COLOMBO",
        "style": "",
        "list": false,
        "align": ""
      },
      {
        "type": "paragraph",
        "text": "Where the journey begins",
        "style": "",
        "list": false,
        "align": ""
      },
      {
        "type": "paragraph",
        "text": "Approx. travel time: 45 minutes–1.5 hours",
        "style": "",
        "list": false,
        "align": ""
      },
      {
        "type": "paragraph",
        "text": "Meet your personal chauffeur guide upon arrival and transfer to “Colombo” your first taste of Sri Lanka. Relax after your international flight before beginning your golfing adventure.",
        "style": "",
        "list": false,
        "align": ""
      },
      {
        "type": "paragraph",
        "text": "Colombo is a captivating blend of colonial heritage, vibrant city life and modern sophistication, offering a fascinating glimpse into Sri Lanka’s past and present. From the historic charm of Fort and the colourful streets of Pettah to the oceanfront promenade of Galle Face Green and the serene beauty of Gangaramaya Temple, the city invites visitors to discover its many contrasts. With stylish hotels, diverse culinary experiences, bustling markets, boutique shopping and lively nightlife, Colombo is an ideal introduction to the island’s culture, character and contemporary lifestyle.",
        "style": "",
        "list": false,
        "align": ""
      },
      {
        "type": "paragraph",
        "text": "Handpicked Stay – Cinnamon City of Dreams |Paradise road Tintagel Aathma Colombo House| Ishq Colombo",
        "style": "",
        "list": false,
        "align": ""
      },
      {
        "type": "paragraph",
        "text": "DAY 02 -COLOMBO",
        "style": "",
        "list": false,
        "align": ""
      },
      {
        "type": "paragraph",
        "text": "Let’s tee off at one of Asia’s oldest and most prestigious golf clubs – Royal Colombo Golf Club",
        "style": "",
        "list": false,
        "align": ""
      },
      {
        "type": "paragraph",
        "text": "Activities",
        "style": "",
        "list": false,
        "align": ""
      },
      {
        "type": "paragraph",
        "text": "18 holes Championship round",
        "style": "ListParagraph",
        "list": true,
        "align": ""
      },
      {
        "type": "paragraph",
        "text": "Cub house lunch",
        "style": "ListParagraph",
        "list": true,
        "align": ""
      },
      {
        "type": "paragraph",
        "text": "Colombo city highlights",
        "style": "ListParagraph",
        "list": true,
        "align": ""
      },
      {
        "type": "paragraph",
        "text": "Handpicked Stay –   Cinnamon City of Dreams |Paradise road Tintagel Aathma Colombo House| Ishq Colombo",
        "style": "",
        "list": false,
        "align": ""
      },
      {
        "type": "paragraph",
        "text": "DAY 03 – COLOMBO | KANDY",
        "style": "",
        "list": false,
        "align": ""
      },
      {
        "type": "paragraph",
        "text": "From city lights to sacred hills",
        "style": "",
        "list": false,
        "align": ""
      },
      {
        "type": "paragraph",
        "text": "Approx. travel time: 3–4 hours",
        "style": "",
        "list": false,
        "align": ""
      },
      {
        "type": "paragraph",
        "text": "Journey to Sri Lanka’s hill capital Kandy. Road Trip or Take the most scenic route by Air under the Lankan skies.",
        "style": "",
        "list": false,
        "align": ""
      },
      {
        "type": "paragraph",
        "text": "Nestled among mist-covered hills and lush tropical landscapes, Kandy is a captivating destination where Sri Lanka’s rich heritage and spiritual traditions come to life. As the island’s last royal capital, the city is home to the sacred Temple of the Tooth Relic, tranquil Kandy Lake and beautifully preserved cultural landmarks. Visitors can explore vibrant local markets, experience traditional Kandyan dance performances and discover the botanical wonders of nearby Peradeniya. Blending history, culture and natural beauty, Kandy offers an authentic glimpse into the island’s timeless traditions.",
        "style": "",
        "list": false,
        "align": ""
      },
      {
        "type": "paragraph",
        "text": "Activities",
        "style": "",
        "list": false,
        "align": ""
      },
      {
        "type": "paragraph",
        "text": "Visit the Temple of the Sacred Tooth Relic",
        "style": "ListParagraph",
        "list": true,
        "align": ""
      },
      {
        "type": "paragraph",
        "text": "Explore Kandy City & Shopping",
        "style": "ListParagraph",
        "list": true,
        "align": ""
      },
      {
        "type": "paragraph",
        "text": "Evening Cultural Performance",
        "style": "ListParagraph",
        "list": true,
        "align": ""
      },
      {
        "type": "paragraph",
        "text": "Handpicked Stay – – Adigar’s Manor | W15 Hanthana | Taru Villas Kandy",
        "style": "",
        "list": false,
        "align": ""
      },
      {
        "type": "paragraph",
        "text": "DAY 04 – KANDY | DIGANA",
        "style": "",
        "list": false,
        "align": ""
      },
      {
        "type": "paragraph",
        "text": "Where the green opens wide",
        "style": "",
        "list": false,
        "align": ""
      },
      {
        "type": "paragraph",
        "text": "Approx. travel time: 30–45 minutes",
        "style": "",
        "list": false,
        "align": ""
      },
      {
        "type": "paragraph",
        "text": "Set amidst the lush landscapes of Sri Lanka’s central highlands, Digana is a tranquil countryside retreat celebrated for its scenic mountain views, verdant greenery and peaceful rural charm. Located near the historic city of Kandy and overlooking the picturesque Victoria Reservoir, the area offers a refreshing escape into nature, where rolling hills, tea plantations and quiet village roads create a soothing backdrop. Visitors can enjoy  nature walks, cycling through the countryside, birdwatching and outdoor adventures. With its blend of natural beauty, outdoor recreation and relaxed seclusion, Digana is an ideal destination for travellers seeking a quieter side of Sri Lanka.",
        "style": "",
        "list": false,
        "align": ""
      },
      {
        "type": "paragraph",
        "text": "Play one of Asia’s most scenic golf championship courses surrounded by mountains and Victoria Reservoir.",
        "style": "",
        "list": false,
        "align": ""
      },
      {
        "type": "paragraph",
        "text": "Activities",
        "style": "",
        "list": false,
        "align": ""
      },
      {
        "type": "paragraph",
        "text": "18 hole round",
        "style": "ListParagraph",
        "list": true,
        "align": ""
      },
      {
        "type": "paragraph",
        "text": "Practice facilities",
        "style": "ListParagraph",
        "list": true,
        "align": ""
      },
      {
        "type": "paragraph",
        "text": "Leisure at the resort",
        "style": "ListParagraph",
        "list": true,
        "align": ""
      },
      {
        "type": "paragraph",
        "text": "Handpicked Stay – Victoria Golf & Country Resort | Ishq Digana| Bougainville Retreat",
        "style": "",
        "list": false,
        "align": ""
      },
      {
        "type": "paragraph",
        "text": "DAY 05 – DIGANA | NUWARAELIYA",
        "style": "",
        "list": false,
        "align": ""
      },
      {
        "type": "paragraph",
        "text": "Into the misty highlands",
        "style": "",
        "list": false,
        "align": ""
      },
      {
        "type": "paragraph",
        "text": "Approx. travel time: 3–4 hours",
        "style": "",
        "list": false,
        "align": ""
      },
      {
        "type": "paragraph",
        "text": "Travel through tea plantations to Sri Lanka’s picturesque hill station- Nuwara Eliya.",
        "style": "",
        "list": false,
        "align": ""
      },
      {
        "type": "paragraph",
        "text": "Nestled amidst rolling hills, misty mountains and endless tea plantations, Nuwara Eliya is fondly known as Little England for its colonial charm and cool-climate atmosphere. The town’s picturesque gardens, historic buildings and tranquil Gregory Lake create a refreshing escape from the island’s tropical lowlands. Visitors can explore verdant tea estates, discover the art of Ceylon tea production and enjoy scenic drives through winding mountain roads and cascading waterfalls. With its crisp mountain air and timeless elegance, Nuwara Eliya offers a delightful taste of Sri Lanka’s hill-country beauty.",
        "style": "",
        "list": false,
        "align": ""
      },
      {
        "type": "paragraph",
        "text": "Activities",
        "style": "",
        "list": false,
        "align": ""
      },
      {
        "type": "paragraph",
        "text": "Tea Factory visit",
        "style": "ListParagraph",
        "list": true,
        "align": ""
      },
      {
        "type": "paragraph",
        "text": "Scenic viewpoints",
        "style": "ListParagraph",
        "list": true,
        "align": ""
      },
      {
        "type": "paragraph",
        "text": "Explore the colonial Nuwara Eliya",
        "style": "ListParagraph",
        "list": true,
        "align": ""
      },
      {
        "type": "paragraph",
        "text": "Handpicked Stay – Goatfell by Teardrop Hotels |The Bellwood Manor| Heritance Tea Factory |The Grand Hotel | The Golden Ridge Hotel",
        "style": "",
        "list": false,
        "align": ""
      },
      {
        "type": "paragraph",
        "text": "DAY 06 –   NUWARAELIYA",
        "style": "",
        "list": false,
        "align": ""
      },
      {
        "type": "paragraph",
        "text": "Enjoy a memorable round at one of Asia’s oldest golf clubs, established in1889.",
        "style": "",
        "list": false,
        "align": ""
      },
      {
        "type": "paragraph",
        "text": "Activities",
        "style": "",
        "list": false,
        "align": ""
      },
      {
        "type": "paragraph",
        "text": "18 -hole round",
        "style": "ListParagraph",
        "list": true,
        "align": ""
      },
      {
        "type": "paragraph",
        "text": "Afternoon high tea",
        "style": "ListParagraph",
        "list": true,
        "align": ""
      },
      {
        "type": "paragraph",
        "text": "Gregory Lake Stroll",
        "style": "ListParagraph",
        "list": true,
        "align": ""
      },
      {
        "type": "paragraph",
        "text": "Handpicked Stay – Goatfell by Teardrop Hotels |The Bellwood Manor| Heritance Tea Factory |Grand Hotel | The Golden Ridge Hotel",
        "style": "",
        "list": false,
        "align": ""
      },
      {
        "type": "paragraph",
        "text": "DAY 07 – NUWARAELIYA | WELIGAMA",
        "style": "",
        "list": false,
        "align": ""
      },
      {
        "type": "paragraph",
        "text": "From mountain mist to ocean breeze",
        "style": "",
        "list": false,
        "align": ""
      },
      {
        "type": "paragraph",
        "text": "Approx. travel time: 5–6 hours",
        "style": "",
        "list": false,
        "align": ""
      },
      {
        "type": "paragraph",
        "text": "Leave the hills behind and head south for stunning southern coastline. Unwind at the hotel after a long drive.",
        "style": "",
        "list": false,
        "align": ""
      },
      {
        "type": "paragraph",
        "text": "Weligama is a vibrant southern coastal town renowned for surfing, golden beaches, and laid-back coastal living. Combining adventure and tropical charm, it has become a favourite destination among surfers and beach lovers. Its sweeping bay, gentle waves, and welcoming seaside atmosphere make it an ideal spot for both beginners eager to try surfing and seasoned wave riders. Beyond the beach, discover charming cafés, fresh seafood, colourful fishing boats, and the unique sight of traditional stilt fishermen along the coast. With its relaxed rhythm, beautiful ocean views, and captivating blend of local culture and modern beach life, Weligama invites you to slow down and embrace the easygoing spirit of Sri Lanka’s southern shores.",
        "style": "",
        "list": false,
        "align": ""
      },
      {
        "type": "paragraph",
        "text": "Handpicked Stay – Cape Weligama | Weligama Bay Marriot Resort | Malabar Hill",
        "style": "",
        "list": false,
        "align": ""
      },
      {
        "type": "paragraph",
        "text": "DAY 08 - WELIGAMA",
        "style": "",
        "list": false,
        "align": ""
      },
      {
        "type": "paragraph",
        "text": "Activities",
        "style": "",
        "list": false,
        "align": ""
      },
      {
        "type": "paragraph",
        "text": "Evening Jeep Safari in Yala or Udawalawe National Parks",
        "style": "ListParagraph",
        "list": true,
        "align": ""
      },
      {
        "type": "paragraph",
        "text": "Beach Leisure",
        "style": "ListParagraph",
        "list": true,
        "align": ""
      },
      {
        "type": "paragraph",
        "text": "Whale Watching in Mirissa",
        "style": "ListParagraph",
        "list": true,
        "align": ""
      },
      {
        "type": "paragraph",
        "text": "Handpicked Stay – Cape Weligama | Weligama Bay Marriot Resort | Malabar Hill",
        "style": "",
        "list": false,
        "align": ""
      },
      {
        "type": "paragraph",
        "text": "DAY 09 - WELIGAMA | GALLE",
        "style": "",
        "list": false,
        "align": ""
      },
      {
        "type": "paragraph",
        "text": "Discover the charm of the UNESCO-listed Galle Fort",
        "style": "",
        "list": false,
        "align": ""
      },
      {
        "type": "paragraph",
        "text": "Approx. travel time: 45 minutes–1 hour",
        "style": "",
        "list": false,
        "align": ""
      },
      {
        "type": "paragraph",
        "text": "Galle is a charming coastal destination where centuries of history meet the relaxed elegance of seaside living. At its heart lies the UNESCO-listed Galle Fort, a beautifully preserved historic quarter of cobblestone streets, colonial-era architecture, old churches and charming Dutch-style buildings. Visitors can wander through boutique shops, art galleries and atmospheric cafés, stroll along the fort’s ocean-facing ramparts and enjoy spectacular sunset views over the Indian Ocean. With its rich maritime heritage, vibrant local culture and laid-back coastal charm, Galle offers a memorable blend of history, discovery and seaside romance.",
        "style": "",
        "list": false,
        "align": ""
      },
      {
        "type": "paragraph",
        "text": "Activities",
        "style": "",
        "list": false,
        "align": ""
      },
      {
        "type": "paragraph",
        "text": "Explore Dutch Galle Fort",
        "style": "ListParagraph",
        "list": true,
        "align": ""
      },
      {
        "type": "paragraph",
        "text": "Visit to Turtle Hatchery",
        "style": "ListParagraph",
        "list": true,
        "align": ""
      },
      {
        "type": "paragraph",
        "text": "Boutique shopping",
        "style": "ListParagraph",
        "list": true,
        "align": ""
      },
      {
        "type": "paragraph",
        "text": "Handpicked Stay – Amangalla |No 77 Leyn Baan| Galle Fort Hotel| The Fort Bazar| Taru Villas Rampart Street",
        "style": "",
        "list": false,
        "align": ""
      },
      {
        "type": "paragraph",
        "text": "DAY 10 – GALLE | AIRPORT",
        "style": "",
        "list": false,
        "align": ""
      },
      {
        "type": "paragraph",
        "text": "A final fairway farewell",
        "style": "",
        "list": false,
        "align": ""
      },
      {
        "type": "paragraph",
        "text": "Approx. travel time: 2.5–3.5 hours",
        "style": "",
        "list": false,
        "align": ""
      },
      {
        "type": "paragraph",
        "text": "Bidding Adios to Sri Lanka with your final road drive to BIA (Bandaranaike International Airport)",
        "style": "",
        "list": false,
        "align": ""
      }
    ]
  },
  {
    "id": "hikers-paradise",
    "name": "Hiker's Paradise",
    "sourceFile": "Hiker's Paradise.docx",
    "title": "The Best Kept Secret in Hiker’s Paradise –The Pekoe Trail",
    "image": "/30e010b1-2b6c-4f87-81a5-d45d39aae23c.jpg",
    "blocks": [
      {
        "type": "paragraph",
        "text": "The Best Kept Secret in Hiker’s Paradise –The Pekoe Trail",
        "style": "",
        "list": false,
        "align": "center"
      },
      {
        "type": "paragraph",
        "text": "A journey through tea country, one trail at a time",
        "style": "",
        "list": false,
        "align": ""
      },
      {
        "type": "paragraph",
        "text": "Sri Lanka the “Hiker’s Paradise” invites you to explore an authentic trekking and hiking experience with stunning vistas on “PEKOE TRAIL” a 300km+ walking trail traversing the central highlands of Sri Lanka.",
        "style": "",
        "list": false,
        "align": ""
      },
      {
        "type": "paragraph",
        "text": "This is known as Sri Lanka’s first long- distance hiking trail. Discovering Sri Lanka by foot, it’s a brainchild of adventurer Miguel Cunat who spent many years hiking in the central hill country of Sri Lanka.",
        "style": "",
        "list": false,
        "align": ""
      },
      {
        "type": "paragraph",
        "text": "Officially established in March 2024, this 22 staged trail snakes through the verdant landscapes of iconic tea plantations as far as the eye could see, lush green forests enriched with cascading waterfalls and panoramic vistas offering an awe-inspiring experience for nature lovers and hikers. The trail starts from the soaring mountains of Kandy and ends in the misty cloud forests of Nuwaraeliya.",
        "style": "",
        "list": false,
        "align": ""
      },
      {
        "type": "paragraph",
        "text": "YOUR JOURNEY, YOUR WAY",
        "style": "",
        "list": false,
        "align": ""
      },
      {
        "type": "paragraph",
        "text": "Make The Pekoe Trail Part of Your Sri Lankan Story",
        "style": "",
        "list": false,
        "align": ""
      },
      {
        "type": "paragraph",
        "text": "Whether you dream of completing the full trail or adding just one or two unforgettable hiking stages to another Magical Paradise holiday, our team can tailor the experience to suit your interests, pace and travel plans. Let us help you discover Sri Lanka on foot and create memories that last a lifetime.",
        "style": "",
        "list": false,
        "align": ""
      },
      {
        "type": "paragraph",
        "text": "TRAIL HIGHLIGHTS",
        "style": "",
        "list": false,
        "align": ""
      },
      {
        "type": "paragraph",
        "text": "Lace up Your Boots",
        "style": "ListParagraph",
        "list": true,
        "align": ""
      },
      {
        "type": "paragraph",
        "text": "A Journey Through Tea Country",
        "style": "ListParagraph",
        "list": true,
        "align": ""
      },
      {
        "type": "paragraph",
        "text": "Rich Cultural Encounters",
        "style": "ListParagraph",
        "list": true,
        "align": ""
      },
      {
        "type": "paragraph",
        "text": "Biodiversity and Wildlife",
        "style": "ListParagraph",
        "list": true,
        "align": ""
      },
      {
        "type": "paragraph",
        "text": "Physical and Mental Well-being",
        "style": "ListParagraph",
        "list": true,
        "align": ""
      },
      {
        "type": "paragraph",
        "text": "THE NAMES OF 22 STAGES WITH NO. OF Kms OF PEKOE TRAIL SHOULD BE DISPLAYED AS PER  “THE TRAIL SECTION OF  OFFICIAL PEKOE TRAIL” WEBSITE",
        "style": "",
        "list": false,
        "align": ""
      },
      {
        "type": "paragraph",
        "text": "SCREEN SHOT ATTACHED FOR CLEAR REFERENCE",
        "style": "",
        "list": false,
        "align": ""
      },
      {
        "type": "paragraph",
        "text": "DISCOVER THE MAIN TOWNS AND REGIONS ALONG THE PEKOE TRAIL",
        "style": "",
        "list": false,
        "align": ""
      },
      {
        "type": "paragraph",
        "text": "Kandy - Stage 1 -5  (MAP INDICATOR AS IN THE PEKOE TRAIL SITE SHOULD BE SHOWN)",
        "style": "ListParagraph",
        "list": true,
        "align": ""
      },
      {
        "type": "paragraph",
        "text": "Kandy – Where the Trail Begins",
        "style": "",
        "list": false,
        "align": ""
      },
      {
        "type": "paragraph",
        "text": "Kandy offers a memorable introduction to Sri Lanka's hill country, with the trail beginning in the nearby Hanthana hills. Walk through tea plantations, wooded paths and rural settlements while enjoying views across the surrounding mountains. It is an ideal starting point for discovering the island's tea-growing heritage on foot.",
        "style": "",
        "list": false,
        "align": ""
      },
      {
        "type": "paragraph",
        "text": "Attractions to explore in Kandy along the trail",
        "style": "",
        "list": false,
        "align": ""
      },
      {
        "type": "paragraph",
        "text": "Sandagiri Maha Seya/ Viharaya ( Buddhist Temple)",
        "style": "ListParagraph",
        "list": true,
        "align": ""
      },
      {
        "type": "paragraph",
        "text": "Loolkandura tea estate (1st commercial tea estate in Sri Lanka)",
        "style": "ListParagraph",
        "list": true,
        "align": ""
      },
      {
        "type": "paragraph",
        "text": "James Taylor’s seat (Seat made of stone used by the father of Ceylon Tea)",
        "style": "ListParagraph",
        "list": true,
        "align": ""
      },
      {
        "type": "paragraph",
        "text": "Ceylon Tea Museum (a vintage Tea Factory housed in 1925)",
        "style": "ListParagraph",
        "list": true,
        "align": ""
      },
      {
        "type": "paragraph",
        "text": "The Top Attractions in Kandy -",
        "style": "",
        "list": false,
        "align": ""
      },
      {
        "type": "paragraph",
        "text": "Royal Botanical Garden (Largest botanical garden in Sri Lanka)",
        "style": "ListParagraph",
        "list": true,
        "align": ""
      },
      {
        "type": "paragraph",
        "text": "Temple of Tooth Relic(UNESCO World Heritage site is one of the most sacred Buddhist temples as it is believed to house the tooth relic of the Lord Buddha)",
        "style": "ListParagraph",
        "list": true,
        "align": ""
      },
      {
        "type": "paragraph",
        "text": "Sri Maha Bodhi Viharaya (Giant seated Lord Buddha statue visible almost from any point in the city of Kandy",
        "style": "ListParagraph",
        "list": true,
        "align": ""
      },
      {
        "type": "paragraph",
        "text": "2.Hatton – Stage 6 - 10 (MAP INDICATOR AS IN THE PEKOE TRAIL SITE SHOULD BE SHOWN)",
        "style": "ListParagraph",
        "list": true,
        "align": ""
      },
      {
        "type": "paragraph",
        "text": "Hatton – A Journey Through Tea Country",
        "style": "",
        "list": false,
        "align": ""
      },
      {
        "type": "paragraph",
        "text": "Surrounded by rolling tea estates and cool highland scenery, the Hatton region reveals the landscapes and traditions that have shaped Ceylon tea. Trail stages around Watagoda, Kotagala, Norwood and Bogawantalawa take hikers through plantation country, quiet settlements and sweeping mountain views",
        "style": "",
        "list": false,
        "align": ""
      },
      {
        "type": "paragraph",
        "text": "Attractions to explore in Hatton along the trail",
        "style": "",
        "list": false,
        "align": ""
      },
      {
        "type": "paragraph",
        "text": "St.Clair Tea Factory",
        "style": "ListParagraph",
        "list": true,
        "align": ""
      },
      {
        "type": "paragraph",
        "text": "Chrystlers Farm Tea Factory",
        "style": "ListParagraph",
        "list": true,
        "align": ""
      },
      {
        "type": "paragraph",
        "text": "Kew Estate Tea Factory",
        "style": "ListParagraph",
        "list": true,
        "align": ""
      },
      {
        "type": "paragraph",
        "text": "Singamalai Reservoir (Small lake that provides drinking water for Hatton town)",
        "style": "ListParagraph",
        "list": true,
        "align": ""
      },
      {
        "type": "paragraph",
        "text": "Top Attractions in Hatton",
        "style": "",
        "list": false,
        "align": ""
      },
      {
        "type": "paragraph",
        "text": "Castlereigh Reservoir (a picturesque lake in the city)",
        "style": "ListParagraph",
        "list": true,
        "align": ""
      },
      {
        "type": "paragraph",
        "text": "Devon Falls ( a striking 97 meter water wall)",
        "style": "ListParagraph",
        "list": true,
        "align": ""
      },
      {
        "type": "paragraph",
        "text": "St. Clair’s Falls",
        "style": "ListParagraph",
        "list": true,
        "align": ""
      },
      {
        "type": "paragraph",
        "text": "Christ Church of Warleigh (An Anglican church built in 1878)",
        "style": "ListParagraph",
        "list": true,
        "align": ""
      },
      {
        "type": "paragraph",
        "text": "Adam’s Peak Climb",
        "style": "ListParagraph",
        "list": true,
        "align": ""
      },
      {
        "type": "paragraph",
        "text": "3.Haputale – Stage 11 - 14 (MAP INDICATOR AS IN THE PEKOE TRAIL SITE SHOULD BE SHOWN)",
        "style": "",
        "list": false,
        "align": ""
      },
      {
        "type": "paragraph",
        "text": "Haputale – Trails Above the Clouds",
        "style": "",
        "list": false,
        "align": ""
      },
      {
        "type": "paragraph",
        "text": "Haputale is a highlight for hikers drawn to panoramic viewpoints and expansive tea-country scenery. The surrounding trail stages wind through plantations and highland terrain, with the celebrated Lipton's Seat viewpoint nearby offering sweeping views across the surrounding countryside on clear days.",
        "style": "",
        "list": false,
        "align": ""
      },
      {
        "type": "paragraph",
        "text": "Attractions to explore in Haputale along the trail",
        "style": "",
        "list": false,
        "align": ""
      },
      {
        "type": "paragraph",
        "text": "Adisham Bungalow ( St. Benedicts Monastery )",
        "style": "ListParagraph",
        "list": true,
        "align": ""
      },
      {
        "type": "paragraph",
        "text": "Idalgashinna Train Station (small, colonial -era , scenic railway station)",
        "style": "ListParagraph",
        "list": true,
        "align": ""
      },
      {
        "type": "paragraph",
        "text": "St.Andrew’s church (a small church built by British planters)",
        "style": "ListParagraph",
        "list": true,
        "align": ""
      },
      {
        "type": "paragraph",
        "text": "Lipton’s seat (Panoramic viewpoint located on one of the 1st tea plantations)",
        "style": "ListParagraph",
        "list": true,
        "align": ""
      },
      {
        "type": "paragraph",
        "text": "The Top Attractions in Haputale",
        "style": "",
        "list": false,
        "align": ""
      },
      {
        "type": "paragraph",
        "text": "Lipton’s seat",
        "style": "ListParagraph",
        "list": true,
        "align": ""
      },
      {
        "type": "paragraph",
        "text": "Bambarakanda Falls (Highest waterfall in Ceylon)",
        "style": "ListParagraph",
        "list": true,
        "align": ""
      },
      {
        "type": "paragraph",
        "text": "Thangamalee Sanctuary (Famous as a bird sanctuary)",
        "style": "ListParagraph",
        "list": true,
        "align": ""
      },
      {
        "type": "paragraph",
        "text": "Lake Richmond (A Small human made lake)",
        "style": "ListParagraph",
        "list": true,
        "align": ""
      },
      {
        "type": "paragraph",
        "text": "4.Ella – Stage 15 - 18 (MAP INDICATOR AS IN THE PEKOE TRAIL SITE SHOULD BE SHOWN)",
        "style": "",
        "list": false,
        "align": ""
      },
      {
        "type": "paragraph",
        "text": "Ella – Scenic Trails & Mountain Vistas",
        "style": "",
        "list": false,
        "align": ""
      },
      {
        "type": "paragraph",
        "text": "Ella brings together dramatic mountain scenery, lush plantations and rewarding walks through the highlands. The Pekoe Trail stages around Ella, including the route towards Demodara, offer opportunities to experience the landscape on foot, discover rural life and enjoy the region's spectacular viewpoints.",
        "style": "",
        "list": false,
        "align": ""
      },
      {
        "type": "paragraph",
        "text": "Attractions to explore along the trail",
        "style": "",
        "list": false,
        "align": ""
      },
      {
        "type": "paragraph",
        "text": "Ella Rock",
        "style": "ListParagraph",
        "list": true,
        "align": ""
      },
      {
        "type": "paragraph",
        "text": "Nine Arches Bridge Photo Point",
        "style": "ListParagraph",
        "list": true,
        "align": ""
      },
      {
        "type": "paragraph",
        "text": "Makulella Rock Forest Monastry",
        "style": "ListParagraph",
        "list": true,
        "align": ""
      },
      {
        "type": "paragraph",
        "text": "Eco Domes Waterfall",
        "style": "ListParagraph",
        "list": true,
        "align": ""
      },
      {
        "type": "paragraph",
        "text": "Top Attractions in Ella",
        "style": "",
        "list": false,
        "align": ""
      },
      {
        "type": "paragraph",
        "text": "Ravana Falls",
        "style": "ListParagraph",
        "list": true,
        "align": ""
      },
      {
        "type": "paragraph",
        "text": "Ravana’s Cave",
        "style": "ListParagraph",
        "list": true,
        "align": ""
      },
      {
        "type": "paragraph",
        "text": "Newburgh Kovil",
        "style": "ListParagraph",
        "list": true,
        "align": ""
      },
      {
        "type": "paragraph",
        "text": "Little Adam’s Peak viewpoint",
        "style": "ListParagraph",
        "list": true,
        "align": ""
      },
      {
        "type": "paragraph",
        "text": "Immersive experiences in Ella (the best of Ella which shouldn’t be missed)",
        "style": "",
        "list": false,
        "align": ""
      },
      {
        "type": "paragraph",
        "text": "Train Ride- Demodara Loop (Demodara station is famous for its spiral line known as the Demodara loop )",
        "style": "ListParagraph",
        "list": true,
        "align": ""
      },
      {
        "type": "paragraph",
        "text": "Zip Line in Ella",
        "style": "ListParagraph",
        "list": true,
        "align": ""
      },
      {
        "type": "paragraph",
        "text": "Nightlife in Ella",
        "style": "ListParagraph",
        "list": true,
        "align": ""
      },
      {
        "type": "paragraph",
        "text": "5. Nuwaraeliya – Stage 19 - 22 (MAP INDICATOR AS IN THE PEKOE TRAIL SITE SHOULD BE SHOWN)",
        "style": "",
        "list": false,
        "align": ""
      },
      {
        "type": "paragraph",
        "text": "Nuwara Eliya – Misty Mountains & Highland Trails",
        "style": "",
        "list": false,
        "align": ""
      },
      {
        "type": "paragraph",
        "text": "With its cool climate, emerald tea gardens and distinctive highland scenery, Nuwara Eliya offers a refreshing hiking experience. The Pekoe Trail's stages in the wider region traverse rural landscapes and tea-growing areas, culminating near Pedro Tea Estate. It is a wonderful choice for travellers who love fresh mountain air and scenic walks.",
        "style": "",
        "list": false,
        "align": ""
      },
      {
        "type": "paragraph",
        "text": "Attractions to explore along the trail",
        "style": "",
        "list": false,
        "align": ""
      },
      {
        "type": "paragraph",
        "text": "Ettampitiya tea factory",
        "style": "ListParagraph",
        "list": true,
        "align": ""
      },
      {
        "type": "paragraph",
        "text": "Wellawela hydropower plant",
        "style": "ListParagraph",
        "list": true,
        "align": ""
      },
      {
        "type": "paragraph",
        "text": "Pedro Estate Tea Factory (Home to the 1st tea bushes planted by James Taylor)",
        "style": "ListParagraph",
        "list": true,
        "align": ""
      },
      {
        "type": "paragraph",
        "text": "Sthripura Caves",
        "style": "ListParagraph",
        "list": true,
        "align": ""
      },
      {
        "type": "paragraph",
        "text": "Top Attractions in Nuwaraeliya",
        "style": "",
        "list": false,
        "align": ""
      },
      {
        "type": "paragraph",
        "text": "Horton Plains",
        "style": "ListParagraph",
        "list": true,
        "align": ""
      },
      {
        "type": "paragraph",
        "text": "Hakgala Botanical Garden (2nd largest botanical garden)",
        "style": "ListParagraph",
        "list": true,
        "align": ""
      },
      {
        "type": "paragraph",
        "text": "Lover’s Leap Waterfall",
        "style": "ListParagraph",
        "list": true,
        "align": ""
      },
      {
        "type": "paragraph",
        "text": "Galway's Land National Park (lesser known national park made of dense patch of montane forest )",
        "style": "ListParagraph",
        "list": true,
        "align": ""
      },
      {
        "type": "paragraph",
        "text": "Immersive experiences in Nuwaraeliya",
        "style": "",
        "list": false,
        "align": ""
      },
      {
        "type": "paragraph",
        "text": "Golfing with a pro",
        "style": "ListParagraph",
        "list": true,
        "align": ""
      },
      {
        "type": "paragraph",
        "text": "Tea Factory Tour",
        "style": "ListParagraph",
        "list": true,
        "align": ""
      },
      {
        "type": "paragraph",
        "text": "High tea experiences at colonial - era hotels",
        "style": "ListParagraph",
        "list": true,
        "align": ""
      },
      {
        "type": "paragraph",
        "text": "The Pekoe Trail – Stage Summary",
        "style": "",
        "list": false,
        "align": "center"
      },
      {
        "type": "table",
        "rows": [
          [
            "Stage",
            "From To",
            "Distance (Kms)",
            "Duration",
            "Difficulty"
          ],
          [
            "",
            "Night before the Trail",
            "",
            ""
          ],
          [
            "1",
            "Hanthana - Galaha",
            "12.8",
            "4 hours",
            "Easy"
          ],
          [
            "2",
            "Galaha - Loolkandura",
            "14.7",
            "5 hours",
            "Difficult"
          ],
          [
            "3",
            "Loolkandura - Tawalantenne",
            "18.11",
            "6 hours",
            "Difficult"
          ],
          [
            "4",
            "Tawalantenne - Pundaluoya",
            "15.53",
            "4 hours & 30 minutes",
            "Difficult"
          ],
          [
            "5",
            "Pundaluoya - Watagoda",
            "14.31",
            "4 hours & 30 minutes",
            "Moderate"
          ],
          [
            "6",
            "Watagoda - Kotagala",
            "14.97",
            "4 hours & 30 minutes",
            "Easy"
          ],
          [
            "7",
            "Kotagala- Norwood",
            "16.48",
            "5 hours",
            "Moderate"
          ],
          [
            "8",
            "Norwood- Bogawanthalawa",
            "15.93",
            "4 hours & 30 minutes",
            "Moderate"
          ],
          [
            "9",
            "Bogawanthalawa - Dayagama",
            "17.13",
            "5 hours",
            "Hard"
          ],
          [
            "10",
            "Dayagama - Horton Plains",
            "15.88",
            "5 hours",
            "Difficult"
          ],
          [
            "11",
            "Horton Plains - Udaweriya",
            "14.30",
            "4 hours",
            "Moderate"
          ],
          [
            "12",
            "Udaweriya - Haputale",
            "19.68",
            "6 hours",
            "Difficult"
          ],
          [
            "13",
            "Haputale - St.Catherine",
            "14.60",
            "4 hours",
            "Hard"
          ],
          [
            "14",
            "St. Catherine - Makulella",
            "9.36",
            "3hours",
            "Moderate"
          ],
          [
            "15",
            "Makulella - Ella",
            "9.61",
            "3 hours",
            "Moderate"
          ],
          [
            "16",
            "Ella- Demodara",
            "9.50",
            "3 hours",
            "Easy"
          ],
          [
            "17",
            "Demodara- Hali Ela",
            "13.15",
            "4 hours & 30 minutes",
            "Moderate"
          ],
          [
            "18",
            "Hali Ela- Ettampitiya",
            "14.68",
            "6 hours",
            "Hard"
          ],
          [
            "19",
            "Ettampitiya - Lunuwatte",
            "21.00",
            "6 hours",
            "Difficult"
          ],
          [
            "20",
            "Lunuwatte - Uda Pussellawa",
            "13.63",
            "4 hours & 30 minutes",
            "Moderate"
          ],
          [
            "21",
            "Uda Pusselawa - Kandapola",
            "16.90",
            "5 hours & 30 minutes",
            "Difficult"
          ],
          [
            "22",
            "Kandapola - Pedro Estate",
            "11.30",
            "4 hours & 30 minutes",
            "Moderate"
          ]
        ]
      },
      {
        "type": "paragraph",
        "text": "A useful note for travelers.",
        "style": "",
        "list": false,
        "align": ""
      },
      {
        "type": "paragraph",
        "text": "The Pekoe Trail is divided into 22 stages, and the most suitable sections depend on fitness, available time, weather and current trail access. Some stages require permits or trail passes, and access conditions can change, so these should be checked when planning a hike.",
        "style": "",
        "list": false,
        "align": ""
      },
      {
        "type": "paragraph",
        "text": "From a single scenic walk to a multi-day highland adventure, let Magical Paradise create your own path through Sri Lanka's breathtaking tea country.",
        "style": "",
        "list": false,
        "align": ""
      }
    ]
  },
  {
    "id": "less-crowds-more-sri-lanka",
    "name": "Less Crowds,More Sri Lanka",
    "sourceFile": "Less Crowds,More Sri Lanka.docx",
    "title": "Less Crowds. More Sri Lanka. 11 Days|10 Nights",
    "image": "/3aaa188a-cac8-4da0-93ad-bc14a5dedf10.jpg",
    "blocks": [
      {
        "type": "paragraph",
        "text": "Less Crowds. More Sri Lanka. 11 Days|10 Nights",
        "style": "",
        "list": false,
        "align": "center"
      },
      {
        "type": "paragraph",
        "text": "A Journey Through Sri Lanka's Hidden Heart. Not every journey is about ticking off famous landmarks.",
        "style": "",
        "list": false,
        "align": ""
      },
      {
        "type": "paragraph",
        "text": "Some are about discovering places where life moves at a gentler pace, where mountain air replaces city noise, where wildlife roams freely, and where every encounter feels genuine. This thoughtfully curated itinerary takes you beyond the familiar, unveiling a quieter, more authentic Sri Lanka through untouched landscapes, welcoming communities, and unforgettable experiences.",
        "style": "",
        "list": false,
        "align": ""
      },
      {
        "type": "paragraph",
        "text": "DAY 01 | WELCOME TO SRI LANKA – AIRPORT|WILPATTU",
        "style": "",
        "list": false,
        "align": ""
      },
      {
        "type": "paragraph",
        "text": "Into The Wild at Wilpattu",
        "style": "",
        "list": false,
        "align": ""
      },
      {
        "type": "paragraph",
        "text": "Approx. travel time: 3–4 hours",
        "style": "",
        "list": false,
        "align": ""
      },
      {
        "type": "paragraph",
        "text": "Your Sri Lankan adventure begins with a scenic journey north to the tranquil wilderness of Wilpattu.",
        "style": "",
        "list": false,
        "align": ""
      },
      {
        "type": "paragraph",
        "text": "Home to the island's largest national park, it offers an immersive safari experience through dry-zone woodlands, open clearings and distinctive rain-fed lakes known as villus. Visitors may encounter the elusive Sri Lankan leopard, sloth bears, elephants, spotted deer and a fascinating variety of birdlife while exploring the park by jeep. With its untamed landscapes, quieter safari atmosphere and rich biodiversity, Wilpattu is an exceptional destination for wildlife enthusiasts, photographers and travellers seeking an authentic connection with nature.",
        "style": "",
        "list": false,
        "align": ""
      },
      {
        "type": "paragraph",
        "text": "As dusk settles, relax amidst nature and prepare for the adventures ahead.",
        "style": "",
        "list": false,
        "align": ""
      },
      {
        "type": "paragraph",
        "text": "Things to Do",
        "style": "",
        "list": false,
        "align": ""
      },
      {
        "type": "paragraph",
        "text": "Afternoon jeep safari",
        "style": "ListParagraph",
        "list": true,
        "align": ""
      },
      {
        "type": "paragraph",
        "text": "Spot leopards, elephants and birdlife",
        "style": "ListParagraph",
        "list": true,
        "align": ""
      },
      {
        "type": "paragraph",
        "text": "Sunset in the wilderness",
        "style": "ListParagraph",
        "list": true,
        "align": ""
      },
      {
        "type": "paragraph",
        "text": "Stay: A wilderness lodge in Wilpattu.",
        "style": "",
        "list": false,
        "align": ""
      },
      {
        "type": "paragraph",
        "text": "DAY 02 | WILPATTU |RIVERSTON",
        "style": "",
        "list": false,
        "align": ""
      },
      {
        "type": "paragraph",
        "text": "Into The Misty Highlands",
        "style": "",
        "list": false,
        "align": ""
      },
      {
        "type": "paragraph",
        "text": "Approx. travel time: 4–5 hours",
        "style": "",
        "list": false,
        "align": ""
      },
      {
        "type": "paragraph",
        "text": "Leave the dry zone behind as the landscape transforms into rolling hills and cool mountain air. Welcome to Riverston, one of Sri Lanka's best-kept secrets, where dramatic viewpoints, cloud forests and crystal-clear streams create a paradise for nature lovers.",
        "style": "",
        "list": false,
        "align": ""
      },
      {
        "type": "paragraph",
        "text": "Hidden within Sri Lanka’s spectacular Knuckles Mountain Range, Riverston is a breathtaking highland escape celebrated for its mist-covered peaks, dramatic viewpoints and unspoilt natural beauty. Winding mountain roads lead through lush forests and rolling grasslands to the famous Mini World’s End viewpoint at Pitawala Pathana, where sweeping panoramas reveal the valleys below. Visitors can also discover enchanting waterfalls such as Sera Ella and Bambarakiri Ella, explore scenic trekking trails and experience the refreshing mountain air. With its cool climate, rich biodiversity and adventurous spirit, Riverston is a wonderful retreat for hikers, nature lovers and travellers seeking the quieter side of Sri Lanka’s central highlands.",
        "style": "",
        "list": false,
        "align": ""
      },
      {
        "type": "paragraph",
        "text": "Things to Do",
        "style": "",
        "list": false,
        "align": ""
      },
      {
        "type": "paragraph",
        "text": "Scenic mountain drive",
        "style": "ListParagraph",
        "list": true,
        "align": ""
      },
      {
        "type": "paragraph",
        "text": "Mini World's End viewpoint",
        "style": "ListParagraph",
        "list": true,
        "align": ""
      },
      {
        "type": "paragraph",
        "text": "Enjoy cool hill country evenings",
        "style": "ListParagraph",
        "list": true,
        "align": ""
      },
      {
        "type": "paragraph",
        "text": "Stay: A charming mountain retreat in Riverston.",
        "style": "",
        "list": false,
        "align": ""
      },
      {
        "type": "paragraph",
        "text": "DAY 03 | RIVERSTON",
        "style": "",
        "list": false,
        "align": ""
      },
      {
        "type": "paragraph",
        "text": "Nature at its finest",
        "style": "",
        "list": false,
        "align": ""
      },
      {
        "type": "paragraph",
        "text": "Wake up to fresh mountain air and spend the day discovering the untouched beauty of the Knuckles foothills. Hidden waterfalls, peaceful trails and breathtaking scenery make today one of the most memorable days of your journey.",
        "style": "",
        "list": false,
        "align": ""
      },
      {
        "type": "paragraph",
        "text": "Things to Do",
        "style": "",
        "list": false,
        "align": ""
      },
      {
        "type": "paragraph",
        "text": "Guided nature trek",
        "style": "ListParagraph",
        "list": true,
        "align": ""
      },
      {
        "type": "paragraph",
        "text": "Visit hidden waterfalls",
        "style": "ListParagraph",
        "list": true,
        "align": ""
      },
      {
        "type": "paragraph",
        "text": "Stay: Riverston",
        "style": "",
        "list": false,
        "align": ""
      },
      {
        "type": "paragraph",
        "text": "DAY 04 | RIVERSTON |DIGANA",
        "style": "",
        "list": false,
        "align": ""
      },
      {
        "type": "paragraph",
        "text": "Serenity By The Lake",
        "style": "",
        "list": false,
        "align": ""
      },
      {
        "type": "paragraph",
        "text": "Approx. travel time: 2.5–3.5 hours",
        "style": "",
        "list": false,
        "align": ""
      },
      {
        "type": "paragraph",
        "text": "A leisurely drive brings you to Digana, a peaceful countryside retreat overlooking the beautiful Victoria Reservoir. Surrounded by rolling hills and rural villages, this is the perfect place to slow down and embrace Sri Lanka's quieter side.",
        "style": "",
        "list": false,
        "align": ""
      },
      {
        "type": "paragraph",
        "text": "Set amidst the lush landscapes of Sri Lanka’s central highlands, Digana is a tranquil countryside retreat celebrated for its scenic mountain views, verdant greenery and peaceful rural charm. Located near the historic city of Kandy and overlooking the picturesque Victoria Reservoir, the area offers a refreshing escape into nature, where rolling hills, tea plantations and quiet village roads create a soothing backdrop. Visitors can enjoy leisurely nature walks, cycling through the countryside, birdwatching and outdoor adventures, while golf enthusiasts can experience the renowned Victoria Golf Resort. With its blend of natural beauty, outdoor recreation and relaxed seclusion, Digana is an ideal destination for travellers seeking a quieter side of Sri Lanka",
        "style": "",
        "list": false,
        "align": ""
      },
      {
        "type": "paragraph",
        "text": "Things to Do",
        "style": "",
        "list": false,
        "align": ""
      },
      {
        "type": "paragraph",
        "text": "Victoria Lake views & Boating on the Lake",
        "style": "ListParagraph",
        "list": true,
        "align": ""
      },
      {
        "type": "paragraph",
        "text": "Kandy Day Trip",
        "style": "ListParagraph",
        "list": true,
        "align": ""
      },
      {
        "type": "paragraph",
        "text": "Golf Sessions",
        "style": "ListParagraph",
        "list": true,
        "align": ""
      },
      {
        "type": "paragraph",
        "text": "Stay: A tranquil lakeside retreat in Digana",
        "style": "",
        "list": false,
        "align": ""
      },
      {
        "type": "paragraph",
        "text": "DAY 05 | DIGANA – HIDDEN HIGHLANDS & VILLAGE LIFE",
        "style": "",
        "list": false,
        "align": ""
      },
      {
        "type": "paragraph",
        "text": "Spend the day exploring the charming villages surrounding Digana, where local traditions remain beautifully preserved. From gentle walks to cultural encounters, today offers a genuine glimpse into everyday Sri Lankan life.",
        "style": "",
        "list": false,
        "align": ""
      },
      {
        "type": "paragraph",
        "text": "Things to Do",
        "style": "",
        "list": false,
        "align": ""
      },
      {
        "type": "paragraph",
        "text": "Yoga Mornings",
        "style": "ListParagraph",
        "list": true,
        "align": ""
      },
      {
        "type": "paragraph",
        "text": "Cycling through the countryside",
        "style": "ListParagraph",
        "list": true,
        "align": ""
      },
      {
        "type": "paragraph",
        "text": "Bambaragala & Pettigala Excursion",
        "style": "ListParagraph",
        "list": true,
        "align": ""
      },
      {
        "type": "paragraph",
        "text": "Knuckels Hike",
        "style": "ListParagraph",
        "list": true,
        "align": ""
      },
      {
        "type": "paragraph",
        "text": "Stay: Digana",
        "style": "",
        "list": false,
        "align": ""
      },
      {
        "type": "paragraph",
        "text": "DAY 06 | DIGANA| MAHIYANGANAYA",
        "style": "",
        "list": false,
        "align": ""
      },
      {
        "type": "paragraph",
        "text": "Where Legends Live",
        "style": "",
        "list": false,
        "align": ""
      },
      {
        "type": "paragraph",
        "text": "Approx. travel time: 1.5–2 hours",
        "style": "",
        "list": false,
        "align": ""
      },
      {
        "type": "paragraph",
        "text": "Travel east into Mahiyanganaya, one of Sri Lanka's oldest settlements and a place deeply rooted in history and indigenous culture. Surrounded by forests, rivers and ancient reservoirs, this peaceful destination remains wonderfully untouched.",
        "style": "",
        "list": false,
        "align": ""
      },
      {
        "type": "paragraph",
        "text": "Located in Sri Lanka’s eastern interior, Mahiyanganaya is a destination where ancient Buddhist heritage, indigenous culture and beautiful natural landscapes come together. The historic Mahiyangana Raja Maha Viharaya holds deep spiritual significance, while the surrounding countryside features tranquil reservoirs, lush paddy fields and scenic stretches of the Mahaweli River.With its rich cultural heritage and authentic rural atmosphere, Mahiyanganaya offers a fascinating glimpse into Sri Lanka’s spiritual and traditional way of life.",
        "style": "",
        "list": false,
        "align": ""
      },
      {
        "type": "paragraph",
        "text": "Things to Do",
        "style": "",
        "list": false,
        "align": ""
      },
      {
        "type": "paragraph",
        "text": "Visit Mahiyanganaya Temple",
        "style": "ListParagraph",
        "list": true,
        "align": ""
      },
      {
        "type": "paragraph",
        "text": "Sorabora Lake",
        "style": "ListParagraph",
        "list": true,
        "align": ""
      },
      {
        "type": "paragraph",
        "text": "Scenic countryside drive",
        "style": "ListParagraph",
        "list": true,
        "align": ""
      },
      {
        "type": "paragraph",
        "text": "Evening at leisure",
        "style": "ListParagraph",
        "list": true,
        "align": ""
      },
      {
        "type": "paragraph",
        "text": "Stay: A nature-inspired lodge in Mahiyanganaya.",
        "style": "",
        "list": false,
        "align": ""
      },
      {
        "type": "paragraph",
        "text": "DAY 07 | MAHIYANGANAYA –",
        "style": "",
        "list": false,
        "align": ""
      },
      {
        "type": "paragraph",
        "text": "Authentic Sri Lanka",
        "style": "",
        "list": false,
        "align": ""
      },
      {
        "type": "paragraph",
        "text": "Experience the rhythms of rural Sri Lanka as you discover traditional farming communities and the unique heritage of the indigenous Vedda people. It's a day of meaningful connections and authentic experiences.",
        "style": "",
        "list": false,
        "align": ""
      },
      {
        "type": "paragraph",
        "text": "Things to Do",
        "style": "",
        "list": false,
        "align": ""
      },
      {
        "type": "paragraph",
        "text": "Vedda cultural experience",
        "style": "ListParagraph",
        "list": true,
        "align": ""
      },
      {
        "type": "paragraph",
        "text": "Village walk",
        "style": "ListParagraph",
        "list": true,
        "align": ""
      },
      {
        "type": "paragraph",
        "text": "Farming visit",
        "style": "ListParagraph",
        "list": true,
        "align": ""
      },
      {
        "type": "paragraph",
        "text": "Taste traditional local cuisine",
        "style": "ListParagraph",
        "list": true,
        "align": ""
      },
      {
        "type": "paragraph",
        "text": "Stay: Mahiyanganaya",
        "style": "",
        "list": false,
        "align": ""
      },
      {
        "type": "paragraph",
        "text": "DAY 08 | MAHIYANGANAYA |BELIHULOYA",
        "style": "",
        "list": false,
        "align": ""
      },
      {
        "type": "paragraph",
        "text": "Into The Hills",
        "style": "",
        "list": false,
        "align": ""
      },
      {
        "type": "paragraph",
        "text": "Approx. travel time: 3–4 hours",
        "style": "",
        "list": false,
        "align": ""
      },
      {
        "type": "paragraph",
        "text": "Journey through scenic mountain roads to Belihuloya, where rivers, forests and tea-covered hills invite you to unwind. This hidden gem is the perfect destination for travellers seeking peace, fresh air and spectacular natural beauty.",
        "style": "",
        "list": false,
        "align": ""
      },
      {
        "type": "paragraph",
        "text": "Set amid the picturesque landscapes of Sri Lanka’s Sabaragamuwa highlands, Belihuloya is a peaceful nature destination known for its cascading waterfalls, winding streams, mountain scenery and charming rural surroundings. Its unique location between the island’s highlands and lowlands creates a diverse natural environment, with lush forests, rolling hills and the scenic Samanalawewa Reservoir adding to its appeal. Visitors can discover the beautiful Pahanthudawa Falls, enjoy nature walks and birdwatching, explore nearby mountain trails or experience the tranquillity of traditional village life. With its refreshing atmosphere, outdoor adventures and abundant natural beauty, Belihuloya is an inviting escape for travellers seeking relaxation and exploration away from the busier tourist routes.",
        "style": "",
        "list": false,
        "align": ""
      },
      {
        "type": "paragraph",
        "text": "Things to Do",
        "style": "",
        "list": false,
        "align": ""
      },
      {
        "type": "paragraph",
        "text": "Scenic mountain drive",
        "style": "ListParagraph",
        "list": true,
        "align": ""
      },
      {
        "type": "paragraph",
        "text": "Riverside relaxation",
        "style": "ListParagraph",
        "list": true,
        "align": ""
      },
      {
        "type": "paragraph",
        "text": "Nature walks",
        "style": "ListParagraph",
        "list": true,
        "align": ""
      },
      {
        "type": "paragraph",
        "text": "Waterfall viewpoints",
        "style": "ListParagraph",
        "list": true,
        "align": ""
      },
      {
        "type": "paragraph",
        "text": "Stay: A cosy retreat in Belihuloya.",
        "style": "",
        "list": false,
        "align": ""
      },
      {
        "type": "paragraph",
        "text": "DAY 09 | BELIHULOYA",
        "style": "",
        "list": false,
        "align": ""
      },
      {
        "type": "paragraph",
        "text": "Slow Down & Reconnect",
        "style": "",
        "list": false,
        "align": ""
      },
      {
        "type": "paragraph",
        "text": "Today is dedicated to nature and relaxation. Explore the surrounding landscapes on foot, breathe in the crisp mountain air and simply enjoy the slower pace of life that makes Belihuloya so special.",
        "style": "",
        "list": false,
        "align": ""
      },
      {
        "type": "paragraph",
        "text": "Things to Do",
        "style": "",
        "list": false,
        "align": ""
      },
      {
        "type": "paragraph",
        "text": "Guided trekking",
        "style": "ListParagraph",
        "list": true,
        "align": ""
      },
      {
        "type": "paragraph",
        "text": "Hidden waterfalls",
        "style": "ListParagraph",
        "list": true,
        "align": ""
      },
      {
        "type": "paragraph",
        "text": "Stay: Belihuloya",
        "style": "",
        "list": false,
        "align": ""
      },
      {
        "type": "paragraph",
        "text": "DAY 10 | BELIHULOYA |NEGOMBO",
        "style": "",
        "list": false,
        "align": ""
      },
      {
        "type": "paragraph",
        "text": "From Mountains To The West Coast",
        "style": "",
        "list": false,
        "align": ""
      },
      {
        "type": "paragraph",
        "text": "Approx. travel time: 4–5 hours",
        "style": "",
        "list": false,
        "align": ""
      },
      {
        "type": "paragraph",
        "text": "Your final journey takes you back towards the west coast, arriving in the charming seaside town of Negombo. Spend your last evening soaking up the relaxed coastal atmosphere, strolling along the beach or enjoying fresh seafood as the sun sets over the Indian Ocean.",
        "style": "",
        "list": false,
        "align": ""
      },
      {
        "type": "paragraph",
        "text": "Located close to Sri Lanka’s international airport, Negombo is a lively coastal town offering beaches, seafood culture and colonial influences. It serves as both a relaxing introduction and a memorable farewell to Sri Lanka.",
        "style": "",
        "list": false,
        "align": ""
      },
      {
        "type": "paragraph",
        "text": "Things to Do",
        "style": "",
        "list": false,
        "align": ""
      },
      {
        "type": "paragraph",
        "text": "Dutch Canal or lagoon walk",
        "style": "ListParagraph",
        "list": true,
        "align": ""
      },
      {
        "type": "paragraph",
        "text": "Beach sunset",
        "style": "ListParagraph",
        "list": true,
        "align": ""
      },
      {
        "type": "paragraph",
        "text": "Seafood dinner by the ocean",
        "style": "ListParagraph",
        "list": true,
        "align": ""
      },
      {
        "type": "paragraph",
        "text": "Stay: A beachfront hotel in Negombo.",
        "style": "",
        "list": false,
        "align": ""
      },
      {
        "type": "paragraph",
        "text": "DAY 11 | FAREWELL SRI LANKA",
        "style": "",
        "list": false,
        "align": ""
      },
      {
        "type": "paragraph",
        "text": "Approx. travel time 30 Minutes",
        "style": "",
        "list": false,
        "align": ""
      },
      {
        "type": "paragraph",
        "text": "After a leisurely breakfast, it's time to bid farewell to the island. Depart with unforgettable memories of Sri Lanka's hidden landscapes, warm hospitality and authentic experiences,discovering a side of the country that remains beautifully untouched by mass tourism.",
        "style": "",
        "list": false,
        "align": ""
      },
      {
        "type": "paragraph",
        "text": "Transfer to Bandaranaike International Airport for your onward journey.",
        "style": "",
        "list": false,
        "align": ""
      }
    ]
  },
  {
    "id": "ocean-escape",
    "name": "Ocean Escape",
    "sourceFile": "Ocean Escape.docx",
    "title": "Ocean Escape – 7 Days|6 Nights",
    "image": "/8de9dae7-2ef0-4497-8b69-866058baec8a.jpg",
    "blocks": [
      {
        "type": "paragraph",
        "text": "Ocean Escape – 7 Days|6 Nights",
        "style": "",
        "list": false,
        "align": "center"
      },
      {
        "type": "paragraph",
        "text": "Sri Lanka's Southern Coastal Bliss",
        "style": "",
        "list": false,
        "align": ""
      },
      {
        "type": "paragraph",
        "text": "Leave the everyday behind and embrace swaying palms, golden sunsets, turquoise waters, and charming coastal towns. This journey takes you along Sri Lanka's breathtaking southern coastline, where every day brings a new beach, a new adventure, and another unforgettable sunset. From relaxing by the ocean to exploring colonial heritage and hidden coves, this is the perfect tropical getaway.",
        "style": "",
        "list": false,
        "align": ""
      },
      {
        "type": "paragraph",
        "text": "DAY 01 | WELCOME TO SRI LANKA | BENTOTA",
        "style": "",
        "list": false,
        "align": ""
      },
      {
        "type": "paragraph",
        "text": "Bentota is a sun-drenched paradise",
        "style": "",
        "list": false,
        "align": ""
      },
      {
        "type": "paragraph",
        "text": "Approx. travel time: 2–3 hours",
        "style": "",
        "list": false,
        "align": ""
      },
      {
        "type": "paragraph",
        "text": "Your island escape begins as you're warmly welcomed at the airport before travelling to the golden beaches of Bentota, where the river meets the Indian Ocean.",
        "style": "",
        "list": false,
        "align": ""
      },
      {
        "type": "paragraph",
        "text": "Bentota is a tropical coastal retreat renowned for its golden sandy beaches, swaying coconut palms and inviting Indian Ocean waters. Offering the perfect balance of relaxation and adventure, this popular beach destination is ideal for sun-soaked days, refreshing swims and exciting water sports. The scenic Bentota River adds another dimension to the experience, with boat safaris through mangrove-lined waterways revealing fascinating birdlife and lush natural surroundings. From indulgent beachfront resorts and rejuvenating Ayurvedic wellness experiences to leisurely river cruises and beautiful coastal sunsets, Bentota captures the essence of a tropical Sri Lankan escape.",
        "style": "",
        "list": false,
        "align": ""
      },
      {
        "type": "paragraph",
        "text": "Things to Do",
        "style": "",
        "list": false,
        "align": ""
      },
      {
        "type": "paragraph",
        "text": "Relax on the golden beach",
        "style": "ListParagraph",
        "list": true,
        "align": ""
      },
      {
        "type": "paragraph",
        "text": "Enjoy a Bentota River safari",
        "style": "ListParagraph",
        "list": true,
        "align": ""
      },
      {
        "type": "paragraph",
        "text": "Experience exciting water sports",
        "style": "ListParagraph",
        "list": true,
        "align": ""
      },
      {
        "type": "paragraph",
        "text": "Stay: Bentota",
        "style": "",
        "list": false,
        "align": ""
      },
      {
        "type": "paragraph",
        "text": "DAY 02 | BENTOTA",
        "style": "",
        "list": false,
        "align": ""
      },
      {
        "type": "paragraph",
        "text": "Wake up to the soothing sound of the waves and spend another day embracing the coastal lifestyle.",
        "style": "",
        "list": false,
        "align": ""
      },
      {
        "type": "paragraph",
        "text": "Things to Do",
        "style": "",
        "list": false,
        "align": ""
      },
      {
        "type": "paragraph",
        "text": "Visit to Ariyapala Traditional Masks & Museum",
        "style": "ListParagraph",
        "list": true,
        "align": ""
      },
      {
        "type": "paragraph",
        "text": "Visit Lunuganga or Brief Garden",
        "style": "ListParagraph",
        "list": true,
        "align": ""
      },
      {
        "type": "paragraph",
        "text": "Indulge in a relaxing spa treatment",
        "style": "ListParagraph",
        "list": true,
        "align": ""
      },
      {
        "type": "paragraph",
        "text": "Sunset cocktails by the beach",
        "style": "ListParagraph",
        "list": true,
        "align": ""
      },
      {
        "type": "paragraph",
        "text": "Stay: Bentota",
        "style": "",
        "list": false,
        "align": ""
      },
      {
        "type": "paragraph",
        "text": "DAY 03 | BENTOTA | GALLE",
        "style": "",
        "list": false,
        "align": ""
      },
      {
        "type": "paragraph",
        "text": "Place where ancient stone walls stand guard against the sea.",
        "style": "",
        "list": false,
        "align": ""
      },
      {
        "type": "paragraph",
        "text": "Approx. travel time: 1.5–2 hours",
        "style": "",
        "list": false,
        "align": ""
      },
      {
        "type": "paragraph",
        "text": "Travel further south to the charming coastal city of Galle, where history meets the ocean.",
        "style": "",
        "list": false,
        "align": ""
      },
      {
        "type": "paragraph",
        "text": "Galle is a charming coastal destination where centuries of history meet the relaxed elegance of seaside living. At its heart lies the UNESCO-listed Galle Fort, a beautifully preserved historic quarter of cobblestone streets, colonial-era architecture, old churches and charming Dutch-style buildings. Visitors can wander through boutique shops, art galleries and atmospheric cafés, stroll along the fort’s ocean-facing ramparts and enjoy spectacular sunset views over the Indian Ocean. With its rich maritime heritage, vibrant local culture and laid-back coastal charm, Galle offers a memorable blend of history, discovery and seaside romance.",
        "style": "",
        "list": false,
        "align": ""
      },
      {
        "type": "paragraph",
        "text": "Things to Do",
        "style": "",
        "list": false,
        "align": ""
      },
      {
        "type": "paragraph",
        "text": "Explore Galle Fort",
        "style": "ListParagraph",
        "list": true,
        "align": ""
      },
      {
        "type": "paragraph",
        "text": "Visit the lighthouse and museums",
        "style": "ListParagraph",
        "list": true,
        "align": ""
      },
      {
        "type": "paragraph",
        "text": "Enjoy shopping and café hopping",
        "style": "ListParagraph",
        "list": true,
        "align": ""
      },
      {
        "type": "paragraph",
        "text": "Stay: Galle",
        "style": "",
        "list": false,
        "align": ""
      },
      {
        "type": "paragraph",
        "text": "DAY 04 | GALLE | TANGALLE",
        "style": "",
        "list": false,
        "align": ""
      },
      {
        "type": "paragraph",
        "text": "Untamed shores, whispering palms, and a forgotten horizon.",
        "style": "",
        "list": false,
        "align": ""
      },
      {
        "type": "paragraph",
        "text": "Approx. travel time: 1.5–2 hours",
        "style": "",
        "list": false,
        "align": ""
      },
      {
        "type": "paragraph",
        "text": "Continue along one of Sri Lanka's most scenic coastal drives to the peaceful beaches of Tangalle.",
        "style": "",
        "list": false,
        "align": ""
      },
      {
        "type": "paragraph",
        "text": "Set along Sri Lanka’s enchanting southern coastline, Tangalle is a captivating seaside destination renowned for its sweeping golden beaches, swaying coconut palms and tranquil tropical atmosphere. Unlike the busier coastal resorts, this laid-back town offers a more secluded escape, with picturesque bays, rocky headlands and stretches of unspoilt shoreline creating a beautiful natural setting. Visitors can explore the nearby Rekawa Turtle Conservation Project, discover the striking rock formations of Hummanaya Blowhole and enjoy peaceful walks along the coast. The surrounding region also offers opportunities for lagoon excursions, birdwatching and authentic village experiences. With its blend of coastal beauty, wildlife encounters and relaxed seaside living, Tangalle is an ideal retreat for travellers seeking a quieter side of Sri Lanka’s southern shores.",
        "style": "",
        "list": false,
        "align": ""
      },
      {
        "type": "paragraph",
        "text": "Things to Do",
        "style": "",
        "list": false,
        "align": ""
      },
      {
        "type": "paragraph",
        "text": "Relax on secluded beaches",
        "style": "ListParagraph",
        "list": true,
        "align": ""
      },
      {
        "type": "paragraph",
        "text": "Visit Rekawa Turtle Beach",
        "style": "ListParagraph",
        "list": true,
        "align": ""
      },
      {
        "type": "paragraph",
        "text": "Explore nearby lagoons",
        "style": "ListParagraph",
        "list": true,
        "align": ""
      },
      {
        "type": "paragraph",
        "text": "Stay: Tangalle",
        "style": "",
        "list": false,
        "align": ""
      },
      {
        "type": "paragraph",
        "text": "DAY 05 & 06 | TANGALLE",
        "style": "",
        "list": false,
        "align": ""
      },
      {
        "type": "paragraph",
        "text": "Things to Do",
        "style": "",
        "list": false,
        "align": ""
      },
      {
        "type": "paragraph",
        "text": "Morning beach walks",
        "style": "ListParagraph",
        "list": true,
        "align": ""
      },
      {
        "type": "paragraph",
        "text": "Explore the spectacular Hummanaya Blow Hole",
        "style": "ListParagraph",
        "list": true,
        "align": ""
      },
      {
        "type": "paragraph",
        "text": "Take a day trip to Kalametiya Bird Sanctuary for bird watching",
        "style": "ListParagraph",
        "list": true,
        "align": ""
      },
      {
        "type": "paragraph",
        "text": "Enjoy an afternoon jeep safari in Yala,Bundala or in Udawalawe National Parks",
        "style": "ListParagraph",
        "list": true,
        "align": ""
      },
      {
        "type": "paragraph",
        "text": "Stay: Tangalle",
        "style": "",
        "list": false,
        "align": ""
      },
      {
        "type": "paragraph",
        "text": "DAY 07 | TANGALLE – DEPARTURE|AIRPORT",
        "style": "",
        "list": false,
        "align": ""
      },
      {
        "type": "paragraph",
        "text": "Approx. travel time: 3-3.5 hours",
        "style": "",
        "list": false,
        "align": ""
      },
      {
        "type": "paragraph",
        "text": "After a leisurely breakfast, begin your journey back to the airport with wonderful memories of Sri Lanka's stunning southern coastline, sun-kissed beaches, and unforgettable ocean adventures.",
        "style": "",
        "list": false,
        "align": ""
      },
      {
        "type": "paragraph",
        "text": "**Until we meet again… Ayubowan!",
        "style": "",
        "list": false,
        "align": ""
      }
    ]
  },
  {
    "id": "one-hotel-many-destinations",
    "name": "One Hotel,Many Destinations",
    "sourceFile": "One Hotel,Many Destinations.docx",
    "title": "Unpack Once, Explore More",
    "image": "/ff704484-a0b3-4483-b004-584fb344461f.jpg",
    "blocks": [
      {
        "type": "paragraph",
        "text": "Unpack Once, Explore More",
        "style": "",
        "list": false,
        "align": "center"
      },
      {
        "type": "paragraph",
        "text": "Some journeys aren't about seeing more—they're about experiencing more.",
        "style": "",
        "list": false,
        "align": ""
      },
      {
        "type": "paragraph",
        "text": "Imagine arriving at a remarkable hotel where every sunrise invites you to slow down, every afternoon offers time to unwind, and every evening ends with unforgettable moments. Instead of constantly packing and moving from place to place, our “Stay a Little Longer” collection invites you to settle into one extraordinary destination for five nights or more.",
        "style": "",
        "list": false,
        "align": ""
      },
      {
        "type": "paragraph",
        "text": "With your luxury hotel as your home away from home, you'll enjoy the freedom to relax by the pool, indulge in spa treatments, savour exceptional cuisine, or simply embrace the peaceful rhythm of Sri Lanka. Whenever you're ready to explore, a collection of hand-picked private day experiences reveals the very best of the surrounding region—from hidden villages and wildlife to cultural treasures, artisan workshops, scenic hikes, beaches, and unforgettable local encounters.",
        "style": "",
        "list": false,
        "align": ""
      },
      {
        "type": "paragraph",
        "text": "Travel at your own pace, knowing that every day can be as adventurous or as relaxing as you choose.",
        "style": "",
        "list": false,
        "align": ""
      },
      {
        "type": "paragraph",
        "text": "Because sometimes the greatest luxury is having nowhere else to rush to.",
        "style": "",
        "list": false,
        "align": ""
      },
      {
        "type": "paragraph",
        "text": "Perfect for",
        "style": "",
        "list": false,
        "align": ""
      },
      {
        "type": "paragraph",
        "text": "This collection is thoughtfully designed for travellers who appreciate slower, more meaningful journeys, including:",
        "style": "",
        "list": false,
        "align": ""
      },
      {
        "type": "paragraph",
        "text": "Couples seeking a romantic and luxurious escape.",
        "style": "ListParagraph",
        "list": true,
        "align": ""
      },
      {
        "type": "paragraph",
        "text": "Honeymooners looking for privacy and unforgettable experiences.",
        "style": "ListParagraph",
        "list": true,
        "align": ""
      },
      {
        "type": "paragraph",
        "text": "Families who prefer a comfortable base while exploring nearby attractions.",
        "style": "ListParagraph",
        "list": true,
        "align": ""
      },
      {
        "type": "paragraph",
        "text": "Wellness travellers combining relaxation with gentle discovery.",
        "style": "ListParagraph",
        "list": true,
        "align": ""
      },
      {
        "type": "paragraph",
        "text": "Luxury travellers who value exceptional hotels and personalised experiences.",
        "style": "ListParagraph",
        "list": true,
        "align": ""
      },
      {
        "type": "paragraph",
        "text": "Guests celebrating anniversaries, birthdays, or special occasions.",
        "style": "ListParagraph",
        "list": true,
        "align": ""
      },
      {
        "type": "paragraph",
        "text": "Remote workers or long-stay visitors wanting to blend leisure with exploration.",
        "style": "ListParagraph",
        "list": true,
        "align": ""
      },
      {
        "type": "paragraph",
        "text": "Explore at Your Own Pace",
        "style": "",
        "list": false,
        "align": ""
      },
      {
        "type": "paragraph",
        "text": "During your stay, enjoy a carefully curated selection of optional private day experiences, tailored to the destination and your interests. Depending on where you stay, these may include:",
        "style": "",
        "list": false,
        "align": ""
      },
      {
        "type": "paragraph",
        "text": "Scenic nature walks and hiking trails.",
        "style": "ListParagraph",
        "list": true,
        "align": ""
      },
      {
        "type": "paragraph",
        "text": "National parks and wildlife safaris.",
        "style": "ListParagraph",
        "list": true,
        "align": ""
      },
      {
        "type": "paragraph",
        "text": "Tea plantations and tea experiences.",
        "style": "ListParagraph",
        "list": true,
        "align": ""
      },
      {
        "type": "paragraph",
        "text": "Local village and cultural encounters.",
        "style": "ListParagraph",
        "list": true,
        "align": ""
      },
      {
        "type": "paragraph",
        "text": "Heritage sites and ancient temples.",
        "style": "ListParagraph",
        "list": true,
        "align": ""
      },
      {
        "type": "paragraph",
        "text": "Boat safaris, lagoon cruises, and kayaking.",
        "style": "ListParagraph",
        "list": true,
        "align": ""
      },
      {
        "type": "paragraph",
        "text": "Artisan workshops, pottery, and traditional crafts.",
        "style": "ListParagraph",
        "list": true,
        "align": ""
      },
      {
        "type": "paragraph",
        "text": "Cooking experiences and local food trails.",
        "style": "ListParagraph",
        "list": true,
        "align": ""
      },
      {
        "type": "paragraph",
        "text": "Whale watching and coastal adventures.",
        "style": "ListParagraph",
        "list": true,
        "align": ""
      },
      {
        "type": "paragraph",
        "text": "Waterfalls and mountain viewpoints.",
        "style": "ListParagraph",
        "list": true,
        "align": ""
      },
      {
        "type": "paragraph",
        "text": "Wellness, yoga, and spa experiences.",
        "style": "ListParagraph",
        "list": true,
        "align": ""
      },
      {
        "type": "paragraph",
        "text": "Hidden beaches and sunset excursions.",
        "style": "ListParagraph",
        "list": true,
        "align": ""
      },
      {
        "type": "paragraph",
        "text": "Our Featured Stay Collection",
        "style": "",
        "list": false,
        "align": ""
      },
      {
        "type": "paragraph",
        "text": "Cape Weligama Resort",
        "style": "",
        "list": false,
        "align": ""
      },
      {
        "type": "paragraph",
        "text": "Weligama Bay Marriot Resort",
        "style": "",
        "list": false,
        "align": ""
      },
      {
        "type": "paragraph",
        "text": "Anantara Peace Haven Tangalle Resort",
        "style": "",
        "list": false,
        "align": ""
      },
      {
        "type": "paragraph",
        "text": "Anantara Kalutara Resort",
        "style": "",
        "list": false,
        "align": ""
      },
      {
        "type": "paragraph",
        "text": "Uga Prava – Tangalle",
        "style": "",
        "list": false,
        "align": ""
      },
      {
        "type": "paragraph",
        "text": "Uga Ghiri – Ella",
        "style": "",
        "list": false,
        "align": ""
      },
      {
        "type": "paragraph",
        "text": "Uga Ulagalla – Anuradhapura",
        "style": "",
        "list": false,
        "align": ""
      },
      {
        "type": "paragraph",
        "text": "Water Garden Sigiriya",
        "style": "",
        "list": false,
        "align": ""
      },
      {
        "type": "paragraph",
        "text": "Thaala Bentota",
        "style": "",
        "list": false,
        "align": ""
      },
      {
        "type": "paragraph",
        "text": "Lunuganga by Teardrop Hotels – Bentota",
        "style": "",
        "list": false,
        "align": ""
      },
      {
        "type": "paragraph",
        "text": "Tri Ahanagama by Teardrop Hotels",
        "style": "",
        "list": false,
        "align": ""
      },
      {
        "type": "paragraph",
        "text": "Heritance Kandalama – Dambulla",
        "style": "",
        "list": false,
        "align": ""
      },
      {
        "type": "paragraph",
        "text": "Jetwing Kaduruketha – Wellawaya",
        "style": "",
        "list": false,
        "align": ""
      },
      {
        "type": "paragraph",
        "text": "Jetwing Vil Uyana- Sigiriya",
        "style": "",
        "list": false,
        "align": ""
      },
      {
        "type": "paragraph",
        "text": "Araliya Unawatuna Beach resort",
        "style": "",
        "list": false,
        "align": ""
      },
      {
        "type": "paragraph",
        "text": "Shangri -La Hambantota",
        "style": "",
        "list": false,
        "align": ""
      },
      {
        "type": "paragraph",
        "text": "Buckiningham Place Hotel & Spa",
        "style": "",
        "list": false,
        "align": ""
      },
      {
        "type": "paragraph",
        "text": "Taru Villas Levita – Digana",
        "style": "",
        "list": false,
        "align": ""
      },
      {
        "type": "paragraph",
        "text": "W15 Hanthana",
        "style": "",
        "list": false,
        "align": ""
      },
      {
        "type": "paragraph",
        "text": "W15 Ambuluwawa",
        "style": "",
        "list": false,
        "align": ""
      },
      {
        "type": "paragraph",
        "text": "Ceylon Tree Trails Hatton",
        "style": "",
        "list": false,
        "align": ""
      },
      {
        "type": "paragraph",
        "text": "Dendrobium House",
        "style": "",
        "list": false,
        "align": ""
      },
      {
        "type": "paragraph",
        "text": "Our Promise",
        "style": "",
        "list": false,
        "align": ""
      },
      {
        "type": "paragraph",
        "text": "Every “Stay a Little Longer” holiday is fully tailor-made. Choose your favorite hotel, decide how many days you'd like to stay, and let our travel specialists create a personalized collection of nearby experiences that perfectly matches your interests, ensuring every moment feels relaxed, effortless, and uniquely yours.",
        "style": "",
        "list": false,
        "align": ""
      },
      {
        "type": "paragraph",
        "text": "Gagan ,",
        "style": "",
        "list": false,
        "align": ""
      },
      {
        "type": "paragraph",
        "text": "Kindly add some Gallery of these mentioned hotels in the best suited manner, as the highlight of this package is about hotels.Take free images of the hotels or from media kits if available.",
        "style": "",
        "list": false,
        "align": ""
      }
    ]
  },
  {
    "id": "soul-of-serenity-a-luxury-wellness-journey",
    "name": "Soul of Serenity – A Luxury Wellness Journey",
    "sourceFile": "Soul of Serenity – A Luxury Wellness Journey.docx",
    "title": "Soul of Serenity – A Luxury Wellness Journey Through Sri Lanka -13 Days | 12 Nights",
    "image": "/30e010b1-2b6c-4f87-81a5-d45d39aae23c.jpg",
    "blocks": [
      {
        "type": "paragraph",
        "text": "Soul of Serenity – A Luxury Wellness Journey Through Sri Lanka -13 Days | 12 Nights",
        "style": "",
        "list": false,
        "align": "center"
      },
      {
        "type": "paragraph",
        "text": "Reconnect, Restore & Rejuvenate",
        "style": "",
        "list": false,
        "align": ""
      },
      {
        "type": "paragraph",
        "text": "Escape into a transformative wellness journey across Sri Lanka, where ancient healing traditions, breathtaking landscapes, and mindful experiences come together in perfect harmony. From the peaceful forests of Habarana and the spiritual heart of Kandy to the tranquil southern coastlines of Koggala and Talalla, this curated retreat invites you to slow down, reconnect with nature, and restore your body, mind, and soul.",
        "style": "",
        "list": false,
        "align": ""
      },
      {
        "type": "paragraph",
        "text": "Designed for discerning travellers seeking balance, this immersive holiday combines luxury wellness resorts, Ayurveda, yoga, meditation, nourishing cuisine, cultural encounters, and moments of complete relaxation.",
        "style": "",
        "list": false,
        "align": ""
      },
      {
        "type": "paragraph",
        "text": "DAY 1 – WELCOME TO SRI LANKA - AIRPORT | SIGIRIYA",
        "style": "",
        "list": false,
        "align": ""
      },
      {
        "type": "paragraph",
        "text": "Let the journey begin",
        "style": "",
        "list": false,
        "align": ""
      },
      {
        "type": "paragraph",
        "text": "Approx. travel time: 3.5–4.5 hours",
        "style": "",
        "list": false,
        "align": ""
      },
      {
        "type": "paragraph",
        "text": "Upon arrival at Bandaranaike International Airport, you will be warmly welcomed by your dedicated Magical Paradise representative before travelling to the tranquil wilderness of Sigiriya.",
        "style": "",
        "list": false,
        "align": ""
      },
      {
        "type": "paragraph",
        "text": "Discover the heart of Sri Lanka’s Cultural Triangle, where ancient kingdoms, remarkable architecture and timeless traditions tell the story of a fascinating past. Sigiriya captivates visitors with its iconic Lion Rock fortress, dramatic scenery and ancient frescoes, while nearby Dambulla is renowned for its impressive cave temple complex, adorned with centuries-old Buddhist murals and statues. Surrounded by lush greenery, rural villages and scenic countryside, these destinations offer a memorable journey through the island’s rich history, spiritual heritage and extraordinary cultural treasures.",
        "style": "",
        "list": false,
        "align": ""
      },
      {
        "type": "paragraph",
        "text": "Enjoy a relaxing evening at your wellness retreat.",
        "style": "",
        "list": false,
        "align": ""
      },
      {
        "type": "paragraph",
        "text": "Overnight Stay Options– Ayurvie Retreat Sigiriya | Ayugiri Ayurveda Wellness Resort",
        "style": "",
        "list": false,
        "align": ""
      },
      {
        "type": "paragraph",
        "text": "DAYS 2 & 3 – WELLNESS RETREAT IN SIGIRIYA",
        "style": "",
        "list": false,
        "align": ""
      },
      {
        "type": "paragraph",
        "text": "Begin each day with gentle yoga, meditation, or mindful movement amidst peaceful natural surroundings.",
        "style": "",
        "list": false,
        "align": ""
      },
      {
        "type": "paragraph",
        "text": "Wellness Experiences",
        "style": "ListParagraph",
        "list": true,
        "align": ""
      },
      {
        "type": "paragraph",
        "text": "Sunrise yoga and meditation",
        "style": "ListParagraph",
        "list": true,
        "align": ""
      },
      {
        "type": "paragraph",
        "text": "Ayurvedic wellness consultations",
        "style": "ListParagraph",
        "list": true,
        "align": ""
      },
      {
        "type": "paragraph",
        "text": "Herbal therapies and massages",
        "style": "ListParagraph",
        "list": true,
        "align": ""
      },
      {
        "type": "paragraph",
        "text": "Nature walks through tropical forests",
        "style": "ListParagraph",
        "list": true,
        "align": ""
      },
      {
        "type": "paragraph",
        "text": "Village experiences promoting mindful living",
        "style": "ListParagraph",
        "list": true,
        "align": ""
      },
      {
        "type": "paragraph",
        "text": "Healthy farm-to-table cuisine",
        "style": "ListParagraph",
        "list": true,
        "align": ""
      },
      {
        "type": "paragraph",
        "text": "Optional safari in Minneriya or Eco Park to reconnect with nature",
        "style": "",
        "list": false,
        "align": ""
      },
      {
        "type": "paragraph",
        "text": "2 Nights Stay Options – Ayurvie Retreat Sigiriya | Ayugiri Ayurveda Wellness Resort",
        "style": "",
        "list": false,
        "align": ""
      },
      {
        "type": "paragraph",
        "text": "DAY 4 – SIGIRIYA |KANDY",
        "style": "",
        "list": false,
        "align": ""
      },
      {
        "type": "paragraph",
        "text": "Explore the enchanting city in the hills",
        "style": "",
        "list": false,
        "align": ""
      },
      {
        "type": "paragraph",
        "text": "Approx. travel time: 2–2.5 hours",
        "style": "",
        "list": false,
        "align": ""
      },
      {
        "type": "paragraph",
        "text": "Journey into Sri Lanka's scenic central highlands towards the sacred city of Kandy.",
        "style": "",
        "list": false,
        "align": ""
      },
      {
        "type": "paragraph",
        "text": "Welcome to Kandy",
        "style": "",
        "list": false,
        "align": ""
      },
      {
        "type": "paragraph",
        "text": "Nestled among mist-covered hills and lush tropical landscapes, Kandy is a captivating destination where Sri Lanka’s rich heritage and spiritual traditions come to life. As the island’s last royal capital, the city is home to the sacred Temple of the Tooth Relic, tranquil Kandy Lake and beautifully preserved cultural landmarks. Visitors can explore vibrant local markets, experience traditional Kandyan dance performances and discover the botanical wonders of nearby Peradeniya. Blending history, culture and natural beauty, Kandy offers an authentic glimpse into the island’s timeless traditions.",
        "style": "",
        "list": false,
        "align": ""
      },
      {
        "type": "paragraph",
        "text": "Overnight Stay Options – Santani Wellness Resort|Aarunya Nature Resort|The Kandy Samadhi Centre",
        "style": "",
        "list": false,
        "align": ""
      },
      {
        "type": "paragraph",
        "text": "DAYS 5 & 6 – WELLNESS & CULTURE IN KANDY",
        "style": "",
        "list": false,
        "align": ""
      },
      {
        "type": "paragraph",
        "text": "Experience the perfect balance between cultural discovery and holistic wellbeing.",
        "style": "",
        "list": false,
        "align": ""
      },
      {
        "type": "paragraph",
        "text": "Wellness Experiences",
        "style": "ListParagraph",
        "list": true,
        "align": ""
      },
      {
        "type": "paragraph",
        "text": "Morning yoga overlooking the hills",
        "style": "ListParagraph",
        "list": true,
        "align": ""
      },
      {
        "type": "paragraph",
        "text": "Meditation sessions",
        "style": "ListParagraph",
        "list": true,
        "align": ""
      },
      {
        "type": "paragraph",
        "text": "Ayurveda spa therapies",
        "style": "ListParagraph",
        "list": true,
        "align": ""
      },
      {
        "type": "paragraph",
        "text": "Sound healing or mindfulness practices",
        "style": "ListParagraph",
        "list": true,
        "align": ""
      },
      {
        "type": "paragraph",
        "text": "Visit the Temple of the Sacred Tooth Relic",
        "style": "ListParagraph",
        "list": true,
        "align": ""
      },
      {
        "type": "paragraph",
        "text": "Walk around scenic Kandy Lake",
        "style": "ListParagraph",
        "list": true,
        "align": ""
      },
      {
        "type": "paragraph",
        "text": "Explore the Royal Botanical Gardens",
        "style": "ListParagraph",
        "list": true,
        "align": ""
      },
      {
        "type": "paragraph",
        "text": "Healthy culinary experiences inspired by local ingredients",
        "style": "ListParagraph",
        "list": true,
        "align": ""
      },
      {
        "type": "paragraph",
        "text": "2 Nights  Stay  Options– Santani Wellness Resort|Aarunya Nature Resort|The Kandy Samadhi Centre",
        "style": "",
        "list": false,
        "align": ""
      },
      {
        "type": "paragraph",
        "text": "DAY 7 – KANDY | AHANGAMA",
        "style": "",
        "list": false,
        "align": ""
      },
      {
        "type": "paragraph",
        "text": "Getting that Vitamin Sea Meditation",
        "style": "",
        "list": false,
        "align": ""
      },
      {
        "type": "paragraph",
        "text": "Approx. travel time: 4–5 hours",
        "style": "",
        "list": false,
        "align": ""
      },
      {
        "type": "paragraph",
        "text": "Travel south through changing landscapes as the cool hills give way to Sri Lanka's idyllic coastline.",
        "style": "",
        "list": false,
        "align": ""
      },
      {
        "type": "paragraph",
        "text": "Upon arrival, settle into your private sanctuary on the edge of Koggala Lake .",
        "style": "",
        "list": false,
        "align": ""
      },
      {
        "type": "paragraph",
        "text": "Welcome to Ahangama",
        "style": "",
        "list": false,
        "align": ""
      },
      {
        "type": "paragraph",
        "text": "A stylish southern coastal destination where traditional Sri Lankan charm meets a vibrant surf and café culture. Famous for its long sandy beaches, rolling waves and iconic stilt fishermen, this laid-back town attracts surfers, creatives and travellers drawn to its relaxed tropical lifestyle. Beyond the shoreline, discover boutique stays, independent cafés, wellness retreats and locally inspired dining experiences, all set against a backdrop of swaying coconut palms and the sparkling Indian Ocean. Blending authentic coastal traditions with a contemporary bohemian spirit, Ahangama offers a refreshing and memorable escape along Sri Lanka’s southern coast.",
        "style": "",
        "list": false,
        "align": ""
      },
      {
        "type": "paragraph",
        "text": "Overnight Stay – Kurulu Bay",
        "style": "",
        "list": false,
        "align": ""
      },
      {
        "type": "paragraph",
        "text": "DAYS 8 & 9 – LAKESIDE WELLNESS IN AHANGAMA",
        "style": "",
        "list": false,
        "align": ""
      },
      {
        "type": "paragraph",
        "text": "Yoga Sessions",
        "style": "ListParagraph",
        "list": true,
        "align": ""
      },
      {
        "type": "paragraph",
        "text": "Spa rituals",
        "style": "ListParagraph",
        "list": true,
        "align": ""
      },
      {
        "type": "paragraph",
        "text": "Breathwork sessions",
        "style": "ListParagraph",
        "list": true,
        "align": ""
      },
      {
        "type": "paragraph",
        "text": "Paddleboarding or gentle kayaking",
        "style": "ListParagraph",
        "list": true,
        "align": ""
      },
      {
        "type": "paragraph",
        "text": "Visit Koggala Lake",
        "style": "ListParagraph",
        "list": true,
        "align": ""
      },
      {
        "type": "paragraph",
        "text": "Mindful beach walks",
        "style": "ListParagraph",
        "list": true,
        "align": ""
      },
      {
        "type": "paragraph",
        "text": "Nutritious wellness cuisine",
        "style": "ListParagraph",
        "list": true,
        "align": ""
      },
      {
        "type": "paragraph",
        "text": "2 Nights Stay – Kurulu Bay",
        "style": "",
        "list": false,
        "align": ""
      },
      {
        "type": "paragraph",
        "text": "DAY 10 – AHANGAMA | TALALLA OR TANGALLE",
        "style": "",
        "list": false,
        "align": ""
      },
      {
        "type": "paragraph",
        "text": "Looking for more Hidden escapes in the coastal line",
        "style": "",
        "list": false,
        "align": ""
      },
      {
        "type": "paragraph",
        "text": "Approx. travel time: 1.5–2 hours",
        "style": "",
        "list": false,
        "align": ""
      },
      {
        "type": "paragraph",
        "text": "Continue along Sri Lanka's spectacular southern coastline to the peaceful sanctuary of Talalla or Tangalle",
        "style": "",
        "list": false,
        "align": ""
      },
      {
        "type": "paragraph",
        "text": "Talalla - Nestled along Sri Lanka’s beautiful southern coastline, Talalla is a peaceful beachside retreat renowned for its sweeping crescent-shaped bay, golden sands and palm-fringed shores. Away from the busier coastal towns, this tranquil destination invites visitors to embrace a slower pace of life, whether enjoying leisurely beach walks, relaxing beneath swaying coconut palms or watching traditional fishing boats return to shore. The area also offers opportunities for beginner surfing, yoga and wellness experiences, while nearby attractions such as Dondra Lighthouse and Hiriketiya Bay add to its appeal. With its unspoilt coastal charm and laid-back atmosphere, Talalla is an ideal escape for travellers seeking relaxation, natural beauty and a more secluded side of Sri Lanka’s southern coast.",
        "style": "",
        "list": false,
        "align": ""
      },
      {
        "type": "paragraph",
        "text": "Tangalle - where golden beaches, swaying coconut palms and turquoise waters create a picture-perfect tropical escape. With its peaceful coves, traditional fishing villages and laid-back coastal charm, Tangalle invites you to slow down, soak in the natural beauty and experience the quieter side of Sri Lanka’s southern coast.",
        "style": "",
        "list": false,
        "align": ""
      },
      {
        "type": "paragraph",
        "text": "Far removed from busy tourist hubs, These are  2 of Sri Lanka's hidden wellness havens, celebrated for its quiet beaches and restorative atmosphere.",
        "style": "",
        "list": false,
        "align": ""
      },
      {
        "type": "paragraph",
        "text": "Overnight Stay – Talalla Retreat | Kayaam House",
        "style": "",
        "list": false,
        "align": ""
      },
      {
        "type": "paragraph",
        "text": "DAYS 11 & 12 – DEEP RELAXATION IN TALALLA OR TANGALLE",
        "style": "",
        "list": false,
        "align": ""
      },
      {
        "type": "paragraph",
        "text": "Complete your wellness journey with two days dedicated entirely to rest, healing, and personal renewal.",
        "style": "",
        "list": false,
        "align": ""
      },
      {
        "type": "paragraph",
        "text": "Wellness Experiences",
        "style": "ListParagraph",
        "list": true,
        "align": ""
      },
      {
        "type": "paragraph",
        "text": "Daily yoga overlooking the ocean",
        "style": "ListParagraph",
        "list": true,
        "align": ""
      },
      {
        "type": "paragraph",
        "text": "Guided meditation",
        "style": "ListParagraph",
        "list": true,
        "align": ""
      },
      {
        "type": "paragraph",
        "text": "Ayurveda wellness treatments",
        "style": "ListParagraph",
        "list": true,
        "align": ""
      },
      {
        "type": "paragraph",
        "text": "Relaxing massages",
        "style": "ListParagraph",
        "list": true,
        "align": ""
      },
      {
        "type": "paragraph",
        "text": "Beach walks",
        "style": "ListParagraph",
        "list": true,
        "align": ""
      },
      {
        "type": "paragraph",
        "text": "Healthy organic cuisine",
        "style": "ListParagraph",
        "list": true,
        "align": ""
      },
      {
        "type": "paragraph",
        "text": "Journaling and mindfulness sessions",
        "style": "ListParagraph",
        "list": true,
        "align": ""
      },
      {
        "type": "paragraph",
        "text": "Leisure time to simply unwind beside the Indian Ocean",
        "style": "ListParagraph",
        "list": true,
        "align": ""
      },
      {
        "type": "paragraph",
        "text": "Allow yourself to fully embrace the slower pace of life before returning home refreshed and revitalised.",
        "style": "ListParagraph",
        "list": true,
        "align": ""
      },
      {
        "type": "paragraph",
        "text": "Overnight Stay – Talalla Retreat | Kayaam House",
        "style": "",
        "list": false,
        "align": ""
      },
      {
        "type": "paragraph",
        "text": "DAY 13 – TALALLA/TANGALLE |AIRPORT",
        "style": "",
        "list": false,
        "align": ""
      },
      {
        "type": "paragraph",
        "text": "Farewell Sri Lanka",
        "style": "",
        "list": false,
        "align": ""
      },
      {
        "type": "paragraph",
        "text": "Approx. travel time: 3-3.5 hours",
        "style": "",
        "list": false,
        "align": ""
      },
      {
        "type": "paragraph",
        "text": "Following breakfast, enjoy a comfortable transfer to Bandaranaike International Airport.",
        "style": "",
        "list": false,
        "align": ""
      },
      {
        "type": "paragraph",
        "text": "As your journey comes to an end, depart Sri Lanka feeling refreshed, inspired, and renewed, carrying with you the lasting benefits of holistic wellbeing and the unforgettable warmth of Sri Lankan hospitality.",
        "style": "",
        "list": false,
        "align": ""
      },
      {
        "type": "paragraph",
        "text": "We look forward to welcoming you back to Magical Paradise for your next journey of wellness and discovery.",
        "style": "",
        "list": false,
        "align": ""
      }
    ]
  },
  {
    "id": "sri-lankas-best-loved-family-adventure-a-family-journey",
    "name": "Sri Lanka’s Best-Loved Family Adventure (A Family Journey)",
    "sourceFile": "Sri Lanka’s Best-Loved Family Adventure (A Family Journey).docx",
    "title": "Sri Lanka’s Best-Loved Family Adventure- 15 Days|14 Nights",
    "image": "/ff704484-a0b3-4483-b004-584fb344461f.jpg",
    "blocks": [
      {
        "type": "paragraph",
        "text": "Sri Lanka’s Best-Loved Family Adventure- 15 Days|14 Nights",
        "style": "",
        "list": false,
        "align": "center"
      },
      {
        "type": "paragraph",
        "text": "A Journey of Discovery, Wildlife & Coastal Bliss",
        "style": "",
        "list": false,
        "align": ""
      },
      {
        "type": "paragraph",
        "text": "Create lifelong family memories as you journey across Sri Lanka's most iconic destinations. From ancient kingdoms and majestic mountains to exciting wildlife safaris and sun-kissed beaches, every stop offers something magical for every member of the family. Meet gentle giants, ride one of the world's most scenic train journeys, explore lush tea plantations, and unwind on the southern coast before ending your unforgettable island adventure.",
        "style": "",
        "list": false,
        "align": ""
      },
      {
        "type": "paragraph",
        "text": "DAY 01 | WELCOME TO SRI LANKA – COLOMBO",
        "style": "",
        "list": false,
        "align": ""
      },
      {
        "type": "paragraph",
        "text": "Where your story begins",
        "style": "",
        "list": false,
        "align": ""
      },
      {
        "type": "paragraph",
        "text": "Approx. travel time: 45 minutes–1.5 hours",
        "style": "",
        "list": false,
        "align": ""
      },
      {
        "type": "paragraph",
        "text": "Colombo is a captivating blend of colonial heritage, vibrant city life and modern sophistication, offering a fascinating glimpse into Sri Lanka’s past and present. From the historic charm of Fort and the colourful streets of Pettah to the oceanfront promenade of Galle Face Green and the serene beauty of Gangaramaya Temple, the city invites visitors to discover its many contrasts. With stylish hotels, diverse culinary experiences, bustling markets, boutique shopping and lively nightlife, Colombo is an ideal introduction to the island’s culture, character and contemporary lifestyle.",
        "style": "",
        "list": false,
        "align": ""
      },
      {
        "type": "paragraph",
        "text": "Things to Do",
        "style": "",
        "list": false,
        "align": ""
      },
      {
        "type": "paragraph",
        "text": "Explore Independence Square & the city highlights",
        "style": "ListParagraph",
        "list": true,
        "align": ""
      },
      {
        "type": "paragraph",
        "text": "Visit Gangaramaya Temple",
        "style": "ListParagraph",
        "list": true,
        "align": ""
      },
      {
        "type": "paragraph",
        "text": "Enjoy an evening at Galle Face Green",
        "style": "ListParagraph",
        "list": true,
        "align": ""
      },
      {
        "type": "paragraph",
        "text": "Stay: A stylish city hotel",
        "style": "",
        "list": false,
        "align": ""
      },
      {
        "type": "paragraph",
        "text": "DAY 02 | COLOMBO | DAMBULLA",
        "style": "",
        "list": false,
        "align": ""
      },
      {
        "type": "paragraph",
        "text": "From city streets to ancient lands",
        "style": "",
        "list": false,
        "align": ""
      },
      {
        "type": "paragraph",
        "text": "Approx. travel time: 4–5 hours",
        "style": "",
        "list": false,
        "align": ""
      },
      {
        "type": "paragraph",
        "text": "Journey into the heart of Sri Lanka’s Cultural Triangle, where ancient kingdoms, remarkable architecture and timeless traditions tell the story of a fascinating past. Sigiriya captivates visitors with its iconic Lion Rock fortress, dramatic scenery and ancient frescoes, while nearby Dambulla is renowned for its impressive cave temple complex, adorned with centuries-old Buddhist murals and statues. Surrounded by lush greenery, rural villages and scenic countryside, these destinations offer a memorable journey through the island’s rich history, spiritual heritage and extraordinary cultural treasures.",
        "style": "",
        "list": false,
        "align": ""
      },
      {
        "type": "paragraph",
        "text": "Things to Do",
        "style": "",
        "list": false,
        "align": ""
      },
      {
        "type": "paragraph",
        "text": "Visit the Dambulla Cave Temple",
        "style": "ListParagraph",
        "list": true,
        "align": ""
      },
      {
        "type": "paragraph",
        "text": "Jeep safari at Minneriya or Kaudulla National Park (seasonal)",
        "style": "ListParagraph",
        "list": true,
        "align": ""
      },
      {
        "type": "paragraph",
        "text": "Relax at the resort",
        "style": "ListParagraph",
        "list": true,
        "align": ""
      },
      {
        "type": "paragraph",
        "text": "Stay: A tranquil nature retreat surrounded by lush greenery.",
        "style": "",
        "list": false,
        "align": ""
      },
      {
        "type": "paragraph",
        "text": "DAY 03 | DAMBULLA",
        "style": "",
        "list": false,
        "align": ""
      },
      {
        "type": "paragraph",
        "text": "Where history meets wonder",
        "style": "",
        "list": false,
        "align": ""
      },
      {
        "type": "paragraph",
        "text": "Things to Do",
        "style": "",
        "list": false,
        "align": ""
      },
      {
        "type": "paragraph",
        "text": "Hot Air Balloon Ride (Seasonal)",
        "style": "ListParagraph",
        "list": true,
        "align": ""
      },
      {
        "type": "paragraph",
        "text": "Kayaking",
        "style": "ListParagraph",
        "list": true,
        "align": ""
      },
      {
        "type": "paragraph",
        "text": "Climb the majestic Sigiriya Rock Fortress",
        "style": "ListParagraph",
        "list": true,
        "align": ""
      },
      {
        "type": "paragraph",
        "text": "Village experience with a traditional catamaran ride",
        "style": "ListParagraph",
        "list": true,
        "align": ""
      },
      {
        "type": "paragraph",
        "text": "Stay: Enjoy another peaceful evening in the heart of the Cultural Triangle.",
        "style": "",
        "list": false,
        "align": ""
      },
      {
        "type": "paragraph",
        "text": "DAY 04 | DAMBULLA| KANDY",
        "style": "",
        "list": false,
        "align": ""
      },
      {
        "type": "paragraph",
        "text": "Into the heart of the island",
        "style": "",
        "list": false,
        "align": ""
      },
      {
        "type": "paragraph",
        "text": "Approx. travel time: 2–2.5 hours",
        "style": "",
        "list": false,
        "align": ""
      },
      {
        "type": "paragraph",
        "text": "Travel through scenic countryside to Sri Lanka's cultural capital.",
        "style": "",
        "list": false,
        "align": ""
      },
      {
        "type": "paragraph",
        "text": "Nestled among mist-covered hills and lush tropical landscapes, Kandy is a captivating destination where Sri Lanka’s rich heritage and spiritual traditions come to life. As the island’s last royal capital, the city is home to the sacred Temple of the Tooth Relic, tranquil Kandy Lake and beautifully preserved cultural landmarks. Visitors can explore vibrant local markets, experience traditional Kandyan dance performances and discover the botanical wonders of nearby Peradeniya. Blending history, culture and natural beauty, Kandy offers an authentic glimpse into the island’s timeless traditions",
        "style": "",
        "list": false,
        "align": ""
      },
      {
        "type": "paragraph",
        "text": "Things to Do",
        "style": "",
        "list": false,
        "align": ""
      },
      {
        "type": "paragraph",
        "text": "Visit the Temple of the Sacred Tooth Relic",
        "style": "ListParagraph",
        "list": true,
        "align": ""
      },
      {
        "type": "paragraph",
        "text": "Traditional Kandyan cultural dance performance",
        "style": "ListParagraph",
        "list": true,
        "align": ""
      },
      {
        "type": "paragraph",
        "text": "Gem museum or gemstone experience",
        "style": "ListParagraph",
        "list": true,
        "align": ""
      },
      {
        "type": "paragraph",
        "text": "Stay: A charming hill city hotel",
        "style": "",
        "list": false,
        "align": ""
      },
      {
        "type": "paragraph",
        "text": "DAY 05 | KANDY",
        "style": "",
        "list": false,
        "align": ""
      },
      {
        "type": "paragraph",
        "text": "A day steeped in culture & charm",
        "style": "",
        "list": false,
        "align": ""
      },
      {
        "type": "paragraph",
        "text": "Things to Do",
        "style": "",
        "list": false,
        "align": ""
      },
      {
        "type": "paragraph",
        "text": "Explore the Royal Botanical Gardens",
        "style": "ListParagraph",
        "list": true,
        "align": ""
      },
      {
        "type": "paragraph",
        "text": "Shopping in Kandy",
        "style": "ListParagraph",
        "list": true,
        "align": ""
      },
      {
        "type": "paragraph",
        "text": "Stay: Another relaxing night in Sri Lanka's last royal kingdom.",
        "style": "",
        "list": false,
        "align": ""
      },
      {
        "type": "paragraph",
        "text": "DAY 06 | KANDY | NUWARA ELIYA",
        "style": "",
        "list": false,
        "align": ""
      },
      {
        "type": "paragraph",
        "text": "Journey into Sri Lanka's picturesque hill country.",
        "style": "",
        "list": false,
        "align": ""
      },
      {
        "type": "paragraph",
        "text": "Approx. travel time: 2.5–3.5 hours",
        "style": "",
        "list": false,
        "align": ""
      },
      {
        "type": "paragraph",
        "text": "A charming town filled with tea plantations, cool weather, waterfalls, and colonial elegance.",
        "style": "",
        "list": false,
        "align": ""
      },
      {
        "type": "paragraph",
        "text": "Nestled amidst rolling hills, misty mountains and endless tea plantations, Nuwara Eliya is fondly known as Little England for its colonial charm and cool-climate atmosphere. The town’s picturesque gardens, historic buildings and tranquil Gregory Lake create a refreshing escape from the island’s tropical lowlands. Visitors can explore verdant tea estates, discover the art of Ceylon tea production and enjoy scenic drives through winding mountain roads and cascading waterfalls. With its crisp mountain air and timeless elegance, Nuwara Eliya offers a delightful taste of Sri Lanka’s hill-country beauty.",
        "style": "",
        "list": false,
        "align": ""
      },
      {
        "type": "paragraph",
        "text": "Things to Do",
        "style": "",
        "list": false,
        "align": ""
      },
      {
        "type": "paragraph",
        "text": "Visit a tea estate and factory",
        "style": "ListParagraph",
        "list": true,
        "align": ""
      },
      {
        "type": "paragraph",
        "text": "Visit Hakgala Botanical Garden",
        "style": "ListParagraph",
        "list": true,
        "align": ""
      },
      {
        "type": "paragraph",
        "text": "Explore Gregory Lake",
        "style": "ListParagraph",
        "list": true,
        "align": ""
      },
      {
        "type": "paragraph",
        "text": "Wander through Victoria Park",
        "style": "ListParagraph",
        "list": true,
        "align": ""
      },
      {
        "type": "paragraph",
        "text": "Stay: A cosy mountain retreat surrounded by rolling tea hills.",
        "style": "",
        "list": false,
        "align": ""
      },
      {
        "type": "paragraph",
        "text": "DAY 07 | NUWARA ELIYA",
        "style": "",
        "list": false,
        "align": ""
      },
      {
        "type": "paragraph",
        "text": "Little England moments",
        "style": "",
        "list": false,
        "align": ""
      },
      {
        "type": "paragraph",
        "text": "Things to Do",
        "style": "",
        "list": false,
        "align": ""
      },
      {
        "type": "paragraph",
        "text": "Hike in Horton Plains National Park",
        "style": "ListParagraph",
        "list": true,
        "align": ""
      },
      {
        "type": "paragraph",
        "text": "Visit to Moon Plains",
        "style": "ListParagraph",
        "list": true,
        "align": ""
      },
      {
        "type": "paragraph",
        "text": "Visit  a Strawberry farm",
        "style": "ListParagraph",
        "list": true,
        "align": ""
      },
      {
        "type": "paragraph",
        "text": "Stay: Enjoy another refreshing night in the cool hill country.",
        "style": "",
        "list": false,
        "align": ""
      },
      {
        "type": "paragraph",
        "text": "DAY 08 | NUWARA ELIYA |ELLA",
        "style": "",
        "list": false,
        "align": ""
      },
      {
        "type": "paragraph",
        "text": "Hop on board the Train",
        "style": "",
        "list": false,
        "align": ""
      },
      {
        "type": "paragraph",
        "text": "Train journey – Approx. 3.5 Hours (Nanuoya to Ella Station)",
        "style": "",
        "list": false,
        "align": ""
      },
      {
        "type": "paragraph",
        "text": "Travel aboard one of the world's most scenic train journeys before arriving in Ella. A charming mountain village famous for breathtaking scenery, waterfalls, tea estates, and relaxed cafés.",
        "style": "",
        "list": false,
        "align": ""
      },
      {
        "type": "paragraph",
        "text": "Tucked away in Sri Lanka’s enchanting hill country, Ella is a picturesque mountain retreat celebrated for its breathtaking panoramas, lush tea plantations and laid-back village charm. Scenic hiking trails lead to iconic viewpoints such as Little Adam’s Peak and Ella Rock, while the famous Nine Arch Bridge showcases remarkable railway architecture amid emerald-green hills. Visitors can also discover cascading waterfalls, explore local cafés and enjoy the unforgettable experience of a scenic train journey through the misty highlands. With its blend of adventure, natural beauty and relaxed atmosphere, Ella is a favourite escape for nature lovers and explorers alike.",
        "style": "",
        "list": false,
        "align": ""
      },
      {
        "type": "paragraph",
        "text": "Things to Do",
        "style": "",
        "list": false,
        "align": ""
      },
      {
        "type": "paragraph",
        "text": "Nine Arches Bridge",
        "style": "ListParagraph",
        "list": true,
        "align": ""
      },
      {
        "type": "paragraph",
        "text": "Little Adam's Peak",
        "style": "ListParagraph",
        "list": true,
        "align": ""
      },
      {
        "type": "paragraph",
        "text": "Stay: A peaceful hillside retreat",
        "style": "",
        "list": false,
        "align": ""
      },
      {
        "type": "paragraph",
        "text": "DAY 09 | ELLA",
        "style": "",
        "list": false,
        "align": ""
      },
      {
        "type": "paragraph",
        "text": "Where mountains slow you down",
        "style": "",
        "list": false,
        "align": ""
      },
      {
        "type": "paragraph",
        "text": "Things to Do",
        "style": "",
        "list": false,
        "align": ""
      },
      {
        "type": "paragraph",
        "text": "Flying Ravana Zipline",
        "style": "ListParagraph",
        "list": true,
        "align": ""
      },
      {
        "type": "paragraph",
        "text": "Lipton Seat Tuktuk Ride",
        "style": "ListParagraph",
        "list": true,
        "align": ""
      },
      {
        "type": "paragraph",
        "text": "Diyaluma Waterfall hike",
        "style": "ListParagraph",
        "list": true,
        "align": ""
      },
      {
        "type": "paragraph",
        "text": "Relax at one of Ella's cafés with panoramic views",
        "style": "ListParagraph",
        "list": true,
        "align": ""
      },
      {
        "type": "paragraph",
        "text": "Stay: Another memorable night among the misty mountains.",
        "style": "",
        "list": false,
        "align": ""
      },
      {
        "type": "paragraph",
        "text": "DAY 10 | ELLA |YALA",
        "style": "",
        "list": false,
        "align": ""
      },
      {
        "type": "paragraph",
        "text": "Hitting the Wild sanctuary",
        "style": "",
        "list": false,
        "align": ""
      },
      {
        "type": "paragraph",
        "text": "Approx. travel time: 2.5 to 3 Hours",
        "style": "",
        "list": false,
        "align": ""
      },
      {
        "type": "paragraph",
        "text": "Journey from the cool hills to Sri Lanka's untamed wilderness. Sri Lanka's most famous wildlife destination.",
        "style": "",
        "list": false,
        "align": ""
      },
      {
        "type": "paragraph",
        "text": "Yala is a captivating wilderness destination where untamed nature and unforgettable wildlife encounters take centre stage. Home to one of the world’s highest densities of leopards, Yala National Park offers thrilling safari experiences through a diverse landscape of open grasslands, dense scrub forests, rocky outcrops and tranquil lagoons. Along the way, visitors may encounter majestic elephants, sloth bears, crocodiles and an extraordinary variety of birdlife in their natural habitat. Beyond the excitement of the safari, Yala’s rugged landscapes and peaceful surroundings create a remarkable connection with nature, making it an essential stop for wildlife enthusiasts and adventurous travellers exploring Sri Lanka.",
        "style": "",
        "list": false,
        "align": ""
      },
      {
        "type": "paragraph",
        "text": "Things to Do",
        "style": "",
        "list": false,
        "align": ""
      },
      {
        "type": "paragraph",
        "text": "Afternoon jeep safari in Yala National Park",
        "style": "ListParagraph",
        "list": true,
        "align": ""
      },
      {
        "type": "paragraph",
        "text": "Wildlife photography",
        "style": "ListParagraph",
        "list": true,
        "align": ""
      },
      {
        "type": "paragraph",
        "text": "Campfire (subject to accommodation)",
        "style": "ListParagraph",
        "list": true,
        "align": ""
      },
      {
        "type": "paragraph",
        "text": "Stay: A unique safari lodge immersed in nature.",
        "style": "",
        "list": false,
        "align": ""
      },
      {
        "type": "paragraph",
        "text": "DAY 11 | YALA | WELIGAMA",
        "style": "",
        "list": false,
        "align": ""
      },
      {
        "type": "paragraph",
        "text": "From wild to the waves",
        "style": "",
        "list": false,
        "align": ""
      },
      {
        "type": "paragraph",
        "text": "Approx. travel time 2.5 to 3 Hours",
        "style": "",
        "list": false,
        "align": ""
      },
      {
        "type": "paragraph",
        "text": "Leave the wilderness behind and head to Sri Lanka's beautiful southern coastline.A lively beach town known for its golden shores, gentle waves, whale watching, and relaxed coastal atmosphere.",
        "style": "",
        "list": false,
        "align": ""
      },
      {
        "type": "paragraph",
        "text": "Weligama is a vibrant southern coastal town renowned for surfing, golden beaches, and laid-back coastal living. Combining adventure and tropical charm, it has become a favourite destination among surfers and beach lovers. Its sweeping bay, gentle waves, and welcoming seaside atmosphere make it an ideal spot for both beginners eager to try surfing and seasoned wave riders. Beyond the beach, discover charming cafés, fresh seafood, colourful fishing boats, and the unique sight of traditional stilt fishermen along the coast. With its relaxed rhythm, beautiful ocean views, and captivating blend of local culture and modern beach life, Weligama invites you to slow down and embrace the easygoing spirit of Sri Lanka’s southern shores.",
        "style": "",
        "list": false,
        "align": ""
      },
      {
        "type": "paragraph",
        "text": "Things to Do",
        "style": "",
        "list": false,
        "align": ""
      },
      {
        "type": "paragraph",
        "text": "Relax by the beach",
        "style": "ListParagraph",
        "list": true,
        "align": ""
      },
      {
        "type": "paragraph",
        "text": "Do Surfing",
        "style": "ListParagraph",
        "list": true,
        "align": ""
      },
      {
        "type": "paragraph",
        "text": "Turtle hatchery",
        "style": "ListParagraph",
        "list": true,
        "align": ""
      },
      {
        "type": "paragraph",
        "text": "Sunset walk along the shoreline",
        "style": "ListParagraph",
        "list": true,
        "align": ""
      },
      {
        "type": "paragraph",
        "text": "Stay: Beachfront resort perfect for families.",
        "style": "",
        "list": false,
        "align": ""
      },
      {
        "type": "paragraph",
        "text": "DAY 12 -13| WELIGAMA",
        "style": "",
        "list": false,
        "align": ""
      },
      {
        "type": "paragraph",
        "text": "A day by the endless blue",
        "style": "",
        "list": false,
        "align": ""
      },
      {
        "type": "paragraph",
        "text": "Things to Do",
        "style": "",
        "list": false,
        "align": ""
      },
      {
        "type": "paragraph",
        "text": "Whale watching (seasonal)",
        "style": "ListParagraph",
        "list": true,
        "align": ""
      },
      {
        "type": "paragraph",
        "text": "Visit Galle Fort",
        "style": "ListParagraph",
        "list": true,
        "align": ""
      },
      {
        "type": "paragraph",
        "text": "Turtle hatchery experience",
        "style": "ListParagraph",
        "list": true,
        "align": ""
      },
      {
        "type": "paragraph",
        "text": "Cinnamon experience",
        "style": "ListParagraph",
        "list": true,
        "align": ""
      },
      {
        "type": "paragraph",
        "text": "Family beach activities",
        "style": "ListParagraph",
        "list": true,
        "align": ""
      },
      {
        "type": "paragraph",
        "text": "Spa or leisure time at the resort",
        "style": "ListParagraph",
        "list": true,
        "align": ""
      },
      {
        "type": "paragraph",
        "text": "Stay: Weligama",
        "style": "",
        "list": false,
        "align": ""
      },
      {
        "type": "paragraph",
        "text": "DAY 14 | WELIGAMA |NEGOMBO",
        "style": "",
        "list": false,
        "align": ""
      },
      {
        "type": "paragraph",
        "text": "The perfect final chapter by the coast",
        "style": "",
        "list": false,
        "align": ""
      },
      {
        "type": "paragraph",
        "text": "Approx. travel time 2.5 to 3 Hours",
        "style": "",
        "list": false,
        "align": ""
      },
      {
        "type": "paragraph",
        "text": "Travel back along the coast to the charming fishing town of Negombo. Known for its canals, colourful fishing boats, seafood, and easy access to the airport.",
        "style": "",
        "list": false,
        "align": ""
      },
      {
        "type": "paragraph",
        "text": "Located close to Sri Lanka’s international airport, Negombo is a lively coastal town offering beaches, seafood culture and colonial influences. It serves as both a relaxing introduction and a memorable farewell to Sri Lanka.",
        "style": "",
        "list": false,
        "align": ""
      },
      {
        "type": "paragraph",
        "text": "Things to Do",
        "style": "",
        "list": false,
        "align": ""
      },
      {
        "type": "paragraph",
        "text": "Visit the fish market",
        "style": "ListParagraph",
        "list": true,
        "align": ""
      },
      {
        "type": "paragraph",
        "text": "Canal or lagoon boat ride & High tea",
        "style": "ListParagraph",
        "list": true,
        "align": ""
      },
      {
        "type": "paragraph",
        "text": "Last-minute shopping and beach relaxation",
        "style": "ListParagraph",
        "list": true,
        "align": ""
      },
      {
        "type": "paragraph",
        "text": "Stay: A comfortable seaside hotel",
        "style": "",
        "list": false,
        "align": ""
      },
      {
        "type": "paragraph",
        "text": "DAY 15 | NEGOMBO| AIRPORT – DEPARTURE",
        "style": "",
        "list": false,
        "align": ""
      },
      {
        "type": "paragraph",
        "text": "Approx. travel time 30 Minutes",
        "style": "",
        "list": false,
        "align": ""
      },
      {
        "type": "paragraph",
        "text": "Until the island calls again",
        "style": "",
        "list": false,
        "align": ""
      },
      {
        "type": "paragraph",
        "text": "After breakfast, transfer to the airport with hearts full of unforgettable memories. Until we meet again…",
        "style": "",
        "list": false,
        "align": ""
      },
      {
        "type": "paragraph",
        "text": "Ayubowan!",
        "style": "",
        "list": false,
        "align": ""
      }
    ]
  },
  {
    "id": "sri-lankas-hidden-chapters",
    "name": "Sri Lanka's Hidden chapters",
    "sourceFile": "Sri Lanka's Hidden chapters.docx",
    "title": "SRI LANKA’S HIDDEN CHAPTERS – 15 Days |14 Nights",
    "image": "/2408852f-e87c-4499-a3f7-22b850828253.jpg",
    "blocks": [
      {
        "type": "paragraph",
        "text": "SRI LANKA’S HIDDEN CHAPTERS – 15 Days |14 Nights",
        "style": "",
        "list": false,
        "align": "center"
      },
      {
        "type": "paragraph",
        "text": "Adventure beyond the ordinary, discovery beyond the expected.",
        "style": "",
        "list": false,
        "align": ""
      },
      {
        "type": "paragraph",
        "text": "This is a journey for those who want to see Sri Lanka beyond the usual trail. A journey of wild encounters, hidden landscapes, authentic experiences and unforgettable stories- The Sri Lanka beyond the post cards.",
        "style": "",
        "list": false,
        "align": ""
      },
      {
        "type": "paragraph",
        "text": "This holiday is specially designed for travelers who love to stay active, explore deeply and embrace adventure throughout their journey. If you love waking up curious, getting outdoors, trying something new & making memories beyond the usual tourist trail, then this will be your ideal holiday in Paradise Island.",
        "style": "",
        "list": false,
        "align": ""
      },
      {
        "type": "paragraph",
        "text": "DAY 1 -AIRPORT |NEGOMBO",
        "style": "",
        "list": false,
        "align": ""
      },
      {
        "type": "paragraph",
        "text": "Where we meet and greet",
        "style": "",
        "list": false,
        "align": ""
      },
      {
        "type": "paragraph",
        "text": "Approx. travel time: 20–40 minutes",
        "style": "",
        "list": false,
        "align": ""
      },
      {
        "type": "paragraph",
        "text": "On arrival at the Bandaranayake International Airport (BIA), you will be met by a Magical Paradise tour coordinator and your first night will be spent in the Charming city of Negombo just 30 minutes away from the Airport.",
        "style": "",
        "list": false,
        "align": ""
      },
      {
        "type": "paragraph",
        "text": "Located close to Sri Lanka’s international airport, Negombo is a lively coastal town offering beaches, seafood culture and colonial influences. It serves as both a relaxing introduction and a memorable farewell to Sri Lanka.",
        "style": "",
        "list": false,
        "align": ""
      },
      {
        "type": "paragraph",
        "text": "Things to do",
        "style": "",
        "list": false,
        "align": ""
      },
      {
        "type": "paragraph",
        "text": "Negombo lagoon boat experience",
        "style": "",
        "list": true,
        "align": ""
      },
      {
        "type": "paragraph",
        "text": "Sunset by the Indian Ocean",
        "style": "",
        "list": true,
        "align": ""
      },
      {
        "type": "paragraph",
        "text": "Stay: Negombo",
        "style": "",
        "list": false,
        "align": ""
      },
      {
        "type": "paragraph",
        "text": "DAY 2 -NEGOMBO |KITULGALA",
        "style": "",
        "list": false,
        "align": ""
      },
      {
        "type": "paragraph",
        "text": "In to the wild",
        "style": "",
        "list": false,
        "align": ""
      },
      {
        "type": "paragraph",
        "text": "Approx. travel time: 2.5–3.5 hours",
        "style": "",
        "list": false,
        "align": ""
      },
      {
        "type": "paragraph",
        "text": "Leave the coast behind and head towards the lush green heart of Sri Lanka.",
        "style": "",
        "list": false,
        "align": ""
      },
      {
        "type": "paragraph",
        "text": "Nestled amid the lush rainforests and rolling hills of Sri Lanka’s wet zone, Kitulgala is an adventure-filled destination celebrated for its rushing rivers, rich biodiversity and spectacular natural surroundings. The Kelani River flows through this picturesque region, creating the perfect setting for thrilling white-water rafting, while forest trails and hidden waterfalls invite visitors to explore its verdant landscapes. Nature enthusiasts can discover remarkable birdlife, enjoy guided rainforest walks and experience the area's cinematic heritage, as Kitulgala was one of the filming locations for The Bridge on the River Kwai. Combining outdoor adventure with the tranquillity of tropical wilderness, Kitulgala is an ideal escape for thrill-seekers and nature lovers alike.",
        "style": "",
        "list": false,
        "align": ""
      },
      {
        "type": "paragraph",
        "text": "Things to do",
        "style": "",
        "list": false,
        "align": ""
      },
      {
        "type": "paragraph",
        "text": "White water rafting on the Kelani river",
        "style": "ListParagraph",
        "list": true,
        "align": ""
      },
      {
        "type": "paragraph",
        "text": "Canyoning and waterfall adventures",
        "style": "ListParagraph",
        "list": true,
        "align": ""
      },
      {
        "type": "paragraph",
        "text": "Enjoy peaceful surroundings of Kitulgala",
        "style": "ListParagraph",
        "list": true,
        "align": ""
      },
      {
        "type": "paragraph",
        "text": "Stay: Kitulgala",
        "style": "",
        "list": false,
        "align": ""
      },
      {
        "type": "paragraph",
        "text": "DAY 3 -KITULGALA |BELIHULOYA",
        "style": "",
        "list": false,
        "align": ""
      },
      {
        "type": "paragraph",
        "text": "Where the mountains begin",
        "style": "",
        "list": false,
        "align": ""
      },
      {
        "type": "paragraph",
        "text": "Approx. travel time: 2.5–3.5 hours",
        "style": "",
        "list": false,
        "align": ""
      },
      {
        "type": "paragraph",
        "text": "Today the journey climbs towards hills, Belihuloya is a beautiful meeting point of mountains, forests, rivers and villages- a place where life feels wonderfully connected to nature.",
        "style": "",
        "list": false,
        "align": ""
      },
      {
        "type": "paragraph",
        "text": "Set amid the picturesque landscapes of Sri Lanka’s Sabaragamuwa highlands, Belihuloya is a peaceful nature destination known for its cascading waterfalls, winding streams, mountain scenery and charming rural surroundings. Its unique location between the island’s highlands and lowlands creates a diverse natural environment, with lush forests, rolling hills and the scenic Samanalawewa Reservoir adding to its appeal. Visitors can discover the beautiful Pahanthudawa Falls, enjoy nature walks and birdwatching, explore nearby mountain trails or experience the tranquillity of traditional village life. With its refreshing atmosphere, outdoor adventures and abundant natural beauty, Belihuloya is an inviting escape for travellers seeking relaxation and exploration away from the busier tourist routes.",
        "style": "",
        "list": false,
        "align": ""
      },
      {
        "type": "paragraph",
        "text": "Things to do",
        "style": "",
        "list": false,
        "align": ""
      },
      {
        "type": "paragraph",
        "text": "Kayaking Session at Samanala Lake",
        "style": "ListParagraph",
        "list": true,
        "align": ""
      },
      {
        "type": "paragraph",
        "text": "Hiking Adventures",
        "style": "ListParagraph",
        "list": true,
        "align": ""
      },
      {
        "type": "paragraph",
        "text": "Slow down and enjoy the tranquility of the hills",
        "style": "ListParagraph",
        "list": true,
        "align": ""
      },
      {
        "type": "paragraph",
        "text": "Stay: Belihuloya",
        "style": "",
        "list": false,
        "align": ""
      },
      {
        "type": "paragraph",
        "text": "DAY 4 -BELIHULOYA |ELLA",
        "style": "",
        "list": false,
        "align": ""
      },
      {
        "type": "paragraph",
        "text": "Into the misty mountains",
        "style": "",
        "list": false,
        "align": ""
      },
      {
        "type": "paragraph",
        "text": "Approx. travel time: 2–2.5 hours",
        "style": "",
        "list": false,
        "align": ""
      },
      {
        "type": "paragraph",
        "text": "The road continues towards one of Sri Lanka’s most beloved hill-country destinations- Ella. Surrounded by emerald mountains and tea country, Ella is where spectacular scenery becomes part of the journey itself.",
        "style": "",
        "list": false,
        "align": ""
      },
      {
        "type": "paragraph",
        "text": "Tucked away in Sri Lanka’s enchanting hill country, Ella is a picturesque mountain retreat celebrated for its breathtaking panoramas, lush tea plantations and laid-back village charm. Scenic hiking trails lead to iconic viewpoints such as Little Adam’s Peak and Ella Rock, while the famous Nine Arch Bridge showcases remarkable railway architecture amid emerald-green hills. Visitors can also discover cascading waterfalls, explore local cafés and enjoy the unforgettable experience of a scenic train journey through the misty highlands. With its blend of adventure, natural beauty and relaxed atmosphere, Ella is a favourite escape for nature lovers and explorers alike.",
        "style": "",
        "list": false,
        "align": ""
      },
      {
        "type": "paragraph",
        "text": "Things to do",
        "style": "",
        "list": false,
        "align": ""
      },
      {
        "type": "paragraph",
        "text": "Lipton Seat TukTuk Ride",
        "style": "ListParagraph",
        "list": true,
        "align": ""
      },
      {
        "type": "paragraph",
        "text": "Diyaluma waterfall hunting hike",
        "style": "ListParagraph",
        "list": true,
        "align": ""
      },
      {
        "type": "paragraph",
        "text": "Visit the iconic Nine Arches Bridge",
        "style": "ListParagraph",
        "list": true,
        "align": ""
      },
      {
        "type": "paragraph",
        "text": "Explore Little Adam’s peak",
        "style": "ListParagraph",
        "list": true,
        "align": ""
      },
      {
        "type": "paragraph",
        "text": "Discover Ella town and its relaxed atmosphere",
        "style": "ListParagraph",
        "list": true,
        "align": ""
      },
      {
        "type": "paragraph",
        "text": "Stay: 2 Nights stay in Ella",
        "style": "",
        "list": false,
        "align": ""
      },
      {
        "type": "paragraph",
        "text": "DAY 6 -ELLA |GALOYA",
        "style": "",
        "list": false,
        "align": ""
      },
      {
        "type": "paragraph",
        "text": "From mountains to the wild",
        "style": "",
        "list": false,
        "align": ""
      },
      {
        "type": "paragraph",
        "text": "Approx. travel time: 3.5–4.5 hours",
        "style": "",
        "list": false,
        "align": ""
      },
      {
        "type": "paragraph",
        "text": "Today the landscape changes dramatically. Leave the cool mountains behind and travel towards Gal Oya, one of Sri Lanka’s less explored wilderness regions, where forests, lakes and wildlife come together.",
        "style": "",
        "list": false,
        "align": ""
      },
      {
        "type": "paragraph",
        "text": "Hidden in Sri Lanka’s eastern wilderness, Gal Oya is a remarkable destination where untouched forests, rolling hills and tranquil waters create an extraordinary wildlife escape. At the heart of the experience lies Senanayake Samudra, a vast reservoir dotted with forested islands, offering a unique opportunity to explore the wilderness on a scenic boat safari. Visitors may witness wild elephants swimming between islands, spot diverse birdlife and discover the rich biodiversity of Gal Oya National Park. The surrounding region also offers opportunities to learn about the traditions of Sri Lanka’s Indigenous Vedda community through respectful, locally guided encounters. With its secluded landscapes and rare wildlife experiences, Gal Oya is a wonderful choice for nature lovers seeking a quieter, more intimate side of Sri Lanka.",
        "style": "",
        "list": false,
        "align": ""
      },
      {
        "type": "paragraph",
        "text": "Things to do",
        "style": "",
        "list": false,
        "align": ""
      },
      {
        "type": "paragraph",
        "text": "• Boat safari on Senanayake Samudraya\n• Search for swimming elephants\n• Meet the indigenous Vedda community\n• Nature walks with expert guides",
        "style": "",
        "list": false,
        "align": ""
      },
      {
        "type": "paragraph",
        "text": "Stay: Gal Oya",
        "style": "",
        "list": false,
        "align": ""
      },
      {
        "type": "paragraph",
        "text": "DAY 7 -GALOYA |ARUGAM BAY",
        "style": "",
        "list": false,
        "align": ""
      },
      {
        "type": "paragraph",
        "text": "Following the Wild Coast",
        "style": "",
        "list": false,
        "align": ""
      },
      {
        "type": "paragraph",
        "text": "Approx. travel time: 2.5–3.5 hours",
        "style": "",
        "list": false,
        "align": ""
      },
      {
        "type": "paragraph",
        "text": "From the quiet wilderness of Gal Oya, the road leads towards the legendary eastern coastline.",
        "style": "",
        "list": false,
        "align": ""
      },
      {
        "type": "paragraph",
        "text": "Arugam Bay is a vibrant coastal destination on Sri Lanka’s eastern shores, celebrated for its world-class surf breaks, golden beaches and laid-back beach culture. During the surfing season, the bay attracts surfers from around the world, while its relaxed cafés, beachfront retreats and lively atmosphere create an inviting setting for all kinds of travellers. Beyond the waves, visitors can explore the tranquil waters of Pottuvil Lagoon, discover the region’s rich birdlife and venture towards nearby Kumana National Park for rewarding wildlife encounters. As the sun sets over the Indian Ocean, Arugam Bay reveals its easygoing charm, blending adventure, nature and tropical coastal living into an unforgettable escape.",
        "style": "",
        "list": false,
        "align": ""
      },
      {
        "type": "paragraph",
        "text": "Things to Do",
        "style": "",
        "list": false,
        "align": ""
      },
      {
        "type": "paragraph",
        "text": "• Jeep Safari in Kumana National Park\n• Relax on Arugam Bay Beach\n• Surfing or beginner surf lessons\n• Sunset by the Indian Ocean",
        "style": "",
        "list": false,
        "align": ""
      },
      {
        "type": "paragraph",
        "text": "Stay: 2 Nights in Arugam Bay",
        "style": "",
        "list": false,
        "align": ""
      },
      {
        "type": "paragraph",
        "text": "DAY 9 -ARUGAM BAY |MAHIYANGANAYA",
        "style": "",
        "list": false,
        "align": ""
      },
      {
        "type": "paragraph",
        "text": "Into the heart of Ancient Sri Lanka",
        "style": "",
        "list": false,
        "align": ""
      },
      {
        "type": "paragraph",
        "text": "Approx. travel time: 3–4 hours",
        "style": "",
        "list": false,
        "align": ""
      },
      {
        "type": "paragraph",
        "text": "Leave the ocean behind and travel towards Mahiyanganaya, a region steeped in ancient traditions, indigenous heritage and beautiful landscapes. This is Sri Lanka away from the well-trodden tourist trail.",
        "style": "",
        "list": false,
        "align": ""
      },
      {
        "type": "paragraph",
        "text": "Located in Sri Lanka’s eastern interior, Mahiyanganaya is a destination where ancient Buddhist heritage, indigenous culture and beautiful natural landscapes come together. The historic Mahiyangana Raja Maha Viharaya holds deep spiritual significance, while the surrounding countryside features tranquil reservoirs, lush paddy fields and scenic stretches of the Mahaweli River. Visitors can explore the peaceful shores of Sorabora Wewa, discover the cultural traditions of the indigenous Vedda community in nearby Dambana through respectful, locally guided experiences, and venture into the surrounding wilderness for nature and wildlife encounters. With its rich cultural heritage and authentic rural atmosphere, Mahiyanganaya offers a fascinating glimpse into Sri Lanka’s spiritual and traditional way of life.",
        "style": "",
        "list": false,
        "align": ""
      },
      {
        "type": "paragraph",
        "text": "Things to Do",
        "style": "",
        "list": false,
        "align": ""
      },
      {
        "type": "paragraph",
        "text": "Ratna Ella Exploration",
        "style": "ListParagraph",
        "list": true,
        "align": ""
      },
      {
        "type": "paragraph",
        "text": "Visit Mahiyanganaya Temple and the lake in the evening hours to enjoy the natural beauty.",
        "style": "ListParagraph",
        "list": true,
        "align": "both"
      },
      {
        "type": "paragraph",
        "text": "Indulge in a delighted breakfast by the serene waters of Mapakada Lake, surrounded by nature’s calming beauty.",
        "style": "NormalWeb",
        "list": true,
        "align": ""
      },
      {
        "type": "paragraph",
        "text": "Stay: Mahiyanganaya",
        "style": "",
        "list": false,
        "align": ""
      },
      {
        "type": "paragraph",
        "text": "DAY 10 -MAHIYANGANAYA | SIGIRIYA",
        "style": "",
        "list": false,
        "align": ""
      },
      {
        "type": "paragraph",
        "text": "Ancient Lands on the Lion Rock",
        "style": "",
        "list": false,
        "align": ""
      },
      {
        "type": "paragraph",
        "text": "Approx. travel time: 3–4 hours",
        "style": "",
        "list": false,
        "align": ""
      },
      {
        "type": "paragraph",
        "text": "The journey continues north towards Sigiriya, home to one of Sri Lanka’s greatest archaeological treasures. Along the way, rural landscapes slowly give way to the ancient heart of the island.",
        "style": "",
        "list": false,
        "align": ""
      },
      {
        "type": "paragraph",
        "text": "Discover the heart of Sri Lanka’s Cultural Triangle, where ancient kingdoms, remarkable architecture and timeless traditions tell the story of a fascinating past. Sigiriya captivates visitors with its iconic Lion Rock fortress, dramatic scenery and ancient frescoes, while nearby Dambulla is renowned for its impressive cave temple complex, adorned with centuries-old Buddhist murals and statues. Surrounded by lush greenery, rural villages and scenic countryside, these destinations offer a memorable journey through the island’s rich history, spiritual heritage and extraordinary cultural treasures.",
        "style": "",
        "list": false,
        "align": ""
      },
      {
        "type": "paragraph",
        "text": "Things to Do",
        "style": "",
        "list": false,
        "align": ""
      },
      {
        "type": "paragraph",
        "text": "Conquer Sigiriya Lions Rock Fortress",
        "style": "ListParagraph",
        "list": true,
        "align": "both"
      },
      {
        "type": "paragraph",
        "text": "Village tour experience inclusive of an organic Sri Lankan lunch",
        "style": "ListParagraph",
        "list": true,
        "align": "both"
      },
      {
        "type": "paragraph",
        "text": "Minneriya Safari",
        "style": "ListParagraph",
        "list": true,
        "align": "both"
      },
      {
        "type": "paragraph",
        "text": "Golden Temple in Dambulla",
        "style": "ListParagraph",
        "list": true,
        "align": "both"
      },
      {
        "type": "paragraph",
        "text": "Take a cycling tour in the ancient city of Polonnaruwa",
        "style": "ListParagraph",
        "list": true,
        "align": "both"
      },
      {
        "type": "paragraph",
        "text": "Climb the Pidurangala Rock",
        "style": "ListParagraph",
        "list": true,
        "align": "both"
      },
      {
        "type": "paragraph",
        "text": "Kayaking session in Thalkote Lake",
        "style": "ListParagraph",
        "list": true,
        "align": "both"
      },
      {
        "type": "paragraph",
        "text": "Stay: 2 Nights in Sigiriya",
        "style": "",
        "list": false,
        "align": ""
      },
      {
        "type": "paragraph",
        "text": "DAY 12 -SIGIRIYA| TRINCOMALEE",
        "style": "",
        "list": false,
        "align": ""
      },
      {
        "type": "paragraph",
        "text": "Ancient Roads to Turquoise Shores",
        "style": "",
        "list": false,
        "align": ""
      },
      {
        "type": "paragraph",
        "text": "Approx. travel time: 2–2.5 hours",
        "style": "",
        "list": false,
        "align": ""
      },
      {
        "type": "paragraph",
        "text": "Taking the road towards the east coast again. Trincomalee welcomes you with turquoise waters, golden beaches and a fascinating blend of history, culture and coastal beauty.",
        "style": "",
        "list": false,
        "align": ""
      },
      {
        "type": "paragraph",
        "text": "Situated along Sri Lanka’s picturesque eastern coast, Trincomalee is a captivating seaside destination renowned for its pristine beaches, turquoise waters and magnificent natural harbour. The city’s rich history and spiritual heritage come alive at the iconic Koneswaram Temple, dramatically perched on Swami Rock overlooking the Indian Ocean, while nearby Nilaveli and Uppuveli beaches offer idyllic settings for relaxation and coastal exploration. Visitors can enjoy snorkelling around Pigeon Island, discover vibrant marine life, embark on seasonal whale-watching excursions and explore the historic Fort Frederick. With its blend of cultural treasures, spectacular ocean scenery and tropical tranquillity, Trincomalee is a wonderful escape for beach lovers, nature enthusiasts and cultural explorers.",
        "style": "",
        "list": false,
        "align": ""
      },
      {
        "type": "paragraph",
        "text": "Things to Do",
        "style": "",
        "list": false,
        "align": ""
      },
      {
        "type": "paragraph",
        "text": "Snorkling and excursion in Pigeon Island",
        "style": "ListParagraph",
        "list": true,
        "align": ""
      },
      {
        "type": "paragraph",
        "text": "Dolphin and whale watching in Trincomalee",
        "style": "ListParagraph",
        "list": true,
        "align": ""
      },
      {
        "type": "paragraph",
        "text": "Visit the Koneshwaram Temple, Trinco Harbour, Lover’s leap, Hood Tower museum",
        "style": "ListParagraph",
        "list": true,
        "align": ""
      },
      {
        "type": "paragraph",
        "text": "Visit the Hot Springs",
        "style": "ListParagraph",
        "list": true,
        "align": ""
      },
      {
        "type": "paragraph",
        "text": "Explore Fort Frederick",
        "style": "ListParagraph",
        "list": true,
        "align": ""
      },
      {
        "type": "paragraph",
        "text": "Relax at Nilaveli Beach",
        "style": "ListParagraph",
        "list": true,
        "align": ""
      },
      {
        "type": "paragraph",
        "text": "Stay: 2 Nights in Trincomalee",
        "style": "",
        "list": false,
        "align": ""
      },
      {
        "type": "paragraph",
        "text": "DAY 14 -TRINCOMALEE | WILPATTU",
        "style": "",
        "list": false,
        "align": ""
      },
      {
        "type": "paragraph",
        "text": "Into the Realm of the Wild",
        "style": "",
        "list": false,
        "align": ""
      },
      {
        "type": "paragraph",
        "text": "Approx. travel time: 3.5–4.5 hours",
        "style": "",
        "list": false,
        "align": ""
      },
      {
        "type": "paragraph",
        "text": "The final chapter of the adventure takes you towards Wilpattu, Sri Lanka’s largest national park. Here, the vast forests, natural lakes and untamed wilderness create the perfect setting for one last great wildlife encounter.",
        "style": "",
        "list": false,
        "align": ""
      },
      {
        "type": "paragraph",
        "text": "Wilpattu is a captivating wilderness destination on Sri Lanka’s northwestern coast, renowned for its expansive forests, natural lakes and remarkable wildlife. As one of the island’s largest national parks, it offers an immersive safari experience through dry-zone woodlands, open clearings and distinctive rain-fed lakes known as villus. Visitors may encounter the elusive Sri Lankan leopard, sloth bears, elephants, spotted deer and a fascinating variety of birdlife while exploring the park by jeep. With its untamed landscapes, quieter safari atmosphere and rich biodiversity, Wilpattu is an exceptional destination for wildlife enthusiasts, photographers and travellers seeking an authentic connection with nature.",
        "style": "",
        "list": false,
        "align": ""
      },
      {
        "type": "paragraph",
        "text": "Things to Do",
        "style": "",
        "list": false,
        "align": ""
      },
      {
        "type": "paragraph",
        "text": "Afternoon Game drive",
        "style": "ListParagraph",
        "list": true,
        "align": ""
      },
      {
        "type": "paragraph",
        "text": "Stay: Wilpattu",
        "style": "",
        "list": false,
        "align": ""
      },
      {
        "type": "paragraph",
        "text": "DAY 15 -WILPATTU| AIRPORT",
        "style": "",
        "list": false,
        "align": ""
      },
      {
        "type": "paragraph",
        "text": "Goodbye Sri Lanka",
        "style": "",
        "list": false,
        "align": ""
      },
      {
        "type": "paragraph",
        "text": "Approx. travel time: 3–4 hours",
        "style": "",
        "list": false,
        "align": ""
      },
      {
        "type": "paragraph",
        "text": "And Just like that, the story comes to an end with 14 Chapters full of memories. It’s the end of your Magical Paradise journey.",
        "style": "",
        "list": false,
        "align": ""
      },
      {
        "type": "paragraph",
        "text": "Until We Meet Again….",
        "style": "",
        "list": false,
        "align": ""
      }
    ]
  },
  {
    "id": "the-grand-sri-lankan-journey",
    "name": "The Grand Sri Lankan Journey",
    "sourceFile": "The Grand Sri Lankan Journey.docx",
    "title": "Sri Lanka in Grand Style- 17 Days|16 Nights",
    "image": "/ff704484-a0b3-4483-b004-584fb344461f.jpg",
    "blocks": [
      {
        "type": "paragraph",
        "text": "Sri Lanka in Grand Style- 17 Days|16 Nights",
        "style": "",
        "list": false,
        "align": "center"
      },
      {
        "type": "paragraph",
        "text": "Bespoke Journey Through Timeless Luxury",
        "style": "",
        "list": false,
        "align": ""
      },
      {
        "type": "paragraph",
        "text": "Crafted by Magical Paradise, this signature journey showcases the very best of Sri Lanka through an exceptional collection of luxury retreats and bespoke experiences. From historic coastal fortresses and secluded beaches to untamed wildlife, emerald tea plantations, ancient kingdoms and vibrant city life, every chapter has been thoughtfully designed to immerse you in the island's beauty, heritage and warm hospitality.",
        "style": "",
        "list": false,
        "align": ""
      },
      {
        "type": "paragraph",
        "text": "DAY 1- ARRIVAL - WELCOME TO THE ISLAND |GALLE",
        "style": "",
        "list": false,
        "align": ""
      },
      {
        "type": "paragraph",
        "text": "Where it all starts",
        "style": "",
        "list": false,
        "align": ""
      },
      {
        "type": "paragraph",
        "text": "Approx. travel time: 2.5–3.5 hours",
        "style": "",
        "list": false,
        "align": ""
      },
      {
        "type": "paragraph",
        "text": "Upon your arrival in Sri Lanka, a warm welcome awaits from your Magical Paradise representative, who will greet you and assist with the start of your journey. Settle into the comfort of your private vehicle as you travel south via the Southern Expressway, where the scenery gradually unfolds from bustling cityscapes to swaying coconut palms and glimpses of the Indian Ocean, leading you to the timeless charm of Galle.",
        "style": "",
        "list": false,
        "align": ""
      },
      {
        "type": "paragraph",
        "text": "Galle is a charming coastal destination where centuries of history meet the relaxed elegance of seaside living. At its heart lies the UNESCO-listed Galle Fort, a beautifully preserved historic quarter of cobblestone streets, colonial-era architecture, old churches and charming Dutch-style buildings. Visitors can wander through boutique shops, art galleries and atmospheric cafés, stroll along the fort’s ocean-facing ramparts and enjoy spectacular sunset views over the Indian Ocean. With its rich maritime heritage, vibrant local culture and laid-back coastal charm, Galle offers a memorable blend of history, discovery and seaside romance.",
        "style": "",
        "list": false,
        "align": ""
      },
      {
        "type": "paragraph",
        "text": "Curated Experiences",
        "style": "",
        "list": false,
        "align": ""
      },
      {
        "type": "paragraph",
        "text": "Personal meet and greet by your Magical Paradise representative",
        "style": "",
        "list": true,
        "align": ""
      },
      {
        "type": "paragraph",
        "text": "Private luxury transfer via the Southern Expressway",
        "style": "",
        "list": true,
        "align": ""
      },
      {
        "type": "paragraph",
        "text": "Explore the UNESCO World Heritage city of Galle",
        "style": "",
        "list": true,
        "align": ""
      },
      {
        "type": "paragraph",
        "text": "Sunset walk along the historic fort ramparts",
        "style": "",
        "list": true,
        "align": ""
      },
      {
        "type": "paragraph",
        "text": "Fine dining within the enchanting Galle Fort",
        "style": "",
        "list": true,
        "align": ""
      },
      {
        "type": "paragraph",
        "text": "Indulge in the Aman Spa or simply relax beside the peaceful pool beneath swaying palms.",
        "style": "ListParagraph",
        "list": true,
        "align": ""
      },
      {
        "type": "paragraph",
        "text": "Your Stay – Day 1 & 2",
        "style": "",
        "list": false,
        "align": ""
      },
      {
        "type": "paragraph",
        "text": "Amangalla — A distinguished Aman retreat where timeless colonial elegance and world-class hospitality offer the perfect introduction to Sri Lanka",
        "style": "",
        "list": false,
        "align": ""
      },
      {
        "type": "paragraph",
        "text": "Other Handpicked Stay Options – Taru Villas Rampart Street|The Fort Bazar|The Postcard Galle |The Merchant",
        "style": "",
        "list": false,
        "align": ""
      },
      {
        "type": "paragraph",
        "text": "DAYS 3 – GALLE |TANGALLE",
        "style": "",
        "list": false,
        "align": ""
      },
      {
        "type": "paragraph",
        "text": "Barefoot luxury by the Indian ocean",
        "style": "",
        "list": false,
        "align": ""
      },
      {
        "type": "paragraph",
        "text": "Approx. travel time: 1.5–2 hours",
        "style": "",
        "list": false,
        "align": ""
      },
      {
        "type": "paragraph",
        "text": "Leaving behind the historic charm of Galle, continue along Sri Lanka's spectacular southern coastline to Tangalle where golden beaches, swaying coconut palms and turquoise waters create a picture-perfect tropical escape. With its peaceful coves, traditional fishing villages and laid-back coastal charm, Tangalle invites you to slow down, soak in the natural beauty and experience the quieter side of Sri Lanka’s southern coast.",
        "style": "",
        "list": false,
        "align": ""
      },
      {
        "type": "paragraph",
        "text": "This is where time slows, inviting you to unwind in one of the island's most exclusive coastal retreats.",
        "style": "",
        "list": false,
        "align": ""
      },
      {
        "type": "paragraph",
        "text": "Curated Experiences",
        "style": "",
        "list": false,
        "align": ""
      },
      {
        "type": "paragraph",
        "text": "Relax on secluded golden beaches",
        "style": "",
        "list": true,
        "align": ""
      },
      {
        "type": "paragraph",
        "text": "Whale watching (seasonal)",
        "style": "",
        "list": true,
        "align": ""
      },
      {
        "type": "paragraph",
        "text": "Snorkelling and paddleboarding",
        "style": "",
        "list": true,
        "align": ""
      },
      {
        "type": "paragraph",
        "text": "Sunset catamaran cruise",
        "style": "",
        "list": true,
        "align": ""
      },
      {
        "type": "paragraph",
        "text": "Bespoke wellness and spa experiences",
        "style": "",
        "list": true,
        "align": ""
      },
      {
        "type": "paragraph",
        "text": "Fresh seafood dining by the ocean",
        "style": "",
        "list": true,
        "align": ""
      },
      {
        "type": "paragraph",
        "text": "Your Stay – Day 3 ,4 & 5",
        "style": "",
        "list": false,
        "align": ""
      },
      {
        "type": "paragraph",
        "text": "Amanwella — An exclusive beachfront sanctuary offering contemporary elegance, complete privacy and uninterrupted views of the Indian Ocean.",
        "style": "",
        "list": false,
        "align": ""
      },
      {
        "type": "paragraph",
        "text": "Other Handpicked Stay Options – Uga Prava|Anantara Peace Haven Tangalle Resort|Taru Villas-Mawella |Coco Tangalle|The Last House|Maya Tangalle",
        "style": "",
        "list": false,
        "align": ""
      },
      {
        "type": "paragraph",
        "text": "DAYS 6- TANGALLE | YALA",
        "style": "",
        "list": false,
        "align": ""
      },
      {
        "type": "paragraph",
        "text": "Into the wild",
        "style": "",
        "list": false,
        "align": ""
      },
      {
        "type": "paragraph",
        "text": "Approx. travel time: 2–2.5 hours",
        "style": "",
        "list": false,
        "align": ""
      },
      {
        "type": "paragraph",
        "text": "Journey east to the untamed wilderness of Yala, where dense forests, open grasslands and rugged coastline provide the perfect setting for Sri Lanka's most celebrated wildlife sanctuary. Here, every safari promises moments of wonder and discovery.",
        "style": "",
        "list": false,
        "align": ""
      },
      {
        "type": "paragraph",
        "text": "Yala is a captivating wilderness destination where untamed nature and unforgettable wildlife encounters take centre stage. Home to one of the world’s highest densities of leopards, Yala National Park offers thrilling safari experiences through a diverse landscape of open grasslands, dense scrub forests, rocky outcrops and tranquil lagoons. Along the way, visitors may encounter majestic elephants, sloth bears, crocodiles and an extraordinary variety of birdlife in their natural habitat. Beyond the excitement of the safari, Yala’s rugged landscapes and peaceful surroundings create a remarkable connection with nature, making it an essential stop for wildlife enthusiasts and adventurous travellers exploring Sri Lanka.",
        "style": "",
        "list": false,
        "align": ""
      },
      {
        "type": "paragraph",
        "text": "Curated Experiences",
        "style": "",
        "list": false,
        "align": ""
      },
      {
        "type": "paragraph",
        "text": "Private morning and evening jeep safaris",
        "style": "",
        "list": true,
        "align": ""
      },
      {
        "type": "paragraph",
        "text": "Search for the elusive Sri Lankan leopard",
        "style": "",
        "list": true,
        "align": ""
      },
      {
        "type": "paragraph",
        "text": "Spot elephants, sloth bears and exotic birdlife",
        "style": "",
        "list": true,
        "align": ""
      },
      {
        "type": "paragraph",
        "text": "Sundowners overlooking the wilderness",
        "style": "",
        "list": true,
        "align": ""
      },
      {
        "type": "paragraph",
        "text": "Bush-inspired gourmet dining",
        "style": "",
        "list": true,
        "align": ""
      },
      {
        "type": "paragraph",
        "text": "Your Stay – Day 6 & 7",
        "style": "",
        "list": false,
        "align": ""
      },
      {
        "type": "paragraph",
        "text": "Chena Huts — A luxurious safari lodge where refined comfort blends seamlessly with the wild beauty of Yala National Park.",
        "style": "",
        "list": false,
        "align": ""
      },
      {
        "type": "paragraph",
        "text": "Other Handpicked Stay Options – Wild Coast Tented Lodge| Tribe Yala|Kotiyagala Luxury Villas| The Warden’s House",
        "style": "",
        "list": false,
        "align": ""
      },
      {
        "type": "paragraph",
        "text": "DAYS 8-YALA | ELLA",
        "style": "",
        "list": false,
        "align": ""
      },
      {
        "type": "paragraph",
        "text": "The enchanting hill country",
        "style": "",
        "list": false,
        "align": ""
      },
      {
        "type": "paragraph",
        "text": "Approx. travel time: 2.5 to 3 Hours",
        "style": "",
        "list": false,
        "align": ""
      },
      {
        "type": "paragraph",
        "text": "Leaving the wilderness behind, ascend into Sri Lanka's spectacular central highlands, where emerald tea plantations, cascading waterfalls and mist-covered mountains create one of the island's most captivating landscapes. The charming town of Ella is renowned for its cool climate, breathtaking vistas and relaxed atmosphere, making it an idyllic retreat in the heart of the hill country.",
        "style": "",
        "list": false,
        "align": ""
      },
      {
        "type": "paragraph",
        "text": "Tucked away in Sri Lanka’s enchanting hill country, Ella is a picturesque mountain retreat celebrated for its breathtaking panoramas, lush tea plantations and laid-back village charm. Scenic hiking trails lead to iconic viewpoints such as Little Adam’s Peak and Ella Rock, while the famous Nine Arch Bridge showcases remarkable railway architecture amid emerald-green hills. Visitors can also discover cascading waterfalls, explore local cafés and enjoy the unforgettable experience of a scenic train journey through the misty highlands. With its blend of adventure, natural beauty and relaxed atmosphere, Ella is a favourite escape for nature lovers and explorers alike",
        "style": "",
        "list": false,
        "align": ""
      },
      {
        "type": "paragraph",
        "text": "Curated Experiences",
        "style": "",
        "list": false,
        "align": ""
      },
      {
        "type": "paragraph",
        "text": "Witness the iconic Nine Arch Bridge and passing hill-country train",
        "style": "",
        "list": true,
        "align": ""
      },
      {
        "type": "paragraph",
        "text": "Hike to Little Adam's Peak for panoramic sunrise views",
        "style": "",
        "list": true,
        "align": ""
      },
      {
        "type": "paragraph",
        "text": "Visit the scenic Ravana Falls",
        "style": "",
        "list": true,
        "align": ""
      },
      {
        "type": "paragraph",
        "text": "Discover Ella's boutique cafés and artisan shops",
        "style": "",
        "list": true,
        "align": ""
      },
      {
        "type": "paragraph",
        "text": "Hidden Hike Diyaluma Falls",
        "style": "ListParagraph",
        "list": true,
        "align": ""
      },
      {
        "type": "paragraph",
        "text": "Tuktuk ride to Lipton Seat",
        "style": "ListParagraph",
        "list": true,
        "align": ""
      },
      {
        "type": "paragraph",
        "text": "Your Stay – Day 8 & 9",
        "style": "",
        "list": false,
        "align": ""
      },
      {
        "type": "paragraph",
        "text": "Uga Ghiri — A spectacular villa with contemporary luxury and breathtaking hill-country panoramas create an unforgettable escape.",
        "style": "",
        "list": false,
        "align": ""
      },
      {
        "type": "paragraph",
        "text": "Other Handpicked Stay Options – Nine Skies by Teardrop Hotels |98 Acres Resort & Spa|Living Heritage Koslanda|Wishing Tree Boutique Resort",
        "style": "",
        "list": false,
        "align": ""
      },
      {
        "type": "paragraph",
        "text": "DAYS 10- ELLA|HATTON",
        "style": "",
        "list": false,
        "align": ""
      },
      {
        "type": "paragraph",
        "text": "The emerald tea highlands",
        "style": "",
        "list": false,
        "align": ""
      },
      {
        "type": "paragraph",
        "text": "Approx. travel time: 2.5–3.5 hours",
        "style": "",
        "list": false,
        "align": ""
      },
      {
        "type": "paragraph",
        "text": "Ascend into Sri Lanka's cool hill country, where emerald tea plantations, mist-covered mountains and tranquil lakes create one of the island's most breathtaking landscapes. Here, life is beautifully unhurried, shaped by the traditions of Ceylon Tea.",
        "style": "",
        "list": false,
        "align": ""
      },
      {
        "type": "paragraph",
        "text": "Nestled amidst the emerald-green tea country of Sri Lanka’s central highlands, Hatton is a scenic mountain destination celebrated for its rolling tea plantations, cool climate and timeless colonial charm. The surrounding hills reveal sweeping landscapes of neatly manicured tea bushes, mist-covered valleys and tranquil reservoirs, offering a glimpse into the island’s renowned Ceylon tea heritage. Visitors can explore working tea estates and historic tea factories, enjoy the peaceful beauty of Castlereagh Reservoir and venture towards Adam’s Peak, an important pilgrimage site surrounded by forested mountains. With its refreshing highland atmosphere, picturesque scenery and rich plantation history, Hatton is an inviting retreat for nature lovers, tea enthusiasts and travellers seeking the serene beauty of Sri Lanka’s hill country.",
        "style": "",
        "list": false,
        "align": ""
      },
      {
        "type": "paragraph",
        "text": "Curated Experiences",
        "style": "",
        "list": false,
        "align": ""
      },
      {
        "type": "paragraph",
        "text": "Private Tea estate and Factory Tour",
        "style": "",
        "list": true,
        "align": ""
      },
      {
        "type": "paragraph",
        "text": "Tea tasting with resident tea experts",
        "style": "",
        "list": true,
        "align": ""
      },
      {
        "type": "paragraph",
        "text": "Scenic walks through rolling plantations",
        "style": "",
        "list": true,
        "align": ""
      },
      {
        "type": "paragraph",
        "text": "Gourmet picnic overlooking Castlereagh Reservoir",
        "style": "",
        "list": true,
        "align": ""
      },
      {
        "type": "paragraph",
        "text": "Take a Lake Cruise",
        "style": "",
        "list": true,
        "align": ""
      },
      {
        "type": "paragraph",
        "text": "Kayaking on Castlereagh Lake",
        "style": "",
        "list": true,
        "align": ""
      },
      {
        "type": "paragraph",
        "text": "Afternoon tea with spectacular mountain views",
        "style": "",
        "list": true,
        "align": ""
      },
      {
        "type": "paragraph",
        "text": "Your Stay -Day 10 & 11",
        "style": "",
        "list": false,
        "align": ""
      },
      {
        "type": "paragraph",
        "text": "Ceylon Tea Trails — A collection of elegant colonial tea bungalows where timeless heritage, exceptional cuisine and personalised service define every stay.",
        "style": "",
        "list": false,
        "align": ""
      },
      {
        "type": "paragraph",
        "text": "Other Handpicked Stay Options – Camillia Hills by Teardrop Hotels|Uga Halloowella",
        "style": "",
        "list": false,
        "align": ""
      },
      {
        "type": "paragraph",
        "text": "DAYS 12-HATTON| KANDY",
        "style": "",
        "list": false,
        "align": ""
      },
      {
        "type": "paragraph",
        "text": "The last royal kingdom",
        "style": "",
        "list": false,
        "align": ""
      },
      {
        "type": "paragraph",
        "text": "Approx. travel time: 2.5–3 hours",
        "style": "",
        "list": false,
        "align": ""
      },
      {
        "type": "paragraph",
        "text": "Continue to Kandy, Sri Lanka's cultural capital and last royal kingdom, nestled amidst misty hills and centered around its picturesque lake. Rich in history and living traditions, Kandy remains the spiritual heart of the island.",
        "style": "",
        "list": false,
        "align": ""
      },
      {
        "type": "paragraph",
        "text": "Nestled among mist-covered hills and lush tropical landscapes, Kandy is a captivating destination where Sri Lanka’s rich heritage and spiritual traditions come to life. As the island’s last royal capital, the city is home to the sacred Temple of the Tooth Relic, tranquil Kandy Lake and beautifully preserved cultural landmarks. Visitors can explore vibrant local markets, experience traditional Kandyan dance performances and discover the botanical wonders of nearby Peradeniya. Blending history, culture and natural beauty, Kandy offers an authentic glimpse into the island’s timeless traditions",
        "style": "",
        "list": false,
        "align": ""
      },
      {
        "type": "paragraph",
        "text": "Curated Experiences",
        "style": "",
        "list": false,
        "align": ""
      },
      {
        "type": "paragraph",
        "text": "Visit the sacred Temple of the Tooth Relic",
        "style": "",
        "list": true,
        "align": ""
      },
      {
        "type": "paragraph",
        "text": "Discover the Royal Botanical Gardens",
        "style": "",
        "list": true,
        "align": ""
      },
      {
        "type": "paragraph",
        "text": "Enjoy a traditional Kandyan cultural performance",
        "style": "",
        "list": true,
        "align": ""
      },
      {
        "type": "paragraph",
        "text": "Explore artisan workshops and local crafts",
        "style": "",
        "list": true,
        "align": ""
      },
      {
        "type": "paragraph",
        "text": "Wander through Kandy's vibrant markets",
        "style": "",
        "list": true,
        "align": ""
      },
      {
        "type": "paragraph",
        "text": "Your Stay – Day 12 & 13",
        "style": "",
        "list": false,
        "align": ""
      },
      {
        "type": "paragraph",
        "text": "Adigar's Manor — A refined boutique residence inspired by Kandyan aristocracy, offering heritage, charm and warm personalised hospitality.",
        "style": "",
        "list": false,
        "align": ""
      },
      {
        "type": "paragraph",
        "text": "Other Handpicked Stay Options – W15 Hanthana Estate|Jetwing Kandy Gallery|The Golden Crown Hotel",
        "style": "",
        "list": false,
        "align": ""
      },
      {
        "type": "paragraph",
        "text": "DAYS 14 -KANDY| SIGIRIYA",
        "style": "",
        "list": false,
        "align": ""
      },
      {
        "type": "paragraph",
        "text": "Beneath the lion rock",
        "style": "",
        "list": false,
        "align": ""
      },
      {
        "type": "paragraph",
        "text": "Approx. travel time: 2–2.5 hours",
        "style": "",
        "list": false,
        "align": ""
      },
      {
        "type": "paragraph",
        "text": "Return to the Cultural Triangle and immerse yourself in one of Asia's most iconic landscapes. Dominated by the majestic Rock Fortress, this region blends ancient history, natural beauty and contemporary luxury in perfect harmony.",
        "style": "",
        "list": false,
        "align": ""
      },
      {
        "type": "paragraph",
        "text": "Sigiriya , where ancient kingdoms, remarkable architecture and timeless traditions tell the story of a fascinating past. Sigiriya captivates visitors with its iconic Lion Rock fortress, dramatic scenery and ancient frescoes, while nearby Dambulla is renowned for its impressive cave temple complex, adorned with centuries-old Buddhist murals and statues. Surrounded by lush greenery, rural villages and scenic countryside, these destinations offer a memorable journey through the island’s rich history, spiritual heritage and extraordinary cultural treasures.",
        "style": "",
        "list": false,
        "align": ""
      },
      {
        "type": "paragraph",
        "text": "Curated Experiences",
        "style": "",
        "list": false,
        "align": ""
      },
      {
        "type": "paragraph",
        "text": "Sunrise climb of Sigiriya Rock Fortress",
        "style": "",
        "list": true,
        "align": ""
      },
      {
        "type": "paragraph",
        "text": "Visit the ancient Dambulla Cave Temple",
        "style": "",
        "list": true,
        "align": ""
      },
      {
        "type": "paragraph",
        "text": "Private village experience and traditional lunch",
        "style": "",
        "list": true,
        "align": ""
      },
      {
        "type": "paragraph",
        "text": "Wildlife safari in Minneriya or Kaudulla (seasonal)",
        "style": "",
        "list": true,
        "align": ""
      },
      {
        "type": "paragraph",
        "text": "Relax amidst tranquil lakes and gardens",
        "style": "",
        "list": true,
        "align": ""
      },
      {
        "type": "paragraph",
        "text": "Your Stay – Day 14 & 15",
        "style": "",
        "list": false,
        "align": ""
      },
      {
        "type": "paragraph",
        "text": "Water Garden Sigiriya — An award-winning luxury retreat where elegant villas, tranquil waterways and breathtaking views of Sigiriya create an unforgettable escape.",
        "style": "",
        "list": false,
        "align": ""
      },
      {
        "type": "paragraph",
        "text": "Other Handpicked Stay Options – Jetwing Vil Uyana| Aliya Resort & SPA|AARA Wild Sigiriya",
        "style": "",
        "list": false,
        "align": ""
      },
      {
        "type": "paragraph",
        "text": "DAY 16 - SIGIRIYA |COLOMBO",
        "style": "",
        "list": false,
        "align": ""
      },
      {
        "type": "paragraph",
        "text": "A grand finale",
        "style": "",
        "list": false,
        "align": ""
      },
      {
        "type": "paragraph",
        "text": "Approx. travel time: 4–5 hours",
        "style": "",
        "list": false,
        "align": ""
      },
      {
        "type": "paragraph",
        "text": "Conclude your journey in Colombo, Sri Lanka's dynamic capital.",
        "style": "",
        "list": false,
        "align": ""
      },
      {
        "type": "paragraph",
        "text": "Colombo is a captivating blend of colonial heritage, vibrant city life and modern sophistication, offering a fascinating glimpse into Sri Lanka’s past and present. From the historic charm of Fort and the colourful streets of Pettah to the oceanfront promenade of Galle Face Green and the serene beauty of Gangaramaya Temple, the city invites visitors to discover its many contrasts. With stylish hotels, diverse culinary experiences, bustling markets, boutique shopping and lively nightlife, Colombo is an ideal introduction to the island’s culture, character and contemporary lifestyle.",
        "style": "",
        "list": false,
        "align": ""
      },
      {
        "type": "paragraph",
        "text": "Curated Experiences",
        "style": "",
        "list": false,
        "align": ""
      },
      {
        "type": "paragraph",
        "text": "Explore Colombo's colonial and cultural landmarks",
        "style": "",
        "list": true,
        "align": ""
      },
      {
        "type": "paragraph",
        "text": "Browse designer boutiques and local galleries",
        "style": "",
        "list": true,
        "align": ""
      },
      {
        "type": "paragraph",
        "text": "Visit the lively Pettah market",
        "style": "",
        "list": true,
        "align": ""
      },
      {
        "type": "paragraph",
        "text": "Indulge in fine dining and rooftop cocktails",
        "style": "",
        "list": true,
        "align": ""
      },
      {
        "type": "paragraph",
        "text": "Enjoy the world-class entertainment at City of Dreams",
        "style": "",
        "list": true,
        "align": ""
      },
      {
        "type": "paragraph",
        "text": "Your Stay – Day 16",
        "style": "",
        "list": false,
        "align": ""
      },
      {
        "type": "paragraph",
        "text": "Cinnamon Life at City of Dreams Colombo — Sri Lanka's premier integrated luxury resort, where sophisticated design, exceptional dining and vibrant entertainment provide the perfect finale to your island journey.",
        "style": "",
        "list": false,
        "align": ""
      },
      {
        "type": "paragraph",
        "text": "Other Handpicked Stay Options – Ishq Colombo|Aathma Colombo House|Maniumpathy | Paradise Road Tintagel Colombo",
        "style": "",
        "list": false,
        "align": ""
      },
      {
        "type": "paragraph",
        "text": "DAY 17 -COLOMBO|AIRPORT",
        "style": "",
        "list": false,
        "align": ""
      },
      {
        "type": "paragraph",
        "text": "Farewell Sri Lanka",
        "style": "",
        "list": false,
        "align": ""
      },
      {
        "type": "paragraph",
        "text": "Approx. travel time: 1–1.5 hours",
        "style": "",
        "list": false,
        "align": ""
      },
      {
        "type": "paragraph",
        "text": "After an unforgettable journey across Sri Lanka's golden coastlines, ancient kingdoms, wildlife reserves and emerald highlands, your private chauffeur will escort you to the airport. Depart with cherished memories of an island where every experience has been thoughtfully curated and every destination has revealed a new chapter of its remarkable story.",
        "style": "",
        "list": false,
        "align": ""
      },
      {
        "type": "paragraph",
        "text": "Until We Meet Again... Ayubowan.",
        "style": "",
        "list": false,
        "align": ""
      }
    ]
  },
  {
    "id": "the-great-ceylon-expedition",
    "name": "The Great Ceylon Expedition",
    "sourceFile": "The Great Ceylon Expedition.docx",
    "title": "The Great Ceylon Expedition 16 Days | 15 Nights",
    "image": "/ff704484-a0b3-4483-b004-584fb344461f.jpg",
    "blocks": [
      {
        "type": "paragraph",
        "text": "The Great Ceylon Expedition 16 Days | 15 Nights",
        "style": "",
        "list": false,
        "align": "center"
      },
      {
        "type": "paragraph",
        "text": "A Slow-Paced Family Odyssey.\nStep beyond the ordinary and uncover a side of Sri Lanka few travelers truly experience. \nThis thoughtfully crafted journey blends history, nature, culture, soft adventure and relaxation into one unforgettable family-friendly experience, allowing you to experience the island at a comfortable pace.\n\n\nDAY 01 – WELCOME TO SRI LANKA - AIRPORT |NEGOMBO\nWhere the story begins",
        "style": "",
        "list": false,
        "align": ""
      },
      {
        "type": "paragraph",
        "text": "Approx. travel time: 20–40 minutes",
        "style": "",
        "list": false,
        "align": ""
      },
      {
        "type": "paragraph",
        "text": "Ayubowan!",
        "style": "",
        "list": false,
        "align": ""
      },
      {
        "type": "paragraph",
        "text": "Your Sri Lankan adventure begins the moment you arrive at Bandaranaike International Airport, where a friendly Magical Paradise representative warmly welcomes you. After a comfortable transfer, settle into the charming coastal town of Negombo, famous for its fishing heritage, colonial history and beautiful lagoon.",
        "style": "",
        "list": false,
        "align": ""
      },
      {
        "type": "paragraph",
        "text": "Located close to Sri Lanka’s international airport, Negombo is a lively coastal town offering beaches, seafood culture and colonial influences. It serves as both a relaxing introduction and a memorable farewell to Sri Lanka.",
        "style": "",
        "list": false,
        "align": ""
      },
      {
        "type": "paragraph",
        "text": "Things to Do\n\nRelax after your flight at the hotel\nExplore Negombo Beach\nVisit the lively fish market on the following day",
        "style": "",
        "list": false,
        "align": ""
      },
      {
        "type": "paragraph",
        "text": "Dutch Canal Boat ride \n\nStay\nOvernight stay in Negombo – The perfect place to unwind before your island adventure begins.\n\n\nDAYS 02 – NEGOMBO |ANURADHAPURA",
        "style": "",
        "list": false,
        "align": ""
      },
      {
        "type": "paragraph",
        "text": "From the whisper of the waves to the echoes of the kings.",
        "style": "",
        "list": false,
        "align": ""
      },
      {
        "type": "paragraph",
        "text": "Approx. travel time: 3–4 hours\n\nJourney north to Sri Lanka's first great kingdom, where magnificent stupas, ancient monasteries and sacred temples tell stories spanning over two thousand years.",
        "style": "",
        "list": false,
        "align": ""
      },
      {
        "type": "paragraph",
        "text": "Step back in time in Anuradhapura, Sri Lanka’s ancient royal capital, where magnificent stupas, sacred Buddhist sites and remarkable archaeological treasures reveal the grandeur of a civilisation that flourished for centuries. A UNESCO World Heritage Site, this historic city is home to the revered Sri Maha Bodhi, the majestic Ruwanwelisaya Stupa and the impressive ruins of ancient monasteries and royal structures. Visitors can explore sacred temples, admire intricate stone carvings and discover the ingenious ancient irrigation systems that continue to shape the surrounding landscape. Blending profound spirituality with extraordinary history and architectural beauty, Anuradhapura offers a fascinating journey into the island’s ancient heritage.",
        "style": "",
        "list": false,
        "align": ""
      },
      {
        "type": "paragraph",
        "text": "Spend three nights exploring one of Asia's greatest archaeological treasures while discovering nearby natural wonders.",
        "style": "",
        "list": false,
        "align": ""
      },
      {
        "type": "paragraph",
        "text": "Things to Do\n\nExplore the Sacred City of Anuradhapura/Polonnaruwa\nVisit Sri Maha Bodhi and Ruwanwelisaya\nDiscover Mihintale",
        "style": "",
        "list": false,
        "align": ""
      },
      {
        "type": "paragraph",
        "text": "Explore the Cave Temple in Dambulla",
        "style": "",
        "list": false,
        "align": ""
      },
      {
        "type": "paragraph",
        "text": "Climb the mighty Rock Fortress -Sigiriya\nOptional safari at Wilpattu National Park or Minneriya national Park\n\nStay\n3 Nights in Anuradhapura – Immerse yourself in Sri Lanka's rich cultural and spiritual heritage.",
        "style": "",
        "list": false,
        "align": ""
      },
      {
        "type": "paragraph",
        "text": "DAYS 05  - ANURADHAPURA |DIGANA",
        "style": "",
        "list": false,
        "align": ""
      },
      {
        "type": "paragraph",
        "text": "From the footprints of ancient kings to the misty embrace of the hills",
        "style": "",
        "list": false,
        "align": ""
      },
      {
        "type": "paragraph",
        "text": "Approx. travel time: 2.5–3.5 hours\n\nTravel towards the peaceful hills surrounding Kandy and arrive in Digana, a tranquil escape embraced by lush greenery and the beautiful Victoria Reservoir. This peaceful setting is perfect for relaxation while offering easy access to the Cultural Capital.",
        "style": "",
        "list": false,
        "align": ""
      },
      {
        "type": "paragraph",
        "text": "Set amidst the lush landscapes of Sri Lanka’s central highlands, Digana is a tranquil countryside retreat celebrated for its scenic mountain views, verdant greenery and peaceful rural charm. Located near the historic city of Kandy and overlooking the picturesque Victoria Reservoir, the area offers a refreshing escape into nature, where rolling hills, tea plantations and quiet village roads create a soothing backdrop. Visitors can enjoy leisurely nature walks, cycling through the countryside, birdwatching and outdoor adventures, while golf enthusiasts can experience the renowned Victoria Golf Resort. With its blend of natural beauty, outdoor recreation and relaxed seclusion, Digana is an ideal destination for travellers seeking a quieter side of Sri Lanka.",
        "style": "",
        "list": false,
        "align": ""
      },
      {
        "type": "paragraph",
        "text": "Things to Do\n\nVisit the Temple of the Sacred Tooth Relic\nExplore Kandy City and local markets\nGem and jewellery experience\nVisit the Royal Botanical Gardens\nEnjoy the peaceful surroundings of Victoria Reservoir",
        "style": "",
        "list": false,
        "align": ""
      },
      {
        "type": "paragraph",
        "text": "Boating on the Lake",
        "style": "",
        "list": false,
        "align": ""
      },
      {
        "type": "paragraph",
        "text": "Kayaking",
        "style": "",
        "list": false,
        "align": ""
      },
      {
        "type": "paragraph",
        "text": "Golf sessions \n\nStay\n3 Nights in Digana – A relaxing retreat surrounded by nature with easy access to Kandy.",
        "style": "",
        "list": false,
        "align": ""
      },
      {
        "type": "paragraph",
        "text": "DAYS 08 –  DIGANA |MAHIYANGANAYA",
        "style": "",
        "list": false,
        "align": ""
      },
      {
        "type": "paragraph",
        "text": "From the gateway of the misty valleys down to the rugged heart of the ancient plains",
        "style": "",
        "list": false,
        "align": ""
      },
      {
        "type": "paragraph",
        "text": "Approx. travel time: 1.5–2 hours\n\nContinue into one of Sri Lanka's hidden gems, where ancient legends meet untouched wilderness. Mahiyanganaya offers authentic village life, indigenous culture and breathtaking scenery rarely found on traditional tourist routes.",
        "style": "",
        "list": false,
        "align": ""
      },
      {
        "type": "paragraph",
        "text": "Located in Sri Lanka’s eastern interior, Mahiyanganaya is a destination where ancient Buddhist heritage, indigenous culture and beautiful natural landscapes come together. The historic Mahiyangana Raja Maha Viharaya holds deep spiritual significance, while the surrounding countryside features tranquil reservoirs, lush paddy fields and scenic stretches of the Mahaweli River. Visitors can explore the peaceful shores of Sorabora Wewa, discover the cultural traditions of the indigenous Vedda community in nearby Dambana through respectful, locally guided experiences, and venture into the surrounding wilderness for nature and wildlife encounters. With its rich cultural heritage and authentic rural atmosphere, Mahiyanganaya offers a fascinating glimpse into Sri Lanka’s spiritual and traditional way of life.\n\nThings to Do\n\nVisit Mahiyanganaya Raja Maha Viharaya\nExperience the culture of the Vedda community\n Enjoy scenic countryside and river landscapes\nOptional nature walks and village experiences\n\nStay\n2 Nights in Mahiyanganaya – Discover authentic Sri Lanka away from the crowds.",
        "style": "",
        "list": false,
        "align": ""
      },
      {
        "type": "paragraph",
        "text": "DAY 10 - MAHIYANGANAYA | NUWARA ELIYA",
        "style": "",
        "list": false,
        "align": ""
      },
      {
        "type": "paragraph",
        "text": "From the sun-baked ancient plains, climbing up into the cool, emerald tea hills.",
        "style": "",
        "list": false,
        "align": ""
      },
      {
        "type": "paragraph",
        "text": "Approx. travel time: 2.5–3.5 hours\n\nClimb into Sri Lanka's cool hill country where rolling tea estates, colonial architecture and misty mountains create an atmosphere unlike anywhere else on the island.",
        "style": "",
        "list": false,
        "align": ""
      },
      {
        "type": "paragraph",
        "text": "Nestled amidst rolling hills, misty mountains and endless tea plantations, Nuwara Eliya is fondly known as Little England for its colonial charm and cool-climate atmosphere. The town’s picturesque gardens, historic buildings and tranquil Gregory Lake create a refreshing escape from the island’s tropical lowlands. Visitors can explore verdant tea estates, discover the art of Ceylon tea production and enjoy scenic drives through winding mountain roads and cascading waterfalls. With its crisp mountain air and timeless elegance, Nuwara Eliya offers a delightful taste of Sri Lanka’s hill-country beauty.",
        "style": "",
        "list": false,
        "align": ""
      },
      {
        "type": "paragraph",
        "text": "Things to Do\n\nVisit a tea plantation and factory\nExplore Gregory Lake\nWander through the charming colonial town\nEnjoy the cool mountain climate\n\nStay\nOvernight stay in Nuwara Eliya – Sri Lanka's picturesque \"Little England.\"",
        "style": "",
        "list": false,
        "align": ""
      },
      {
        "type": "paragraph",
        "text": "DAYS 11  | NUWARA ELIYA |HAPUTALE",
        "style": "",
        "list": false,
        "align": ""
      },
      {
        "type": "paragraph",
        "text": "From the manicured tea gardens of the high hills to the dramatic edge of the southern sky",
        "style": "",
        "list": false,
        "align": ""
      },
      {
        "type": "paragraph",
        "text": "Approx. travel time: 1–1.5 hours.",
        "style": "",
        "list": false,
        "align": ""
      },
      {
        "type": "paragraph",
        "text": "Enjoy one of the island's most scenic drives into Haputale, a peaceful mountain paradise offering spectacular panoramic views and unforgettable hiking experiences.",
        "style": "",
        "list": false,
        "align": ""
      },
      {
        "type": "paragraph",
        "text": "Perched high in Sri Lanka’s picturesque hill country, Haputale is a captivating mountain retreat renowned for its mist-covered landscapes, endless tea plantations and breathtaking panoramic views. The iconic Lipton’s Seat offers spectacular vistas across rolling hills and valleys, while the historic Dambatenne Tea Factory provides a fascinating glimpse into the island’s celebrated Ceylon tea heritage. Visitors can explore the charming Adisham Bungalow, discover cascading waterfalls such as Bambarakanda Falls and enjoy scenic walks through lush plantations and forest trails. With its cool climate, tranquil atmosphere and remarkable natural beauty, Haputale is an ideal destination for nature lovers, tea enthusiasts and travellers seeking an authentic highland escape.",
        "style": "",
        "list": false,
        "align": ""
      },
      {
        "type": "paragraph",
        "text": "Things to Do\n\nVisit Lipton's Seat\nVisit Adisham Monastery\nEnjoy breathtaking sunrise viewpoints",
        "style": "",
        "list": false,
        "align": ""
      },
      {
        "type": "paragraph",
        "text": "Day trip to Ella",
        "style": "",
        "list": false,
        "align": ""
      },
      {
        "type": "paragraph",
        "text": "Hike to Diyaluma Falls",
        "style": "",
        "list": false,
        "align": ""
      },
      {
        "type": "paragraph",
        "text": "Stay\n2 Nights in Haputale – Wake up among clouds and endless mountain vistas.\n\nDAY 13 - HAPUTALE | YALA",
        "style": "",
        "list": false,
        "align": ""
      },
      {
        "type": "paragraph",
        "text": "From the misty heights of the southern clouds down into the untamed heart of the wild",
        "style": "",
        "list": false,
        "align": ""
      },
      {
        "type": "paragraph",
        "text": "Approx. travel time: 2–3 hours.\n\nLeave the mountains behind and journey towards Sri Lanka's famous wilderness. Yala offers one of Asia's finest safari experiences where every game drive brings the excitement of spotting incredible wildlife.",
        "style": "",
        "list": false,
        "align": ""
      },
      {
        "type": "paragraph",
        "text": "A captivating wilderness destination where untamed nature and unforgettable wildlife encounters take centre stage. Home to one of the world’s highest densities of leopards, Yala National Park offers thrilling safari experiences through a diverse landscape of open grasslands, dense scrub forests, rocky outcrops and tranquil lagoons. Along the way, visitors may encounter majestic elephants, sloth bears, crocodiles and an extraordinary variety of birdlife in their natural habitat. Beyond the excitement of the safari, Yala’s rugged landscapes and peaceful surroundings create a remarkable connection with nature, making it an essential stop for wildlife enthusiasts and adventurous travellers exploring Sri Lanka.",
        "style": "",
        "list": false,
        "align": ""
      },
      {
        "type": "paragraph",
        "text": "Things to Do\n\nAfternoon Jeep Safari\nSearch for leopards, elephants and sloth bears\nBirdwatching\nEnjoy the wild landscapes of Yala\n\nStay\nOvernight stay in Yala – Experience the thrill of sleeping close to nature.\n\n\nDAYS 14 – YALA | WELIGAMA or MIRISSA",
        "style": "",
        "list": false,
        "align": ""
      },
      {
        "type": "paragraph",
        "text": "From the wild trails of the leopards to the turquoise waves of the surfers.",
        "style": "",
        "list": false,
        "align": ""
      },
      {
        "type": "paragraph",
        "text": "Approx. travel time: 2.5–3.5 hours",
        "style": "",
        "list": false,
        "align": ""
      },
      {
        "type": "paragraph",
        "text": "Complete your Sri Lankan adventure along the beautiful southern coastline. Golden beaches, swaying palms and spectacular sunsets create the perfect ending to an unforgettable holiday.",
        "style": "",
        "list": false,
        "align": ""
      },
      {
        "type": "paragraph",
        "text": "Weligama is a vibrant southern coastal town renowned for surfing, golden beaches, and laid-back coastal living. Combining adventure and tropical charm, it has become a favourite destination among surfers and beach lovers. Its sweeping bay, gentle waves, and welcoming seaside atmosphere make it an ideal spot for both beginners eager to try surfing and seasoned wave riders. Beyond the beach, discover charming cafés, fresh seafood, colourful fishing boats, and the unique sight of traditional stilt fishermen along the coast. With its relaxed rhythm, beautiful ocean views, and captivating blend of local culture and modern beach life, Weligama invites you to slow down and embrace the easygoing spirit of Sri Lanka’s southern shores.",
        "style": "",
        "list": false,
        "align": ""
      },
      {
        "type": "paragraph",
        "text": "Things to Do\n\nRelax on golden beaches",
        "style": "",
        "list": false,
        "align": ""
      },
      {
        "type": "paragraph",
        "text": "Whale watching (seasonal)\nSurfing or beginner surf lessons\nVisit Coconut Tree Hill and nearby Galle Fort\nEnjoy fresh seafood by the ocean",
        "style": "",
        "list": false,
        "align": ""
      },
      {
        "type": "paragraph",
        "text": "Stay\n2 Nights in Weligama or Mirissa – Relax by the Indian Ocean and celebrate the perfect ending to your journey.\n\n\nDAY 16 -DEPARTURE DAY | SOUTHERN COAST TO AIRPORT",
        "style": "",
        "list": false,
        "align": ""
      },
      {
        "type": "paragraph",
        "text": "From the lazy rhythm of the southern surf back to the runway where the journey began.",
        "style": "",
        "list": false,
        "align": ""
      },
      {
        "type": "paragraph",
        "text": "Approx. travel time: 2.5–3.5 hours",
        "style": "",
        "list": false,
        "align": ""
      },
      {
        "type": "paragraph",
        "text": "After breakfast, it's time to bid farewell to the beautiful island of Sri Lanka. Your Magical Paradise chauffeur will transfer you comfortably to Bandaranaike International Airport, carrying unforgettable memories of ancient kingdoms, misty mountains, thrilling safaris and sun-kissed beaches.",
        "style": "",
        "list": false,
        "align": ""
      }
    ]
  },
  {
    "id": "the-luxe-ladies-escape",
    "name": "The Luxe Ladies Escape",
    "sourceFile": "The Luxe Ladies Escape.docx",
    "title": "The Luxe Ladies Escape- 12 Days | 11 Nights",
    "image": "/8de9dae7-2ef0-4497-8b69-866058baec8a.jpg",
    "blocks": [
      {
        "type": "paragraph",
        "text": "The Luxe Ladies Escape- 12 Days | 11 Nights",
        "style": "",
        "list": false,
        "align": "center"
      },
      {
        "type": "paragraph",
        "text": "An Unforgettable Journey of Sisterhood, Wellness, and Wonder across Sri Lanka",
        "style": "",
        "list": false,
        "align": ""
      },
      {
        "type": "paragraph",
        "text": "There is something magical about travelling with your favorite girls, sharing laughter over sunrise coffees, chasing waterfalls, indulging in luxurious spa treatments, discovering hidden gems, and ending each day with unforgettable sunsets. This specially curated journey takes you through Sri Lanka's vibrant cities, ancient wonders, misty mountains and idyllic southern coastline, combining adventure, wellness, culture and relaxation into one unforgettable girls' escape.",
        "style": "",
        "list": false,
        "align": ""
      },
      {
        "type": "paragraph",
        "text": "DAY 01 – WELCOME TO SRI LANKA | COLOMBO",
        "style": "",
        "list": false,
        "align": ""
      },
      {
        "type": "paragraph",
        "text": "From the runway to the heartbeat of the capital city",
        "style": "",
        "list": false,
        "align": ""
      },
      {
        "type": "paragraph",
        "text": "Approx. travel time: 1–1.5 hours",
        "style": "",
        "list": false,
        "align": ""
      },
      {
        "type": "paragraph",
        "text": "Your island adventure begins as you arrive in the vibrant capital city of Colombo—a fascinating blend of colonial heritage, modern skylines, fashionable cafés and colourful local life. As Sri Lanka's commercial heart, Colombo offers the perfect introduction to the island, where bustling streets meet serene ocean views and every corner tells a different story.",
        "style": "",
        "list": false,
        "align": ""
      },
      {
        "type": "paragraph",
        "text": "With stylish hotels, diverse culinary experiences, bustling markets, boutique shopping and lively nightlife, Colombo is an ideal introduction to the island’s culture, character and contemporary lifestyle.",
        "style": "",
        "list": false,
        "align": ""
      },
      {
        "type": "paragraph",
        "text": "Things to Do",
        "style": "",
        "list": false,
        "align": ""
      },
      {
        "type": "paragraph",
        "text": "Explore Colombo's stylish cafés, boutiques and shopping districts.",
        "style": "ListParagraph",
        "list": true,
        "align": ""
      },
      {
        "type": "paragraph",
        "text": "Visit the iconic Gangaramaya Temple and the scenic Galle Face Green.",
        "style": "ListParagraph",
        "list": true,
        "align": ""
      },
      {
        "type": "paragraph",
        "text": "End the evening with rooftop cocktails overlooking the Indian Ocean.",
        "style": "ListParagraph",
        "list": true,
        "align": ""
      },
      {
        "type": "paragraph",
        "text": "Stay – City of Dreams",
        "style": "",
        "list": false,
        "align": ""
      },
      {
        "type": "paragraph",
        "text": "A contemporary urban retreat in the heart of Colombo, It’s the first and largest integrated resort in Sri Lanka and South Asia., offering stylish comfort, vibrant city views and the perfect setting to begin your Sri Lankan adventure.",
        "style": "",
        "list": false,
        "align": ""
      },
      {
        "type": "paragraph",
        "text": "Or Other Handpicked Stay Options –Galle face Hotel|Marino Beach Hotel|Cinnamon Grand Colombo|Shangri-La Colombo",
        "style": "",
        "list": false,
        "align": ""
      },
      {
        "type": "paragraph",
        "text": "DAY 02 – COLOMBO |KANDALAMA",
        "style": "",
        "list": false,
        "align": ""
      },
      {
        "type": "paragraph",
        "text": "From the bustling capital to the lakeside sanctuary.",
        "style": "",
        "list": false,
        "align": ""
      },
      {
        "type": "paragraph",
        "text": "Approx. travel time: 3.5–4.5 hours",
        "style": "",
        "list": false,
        "align": ""
      },
      {
        "type": "paragraph",
        "text": "Leaving the city behind, journey into Sri Lanka's Cultural Triangle where ancient history meets tranquil lakes and lush forests.",
        "style": "",
        "list": false,
        "align": ""
      },
      {
        "type": "paragraph",
        "text": "Surrounded by lush forests, tranquil waters and the timeless landscapes of Sri Lanka’s Cultural Triangle, Kandalama is a serene retreat celebrated for its natural beauty and remarkable proximity to the island’s ancient heritage. Overlooking the picturesque Kandalama Reservoir, this peaceful destination offers a harmonious blend of wilderness, culture and understated luxury. Visitors can enjoy scenic boat rides, discover rich birdlife around the wetlands and explore nearby landmarks such as Sigiriya Rock Fortress and the Dambulla Cave Temple. The area is also renowned for its distinctive nature-inspired architecture and immersive eco-luxury stays, where the boundaries between the built environment and the surrounding wilderness seem to disappear. With its peaceful setting and convenient access to Sri Lanka’s most treasured cultural sites, Kandalama is an ideal escape for nature lovers, cultural explorers and discerning travellers.",
        "style": "",
        "list": false,
        "align": ""
      },
      {
        "type": "paragraph",
        "text": "Stay – Amba Yaalu",
        "style": "",
        "list": false,
        "align": ""
      },
      {
        "type": "paragraph",
        "text": "Sri Lanka's first and only women-centric boutique hotel, thoughtfully designed to celebrate friendship, empowerment and relaxation. With elegant interiors, personalized hospitality and peaceful surroundings, it is the perfect sanctuary for an unforgettable girls' getaway.",
        "style": "",
        "list": false,
        "align": ""
      },
      {
        "type": "paragraph",
        "text": "Or Other Handpicked Stay Options – Heritance Kandalama |Amaya Lake |Jetwing Lake",
        "style": "",
        "list": false,
        "align": ""
      },
      {
        "type": "paragraph",
        "text": "DAY 03 & 04 – DISCOVER KANDALAMA",
        "style": "",
        "list": false,
        "align": ""
      },
      {
        "type": "paragraph",
        "text": "Spend the next two days exploring one of Sri Lanka's most spectacular regions where adventure and relaxation go hand in hand.",
        "style": "",
        "list": false,
        "align": ""
      },
      {
        "type": "paragraph",
        "text": "Things to Do",
        "style": "",
        "list": false,
        "align": ""
      },
      {
        "type": "paragraph",
        "text": "Sunrise climb of the magnificent Sigiriya Rock Fortress.",
        "style": "ListParagraph",
        "list": true,
        "align": ""
      },
      {
        "type": "paragraph",
        "text": "Experience a magical Hot Air Balloon ride over the Cultural Triangle (seasonal).",
        "style": "ListParagraph",
        "list": true,
        "align": ""
      },
      {
        "type": "paragraph",
        "text": "Enjoy a traditional village safari with an authentic Sri Lankan lunch.",
        "style": "ListParagraph",
        "list": true,
        "align": ""
      },
      {
        "type": "paragraph",
        "text": "Visit the ancient Dambulla Cave Temple.",
        "style": "ListParagraph",
        "list": true,
        "align": ""
      },
      {
        "type": "paragraph",
        "text": "Indulge in an Ayurvedic spa treatment.",
        "style": "ListParagraph",
        "list": true,
        "align": ""
      },
      {
        "type": "paragraph",
        "text": "Relax by the pool surrounded by nature.",
        "style": "ListParagraph",
        "list": true,
        "align": ""
      },
      {
        "type": "paragraph",
        "text": "Stay – Amba Yaalu| Heritance Kandalama |Amaya Lake |Jetwing Lake",
        "style": "",
        "list": false,
        "align": ""
      },
      {
        "type": "paragraph",
        "text": "DAY 05 – KANDALAMA |KANDY",
        "style": "",
        "list": false,
        "align": ""
      },
      {
        "type": "paragraph",
        "text": "Leaving the lakeside sanctuary for the sacred kingdom in the hills",
        "style": "",
        "list": false,
        "align": ""
      },
      {
        "type": "paragraph",
        "text": "Approx. travel time: 2–2.5 hours",
        "style": "",
        "list": false,
        "align": ""
      },
      {
        "type": "paragraph",
        "text": "This morning, travel towards Sri Lanka’s last kingdom.",
        "style": "",
        "list": false,
        "align": ""
      },
      {
        "type": "paragraph",
        "text": "en-route at the Elephant Freedom Project, where rescued elephants roam freely in a compassionate, ethical environment. Here, you'll experience these gentle giants up close while supporting responsible wildlife conservation.",
        "style": "",
        "list": false,
        "align": ""
      },
      {
        "type": "paragraph",
        "text": "Surrounded by misty hills and lush forests, Kandy is a charming lakeside city steeped in history, culture and tradition. As the last royal kingdom of Sri Lanka, it beautifully combines heritage with modern elegance.",
        "style": "",
        "list": false,
        "align": ""
      },
      {
        "type": "paragraph",
        "text": "Nestled among mist-covered hills and lush tropical landscapes, Kandy is a captivating destination where Sri Lanka’s rich heritage and spiritual traditions come to life. As the island’s last royal capital, the city is home to the sacred Temple of the Tooth Relic, tranquil Kandy Lake and beautifully preserved cultural landmarks. Visitors can explore vibrant local markets, experience traditional Kandyan dance performances and discover the botanical wonders of nearby Peradeniya. Blending history, culture and natural beauty, Kandy offers an authentic glimpse into the island’s timeless traditions.",
        "style": "",
        "list": false,
        "align": ""
      },
      {
        "type": "paragraph",
        "text": "Things to Do",
        "style": "",
        "list": false,
        "align": ""
      },
      {
        "type": "paragraph",
        "text": "Visit the sacred Temple of the Tooth Relic.",
        "style": "ListParagraph",
        "list": true,
        "align": ""
      },
      {
        "type": "paragraph",
        "text": "Stroll around the picturesque Kandy Lake.",
        "style": "ListParagraph",
        "list": true,
        "align": ""
      },
      {
        "type": "paragraph",
        "text": "Discover local gems and handcrafted jewellery.",
        "style": "ListParagraph",
        "list": true,
        "align": ""
      },
      {
        "type": "paragraph",
        "text": "Watch a vibrant cultural dance performance.",
        "style": "ListParagraph",
        "list": true,
        "align": ""
      },
      {
        "type": "paragraph",
        "text": "Enjoy a relaxing evening in the cool hill-country climate.",
        "style": "ListParagraph",
        "list": true,
        "align": ""
      },
      {
        "type": "paragraph",
        "text": "Handpicked Stay Options –   Fox Kandy | The Radh Hotel | Jetwing Kandy Gallery|Santani Wellness",
        "style": "",
        "list": false,
        "align": ""
      },
      {
        "type": "paragraph",
        "text": "DAY 06 – KANDY | HAPUTALE",
        "style": "",
        "list": false,
        "align": ""
      },
      {
        "type": "paragraph",
        "text": "Ascending from the sacred valley into the clouds",
        "style": "",
        "list": false,
        "align": ""
      },
      {
        "type": "paragraph",
        "text": "Approx. travel time: 3.5–4.5 hours",
        "style": "",
        "list": false,
        "align": ""
      },
      {
        "type": "paragraph",
        "text": "Journey deeper into Sri Lanka's breathtaking hill country before boarding one of the world's most scenic train journeys from Nanu Oya to Haputale.",
        "style": "",
        "list": false,
        "align": ""
      },
      {
        "type": "paragraph",
        "text": "Wind through rolling tea plantations, mist-covered mountains and charming villages as unforgettable landscapes unfold beyond every window.",
        "style": "",
        "list": false,
        "align": ""
      },
      {
        "type": "paragraph",
        "text": "Haputale is a peaceful mountain town blessed with crisp air, endless tea estates and dramatic viewpoints, offering the perfect escape into nature.",
        "style": "",
        "list": false,
        "align": ""
      },
      {
        "type": "paragraph",
        "text": "Perched high in Sri Lanka’s picturesque hill country, Haputale is a captivating mountain retreat renowned for its mist-covered landscapes, endless tea plantations and breathtaking panoramic views. The iconic Lipton’s Seat offers spectacular vistas across rolling hills and valleys, while the historic Dambatenne Tea Factory provides a fascinating glimpse into the island’s celebrated Ceylon tea heritage. Visitors can explore the charming Adisham Bungalow, discover cascading waterfalls such as Bambarakanda Falls and enjoy scenic walks through lush plantations and forest trails. With its cool climate, tranquil atmosphere and remarkable natural beauty, Haputale is an ideal destination for nature lovers, tea enthusiasts and travellers seeking an authentic highland escape.",
        "style": "",
        "list": false,
        "align": ""
      },
      {
        "type": "paragraph",
        "text": "Stay – Wishing Tree Boutique Resort & Spa",
        "style": "",
        "list": false,
        "align": ""
      },
      {
        "type": "paragraph",
        "text": "A charming boutique hideaway surrounded by tea plantations and mountain scenery, where cosy comfort, warm hospitality and spectacular views create an unforgettable hill-country experience.",
        "style": "",
        "list": false,
        "align": ""
      },
      {
        "type": "paragraph",
        "text": "Or Other Handpicked Stay Options –Living Heritage Koslanda| 98 Acres Resort & SPA| Te Dalu Resort & SPA|Seranite Ella",
        "style": "",
        "list": false,
        "align": ""
      },
      {
        "type": "paragraph",
        "text": "DAY 07 – EXPLORE ELLA",
        "style": "",
        "list": false,
        "align": ""
      },
      {
        "type": "paragraph",
        "text": "Today is dedicated to discovering the many treasures of nearby Ella, one of Sri Lanka's most loved mountain destinations.",
        "style": "",
        "list": false,
        "align": ""
      },
      {
        "type": "paragraph",
        "text": "Things to Do",
        "style": "",
        "list": false,
        "align": ""
      },
      {
        "type": "paragraph",
        "text": "Visit the iconic Nine Arches Bridge.",
        "style": "ListParagraph",
        "list": true,
        "align": ""
      },
      {
        "type": "paragraph",
        "text": "Hike to Little Adam's Peak.",
        "style": "ListParagraph",
        "list": true,
        "align": ""
      },
      {
        "type": "paragraph",
        "text": "Experience the Ravana Zipline (optional).",
        "style": "ListParagraph",
        "list": true,
        "align": ""
      },
      {
        "type": "paragraph",
        "text": "Visit Ravana Falls.",
        "style": "ListParagraph",
        "list": true,
        "align": ""
      },
      {
        "type": "paragraph",
        "text": "Browse Ella's cafés and boutique shops.",
        "style": "ListParagraph",
        "list": true,
        "align": ""
      },
      {
        "type": "paragraph",
        "text": "Enjoy a relaxing spa treatment or afternoon tea overlooking the hills.",
        "style": "ListParagraph",
        "list": true,
        "align": ""
      },
      {
        "type": "paragraph",
        "text": "Stay – Wishing Tree Boutique Resort & Spa | Living Heritage Koslanda | 98 Acres Resort & SPA| Te Dalu Resort & SPA| Seranite Ella",
        "style": "",
        "list": false,
        "align": ""
      },
      {
        "type": "paragraph",
        "text": "DAY 08 – HAPUTALE AT LEISURE",
        "style": "",
        "list": false,
        "align": ""
      },
      {
        "type": "paragraph",
        "text": "Take time to slow down and embrace the tranquillity of Sri Lanka's hill country.",
        "style": "",
        "list": false,
        "align": ""
      },
      {
        "type": "paragraph",
        "text": "Things to Do",
        "style": "",
        "list": false,
        "align": ""
      },
      {
        "type": "paragraph",
        "text": "Visit Lipton's Seat at sunrise.",
        "style": "ListParagraph",
        "list": true,
        "align": ""
      },
      {
        "type": "paragraph",
        "text": "Wander through tea plantations.",
        "style": "ListParagraph",
        "list": true,
        "align": ""
      },
      {
        "type": "paragraph",
        "text": "Spend a peaceful evening surrounded by nature.",
        "style": "ListParagraph",
        "list": true,
        "align": ""
      },
      {
        "type": "paragraph",
        "text": "Stay – Wishing Tree Boutique Resort & Spa | Living Heritage Koslanda | 98 Acres Resort & SPA| Te Dalu Resort & SPA| Seranite Ella",
        "style": "",
        "list": false,
        "align": ""
      },
      {
        "type": "paragraph",
        "text": "DAY 09 – HAPUTALE | UNAWATUNA",
        "style": "",
        "list": false,
        "align": ""
      },
      {
        "type": "paragraph",
        "text": "From high mist to golden shores.",
        "style": "",
        "list": false,
        "align": ""
      },
      {
        "type": "paragraph",
        "text": "Approx. travel time: 3–4 hours",
        "style": "",
        "list": false,
        "align": ""
      },
      {
        "type": "paragraph",
        "text": "Leaving the cool mountains behind, descend towards Sri Lanka's beautiful southern coastline where golden beaches, turquoise waters and swaying palm trees await.",
        "style": "",
        "list": false,
        "align": ""
      },
      {
        "type": "paragraph",
        "text": "Located along Sri Lanka’s southern coastline, Unawatuna is a vibrant beach destination renowned for its golden sands, turquoise waters and relaxed tropical atmosphere. Its beautiful crescent-shaped bay provides an inviting setting for swimming, snorkelling and sun-soaked relaxation, while nearby coral reefs reveal a fascinating underwater world. Visitors can explore the iconic Japanese Peace Pagoda, enjoy panoramic coastal views from Rumassala Hill and discover the historic streets of nearby Galle Fort. The area also offers charming beach cafés, fresh seafood restaurants and lively beachfront experiences, creating a wonderful balance of relaxation and adventure. With its captivating coastal scenery, rich cultural surroundings and welcoming atmosphere, Unawatuna is an ideal destination for beach lovers, couples and travellers seeking a memorable southern coastal escape.",
        "style": "",
        "list": false,
        "align": ""
      },
      {
        "type": "paragraph",
        "text": "Handpicked Stay – Miss Ceylon",
        "style": "",
        "list": false,
        "align": ""
      },
      {
        "type": "paragraph",
        "text": "An intimate boutique villa where elegant design, personalised service and tropical charm create a stylish coastal retreat exclusively designed for relaxation and unforgettable moments with your closest friends.",
        "style": "",
        "list": false,
        "align": ""
      },
      {
        "type": "paragraph",
        "text": "DAY 10 – UNAWATUNA",
        "style": "",
        "list": false,
        "align": ""
      },
      {
        "type": "paragraph",
        "text": "Wake up to the tropical setting near rice paddies and enjoy a day embracing Sri Lanka's laid-back coastal lifestyle.",
        "style": "",
        "list": false,
        "align": ""
      },
      {
        "type": "paragraph",
        "text": "Things to Do",
        "style": "",
        "list": false,
        "align": ""
      },
      {
        "type": "paragraph",
        "text": "Surf or enjoy a beginner's surfing lesson in Weligama.",
        "style": "ListParagraph",
        "list": true,
        "align": ""
      },
      {
        "type": "paragraph",
        "text": "Relax on the golden beaches.",
        "style": "ListParagraph",
        "list": true,
        "align": ""
      },
      {
        "type": "paragraph",
        "text": "Visit beach cafés and boutique stores.",
        "style": "ListParagraph",
        "list": true,
        "align": ""
      },
      {
        "type": "paragraph",
        "text": "Enjoy a memorable beachfront seafood lunch.",
        "style": "ListParagraph",
        "list": true,
        "align": ""
      },
      {
        "type": "paragraph",
        "text": "End the evening with a romantic beachfront dinner beneath the stars.",
        "style": "ListParagraph",
        "list": true,
        "align": ""
      },
      {
        "type": "paragraph",
        "text": "Handpicked Stay – Miss Ceylon",
        "style": "",
        "list": false,
        "align": ""
      },
      {
        "type": "paragraph",
        "text": "DAY 11 – UNAWATUNA|GALLE",
        "style": "",
        "list": false,
        "align": ""
      },
      {
        "type": "paragraph",
        "text": "Following the coastline to the historic fortress.",
        "style": "",
        "list": false,
        "align": ""
      },
      {
        "type": "paragraph",
        "text": "Approx. travel time: 15–30 minutes",
        "style": "",
        "list": false,
        "align": ""
      },
      {
        "type": "paragraph",
        "text": "Galle is a charming coastal destination where centuries of history meet the relaxed elegance of seaside living. At its heart lies the UNESCO-listed Galle Fort, a beautifully preserved historic quarter of cobblestone streets, colonial-era architecture, old churches and charming Dutch-style buildings. Visitors can wander through boutique shops, art galleries and atmospheric cafés, stroll along the fort’s ocean-facing ramparts and enjoy spectacular sunset views over the Indian Ocean. With its rich maritime heritage, vibrant local culture and laid-back coastal charm, Galle offers a memorable blend of history, discovery and seaside romance.",
        "style": "",
        "list": false,
        "align": ""
      },
      {
        "type": "paragraph",
        "text": "Spend the day exploring the timeless beauty of Galle, where centuries of colonial history blend effortlessly with stylish cafés, art galleries and boutique shopping.",
        "style": "",
        "list": false,
        "align": ""
      },
      {
        "type": "paragraph",
        "text": "Things to Do",
        "style": "",
        "list": false,
        "align": ""
      },
      {
        "type": "paragraph",
        "text": "Explore the UNESCO-listed Galle Fort.",
        "style": "ListParagraph",
        "list": true,
        "align": ""
      },
      {
        "type": "paragraph",
        "text": "Walk along the historic fort ramparts.",
        "style": "ListParagraph",
        "list": true,
        "align": ""
      },
      {
        "type": "paragraph",
        "text": "Visit charming boutiques and artisan stores.",
        "style": "ListParagraph",
        "list": true,
        "align": ""
      },
      {
        "type": "paragraph",
        "text": "Discover hidden cafés and galleries.",
        "style": "ListParagraph",
        "list": true,
        "align": ""
      },
      {
        "type": "paragraph",
        "text": "Visit the iconic Galle Lighthouse.",
        "style": "ListParagraph",
        "list": true,
        "align": ""
      },
      {
        "type": "paragraph",
        "text": "As your final evening unfolds, celebrate your unforgettable journey together with a spectacular sunset dining experience at one of Galle’s finest oceanfront restaurants, raising a toast to memories that will last a lifetime.",
        "style": "",
        "list": false,
        "align": ""
      },
      {
        "type": "paragraph",
        "text": "Handpicked Stay Options – Taru Villas Rampart Street| Fort Bazaar by Teardrop Hotels |Weligama Bay Marriot Resort|Jetwing Lighthouse",
        "style": "",
        "list": false,
        "align": ""
      },
      {
        "type": "paragraph",
        "text": "DAY 12 – FAREWELL SRI LANKA – GALLE |AIRPORT",
        "style": "",
        "list": false,
        "align": ""
      },
      {
        "type": "paragraph",
        "text": "From the historic ramparts back to the runway",
        "style": "",
        "list": false,
        "align": ""
      },
      {
        "type": "paragraph",
        "text": "Approx. travel time: 2.5–3.5 hours",
        "style": "",
        "list": false,
        "align": ""
      },
      {
        "type": "paragraph",
        "text": "After breakfast, it's time to bid farewell to the island paradise. As you journey to the airport, you'll take home more than just photographs—you'll leave with unforgettable memories, lifelong laughter and stories shared with your favorite girls, ready for your next adventure together.",
        "style": "",
        "list": false,
        "align": ""
      }
    ]
  },
  {
    "id": "the-magical-big-5-experience",
    "name": "The Magical Big 5 Experience",
    "sourceFile": "The Magical Big 5 Experience.docx",
    "title": "The Magical Big Five Experience – 8 Days| 7 Nights",
    "image": "/3aaa188a-cac8-4da0-93ad-bc14a5dedf10.jpg",
    "blocks": [
      {
        "type": "paragraph",
        "text": "The Magical Big Five Experience – 8 Days| 7 Nights",
        "style": "",
        "list": false,
        "align": "center"
      },
      {
        "type": "paragraph",
        "text": "Discover five of Sri Lanka's most extraordinary natural wonders on one unforgettable journey.",
        "style": "",
        "list": false,
        "align": ""
      },
      {
        "type": "paragraph",
        "text": "Discover Sri Lanka’s extraordinary wildlife on an unforgettable journey in search of the island’s legendary Big Five: The Asian Elephant, The Sri Lankan Leopard, Sloth Bear, Blue Whale and Sperm Whale.",
        "style": "",
        "list": false,
        "align": ""
      },
      {
        "type": "paragraph",
        "text": "From thrilling jungle safaris and lush rainforest encounters to the breathtaking beauty of the Indian Ocean, this carefully curated adventure bring you closer to the island’s remarkable natural wonders .Designed for wildlife enthusiasts and nature lovers, this journey promises incredible landscapes, authentic experiences and memorable stays.",
        "style": "",
        "list": false,
        "align": ""
      },
      {
        "type": "paragraph",
        "text": "While nature has its own plans and wildlife sightings can never be guaranteed, every encounter is a matter of luck, patience and the magic of the wild.",
        "style": "",
        "list": false,
        "align": ""
      },
      {
        "type": "paragraph",
        "text": "DAY 01 – WELCOME TO SRI LANKA|NEGOMBO",
        "style": "",
        "list": false,
        "align": ""
      },
      {
        "type": "paragraph",
        "text": "Where the journey begins",
        "style": "",
        "list": false,
        "align": ""
      },
      {
        "type": "paragraph",
        "text": "Approx. travel time 30 Minutes",
        "style": "",
        "list": false,
        "align": ""
      },
      {
        "type": "paragraph",
        "text": "Your Sri Lankan adventure begins with a warm welcome at Bandaranaike International Airport. Meet your personal chauffeur guide before travelling to the charming coastal town of Negombo, affectionately known as \"Little Rome\" for its rich colonial heritage and vibrant fishing culture.",
        "style": "",
        "list": false,
        "align": ""
      },
      {
        "type": "paragraph",
        "text": "Located close to Sri Lanka’s international airport, Negombo is a lively coastal town offering beaches, seafood culture and colonial influences.",
        "style": "",
        "list": false,
        "align": ""
      },
      {
        "type": "paragraph",
        "text": "Spend the remainder of the day unwinding after your flight or exploring the lively streets, canals, seafood restaurants, and golden beaches that make Negombo the perfect introduction to the island.",
        "style": "",
        "list": false,
        "align": ""
      },
      {
        "type": "paragraph",
        "text": "Things to Do",
        "style": "",
        "list": false,
        "align": ""
      },
      {
        "type": "paragraph",
        "text": "Relax on Negombo Beach.",
        "style": "",
        "list": true,
        "align": ""
      },
      {
        "type": "paragraph",
        "text": "Visit the Dutch Canal and historic churches.",
        "style": "",
        "list": true,
        "align": ""
      },
      {
        "type": "paragraph",
        "text": "Explore the bustling local fish market and town.",
        "style": "",
        "list": true,
        "align": ""
      },
      {
        "type": "paragraph",
        "text": "Stay – Negombo\nEnjoy a relaxing overnight stay at your beachfront hotel, where tropical surroundings and warm Sri Lankan hospitality offer the perfect start to your journey.",
        "style": "",
        "list": false,
        "align": ""
      },
      {
        "type": "paragraph",
        "text": "DAY 02 – NEGOMBO|UDAWALAWE",
        "style": "",
        "list": false,
        "align": ""
      },
      {
        "type": "paragraph",
        "text": "Into the wild heartland",
        "style": "",
        "list": false,
        "align": ""
      },
      {
        "type": "paragraph",
        "text": "Approx. travel time: 4–5 hours",
        "style": "",
        "list": false,
        "align": ""
      },
      {
        "type": "paragraph",
        "text": "Journey south through changing landscapes towards Udawalawe National Park.",
        "style": "",
        "list": false,
        "align": ""
      },
      {
        "type": "paragraph",
        "text": "Udawalawe is one of Sri Lanka’s best wildlife destinations, particularly famous for elephant sightings and scenic safari experiences. A captivating wildlife destination where vast grasslands, open plains and tranquil reservoirs create a haven for Sri Lanka’s remarkable wildlife. Best known for its thriving population of wild Asian elephants, Udawalawe National Park offers exciting safari experiences, giving visitors the chance to observe these magnificent animals in their natural habitat. The park is also home to water buffalo, deer, crocodiles and an impressive variety of birdlife, making it a rewarding destination for nature enthusiasts and photographers. With its untamed landscapes and unforgettable wildlife encounters, Udawalawe offers an authentic glimpse into the island’s extraordinary natural world.",
        "style": "",
        "list": false,
        "align": ""
      },
      {
        "type": "paragraph",
        "text": "As the afternoon cools, embark on an exhilarating jeep safari across the park's vast grasslands, wetlands, and reservoirs, home to large elephant herds, water buffalo, crocodiles, spotted deer, jackals, and an incredible variety of birdlife.",
        "style": "",
        "list": false,
        "align": ""
      },
      {
        "type": "paragraph",
        "text": "Things to Do",
        "style": "",
        "list": false,
        "align": ""
      },
      {
        "type": "paragraph",
        "text": "Scenic drive through Sri Lanka's southern countryside.",
        "style": "",
        "list": true,
        "align": ""
      },
      {
        "type": "paragraph",
        "text": "Afternoon jeep safari in Udawalawe National Park.",
        "style": "",
        "list": true,
        "align": ""
      },
      {
        "type": "paragraph",
        "text": "Watch elephants gathering around the park's reservoirs.",
        "style": "",
        "list": true,
        "align": ""
      },
      {
        "type": "paragraph",
        "text": "Stay – Udawalawe\nRelax amidst nature with an overnight stay close to the national park, perfectly positioned for tomorrow's wildlife encounters.",
        "style": "",
        "list": false,
        "align": ""
      },
      {
        "type": "paragraph",
        "text": "DAY 03 – UDAWALAWE | SINHARAJA",
        "style": "",
        "list": false,
        "align": ""
      },
      {
        "type": "paragraph",
        "text": "Savannah to Cloud Forest",
        "style": "",
        "list": false,
        "align": ""
      },
      {
        "type": "paragraph",
        "text": "Approx. travel time: 2–3 hours",
        "style": "",
        "list": false,
        "align": ""
      },
      {
        "type": "paragraph",
        "text": "Begin the morning with a visit to the Elephant Transit Home, where orphaned elephant calves are rehabilitated before being released back into the wild. Witness one of the scheduled feeding sessions and learn about Sri Lanka's remarkable elephant conservation efforts.",
        "style": "",
        "list": false,
        "align": ""
      },
      {
        "type": "paragraph",
        "text": "Continue your journey to the enchanting Sinharaja Rainforest.Step into the enchanting wilderness of Sinharaja, Sri Lanka’s last major tract of tropical lowland rainforest and a UNESCO World Heritage Site celebrated for its extraordinary biodiversity. This lush green sanctuary is alive with towering trees, tangled vines, cascading streams and the calls of exotic birds, offering a remarkable glimpse into one of the island’s most treasured natural ecosystems. Visitors can embark on guided rainforest treks, encounter colourful endemic bird species and discover fascinating wildlife, including reptiles, amphibians and rare plant life found nowhere else in the world. With its pristine forest trails, rich ecological heritage and immersive nature experiences, Sinharaja is an exceptional destination for wildlife enthusiasts, birdwatchers and adventurous travellers seeking to connect with Sri Lanka’s untamed natural beauty.",
        "style": "",
        "list": false,
        "align": ""
      },
      {
        "type": "paragraph",
        "text": "Things to Do",
        "style": "",
        "list": false,
        "align": ""
      },
      {
        "type": "paragraph",
        "text": "Visit the Elephant Transit Home.",
        "style": "",
        "list": true,
        "align": ""
      },
      {
        "type": "paragraph",
        "text": "Scenic drive into Sri Lanka's rainforest region.",
        "style": "",
        "list": true,
        "align": ""
      },
      {
        "type": "paragraph",
        "text": "Guided rainforest trek in Sinharaja.",
        "style": "",
        "list": true,
        "align": ""
      },
      {
        "type": "paragraph",
        "text": "Discover endemic flora and fauna.",
        "style": "",
        "list": true,
        "align": ""
      },
      {
        "type": "paragraph",
        "text": "Relax amidst the tranquil rainforest surroundings.",
        "style": "",
        "list": true,
        "align": ""
      },
      {
        "type": "paragraph",
        "text": "Stay – Sinharaja\nSpend the evening surrounded by pristine rainforest, where the sounds of nature create an unforgettable wilderness experience.",
        "style": "",
        "list": false,
        "align": ""
      },
      {
        "type": "paragraph",
        "text": "DAY 04 – SINHARAJA | YALA",
        "style": "",
        "list": false,
        "align": ""
      },
      {
        "type": "paragraph",
        "text": "The Big Game Corridor to Yala",
        "style": "",
        "list": false,
        "align": ""
      },
      {
        "type": "paragraph",
        "text": "Approx. travel time: 3–4 hours",
        "style": "",
        "list": false,
        "align": ""
      },
      {
        "type": "paragraph",
        "text": "Wake to the sounds of the rainforest before setting off on a guided trek through Sinharaja Forest Reserve. Accompanied by experienced naturalists, discover colourful endemic birds, rare butterflies, towering rainforest trees, and fascinating wildlife hidden beneath the forest canopy.",
        "style": "",
        "list": false,
        "align": ""
      },
      {
        "type": "paragraph",
        "text": "Later, travel to Yala National Park, Sri Lanka's most celebrated wildlife reserve and home to one of the world's highest densities of leopards.",
        "style": "",
        "list": false,
        "align": ""
      },
      {
        "type": "paragraph",
        "text": "It’s a wilderness destination where untamed nature and unforgettable wildlife encounters take centre stage. Home to one of the world’s highest densities of leopards, Yala National Park offers thrilling safari experiences through a diverse landscape of open grasslands, dense scrub forests, rocky outcrops and tranquil lagoons. Along the way, visitors may encounter majestic elephants, sloth bears, crocodiles and an extraordinary variety of birdlife in their natural habitat. Beyond the excitement of the safari, Yala’s rugged landscapes and peaceful surroundings create a remarkable connection with nature, making it an essential stop for wildlife enthusiasts and adventurous travellers exploring Sri Lanka.",
        "style": "",
        "list": false,
        "align": ""
      },
      {
        "type": "paragraph",
        "text": "Things to Do",
        "style": "",
        "list": false,
        "align": ""
      },
      {
        "type": "paragraph",
        "text": "Scenic drive to Yala.",
        "style": "",
        "list": true,
        "align": ""
      },
      {
        "type": "paragraph",
        "text": "Evening, next day morning safari in Yala National Park.",
        "style": "",
        "list": true,
        "align": ""
      },
      {
        "type": "paragraph",
        "text": "Stay – Yala\nStay on the doorstep of Sri Lanka's most iconic safari destination, where adventure awaits with every sunrise.",
        "style": "",
        "list": false,
        "align": ""
      },
      {
        "type": "paragraph",
        "text": "DAY 05 – YALA | MIRISSA",
        "style": "",
        "list": false,
        "align": ""
      },
      {
        "type": "paragraph",
        "text": "Where the Wilderness Meets the Wave",
        "style": "",
        "list": false,
        "align": ""
      },
      {
        "type": "paragraph",
        "text": "Approx. travel time: 2–3 hours",
        "style": "",
        "list": false,
        "align": ""
      },
      {
        "type": "paragraph",
        "text": "Rise early for a thrilling morning safari in Yala National Park, when wildlife is at its most active. Keep watch for elusive leopards, sloth bears, elephants, crocodiles, and an extraordinary array of birdlife before continuing along the scenic southern coastline to the laid-back beach town of Mirissa.",
        "style": "",
        "list": false,
        "align": ""
      },
      {
        "type": "paragraph",
        "text": "Mirissa is a captivating southern coastal destination where golden beaches, turquoise waters and a laid-back tropical atmosphere create the perfect seaside escape. Renowned for its seasonal whale-watching excursions, the destination offers opportunities to encounter magnificent blue whales and dolphins in the Indian Ocean. Visitors can relax on the palm-fringed beach, discover the picturesque Coconut Tree Hill, enjoy surfing and snorkelling, or savour freshly caught seafood at charming beachfront restaurants. As the sun sets over the ocean, Mirissa comes alive with a relaxed coastal dining scene and inviting beachside experiences. Combining marine adventures, scenic beauty and vibrant coastal living, Mirissa is an ideal destination for beach lovers, couples and travellers seeking an unforgettable escape along Sri Lanka’s southern shores.",
        "style": "",
        "list": false,
        "align": ""
      },
      {
        "type": "paragraph",
        "text": "Things to Do",
        "style": "",
        "list": false,
        "align": ""
      },
      {
        "type": "paragraph",
        "text": "Scenic coastal drive.",
        "style": "",
        "list": true,
        "align": ""
      },
      {
        "type": "paragraph",
        "text": "Relax on Mirissa Beach.",
        "style": "",
        "list": true,
        "align": ""
      },
      {
        "type": "paragraph",
        "text": "Stay – Mirissa\nUnwind in a charming beachfront retreat overlooking the sparkling waters of the Indian Ocean.",
        "style": "",
        "list": false,
        "align": ""
      },
      {
        "type": "paragraph",
        "text": "DAY 06 – MIRISSA",
        "style": "",
        "list": false,
        "align": ""
      },
      {
        "type": "paragraph",
        "text": "Face to face with the water giants",
        "style": "",
        "list": false,
        "align": ""
      },
      {
        "type": "paragraph",
        "text": "An early start takes you out to sea for one of Sri Lanka's most iconic wildlife experiences—whale watching. Between November and April, the waters off Mirissa offer one of the world's best opportunities to encounter majestic Blue Whales, playful dolphins, Sperm Whales, and many other marine species.",
        "style": "",
        "list": false,
        "align": ""
      },
      {
        "type": "paragraph",
        "text": "Spend the remainder of the day enjoying the relaxed coastal atmosphere or simply soaking up the tropical sunshine.",
        "style": "",
        "list": false,
        "align": ""
      },
      {
        "type": "paragraph",
        "text": "Things to Do",
        "style": "",
        "list": false,
        "align": ""
      },
      {
        "type": "paragraph",
        "text": "Whale, sperm whale and dolphin watching excursions.",
        "style": "",
        "list": true,
        "align": ""
      },
      {
        "type": "paragraph",
        "text": "Relax on Mirissa Beach.",
        "style": "",
        "list": true,
        "align": ""
      },
      {
        "type": "paragraph",
        "text": "Optional surfing or visiting nearby cultural attractions.",
        "style": "",
        "list": true,
        "align": ""
      },
      {
        "type": "paragraph",
        "text": "Stay – Mirissa\nEnjoy another peaceful evening by the ocean, embracing the relaxed rhythm of Sri Lanka's southern coast.",
        "style": "",
        "list": false,
        "align": ""
      },
      {
        "type": "paragraph",
        "text": "DAY 07 – MIRISSA",
        "style": "",
        "list": false,
        "align": ""
      },
      {
        "type": "paragraph",
        "text": "Leisure Day",
        "style": "",
        "list": false,
        "align": ""
      },
      {
        "type": "paragraph",
        "text": "Make the most of this final beach day in Mirissa and at your own pace– It’s the perfect farewell to paradise before your journey home.",
        "style": "",
        "list": false,
        "align": ""
      },
      {
        "type": "paragraph",
        "text": "DAY 08 – DEPARTURE-MIRISSA |AIRPORT",
        "style": "",
        "list": false,
        "align": ""
      },
      {
        "type": "paragraph",
        "text": "Farewell Sri Lanka",
        "style": "",
        "list": false,
        "align": ""
      },
      {
        "type": "paragraph",
        "text": "Approx. travel time: 2.5–3.5 hours",
        "style": "",
        "list": false,
        "align": ""
      },
      {
        "type": "paragraph",
        "text": "As your Magical Big Five adventure comes to an end, enjoy a leisurely breakfast before travelling to Bandaranaike International Airport.",
        "style": "",
        "list": false,
        "align": ""
      },
      {
        "type": "paragraph",
        "text": "Depart Sri Lanka with unforgettable memories of extraordinary wildlife encounters, pristine rainforests, spectacular coastlines, and the warm hospitality that makes the island truly magical.",
        "style": "",
        "list": false,
        "align": ""
      },
      {
        "type": "paragraph",
        "text": "Until we meet again, Ayubowan! 🌴",
        "style": "",
        "list": false,
        "align": ""
      }
    ]
  },
  {
    "id": "the-sri-lankan-table",
    "name": "The Sri Lankan Table",
    "sourceFile": "The Sri Lankan Table.docx",
    "title": "The Sri Lankan Table – 15 Days|14 Nights",
    "image": "/ff704484-a0b3-4483-b004-584fb344461f.jpg",
    "blocks": [
      {
        "type": "paragraph",
        "text": "The Sri Lankan Table – 15 Days|14 Nights",
        "style": "",
        "list": false,
        "align": "center"
      },
      {
        "type": "paragraph",
        "text": "A Culinary journey through the island’s Rich flavors, Traditions and timeless Recipes",
        "style": "",
        "list": false,
        "align": ""
      },
      {
        "type": "paragraph",
        "text": "Sri Lanka is not simply a destination to taste — it is a destination to savour.",
        "style": "",
        "list": false,
        "align": ""
      },
      {
        "type": "paragraph",
        "text": "Here, food tells stories.",
        "style": "",
        "list": false,
        "align": ""
      },
      {
        "type": "paragraph",
        "text": "Stories of fishermen heading out before sunrise, grandmothers grinding spices by hand, farmers harvesting from their gardens, tea pluckers moving through emerald-green hills and families gathering around a steaming clay pot of rice and curry.",
        "style": "",
        "list": false,
        "align": ""
      },
      {
        "type": "paragraph",
        "text": "The Sri Lankan Table is a 15-day culinary journey created for travellers who want to go beyond restaurants and discover the island through its food.",
        "style": "",
        "list": false,
        "align": ""
      },
      {
        "type": "paragraph",
        "text": "You won't simply watch Sri Lankan food being prepared.",
        "style": "",
        "list": false,
        "align": ""
      },
      {
        "type": "paragraph",
        "text": "You'll meet the people who make it, shop for the ingredients, cook beside them, taste it fresh and discover why food is such an important part of Sri Lankan life.",
        "style": "",
        "list": false,
        "align": ""
      },
      {
        "type": "paragraph",
        "text": "Along the way, there are ancient kingdoms, sacred temples, lush tea country, wildlife, beaches and historic cities — because the best culinary journeys are about much more than what is on the plate.",
        "style": "",
        "list": false,
        "align": ""
      },
      {
        "type": "paragraph",
        "text": "Come hungry. Leave with recipes, memories and a whole new taste for Sri Lanka.",
        "style": "",
        "list": false,
        "align": ""
      },
      {
        "type": "paragraph",
        "text": "DAY 1 — AIRPORT | NEGOMBO",
        "style": "",
        "list": false,
        "align": ""
      },
      {
        "type": "paragraph",
        "text": "Where Your Culinary Story Begins",
        "style": "",
        "list": false,
        "align": ""
      },
      {
        "type": "paragraph",
        "text": "Approx. travel time: 20–40 minutes",
        "style": "",
        "list": false,
        "align": ""
      },
      {
        "type": "paragraph",
        "text": "Welcome to Sri Lanka!",
        "style": "",
        "list": false,
        "align": ""
      },
      {
        "type": "paragraph",
        "text": "Your culinary journey begins beside the Indian Ocean in Negombo, a coastal town shaped by fishing, lagoons, coconut palms and generations of seafood traditions.",
        "style": "",
        "list": false,
        "align": ""
      },
      {
        "type": "paragraph",
        "text": "Located close to Sri Lanka’s international airport, Negombo is a lively coastal town offering beaches, seafood culture and colonial influences. It serves as both a relaxing introduction and a memorable farewell to Sri Lanka.",
        "style": "",
        "list": false,
        "align": ""
      },
      {
        "type": "paragraph",
        "text": "Settle into your hotel, breathe in the sea air and enjoy your first taste of Sri Lanka.",
        "style": "",
        "list": false,
        "align": ""
      },
      {
        "type": "paragraph",
        "text": "Things to do",
        "style": "",
        "list": false,
        "align": ""
      },
      {
        "type": "paragraph",
        "text": "Airport arrival and private transfer",
        "style": "",
        "list": true,
        "align": ""
      },
      {
        "type": "paragraph",
        "text": "Relax by the coast",
        "style": "",
        "list": true,
        "align": ""
      },
      {
        "type": "paragraph",
        "text": "First introduction to Sri Lankan cuisine",
        "style": "",
        "list": true,
        "align": ""
      },
      {
        "type": "paragraph",
        "text": "Optional sunset seafood dinner",
        "style": "",
        "list": true,
        "align": ""
      },
      {
        "type": "paragraph",
        "text": "Handpicked Stay Options – Wallawwa by Teardrop Hotels| Uga Riva| Sentido Heritance| Kirindi Paddy isle",
        "style": "",
        "list": false,
        "align": ""
      },
      {
        "type": "paragraph",
        "text": "DAY 2 — NEGOMBO|PUTTALAM",
        "style": "",
        "list": false,
        "align": ""
      },
      {
        "type": "paragraph",
        "text": "From Lagoon to Coconut Trail",
        "style": "",
        "list": false,
        "align": ""
      },
      {
        "type": "paragraph",
        "text": "Approx. travel time: 2–2.5 hours",
        "style": "",
        "list": false,
        "align": ""
      },
      {
        "type": "paragraph",
        "text": "Today, we get to the heart of Negombo's food culture.",
        "style": "",
        "list": false,
        "align": ""
      },
      {
        "type": "paragraph",
        "text": "Begin at the famous Lellama fish market, where the day's catch arrives from the sea. See the incredible variety of local seafood before heading towards the lagoon and fishing communities.",
        "style": "",
        "list": false,
        "align": ""
      },
      {
        "type": "paragraph",
        "text": "Then we will leave the coastal bustle of Negombo behind and head north towards Puttalam.",
        "style": "",
        "list": false,
        "align": ""
      },
      {
        "type": "paragraph",
        "text": "Located along Sri Lanka’s northwestern coast, Puttalam is a fascinating destination where tranquil lagoons, expansive salt flats and traditional fishing communities reveal a distinctive side of the island. The region is renowned for the picturesque Puttalam Lagoon, rich birdlife and scenic coastal landscapes, offering wonderful opportunities for birdwatching, boat excursions and nature exploration. Nearby Kalpitiya adds to the experience with its dolphin-watching adventures, kitesurfing and access to the remarkable Bar Reef Marine Sanctuary. Visitors can also discover the area’s salt production heritage and experience the rhythms of local coastal life. With its peaceful surroundings, rich biodiversity and authentic cultural character, Puttalam is an appealing destination for nature enthusiasts, photographers and travellers seeking to explore Sri Lanka beyond its well-trodden tourist routes.",
        "style": "",
        "list": false,
        "align": ""
      },
      {
        "type": "paragraph",
        "text": "Puttlam is one of Sri Lanka’s important coconut growing regions. Here will get to know the main ingredient that quietly sits at the heart of Sri Lankan’s cuisine- THE HUMBLE COCONUT.",
        "style": "",
        "list": false,
        "align": ""
      },
      {
        "type": "paragraph",
        "text": "Things to do",
        "style": "",
        "list": false,
        "align": ""
      },
      {
        "type": "paragraph",
        "text": "Early morning visit to the local fish market",
        "style": "",
        "list": true,
        "align": ""
      },
      {
        "type": "paragraph",
        "text": "Explore Negombo's fishing community",
        "style": "",
        "list": true,
        "align": ""
      },
      {
        "type": "paragraph",
        "text": "Lagoon boat ride",
        "style": "",
        "list": true,
        "align": ""
      },
      {
        "type": "paragraph",
        "text": "Traditional fishing experience",
        "style": "",
        "list": true,
        "align": ""
      },
      {
        "type": "paragraph",
        "text": "Discover mangroves and lagoon life",
        "style": "",
        "list": true,
        "align": ""
      },
      {
        "type": "paragraph",
        "text": "Walk through the coconut plantation, discover the coconut journey stages, Learn how the coconut milk is extracted",
        "style": "",
        "list": true,
        "align": ""
      },
      {
        "type": "paragraph",
        "text": "Enjoy your freshly prepared meal together",
        "style": "",
        "list": true,
        "align": ""
      },
      {
        "type": "paragraph",
        "text": "Relax amidst the plantation surroundings",
        "style": "",
        "list": true,
        "align": ""
      },
      {
        "type": "paragraph",
        "text": "Today's flavour: Coconut- from palm to plate",
        "style": "",
        "list": false,
        "align": ""
      },
      {
        "type": "paragraph",
        "text": "Handpicked Stay Options – The Coconut Experience",
        "style": "",
        "list": false,
        "align": ""
      },
      {
        "type": "paragraph",
        "text": "DAY 3 — PUTTLAM | JAFFNA",
        "style": "",
        "list": false,
        "align": ""
      },
      {
        "type": "paragraph",
        "text": "Following the Flavors to the North",
        "style": "",
        "list": false,
        "align": ""
      },
      {
        "type": "paragraph",
        "text": "Approx. travel time: 4–5 hours",
        "style": "",
        "list": false,
        "align": ""
      },
      {
        "type": "paragraph",
        "text": "Today, the scenery changes — and so does the food.",
        "style": "",
        "list": false,
        "align": ""
      },
      {
        "type": "paragraph",
        "text": "Travel north through Sri Lanka's agricultural heartland, where paddy fields, home gardens and dry-zone landscapes begin replacing the coastal scenery.",
        "style": "",
        "list": false,
        "align": ""
      },
      {
        "type": "paragraph",
        "text": "Jaffna offers a unique cultural experience shaped by northern Sri Lankan traditions, historic landmarks and coastal beauty. Rich heritage and distinctive cuisine make it a fascinating destination.",
        "style": "",
        "list": false,
        "align": ""
      },
      {
        "type": "paragraph",
        "text": "Located in the northernmost reaches of Sri Lanka, Jaffna is a captivating destination where rich Tamil heritage, ancient Hindu traditions and distinctive northern landscapes create a truly unique cultural experience. The city is renowned for its colourful Nallur Kandaswamy Temple, historic Jaffna Fort and vibrant local markets, while the surrounding peninsula reveals quiet fishing villages, palm-fringed coastlines and picturesque islands. Visitors can savour authentic Jaffna cuisine, discover centuries-old cultural landmarks and explore the scenic causeways leading to remote coastal communities. With its fascinating history, warm hospitality and strong cultural identity, Jaffna offers an enriching journey into a distinctive side of Sri Lanka.",
        "style": "",
        "list": false,
        "align": ""
      },
      {
        "type": "paragraph",
        "text": "Things to do",
        "style": "",
        "list": false,
        "align": ""
      },
      {
        "type": "paragraph",
        "text": "Scenic drive towards the North",
        "style": "",
        "list": true,
        "align": ""
      },
      {
        "type": "paragraph",
        "text": "Visit a local agricultural/farm setting",
        "style": "",
        "list": true,
        "align": ""
      },
      {
        "type": "paragraph",
        "text": "Learn about seasonal Sri Lankan produce",
        "style": "",
        "list": true,
        "align": ""
      },
      {
        "type": "paragraph",
        "text": "Continue towards Jaffna",
        "style": "",
        "list": true,
        "align": ""
      },
      {
        "type": "paragraph",
        "text": "Evening introduction to Northern Sri Lankan cuisine",
        "style": "",
        "list": true,
        "align": ""
      },
      {
        "type": "paragraph",
        "text": "Handpicked Stay Options – Fox Jaffna |Jetwing Jaffna| The Thinnai",
        "style": "",
        "list": false,
        "align": ""
      },
      {
        "type": "paragraph",
        "text": "DAY 4 — JAFFNA",
        "style": "",
        "list": false,
        "align": ""
      },
      {
        "type": "paragraph",
        "text": "The Spicy Soul of the North",
        "style": "",
        "list": false,
        "align": ""
      },
      {
        "type": "paragraph",
        "text": "Jaffna has a culinary personality all its own.",
        "style": "",
        "list": false,
        "align": ""
      },
      {
        "type": "paragraph",
        "text": "Expect stronger spices, distinctive Tamil flavours, seafood, palmyrah and dishes that reflect the history and culture of Sri Lanka's northern peninsula.",
        "style": "",
        "list": false,
        "align": ""
      },
      {
        "type": "paragraph",
        "text": "Things to do",
        "style": "",
        "list": false,
        "align": ""
      },
      {
        "type": "paragraph",
        "text": "Visit a local market",
        "style": "",
        "list": true,
        "align": ""
      },
      {
        "type": "paragraph",
        "text": "Discover Northern Sri Lankan ingredients",
        "style": "",
        "list": true,
        "align": ""
      },
      {
        "type": "paragraph",
        "text": "Explore Jaffna's food culture",
        "style": "",
        "list": true,
        "align": ""
      },
      {
        "type": "paragraph",
        "text": "Visit Nallur Kandaswamy Kovil",
        "style": "",
        "list": true,
        "align": ""
      },
      {
        "type": "paragraph",
        "text": "Explore Jaffna Fort",
        "style": "",
        "list": true,
        "align": ""
      },
      {
        "type": "paragraph",
        "text": "Taste local Northern delicacies",
        "style": "",
        "list": true,
        "align": ""
      },
      {
        "type": "paragraph",
        "text": "Discover palmyrah-based treats",
        "style": "",
        "list": true,
        "align": ""
      },
      {
        "type": "paragraph",
        "text": "Evening at leisure",
        "style": "",
        "list": true,
        "align": ""
      },
      {
        "type": "paragraph",
        "text": "Must-try: Jaffna crab curry, odiyal-based dishes, dosai, vadai, palmyrah sweets and Northern-style curries.",
        "style": "",
        "list": false,
        "align": ""
      },
      {
        "type": "paragraph",
        "text": "Handpicked Stay Options – Fox Jaffna |Jetwing Jaffna| The Thinnai",
        "style": "",
        "list": false,
        "align": ""
      },
      {
        "type": "paragraph",
        "text": "DAY 5 — JAFFNA",
        "style": "",
        "list": false,
        "align": ""
      },
      {
        "type": "paragraph",
        "text": "Market Basket to Kitchen",
        "style": "",
        "list": false,
        "align": ""
      },
      {
        "type": "paragraph",
        "text": "Today, you don't just eat Jaffna food.",
        "style": "",
        "list": false,
        "align": ""
      },
      {
        "type": "paragraph",
        "text": "You make it.",
        "style": "",
        "list": false,
        "align": ""
      },
      {
        "type": "paragraph",
        "text": "Start at a local market and shop for the ingredients that will become your lunch. With your local host, learn how everyday ingredients transform into a traditional Northern Sri Lankan meal.",
        "style": "",
        "list": false,
        "align": ""
      },
      {
        "type": "paragraph",
        "text": "Things to do",
        "style": "",
        "list": false,
        "align": ""
      },
      {
        "type": "paragraph",
        "text": "Morning local market walk",
        "style": "",
        "list": true,
        "align": ""
      },
      {
        "type": "paragraph",
        "text": "Select fresh vegetables, herbs and spices",
        "style": "",
        "list": true,
        "align": ""
      },
      {
        "type": "paragraph",
        "text": "Learn about Jaffna's unique ingredients",
        "style": "",
        "list": true,
        "align": ""
      },
      {
        "type": "paragraph",
        "text": "Private hands-on cooking class",
        "style": "",
        "list": true,
        "align": ""
      },
      {
        "type": "paragraph",
        "text": "Traditional Northern Sri Lankan lunch",
        "style": "",
        "list": true,
        "align": ""
      },
      {
        "type": "paragraph",
        "text": "Taste local sweets",
        "style": "",
        "list": true,
        "align": ""
      },
      {
        "type": "paragraph",
        "text": "Enjoy a famous Jaffna ice cream",
        "style": "",
        "list": true,
        "align": ""
      },
      {
        "type": "paragraph",
        "text": "Optional evening food exploration",
        "style": "",
        "list": true,
        "align": ""
      },
      {
        "type": "paragraph",
        "text": "Handpicked Stay Options – Fox Jaffna |Jetwing Jaffna| The Thinnai",
        "style": "",
        "list": false,
        "align": ""
      },
      {
        "type": "paragraph",
        "text": "DAY 6 — JAFFNA | SIGIRIYA",
        "style": "",
        "list": false,
        "align": ""
      },
      {
        "type": "paragraph",
        "text": "From the North to the Ancient Heartland",
        "style": "",
        "list": false,
        "align": ""
      },
      {
        "type": "paragraph",
        "text": "Approx. travel time: 5–6 hours",
        "style": "",
        "list": false,
        "align": ""
      },
      {
        "type": "paragraph",
        "text": "Leave Jaffna behind and journey towards Sri Lanka's Cultural Triangle.",
        "style": "",
        "list": false,
        "align": ""
      },
      {
        "type": "paragraph",
        "text": "The food story changes again as you enter the island's traditional farming heartland.",
        "style": "",
        "list": false,
        "align": ""
      },
      {
        "type": "paragraph",
        "text": "Discover the heart of Sri Lanka’s Cultural Triangle, where ancient kingdoms, remarkable architecture and timeless traditions tell the story of a fascinating past. Sigiriya captivates visitors with its iconic Lion Rock fortress, dramatic scenery and ancient frescoes, while nearby Dambulla is renowned for its impressive cave temple complex, adorned with centuries-old Buddhist murals and statues. Surrounded by lush greenery, rural villages and scenic countryside, these destinations offer a memorable journey through the island’s rich history, spiritual heritage and extraordinary cultural treasures.",
        "style": "",
        "list": false,
        "align": ""
      },
      {
        "type": "paragraph",
        "text": "Things to do",
        "style": "",
        "list": false,
        "align": ""
      },
      {
        "type": "paragraph",
        "text": "Morning visit to Jaffna Library",
        "style": "",
        "list": true,
        "align": ""
      },
      {
        "type": "paragraph",
        "text": "Continue towards the Cultural Triangle",
        "style": "",
        "list": true,
        "align": ""
      },
      {
        "type": "paragraph",
        "text": "En-route local snack stops",
        "style": "",
        "list": true,
        "align": ""
      },
      {
        "type": "paragraph",
        "text": "Taste seasonal fruits",
        "style": "",
        "list": true,
        "align": ""
      },
      {
        "type": "paragraph",
        "text": "Arrive in Sigiriya/Habarana",
        "style": "",
        "list": true,
        "align": ""
      },
      {
        "type": "paragraph",
        "text": "Watch hoppers being prepared fresh",
        "style": "",
        "list": true,
        "align": ""
      },
      {
        "type": "paragraph",
        "text": "Try egg hoppers, plain hoppers and accompaniments",
        "style": "",
        "list": true,
        "align": ""
      },
      {
        "type": "paragraph",
        "text": "Handpicked Stay Options –Jetwing Vil Uyana|Water Garden Sigiriya| Heritance Kanadalama|Aliya Resort & Spa",
        "style": "",
        "list": false,
        "align": ""
      },
      {
        "type": "paragraph",
        "text": "DAY 7 — SIGIRIYA",
        "style": "",
        "list": false,
        "align": ""
      },
      {
        "type": "paragraph",
        "text": "The Village Kitchen",
        "style": "",
        "list": false,
        "align": ""
      },
      {
        "type": "paragraph",
        "text": "Today is one of the signature experiences of the journey.",
        "style": "",
        "list": false,
        "align": ""
      },
      {
        "type": "paragraph",
        "text": "Leave the tourist trail behind and step into village life.",
        "style": "",
        "list": false,
        "align": ""
      },
      {
        "type": "paragraph",
        "text": "Walk through village paths, meet local families and discover the ingredients that go into a traditional Sri Lankan meal.",
        "style": "",
        "list": false,
        "align": ""
      },
      {
        "type": "paragraph",
        "text": "Then gather around the fire.",
        "style": "",
        "list": false,
        "align": ""
      },
      {
        "type": "paragraph",
        "text": "Things to do",
        "style": "",
        "list": false,
        "align": ""
      },
      {
        "type": "paragraph",
        "text": "Sri Lankan village experience",
        "style": "",
        "list": true,
        "align": ""
      },
      {
        "type": "paragraph",
        "text": "Walk through paddy fields and home gardens",
        "style": "",
        "list": true,
        "align": ""
      },
      {
        "type": "paragraph",
        "text": "Discover traditional ingredients",
        "style": "",
        "list": true,
        "align": ""
      },
      {
        "type": "paragraph",
        "text": "Visit a village home",
        "style": "",
        "list": true,
        "align": ""
      },
      {
        "type": "paragraph",
        "text": "Wood-fire cooking experience",
        "style": "",
        "list": true,
        "align": ""
      },
      {
        "type": "paragraph",
        "text": "Learn to prepare authentic rice & curry",
        "style": "",
        "list": true,
        "align": ""
      },
      {
        "type": "paragraph",
        "text": "Cook with traditional clay pots",
        "style": "",
        "list": true,
        "align": ""
      },
      {
        "type": "paragraph",
        "text": "Enjoy lunch served in traditional style",
        "style": "",
        "list": true,
        "align": ""
      },
      {
        "type": "paragraph",
        "text": "Visit Sigiriya Rock Fortress",
        "style": "",
        "list": true,
        "align": ""
      },
      {
        "type": "paragraph",
        "text": "Sunset overlooking the Cultural Triangle",
        "style": "",
        "list": true,
        "align": ""
      },
      {
        "type": "paragraph",
        "text": "Today's flavour: Rice, coconut, jackfruit, dhal, sambols, mallung & village curries etc.",
        "style": "",
        "list": false,
        "align": ""
      },
      {
        "type": "paragraph",
        "text": "Handpicked Stay Options –Jetwing Vil Uyana|Water Garden Sigiriya| Heritance Kanadalama|Aliya Resort & Spa",
        "style": "",
        "list": false,
        "align": ""
      },
      {
        "type": "paragraph",
        "text": "DAY 8 — SIGIRIYA | KANDY",
        "style": "",
        "list": false,
        "align": ""
      },
      {
        "type": "paragraph",
        "text": "Into the Spice Kingdom",
        "style": "",
        "list": false,
        "align": ""
      },
      {
        "type": "paragraph",
        "text": "Approx. travel time: 2–2.5 hours",
        "style": "",
        "list": false,
        "align": ""
      },
      {
        "type": "paragraph",
        "text": "Today is all about the ingredients that make Sri Lankan cuisine so intoxicating.",
        "style": "",
        "list": false,
        "align": ""
      },
      {
        "type": "paragraph",
        "text": "Nestled among mist-covered hills and lush tropical landscapes, Kandy is a captivating destination where Sri Lanka’s rich heritage and spiritual traditions come to life. As the island’s last royal capital, the city is home to the sacred Temple of the Tooth Relic, tranquil Kandy Lake and beautifully preserved cultural landmarks. Visitors can explore vibrant local markets, experience traditional Kandyan dance performances and discover the botanical wonders of nearby Peradeniya. Blending history, culture and natural beauty, Kandy offers an authentic glimpse into the island’s timeless traditions.",
        "style": "",
        "list": false,
        "align": ""
      },
      {
        "type": "paragraph",
        "text": "Things to do",
        "style": "",
        "list": false,
        "align": ""
      },
      {
        "type": "paragraph",
        "text": "Visit Dambulla Cave Temple",
        "style": "",
        "list": true,
        "align": ""
      },
      {
        "type": "paragraph",
        "text": "Travel through the spice-growing region",
        "style": "",
        "list": true,
        "align": ""
      },
      {
        "type": "paragraph",
        "text": "Private Spice Garden Experience",
        "style": "",
        "list": true,
        "align": ""
      },
      {
        "type": "paragraph",
        "text": "Discover cinnamon, cardamom, cloves, pepper, nutmeg and more",
        "style": "",
        "list": true,
        "align": ""
      },
      {
        "type": "paragraph",
        "text": "Learn how Sri Lankan spices are used in cooking and traditional wellness",
        "style": "",
        "list": true,
        "align": ""
      },
      {
        "type": "paragraph",
        "text": "Spice demonstration",
        "style": "",
        "list": true,
        "align": ""
      },
      {
        "type": "paragraph",
        "text": "Optional spice-infused tea tasting",
        "style": "",
        "list": true,
        "align": ""
      },
      {
        "type": "paragraph",
        "text": "Continue to Kandy",
        "style": "",
        "list": true,
        "align": ""
      },
      {
        "type": "paragraph",
        "text": "Evening visit to the Temple of the Tooth",
        "style": "",
        "list": true,
        "align": ""
      },
      {
        "type": "paragraph",
        "text": "Handpicked Stay Options -  W15 Hanthana Estate|Jetwing Kandy Gallery|The Radh Hotel|Fox Kandy Resort",
        "style": "",
        "list": false,
        "align": ""
      },
      {
        "type": "paragraph",
        "text": "DAY 9 — KANDY",
        "style": "",
        "list": false,
        "align": ""
      },
      {
        "type": "paragraph",
        "text": "The Sweet Side of Ceylon",
        "style": "",
        "list": false,
        "align": ""
      },
      {
        "type": "paragraph",
        "text": "Sri Lankan cuisine isn't all about curry and chilli.",
        "style": "",
        "list": false,
        "align": ""
      },
      {
        "type": "paragraph",
        "text": "Today, we discover the island's sweeter side.",
        "style": "",
        "list": false,
        "align": ""
      },
      {
        "type": "paragraph",
        "text": "Things to do",
        "style": "",
        "list": false,
        "align": ""
      },
      {
        "type": "paragraph",
        "text": "Visit a local market",
        "style": "",
        "list": true,
        "align": ""
      },
      {
        "type": "paragraph",
        "text": "Discover traditional Sri Lankan sweets",
        "style": "",
        "list": true,
        "align": ""
      },
      {
        "type": "paragraph",
        "text": "Learn about sweets prepared for weddings, festivals and celebrations",
        "style": "",
        "list": true,
        "align": ""
      },
      {
        "type": "paragraph",
        "text": "Taste kokis ,Kavum,Aluwa",
        "style": "",
        "list": true,
        "align": ""
      },
      {
        "type": "paragraph",
        "text": "Discover watalappam",
        "style": "",
        "list": true,
        "align": ""
      },
      {
        "type": "paragraph",
        "text": "Explore Kandy",
        "style": "",
        "list": true,
        "align": ""
      },
      {
        "type": "paragraph",
        "text": "Handpicked Stay Options – W15 Hanthana Estate|Jetwing Kandy Gallery|The Radh Hotel|Fox Kandy Resort",
        "style": "",
        "list": false,
        "align": ""
      },
      {
        "type": "paragraph",
        "text": "DAY 10 — KANDY | ELLA",
        "style": "",
        "list": false,
        "align": ""
      },
      {
        "type": "paragraph",
        "text": "The Train Through Tea Country",
        "style": "",
        "list": false,
        "align": ""
      },
      {
        "type": "paragraph",
        "text": "Approx. travel time: 4–5 hours",
        "style": "",
        "list": false,
        "align": ""
      },
      {
        "type": "paragraph",
        "text": "Today, the journey becomes beautifully scenic.",
        "style": "",
        "list": false,
        "align": ""
      },
      {
        "type": "paragraph",
        "text": "Board one of Sri Lanka's iconic trains and travel through misty mountains, waterfalls and endless tea plantations.",
        "style": "",
        "list": false,
        "align": ""
      },
      {
        "type": "paragraph",
        "text": "Tucked away in Sri Lanka’s enchanting hill country, Ella is a picturesque mountain retreat celebrated for its breathtaking panoramas, lush tea plantations and laid-back village charm. Scenic hiking trails lead to iconic viewpoints such as Little Adam’s Peak and Ella Rock, while the famous Nine Arch Bridge showcases remarkable railway architecture amid emerald-green hills. Visitors can also discover cascading waterfalls, explore local cafés and enjoy the unforgettable experience of a scenic train journey through the misty highlands. With its blend of adventure, natural beauty and relaxed atmosphere, Ella is a favourite escape for nature lovers and explorers alike.",
        "style": "",
        "list": false,
        "align": ""
      },
      {
        "type": "paragraph",
        "text": "Things to do",
        "style": "",
        "list": false,
        "align": ""
      },
      {
        "type": "paragraph",
        "text": "Scenic train journey",
        "style": "",
        "list": true,
        "align": ""
      },
      {
        "type": "paragraph",
        "text": "Tea-country landscapes",
        "style": "",
        "list": true,
        "align": ""
      },
      {
        "type": "paragraph",
        "text": "Visit a working tea estate",
        "style": "",
        "list": true,
        "align": ""
      },
      {
        "type": "paragraph",
        "text": "Meet tea workers",
        "style": "",
        "list": true,
        "align": ""
      },
      {
        "type": "paragraph",
        "text": "Tea-plucking experience",
        "style": "",
        "list": true,
        "align": ""
      },
      {
        "type": "paragraph",
        "text": "Visit a tea factory",
        "style": "",
        "list": true,
        "align": ""
      },
      {
        "type": "paragraph",
        "text": "Learn how Ceylon Tea is produced",
        "style": "",
        "list": true,
        "align": ""
      },
      {
        "type": "paragraph",
        "text": "Afternoon at leisure in Ella",
        "style": "",
        "list": true,
        "align": ""
      },
      {
        "type": "paragraph",
        "text": "Handpicked Stay Options – 98 Acres Resort & Spa|Wishing Tree Boutique Resort & Spa|Living Heritage Koslanda| NewBurgh Ella",
        "style": "",
        "list": false,
        "align": ""
      },
      {
        "type": "paragraph",
        "text": "DAY 11 — ELLA",
        "style": "",
        "list": false,
        "align": ""
      },
      {
        "type": "paragraph",
        "text": "From Leaf to Cup",
        "style": "",
        "list": false,
        "align": ""
      },
      {
        "type": "paragraph",
        "text": "Today we slow down and celebrate one of Sri Lanka's most famous exports — Ceylon Tea.",
        "style": "",
        "list": false,
        "align": ""
      },
      {
        "type": "paragraph",
        "text": "Things to do",
        "style": "",
        "list": false,
        "align": ""
      },
      {
        "type": "paragraph",
        "text": "Morning tea estate experience",
        "style": "",
        "list": true,
        "align": ""
      },
      {
        "type": "paragraph",
        "text": "Tea tasting",
        "style": "",
        "list": true,
        "align": ""
      },
      {
        "type": "paragraph",
        "text": "Discover different grades and flavours",
        "style": "",
        "list": true,
        "align": ""
      },
      {
        "type": "paragraph",
        "text": "Enjoy a classic Ceylon tea experience",
        "style": "",
        "list": true,
        "align": ""
      },
      {
        "type": "paragraph",
        "text": "Local-style breakfast",
        "style": "",
        "list": true,
        "align": ""
      },
      {
        "type": "paragraph",
        "text": "Explore Ella",
        "style": "",
        "list": true,
        "align": ""
      },
      {
        "type": "paragraph",
        "text": "Visit Nine Arch Bridge",
        "style": "",
        "list": true,
        "align": ""
      },
      {
        "type": "paragraph",
        "text": "Sunset dinner overlooking the hills",
        "style": "",
        "list": true,
        "align": ""
      },
      {
        "type": "paragraph",
        "text": "Handpicked Stay Options – 98 Acres Resort & Spa|Wishing Tree Boutique Resort & Spa|Living Heritage Koslanda| NewBurgh Ella",
        "style": "",
        "list": false,
        "align": ""
      },
      {
        "type": "paragraph",
        "text": "DAY 12 — ELLA | YALA",
        "style": "",
        "list": false,
        "align": ""
      },
      {
        "type": "paragraph",
        "text": "A Sweet tooth Taste of Rural Sri Lanka",
        "style": "",
        "list": false,
        "align": ""
      },
      {
        "type": "paragraph",
        "text": "Approx. travel time: 2.5 to 3 Hours",
        "style": "",
        "list": false,
        "align": ""
      },
      {
        "type": "paragraph",
        "text": "As you descend from the mountains towards the southern plains, the landscape — and the food changes once again. With a delightful stop to savour Sri Lanka’s traditional buffalo curd drizzled with sweet kithul treacle along the way to Yala.",
        "style": "",
        "list": false,
        "align": ""
      },
      {
        "type": "paragraph",
        "text": "Yala is a captivating wilderness destination where untamed nature and unforgettable wildlife encounters take centre stage. Home to one of the world’s highest densities of leopards, Yala National Park offers thrilling safari experiences through a diverse landscape of open grasslands, dense scrub forests, rocky outcrops and tranquil lagoons. Along the way, visitors may encounter majestic elephants, sloth bears, crocodiles and an extraordinary variety of birdlife in their natural habitat. Beyond the excitement of the safari, Yala’s rugged landscapes and peaceful surroundings create a remarkable connection with nature, making it an essential stop for wildlife enthusiasts and adventurous travellers exploring Sri Lanka.",
        "style": "",
        "list": false,
        "align": ""
      },
      {
        "type": "paragraph",
        "text": "Things to do",
        "style": "",
        "list": false,
        "align": ""
      },
      {
        "type": "paragraph",
        "text": "Scenic drive towards Yala",
        "style": "",
        "list": true,
        "align": ""
      },
      {
        "type": "paragraph",
        "text": "Discover buffalo curd making",
        "style": "",
        "list": true,
        "align": ""
      },
      {
        "type": "paragraph",
        "text": "Curd & treacle tasting",
        "style": "",
        "list": true,
        "align": ""
      },
      {
        "type": "paragraph",
        "text": "Taste seasonal fruits",
        "style": "",
        "list": true,
        "align": ""
      },
      {
        "type": "paragraph",
        "text": "Afternoon Yala National Park safari",
        "style": "",
        "list": true,
        "align": ""
      },
      {
        "type": "paragraph",
        "text": "Sundowner in the wild",
        "style": "",
        "list": true,
        "align": ""
      },
      {
        "type": "paragraph",
        "text": "Handpicked Stay Options – Wild Coast Tented Lodge|Uga Chena Huts|Kotiyagala Luxury Villas|Hilton Yala",
        "style": "",
        "list": false,
        "align": ""
      },
      {
        "type": "paragraph",
        "text": "DAY 13 — YALA | GALLE",
        "style": "",
        "list": false,
        "align": ""
      },
      {
        "type": "paragraph",
        "text": "From the Wild to the Ocean",
        "style": "",
        "list": false,
        "align": ""
      },
      {
        "type": "paragraph",
        "text": "Approx. travel time: 3–4 hours",
        "style": "",
        "list": false,
        "align": ""
      },
      {
        "type": "paragraph",
        "text": "Today, the culinary story returns to the coast.",
        "style": "",
        "list": false,
        "align": ""
      },
      {
        "type": "paragraph",
        "text": "Galle is a charming coastal destination where centuries of history meet the relaxed elegance of seaside living. At its heart lies the UNESCO-listed Galle Fort, a beautifully preserved historic quarter of cobblestone streets, colonial-era architecture, old churches and charming Dutch-style buildings. Visitors can wander through boutique shops, art galleries and atmospheric cafés, stroll along the fort’s ocean-facing ramparts and enjoy spectacular sunset views over the Indian Ocean. With its rich maritime heritage, vibrant local culture and laid-back coastal charm, Galle offers a memorable blend of history, discovery and seaside romance",
        "style": "",
        "list": false,
        "align": ""
      },
      {
        "type": "paragraph",
        "text": "Things to do",
        "style": "",
        "list": false,
        "align": ""
      },
      {
        "type": "paragraph",
        "text": "Leisurely departure from Yala",
        "style": "",
        "list": true,
        "align": ""
      },
      {
        "type": "paragraph",
        "text": "Travel along the southern coast",
        "style": "",
        "list": true,
        "align": ""
      },
      {
        "type": "paragraph",
        "text": "Visit a coastal fishing community",
        "style": "",
        "list": true,
        "align": ""
      },
      {
        "type": "paragraph",
        "text": "Fisherman's seafood experience",
        "style": "",
        "list": true,
        "align": ""
      },
      {
        "type": "paragraph",
        "text": "Learn about the day's catch",
        "style": "",
        "list": true,
        "align": ""
      },
      {
        "type": "paragraph",
        "text": "Seafood lunch",
        "style": "",
        "list": true,
        "align": ""
      },
      {
        "type": "paragraph",
        "text": "Continue towards Galle",
        "style": "",
        "list": true,
        "align": ""
      },
      {
        "type": "paragraph",
        "text": "Explore Galle Fort",
        "style": "",
        "list": true,
        "align": ""
      },
      {
        "type": "paragraph",
        "text": "Evening stroll through the historic streets",
        "style": "",
        "list": true,
        "align": ""
      },
      {
        "type": "paragraph",
        "text": "Handpicked Stay Options – Cape Weligama|Malabar Hill|Galle Fort Hotel|Amanagalla | Taru Villas Rampart Street | Jetwing Lighthouse| The Fort Bazar",
        "style": "",
        "list": false,
        "align": ""
      },
      {
        "type": "paragraph",
        "text": "DAY 14 — GALLE | COLOMBO",
        "style": "",
        "list": false,
        "align": ""
      },
      {
        "type": "paragraph",
        "text": "A Grand Finale of Flavors",
        "style": "",
        "list": false,
        "align": ""
      },
      {
        "type": "paragraph",
        "text": "Approx. travel time: 2–3 hours",
        "style": "",
        "list": false,
        "align": ""
      },
      {
        "type": "paragraph",
        "text": "Your final full day is a celebration of everything you've discovered.",
        "style": "",
        "list": false,
        "align": ""
      },
      {
        "type": "paragraph",
        "text": "But Colombo brings something different — the modern face of Sri Lankan food.",
        "style": "",
        "list": false,
        "align": ""
      },
      {
        "type": "paragraph",
        "text": "Colombo is a captivating blend of colonial heritage, vibrant city life and modern sophistication, offering a fascinating glimpse into Sri Lanka’s past and present. From the historic charm of Fort and the colourful streets of Pettah to the oceanfront promenade of Galle Face Green and the serene beauty of Gangaramaya Temple, the city invites visitors to discover its many contrasts. With stylish hotels, diverse culinary experiences, bustling markets, boutique shopping and lively nightlife, Colombo is an ideal introduction to the island’s culture, character and contemporary lifestyle.",
        "style": "",
        "list": false,
        "align": ""
      },
      {
        "type": "paragraph",
        "text": "Things to do",
        "style": "",
        "list": false,
        "align": ""
      },
      {
        "type": "paragraph",
        "text": "Morning at leisure in Galle",
        "style": "",
        "list": true,
        "align": ""
      },
      {
        "type": "paragraph",
        "text": "Travel towards Colombo",
        "style": "",
        "list": true,
        "align": ""
      },
      {
        "type": "paragraph",
        "text": "Explore Colombo's local food scene",
        "style": "",
        "list": true,
        "align": ""
      },
      {
        "type": "paragraph",
        "text": "Sri Lankan street-food trail",
        "style": "",
        "list": true,
        "align": ""
      },
      {
        "type": "paragraph",
        "text": "Discover Colombo's multicultural food influences",
        "style": "",
        "list": true,
        "align": ""
      },
      {
        "type": "paragraph",
        "text": "Signature farewell dinner",
        "style": "",
        "list": true,
        "align": ""
      },
      {
        "type": "paragraph",
        "text": "Handpicked Stay Options –Paradise Road Tintagel| Cinnamon Lakeside Hotel| Galle face Hotel| Maniumpathy|Aathma Colombo House|City of Dreams of Colombo",
        "style": "",
        "list": false,
        "align": ""
      },
      {
        "type": "paragraph",
        "text": "DAY 15 — COLOMBO | AIRPORT",
        "style": "",
        "list": false,
        "align": ""
      },
      {
        "type": "paragraph",
        "text": "Take the Flavours Home",
        "style": "",
        "list": false,
        "align": ""
      },
      {
        "type": "paragraph",
        "text": "Approx. travel time: 1–1.5 hours",
        "style": "",
        "list": false,
        "align": ""
      },
      {
        "type": "paragraph",
        "text": "Your Sri Lankan culinary journey comes to an end.",
        "style": "",
        "list": false,
        "align": ""
      },
      {
        "type": "paragraph",
        "text": "But hopefully, you don't leave with only photographs.",
        "style": "",
        "list": false,
        "align": ""
      },
      {
        "type": "paragraph",
        "text": "You leave with new recipes, new flavours, stories of the people you met — and perhaps a new appreciation for just how much can be said through a plate of rice and curry.",
        "style": "",
        "list": false,
        "align": ""
      },
      {
        "type": "paragraph",
        "text": "Until the next time you return to the Sri Lankan table.",
        "style": "",
        "list": false,
        "align": ""
      }
    ]
  },
  {
    "id": "the-wild-sri-lanka-collection",
    "name": "The Wild Sri Lanka Collection",
    "sourceFile": "The Wild Sri Lanka Collection.docx",
    "title": "THE WILD SRI LANKA COLLECTION -13 Nights | 14 Days",
    "image": "/3aaa188a-cac8-4da0-93ad-bc14a5dedf10.jpg",
    "blocks": [
      {
        "type": "paragraph",
        "text": "THE WILD SRI LANKA COLLECTION -13 Nights | 14 Days",
        "style": "",
        "list": false,
        "align": "center"
      },
      {
        "type": "paragraph",
        "text": "Beyond the famous landmarks lies another Sri Lanka — untamed, mysterious and wonderfully raw.",
        "style": "",
        "list": false,
        "align": ""
      },
      {
        "type": "paragraph",
        "text": "The Wild Sri Lanka Collection is more of a photographic journey into the island’s wilder side, where every destination offers a new frame and every moment tells a story. From vast national parks and elusive wildlife to ancient landscapes, hidden lakes, misty rainforests and the tropical southern coast, discover the extraordinary diversity of Sri Lanka through unforgettable photographic encounters.",
        "style": "",
        "list": false,
        "align": ""
      },
      {
        "type": "paragraph",
        "text": "More than a wildlife adventure, this is a collection of moments worth capturing — the drama of the wild, the beauty of untouched landscapes, the magic of fleeting encounters and the ever-changing colours of the island, all woven together into one remarkable photographic escape.",
        "style": "",
        "list": false,
        "align": ""
      },
      {
        "type": "paragraph",
        "text": "WILD. UNTAMED. DISTINCTLY SRI LANKAN.",
        "style": "",
        "list": false,
        "align": ""
      },
      {
        "type": "paragraph",
        "text": "DAY 1 -AIRPORT |NEGOMBO",
        "style": "",
        "list": false,
        "align": ""
      },
      {
        "type": "paragraph",
        "text": "Where the Journey Begins",
        "style": "",
        "list": false,
        "align": ""
      },
      {
        "type": "paragraph",
        "text": "Approx. travel time: 20–40 minutes",
        "style": "",
        "list": false,
        "align": ""
      },
      {
        "type": "paragraph",
        "text": "Your Sri Lankan wildlife story begins beside the Indian Ocean. After arriving in Negombo, settle into your hotel and enjoy a relaxed introduction to the island.",
        "style": "",
        "list": false,
        "align": ""
      },
      {
        "type": "paragraph",
        "text": "Located close to Sri Lanka’s international airport, Negombo is a lively coastal town offering beaches, seafood culture and colonial influences. It serves as both a relaxing introduction and a memorable farewell to Sri Lanka.",
        "style": "",
        "list": false,
        "align": ""
      },
      {
        "type": "paragraph",
        "text": "The evening can be kept gentle, allowing time to rest after the journey and prepare cameras and equipment for the days ahead.",
        "style": "",
        "list": false,
        "align": ""
      },
      {
        "type": "paragraph",
        "text": "Things to do",
        "style": "",
        "list": false,
        "align": ""
      },
      {
        "type": "paragraph",
        "text": "Negombo lagoon boat experience",
        "style": "",
        "list": true,
        "align": ""
      },
      {
        "type": "paragraph",
        "text": "Sunset by the Indian Ocean",
        "style": "",
        "list": true,
        "align": ""
      },
      {
        "type": "paragraph",
        "text": "Stay: Negombo",
        "style": "",
        "list": false,
        "align": ""
      },
      {
        "type": "paragraph",
        "text": "DAY 2- NEGOMBO|WILPATTU",
        "style": "",
        "list": false,
        "align": ""
      },
      {
        "type": "paragraph",
        "text": "Into the Wild",
        "style": "",
        "list": false,
        "align": ""
      },
      {
        "type": "paragraph",
        "text": "Approx. travel time: 3–4 hours",
        "style": "",
        "list": false,
        "align": ""
      },
      {
        "type": "paragraph",
        "text": "Leave the coast behind and enter the vast wilderness of Wilpattu National Park, Sri Lanka's largest national park.",
        "style": "",
        "list": false,
        "align": ""
      },
      {
        "type": "paragraph",
        "text": "Wilpattu is a captivating wilderness destination on Sri Lanka’s northwestern coast, renowned for its expansive forests, natural lakes and remarkable wildlife. As one of the island’s largest national parks, it offers an immersive safari experience through dry-zone woodlands, open clearings and distinctive rain-fed lakes known as villus. Visitors may encounter the elusive Sri Lankan leopard, sloth bears, elephants, spotted deer and a fascinating variety of birdlife while exploring the park by jeep.",
        "style": "",
        "list": false,
        "align": ""
      },
      {
        "type": "paragraph",
        "text": "With its untamed landscapes, quieter safari atmosphere and rich biodiversity, Wilpattu is an exceptional destination for wildlife enthusiasts, photographers and travellers seeking an authentic connection with nature.",
        "style": "",
        "list": false,
        "align": ""
      },
      {
        "type": "paragraph",
        "text": "Things to do",
        "style": "",
        "list": false,
        "align": ""
      },
      {
        "type": "paragraph",
        "text": "Afternoon safari in Wilpattu National Park",
        "style": "",
        "list": true,
        "align": ""
      },
      {
        "type": "paragraph",
        "text": "Sunset among the wilderness",
        "style": "",
        "list": true,
        "align": ""
      },
      {
        "type": "paragraph",
        "text": "Stay: Wilpattu",
        "style": "",
        "list": false,
        "align": ""
      },
      {
        "type": "paragraph",
        "text": "DAYS 3 – WILAPTTU |SIGIRIYA & HABARANA",
        "style": "",
        "list": false,
        "align": ""
      },
      {
        "type": "paragraph",
        "text": "Wildlife Beneath the Ancient Rock",
        "style": "",
        "list": false,
        "align": ""
      },
      {
        "type": "paragraph",
        "text": "Approx. travel time: 4–5 hours",
        "style": "",
        "list": false,
        "align": ""
      },
      {
        "type": "paragraph",
        "text": "The journey moves into Sri Lanka's cultural heartland, where ancient kingdoms, forests, lakes and wildlife exist side by side.",
        "style": "",
        "list": false,
        "align": ""
      },
      {
        "type": "paragraph",
        "text": "Discover the heart of Sri Lanka’s Cultural Triangle, where ancient kingdoms, remarkable architecture and timeless traditions tell the story of a fascinating past. Sigiriya captivates visitors with its iconic Lion Rock fortress, dramatic scenery and ancient frescoes, while nearby Dambulla is renowned for its impressive cave temple complex, adorned with centuries-old Buddhist murals and statues. Surrounded by lush greenery, rural villages and scenic countryside, these destinations offer a memorable journey through the island’s rich history, spiritual heritage and extraordinary cultural treasures.",
        "style": "",
        "list": false,
        "align": ""
      },
      {
        "type": "paragraph",
        "text": "Here, the camera shifts to birds, elephants, landscapes and nocturnal wildlife.",
        "style": "",
        "list": false,
        "align": ""
      },
      {
        "type": "paragraph",
        "text": "Things to do",
        "style": "",
        "list": false,
        "align": ""
      },
      {
        "type": "paragraph",
        "text": "Climb the majesctic Rock fortess – Sigiriya",
        "style": "ListParagraph",
        "list": true,
        "align": ""
      },
      {
        "type": "paragraph",
        "text": "Sunrise or sunset views of the iconic rock from Pidurangala",
        "style": "ListParagraph",
        "list": true,
        "align": ""
      },
      {
        "type": "paragraph",
        "text": "Explore the ancient golden temple",
        "style": "ListParagraph",
        "list": true,
        "align": ""
      },
      {
        "type": "paragraph",
        "text": "Village and countryside experiences",
        "style": "ListParagraph",
        "list": true,
        "align": ""
      },
      {
        "type": "paragraph",
        "text": "Relaxed cycling or nature walks through the countryside",
        "style": "ListParagraph",
        "list": true,
        "align": ""
      },
      {
        "type": "paragraph",
        "text": "Morning birdwatching around lakes and forest",
        "style": "ListParagraph",
        "list": true,
        "align": ""
      },
      {
        "type": "paragraph",
        "text": "Minneriya or Kaudulla safari, depending on seasonal wildlife movement",
        "style": "ListParagraph",
        "list": true,
        "align": ""
      },
      {
        "type": "paragraph",
        "text": "Guided night safari searching for the elusive loris and nocturnal wildlife",
        "style": "ListParagraph",
        "list": true,
        "align": ""
      },
      {
        "type": "paragraph",
        "text": "For photographers, this is a completely different side of Sri Lanka — flash-free or low-impact night photography where appropriate",
        "style": "",
        "list": false,
        "align": ""
      },
      {
        "type": "paragraph",
        "text": "Stay: Day 3 & 4 Sigiriya or Habarana",
        "style": "",
        "list": false,
        "align": ""
      },
      {
        "type": "paragraph",
        "text": "DAYS 5 -SIGIRIYA |GAL OYA",
        "style": "",
        "list": false,
        "align": ""
      },
      {
        "type": "paragraph",
        "text": "Wildlife on the Water",
        "style": "",
        "list": false,
        "align": ""
      },
      {
        "type": "paragraph",
        "text": "Approx. travel time: 3.5–4.5 hours",
        "style": "",
        "list": false,
        "align": ""
      },
      {
        "type": "paragraph",
        "text": "From the dry-zone forests, travel east towards one of Sri Lanka's most beautiful and lesser-known wildernesses.",
        "style": "",
        "list": false,
        "align": ""
      },
      {
        "type": "paragraph",
        "text": "Gal Oya National Park (Seasonal) is where the photography experience becomes truly different.",
        "style": "",
        "list": false,
        "align": ""
      },
      {
        "type": "paragraph",
        "text": "Instead of following wildlife from a jeep, take to the water.",
        "style": "",
        "list": false,
        "align": ""
      },
      {
        "type": "paragraph",
        "text": "Hidden in Sri Lanka’s eastern wilderness, Gal Oya is a remarkable destination where untouched forests, rolling hills and tranquil waters create an extraordinary wildlife escape. At the heart of the experience lies Senanayake Samudra, a vast reservoir dotted with forested islands, offering a unique opportunity to explore the wilderness on a scenic boat safari. Visitors may witness wild elephants swimming between islands, spot diverse birdlife and discover the rich biodiversity of Gal Oya National Park. The surrounding region also offers opportunities to learn about the traditions of Sri Lanka’s Indigenous Vedda community through respectful, locally guided encounters. With its secluded landscapes and rare wildlife experiences, Gal Oya is a wonderful choice for nature lovers seeking a quieter, more intimate side of Sri Lanka.",
        "style": "",
        "list": false,
        "align": ""
      },
      {
        "type": "paragraph",
        "text": "Things to do",
        "style": "",
        "list": false,
        "align": ""
      },
      {
        "type": "paragraph",
        "text": "Dawn boat safari on Senanayake Samudraya",
        "style": "",
        "list": true,
        "align": ""
      },
      {
        "type": "paragraph",
        "text": "Look for Elephants along the shoreline",
        "style": "",
        "list": true,
        "align": ""
      },
      {
        "type": "paragraph",
        "text": "Trek to Monkey Mountain or Iginiyagala View Point",
        "style": "",
        "list": true,
        "align": ""
      },
      {
        "type": "paragraph",
        "text": "Jungle drives through Gal Oya",
        "style": "",
        "list": true,
        "align": ""
      },
      {
        "type": "paragraph",
        "text": "Jungle walk with Veddah",
        "style": "",
        "list": true,
        "align": ""
      },
      {
        "type": "paragraph",
        "text": "Stay: Day 5 & 6 Gal Oya",
        "style": "",
        "list": false,
        "align": ""
      },
      {
        "type": "paragraph",
        "text": "DAYS 7 - GALOYA|YALA",
        "style": "",
        "list": false,
        "align": ""
      },
      {
        "type": "paragraph",
        "text": "Into Leopard Country",
        "style": "",
        "list": false,
        "align": ""
      },
      {
        "type": "paragraph",
        "text": "Approx. travel time: 4–5 hours",
        "style": "",
        "list": false,
        "align": ""
      },
      {
        "type": "paragraph",
        "text": "The journey now reaches one of Sri Lanka's most celebrated wildlife destinations.",
        "style": "",
        "list": false,
        "align": ""
      },
      {
        "type": "paragraph",
        "text": "Yala is where patience can be rewarded with one of the world's most exciting wildlife photography subjects — the Sri Lankan leopard.",
        "style": "",
        "list": false,
        "align": ""
      },
      {
        "type": "paragraph",
        "text": "Yala is a captivating wilderness destination where untamed nature and unforgettable wildlife encounters take centre stage. Home to one of the world’s highest densities of leopards, Yala National Park offers thrilling safari experiences through a diverse landscape of open grasslands, dense scrub forests, rocky outcrops and tranquil lagoons. Along the way, visitors may encounter majestic elephants, sloth bears, crocodiles and an extraordinary variety of birdlife in their natural habitat. Beyond the excitement of the safari, Yala’s rugged landscapes and peaceful surroundings create a remarkable connection with nature, making it an essential stop for wildlife enthusiasts and adventurous travellers exploring Sri Lanka.",
        "style": "",
        "list": false,
        "align": ""
      },
      {
        "type": "paragraph",
        "text": "Things to do",
        "style": "",
        "list": false,
        "align": ""
      },
      {
        "type": "paragraph",
        "text": "Early-morning safari",
        "style": "",
        "list": true,
        "align": ""
      },
      {
        "type": "paragraph",
        "text": "Search for the elusive Sri Lankan leopard",
        "style": "",
        "list": true,
        "align": ""
      },
      {
        "type": "paragraph",
        "text": "Lagoons and dramatic rock landscapes",
        "style": "",
        "list": true,
        "align": ""
      },
      {
        "type": "paragraph",
        "text": "📸 Photographer's focus",
        "style": "",
        "list": false,
        "align": ""
      },
      {
        "type": "paragraph",
        "text": "Yala is not simply about finding a leopard.",
        "style": "",
        "list": false,
        "align": ""
      },
      {
        "type": "paragraph",
        "text": "It is about waiting for the right moment:",
        "style": "",
        "list": false,
        "align": ""
      },
      {
        "type": "paragraph",
        "text": "a leopard emerging from the forest, an elephant crossing golden grass, a bird taking flight over a lagoon, or the last light falling across an ancient rock.",
        "style": "",
        "list": false,
        "align": ""
      },
      {
        "type": "paragraph",
        "text": "Stay: Day 7 & 8  Yala",
        "style": "",
        "list": false,
        "align": ""
      },
      {
        "type": "paragraph",
        "text": "DAYS 9–10 YALA|SINHARAJA",
        "style": "",
        "list": false,
        "align": ""
      },
      {
        "type": "paragraph",
        "text": "Into the Emerald Rainforest",
        "style": "",
        "list": false,
        "align": ""
      },
      {
        "type": "paragraph",
        "text": "Approx. travel time: 3–4 hours",
        "style": "",
        "list": false,
        "align": ""
      },
      {
        "type": "paragraph",
        "text": "Leave the open landscapes of Yala behind and enter an entirely different world.",
        "style": "",
        "list": false,
        "align": ""
      },
      {
        "type": "paragraph",
        "text": "The ancient Sinharaja Rainforest is a photographer's paradise for those who enjoy small subjects, endemic birds, atmospheric landscapes and the mysterious character of tropical rainforest.",
        "style": "",
        "list": false,
        "align": ""
      },
      {
        "type": "paragraph",
        "text": "Step into the enchanting wilderness of Sinharaja, Sri Lanka’s last major tract of tropical lowland rainforest and a UNESCO World Heritage Site celebrated for its extraordinary biodiversity. This lush green sanctuary is alive with towering trees, tangled vines, cascading streams and the calls of exotic birds, offering a remarkable glimpse into one of the island’s most treasured natural ecosystems. Visitors can embark on guided rainforest treks, encounter colourful endemic bird species and discover fascinating wildlife, including reptiles, amphibians and rare plant life found nowhere else in the world. With its pristine forest trails, rich ecological heritage and immersive nature experiences, Sinharaja is an exceptional destination for wildlife enthusiasts, birdwatchers and adventurous travellers seeking to connect with Sri Lanka’s untamed natural beauty.",
        "style": "",
        "list": false,
        "align": ""
      },
      {
        "type": "paragraph",
        "text": "Things to do",
        "style": "",
        "list": false,
        "align": ""
      },
      {
        "type": "paragraph",
        "text": "Guided rainforest trekking",
        "style": "",
        "list": true,
        "align": ""
      },
      {
        "type": "paragraph",
        "text": "Search for Sri Lankan endemic birds",
        "style": "",
        "list": true,
        "align": ""
      },
      {
        "type": "paragraph",
        "text": "Discover colorful butterflies and dragonflies",
        "style": "",
        "list": true,
        "align": ""
      },
      {
        "type": "paragraph",
        "text": "Spot frogs, reptiles and rainforest creatures",
        "style": "",
        "list": true,
        "align": ""
      },
      {
        "type": "paragraph",
        "text": "Explore hidden streams, waterfalls Giant trees and rainforest details",
        "style": "",
        "list": true,
        "align": ""
      },
      {
        "type": "paragraph",
        "text": "Discover the sounds and scents of the rainforest",
        "style": "",
        "list": true,
        "align": ""
      },
      {
        "type": "paragraph",
        "text": "Slow down and experience the forest on foot",
        "style": "",
        "list": true,
        "align": ""
      },
      {
        "type": "paragraph",
        "text": "Stay: Day 9 & 10 Sinharaja",
        "style": "",
        "list": false,
        "align": ""
      },
      {
        "type": "paragraph",
        "text": "DAYS 11 -SINHARAJA|GALLE",
        "style": "",
        "list": false,
        "align": ""
      },
      {
        "type": "paragraph",
        "text": "From Wild to the Coastal lines",
        "style": "",
        "list": false,
        "align": ""
      },
      {
        "type": "paragraph",
        "text": "Approx. travel time: 2–3 hours.",
        "style": "",
        "list": false,
        "align": ""
      },
      {
        "type": "paragraph",
        "text": "After days of wildlife, forests and early mornings, the journey gradually turns towards the sea. Galle offers a beautiful change of pace-history, coastal life, warm sunsets and the rhythm of the Indian Ocean.",
        "style": "",
        "list": false,
        "align": ""
      },
      {
        "type": "paragraph",
        "text": "Arrive on Sri Lanka's southern coast and settle into the relaxed atmosphere of Galle.",
        "style": "",
        "list": false,
        "align": ""
      },
      {
        "type": "paragraph",
        "text": "The focus now shifts from wildlife to coastal life, architecture, people and light.",
        "style": "",
        "list": false,
        "align": ""
      },
      {
        "type": "paragraph",
        "text": "Galle is a charming coastal destination where centuries of history meet the relaxed elegance of seaside living. At its heart lies the UNESCO-listed Galle Fort, a beautifully preserved historic quarter of cobblestone streets, colonial-era architecture, old churches and charming Dutch-style buildings. Visitors can wander through boutique shops, art galleries and atmospheric cafés, stroll along the fort’s ocean-facing ramparts and enjoy spectacular sunset views over the Indian Ocean. With its rich maritime heritage, vibrant local culture and laid-back coastal charm, Galle offers a memorable blend of history, discovery and seaside romance",
        "style": "",
        "list": false,
        "align": ""
      },
      {
        "type": "paragraph",
        "text": "Things to do",
        "style": "",
        "list": false,
        "align": ""
      },
      {
        "type": "paragraph",
        "text": "Wander through the historic Galle Fort",
        "style": "",
        "list": true,
        "align": ""
      },
      {
        "type": "paragraph",
        "text": "Colonial architecture and details",
        "style": "",
        "list": true,
        "align": ""
      },
      {
        "type": "paragraph",
        "text": "Discover local cafes and boutiques",
        "style": "",
        "list": true,
        "align": ""
      },
      {
        "type": "paragraph",
        "text": "Walk along the southern coastlines",
        "style": "",
        "list": true,
        "align": ""
      },
      {
        "type": "paragraph",
        "text": "Sunset photography",
        "style": "",
        "list": true,
        "align": ""
      },
      {
        "type": "paragraph",
        "text": "These two nights are intentionally slower.",
        "style": "",
        "list": false,
        "align": ""
      },
      {
        "type": "paragraph",
        "text": "Enjoy the beach, swim, read a book, enjoy a long lunch or simply listen to the Indian Ocean.",
        "style": "",
        "list": false,
        "align": ""
      },
      {
        "type": "paragraph",
        "text": "Stay: Day 11 & 12 Galle",
        "style": "",
        "list": false,
        "align": ""
      },
      {
        "type": "paragraph",
        "text": "DAY 13 -GALLE|BENTOTA",
        "style": "",
        "list": false,
        "align": ""
      },
      {
        "type": "paragraph",
        "text": "A Free Day by the Ocean",
        "style": "",
        "list": false,
        "align": ""
      },
      {
        "type": "paragraph",
        "text": "Approx. travel time: 1–2 hours",
        "style": "",
        "list": false,
        "align": ""
      },
      {
        "type": "paragraph",
        "text": "A completely relaxed final day.",
        "style": "",
        "list": false,
        "align": ""
      },
      {
        "type": "paragraph",
        "text": "Wake without an alarm, enjoy breakfast and spend the day at your own pace.",
        "style": "",
        "list": false,
        "align": ""
      },
      {
        "type": "paragraph",
        "text": "Bentota is a tropical coastal retreat renowned for its golden sandy beaches, swaying coconut palms and inviting Indian Ocean waters. Offering the perfect balance of relaxation and adventure, this popular beach destination is ideal for sun-soaked days, refreshing swims and exciting water sports. The scenic Bentota River adds another dimension to the experience, with boat safaris through mangrove-lined waterways revealing fascinating birdlife and lush natural surroundings. From indulgent beachfront resorts and rejuvenating Ayurvedic wellness experiences to leisurely river cruises and beautiful coastal sunsets, Bentota captures the essence of a tropical Sri Lankan escape.",
        "style": "",
        "list": false,
        "align": ""
      },
      {
        "type": "paragraph",
        "text": "Things to do",
        "style": "",
        "list": false,
        "align": ""
      },
      {
        "type": "paragraph",
        "text": "Beach morning",
        "style": "",
        "list": true,
        "align": ""
      },
      {
        "type": "paragraph",
        "text": "Spa / wellness treatment",
        "style": "",
        "list": true,
        "align": ""
      },
      {
        "type": "paragraph",
        "text": "Sunset by the ocean",
        "style": "",
        "list": true,
        "align": ""
      },
      {
        "type": "paragraph",
        "text": "Stay: Bentota",
        "style": "",
        "list": false,
        "align": ""
      },
      {
        "type": "paragraph",
        "text": "DAY 14 BENTOTA | AIRPORT",
        "style": "",
        "list": false,
        "align": ""
      },
      {
        "type": "paragraph",
        "text": "Until We Meet Again",
        "style": "",
        "list": false,
        "align": ""
      },
      {
        "type": "paragraph",
        "text": "Approx. travel time: 2.5–3.5 hours",
        "style": "",
        "list": false,
        "align": ""
      },
      {
        "type": "paragraph",
        "text": "Enjoy a final breakfast overlooking the coast before your journey to the airport.",
        "style": "",
        "list": false,
        "align": ""
      },
      {
        "type": "paragraph",
        "text": "As Sri Lanka disappears behind you, you leave not only with photographs, but with memories of leopards in the wild, elephants beside ancient lakes, birds in the rainforest and sunsets over the Indian Ocean.",
        "style": "",
        "list": false,
        "align": ""
      },
      {
        "type": "paragraph",
        "text": "THE JOURNEY ENDS",
        "style": "",
        "list": false,
        "align": ""
      }
    ]
  },
  {
    "id": "unesco-heritage-journey",
    "name": "UNESCO Heritage Journey",
    "sourceFile": "UNESCO Heritage Journey.docx",
    "title": "UNESCO Heritage Journey - 8 Days|7 Nights",
    "image": "/2408852f-e87c-4499-a3f7-22b850828253.jpg",
    "blocks": [
      {
        "type": "paragraph",
        "text": "UNESCO Heritage Journey - 8 Days|7 Nights",
        "style": "",
        "list": false,
        "align": "center"
      },
      {
        "type": "paragraph",
        "text": "Discover Sri Lanka’s timeless treasures on an unforgettable journey through ancient kingdoms, sacred temples, colonial fortresses, and breathtaking natural wonders.",
        "style": "",
        "list": false,
        "align": ""
      },
      {
        "type": "paragraph",
        "text": "Step into a land where centuries of history, spirituality, and natural beauty come together through the extraordinary legacy of Sri Lanka’s UNESCO World Heritage Sites.",
        "style": "",
        "list": false,
        "align": ""
      },
      {
        "type": "paragraph",
        "text": "From ancient kingdoms and sacred temples to colonial fortresses and lush tropical rainforests, this journey unveils the island’s remarkable cultural and natural treasures, recognized for their outstanding universal value. Designed for culture enthusiasts, history lovers, and nature seekers, this inspiring experience offers a captivating blend of UNESCO-listed archaeological wonders, spiritual traditions, spectacular landscapes, authentic Sri Lankan cuisine, and warm local hospitality.",
        "style": "",
        "list": false,
        "align": ""
      },
      {
        "type": "paragraph",
        "text": "A gentle reminder: When visiting temples and sacred sites, please dress respectfully by covering your shoulders and knees and follow local customs to honour the spiritual significance of these special places.",
        "style": "",
        "list": false,
        "align": ""
      },
      {
        "type": "paragraph",
        "text": "DAY 01 – WELCOME TO SRI LANKA | SIGIRIYA",
        "style": "",
        "list": false,
        "align": ""
      },
      {
        "type": "paragraph",
        "text": "Journey into the Cultural Heartland",
        "style": "",
        "list": false,
        "align": ""
      },
      {
        "type": "paragraph",
        "text": "Approx. travel time: 3.5–4.5 hours",
        "style": "",
        "list": false,
        "align": ""
      },
      {
        "type": "paragraph",
        "text": "Your Sri Lankan adventure begins with a warm welcome at Bandaranaike International Airport, where you will meet your representative from Magical Paradise. From here, travel towards Sigiriya, the heart of Sri Lanka’s renowned Cultural Triangle, passing through scenic countryside, charming villages, and lush tropical landscapes.",
        "style": "",
        "list": false,
        "align": ""
      },
      {
        "type": "paragraph",
        "text": "As you leave the bustling  cities behind, prepare to discover a land rich in ancient legends, remarkable architecture, and centuries-old traditions. Upon arrival, settle into your hotel and enjoy the peaceful surroundings of Sri Lanka’s cultural heartland.",
        "style": "",
        "list": false,
        "align": ""
      },
      {
        "type": "paragraph",
        "text": "Things to Do",
        "style": "",
        "list": false,
        "align": ""
      },
      {
        "type": "paragraph",
        "text": "Scenic drive through Sri Lanka’s countryside.",
        "style": "",
        "list": true,
        "align": ""
      },
      {
        "type": "paragraph",
        "text": "Enjoy the changing landscapes and traditional village scenery.",
        "style": "",
        "list": true,
        "align": ""
      },
      {
        "type": "paragraph",
        "text": "Relax at your hotel and prepare for the cultural discoveries ahead.",
        "style": "",
        "list": true,
        "align": ""
      },
      {
        "type": "paragraph",
        "text": "Stay – Sigiriya",
        "style": "",
        "list": false,
        "align": ""
      },
      {
        "type": "paragraph",
        "text": "Enjoy a relaxing overnight stay surrounded by tropical greenery and the tranquil atmosphere of Sri Lanka’s ancient cultural region.",
        "style": "",
        "list": false,
        "align": ""
      },
      {
        "type": "paragraph",
        "text": "DAY 02 – SIGIRIYA  & DAMBULLA",
        "style": "",
        "list": false,
        "align": ""
      },
      {
        "type": "paragraph",
        "text": "The Royal Fortress and Sacred Caves",
        "style": "",
        "list": false,
        "align": ""
      },
      {
        "type": "paragraph",
        "text": "Begin your day by exploring the magnificent Sigiriya Rock Fortress, one of Sri Lanka’s most celebrated UNESCO World Heritage Sites. Rising dramatically above the surrounding plains, this extraordinary ancient citadel was transformed into a royal residence in the 5th century. Discover its remarkable frescoes, sophisticated water gardens, impressive stone architecture, and breathtaking panoramic views from the summit.",
        "style": "",
        "list": false,
        "align": ""
      },
      {
        "type": "paragraph",
        "text": "Continue to the spectacular Dambulla Royal Cave Temple, another UNESCO World Heritage Site and one of the island’s most treasured Buddhist sanctuaries. Step inside its ancient caves to discover magnificent murals, beautifully preserved Buddha statues, and an atmosphere of deep spiritual significance that reflects Sri Lanka’s enduring Buddhist heritage.",
        "style": "",
        "list": false,
        "align": ""
      },
      {
        "type": "paragraph",
        "text": "Things to Do",
        "style": "",
        "list": false,
        "align": ""
      },
      {
        "type": "paragraph",
        "text": "Climb the iconic Sigiriya Rock Fortress.",
        "style": "",
        "list": true,
        "align": ""
      },
      {
        "type": "paragraph",
        "text": "Explore the ancient water gardens and archaeological remains.",
        "style": "",
        "list": true,
        "align": ""
      },
      {
        "type": "paragraph",
        "text": "Admire the historic frescoes and panoramic views.",
        "style": "",
        "list": true,
        "align": ""
      },
      {
        "type": "paragraph",
        "text": "Visit the Dambulla Royal Cave Temple.",
        "style": "",
        "list": true,
        "align": ""
      },
      {
        "type": "paragraph",
        "text": "Discover centuries-old Buddhist murals and sacred statues.",
        "style": "",
        "list": true,
        "align": ""
      },
      {
        "type": "paragraph",
        "text": "Stay – Sigiriya or Dambulla",
        "style": "",
        "list": false,
        "align": ""
      },
      {
        "type": "paragraph",
        "text": "Return to your hotel after a memorable day exploring two of Sri Lanka’s most extraordinary cultural landmarks.",
        "style": "",
        "list": false,
        "align": ""
      },
      {
        "type": "paragraph",
        "text": "DAY 03 – POLONNARUWA  & MINNERIYA \\ KAUDULLA",
        "style": "",
        "list": false,
        "align": ""
      },
      {
        "type": "paragraph",
        "text": "Ancient Kingdoms and Gentle Giants",
        "style": "",
        "list": false,
        "align": ""
      },
      {
        "type": "paragraph",
        "text": "Travel back in time as you explore the ancient city of Polonnaruwa, once a flourishing medieval capital of Sri Lanka. Wander among the impressive remains of royal palaces, ancient monasteries, intricately carved temples, and remarkable Buddha statues that reveal the architectural brilliance of a bygone era.",
        "style": "",
        "list": false,
        "align": ""
      },
      {
        "type": "paragraph",
        "text": "For a more immersive experience, explore the archaeological site by bicycle, allowing you to discover its historic monuments and peaceful surroundings at your own pace.",
        "style": "",
        "list": false,
        "align": ""
      },
      {
        "type": "paragraph",
        "text": "Things to Do",
        "style": "",
        "list": false,
        "align": ""
      },
      {
        "type": "paragraph",
        "text": "Explore the UNESCO-listed ancient city of Polonnaruwa.",
        "style": "",
        "list": true,
        "align": ""
      },
      {
        "type": "paragraph",
        "text": "Discover royal palaces, monasteries, and historic temples.",
        "style": "",
        "list": true,
        "align": ""
      },
      {
        "type": "paragraph",
        "text": "Admire the magnificent Gal Vihara Buddha statues.",
        "style": "",
        "list": true,
        "align": ""
      },
      {
        "type": "paragraph",
        "text": "Enjoy an optional bicycle ride through the ancient city.",
        "style": "",
        "list": true,
        "align": ""
      },
      {
        "type": "paragraph",
        "text": "Experience an afternoon jeep safari in Minneriya or Kaudulla National Park.",
        "style": "",
        "list": true,
        "align": ""
      },
      {
        "type": "paragraph",
        "text": "Observe wild elephants in their natural habitat.",
        "style": "",
        "list": true,
        "align": ""
      },
      {
        "type": "paragraph",
        "text": "Stay – Sigiriya",
        "style": "",
        "list": false,
        "align": ""
      },
      {
        "type": "paragraph",
        "text": "Return to your hotel for a peaceful evening after a fascinating day combining ancient history with an unforgettable wildlife experience.",
        "style": "",
        "list": false,
        "align": ""
      },
      {
        "type": "paragraph",
        "text": "DAY 04 – SIGIRIYA | ANURADHAPURA",
        "style": "",
        "list": false,
        "align": ""
      },
      {
        "type": "paragraph",
        "text": "The Sacred Beginnings of an Ancient Kingdom",
        "style": "",
        "list": false,
        "align": ""
      },
      {
        "type": "paragraph",
        "text": "Approx. travel time: 3-4 hours",
        "style": "",
        "list": false,
        "align": ""
      },
      {
        "type": "paragraph",
        "text": "Journey to Anuradhapura, Sri Lanka’s first great ancient capital and one of the most important centres of early Buddhist civilisation. This remarkable UNESCO World Heritage Site is home to magnificent dagobas, ancient monasteries, sacred monuments, and archaeological remains that reflect the grandeur of a kingdom that flourished for centuries.",
        "style": "",
        "list": false,
        "align": ""
      },
      {
        "type": "paragraph",
        "text": "Visit the sacred Sri Maha Bodhi Tree, one of the most revered pilgrimage sites in the country. Grown from a cutting of the historic Bodhi Tree in India under which the Buddha attained enlightenment, it is traditionally dated to 288 BC and is recognized as the oldest historically documented human-planted tree still living.",
        "style": "",
        "list": false,
        "align": ""
      },
      {
        "type": "paragraph",
        "text": "Explore the sacred surroundings and discover the remarkable spiritual traditions that continue to make Anuradhapura an important destination for pilgrims and visitors from around the world.",
        "style": "",
        "list": false,
        "align": ""
      },
      {
        "type": "paragraph",
        "text": "Things to Do",
        "style": "",
        "list": false,
        "align": ""
      },
      {
        "type": "paragraph",
        "text": "Explore the ancient city of Anuradhapura.",
        "style": "",
        "list": true,
        "align": ""
      },
      {
        "type": "paragraph",
        "text": "Visit the sacred Sri Maha Bodhi Tree.",
        "style": "",
        "list": true,
        "align": ""
      },
      {
        "type": "paragraph",
        "text": "Admire the magnificent Ruwanwelisaya and other historic dagobas.",
        "style": "",
        "list": true,
        "align": ""
      },
      {
        "type": "paragraph",
        "text": "Discover ancient monasteries, stupas, and archaeological monuments.",
        "style": "",
        "list": true,
        "align": ""
      },
      {
        "type": "paragraph",
        "text": "Experience the peaceful atmosphere of Sri Lanka’s historic Buddhist capital.",
        "style": "",
        "list": true,
        "align": ""
      },
      {
        "type": "paragraph",
        "text": "Stay – Anuradhapura",
        "style": "",
        "list": false,
        "align": ""
      },
      {
        "type": "paragraph",
        "text": "Enjoy an overnight stay in Anuradhapura, surrounded by the enduring history and spiritual atmosphere of one of Sri Lanka’s most sacred cities.",
        "style": "",
        "list": false,
        "align": ""
      },
      {
        "type": "paragraph",
        "text": "DAY 05 – ANURADHAPURA | KANDY",
        "style": "",
        "list": false,
        "align": ""
      },
      {
        "type": "paragraph",
        "text": "Sacred Traditions and the Cultural Capital",
        "style": "",
        "list": false,
        "align": ""
      },
      {
        "type": "paragraph",
        "text": "Approx. travel time: 3–3.5 hours",
        "style": "",
        "list": false,
        "align": ""
      },
      {
        "type": "paragraph",
        "text": "Leave the ancient northern plains behind and travel towards the  Sacred City of Kandy, a UNESCO World Heritage Centre site , a picturesque city nestled among the misty hills of Sri Lanka.",
        "style": "",
        "list": false,
        "align": ""
      },
      {
        "type": "paragraph",
        "text": "Upon arrival, visit the revered Temple of the Sacred Tooth Relic, one of the country’s most important Buddhist pilgrimage sites. Believed to house a relic of the Buddha’s tooth, the temple has played a significant role in Sri Lanka’s religious and royal history for centuries.",
        "style": "",
        "list": false,
        "align": ""
      },
      {
        "type": "paragraph",
        "text": "Continue with a leisurely stroll around Kandy Lake, enjoying the peaceful scenery and charming atmosphere of this historic city. In the evening, experience a traditional Sri Lankan cultural performance featuring vibrant costumes, rhythmic drumming, and captivating dance traditions.",
        "style": "",
        "list": false,
        "align": ""
      },
      {
        "type": "paragraph",
        "text": "Things to Do",
        "style": "",
        "list": false,
        "align": ""
      },
      {
        "type": "paragraph",
        "text": "Enjoy a scenic journey through Sri Lanka’s countryside.",
        "style": "",
        "list": true,
        "align": ""
      },
      {
        "type": "paragraph",
        "text": "Visit the Temple of the Sacred Tooth Relic.",
        "style": "",
        "list": true,
        "align": ""
      },
      {
        "type": "paragraph",
        "text": "Explore the surroundings of historic Kandy.",
        "style": "",
        "list": true,
        "align": ""
      },
      {
        "type": "paragraph",
        "text": "Take a relaxing walk around Kandy Lake.",
        "style": "",
        "list": true,
        "align": ""
      },
      {
        "type": "paragraph",
        "text": "Experience a traditional Sri Lankan cultural dance performance.",
        "style": "",
        "list": true,
        "align": ""
      },
      {
        "type": "paragraph",
        "text": "Stay – Kandy",
        "style": "",
        "list": false,
        "align": ""
      },
      {
        "type": "paragraph",
        "text": "Relax at your hotel in the hills of Kandy, where cool breezes, beautiful scenery, and warm hospitality create a memorable cultural retreat.",
        "style": "",
        "list": false,
        "align": ""
      },
      {
        "type": "paragraph",
        "text": "DAY 06 – KANDY | SINHARAJA RAINFOREST",
        "style": "",
        "list": false,
        "align": ""
      },
      {
        "type": "paragraph",
        "text": "From Ancient Civilisation to a Living Wilderness",
        "style": "",
        "list": false,
        "align": ""
      },
      {
        "type": "paragraph",
        "text": "Approx. travel time: 4–5 hours",
        "style": "",
        "list": false,
        "align": ""
      },
      {
        "type": "paragraph",
        "text": "Leave behind the historic kingdoms and sacred monuments as you journey towards the enchanting Sinharaja Rainforest, a UNESCO World Heritage Site and one of Sri Lanka’s most important natural treasures.",
        "style": "",
        "list": false,
        "align": ""
      },
      {
        "type": "paragraph",
        "text": "Unlike the island’s ancient archaeological landmarks, Sinharaja offers an immersive experience in a thriving tropical rainforest, celebrated for its exceptional biodiversity and remarkable collection of endemic species. Accompanied by a knowledgeable local guide, explore the forest trails and discover towering trees, colourful butterflies, fascinating insects, and a variety of birdlife, including Sri Lanka’s endemic species.",
        "style": "",
        "list": false,
        "align": ""
      },
      {
        "type": "paragraph",
        "text": "Listen to the sounds of the forest, breathe in the fresh rainforest air, and experience the extraordinary beauty of one of the island’s most precious natural environments.",
        "style": "",
        "list": false,
        "align": ""
      },
      {
        "type": "paragraph",
        "text": "Things to Do",
        "style": "",
        "list": false,
        "align": ""
      },
      {
        "type": "paragraph",
        "text": "Enjoy a scenic drive towards Sri Lanka’s southern rainforest region.",
        "style": "",
        "list": true,
        "align": ""
      },
      {
        "type": "paragraph",
        "text": "Explore Sinharaja Forest Reserve with a local guide.",
        "style": "",
        "list": true,
        "align": ""
      },
      {
        "type": "paragraph",
        "text": "Discover endemic birds, butterflies, and tropical plant species.",
        "style": "",
        "list": true,
        "align": ""
      },
      {
        "type": "paragraph",
        "text": "Experience a guided rainforest walk.",
        "style": "",
        "list": true,
        "align": ""
      },
      {
        "type": "paragraph",
        "text": "Enjoy the tranquillity and natural beauty of this remarkable ecosystem.",
        "style": "",
        "list": true,
        "align": ""
      },
      {
        "type": "paragraph",
        "text": "Stay – Sinharaja",
        "style": "",
        "list": false,
        "align": ""
      },
      {
        "type": "paragraph",
        "text": "Spend the evening surrounded by lush rainforest and the soothing sounds of nature, offering a refreshing contrast to the cultural discoveries of the previous days.",
        "style": "",
        "list": false,
        "align": ""
      },
      {
        "type": "paragraph",
        "text": "DAY 07 – SINHARAJA | GALLE",
        "style": "",
        "list": false,
        "align": ""
      },
      {
        "type": "paragraph",
        "text": "Colonial Charm Meets the Indian Ocean",
        "style": "",
        "list": false,
        "align": ""
      },
      {
        "type": "paragraph",
        "text": "Approx. travel time: 2–3 hours",
        "style": "",
        "list": false,
        "align": ""
      },
      {
        "type": "paragraph",
        "text": "Wake up to the peaceful sounds of the rainforest before continuing your journey towards Sri Lanka’s beautiful southern coastline and the historic city of Galle.",
        "style": "",
        "list": false,
        "align": ""
      },
      {
        "type": "paragraph",
        "text": "Discover the magnificent Galle Fort, a UNESCO World Heritage Site that reflects centuries of maritime trade and colonial history. Originally established by the Portuguese in the 16th century and later extensively fortified by the Dutch, this remarkable coastal fortress is among the best-preserved examples of European colonial architecture in South and Southeast Asia.",
        "style": "",
        "list": false,
        "align": ""
      },
      {
        "type": "paragraph",
        "text": "Wander through charming cobblestone streets lined with historic buildings, boutique shops, art galleries, cafés, and elegant colonial-era houses. Explore the impressive ramparts overlooking the Indian Ocean and enjoy the unique atmosphere where history and contemporary Sri Lankan life come together.",
        "style": "",
        "list": false,
        "align": ""
      },
      {
        "type": "paragraph",
        "text": "Things to Do",
        "style": "",
        "list": false,
        "align": ""
      },
      {
        "type": "paragraph",
        "text": "Enjoy a scenic drive from Sinharaja to Galle.",
        "style": "",
        "list": true,
        "align": ""
      },
      {
        "type": "paragraph",
        "text": "Explore the historic streets of Galle Fort.",
        "style": "",
        "list": true,
        "align": ""
      },
      {
        "type": "paragraph",
        "text": "Walk along the ancient fort ramparts overlooking the Indian Ocean.",
        "style": "",
        "list": true,
        "align": ""
      },
      {
        "type": "paragraph",
        "text": "Discover colonial architecture, charming cafés, and boutique shops.",
        "style": "",
        "list": true,
        "align": ""
      },
      {
        "type": "paragraph",
        "text": "Visit the historic lighthouse and other landmarks within the fort.",
        "style": "",
        "list": true,
        "align": ""
      },
      {
        "type": "paragraph",
        "text": "Enjoy a beautiful sunset over the southern coastline, weather permitting.",
        "style": "",
        "list": true,
        "align": ""
      },
      {
        "type": "paragraph",
        "text": "Stay – Galle Fort",
        "style": "",
        "list": false,
        "align": ""
      },
      {
        "type": "paragraph",
        "text": "Spend your final evening in the charming surroundings of Galle Fort, where colonial elegance, coastal scenery, and Sri Lankan hospitality provide a memorable conclusion to your heritage journey.",
        "style": "",
        "list": false,
        "align": ""
      },
      {
        "type": "paragraph",
        "text": "DAY 08 – FAREWELL SRI LANKA - GALLE | AIRPORT",
        "style": "",
        "list": false,
        "align": ""
      },
      {
        "type": "paragraph",
        "text": "Memories of a Timeless Island",
        "style": "",
        "list": false,
        "align": ""
      },
      {
        "type": "paragraph",
        "text": "Approx. travel time: 2.5–3.5 hours",
        "style": "",
        "list": false,
        "align": ""
      },
      {
        "type": "paragraph",
        "text": "As your unforgettable UNESCO Heritage Trail comes to an end, enjoy breakfast before travelling to Bandaranaike International Airport for your departure.",
        "style": "",
        "list": false,
        "align": ""
      },
      {
        "type": "paragraph",
        "text": "Reflect on the remarkable experiences of your journey, from climbing the ancient fortress of Sigiriya and exploring sacred Buddhist temples to discovering historic kingdoms, encountering the biodiversity of Sinharaja Rainforest, and wandering through the colonial streets of Galle Fort.",
        "style": "",
        "list": false,
        "align": ""
      },
      {
        "type": "paragraph",
        "text": "Depart Sri Lanka with lasting memories of extraordinary history, spiritual traditions, breathtaking landscapes, authentic cultural encounters, and the warm hospitality that makes this island truly special.",
        "style": "",
        "list": false,
        "align": ""
      },
      {
        "type": "paragraph",
        "text": "Until we meet again, Ayubowan! 🌴",
        "style": "",
        "list": false,
        "align": ""
      }
    ]
  },
  {
    "id": "untouched-north-island-treasures",
    "name": "Untouched North & Island Treasures",
    "sourceFile": "Untouched North & Island Treasures.docx",
    "title": "Untouched North & Island Treasures- 19 Days|18 Nights",
    "image": "/2408852f-e87c-4499-a3f7-22b850828253.jpg",
    "blocks": [
      {
        "type": "paragraph",
        "text": "Untouched North & Island Treasures- 19 Days|18 Nights",
        "style": "",
        "list": false,
        "align": "center"
      },
      {
        "type": "paragraph",
        "text": "One Island, Many Worlds",
        "style": "",
        "list": false,
        "align": ""
      },
      {
        "type": "paragraph",
        "text": "Journey beyond the familiar and uncover a side of Sri Lanka that few travelers truly experience. From ancient kingdoms and UNESCO World Heritage Sites to untouched northern islands, Vibrant Hindu traditions, wildlife safaris, misty mountains and golden southern shores, this carefully crafted itinerary invites you to experience the island through its heart lies the captivating Northern Province, where authentic culture, rich history and warm hospitality create memories unlike anywhere else in Sri Lanka.",
        "style": "",
        "list": false,
        "align": ""
      },
      {
        "type": "paragraph",
        "text": "DAY 01 – WELCOME TO SRI LANKA – NEGOMBO",
        "style": "",
        "list": false,
        "align": ""
      },
      {
        "type": "paragraph",
        "text": "Where your story begins",
        "style": "",
        "list": false,
        "align": ""
      },
      {
        "type": "paragraph",
        "text": "Approx. travel time: 20–40 minutes",
        "style": "",
        "list": false,
        "align": ""
      },
      {
        "type": "paragraph",
        "text": "Your Sri Lankan story begins with a warm welcome at Bandaranaike International Airport (BIA). Meet Your Magical Paradise representative before making the short drive to the charming coastal town of Negombo.",
        "style": "",
        "list": false,
        "align": ""
      },
      {
        "type": "paragraph",
        "text": "Located close to Sri Lanka’s international airport, Negombo is a lively coastal town offering beaches, seafood culture and colonial influences. It serves as both a relaxing introduction and a memorable farewell to Sri Lanka.",
        "style": "",
        "list": false,
        "align": ""
      },
      {
        "type": "paragraph",
        "text": "Relax after your journey.",
        "style": "",
        "list": false,
        "align": ""
      },
      {
        "type": "paragraph",
        "text": "Things to Experience",
        "style": "",
        "list": false,
        "align": ""
      },
      {
        "type": "paragraph",
        "text": "Relax on Negombo Beach",
        "style": "ListParagraph",
        "list": true,
        "align": ""
      },
      {
        "type": "paragraph",
        "text": "Visit the Dutch Canal",
        "style": "ListParagraph",
        "list": true,
        "align": ""
      },
      {
        "type": "paragraph",
        "text": "Explore the local fish market on the following day morning",
        "style": "ListParagraph",
        "list": true,
        "align": ""
      },
      {
        "type": "paragraph",
        "text": "Lagoon Hightea Experience (Sundown hours)",
        "style": "ListParagraph",
        "list": true,
        "align": ""
      },
      {
        "type": "paragraph",
        "text": "Overnight stay - Negombo",
        "style": "",
        "list": false,
        "align": ""
      },
      {
        "type": "paragraph",
        "text": "DAY 02–NEGOMBO|SIGIRIYA",
        "style": "",
        "list": false,
        "align": ""
      },
      {
        "type": "paragraph",
        "text": "Into Sri Lanka’s ancient kingdoms",
        "style": "",
        "list": false,
        "align": ""
      },
      {
        "type": "paragraph",
        "text": "Approx. travel time: 3.5–4.5 hours",
        "style": "",
        "list": false,
        "align": ""
      },
      {
        "type": "paragraph",
        "text": "Travel into the cultural triangle, where ancient kingdoms, royal cities and lush forests tell stories spanning over 2000 years, this region perfectly blends history, wildlife and authentic village life.",
        "style": "",
        "list": false,
        "align": ""
      },
      {
        "type": "paragraph",
        "text": "Sigiriya captivates visitors with its iconic Lion Rock fortress, dramatic scenery and ancient frescoes, while nearby Dambulla is renowned for its impressive cave temple complex, adorned with centuries-old Buddhist murals and statues. Surrounded by lush greenery, rural villages and scenic countryside, these destinations offer a memorable journey through the island’s rich history, spiritual heritage and extraordinary cultural treasures.",
        "style": "",
        "list": false,
        "align": ""
      },
      {
        "type": "paragraph",
        "text": "Things to Experience",
        "style": "",
        "list": false,
        "align": ""
      },
      {
        "type": "paragraph",
        "text": "Climb the magnificent Sigiriya Rock Fortress",
        "style": "ListParagraph",
        "list": true,
        "align": ""
      },
      {
        "type": "paragraph",
        "text": "Discover the Golden Temple in Dambulla",
        "style": "ListParagraph",
        "list": true,
        "align": ""
      },
      {
        "type": "paragraph",
        "text": "Traditional Village Tour",
        "style": "ListParagraph",
        "list": true,
        "align": ""
      },
      {
        "type": "paragraph",
        "text": "Jeep safari in Minneriya or Kaudulla National Park",
        "style": "ListParagraph",
        "list": true,
        "align": ""
      },
      {
        "type": "paragraph",
        "text": "2 Nights stay – Dambulla or Sigiriya",
        "style": "",
        "list": false,
        "align": ""
      },
      {
        "type": "paragraph",
        "text": "DAY 04– SIGIRIYA|JAFFNA",
        "style": "",
        "list": false,
        "align": ""
      },
      {
        "type": "paragraph",
        "text": "The Soul of Northern Sri Lanka",
        "style": "",
        "list": false,
        "align": ""
      },
      {
        "type": "paragraph",
        "text": "Approx. travel time: 4.5–5.5 hours",
        "style": "",
        "list": false,
        "align": ""
      },
      {
        "type": "paragraph",
        "text": "Venture into Sri Lanka’s fascinating North, where colorful Hindu temples, colonial heritage, remote islands and warm local hospitality await. It’s a destination that remains beautifully authentic and wonderfully untouched by mass tourism.",
        "style": "",
        "list": false,
        "align": ""
      },
      {
        "type": "paragraph",
        "text": "Located in the northernmost reaches of Sri Lanka, Jaffna is a captivating destination where rich Tamil heritage, ancient Hindu traditions and distinctive northern landscapes create a truly unique cultural experience. The city is renowned for its colourful Nallur Kandaswamy Temple, historic Jaffna Fort and vibrant local markets, while the surrounding peninsula reveals quiet fishing villages, palm-fringed coastlines and picturesque islands. Visitors can savour authentic Jaffna cuisine, discover centuries-old cultural landmarks and explore the scenic causeways leading to remote coastal communities. With its fascinating history, warm hospitality and strong cultural identity, Jaffna offers an enriching journey into a distinctive side of Sri Lanka.",
        "style": "",
        "list": false,
        "align": ""
      },
      {
        "type": "paragraph",
        "text": "Things to experience",
        "style": "",
        "list": false,
        "align": ""
      },
      {
        "type": "paragraph",
        "text": "Explore the vibrant Jaffna City",
        "style": "ListParagraph",
        "list": true,
        "align": ""
      },
      {
        "type": "paragraph",
        "text": "Visit the sacred Nallur Kandaswamy Temple",
        "style": "ListParagraph",
        "list": true,
        "align": ""
      },
      {
        "type": "paragraph",
        "text": "Walk through the historic Jaffna Fort",
        "style": "ListParagraph",
        "list": true,
        "align": ""
      },
      {
        "type": "paragraph",
        "text": "Relax at Casuarina Beach",
        "style": "ListParagraph",
        "list": true,
        "align": ""
      },
      {
        "type": "paragraph",
        "text": "Take a boat excursion to Delft Island",
        "style": "ListParagraph",
        "list": true,
        "align": ""
      },
      {
        "type": "paragraph",
        "text": "Visit the sacred Nagadeepa Island",
        "style": "ListParagraph",
        "list": true,
        "align": ""
      },
      {
        "type": "paragraph",
        "text": "Discover the Keerimalai Hot Springs",
        "style": "ListParagraph",
        "list": true,
        "align": ""
      },
      {
        "type": "paragraph",
        "text": "Stand at “Point Pedro”, Sri Lanka’s northernmost point",
        "style": "ListParagraph",
        "list": true,
        "align": ""
      },
      {
        "type": "paragraph",
        "text": "Visit historic Dambakola Patuna",
        "style": "ListParagraph",
        "list": true,
        "align": ""
      },
      {
        "type": "paragraph",
        "text": "Experience authentic Jaffna cuisine and colorful local market",
        "style": "ListParagraph",
        "list": true,
        "align": ""
      },
      {
        "type": "paragraph",
        "text": "5 Nights stay - Jaffna",
        "style": "",
        "list": false,
        "align": ""
      },
      {
        "type": "paragraph",
        "text": "DAY 09 – JAFFNA|TRINCOMALEE",
        "style": "",
        "list": false,
        "align": ""
      },
      {
        "type": "paragraph",
        "text": "Sri Lanka’s Eastern Paradise - (JUNE TO SEPTEMBER MONTHS)",
        "style": "",
        "list": false,
        "align": ""
      },
      {
        "type": "paragraph",
        "text": "Approx. travel time: 4–5 hours",
        "style": "",
        "list": false,
        "align": ""
      },
      {
        "type": "paragraph",
        "text": "Leaving the north behind, journey to Sri Lanka’s stunning east coast where turquoise waters, golden breaches and sacred temples create the perfect tropical escape.",
        "style": "",
        "list": false,
        "align": ""
      },
      {
        "type": "paragraph",
        "text": "Situated along Sri Lanka’s picturesque eastern coast, Trincomalee is a captivating seaside destination renowned for its pristine beaches, turquoise waters and magnificent natural harbour. The city’s rich history and spiritual heritage come alive at the iconic Koneswaram Temple, dramatically perched on Swami Rock overlooking the Indian Ocean, while nearby Nilaveli and Uppuveli beaches offer idyllic settings for relaxation and coastal exploration. Visitors can enjoy snorkelling around Pigeon Island, discover vibrant marine life, embark on seasonal whale-watching excursions and explore the historic Fort Frederick. With its blend of cultural treasures, spectacular ocean scenery and tropical tranquillity, Trincomalee is a wonderful escape for beach lovers, nature enthusiasts and cultural explorers.",
        "style": "",
        "list": false,
        "align": ""
      },
      {
        "type": "paragraph",
        "text": "Things to Experience",
        "style": "",
        "list": false,
        "align": ""
      },
      {
        "type": "paragraph",
        "text": "Visit the spectacular Koneswaram Temple",
        "style": "",
        "list": true,
        "align": ""
      },
      {
        "type": "paragraph",
        "text": "Explore Fort Frederick",
        "style": "",
        "list": true,
        "align": ""
      },
      {
        "type": "paragraph",
        "text": "Snorkel around Pigeon Island National Park",
        "style": "",
        "list": true,
        "align": ""
      },
      {
        "type": "paragraph",
        "text": "Whale watching (seasonal)",
        "style": "",
        "list": true,
        "align": ""
      },
      {
        "type": "paragraph",
        "text": "Relax on Nilaveli Beach",
        "style": "",
        "list": true,
        "align": ""
      },
      {
        "type": "paragraph",
        "text": "2 Nights stay – Trincomalee",
        "style": "",
        "list": false,
        "align": ""
      },
      {
        "type": "paragraph",
        "text": "DAY 11– TRINCOMALEE| KANDY",
        "style": "",
        "list": false,
        "align": ""
      },
      {
        "type": "paragraph",
        "text": "The hill capital",
        "style": "",
        "list": false,
        "align": ""
      },
      {
        "type": "paragraph",
        "text": "Approx. travel time: 3–4 hours",
        "style": "",
        "list": false,
        "align": ""
      },
      {
        "type": "paragraph",
        "text": "Travel inland from the sun-kissed shores of Trincomalee towards the cultural heart of Kandy, passing through lush countryside, rural villages and scenic landscapes as you journey into Sri Lanka’s enchanting central highlands.",
        "style": "",
        "list": false,
        "align": ""
      },
      {
        "type": "paragraph",
        "text": "Nestled among mist-covered hills and lush tropical landscapes, Kandy is a captivating destination where Sri Lanka’s rich heritage and spiritual traditions come to life. As the island’s last royal capital, the city is home to the sacred Temple of the Tooth Relic, tranquil Kandy Lake and beautifully preserved cultural landmarks. Visitors can explore vibrant local markets, experience traditional Kandyan dance performances and discover the botanical wonders of nearby Peradeniya. Blending history, culture and natural beauty, Kandy offers an authentic glimpse into the island’s timeless traditions.",
        "style": "",
        "list": false,
        "align": ""
      },
      {
        "type": "paragraph",
        "text": "Things to Experience",
        "style": "",
        "list": false,
        "align": ""
      },
      {
        "type": "paragraph",
        "text": "Visit the Temple of the Scared Tooth Relic",
        "style": "",
        "list": true,
        "align": ""
      },
      {
        "type": "paragraph",
        "text": "Wander through the Royal Botanical Gardens",
        "style": "",
        "list": true,
        "align": ""
      },
      {
        "type": "paragraph",
        "text": "Enjoy a traditional Cultural Show",
        "style": "",
        "list": true,
        "align": ""
      },
      {
        "type": "paragraph",
        "text": "Gem workshop and discover Sri Lanka’s famous gemstones",
        "style": "",
        "list": true,
        "align": ""
      },
      {
        "type": "paragraph",
        "text": "2 Nights stay - Kandy",
        "style": "",
        "list": false,
        "align": ""
      },
      {
        "type": "paragraph",
        "text": "DAY 13– INTO THE HILL COUNTRY - KANDY|ELLA",
        "style": "",
        "list": false,
        "align": ""
      },
      {
        "type": "paragraph",
        "text": "Into the hill country",
        "style": "",
        "list": false,
        "align": ""
      },
      {
        "type": "paragraph",
        "text": "Approx. travel time: 4–5 hours",
        "style": "",
        "list": false,
        "align": ""
      },
      {
        "type": "paragraph",
        "text": "Breathe in the cool mountain air as you arrive in Ella, where rolling tea plantations, waterfalls and scenic viewpoints make every moment unforgettable.",
        "style": "",
        "list": false,
        "align": ""
      },
      {
        "type": "paragraph",
        "text": "Tucked away in Sri Lanka’s enchanting hill country, Ella is a picturesque mountain retreat celebrated for its breathtaking panoramas, lush tea plantations and laid-back village charm. Scenic hiking trails lead to iconic viewpoints such as Little Adam’s Peak and Ella Rock, while the famous Nine Arch Bridge showcases remarkable railway architecture amid emerald-green hills. Visitors can also discover cascading waterfalls, explore local cafés and enjoy the unforgettable experience of a scenic train journey through the misty highlands. With its blend of adventure, natural beauty and relaxed atmosphere, Ella is a favourite escape for nature lovers and explorers alike.",
        "style": "",
        "list": false,
        "align": ""
      },
      {
        "type": "paragraph",
        "text": "Things to Experience",
        "style": "",
        "list": false,
        "align": ""
      },
      {
        "type": "paragraph",
        "text": "Walk across the iconic Nine Arch Bridge",
        "style": "",
        "list": true,
        "align": ""
      },
      {
        "type": "paragraph",
        "text": "Hike Little Adam's Peak",
        "style": "",
        "list": true,
        "align": ""
      },
      {
        "type": "paragraph",
        "text": "Enjoy one of the world’s most Scenic train journeys",
        "style": "",
        "list": true,
        "align": ""
      },
      {
        "type": "paragraph",
        "text": "Visit Ravana Falls",
        "style": "",
        "list": true,
        "align": ""
      },
      {
        "type": "paragraph",
        "text": "Diyaluma Falls Hike",
        "style": "",
        "list": true,
        "align": ""
      },
      {
        "type": "paragraph",
        "text": "2 Nights stay – Ella",
        "style": "",
        "list": false,
        "align": ""
      },
      {
        "type": "paragraph",
        "text": "DAY 15  – ELLA|YALA",
        "style": "",
        "list": false,
        "align": ""
      },
      {
        "type": "paragraph",
        "text": "Into the wilderness",
        "style": "",
        "list": false,
        "align": ""
      },
      {
        "type": "paragraph",
        "text": "Approx. travel time: 2.5 to 3 Hours",
        "style": "",
        "list": false,
        "align": ""
      },
      {
        "type": "paragraph",
        "text": "Experience the thrill of Ceylon’s wilderness before unwinding beside the island’s coastline.",
        "style": "",
        "list": false,
        "align": ""
      },
      {
        "type": "paragraph",
        "text": "Yala is a captivating wilderness destination where untamed nature and unforgettable wildlife encounters take centre stage. Home to one of the world’s highest densities of leopards, Yala National Park offers thrilling safari experiences through a diverse landscape of open grasslands, dense scrub forests, rocky outcrops and tranquil lagoons. Along the way, visitors may encounter majestic elephants, sloth bears, crocodiles and an extraordinary variety of birdlife in their natural habitat. Beyond the excitement of the safari, Yala’s rugged landscapes and peaceful surroundings create a remarkable connection with nature, making it an essential stop for wildlife enthusiasts and adventurous travellers exploring Sri Lanka.",
        "style": "",
        "list": false,
        "align": ""
      },
      {
        "type": "paragraph",
        "text": "Things to Experience",
        "style": "",
        "list": false,
        "align": ""
      },
      {
        "type": "paragraph",
        "text": "Jeep safari through Yala national Park",
        "style": "ListParagraph",
        "list": true,
        "align": ""
      },
      {
        "type": "paragraph",
        "text": "Overnight stay – Yala",
        "style": "",
        "list": false,
        "align": ""
      },
      {
        "type": "paragraph",
        "text": "DAY 16–YALA|WELIGAMA",
        "style": "",
        "list": false,
        "align": ""
      },
      {
        "type": "paragraph",
        "text": "Hello South",
        "style": "",
        "list": false,
        "align": ""
      },
      {
        "type": "paragraph",
        "text": "Approx. travel time: 2.5–3.5 hours",
        "style": "",
        "list": false,
        "align": ""
      },
      {
        "type": "paragraph",
        "text": "Unwind and relax by the beach and enjoy the blue waters of South Sri Lanka.",
        "style": "",
        "list": false,
        "align": ""
      },
      {
        "type": "paragraph",
        "text": "Weligama is a vibrant southern coastal town renowned for surfing, golden beaches, and laid-back coastal living. Combining adventure and tropical charm, it has become a favourite destination among surfers and beach lovers. Its sweeping bay, gentle waves, and welcoming seaside atmosphere make it an ideal spot for both beginners eager to try surfing and seasoned wave riders. Beyond the beach, discover charming cafés, fresh seafood, colourful fishing boats, and the unique sight of traditional stilt fishermen along the coast. With its relaxed rhythm, beautiful ocean views, and captivating blend of local culture and modern beach life, Weligama invites you to slow down and embrace the easygoing spirit of Sri Lanka’s southern shores",
        "style": "",
        "list": false,
        "align": ""
      },
      {
        "type": "paragraph",
        "text": "Things to Experience",
        "style": "",
        "list": false,
        "align": ""
      },
      {
        "type": "paragraph",
        "text": "Relax on the beach of Mirissa or Weligama",
        "style": "ListParagraph",
        "list": true,
        "align": ""
      },
      {
        "type": "paragraph",
        "text": "Whale watching (Seasonal)",
        "style": "ListParagraph",
        "list": true,
        "align": ""
      },
      {
        "type": "paragraph",
        "text": "Explore charming streets of Galle Fort",
        "style": "ListParagraph",
        "list": true,
        "align": ""
      },
      {
        "type": "paragraph",
        "text": "Visit to turtle Hatchery",
        "style": "ListParagraph",
        "list": true,
        "align": ""
      },
      {
        "type": "paragraph",
        "text": "2 Nights stay – Weligama",
        "style": "",
        "list": false,
        "align": ""
      },
      {
        "type": "paragraph",
        "text": "DAY 18 –– WELIGAMA|COLOMBO",
        "style": "",
        "list": false,
        "align": ""
      },
      {
        "type": "paragraph",
        "text": "The Island’s Vibrant Capital Colombo",
        "style": "",
        "list": false,
        "align": ""
      },
      {
        "type": "paragraph",
        "text": "Approx. travel time: 2.5–3 hours",
        "style": "",
        "list": false,
        "align": ""
      },
      {
        "type": "paragraph",
        "text": "Conclude the journey in Colombo, where colonial architecture, contemporary lifestyle and bustling markets showcase the modern spirit of Sri Lanka.",
        "style": "",
        "list": false,
        "align": ""
      },
      {
        "type": "paragraph",
        "text": "Colombo is a captivating blend of colonial heritage, vibrant city life and modern sophistication, offering a fascinating glimpse into Sri Lanka’s past and present. From the historic charm of Fort and the colourful streets of Pettah to the oceanfront promenade of Galle Face Green and the serene beauty of Gangaramaya Temple, the city invites visitors to discover its many contrasts. With stylish hotels, diverse culinary experiences, bustling markets, boutique shopping and lively nightlife.",
        "style": "",
        "list": false,
        "align": ""
      },
      {
        "type": "paragraph",
        "text": "Things to Experience",
        "style": "",
        "list": false,
        "align": ""
      },
      {
        "type": "paragraph",
        "text": "Guided City highlights tour",
        "style": "",
        "list": true,
        "align": ""
      },
      {
        "type": "paragraph",
        "text": "Visit the Independence Square",
        "style": "",
        "list": true,
        "align": ""
      },
      {
        "type": "paragraph",
        "text": "Explore Gangaramaya Temples",
        "style": "",
        "list": true,
        "align": ""
      },
      {
        "type": "paragraph",
        "text": "Enjoy shopping for souvenir and local crafts",
        "style": "",
        "list": true,
        "align": ""
      },
      {
        "type": "paragraph",
        "text": "Celebrate your final evening with a memorable farewell dinner",
        "style": "",
        "list": true,
        "align": ""
      },
      {
        "type": "paragraph",
        "text": "Overnight stay – Colombo",
        "style": "",
        "list": false,
        "align": ""
      },
      {
        "type": "paragraph",
        "text": "Day 19 – DEPARTURE – COLOMBO|AIRPORT",
        "style": "",
        "list": false,
        "align": ""
      },
      {
        "type": "paragraph",
        "text": "Approx. travel time: 1–1.5 hours",
        "style": "",
        "list": false,
        "align": ""
      },
      {
        "type": "paragraph",
        "text": "As your unforgettable Sri Lankan journey comes to an end, enjoy your transfer to BIA, carrying with you cherished memories of the island’s remarkable landscapes, rich heritage, vibrant culture and extraordinary diversity that make Sri Lanka truly unforgettable.",
        "style": "",
        "list": false,
        "align": ""
      }
    ]
  },
  {
    "id": "wild-trails-ancient-tales",
    "name": "Wild Trails & Ancient Tales",
    "sourceFile": "Wild Trails & Ancient Tales.docx",
    "title": "WILD TRAILS AND ANCIENT TALES – 19 Days | 18 Nights",
    "image": "/3aaa188a-cac8-4da0-93ad-bc14a5dedf10.jpg",
    "blocks": [
      {
        "type": "paragraph",
        "text": "WILD TRAILS AND ANCIENT TALES – 19 Days | 18 Nights",
        "style": "",
        "list": false,
        "align": ""
      },
      {
        "type": "paragraph",
        "text": "From ancient kingdoms and wild jungles to untouched islands, surf breaks and the northern spirit",
        "style": "",
        "list": false,
        "align": ""
      },
      {
        "type": "paragraph",
        "text": "This holiday is especially suited for travelers who love to stay active, explore beyond the usual tourist trail and experience Sri Lanka through adventure, nature, culture and authentic local encounters.",
        "style": "",
        "list": false,
        "align": ""
      },
      {
        "type": "paragraph",
        "text": "Expect wildlife, trekking, cycling, surfing, snorkeling, boat safaris, historical exploration, local flavors and plenty of unforgettable moments along the way.",
        "style": "",
        "list": false,
        "align": ""
      },
      {
        "type": "paragraph",
        "text": "DAY 1 – AIRPORT | NEGOMBO –",
        "style": "",
        "list": false,
        "align": ""
      },
      {
        "type": "paragraph",
        "text": "Where Your Island Adventure Begins",
        "style": "",
        "list": false,
        "align": ""
      },
      {
        "type": "paragraph",
        "text": "Approx. travel time: 20–40 minutes",
        "style": "",
        "list": false,
        "align": ""
      },
      {
        "type": "paragraph",
        "text": "AYUBOWAN !!",
        "style": "",
        "list": false,
        "align": ""
      },
      {
        "type": "paragraph",
        "text": "Your Sri Lankan adventure begins the moment you land. Meet your Magical Paradise journey companion and ease into the holiday with a relaxed introduction to Negombo — a lively coastal town known for its fishing heritage, lagoons and beautiful tropical coastline.",
        "style": "",
        "list": false,
        "align": ""
      },
      {
        "type": "paragraph",
        "text": "Located close to Sri Lanka’s international airport, Negombo is a lively coastal town offering beaches, seafood culture and colonial influences. It serves as both a relaxing introduction and a memorable farewell to Sri Lanka.",
        "style": "",
        "list": false,
        "align": ""
      },
      {
        "type": "paragraph",
        "text": "Things to do",
        "style": "",
        "list": false,
        "align": ""
      },
      {
        "type": "paragraph",
        "text": "Explore Negombo's fishing village and local surroundings",
        "style": "ListParagraph",
        "list": true,
        "align": ""
      },
      {
        "type": "paragraph",
        "text": "Visit the famous Negombo Fish Market",
        "style": "ListParagraph",
        "list": true,
        "align": ""
      },
      {
        "type": "paragraph",
        "text": "Enjoy a relaxing walk along Negombo Beach",
        "style": "ListParagraph",
        "list": true,
        "align": ""
      },
      {
        "type": "paragraph",
        "text": "Enjoy a sunset by the coast",
        "style": "ListParagraph",
        "list": true,
        "align": ""
      },
      {
        "type": "paragraph",
        "text": "Stay – Negombo",
        "style": "",
        "list": false,
        "align": ""
      },
      {
        "type": "paragraph",
        "text": "DAY 2 – NEGOMBO | PUTTALAM",
        "style": "",
        "list": false,
        "align": ""
      },
      {
        "type": "paragraph",
        "text": "Into the Wild – Your Stay Becomes the Experience",
        "style": "",
        "list": false,
        "align": ""
      },
      {
        "type": "paragraph",
        "text": "Approx. travel time: 2–2.5 hours",
        "style": "",
        "list": false,
        "align": ""
      },
      {
        "type": "paragraph",
        "text": "Leave the coast behind and journey towards Puttalam, where your accommodation becomes part of the adventure itself.",
        "style": "",
        "list": false,
        "align": ""
      },
      {
        "type": "paragraph",
        "text": "Located along Sri Lanka’s northwestern coast, Puttalam is a fascinating destination where tranquil lagoons, expansive salt flats and traditional fishing communities reveal a distinctive side of the island. The region is renowned for the picturesque Puttalam Lagoon, rich birdlife and scenic coastal landscapes, offering wonderful opportunities for birdwatching, boat excursions and nature exploration. Nearby Kalpitiya adds to the experience with its dolphin-watching adventures, kitesurfing and access to the remarkable Bar Reef Marine Sanctuary. Visitors can also discover the area’s salt production heritage and experience the rhythms of local coastal life. With its peaceful surroundings, rich biodiversity and authentic cultural character, Puttalam is an appealing destination for nature enthusiasts, photographers and travellers seeking to explore Sri Lanka beyond its well-trodden tourist routes.",
        "style": "",
        "list": false,
        "align": ""
      },
      {
        "type": "paragraph",
        "text": "Settle into The Mud House, a unique nature retreat where life slows down and the surrounding wilderness becomes your playground.",
        "style": "",
        "list": false,
        "align": ""
      },
      {
        "type": "paragraph",
        "text": "Things to do",
        "style": "",
        "list": false,
        "align": ""
      },
      {
        "type": "paragraph",
        "text": "Scenic journey towards Puttalam",
        "style": "ListParagraph",
        "list": true,
        "align": ""
      },
      {
        "type": "paragraph",
        "text": "Explore the surroundings of The Mud House",
        "style": "ListParagraph",
        "list": true,
        "align": ""
      },
      {
        "type": "paragraph",
        "text": "Enjoy the property's nature trails",
        "style": "ListParagraph",
        "list": true,
        "align": ""
      },
      {
        "type": "paragraph",
        "text": "Nature walks",
        "style": "ListParagraph",
        "list": true,
        "align": ""
      },
      {
        "type": "paragraph",
        "text": "Relax and enjoy the peaceful setting",
        "style": "ListParagraph",
        "list": true,
        "align": ""
      },
      {
        "type": "paragraph",
        "text": "Enjoy an authentic village-style experience",
        "style": "ListParagraph",
        "list": true,
        "align": ""
      },
      {
        "type": "paragraph",
        "text": "Stay – 2 Nights stay at The Mud House, Puttalam",
        "style": "",
        "list": false,
        "align": ""
      },
      {
        "type": "paragraph",
        "text": "DAY 4 – PUTTALAM | WILPATTU",
        "style": "",
        "list": false,
        "align": ""
      },
      {
        "type": "paragraph",
        "text": "Into Sri Lanka's Wildest Territory",
        "style": "",
        "list": false,
        "align": ""
      },
      {
        "type": "paragraph",
        "text": "Approx. travel time: 1–1.5 hours",
        "style": "",
        "list": false,
        "align": ""
      },
      {
        "type": "paragraph",
        "text": "Today takes you deeper into the wild. Head towards Wilpattu National Park, one of Sri Lanka's most fascinating wildlife destinations, for a game drive in search of elephants, sloth bears, deer and, if fortune is on your side, the elusive leopard.",
        "style": "",
        "list": false,
        "align": ""
      },
      {
        "type": "paragraph",
        "text": "Wilpattu is a captivating wilderness destination on Sri Lanka’s northwestern coast, renowned for its expansive forests, natural lakes and remarkable wildlife. As one of the island’s largest national parks, it offers an immersive safari experience through dry-zone woodlands, open clearings and distinctive rain-fed lakes known as villus. Visitors may encounter the elusive Sri Lankan leopard, sloth bears, elephants, spotted deer and a fascinating variety of birdlife while exploring the park by jeep. With its untamed landscapes, quieter safari atmosphere and rich biodiversity, Wilpattu is an exceptional destination for wildlife enthusiasts, photographers and travellers seeking an authentic connection with nature.",
        "style": "",
        "list": false,
        "align": ""
      },
      {
        "type": "paragraph",
        "text": "Things to do",
        "style": "",
        "list": false,
        "align": ""
      },
      {
        "type": "paragraph",
        "text": "Morning / afternoon game drive in Wilpattu National Park",
        "style": "ListParagraph",
        "list": true,
        "align": ""
      },
      {
        "type": "paragraph",
        "text": "Search for Sri Lanka's iconic wildlife",
        "style": "ListParagraph",
        "list": true,
        "align": ""
      },
      {
        "type": "paragraph",
        "text": "Spot elephants, deer, wild boar and crocodiles",
        "style": "ListParagraph",
        "list": true,
        "align": ""
      },
      {
        "type": "paragraph",
        "text": "Look out for the elusive Sri Lankan leopard",
        "style": "ListParagraph",
        "list": true,
        "align": ""
      },
      {
        "type": "paragraph",
        "text": "Birdwatching",
        "style": "ListParagraph",
        "list": true,
        "align": ""
      },
      {
        "type": "paragraph",
        "text": "Experience Wilpattu's distinctive natural lakes and wilderness",
        "style": "ListParagraph",
        "list": true,
        "align": ""
      },
      {
        "type": "paragraph",
        "text": "Stay – Wilpattu",
        "style": "",
        "list": false,
        "align": ""
      },
      {
        "type": "paragraph",
        "text": "DAY 5 – WILPATTU| SIGIRIYA",
        "style": "",
        "list": false,
        "align": ""
      },
      {
        "type": "paragraph",
        "text": "Ancient Stones & Royal Stories",
        "style": "",
        "list": false,
        "align": ""
      },
      {
        "type": "paragraph",
        "text": "Approx. travel time: 2–2.5 hours",
        "style": "",
        "list": false,
        "align": ""
      },
      {
        "type": "paragraph",
        "text": "Today the journey turns towards Sri Lanka's ancient heartland.",
        "style": "",
        "list": false,
        "align": ""
      },
      {
        "type": "paragraph",
        "text": "Sigiriya (The Lion Rock): A breathtaking UNESCO World Heritage site and one of Sri Lanka’s most iconic landmarks. Rising 660 feet straight up out of the central plains, this massive volcanic monolith holds the ruins of a 5th-century palace built by the rogue King Kashyapa.",
        "style": "",
        "list": false,
        "align": ""
      },
      {
        "type": "paragraph",
        "text": "To reach the summit, you will hike through ancient, technologically advanced water gardens and climb a staircase flanked by two colossal brick lion paws. Along the cliffside, you will pass vibrant, 1,500-year-old frescoes of celestial maidens and the historic Mirror Wall. At the flat summit, you are rewarded with 360-degree views of the surrounding emerald jungle canopy.",
        "style": "",
        "list": false,
        "align": ""
      },
      {
        "type": "paragraph",
        "text": "Things to do",
        "style": "",
        "list": false,
        "align": ""
      },
      {
        "type": "paragraph",
        "text": "Explore Yapahuwa Rock Fortress ( en-route)",
        "style": "ListParagraph",
        "list": true,
        "align": ""
      },
      {
        "type": "paragraph",
        "text": "Enjoy panoramic views from the fortress surroundings",
        "style": "ListParagraph",
        "list": true,
        "align": ""
      },
      {
        "type": "paragraph",
        "text": "Enjoy the tropical surroundings of the Cultural Triangle",
        "style": "ListParagraph",
        "list": true,
        "align": ""
      },
      {
        "type": "paragraph",
        "text": "Early morning climb of Sigiriya Rock Fortress",
        "style": "ListParagraph",
        "list": true,
        "align": ""
      },
      {
        "type": "paragraph",
        "text": "Cycle through the ancient ruins of Polonnaruwa",
        "style": "ListParagraph",
        "list": true,
        "align": ""
      },
      {
        "type": "paragraph",
        "text": "Enjoy a Minneriya National Park safari",
        "style": "ListParagraph",
        "list": true,
        "align": ""
      },
      {
        "type": "paragraph",
        "text": "Visit Dambulla Golden Temple",
        "style": "ListParagraph",
        "list": true,
        "align": ""
      },
      {
        "type": "paragraph",
        "text": "Stay – 3 Nights stay in Sigiriya",
        "style": "",
        "list": false,
        "align": ""
      },
      {
        "type": "paragraph",
        "text": "DAY 8 – SIGIRIYA | GAL OYA",
        "style": "",
        "list": false,
        "align": ""
      },
      {
        "type": "paragraph",
        "text": "From Sacred Caves to the Wild East",
        "style": "",
        "list": false,
        "align": ""
      },
      {
        "type": "paragraph",
        "text": "Approx. travel time: 3.5–4.5 hours",
        "style": "",
        "list": false,
        "align": ""
      },
      {
        "type": "paragraph",
        "text": "Leave the Cultural Triangle behind and travel towards the untamed landscapes of Gal Oya, with fascinating cultural stops along the way.",
        "style": "",
        "list": false,
        "align": ""
      },
      {
        "type": "paragraph",
        "text": "Gal Oya National Park Sri Lanka's most untamed and untouched wilderness destination. Centered around the massive Senanayake Samudraya reservoir—the island’s largest body of water—this isolated sanctuary offers a raw, crowd-free alternative to commercialized safari parks.",
        "style": "",
        "list": false,
        "align": ""
      },
      {
        "type": "paragraph",
        "text": "Instead of traditional jeep convoys, you will explore the park primarily by boat safari. This provides the rare opportunity to witness Gal Oya's famous swimming elephants as they paddle between islands using their trunks as snorkels.",
        "style": "",
        "list": false,
        "align": ""
      },
      {
        "type": "paragraph",
        "text": "Things to do",
        "style": "",
        "list": false,
        "align": ""
      },
      {
        "type": "paragraph",
        "text": "Scenic drive towards Gal Oya",
        "style": "ListParagraph",
        "list": true,
        "align": ""
      },
      {
        "type": "paragraph",
        "text": "Enjoy the changing landscapes of central and eastern Sri Lanka",
        "style": "ListParagraph",
        "list": true,
        "align": ""
      },
      {
        "type": "paragraph",
        "text": "Relax amidst the wilderness of Gal Oya",
        "style": "ListParagraph",
        "list": true,
        "align": ""
      },
      {
        "type": "paragraph",
        "text": "Gal Oya boat safari",
        "style": "ListParagraph",
        "list": true,
        "align": ""
      },
      {
        "type": "paragraph",
        "text": "Search for elephants along the lake shore",
        "style": "ListParagraph",
        "list": true,
        "align": ""
      },
      {
        "type": "paragraph",
        "text": "Trek the Monkey Mountain",
        "style": "ListParagraph",
        "list": true,
        "align": ""
      },
      {
        "type": "paragraph",
        "text": "Enjoy spectacular views over the surrounding landscape",
        "style": "ListParagraph",
        "list": true,
        "align": ""
      },
      {
        "type": "paragraph",
        "text": "Experience the peaceful rhythm of life around Gal Oya",
        "style": "ListParagraph",
        "list": true,
        "align": ""
      },
      {
        "type": "paragraph",
        "text": "Stay – 2 Nights stay Gal Oya",
        "style": "",
        "list": false,
        "align": ""
      },
      {
        "type": "paragraph",
        "text": "DAY 10 – GAL OYA | ARUGAM BAY",
        "style": "",
        "list": false,
        "align": ""
      },
      {
        "type": "paragraph",
        "text": "Into the Surf – Welcome to the East Coast",
        "style": "",
        "list": false,
        "align": ""
      },
      {
        "type": "paragraph",
        "text": "Approx. travel time: 2.5–3.5 hours",
        "style": "",
        "list": false,
        "align": ""
      },
      {
        "type": "paragraph",
        "text": "Today the journey meets the ocean. Travel towards Arugam Bay, one of Sri Lanka's most famous surfing destinations and a laid-back coastal escape.",
        "style": "",
        "list": false,
        "align": ""
      },
      {
        "type": "paragraph",
        "text": "A legendary, sun-drenched surf capital on Sri Lanka's southeastern coast. Known for its laid-back, bohemian energy, this crescent-shaped bay transitions seamlessly from a sleepy fishing village to a vibrant international hub during the surfing season.",
        "style": "",
        "list": false,
        "align": ""
      },
      {
        "type": "paragraph",
        "text": "The main draw is its world-class right-hand point breaks, offering consistent, long rides that attract everyone from beginners to competitive pros.",
        "style": "",
        "list": false,
        "align": ""
      },
      {
        "type": "paragraph",
        "text": "Things to do",
        "style": "",
        "list": false,
        "align": ""
      },
      {
        "type": "paragraph",
        "text": "Scenic journey to Arugam Bay",
        "style": "ListParagraph",
        "list": true,
        "align": ""
      },
      {
        "type": "paragraph",
        "text": "Explore the laid-back surf town",
        "style": "ListParagraph",
        "list": true,
        "align": ""
      },
      {
        "type": "paragraph",
        "text": "Visit local beaches",
        "style": "ListParagraph",
        "list": true,
        "align": ""
      },
      {
        "type": "paragraph",
        "text": "Discover the local cafés and coastal atmosphere",
        "style": "ListParagraph",
        "list": true,
        "align": ""
      },
      {
        "type": "paragraph",
        "text": "Surfing in Arugam Bay",
        "style": "ListParagraph",
        "list": true,
        "align": ""
      },
      {
        "type": "paragraph",
        "text": "Optional lagoon experience",
        "style": "ListParagraph",
        "list": true,
        "align": ""
      },
      {
        "type": "paragraph",
        "text": "Explore the laid-back local community",
        "style": "ListParagraph",
        "list": true,
        "align": ""
      },
      {
        "type": "paragraph",
        "text": "Visit Kumana National Park",
        "style": "ListParagraph",
        "list": true,
        "align": ""
      },
      {
        "type": "paragraph",
        "text": "Stay – 2 Nights stay Arugam Bay",
        "style": "",
        "list": false,
        "align": ""
      },
      {
        "type": "paragraph",
        "text": "DAY 12 – ARUGAM BAY | PASIKUDA",
        "style": "",
        "list": false,
        "align": ""
      },
      {
        "type": "paragraph",
        "text": "Wild Coastlines & Hidden Wildlife",
        "style": "",
        "list": false,
        "align": ""
      },
      {
        "type": "paragraph",
        "text": "Approx. travel time: 3.5–4.5 hours",
        "style": "",
        "list": false,
        "align": ""
      },
      {
        "type": "paragraph",
        "text": "Leave Arugam Bay and travel along Sri Lanka's beautiful eastern coastline towards Pasikuda,",
        "style": "",
        "list": false,
        "align": ""
      },
      {
        "type": "paragraph",
        "text": "A picture-perfect, resort-strewn getaway on Sri Lanka’s eastern coast, celebrated for having one of the longest stretches of shallow coastline in the world. Protected by a sweeping offshore coral reef, the horseshoe-shaped bay features exceptionally calm, clear, and turquoise waters with virtually no currents",
        "style": "",
        "list": false,
        "align": ""
      },
      {
        "type": "paragraph",
        "text": "Things to do",
        "style": "",
        "list": false,
        "align": ""
      },
      {
        "type": "paragraph",
        "text": "Scenic drive along the eastern coastline",
        "style": "ListParagraph",
        "list": true,
        "align": ""
      },
      {
        "type": "paragraph",
        "text": "Relax beside the turquoise waters",
        "style": "ListParagraph",
        "list": true,
        "align": ""
      },
      {
        "type": "paragraph",
        "text": "Stay – Pasikuda",
        "style": "",
        "list": false,
        "align": ""
      },
      {
        "type": "paragraph",
        "text": "DAY 13 – PASIKUDA | TRINCOMALEE",
        "style": "",
        "list": false,
        "align": ""
      },
      {
        "type": "paragraph",
        "text": "Turquoise Waters & The Eastern Coast",
        "style": "",
        "list": false,
        "align": ""
      },
      {
        "type": "paragraph",
        "text": "Approx. travel time: 1.5–2 hours",
        "style": "",
        "list": false,
        "align": ""
      },
      {
        "type": "paragraph",
        "text": "Continue north towards Trincomalee, one of Sri Lanka's most beautiful natural harbours. A sun-kissed coastal paradise built around one of the world's finest natural deep-water harbors.",
        "style": "",
        "list": false,
        "align": ""
      },
      {
        "type": "paragraph",
        "text": "Situated along Sri Lanka’s picturesque eastern coast, Trincomalee is a captivating seaside destination renowned for its pristine beaches, turquoise waters and magnificent natural harbour. The city’s rich history and spiritual heritage come alive at the iconic Koneswaram Temple, dramatically perched on Swami Rock overlooking the Indian Ocean, while nearby Nilaveli and Uppuveli beaches offer idyllic settings for relaxation and coastal exploration. Visitors can enjoy snorkelling around Pigeon Island, discover vibrant marine life, embark on seasonal whale-watching excursions and explore the historic Fort Frederick. With its blend of cultural treasures, spectacular ocean scenery and tropical tranquillity, Trincomalee is a wonderful escape for beach lovers, nature enthusiasts and cultural explorers.",
        "style": "",
        "list": false,
        "align": ""
      },
      {
        "type": "paragraph",
        "text": "Things to do",
        "style": "",
        "list": false,
        "align": ""
      },
      {
        "type": "paragraph",
        "text": "Explore Fort Frederick",
        "style": "ListParagraph",
        "list": true,
        "align": ""
      },
      {
        "type": "paragraph",
        "text": "Visit Koneswaram Kovil",
        "style": "ListParagraph",
        "list": true,
        "align": ""
      },
      {
        "type": "paragraph",
        "text": "Enjoy spectacular ocean views from Swami Rock",
        "style": "ListParagraph",
        "list": true,
        "align": ""
      },
      {
        "type": "paragraph",
        "text": "Explore Dutch Bay",
        "style": "ListParagraph",
        "list": true,
        "align": ""
      },
      {
        "type": "paragraph",
        "text": "Visit the famous Kanniya Hot Wells",
        "style": "ListParagraph",
        "list": true,
        "align": ""
      },
      {
        "type": "paragraph",
        "text": "Relax by Trincomalee's coastline",
        "style": "ListParagraph",
        "list": true,
        "align": ""
      },
      {
        "type": "paragraph",
        "text": "Enjoy a sunset by the Indian Ocean",
        "style": "ListParagraph",
        "list": true,
        "align": ""
      },
      {
        "type": "paragraph",
        "text": "Boat trip to Pigeon Island",
        "style": "ListParagraph",
        "list": true,
        "align": ""
      },
      {
        "type": "paragraph",
        "text": "Snorkelling in Pigeon Island National Park",
        "style": "ListParagraph",
        "list": true,
        "align": ""
      },
      {
        "type": "paragraph",
        "text": "Explore the island's coral-rich waters",
        "style": "ListParagraph",
        "list": true,
        "align": ""
      },
      {
        "type": "paragraph",
        "text": "Spot colourful tropical fish",
        "style": "ListParagraph",
        "list": true,
        "align": ""
      },
      {
        "type": "paragraph",
        "text": "Stay – 2 Nights stay Trincomalee",
        "style": "",
        "list": false,
        "align": ""
      },
      {
        "type": "paragraph",
        "text": "DAY 15 – TRINCOMALEE | JAFFNA",
        "style": "",
        "list": false,
        "align": ""
      },
      {
        "type": "paragraph",
        "text": "Journey to the Northern Kingdom",
        "style": "",
        "list": false,
        "align": ""
      },
      {
        "type": "paragraph",
        "text": "Approx. travel time: 4–5 hours",
        "style": "",
        "list": false,
        "align": ""
      },
      {
        "type": "paragraph",
        "text": "The north. Jaffna offers a distinctive culture, cuisine, architecture and history unlike anywhere else on the island. The vibrant cultural capital of Sri Lanka’s northern peninsula, offering an immersive look into a distinct Tamil heritage that sets it apart from the rest of the island.",
        "style": "",
        "list": false,
        "align": ""
      },
      {
        "type": "paragraph",
        "text": "After being isolated for decades due to the civil war, Jaffna has re-emerged as a captivating destination of colorful temples, colonial ruins, and untouched islands.",
        "style": "",
        "list": false,
        "align": ""
      },
      {
        "type": "paragraph",
        "text": "Things to do",
        "style": "",
        "list": false,
        "align": ""
      },
      {
        "type": "paragraph",
        "text": "Explore Jaffna town",
        "style": "ListParagraph",
        "list": true,
        "align": ""
      },
      {
        "type": "paragraph",
        "text": "Discover local markets and streets & Jaffna Library",
        "style": "ListParagraph",
        "list": true,
        "align": ""
      },
      {
        "type": "paragraph",
        "text": "Explore Jaffna Fort",
        "style": "ListParagraph",
        "list": true,
        "align": ""
      },
      {
        "type": "paragraph",
        "text": "Visit Nallur Kandaswamy Temple",
        "style": "ListParagraph",
        "list": true,
        "align": ""
      },
      {
        "type": "paragraph",
        "text": "Discover Jaffna's colonial and cultural heritage",
        "style": "ListParagraph",
        "list": true,
        "align": ""
      },
      {
        "type": "paragraph",
        "text": "Experience an authentic culinary tour",
        "style": "ListParagraph",
        "list": true,
        "align": ""
      },
      {
        "type": "paragraph",
        "text": "Taste traditional Jaffna dishes and local specialities",
        "style": "ListParagraph",
        "list": true,
        "align": ""
      },
      {
        "type": "paragraph",
        "text": "Ferry journey to Delft Island",
        "style": "ListParagraph",
        "list": true,
        "align": ""
      },
      {
        "type": "paragraph",
        "text": "Explore the island's historical ruins",
        "style": "ListParagraph",
        "list": true,
        "align": ""
      },
      {
        "type": "paragraph",
        "text": "Discover the famous Delft wild ponies",
        "style": "ListParagraph",
        "list": true,
        "align": ""
      },
      {
        "type": "paragraph",
        "text": "Visit the Dutch fort ruins",
        "style": "ListParagraph",
        "list": true,
        "align": ""
      },
      {
        "type": "paragraph",
        "text": "See the ancient Baobab tree",
        "style": "ListParagraph",
        "list": true,
        "align": ""
      },
      {
        "type": "paragraph",
        "text": "Stay – 2 Nights stay Jaffna",
        "style": "",
        "list": false,
        "align": ""
      },
      {
        "type": "paragraph",
        "text": "DAY 17 – JAFFNA | ANURADHAPURA",
        "style": "",
        "list": false,
        "align": ""
      },
      {
        "type": "paragraph",
        "text": "Northern Heritage Meets an Ancient Kingdom",
        "style": "",
        "list": false,
        "align": ""
      },
      {
        "type": "paragraph",
        "text": "Approx. travel time: 3.5–4.5 hours",
        "style": "",
        "list": false,
        "align": ""
      },
      {
        "type": "paragraph",
        "text": "Walking Through the Pages of Ancient Sri Lanka, Step into the magnificent ancient kingdom of Anuradhapura. The cradle of ancient Sri Lankan civilization and the island's first grand capital, founded in the 4th century BC. This sprawling, UNESCO-listed sacred city served as the heart of political and religious power for over a millennium, leaving behind some of the most colossal archaeological wonders of the ancient world.",
        "style": "",
        "list": false,
        "align": ""
      },
      {
        "type": "paragraph",
        "text": "Things to do",
        "style": "",
        "list": false,
        "align": ""
      },
      {
        "type": "paragraph",
        "text": "Explore the ancient Kingdom of Anuradhapura",
        "style": "ListParagraph",
        "list": true,
        "align": ""
      },
      {
        "type": "paragraph",
        "text": "Discover ancient stupas and monastic complexes",
        "style": "ListParagraph",
        "list": true,
        "align": ""
      },
      {
        "type": "paragraph",
        "text": "Visit sacred historical sites",
        "style": "ListParagraph",
        "list": true,
        "align": ""
      },
      {
        "type": "paragraph",
        "text": "Experience the island's rich Buddhist heritage",
        "style": "ListParagraph",
        "list": true,
        "align": ""
      },
      {
        "type": "paragraph",
        "text": "Stay – Anuradhapura",
        "style": "",
        "list": false,
        "align": ""
      },
      {
        "type": "paragraph",
        "text": "DAY 18 – ANURADHAPURA | KANDY",
        "style": "",
        "list": false,
        "align": ""
      },
      {
        "type": "paragraph",
        "text": "Sri Lanka's cultural capital.",
        "style": "",
        "list": false,
        "align": ""
      },
      {
        "type": "paragraph",
        "text": "Approx. travel time: 3–3.5 hours",
        "style": "",
        "list": false,
        "align": ""
      },
      {
        "type": "paragraph",
        "text": "Kandy -The majestic last royal capital of Sri Lanka, nestled among mist-shrouded hills and lush tea plantations in the island's central highlands. As the final stronghold of the Sinhalese kings before British rule, this UNESCO World Heritage city remains the beating heart of Sri Lankan culture, spirituality, and artistic tradition.",
        "style": "",
        "list": false,
        "align": ""
      },
      {
        "type": "paragraph",
        "text": "Things to do",
        "style": "",
        "list": false,
        "align": ""
      },
      {
        "type": "paragraph",
        "text": "Visit Nalanda Gedige (Considered as the geographical center of the island)",
        "style": "ListParagraph",
        "list": true,
        "align": ""
      },
      {
        "type": "paragraph",
        "text": "Visit the Temple of the Sacred Tooth Relic",
        "style": "ListParagraph",
        "list": true,
        "align": ""
      },
      {
        "type": "paragraph",
        "text": "Enjoy a walk around Kandy Lake",
        "style": "ListParagraph",
        "list": true,
        "align": ""
      },
      {
        "type": "paragraph",
        "text": "Kandy City Tour and shopping",
        "style": "ListParagraph",
        "list": true,
        "align": ""
      },
      {
        "type": "paragraph",
        "text": "Experience the atmosphere of Sri Lanka's hill capital",
        "style": "ListParagraph",
        "list": true,
        "align": ""
      },
      {
        "type": "paragraph",
        "text": "Stay – Kandy",
        "style": "",
        "list": false,
        "align": ""
      },
      {
        "type": "paragraph",
        "text": "DAY 19– KANDY | AIRPORT",
        "style": "",
        "list": false,
        "align": ""
      },
      {
        "type": "paragraph",
        "text": "One Last Glimpse of Your Magical Sri Lanka",
        "style": "",
        "list": false,
        "align": ""
      },
      {
        "type": "paragraph",
        "text": "Approx. travel time: 3–4 hours",
        "style": "",
        "list": false,
        "align": ""
      },
      {
        "type": "paragraph",
        "text": "Your journey comes full circle today. Enjoy your final moments in Kandy before travelling back towards the airport with a collection of memories stretching from the wild west to the untouched east and the cultural heart of the North.",
        "style": "",
        "list": false,
        "align": ""
      },
      {
        "type": "paragraph",
        "text": "UNTILL, WE MEET AGAIN!!",
        "style": "",
        "list": false,
        "align": ""
      }
    ]
  },
  {
    "id": "your-summer-in-ceylon",
    "name": "Your Summer in Ceylon",
    "sourceFile": "Your Summer in Ceylon.docx",
    "title": "YOUR SUMMER IN CEYLON - 20 Days | 19 Nights",
    "image": "/8de9dae7-2ef0-4497-8b69-866058baec8a.jpg",
    "blocks": [
      {
        "type": "paragraph",
        "text": "YOUR SUMMER IN CEYLON - 20 Days | 19 Nights",
        "style": "",
        "list": false,
        "align": "center"
      },
      {
        "type": "paragraph",
        "text": "The Ultimate East Coast Journey | June – October",
        "style": "",
        "list": false,
        "align": ""
      },
      {
        "type": "paragraph",
        "text": "Discover Sri Lanka's Sunniest Season",
        "style": "",
        "list": false,
        "align": ""
      },
      {
        "type": "paragraph",
        "text": "When much of the island welcomes refreshing monsoon rains, Sri Lanka's spectacular east coast shines in all its glory. From June to October, crystal-clear turquoise waters, golden beaches and unforgettable wildlife encounters create the perfect tropical escape.",
        "style": "",
        "list": false,
        "align": ""
      },
      {
        "type": "paragraph",
        "text": "DAY 01 | WELCOME TO SRI LANKA – NEGOMBO",
        "style": "",
        "list": false,
        "align": ""
      },
      {
        "type": "paragraph",
        "text": "Your island journey begins",
        "style": "",
        "list": false,
        "align": ""
      },
      {
        "type": "paragraph",
        "text": "Approx. travel time: 20–40 minutes",
        "style": "",
        "list": false,
        "align": ""
      },
      {
        "type": "paragraph",
        "text": "Ayubowan!",
        "style": "",
        "list": false,
        "align": ""
      },
      {
        "type": "paragraph",
        "text": "Welcome to the Pearl of the Indian Ocean. Upon arrival at Bandaranaike International Airport, you will be warmly greeted by your Magical Paradise representative before beginning your unforgettable island adventure.",
        "style": "",
        "list": false,
        "align": ""
      },
      {
        "type": "paragraph",
        "text": "After a short drive, arrive in the charming coastal town of Negombo, known for its fishing heritage and beautiful lagoon.",
        "style": "",
        "list": false,
        "align": ""
      },
      {
        "type": "paragraph",
        "text": "Located close to Sri Lanka’s international airport, Negombo is a lively coastal town offering beaches, seafood culture and colonial influences. It serves as both a relaxing introduction and a memorable farewell to Sri Lanka.",
        "style": "",
        "list": false,
        "align": ""
      },
      {
        "type": "paragraph",
        "text": "Things to Do",
        "style": "",
        "list": false,
        "align": ""
      },
      {
        "type": "paragraph",
        "text": "• Relax after your journey\n• Stroll along Negombo Beach\n• Visit the Dutch Canal and local fish market on the following day",
        "style": "",
        "list": false,
        "align": ""
      },
      {
        "type": "paragraph",
        "text": "Stay",
        "style": "",
        "list": false,
        "align": ""
      },
      {
        "type": "paragraph",
        "text": "Overnight stay in Negombo",
        "style": "",
        "list": false,
        "align": ""
      },
      {
        "type": "paragraph",
        "text": "DAY 02 - NEGOMBO | KITULGALA",
        "style": "",
        "list": false,
        "align": ""
      },
      {
        "type": "paragraph",
        "text": "From Coastal Charm to Lush Rainforest Adventures.",
        "style": "",
        "list": false,
        "align": ""
      },
      {
        "type": "paragraph",
        "text": "Approx. travel time: 2.5–3.5 hours",
        "style": "",
        "list": false,
        "align": ""
      },
      {
        "type": "paragraph",
        "text": "Journey into Sri Lanka's tropical rainforest where rushing rivers, lush greenery and adventure await.",
        "style": "",
        "list": false,
        "align": ""
      },
      {
        "type": "paragraph",
        "text": "Nestled amid the lush rainforests and rolling hills of Sri Lanka’s wet zone, Kitulgala is an adventure-filled destination celebrated for its rushing rivers, rich biodiversity and spectacular natural surroundings. The Kelani River flows through this picturesque region, creating the perfect setting for thrilling white-water rafting, while forest trails and hidden waterfalls invite visitors to explore its verdant landscapes. Nature enthusiasts can discover remarkable birdlife, enjoy guided rainforest walks and experience the area's cinematic heritage, as Kitulgala was one of the filming locations for The Bridge on the River Kwai. Combining outdoor adventure with the tranquility of tropical wilderness, Kitulgala is an ideal escape for thrill-seekers and nature lovers alike.",
        "style": "",
        "list": false,
        "align": ""
      },
      {
        "type": "paragraph",
        "text": "Things to Do",
        "style": "",
        "list": false,
        "align": ""
      },
      {
        "type": "paragraph",
        "text": "White water rafting",
        "style": "",
        "list": false,
        "align": ""
      },
      {
        "type": "paragraph",
        "text": "River Expeditions & Water abseiling \nRainforest nature walks\nBirdwatching\nRelax beside the Kelani River",
        "style": "",
        "list": false,
        "align": ""
      },
      {
        "type": "paragraph",
        "text": "Stay -Overnight stay in Kitulgala",
        "style": "",
        "list": false,
        "align": ""
      },
      {
        "type": "paragraph",
        "text": "DAYS 03 - KITULGALA | KANDY",
        "style": "",
        "list": false,
        "align": ""
      },
      {
        "type": "paragraph",
        "text": "Journey from Nature’s Serenity to Cultural Grandeur",
        "style": "",
        "list": false,
        "align": ""
      },
      {
        "type": "paragraph",
        "text": "Approx. travel time: 3–3.5 hours",
        "style": "",
        "list": false,
        "align": ""
      },
      {
        "type": "paragraph",
        "text": "Travel into Sri Lanka's cultural capital, where history, spirituality and traditional craftsmanship come together amidst picturesque hills.",
        "style": "",
        "list": false,
        "align": ""
      },
      {
        "type": "paragraph",
        "text": "Nestled amidst lush green hills and overlooking a serene lake, Kandy is the cultural heart of Sri Lanka, rich in history, spirituality, and timeless traditions. Home to the sacred Temple of the Tooth Relic, this charming hill city offers a captivating blend of ancient heritage, vibrant local culture, scenic landscapes, and authentic Sri Lankan experiences, making it an essential stop on your island journey.",
        "style": "",
        "list": false,
        "align": ""
      },
      {
        "type": "paragraph",
        "text": "Things to Do",
        "style": "",
        "list": false,
        "align": ""
      },
      {
        "type": "paragraph",
        "text": "Visit the Temple of the Sacred Tooth Relic\nWatch a colourful Kandyan cultural dance performance\nExplore local markets",
        "style": "",
        "list": false,
        "align": ""
      },
      {
        "type": "paragraph",
        "text": "Visit to Peradeniya Botanical Gardens\nVisit artisan workshops featuring wood carving, brassware and batik",
        "style": "",
        "list": false,
        "align": ""
      },
      {
        "type": "paragraph",
        "text": "Hands on experience on a jewelry making session",
        "style": "",
        "list": false,
        "align": ""
      },
      {
        "type": "paragraph",
        "text": "Stay",
        "style": "",
        "list": false,
        "align": ""
      },
      {
        "type": "paragraph",
        "text": "2 Nights in Kandy",
        "style": "",
        "list": false,
        "align": ""
      },
      {
        "type": "paragraph",
        "text": "DAYS 05  -KANDY |HAPUTALE",
        "style": "",
        "list": false,
        "align": ""
      },
      {
        "type": "paragraph",
        "text": "From Cultural Heritage to Misty Mountain Escapes",
        "style": "",
        "list": false,
        "align": ""
      },
      {
        "type": "paragraph",
        "text": "Approx. travel time: 3.5–4.5 hours",
        "style": "",
        "list": false,
        "align": ""
      },
      {
        "type": "paragraph",
        "text": "Climb into the cool hill country where endless tea plantations and breathtaking viewpoints await. Haputale is one of Sri Lanka's most scenic mountain retreats.",
        "style": "",
        "list": false,
        "align": ""
      },
      {
        "type": "paragraph",
        "text": "Perched high in Sri Lanka’s picturesque hill country, Haputale is a captivating mountain retreat renowned for its mist-covered landscapes, endless tea plantations and breathtaking panoramic views. The iconic Lipton’s Seat offers spectacular vistas across rolling hills and valleys, while the historic Dambatenne Tea Factory provides a fascinating glimpse into the island’s celebrated Ceylon tea heritage. Visitors can explore the charming Adisham Bungalow, discover cascading waterfalls such as Bambarakanda Falls and enjoy scenic walks through lush plantations and forest trails. With its cool climate, tranquil atmosphere and remarkable natural beauty, Haputale is an ideal destination for nature lovers, tea enthusiasts and travellers seeking an authentic highland escape.",
        "style": "",
        "list": false,
        "align": ""
      },
      {
        "type": "paragraph",
        "text": "Things to Do",
        "style": "",
        "list": false,
        "align": ""
      },
      {
        "type": "paragraph",
        "text": "• Visit Lipton's Seat\n• Explore Dambatenne Tea Factory\n• Visit Adisham Monastery\n• Enjoy panoramic mountain views",
        "style": "",
        "list": false,
        "align": ""
      },
      {
        "type": "paragraph",
        "text": "Diyaluma Falls Hike",
        "style": "",
        "list": false,
        "align": ""
      },
      {
        "type": "paragraph",
        "text": "Explore Ella Town",
        "style": "",
        "list": false,
        "align": ""
      },
      {
        "type": "paragraph",
        "text": "Stay",
        "style": "",
        "list": false,
        "align": ""
      },
      {
        "type": "paragraph",
        "text": "2 Nights in Haputale – Wake up above the clouds.",
        "style": "",
        "list": false,
        "align": ""
      },
      {
        "type": "paragraph",
        "text": "DAYS 07 - HAPUTALE |GAL OYA",
        "style": "",
        "list": false,
        "align": ""
      },
      {
        "type": "paragraph",
        "text": "Into the Untamed Beauty of Gal Oya.",
        "style": "",
        "list": false,
        "align": ""
      },
      {
        "type": "paragraph",
        "text": "Approx. travel time: 4–5 hours",
        "style": "",
        "list": false,
        "align": ""
      },
      {
        "type": "paragraph",
        "text": "Venture into one of Sri Lanka's best-kept secrets.",
        "style": "",
        "list": false,
        "align": ""
      },
      {
        "type": "paragraph",
        "text": "Gal Oya is one of Sri Lanka’s most enchanting hidden gems, offering an authentic wilderness experience surrounded by lush forests, rolling hills, and the tranquil waters of Senanayake Samudraya. Renowned for its unique boat safaris, where elephants can sometimes be spotted swimming between islands, Gal Oya invites travellers to discover the island’s rich biodiversity, vibrant indigenous heritage, and untouched natural beauty away from the usual tourist trails.",
        "style": "",
        "list": false,
        "align": ""
      },
      {
        "type": "paragraph",
        "text": "Things to Do",
        "style": "",
        "list": false,
        "align": ""
      },
      {
        "type": "paragraph",
        "text": "• Boat safari on Senanayake Samudraya\n• Search for swimming elephants\n• Meet the indigenous Vedda community\n• Nature walks with expert guides",
        "style": "",
        "list": false,
        "align": ""
      },
      {
        "type": "paragraph",
        "text": "Stay -2 Nights in Gal Oya",
        "style": "",
        "list": false,
        "align": ""
      },
      {
        "type": "paragraph",
        "text": "DAYS 09  - GAL OYA |ARUGAM BAY",
        "style": "",
        "list": false,
        "align": ""
      },
      {
        "type": "paragraph",
        "text": "Into the Waves of Coastal Paradise.",
        "style": "",
        "list": false,
        "align": ""
      },
      {
        "type": "paragraph",
        "text": "Approx. travel time: 2.5–3.5 hours",
        "style": "",
        "list": false,
        "align": ""
      },
      {
        "type": "paragraph",
        "text": "Welcome to Sri Lanka's surfing paradise, where laid-back beach vibes meet incredible wildlife.",
        "style": "",
        "list": false,
        "align": ""
      },
      {
        "type": "paragraph",
        "text": "Arugam Bay is a vibrant coastal destination on Sri Lanka’s eastern shores, celebrated for its world-class surf breaks, golden beaches and laid-back beach culture. During the surfing season, the bay attracts surfers from around the world, while its relaxed cafés, beachfront retreats and lively atmosphere create an inviting setting for all kinds of travellers. Beyond the waves, visitors can explore the tranquil waters of Pottuvil Lagoon, discover the region’s rich birdlife and venture towards nearby Kumana National Park for rewarding wildlife encounters. As the sun sets over the Indian Ocean, Arugam Bay reveals its easygoing charm, blending adventure, nature and tropical coastal living into an unforgettable escape.",
        "style": "",
        "list": false,
        "align": ""
      },
      {
        "type": "paragraph",
        "text": "Things to Do",
        "style": "",
        "list": false,
        "align": ""
      },
      {
        "type": "paragraph",
        "text": "• Jeep Safari in Kumana National Park\n• Relax on Arugam Bay Beach\n• Surfing or beginner surf lessons\n• Sunset by the Indian Ocean",
        "style": "",
        "list": false,
        "align": ""
      },
      {
        "type": "paragraph",
        "text": "Stay -2 Nights in Arugam Bay",
        "style": "",
        "list": false,
        "align": ""
      },
      {
        "type": "paragraph",
        "text": "DAYS 11 - ARUGAM BAY |PASIKUDA",
        "style": "",
        "list": false,
        "align": ""
      },
      {
        "type": "paragraph",
        "text": "Coastal Adventures Meet Tropical Serenity.",
        "style": "",
        "list": false,
        "align": ""
      },
      {
        "type": "paragraph",
        "text": "Approx. travel time: 3.5–4.5 hours.",
        "style": "",
        "list": false,
        "align": ""
      },
      {
        "type": "paragraph",
        "text": "Continue north along Sri Lanka's beautiful east coast to Pasikuda,",
        "style": "",
        "list": false,
        "align": ""
      },
      {
        "type": "paragraph",
        "text": "Renowned for its calm, crystal-clear waters and long stretch of golden shoreline, Pasikuda is one of Sri Lanka's finest beach destinations on the east coast.",
        "style": "",
        "list": false,
        "align": ""
      },
      {
        "type": "paragraph",
        "text": "A beautiful beach destination on Sri Lanka’s eastern coast, celebrated for its sweeping crescent-shaped bay, soft golden sands and remarkably shallow turquoise waters. Its calm coastal setting creates an inviting atmosphere for swimming, leisurely seaside strolls and relaxing beneath the tropical sun during the favourable season. Visitors can enjoy snorkelling and boat excursions, explore the nearby shores of Kalkudah and indulge in peaceful beachfront stays with stunning ocean views. Combining natural beauty with laid-back luxury, Pasikuda is an ideal retreat for couples, families and travellers seeking a tranquil tropical getaway.",
        "style": "",
        "list": false,
        "align": ""
      },
      {
        "type": "paragraph",
        "text": "Things to Do",
        "style": "",
        "list": false,
        "align": ""
      },
      {
        "type": "paragraph",
        "text": "• Swim in crystal-clear waters\n• Snorkelling and optional water sports\n• Relax on pristine beaches\n• Enjoy fresh seafood by the ocean",
        "style": "",
        "list": false,
        "align": ""
      },
      {
        "type": "paragraph",
        "text": "Stay",
        "style": "",
        "list": false,
        "align": ""
      },
      {
        "type": "paragraph",
        "text": "2 Nights in Pasikuda",
        "style": "",
        "list": false,
        "align": ""
      },
      {
        "type": "paragraph",
        "text": "DAYS 13 - PASIKUDA | TRINCOMALEE",
        "style": "",
        "list": false,
        "align": ""
      },
      {
        "type": "paragraph",
        "text": "Uncover the Charms of Sri Lanka’s Eastern Coast",
        "style": "",
        "list": false,
        "align": ""
      },
      {
        "type": "paragraph",
        "text": "Approx. travel time: 1.5–2 hours",
        "style": "",
        "list": false,
        "align": ""
      },
      {
        "type": "paragraph",
        "text": "Discover one of Sri Lanka's oldest harbor cities, blessed with stunning beaches, marine life and rich cultural heritage.",
        "style": "",
        "list": false,
        "align": ""
      },
      {
        "type": "paragraph",
        "text": "Continue north towards one of Sri Lanka's most captivating east coast destinations, Trincomalee offers beautiful beaches, rich history, marine life encounters, and cultural heritage.",
        "style": "",
        "list": false,
        "align": ""
      },
      {
        "type": "paragraph",
        "text": "Situated along Sri Lanka’s picturesque eastern coast, Trincomalee is a captivating seaside destination renowned for its pristine beaches, turquoise waters and magnificent natural harbour. The city’s rich history and spiritual heritage come alive at the iconic Koneswaram Temple, dramatically perched on Swami Rock overlooking the Indian Ocean, while nearby Nilaveli and Uppuveli beaches offer idyllic settings for relaxation and coastal exploration. Visitors can enjoy snorkelling around Pigeon Island, discover vibrant marine life, embark on seasonal whale-watching excursions and explore the historic Fort Frederick. With its blend of cultural treasures, spectacular ocean scenery and tropical tranquillity, Trincomalee is a wonderful escape for beach lovers, nature enthusiasts and cultural explorers.",
        "style": "",
        "list": false,
        "align": ""
      },
      {
        "type": "paragraph",
        "text": "Things to Do",
        "style": "",
        "list": false,
        "align": ""
      },
      {
        "type": "paragraph",
        "text": "Visit Pigeon Island National Park\nSnorkelling among colourful coral reefs\nWhale watching (seasonal)\nVisit Koneswaram Temple",
        "style": "",
        "list": false,
        "align": ""
      },
      {
        "type": "paragraph",
        "text": "Explore Dutch Bay",
        "style": "",
        "list": false,
        "align": ""
      },
      {
        "type": "paragraph",
        "text": "Visit the famous Kanniya Hot Wells",
        "style": "",
        "list": false,
        "align": ""
      },
      {
        "type": "paragraph",
        "text": "Explore Fort Frederick",
        "style": "",
        "list": false,
        "align": ""
      },
      {
        "type": "paragraph",
        "text": "Relax on Nilaveli Beach",
        "style": "",
        "list": false,
        "align": ""
      },
      {
        "type": "paragraph",
        "text": "Optional – 1 Night exclusive sailing experience with Sail Lanka",
        "style": "",
        "list": false,
        "align": ""
      },
      {
        "type": "paragraph",
        "text": "Stay",
        "style": "",
        "list": false,
        "align": ""
      },
      {
        "type": "paragraph",
        "text": "4 Nights in Trincomalee",
        "style": "",
        "list": false,
        "align": ""
      },
      {
        "type": "paragraph",
        "text": "DAYS 17  - TRINCOMALEE | SIGIRIYA",
        "style": "",
        "list": false,
        "align": ""
      },
      {
        "type": "paragraph",
        "text": "Coastal Serenity Meets Ancient Wonders.",
        "style": "",
        "list": false,
        "align": ""
      },
      {
        "type": "paragraph",
        "text": "Approx. travel time: 2–2.5 hours",
        "style": "",
        "list": false,
        "align": ""
      },
      {
        "type": "paragraph",
        "text": "Leave the coast behind and journey into Sri Lanka's Cultural Triangle, where ancient history and spectacular landscapes await.",
        "style": "",
        "list": false,
        "align": ""
      },
      {
        "type": "paragraph",
        "text": "Discover the heart of Sri Lanka’s Cultural Triangle, where ancient kingdoms, remarkable architecture and timeless traditions tell the story of a fascinating past. Sigiriya captivates visitors with its iconic Lion Rock fortress, dramatic scenery and ancient frescoes, while nearby Dambulla is renowned for its impressive cave temple complex, adorned with centuries-old Buddhist murals and statues. Surrounded by lush greenery, rural villages and scenic countryside, these destinations offer a memorable journey through the island’s rich history, spiritual heritage and extraordinary cultural treasures.",
        "style": "",
        "list": false,
        "align": ""
      },
      {
        "type": "paragraph",
        "text": "Things to Do",
        "style": "",
        "list": false,
        "align": ""
      },
      {
        "type": "paragraph",
        "text": "• Climb the magnificent Sigiriya Rock Fortress\n• Visit the Dambulla Cave Temple\n• Village experience\n• Sunset overlooking Sigiriya from Pidurangala Rock",
        "style": "",
        "list": false,
        "align": ""
      },
      {
        "type": "paragraph",
        "text": "Stay 2 Nights in Sigiriya",
        "style": "",
        "list": false,
        "align": ""
      },
      {
        "type": "paragraph",
        "text": "DAY 19 - SIGIRIYA | WILPATTU",
        "style": "",
        "list": false,
        "align": ""
      },
      {
        "type": "paragraph",
        "text": "A Final Adventure into Sri Lanka’s Wild Heart.",
        "style": "",
        "list": false,
        "align": ""
      },
      {
        "type": "paragraph",
        "text": "Approx. travel time: 3–4 hours",
        "style": "",
        "list": false,
        "align": ""
      },
      {
        "type": "paragraph",
        "text": "Your final adventure takes you to Sri Lanka's largest and oldest national park, renowned for its unique landscape of villus—natural, rain-fed water basins that blanket the wilderness.",
        "style": "",
        "list": false,
        "align": ""
      },
      {
        "type": "paragraph",
        "text": "Wilpattu is a captivating wilderness destination on Sri Lanka’s northwestern coast, renowned for its expansive forests, natural lakes and remarkable wildlife. As one of the island’s largest national parks, it offers an immersive safari experience through dry-zone woodlands, open clearings and distinctive rain-fed lakes known as villus. Visitors may encounter the elusive Sri Lankan leopard, sloth bears, elephants, spotted deer and a fascinating variety of birdlife while exploring the park by jeep. With its untamed landscapes, quieter safari atmosphere and rich biodiversity, Wilpattu is an exceptional destination for wildlife enthusiasts, photographers and travellers seeking an authentic connection with nature.",
        "style": "",
        "list": false,
        "align": ""
      },
      {
        "type": "paragraph",
        "text": "Things to Do",
        "style": "",
        "list": false,
        "align": ""
      },
      {
        "type": "paragraph",
        "text": "• Afternoon Jeep Safari\n• Search for leopards, sloth bears and elephants\n• Enjoy the peaceful natural surroundings",
        "style": "",
        "list": false,
        "align": ""
      },
      {
        "type": "paragraph",
        "text": "Stay",
        "style": "",
        "list": false,
        "align": ""
      },
      {
        "type": "paragraph",
        "text": "Overnight stay in Wilpattu",
        "style": "",
        "list": false,
        "align": ""
      },
      {
        "type": "paragraph",
        "text": "DAY 20 DEPARTURE - WILPATTU |AIRPORT",
        "style": "",
        "list": false,
        "align": ""
      },
      {
        "type": "paragraph",
        "text": "Approx. travel time: 3–4 hours",
        "style": "",
        "list": false,
        "align": ""
      },
      {
        "type": "paragraph",
        "text": "After breakfast, begin your comfortable journey to Bandaranaike International Airport.",
        "style": "",
        "list": false,
        "align": ""
      },
      {
        "type": "paragraph",
        "text": "As your adventure comes to an end, you'll take home memories of golden beaches, emerald mountains, incredible wildlife, ancient kingdoms and the warm smiles of Sri Lanka.",
        "style": "",
        "list": false,
        "align": ""
      },
      {
        "type": "paragraph",
        "text": "Until we meet again...",
        "style": "",
        "list": false,
        "align": ""
      }
    ]
  }
];

export function getDocumentPackage(id: string) {
  return DOCUMENT_PACKAGES.find((item) => item.id === id);
}

