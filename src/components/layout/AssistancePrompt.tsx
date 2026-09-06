'use client';

import { useEffect, useState } from 'react';
import Link from 'next/link';
import { XIcon } from 'lucide-react';
import { SITE } from '../../data/site';

const ASSISTANCE_DELAY_MS = 10 * 60 * 1000;

export function AssistancePrompt() {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    if (window.sessionStorage.getItem('assistance-dismissed')) return;
    const timer = window.setTimeout(() => setOpen(true), ASSISTANCE_DELAY_MS);
    return () => window.clearTimeout(timer);
  }, []);

  const close = () => {
    window.sessionStorage.setItem('assistance-dismissed', 'true');
    setOpen(false);
  };

  if (!open) return null;
  return <aside role="dialog" aria-label="Travel planning assistance" className="fixed bottom-24 right-5 z-50 w-[calc(100%-2.5rem)] max-w-sm rounded-xl border border-white/10 bg-jungle-deep p-6 text-ivory shadow-lift">
    <button type="button" onClick={close} aria-label="Close assistance message" className="absolute right-4 top-4 text-ivory/60 hover:text-ivory"><XIcon className="h-5 w-5" /></button>
    <p className="eyebrow text-gold-light">Need a little help?</p>
    <h2 className="mt-3 pr-6 font-serif text-2xl">Let a local expert help plan your journey.</h2>
    <p className="mt-3 text-sm leading-6 text-ivory/70">Tell us what you have in mind or start a quick WhatsApp conversation.</p>
    <div className="mt-5 flex flex-wrap gap-2"><Link href="/plan-your-trip" onClick={close} className="rounded-full bg-gold px-5 py-2.5 text-xs font-semibold uppercase tracking-wider text-jungle-deep">Start planning</Link><a href={SITE.whatsapp} target="_blank" rel="noreferrer noopener" onClick={close} className="rounded-full border border-ivory/30 px-5 py-2.5 text-xs uppercase tracking-wider">WhatsApp</a></div>
  </aside>;
}
