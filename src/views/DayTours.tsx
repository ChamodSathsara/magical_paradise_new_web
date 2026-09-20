import React from 'react';
import Link from 'next/link';
import { Clock3Icon, CloudSunIcon, MapPinIcon, PlaneIcon } from 'lucide-react';
import { PageHero } from '../components/ui/PageHero';
import { Reveal } from '../components/ui/Reveal';
import { SectionHeading } from '../components/ui/SectionHeading';
import { CtaStrip } from '../components/sections/CtaStrip';
import { IMAGES } from '../data/media';

type Tour = { name: string; description: string; duration: string; season: string; nearby?: string; image: string };

const AIR_TOURS: Tour[] = [
  { name: 'Sigiriya by Air', description: 'See the iconic rock fortress from the skies on one of the island’s most scenic aerial journeys.', duration: 'Approx. 1 hour from Colombo or Negombo', season: 'December to April', image: IMAGES.sigiriya },
  { name: 'Kandy by Air', description: 'Fly into the cultural capital, surrounded by misty mountains, lakes and heritage landmarks.', duration: 'Approx. 45 minutes to 1 hour', season: 'Year-round; best December to April and July to August', image: IMAGES.kandy },
  { name: 'Anuradhapura by Air', description: 'Reach Sri Lanka’s ancient sacred kingdom in comfort with views across the Cultural Triangle.', duration: 'Approx. 1 hour from Colombo', season: 'May to September', image: IMAGES.teaCountry },
];

const NATURE_TOURS: Tour[] = [
  { name: 'Yala National Park', description: 'Leopards, elephants, sloth bears and dramatic wilderness in Sri Lanka’s best-known national park.', duration: '2–6 hours by road depending on your starting point', season: 'February to July', image: IMAGES.yala },
  { name: 'Wilpattu National Park', description: 'Natural lakes and untouched wilderness create a quieter, more exclusive safari.', duration: '3.5–7 hours by road', season: 'February to October', image: IMAGES.yala },
  { name: 'Udawalawe National Park', description: 'Open grasslands and memorable sightings of large elephant herds.', duration: '2–5 hours by road', season: 'Year-round', image: IMAGES.yala },
  { name: 'Minneriya National Park', description: 'Lakes, tropical forest and Asia’s spectacular seasonal gathering of wild elephants.', duration: 'Approx. 3 hours from Kandy or 5–6 hours from Colombo', season: 'July to October for the Gathering; safaris year-round', image: IMAGES.sigiriya },
  { name: 'Belihuloya', description: 'A mountain escape of waterfalls, rivers, hiking and adventure. Comfortable clothing and an extra set of clothes are recommended.', duration: '3–5 hours by road', season: 'January to April and June to September', image: IMAGES.ella },
  { name: 'Knuckles Mountain Range', description: 'A guided hike through a UNESCO-listed conservation landscape; trails typically take 3–7 hours.', duration: '1.5–2 hours from Kandy; 4.5–5.5 hours from Colombo', season: 'December to April', image: IMAGES.teaCountry },
  { name: 'Sinharaja Forest Reserve', description: 'Guided rainforest trekking, endemic wildlife, birdlife and the panoramic Sinhagala rock.', duration: '2–6 hours by road', season: 'January to April and August to September', image: IMAGES.teaCountry },
  { name: 'Kitulgala', description: 'White-water rafting, rainforest trails, birdwatching and a traditional rice-and-curry lunch.', duration: '3–4 hours from Colombo or Negombo', season: 'Year-round; May to December for rafting', image: IMAGES.ella },
  { name: 'Whale Watching — South Coast', description: 'Search for blue whales, sperm whales and dolphins in the warm southern waters.', duration: '3–5 hours from Colombo or Negombo', season: 'November to April', image: IMAGES.mirissa },
];

