import React from 'react';
import Link from 'next/link';
import { PlaneIcon, SparklesIcon } from 'lucide-react';
import { IMAGES } from '../../data/media';
import { MALDIVES_OPTIONS } from '../../data/site';
import { Reveal } from '../ui/Reveal';
import { SectionHeading } from '../ui/SectionHeading';

export function MaldivesPromo() {
  return (
    <section className="relative isolate w-full overflow-hidden bg-jungle-deep py-20 lg:py-28">
      <img
        src={IMAGES.maldives}
        alt=""
        aria-hidden="true"
        loading="lazy"
        className="absolute inset-0 h-full w-full object-cover opacity-25" />
      
      <div className="absolute inset-0 bg-jungle-deep/70" aria-hidden="true" />

      <div className="relative mx-auto max-w-content px-6">
        <div className="grid gap-12 lg:grid-cols-2 lg:gap-20">
          <div>
            <SectionHeading
              eyebrow="Premium Extension"
              title="Maldives Luxury Escapes"
              align="left"
              tone="light" />
            
            <p className="mt-6 max-w-xl text-[15px] leading-relaxed text-ivory/70">
              Just a 90-minute flight from Colombo lies paradise. Enhance your Sri Lankan adventure
              with a luxurious stay in the Maldives. Crystal clear waters, overwater villas, and
              world-class snorkeling await.
            </p>

            <Reveal delay={0.15} className="mt-9">
              <div className="rounded-lg border border-gold/30 bg-gold/10 p-6">
                <span className="inline-flex items-center gap-2 text-[11px] font-semibold uppercase tracking-[0.16em] text-gold-light">
                  <SparklesIcon className="h-4 w-4" strokeWidth={1.75} aria-hidden="true" />
                  Twin Centre Holidays
                </span>
                <p className="mt-3 text-sm leading-relaxed text-ivory/75">
                  The perfect combination of Sri Lankan culture and Maldivian relaxation.
                </p>
              </div>
            </Reveal>

            <Reveal delay={0.2} className="mt-8">
              <Link
                href="/packages"
                className="inline-flex items-center gap-2 rounded-full bg-gold px-8 py-4 text-[12px] font-semibold uppercase tracking-[0.16em] text-jungle-deep transition-colors hover:bg-gold-light">
                
                <PlaneIcon className="h-4 w-4" strokeWidth={1.75} aria-hidden="true" />
                Explore Maldives Packages
              </Link>
            </Reveal>
          </div>

          <ol className="space-y-4">
            {MALDIVES_OPTIONS.map((option, index) =>
            <li key={option.title}>
                <Reveal delay={index * 0.08}>
                  <div className="flex gap-5 rounded-lg border border-white/10 bg-white/5 p-6 backdrop-blur-sm">
                    <span className="font-serif text-2xl text-gold-light">0{index + 1}</span>
                    <div>
                      <h3 className="font-serif text-xl text-ivory">{option.title}</h3>
                      <p className="mt-2 text-sm leading-relaxed text-ivory/65">
                        {option.description}
                      </p>
                    </div>
                  </div>
                </Reveal>
              </li>
            )}
          </ol>
        </div>
      </div>
    </section>);

}