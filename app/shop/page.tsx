import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Shop | Sac Pig Bait Co.',
  description: 'Browse products from Sac Pig Bait Co.',
};

export default function ShopPage() {
  return (
    <main className='min-h-screen bg-slate-50'>
      <section className='mx-auto flex w-full max-w-6xl flex-col gap-6 px-6 py-20 lg:px-12'>
        <h1 className='text-4xl font-semibold tracking-tight text-slate-950 sm:text-5xl'>
          Shop
        </h1>
        <p className='max-w-2xl text-lg leading-relaxed text-slate-600'>
          Products coming soon.
        </p>
      </section>
    </main>
  );
}
