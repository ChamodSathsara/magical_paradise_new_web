import React from 'react';
import { ArrowRightIcon } from 'lucide-react';
import Link from 'next/link';
import { EXPERIENCES } from '../../data/experiences';
import { Icon } from '../ui/Icon';
import { Reveal } from '../ui/Reveal';
import { SectionHeading } from '../ui/SectionHeading';

export function ExperiencesPreview() {
  const featured = EXPERIENCES.slice(0, 6);

  return (
    <section className="w-full bg-jungle py-20 lg:py-28">
      <div className="mx-auto max-w-content px-6">
        <SectionHeading
          eyebrow="Beyond The Itinerary"
          title="Magical Experiences"
          subtitle="Beyond standard tours, we curate unique moments that connect you deeply with the soul of Sri Lanka."
          tone="light" />
        

        <ul className="mt-14 grid gap-px overflow-hidden rounded-lg bg-white/10 sm:grid-cols-2 lg:grid-cols-3">
          {featured.map((experience, index) =>
          <li key={experience.id}>
              <Reveal delay={index % 3 * 0.07} className="h-full">
                <Link
                href="/experiences"
                className="group relative flex h-full flex-col bg-jungle p-8 transition-colors duration-300 hover:bg-jungle-light">
                
                  <span className="flex h-11 w-11 items-center justify-center rounded-full border border-gold/40 text-gold-light">
                    <Icon name={experience.icon} />
                  </span>
                  <h3 className="mt-6 font-serif text-2xl font-light text-ivory">
                    {experience.title}
                  </h3>
                  <p className="mt-1 text-[11px] uppercase tracking-[0.16em] text-gold-light/70">
                    {experience.category}
                  </p>
                  <p className="mt-4 text-sm leading-relaxed text-ivory/65 line-clamp-3">
                    {experience.description}
                  </p>
                  <span className="mt-6 inline-flex items-center gap-2 text-[11px] font-medium uppercase tracking-[0.16em] text-ivory">
                    Discover More
                    <ArrowRightIcon
                    className="h-3.5 w-3.5 transition-transform duration-300 group-hover:translate-x-1"
                    strokeWidth={1.75}
                    aria-hidden="true" />
                  
                  </span>
                </Link>
              </Reveal>
            </li>
          )}
        </ul>

        <Reveal className="mt-12 text-center">
          <Link
            href="/experiences"
            className="inline-flex items-center rounded-full border border-ivory/30 px-8 py-3.5 text-[11px] font-medium uppercase tracking-[0.16em] text-ivory transition-colors hover:bg-ivory hover:text-jungle">
            
            View All 9 Experiences
          </Link>
        </Reveal>
      </div>
    </section>);

}