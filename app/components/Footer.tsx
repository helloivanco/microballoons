import Image from 'next/image';
import Link from 'next/link';

const FOOTER_LINKS = [
  { href: '/', label: 'Home' },
  { href: '/shop', label: 'Shop' },
  { href: '/calculator', label: 'Calculator' },
  { href: '/faq', label: 'FAQ' },
  { href: '/contact', label: 'Contact' },
];

export default function Footer() {
  return (
    <footer className='border-t border-slate-200 bg-white'>
      <div className='mx-auto flex w-full max-w-6xl flex-col gap-8 px-4 py-10 sm:px-6 lg:px-12'>
        <div className='flex flex-col gap-8 md:flex-row md:items-start md:justify-between'>
          <div className='flex items-center gap-3'>
            <Image
              src='/logo.webp'
              alt=''
              width={40}
              height={40}
              className='h-10 w-10 object-contain'
            />
            <span className='text-base font-semibold tracking-tight text-slate-900'>
              Microballoons<span className='text-slate-500'>.com</span>
            </span>
          </div>

          <nav aria-label='Footer'>
            <ul className='flex flex-wrap gap-x-5 gap-y-2 text-sm font-medium text-slate-600'>
              {FOOTER_LINKS.map(({ href, label }) => (
                <li key={href}>
                  <Link href={href} className='transition hover:text-slate-900'>
                    {label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          <div className='text-sm text-slate-600'>
            <p className='font-semibold text-slate-900'>Get in touch</p>
            <a
              href='mailto:sacpigbaitco@gmail.com'
              className='transition hover:text-slate-900'>
              sacpigbaitco@gmail.com
            </a>
          </div>
        </div>

        <p className='text-xs text-slate-500'>
          &copy; {new Date().getFullYear()} Microballoons.com. All rights
          reserved.
        </p>
      </div>
    </footer>
  );
}
