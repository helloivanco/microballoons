import Image from 'next/image';
import Link from 'next/link';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Sac Pig Bait Co.',
  description:
    'Sac Pig Bait Co. — handcrafted baits and tools for anglers who demand quality.',
};

export default function HomePage() {
  return (
    <main className='min-h-screen bg-slate-50'>
      <section className='mx-auto flex w-full max-w-6xl flex-col items-center gap-10 px-6 py-20 text-center lg:px-12'>
        <Image
          src='/logo.webp'
          alt='Sac Pig Bait Co. logo'
          width={180}
          height={180}
          priority
          className='h-44 w-44 object-contain'
        />
        <div className='flex flex-col gap-4'>
          <h1 className='text-4xl font-semibold tracking-tight text-slate-950 sm:text-6xl'>
            Sac Pig Bait Co.
          </h1>
          <p className='mx-auto max-w-2xl text-lg leading-relaxed text-slate-600'>
            Welcome. Content coming soon.
          </p>
        </div>
        <div className='flex flex-wrap items-center justify-center gap-3'>
          <Link
            href='/shop'
            className='rounded-full bg-slate-900 px-6 py-3 text-sm font-semibold text-white shadow-sm transition hover:bg-slate-800'>
            Visit the Shop
          </Link>
          <Link
            href='/calculator'
            className='rounded-full border border-slate-300 bg-white px-6 py-3 text-sm font-semibold text-slate-900 transition hover:border-slate-400'>
            Open the Calculator
          </Link>
        </div>
      </section>
    </main>
  );
}
