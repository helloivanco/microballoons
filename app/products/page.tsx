import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Shop',
  description:
    'Shop premium silane-coated glass microballoons in 1-quart, 5-quart, 5-gallon, and 18 kg sizes. From SacPig Bait Co.',
  alternates: { canonical: '/collections/all' },
};

export { default } from '../collections/all/page';
