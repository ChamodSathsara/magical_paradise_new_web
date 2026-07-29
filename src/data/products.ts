export type Product = {
  id: string;
  name: string;
  category: 'T-Shirts' | 'Caps & Hats' | 'Jewellery' | 'Accessories';
  price: number;
  description: string;
  details: string[];
  options?: string[];
  imagePosition: string;
  badge?: string;
};

export const SHOP_IMAGE = '/images/shop/collection.png';

export const PRODUCTS: Product[] = [
  {
    id: 'island-essentials-tee',
    name: 'Island Essentials Tee',
    category: 'T-Shirts',
    price: 5900,
    description: 'A soft, breathable everyday tee inspired by slow island mornings.',
    details: ['Premium 220gsm cotton', 'Relaxed unisex fit', 'Locally finished in Sri Lanka'],
    options: ['XS', 'S', 'M', 'L', 'XL'],
    imagePosition: '18% 44%',
    badge: 'Best seller',
  },
  {
    id: 'jungle-trail-cap',
    name: 'Jungle Trail Cap',
    category: 'Caps & Hats',
    price: 4500,
    description: 'A classic six-panel cap in our signature deep jungle green.',
    details: ['Brushed cotton twill', 'Adjustable brass clasp', 'Embroidered island motif'],
    options: ['One size'],
    imagePosition: '68% 18%',
    badge: 'New',
  },
  {
    id: 'island-pendant',
    name: 'Island Pendant',
    category: 'Jewellery',
    price: 7800,
    description: 'A delicate keepsake shaped by the contours of our island home.',
    details: ['Gold-toned stainless steel', 'Adjustable 40–45cm chain', 'Gift pouch included'],
    imagePosition: '51% 76%',
  },
  {
    id: 'handwoven-travel-wrap',
    name: 'Handwoven Travel Wrap',
    category: 'Accessories',
    price: 6900,
    description: 'A lightweight, versatile layer woven in warm natural tones.',
    details: ['Soft cotton-linen blend', 'Hand-finished fringe', 'Made with artisan partners'],
    imagePosition: '87% 69%',
  },
];

export const PRODUCT_CATEGORIES = ['All', 'T-Shirts', 'Caps & Hats', 'Jewellery', 'Accessories'] as const;

export function getProduct(id: string) {
  return PRODUCTS.find((product) => product.id === id);
}

export function formatPrice(price: number) {
  return new Intl.NumberFormat('en-LK', {
    style: 'currency',
    currency: 'LKR',
    maximumFractionDigits: 0,
  }).format(price);
}
