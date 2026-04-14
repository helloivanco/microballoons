'use client';

import { ArrowRight, Menu, X } from 'lucide-react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useEffect, useState } from 'react';

const NAV_LINKS = [
  { href: '/collections/all', label: 'Shop' },
  { href: '/calculator', label: 'Calculator' },
  { href: '/pages/microballoons-com-faq', label: 'FAQ' },
  { href: '/pages/about', label: 'About' },
  { href: '/pages/contact', label: 'Contact' },
];

export default function Header() {
  const pathname = usePathname();
  const [isOpen, setIsOpen] = useState(false);
  const [hasScrolled, setHasScrolled] = useState(false);
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

  useEffect(() => {
    if (typeof window === 'undefined') {
      return;
    }

    const handleScroll = () => {
      setHasScrolled(window.scrollY > 12);
    };

    handleScroll();
    window.addEventListener('scroll', handleScroll, { passive: true });

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const isActive = (href: string) =>
    href === '/' ? pathname === '/' : pathname?.startsWith(href) ?? false;

  return (
    <header
      className={`sticky top-0 z-40 w-full border-b bg-white/95 text-slate-900 backdrop-blur transition-[opacity,box-shadow] duration-300 ${
        hasScrolled
          ? 'border-slate-300 opacity-95 shadow-[0_8px_24px_rgba(15,23,42,0.12)]'
          : 'border-slate-200 opacity-100'
      }`}>
      <div>
        <div className='border-b border-slate-200 bg-slate-50'>
          <div className='mx-auto flex w-full max-w-6xl justify-center px-4 py-2.5 sm:px-6 lg:px-12'>
            <Link
              href='/shop'
              className='inline-flex items-center gap-2 text-center text-sm font-medium tracking-wide text-slate-900 transition hover:opacity-80 sm:text-base'>
              <span>
                Microballoons.com - #1 Source for Premium Microballoons
              </span>
              <ArrowRight size={18} aria-hidden='true' />
            </Link>
          </div>
        </div>

        <div className='mx-auto flex w-full max-w-6xl items-center justify-between gap-4 px-4 py-3 sm:px-6 sm:py-4 lg:px-12'>
          <Link
            href='/'
            onClick={closeMenu}
            className='inline-flex items-center py-1 transition hover:opacity-85'
            aria-label='Microballoons.com home'>
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src='/logo.webp'
              alt='Microballoons.com'
              width={220}
              height={140}
              decoding='async'
              className='h-[4.2rem] w-auto object-contain sm:h-[4.8rem] lg:h-24'
            />
          </Link>

          {/* Desktop navigation */}
          <nav aria-label='Primary' className='hidden md:block'>
            <ul className='flex items-center gap-2 text-sm font-medium text-slate-700'>
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
            aria-label={
              isOpen ? 'Close navigation menu' : 'Open navigation menu'
            }
            className='inline-flex h-11 w-11 items-center justify-center rounded-full border border-slate-300 text-slate-700 transition hover:bg-slate-100 md:hidden'>
            {isOpen ? (
              <X size={20} aria-hidden='true' />
            ) : (
              <Menu size={20} aria-hidden='true' />
            )}
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
      </div>
    </header>
  );
}
