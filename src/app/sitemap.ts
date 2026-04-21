import type { MetadataRoute } from 'next';
import { absoluteUrl, isPublicSiteUrl, siteConfig } from '@/lib/site';

export default function sitemap(): MetadataRoute.Sitemap {
  if (!isPublicSiteUrl(siteConfig.siteUrl)) {
    return [];
  }

  return [
    {
      url: absoluteUrl('/casamento'),
      lastModified: new Date(),
      changeFrequency: 'weekly',
      priority: 1,
    },
    {
      url: absoluteUrl('/15-anos'),
      lastModified: new Date(),
      changeFrequency: 'weekly',
      priority: 0.9,
    },
    {
      url: absoluteUrl('/privacidade'),
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.4,
    },
  ];
}
