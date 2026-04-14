import Link from 'next/link';

export default function NotFound() {
  return (
    <main className='relative flex min-h-[60vh] flex-col items-center justify-center gap-6 px-6 text-center'>
      <div className='absolute inset-0'>
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src='/got-loons-2.webp'
          alt=''
          decoding='async'
          className='absolute inset-0 h-full w-full object-cover object-[center_18%] opacity-30'
        />
        <div className='absolute inset-0 bg-gradient-to-b from-white/40 via-white/70 to-white' />
      </div>
      <div className='relative z-10 flex flex-col items-center gap-6'>
        <h1 className='text-6xl font-bold tracking-tight text-slate-950'>404</h1>
        <p className='max-w-md text-lg text-slate-600'>
          The page you&apos;re looking for doesn&apos;t exist or has been moved.
        </p>
        <div className='flex flex-wrap items-center justify-center gap-3'>
          <Link
            href='/'
            className='rounded-full bg-slate-900 px-6 py-3 text-sm font-semibold text-white transition hover:bg-slate-800'>
            Go Home
          </Link>
          <Link
            href='/collections/all'
            className='rounded-full border border-slate-300 bg-white px-6 py-3 text-sm font-semibold text-slate-900 transition hover:border-slate-400'>
            Shop Products
          </Link>
          <Link
            href='/pages/microballoons-com-faq'
            className='rounded-full border border-slate-300 bg-white px-6 py-3 text-sm font-semibold text-slate-900 transition hover:border-slate-400'>
            FAQ
          </Link>
        </div>
      </div>
    </main>
  );
}
