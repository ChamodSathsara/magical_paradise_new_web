import React from 'react';
import { PageHero } from '../components/ui/PageHero';
import { ExperienceCard } from '../components/cards/ExperienceCard';
import { Reveal } from '../components/ui/Reveal';
import { CtaStrip } from '../components/sections/CtaStrip';
import { EXPERIENCES } from '../data/experiences';
import { IMAGES } from '../data/media';

export function Experiences() {
  return (
    <>
      <PageHero
        eyebrow="Curated Encounters"
        title="Experiences"
        subtitle="Discover the soul of Sri Lanka through curated encounters — home to 8 UNESCO World Heritage Sites, 15 national parks, and nearly 500,000 acres of lush tea estates."
        image={IMAGES.culinary}
        imageAlt="A Sri Lankan rice and curry spread with fresh spices"
        stats={[
        { value: '9+', label: 'Experiences' },
        { value: '4.9★', label: 'Rating' },
        { value: '2,000+', label: 'Happy Guests' }]
        } />
      

      <section className="w-full bg-ivory py-16 lg:py-24">
        <div className="mx-auto max-w-content px-6">
          <ul className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {EXPERIENCES.map((experience, index) =>
            <li key={experience.id}>
                <Reveal delay={index % 3 * 0.06} className="h-full">
                  <ExperienceCard experience={experience} />
                </Reveal>
              </li>
            )}
          </ul>
        </div>
      </section>

      <CtaStrip
        eyebrow="Make It Yours"
        title="Build a trip around what you love"
        description="Tell us which experiences excite you most — wellness, wildlife, food, surf or ceremony — and we'll design the journey around them."
        primaryLabel="Start Planning" />
      
    </>);

}