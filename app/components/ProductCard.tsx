import Link from 'next/link';
import { ExternalLink } from 'lucide-react';

import type { Product } from '../data/products';

type ProductCardProps = {
  product: Product;
  showDetailsButton?: boolean;
};

export default function ProductCard({
  product,
  showDetailsButton = true,
}: ProductCardProps) {
  const productUrl = `https://sacpig.com/products/${product.handle}`;
  const imageFit = product.imageFit ?? 'cover';
  const isContained = imageFit === 'contain';

  return (
    <article className='overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm'>
      <Link
        href={`/products/${product.handle}`}
        aria-label={`View ${product.title}`}
        className={`relative block aspect-square transition hover:opacity-95 ${isContained ? 'bg-white' : 'bg-slate-100'}`}>
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src={product.image}
          alt={product.title}
          loading='lazy'
          decoding='async'
          className={`absolute inset-0 h-full w-full ${isContained ? 'object-contain p-5 sm:p-6' : 'object-cover'}`}
        />
      </Link>
      <div className='flex flex-col gap-4 p-5'>
        <Link
          href={`/products/${product.handle}`}
          className='line-clamp-2 text-lg font-semibold leading-tight text-slate-950 transition hover:text-slate-700'>
          {product.title}
        </Link>
        <p className='line-clamp-2 text-sm leading-relaxed text-slate-600'>
          {product.summary}
        </p>
        <p className='text-xl font-bold text-slate-900'>${product.price}</p>
        <div className='flex flex-wrap items-center gap-2'>
          {showDetailsButton ? (
            <Link
              href={`/products/${product.handle}`}
              className='inline-flex items-center justify-center rounded-full border border-slate-300 bg-white px-4 py-2.5 text-sm font-semibold text-slate-900 transition hover:border-slate-400'>
              Details
            </Link>
          ) : null}
          <a
            href={productUrl}
            target='_blank'
            rel='noopener noreferrer'
            className='inline-flex items-center justify-center gap-1.5 rounded-full bg-slate-900 px-5 py-2.5 text-sm font-semibold text-white transition hover:bg-slate-800'>
            Buy Now
            <ExternalLink size={15} aria-hidden='true' />
          </a>
        </div>
      </div>
    </article>
  );
}
