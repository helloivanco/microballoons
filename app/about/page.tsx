import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'About',
  description:
    'Learn how Microballoons.com started and why our premium silane-coated glass microballoons were developed for bait making and beyond.',
  alternates: { canonical: '/pages/about' },
};

export { default } from '../pages/about/page';
