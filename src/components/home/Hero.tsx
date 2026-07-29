'use client';

import React, { useEffect, useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { MessageCircleIcon } from 'lucide-react';
import Link from 'next/link';
import { IMAGES } from '../../data/media';
import { SITE, TRUST_STATS } from '../../data/site';

const SLIDES = [
{ src: IMAGES.sigiriya, alt: 'Sigiriya Lion Rock fortress at sunrise' },
{ src: IMAGES.mirissa, alt: 'A stilt fisherman at sunset on the southern coast' },
{ src: IMAGES.teaCountry, alt: 'Tea estates rolling through the highlands' },
{ src: IMAGES.ella, alt: 'A train crossing the Nine Arch Bridge in Ella' }];


export function Hero() {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const timer = window.setInterval(() => {
      setIndex((value) => (value + 1) % SLIDES.length);
    }, 6000);
    return () => window.clearInterval(timer);
  }, []);

  return (
    <section className="relative isolate flex min-h-[100svh] w-full items-end overflow-hidden bg-jungle-deep">
      <AnimatePresence initial={false}>
        <motion.img
          key={index}
          src={SLIDES[index].src}
          alt={SLIDES[index].alt}
          initial={{ opacity: 0, scale: 1.08 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0 }}
          transition={{ opacity: { duration: 1.4 }, scale: { duration: 7, ease: 'linear' } }}
          className="absolute inset-0 h-full w-full object-cover" />
        
      </AnimatePresence>
      <div
        className="absolute inset-0 bg-gradient-to-t from-jungle-deep via-jungle-deep/55 to-jungle-deep/25"
        aria-hidden="true" />
      

      <div className="relative mx-auto w-full max-w-content px-6 pb-14 pt-32 lg:pb-20">
        <motion.p
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="eyebrow text-gold-light">
          
          Luxury Travel · Sri Lanka &amp; Maldives
        </motion.p>

        <motion.h1
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
          className="mt-5 max-w-3xl font-serif text-[2.75rem] font-light leading-[1.02] text-ivory sm:text-6xl lg:text-7xl">
          
          Discover the Magic
          <span className="block italic text-gold-light">of Sri Lanka</span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.35 }}
          className="mt-6 max-w-xl text-base leading-relaxed text-ivory/75">
          
          Luxury journeys through ancient kingdoms, pristine beaches, and misty highlands.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.45 }}
          className="mt-9 flex flex-wrap items-center gap-3">
          
          <Link
            href="/packages"
            className="inline-flex items-center rounded-full bg-gold px-8 py-4 text-[12px] font-semibold uppercase tracking-[0.16em] text-jungle-deep transition-colors hover:bg-gold-light">
            
            Start Planning
          </Link>
          <a
            href={SITE.whatsapp}
            target="_blank"
            rel="noreferrer noopener"
            className="inline-flex items-center gap-2 rounded-full border border-ivory/35 bg-white/10 px-8 py-4 text-[12px] font-medium uppercase tracking-[0.16em] text-ivory backdrop-blur-sm transition-colors hover:bg-white hover:text-jungle-deep">
            
            <MessageCircleIcon className="h-4 w-4" strokeWidth={1.75} aria-hidden="true" />
            WhatsApp Us
          </a>
        </motion.div>

        <motion.dl
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="mt-14 grid grid-cols-2 gap-y-8 border-t border-ivory/15 pt-8 sm:grid-cols-4">
          
          {TRUST_STATS.map((stat) =>
          <div key={stat.label}>
              <dt className="sr-only">{stat.label}</dt>
              <dd>
                <span className="block font-serif text-3xl text-gold-light">{stat.value}</span>
                <span className="mt-1 block text-[11px] uppercase tracking-[0.16em] text-ivory/60">
                  {stat.label}
                </span>
              </dd>
            </div>
          )}
        </motion.dl>

        <div className="mt-10 flex gap-2" role="tablist" aria-label="Hero slides">
          {SLIDES.map((slide, slideIndex) =>
          <button
            key={slide.src + slideIndex}
            type="button"
            role="tab"
            aria-selected={slideIndex === index}
            aria-label={`Show slide ${slideIndex + 1}`}
            onClick={() => setIndex(slideIndex)}
            className={[
            'h-0.5 transition-all duration-500',
            slideIndex === index ? 'w-12 bg-gold-light' : 'w-6 bg-ivory/30 hover:bg-ivory/60'].
            join(' ')} />

          )}
        </div>
      </div>
    </section>);

}