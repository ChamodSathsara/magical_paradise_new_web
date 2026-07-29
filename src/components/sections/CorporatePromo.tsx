import React from 'react';
import Link from 'next/link';
import { CORPORATE_SERVICES } from '../../data/site';
import { IMAGES } from '../../data/media';
import { Icon } from '../ui/Icon';
import { Reveal } from '../ui/Reveal';
import { SectionHeading } from '../ui/SectionHeading';

export function CorporatePromo() {
  return (
    <section className="w-full bg-ivory py-20 lg:py-28">
      <div className="mx-auto max-w-content px-6">
        <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-20">
          <div>
            <SectionHeading
              eyebrow="Corporate & Groups"
              title="Corporate Events & Retreats"
              align="left" />
            
            <p className="mt-6 text-[15px] leading-relaxed text-jungle-muted">
              Elevate your business gatherings in paradise. From executive retreats in the tea
              country to large-scale conferences in Colombo, we provide end-to-end corporate event
              planning tailored to your organization&apos;s goals.
            </p>

            <ul className="mt-9 grid gap-4 sm:grid-cols-2">
              {CORPORATE_SERVICES.map((service, index) =>
              <li key={service.title}>
                  <Reveal delay={index * 0.06} className="h-full">
                    <div className="flex h-full items-start gap-3.5 rounded-lg border border-jungle/10 bg-white p-5">
                      <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-sand text-gold-dark">
                        <Icon name={service.icon} className="h-4 w-4" />
                      </span>
                      <div>
                        <h3 className="text-sm font-semibold text-jungle">{service.title}</h3>
                        <p className="mt-1 text-xs leading-relaxed text-jungle-muted">
                          {service.description}
                        </p>
                      </div>
                    </div>
                  </Reveal>
                </li>
              )}
            </ul>

            <Reveal delay={0.2} className="mt-9">
              <Link
                href="/corporate"
                className="inline-flex items-center rounded-full bg-jungle px-8 py-4 text-[12px] font-medium uppercase tracking-[0.16em] text-ivory transition-colors hover:bg-jungle-light">
                
                Request a Proposal
              </Link>
            </Reveal>
          </div>

          <Reveal delay={0.1} className="order-first lg:order-last">
            <div className="overflow-hidden rounded-lg">
              <img
                src={IMAGES.hotel}
                alt="An elegant colonial hall set for a corporate gathering in the hill country"
                loading="lazy"
                className="aspect-[4/3] w-full object-cover" />
              
            </div>
          </Reveal>
        </div>
      </div>
    </section>);

}