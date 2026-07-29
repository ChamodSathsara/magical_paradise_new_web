'use client';

import React from 'react';
import Link from 'next/link';
import { useParams } from 'next/navigation';
import {
  ArrowLeftIcon,
  CheckIcon,
  ClockIcon,
  MailIcon,
  MessageCircleIcon,
  PhoneIcon,
  XIcon } from
'lucide-react';
import { PageHero } from '../components/ui/PageHero';
import { PackageCard } from '../components/cards/PackageCard';
import { Reveal } from '../components/ui/Reveal';
import { GALLERY_IMAGES } from '../data/media';
import { PACKAGES, getPackage } from '../data/packages';
import { SITE } from '../data/site';
import { NotFound } from './NotFound';

const DEFAULT_INCLUDES = [
'Private air-conditioned vehicle with English-speaking chauffeur guide',
'Accommodation as specified with daily breakfast',
'All entrance fees to the listed sites',
'Bottled water and cool box throughout',
'24/7 on-trip support from our operations desk'];


const DEFAULT_EXCLUDES = [
'International flights and visa / ETA fees',
'Travel and medical insurance',
'Meals and beverages unless stated',
'Optional excursions and spa treatments',
'Tips and personal expenses'];


export function PackageDetail() {
  const params = useParams<{ id: string }>();
  const id = params?.id;
  const pkg = id ? getPackage(id) : undefined;

  if (!pkg) return <NotFound />;

  const related = PACKAGES.filter(
    (item) => item.category === pkg.category && item.id !== pkg.id
  ).slice(0, 3);

  const includes = pkg.includes ?? DEFAULT_INCLUDES;
  const excludes = pkg.excludes ?? DEFAULT_EXCLUDES;

  return (
    <>
      <PageHero
        eyebrow={pkg.badge ?? pkg.tags.join(' · ')}
        title={pkg.title}
        subtitle={pkg.summary}
        image={pkg.image}
        imageAlt={pkg.title}
        locationTag={pkg.duration} />
      

      <section className="w-full bg-ivory py-16 lg:py-20">
        <div className="mx-auto max-w-content px-6">
          <Link
            href="/packages"
            className="inline-flex items-center gap-2 text-[11px] font-medium uppercase tracking-[0.16em] text-jungle-muted transition-colors hover:text-jungle">
            
            <ArrowLeftIcon className="h-3.5 w-3.5" strokeWidth={1.75} aria-hidden="true" />
            All Packages
          </Link>

          <div className="mt-10 grid gap-12 lg:grid-cols-[1.6fr_1fr] lg:gap-16">
            <div>
              <Reveal>
                <h2 className="eyebrow text-gold-dark">Overview</h2>
                <h3 className="mt-3 font-serif text-3xl font-light text-jungle">
                  About This Package
                </h3>
                <p className="mt-5 text-[15px] leading-relaxed text-jungle-muted">
                  {pkg.overview ?? pkg.summary}
                </p>
                <ul className="mt-7 flex flex-wrap gap-2">
                  {pkg.tags.map((tag) =>
                  <li
                    key={tag}
                    className="rounded-full bg-sand px-3 py-1.5 text-[11px] uppercase tracking-[0.12em] text-jungle-muted">
                    
                      {tag}
                    </li>
                  )}
                </ul>
              </Reveal>

              <Reveal className="mt-14">
                <h2 className="eyebrow text-gold-dark">Gallery</h2>
                <h3 className="mt-3 font-serif text-3xl font-light text-jungle">
                  Highlights &amp; Scenery
                </h3>
                <div className="mt-6 grid grid-cols-2 gap-3 sm:grid-cols-3">
                  {GALLERY_IMAGES.slice(0, 6).map((image) =>
                  <div key={image.src} className="overflow-hidden rounded-lg">
                      <img
                      src={image.src}
                      alt={image.alt}
                      loading="lazy"
                      className="aspect-[4/3] w-full object-cover transition-transform duration-700 hover:scale-105" />
                    
                    </div>
                  )}
                </div>
              </Reveal>

              {pkg.itinerary &&
              <Reveal className="mt-14">
                  <h2 className="eyebrow text-gold-dark">Itinerary</h2>
                  <h3 className="mt-3 font-serif text-3xl font-light text-jungle">Day by Day</h3>
                  <ol className="mt-8 space-y-8">
                    {pkg.itinerary.map((day) =>
                  <li key={day.day} className="relative border-l border-jungle/15 pl-8">
                        <span className="absolute -left-[9px] top-1 flex h-[18px] w-[18px] items-center justify-center rounded-full bg-gold text-[9px] font-bold text-jungle-deep">
                          {day.day}
                        </span>
                        <h4 className="font-serif text-xl text-jungle">
                          Day {day.day} — {day.title}
                        </h4>
                        <p className="mt-2 text-sm leading-relaxed text-jungle-muted">
                          {day.description}
                        </p>
                      </li>
                  )}
                  </ol>
                </Reveal>
              }

              <Reveal className="mt-14">
                <h2 className="eyebrow text-gold-dark">Includes &amp; Excludes</h2>
                <div className="mt-6 grid gap-6 sm:grid-cols-2">
                  <div className="rounded-lg border border-jungle/10 bg-white p-6">
                    <h3 className="text-sm font-semibold uppercase tracking-[0.12em] text-jungle">
                      Included
                    </h3>
                    <ul className="mt-4 space-y-3">
                      {includes.map((item) =>
                      <li key={item} className="flex gap-3 text-sm leading-relaxed text-jungle-muted">
                          <CheckIcon
                          className="mt-0.5 h-4 w-4 shrink-0 text-jungle-light"
                          strokeWidth={2}
                          aria-hidden="true" />
                        
                          {item}
                        </li>
                      )}
                    </ul>
                  </div>
                  <div className="rounded-lg border border-jungle/10 bg-sand p-6">
                    <h3 className="text-sm font-semibold uppercase tracking-[0.12em] text-jungle">
                      Not Included
                    </h3>
                    <ul className="mt-4 space-y-3">
                      {excludes.map((item) =>
                      <li key={item} className="flex gap-3 text-sm leading-relaxed text-jungle-muted">
                          <XIcon
                          className="mt-0.5 h-4 w-4 shrink-0 text-gold-dark"
                          strokeWidth={2}
                          aria-hidden="true" />
                        
                          {item}
                        </li>
                      )}
                    </ul>
                  </div>
                </div>
              </Reveal>
            </div>

            <aside className="lg:sticky lg:top-28 lg:self-start">
              <div className="rounded-lg border border-jungle/10 bg-white p-7 shadow-card">
                <p className="text-[11px] uppercase tracking-[0.16em] text-jungle-muted">
                  Starting From
                </p>
                <p className="mt-2 font-serif text-4xl font-light text-jungle">{pkg.price}</p>
                <p className="mt-1 text-xs text-jungle-muted">{pkg.priceNote}</p>

                <p className="mt-5 inline-flex items-center gap-2 rounded-full bg-sand px-3 py-1.5 text-[11px] uppercase tracking-[0.12em] text-jungle-muted">
                  <ClockIcon className="h-3 w-3" strokeWidth={1.75} aria-hidden="true" />
                  {pkg.duration}
                </p>

                <div className="mt-7 flex flex-col gap-3">
                  <a
                    href={`mailto:${SITE.enquiryEmail}?subject=${encodeURIComponent(
                      `Booking request — ${pkg.title}`
                    )}`}
                    className="inline-flex items-center justify-center rounded-full bg-gold px-6 py-3.5 text-[11px] font-semibold uppercase tracking-[0.16em] text-jungle-deep transition-colors hover:bg-gold-light">
                    
                    Book This Package
                  </a>
                  <Link
                    href="/contact"
                    className="inline-flex items-center justify-center rounded-full border border-jungle/20 px-6 py-3.5 text-[11px] font-medium uppercase tracking-[0.16em] text-jungle transition-colors hover:bg-jungle hover:text-ivory">
                    
                    Enquire Now
                  </Link>
                </div>
              </div>

              <div className="mt-6 rounded-lg bg-jungle p-7 text-ivory">
                <h2 className="font-serif text-xl">Need Help?</h2>
                <p className="mt-3 text-sm leading-relaxed text-ivory/70">
                  Speak to a Sri Lanka specialist — we usually reply within a few hours.
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
                  <li className="flex items-center gap-3">
                    <MessageCircleIcon
                      className="h-4 w-4 text-gold-light"
                      strokeWidth={1.5}
                      aria-hidden="true" />
                    
                    <a
                      href={SITE.whatsapp}
                      target="_blank"
                      rel="noreferrer noopener"
                      className="hover:text-gold-light">
                      
                      Chat on WhatsApp
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
              You may also like
            </h2>
            <ul className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {related.map((item) =>
            <li key={item.id}>
                  <PackageCard pkg={item} className="h-full" />
                </li>
            )}
            </ul>
          </div>
        </section>
      }
    </>);

}