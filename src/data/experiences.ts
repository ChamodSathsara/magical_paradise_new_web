import { IMAGES } from './media';

export type Experience = {
  id: string;
  title: string;
  category: string;
  description: string;
  image: string;
  icon: string;
};

export const EXPERIENCES: Experience[] = [
{
  id: 'yoga-meditation',
  title: 'Yoga & Meditation',
  category: 'Wellness / Spiritual',
  description:
  'Sri Lanka offers authentic yoga and meditation experiences influenced by ancient Vedic traditions and Buddhist mindfulness practices. Sessions take place in serene settings — hill country retreats, beachside pavilions, or jungle ashrams — combining asanas, pranayama, guided meditation, and mindfulness walks amid tea estates or ocean views.',
  image: IMAGES.teaCountry,
  icon: 'lotus'
},
{
  id: 'weddings-in-the-sun',
  title: 'Weddings in the Sun',
  category: 'Romantic / Luxury',
  description:
  "Sri Lanka ranks among the world's most exotic wedding destinations — ceremonies on golden beaches under palm trees, in lush jungle clearings, colonial villas, or atop misty hills. Options include traditional Kandyan rituals with drummers and dancers, barefoot beach vows, or intimate Ayurveda-inspired wellness weddings.",
  image: IMAGES.mirissa,
  icon: 'heart'
},
{
  id: 'ayurveda-spa-therapy',
  title: 'Ayurveda & Spa Therapy',
  category: 'Wellness / Healing',
  description:
  'With traditions dating back thousands of years, Sri Lankan Ayurveda blends ancient principles with indigenous herbal knowledge. Treatments include Shirodhara, herbal steam baths, body wraps, massages, and personalised dosha-balancing programs — renowned for detoxification, rejuvenation, and stress reduction.',
  image: IMAGES.hotel,
  icon: 'flower'
},
{
  id: 'shopping-sprees',
  title: 'Shopping Sprees',
  category: 'Shopping / Markets',
  description:
  'Sri Lanka delights shoppers with precious gemstones (world-famous Ceylon sapphires and rubies), hand-blocked batiks, vibrant textiles, intricate Buddha statues, aromatic spices, pure Ceylon tea, and eco-friendly handicrafts. Markets in Colombo, Galle Fort boutiques, and roadside stalls offer bargains and authentic souvenirs.',
  image: IMAGES.galle,
  icon: 'bag'
},
{
  id: 'delish-culinary',
  title: 'Delish Culinary',
  category: 'Culinary / Local Cuisine',
  description:
  "Sri Lankan cuisine bursts with aromatic flavours influenced by Southeast Asian, Indian, and Dutch traditions. Rice and curry, hoppers, kottu roti, fresh seafood, lamprais, and street food await. Cooking classes, spice garden visits, and farm-to-table experiences let you taste the island's bold, spiced, coconut-rich cuisine.",
  image: IMAGES.culinary,
  icon: 'chef'
},
{
  id: 'traditional-arts-crafts',
  title: 'Traditional Arts & Crafts',
  category: 'Cultural / Workshops',
  description:
  "Rooted in one of the world's oldest civilisations, Sri Lankan arts and crafts showcase skills passed through generations — mask carving, Kandyan dance, batik printing, Dumbara mat weaving, silver filigree jewellery, and temple murals. Visit artisan villages, watch live demonstrations, or join hands-on workshops.",
  image: IMAGES.kandy,
  icon: 'palette'
},
{
  id: 'sporting-breaks',
  title: 'Sporting Breaks',
  category: 'Adventure / Sports',
  description:
  "Sri Lanka's diverse terrain sets the stage for thrilling sports year-round — surfing the south and east coasts, white-water rafting at Kitulgala, hiking Ella Rock or Adam's Peak, mountain biking, scuba diving, golf on colonial courses, and adventure sports like zip-lining or canyoning, suiting all levels.",
  image: IMAGES.ella,
  icon: 'activity'
},
{
  id: 'colourful-culture',
  title: 'Colourful Culture',
  category: 'Cultural / Festivals',
  description:
  'Steeped in Buddhism since the 3rd century BC, Sri Lankan culture blends ancient rituals, festivals, and daily life. Experience temple poojas, Kandyan dance and drumming, elephant processions (Perahera festival), Vesak lanterns, and multicultural vibrancy — immersive insight into harmony, devotion, and living heritage.',
  image: IMAGES.kandy,
  icon: 'drum'
},
{
  id: 'exhilarating-adventures',
  title: 'Exhilarating Adventures',
  category: 'Adventure / Nature',
  description:
  'Dense jungles, towering mountains, giant rock fortresses, balmy oceans, and rolling hills create a paradise for adrenaline seekers. Wildlife safaris (leopards in Yala, elephants in Udawalawe), hot air ballooning over ancient cities, whale watching, kayaking lagoons, and multi-day treks combine thrills with breathtaking natural beauty.',
  image: IMAGES.yala,
  icon: 'mountain'
}];