const HERITAGE_TOURS: Tour[] = [
  { name: 'Kandy', description: 'The Temple of the Tooth, lake views, traditional dance, local markets and Peradeniya Gardens.', duration: 'Approx. 3.5 hours from Colombo or Negombo', season: 'Year-round; best December to April', nearby: 'Tea factories, spice gardens, Ambuluwawa and gem museums', image: IMAGES.kandy },
  { name: 'Sigiriya', description: 'Climb the UNESCO-listed rock fortress and discover jungle landscapes, archaeology and village life.', duration: 'Approx. 4–5 hours from Colombo or Negombo', season: 'January to August', nearby: 'Pidurangala, Dambulla, Minneriya and village experiences', image: IMAGES.sigiriya },
  { name: 'Dambulla Cave Temple', description: 'Ancient Buddhist murals, statues and centuries-old shrines within a remarkable cave complex.', duration: 'Approx. 3.5–4 hours', season: 'Year-round; morning or late afternoon', nearby: 'Sigiriya, spice gardens and village tours', image: IMAGES.sigiriya },
  { name: 'Anuradhapura', description: 'Sri Lanka’s first ancient kingdom, with sacred temples, dagobas and monastic heritage.', duration: 'Approx. 4–5 hours', season: 'May to September', nearby: 'Mihintale, Wilpattu and cycling among the ruins', image: IMAGES.kandy },
  { name: 'Polonnaruwa', description: 'A medieval capital of royal palaces, stone carvings and archaeological treasures.', duration: 'Approx. 5–5.5 hours', season: 'May to September', nearby: 'Minneriya, Sigiriya and village experiences', image: IMAGES.sigiriya },
];

const COAST_TOURS: Tour[] = [
  { name: 'Kalpitiya', description: 'Dolphins, kite surfing, sandbanks and peaceful lagoon landscapes.', duration: '3 hours from Negombo; 4 hours from Colombo', season: 'May to October', nearby: 'Lagoon cruises, Dutch Bay and seafood experiences', image: IMAGES.mirissa },
  { name: 'Galle Fort & Bentota', description: 'Golden beaches, colonial heritage, river adventures and seaside charm.', duration: '2–3.5 hours', season: 'November to April', nearby: 'Madu River, turtle hatcheries, water sports and Galle Fort', image: IMAGES.galle },
  { name: 'Mirissa', description: 'Whale watching, tropical beaches, surfing and relaxed oceanfront living.', duration: '3.5–4.5 hours', season: 'November to April', nearby: 'Coconut Tree Hill, snorkelling and beach cafés', image: IMAGES.mirissa },
  { name: 'Hikkaduwa', description: 'Coral reefs, surfing, snorkelling, turtles and an upbeat coastal atmosphere.', duration: '2.5–3.5 hours', season: 'November to April', nearby: 'Reef snorkelling, surf lessons and river safaris', image: IMAGES.mirissa },
];

function TourGrid({ tours }: { tours: Tour[] }) {
  return <div className="mt-12 grid gap-5 md:grid-cols-2 xl:grid-cols-3">{tours.map((tour, index) => (
    <Reveal key={tour.name} delay={(index % 3) * 0.05} className="h-full">
      <article className="group h-full overflow-hidden rounded-xl border border-jungle/10 bg-ivory shadow-card">
        <div className="aspect-[16/9] overflow-hidden bg-sand"><img src={tour.image} alt={tour.name} className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"/></div>
        <div className="p-7"><h3 className="font-serif text-2xl text-jungle">{tour.name}</h3>
        <p className="mt-3 text-sm leading-7 text-jungle-muted">{tour.description}</p>
        <dl className="mt-6 space-y-3 border-t border-jungle/10 pt-5 text-sm">
          <div className="flex gap-3"><Clock3Icon className="mt-0.5 h-4 w-4 shrink-0 text-gold-dark"/><div><dt className="font-medium text-jungle">Travel duration</dt><dd className="text-jungle-muted">{tour.duration}</dd></div></div>
          <div className="flex gap-3"><CloudSunIcon className="mt-0.5 h-4 w-4 shrink-0 text-gold-dark"/><div><dt className="font-medium text-jungle">When to go</dt><dd className="text-jungle-muted">{tour.season}</dd></div></div>
          {tour.nearby && <div className="flex gap-3"><MapPinIcon className="mt-0.5 h-4 w-4 shrink-0 text-gold-dark"/><div><dt className="font-medium text-jungle">Nearby experiences</dt><dd className="text-jungle-muted">{tour.nearby}</dd></div></div>}
        </dl></div>
      </article>
    </Reveal>
  ))}</div>;
}

