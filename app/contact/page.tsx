import type { Metadata } from 'next';
import { Contact } from '../../src/views/Contact';

export const metadata: Metadata = { title: 'Contact Magical Paradise', description: 'Contact our Sri Lanka travel specialists for tailor-made journeys, day tours and travel assistance.', alternates: { canonical: '/contact' } };

export default function Page() {
  return <Contact />;
}
