'use client';

import React, { useEffect, useState } from 'react';
import Link from 'next/link';
import { CheckCircle2Icon } from 'lucide-react';
import { PageHero } from '../components/ui/PageHero';
import { SITE } from '../data/site';
import { IMAGES } from '../data/media';

const INTERESTS = ['Luxury', 'History & Culture', 'Highlights', 'UNESCO World Heritage', 'Wildlife, Nature & National Parks', 'Bird Watching', 'Hills & Valleys', 'Hiking & Trekking', 'Off the Beaten Track', 'Pekoe Trail', 'Cycling', 'Beach Escapes', 'Wellness', 'Golf / Cricket', 'Perfect Honeymoon', 'Adventure Travel', 'Food & Drinks', 'Northern Sri Lanka', 'Ramayana Yatra', 'Interact with Locals', 'Destination Wedding', 'Long stay with day activities'];
const STAYS = ['Budget hotels', '2–3★ moderate hotels', '4★ hotels', '5★ hotels', 'Luxury boutique hotels', 'Boutique villas', 'Wellness hotels', 'Mix of hotels', 'Beach villas – Maldives', 'Water villas – Maldives'];

export function PlanTrip() {
  const [sent, setSent] = useState(false);
  const [travellingWithChildren, setTravellingWithChildren] = useState(false);
  const [selected, setSelected] = useState('');
  const [arrivalDate, setArrivalDate] = useState('');
  const [dateError, setDateError] = useState('');
  const today = new Date().toISOString().slice(0, 10);
  useEffect(() => { setSelected(new URLSearchParams(window.location.search).get('selected') || ''); }, []);
  const submit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    const arrival = String(data.get('Arrival date') || '');
    const departure = String(data.get('Departure date') || '');
    if (arrival < today || departure < arrival) { setDateError('Please choose a future arrival date and a departure date after arrival.'); return; }
    setDateError('');
    const preference = String(data.get('Contact preference') || 'WhatsApp');
    const body = Array.from(data.entries()).map(([key, value]) => `${key}: ${value}`).join('\n');
    if (preference === 'WhatsApp') window.open(`${SITE.whatsapp}?text=${encodeURIComponent(body)}`, '_blank', 'noopener,noreferrer');
    else if (preference === 'Call') window.location.href = SITE.phoneHref;
    else window.location.href = `mailto:${SITE.enquiryEmail}?subject=${encodeURIComponent(selected ? `Enquiry: ${selected}` : 'Tailor-made trip enquiry')}&body=${encodeURIComponent(body)}`;
    setSent(true);
  };

  return <>
    <PageHero eyebrow="Tailor-made Journeys" title="Plan Your Dream Trip" subtitle="Design your perfect escape to Sri Lanka, the Maldives, or both. Share your ideas and our local experts will craft a personalised journey around your style, pace, and budget." image={IMAGES.ella} imageAlt="A tailor-made journey through the Sri Lankan hill country" />
    <section className="bg-sand py-16 lg:py-20"><div className="mx-auto max-w-content px-6"><p className="eyebrow text-center text-gold-dark">How It Works</p><ol className="mt-8 grid gap-5 md:grid-cols-4">{[
      ['Tell us your plan', 'Share your travel preferences.'], ['Get connected', 'An expert reaches you by call, WhatsApp, or email.'], ['Receive your quote', 'A journey and quotation crafted just for you.'], ['Book with confidence', 'Secure your trip and we handle the rest.']
    ].map(([title, text], index) => <li key={title} className="rounded-lg bg-white p-6 shadow-card"><span className="font-serif text-2xl text-gold-dark">0{index + 1}</span><h2 className="mt-4 font-serif text-xl text-jungle">{title}</h2><p className="mt-2 text-sm leading-6 text-jungle-muted">{text}</p></li>)}</ol></div></section>
    <section className="bg-ivory py-16 lg:py-24"><div className="mx-auto max-w-4xl px-6">{sent ? <div className="rounded-lg border border-jungle/10 bg-white p-10 text-center shadow-card"><CheckCircle2Icon className="mx-auto h-12 w-12 text-jungle" /><h2 className="mt-5 font-serif text-3xl text-jungle">Your enquiry is ready</h2><p className="mt-3 text-jungle-muted">Your selected contact app has opened with the trip details. Send the message there to complete your enquiry.</p><button type="button" onClick={() => setSent(false)} className="mt-7 rounded-full bg-jungle px-7 py-3 text-xs uppercase tracking-widest text-ivory">Plan another trip</button></div> :
      <form onSubmit={submit} className="rounded-lg border border-jungle/10 bg-white p-6 shadow-card sm:p-10"><h2 className="font-serif text-3xl text-jungle">Your travel details</h2>
        {selected && <div className="mt-5 rounded-lg border border-gold/30 bg-sand p-4 text-sm text-jungle"><strong>Selected journey:</strong> {selected}<input type="hidden" name="Selected journey" value={selected}/></div>}
        <RadioGroup title="How would you like us to connect?" name="Contact preference" options={['WhatsApp', 'Email', 'Call']} />
        <Section title="Personal Details"><Select name="Title" options={['Mr', 'Mrs', 'Miss', 'Ms', 'Dr']} required /><Field name="First name" required /><Field name="Last name" required /><Field name="Nationality" required /><Field name="Country" required /><Field name="Email address" type="email" required /><Field name="Phone number (WhatsApp preferred)" type="tel" required /></Section>
        <Section title="Travel Information"><Select name="Destination" options={['Sri Lanka', 'Maldives', 'Sri Lanka & Maldives']} required /><Field name="Arrival date" type="date" required min={today} onChange={setArrivalDate}/><Field name="Departure date" type="date" required min={arrivalDate || today}/><Select name="Flexible dates" options={['No', 'Yes']} required /></Section>
        {dateError && <p role="alert" className="mt-3 text-sm text-red-700">{dateError}</p>}
        <CounterGroup title="Adults by age" groups={['13–17', '18–25', '26–35', '36–45', '46–55', '56–69', '70+']} prefix="Adults" />
        <RadioGroup title="Travelling with children?" name="Travelling with children" options={['No', 'Yes']} onChange={(value) => setTravellingWithChildren(value === 'Yes')} />
        {travellingWithChildren && <CounterGroup title="Children by age" groups={['Below 2', '3–7', '8–12']} prefix="Children" />}
        <CheckGroup title="Your Interests" name="Interests" options={INTERESTS} /><CheckGroup title="Accommodation Style" name="Accommodation" options={STAYS} />
        <Section title="Budget per person, excluding flights"><Select name="Currency" options={['USD', 'GBP', 'AUD', 'EUR']} /><Select name="Budget" options={Array.from({ length: 20 }, (_, index) => `${(index + 1) * 500}+`)} /></Section>
        <RadioGroup title="Special Occasion" name="Special occasion" options={['None', 'Anniversary', 'Birthday', 'Other']} />
        <CheckGroup title="Special Requests" name="Special requests" options={['Baby seats', 'Female guide', 'Dietary needs', 'Celebrations', 'Other']} />
        <label className="mt-8 block"><span className="label">Subject</span><input name="Subject" type="text" className="field" placeholder="What can we help you plan?" /></label>
        <label className="mt-8 block"><span className="label">Additional Notes</span><textarea name="Additional notes" rows={5} placeholder="Tell us more about your dream trip…" className="field" /></label>
        <p className="mt-8 text-xs leading-6 text-jungle-muted">By submitting this enquiry, you agree to our <Link href="/privacy-policy" className="underline text-jungle">Privacy Policy</Link>.</p>
        <button className="mt-4 rounded-full bg-gold px-8 py-4 text-xs font-semibold uppercase tracking-widest text-jungle-deep hover:bg-gold-light">Start Planning My Trip</button>
      </form>}</div></section>
  </>;
}

