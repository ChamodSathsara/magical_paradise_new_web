'use client';
import React, { useState } from 'react';
import { PageHero } from '../components/ui/PageHero';
import { ExperienceCard } from '../components/cards/ExperienceCard';
import { Reveal } from '../components/ui/Reveal';
import { CtaStrip } from '../components/sections/CtaStrip';
import { EXPERIENCES } from '../data/experiences';
import { IMAGES } from '../data/media';

const FILTERS = [['All','All'],['Culture & Heritage','Cultural, Traditional & Heritage'],['Wildlife & Safari','Wildlife, Eco & Safari'],['Adventure','Adventure, Water & Extreme Sports'],['Wellness','Wellness, Retreats & Unique Escapes'],['Food & Shopping','Shopping & Food'],['Luxury & Entertainment','Nightlife, Entertainment & Luxury'],['Regional','Region-Specific Experiences'],['Only in Sri Lanka','Only in Sri Lanka']];

export function Experiences() {
  const [filter,setFilter] = useState('All');
  const visible = filter === 'All' ? EXPERIENCES : EXPERIENCES.filter(item => item.category === filter);
  return <>
    <PageHero eyebrow="Curated Encounters" title="Things to Do" subtitle="Discover Sri Lanka through cultural traditions, wildlife encounters, adventure, wellness, food, coastal escapes and rare experiences found only on the island." image={IMAGES.culinary} imageAlt="A Sri Lankan rice and curry spread with fresh spices" stats={[{value:`${EXPERIENCES.length}+`,label:'Experiences'},{value:'8',label:'Categories'},{value:'1',label:'Extraordinary Island'}]} />
    <section className="w-full bg-ivory py-16 lg:py-24"><div className="mx-auto max-w-content px-6">
      <div className="mb-10 flex flex-wrap justify-center gap-2" role="group" aria-label="Filter experiences by category">{FILTERS.map(([label,value])=><button key={value} type="button" onClick={()=>setFilter(value)} aria-pressed={filter===value} className={`rounded-full border px-4 py-2 text-[10px] font-medium uppercase tracking-[0.12em] transition-colors ${filter===value?'border-jungle bg-jungle text-ivory':'border-jungle/15 bg-white text-jungle-muted hover:border-gold hover:text-jungle'}`}>{label}</button>)}</div>
      <ul className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">{visible.map((experience,index)=><li key={experience.id}><Reveal delay={index%3*.06} className="h-full"><ExperienceCard experience={experience}/></Reveal></li>)}</ul>
    </div></section>
    <CtaStrip eyebrow="Make It Yours" title="Build a trip around what you love" description="Tell us which experiences excite you most — wellness, wildlife, food, surf or ceremony — and we'll design the journey around them." primaryLabel="Start Planning" primaryTo="/plan-your-trip" />
  </>;
}
