'use client';

import React from 'react';
import Link from 'next/link';
import { ArrowLeftIcon, ArrowRightIcon, ClockIcon, FileTextIcon, MailIcon, MessageCircleIcon } from 'lucide-react';
import { PageHero } from '../components/ui/PageHero';
import { DOCUMENT_PACKAGES, type DocumentPackage, type DocumentParagraphBlock } from '../data/documentPackages';
import { SITE } from '../data/site';

const dayHeading = /^\s*DAY\s*\d+/i;
const packageHeading = /^\s*Tour\s+package\s*\d+/i;
const namedSection = /^(YOUR JOURNEY|WHAT'?S INCLUDED|INCLUDED|EXCLUDED|ACCOMMODATION|THINGS TO DO|ACTIVITIES|EXPERIENCES|SPECIAL NOTES?|IMPORTANT NOTES?|HIGHLIGHTS|TOUR HIGHLIGHTS|OPTION|STAY|MEALS|TRAVEL TIME)/i;

function isUpperHeading(text: string) {
  const letters = text.replace(/[^A-Za-z]/g, '');
  if (letters.length < 4 || text.length > 150) return false;
  const upper = letters.replace(/[^A-Z]/g, '').length;
  return upper / letters.length > 0.82;
}

function durationFrom(pkg: DocumentPackage) {
  const text = pkg.blocks
    .filter((block): block is DocumentParagraphBlock => block.type === 'paragraph')
    .slice(0, 12)
    .map((block) => block.text)
    .join(' ');
  return text.match(/\b\d+\s*(?:Days?|DAYS?)\s*(?:\||\/|&|,|-)?\s*\d*\s*(?:Nights?|NIGHTS?)?/i)?.[0] ?? 'Complete Itinerary';
}

function ParagraphBlock({ block, index, previous }: { block: DocumentParagraphBlock; index: number; previous?: DocumentParagraphBlock }) {
  const text = block.text;
  const centered = block.align === 'center' ? 'text-center' : '';
  if (dayHeading.test(text)) {
    return <h2 className="mt-12 scroll-mt-28 border-l-4 border-gold pl-5 font-serif text-2xl leading-tight text-jungle sm:text-3xl">{text}</h2>;
  }
  if (packageHeading.test(text)) {
    return <h2 className="mt-14 rounded-lg bg-jungle px-6 py-5 font-serif text-2xl text-ivory sm:text-3xl">{text}</h2>;
  }
  if (previous && packageHeading.test(previous.text)) {
    return <h3 className="mt-5 font-serif text-3xl leading-tight text-jungle sm:text-4xl">{text}</h3>;
  }
  if (/^Heading/i.test(block.style) || namedSection.test(text) || isUpperHeading(text)) {
    return <h3 className={`mt-9 font-serif text-xl leading-snug text-jungle sm:text-2xl ${centered}`}>{text}</h3>;
  }
  if (block.list || /^[•●▪◦–-]\s+/.test(text)) {
    return <div className="ml-1 flex gap-3 text-[15px] leading-7 text-jungle-muted"><span className="mt-3 h-1.5 w-1.5 shrink-0 rounded-full bg-gold" /><p className="whitespace-pre-line">{text.replace(/^[•●▪◦]\s*/, '')}</p></div>;
  }
  if (index < 4) {
    return <p className={`font-serif text-lg leading-8 text-jungle ${centered}`}>{text}</p>;
  }
  return <p className={`whitespace-pre-line text-[15px] leading-8 text-jungle-muted ${centered}`}>{text}</p>;
}

export function DocumentPackageDetail({ pkg }: { pkg: DocumentPackage }) {
  const currentIndex = DOCUMENT_PACKAGES.findIndex((item) => item.id === pkg.id);
  const previousPackage = currentIndex > 0 ? DOCUMENT_PACKAGES[currentIndex - 1] : undefined;
  const nextPackage = currentIndex < DOCUMENT_PACKAGES.length - 1 ? DOCUMENT_PACKAGES[currentIndex + 1] : undefined;
  const paragraphs = pkg.blocks.filter((block): block is DocumentParagraphBlock => block.type === 'paragraph');
  const subtitle = paragraphs[0]?.text ?? pkg.name;
  const duration = durationFrom(pkg);

  return (
    <>
      <PageHero eyebrow="Sri Lanka Package Collection" title={pkg.name} subtitle={subtitle} image={pkg.image} imageAlt={pkg.name} locationTag={duration} />

      <section className="bg-ivory py-14 lg:py-20">
        <div className="mx-auto max-w-content px-6">
          <div className="flex flex-wrap items-center justify-between gap-4">
            <Link href="/packages" className="inline-flex items-center gap-2 text-[11px] font-semibold uppercase tracking-[0.14em] text-jungle-muted transition hover:text-gold-dark">
              <ArrowLeftIcon className="h-4 w-4" /> All Packages
            </Link>
            <p className="inline-flex items-center gap-2 rounded-full bg-sand px-4 py-2 text-[10px] uppercase tracking-[0.14em] text-jungle-muted">
              <FileTextIcon className="h-3.5 w-3.5 text-gold-dark" /> Package {currentIndex + 1} of {DOCUMENT_PACKAGES.length}
            </p>
          </div>

          <div className="mt-10 grid gap-10 lg:grid-cols-[minmax(0,1fr)_19rem] lg:gap-14">
            <article className="min-w-0 overflow-hidden rounded-2xl border border-jungle/10 bg-white shadow-card">
              <div className="border-b border-jungle/10 bg-sand px-6 py-6 sm:px-9">
                <p className="eyebrow text-gold-dark">Complete Original Itinerary</p>
                <h1 className="mt-3 font-serif text-3xl leading-tight text-jungle">{pkg.name}</h1>
              </div>
              <div className="space-y-4 px-6 py-8 sm:px-9 sm:py-10">
                {pkg.blocks.map((block, index) => {
                  if (block.type === 'table') {
                    return (
                      <div key={index} className="my-8 overflow-x-auto rounded-xl border border-jungle/10">
                        <table className="min-w-full border-collapse text-left text-sm">
                          <tbody>
                            {block.rows.map((row, rowIndex) => (
                              <tr key={rowIndex} className={rowIndex === 0 ? 'bg-jungle text-ivory' : 'border-t border-jungle/10 even:bg-sand/60'}>
                                {row.map((cell, cellIndex) => {
                                  const Cell = rowIndex === 0 ? 'th' : 'td';
                                  return <Cell key={cellIndex} className="min-w-40 whitespace-pre-line px-4 py-3 align-top leading-6">{cell}</Cell>;
                                })}
                              </tr>
                            ))}
                          </tbody>
                        </table>
                      </div>
                    );
                  }
                  const previous = index > 0 && pkg.blocks[index - 1].type === 'paragraph' ? pkg.blocks[index - 1] as DocumentParagraphBlock : undefined;
                  return <ParagraphBlock key={index} block={block} index={index} previous={previous} />;
                })}
              </div>
            </article>

            <aside className="lg:sticky lg:top-28 lg:self-start">
              <div className="rounded-xl border border-jungle/10 bg-white p-6 shadow-card">
                <ClockIcon className="h-6 w-6 text-gold-dark" />
                <p className="mt-4 text-[10px] font-semibold uppercase tracking-[0.14em] text-jungle-muted">Duration</p>
                <p className="mt-1 font-serif text-2xl text-jungle">{duration}</p>
                <p className="mt-5 text-sm leading-7 text-jungle-muted">Ready to personalize this journey around your dates, interests and preferred travel style?</p>
                <div className="mt-6 flex flex-col gap-3">
                  <a href={`mailto:${SITE.enquiryEmail}?subject=${encodeURIComponent(`Package enquiry - ${pkg.name}`)}`} className="inline-flex items-center justify-center gap-2 rounded-full bg-gold px-5 py-3 text-[11px] font-semibold uppercase tracking-[0.14em] text-jungle-deep transition hover:bg-gold-light"><MailIcon className="h-4 w-4" /> Enquire</a>
                  <a href={SITE.whatsapp} target="_blank" rel="noreferrer noopener" className="inline-flex items-center justify-center gap-2 rounded-full border border-jungle/20 px-5 py-3 text-[11px] font-semibold uppercase tracking-[0.14em] text-jungle transition hover:bg-sand"><MessageCircleIcon className="h-4 w-4" /> WhatsApp</a>
                </div>
              </div>

              <div className="mt-5 max-h-[45vh] overflow-y-auto rounded-xl bg-jungle p-5 text-ivory">
                <p className="text-[10px] font-semibold uppercase tracking-[0.14em] text-gold-light">All Packages</p>
                <nav className="mt-3 flex flex-col" aria-label="Package list">
                  {DOCUMENT_PACKAGES.map((item) => <Link key={item.id} href={`/packages/${item.id}`} className={`border-b border-white/10 py-2.5 text-xs leading-5 transition ${item.id === pkg.id ? 'text-gold-light' : 'text-ivory/65 hover:text-ivory'}`}>{item.name}</Link>)}
                </nav>
              </div>
            </aside>
          </div>

          <nav className="mt-12 grid gap-4 sm:grid-cols-2" aria-label="Adjacent packages">
            {previousPackage ? <Link href={`/packages/${previousPackage.id}`} className="rounded-xl border border-jungle/10 bg-white p-5 transition hover:border-gold"><span className="text-[10px] uppercase tracking-[0.14em] text-jungle-muted">Previous Package</span><span className="mt-2 flex items-center gap-2 font-serif text-lg text-jungle"><ArrowLeftIcon className="h-4 w-4 text-gold-dark" />{previousPackage.name}</span></Link> : <span />}
            {nextPackage && <Link href={`/packages/${nextPackage.id}`} className="rounded-xl border border-jungle/10 bg-white p-5 text-right transition hover:border-gold"><span className="text-[10px] uppercase tracking-[0.14em] text-jungle-muted">Next Package</span><span className="mt-2 flex items-center justify-end gap-2 font-serif text-lg text-jungle">{nextPackage.name}<ArrowRightIcon className="h-4 w-4 text-gold-dark" /></span></Link>}
          </nav>
        </div>
      </section>
    </>
  );
}

