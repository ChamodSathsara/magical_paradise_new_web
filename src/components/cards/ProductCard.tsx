import Image from 'next/image';
import Link from 'next/link';
import { ArrowUpRightIcon } from 'lucide-react';
import { Product, formatPrice } from '../../data/products';

export function ProductCard({ product }: { product: Product }) {
  return <Link href={`/shop/${product.id}`} className="group block overflow-hidden rounded-xl border border-jungle/10 bg-white shadow-card">
    <div className="relative aspect-[4/5] overflow-hidden bg-sand">
      <Image src={product.images[0]} alt={product.name} fill sizes="(min-width:1024px) 33vw,(min-width:640px) 50vw,100vw" className="object-cover transition-transform duration-700 group-hover:scale-[1.03]" />
      {product.badge && <span className="absolute left-4 top-4 rounded-full bg-jungle px-3 py-1.5 text-[10px] uppercase tracking-[.14em] text-ivory">{product.badge}</span>}
      {product.colors && <div className="absolute bottom-4 left-4 flex gap-2">{product.colors.map(color => <span key={color} title={color} className={`h-5 w-5 rounded-full border-2 border-white shadow ${color === 'Blue' ? 'bg-blue-700' : color === 'Green' ? 'bg-green-700' : 'bg-white'}`} />)}</div>}
    </div>
    <div className="p-6"><p className="text-[10px] uppercase tracking-[.18em] text-gold-dark">{product.category}</p><div className="mt-2 flex items-start justify-between gap-4"><div><h2 className="font-serif text-2xl leading-tight text-jungle">{product.name}</h2><p className="mt-3 text-base font-semibold text-jungle">{formatPrice(product.price)}</p></div><span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full border border-jungle/15 text-jungle transition group-hover:bg-jungle group-hover:text-ivory"><ArrowUpRightIcon className="h-4 w-4" /></span></div></div>
  </Link>;
}
