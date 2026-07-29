'use client';

import React from 'react';
import { Header } from './Header';
import { Footer } from './Footer';
import { WhatsAppButton } from './WhatsAppButton';
import { SmoothScroll } from './SmoothScroll';
import { LanguageProvider } from '../../i18n/LanguageProvider';

export function Layout({ children }: { children: React.ReactNode }) {
  return (
    <LanguageProvider>
      <div className="flex min-h-screen w-full flex-col bg-ivory">
        <SmoothScroll />
        <a
          href="#main"
          className="sr-only focus:not-sr-only focus:absolute focus:left-4 focus:top-4 focus:z-[60] focus:rounded-full focus:bg-jungle focus:px-5 focus:py-3 focus:text-xs focus:uppercase focus:tracking-widest focus:text-ivory">
          Skip to content
        </a>
        <Header />
        <main id="main" className="flex-1">{children}</main>
        <Footer />
        <WhatsAppButton />
      </div>
    </LanguageProvider>
  );
}
