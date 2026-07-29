'use client';

import React, { useState } from 'react';
import { CheckCircle2Icon, Loader2Icon } from 'lucide-react';
import { PageHero } from '../components/ui/PageHero';
import { Reveal } from '../components/ui/Reveal';
import { SectionHeading } from '../components/ui/SectionHeading';
import { IMAGES } from '../data/media';
import { SITE } from '../data/site';

const PERKS = [
{
  title: 'Exclusive partner rates',
  description: 'Access preferential pricing across all our Sri Lanka packages.'
},
{
  title: 'Dedicated account manager',
  description: 'A specialist on hand to assist you and your clients 24/7.'
},
{
  title: 'Priority FAM trip invitations',
  description: 'Experience our destinations first-hand with curated press trips.'
},
{
  title: 'Marketing collateral',
  description: 'High-res imagery, brochures and sales tools ready to use.'
}];


const NETWORKS = ['Independent Agency', 'Consortium / Host Agency', 'Tour Operator', 'OTA', 'Corporate Travel', 'Other'];
const COMPANY_TYPES = ['Travel Agency', 'Tour Operator', 'DMC', 'Wholesaler', 'Airline', 'Media / Influencer'];
const PREFERRED_LANGUAGES = ['English', 'Français', 'Deutsch', '日本語', 'Other'];

type Status = 'idle' | 'sending' | 'sent';

