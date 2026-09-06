"use client";

import React, { useState } from "react";
import Link from "next/link";
import {
  CheckIcon,
  FacebookIcon,
  InstagramIcon,
  MailIcon,
  MapPinIcon,
  Music2Icon,
  PhoneIcon,
  StarIcon,
} from "lucide-react";
import { FOOTER_DESTINATIONS, FOOTER_SERVICES, SITE } from "../../data/site";
import Image from "next/image";
import { useLanguage } from "../../i18n/LanguageProvider";

const LEGAL_LINKS = [
  { label: "FAQ", to: "/faq" },
  { label: "Contact Us", to: "/contact" },
  { label: "Corporate & Groups", to: "/corporate" },
  { label: "Partner Registration", to: "/partnership" },
];

export function Footer() {
  const { t } = useLanguage();
  const [email, setEmail] = useState("");
  const [subscribed, setSubscribed] = useState(false);

  const onSubscribe = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (!email) return;
    setSubscribed(true);
    setEmail("");
  };

  return (
    <footer className="w-full bg-jungle-deep text-ivory/70">
      <div className="mx-auto max-w-content px-6 py-16 lg:py-20">
        <div className="grid gap-12 lg:grid-cols-[1.4fr_1fr_1fr_1.2fr]">
          <div>
            {/* Logo */}
            <Image
              src="/images/logo.png"
              alt="Magical Paradise"
              width={180}
              height={54}
              className="h-12 w-auto"
            />

            <p className="mt-5 max-w-sm text-sm leading-relaxed">
              {SITE.tagline}
            </p>

            <form onSubmit={onSubscribe} className="mt-8 max-w-sm">
              <label
                htmlFor="newsletter-email"
                className="eyebrow mb-3 block text-gold-light"
              >
                {t('footer.inspiration')}
              </label>
              {subscribed ? (
                <p className="inline-flex items-center gap-2 text-sm text-ivory">
                  <CheckIcon
                    className="h-4 w-4 text-gold-light"
                    strokeWidth={2}
                    aria-hidden="true"
                  />
                  {t('footer.success')}
                </p>
              ) : (
                <div className="flex gap-2">
                  <input
                    id="newsletter-email"
                    type="email"
                    required
                    value={email}
                    onChange={(event) => setEmail(event.target.value)}
                    placeholder={t('footer.emailPlaceholder')}
                    className="min-w-0 flex-1 rounded-full border border-white/15 bg-white/5 px-4 py-2.5 text-sm text-ivory placeholder:text-ivory/40 focus:border-gold focus:outline-none"
                  />

                  <button
                    type="submit"
                    className="rounded-full bg-gold px-5 py-2.5 text-[11px] font-semibold uppercase tracking-[0.14em] text-jungle-deep transition-colors hover:bg-gold-light"
                  >
                    {t('footer.join')}
                  </button>
                </div>
              )}
            </form>
          </div>

          <div>
            <h2 className="eyebrow mb-5 text-ivory">{t('footer.destinations')}</h2>
            <ul className="space-y-3 text-sm">
              {FOOTER_DESTINATIONS.map((item) => (
                <li key={item}>
                  <Link
                    href="/destinations"
                    className="transition-colors hover:text-gold-light"
                  >
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h2 className="eyebrow mb-5 text-ivory">{t('footer.services')}</h2>
            <ul className="space-y-3 text-sm">
              {FOOTER_SERVICES.map((item) => (
                <li key={item}>
                  <Link
                    href={item === "Paradise Shop" ? "/shop" : "/packages"}
                    className="transition-colors hover:text-gold-light"
                  >
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h2 className="eyebrow mb-5 text-ivory">{t('footer.contact')}</h2>
            <ul className="space-y-4 text-sm">
              <li className="flex gap-3">
                <MapPinIcon
                  className="mt-0.5 h-4 w-4 shrink-0 text-gold-light"
                  strokeWidth={1.5}
                  aria-hidden="true"
                />
                {SITE.address}
              </li>
              <li className="flex gap-3">
                <PhoneIcon className="mt-0.5 h-4 w-4 shrink-0 text-gold-light" strokeWidth={1.5} aria-hidden="true" />
                <a href={SITE.landlineHref} className="transition-colors hover:text-gold-light">
                  {SITE.landline}
                </a>
              </li>
              <li className="flex gap-3">
                <PhoneIcon
                  className="mt-0.5 h-4 w-4 shrink-0 text-gold-light"
                  strokeWidth={1.5}
                  aria-hidden="true"
                />
                <a
                  href={SITE.phoneHref}
                  className="transition-colors hover:text-gold-light"
                >
                  {SITE.phone}
                </a>
              </li>
              <li className="flex gap-3">
                <MailIcon
                  className="mt-0.5 h-4 w-4 shrink-0 text-gold-light"
                  strokeWidth={1.5}
                  aria-hidden="true"
                />
                <a
                  href={`mailto:${SITE.email}`}
                  className="transition-colors hover:text-gold-light"
                >
                  {SITE.email}
                </a>
              </li>
            </ul>

            <div className="mt-6 flex gap-3">
              {[
                { href: SITE.facebook, label: "Facebook", Icon: FacebookIcon },
                {
                  href: SITE.instagram,
                  label: "Instagram",
                  Icon: InstagramIcon,
                },
                { href: SITE.tiktok, label: "TikTok", Icon: Music2Icon },
                { href: SITE.tripadvisor, label: "TripAdvisor", Icon: StarIcon },
              ].map(({ href, label, Icon: SocialIcon }) => (
                <a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noreferrer noopener"
                  aria-label={label}
                  className="flex h-9 w-9 items-center justify-center rounded-full border border-white/15 transition-colors hover:border-gold hover:text-gold-light"
                >
                  <SocialIcon
                    className="h-4 w-4"
                    strokeWidth={1.5}
                    aria-hidden="true"
                  />
                </a>
              ))}
            </div>

            {/* Frequently Asked Questions button */}
            <Link
              href="/faq"
              className="mt-6 inline-flex items-center justify-center rounded-full border border-gold/60 px-5 py-2.5 text-[11px] font-semibold uppercase tracking-[0.14em] text-gold-light transition-colors hover:bg-gold hover:text-jungle-deep"
            >
              {t('footer.faq')}
            </Link>
          </div>
        </div>

        <div className="mt-14 border-t border-white/10 pt-8">
          <ul className="flex flex-wrap gap-x-6 gap-y-2 text-xs">
            {LEGAL_LINKS.map((link) => (
              <li key={link.to}>
                <Link
                  href={link.to}
                  className="transition-colors hover:text-gold-light"
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
          <p className="mt-6 text-xs text-ivory/50">
            © {new Date().getFullYear()} {SITE.name}. {t('footer.rights')}
          </p>
          <p className="mt-2 text-xs text-ivory/40">{SITE.license}</p>
        </div>
      </div>
    </footer>
  );
}
