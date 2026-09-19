import React from 'react';
import { PageHero } from '../components/ui/PageHero';
import { Reveal } from '../components/ui/Reveal';
import { SectionHeading } from '../components/ui/SectionHeading';
import { CtaStrip } from '../components/sections/CtaStrip';
import { IslandMap } from '../components/sections/IslandMap';
import { IMAGES } from '../data/media';

const REGIONS = [
  ['Cultural Triangle', ['Sigiriya', 'Dambulla', 'Anuradhapura', 'Polonnaruwa']],
  ['Hill Country', ['Kandy', 'Nuwara Eliya', 'Ella']],
  ['South Coast', ['Galle', 'Mirissa', 'Bentota', 'Hambantota']],
  ['East Coast', ['Trincomalee', 'Pasikudah', 'Arugam Bay']],
  ['West Coast', ['Colombo', 'Negombo', 'Kalpitiya']],
  ['North', ['Jaffna', 'Wilpattu']],
  ['Wildlife & Nature', ['Yala', 'Wilpattu', 'Kataragama']],
] as const;

export function TouristMap() {
  return <>
    <PageHero eyebrow="Explore the Island" title="Full Tourist Map" subtitle="Discover Sri Lanka at a glance — from ancient cities and wildlife reserves to beaches, tea country, cultural landmarks and coastal escapes." image={IMAGES.sigiriya} imageAlt="Sigiriya rising above Sri Lanka's central landscape" />
    <IslandMap />
    <section className="bg-ivory py-16 lg:py-24"><div className="mx-auto max-w-content px-6">
      <SectionHeading eyebrow="Key Travel Regions" title="One island, many landscapes" subtitle="Connect cultural cities, cool highlands, wildlife reserves and contrasting coastlines into a journey that feels entirely your own." />
      <p className="mx-auto mt-6 max-w-2xl text-center text-xs leading-5 text-jungle-muted">Travel times are approximate and may vary depending on traffic, weather and road conditions.</p>
      <div className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">{REGIONS.map(([name, places], index) => <Reveal key={name} delay={index % 4 * .05} className="h-full"><article className="h-full rounded-lg border border-jungle/10 bg-white p-6 shadow-card"><h2 className="font-serif text-xl text-jungle">{name}</h2><p className="mt-3 text-sm leading-6 text-jungle-muted">{places.join(' · ')}</p></article></Reveal>)}</div>
    </div></section>
    <CtaStrip eyebrow="Start Exploring" title="Turn the map into your journey" description="Tell us which parts of Sri Lanka inspire you and we will connect them into a seamless itinerary." primaryLabel="Start Planning" primaryTo="/plan-your-trip" />
  </>;
}
