"use client";

import React, { useEffect, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { AnimatePresence, motion } from "framer-motion";
import { ChevronDownIcon, MenuIcon, XIcon } from "lucide-react";
import { NavLink } from "../ui/NavLink";
import { NAV_LINKS } from "../../data/site";
import { LANGUAGES, useLanguage } from "../../i18n/LanguageProvider";
import Image from "next/image";

const STORY_LINKS = [
  { label: 'About Us', to: '/about' },
  { label: 'Contact Us', to: '/contact' },
  { label: 'Magical Conservation — Protecting Paradise', to: '/conservation' },
  { label: 'Philanthropy — Vino Foundation', to: '/vino-foundation' },
  { label: 'Tour Booking Contractual Provisions', to: '/booking-provisions' },
  { label: 'Payment Options', to: '/payment-options' },
  { label: 'Magical Paradise Store', to: '/shop' },
] as const;

const EXPERIENCE_LINKS = [
  { label: 'Full Tourist Map', to: '/experience-sri-lanka/tourist-map' },
  { label: 'Many Faces of Sri Lanka', to: '/experience-sri-lanka/many-faces' },
  { label: 'Magical Destinations', to: '/experience-sri-lanka/magical-destinations' },
  { label: 'Things to Do', to: '/experience-sri-lanka/things-to-do' },
  { label: 'Only in Sri Lanka — Unique Experiences', to: '/experience-sri-lanka/only-in-sri-lanka' },
  { label: 'Ceylon Gems', to: '/experience-sri-lanka/ceylon-gems' },
] as const;

export function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [langOpen, setLangOpen] = useState(false);
  const { language, setLanguage, t } = useLanguage();
  const selectedLanguage = LANGUAGES.find((item) => item.code === language) ?? LANGUAGES[0];
  const pathname = usePathname();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    setMenuOpen(false);
    setLangOpen(false);
  }, [pathname]);

  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [menuOpen]);

  return (
    <header
      className={[
        "fixed inset-x-0 top-0 z-50 transition-colors duration-300",
        scrolled || menuOpen
          ? "bg-jungle-deep/95 backdrop-blur-md border-b border-white/10"
          : "bg-gradient-to-b from-jungle-deep/70 to-transparent",
      ].join(" ")}
    >
      <div className="relative mx-auto flex w-full max-w-[118rem] items-center justify-end px-4 py-3 lg:flex-col lg:gap-2 lg:px-6 lg:pb-3 lg:pt-2">
        <Link
          href="/"
          className="group absolute left-1/2 top-1/2 flex -translate-x-1/2 -translate-y-1/2 items-center justify-center lg:static lg:translate-x-0 lg:translate-y-0"
          aria-label="Magical Paradise home"
        >
          <Image
            src="/images/logo.png"
            alt="Magical Paradise"
            width={160}
            height={48}
            priority
            className="h-10 w-auto sm:h-12 lg:h-11"
          />
        </Link>

        <nav aria-label="Main navigation" className="hidden w-full items-center justify-center gap-3 lg:flex xl:gap-5">
            {NAV_LINKS.map((link) => (
              <DesktopNavLink key={link.to} link={link} t={t} />
            ))}
        </nav>
        <div className="flex items-center justify-start gap-3 lg:absolute lg:right-6 lg:top-3">
          <div className="relative hidden sm:block">
            <button
              type="button"
              onClick={() => setLangOpen((value) => !value)}
              aria-expanded={langOpen}
              aria-haspopup="listbox"
              className="flex items-center gap-1.5 rounded-full border border-ivory/20 px-3 py-2 text-[11px] uppercase tracking-[0.14em] text-ivory/80 transition-colors hover:border-ivory/50 hover:text-ivory"
            >
              <span aria-hidden="true">{selectedLanguage.flag}</span>
              {selectedLanguage.code}
              <ChevronDownIcon
                className="h-3 w-3"
                strokeWidth={2}
                aria-hidden="true"
              />
            </button>
            <AnimatePresence>
              {langOpen && (
                <motion.ul
                  role="listbox"
                  initial={{ opacity: 0, y: -6 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -6 }}
                  transition={{ duration: 0.18 }}
                  className="absolute right-0 top-full mt-2 w-44 overflow-hidden rounded-lg border border-jungle/10 bg-white py-1 shadow-lift"
                >
                  {LANGUAGES.map((lang) => (
                    <li key={lang.code}>
                      <button
                        type="button"
                        role="option"
                        aria-selected={lang.code === language}
                        onClick={() => {
                          setLanguage(lang.code);
                          setLangOpen(false);
                        }}
                        className={[
                          "flex w-full items-center gap-2.5 px-4 py-2.5 text-left text-sm transition-colors hover:bg-sand",
                          lang.code === language
                            ? "text-gold-dark"
                            : "text-jungle",
                        ].join(" ")}
                      >
                        <span aria-hidden="true">{lang.flag}</span>
                        {lang.label}
                      </button>
                    </li>
                  ))}
                </motion.ul>
              )}
            </AnimatePresence>
          </div>

          <button
            type="button"
            onClick={() => setMenuOpen((value) => !value)}
            aria-expanded={menuOpen}
            aria-label={menuOpen ? t('nav.close') : t('nav.menu')}
            className="flex h-10 w-10 items-center justify-center rounded-full border border-ivory/20 text-ivory lg:hidden"
          >
            {menuOpen ? (
              <XIcon className="h-5 w-5" strokeWidth={1.5} />
            ) : (
              <MenuIcon className="h-5 w-5" strokeWidth={1.5} />
            )}
          </button>
        </div>
      </div>

      <AnimatePresence>
        {menuOpen && (
          <motion.div
            data-lenis-prevent
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="absolute inset-x-0 top-full z-40 h-[calc(100dvh-72px)] overflow-y-auto overscroll-contain bg-jungle-deep px-6 pb-24 pt-8 sm:h-[calc(100dvh-80px)] lg:hidden"
          >
            <nav aria-label="Mobile" className="flex flex-col">
              {NAV_LINKS.map((link, index) => (
                <motion.div
                  key={link.to}
                  initial={{ opacity: 0, x: -12 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.05 + index * 0.045, duration: 0.3 }}
                >
                  {link.label === 'Experience Sri Lanka' ? (
                    <div className="border-b border-white/10 py-4">
                      <p className="font-serif text-2xl text-gold-light">Experience Sri Lanka</p>
                      <div className="mt-3 flex flex-col border-l border-gold/40 pl-4">
                        {EXPERIENCE_LINKS.map((experienceLink) => (
                          <NavLink key={experienceLink.to} to={experienceLink.to} className={({ isActive }) => `py-2 text-sm ${isActive ? 'text-gold-light' : 'text-ivory/70'}`}>
                            {experienceLink.label}
                          </NavLink>
                        ))}
                      </div>
                    </div>
                  ) : link.label === 'Our Story' ? (
                    <div className="border-b border-white/10 py-4">
                      <p className="font-serif text-2xl text-gold-light">Our Story</p>
                      <div className="mt-3 flex flex-col border-l border-gold/40 pl-4">
                        {STORY_LINKS.map((storyLink) => (
                          <NavLink key={storyLink.to} to={storyLink.to} className={({ isActive }) => `py-2 text-sm ${isActive ? 'text-gold-light' : 'text-ivory/70'}`}>
                            {storyLink.label}
                          </NavLink>
                        ))}
                      </div>
                    </div>
                  ) : (
                    <NavLink
                      to={link.to}
                      className={({ isActive }) => [
                        "block border-b border-white/10 py-4 font-serif text-2xl",
                        isActive ? "text-gold-light" : "text-ivory",
                      ].join(" ")}
                    >
                      {t(`nav.${link.label.toLowerCase()}` as Parameters<typeof t>[0])}
                    </NavLink>
                  )}
                </motion.div>
              ))}
            </nav>

            <div className="mt-8">
              <p className="eyebrow mb-3 text-ivory/50">{t('nav.language')}</p>
              <div className="flex flex-wrap gap-2">
                {LANGUAGES.map((lang) => (
                  <button
                    key={lang.code}
                    type="button"
                    onClick={() => setLanguage(lang.code)}
                    className={[
                      "rounded-full border px-4 py-2 text-xs tracking-[0.1em] transition-colors",
                      lang.code === language
                        ? "border-gold bg-gold/15 text-gold-light"
                        : "border-white/20 text-ivory/70",
                    ].join(" ")}
                  >
                    <span aria-hidden="true" className="mr-1.5">
                      {lang.flag}
                    </span>
                    {lang.label}
                  </button>
                ))}
              </div>
            </div>

          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}

type DesktopNavLinkProps = {
  link: (typeof NAV_LINKS)[number];
  t: ReturnType<typeof useLanguage>['t'];
};

function DesktopNavLink({ link, t }: DesktopNavLinkProps) {
  if (link.label === 'Experience Sri Lanka') {
    return <ExperienceDropdown />;
  }

  if (link.label === 'Our Story') {
    return <StoryDropdown t={t} />;
  }

  return (
    <NavLink
      to={link.to}
      className={({ isActive }) => [
        'relative whitespace-nowrap text-[9px] uppercase tracking-[0.08em] transition-colors xl:text-[10px] xl:tracking-[0.1em]',
        isActive ? 'text-gold-light' : 'text-ivory/80 hover:text-ivory',
      ].join(' ')}
    >
      {({ isActive }) => <>
        {t(`nav.${link.label.toLowerCase()}` as Parameters<typeof t>[0])}
        {isActive && <span className="absolute -bottom-1.5 left-0 h-px w-full bg-gold-light" />}
      </>}
    </NavLink>
  );
}

function ExperienceDropdown() {
  const pathname = usePathname();
  const active = pathname.startsWith('/experience-sri-lanka') || pathname.startsWith('/experiences/');

  return (
    <div className="group relative py-3">
      <button type="button" className={`flex items-center gap-1 whitespace-nowrap text-[10px] uppercase tracking-[0.12em] transition-colors ${active ? 'text-gold-light' : 'text-ivory/80 group-hover:text-ivory'}`} aria-haspopup="true">
        Experience Sri Lanka
        <ChevronDownIcon className="h-3 w-3 transition-transform group-hover:rotate-180" strokeWidth={1.8} />
      </button>
      {active && <span className="absolute bottom-1.5 left-0 h-px w-full bg-gold-light" />}
      <div className="invisible absolute left-1/2 top-full w-80 -translate-x-1/2 translate-y-2 rounded-lg border border-white/10 bg-jungle-deep/95 p-2 opacity-0 shadow-lift backdrop-blur-md transition-all duration-200 group-hover:visible group-hover:translate-y-0 group-hover:opacity-100 group-focus-within:visible group-focus-within:translate-y-0 group-focus-within:opacity-100">
        {EXPERIENCE_LINKS.map((experienceLink) => (
          <Link key={experienceLink.to} href={experienceLink.to} className="block rounded-md px-4 py-3 text-xs tracking-wide text-ivory/75 transition-colors hover:bg-white/10 hover:text-gold-light">
            {experienceLink.label}
          </Link>
        ))}
      </div>
    </div>
  );
}

function StoryDropdown({ t }: { t: ReturnType<typeof useLanguage>['t'] }) {
  const pathname = usePathname();
  const active = STORY_LINKS.some((link) => pathname === link.to);

  return (
    <div className="group relative py-3">
      <button
        type="button"
        className={`flex items-center gap-1 whitespace-nowrap text-[10px] uppercase tracking-[0.12em] transition-colors ${active ? 'text-gold-light' : 'text-ivory/80 group-hover:text-ivory'}`}
        aria-haspopup="true"
      >
        {t('nav.our story' as Parameters<typeof t>[0])}
        <ChevronDownIcon className="h-3 w-3 transition-transform group-hover:rotate-180" strokeWidth={1.8} />
      </button>
      {active && <span className="absolute bottom-1.5 left-0 h-px w-full bg-gold-light" />}
      <div className="invisible absolute right-0 top-full max-h-[75vh] w-80 translate-y-2 overflow-y-auto rounded-lg border border-white/10 bg-jungle-deep/95 p-2 opacity-0 shadow-lift backdrop-blur-md transition-all duration-200 group-hover:visible group-hover:translate-y-0 group-hover:opacity-100 group-focus-within:visible group-focus-within:translate-y-0 group-focus-within:opacity-100">
        {STORY_LINKS.map((storyLink) => (
          <Link key={storyLink.to} href={storyLink.to} className="block rounded-md px-4 py-3 text-xs tracking-wide text-ivory/75 transition-colors hover:bg-white/10 hover:text-gold-light">
            {storyLink.label}
          </Link>
        ))}
      </div>
    </div>
  );
}
