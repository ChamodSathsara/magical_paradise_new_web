'use client';

import React, { FormEvent, useState } from 'react';
import { CheckIcon, HeartIcon, UsersIcon } from 'lucide-react';
import { PageHero } from '../components/ui/PageHero';
import { Reveal } from '../components/ui/Reveal';
import { SectionHeading } from '../components/ui/SectionHeading';
import { IMAGES } from '../data/media';
import { SITE } from '../data/site';

const GROUP_TYPES = [
  ['Adventure Groups', 'Waterfalls, hiking, camping, Knuckles adventures, Ella trails, rafting and off-the-beaten-path experiences.', IMAGES.ella],
  ['Wildlife & Safari Groups', 'Leopard safaris, birdwatching, elephant encounters, whale watching and photography-focused journeys.', IMAGES.yala],
  ['Wellness & Retreat Groups', 'Yoga retreats, Ayurveda, meditation programs, wellness escapes and slow-travel concepts.', IMAGES.hotel],
  ['Golf Tours', 'Premium golf experiences across Colombo, Digana, Nuwara Eliya and Hambantota.', IMAGES.teaCountry],
  ['Photography & Nature Tours', 'Sunrise trails, cultural and wildlife photography, waterfalls, tea estates and hidden landscapes.', IMAGES.teaCountry],
  ['Cultural & Heritage Tours', 'Temples, ancient kingdoms, UNESCO sites, village life, local traditions and authentic cuisine.', IMAGES.sigiriya],
  ['Corporate & Incentive Travel', 'Team outings, MICE programs, incentive tours, executive retreats and company adventures.', '/images/corporate/ksp-7051-web.jpg'],
  ['Private Social Groups', 'Family reunions, birthdays, friend circles, honeymoon groups and customized celebrations.', IMAGES.galle],
] as const;

const BENEFITS = ['Shared memories and new friendships','Cost-effective luxury experiences','Safer, smoother travel planning','Access to unique local experiences','Hassle-free logistics and transportation','Dedicated tour coordinators and guides','Fun-filled journeys with like-minded travellers'];
const SERVICES = ['Airport transfers','Luxury and standard accommodation','Transportation with experienced chauffeurs','Experienced local guides','Entrance tickets and activity coordination','Safari jeeps and adventure arrangements','Meal planning','Train ticket arrangements','Beach stays and wellness add-ons','Photography stops and hidden gems','Custom itineraries for every travel style'];

function InquiryForm({ source, title }: { source: string; title: string }) {
  const [sent, setSent] = useState(false);
  const submit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    const body = [`Inquiry source: ${source}`, `Name: ${data.get('name')}`, `Email: ${data.get('email')}`, `Phone: ${data.get('phone')}`, `Group size: ${data.get('size')}`, `Preferred dates: ${data.get('dates')}`, '', String(data.get('message') ?? '')].join('\n');
    window.location.href = `mailto:${SITE.enquiryEmail}?subject=${encodeURIComponent(source)}&body=${encodeURIComponent(body)}`;
    setSent(true);
  };
  return <form onSubmit={submit} className="rounded-xl border border-jungle/10 bg-ivory p-6 shadow-card sm:p-8">
    <input type="hidden" name="source" value={source}/>
    <h3 className="font-serif text-3xl text-jungle">{title}</h3>
    <p className="mt-2 text-sm leading-6 text-jungle-muted">Tell us about your group. This enquiry will be labelled with its page source when it reaches our travel team.</p>
    <div className="mt-6 grid gap-4 sm:grid-cols-2">
      <label className="text-xs font-medium uppercase tracking-wider text-jungle">Full name<input required name="name" className="mt-2 w-full rounded-md border border-jungle/15 bg-white px-4 py-3 text-sm font-normal normal-case tracking-normal outline-none focus:border-gold"/></label>
      <label className="text-xs font-medium uppercase tracking-wider text-jungle">Email<input required type="email" name="email" className="mt-2 w-full rounded-md border border-jungle/15 bg-white px-4 py-3 text-sm font-normal normal-case tracking-normal outline-none focus:border-gold"/></label>
      <label className="text-xs font-medium uppercase tracking-wider text-jungle">Phone<input required name="phone" className="mt-2 w-full rounded-md border border-jungle/15 bg-white px-4 py-3 text-sm font-normal normal-case tracking-normal outline-none focus:border-gold"/></label>
      <label className="text-xs font-medium uppercase tracking-wider text-jungle">Group size<input required type="number" min="1" name="size" className="mt-2 w-full rounded-md border border-jungle/15 bg-white px-4 py-3 text-sm font-normal normal-case tracking-normal outline-none focus:border-gold"/></label>
      <label className="text-xs font-medium uppercase tracking-wider text-jungle sm:col-span-2">Preferred dates<input name="dates" className="mt-2 w-full rounded-md border border-jungle/15 bg-white px-4 py-3 text-sm font-normal normal-case tracking-normal outline-none focus:border-gold"/></label>
      <label className="text-xs font-medium uppercase tracking-wider text-jungle sm:col-span-2">Your ideas<textarea required name="message" rows={5} className="mt-2 w-full resize-y rounded-md border border-jungle/15 bg-white px-4 py-3 text-sm font-normal normal-case tracking-normal outline-none focus:border-gold"/></label>
    </div>
    <button className="mt-5 rounded-full bg-jungle px-7 py-3 text-xs font-semibold uppercase tracking-[.14em] text-ivory hover:bg-jungle-light">Send enquiry</button>
    {sent && <p className="mt-3 text-sm text-jungle-muted">Your email app is opening with the enquiry details.</p>}
  </form>;
}

