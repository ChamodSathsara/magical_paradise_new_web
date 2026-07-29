'use client';

import { useMemo, useState } from 'react';
import { PageHero } from '../components/ui/PageHero';
import { ProductCard } from '../components/cards/ProductCard';
import { Reveal } from '../components/ui/Reveal';
import { PRODUCTS, PRODUCT_CATEGORIES, SHOP_IMAGE } from '../data/products';
import { useLanguage } from '../i18n/LanguageProvider';

export function Shop() {
  const { t } = useLanguage();
  const [category, setCategory] = useState<(typeof PRODUCT_CATEGORIES)[number]>('All');
  const products = useMemo(
    () => category === 'All' ? PRODUCTS : PRODUCTS.filter((product) => product.category === category),
    [category],
  );

  return (
    <>
      <PageHero
        eyebrow={t('shop.eyebrow')}
        title={t('shop.title')}
        subtitle={t('shop.subtitle')}
        image={SHOP_IMAGE}
        imageAlt="A curated collection of island-inspired apparel and accessories"
        locationTag={t('shop.location')}
      />
      <section className="sticky top-[73px] z-30 border-b border-jungle/10 bg-ivory/95 backdrop-blur-md">
        <div className="no-scrollbar mx-auto flex max-w-content gap-2 overflow-x-auto px-6 py-4">
          {PRODUCT_CATEGORIES.map((item) => (
            <button
              key={item}
              type="button"
              onClick={() => setCategory(item)}
              className={`shrink-0 rounded-full px-5 py-2.5 text-[11px] uppercase tracking-[0.14em] transition-colors ${
                category === item ? 'bg-jungle text-ivory' : 'text-jungle-muted hover:bg-sand hover:text-jungle'
              }`}
            >
              {item === 'All' ? t('shop.all') : item}
            </button>
          ))}
        </div>
      </section>
      <section className="bg-ivory py-16 lg:py-24">
        <div className="mx-auto max-w-content px-6">
          <div className="flex items-end justify-between gap-5">
            <div>
              <p className="eyebrow text-gold-dark">{t('shop.curated')}</p>
              <h2 className="mt-3 font-serif text-3xl font-light text-jungle sm:text-4xl">{category === 'All' ? t('shop.all') : category}</h2>
            </div>
            <p className="text-xs uppercase tracking-[0.14em] text-jungle-muted">{products.length} {t('shop.items')}</p>
          </div>
          <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {products.map((product, index) => (
              <Reveal key={product.id} delay={index * 0.05}>
                <ProductCard product={product} />
              </Reveal>
            ))}
          </div>
        </div>
      </section>
      <section className="bg-sand py-16">
        <div className="mx-auto max-w-3xl px-6 text-center">
          <p className="eyebrow text-gold-dark">{t('shop.meaning')}</p>
          <h2 className="mt-4 font-serif text-3xl text-jungle sm:text-4xl">{t('shop.paradise')}</h2>
          <p className="mx-auto mt-4 max-w-2xl text-sm leading-7 text-jungle-muted">
            {t('shop.story')}
          </p>
        </div>
      </section>
    </>
  );
}
