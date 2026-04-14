'use client';

import { Share2 } from 'lucide-react';
import { useState } from 'react';

type ShareProductButtonProps = {
  title: string;
};

export default function ShareProductButton({ title }: ShareProductButtonProps) {
  const [label, setLabel] = useState('Share');

  const handleShare = async () => {
    if (typeof window === 'undefined') {
      return;
    }

    const url = window.location.href;
    const resetLabel = () => {
      window.setTimeout(() => setLabel('Share'), 1800);
    };

    try {
      if (typeof navigator !== 'undefined' && navigator.share) {
        await navigator.share({
          title,
          text: title,
          url,
        });
        setLabel('Shared');
        resetLabel();
        return;
      }

      if (typeof navigator !== 'undefined' && navigator.clipboard?.writeText) {
        await navigator.clipboard.writeText(url);
        setLabel('Link Copied');
        resetLabel();
        return;
      }
    } catch {
      // Ignore abort/cancel and fallback errors; keep default label.
    }
  };

  return (
    <button
      type='button'
      onClick={handleShare}
      className='inline-flex items-center justify-center gap-1.5 rounded-full border border-slate-300 bg-white px-6 py-3 text-sm font-semibold text-slate-900 transition hover:border-slate-400'>
      <Share2 size={16} aria-hidden='true' />
      {label}
    </button>
  );
}
