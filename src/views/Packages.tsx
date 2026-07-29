'use client';

import React, { useMemo, useState } from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { PageHero } from '../components/ui/PageHero';
import { PackageCard } from '../components/cards/PackageCard';
import { Reveal } from '../components/ui/Reveal';
import { IMAGES } from '../data/media';
import { PACKAGE_CATEGORIES, packagesByCategory } from '../data/packages';
import { SITE } from '../data/site';

type CategoryId = (typeof PACKAGE_CATEGORIES)[number]['id'];

export function Packages() {
  const [active, setActive] = useState<CategoryId>('all');

  const category = PACKAGE_CATEGORIES.find((item) => item.id === active) ?? PACKAGE_CATEGORIES[0];
  const results = useMemo(() => packagesByCategory(active), [active]);

  return (
    <>
      <PageHero
        eyebrow="Sri Lanka & Maldives"
        title="Travel Packages"
        subtitle="Handcrafted itineraries for every kind of traveller — from sunrise-to-sunset day trips to grand island escapes."
        image={IMAGES.ella}
        imageAlt="A train crossing the Nine Arch Bridge through Ella's tea country"
        locationTag="Sri Lanka & Maldives"
        stats={[
        { value: '50+', label: 'Packages' },
        { value: '4.9★', label: 'Rating' },
        { value: '2,000+', label: 'Happy Guests' }]
        } />
      

      <section className="sticky top-[73px] z-30 w-full border-b border-jungle/10 bg-ivory/95 backdrop-blur-md">
        <div className="mx-auto max-w-content px-6">
          <div className="no-scrollbar flex gap-1 overflow-x-auto py-4" role="tablist" aria-label="Package categories">
            {PACKAGE_CATEGORIES.map((item) =>
            <button
              key={item.id}
              type="button"
              role="tab"
              aria-selected={item.id === active}
              onClick={() => setActive(item.id)}
              className={[
              'relative shrink-0 rounded-full px-5 py-2.5 text-[11px] font-medium uppercase tracking-[0.14em] transition-colors',
              item.id === active ? 'text-ivory' : 'text-jungle-muted hover:text-jungle'].
              join(' ')}>
              
                {item.id === active &&
              <motion.span
                layoutId="package-tab"
                className="absolute inset-0 rounded-full bg-jungle"
                transition={{ type: 'spring', stiffness: 380, damping: 32 }} />

              }
                <span className="relative">{item.label}</span>
              </button>
            )}
          </div>
        </div>
      </section>

      <section className="w-full bg-ivory py-16 lg:py-20">
        <div className="mx-auto max-w-content px-6">
          <div className="flex flex-wrap items-end justify-between gap-4">
            <h2 className="font-serif text-2xl font-light text-jungle sm:text-3xl">
              {category.headline}
            </h2>
            <p className="text-[11px] uppercase tracking-[0.16em] text-jungle-muted">
              {results.length} {results.length === 1 ? 'package' : 'packages'}
            </p>
          </div>

          <ul className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {results.map((pkg, index) =>
            <li key={pkg.id}>
                <Reveal delay={index % 3 * 0.05} className="h-full">
                  <PackageCard pkg={pkg} className="h-full" />
                </Reveal>
              </li>
            )}
          </ul>
        </div>
      </section>

      <section className="w-full bg-jungle py-20">
        <div className="mx-auto max-w-content px-6 text-center">
          <Reveal>
            <h2 className="font-serif text-3xl font-light text-ivory sm:text-4xl">
              Can&apos;t find your perfect trip?
            </h2>
            <p className="mx-auto mt-5 max-w-xl text-[15px] leading-relaxed text-ivory/70">
              We craft fully bespoke itineraries tailored to your dates, budget, and travel dreams.
            </p>
            <div className="mt-9 flex flex-wrap justify-center gap-3">
              <Link
                href="/contact"
                className="inline-flex items-center rounded-full bg-gold px-8 py-4 text-[12px] font-semibold uppercase tracking-[0.16em] text-jungle-deep transition-colors hover:bg-gold-light">
                
                Build a Custom Tour
              </Link>
              <a
                href={SITE.whatsapp}
                target="_blank"
                rel="noreferrer noopener"
                className="inline-flex items-center rounded-full border border-ivory/30 px-8 py-4 text-[12px] font-medium uppercase tracking-[0.16em] text-ivory transition-colors hover:bg-ivory hover:text-jungle">
                
                Talk to an Expert
              </a>
            </div>
          </Reveal>
        </div>
      </section>
    </>);

}