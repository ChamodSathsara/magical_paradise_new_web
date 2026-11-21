'use client';

import React, { useEffect, useMemo, useState } from 'react';
import Image from 'next/image';
import {
  CalendarDaysIcon,
  ChevronRightIcon,
  Clock3Icon,
  ExternalLinkIcon,
  MapPinIcon,
  NavigationIcon,
  SearchIcon,
  SparklesIcon,
  XIcon,
} from 'lucide-react';
import { PageHero } from '../components/ui/PageHero';
import { CtaStrip } from '../components/sections/CtaStrip';
import { MAGICAL_DESTINATIONS, type MagicalDestination } from '../data/magicalDestinations';
import { IMAGES } from '../data/media';

const destinationName = (value: string) =>
  value.replace(/^•\s*/, '').replace(/\s*\([^)]*\)\s*$/, '').trim().toLowerCase();

const findDestination = (value: string) => {
  const targetName = destinationName(value);
  return MAGICAL_DESTINATIONS.find((destination) => {
    const current = destination.name.toLowerCase();
    return current === targetName || current.includes(targetName) || targetName.includes(current);
  });
};

export function TouristMap() {
  const [selected, setSelected] = useState<MagicalDestination>(MAGICAL_DESTINATIONS[0]);
  const [preview, setPreview] = useState<MagicalDestination | null>(null);
  const [query, setQuery] = useState('');

  useEffect(() => {
    if (!preview) return;
    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') setPreview(null);
    };
    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = 'hidden';
    window.addEventListener('keydown', onKeyDown);
    return () => {
      document.body.style.overflow = previousOverflow;
      window.removeEventListener('keydown', onKeyDown);
    };
  }, [preview]);

  const filtered = useMemo(() => {
    const term = query.trim().toLowerCase();
    if (!term) return MAGICAL_DESTINATIONS;
    return MAGICAL_DESTINATIONS.filter((destination) =>
      [destination.name, destination.description, ...destination.perfectFor, ...destination.attractions]
        .join(' ').toLowerCase().includes(term)
    );
  }, [query]);

  const nearbyMapDestinations = useMemo(
    () => selected.nearby.map(findDestination).filter((item): item is MagicalDestination => Boolean(item)),
    [selected]
  );

  const googleMapEmbedUrl = useMemo(() => {
    const origin = `${selected.lat},${selected.lng}`;
    if (!nearbyMapDestinations.length) {
      return `https://maps.google.com/maps?q=${encodeURIComponent(origin)}&z=9&output=embed`;
    }
    const stops = nearbyMapDestinations
      .slice(0, 5)
      .map((destination) => `${destination.lat},${destination.lng}`)
      .join('+to:');
    return `https://maps.google.com/maps?saddr=${encodeURIComponent(origin)}&daddr=${encodeURIComponent(stops).replace(/%2Bto%3A/g, '+to:')}&output=embed`;
  }, [selected, nearbyMapDestinations]);

  const googleDirectionsUrl = useMemo(() => {
    const params = new URLSearchParams({
      api: '1',
      origin: `${selected.lat},${selected.lng}`,
    });
    if (nearbyMapDestinations.length) {
      const stops = nearbyMapDestinations.slice(0, 5);
      const destination = stops[stops.length - 1];
      params.set('destination', `${destination.lat},${destination.lng}`);
      if (stops.length > 1) {
        params.set('waypoints', stops.slice(0, -1).map((item) => `${item.lat},${item.lng}`).join('|'));
      }
    } else {
      params.set('destination', `${selected.lat},${selected.lng}`);
    }
    return `https://www.google.com/maps/dir/?${params.toString()}`;
  }, [selected, nearbyMapDestinations]);

  const choose = (destination: MagicalDestination) => {
    setSelected(destination);
    document.getElementById('destination-details')?.scrollIntoView({ behavior: 'smooth', block: 'start' });
  };

  const chooseNearby = (nearby: string) => {
    const match = findDestination(nearby);
    if (match) setPreview(match);
  };

  return (
    <>
      <PageHero
        eyebrow="Explore Every Corner"
        title="Sri Lanka Interactive Tourist Map"
        subtitle="Choose from 63 destinations to see where they are, what to experience, the best time to visit and nearby places with approximate travel times."
        image={IMAGES.sigiriya}
        imageAlt="Sigiriya rising above Sri Lanka's central landscape"
        stats={[
          { value: String(MAGICAL_DESTINATIONS.length), label: 'Destinations' },
          { value: '1', label: 'Extraordinary Island' },
          { value: 'Endless', label: 'Ways to Explore' },
        ]}
      />

      <section className="relative overflow-hidden bg-ivory py-14 lg:py-20">
        <div className="absolute inset-0">
          <img src={IMAGES.teaCountry} alt="" aria-hidden="true" className="h-full w-full object-cover" />
          <div className="absolute inset-0 bg-ivory/90 backdrop-blur-[1px]" />
          <div className="absolute inset-x-0 top-0 h-48 bg-gradient-to-b from-ivory to-transparent" />
        </div>
        <div className="relative mx-auto max-w-content px-6">
          <div className="grid gap-8 xl:grid-cols-[19rem_minmax(0,1fr)]">
            <aside className="xl:sticky xl:top-24 xl:self-start">
              <label className="relative block">
                <span className="sr-only">Search destinations</span>
                <SearchIcon className="pointer-events-none absolute left-4 top-1/2 h-4 w-4 -translate-y-1/2 text-jungle-muted" />
                <input value={query} onChange={(event) => setQuery(event.target.value)} placeholder="Search destinations" className="w-full rounded-full border border-jungle/15 bg-white py-3.5 pl-11 pr-4 text-sm text-jungle outline-none transition focus:border-gold" />
              </label>
              <p className="mt-4 text-xs text-jungle-muted">Showing {filtered.length} of {MAGICAL_DESTINATIONS.length} destinations</p>
              <div className="mt-4 max-h-[36rem] space-y-2 overflow-y-auto pr-2">
                {filtered.map((destination) => {
                  const active = destination.id === selected.id;
                  return (
                    <button key={destination.id} type="button" onClick={() => choose(destination)} className={`flex w-full items-center justify-between rounded-lg border px-4 py-3 text-left text-sm transition ${active ? 'border-gold bg-jungle text-ivory shadow-card' : 'border-jungle/10 bg-white text-jungle hover:border-gold/60 hover:bg-sand'}`}>
                      <span>{destination.name}</span>
                      <ChevronRightIcon className={`h-4 w-4 shrink-0 ${active ? 'text-gold-light' : 'text-gold-dark'}`} />
                    </button>
                  );
                })}
              </div>
            </aside>

            <div>
              <div className="relative grid items-center gap-8 overflow-hidden rounded-2xl bg-jungle-deep p-6 shadow-2xl lg:grid-cols-[minmax(18rem,0.85fr)_1.15fr] lg:p-10">
                <img src={selected.images[1]} alt="" aria-hidden="true" className="absolute inset-0 h-full w-full object-cover opacity-30 transition-opacity duration-700" />
                <div className="absolute inset-0 bg-gradient-to-r from-jungle-deep/95 via-jungle-deep/90 to-jungle/75" />
                <div className="relative mx-auto aspect-[1122/1404] w-full max-w-[25rem]">
                  <Image src="/images/map.png" alt={`Map showing ${selected.name} in Sri Lanka`} fill priority className="object-contain" sizes="(max-width: 1024px) 90vw, 25rem" />
                  <button type="button" aria-label={`${selected.name} map location`} className="absolute -translate-x-1/2 -translate-y-1/2" style={{ top: `${selected.map.top}%`, left: `${selected.map.left}%` }}>
                    <span className="absolute left-1/2 top-1/2 h-9 w-9 -translate-x-1/2 -translate-y-1/2 animate-ping rounded-full bg-gold/35" />
                    <span className="relative flex h-7 w-7 items-center justify-center rounded-full bg-gold text-jungle-deep shadow-lg ring-4 ring-ivory/25"><MapPinIcon className="h-4 w-4" fill="currentColor" /></span>
                    <span className="absolute left-1/2 top-9 -translate-x-1/2 whitespace-nowrap rounded bg-jungle px-3 py-1.5 text-[10px] font-semibold uppercase tracking-[0.12em] text-ivory shadow-lg">{selected.name}</span>
                  </button>
                </div>

                <div className="relative text-ivory">
                  <p className="eyebrow text-gold-light">Selected Destination</p>
                  <h2 className="mt-3 font-serif text-4xl font-light sm:text-5xl">{selected.name}</h2>
                  <p className="mt-5 text-sm leading-7 text-ivory/75">{selected.description}</p>
                  <div className="mt-6 flex flex-wrap gap-2">
                    {selected.perfectFor.map((item) => <span key={item} className="rounded-full border border-ivory/20 px-3 py-1.5 text-[10px] uppercase tracking-[0.12em] text-ivory/80">{item}</span>)}
                  </div>
                  <a href={`https://www.google.com/maps/search/?api=1&query=${selected.lat},${selected.lng}`} target="_blank" rel="noreferrer" className="mt-7 inline-flex items-center gap-2 rounded-full bg-gold px-5 py-3 text-[11px] font-semibold uppercase tracking-[0.14em] text-jungle-deep transition hover:bg-gold-light">
                    Open in Google Maps <ExternalLinkIcon className="h-3.5 w-3.5" />
                  </a>
                </div>
              </div>

              <article id="destination-details" className="scroll-mt-24 rounded-2xl bg-ivory/75 p-4 pt-8 shadow-xl backdrop-blur-sm sm:p-6 sm:pt-8">
                <div className="grid gap-4 sm:grid-cols-2">
                  {selected.images.map((src, index) => (
                    <div key={`${selected.id}-${src}`} className="overflow-hidden rounded-xl bg-sand">
                      <img src={src} alt={`${selected.name} travel scene ${index + 1}`} className="aspect-[16/10] h-full w-full object-cover transition duration-700 hover:scale-105" />
                    </div>
                  ))}
                </div>

                <div className="mt-8 grid gap-6 lg:grid-cols-[0.8fr_1.2fr]">
                  <section className="rounded-xl border border-jungle/10 bg-white p-6 shadow-card">
                    <div className="flex items-start gap-3"><CalendarDaysIcon className="mt-0.5 h-5 w-5 shrink-0 text-gold-dark" /><div><h3 className="font-serif text-xl text-jungle">Best Time to Visit</h3><p className="mt-2 text-sm leading-6 text-jungle-muted">{selected.bestTime}</p></div></div>
                  </section>
                  <section className="rounded-xl border border-jungle/10 bg-white p-6 shadow-card">
                    <div className="flex items-start gap-3"><SparklesIcon className="mt-0.5 h-5 w-5 shrink-0 text-gold-dark" /><div><h3 className="font-serif text-xl text-jungle">Top Attractions</h3><ul className="mt-4 grid gap-x-6 gap-y-3 sm:grid-cols-2">{selected.attractions.map((attraction) => <li key={attraction} className="flex gap-2.5 text-sm leading-6 text-jungle-muted"><span className="mt-2.5 h-1.5 w-1.5 shrink-0 rounded-full bg-gold" />{attraction}</li>)}</ul></div></div>
                  </section>
                </div>

                {selected.experiences.length > 0 && <section className="mt-6 rounded-xl bg-sand p-6"><h3 className="font-serif text-xl text-jungle">Experiences</h3><ul className="mt-4 flex flex-wrap gap-2">{selected.experiences.map((experience) => <li key={experience} className="rounded-full bg-white px-4 py-2 text-xs text-jungle-muted">{experience}</li>)}</ul></section>}

                <section className="mt-6 rounded-xl border border-jungle/10 bg-white p-6 shadow-card">
                  <div className="flex items-center gap-3"><Clock3Icon className="h-5 w-5 text-gold-dark" /><h3 className="font-serif text-2xl text-jungle">Nearby Destinations</h3></div>
                  <p className="mt-2 text-xs leading-5 text-jungle-muted">Travel times are approximate and may vary depending on traffic, weather and road conditions.</p>
                  <div className="relative mt-5 overflow-hidden rounded-xl border border-jungle/10 bg-sand shadow-card">
                    <iframe
                      key={`nearby-${selected.id}`}
                      src={googleMapEmbedUrl}
                      title={`Google Map showing ${selected.name} and nearby destinations`}
                      loading="lazy"
                      referrerPolicy="no-referrer-when-downgrade"
                      className="aspect-[16/9] w-full border-0"
                      allowFullScreen
                    />
                    <div className="absolute bottom-3 left-3 right-3 flex flex-wrap items-center justify-between gap-3 rounded-lg bg-jungle-deep/90 p-3 text-ivory shadow-lg backdrop-blur-sm">
                      <span className="inline-flex items-center gap-2 text-xs"><NavigationIcon className="h-3.5 w-3.5 text-gold-light" />{selected.name} + {nearbyMapDestinations.length} nearby locations</span>
                      <a href={googleDirectionsUrl} target="_blank" rel="noreferrer" className="inline-flex items-center gap-1.5 text-[10px] font-semibold uppercase tracking-[0.12em] text-gold-light hover:text-white">Open route <ExternalLinkIcon className="h-3 w-3" /></a>
                    </div>
                  </div>
                  <div className="mt-5 grid gap-3 sm:grid-cols-2">
                    {selected.nearby.map((nearby) => {
                      const targetName = destinationName(nearby);
                      const isSelectable = MAGICAL_DESTINATIONS.some((destination) => {
                        const current = destination.name.toLowerCase();
                        return current === targetName || current.includes(targetName) || targetName.includes(current);
                      });
                      return <button key={nearby} type="button" onClick={() => chooseNearby(nearby)} disabled={!isSelectable} className={`flex items-center justify-between rounded-lg border border-jungle/10 px-4 py-3 text-left text-sm text-jungle transition ${isSelectable ? 'hover:border-gold hover:bg-sand' : 'cursor-default'}`}><span>{nearby}</span>{isSelectable && <ChevronRightIcon className="h-4 w-4 shrink-0 text-gold-dark" />}</button>;
                    })}
                  </div>
                </section>
              </article>
            </div>
          </div>
        </div>
      </section>

      {preview && (
        <div
          className="fixed inset-0 z-[100] flex items-start justify-center overflow-y-auto overscroll-contain bg-jungle-deep/80 p-4 backdrop-blur-sm sm:p-6"
          role="presentation"
          onMouseDown={(event) => {
            if (event.currentTarget === event.target) setPreview(null);
          }}
        >
          <section
            role="dialog"
            aria-modal="true"
            aria-labelledby="nearby-dialog-title"
            tabIndex={-1}
            onWheel={(event) => event.stopPropagation()}
            className="relative my-auto max-h-[calc(100vh-2rem)] w-full max-w-5xl touch-pan-y overflow-y-auto overscroll-contain rounded-2xl bg-ivory shadow-2xl sm:max-h-[calc(100vh-3rem)]"
          >
            <button
              type="button"
              onClick={() => setPreview(null)}
              aria-label="Close destination details"
              className="absolute right-4 top-4 z-10 flex h-10 w-10 items-center justify-center rounded-full bg-jungle-deep/85 text-ivory shadow-lg transition hover:bg-gold hover:text-jungle-deep"
            >
              <XIcon className="h-5 w-5" />
            </button>

            <div className="grid gap-2 sm:grid-cols-2">
              {preview.images.slice(0, 2).map((src, index) => (
                <img
                  key={`${preview.id}-dialog-${src}`}
                  src={src}
                  alt={`${preview.name} travel view ${index + 1}`}
                  className="aspect-[16/10] h-full w-full object-cover first:rounded-tl-2xl sm:first:rounded-tr-none sm:[&:nth-child(2)]:rounded-tr-2xl"
                />
              ))}
            </div>

            <div className="p-6 sm:p-8 lg:p-10">
              <p className="eyebrow text-gold-dark">Nearby Destination</p>
              <h2 id="nearby-dialog-title" className="mt-2 font-serif text-3xl font-light text-jungle sm:text-4xl">{preview.name}</h2>
              <p className="mt-5 text-sm leading-7 text-jungle-muted sm:text-[15px]">{preview.description}</p>

              <div className="mt-7 grid gap-6 lg:grid-cols-[0.75fr_1.25fr]">
                <div className="rounded-xl bg-sand p-5">
                  <p className="text-[10px] font-semibold uppercase tracking-[0.15em] text-gold-dark">Best Time to Visit</p>
                  <p className="mt-2 text-sm leading-6 text-jungle">{preview.bestTime}</p>
                  <div className="mt-5 flex flex-wrap gap-2">
                    {preview.perfectFor.map((item) => <span key={item} className="rounded-full bg-white px-3 py-1.5 text-[10px] uppercase tracking-[0.1em] text-jungle-muted">{item}</span>)}
                  </div>
                </div>
                <div className="rounded-xl border border-jungle/10 bg-white p-5">
                  <h3 className="font-serif text-xl text-jungle">Top Attractions</h3>
                  <ul className="mt-4 grid gap-2.5 sm:grid-cols-2">
                    {preview.attractions.map((attraction) => <li key={attraction} className="flex gap-2.5 text-sm leading-6 text-jungle-muted"><span className="mt-2.5 h-1.5 w-1.5 shrink-0 rounded-full bg-gold" />{attraction}</li>)}
                  </ul>
                </div>
              </div>

              <div className="mt-7 flex flex-wrap gap-3">
                <button type="button" onClick={() => { setPreview(null); choose(preview); }} className="rounded-full bg-jungle px-6 py-3 text-[11px] font-semibold uppercase tracking-[0.14em] text-ivory transition hover:bg-jungle-light">Select this destination</button>
                <a href={`https://www.google.com/maps/search/?api=1&query=${preview.lat},${preview.lng}`} target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 rounded-full border border-jungle/20 px-6 py-3 text-[11px] font-semibold uppercase tracking-[0.14em] text-jungle transition hover:border-gold hover:bg-sand">Open in Google Maps <ExternalLinkIcon className="h-3.5 w-3.5" /></a>
              </div>
            </div>
          </section>
        </div>
      )}

      <CtaStrip eyebrow="Bespoke Planning" title="Turn the map into your Sri Lankan journey" description="Tell us which destinations inspire you and we will connect them around your dates, interests and preferred pace." primaryLabel="Start Planning" primaryTo="/plan-your-trip" />
    </>
  );
}

