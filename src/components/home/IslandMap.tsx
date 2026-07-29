"use client";

import React, { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import Link from "next/link";
import { MAP_DESTINATIONS } from "../../data/destinations";
import { Reveal } from "../ui/Reveal";
import { SectionHeading } from "../ui/SectionHeading";
import Image from "next/image";

const MAP_STATS = [
  { value: "20+", label: "destinations" },
  { value: "1", label: "Pearl of the Indian Ocean" },
  { value: "8", label: "UNESCO Heritage Sites" },
];

/** Stylised outline of Sri Lanka, drawn in a 100x160 viewBox. */

export function IslandMap() {
  const [active, setActive] = useState(MAP_DESTINATIONS[0]);

  return (
    <section className="w-full bg-jungle-deep py-20 lg:py-28">
      <div className="mx-auto max-w-content px-6">
        <SectionHeading
          eyebrow="Discover the Island"
          title="Explore Sri Lanka"
          subtitle="Discover the diverse landscapes and rich heritage of our island. Click a destination to learn more."
          tone="light"
        />

        <div className="mt-14 grid items-center gap-12 lg:grid-cols-[1fr_1.1fr] lg:gap-16">
          <Reveal className="relative mx-auto w-full max-w-[22rem]">
            <div className="relative aspect-[100/160] w-full">
              <Image
                src="/images/map.png"
                alt="Map of Sri Lanka with destination markers"
                fill
                className="object-contain"
                sizes="(max-width: 1024px) 22rem, 22rem"
              />

              {MAP_DESTINATIONS.map((destination) => {
                const isActive = destination.id === active.id;
                return (
                  <button
                    key={destination.id}
                    type="button"
                    onClick={() => setActive(destination)}
                    aria-pressed={isActive}
                    className="group absolute -translate-x-1/2 -translate-y-1/2"
                    style={{
                      top: `${destination.map.top}%`,
                      left: `${destination.map.left}%`,
                    }}
                  >
                    <span className="sr-only">{destination.name}</span>
                    <span
                      className={[
                        "block h-2.5 w-2.5 rounded-full ring-4 transition-all duration-300",
                        isActive
                          ? "bg-gold ring-gold/25 scale-125"
                          : "bg-ivory/70 ring-transparent group-hover:bg-gold-light",
                      ].join(" ")}
                      aria-hidden="true"
                    />

                    <span
                      className={[
                        "pointer-events-none absolute left-4 top-1/2 -translate-y-1/2 whitespace-nowrap text-[10px] uppercase tracking-[0.14em] transition-colors",
                        isActive
                          ? "text-gold-light"
                          : "text-ivory/50 group-hover:text-ivory",
                      ].join(" ")}
                    >
                      {destination.name}
                    </span>
                  </button>
                );
              })}
            </div>
          </Reveal>

          <div>
            <dl className="grid grid-cols-3 gap-4 border-b border-white/10 pb-8">
              {MAP_STATS.map((stat) => (
                <div key={stat.label}>
                  <dt className="sr-only">{stat.label}</dt>
                  <dd>
                    <span className="block font-serif text-2xl text-gold-light">
                      {stat.value}
                    </span>
                    <span className="mt-1 block text-[10px] uppercase tracking-[0.14em] text-ivory/55">
                      {stat.label}
                    </span>
                  </dd>
                </div>
              ))}
            </dl>

            <AnimatePresence mode="wait">
              <motion.div
                key={active.id}
                initial={{ opacity: 0, y: 12 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -8 }}
                transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
                className="pt-8"
              >
                <div className="overflow-hidden rounded-lg">
                  <img
                    src={active.image}
                    alt={active.name}
                    className="aspect-[16/9] w-full object-cover"
                  />
                </div>
                <p className="eyebrow mt-6 text-gold-light">{active.region}</p>
                <h3 className="mt-2 font-serif text-3xl font-light text-ivory">
                  {active.name}
                </h3>
                <p className="mt-4 text-sm leading-relaxed text-ivory/70">
                  {active.summary}
                </p>
                <div className="mt-7 flex flex-wrap gap-3">
                  <Link
                    href="/packages"
                    className="inline-flex items-center rounded-full bg-gold px-6 py-3 text-[11px] font-semibold uppercase tracking-[0.16em] text-jungle-deep transition-colors hover:bg-gold-light"
                  >
                    View Packages
                  </Link>
                  <Link
                    href={`/destinations/${active.id}`}
                    className="inline-flex items-center rounded-full border border-ivory/30 px-6 py-3 text-[11px] font-medium uppercase tracking-[0.16em] text-ivory transition-colors hover:bg-ivory hover:text-jungle"
                  >
                    Destination Guide
                  </Link>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>
        </div>
      </div>
    </section>
  );
}
