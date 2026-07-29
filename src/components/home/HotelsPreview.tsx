import React from 'react';
import { ArrowRightIcon } from 'lucide-react';
import Link from 'next/link';
import { HOTELS } from '../../data/hotels';
import { HotelCard } from '../cards/HotelCard';
import { Reveal } from '../ui/Reveal';
import { SectionHeading } from '../ui/SectionHeading';

export function HotelsPreview() {
  const featured = HOTELS.slice(0, 4);

  return (
    <section className="w-full bg-ivory py-20 lg:py-28">
      <div className="mx-auto max-w-content px-6">
        <div className="flex flex-wrap items-end justify-between gap-6">
          <SectionHeading
            eyebrow="Where You'll Stay"
            title="Handpicked Luxury Hotels"
            subtitle="Colonial grand hotels, tea estate bungalows and beachfront boutiques — chosen for character, not just comfort."
            align="left" />
          
          <Reveal delay={0.1}>
            <Link
              href="/hotels"
              className="inline-flex items-center gap-2 text-[11px] font-medium uppercase tracking-[0.16em] text-gold-dark transition-colors hover:text-jungle">
              
              All 18 Properties
              <ArrowRightIcon className="h-3.5 w-3.5" strokeWidth={1.75} aria-hidden="true" />
            </Link>
          </Reveal>
        </div>

        <ul className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {featured.map((hotel, index) =>
          <li key={hotel.id}>
              <Reveal delay={index % 4 * 0.06} className="h-full">
                <HotelCard hotel={hotel} />
              </Reveal>
            </li>
          )}
        </ul>
      </div>
    </section>);

}