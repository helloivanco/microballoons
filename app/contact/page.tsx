import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Contact | Microballoons.com',
  description: 'Get in touch with Microballoons.com.',
};

const CONTACT_EMAIL = 'sacpigbaitco@gmail.com';

export default function ContactPage() {
  return (
    <main className='min-h-screen bg-slate-50'>
      <section className='mx-auto flex w-full max-w-2xl flex-col items-center gap-8 px-6 py-20 text-center lg:px-12'>
        <div className='flex flex-col gap-4'>
          <h1 className='text-4xl font-semibold tracking-tight text-slate-950 sm:text-5xl'>
            Contact
          </h1>
          <p className='text-lg leading-relaxed text-slate-600'>
            Have a question? Send us an email and we&apos;ll get back to you.
          </p>
        </div>

        <a
          href={`mailto:${CONTACT_EMAIL}`}
          className='inline-flex items-center gap-2 rounded-full bg-slate-900 px-7 py-4 text-base font-semibold text-white shadow-sm transition hover:bg-slate-800'>
          <svg
            viewBox='0 0 24 24'
            width='20'
            height='20'
            fill='none'
            stroke='currentColor'
            strokeWidth='2'
            strokeLinecap='round'
            strokeLinejoin='round'
            aria-hidden='true'>
            <rect x='3' y='5' width='18' height='14' rx='2' />
            <path d='m3 7 9 6 9-6' />
          </svg>
          Email Us
        </a>

        <p className='text-sm text-slate-500'>
          Or write to us directly at{' '}
          <a
            href={`mailto:${CONTACT_EMAIL}`}
            className='font-medium text-slate-900 underline underline-offset-4'>
            {CONTACT_EMAIL}
          </a>
        </p>
      </section>
    </main>
  );
}
