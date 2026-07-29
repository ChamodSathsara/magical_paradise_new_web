import React from 'react';
import { InstagramIcon } from 'lucide-react';
import { GALLERY_IMAGES } from '../../data/media';
import { SITE } from '../../data/site';
import { Reveal } from '../ui/Reveal';
import { SectionHeading } from '../ui/SectionHeading';

const SPANS = [
'sm:col-span-2 sm:row-span-2',
'',
'',
'sm:row-span-2',
'',
'',
'sm:col-span-2',
''];


export function Gallery() {
  return (
    <section className="w-full bg-ivory py-20 lg:py-28">
      <div className="mx-auto max-w-content px-6">
        <SectionHeading
          eyebrow="Sri Lanka · Magical Paradise"
          title="Life Through Our Lens"
          subtitle="Every frame tells a story. A glimpse into the breathtaking moments that await you across Sri Lanka and beyond." />
        

        <div className="mt-14 grid auto-rows-[10rem] grid-cols-2 gap-3 sm:grid-cols-4 sm:auto-rows-[11rem]">
          {GALLERY_IMAGES.slice(0, 8).map((image, index) =>
          <Reveal
            key={image.src + index}
            delay={index % 4 * 0.05}
            className={['overflow-hidden rounded-lg', SPANS[index]].join(' ')}>
            
              <img
              src={image.src}
              alt={image.alt}
              loading="lazy"
              className="h-full w-full object-cover transition-transform duration-[900ms] ease-out hover:scale-105" />
            
            </Reveal>
          )}
        </div>

        <Reveal className="mt-12 text-center">
          <a
            href={SITE.instagram}
            target="_blank"
            rel="noreferrer noopener"
            className="inline-flex items-center gap-2 rounded-full border border-jungle/25 px-8 py-3.5 text-[11px] font-medium uppercase tracking-[0.16em] text-jungle transition-colors hover:bg-jungle hover:text-ivory">
            
            <InstagramIcon className="h-4 w-4" strokeWidth={1.5} aria-hidden="true" />
            View Full Gallery on Instagram
          </a>
        </Reveal>
      </div>
    </section>);

}