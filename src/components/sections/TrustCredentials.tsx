import { AwardIcon, BadgeCheckIcon, CreditCardIcon, StarIcon } from 'lucide-react';
import { SITE } from '../../data/site';

const ITEMS = [
  { title: 'Licensed Travel Agency', text: 'Sri Lanka Tourism Development Authority', Icon: BadgeCheckIcon },
  { title: 'Travellers’ Choice', text: 'TripAdvisor recognition', Icon: AwardIcon },
  { title: 'Guest Rated', text: 'Read independent TripAdvisor reviews', Icon: StarIcon, href: SITE.tripadvisor },
  { title: 'Secure Payments', text: 'Visa and Mastercard accepted', Icon: CreditCardIcon },
];

export function TrustCredentials() {
  return <section aria-label="Travel credentials" className="border-y border-jungle/10 bg-white py-9"><ul className="mx-auto grid max-w-content gap-5 px-6 sm:grid-cols-2 lg:grid-cols-4">{ITEMS.map(({ title, text, Icon, href }) => <li key={title}>{href ? <a href={href} target="_blank" rel="noreferrer noopener" className="flex items-center gap-4 rounded-lg p-2 hover:bg-sand"><Icon className="h-9 w-9 shrink-0 text-gold-dark" strokeWidth={1.4} /><span><strong className="block font-serif text-lg font-medium text-jungle">{title}</strong><span className="text-xs leading-5 text-jungle-muted">{text}</span></span></a> : <div className="flex items-center gap-4 p-2"><Icon className="h-9 w-9 shrink-0 text-gold-dark" strokeWidth={1.4} /><span><strong className="block font-serif text-lg font-medium text-jungle">{title}</strong><span className="text-xs leading-5 text-jungle-muted">{text}</span></span></div>}</li>)}</ul></section>;
}
