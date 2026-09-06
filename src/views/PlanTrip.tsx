'use client';

import React, { useState } from 'react';
import { CheckCircle2Icon } from 'lucide-react';
import { PageHero } from '../components/ui/PageHero';
import { SITE } from '../data/site';
import { IMAGES } from '../data/media';

const INTERESTS = ['Luxury', 'History & Culture', 'Highlights', 'UNESCO World Heritage', 'Wildlife, Nature & National Parks', 'Bird Watching', 'Hills & Valleys', 'Hiking & Trekking', 'Off the Beaten Track', 'Pekoe Trail', 'Cycling', 'Beach Escapes', 'Wellness', 'Golf / Cricket', 'Perfect Honeymoon', 'Adventure Travel', 'Food & Drinks', 'Northern Sri Lanka', 'Ramayana Yatra', 'Interact with Locals', 'Destination Wedding', 'Long stay with day activities'];
const STAYS = ['Budget hotels', '2–3★ moderate hotels', '4★ hotels', '5★ hotels', 'Luxury boutique hotels', 'Boutique villas', 'Wellness hotels', 'Mix of hotels', 'Beach villas – Maldives', 'Water villas – Maldives'];

export function PlanTrip() {
  const [sent, setSent] = useState(false);
  const submit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    const preference = String(data.get('Contact preference') || 'WhatsApp');
    const body = Array.from(data.entries()).map(([key, value]) => `${key}: ${value}`).join('\n');
    if (preference === 'WhatsApp') window.open(`${SITE.whatsapp}?text=${encodeURIComponent(body)}`, '_blank', 'noopener,noreferrer');
    else if (preference === 'Call') window.location.href = SITE.phoneHref;
    else window.location.href = `mailto:${SITE.enquiryEmail}?subject=${encodeURIComponent('Tailor-made trip enquiry')}&body=${encodeURIComponent(body)}`;
    setSent(true);
  };

  return <>
    <PageHero eyebrow="Tailor-made Journeys" title="Plan Your Dream Trip" subtitle="Design your perfect escape to Sri Lanka, the Maldives, or both. Share your ideas and our local experts will craft a personalised journey around your style, pace, and budget." image={IMAGES.ella} imageAlt="A tailor-made journey through the Sri Lankan hill country" />
    <section className="bg-sand py-16 lg:py-20"><div className="mx-auto max-w-content px-6"><p className="eyebrow text-center text-gold-dark">How It Works</p><ol className="mt-8 grid gap-5 md:grid-cols-4">{[
      ['Tell us your plan', 'Share your travel preferences.'], ['Get connected', 'An expert reaches you by call, WhatsApp, or email.'], ['Receive your quote', 'A journey and quotation crafted just for you.'], ['Book with confidence', 'Secure your trip and we handle the rest.']
    ].map(([title, text], index) => <li key={title} className="rounded-lg bg-white p-6 shadow-card"><span className="font-serif text-2xl text-gold-dark">0{index + 1}</span><h2 className="mt-4 font-serif text-xl text-jungle">{title}</h2><p className="mt-2 text-sm leading-6 text-jungle-muted">{text}</p></li>)}</ol></div></section>
    <section className="bg-ivory py-16 lg:py-24"><div className="mx-auto max-w-4xl px-6">{sent ? <div className="rounded-lg border border-jungle/10 bg-white p-10 text-center shadow-card"><CheckCircle2Icon className="mx-auto h-12 w-12 text-jungle" /><h2 className="mt-5 font-serif text-3xl text-jungle">Your enquiry is ready</h2><p className="mt-3 text-jungle-muted">Your selected contact app has opened with the trip details. Send the message there to complete your enquiry.</p><button type="button" onClick={() => setSent(false)} className="mt-7 rounded-full bg-jungle px-7 py-3 text-xs uppercase tracking-widest text-ivory">Plan another trip</button></div> :
      <form onSubmit={submit} className="rounded-lg border border-jungle/10 bg-white p-6 shadow-card sm:p-10"><h2 className="font-serif text-3xl text-jungle">Your travel details</h2>
        <RadioGroup title="How would you like us to connect?" name="Contact preference" options={['WhatsApp', 'Email', 'Call']} />
        <Section title="Personal Details"><Field name="First name" required /><Field name="Last name" required /><Field name="Email address" type="email" required /><Field name="Country" required /><Field name="Phone number (WhatsApp preferred)" type="tel" required /></Section>
        <Section title="Travel Information"><Select name="Destination" options={['Sri Lanka', 'Maldives', 'Sri Lanka & Maldives']} /><Field name="Arrival date" type="date" required /><Field name="Departure date" type="date" required /><Select name="Flexible dates" options={['No', 'Yes']} /><Field name="Adults" type="number" required /><Field name="Children and ages" /></Section>
        <CheckGroup title="Your Interests" name="Interests" options={INTERESTS} /><CheckGroup title="Accommodation Style" name="Accommodation" options={STAYS} />
        <Section title="Budget per person, excluding flights"><Select name="Currency" options={['USD', 'GBP', 'AUD', 'EUR']} /><Select name="Budget" options={Array.from({ length: 20 }, (_, index) => `${(index + 1) * 500}+`)} /></Section>
        <CheckGroup title="Special Requests" name="Special requests" options={['Baby seats', 'Female guide', 'Dietary needs', 'Celebrations', 'Other']} />
        <label className="mt-8 block"><span className="label">Additional Notes</span><textarea name="Additional notes" rows={5} placeholder="Tell us more about your dream trip…" className="field" /></label>
        <button className="mt-8 rounded-full bg-gold px-8 py-4 text-xs font-semibold uppercase tracking-widest text-jungle-deep hover:bg-gold-light">Start Planning My Trip</button>
      </form>}</div></section>
  </>;
}

function Section({ title, children }: { title: string; children: React.ReactNode }) { return <fieldset className="mt-9"><legend className="font-serif text-xl text-jungle">{title}</legend><div className="mt-4 grid gap-5 sm:grid-cols-2">{children}</div></fieldset>; }
function Field({ name, type = 'text', required = false }: { name: string; type?: string; required?: boolean }) { const id = name.replace(/\W+/g, '-').toLowerCase(); return <label htmlFor={id}><span className="label">{name}{required && ' *'}</span><input id={id} name={name} type={type} min={type === 'number' ? 1 : undefined} required={required} className="field" /></label>; }
function Select({ name, options }: { name: string; options: string[] }) { const id = name.toLowerCase(); return <label htmlFor={id}><span className="label">{name}</span><select id={id} name={name} className="field">{options.map(option => <option key={option}>{option}</option>)}</select></label>; }
function RadioGroup({ title, name, options }: { title: string; name: string; options: string[] }) { return <fieldset className="mt-8"><legend className="label">{title}</legend><div className="mt-3 flex flex-wrap gap-3">{options.map((option, index) => <label key={option} className="choice"><input type="radio" name={name} value={option} defaultChecked={!index} className="accent-jungle" />{option}</label>)}</div></fieldset>; }
function CheckGroup({ title, name, options }: { title: string; name: string; options: string[] }) { return <fieldset className="mt-9"><legend className="font-serif text-xl text-jungle">{title}</legend><div className="mt-4 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">{options.map(option => <label key={option} className="choice items-start"><input type="checkbox" name={name} value={option} className="mt-1 accent-jungle" />{option}</label>)}</div></fieldset>; }
