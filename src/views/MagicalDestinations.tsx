import React from 'react';
import Link from 'next/link';
import { ArrowRightIcon } from 'lucide-react';
import { PageHero } from '../components/ui/PageHero';
import { Reveal } from '../components/ui/Reveal';
import { CtaStrip } from '../components/sections/CtaStrip';
import { DESTINATIONS } from '../data/destinations';
import { IMAGES } from '../data/media';

export function MagicalDestinations(){return <>
  <PageHero eyebrow="Explore the Island" title="Magical Destinations" subtitle="Discover Sri Lanka’s ancient cities, mist-covered highlands, wildlife wilderness, hidden villages and tropical coastlines." image={IMAGES.galle} imageAlt="Galle Fort and Sri Lanka's southern coastline" stats={[{value:`${DESTINATIONS.length}+`,label:'Destinations'},{value:'8',label:'UNESCO Sites'},{value:'1',label:'Extraordinary Island'}]}/>
  <section className="bg-ivory py-16 lg:py-24"><div className="mx-auto max-w-content px-6"><ul className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">{DESTINATIONS.map((item,index)=><li key={item.id}><Reveal delay={index%3*.05} className="h-full"><article className="group flex h-full flex-col overflow-hidden rounded-lg border border-jungle/10 bg-white shadow-card"><div className="aspect-[16/10] overflow-hidden"><img src={item.image} alt={`${item.name}, Sri Lanka`} loading="lazy" className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"/></div><div className="flex flex-1 flex-col p-6"><p className="eyebrow text-gold-dark">{item.region}</p><h2 className="mt-2 font-serif text-2xl text-jungle">{item.name}</h2><p className="mt-3 line-clamp-3 text-sm leading-6 text-jungle-muted">{item.summary}</p><p className="mt-4 text-xs text-jungle-muted"><span className="font-medium text-jungle">Best time:</span> {item.bestTime}</p><Link href={`/experience-sri-lanka/magical-destinations/${item.id}`} className="mt-auto inline-flex items-center gap-2 pt-6 text-[11px] font-medium uppercase tracking-[.14em] text-gold-dark hover:text-jungle">Explore Destination <ArrowRightIcon className="h-3.5 w-3.5"/></Link></div></article></Reveal></li>)}</ul></div></section>
  <CtaStrip eyebrow="Bespoke Planning" title="Turn destinations into a seamless journey" description="Tell us which places captured your imagination and we will connect them around your dates and pace." primaryLabel="Start Planning" primaryTo="/plan-your-trip"/>
  </>}
