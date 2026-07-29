import React from 'react';
import Link from 'next/link';
import { PACKAGES } from '../../data/packages';
import { PackageCard } from '../cards/PackageCard';
import { Reveal } from '../ui/Reveal';
import { SectionHeading } from '../ui/SectionHeading';

export function PackagesPreview() {
  const featured = PACKAGES.filter((pkg) => pkg.category === 'flagship' || pkg.featured).
  filter((pkg) => pkg.category !== 'day').
  slice(0, 6);

  return (
    <section className="w-full bg-sand py-20 lg:py-28">
      <div className="mx-auto max-w-content px-6">
        <SectionHeading
          eyebrow="Signature Journeys"
          title="Curated Travel Packages"
          subtitle="Handcrafted itineraries designed to showcase the very best of Sri Lanka, tailored for unforgettable memories." />
        

        <ul className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {featured.map((pkg, index) =>
          <li key={pkg.id}>
              <Reveal delay={index % 3 * 0.07} className="h-full">
                <PackageCard pkg={pkg} className="h-full" />
              </Reveal>
            </li>
          )}
        </ul>

        <Reveal className="mt-12 text-center">
          <Link
            href="/packages"
            className="inline-flex items-center rounded-full bg-jungle px-8 py-3.5 text-[11px] font-medium uppercase tracking-[0.16em] text-ivory transition-colors hover:bg-jungle-light">
            
            View All Packages
          </Link>
        </Reveal>
      </div>
    </section>);

}