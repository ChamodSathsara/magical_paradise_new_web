import React from 'react';
import { PageHero } from '../components/ui/PageHero';
import { Reveal } from '../components/ui/Reveal';
import { CtaStrip } from '../components/sections/CtaStrip';
import { IMAGES } from '../data/media';

const FACES=[
  {title:'Ancient & Sacred Sri Lanka',image:IMAGES.sigiriya,text:'Sigiriya, Dambulla, Kandy and Anuradhapura reveal sacred rituals, living temples and historic cities shaped over centuries.'},
  {title:'Wild Sri Lanka',image:IMAGES.yala,text:'Yala, Wilpattu and Gal Oya open into a world of elephants, elusive leopards, rich birdlife and seasonal marine encounters.'},
  {title:'Tea Country & Highlands',image:IMAGES.teaCountry,text:'Nuwara Eliya, Ella and Hatton invite scenic train journeys, estate visits and hikes through cool, mist-covered hills.'},
  {title:'Coastal Sri Lanka',image:IMAGES.mirissa,text:'Galle, Mirissa, Bentota, Trincomalee, Arugam Bay and Weligama each express a different rhythm of island life.'},
  {title:'Culinary Sri Lanka',image:IMAGES.culinary,text:'Rice and curry, street food, Ceylon tea, true cinnamon and regional recipes tell the story of a generous island table.'},
  {title:'Wellness & Spiritual Sri Lanka',image:IMAGES.hotel,text:'Ayurveda, yoga, meditation, Poya traditions and forest retreats create space for restoration and reflection.'},
  {title:'Creative & Artisan Sri Lanka',image:IMAGES.kandy,text:'Batik, Dumbara weaving, pottery, traditional drums and local craft preserve skills passed between generations.'},
  {title:'Modern Sri Lanka',image:IMAGES.galle,text:'Colombo and Port City blend rooftop dining, independent design, shopping, luxury stays, golf and contemporary entertainment.'},
];
export function ManyFacesOfSriLanka(){return <>
  <PageHero eyebrow="One Island. Countless Journeys." title="Many Faces of Sri Lanka" subtitle="Sri Lanka is more than a destination — it is a collection of extraordinary experiences within one island, moving from beaches to mountains, wildlife, ancient kingdoms, retreats and village life." image={IMAGES.teaCountry} imageAlt="Sri Lanka's diverse tea country landscape"/>
  <section className="bg-ivory py-16 lg:py-24"><div className="mx-auto max-w-content space-y-10 px-6">{FACES.map((face,i)=><Reveal key={face.title}><article className="grid overflow-hidden rounded-lg border border-jungle/10 bg-white lg:grid-cols-2"><img src={face.image} alt={`${face.title} landscape and culture`} loading="lazy" className={`h-72 w-full object-cover lg:h-full ${i%2?'lg:order-2':''}`}/><div className="flex flex-col justify-center p-8 sm:p-10 lg:p-14"><p className="eyebrow text-gold-dark">Story {String(i+1).padStart(2,'0')}</p><h2 className="mt-3 font-serif text-3xl font-light text-jungle">{face.title}</h2><p className="mt-5 text-[15px] leading-7 text-jungle-muted">{face.text}</p></div></article></Reveal>)}</div></section>
  <CtaStrip eyebrow="Your Sri Lanka" title="Your Sri Lanka. Your Journey." description="Share what inspires you and our specialists will shape a journey through the landscapes, traditions and communities you want to know." primaryLabel="Start Planning" primaryTo="/plan-your-trip"/>
  </>}
