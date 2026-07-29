import type { Metadata } from 'next';
import { Layout } from '../src/components/layout/Layout';
import { SITE } from '../src/data/site';
import './globals.css';

export const metadata: Metadata = {
  title: `${SITE.name} | Sri Lanka & Maldives Luxury Travel`,
  description: SITE.tagline,
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>
        <Layout>{children}</Layout>
      </body>
    </html>
  );
}
