import type { MetadataRoute } from 'next';
import { isPublicSiteUrl, siteConfig } from '@/lib/site';

export default function robots(): MetadataRoute.Robots {
  const isPublic = isPublicSiteUrl(siteConfig.siteUrl);

  return {
    rules: isPublic
      ? {
          userAgent: '*',
          allow: '/',
        }
      : {
          userAgent: '*',
          disallow: '/',
        },
    host: isPublic ? siteConfig.siteUrl : undefined,
    sitemap: isPublic ? `${siteConfig.siteUrl}/sitemap.xml` : undefined,
  };
}
