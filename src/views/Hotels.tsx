'use client';

import React, { useMemo, useState } from 'react';
import { motion } from 'framer-motion';
import { PageHero } from '../components/ui/PageHero';
import { HotelCard } from '../components/cards/HotelCard';
import { Reveal } from '../components/ui/Reveal';
import { CtaStrip } from '../components/sections/CtaStrip';
import { HOTELS } from '../data/hotels';
import { IMAGES } from '../data/media';

export function Hotels() {
  const locations = useMemo(
    () => ['All Locations', ...Array.from(new Set(HOTELS.map((hotel) => hotel.location))).sort()],
    []
  );
  const [location, setLocation] = useState('All Locations');

  const results = useMemo(
    () =>
    location === 'All Locations' ?
    HOTELS :
    HOTELS.filter((hotel) => hotel.location === location),
    [location]
  );

  return (
    <>
      <PageHero
        eyebrow="Handpicked Stays"
        title="Accommodations"
        subtitle="From colonial-era grand hotels to beachfront boutique villas — every property is handpicked for quality, character, and location."
        image={IMAGES.hotel}
        imageAlt="A colonial boutique hotel interior overlooking the hill country"
        stats={[
        { value: '18', label: 'Properties' },
        { value: '12', label: 'Locations' },
        { value: '5★', label: 'Mostly Luxury' }]
        } />
      

      <section className="w-full bg-ivory py-16 lg:py-20">
        <div className="mx-auto max-w-content px-6">
          <div
            className="no-scrollbar flex gap-1 overflow-x-auto pb-2"
            role="tablist"
            aria-label="Filter hotels by location">
            
            {locations.map((item) =>
            <button
              key={item}
              type="button"
              role="tab"
              aria-selected={item === location}
              onClick={() => setLocation(item)}
              className={[
              'relative shrink-0 rounded-full px-5 py-2.5 text-[11px] font-medium uppercase tracking-[0.14em] transition-colors',
              item === location ? 'text-ivory' : 'text-jungle-muted hover:text-jungle'].
              join(' ')}>
              
                {item === location &&
              <motion.span
                layoutId="hotel-tab"
                className="absolute inset-0 rounded-full bg-jungle"
                transition={{ type: 'spring', stiffness: 380, damping: 32 }} />

              }
                <span className="relative">{item}</span>
              </button>
            )}
          </div>

          <ul className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {results.map((hotel, index) =>
            <li key={hotel.id}>
                <Reveal delay={index % 3 * 0.05} className="h-full">
                  <HotelCard hotel={hotel} />
                </Reveal>
              </li>
            )}
          </ul>
        </div>
      </section>

      <CtaStrip
        eyebrow="Where To Stay"
        title="Not sure which property suits you?"
        description="Tell us your travel style and budget — we'll match you with the properties we would personally book."
        primaryLabel="Ask a Specialist" />
      
    </>);

}