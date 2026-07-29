import React from 'react';
import { SERVICES } from '../../data/site';
import { Icon } from '../ui/Icon';
import { Reveal } from '../ui/Reveal';
import { SectionHeading } from '../ui/SectionHeading';

type ServicesProps = {
  eyebrow?: string;
  title?: string;
  subtitle?: string;
};

export function Services({
  eyebrow = 'What We Offer',
  title = 'Extra Services & Amenities',
  subtitle = "It's the little details that make a journey truly luxurious. We provide these complimentary and add-on services for your comfort."
}: ServicesProps) {
  return (
    <section className="w-full bg-sand py-20 lg:py-28">
      <div className="mx-auto max-w-content px-6">
        <SectionHeading eyebrow={eyebrow} title={title} subtitle={subtitle} />

        <ul className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {SERVICES.map((service, index) =>
          <li key={service.title}>
              <Reveal delay={index * 0.06} className="h-full">
                <div className="flex h-full items-start gap-4 rounded-lg border border-jungle/10 bg-ivory p-6">
                  <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-jungle text-gold-light">
                    <Icon name={service.icon} className="h-4 w-4" />
                  </span>
                  <div>
                    <h3 className="font-serif text-lg text-jungle">{service.title}</h3>
                    <p className="mt-1.5 text-sm leading-relaxed text-jungle-muted">
                      {service.description}
                    </p>
                  </div>
                </div>
              </Reveal>
            </li>
          )}
        </ul>
      </div>
    </section>);

}