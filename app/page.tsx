import Link from 'next/link';
import { Bebas_Neue } from 'next/font/google';
import type { Metadata } from 'next';
import HomeHeroMedia from './components/HomeHeroMedia';
import ProductCard from './components/ProductCard';
import { PRODUCTS } from './data/products';

const bebasNeue = Bebas_Neue({
  weight: '400',
  subsets: ['latin'],
});

export const metadata: Metadata = {
  title: 'Microballoons.com — Premium Silane-Coated Glass Microspheres',
  description:
    'Premium silane-coated glass microballoons for resin baits, model building, and lightweight filler mixes. Stronger bonding, easier sanding, flawless finish.',
  alternates: { canonical: '/' },
  openGraph: {
    title: 'Microballoons.com — Premium Silane-Coated Glass Microspheres',
    description:
      'Premium silane-coated glass microballoons for resin baits, model building, and lightweight filler mixes.',
    url: '/',
  },
};

export default function HomePage() {
  return (
    <main className='min-h-screen bg-slate-50'>
      <section className='relative w-full overflow-hidden bg-black'>
        <div className='relative h-[62vh] min-h-[360px] w-full sm:h-[70vh] lg:h-[78vh]'>
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src='/got-loons-2.webp'
            alt='Need some loons? Microballoons.com hero artwork'
            decoding='async'
            className='absolute inset-0 h-full w-full object-cover object-[center_18%]'
          />
          <div className='absolute inset-0 bg-gradient-to-b from-black/35 via-black/10 to-slate-50' />
          <div className='absolute inset-x-0 bottom-[10%] z-10 px-6 text-center lg:px-12'>
            <p
              className={`${bebasNeue.className} text-4xl font-bold tracking-[0.06em] text-black drop-shadow-[0_6px_24px_rgba(0,0,0,0.15)] sm:text-6xl md:text-7xl lg:text-8xl`}>
              Need Some Loons?
            </p>
          </div>
        </div>
      </section>

      <section className='mx-auto flex w-full max-w-6xl flex-col items-center gap-10 px-6 py-16 text-center lg:px-12'>
        <div className='flex flex-col gap-4'>
          <p className='text-sm font-semibold uppercase tracking-[0.22em] text-slate-500'>
            Premium Microballoons
          </p>
          <h1 className='text-3xl font-semibold tracking-tight text-slate-950 sm:text-5xl lg:text-6xl'>
            Smoother. Stronger. Better.
          </h1>
          <p className='mx-auto max-w-2xl text-lg leading-relaxed text-slate-600'>
            Premium microballoons, also known as glass microspheres or micro
            balloons, offer exceptional versatility and quality.
          </p>
        </div>
        <div className='flex flex-wrap items-center justify-center gap-3'>
          <Link
            href='/collections/all'
            className='rounded-full bg-slate-900 px-6 py-3 text-sm font-semibold text-white shadow-sm transition hover:bg-slate-800'>
            Buy Now
          </Link>
        </div>

        <p className='text-sm font-medium uppercase tracking-[0.2em] text-slate-400'>
          See why
        </p>
        <div className='w-full max-w-4xl'>
          <HomeHeroMedia />
        </div>
      </section>

      <section className='mx-auto flex w-full max-w-6xl flex-col gap-8 px-6 pb-20 lg:px-12'>
        <div className='flex flex-wrap items-center justify-between gap-3'>
          <h2 className='text-2xl font-semibold tracking-tight text-slate-950 sm:text-3xl lg:text-4xl'>
            Featured Products
          </h2>
          <Link
            href='/collections/all'
            className='rounded-full border border-slate-300 bg-white px-5 py-2.5 text-sm font-semibold text-slate-900 transition hover:border-slate-400'>
            View All
          </Link>
        </div>

        <div className='grid gap-6 sm:grid-cols-2 xl:grid-cols-3'>
          {PRODUCTS.map((product) => (
            <ProductCard key={product.handle} product={product} />
          ))}
        </div>
      </section>
    </main>
  );
}
