import React from 'react';
import { ArrowRightIcon, CalendarDaysIcon, MapPinIcon } from 'lucide-react';
import Link from 'next/link';
import { IMAGES } from '../../data/media';
import { Reveal } from '../ui/Reveal';

export function SriLankaToursPreview() {
  return (
    <section className="bg-ivory py-20 lg:py-28">
      <div className="mx-auto max-w-content px-6">
        <Reveal>
          <Link href="/packages" className="group grid overflow-hidden rounded-2xl bg-jungle shadow-card lg:grid-cols-[1.08fr_.92fr]">
            <div className="relative min-h-[360px] overflow-hidden lg:min-h-[520px]">
              <img src={IMAGES.ella} alt="Scenic family journey through the Sri Lankan hill country" className="absolute inset-0 h-full w-full object-cover transition-transform duration-1000 group-hover:scale-105" />
              <div className="absolute inset-0 bg-gradient-to-t from-jungle-deep/65 via-transparent to-transparent" />
              <p className="absolute bottom-6 left-6 flex items-center gap-2 text-[11px] font-medium uppercase tracking-[0.16em] text-white sm:bottom-8 sm:left-8"><MapPinIcon className="h-4 w-4 text-gold-light" aria-hidden="true" />Across Sri Lanka</p>
            </div>
            <div className="flex flex-col justify-center p-8 sm:p-12 lg:p-16">
              <p className="eyebrow text-gold-light">Signature Journey</p>
              <h2 className="mt-5 font-serif text-4xl font-light text-ivory sm:text-5xl">Sri Lanka Tours</h2>
              <h3 className="mt-7 font-serif text-2xl text-gold-light">A Family Adventure Through Sri Lanka</h3>
              <p className="mt-5 text-base leading-8 text-ivory/70">A thoughtfully paced island journey bringing together ancient culture, misty hill country, wildlife, beaches and memorable moments for the whole family.</p>
              <div className="mt-7 flex items-center gap-2 text-sm text-ivory/75"><CalendarDaysIcon className="h-4 w-4 text-gold-light" aria-hidden="true" />15 Days · 14 Nights</div>
              <span className="mt-9 inline-flex w-fit items-center gap-2 rounded-full border border-ivory/25 px-7 py-3.5 text-[11px] font-medium uppercase tracking-[0.16em] text-ivory transition-colors group-hover:bg-ivory group-hover:text-jungle">
                Explore Sri Lanka Tour
                <ArrowRightIcon className="h-3.5 w-3.5 transition-transform group-hover:translate-x-1" aria-hidden="true" />
              </span>
            </div>
          </Link>
        </Reveal>
      </div>
    </section>
  );
}
