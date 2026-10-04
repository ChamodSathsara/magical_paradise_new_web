import React from 'react';
import { ArrowRightIcon, CalendarDaysIcon, MapPinIcon } from 'lucide-react';
import Link from 'next/link';
import { DESTINATIONS } from '../../data/destinations';
import { Reveal } from '../ui/Reveal';
import { SectionHeading } from '../ui/SectionHeading';

export function PopularDestinations() {
  const featured = DESTINATIONS.slice(0, 4);

  return (
    <section className="w-full bg-ivory py-20 lg:py-28">
      <div className="mx-auto max-w-content px-6">
        <div className="flex flex-wrap items-end justify-between gap-6">
          <SectionHeading eyebrow="Most Booked" title="Popular Destinations" subtitle="From ancient rock fortresses to misty hill country and wild coastlines, discover the places travellers love most." align="left" />
          <Reveal delay={0.1}>
            <Link href="/experience-sri-lanka/magical-destinations" className="inline-flex items-center gap-2 text-[11px] font-medium uppercase tracking-[0.16em] text-gold-dark transition-colors hover:text-jungle">
              View All Destinations
              <ArrowRightIcon className="h-3.5 w-3.5" strokeWidth={1.75} aria-hidden="true" />
            </Link>
          </Reveal>
        </div>
        <ul className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {featured.map((destination, index) => (
            <li key={destination.id}>
              <Reveal delay={(index % 4) * 0.06} className="h-full">
                <Link href={`/experience-sri-lanka/magical-destinations/${destination.id}`} className="group flex h-full flex-col overflow-hidden rounded-xl border border-jungle/10 bg-white shadow-card transition-transform duration-300 hover:-translate-y-1">
                  <div className="aspect-[4/3] overflow-hidden bg-sand">
                    <img src={destination.image} alt={destination.name} className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105" />
                  </div>
                  <div className="flex flex-1 flex-col p-6">
                    <p className="flex items-center gap-1.5 text-[10px] font-medium uppercase tracking-[0.16em] text-gold-dark"><MapPinIcon className="h-3.5 w-3.5" aria-hidden="true" />{destination.region}</p>
                    <h3 className="mt-3 font-serif text-2xl text-jungle">{destination.name}</h3>
                    <p className="mt-3 line-clamp-3 text-sm leading-6 text-jungle-muted">{destination.summary}</p>
                    <div className="mt-auto flex items-center justify-between border-t border-jungle/10 pt-5 text-xs text-jungle-muted">
                      <span className="flex items-center gap-1.5"><CalendarDaysIcon className="h-3.5 w-3.5 text-gold-dark" aria-hidden="true" />{destination.bestTime}</span>
                      <ArrowRightIcon className="h-4 w-4 text-gold-dark transition-transform group-hover:translate-x-1" aria-hidden="true" />
                    </div>
                  </div>
                </Link>
              </Reveal>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
