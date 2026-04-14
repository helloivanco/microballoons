'use client';

import Image from 'next/image';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useEffect, useState } from 'react';

const NAV_LINKS = [
  { href: '/', label: 'Home' },
  { href: '/shop', label: 'Shop' },
  { href: '/calculator', label: 'Calculator' },
  { href: '/faq', label: 'FAQ' },
  { href: '/contact', label: 'Contact' },
];

export default function Header() {
  const pathname = usePathname();
  const [isOpen, setIsOpen] = useState(false);
  const closeMenu = () => setIsOpen(false);

  // Prevent body scroll while the mobile menu is open.
  useEffect(() => {
    if (typeof document === 'undefined') {
      return;
    }
    document.body.style.overflow = isOpen ? 'hidden' : '';
    return () => {
      document.body.style.overflow = '';
    };
  }, [isOpen]);

  const isActive = (href: string) =>
    href === '/' ? pathname === '/' : pathname?.startsWith(href) ?? false;

  return (
    <header className='sticky top-0 z-40 w-full border-b border-slate-200 bg-white/90 backdrop-blur'>
      <div className='mx-auto flex w-full max-w-6xl items-center justify-between gap-4 px-4 py-3 sm:px-6 lg:px-12'>
        <Link
          href='/'
          onClick={closeMenu}
          className='flex items-center gap-3 text-slate-900 transition hover:opacity-80'
          aria-label='Microballoons.com home'>
          <Image
            src='/logo.webp'
            alt=''
            width={48}
            height={48}
            className='h-10 w-10 object-contain sm:h-12 sm:w-12'
            priority
          />
          <span className='text-base font-semibold tracking-tight sm:text-lg'>
            Microballoons<span className='text-slate-500'>.com</span>
          </span>
        </Link>

        {/* Desktop navigation */}
        <nav aria-label='Primary' className='hidden md:block'>
          <ul className='flex items-center gap-1 text-sm font-medium text-slate-700'>
            {NAV_LINKS.map(({ href, label }) => {
              const active = isActive(href);
              return (
                <li key={href}>
                  <Link
                    href={href}
                    aria-current={active ? 'page' : undefined}
                    className={`rounded-full px-3 py-2 transition ${
                      active
                        ? 'bg-slate-900 text-white'
                        : 'hover:bg-slate-100 hover:text-slate-900'
                    }`}>
                    {label}
                  </Link>
                </li>
              );
            })}
          </ul>
        </nav>

        {/* Mobile menu toggle */}
        <button
          type='button'
          onClick={() => setIsOpen((value) => !value)}
          aria-expanded={isOpen}
          aria-controls='mobile-menu'
          aria-label={isOpen ? 'Close navigation menu' : 'Open navigation menu'}
          className='inline-flex h-10 w-10 items-center justify-center rounded-full border border-slate-200 text-slate-700 transition hover:bg-slate-100 md:hidden'>
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
            {isOpen ? (
              <>
                <line x1='18' y1='6' x2='6' y2='18' />
                <line x1='6' y1='6' x2='18' y2='18' />
              </>
            ) : (
              <>
                <line x1='3' y1='6' x2='21' y2='6' />
                <line x1='3' y1='12' x2='21' y2='12' />
                <line x1='3' y1='18' x2='21' y2='18' />
              </>
            )}
          </svg>
        </button>
      </div>

      {/* Mobile menu panel */}
      <nav
        id='mobile-menu'
        aria-label='Mobile'
        hidden={!isOpen}
        className='border-t border-slate-200 bg-white md:hidden'>
        <ul className='mx-auto flex w-full max-w-6xl flex-col gap-1 px-4 py-3 text-base font-medium text-slate-700 sm:px-6'>
          {NAV_LINKS.map(({ href, label }) => {
            const active = isActive(href);
            return (
              <li key={href}>
                <Link
                  href={href}
                  onClick={closeMenu}
                  aria-current={active ? 'page' : undefined}
                  className={`block rounded-xl px-4 py-3 transition ${
                    active
                      ? 'bg-slate-900 text-white'
                      : 'hover:bg-slate-100 hover:text-slate-900'
                  }`}>
                  {label}
                </Link>
              </li>
            );
          })}
        </ul>
      </nav>
    </header>
  );
}
