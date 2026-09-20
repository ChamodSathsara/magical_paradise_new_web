import React from 'react';
import { PageHero } from '../components/ui/PageHero';
import { ExperienceCard } from '../components/cards/ExperienceCard';
import { Reveal } from '../components/ui/Reveal';
import { CtaStrip } from '../components/sections/CtaStrip';
import { EXPERIENCES } from '../data/experiences';
import { IMAGES } from '../data/media';

export function UniqueExperiences(){const items=EXPERIENCES.filter(item=>item.uniqueToSriLanka===true);return <>
  <PageHero eyebrow="Living Heritage" title="Only in Sri Lanka" subtitle="Encounter rare traditions, sacred rituals, distinctive crafts and island experiences found nowhere else." image={IMAGES.kandy} imageAlt="Traditional Sri Lankan cultural heritage in Kandy" stats={[{value:`${items.length}`,label:'Unique Experiences'},{value:'1',label:'Extraordinary Island'}]}/>
  <section className="bg-ivory py-16 lg:py-24"><div className="mx-auto max-w-content px-6"><ul className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">{items.map((item,index)=><li key={item.id}><Reveal delay={index%3*.06} className="h-full"><ExperienceCard experience={item}/></Reveal></li>)}</ul></div></section>
  <CtaStrip eyebrow="Make It Yours" title="Discover what belongs only to this island" description="Tell us which traditions and encounters inspire you, and we will shape them into your Sri Lankan journey." primaryLabel="Start Planning" primaryTo="/plan-your-trip"/>
  </>}
