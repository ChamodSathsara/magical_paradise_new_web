import React from 'react';
import Link from 'next/link';
import { ArrowRightIcon } from 'lucide-react';
import type { Destination } from '../../data/destinations';

export function DestinationCard({ destination }: {destination: Destination;}) {
  return (
    <article className="group relative isolate flex h-[26rem] flex-col justify-end overflow-hidden rounded-lg bg-jungle-deep">
      <img
        src={destination.image}
        alt={destination.name}
        loading="lazy"
        className="absolute inset-0 h-full w-full object-cover transition-transform duration-[900ms] ease-out group-hover:scale-105" />
      
      <div
        className="absolute inset-0 bg-gradient-to-t from-jungle-deep via-jungle-deep/50 to-transparent"
        aria-hidden="true" />
      
      <div className="relative p-6">
        <p className="eyebrow text-gold-light">{destination.region}</p>
        <h3 className="mt-2 font-serif text-2xl font-light text-ivory">{destination.name}</h3>
        <p className="mt-3 text-sm leading-relaxed text-ivory/70 line-clamp-3">
          {destination.summary}
        </p>
        <Link
          href={`/destinations/${destination.id}`}
          className="mt-5 inline-flex items-center gap-2 text-[11px] font-medium uppercase tracking-[0.16em] text-ivory transition-colors hover:text-gold-light">
          
          Explore Destination
          <ArrowRightIcon
            className="h-3.5 w-3.5 transition-transform duration-300 group-hover:translate-x-1"
            strokeWidth={1.75}
            aria-hidden="true" />
          
        </Link>
      </div>
    </article>);

}