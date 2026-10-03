import {
  CarIcon,
  CaravanIcon,
  PlaneIcon,
  ShipIcon,
  SparklesIcon,
  UsersIcon,
} from 'lucide-react';
import { Reveal } from '../ui/Reveal';
import { SectionHeading } from '../ui/SectionHeading';

const transportOptions = [
  {
    icon: CarIcon,
    title: 'Private Cars & SUVs',
    description: 'Comfortable, air-conditioned vehicles ideal for couples and private journeys.',
    category: 'Road',
  },
  {
    icon: CaravanIcon,
    title: 'Luxury Vans',
    description: 'Modern 6 to 8-seater air-conditioned vans, perfect for families and private tours.',
    category: 'Road',
  },
  {
    icon: UsersIcon,
    title: 'Coaches',
    description: 'Spacious, comfortable coaches for corporate groups, incentive travel and large group tours.',
    category: 'Road',
  },
  {
    icon: PlaneIcon,
    title: 'Domestic Helicopter Transfers',
    description: 'Experience Sri Lanka from above with exclusive helicopter flights between key destinations.',
    category: 'Air',
  },
  {
    icon: PlaneIcon,
    title: 'Charter Flights',
    description: 'Save valuable travel time with private air charters tailored to your schedule.',
    category: 'Air',
  },
  {
    icon: PlaneIcon,
    title: 'Seaplane Transfers',
    description: 'Enjoy breathtaking aerial views with Cinnamon Air while travelling effortlessly between selected destinations.',
    category: 'Air',
  },
  {
    icon: ShipIcon,
    title: 'Private Yacht Experiences',
    description: 'From half-day cruises to multi-day luxury voyages, discover Sri Lanka’s spectacular coastline in style.',
    category: 'Sea',
  },
];

export function TransportOptions() {
  return (
    <section className="w-full bg-jungle-deep py-20 lg:py-28">
      <div className="mx-auto max-w-content px-6">
        <SectionHeading
          eyebrow="Seamless Island Travel"
          title="Travel in Comfort & Style"
          subtitle="Every journey is an integral part of your Sri Lankan experience. Our carefully selected premium transport options make each transfer seamless, comfortable and perfectly suited to your itinerary."
          tone="light"
        />

        <Reveal className="mx-auto mt-8 max-w-3xl text-center">
          <p className="text-[15px] leading-8 text-ivory/65">
            Whether you are exploring by road, taking to the skies or setting sail along the coast, our trusted transport partners deliver exceptional service and reliability every step of the way.
          </p>
        </Reveal>

        <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {transportOptions.map((option, index) => (
            <Reveal
              key={option.title}
              delay={(index % 4) * 0.05}
              className={index === transportOptions.length - 1 ? 'sm:col-span-2 lg:col-span-2' : ''}>
              <article className="group h-full rounded-xl border border-ivory/15 bg-white/[0.04] p-7 transition-colors hover:border-gold/40 hover:bg-white/[0.07]">
                <div className="flex items-start justify-between gap-4">
                  <span className="flex h-12 w-12 items-center justify-center rounded-full bg-gold/15 text-gold-light">
                    <option.icon className="h-5 w-5" strokeWidth={1.5} aria-hidden="true" />
                  </span>
                  <span className="text-[9px] font-semibold uppercase tracking-[0.18em] text-ivory/40">
                    {option.category}
                  </span>
                </div>
                <h3 className="mt-6 font-serif text-2xl font-light leading-tight text-ivory">
                  {option.title}
                </h3>
                <p className="mt-4 text-sm leading-7 text-ivory/65">
                  {option.description}
                </p>
              </article>
            </Reveal>
          ))}
        </div>

        <Reveal className="mt-12 flex items-center justify-center gap-3 text-center">
          <SparklesIcon className="h-5 w-5 shrink-0 text-gold-light" strokeWidth={1.5} aria-hidden="true" />
          <p className="font-serif text-xl italic text-ivory/85 sm:text-2xl">
            Every transfer is as memorable as the destination itself.
          </p>
        </Reveal>
      </div>
    </section>
  );
}
