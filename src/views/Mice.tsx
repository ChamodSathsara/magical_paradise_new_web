'use client';

import React, { useState } from 'react';
import { CheckCircle2Icon, Loader2Icon } from 'lucide-react';
import { PageHero } from '../components/ui/PageHero';
import { Reveal } from '../components/ui/Reveal';
import { SectionHeading } from '../components/ui/SectionHeading';
import { IMAGES } from '../data/media';
import { SITE } from '../data/site';

const APPROACH = [
  ['Bespoke Conceptualization', 'Every program is thoughtfully designed to reflect your brand’s identity, objectives, and purpose.'],
  ['Luxury Venues & Handpicked Properties', 'From world-class conference venues to exclusive resorts and distinctive boutique properties.'],
  ['Discreet, End-to-End Management', 'From planning and logistics to on-ground coordination, every detail is managed with precision.'],
  ['Seamless Leisure Integration', 'Combine productive engagements with curated leisure, wellness, cultural, and experiential moments.'],
];

const DESTINATIONS = [
  { name: 'Colombo & Negombo', mood: 'Contemporary Elegance', image: IMAGES.hotel, description: 'Host prestigious conferences, executive meetings, and corporate gatherings in sophisticated urban and coastal settings with premium facilities and convenient access.' },
  { name: 'Kandy & Cultural Triangle', mood: 'Timeless Grandeur', image: IMAGES.kandy, description: 'Combine meaningful business engagements with Sri Lanka’s rich heritage, cultural character, and elegant hill-country surroundings.' },
  { name: 'Nuwara Eliya & Hill Country', mood: 'Tranquil Exclusivity', image: IMAGES.teaCountry, description: 'Retreat into mist-covered highlands and tea estates offering privacy, serenity, and an ideal atmosphere for executive reflection and leadership retreats.' },
  { name: 'Galle, Bentota & South Coast', mood: 'Coastal Luxury', image: IMAGES.galle, description: 'Oceanfront sophistication meets relaxed refinement—the perfect setting for incentive travel, executive retreats, celebrations, and team experiences.' },
  { name: 'Yala & Southern Wilderness', mood: 'Refined Adventure', image: IMAGES.yala, description: 'Create memorable incentive journeys through private wildlife experiences, luxury lodges, wilderness settings, and exceptional hospitality.' },
  { name: 'East Coast', mood: 'Rare & Untouched', image: IMAGES.mirissa, description: 'For organizations seeking something beyond the familiar, the east coast offers privacy, authentic character, pristine beaches, and distinctive resort experiences.' },
];

const PROGRAMS = [
  ['Executive Retreats', 'Private environments for strategic thinking, leadership discussions, and senior management engagement.'],
  ['Incentive Travel', 'Reward high-performing teams with carefully curated journeys across Sri Lanka.'],
  ['Meetings & Conferences', 'Professional venues, accommodation, transport, technology support, and end-to-end coordination.'],
  ['Team Building', 'Purposeful experiences designed to strengthen communication, collaboration, and team connection.'],
  ['Corporate Celebrations', 'Gala dinners, milestone events, award nights, product launches, and themed occasions.'],
];

const BOARDROOM = ['Private gala dinners under the stars', 'Themed events and beachside celebrations', 'Exclusive cultural showcases', 'Immersive local experiences', 'Luxury wellness rituals', 'Yoga and mindfulness sessions', 'Tailor-made team-building activities', 'Outdoor and outbound experiences'];
const EVENT_TYPES = ['Meeting', 'Incentive Travel', 'Conference', 'Exhibition', 'Executive Retreat', 'Team Building', 'Corporate Celebration', 'Other'];
const DESTINATION_OPTIONS = ['Colombo', 'Negombo', 'Kandy', 'Cultural Triangle', 'Nuwara Eliya', 'Galle', 'Bentota', 'South Coast', 'Yala', 'Hambantota', 'East Coast', 'Multiple Destinations', 'Not Sure Yet'];
type Status = 'idle' | 'sending' | 'sent' | 'error';

