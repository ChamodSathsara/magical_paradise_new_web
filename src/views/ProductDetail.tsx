'use client';

import { FormEvent, useMemo, useState } from 'react';
import Link from 'next/link';
import { CheckIcon, ChevronLeftIcon, MapPinIcon, MessageCircleIcon, MinusIcon, PlusIcon, ShieldCheckIcon, TruckIcon } from 'lucide-react';
import { Product, SHOP_IMAGE, formatPrice } from '../data/products';
import { SITE } from '../data/site';

export function ProductDetail({ product }: { product: Product }) {
  const [quantity, setQuantity] = useState(1);
  const [option, setOption] = useState(product.options?.[0] ?? '');
  const [form, setForm] = useState({ name: '', phone: '', address: '', city: '', country: '', notes: '' });
  const isReady = useMemo(
    () => Boolean(form.name.trim() && form.phone.trim() && form.address.trim() && form.city.trim() && form.country.trim() && (!product.options || option)),
    [form, option, product.options],
  );

  const update = (field: keyof typeof form, value: string) => setForm((current) => ({ ...current, [field]: value }));

  const purchase = (event: FormEvent) => {
    event.preventDefault();
    if (!isReady) return;
    const message = [
      'Hello Magical Paradise, I would like to order:',
      '',
      `Item: ${product.name}`,
      product.options ? `Option / Size: ${option}` : '',
      `Quantity: ${quantity}`,
      `Price: ${formatPrice(product.price * quantity)}`,
      '',
      'Customer & delivery details:',
      `Name: ${form.name}`,
      `Phone: ${form.phone}`,
      `Address: ${form.address}`,
      `City: ${form.city}`,
      `Country: ${form.country}`,
      form.notes ? `Notes: ${form.notes}` : '',
    ].filter(Boolean).join('\n');
    window.open(`${SITE.whatsapp}?text=${encodeURIComponent(message)}`, '_blank', 'noopener,noreferrer');
  };

  const inputClass = 'mt-2 w-full rounded-lg border border-jungle/15 bg-ivory px-4 py-3 text-sm text-jungle outline-none transition focus:border-gold focus:ring-2 focus:ring-gold/15';

  return (
    <main className="bg-ivory pb-20 pt-28 lg:pb-28">
      <div className="mx-auto max-w-content px-6">
        <Link href="/shop" className="inline-flex items-center gap-2 text-[11px] uppercase tracking-[0.15em] text-jungle-muted hover:text-jungle">
          <ChevronLeftIcon className="h-4 w-4" /> Back to shop
        </Link>
        <div className="mt-8 grid gap-12 lg:grid-cols-[1.05fr_.95fr] lg:gap-16">
          <div>
            <div className="sticky top-28 overflow-hidden rounded-lg bg-sand">
              <div className="aspect-[4/5] overflow-hidden">
                <img src={SHOP_IMAGE} alt={product.name} className="h-full w-full scale-[1.65] object-cover" style={{ objectPosition: product.imagePosition }} />
              </div>
              <div className="grid grid-cols-3 gap-px bg-jungle/10">
                {[0, 1, 2].map((item) => (
                  <button key={item} type="button" className="aspect-square overflow-hidden bg-sand" aria-label={`View ${item + 1} of ${product.name}`}>
                    <img src={SHOP_IMAGE} alt="" className="h-full w-full scale-[1.8] object-cover opacity-90 transition hover:opacity-100" style={{ objectPosition: product.imagePosition }} />
                  </button>
                ))}
              </div>
            </div>
          </div>
          <div>
            <p className="eyebrow text-gold-dark">{product.category}</p>
            <h1 className="mt-3 font-serif text-4xl font-light text-jungle sm:text-5xl">{product.name}</h1>
            <p className="mt-5 font-serif text-3xl text-jungle">{formatPrice(product.price)}</p>
            <p className="mt-6 max-w-xl text-[15px] leading-7 text-jungle-muted">{product.description}</p>
            <ul className="mt-6 space-y-3">
              {product.details.map((detail) => (
                <li key={detail} className="flex items-center gap-3 text-sm text-jungle-muted">
                  <CheckIcon className="h-4 w-4 text-gold-dark" /> {detail}
                </li>
              ))}
            </ul>

            <form onSubmit={purchase} className="mt-10 border-t border-jungle/10 pt-8">
              <div className="grid gap-6 sm:grid-cols-2">
                {product.options && (
                  <label className="text-xs font-medium uppercase tracking-[0.12em] text-jungle">
                    Size / Option *
                    <select value={option} onChange={(event) => setOption(event.target.value)} className={inputClass}>
                      {product.options.map((item) => <option key={item}>{item}</option>)}
                    </select>
                  </label>
                )}
                <div>
                  <span className="text-xs font-medium uppercase tracking-[0.12em] text-jungle">Quantity</span>
                  <div className="mt-2 flex h-[46px] w-fit items-center rounded-lg border border-jungle/15 bg-ivory">
                    <button type="button" onClick={() => setQuantity((value) => Math.max(1, value - 1))} className="px-4 text-jungle" aria-label="Decrease quantity"><MinusIcon className="h-4 w-4" /></button>
                    <span className="min-w-8 text-center text-sm font-medium">{quantity}</span>
                    <button type="button" onClick={() => setQuantity((value) => Math.min(20, value + 1))} className="px-4 text-jungle" aria-label="Increase quantity"><PlusIcon className="h-4 w-4" /></button>
                  </div>
                </div>
              </div>

              <div className="mt-9 rounded-lg border border-jungle/10 bg-white p-6 shadow-card sm:p-7">
                <div className="flex items-start gap-3">
                  <MapPinIcon className="mt-1 h-5 w-5 text-gold-dark" />
                  <div>
                    <h2 className="font-serif text-2xl text-jungle">Customer & delivery details</h2>
                    <p className="mt-1 text-xs leading-5 text-jungle-muted">Complete all required fields to enable your WhatsApp order.</p>
                  </div>
                </div>
                <div className="mt-6 grid gap-5 sm:grid-cols-2">
                  <label className="text-xs text-jungle-muted">Full name *<input required value={form.name} onChange={(e) => update('name', e.target.value)} className={inputClass} /></label>
                  <label className="text-xs text-jungle-muted">Phone number *<input required type="tel" value={form.phone} onChange={(e) => update('phone', e.target.value)} className={inputClass} /></label>
                  <label className="text-xs text-jungle-muted sm:col-span-2">Delivery address *<input required value={form.address} onChange={(e) => update('address', e.target.value)} className={inputClass} /></label>
                  <label className="text-xs text-jungle-muted">City / Region *<input required value={form.city} onChange={(e) => update('city', e.target.value)} className={inputClass} /></label>
                  <label className="text-xs text-jungle-muted">Country *<input required value={form.country} onChange={(e) => update('country', e.target.value)} className={inputClass} /></label>
                  <label className="text-xs text-jungle-muted sm:col-span-2">Order notes (optional)<textarea rows={3} value={form.notes} onChange={(e) => update('notes', e.target.value)} className={`${inputClass} resize-none`} /></label>
                </div>
              </div>

              <div className="mt-6 rounded-lg bg-jungle p-6 text-ivory">
                <div className="flex items-center justify-between gap-4">
                  <span className="text-sm text-ivory/70">Order total</span>
                  <strong className="font-serif text-2xl font-normal text-gold-light">{formatPrice(product.price * quantity)}</strong>
                </div>
                <button
                  type="submit"
                  disabled={!isReady}
                  className="mt-5 flex w-full items-center justify-center gap-2 rounded-full bg-gold px-6 py-4 text-xs font-semibold uppercase tracking-[0.15em] text-jungle-deep transition enabled:hover:bg-gold-light disabled:cursor-not-allowed disabled:opacity-35"
                >
                  <MessageCircleIcon className="h-4 w-4" /> Purchase via WhatsApp
                </button>
                {!isReady && <p className="mt-3 text-center text-[11px] text-ivory/55">Add your customer and delivery details to continue.</p>}
              </div>
            </form>
            <div className="mt-6 grid gap-3 text-xs text-jungle-muted sm:grid-cols-2">
              <p className="flex items-center gap-2"><ShieldCheckIcon className="h-4 w-4 text-gold-dark" /> Personally confirmed order</p>
              <p className="flex items-center gap-2"><TruckIcon className="h-4 w-4 text-gold-dark" /> Delivery arranged on WhatsApp</p>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
