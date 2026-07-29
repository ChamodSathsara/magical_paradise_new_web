'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { MapPinIcon } from 'lucide-react';

type Stat = {value: string;label: string;};

type PageHeroProps = {
  eyebrow?: string;
  title: string;
  subtitle?: string;
  image: string;
  imageAlt: string;
  locationTag?: string;
  stats?: Stat[];
  children?: React.ReactNode;
};

export function PageHero({
  eyebrow,
  title,
  subtitle,
  image,
  imageAlt,
  locationTag,
  stats,
  children
}: PageHeroProps) {
  return (
    <section className="relative isolate w-full overflow-hidden bg-jungle-deep">
      <img
        src={image}
        alt={imageAlt}
        className="absolute inset-0 h-full w-full object-cover opacity-60" />
      
      <div
        className="absolute inset-0 bg-gradient-to-t from-jungle-deep via-jungle-deep/70 to-jungle-deep/40"
        aria-hidden="true" />
      
      <div className="relative mx-auto max-w-content px-6 pb-16 pt-36 sm:pt-44 lg:pb-20">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
          className="max-w-3xl">
          
          {eyebrow && <p className="eyebrow mb-5 text-gold-light">{eyebrow}</p>}
          <h1 className="font-serif text-4xl font-light leading-[1.05] text-ivory sm:text-5xl lg:text-6xl">
            {title}
          </h1>
          {subtitle &&
          <p className="mt-6 max-w-2xl text-[15px] leading-relaxed text-ivory/75 sm:text-base">
              {subtitle}
            </p>
          }
          {locationTag &&
          <p className="mt-6 inline-flex items-center gap-2 rounded-full border border-ivory/20 bg-white/5 px-4 py-2 text-xs uppercase tracking-[0.16em] text-ivory/80">
              <MapPinIcon className="h-3.5 w-3.5 text-gold-light" strokeWidth={1.75} />
              {locationTag}
            </p>
          }
          {children}
        </motion.div>

        {stats && stats.length > 0 &&
        <motion.dl
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.15, ease: [0.22, 1, 0.36, 1] }}
          className="mt-12 grid max-w-2xl grid-cols-3 gap-6 border-t border-ivory/15 pt-8">
          
            {stats.map((stat) =>
          <div key={stat.label}>
                <dt className="sr-only">{stat.label}</dt>
                <dd>
                  <span className="block font-serif text-2xl text-gold-light sm:text-3xl">
                    {stat.value}
                  </span>
                  <span className="mt-1 block text-[11px] uppercase tracking-[0.16em] text-ivory/60">
                    {stat.label}
                  </span>
                </dd>
              </div>
          )}
          </motion.dl>
        }
      </div>
    </section>);

}