import React from 'react';
import Link from 'next/link';
import { Clock3Icon } from 'lucide-react';
import { PageHero } from '../components/ui/PageHero';
import { Reveal } from '../components/ui/Reveal';
import { IMAGES } from '../data/media';

type ComingSoonProps = {
  eyebrow: string;
  title: string;
  subtitle: string;
  image?: string;
};

export function ComingSoon({ eyebrow, title, subtitle, image = IMAGES.sigiriya }: ComingSoonProps) {
  return <>
    <PageHero eyebrow={eyebrow} title={title} subtitle={subtitle} image={image} imageAlt={`${title} preview`} locationTag="Coming Soon" />
    <section className="bg-ivory py-24 lg:py-32">
      <div className="mx-auto max-w-3xl px-6 text-center">
        <Reveal>
          <span className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-jungle text-gold-light"><Clock3Icon className="h-7 w-7" strokeWidth={1.5}/></span>
          <p className="eyebrow mt-7 text-gold-dark">We Are Preparing Something Special</p>
          <h2 className="mt-4 font-serif text-4xl font-light text-jungle sm:text-5xl">This page is coming soon</h2>
          <p className="mx-auto mt-6 max-w-xl text-base leading-8 text-jungle-muted">Our travel specialists are curating trusted information and inspiring ideas for this section. In the meantime, contact us and we will be happy to help personally.</p>
          <div className="mt-9 flex flex-wrap justify-center gap-3">
            <Link href="/contact" className="rounded-full bg-jungle px-8 py-4 text-xs font-semibold uppercase tracking-[.14em] text-ivory">Contact Us</Link>
            <Link href="/" className="rounded-full border border-jungle/20 px-8 py-4 text-xs font-semibold uppercase tracking-[.14em] text-jungle">Back to Home</Link>
          </div>
        </Reveal>
      </div>
    </section>
  </>;
}
