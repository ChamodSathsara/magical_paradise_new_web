import type { Metadata } from 'next';
import { Partnership } from '../../src/views/Partnership';

export const metadata: Metadata = { title: 'Partner With Magical Paradise', description: 'Partnership enquiries for travel professionals, suppliers and corporate collaborators.', alternates: { canonical: '/partnership' } };

export default function Page() {
  return <Partnership />;
}
