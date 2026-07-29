import React from 'react';
import { IMAGES } from '../../data/media';
import { STORY_PARAGRAPHS, STORY_PILLARS } from '../../data/site';
import { Icon } from '../ui/Icon';
import { Reveal } from '../ui/Reveal';
import { SectionHeading } from '../ui/SectionHeading';

export function Story() {
  return (
    <section className="w-full bg-ivory py-20 lg:py-28">
      <div className="mx-auto max-w-content px-6">
        <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-20">
          <Reveal className="relative">
            <div className="overflow-hidden rounded-lg">
              <img
                src={IMAGES.teaCountry}
                alt="Tea pluckers working the estates of the Sri Lankan highlands"
                loading="lazy"
                className="aspect-[4/5] w-full object-cover" />
              
            </div>
            <div className="absolute -bottom-6 -right-4 hidden w-44 rounded-lg bg-jungle p-6 text-ivory sm:block lg:-right-8">
              <span className="font-serif text-4xl text-gold-light">15+</span>
              <p className="mt-2 text-[11px] uppercase tracking-[0.16em] text-ivory/70">
                Years crafting island journeys
              </p>
            </div>
          </Reveal>

          <div>
            <SectionHeading eyebrow="Who We Are" title="Our Story" align="left" />
            <div className="mt-6 space-y-5 text-[15px] leading-relaxed text-jungle-muted">
              {STORY_PARAGRAPHS.map((paragraph) =>
              <Reveal key={paragraph.slice(0, 24)}>
                  <p>{paragraph}</p>
                </Reveal>
              )}
            </div>
          </div>
        </div>

        <div className="mt-16 grid gap-6 sm:grid-cols-3 lg:mt-20">
          {STORY_PILLARS.map((pillar, index) =>
          <Reveal key={pillar.title} delay={index * 0.08}>
              <div className="h-full rounded-lg border border-jungle/10 bg-white p-8 shadow-card">
                <span className="flex h-11 w-11 items-center justify-center rounded-full bg-sand text-gold-dark">
                  <Icon name={pillar.icon} />
                </span>
                <h3 className="mt-5 font-serif text-xl text-jungle">{pillar.title}</h3>
                <p className="mt-3 text-sm leading-relaxed text-jungle-muted">
                  {pillar.description}
                </p>
              </div>
            </Reveal>
          )}
        </div>
      </div>
    </section>);

}