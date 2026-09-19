import type { Metadata } from 'next';
import { Mice } from '../../src/views/Mice';

export const metadata: Metadata = {
  title: 'MICE & Corporate Retreats in Sri Lanka | Magical Paradise',
  description: 'Plan bespoke MICE experiences, corporate retreats, incentive travel, conferences and executive gatherings across Sri Lanka with Magical Paradise.',
  alternates: { canonical: '/mice' },
  openGraph: {
    title: 'MICE & Corporate Retreats in Sri Lanka | Magical Paradise',
    description: 'Bespoke meetings, incentives, conferences, exhibitions and executive retreats across Sri Lanka.',
    url: '/mice',
    type: 'website',
  },
};

export default function Page() {
  return <Mice />;
}
