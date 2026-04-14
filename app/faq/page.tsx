import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'FAQ | Microballoons.com',
  description: 'Frequently asked questions about Microballoons.com products.',
};

export default function FaqPage() {
  return (
    <main className='min-h-screen bg-slate-50'>
      <section className='mx-auto flex w-full max-w-4xl flex-col gap-6 px-6 py-20 lg:px-12'>
        <h1 className='text-4xl font-semibold tracking-tight text-slate-950 sm:text-5xl'>
          Frequently Asked Questions
        </h1>
        <p className='max-w-2xl text-lg leading-relaxed text-slate-600'>
          Answers coming soon.
        </p>
      </section>
    </main>
  );
}
