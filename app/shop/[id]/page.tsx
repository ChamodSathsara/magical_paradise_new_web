import { notFound } from 'next/navigation';
import { ProductDetail } from '../../../src/views/ProductDetail';
import { PRODUCTS, getProduct } from '../../../src/data/products';

export function generateStaticParams() {
  return PRODUCTS.map((product) => ({ id: product.id }));
}

export default function ProductPage({ params }: { params: { id: string } }) {
  const product = getProduct(params.id);
  if (!product) notFound();
  return <ProductDetail product={product} />;
}
