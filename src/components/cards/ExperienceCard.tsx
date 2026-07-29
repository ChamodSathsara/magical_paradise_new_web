'use client';

import React, { useState } from 'react';
import { MinusIcon, PlusIcon } from 'lucide-react';
import type { Experience } from '../../data/experiences';
import { Icon } from '../ui/Icon';

export function ExperienceCard({ experience }: {experience: Experience;}) {
  const [open, setOpen] = useState(false);

  return (
    <article className="group flex h-full flex-col overflow-hidden rounded-lg border border-jungle/10 bg-white shadow-card">
      <div className="relative aspect-[16/10] overflow-hidden bg-sand">
        <img
          src={experience.image}
          alt={experience.title}
          loading="lazy"
          className="h-full w-full object-cover transition-transform duration-700 ease-out group-hover:scale-[1.06]" />
        
        <span className="absolute left-4 top-4 flex h-10 w-10 items-center justify-center rounded-full bg-jungle-deep/80 text-gold-light backdrop-blur-sm">
          <Icon name={experience.icon} className="h-4 w-4" />
        </span>
      </div>

      <div className="flex flex-1 flex-col p-6">
        <p className="eyebrow text-gold-dark">{experience.category}</p>
        <h3 className="mt-2 font-serif text-xl text-jungle">{experience.title}</h3>
        <p className={['mt-3 text-sm leading-relaxed text-jungle-muted', open ? '' : 'line-clamp-3'].join(' ')}>
          {experience.description}
        </p>

        <button
          type="button"
          onClick={() => setOpen((value) => !value)}
          aria-expanded={open}
          className="mt-auto inline-flex w-fit items-center gap-2 pt-6 text-[11px] font-medium uppercase tracking-[0.14em] text-gold-dark transition-colors hover:text-jungle">
          
          {open ?
          <MinusIcon className="h-3.5 w-3.5" strokeWidth={1.75} aria-hidden="true" /> :

          <PlusIcon className="h-3.5 w-3.5" strokeWidth={1.75} aria-hidden="true" />
          }
          {open ? 'Show Less' : 'Discover More'}
        </button>
      </div>
    </article>);

}