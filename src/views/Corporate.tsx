import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import {
  ArrowRightIcon, BriefcaseBusinessIcon, Building2Icon, CompassIcon,
  HandHeartIcon, HeartPulseIcon, MountainIcon, PresentationIcon, UsersIcon,
} from 'lucide-react';
import { PageHero } from '../components/ui/PageHero';
import { Reveal } from '../components/ui/Reveal';
import { SectionHeading } from '../components/ui/SectionHeading';
import { CtaStrip } from '../components/sections/CtaStrip';

const PORTFOLIO = [
  { icon: MountainIcon, title: 'Outdoor-Based Training (OBT) Programs' },
  { icon: UsersIcon, title: 'Team-Building Retreats & Leadership Camps' },
  { icon: CompassIcon, title: 'Corporate Day Outings & Staff Excursions' },
  { icon: PresentationIcon, title: 'Training Programs & Workshop Arrangements' },
  { icon: Building2Icon, title: 'Conferences, Meetings & Corporate Gatherings' },
  { icon: HeartPulseIcon, title: 'Wellness & Employee Engagement Programs' },
  { icon: HandHeartIcon, title: 'CSR & Community-Based Experiences' },
  { icon: BriefcaseBusinessIcon, title: 'Adventure & Challenge-Based Team Activities' },
];

const GALLERY = [
  { src: '/images/corporate/ksp-6693-web.jpg', alt: 'Corporate group arriving for an outdoor team experience' },
  { src: '/images/corporate/ksp-6841-web.jpg', alt: 'Participants travelling together on a safari experience' },
  { src: '/images/corporate/ksp-7051-web.jpg', alt: 'Safari vehicles prepared for a corporate group adventure' },
  { src: '/images/corporate/ksp-7248-web.jpg', alt: 'Facilitator leading an interactive workshop for participants' },
  { src: '/images/corporate/ksp-7339-web.jpg', alt: 'Participant taking part in a hands-on creative activity' },
  { src: '/images/corporate/ksp-7443-web.jpg', alt: 'Participant enjoying a team workshop activity' },
  { src: '/images/corporate/ksp-7505-web.jpg', alt: 'Team members sharing a joyful moment during the program' },
  { src: '/images/corporate/ksp-6951-web.jpg', alt: 'Magical Paradise event team at the outdoor program' },
];

