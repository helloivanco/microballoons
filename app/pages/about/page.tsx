import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'About',
  description:
    'Learn how Microballoons.com started and why our premium silane-coated glass microballoons were developed for bait making and beyond.',
  alternates: { canonical: '/pages/about' },
  openGraph: {
    title: 'About Microballoons.com',
    description:
      'Learn how Microballoons.com started and why our premium silane-coated glass microballoons were developed.',
    url: '/pages/about',
  },
};

export default function AboutPage() {
  return (
    <main className='min-h-screen bg-slate-50'>
      <section className='mx-auto flex w-full max-w-5xl flex-col gap-8 px-6 py-16 lg:px-12'>
        <header className='space-y-4'>
          <h1 className='text-3xl font-semibold tracking-tight text-slate-950 sm:text-5xl'>
            About Microballoons.com
          </h1>
          <p className='max-w-3xl text-lg leading-relaxed text-slate-600'>
            Built from real-world bait making frustration into a better standard
            for makers.
          </p>
        </header>

        <article className='overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm'>
          <div className='grid gap-0 lg:grid-cols-2'>
            <div className='relative min-h-72 bg-slate-100'>
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src='/about-mixing.webp'
                alt='Mixing microballoons into resin'
                decoding='async'
                className='absolute inset-0 h-full w-full object-cover'
              />
            </div>

            <div className='space-y-5 p-6 sm:p-8'>
              <p className='leading-relaxed text-slate-700'>
                Microballoons.com was born out of a simple frustration. While
                crafting resin lures for{' '}
                <a
                  href='https://sacpig.com'
                  title='SacPig Bait Co.'
                  target='_blank'
                  rel='noopener noreferrer'
                  className='font-semibold text-slate-900 underline decoration-slate-300 underline-offset-2 transition hover:decoration-slate-500'>
                  SacPig Bait Co.
                </a>
                , founder Michael Mcamis found that off-the-shelf fillers were
                messy, weak, and inconsistent.
              </p>
              <p className='leading-relaxed text-slate-700'>
                He didn&apos;t just want a better bait; he wanted a better
                material. After extensive testing, Michael discovered a premium,
                silane-coated glass microballoon that redefined the standard.
                What started as an in-house secret for professional lures is
                now available to every maker who demands superior strength,
                easier sanding, and a flawless finish.
              </p>
            </div>
          </div>
        </article>
      </section>
    </main>
  );
}
