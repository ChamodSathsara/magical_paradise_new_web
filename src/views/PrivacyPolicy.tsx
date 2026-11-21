import { PageHero } from '../components/ui/PageHero';
import { IMAGES } from '../data/media';

const SECTIONS = [
  ['Information we collect', 'We collect the contact, travel and preference information you submit through enquiry, trip-planning, partnership and newsletter forms.'],
  ['How we use it', 'We use your information to respond to enquiries, prepare travel proposals, administer bookings, provide requested updates and improve our services.'],
  ['Sharing and retention', 'We share information only with service providers required to arrange your journey, or where the law requires it. We retain it only for legitimate operational, contractual and legal purposes.'],
  ['Your choices', 'You may ask to access, correct or delete personal information, and may unsubscribe from marketing messages at any time.'],
];

export function PrivacyPolicy() { return <><PageHero eyebrow="Your Information" title="Privacy Policy" subtitle="How Magical Paradise collects, uses and protects the information you share with us." image={IMAGES.teaCountry} imageAlt="Sri Lankan tea country"/><section className="bg-ivory py-20"><div className="mx-auto max-w-3xl px-6"><p className="text-sm leading-7 text-jungle-muted">This notice applies to information submitted through this website. By sending an enquiry, you consent to the processing needed to respond and arrange the services you request.</p><div className="mt-10 space-y-8">{SECTIONS.map(([title,body])=><section key={title}><h2 className="font-serif text-2xl text-jungle">{title}</h2><p className="mt-3 text-sm leading-7 text-jungle-muted">{body}</p></section>)}</div><p className="mt-10 border-t border-jungle/10 pt-8 text-sm leading-7 text-jungle-muted">For privacy requests, contact us through the website’s official contact page.</p></div></section></> }