export function Partnership() {
  const [status, setStatus] = useState<Status>('idle');

  const onSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setStatus('sending');
    window.setTimeout(() => setStatus('sent'), 1200);
  };

  return (
    <>
      <PageHero
        eyebrow="Join Our Partner Network"
        title="Register with Us"
        subtitle="Become an exclusive travel partner and unlock curated Sri Lanka experiences, priority rates, and a dedicated support team."
        image={IMAGES.sigiriya}
        imageAlt="Sigiriya rock fortress rising above the jungle" />
      

      <section className="w-full bg-ivory py-16 lg:py-20">
        <div className="mx-auto max-w-content px-6">
          <div className="grid gap-12 lg:grid-cols-[1fr_1.3fr] lg:gap-16">
            <div>
              <SectionHeading eyebrow="Why Register" title="Partner benefits" align="left" />
              <ul className="mt-8 space-y-4">
                {PERKS.map((perk, index) =>
                <li key={perk.title}>
                    <Reveal delay={index * 0.06}>
                      <div className="flex gap-4 rounded-lg border border-jungle/10 bg-white p-5">
                        <span className="font-serif text-xl text-gold-dark">0{index + 1}</span>
                        <div>
                          <h3 className="text-sm font-semibold text-jungle">{perk.title}</h3>
                          <p className="mt-1.5 text-sm leading-relaxed text-jungle-muted">
                            {perk.description}
                          </p>
                        </div>
                      </div>
                    </Reveal>
                  </li>
                )}
              </ul>

              <div className="mt-8 rounded-lg bg-sand p-6">
                <h3 className="font-serif text-lg text-jungle">Need help registering?</h3>
                <p className="mt-2 text-sm leading-relaxed text-jungle-muted">
                  Our partnerships team is ready to help. If you have any questions about the
                  registration process or our partner programme, don&apos;t hesitate to get in touch.
                </p>
                <div className="mt-5 flex flex-wrap gap-3">
                  <a
                    href={SITE.phoneHref}
                    className="inline-flex items-center rounded-full bg-jungle px-6 py-3 text-[11px] font-medium uppercase tracking-[0.14em] text-ivory transition-colors hover:bg-jungle-light">
                    
                    Call Now
                  </a>
                  <a
                    href={`mailto:${SITE.enquiryEmail}`}
                    className="inline-flex items-center rounded-full border border-jungle/20 px-6 py-3 text-[11px] font-medium uppercase tracking-[0.14em] text-jungle transition-colors hover:bg-white">
                    
                    Email Us
                  </a>
                </div>
              </div>
            </div>

            <div>
              <SectionHeading
                eyebrow="Registration"
                title="Create Your Account"
                subtitle="Fill in the details below and our team will complete your onboarding within 24 hours."
                align="left" />
              

              {status === 'sent' ?
              <Reveal className="mt-8">
                  <div className="rounded-lg border border-jungle/10 bg-white p-10 text-center shadow-card">
                    <CheckCircle2Icon
                    className="mx-auto h-11 w-11 text-jungle-light"
                    strokeWidth={1.25}
                    aria-hidden="true" />
                  
                    <h3 className="mt-5 font-serif text-2xl text-jungle">Registration Submitted!</h3>
                    <p className="mx-auto mt-3 max-w-md text-sm leading-relaxed text-jungle-muted">
                      Thank you for registering. Our partnerships team will review your details and be
                      in touch within 24 hours.
                    </p>
                    <button
                    type="button"
                    onClick={() => setStatus('idle')}
                    className="mt-7 inline-flex items-center rounded-full border border-jungle/20 px-6 py-3 text-[11px] font-medium uppercase tracking-[0.16em] text-jungle transition-colors hover:bg-jungle hover:text-ivory">
                    
                      Register Another
                    </button>
                  </div>
                </Reveal> :

              <form
                onSubmit={onSubmit}
                className="mt-8 rounded-lg border border-jungle/10 bg-white p-7 shadow-card sm:p-8">
                
                  <div className="grid gap-5 sm:grid-cols-2">
                    <Input id="firstName" label="First Name" required />
                    <Input id="lastName" label="Last Name" required />
                    <Input id="email" label="Email Address" type="email" required />
                    <Select id="network" label="Travel Network" options={NETWORKS} />
                    <Input id="company" label="Company Name" required />
                    <Select id="language" label="Preferred Language" options={PREFERRED_LANGUAGES} />
                    <Input id="website" label="Website" type="url" />
                    <Select id="companyType" label="Company Type" options={COMPANY_TYPES} />
                    <Input id="telephone" label="Telephone" type="tel" required />
                    <Input id="country" label="Country" required />
                  </div>

                  <button
                  type="submit"
                  disabled={status === 'sending'}
                  className="mt-7 inline-flex items-center gap-2 rounded-full bg-gold px-8 py-4 text-[11px] font-semibold uppercase tracking-[0.16em] text-jungle-deep transition-colors hover:bg-gold-light disabled:opacity-70">
                  
                    {status === 'sending' &&
                  <Loader2Icon className="h-4 w-4 animate-spin" strokeWidth={2} aria-hidden="true" />
                  }
                    {status === 'sending' ? 'Submitting…' : 'Complete Registration'}
                  </button>

                  <p className="mt-5 text-xs text-jungle-muted">
                    Already a partner?{' '}
                    <a href={`mailto:${SITE.enquiryEmail}`} className="text-gold-dark underline">
                      Log in to your partner portal
                    </a>
                    .
                  </p>
                </form>
              }
            </div>
          </div>
        </div>
      </section>
    </>);

}

const FIELD_CLASS =
'w-full rounded-lg border border-jungle/15 bg-ivory px-4 py-3 text-sm text-jungle placeholder:text-jungle-muted/50 focus:border-gold focus:outline-none focus:ring-1 focus:ring-gold';

const LABEL_CLASS =
'mb-2 block text-xs font-medium uppercase tracking-[0.14em] text-jungle-muted';

function Input({
  id,
  label,
  type = 'text',
  required = false





}: {id: string;label: string;type?: string;required?: boolean;}) {
  return (
    <div>
      <label htmlFor={id} className={LABEL_CLASS}>
        {label}
        {required && <span className="text-gold-dark"> *</span>}
      </label>
      <input id={id} name={id} type={type} required={required} className={FIELD_CLASS} />
    </div>);

}

function Select({ id, label, options }: {id: string;label: string;options: string[];}) {
  return (
    <div>
      <label htmlFor={id} className={LABEL_CLASS}>
        {label}
      </label>
      <select id={id} name={id} defaultValue={options[0]} className={FIELD_CLASS}>
        {options.map((option) =>
        <option key={option} value={option}>
            {option}
          </option>
        )}
      </select>
    </div>);

}