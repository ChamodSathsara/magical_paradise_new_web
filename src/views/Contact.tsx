'use client';

import React, { useState } from 'react';
import {
  CheckCircle2Icon,
  ClockIcon,
  FacebookIcon,
  InstagramIcon,
  Loader2Icon,
  MailIcon,
  MapPinIcon,
  PhoneIcon,
  TwitterIcon,
  YoutubeIcon } from
'lucide-react';
import { PageHero } from '../components/ui/PageHero';
import { Reveal } from '../components/ui/Reveal';
import { SectionHeading } from '../components/ui/SectionHeading';
import { IMAGES } from '../data/media';
import { SITE } from '../data/site';

const SUBJECTS = [
'Package Enquiry',
'Custom Tour',
'Honeymoon / Couples',
'Maldives Package',
'Accommodation',
'Other'];


const QUICK_CARDS = [
{
  title: 'Call Us',
  value: SITE.altPhone,
  note: 'Mon–Sat, 8am–8pm',
  href: SITE.phoneHref,
  Icon: PhoneIcon
},
{
  title: 'Email Us',
  value: SITE.enquiryEmail,
  note: 'We reply within 24 hours',
  href: `mailto:${SITE.enquiryEmail}`,
  Icon: MailIcon
},
{
  title: 'Visit Us',
  value: SITE.address,
  note: 'Open for walk-ins by appointment',
  Icon: MapPinIcon
},
{
  title: 'Office Hours',
  value: 'Mon–Sat: 8am–8pm',
  note: 'Sunday: 9am–5pm',
  Icon: ClockIcon
}];


type Status = 'idle' | 'sending' | 'sent';

