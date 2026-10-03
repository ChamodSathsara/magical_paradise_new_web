export type Product = {
  id: string;
  name: string;
  category: 'T-Shirts' | 'Tote Bags';
  price: number;
  description: string;
  details: string[];
  images: string[];
  colors?: string[];
  sizes?: string[];
  sizeChart?: string;
  badge?: string;
};

const imageRoot = '/images/shop/tshirt-item-images';
export const SHOP_IMAGE = `${imageRoot}/Blue Front.jpg`;

export const PRODUCTS: Product[] = [
  {
    id: 'magical-paradise-adult-tshirt', name: 'Magical Paradise T-Shirt', category: 'T-Shirts', price: 25,
    description: 'A comfortable island-inspired T-shirt designed for everyday adventures and memories of Sri Lanka.',
    details: ['Adult / general sizing', 'Available in blue, green and white', 'Front and back printed design', 'Lightweight everyday wear'],
    images: [`${imageRoot}/Blue Front.jpg`, `${imageRoot}/Blue Back.jpg`, `${imageRoot}/Green Front.jpg`, `${imageRoot}/Green Back.jpg`, `${imageRoot}/White Front.jpg`, `${imageRoot}/White Back.jpg`],
    colors: ['Blue', 'Green', 'White'], sizes: ['XXS', 'S', 'M', 'L', 'XL', '2XL', '3XL', '4XL'],
    sizeChart: '/images/shop/tshirt-sizes/general-sizes.jpeg', badge: 'Three colours',
  },
  {
    id: 'magical-paradise-kids-tshirt', name: 'Magical Paradise Kids T-Shirt', category: 'T-Shirts', price: 20,
    description: 'A colourful and comfortable souvenir tee made for young explorers discovering the magic of Sri Lanka.',
    details: ['Kids sizing for ages 1–13', 'Available in blue, green and white', 'Front and back printed design', 'Soft and comfortable fit'],
    images: [`${imageRoot}/Blue Front Girl.jpg`, `${imageRoot}/Blue Back Girl.jpg`, `${imageRoot}/Green Front Girl.jpg`, `${imageRoot}/Green Back Girl.jpg`, `${imageRoot}/White Front Girl.jpg`, `${imageRoot}/White Back Girl.jpg`],
    colors: ['Blue', 'Green', 'White'], sizes: ['Kids XS', 'Kids S', 'Kids M', 'Kids L', 'Kandy 2XS', 'Kandy XS', 'Kandy S', 'Kandy M'],
    sizeChart: '/images/shop/tshirt-sizes/kids-sizes.jpeg', badge: 'Kids',
  },
  {
    id: 'magical-paradise-tote-bag', name: 'Magical Paradise Tote Bag', category: 'Tote Bags', price: 15,
    description: 'A practical reusable tote for beach days, market visits and carrying a little piece of paradise wherever you go.',
    details: ['Reusable everyday bag', 'Comfortable shoulder handles', 'Printed Magical Paradise design', 'One size'],
    images: ['/images/shop/bag image/bag-image.jpeg'], badge: 'Travel essential',
  },
];

export const PRODUCT_CATEGORIES = ['All', 'T-Shirts', 'Tote Bags'] as const;
export function getProduct(id: string) { return PRODUCTS.find((product) => product.id === id); }
export function formatPrice(price: number) { return new Intl.NumberFormat('en-US', { style: 'currency', currency: 'USD', maximumFractionDigits: 0 }).format(price); }
