import Image from "next/image";
import Link from "next/link";
import { ArrowRightIcon, HeartIcon } from "lucide-react";
import { PageHero } from "../components/ui/PageHero";
import { Reveal } from "../components/ui/Reveal";
import { SectionHeading } from "../components/ui/SectionHeading";
import { IMAGES } from "../data/media";

const reasons = [
  {
    title: "Extraordinary Diversity",
    text: "From golden coastlines to mist-covered mountains, ancient cities and lush wildlife parks, Sri Lanka offers a remarkable range of experiences within only a few hours of travel.",
    image: IMAGES.ella,
    alt: "Train travelling through Sri Lanka’s green hill country",
    tag: "One Island · Many Worlds",
  },
  {
    title: "Warm & Welcoming People",
    text: "Known for genuine warmth and hospitality, Sri Lankans welcome visitors with open hearts — creating meaningful connections that stay with you long after the journey.",
    image: IMAGES.kandy,
    alt: "Kandy at dusk, reflecting Sri Lanka’s welcoming cultural heart",
    tag: "Hospitality",
  },
  {
    title: "Living Cultural Heritage",
    text: "With more than 2,500 years of history, explore Sigiriya, Dambulla Cave Temple and the Temple of the Sacred Tooth Relic — each revealing a rich and enduring legacy.",
    image: IMAGES.sigiriya,
    alt: "Sigiriya Rock Fortress above the surrounding jungle",
    tag: "2,500+ Years",
  },
  {
    title: "Festivals All Year Round",
    text: "Experience colourful traditions and joyful celebrations that express the island’s cultural diversity, from grand processions to intimate village festivities.",
    image: IMAGES.galle,
    alt: "Historic Sri Lankan architecture glowing at sunset",
    tag: "Traditions in Colour",
  },
  {
    title: "Ayurveda & Wellness",
    text: "Reconnect and rejuvenate through ancient healing traditions, holistic therapies and peaceful wellness retreats surrounded by nature.",
    image: IMAGES.teaCountry,
    alt: "Serene green tea country in the Sri Lankan highlands",
    tag: "Restore & Reconnect",
  },
  {
    title: "Remarkable Wildlife",
    text: "Discover one of Asia’s richest biodiversity hotspots, with unforgettable encounters in Wilpattu, Yala and Udawalawe National Parks.",
    image: IMAGES.yala,
    alt: "Sri Lankan leopard resting in Yala National Park",
    tag: "Wild Encounters",
  },
  {
    title: "Adventure for Every Traveller",
    text: "Hike scenic trails, surf pristine shores, explore hidden waterfalls or follow special interests across an island made for discovery.",
    image: IMAGES.mirissa,
    alt: "Sri Lanka’s southern coast at sunset",
    tag: "Find Your Adventure",
  },
  {
    title: "Hotels with Character",
    text: "Choose from luxury resorts and boutique villas to eco-lodges and charming homestays, with stays to suit every travel style and preference.",
    image: IMAGES.hotel,
    alt: "Elegant boutique hotel interior in Sri Lanka",
    tag: "Stay Your Way",
  },
  {
    title: "Flavours Worth Travelling For",
    text: "Enjoy a true culinary journey where spices, fresh ingredients and tradition come together in rice and curry, sambols and local street favourites.",
    image: IMAGES.culinary,
    alt: "Colourful Sri Lankan rice and curry with fresh spices",
    tag: "Taste Sri Lanka",
  },
  {
    title: "Shopping with a Story",
    text: "Take a piece of Sri Lanka home through handcrafted souvenirs, batik, world-renowned Ceylon tea, fragrant spices and precious gemstones.",
    image: IMAGES.maldives,
    alt: "Tropical colours evoking island-made keepsakes",
    tag: "Treasures to Take Home",
  },
];

