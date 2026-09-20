'use client';

import React, { useState } from 'react';
import { CheckCircle2Icon, CheckIcon, Loader2Icon } from 'lucide-react';
import { PageHero } from '../components/ui/PageHero';
import { Reveal } from '../components/ui/Reveal';
import { SectionHeading } from '../components/ui/SectionHeading';
import { IMAGES } from '../data/media';
import { SITE } from '../data/site';

const BENEFITS = [
  'Trusted, licensed Destination Management Company since 2017',
  'Unmatched local expertise with personalized service',
  'Handpicked hotels and curated experiences',
  'Dedicated 24/7 on-ground support from planning to execution',
  'Flexible, tailor-made solutions for your clients',
  'Commitment to responsible and ethical tourism',
  'Exclusive deals for agents',
];

const COMPANY_TYPES = ['Travel Agency', 'Tour Operator', 'Independent Holiday Planner', 'Wholesaler', 'Corporate Travel', 'Other'];
type Status = 'idle' | 'sending' | 'sent';

export function Partnership() {
  const [status, setStatus] = useState<Status>('idle');
  const onSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault(); setStatus('sending'); window.setTimeout(() => setStatus('sent'), 1200);
  };

  return <>
    <PageHero eyebrow="Agent Portal" title="Partner with Magical Paradise" subtitle="The best journeys are created together. Join our global network of travel agents, tour operators and holiday planners." image={IMAGES.sigiriya} imageAlt="Sigiriya rock fortress rising above the Sri Lankan jungle" />

    <section className="bg-ivory py-20 lg:py-28"><div className="mx-auto max-w-content px-6">
      <Reveal className="mx-auto max-w-4xl text-center"><p className="text-[15px] leading-8 text-jungle-muted sm:text-base">With our local expertise, trusted network and passion for exceptional service, we help you create seamless, authentic and memorable journeys across Sri Lanka. From tailor-made itineraries and handpicked accommodation to reliable transport and on-ground support, we take care of every detail—so you can confidently offer your clients the very best of Sri Lanka.</p></Reveal>
      <div className="mt-16 grid gap-12 lg:grid-cols-[.9fr_1.1fr] lg:gap-16">
        <div><SectionHeading eyebrow="Why Partner With Us?" title="Built for shared success" align="left"/><ul className="mt-8 space-y-3">{BENEFITS.map((benefit,i)=><li key={benefit}><Reveal delay={(i%3)*.04}><div className="flex gap-4 rounded-lg border border-jungle/10 bg-white p-5 shadow-card"><span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-jungle text-gold-light"><CheckIcon className="h-4 w-4"/></span><p className="pt-1 text-sm leading-6 text-jungle">{benefit}</p></div></Reveal></li>)}</ul></div>

        <div><SectionHeading eyebrow="Partnership Enquiry" title="Join Our Agent Network" subtitle="Tell us about your business and our partnerships team will contact you to begin onboarding." align="left"/>
          {status==='sent' ? <Reveal className="mt-8"><div className="rounded-lg border border-jungle/10 bg-white p-10 text-center shadow-card"><CheckCircle2Icon className="mx-auto h-12 w-12 text-jungle-light" strokeWidth={1.3}/><h3 className="mt-5 font-serif text-3xl text-jungle">Enquiry Submitted</h3><p className="mt-3 text-sm text-jungle-muted">Thank you. Our partnerships team will be in touch shortly.</p><button onClick={()=>setStatus('idle')} className="mt-7 rounded-full border border-jungle/20 px-6 py-3 text-xs uppercase tracking-[.14em] text-jungle">Send Another</button></div></Reveal> :
          <form onSubmit={onSubmit} className="mt-8 rounded-lg border border-jungle/10 bg-white p-7 shadow-card sm:p-8"><div className="grid gap-5 sm:grid-cols-2"><Input id="name" label="Full Name" required/><Input id="company" label="Company Name" required/><Input id="email" label="Email" type="email" required/><Input id="phone" label="Phone" type="tel" required/><Input id="country" label="Country of Origin" required/><Select id="companyType" label="Company Type" options={COMPANY_TYPES}/><Input id="website" label="Website" type="url"/><Input id="subject" label="Subject" required/></div><div className="mt-5"><label htmlFor="message" className={LABEL_CLASS}>Your Message *</label><textarea id="message" name="message" required rows={5} className={FIELD_CLASS} placeholder="Tell us about your market, clients and partnership goals"/></div><label className="mt-5 flex items-start gap-3 text-xs leading-5 text-jungle-muted"><input type="checkbox" required className="mt-1 accent-jungle"/><span>I consent to Magical Paradise storing and using this information to respond to my partnership request.</span></label><button disabled={status==='sending'} className="mt-7 inline-flex items-center gap-2 rounded-full bg-gold px-8 py-4 text-xs font-semibold uppercase tracking-[.16em] text-jungle-deep disabled:opacity-60">{status==='sending'&&<Loader2Icon className="h-4 w-4 animate-spin"/>}{status==='sending'?'Submitting…':'Submit Partnership Enquiry'}</button></form>}
        </div>
      </div>
    </div></section>

    <section className="bg-jungle-deep py-20 text-center text-ivory"><Reveal className="mx-auto max-w-4xl px-6"><p className="eyebrow text-gold-light">Let’s Create Together</p><h2 className="mt-4 font-serif text-4xl font-light sm:text-5xl">Collaborate, support and grow together</h2><p className="mx-auto mt-6 max-w-2xl text-[15px] leading-8 text-ivory/70">Whether you are an established travel agency or an independent holiday planner, we are here to create journeys that leave lasting memories.</p><a href={`mailto:${SITE.enquiryEmail}`} className="mt-8 inline-flex rounded-full bg-gold px-8 py-4 text-xs font-semibold uppercase tracking-[.16em] text-jungle-deep">Start a Conversation</a></Reveal></section>
  </>;
}

const FIELD_CLASS='w-full rounded-lg border border-jungle/15 bg-ivory px-4 py-3 text-sm text-jungle placeholder:text-jungle-muted/50 focus:border-gold focus:outline-none focus:ring-1 focus:ring-gold';
const LABEL_CLASS='mb-2 block text-xs font-medium uppercase tracking-[.14em] text-jungle-muted';
function Input({id,label,type='text',required=false}:{id:string;label:string;type?:string;required?:boolean}){return <div><label htmlFor={id} className={LABEL_CLASS}>{label}{required&&<span className="text-gold-dark"> *</span>}</label><input id={id} name={id} type={type} required={required} className={FIELD_CLASS}/></div>}
function Select({id,label,options}:{id:string;label:string;options:string[]}){return <div><label htmlFor={id} className={LABEL_CLASS}>{label}</label><select id={id} name={id} className={FIELD_CLASS}>{options.map(option=><option key={option}>{option}</option>)}</select></div>}
