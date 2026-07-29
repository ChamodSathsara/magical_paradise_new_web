import React from 'react';
import Link from 'next/link';
import { IMAGES } from '../data/media';

const QUICK_LINKS = [
{ label: 'Home', to: '/' },
{ label: 'Packages', to: '/packages' },
{ label: 'Destinations', to: '/destinations' },
{ label: 'Contact Us', to: '/contact' }];


export function NotFound() {
  return (
    <section className="relative isolate flex min-h-[100svh] w-full items-center overflow-hidden bg-jungle-deep">
      <img
        src={IMAGES.ella}
        alt=""
        aria-hidden="true"
        className="absolute inset-0 h-full w-full object-cover opacity-30" />
      
      <div className="absolute inset-0 bg-jungle-deep/70" aria-hidden="true" />

      <div className="relative mx-auto max-w-content px-6 py-32 text-center">
        <p className="eyebrow text-gold-light">Error 404</p>
        <h1 className="mx-auto mt-6 max-w-2xl font-serif text-4xl font-light leading-tight text-ivory sm:text-5xl">
          Looks Like You&apos;ve Wandered Off the Trail
        </h1>
        <p className="mx-auto mt-5 max-w-lg text-[15px] leading-relaxed text-ivory/70">
          The page you were looking for doesn&apos;t exist — but the island is full of better places
          to be. Let us point you back on route.
        </p>

        <ul className="mt-10 flex flex-wrap justify-center gap-3">
          {QUICK_LINKS.map((link) =>
          <li key={link.to}>
              <Link
              href={link.to}
              className="inline-flex items-center rounded-full border border-ivory/30 px-6 py-3 text-[11px] font-medium uppercase tracking-[0.16em] text-ivory transition-colors hover:bg-ivory hover:text-jungle">
              
                {link.label}
              </Link>
            </li>
          )}
        </ul>
      </div>
    </section>);

}