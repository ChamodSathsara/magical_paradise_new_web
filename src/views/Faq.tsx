'use client';

import React, { useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { ChevronDownIcon } from 'lucide-react';
import { PageHero } from '../components/ui/PageHero';
import { Reveal } from '../components/ui/Reveal';
import { CtaStrip } from '../components/sections/CtaStrip';
import { FAQS } from '../data/faqs';
import { IMAGES } from '../data/media';

export function Faq() {
  const [open, setOpen] = useState<string | null>(`0-0`);

  return (
    <>
      <PageHero
        eyebrow="Good To Know"
        title="Frequently Asked Questions"
        subtitle="Everything you need to know before booking your Sri Lanka journey with Magical Paradise."
        image={IMAGES.yala}
        imageAlt="A leopard resting in Yala National Park" />
      

      <section className="w-full bg-ivory py-16 lg:py-20">
        <div className="mx-auto max-w-3xl px-6">
          {FAQS.map((group, groupIndex) =>
          <div key={group.category} className={groupIndex > 0 ? 'mt-14' : ''}>
              <Reveal>
                <h2 className="font-serif text-2xl font-light text-jungle">{group.category}</h2>
              </Reveal>
              <ul className="mt-5 divide-y divide-jungle/10 border-y border-jungle/10">
                {group.items.map((item, itemIndex) => {
                const key = `${groupIndex}-${itemIndex}`;
                const isOpen = open === key;
                return (
                  <li key={item.question}>
                      <button
                      type="button"
                      onClick={() => setOpen(isOpen ? null : key)}
                      aria-expanded={isOpen}
                      className="flex w-full items-start justify-between gap-6 py-5 text-left">
                      
                        <span
                        className={[
                        'text-[15px] font-medium transition-colors',
                        isOpen ? 'text-gold-dark' : 'text-jungle'].
                        join(' ')}>
                        
                          {item.question}
                        </span>
                        <ChevronDownIcon
                        className={[
                        'mt-0.5 h-4 w-4 shrink-0 text-jungle-muted transition-transform duration-300',
                        isOpen ? 'rotate-180' : ''].
                        join(' ')}
                        strokeWidth={1.75}
                        aria-hidden="true" />
                      
                      </button>
                      <AnimatePresence initial={false}>
                        {isOpen &&
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: 'auto', opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
                        className="overflow-hidden">
                        
                            <p className="pb-6 pr-10 text-sm leading-relaxed text-jungle-muted">
                              {item.answer}
                            </p>
                          </motion.div>
                      }
                      </AnimatePresence>
                    </li>);

              })}
              </ul>
            </div>
          )}
        </div>
      </section>

      <CtaStrip
        eyebrow="Still Wondering?"
        title="Ask us anything"
        description="If your question isn't answered here, message a specialist directly — we reply within 24 hours."
        primaryLabel="Contact Us" />
      
    </>);

}