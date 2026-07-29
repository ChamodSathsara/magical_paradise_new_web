import React from 'react';
import Link from 'next/link';
import { PageHero } from '../components/ui/PageHero';
import { Icon } from '../components/ui/Icon';
import { Reveal } from '../components/ui/Reveal';
import { SectionHeading } from '../components/ui/SectionHeading';
import { CtaStrip } from '../components/sections/CtaStrip';
import { IMAGES } from '../data/media';
import { CORPORATE_SERVICES } from '../data/site';

const CAPABILITIES = [
{
  title: 'Venue sourcing',
  description:
  'Ballrooms in Colombo, tea estate bungalows in Nuwara Eliya, beachfront resorts in Bentota — matched to your delegate count and budget.'
},
{
  title: 'Ground logistics',
  description:
  'Airport fast-track, branded transfers, delegate registration desks, and a dedicated on-site coordinator throughout.'
},
{
  title: 'Production & AV',
  description:
  'Staging, sound, lighting and simultaneous translation delivered through vetted local production partners.'
},
{
  title: 'Delegate experiences',
  description:
  'Safari afternoons, white-water rafting, cooking challenges and cultural evenings built into the programme.'
}];


export function Corporate() {
  return (
    <>
      <PageHero
        eyebrow="Corporate & Groups"
        title="Corporate Events & Retreats"
        subtitle="Elevate your business gatherings in paradise. From executive retreats in the tea country to large-scale conferences in Colombo, we provide end-to-end corporate event planning tailored to your organization's goals."
        image={IMAGES.teaCountry}
        imageAlt="Tea estates in the Sri Lankan highlands"
        stats={[
        { value: '60', label: 'Max Delegates' },
        { value: '12', label: 'Venue Regions' },
        { value: '15+', label: 'Years Experience' }]
        } />
      

      <section className="w-full bg-ivory py-20 lg:py-24">
        <div className="mx-auto max-w-content px-6">
          <SectionHeading eyebrow="What We Deliver" title="Four pillars of every programme" />

          <ul className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {CORPORATE_SERVICES.map((service, index) =>
            <li key={service.title}>
                <Reveal delay={index * 0.07} className="h-full">
                  <div className="h-full rounded-lg border border-jungle/10 bg-white p-7 shadow-card">
                    <span className="flex h-11 w-11 items-center justify-center rounded-full bg-jungle text-gold-light">
                      <Icon name={service.icon} />
                    </span>
                    <h3 className="mt-5 font-serif text-lg text-jungle">{service.title}</h3>
                    <p className="mt-2 text-sm leading-relaxed text-jungle-muted">
                      {service.description}
                    </p>
                  </div>
                </Reveal>
              </li>
            )}
          </ul>
        </div>
      </section>

      <section className="w-full bg-sand py-20 lg:py-24">
        <div className="mx-auto max-w-content px-6">
          <div className="grid gap-12 lg:grid-cols-[1fr_1.2fr] lg:gap-16">
            <SectionHeading
              eyebrow="End To End"
              title="One team, from proposal to final invoice"
              subtitle="You get a single point of contact who owns the whole programme — venue, transport, production and every delegate detail."
              align="left" />
            
            <ul className="space-y-4">
              {CAPABILITIES.map((item, index) =>
              <li key={item.title}>
                  <Reveal delay={index * 0.06}>
                    <div className="rounded-lg border border-jungle/10 bg-ivory p-6">
                      <h3 className="font-serif text-lg text-jungle">{item.title}</h3>
                      <p className="mt-2 text-sm leading-relaxed text-jungle-muted">
                        {item.description}
                      </p>
                    </div>
                  </Reveal>
                </li>
              )}
            </ul>
          </div>

          <Reveal className="mt-12">
            <Link
              href="/contact"
              className="inline-flex items-center rounded-full bg-jungle px-8 py-4 text-[12px] font-medium uppercase tracking-[0.16em] text-ivory transition-colors hover:bg-jungle-light">
              
              Request a Proposal
            </Link>
          </Reveal>
        </div>
      </section>

      <CtaStrip
        eyebrow="Group Enquiries"
        title="Planning something for 10 or 600?"
        description="Send us your dates, delegate numbers and objectives — we'll come back with a costed proposal and venue options."
        primaryLabel="Request a Proposal" />
      
    </>);

}