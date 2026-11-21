import React from 'react';
import { QuoteIcon, StarIcon } from 'lucide-react';
import { SITE } from '../../data/site';
import { getTripadvisorReviews } from '../../lib/tripadvisor';
import { Reveal } from '../ui/Reveal';
import { SectionHeading } from '../ui/SectionHeading';

export async function Testimonials() {
  const reviews = await getTripadvisorReviews();
  const showingLiveReviews = reviews.some(review => review.live);
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
          {reviews.map((testimonial, index) =>
          <li key={testimonial.id}>
              <Reveal delay={index * 0.08} className="h-full">
                <figure className="flex h-full flex-col rounded-lg border border-jungle/10 bg-ivory p-8">
                  <QuoteIcon
                  className="h-7 w-7 text-gold/60"
                  strokeWidth={1.25}
                  aria-hidden="true" />
                  <div className="mt-4 flex gap-1" aria-label={`${testimonial.rating} out of 5 rating`}>
                    {Array.from({ length: 5 }).map((_, star) => <span key={star} className={`h-2.5 w-2.5 rounded-full ${star < Math.round(testimonial.rating) ? 'bg-[#00aa6c]' : 'bg-jungle/15'}`} />)}
                  </div>
                  {testimonial.title && <h3 className="mt-4 text-base font-semibold text-jungle">{testimonial.title}</h3>}
                
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
                    {testimonial.publishedDate && <time className="mt-2 block text-[11px] text-jungle-muted/70" dateTime={testimonial.publishedDate}>{new Date(testimonial.publishedDate).toLocaleDateString('en-GB', { day: 'numeric', month: 'short', year: 'numeric' })}</time>}
                  </figcaption>
                </figure>
              </Reveal>
            </li>
          )}
        </ul>

        {showingLiveReviews && <p className="mt-7 text-center text-xs text-jungle-muted">Reviews sourced from <a href={SITE.tripadvisor} target="_blank" rel="noreferrer noopener" className="font-semibold text-[#00aa6c] underline underline-offset-4">Tripadvisor</a>.</p>}

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