export function Mice() {
  const [status, setStatus] = useState<Status>('idle');
  const onSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (status === 'sending') return;
    setStatus('sending');
    try {
      const data = new FormData(event.currentTarget);
      const body = Array.from(data.entries()).map(([key, value]) => `${key}: ${value}`).join('\n');
      window.location.href = `mailto:${SITE.enquiryEmail}?subject=${encodeURIComponent('MICE enquiry from ' + data.get('Full Name'))}&body=${encodeURIComponent(body)}`;
      window.setTimeout(() => setStatus('sent'), 500);
    } catch { setStatus('error'); }
  };

  return <>
    <PageHero eyebrow="Meetings · Incentives · Conferences · Exhibitions" title="MICE & Corporate Retreats in Sri Lanka" subtitle="Elevated Business. Exceptional Experiences. Bespoke corporate gatherings shaped with precision, understated luxury, and immersive island experiences." image={IMAGES.hotel} imageAlt="Elegant Sri Lankan luxury hotel prepared for a corporate retreat">
      <p className="mt-5 max-w-2xl text-sm leading-7 text-ivory/70">At Magical Paradise, we curate experiences that go beyond traditional corporate travel—ensuring every gathering is inspiring, memorable, and seamless.</p>
      <div className="mt-8 flex flex-wrap gap-3"><a href="#inquiry" className="rounded-full bg-gold px-7 py-3.5 text-[11px] font-semibold uppercase tracking-[0.15em] text-jungle-deep hover:bg-gold-light">Plan Your MICE Experience</a><a href="#destinations" className="rounded-full border border-ivory/30 px-7 py-3.5 text-[11px] font-medium uppercase tracking-[0.15em] text-ivory hover:bg-ivory hover:text-jungle">Explore Destinations</a></div>
    </PageHero>

    <section className="bg-ivory py-20 lg:py-24"><div className="mx-auto max-w-content px-6"><SectionHeading eyebrow="Our Signature" title="A Signature Approach to Corporate Travel" subtitle="Every Magical Paradise MICE program is thoughtfully designed around the organization, its people, and the purpose of the gathering." /><ul className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">{APPROACH.map(([title, description], index) => <li key={title}><Reveal delay={index * .06} className="h-full"><div className="h-full border-t border-gold bg-white p-7 shadow-card"><span className="font-serif text-2xl text-gold-dark">0{index + 1}</span><h3 className="mt-5 font-serif text-xl text-jungle">{title}</h3><p className="mt-3 text-sm leading-6 text-jungle-muted">{description}</p></div></Reveal></li>)}</ul></div></section>

    <section id="destinations" className="scroll-mt-24 bg-sand py-20 lg:py-24"><div className="mx-auto max-w-content px-6"><SectionHeading eyebrow="Across Sri Lanka" title="Distinguished Destinations Across the Island" subtitle="From contemporary city venues to secluded coastal retreats and wilderness escapes, Sri Lanka offers exceptional settings for every corporate objective." /><div className="mt-14 space-y-8">{DESTINATIONS.map((destination, index) => <Reveal key={destination.name}><article className="grid overflow-hidden rounded-lg bg-ivory lg:grid-cols-2"><img src={destination.image} alt={`${destination.name}, a premium setting for corporate events in Sri Lanka`} loading="lazy" className={`h-72 w-full object-cover lg:h-full ${index % 2 ? 'lg:order-2' : ''}`} /><div className="flex flex-col justify-center p-8 sm:p-10 lg:p-12"><p className="eyebrow text-gold-dark">{destination.mood}</p><h3 className="mt-3 font-serif text-3xl text-jungle">{destination.name}</h3><p className="mt-5 text-sm leading-7 text-jungle-muted">{destination.description}</p></div></article></Reveal>)}</div></div></section>

    <section className="bg-jungle-deep py-20 lg:py-24"><div className="mx-auto max-w-content px-6"><SectionHeading eyebrow="A Visual Journey" title="Business, Reimagined Across the Island" tone="light" /><div className="mt-12 grid auto-rows-[190px] grid-cols-2 gap-3 md:grid-cols-4">{[{image:IMAGES.galle,alt:'Coastal retreat setting in Galle'},{image:IMAGES.teaCountry,alt:'Sri Lankan hill country executive retreat'},{image:IMAGES.yala,alt:'Luxury incentive travel near Yala'},{image:IMAGES.hotel,alt:'Refined hotel setting for corporate guests'},{image:IMAGES.sigiriya,alt:'Cultural Triangle incentive experience'},{image:IMAGES.mirissa,alt:'Sri Lankan beachside corporate retreat'}].map((item,index)=><img key={item.alt} src={item.image} alt={item.alt} loading="lazy" className={`h-full w-full rounded-lg object-cover ${index === 0 || index === 3 ? 'col-span-2' : ''}`} />)}</div></div></section>

    <section className="bg-ivory py-20 lg:py-24"><div className="mx-auto grid max-w-content items-center gap-12 px-6 lg:grid-cols-2 lg:gap-16"><Reveal><img src={IMAGES.mirissa} alt="Beachside corporate celebration at sunset" loading="lazy" className="aspect-[4/3] w-full rounded-lg object-cover" /></Reveal><div><SectionHeading eyebrow="Curated Experiences" title="Beyond the Boardroom" subtitle="Transform your corporate program with thoughtfully curated experiences that encourage connection, inspiration, and shared memories." align="left" /><ul className="mt-8 grid gap-x-6 gap-y-4 sm:grid-cols-2">{BOARDROOM.map(item=><li key={item} className="flex gap-3 text-sm leading-6 text-jungle"><span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-gold" />{item}</li>)}</ul></div></div></section>

    <section className="bg-sand py-20 lg:py-24"><div className="mx-auto max-w-content px-6"><SectionHeading eyebrow="Purpose Led" title="Experiences Designed Around Your Objectives" /><div className="mt-12 grid gap-px overflow-hidden rounded-lg bg-jungle/10 sm:grid-cols-2 lg:grid-cols-3">{PROGRAMS.map(([title,description])=><article key={title} className="bg-ivory p-8"><h3 className="font-serif text-xl text-jungle">{title}</h3><p className="mt-3 text-sm leading-6 text-jungle-muted">{description}</p></article>)}</div></div></section>

    <section className="bg-jungle py-16 text-center text-ivory"><div className="mx-auto max-w-3xl px-6"><p className="eyebrow text-gold-light">Make It Meaningful</p><h2 className="mt-4 font-serif text-3xl sm:text-4xl">Crafted for Impact. Designed to Inspire.</h2><p className="mx-auto mt-5 max-w-2xl text-sm leading-7 text-ivory/70">Our MICE experiences inspire connection, celebrate success, and leave a lasting impression.</p><a href="#inquiry" className="mt-8 inline-flex rounded-full bg-gold px-8 py-4 text-[11px] font-semibold uppercase tracking-[0.15em] text-jungle-deep hover:bg-gold-light">Start Planning Your Event</a></div></section>

    <section id="inquiry" className="scroll-mt-20 bg-ivory py-20 lg:py-24"><div className="mx-auto grid max-w-content gap-12 px-6 lg:grid-cols-[.8fr_1.2fr] lg:gap-16"><div><SectionHeading eyebrow="MICE Enquiries" title="Connect With Us" subtitle="Tell us about your upcoming corporate gathering, conference, incentive journey, or executive retreat. Our destination specialists will shape a seamless experience around your objectives." align="left" /><p className="mt-6 text-sm text-jungle-muted">Share a few details and our team will get in touch with you.</p></div><div>{status === 'sent' ? <div role="status" className="rounded-lg border border-jungle/10 bg-white p-10 text-center shadow-card"><CheckCircle2Icon className="mx-auto h-11 w-11 text-jungle" /><h3 className="mt-5 font-serif text-2xl text-jungle">Your enquiry is ready</h3><p className="mt-3 text-sm text-jungle-muted">Your email app has opened with the details. Send the prepared email to complete your enquiry.</p><button type="button" onClick={()=>setStatus('idle')} className="mt-7 rounded-full border border-jungle/20 px-6 py-3 text-xs uppercase tracking-widest text-jungle">Create another enquiry</button></div> : <MiceForm onSubmit={onSubmit} status={status} />}</div></div></section>
  </>;
}

function MiceForm({ onSubmit, status }: { onSubmit: (event: React.FormEvent<HTMLFormElement>) => void; status: Status }) {
  return <form onSubmit={onSubmit} className="rounded-lg border border-jungle/10 bg-white p-6 shadow-card sm:p-8"><div className="grid gap-5 sm:grid-cols-2"><SelectField label="Title" name="Title" options={['Mr.', 'Ms.', 'Mrs.', 'Dr.', 'Other']} /><Field label="Full Name" name="Full Name" required /><Field label="Company / Organization" name="Company / Organization" /><Field label="Job Title" name="Job Title" /><Field label="Email" name="Email" type="email" required /><Field label="Phone Number" name="Phone Number" type="tel" pattern="[0-9+() -]{7,}" required /><Field label="Country" name="Country" /><SelectField label="Event Type" name="Event Type" options={EVENT_TYPES} required /><SelectField label="Preferred Destination" name="Preferred Destination" options={DESTINATION_OPTIONS} /><Field label="Expected Number of Guests" name="Expected Number of Guests" type="number" min="1" /><Field label="Preferred Start Date" name="Preferred Start Date" type="date" /><Field label="Preferred End Date" name="Preferred End Date" type="date" /><Field label="How did you hear about us?" name="How did you hear about us?" /></div><label className="mt-5 block"><span className="label">Your Message *</span><textarea name="Your Message" rows={5} required className="field" /></label><label className="mt-5 flex cursor-pointer items-start gap-3 text-sm leading-6 text-jungle-muted"><input type="checkbox" name="Consent" value="Agreed" required className="mt-1.5 accent-jungle" />I agree to be contacted by Magical Paradise regarding this inquiry and understand that the information submitted will be used to respond to my request.</label>{status === 'error' && <p role="alert" className="mt-5 text-sm text-red-700">We could not prepare your enquiry. Please email {SITE.enquiryEmail} directly.</p>}<button type="submit" disabled={status === 'sending'} className="mt-7 inline-flex items-center gap-2 rounded-full bg-jungle px-8 py-4 text-[11px] font-medium uppercase tracking-[0.16em] text-ivory hover:bg-jungle-light disabled:cursor-not-allowed disabled:opacity-60">{status === 'sending' && <Loader2Icon className="h-4 w-4 animate-spin" />}{status === 'sending' ? 'Preparing…' : 'Plan My MICE Experience'}</button></form>;
}

function Field({ label, name, type='text', required=false, pattern, min }: { label:string; name:string; type?:string; required?:boolean; pattern?:string; min?:string }) { const id=name.replace(/\W+/g,'-').toLowerCase(); return <label htmlFor={id}><span className="label">{label}{required && ' *'}</span><input id={id} name={name} type={type} required={required} pattern={pattern} min={min} className="field" /></label>; }
function SelectField({ label, name, options, required=false }: { label:string; name:string; options:string[]; required?:boolean }) { const id=name.replace(/\W+/g,'-').toLowerCase(); return <label htmlFor={id}><span className="label">{label}{required && ' *'}</span><select id={id} name={name} required={required} className="field">{options.map(option=><option key={option}>{option}</option>)}</select></label>; }