export function GroupTours() {
  return <>
    <PageHero eyebrow="Guided Group Tours" title="Travel Together. Explore Deeper. Experience More." subtitle="Seamless group journeys filled with culture, nature, adventure and authentic local moments." image={IMAGES.sigiriya} imageAlt="Sigiriya rising above Sri Lanka's green landscape" locationTag="Sri Lanka" stats={[{value:'10+',label:'Minimum Guests'},{value:'8',label:'Group Styles'},{value:'100%',label:'Tailor Made'}]} />
    <section className="bg-ivory py-20 lg:py-28"><div className="mx-auto grid max-w-content gap-12 px-6 lg:grid-cols-[.8fr_1.2fr] lg:gap-20"><Reveal><div><p className="eyebrow text-gold-dark">Guided Group Tours</p><h2 className="mt-4 font-serif text-4xl font-light leading-tight text-jungle sm:text-5xl">Shared journeys, beautifully coordinated</h2></div></Reveal><Reveal delay={.08}><div className="space-y-5 text-base leading-8 text-jungle-muted"><p>We create unforgettable Sri Lankan journeys for friends, families, solo travellers joining fixed departures, corporate teams, photography clubs, wellness communities, fitness groups and other special-interest travellers.</p><p>From misty mountains and safaris to hidden waterfalls, village encounters, scenic trains and memorable stays, every itinerary is designed around comfort, safety and connection.</p><p className="font-medium text-jungle">Guided group tours operate with a minimum of 10 participants.</p></div></Reveal></div></section>
    <section className="bg-sand py-20 lg:py-28"><div className="mx-auto max-w-content px-6"><SectionHeading eyebrow="Tour Styles" title="Groups we welcome" subtitle="Choose a theme or combine several interests in one custom journey."/><div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">{GROUP_TYPES.map(([title,copy,image],i)=><Reveal key={title} delay={(i%4)*.04} className="h-full"><article className="group h-full overflow-hidden rounded-xl border border-jungle/10 bg-ivory shadow-card"><div className="aspect-[4/3] overflow-hidden bg-sand"><img src={image} alt={title} className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"/></div><div className="p-7"><UsersIcon className="h-7 w-7 text-gold-dark" strokeWidth={1.4}/><h3 className="mt-5 font-serif text-xl text-jungle">{title}</h3><p className="mt-3 text-sm leading-7 text-jungle-muted">{copy}</p></div></article></Reveal>)}</div></div></section>
    <section className="bg-jungle-deep py-20 text-ivory lg:py-28"><div className="mx-auto grid max-w-content gap-12 px-6 lg:grid-cols-2 lg:gap-20"><Reveal><div><p className="eyebrow text-gold-light">Why Travel as a Group?</p><h2 className="mt-4 font-serif text-4xl font-light">More connection. Less complication.</h2><ul className="mt-8 space-y-4">{BENEFITS.map(x=><li key={x} className="flex gap-3 text-ivory/75"><CheckIcon className="mt-1 h-4 w-4 shrink-0 text-gold-light"/>{x}</li>)}</ul></div></Reveal><Reveal delay={.08}><div><p className="eyebrow text-gold-light">What We Handle</p><h2 className="mt-4 font-serif text-4xl font-light">Every detail, covered</h2><ul className="mt-8 grid gap-4 sm:grid-cols-2">{SERVICES.map(x=><li key={x} className="flex gap-3 text-sm text-ivory/75"><CheckIcon className="mt-0.5 h-4 w-4 shrink-0 text-gold-light"/>{x}</li>)}</ul></div></Reveal></div></section>
    <section id="group-enquiry" className="bg-sand py-20 lg:py-28"><div className="mx-auto grid max-w-content items-start gap-12 px-6 lg:grid-cols-[.8fr_1.2fr]"><Reveal><div><p className="eyebrow text-gold-dark">Connect With Us</p><h2 className="mt-4 font-serif text-4xl font-light text-jungle">Start your group journey</h2><p className="mt-5 leading-8 text-jungle-muted">More than a tour — shared stories, friendships, adventure and unforgettable Sri Lankan moments.</p></div></Reveal><Reveal delay={.08}><InquiryForm source="Group Tour Inquiry" title="Group Tour Enquiry"/></Reveal></div></section>
    <section className="bg-ivory py-20 lg:py-28"><div className="mx-auto grid max-w-content items-center gap-12 px-6 lg:grid-cols-2 lg:gap-20"><Reveal><div className="relative overflow-hidden rounded-xl"><img src={IMAGES.maldives} alt="A private island escape in the Maldives" className="aspect-[4/3] h-full w-full object-cover"/></div></Reveal><Reveal delay={.08}><div><HeartIcon className="h-9 w-9 text-gold-dark" strokeWidth={1.4}/><p className="eyebrow mt-6 text-gold-dark">Family Escapes & Private Celebrations</p><h2 className="mt-4 font-serif text-4xl font-light leading-tight text-jungle sm:text-5xl">Celebrate life’s meaningful moments</h2><div className="mt-6 space-y-4 leading-8 text-jungle-muted"><p>From family weddings, anniversaries and milestone birthdays to intimate reunions and exclusive private getaways, we create refined experiences around comfort and connection.</p><p>Choose a golden-coast beach escape, misty hill-country retreat, private villa gathering, wildlife adventure, Maldives extension or a tailor-made family journey across the island.</p></div></div></Reveal></div></section>
    <section id="family-enquiry" className="bg-sand py-20 lg:py-28"><div className="mx-auto max-w-3xl px-6"><Reveal><InquiryForm source="Family Escapes & Private Celebrations Inquiry" title="Plan a Private Celebration"/></Reveal></div></section>
  </>;
}
