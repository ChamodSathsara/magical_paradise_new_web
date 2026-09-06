import React from 'react';
import { QuoteIcon, StarIcon } from 'lucide-react';
import { SITE, TESTIMONIALS } from '../../data/site';
import { Reveal } from '../ui/Reveal';
import { SectionHeading } from '../ui/SectionHeading';

export function Testimonials() {
  return (
    <section className="w-full bg-sand py-20 lg:py-28">
      <div className="mx-auto max-w-content px-6">
        <SectionHeading eyebrow="Guest Stories" title="What Our Travelers Say" />

        <Reveal className="mt-6 flex items-center justify-center gap-3">
          <span className="flex gap-0.5" aria-hidden="true">
            {Array.from({ length: 5 }).map((_, index) =>
            <StarIcon key={index} className="h-4 w-4 fill-gold text-gold" strokeWidth={1} />
            )}
          </span>
          <span className="text-xs uppercase tracking-[0.14em] text-jungle-muted">
            Rated Excellent on TripAdvisor
          </span>
        </Reveal>

        <ul className="mt-14 grid gap-6 lg:grid-cols-3">
          {TESTIMONIALS.map((testimonial, index) =>
          <li key={testimonial.name}>
              <Reveal delay={index * 0.08} className="h-full">
                <figure className="flex h-full flex-col rounded-lg border border-jungle/10 bg-ivory p-8">
                  <QuoteIcon
                  className="h-7 w-7 text-gold/60"
                  strokeWidth={1.25}
                  aria-hidden="true" />
                
                  <blockquote className="mt-5 flex-1 font-serif text-lg font-light italic leading-relaxed text-jungle">
                    &ldquo;{testimonial.quote}&rdquo;
                  </blockquote>
                  <figcaption className="mt-7 border-t border-jungle/10 pt-5">
                    <span className="block text-sm font-semibold text-jungle">
                      {testimonial.name}
                    </span>
                    <span className="mt-1 block text-[11px] uppercase tracking-[0.14em] text-jungle-muted/80">
                      {testimonial.location} · {testimonial.tripType}
                    </span>
                  </figcaption>
                </figure>
              </Reveal>
            </li>
          )}
        </ul>

        <Reveal className="mt-12 text-center">
          <a
            href={SITE.tripadvisor}
            target="_blank"
            rel="noreferrer noopener"
            className="inline-flex items-center rounded-full border border-jungle/25 px-8 py-3.5 text-[11px] font-medium uppercase tracking-[0.16em] text-jungle transition-colors hover:bg-jungle hover:text-ivory">
            
            Read More Reviews
          </a>
        </Reveal>
      </div>
    </section>);

}
