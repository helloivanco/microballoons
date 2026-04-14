import type { Metadata } from 'next';
import CalculatorClient from './CalculatorClient';

export const metadata: Metadata = {
  title: 'Microballoon Mix Converter',
  description:
    'Convert legacy microballoon (purchased before March 2026) resin formulas into the updated mix instantly. Enter your old Part A, Part B, and microballoon weights to get adjusted ratios.',
  alternates: { canonical: '/calculator' },
  openGraph: {
    title: 'Microballoon Mix Converter',
    description:
      'Quickly translate old microballoon resin recipes into the new formulation with precise ratios.',
    url: '/calculator',
  },
};

export default function CalculatorPage() {
  return <CalculatorClient />;
}
