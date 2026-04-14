import type { MetadataRoute } from 'next';

export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: '*',
      allow: '/',
      disallow: ['/shop', '/product/', '/faq', '/contact', '/about'],
    },
    sitemap: 'https://microballoons.com/sitemap.xml',
  };
}
