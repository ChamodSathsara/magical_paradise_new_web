import React from 'react';
import Link from 'next/link';
import { ArrowLeftIcon, CalendarIcon, ClockIcon, MapPinIcon, UsersIcon } from 'lucide-react';
import { PageHero } from '../components/ui/PageHero';
import { ExperienceCard } from '../components/cards/ExperienceCard';
import { Reveal } from '../components/ui/Reveal';
import { CtaStrip } from '../components/sections/CtaStrip';
import { EXPERIENCES, type Experience } from '../data/experiences';

export function ExperienceDetail({experience}:{experience:Experience}) {
  const related=EXPERIENCES.filter(x=>x.slug!==experience.slug&&x.category===experience.category).slice(0,3);
  const info=[experience.season&&{label:'Season',value:experience.season,Icon:CalendarIcon},experience.duration&&{label:'Duration',value:experience.duration,Icon:ClockIcon},experience.bestFor?.length&&{label:'Best For',value:experience.bestFor.join(', '),Icon:UsersIcon}].filter(Boolean) as {label:string;value:string;Icon:typeof CalendarIcon}[];
  const gallery=[experience.image,...(experience.gallery??[])];
  return <>
    <PageHero eyebrow={experience.category} title={experience.title} subtitle={experience.shortDescription} image={experience.image} imageAlt={`${experience.title} in Sri Lanka`}/>
    <section className="bg-ivory py-16 lg:py-20"><div className="mx-auto max-w-content px-6"><Link href="/experience-sri-lanka/things-to-do" className="inline-flex items-center gap-2 text-[11px] font-medium uppercase tracking-[.16em] text-jungle-muted hover:text-jungle"><ArrowLeftIcon className="h-3.5 w-3.5"/>Back to Things to Do</Link>
      <div className="mt-10 grid gap-12 lg:grid-cols-[1.6fr_1fr] lg:gap-16"><div><Reveal><p className="eyebrow text-gold-dark">The Experience</p><h2 className="mt-3 font-serif text-3xl font-light text-jungle">A closer look</h2><p className="mt-5 text-[15px] leading-8 text-jungle-muted">{experience.description}</p></Reveal>
        {experience.highlights?.length?<Reveal className="mt-12"><p className="eyebrow text-gold-dark">Highlights</p><h2 className="mt-3 font-serif text-3xl font-light text-jungle">Experience Highlights</h2><ul className="mt-6 grid gap-3 sm:grid-cols-2">{experience.highlights.map(x=><li key={x} className="flex gap-3 rounded-lg border border-jungle/10 bg-white p-4 text-sm text-jungle-muted"><span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-gold"/>{x}</li>)}</ul></Reveal>:null}
        {gallery.length>1?<Reveal className="mt-12"><p className="eyebrow text-gold-dark">Gallery</p><div className="mt-6 grid grid-cols-2 gap-3">{gallery.slice(0,4).map((src,i)=><img key={`${src}-${i}`} src={src} alt={`${experience.title} experience view ${i+1}`} loading="lazy" className="aspect-[4/3] w-full rounded-lg object-cover"/>)}</div></Reveal>:null}
      </div><aside className="lg:sticky lg:top-28 lg:self-start"><div className="rounded-lg border border-jungle/10 bg-white p-7 shadow-card"><h2 className="font-serif text-xl text-jungle">Where to Experience It</h2><ul className="mt-5 space-y-3">{experience.locations.map(x=><li key={x} className="flex items-center gap-3 text-sm text-jungle-muted"><MapPinIcon className="h-4 w-4 shrink-0 text-gold-dark"/>{x}</li>)}</ul>{info.length?<dl className="mt-7 space-y-5 border-t border-jungle/10 pt-6">{info.map(({label,value,Icon})=><div key={label} className="flex gap-3"><Icon className="mt-0.5 h-4 w-4 shrink-0 text-gold-dark"/><div><dt className="text-[10px] uppercase tracking-[.16em] text-jungle-muted">{label}</dt><dd className="mt-1 text-sm text-jungle">{value}</dd></div></div>)}</dl>:null}<Link href="/plan-your-trip" className="mt-7 inline-flex w-full justify-center rounded-full bg-jungle px-6 py-3.5 text-[11px] uppercase tracking-[.16em] text-ivory hover:bg-jungle-light">Add to My Journey</Link></div></aside></div>
    </div></section>
    {related.length?<section className="bg-sand py-16 lg:py-20"><div className="mx-auto max-w-content px-6"><h2 className="font-serif text-3xl font-light text-jungle">You May Also Like</h2><ul className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">{related.map(x=><li key={x.id}><ExperienceCard experience={x}/></li>)}</ul></div></section>:null}
    <CtaStrip eyebrow="Make It Yours" title="Experience Sri Lanka your way" description="Tell us what inspires you and our travel specialists will shape a journey around the experiences you love." primaryLabel="Start Planning" primaryTo="/plan-your-trip"/>
  </>;
}
