import React from 'react';
import Link from 'next/link';
import { MailIcon, PhoneIcon } from 'lucide-react';
import { PageHero } from '../components/ui/PageHero';
import { Story } from '../components/sections/Story';
import { Services } from '../components/sections/Services';
import { Testimonials } from '../components/sections/Testimonials';
import { Icon } from '../components/ui/Icon';
import { Reveal } from '../components/ui/Reveal';
import { SectionHeading } from '../components/ui/SectionHeading';
import { IMAGES } from '../data/media';
import { SITE, WHY_US } from '../data/site';

export function About() {
  return (
    <>
      <PageHero
        eyebrow="Since 2009"
        title="About Us"
        subtitle="Born from a passion for Sri Lanka's unparalleled beauty — crafting unforgettable journeys for over 15 years."
        image={IMAGES.kandy}
        imageAlt="The Temple of the Sacred Tooth Relic in Kandy at dusk">
        
        <div className="mt-9 flex flex-wrap gap-3">
          <a
            href="#our-story"
            className="inline-flex items-center rounded-full bg-gold px-8 py-4 text-[12px] font-semibold uppercase tracking-[0.16em] text-jungle-deep transition-colors hover:bg-gold-light">
            
            Read Our Story
          </a>
          <Link
            href="/contact"
            className="inline-flex items-center rounded-full border border-ivory/35 bg-white/10 px-8 py-4 text-[12px] font-medium uppercase tracking-[0.16em] text-ivory backdrop-blur-sm transition-colors hover:bg-ivory hover:text-jungle">
            
            Contact Us
          </Link>
        </div>
      </PageHero>

      <section className="w-full bg-ivory py-20 lg:py-28">
        <div className="mx-auto grid max-w-content gap-12 px-6 lg:grid-cols-[0.9fr_1.1fr] lg:gap-20">
          <Reveal>
            <div>
              <p className="eyebrow text-gold-dark">Welcome to Magical Paradise</p>
              <h2 className="mt-4 font-serif text-4xl font-light leading-tight text-jungle sm:text-5xl">Your trusted gateway to breathtaking Sri Lanka</h2>
            </div>
          </Reveal>
          <Reveal delay={0.08}>
            <div className="space-y-5 text-[15px] leading-8 text-jungle-muted sm:text-base">
              <p>We are a licensed Destination Management Company, proudly established in 2017 and rooted in the spirit of family. What began as a shared passion for our beautiful island has grown into one of Sri Lanka’s most personal and dedicated travel companies—not built by a corporation, but by a family that calls this paradise home.</p>
              <p>Travel is not simply about destinations. It is about the moments, memories and people that make a journey unforgettable. Every tour, experience and itinerary is therefore handled with the warmth, care and attention we would give to our own family.</p>
              <p>Our passionate local team knows Sri Lanka intimately—from the misty tea hills of Nuwara Eliya and the ancient wonders of Sigiriya to the southern beaches and the wild heart of Yala. As a fully licensed DMC, we remain committed to exceptional service, safety and professionalism, 24 hours a day, seven days a week.</p>
              <p className="font-serif text-2xl italic text-jungle">When you travel with Magical Paradise, you do not simply book a tour. You become part of our family.</p>
            </div>
          </Reveal>
        </div>
      </section>

      <section className="w-full bg-sand py-20 lg:py-28">
        <div className="mx-auto max-w-4xl px-6 text-center">
          <Reveal>
            <p className="eyebrow text-gold-dark">A More Personal Side of Us</p>
            <h2 className="mt-4 font-serif text-4xl font-light text-jungle sm:text-5xl">More than a business—it is our way of life</h2>
            <div className="mt-7 space-y-5 text-[15px] leading-8 text-jungle-muted sm:text-base">
              <p>Whenever we take a break from work, you will often find us on the road—exploring hidden corners, revisiting timeless classics and seeking authentic, off-the-beaten-path experiences many travelers miss.</p>
              <p>We love slow, meaningful travel: scenic hikes, uncrowded places, elusive wildlife, hidden waterfalls and simple breakfasts beside a river or aboard a boat. Kalika’s deep knowledge and love of Sri Lanka’s birdlife brings another special perspective to the way we experience nature.</p>
              <p>These personal journeys inspire everything we curate. We share places we have felt, moments we have lived and stories worth remembering—going beyond being a DMC to become storytellers of Sri Lanka.</p>
            </div>
          </Reveal>
        </div>
      </section>

      <div id="our-story" className="scroll-mt-24">
        <Story />
      </div>

      <Services
        eyebrow="What We Offer"
        title="Our Special Services"
        subtitle="Every detail matters. These exclusive extras are included to make your Sri Lanka journey seamless, comfortable, and truly memorable." />
      

      <section className="w-full bg-ivory py-20 lg:py-28">
        <div className="mx-auto max-w-content px-6">
          <SectionHeading eyebrow="Why Us" title="The Magical Paradise Difference" />
          <ul className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {WHY_US.map((item, index) =>
            <li key={item.title}>
                <Reveal delay={index * 0.07} className="h-full">
                  <div className="h-full rounded-lg border border-jungle/10 bg-white p-7 shadow-card">
                    <span className="flex h-11 w-11 items-center justify-center rounded-full bg-jungle text-gold-light">
                      <Icon name={item.icon} />
                    </span>
                    <h3 className="mt-5 font-serif text-lg text-jungle">{item.title}</h3>
                    <p className="mt-3 text-sm leading-relaxed text-jungle-muted">
                      {item.description}
                    </p>
                  </div>
                </Reveal>
              </li>
            )}
          </ul>
        </div>
      </section>

      <Testimonials />

      <section className="w-full bg-jungle-deep py-20">
        <div className="mx-auto max-w-content px-6 text-center">
          <SectionHeading
            eyebrow="Get In Touch"
            title="Let's Plan Your Dream Journey"
            subtitle="Ready to experience the magic of Sri Lanka? Our travel specialists are here to craft your perfect personalised itinerary."
            tone="light" />
          
          <Reveal className="mt-10 flex flex-wrap justify-center gap-3">
            <a
              href={SITE.phoneHref}
              className="inline-flex items-center gap-2 rounded-full border border-ivory/30 px-7 py-3.5 text-[11px] font-medium uppercase tracking-[0.16em] text-ivory transition-colors hover:bg-ivory hover:text-jungle">
              
              <PhoneIcon className="h-4 w-4" strokeWidth={1.5} aria-hidden="true" />
              Call Us
            </a>
            <a
              href={`mailto:${SITE.enquiryEmail}`}
              className="inline-flex items-center gap-2 rounded-full border border-ivory/30 px-7 py-3.5 text-[11px] font-medium uppercase tracking-[0.16em] text-ivory transition-colors hover:bg-ivory hover:text-jungle">
              
              <MailIcon className="h-4 w-4" strokeWidth={1.5} aria-hidden="true" />
              Email Us
            </a>
            <Link
              href="/contact"
              className="inline-flex items-center rounded-full bg-gold px-7 py-3.5 text-[11px] font-semibold uppercase tracking-[0.16em] text-jungle-deep transition-colors hover:bg-gold-light">
              
              Send Us a Message
            </Link>
          </Reveal>
          <p className="mt-8 text-sm text-ivory/60">
            {SITE.altPhone} · {SITE.enquiryEmail}
          </p>
        </div>
      </section>
    </>);

}
