'use client';

import React, { useMemo, useState } from 'react';
import { motion } from 'framer-motion';
import { PageHero } from '../components/ui/PageHero';
import { DestinationCard } from '../components/cards/DestinationCard';
import { Reveal } from '../components/ui/Reveal';
import { CtaStrip } from '../components/sections/CtaStrip';
import { DESTINATIONS } from '../data/destinations';
import { IMAGES } from '../data/media';

const REGION_FILTERS = [
'All Regions',
'Cultural Triangle',
'Hill Country',
'South Coast',
'Wildlife & Safari',
'City & Coast'];


function matchesRegion(region: string, filter: string) {
  if (filter === 'All Regions') return true;
  if (filter === 'City & Coast') {
    return (
      region.includes('West Coast') ||
      region.includes('City') ||
      region.includes('East Coast') ||
      region.includes('Northern'));

  }
  return region.includes(filter.split(' & ')[0]);
}

export function Destinations() {
  const [filter, setFilter] = useState(REGION_FILTERS[0]);

  const results = useMemo(
    () => DESTINATIONS.filter((destination) => matchesRegion(destination.region, filter)),
    [filter]
  );

  return (
    <>
      <PageHero
        eyebrow="Where To Go"
        title="Destinations"
        subtitle="Sri Lanka is one of the most exotic getaways in the world. Surrounded by the azure Indian Ocean, home to 8 UNESCO World Heritage Sites, 15 national parks, and nearly 500,000 acres of lush tea estates."
        image={IMAGES.galle}
        imageAlt="The ramparts and lighthouse of Galle Fort at sunset"
        stats={[
        { value: '20+', label: 'Destinations' },
        { value: '8', label: 'UNESCO Sites' },
        { value: '15', label: 'National Parks' }]
        } />
      

      <section className="w-full bg-ivory py-16 lg:py-20">
        <div className="mx-auto max-w-content px-6">
          <div
            className="no-scrollbar flex gap-1 overflow-x-auto pb-2"
            role="tablist"
            aria-label="Filter destinations by region">
            
            {REGION_FILTERS.map((region) =>
            <button
              key={region}
              type="button"
              role="tab"
              aria-selected={region === filter}
              onClick={() => setFilter(region)}
              className={[
              'relative shrink-0 rounded-full px-5 py-2.5 text-[11px] font-medium uppercase tracking-[0.14em] transition-colors',
              region === filter ? 'text-ivory' : 'text-jungle-muted hover:text-jungle'].
              join(' ')}>
              
                {region === filter &&
              <motion.span
                layoutId="region-tab"
                className="absolute inset-0 rounded-full bg-jungle"
                transition={{ type: 'spring', stiffness: 380, damping: 32 }} />

              }
                <span className="relative">{region}</span>
              </button>
            )}
          </div>

          <ul className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {results.map((destination, index) =>
            <li key={destination.id}>
                <Reveal delay={index % 3 * 0.05}>
                  <DestinationCard destination={destination} />
                </Reveal>
              </li>
            )}
          </ul>

          {results.length === 0 &&
          <p className="mt-16 text-center text-sm text-jungle-muted">
              No destinations in this region yet — try another filter.
            </p>
          }
        </div>
      </section>

      <CtaStrip
        eyebrow="Bespoke Planning"
        title="Let us build a personalised tour"
        description="Tell us which destinations captured your imagination and we'll weave them into an itinerary built around your dates and pace."
        primaryLabel="Plan Custom Tour" />
      
    </>);

}