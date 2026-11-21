'use client';

import React, { useRef } from 'react';
import { motion, useReducedMotion, useScroll, useTransform } from 'framer-motion';

type Props = { eyebrow: string; title: string; subtitle: string; image: string; imageAlt: string; children?: React.ReactNode };

export function AboutParallaxHero({ eyebrow, title, subtitle, image, imageAlt, children }: Props) {
  const heroRef = useRef<HTMLElement>(null);
  const reduceMotion = useReducedMotion();
  const { scrollYProgress } = useScroll({ target: heroRef, offset: ['start start', 'end start'] });
  const skyY = useTransform(scrollYProgress, [0, 1], [0, reduceMotion ? 0 : 55]);
  const groundY = useTransform(scrollYProgress, [0, 1], [0, reduceMotion ? 0 : -42]);
  const copyY = useTransform(scrollYProgress, [0, 1], [0, reduceMotion ? 0 : -18]);

  return <section ref={heroRef} className="relative isolate min-h-[620px] w-full overflow-hidden bg-jungle-deep lg:min-h-[760px]">
    <img src={image} alt="" aria-hidden="true" className="absolute inset-0 h-full w-full scale-105 object-cover opacity-45" />
    <motion.img src={image} alt={imageAlt} style={{ y: skyY, clipPath: 'inset(0 0 48% 0)' }} className="absolute -inset-y-10 left-0 h-[calc(100%+5rem)] w-full scale-[1.04] object-cover will-change-transform" />
    <motion.img src={image} alt="" aria-hidden="true" style={{ y: groundY, clipPath: 'inset(48% 0 0 0)' }} className="absolute -inset-y-10 left-0 h-[calc(100%+5rem)] w-full scale-[1.04] object-cover will-change-transform" />
    <div className="absolute inset-0 bg-gradient-to-r from-jungle-deep/90 via-jungle-deep/55 to-jungle-deep/25" aria-hidden="true" />
    <div className="absolute inset-0 bg-gradient-to-t from-jungle-deep/75 via-transparent to-jungle-deep/25" aria-hidden="true" />

    <motion.div style={{ y: copyY }} className="relative mx-auto flex min-h-[620px] max-w-content items-center px-6 pb-20 pt-40 lg:min-h-[760px] lg:pt-44">
      <div className="grid w-full gap-10 lg:grid-cols-[1.05fr_.95fr] lg:items-end">
        <motion.div initial={{ opacity: 0, y: 28 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: .8, ease: [0.22, 1, 0.36, 1] }}>
          <p className="eyebrow text-gold-light">{eyebrow}</p>
          <h1 className="mt-5 max-w-3xl text-5xl font-extrabold uppercase leading-[.94] text-white drop-shadow-lg sm:text-7xl lg:text-8xl">{title}</h1>
        </motion.div>
        <motion.div initial={{ opacity: 0, y: 28 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: .8, delay: .12, ease: [0.22, 1, 0.36, 1] }} className="max-w-xl lg:justify-self-end">
          <p className="text-base font-medium leading-8 text-white/90 drop-shadow-md">{subtitle}</p>
          {children}
        </motion.div>
      </div>
    </motion.div>
    <svg className="absolute bottom-0 left-0 h-8 w-full fill-ivory" viewBox="0 0 1440 40" preserveAspectRatio="none" aria-hidden="true"><path d="M0 22C240 0 420 44 720 24S1200 0 1440 20V40H0Z" /></svg>
  </section>;
}
