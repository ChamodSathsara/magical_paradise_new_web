import React from 'react';
import { ArrowRightIcon } from 'lucide-react';
import Link from 'next/link';
import { DAY_PACKAGES } from '../../data/packages';
import { PackageCard } from '../cards/PackageCard';
import { Reveal } from '../ui/Reveal';
import { SectionHeading } from '../ui/SectionHeading';

export function PopularDestinations() {
  return (
    <section className="w-full bg-ivory py-20 lg:py-28">
      <div className="mx-auto max-w-content px-6">
        <div className="flex flex-wrap items-end justify-between gap-6">
          <SectionHeading
            eyebrow="Most Booked"
            title="Popular Destinations"
            subtitle="Our best-loved single-day journeys — perfect on their own or slotted into a longer itinerary."
            align="left" />
          
          <Reveal delay={0.1}>
            <Link
              href="/packages"
              className="inline-flex items-center gap-2 text-[11px] font-medium uppercase tracking-[0.16em] text-gold-dark transition-colors hover:text-jungle">
              
              All Day Tours
              <ArrowRightIcon className="h-3.5 w-3.5" strokeWidth={1.75} aria-hidden="true" />
            </Link>
          </Reveal>
        </div>

        <div className="mt-12 -mx-6 overflow-x-auto px-6 pb-4 rail-scroll lg:mx-0 lg:px-0">
          <ul className="flex gap-6 lg:grid lg:grid-cols-4 lg:gap-6">
            {DAY_PACKAGES.map((pkg, index) =>
            <li key={pkg.id} className="w-[19rem] shrink-0 lg:w-auto">
                <Reveal delay={index % 4 * 0.06} className="h-full">
                  <PackageCard pkg={pkg} className="h-full" />
                </Reveal>
              </li>
            )}
          </ul>
        </div>
      </div>
    </section>);

}