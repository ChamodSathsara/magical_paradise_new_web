import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { CheckIcon, LeafIcon, QuoteIcon } from 'lucide-react';
import { PageHero } from '../components/ui/PageHero';
import { Reveal } from '../components/ui/Reveal';
import { SectionHeading } from '../components/ui/SectionHeading';
import { CtaStrip } from '../components/sections/CtaStrip';
import { IMAGES } from '../data/media';

const COMMITMENTS = [
  'Minimizing the use of plastics and polythene.',
  'Offering ethical wildlife experiences only. We discourage elephant riding, even where it is presented as an optional activity.',
  'Not encouraging animal shows, zoos or places where animals are chained or caged.',
  'Not working with suppliers whose boats damage corals, flora or pose dangers to marine life.',
  'Promoting animal-friendly travel, including responsible distances between safari jeeps and wildlife, and between boats and marine life.',
  'Practising proper garbage disposal and responsible waste management.',
  'Supporting local communities and small businesses.',
  'Providing eco-conscious travel comforts, including cool boxes and reusable alternatives.',
  'Promoting Sri Lankan products such as tea and cinnamon, together with local craftsmanship.',
  'Giving back through VINO FOUNDATION, our philanthropic arm.',
];

export function Conservation() {
  return (
    <>
      <PageHero
        eyebrow="Magical Conservation"
        title="Protecting Paradise"
        subtitle="Because the best journeys leave a positive footprint."
        image={IMAGES.teaCountry}
        imageAlt="Lush green tea country landscape in Sri Lanka"
        stats={[
          { value: '10', label: 'Green Commitments' },
          { value: '100%', label: 'Ethical Wildlife' },
          { value: 'Local', label: 'Community First' },
        ]}
      >
        <div className="mt-8 inline-flex items-center gap-3 rounded-full border border-gold-light/30 bg-jungle-deep/30 px-5 py-3 text-sm text-gold-light backdrop-blur-sm">
          <LeafIcon className="h-5 w-5" strokeWidth={1.5} />
          Travel gently. Protect what makes Sri Lanka magical.
        </div>
      </PageHero>

      <section className="w-full bg-jungle-deep py-20 text-ivory lg:py-24">
        <Reveal className="mx-auto max-w-4xl px-6 text-center">
          <QuoteIcon className="mx-auto h-10 w-10 text-gold-light" strokeWidth={1.2} />
          <blockquote className="mt-7 font-serif text-2xl font-light italic leading-relaxed sm:text-3xl lg:text-4xl">
            “Our task must be to free ourselves by widening our circle of compassion to embrace all living creatures and the whole of nature and its beauty.”
          </blockquote>
          <p className="mt-6 text-xs font-medium uppercase tracking-[0.22em] text-gold-light">Albert Einstein</p>
        </Reveal>
      </section>

      <section className="w-full bg-ivory py-20 lg:py-28">
        <div className="mx-auto grid max-w-content items-center gap-12 px-6 lg:grid-cols-[1.05fr_0.95fr] lg:gap-20">
          <Reveal>
            <div>
              <p className="eyebrow text-gold-dark">Our Green Commitment</p>
              <h2 className="mt-4 font-serif text-4xl font-light leading-tight text-jungle sm:text-5xl">Cherishing Mother Earth is part of who we are</h2>
              <div className="mt-7 space-y-5 text-[15px] leading-8 text-jungle-muted sm:text-base">
                <p>As rightfully quoted by Dr. Einstein, we at Magical Paradise constantly and continuously believe in cherishing Mother Earth, honoring the environment and its species of all kinds at all times.</p>
                <p>As veteran specialists in the tourism sector, we uphold a deep sense of responsibility and passion towards nature and wildlife when curating every itinerary and throughout our day-to-day work.</p>
                <p>We believe that a greener, fresher environment is essential to experiencing the core of authentic tourism—and that responsibility must begin consciously within ourselves.</p>
              </div>
            </div>
          </Reveal>
          <Reveal delay={0.08}>
            <div className="relative aspect-[4/5] overflow-hidden rounded-xl shadow-lift">
              <Image src={IMAGES.yala} alt="Wildlife living freely in the protected natural environment of Sri Lanka" fill sizes="(min-width: 1024px) 42vw, 100vw" className="object-cover" />
              <div className="absolute inset-0 bg-gradient-to-t from-jungle-deep/55 via-transparent to-transparent" />
              <div className="absolute bottom-0 left-0 p-7 text-ivory sm:p-9">
                <LeafIcon className="h-8 w-8 text-gold-light" strokeWidth={1.3} />
                <p className="mt-4 max-w-sm font-serif text-2xl leading-snug">Every itinerary is an opportunity to care for the places we share.</p>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      <section className="w-full bg-sand py-20 lg:py-28">
        <div className="mx-auto max-w-content px-6">
          <SectionHeading eyebrow="How We Travel" title="Things we do to define our commitment" subtitle="Practical choices woven into the way we plan, operate and host every Magical Paradise journey." />
          <ul className="mt-14 grid gap-5 md:grid-cols-2">
            {COMMITMENTS.map((commitment, index) => (
              <li key={commitment}>
                <Reveal delay={(index % 2) * 0.06} className="h-full">
                  <div className="flex h-full gap-4 rounded-lg border border-jungle/10 bg-ivory p-6 shadow-card">
                    <span className="mt-0.5 flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-jungle text-gold-light">
                      <CheckIcon className="h-4 w-4" strokeWidth={2} />
                    </span>
                    <p className="text-sm leading-7 text-jungle-muted">{commitment}</p>
                  </div>
                </Reveal>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section className="relative isolate w-full overflow-hidden py-24 lg:py-32">
        <Image src={IMAGES.galle} alt="Sri Lankan coastline protected for future generations" fill sizes="100vw" className="-z-20 object-cover" />
        <div className="absolute inset-0 -z-10 bg-jungle-deep/80" />
        <Reveal className="mx-auto max-w-4xl px-6 text-center text-ivory">
          <LeafIcon className="mx-auto h-10 w-10 text-gold-light" strokeWidth={1.2} />
          <h2 className="mt-6 font-serif text-4xl font-light leading-tight sm:text-5xl">Encoded in our DNA</h2>
          <p className="mx-auto mt-6 max-w-3xl text-[15px] leading-8 text-ivory/75 sm:text-base">Our green commitment is woven into the very fabric of who we are. It is not just something we do; it is a natural extension of our identity—how we work, how we welcome guests and how we serve this pearl of the Indian Ocean.</p>
          <Link href="/contact" className="mt-9 inline-flex rounded-full bg-gold px-8 py-4 text-xs font-semibold uppercase tracking-[0.16em] text-jungle-deep transition-colors hover:bg-gold-light">Travel With Purpose</Link>
        </Reveal>
      </section>

      <CtaStrip eyebrow="A Positive Footprint" title="Explore Sri Lanka with care" description="Let us create a thoughtful journey that celebrates nature, wildlife and the communities that make this island extraordinary." primaryLabel="Plan Your Journey" />
    </>
  );
}
