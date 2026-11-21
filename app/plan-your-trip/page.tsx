import type { Metadata } from 'next';
import { PlanTrip } from '../../src/views/PlanTrip';

export const metadata: Metadata = { title: 'Plan Your Trip | Magical Paradise', description: 'Plan a tailor-made Sri Lanka or Maldives journey with Magical Paradise.', alternates: { canonical: '/plan-your-trip' } };

export default function PlanYourTripPage() {
  return <PlanTrip />;
}
