import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import { ArrowRight, MapPin, MessageCircle, Music, PartyPopper, Phone, Sparkles, Users } from 'lucide-react';
import FloatingWhatsApp from '@/components/FloatingWhatsApp';
import JLogo from '@/components/JLogo';
import SiteFooter from '@/components/SiteFooter';
import images from '@/data/landingImages.json';
import { absoluteUrl, siteConfig } from '@/lib/site';

const homeTitle = 'DJ Japa | DJ para Casamento, Debutante e Eventos Corporativos em Brasília';
const homeDescription =
  'DJ para casamento, festa de 15 anos e eventos corporativos em Brasília-DF. Mais de 15 anos de pista cheia, curadoria musical personalizada, estrutura de som premium e atendimento próximo via WhatsApp.';

export const metadata: Metadata = {
  title: homeTitle,
  description: homeDescription,
  alternates: { canonical: '/' },
  openGraph: {
    type: 'website',
    locale: siteConfig.locale,
    siteName: siteConfig.name,
    title: homeTitle,
    description: homeDescription,
    url: absoluteUrl('/'),
    images: [
      {
        url: absoluteUrl(siteConfig.ogImage),
        width: 1200,
        height: 630,
        alt: 'DJ Japa em apresentação ao vivo em Brasília',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: homeTitle,
    description: homeDescription,
    images: [absoluteUrl(siteConfig.ogImage)],
  },
};

const services = [
  {
    href: '/casamento',
    label: 'Casamento',
    headline: 'DJ para Casamento',
    description:
      'Curadoria personalizada da cerimônia ao último bloco. Estrutura premium, leitura de pista afiada e pista viva até a madrugada.',
    img: images.casamento.hero,
    bullets: ['Cerimônia, recepção e balada', 'Repertório alinhado com os noivos', 'Estrutura de som de alta fidelidade'],
  },
  {
    href: '/debutante',
    label: 'Debutante',
    headline: 'DJ para Festa de 15 anos',
    description:
      'Entrada épica, valsa impecável, coreografias cronometradas e a balada que transforma a noite em memória para sempre.',
    img: images.debutante.hero,
    bullets: ['Entrada cinematográfica', 'Suporte total à valsa e coreografias', 'Pista cheia até a última música'],
  },
  {
    href: '/festa-corporativa',
    label: 'Corporativo',
    headline: 'DJ para Eventos Corporativos',
    description:
      'Confraternizações, premiações e lançamentos com pontualidade absoluta, repertório calibrado e estrutura profissional.',
    img: images['festa-corporativa'].hero,
    bullets: ['Confraternizações e premiações', 'Repertório que engaja toda a equipe', 'Equipe técnica e back-up de equipamentos'],
  },
] as const;

const differentials = [
  {
    icon: Music,
    title: '+15 anos comandando pistas',
    description: 'Experiência sólida em casamentos de alto padrão, debutantes e eventos corporativos em todo o Distrito Federal.',
  },
  {
    icon: Sparkles,
    title: 'Curadoria personalizada',
    description: 'Repertório construído sob medida, com músicas indispensáveis mapeadas e o que não pode tocar respeitado à risca.',
  },
  {
    icon: Users,
    title: 'Leitura de pista afiada',
    description: 'Energia controlada bloco a bloco para manter convidados de todas as idades dançando do início ao fim.',
  },
  {
    icon: PartyPopper,
    title: 'Estrutura premium',
    description: 'Equipamentos de áudio profissionais, presença visual limpa e back-up técnico que elimina risco de falhas.',
  },
];

const faqs = [
  {
    q: 'O DJ Japa atende casamentos, debutantes e eventos corporativos em Brasília?',
    a: 'Sim. Atendo casamentos, festas de 15 anos (debutantes) e eventos corporativos como confraternizações, premiações e lançamentos em Brasília, Plano Piloto, Lago Sul, Lago Norte, Sudoeste, Noroeste, Park Way, Jardim Botânico, Águas Claras, Sobradinho, Taguatinga e demais regiões do Distrito Federal.',
  },
  {
    q: 'Vocês atendem fora do Distrito Federal?',
    a: 'Sim, atendo o Entorno do DF, cidades de Goiás como Goiânia, Pirenópolis e regiões turísticas próximas, além de eventos destination em outros estados sob consulta. Basta enviar a data e o local pelo WhatsApp para avaliar disponibilidade.',
  },
  {
    q: 'Como funciona a contratação?',
    a: 'Você envia data, local e tipo de evento pelo formulário ou WhatsApp. Em seguida, agendamos um briefing para entender perfil musical, momentos-chave e detalhes da estrutura. Após o alinhamento, envio uma proposta personalizada e a reserva da data é confirmada com sinal.',
  },
  {
    q: 'O DJ Japa fornece estrutura de som e iluminação?',
    a: 'Sim. Trabalho com equipamentos de áudio profissionais e parcerias técnicas para iluminação cênica, telão e efeitos especiais. A estrutura é dimensionada conforme o porte do evento e o número de convidados.',
  },
  {
    q: 'Quanto custa contratar o DJ Japa?',
    a: 'O investimento varia conforme tipo de evento, duração, local e estrutura desejada. Casamentos, debutantes e eventos corporativos têm propostas distintas. Solicite uma proposta personalizada pelo formulário ou WhatsApp para receber o orçamento adequado ao seu evento.',
  },
  {
    q: 'Com quanto tempo de antecedência devo reservar a data?',
    a: 'O ideal é reservar com 6 a 12 meses de antecedência, especialmente para casamentos em datas concorridas (sextas e sábados de maio a novembro). Datas de última hora podem ser atendidas mediante disponibilidade — basta consultar.',
  },
  {
    q: 'Atendem cerimônia e recepção no mesmo evento?',
    a: 'Sim. Em casamentos, atendo desde a cerimônia (com som ambiente, microfone para celebrante e marcações musicais) até o último bloco da balada, com transição fluida entre os ambientes.',
  },
];

const whatsappCtaLink = `https://wa.me/${siteConfig.whatsappNumber}?text=${encodeURIComponent(
  'Olá, DJ Japa! Gostaria de receber uma proposta para o meu evento.',
)}`;

const structuredData = {
  '@context': 'https://schema.org',
  '@graph': [
    {
      '@type': 'WebSite',
      '@id': `${absoluteUrl('/')}#website`,
      url: absoluteUrl('/'),
      name: siteConfig.name,
      alternateName: siteConfig.alternateName,
      description: homeDescription,
      inLanguage: 'pt-BR',
      publisher: { '@id': `${absoluteUrl('/')}#organization` },
    },
    {
      '@type': ['LocalBusiness', 'Organization'],
      '@id': `${absoluteUrl('/')}#organization`,
      name: siteConfig.name,
      alternateName: siteConfig.alternateName,
      url: absoluteUrl('/'),
      image: absoluteUrl(siteConfig.ogImage),
      logo: absoluteUrl(siteConfig.logo),
      telephone: siteConfig.phoneE164,
      priceRange: siteConfig.priceRange,
      foundingDate: siteConfig.foundingYear,
      address: {
        '@type': 'PostalAddress',
        addressLocality: siteConfig.addressLocality,
        addressRegion: siteConfig.addressRegion,
        addressCountry: siteConfig.addressCountry,
      },
      geo: {
        '@type': 'GeoCoordinates',
        latitude: siteConfig.geo.latitude,
        longitude: siteConfig.geo.longitude,
      },
      areaServed: siteConfig.areaServed.map((name) => ({
        '@type': 'AdministrativeArea',
        name,
      })),
      sameAs: siteConfig.sameAs.length > 0 ? siteConfig.sameAs : undefined,
      contactPoint: [
        {
          '@type': 'ContactPoint',
          contactType: 'sales',
          telephone: siteConfig.phoneE164,
          availableLanguage: ['Portuguese'],
          url: `https://wa.me/${siteConfig.whatsappNumber}`,
        },
      ],
      hasOfferCatalog: {
        '@type': 'OfferCatalog',
        name: 'Serviços de DJ',
        itemListElement: [
          {
            '@type': 'Offer',
            itemOffered: {
              '@type': 'Service',
              name: 'DJ para Casamento',
              url: absoluteUrl('/casamento'),
              areaServed: siteConfig.addressLocality,
              provider: { '@id': `${absoluteUrl('/')}#organization` },
            },
          },
          {
            '@type': 'Offer',
            itemOffered: {
              '@type': 'Service',
              name: 'DJ para Festa de 15 anos (Debutante)',
              url: absoluteUrl('/debutante'),
              areaServed: siteConfig.addressLocality,
              provider: { '@id': `${absoluteUrl('/')}#organization` },
            },
          },
          {
            '@type': 'Offer',
            itemOffered: {
              '@type': 'Service',
              name: 'DJ para Eventos Corporativos',
              url: absoluteUrl('/festa-corporativa'),
              areaServed: siteConfig.addressLocality,
              provider: { '@id': `${absoluteUrl('/')}#organization` },
            },
          },
        ],
      },
    },
    {
      '@type': 'WebPage',
      '@id': `${absoluteUrl('/')}#webpage`,
      url: absoluteUrl('/'),
      name: homeTitle,
      description: homeDescription,
      isPartOf: { '@id': `${absoluteUrl('/')}#website` },
      about: { '@id': `${absoluteUrl('/')}#organization` },
      inLanguage: 'pt-BR',
    },
    {
      '@type': 'FAQPage',
      '@id': `${absoluteUrl('/')}#faq`,
      mainEntity: faqs.map((faq) => ({
        '@type': 'Question',
        name: faq.q,
        acceptedAnswer: {
          '@type': 'Answer',
          text: faq.a,
        },
      })),
    },
  ],
};

export default function Home() {
  return (
    <>
      <script
        dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
        type="application/ld+json"
      />

      {/* Visual splitter hero - 3 services as cinematic cards */}
      <section
        aria-label="Escolha o tipo de evento"
        className="relative flex min-h-screen flex-col bg-zinc-950 lg:flex-row"
      >
        {services.map((service, i) => (
          <Link
            key={service.href}
            href={service.href}
            className="group relative flex min-h-[34vh] flex-1 items-end overflow-hidden lg:min-h-screen"
            aria-label={`Conheça nossos serviços de ${service.headline}`}
          >
            <Image
              src={service.img}
              alt={`${service.headline} | DJ Japa em Brasília`}
              fill
              priority={i === 0}
              className="object-cover object-center transition-transform duration-700 ease-out group-hover:scale-105"
              sizes="(max-width: 1024px) 100vw, 33vw"
            />
            <div className="absolute inset-0 bg-zinc-950/40 transition-opacity duration-500 group-hover:bg-zinc-950/20" />
            <div className="absolute inset-0 bg-gradient-to-t from-zinc-950/85 via-transparent to-zinc-950/30" />

            <div className="relative z-10 px-7 pb-8 sm:px-9 sm:pb-10">
              <p className="mb-2 text-[10px] font-bold uppercase tracking-[0.3em] text-wedding-gold/90">
                Serviço
              </p>
              <p className="font-serif text-3xl font-medium leading-none text-white sm:text-4xl">
                {service.label}
              </p>
              <span className="mt-3 inline-flex items-center gap-2 text-[11px] uppercase tracking-[0.2em] text-white/80 transition-colors group-hover:text-wedding-gold">
                Ver detalhes
                <ArrowRight className="h-3.5 w-3.5 transition-transform group-hover:translate-x-1" />
              </span>
            </div>
          </Link>
        ))}

        <div className="pointer-events-none absolute inset-0 z-20 flex items-center justify-center">
          <JLogo className="h-12 w-12 text-wedding-gold drop-shadow-[0_0_20px_rgba(201,166,113,0.5)]" />
        </div>
      </section>

      {/* SEO content - H1, intro, services overview */}
      <section className="bg-wedding-sand px-6 py-20 text-wedding-navy lg:px-12 lg:py-28">
        <div className="mx-auto max-w-6xl">
          <div className="mb-4 flex items-center gap-4">
            <div className="h-[1px] w-12 bg-wedding-navy/40" />
            <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-wedding-navy">
              DJ Japa • Brasília-DF
            </span>
          </div>
          <h1 className="font-serif text-[2.2rem] font-medium leading-[1.1] tracking-tight text-wedding-navy sm:text-5xl md:text-[3.5rem] [text-wrap:balance]">
            DJ para Casamento, Debutante e Eventos Corporativos em Brasília
          </h1>
          <p className="mt-6 max-w-3xl text-base font-light leading-relaxed text-wedding-muted sm:text-lg">
            Mais de 15 anos transformando casamentos, festas de 15 anos e eventos corporativos no
            Distrito Federal em noites inesquecíveis. Curadoria musical personalizada, estrutura
            de som premium, leitura de pista afiada e atendimento próximo via WhatsApp — do briefing
            ao último bloco da madrugada.
          </p>

          <div className="mt-10 flex flex-wrap items-center gap-4">
            <a
              className="group inline-flex items-center gap-3 rounded-sm bg-wedding-gold px-7 py-4 font-serif text-xs uppercase tracking-[0.2em] text-white transition-all hover:scale-[1.02] hover:bg-[#b89568] sm:text-sm"
              href={whatsappCtaLink}
              rel="noopener noreferrer"
              target="_blank"
            >
              <MessageCircle className="h-4 w-4" strokeWidth={2} />
              Solicitar proposta no WhatsApp
              <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
            </a>
            <a
              className="inline-flex items-center gap-2 font-serif text-xs uppercase tracking-[0.2em] text-wedding-navy underline-offset-[6px] transition-colors hover:text-wedding-gold hover:underline sm:text-sm"
              href={`tel:${siteConfig.phoneE164}`}
            >
              <Phone className="h-4 w-4" strokeWidth={2} />
              {siteConfig.phoneDisplay}
            </a>
          </div>
        </div>
      </section>

      {/* Services grid */}
      <section
        aria-labelledby="services-title"
        className="bg-wedding-sand px-6 pb-20 lg:px-12 lg:pb-28"
      >
        <div className="mx-auto max-w-6xl">
          <div className="mb-10 flex items-center gap-4">
            <div className="h-[1px] w-12 bg-wedding-navy/40" />
            <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-wedding-navy">
              Serviços
            </span>
          </div>
          <h2
            id="services-title"
            className="mb-12 max-w-3xl font-serif text-3xl font-medium leading-tight text-wedding-navy sm:text-4xl md:text-5xl [text-wrap:balance]"
          >
            Três entregas, uma assinatura sonora consistente.
          </h2>

          <div className="grid gap-8 md:grid-cols-3">
            {services.map((service) => (
              <article
                key={service.href}
                className="group flex flex-col overflow-hidden rounded-2xl bg-white shadow-[0_8px_24px_rgba(0,0,0,0.08)] transition-shadow hover:shadow-[0_16px_40px_rgba(0,0,0,0.15)]"
              >
                <div className="relative aspect-[4/3] w-full overflow-hidden bg-zinc-200">
                  <Image
                    src={service.img}
                    alt={`${service.headline} em Brasília`}
                    fill
                    className="object-cover object-center transition-transform duration-700 group-hover:scale-105"
                    sizes="(max-width: 768px) 100vw, 33vw"
                  />
                </div>
                <div className="flex flex-1 flex-col p-6 sm:p-8">
                  <h3 className="font-serif text-2xl font-medium leading-tight text-wedding-navy sm:text-[1.65rem]">
                    {service.headline}
                  </h3>
                  <p className="mt-3 text-sm font-light leading-relaxed text-wedding-muted sm:text-base">
                    {service.description}
                  </p>
                  <ul className="mt-5 space-y-2 text-sm text-wedding-muted">
                    {service.bullets.map((bullet) => (
                      <li key={bullet} className="flex items-start gap-2">
                        <span className="mt-[7px] inline-block h-1 w-1 rounded-full bg-wedding-gold" />
                        <span>{bullet}</span>
                      </li>
                    ))}
                  </ul>
                  <Link
                    href={service.href}
                    className="group/cta mt-6 inline-flex items-center gap-2 text-[11px] font-bold uppercase tracking-[0.2em] text-wedding-navy transition-colors hover:text-wedding-gold"
                  >
                    <span className="border-b border-wedding-navy/30 pb-1 transition-colors group-hover/cta:border-wedding-gold">
                      Conhecer {service.label.toLowerCase()}
                    </span>
                    <ArrowRight className="h-3.5 w-3.5 transition-transform group-hover/cta:translate-x-1" />
                  </Link>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Differentials */}
      <section className="bg-wedding-white px-6 py-20 lg:px-12 lg:py-28">
        <div className="mx-auto max-w-6xl">
          <div className="mb-10 flex items-center gap-4">
            <div className="h-[1px] w-12 bg-wedding-navy/40" />
            <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-wedding-navy">
              Por que DJ Japa
            </span>
          </div>
          <h2 className="mb-12 max-w-3xl font-serif text-3xl font-medium leading-tight text-wedding-navy sm:text-4xl md:text-5xl [text-wrap:balance]">
            A festa lembrada nasce de método, não de improviso.
          </h2>

          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
            {differentials.map(({ icon: Icon, title, description }) => (
              <div key={title} className="flex flex-col gap-3">
                <div className="flex h-12 w-12 items-center justify-center rounded-full bg-wedding-gold/10 text-wedding-gold">
                  <Icon className="h-5 w-5" strokeWidth={1.75} />
                </div>
                <h3 className="font-serif text-lg font-medium text-wedding-navy">
                  {title}
                </h3>
                <p className="text-sm font-light leading-relaxed text-wedding-muted">
                  {description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Coverage / Local SEO */}
      <section className="bg-wedding-sand px-6 py-20 lg:px-12 lg:py-28">
        <div className="mx-auto max-w-6xl grid gap-12 lg:grid-cols-2 lg:gap-16">
          <div>
            <div className="mb-4 flex items-center gap-4">
              <div className="h-[1px] w-12 bg-wedding-navy/40" />
              <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-wedding-navy">
                Atendimento
              </span>
            </div>
            <h2 className="font-serif text-3xl font-medium leading-tight text-wedding-navy sm:text-4xl md:text-5xl [text-wrap:balance]">
              Brasília, Distrito Federal e Entorno.
            </h2>
            <p className="mt-6 text-base font-light leading-relaxed text-wedding-muted">
              Atendo casamentos, festas de 15 anos e eventos corporativos em todas as regiões
              administrativas do Distrito Federal e cidades do Entorno. Eventos destination em
              outros estados são avaliados sob consulta — basta enviar a data e o local.
            </p>
            <div className="mt-8 flex flex-wrap gap-2">
              {siteConfig.areaServed.map((area) => (
                <span
                  key={area}
                  className="inline-flex items-center gap-1.5 rounded-full bg-white px-3 py-1.5 text-[11px] font-medium text-wedding-navy/80 shadow-sm"
                >
                  <MapPin className="h-3 w-3 text-wedding-gold" strokeWidth={2} />
                  {area}
                </span>
              ))}
            </div>
          </div>

          <div className="relative aspect-[4/5] w-full overflow-hidden rounded-2xl bg-zinc-200 sm:aspect-[3/2] lg:aspect-auto">
            <Image
              src={siteConfig.ogImage}
              alt="DJ Japa em apresentação ao vivo em Brasília"
              fill
              className="object-cover object-center"
              sizes="(max-width: 1024px) 100vw, 50vw"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-zinc-950/40 via-transparent to-transparent" />
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="bg-wedding-white px-6 py-20 lg:px-12 lg:py-28" id="faq">
        <div className="mx-auto max-w-4xl">
          <div className="mb-4 flex items-center gap-4">
            <div className="h-[1px] w-12 bg-wedding-navy/40" />
            <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-wedding-navy">
              Perguntas frequentes
            </span>
          </div>
          <h2 className="mb-12 font-serif text-3xl font-medium leading-tight text-wedding-navy sm:text-4xl md:text-5xl [text-wrap:balance]">
            Tudo que você precisa saber antes de contratar.
          </h2>

          <div className="divide-y divide-wedding-navy/10 border-y border-wedding-navy/10">
            {faqs.map((faq) => (
              <details key={faq.q} className="group py-6">
                <summary className="flex cursor-pointer list-none items-start justify-between gap-4 font-serif text-lg font-medium text-wedding-navy transition-colors hover:text-wedding-gold sm:text-xl">
                  <span className="flex-1 [text-wrap:balance]">{faq.q}</span>
                  <span className="mt-1 text-wedding-gold transition-transform group-open:rotate-45">
                    <svg className="h-5 w-5" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M12 4.5v15m7.5-7.5h-15" />
                    </svg>
                  </span>
                </summary>
                <p className="mt-4 text-base font-light leading-relaxed text-wedding-muted">
                  {faq.a}
                </p>
              </details>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="relative overflow-hidden bg-zinc-950 px-6 py-20 text-white lg:px-12 lg:py-28">
        <Image
          src={siteConfig.ogImage}
          alt=""
          aria-hidden="true"
          fill
          className="object-cover object-center opacity-30"
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-zinc-950 via-zinc-950/80 to-zinc-950/60" />

        <div className="relative z-10 mx-auto max-w-3xl text-center">
          <p className="mb-4 text-[10px] font-bold uppercase tracking-[0.3em] text-wedding-gold">
            Reserve sua data
          </p>
          <h2 className="font-serif text-3xl font-medium leading-tight text-white sm:text-4xl md:text-5xl [text-wrap:balance]">
            Pronto para uma festa que ninguém esquece?
          </h2>
          <p className="mx-auto mt-6 max-w-xl text-base font-light leading-relaxed text-white/75 sm:text-lg">
            Envie a data e o tipo de evento e receba uma proposta personalizada para
            casamento, debutante ou evento corporativo em Brasília.
          </p>
          <div className="mt-10 flex flex-wrap items-center justify-center gap-4">
            <a
              className="group inline-flex items-center gap-3 rounded-sm bg-wedding-gold px-7 py-4 font-serif text-xs uppercase tracking-[0.2em] text-white transition-all hover:scale-[1.02] hover:bg-[#b89568] sm:text-sm"
              href={whatsappCtaLink}
              rel="noopener noreferrer"
              target="_blank"
            >
              <MessageCircle className="h-4 w-4" strokeWidth={2} />
              Solicitar proposta no WhatsApp
              <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
            </a>
            <a
              className="inline-flex items-center gap-2 font-serif text-xs uppercase tracking-[0.2em] text-white/85 underline-offset-[6px] transition-colors hover:text-wedding-gold hover:underline sm:text-sm"
              href={`tel:${siteConfig.phoneE164}`}
            >
              <Phone className="h-4 w-4" strokeWidth={2} />
              {siteConfig.phoneDisplay}
            </a>
          </div>
        </div>
      </section>

      <FloatingWhatsApp
        message="Olá! Gostaria de receber uma proposta de DJ para o meu evento."
        trackingSource="home_floating_whatsapp"
      />
      <SiteFooter description="DJ Japa, mais de 15 anos transformando casamentos, debutantes e eventos corporativos em Brasília-DF em noites inesquecíveis com pista cheia do início ao fim." />
    </>
  );
}
