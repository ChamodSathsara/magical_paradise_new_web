import React from 'react';
import { Reveal } from './Reveal';

type SectionHeadingProps = {
  eyebrow?: string;
  title: string;
  subtitle?: string;
  align?: 'left' | 'center';
  tone?: 'dark' | 'light';
  className?: string;
};

export function SectionHeading({
  eyebrow,
  title,
  subtitle,
  align = 'center',
  tone = 'dark',
  className = ''
}: SectionHeadingProps) {
  const isCenter = align === 'center';
  return (
    <Reveal
      className={[
      isCenter ? 'text-center mx-auto max-w-2xl' : 'text-left max-w-2xl',
      className].
      join(' ')}>
      
      {eyebrow &&
      <p
        className={[
        'eyebrow mb-4 flex items-center gap-3',
        isCenter ? 'justify-center' : '',
        tone === 'light' ? 'text-gold-light' : 'text-gold-dark'].
        join(' ')}>
        
          <span className="h-px w-8 bg-current opacity-50" aria-hidden="true" />
          {eyebrow}
          {isCenter && <span className="h-px w-8 bg-current opacity-50" aria-hidden="true" />}
        </p>
      }
      <h2
        className={[
        'font-serif text-3xl sm:text-4xl lg:text-[2.75rem] leading-[1.1] font-light',
        tone === 'light' ? 'text-ivory' : 'text-jungle'].
        join(' ')}>
        
        {title}
      </h2>
      {subtitle &&
      <p
        className={[
        'mt-5 text-[15px] leading-relaxed',
        tone === 'light' ? 'text-ivory/70' : 'text-jungle-muted'].
        join(' ')}>
        
          {subtitle}
        </p>
      }
    </Reveal>);

}