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
      <div className="relative mx-auto flex max-w-content items-center justify-end gap-6 px-6 py-4 xl:grid xl:grid-cols-[minmax(0,1fr)_160px_minmax(0,1fr)] xl:gap-5">
        <nav aria-label="Main navigation, first links" className="hidden items-center gap-4 xl:flex">
          {NAV_LINKS.slice(0, 4).map((link) => (
            <DesktopNavLink key={link.to} link={link} t={t} />
          ))}
        </nav>

        {/* Logo */}
        <Link
          href="/"
          className="group absolute left-1/2 top-1/2 flex -translate-x-1/2 -translate-y-1/2 items-center justify-center xl:static xl:translate-x-0 xl:translate-y-0"
          aria-label="Magical Paradise home"
        >
          <Image
            src="/images/logo.png"
            alt="Magical Paradise"
            width={160}
            height={48}
            priority
            className="h-10 w-auto sm:h-12"
          />
        </Link>

        <div className="flex items-center justify-end gap-3">
          <nav aria-label="Main navigation, remaining links" className="hidden items-center gap-4 xl:flex">
            {NAV_LINKS.slice(4).map((link) => (
              <DesktopNavLink key={link.to} link={link} t={t} />
            ))}
          </nav>
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
            className="flex h-10 w-10 items-center justify-center rounded-full border border-ivory/20 text-ivory xl:hidden"
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
            className="absolute inset-x-0 top-full z-40 h-[calc(100dvh-72px)] overflow-y-auto overscroll-contain bg-jungle-deep px-6 pb-24 pt-8 sm:h-[calc(100dvh-80px)] xl:hidden"
          >
            <nav aria-label="Mobile" className="flex flex-col">
              {NAV_LINKS.map((link, index) => (
                <motion.div
                  key={link.to}
                  initial={{ opacity: 0, x: -12 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.05 + index * 0.045, duration: 0.3 }}
                >
                  <NavLink
                    to={link.to}
                    className={({ isActive }) =>
                      [
                        "block border-b border-white/10 py-4 font-serif text-2xl",
                        isActive ? "text-gold-light" : "text-ivory",
                      ].join(" ")
                    }
                  >
                    {t(`nav.${link.label.toLowerCase()}` as Parameters<typeof t>[0])}
                  </NavLink>
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
  return (
    <NavLink
      to={link.to}
      className={({ isActive }) => [
        'relative whitespace-nowrap text-[10px] uppercase tracking-[0.12em] transition-colors',
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
