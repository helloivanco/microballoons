import Image from 'next/image';
import Link from 'next/link';

const NAV_LINKS = [
  { href: '/', label: 'Home' },
  { href: '/shop', label: 'Shop' },
  { href: '/calculator', label: 'Calculator' },
  { href: '/faq', label: 'FAQ' },
  { href: '/contact', label: 'Contact' },
];

export default function Nav() {
  return (
    <header className='sticky top-0 z-40 w-full border-b border-slate-200 bg-white/80 backdrop-blur'>
      <nav
        aria-label='Primary'
        className='mx-auto flex w-full max-w-6xl items-center justify-between gap-6 px-6 py-4 lg:px-12'>
        <Link
          href='/'
          className='flex items-center gap-3 text-slate-900 transition hover:opacity-80'>
          <Image
            src='/logo.webp'
            alt='Sac Pig Bait Co. logo'
            width={40}
            height={40}
            className='h-10 w-10 object-contain'
            priority
          />
          <span className='text-base font-semibold tracking-tight sm:text-lg'>
            Sac Pig Bait Co.
          </span>
        </Link>
        <ul className='flex flex-wrap items-center gap-1 text-sm font-medium text-slate-700 sm:gap-2'>
          {NAV_LINKS.map(({ href, label }) => (
            <li key={href}>
              <Link
                href={href}
                className='rounded-full px-3 py-2 transition hover:bg-slate-100 hover:text-slate-900'>
                {label}
              </Link>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
}
