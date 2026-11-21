import type { Metadata } from 'next';
import { PrivacyPolicy } from '../../src/views/PrivacyPolicy';

export const metadata: Metadata = { title: 'Privacy Policy | Magical Paradise', description: 'Learn how Magical Paradise collects, uses and protects information submitted through this website.', alternates: { canonical: '/privacy-policy' } };
export default function Page() { return <PrivacyPolicy />; }