export function DayTours() {
  return <>
    <PageHero eyebrow="Curated Island Experiences" title="Day Tours" subtitle="Culture, wildlife, coastlines and signature Sri Lankan moments — thoughtfully planned around where you stay and the time you have." image={IMAGES.galle} imageAlt="Sri Lanka coastline at sunset" locationTag="Across Sri Lanka" stats={[{value:'30+',label:'Day Experiences'},{value:'1 Day',label:'Easy Escapes'},{value:'Islandwide',label:'Private Travel'}]} />
    <section className="bg-ivory py-20 lg:py-28"><div className="mx-auto grid max-w-content gap-12 px-6 lg:grid-cols-[.8fr_1.2fr] lg:gap-20"><Reveal><div><p className="eyebrow text-gold-dark">Airport Escape Day Tours</p><h2 className="mt-4 font-serif text-4xl font-light text-jungle sm:text-5xl">Make every hour in Sri Lanka count</h2></div></Reveal><Reveal delay={.08}><div className="space-y-5 text-base leading-8 text-jungle-muted"><p>Perfect for travellers with limited time, transit stays or guests beginning their Sri Lankan journey. Our experiences from Negombo and Colombo blend culture, nature, relaxation and local life within comfortable travelling distance of the airport.</p><p>Each tour can be adjusted to your arrival time, hotel location, interests and preferred pace.</p><Link href="/contact" className="inline-flex rounded-full bg-jungle px-7 py-3 text-xs font-semibold uppercase tracking-[.14em] text-ivory">Plan an Airport Escape</Link></div></Reveal></div></section>
    <section className="bg-sand py-20 lg:py-28"><div className="mx-auto max-w-content px-6"><SectionHeading eyebrow="Scenic Air & Luxury Experiences" title="See Sri Lanka from above" subtitle="Exclusive scenic flights and helicopter journeys with trusted domestic aviation partners."/><div className="mt-10 flex justify-center"><PlaneIcon className="h-10 w-10 text-gold-dark" strokeWidth={1.3}/></div><TourGrid tours={AIR_TOURS}/></div></section>
    <section className="bg-ivory py-20 lg:py-28"><div className="mx-auto max-w-content px-6"><SectionHeading eyebrow="Wildlife & Nature Escapes" title="Into the wild" subtitle="Safaris, rainforests, mountains, rivers and ocean encounters for every kind of explorer."/><TourGrid tours={NATURE_TOURS}/></div></section>
    <section className="bg-sand py-20 lg:py-28"><div className="mx-auto max-w-content px-6"><SectionHeading eyebrow="UNESCO Heritage Sites" title="Ancient cities and living culture" subtitle="Explore sacred landmarks, royal capitals and stories spanning centuries."/><TourGrid tours={HERITAGE_TOURS}/></div></section>
    <section className="bg-ivory py-20 lg:py-28"><div className="mx-auto max-w-content px-6"><SectionHeading eyebrow="Coastal Escapes" title="Follow the ocean" subtitle="Marine life, heritage forts, lagoons and some of the island’s most inviting beaches."/><TourGrid tours={COAST_TOURS}/></div></section>
    <section className="bg-jungle-deep py-20 text-ivory"><div className="mx-auto max-w-content px-6"><SectionHeading eyebrow="Signature Experiences" title="A day to remember" subtitle="Distinctive journeys that reveal another side of Sri Lanka." tone="light"/><div className="mt-12 grid gap-6 md:grid-cols-3">{[
      ['Hot Air Ballooning','A sunrise flight above the Cultural Triangle, followed by a champagne breakfast. Best from November to April.'],
      ['Geoffrey Bawa Architectural Trail','Discover tropical modernism through Lunuganga, Gallery Café and selected architectural landmarks.'],
      ['Little England — Nuwara Eliya','Waterfalls, fine Ceylon tea, Seetha Amman Temple, colonial architecture and cool hill-country air.'],
      ['Angampora Experience','Encounter Sri Lanka’s ancient martial art through demonstrations, storytelling and traditional techniques.'],
      ['Negombo Experiences','Lagoon boats, the fish market, Dutch Canal, St. Mary’s Church and golden-hour beach sunsets.'],
      ['Colombo Experiences','Open-jeep city tours, street food, tuk-tuk sunsets and guided walks through historic neighbourhoods.'],
    ].map(([title,copy])=><div key={title} className="rounded-xl border border-white/10 bg-white/5 p-7"><h3 className="font-serif text-2xl text-gold-light">{title}</h3><p className="mt-3 text-sm leading-7 text-ivory/70">{copy}</p></div>)}</div></div></section>
    <CtaStrip eyebrow="Your Day, Your Way" title="Where would you like to explore?" description="Tell us where you are staying and what interests you. We will shape the right private day tour around your schedule." primaryLabel="Plan My Day Tour"/>
  </>;
}
