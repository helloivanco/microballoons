'use client';

import { useEffect, useRef, useState } from 'react';
import 'video.js/dist/video-js.css';
import type videojs from 'video.js';

type VideoJsPlayer = ReturnType<typeof videojs>;

type VideoJsYoutubePlayerProps = {
  videoUrl: string;
};

export default function VideoJsYoutubePlayer({
  videoUrl,
}: VideoJsYoutubePlayerProps) {
  const videoRef = useRef<HTMLVideoElement | null>(null);
  const playerRef = useRef<VideoJsPlayer | null>(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    let isMounted = true;

    const initPlayer = async () => {
      if (!videoRef.current || playerRef.current) {
        return;
      }

      const [{ default: videojs }] = await Promise.all([
        import('video.js'),
        import('videojs-youtube'),
      ]);

      if (!isMounted || !videoRef.current) {
        return;
      }

      const options = {
        autoplay: true,
        controls: true,
        preload: 'auto',
        fluid: false,
        fill: true,
        techOrder: ['youtube', 'html5'],
        sources: [{ src: videoUrl, type: 'video/youtube' }],
      };

      playerRef.current = videojs(videoRef.current, options, () => {
        if (isMounted) {
          setIsLoading(false);
        }
      });
    };

    initPlayer();

    return () => {
      isMounted = false;
      if (playerRef.current) {
        playerRef.current.dispose();
        playerRef.current = null;
      }
    };
  }, [videoUrl]);

  return (
    <div className='mb-video-player relative h-full w-full bg-black'>
      <div data-vjs-player className='h-full w-full'>
        <video
          ref={videoRef}
          className='video-js vjs-big-play-centered vjs-fill h-full w-full'
          playsInline
        />
      </div>
      {isLoading ? (
        <div className='absolute inset-0 flex items-center justify-center bg-black/30 text-sm font-medium text-white'>
          Loading video...
        </div>
      ) : null}
    </div>
  );
}