function Section({ title, children }: { title: string; children: React.ReactNode }) { return <fieldset className="mt-9"><legend className="font-serif text-xl text-jungle">{title}</legend><div className="mt-4 grid gap-5 sm:grid-cols-2">{children}</div></fieldset>; }
function Field({ name, type = 'text', required = false, min, onChange }: { name: string; type?: string; required?: boolean; min?: string; onChange?: (value:string)=>void }) { const id = name.replace(/\W+/g, '-').toLowerCase(); return <label htmlFor={id}><span className="label">{name}{required && ' *'}</span><input id={id} name={name} type={type} min={min ?? (type === 'number' ? 1 : undefined)} required={required} onChange={e=>onChange?.(e.target.value)} className="field" /></label>; }
function Select({ name, options, required = false }: { name: string; options: string[]; required?: boolean }) { const id = name.replace(/\W+/g, '-').toLowerCase(); return <label htmlFor={id}><span className="label">{name}{required && ' *'}</span><select id={id} name={name} required={required} className="field">{options.map(option => <option key={option}>{option}</option>)}</select></label>; }
function RadioGroup({ title, name, options, onChange }: { title: string; name: string; options: string[]; onChange?: (value: string) => void }) { return <fieldset className="mt-8"><legend className="label">{title}</legend><div className="mt-3 flex flex-wrap gap-3">{options.map((option, index) => <label key={option} className="choice"><input type="radio" name={name} value={option} defaultChecked={!index} onChange={() => onChange?.(option)} className="accent-jungle" />{option}</label>)}</div></fieldset>; }
function CheckGroup({ title, name, options }: { title: string; name: string; options: string[] }) { return <fieldset className="mt-9"><legend className="font-serif text-xl text-jungle">{title}</legend><div className="mt-4 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">{options.map(option => <label key={option} className="choice items-start"><input type="checkbox" name={name} value={option} className="mt-1 accent-jungle" />{option}</label>)}</div></fieldset>; }
function CounterGroup({ title, groups, prefix }: { title:string; groups:string[]; prefix:string }) { return <fieldset className="mt-9"><legend className="font-serif text-xl text-jungle">{title}</legend><div className="mt-4 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">{groups.map(group=><Counter key={group} name={`${prefix} ${group}`} label={group}/>)}</div></fieldset> }
function Counter({ name, label }: { name:string; label:string }) { const [value,setValue]=useState(0); return <div className="flex items-center justify-between rounded-lg border border-jungle/10 p-3"><span className="text-sm text-jungle">{label}</span><div className="flex items-center gap-3"><button type="button" aria-label={`Remove ${label}`} onClick={()=>setValue(v=>Math.max(0,v-1))} className="h-8 w-8 rounded-full border border-jungle/20">−</button><output className="w-5 text-center text-sm">{value}</output><input type="hidden" name={name} value={value}/><button type="button" aria-label={`Add ${label}`} onClick={()=>setValue(v=>v+1)} className="h-8 w-8 rounded-full bg-jungle text-ivory">+</button></div></div> }
