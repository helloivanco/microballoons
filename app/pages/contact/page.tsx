import type { Metadata } from 'next';
import { Mail } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Contact',
  description:
    'Get in touch with Microballoons.com for questions about premium silane-coated glass microballoons, orders, or wholesale inquiries.',
  alternates: { canonical: '/pages/contact' },
  openGraph: {
    title: 'Contact Microballoons.com',
    description:
      'Have a question about premium microballoons? Send us an email and we will get back to you.',
    url: '/pages/contact',
  },
};

const CONTACT_EMAIL = 'sacpigbaitco@gmail.com';

export default function ContactPage() {
  return (
    <main className='relative min-h-screen overflow-hidden bg-slate-50'>
      <div className='absolute inset-0'>
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src='/microscope.webp'
          alt=''
          decoding='async'
          className='absolute inset-0 h-full w-full object-cover opacity-30'
        />
        <div className='absolute inset-0 bg-gradient-to-b from-white/35 via-white/75 to-white' />
      </div>

      <section className='relative z-10 mx-auto flex w-full max-w-2xl flex-col items-center gap-8 px-6 py-20 text-center lg:px-12'>
        <div className='flex flex-col gap-4'>
          <h1 className='text-4xl font-semibold tracking-tight text-slate-950 sm:text-5xl'>
            Get in Touch
          </h1>
          <p className='text-lg leading-relaxed text-slate-600'>
            Questions about mixing ratios, bulk orders, or just want to talk
            shop? We&apos;re real people and we answer every email.
          </p>
        </div>

        <a
          href={`mailto:${CONTACT_EMAIL}`}
          className='inline-flex items-center gap-2 rounded-full bg-slate-900 px-7 py-4 text-base font-semibold text-white shadow-sm transition hover:bg-slate-800'>
          <Mail size={20} aria-hidden='true' />
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
