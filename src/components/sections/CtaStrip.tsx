import React from 'react';
import Link from 'next/link';
import { MessageCircleIcon } from 'lucide-react';
import { SITE } from '../../data/site';
import { Reveal } from '../ui/Reveal';

type CtaStripProps = {
  eyebrow?: string;
  title?: string;
  description?: string;
  primaryLabel?: string;
  primaryTo?: string;
};

export function CtaStrip({
  eyebrow = 'Get In Touch',
  title = "Let's Plan Your Dream Journey",
  description = 'Ready to experience the magic of Sri Lanka? Our travel specialists are here to craft your perfect personalised itinerary.',
  primaryLabel = 'Plan My Trip',
  primaryTo = '/contact'
}: CtaStripProps) {
  return (
    <section className="w-full bg-jungle py-16 lg:py-20">
      <div className="mx-auto max-w-content px-6">
        <Reveal className="flex flex-col items-center gap-8 text-center lg:flex-row lg:justify-between lg:text-left">
          <div className="max-w-2xl">
            <p className="eyebrow text-gold-light">{eyebrow}</p>
            <h2 className="mt-4 font-serif text-3xl font-light leading-tight text-ivory sm:text-4xl">
              {title}
            </h2>
            <p className="mt-4 text-[15px] leading-relaxed text-ivory/70">{description}</p>
            <p className="mt-5 text-sm text-ivory/60">
              <a href={SITE.phoneHref} className="hover:text-gold-light">
                {SITE.phone}
              </a>
              <span className="px-2 text-ivory/30">·</span>
              <a href={`mailto:${SITE.enquiryEmail}`} className="hover:text-gold-light">
                {SITE.enquiryEmail}
              </a>
            </p>
          </div>

          <div className="flex shrink-0 flex-wrap justify-center gap-3">
            <Link
              href={primaryTo}
              className="inline-flex items-center rounded-full bg-gold px-8 py-4 text-[12px] font-semibold uppercase tracking-[0.16em] text-jungle-deep transition-colors hover:bg-gold-light">
              
              {primaryLabel}
            </Link>
            <a
              href={SITE.whatsapp}
              target="_blank"
              rel="noreferrer noopener"
              className="inline-flex items-center gap-2 rounded-full border border-ivory/30 px-8 py-4 text-[12px] font-medium uppercase tracking-[0.16em] text-ivory transition-colors hover:bg-ivory hover:text-jungle">
              
              <MessageCircleIcon className="h-4 w-4" strokeWidth={1.75} aria-hidden="true" />
              WhatsApp
            </a>
          </div>
        </Reveal>
      </div>
    </section>);

}