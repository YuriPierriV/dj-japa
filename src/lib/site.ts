const rawSiteUrl =
  process.env.NEXT_PUBLIC_SITE_URL ||
  process.env.VERCEL_PROJECT_PRODUCTION_URL ||
  process.env.VERCEL_URL ||
  'http://localhost:3000';

function normalizeSiteUrl(url: string) {
  const trimmed = url.trim().replace(/\/$/, '');
  if (trimmed.startsWith('http://') || trimmed.startsWith('https://')) {
    return trimmed;
  }

  return `https://${trimmed}`;
}

export const siteConfig = {
  name: 'DJ Japa',
  alternateName: 'DJ Japa Eventos',
  title: 'DJ Japa | Casamentos e 15 anos',
  description:
    'DJ para casamentos e festas de 15 anos com curadoria musical, estrutura premium e atendimento via WhatsApp.',
  locale: 'pt_BR',
  siteUrl: normalizeSiteUrl(rawSiteUrl),
  ogImage: '/imagens/fotoDJ.JPG',
  logo: '/imagens/j-logo.png',
  whatsappNumber: '556198383473',
  phoneE164: '+556198383473',
  phoneDisplay: '(61) 9838-3473',
};

export function absoluteUrl(path = '/') {
  return new URL(path, `${siteConfig.siteUrl}/`).toString();
}

export function isPublicSiteUrl(url: string) {
  return !url.includes('localhost') && !url.includes('127.0.0.1');
}
