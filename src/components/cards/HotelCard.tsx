import React from 'react';
import { MapPinIcon, StarIcon } from 'lucide-react';
import type { Hotel } from '../../data/hotels';
import { SITE } from '../../data/site';

export function HotelCard({ hotel }: {hotel: Hotel;}) {
  return (
    <article className="group flex h-full flex-col overflow-hidden rounded-lg border border-jungle/10 bg-white shadow-card transition-shadow duration-300 hover:shadow-lift">
      <div className="relative aspect-[3/2] overflow-hidden bg-sand">
        <img
          src={hotel.image}
          alt={hotel.name}
          loading="lazy"
          className="h-full w-full object-cover transition-transform duration-700 ease-out group-hover:scale-[1.06]" />
        
        <span
          className="absolute right-4 top-4 inline-flex items-center gap-1 rounded-full bg-white/90 px-2.5 py-1 backdrop-blur-sm"
          aria-label={`${hotel.stars} star property`}>
          
          {Array.from({ length: hotel.stars }).map((_, index) =>
          <StarIcon
            key={index}
            className="h-3 w-3 fill-gold text-gold"
            strokeWidth={1}
            aria-hidden="true" />

          )}
        </span>
      </div>

      <div className="flex flex-1 flex-col p-6">
        <p className="inline-flex items-center gap-1.5 text-[11px] uppercase tracking-[0.14em] text-gold-dark">
          <MapPinIcon className="h-3 w-3" strokeWidth={1.75} aria-hidden="true" />
          {hotel.location}
        </p>
        <h3 className="mt-2 font-serif text-xl leading-snug text-jungle">{hotel.name}</h3>
        {hotel.tagline &&
        <p className="mt-1.5 font-serif text-sm italic text-jungle-muted">{hotel.tagline}</p>
        }
        <p className="mt-3 flex-1 text-sm leading-relaxed text-jungle-muted">{hotel.description}</p>
        <a
          href={`mailto:${SITE.enquiryEmail}?subject=${encodeURIComponent(
            `Hotel enquiry — ${hotel.name}`
          )}`}
          className="mt-6 inline-flex w-fit items-center justify-center rounded-full border border-jungle/20 px-5 py-2.5 text-[11px] font-medium uppercase tracking-[0.14em] text-jungle transition-colors hover:border-jungle hover:bg-jungle hover:text-ivory">
          
          View Hotel
        </a>
      </div>
    </article>);

}