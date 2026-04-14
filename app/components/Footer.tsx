import Link from 'next/link';

export default function Footer() {
  return (
    <footer className='border-t border-slate-200 bg-white'>
      <div className='mx-auto flex w-full max-w-6xl flex-col gap-4 px-6 py-8 text-sm text-slate-600 sm:flex-row sm:items-center sm:justify-between lg:px-12'>
        <p>&copy; {new Date().getFullYear()} Sac Pig Bait Co.</p>
        <ul className='flex flex-wrap gap-4'>
          <li>
            <Link href='/shop' className='hover:text-slate-900'>
              Shop
            </Link>
          </li>
          <li>
            <Link href='/calculator' className='hover:text-slate-900'>
              Calculator
            </Link>
          </li>
          <li>
            <Link href='/faq' className='hover:text-slate-900'>
              FAQ
            </Link>
          </li>
          <li>
            <Link href='/contact' className='hover:text-slate-900'>
              Contact
            </Link>
          </li>
          <li>
            <a
              href='mailto:sacpigbaitco@gmail.com'
              className='hover:text-slate-900'>
              sacpigbaitco@gmail.com
            </a>
          </li>
        </ul>
      </div>
    </footer>
  );
}
