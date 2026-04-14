'use client';

import { Play } from 'lucide-react';
import { useState } from 'react';

import VideoJsYoutubePlayer from './VideoJsYoutubePlayer';

const HERO_VIDEO_URL = 'https://www.youtube.com/watch?v=l5srFkGoVXo';

export default function HomeHeroMedia() {
  const [isPlaying, setIsPlaying] = useState(false);

  return (
    <div className='w-full overflow-hidden rounded-3xl border border-slate-200 bg-white shadow-sm'>
      <div className='relative aspect-[21/13] w-full'>
        {isPlaying ? (
          <VideoJsYoutubePlayer videoUrl={HERO_VIDEO_URL} />
        ) : (
          <>
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src='/compare.webp'
              alt='Microballoons comparison'
              decoding='async'
              className='absolute inset-0 h-full w-full object-cover'
            />
            <div className='pointer-events-none absolute inset-0 bg-gradient-to-t from-black/25 via-black/10 to-transparent' />
            <div className='absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 flex flex-col items-center gap-3'>
              <button
                type='button'
                onClick={() => setIsPlaying(true)}
                aria-label='Play comparison video'
                className='inline-flex h-20 w-20 items-center justify-center rounded-full border border-white/70 bg-black/45 text-white backdrop-blur-sm transition hover:scale-105 hover:bg-black/60'>
                <Play size={36} className='ml-1 fill-current' aria-hidden='true' />
              </button>
              <span className='rounded-full bg-black/50 px-4 py-1.5 text-sm font-semibold tracking-wide text-white backdrop-blur-sm sm:text-base'>
                2x Stronger than the competition
              </span>
            </div>
          </>
        )}
      </div>
    </div>
  );
}