export function GoodReasons() {
  return (
    <>
      <PageHero
        eyebrow="Why Visit Sri Lanka"
        title="10 Good Reasons to Visit Sri Lanka"
        subtitle="A destination where diversity meets authenticity — discover a world of experiences within a single remarkable island."
        image={IMAGES.galle}
        imageAlt="Galle Fort and lighthouse on Sri Lanka’s southern coast"
        locationTag="Curated by Magical Paradise"
        stats={[
          { value: "10", label: "Reasons" },
          { value: "1", label: "Extraordinary Island" },
          { value: "Endless", label: "Memories" },
        ]}
      >
        <div className="mt-9 flex flex-wrap gap-3">
          <a
            href="#reasons"
            className="rounded-full bg-gold px-8 py-4 text-xs font-semibold uppercase tracking-[.16em] text-jungle-deep"
          >
            Discover the Reasons
          </a>
          <Link
            href="/plan-your-trip"
            className="rounded-full border border-ivory/35 bg-white/10 px-8 py-4 text-xs font-medium uppercase tracking-[.16em] text-ivory"
          >
            Plan Your Journey
          </Link>
        </div>
      </PageHero>

      <section className="bg-ivory py-20 lg:py-28">
        <div className="mx-auto grid max-w-content gap-12 px-6 lg:grid-cols-[.8fr_1.2fr] lg:gap-20">
          <Reveal>
            <div>
              <p className="eyebrow text-gold-dark">
                Small Island · Big Experiences
              </p>
              <h2 className="mt-4 font-serif text-4xl font-light leading-tight text-jungle sm:text-5xl">
                Everything you dream of, beautifully close
              </h2>
            </div>
          </Reveal>
          <Reveal delay={0.08}>
            <div className="space-y-5 text-[15px] leading-8 text-jungle-muted sm:text-base">
              <p>
                Sri Lanka brings astonishing variety into one easy-to-explore
                island. Ancient heritage, wild landscapes, tropical beaches,
                soulful food and heartfelt hospitality come together in a
                journey that can be as adventurous or restorative as you wish.
              </p>
              <p>
                At Magical Paradise, we bring these experiences to life through
                thoughtfully curated journeys and a personal touch that makes
                every visit truly memorable.
              </p>
            </div>
          </Reveal>
        </div>
      </section>

      <section id="reasons" className="scroll-mt-24 bg-sand py-20 lg:py-28">
        <div className="mx-auto max-w-content px-6">
          <SectionHeading
            eyebrow="The Island’s Irresistible Appeal"
            title="Ten Reasons to Fall in Love with Sri Lanka"
            subtitle="Each reason is a journey in itself — together, they make Sri Lanka unlike anywhere else."
          />
          <div className="mt-14 space-y-7">
            {reasons.map((reason, index) => (
              <Reveal key={reason.title}>
                <article className="group overflow-hidden rounded-xl border border-jungle/10 bg-ivory shadow-card">
                  <div
                    className={`grid lg:grid-cols-2 ${index % 2 ? "lg:[&>*:first-child]:order-2" : ""}`}
                  >
                    <div className="relative min-h-72 overflow-hidden lg:min-h-[430px]">
                      <Image
                        src={reason.image}
                        alt={reason.alt}
                        fill
                        sizes="(min-width: 1024px) 50vw, 100vw"
                        className="object-cover transition duration-700 group-hover:scale-105"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-jungle-deep/55 via-transparent to-transparent" />
                      <span className="absolute bottom-6 left-6 font-serif text-7xl font-light text-white/85">
                        {String(index + 1).padStart(2, "0")}
                      </span>
                    </div>
                    <div className="flex flex-col justify-center p-8 sm:p-12 lg:p-14">
                      <p className="eyebrow text-gold-dark">{reason.tag}</p>
                      <h3 className="mt-4 font-serif text-4xl font-light leading-tight text-jungle">
                        {reason.title}
                      </h3>
                      <p className="mt-6 text-[15px] leading-8 text-jungle-muted">
                        {reason.text}
                      </p>
                      <div className="mt-8 flex items-center gap-3 text-[10px] font-semibold uppercase tracking-[.14em] text-gold-dark">
                        <span className="h-px w-10 bg-gold" />
                        Reason {index + 1} of 10
                      </div>
                    </div>
                  </div>
                </article>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-ivory py-20 lg:py-28">
        <div className="mx-auto max-w-content px-6">
          <div className="grid gap-8 md:grid-cols-3">
            <Reveal>
              <div className="text-center">
                <p className="font-serif text-5xl text-gold">3–5 hrs</p>
                <p className="mt-3 text-xs uppercase tracking-[.16em] text-jungle-muted">
                  Between Many Highlights
                </p>
              </div>
            </Reveal>
            <Reveal delay={0.05}>
              <div className="text-center">
                <p className="font-serif text-5xl text-gold">2,500+</p>
                <p className="mt-3 text-xs uppercase tracking-[.16em] text-jungle-muted">
                  Years of History
                </p>
              </div>
            </Reveal>
            <Reveal delay={0.1}>
              <div className="text-center">
                <p className="font-serif text-5xl text-gold">Year-round</p>
                <p className="mt-3 text-xs uppercase tracking-[.16em] text-jungle-muted">
                  Reasons to Visit
                </p>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      <section className="bg-jungle-deep py-20 lg:py-24">
        <div className="mx-auto max-w-4xl px-6 text-center">
          <Reveal>
            <HeartIcon
              className="mx-auto h-8 w-8 text-gold-light"
              strokeWidth={1.4}
            />
            <p className="eyebrow mt-6 text-gold-light">Crafted Around You</p>
            <h2 className="mt-4 font-serif text-4xl font-light text-ivory sm:text-5xl">
              Indulge in a journey where authenticity meets elegance
            </h2>
            <p className="mx-auto mt-6 max-w-2xl text-[15px] leading-8 text-ivory/70">
              Tell us what inspires you and we will bring together the right
              places, people and moments into a journey entirely your own.
            </p>
            <Link
              href="/plan-your-trip"
              className="mt-9 inline-flex items-center gap-2 rounded-full bg-gold px-8 py-4 text-xs font-semibold uppercase tracking-[.16em] text-jungle-deep"
            >
              Start Planning <ArrowRightIcon className="h-4 w-4" />
            </Link>
          </Reveal>
        </div>
      </section>
    </>
  );
}
