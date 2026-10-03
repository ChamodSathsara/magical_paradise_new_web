import { MessageCircleIcon, PhoneIcon } from 'lucide-react';
import { Reveal } from '../ui/Reveal';
import { SectionHeading } from '../ui/SectionHeading';

const representatives = [
  {
    country: 'Netherlands',
    flag: '🇳🇱',
    name: 'Shashika Jayathilake',
    phone: '+31 6 45876242',
    phoneHref: 'tel:+31645876242',
    whatsapp: 'https://wa.me/31645876242',
  },
  {
    country: 'United Kingdom',
    flag: '🇬🇧',
    name: 'Sam Goonetillake',
    phone: '+44 7963 331138',
    phoneHref: 'tel:+447963331138',
    whatsapp: 'https://wa.me/447963331138',
  },
];

export function CountryRepresentatives() {
  return (
    <section className="w-full bg-sand py-20 lg:py-28">
      <div className="mx-auto max-w-content px-6">
        <SectionHeading
          eyebrow="Closer to You"
          title="Meet Our Country Representatives"
          subtitle="Connect with a Magical Paradise representative in Europe for friendly, personal assistance while planning your Sri Lanka journey."
        />

        <div className="mx-auto mt-12 grid max-w-4xl gap-6 md:grid-cols-2">
          {representatives.map((representative, index) => (
            <Reveal key={representative.country} delay={index * 0.08} className="h-full">
              <article className="relative h-full overflow-hidden rounded-xl border border-jungle/10 bg-ivory p-8 shadow-card sm:p-10">
                <span className="absolute right-7 top-6 text-5xl" role="img" aria-label={`${representative.country} flag`}>
                  {representative.flag}
                </span>

                <p className="eyebrow pr-16 text-gold-dark">{representative.country}</p>
                <p className="mt-4 text-xs font-medium uppercase tracking-[0.14em] text-jungle-muted">
                  Magical Paradise Country Representative
                </p>
                <h3 className="mt-5 max-w-xs font-serif text-3xl font-light text-jungle">
                  {representative.name}
                </h3>
                <a href={representative.phoneHref} className="mt-4 inline-flex text-sm text-jungle-muted transition-colors hover:text-gold-dark">
                  {representative.phone}
                </a>

                <div className="mt-8 flex flex-wrap gap-3 border-t border-jungle/10 pt-7">
                  <a
                    href={representative.phoneHref}
                    className="inline-flex items-center gap-2 rounded-full bg-jungle px-6 py-3 text-[11px] font-semibold uppercase tracking-[0.14em] text-ivory transition-colors hover:bg-jungle-deep">
                    <PhoneIcon className="h-4 w-4" strokeWidth={1.6} aria-hidden="true" />
                    Call
                  </a>
                  <a
                    href={representative.whatsapp}
                    target="_blank"
                    rel="noreferrer noopener"
                    className="inline-flex items-center gap-2 rounded-full border border-jungle/20 px-6 py-3 text-[11px] font-semibold uppercase tracking-[0.14em] text-jungle transition-colors hover:border-jungle hover:bg-jungle hover:text-ivory">
                    <MessageCircleIcon className="h-4 w-4" strokeWidth={1.6} aria-hidden="true" />
                    WhatsApp
                  </a>
                </div>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
