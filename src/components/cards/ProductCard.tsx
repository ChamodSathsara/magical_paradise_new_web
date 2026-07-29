import Link from 'next/link';
import { ArrowUpRightIcon } from 'lucide-react';
import { Product, SHOP_IMAGE, formatPrice } from '../../data/products';

export function ProductCard({ product }: { product: Product }) {
  return (
    <Link href={`/shop/${product.id}`} className="group block overflow-hidden rounded-lg border border-jungle/10 bg-white shadow-card">
      <div className="relative aspect-[4/5] overflow-hidden bg-sand">
        <img
          src={SHOP_IMAGE}
          alt={product.name}
          className="h-full w-full scale-[1.7] object-cover transition-transform duration-700 group-hover:scale-[1.78]"
          style={{ objectPosition: product.imagePosition }}
        />
        {product.badge && (
          <span className="absolute left-4 top-4 rounded-full bg-jungle px-3 py-1.5 text-[10px] uppercase tracking-[0.14em] text-ivory">
            {product.badge}
          </span>
        )}
      </div>
      <div className="p-5">
        <p className="text-[10px] uppercase tracking-[0.18em] text-gold-dark">{product.category}</p>
        <div className="mt-2 flex items-start justify-between gap-4">
          <div>
            <h2 className="font-serif text-2xl text-jungle">{product.name}</h2>
            <p className="mt-2 text-sm font-medium text-jungle-muted">{formatPrice(product.price)}</p>
          </div>
          <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full border border-jungle/15 text-jungle transition-colors group-hover:bg-jungle group-hover:text-ivory">
            <ArrowUpRightIcon className="h-4 w-4" aria-hidden="true" />
          </span>
        </div>
      </div>
    </Link>
  );
}
