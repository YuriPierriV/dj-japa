import type { MetadataRoute } from 'next';
import { absoluteUrl, isPublicSiteUrl, siteConfig } from '@/lib/site';

export default function sitemap(): MetadataRoute.Sitemap {
  if (!isPublicSiteUrl(siteConfig.siteUrl)) {
    return [];
  }

  const lastModified = new Date();

  return [
    {
      url: absoluteUrl('/'),
      lastModified,
      changeFrequency: 'weekly',
      priority: 1,
    },
    {
      url: absoluteUrl('/casamento'),
      lastModified,
      changeFrequency: 'weekly',
      priority: 0.9,
    },
    {
      url: absoluteUrl('/debutante'),
      lastModified,
      changeFrequency: 'weekly',
      priority: 0.9,
    },
    {
      url: absoluteUrl('/festa-corporativa'),
      lastModified,
      changeFrequency: 'weekly',
      priority: 0.9,
    },
    {
      url: absoluteUrl('/privacidade'),
      lastModified,
      changeFrequency: 'monthly',
      priority: 0.3,
    },
  ];
}