export function Corporate() {
  return (
    <>
      <PageHero
        eyebrow="Corporate Retreats & Team Experiences"
        title="Beyond the Boardroom!"
        subtitle="Memorable corporate programs across Sri Lanka, thoughtfully designed to inspire, engage and strengthen teams."
        image="/images/corporate/ksp-7051-web.jpg"
        imageAlt="Corporate adventure vehicles ready for a team experience"
        stats={[
          { value: '360°', label: 'Program Planning' },
          { value: '8', label: 'Experience Formats' },
          { value: '15+', label: 'Years Experience' },
        ]}
      />

      <section className="w-full bg-ivory py-20 lg:py-28">
        <div className="mx-auto grid max-w-content gap-12 px-6 lg:grid-cols-[0.8fr_1.2fr] lg:gap-20">
          <Reveal>
            <div>
              <p className="eyebrow text-gold-dark">Built Through Experience</p>
              <h2 className="mt-4 font-serif text-4xl font-light leading-tight text-jungle sm:text-5xl">
                Stronger teams begin with shared moments
              </h2>
            </div>
          </Reveal>
          <Reveal delay={0.08}>
            <div className="space-y-5 text-[15px] leading-8 text-jungle-muted sm:text-base">
              <p>At Magical Paradise, we believe that the most successful teams are built through shared experience. Beyond leisure travel, we specialize in designing and managing memorable corporate programs across Sri Lanka, tailored to inspire, engage and strengthen teams.</p>
              <p>From team-building adventures in the great outdoors to professionally coordinated training retreats, conferences and incentive journeys, we take care of every detail so organizations can focus on their people and objectives.</p>
            </div>
          </Reveal>
        </div>
      </section>

      <section className="w-full bg-sand py-20 lg:py-28">
        <div className="mx-auto max-w-content px-6">
          <SectionHeading eyebrow="Our Portfolio" title="Corporate experiences with purpose" subtitle="Each program is customized around your people, objectives, schedule and preferred setting." />
          <ul className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {PORTFOLIO.map((item, index) => {
              const ItemIcon = item.icon;
              return (
                <li key={item.title}>
                  <Reveal delay={index * 0.05} className="h-full">
                    <div className="h-full rounded-lg border border-jungle/10 bg-ivory p-7 shadow-card">
                      <span className="flex h-12 w-12 items-center justify-center rounded-full bg-jungle text-gold-light">
                        <ItemIcon className="h-5 w-5" strokeWidth={1.5} />
                      </span>
                      <h3 className="mt-5 font-serif text-xl leading-snug text-jungle">{item.title}</h3>
                    </div>
                  </Reveal>
                </li>
              );
            })}
          </ul>
        </div>
      </section>

      <section className="w-full bg-jungle-deep py-20 text-ivory lg:py-28">
        <div className="mx-auto grid max-w-content items-center gap-12 px-6 lg:grid-cols-2 lg:gap-20">
          <Reveal>
            <div className="relative aspect-[4/3] overflow-hidden rounded-lg">
              <Image src="/images/corporate/ksp-7248-web.jpg" alt="Outdoor-Based Training facilitator working with program participants" fill sizes="(min-width: 1024px) 50vw, 100vw" className="object-cover" />
            </div>
          </Reveal>
          <Reveal delay={0.08}>
            <div>
              <p className="eyebrow text-gold-light">A Glimpse into Our Work · July 2025</p>
              <h2 className="mt-4 font-serif text-4xl font-light leading-tight sm:text-5xl">Outdoor-Based Training Program</h2>
              <div className="mt-7 space-y-5 text-[15px] leading-8 text-ivory/70 sm:text-base">
                <p>Magical Paradise successfully organized and executed a comprehensive Outdoor-Based Training Program for university participants, combining experiential learning, leadership development, teamwork, problem-solving and adventure-based challenges in a dynamic outdoor environment.</p>
                <p>The program was carefully designed to enhance collaboration, communication, resilience and leadership skills while creating a memorable and engaging experience for every participant.</p>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      <section className="w-full bg-ivory py-20 lg:py-28">
        <div className="mx-auto max-w-content px-6">
          <SectionHeading eyebrow="A Glimpse into Our Work" title="People, purpose and shared adventure" subtitle="Highlights from our July 2025 corporate experience program." />
          <div className="mt-14 grid auto-rows-[220px] grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {GALLERY.map((photo, index) => (
              <Reveal key={photo.src} delay={(index % 4) * 0.05} className={index === 0 || index === 6 ? 'sm:col-span-2' : ''}>
                <figure className="group relative h-full overflow-hidden rounded-lg bg-sand">
                  <Image src={photo.src} alt={photo.alt} fill sizes="(min-width: 1024px) 25vw, (min-width: 640px) 50vw, 100vw" className="object-cover transition-transform duration-700 group-hover:scale-105" />
                  <div className="absolute inset-0 bg-gradient-to-t from-jungle-deep/35 to-transparent" aria-hidden="true" />
                </figure>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="w-full bg-sand py-20 lg:py-24">
        <div className="mx-auto max-w-4xl px-6 text-center">
          <Reveal>
            <p className="font-serif text-2xl font-light leading-relaxed text-jungle sm:text-3xl">Whether you want to strengthen teamwork, reward high-performing employees, conduct strategic planning or create an unforgettable team experience, we deliver professional planning and seamless execution.</p>
            <Link href="/contact" className="mt-9 inline-flex items-center gap-3 rounded-full bg-jungle px-8 py-4 text-[12px] font-medium uppercase tracking-[0.16em] text-ivory transition-colors hover:bg-jungle-light">
              Plan a Corporate Experience <ArrowRightIcon className="h-4 w-4" strokeWidth={1.5} />
            </Link>
          </Reveal>
        </div>
      </section>

      <CtaStrip eyebrow="Tailored for Your Organization" title="Ready to take your team beyond the boardroom?" description="Share your objectives, group size and preferred dates. We will design a purposeful corporate experience around your team." primaryLabel="Request a Proposal" />
    </>
  );
}
