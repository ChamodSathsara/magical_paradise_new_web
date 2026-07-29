'use client';

import React from 'react';
import Link from 'next/link';
import { useParams } from 'next/navigation';
import {
  ArrowLeftIcon,
  CalendarIcon,
  LightbulbIcon,
  MailIcon,
  MapIcon,
  PhoneIcon,
  SunIcon } from
'lucide-react';
import { PageHero } from '../components/ui/PageHero';
import { DestinationCard } from '../components/cards/DestinationCard';
import { Reveal } from '../components/ui/Reveal';
import { DESTINATIONS, getDestination } from '../data/destinations';
import { GALLERY_IMAGES } from '../data/media';
import { SITE } from '../data/site';
import { NotFound } from './NotFound';

export function DestinationDetail() {
  const params = useParams<{ id: string }>();
  const id = params?.id;
  const destination = id ? getDestination(id) : undefined;

  if (!destination) return <NotFound />;

  const related = DESTINATIONS.filter(
    (item) => item.id !== destination.id && item.region === destination.region
  ).slice(0, 3);

  const quickInfo = [
  { label: 'Region', value: destination.region, Icon: MapIcon },
  { label: 'Best Time to Visit', value: destination.bestTime, Icon: CalendarIcon },
  { label: 'Climate', value: destination.climate, Icon: SunIcon }];


  return (
    <>
      <PageHero
        eyebrow={destination.region}
        title={destination.name}
        subtitle={destination.summary}
        image={destination.image}
        imageAlt={destination.name} />
      

      <section className="w-full bg-ivory py-16 lg:py-20">
        <div className="mx-auto max-w-content px-6">
          <Link
            href="/destinations"
            className="inline-flex items-center gap-2 text-[11px] font-medium uppercase tracking-[0.16em] text-jungle-muted transition-colors hover:text-jungle">
            
            <ArrowLeftIcon className="h-3.5 w-3.5" strokeWidth={1.75} aria-hidden="true" />
            All Destinations
          </Link>

          <div className="mt-10 grid gap-12 lg:grid-cols-[1.6fr_1fr] lg:gap-16">
            <div>
              <Reveal>
                <h2 className="eyebrow text-gold-dark">Overview</h2>
                <h3 className="mt-3 font-serif text-3xl font-light text-jungle">
                  About {destination.name}
                </h3>
                <p className="mt-5 text-[15px] leading-relaxed text-jungle-muted">
                  {destination.longDescription}
                </p>
              </Reveal>

              <Reveal className="mt-12">
                <h2 className="eyebrow text-gold-dark">Highlights</h2>
                <h3 className="mt-3 font-serif text-3xl font-light text-jungle">Top Experiences</h3>
                <ul className="mt-6 grid gap-3 sm:grid-cols-2">
                  {destination.highlights.map((highlight) =>
                  <li
                    key={highlight}
                    className="flex gap-3 rounded-lg border border-jungle/10 bg-white p-4 text-sm leading-relaxed text-jungle-muted">
                    
                      <span
                      className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-gold"
                      aria-hidden="true" />
                    
                      {highlight}
                    </li>
                  )}
                </ul>
              </Reveal>

              <Reveal className="mt-12">
                <h2 className="eyebrow text-gold-dark">Gallery</h2>
                <h3 className="mt-3 font-serif text-3xl font-light text-jungle">
                  Scenes from {destination.name}
                </h3>
                <div className="mt-6 grid grid-cols-2 gap-3 sm:grid-cols-3">
                  {[destination.image, ...GALLERY_IMAGES.map((image) => image.src)].
                  filter((src, index, all) => all.indexOf(src) === index).
                  slice(0, 6).
                  map((src) =>
                  <div key={src} className="overflow-hidden rounded-lg">
                        <img
                      src={src}
                      alt={`${destination.name} and surrounding landscapes`}
                      loading="lazy"
                      className="aspect-[4/3] w-full object-cover transition-transform duration-700 hover:scale-105" />
                    
                      </div>
                  )}
                </div>
              </Reveal>

              <Reveal className="mt-12">
                <h2 className="eyebrow text-gold-dark">Travel Tips</h2>
                <h3 className="mt-3 font-serif text-3xl font-light text-jungle">Insider Tips</h3>
                <ul className="mt-6 space-y-3">
                  {destination.tips.map((tip) =>
                  <li
                    key={tip}
                    className="flex gap-3.5 rounded-lg bg-sand p-5 text-sm leading-relaxed text-jungle-muted">
                    
                      <LightbulbIcon
                      className="mt-0.5 h-4 w-4 shrink-0 text-gold-dark"
                      strokeWidth={1.5}
                      aria-hidden="true" />
                    
                      {tip}
                    </li>
                  )}
                </ul>
              </Reveal>
            </div>

            <aside className="lg:sticky lg:top-28 lg:self-start">
              <div className="rounded-lg border border-jungle/10 bg-white p-7 shadow-card">
                <h2 className="font-serif text-xl text-jungle">Quick Info</h2>
                <dl className="mt-5 space-y-5">
                  {quickInfo.map(({ label, value, Icon: InfoIcon }) =>
                  <div key={label} className="flex gap-3.5">
                      <InfoIcon
                      className="mt-0.5 h-4 w-4 shrink-0 text-gold-dark"
                      strokeWidth={1.5}
                      aria-hidden="true" />
                    
                      <div>
                        <dt className="text-[10px] uppercase tracking-[0.16em] text-jungle-muted/70">
                          {label}
                        </dt>
                        <dd className="mt-1 text-sm text-jungle">{value}</dd>
                      </div>
                    </div>
                  )}
                </dl>

                <div className="mt-7 flex flex-col gap-3 border-t border-jungle/10 pt-6">
                  <Link
                    href="/packages"
                    className="inline-flex items-center justify-center rounded-full bg-jungle px-6 py-3.5 text-[11px] font-medium uppercase tracking-[0.16em] text-ivory transition-colors hover:bg-jungle-light">
                    
                    See Packages
                  </Link>
                  <Link
                    href="/contact"
                    className="inline-flex items-center justify-center rounded-full border border-jungle/20 px-6 py-3.5 text-[11px] font-medium uppercase tracking-[0.16em] text-jungle transition-colors hover:bg-sand">
                    
                    Plan Custom Tour
                  </Link>
                </div>
              </div>

              <div className="mt-6 rounded-lg bg-jungle p-7 text-ivory">
                <h2 className="font-serif text-xl">Need Help?</h2>
                <p className="mt-3 text-sm leading-relaxed text-ivory/70">
                  Let us build a personalised tour that includes {destination.name} and other Sri
                  Lanka highlights.
                </p>
                <ul className="mt-5 space-y-3 text-sm">
                  <li className="flex items-center gap-3">
                    <PhoneIcon className="h-4 w-4 text-gold-light" strokeWidth={1.5} aria-hidden="true" />
                    <a href={SITE.phoneHref} className="hover:text-gold-light">
                      {SITE.phone}
                    </a>
                  </li>
                  <li className="flex items-center gap-3">
                    <MailIcon className="h-4 w-4 text-gold-light" strokeWidth={1.5} aria-hidden="true" />
                    <a href={`mailto:${SITE.enquiryEmail}`} className="hover:text-gold-light">
                      {SITE.enquiryEmail}
                    </a>
                  </li>
                </ul>
              </div>
            </aside>
          </div>
        </div>
      </section>

      {related.length > 0 &&
      <section className="w-full bg-sand py-16 lg:py-20">
          <div className="mx-auto max-w-content px-6">
            <h2 className="font-serif text-2xl font-light text-jungle sm:text-3xl">
              More in {destination.region}
            </h2>
            <ul className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {related.map((item) =>
            <li key={item.id}>
                  <DestinationCard destination={item} />
                </li>
            )}
            </ul>
          </div>
        </section>
      }
    </>);

}