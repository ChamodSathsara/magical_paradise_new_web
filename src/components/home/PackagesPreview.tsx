import React from 'react';
import { ArrowRightIcon, Clock3Icon } from 'lucide-react';
import Link from 'next/link';
import { IMAGES } from '../../data/media';
import { Reveal } from '../ui/Reveal';
import { SectionHeading } from '../ui/SectionHeading';

const DAY_TOURS = [
  { name: 'Sigiriya by Air', category: 'Scenic Air Tour', duration: 'Approx. 1 hour', image: IMAGES.sigiriya },
  { name: 'Yala National Park', category: 'Wildlife Safari', duration: 'Private day escape', image: IMAGES.yala },
  { name: 'Whale Watching', category: 'South Coast', duration: 'Seasonal voyage', image: IMAGES.mirissa },
  { name: 'Kandy', category: 'Culture & Heritage', duration: 'Full-day journey', image: IMAGES.kandy },
  { name: 'Galle Fort & Bentota', category: 'Coastal Escape', duration: 'Full-day journey', image: IMAGES.galle },
  { name: 'Kitulgala', category: 'Nature & Adventure', duration: 'Private day escape', image: IMAGES.ella },
];

export function PackagesPreview() {
  return (
    <section className="w-full bg-sand py-20 lg:py-28">
      <div className="mx-auto max-w-content px-6">
        <SectionHeading eyebrow="Island Escapes" title="Curated Day Tours" subtitle="Private one-day experiences across Sri Lanka, thoughtfully planned around where you stay and the time you have." />
        <ul className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {DAY_TOURS.map((tour, index) => (
            <li key={tour.name}>
              <Reveal delay={(index % 3) * 0.07} className="h-full">
                <Link href="/day-tours" className="group block h-full overflow-hidden rounded-xl bg-ivory shadow-card">
                  <div className="aspect-[16/10] overflow-hidden bg-sand">
                    <img src={tour.image} alt={tour.name} className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105" />
                  </div>
                  <div className="p-6">
                    <p className="text-[10px] font-medium uppercase tracking-[0.16em] text-gold-dark">{tour.category}</p>
                    <h3 className="mt-3 font-serif text-2xl text-jungle">{tour.name}</h3>
                    <div className="mt-5 flex items-center justify-between border-t border-jungle/10 pt-4 text-xs text-jungle-muted">
                      <span className="flex items-center gap-1.5"><Clock3Icon className="h-3.5 w-3.5 text-gold-dark" aria-hidden="true" />{tour.duration}</span>
                      <ArrowRightIcon className="h-4 w-4 text-gold-dark transition-transform group-hover:translate-x-1" aria-hidden="true" />
                    </div>
                  </div>
                </Link>
              </Reveal>
            </li>
          ))}
        </ul>
        <Reveal className="mt-12 text-center">
          <Link href="/day-tours" className="inline-flex items-center rounded-full bg-jungle px-8 py-3.5 text-[11px] font-medium uppercase tracking-[0.16em] text-ivory transition-colors hover:bg-jungle-light">Explore All Day Tours</Link>
        </Reveal>
      </div>
    </section>
  );
}
