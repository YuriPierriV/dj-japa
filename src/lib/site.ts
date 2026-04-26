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

const sameAs = [
  process.env.NEXT_PUBLIC_INSTAGRAM_URL,
  process.env.NEXT_PUBLIC_FACEBOOK_URL,
  process.env.NEXT_PUBLIC_YOUTUBE_URL,
  process.env.NEXT_PUBLIC_TIKTOK_URL,
].filter((url): url is string => Boolean(url && url.trim()));

export const siteConfig = {
  name: 'DJ Japa',
  alternateName: 'DJ Japa Eventos',
  title: 'DJ Japa | DJ para Casamento, Debutante e Corporativo em Brasília',
  description:
    'DJ para casamento, festa de 15 anos e eventos corporativos em Brasília-DF. Mais de 15 anos de pista cheia, curadoria musical personalizada, estrutura premium e atendimento via WhatsApp.',
  keywords: [
    'DJ para casamento Brasília',
    'DJ casamento DF',
    'DJ para debutante Brasília',
    'DJ 15 anos Brasília',
    'DJ para festa corporativa Brasília',
    'DJ para eventos corporativos DF',
    'DJ para confraternização Brasília',
    'DJ para festas Brasília',
    'DJ Japa',
    'DJ premium Brasília',
    'contratar DJ Brasília',
    'DJ casamento Lago Sul',
    'DJ casamento Plano Piloto',
    'estrutura de som para festa Brasília',
  ],
  locale: 'pt_BR',
  siteUrl: normalizeSiteUrl(rawSiteUrl),
  ogImage: '/imagens/fotoDJ.JPG',
  logo: '/imagens/j-logo.png',
  whatsappNumber: '556198383473',
  phoneE164: '+556198383473',
  phoneDisplay: '(61) 9838-3473',
  addressLocality: 'Brasília',
  addressRegion: 'DF',
  addressCountry: 'BR',
  geo: {
    latitude: -15.7939,
    longitude: -47.8828,
  },
  areaServed: [
    'Brasília',
    'Plano Piloto',
    'Lago Sul',
    'Lago Norte',
    'Sudoeste',
    'Noroeste',
    'Park Way',
    'Jardim Botânico',
    'Águas Claras',
    'Sobradinho',
    'Taguatinga',
    'Distrito Federal',
    'Entorno do DF',
    'Goiânia',
  ],
  priceRange: '$$$',
  foundingYear: '2010',
  sameAs,
};

export function absoluteUrl(path = '/') {
  return new URL(path, `${siteConfig.siteUrl}/`).toString();
}

export function isPublicSiteUrl(url: string) {
  return !url.includes('localhost') && !url.includes('127.0.0.1');
}
