import type { Metadata } from 'next';
import ProductCard from '../../components/ProductCard';
import { PRODUCTS } from '../../data/products';

export const metadata: Metadata = {
  title: 'Shop',
  description:
    'Shop premium silane-coated glass microballoons in 1-quart, 5-quart, 5-gallon, and 18 kg sizes. From SacPig Bait Co.',
  alternates: { canonical: '/collections/all' },
  openGraph: {
    title: 'Shop Premium Microballoons',
    description:
      'Shop premium silane-coated microballoons and the SacPig Microballoon sticker.',
    url: '/collections/all',
    images: [{ url: '/logo-whitebk.webp', alt: 'Microballoons.com' }],
  },
};

export default function ShopPage() {
  return (
    <main className='min-h-screen bg-slate-50'>
      <section className='mx-auto flex w-full max-w-6xl flex-col gap-8 px-6 py-16 lg:px-12'>
        <h1 className='text-4xl font-semibold tracking-tight text-slate-950 sm:text-5xl'>
          Shop
        </h1>
        <p className='max-w-2xl text-lg leading-relaxed text-slate-600'>
          Microballoons.com products are available for purchase directly on
          SacPig.com.
        </p>

        <div className='grid gap-6 sm:grid-cols-2 xl:grid-cols-3'>
          {PRODUCTS.map((product) => (
            <ProductCard key={product.handle} product={product} />
          ))}
        </div>
      </section>
    </main>
  );
}
