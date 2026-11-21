'use client';

import React, { useMemo, useState } from 'react';
import {
  CalendarDaysIcon,
  ChevronRightIcon,
  Clock3Icon,
  ExternalLinkIcon,
  NavigationIcon,
  SearchIcon,
  SparklesIcon,
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
  const [query, setQuery] = useState('');

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
    if (match) choose(match);
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
                <div className="relative overflow-hidden rounded-xl border border-ivory/20 bg-white shadow-2xl">
                  <iframe
                    key={selected.id}
                    src={googleMapEmbedUrl}
                    title={`Google Map showing ${selected.name} and nearby destinations`}
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                    className="aspect-[4/5] w-full border-0 sm:aspect-square lg:aspect-[4/5]"
                    allowFullScreen
                  />
                  <div className="absolute inset-x-3 bottom-3 rounded-lg bg-jungle-deep/90 p-3 text-ivory shadow-lg backdrop-blur-sm">
                    <p className="text-[10px] font-semibold uppercase tracking-[0.14em] text-gold-light">Map locations</p>
                    <p className="mt-1 text-xs leading-5">{selected.name} + {nearbyMapDestinations.length} nearby destinations</p>
                  </div>
                </div>

                <div className="relative text-ivory">
                  <p className="eyebrow text-gold-light">Selected Destination</p>
                  <h2 className="mt-3 font-serif text-4xl font-light sm:text-5xl">{selected.name}</h2>
                  <p className="mt-5 text-sm leading-7 text-ivory/75">{selected.description}</p>
                  <div className="mt-6 flex flex-wrap gap-2">
                    {selected.perfectFor.map((item) => <span key={item} className="rounded-full border border-ivory/20 px-3 py-1.5 text-[10px] uppercase tracking-[0.12em] text-ivory/80">{item}</span>)}
                  </div>
                  <a href={googleDirectionsUrl} target="_blank" rel="noreferrer" className="mt-7 inline-flex items-center gap-2 rounded-full bg-gold px-5 py-3 text-[11px] font-semibold uppercase tracking-[0.14em] text-jungle-deep transition hover:bg-gold-light">
                    View all locations in Google Maps <ExternalLinkIcon className="h-3.5 w-3.5" />
                  </a>
                  <div className="mt-5 flex flex-wrap gap-2">
                    <span className="inline-flex items-center gap-1.5 rounded-full bg-gold px-3 py-1.5 text-[10px] font-semibold uppercase tracking-[0.1em] text-jungle-deep"><NavigationIcon className="h-3 w-3" />{selected.name}</span>
                    {nearbyMapDestinations.map((destination) => <button key={destination.id} type="button" onClick={() => choose(destination)} className="rounded-full border border-ivory/25 bg-jungle-deep/50 px-3 py-1.5 text-[10px] uppercase tracking-[0.1em] text-ivory transition hover:border-gold hover:text-gold-light">{destination.name}</button>)}
                  </div>
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

      <CtaStrip eyebrow="Bespoke Planning" title="Turn the map into your Sri Lankan journey" description="Tell us which destinations inspire you and we will connect them around your dates, interests and preferred pace." primaryLabel="Start Planning" primaryTo="/plan-your-trip" />
    </>
  );
}

