"use client";

import React, { useEffect, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { AnimatePresence, motion } from "framer-motion";
import { ChevronDownIcon, MenuIcon, XIcon } from "lucide-react";
import { NavLink } from "../ui/NavLink";
import { LANGUAGES, NAV_LINKS, SITE } from "../../data/site";
import Image from "next/image";

export function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [langOpen, setLangOpen] = useState(false);
  const [language, setLanguage] = useState(LANGUAGES[0]);
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
      <div className="mx-auto flex max-w-content items-center justify-between gap-6 px-6 py-4">
        {/* Logo */}
        <Link
          href="/"
          className="group flex items-center"
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

        <nav aria-label="Main" className="hidden items-center gap-7 lg:flex">
          {NAV_LINKS.map((link) => (
            <NavLink
              key={link.to}
              to={link.to}
              className={({ isActive }) =>
                [
                  "relative text-[11px] uppercase tracking-[0.18em] transition-colors",
                  isActive
                    ? "text-gold-light"
                    : "text-ivory/80 hover:text-ivory",
                ].join(" ")
              }
            >
              {({ isActive }) => (
                <>
                  {link.label}
                  {isActive && (
                    <span className="absolute -bottom-1.5 left-0 h-px w-full bg-gold-light" />
                  )}
                </>
              )}
            </NavLink>
          ))}
        </nav>

        <div className="flex items-center gap-3">
          <div className="relative hidden sm:block">
            <button
              type="button"
              onClick={() => setLangOpen((value) => !value)}
              aria-expanded={langOpen}
              aria-haspopup="listbox"
              className="flex items-center gap-1.5 rounded-full border border-ivory/20 px-3 py-2 text-[11px] uppercase tracking-[0.14em] text-ivory/80 transition-colors hover:border-ivory/50 hover:text-ivory"
            >
              <span aria-hidden="true">{language.flag}</span>
              {language.code}
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
                        aria-selected={lang.code === language.code}
                        onClick={() => {
                          setLanguage(lang);
                          setLangOpen(false);
                        }}
                        className={[
                          "flex w-full items-center gap-2.5 px-4 py-2.5 text-left text-sm transition-colors hover:bg-sand",
                          lang.code === language.code
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

          <a
            href={SITE.whatsapp}
            target="_blank"
            rel="noreferrer noopener"
            className="hidden rounded-full bg-gold px-5 py-2.5 text-[11px] font-semibold uppercase tracking-[0.16em] text-jungle-deep transition-colors hover:bg-gold-light md:inline-flex"
          >
            Plan My Trip
          </a>

          <button
            type="button"
            onClick={() => setMenuOpen((value) => !value)}
            aria-expanded={menuOpen}
            aria-label={menuOpen ? "Close menu" : "Open menu"}
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
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="fixed inset-0 top-[73px] z-40 overflow-y-auto bg-jungle-deep px-6 pb-16 pt-8 lg:hidden"
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
                    {link.label}
                  </NavLink>
                </motion.div>
              ))}
            </nav>

            <div className="mt-8">
              <p className="eyebrow mb-3 text-ivory/50">Language</p>
              <div className="flex flex-wrap gap-2">
                {LANGUAGES.map((lang) => (
                  <button
                    key={lang.code}
                    type="button"
                    onClick={() => setLanguage(lang)}
                    className={[
                      "rounded-full border px-4 py-2 text-xs tracking-[0.1em] transition-colors",
                      lang.code === language.code
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

            <a
              href={SITE.whatsapp}
              target="_blank"
              rel="noreferrer noopener"
              className="mt-8 flex w-full items-center justify-center rounded-full bg-gold px-6 py-4 text-xs font-semibold uppercase tracking-[0.16em] text-jungle-deep"
            >
              Plan My Trip
            </a>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
