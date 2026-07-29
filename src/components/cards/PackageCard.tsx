import React from 'react';
import Link from 'next/link';
import { ArrowRightIcon, ClockIcon } from 'lucide-react';
import type { TourPackage } from '../../data/packages';

type PackageCardProps = {
  pkg: TourPackage;
  className?: string;
};

export function PackageCard({ pkg, className = '' }: PackageCardProps) {
  return (
    <article
      className={[
      'group flex h-full flex-col overflow-hidden rounded-lg border border-jungle/10 bg-white shadow-card transition-shadow duration-300 hover:shadow-lift',
      className].
      join(' ')}>
      
      <div className="relative aspect-[4/3] overflow-hidden bg-sand">
        <img
          src={pkg.image}
          alt={pkg.title}
          loading="lazy"
          className="h-full w-full object-cover transition-transform duration-700 ease-out group-hover:scale-[1.06]" />
        
        {pkg.badge &&
        <span className="absolute left-4 top-4 rounded-full bg-gold px-3 py-1 text-[10px] font-semibold uppercase tracking-[0.14em] text-jungle-deep">
            {pkg.badge}
          </span>
        }
        <span className="absolute bottom-4 left-4 inline-flex items-center gap-1.5 rounded-full bg-jungle-deep/80 px-3 py-1 text-[11px] uppercase tracking-[0.12em] text-ivory backdrop-blur-sm">
          <ClockIcon className="h-3 w-3" strokeWidth={1.75} aria-hidden="true" />
          {pkg.duration}
        </span>
      </div>

      <div className="flex flex-1 flex-col p-6">
        <div className="mb-3 flex flex-wrap gap-2">
          {pkg.tags.map((tag) =>
          <span
            key={tag}
            className="rounded-full bg-sand px-2.5 py-1 text-[10px] uppercase tracking-[0.12em] text-jungle-muted">
            
              {tag}
            </span>
          )}
        </div>
        <h3 className="font-serif text-xl leading-snug text-jungle">
          <Link href={`/packages/${pkg.id}`} className="hover:text-gold-dark">
            {pkg.title}
          </Link>
        </h3>
        <p className="mt-3 flex-1 text-sm leading-relaxed text-jungle-muted">{pkg.summary}</p>

        <div className="mt-6 flex items-end justify-between border-t border-jungle/10 pt-5">
          <div>
            <span className="block font-serif text-xl text-jungle">{pkg.price}</span>
            <span className="text-[11px] uppercase tracking-[0.12em] text-jungle-muted/70">
              {pkg.priceNote}
            </span>
          </div>
          <Link
            href={`/packages/${pkg.id}`}
            className="inline-flex items-center gap-1.5 text-[11px] font-medium uppercase tracking-[0.14em] text-gold-dark transition-colors hover:text-jungle">
            
            View Details
            <ArrowRightIcon
              className="h-3.5 w-3.5 transition-transform duration-300 group-hover:translate-x-1"
              strokeWidth={1.75}
              aria-hidden="true" />
            
          </Link>
        </div>
      </div>
    </article>);

}