export function Contact() {
  const [status, setStatus] = useState<Status>('idle');

  const onSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setStatus('sending');
    window.setTimeout(() => setStatus('sent'), 1200);
  };

  return (
    <>
      <PageHero
        eyebrow="We'd Love to Hear From You"
        title="Contact Us"
        subtitle="Have a question, a dream trip in mind, or simply want to say hello? Our team is always happy to help you plan the perfect Sri Lanka experience."
        image={IMAGES.mirissa}
        imageAlt="Sunset over the southern coast of Sri Lanka" />
      

      <section className="w-full bg-ivory py-16 lg:py-20">
        <div className="mx-auto max-w-content px-6">
          <ul className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {QUICK_CARDS.map((card, index) =>
            <li key={card.title}>
                <Reveal delay={index * 0.06} className="h-full">
                  <div className="h-full rounded-lg border border-jungle/10 bg-white p-6 shadow-card">
                    <span className="flex h-10 w-10 items-center justify-center rounded-full bg-sand text-gold-dark">
                      <card.Icon className="h-4 w-4" strokeWidth={1.5} aria-hidden="true" />
                    </span>
                    <h2 className="mt-5 font-serif text-lg text-jungle">{card.title}</h2>
                    {card.href ?
                  <a
                    href={card.href}
                    className="mt-2 block text-sm text-jungle transition-colors hover:text-gold-dark">
                    
                        {card.value}
                      </a> :

                  <p className="mt-2 text-sm text-jungle">{card.value}</p>
                  }
                    <p className="mt-1.5 text-xs text-jungle-muted">{card.note}</p>
                  </div>
                </Reveal>
              </li>
            )}
          </ul>

          <div className="mt-16 grid gap-12 lg:grid-cols-[1.4fr_1fr] lg:gap-16">
            <div>
              <SectionHeading
                eyebrow="Enquiry Form"
                title="Plan Your Journey"
                subtitle="Fill in the form below and one of our Sri Lanka travel specialists will get back to you within 24 hours."
                align="left" />
              

              {status === 'sent' ?
              <Reveal className="mt-8">
                  <div className="rounded-lg border border-jungle/10 bg-white p-10 text-center shadow-card">
                    <CheckCircle2Icon
                    className="mx-auto h-11 w-11 text-jungle-light"
                    strokeWidth={1.25}
                    aria-hidden="true" />
                  
                    <h3 className="mt-5 font-serif text-2xl text-jungle">Message Sent!</h3>
                    <p className="mx-auto mt-3 max-w-md text-sm leading-relaxed text-jungle-muted">
                      Thank you for reaching out. One of our travel specialists will get back to you
                      within 24 hours.
                    </p>
                    <button
                    type="button"
                    onClick={() => setStatus('idle')}
                    className="mt-7 inline-flex items-center rounded-full border border-jungle/20 px-6 py-3 text-[11px] font-medium uppercase tracking-[0.16em] text-jungle transition-colors hover:bg-jungle hover:text-ivory">
                    
                      Send Another Message
                    </button>
                  </div>
                </Reveal> :

              <form
                onSubmit={onSubmit}
                className="mt-8 rounded-lg border border-jungle/10 bg-white p-7 shadow-card sm:p-8">
                
                  <div className="grid gap-5 sm:grid-cols-2">
                    <Field label="Full Name" id="name" required />
                    <Field label="Email Address" id="email" type="email" required />
                    <Field label="Phone Number" id="phone" type="tel" />
                    <div>
                      <label htmlFor="subject" className="mb-2 block text-xs font-medium uppercase tracking-[0.14em] text-jungle-muted">
                        Subject
                      </label>
                      <select
                      id="subject"
                      name="subject"
                      defaultValue={SUBJECTS[0]}
                      className="w-full rounded-lg border border-jungle/15 bg-ivory px-4 py-3 text-sm text-jungle focus:border-gold focus:outline-none focus:ring-1 focus:ring-gold">
                      
                        {SUBJECTS.map((subject) =>
                      <option key={subject} value={subject}>
                            {subject}
                          </option>
                      )}
                      </select>
                    </div>
                  </div>

                  <div className="mt-5">
                    <label htmlFor="message" className="mb-2 block text-xs font-medium uppercase tracking-[0.14em] text-jungle-muted">
                      Message
                    </label>
                    <textarea
                    id="message"
                    name="message"
                    rows={5}
                    required
                    placeholder="Tell us your dates, party size and what you'd love to see…"
                    className="w-full rounded-lg border border-jungle/15 bg-ivory px-4 py-3 text-sm text-jungle placeholder:text-jungle-muted/50 focus:border-gold focus:outline-none focus:ring-1 focus:ring-gold" />
                  
                  </div>

                  <button
                  type="submit"
                  disabled={status === 'sending'}
                  className="mt-7 inline-flex items-center gap-2 rounded-full bg-jungle px-8 py-4 text-[11px] font-medium uppercase tracking-[0.16em] text-ivory transition-colors hover:bg-jungle-light disabled:opacity-70">
                  
                    {status === 'sending' &&
                  <Loader2Icon className="h-4 w-4 animate-spin" strokeWidth={2} aria-hidden="true" />
                  }
                    {status === 'sending' ? 'Sending…' : 'Send Message'}
                  </button>
                </form>
              }
            </div>

            <aside>
              <div className="overflow-hidden rounded-lg">
                <img
                  src={IMAGES.galle}
                  alt="Galle Fort at sunset"
                  loading="lazy"
                  className="aspect-[4/3] w-full object-cover" />
                
              </div>

              <div className="mt-6 rounded-lg bg-jungle p-7 text-ivory">
                <h2 className="eyebrow text-gold-light">Follow our journey</h2>
                <div className="mt-5 flex gap-3">
                  {[
                  { href: SITE.facebook, label: 'Facebook', Icon: FacebookIcon },
                  { href: SITE.instagram, label: 'Instagram', Icon: InstagramIcon },
                  { href: SITE.twitter, label: 'X', Icon: TwitterIcon },
                  { href: SITE.youtube, label: 'YouTube', Icon: YoutubeIcon }].
                  map(({ href, label, Icon: SocialIcon }) =>
                  <a
                    key={label}
                    href={href}
                    target="_blank"
                    rel="noreferrer noopener"
                    aria-label={label}
                    className="flex h-10 w-10 items-center justify-center rounded-full border border-white/20 transition-colors hover:border-gold hover:text-gold-light">
                    
                      <SocialIcon className="h-4 w-4" strokeWidth={1.5} aria-hidden="true" />
                    </a>
                  )}
                </div>
                <p className="mt-6 text-sm leading-relaxed text-ivory/70">
                  Ready to start your Sri Lanka adventure? Our travel specialists are standing by to
                  help.
                </p>
                <div className="mt-6 flex flex-wrap gap-3">
                  <a
                    href={SITE.phoneHref}
                    className="inline-flex items-center rounded-full bg-gold px-6 py-3 text-[11px] font-semibold uppercase tracking-[0.14em] text-jungle-deep transition-colors hover:bg-gold-light">
                    
                    Call Now
                  </a>
                  <a
                    href={`mailto:${SITE.enquiryEmail}`}
                    className="inline-flex items-center rounded-full border border-ivory/30 px-6 py-3 text-[11px] font-medium uppercase tracking-[0.14em] text-ivory transition-colors hover:bg-ivory hover:text-jungle">
                    
                    Email Us
                  </a>
                </div>
              </div>
            </aside>
          </div>
        </div>
      </section>
    </>);

}

type FieldProps = {
  label: string;
  id: string;
  type?: string;
  required?: boolean;
};

function Field({ label, id, type = 'text', required = false }: FieldProps) {
  return (
    <div>
      <label htmlFor={id} className="mb-2 block text-xs font-medium uppercase tracking-[0.14em] text-jungle-muted">
        {label}
        {required && <span className="text-gold-dark"> *</span>}
      </label>
      <input
        id={id}
        name={id}
        type={type}
        required={required}
        className="w-full rounded-lg border border-jungle/15 bg-ivory px-4 py-3 text-sm text-jungle placeholder:text-jungle-muted/50 focus:border-gold focus:outline-none focus:ring-1 focus:ring-gold" />
      
    </div>);

}