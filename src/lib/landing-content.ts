import type { Metadata } from 'next';
import { absoluteUrl, siteConfig } from '@/lib/site';

export type EventLandingSlug = 'casamento' | '15-anos';
export type ProcessIconName = 'coffee' | 'music' | 'speaker' | 'party';
export type StoryVariant = 'testimonial' | 'story';

export type EventLandingContent = {
  slug: EventLandingSlug;
  path: `/${EventLandingSlug}`;
  serviceName: string;
  metadataTitle: string;
  metadataDescription: string;
  ogImage: string;
  hero: {
    eyebrow: string;
    intro: string;
    phrases: string[];
    imageSrc: string;
    imageAlt: string;
  };
  about: {
    kicker: string;
    title: string;
    paragraphs: string[];
    primaryImageSrc: string;
    primaryImageAlt: string;
    secondaryImageSrc: string;
    secondaryImageAlt: string;
    ctaLabel: string;
  };
  process: {
    kicker: string;
    title: string;
    highlight: string;
    steps: Array<{
      icon: ProcessIconName;
      title: string;
      description: string;
      mediaType: 'image' | 'video';
      mediaSrc: string;
      mediaAlt: string;
      mediaPositionClassName: string;
    }>;
  };
  stories: {
    kicker: string;
    title: string;
    highlight: string;
    variant: StoryVariant;
    ctaLabel: string;
    items: Array<{
      title: string;
      text: string;
      mediaType: 'image' | 'video';
      mediaSrc: string;
      mediaAlt: string;
    }>;
  };
  contact: {
    kicker: string;
    title: string;
    highlight: string;
    description: string;
    backgroundImageSrc: string;
    backgroundImageAlt: string;
    formTitle: string;
    formSubtitle: string;
    nameLabel: string;
    namePlaceholder: string;
    dateLabel: string;
    buttonLabel: string;
    whatsappTemplate: string;
    whatsappFollowUp: string;
    floatingWhatsappMessage: string;
  };
  footerDescription: string;
};

const processMedia = {
  alignment: '/imagens/align.png',
  curation: '/imagens/entendimento.jpg',
  structure: '/videos/estrutura.mp4',
  execution: '/imagens/exec.png',
} as const;

export const landingContent: Record<EventLandingSlug, EventLandingContent> = {
  casamento: {
    slug: 'casamento',
    path: '/casamento',
    serviceName: 'DJ para casamento premium',
    metadataTitle: 'DJ para casamento premium | DJ Japa',
    metadataDescription:
      'DJ para casamento com curadoria musical personalizada, estrutura premium e atendimento via WhatsApp para cerimônia, recepção e pista.',
    ogImage: '/imagens/principal.jpg',
    hero: {
      eyebrow: 'DJ para Casamento Premium',
      intro: 'A trilha sonora perfeita para',
      phrases: [
        'o seu casamento.',
        'a festa dos sonhos.',
        'a sua história.',
        'uma noite inesquecível.',
      ],
      imageSrc: '/imagens/principal.jpg',
      imageAlt: 'Pista de casamento comandada pelo DJ Japa',
    },
    about: {
      kicker: 'A Garantia',
      title: 'Mais de 15 anos entregando DJ para casamento com pista viva.',
      paragraphs: [
        'O sucesso do seu casamento <strong>não acontece por acaso</strong>. Ele nasce de leitura de pista contínua, o repertório certo na hora exata e de uma estrutura robusta que <strong>sustenta cada momento importante da noite</strong> sem oscilações.',
        'Da cerimônia ao último bloco da madrugada, a minha entrega é milimetricamente desenhada para garantir <strong>uma pista viva, elegante, e com a energia no teto</strong> até as luzes se acenderem.',
      ],
      primaryImageSrc: '/imagens/japa1.jpg',
      primaryImageAlt: 'DJ Japa se apresentando em evento premium',
      secondaryImageSrc: '/imagens/japa2.jpg',
      secondaryImageAlt: 'Retrato do DJ Japa',
      ctaLabel: 'Solicitar proposta',
    },
    process: {
      kicker: 'O Processo',
      title: 'A Engenharia de uma',
      highlight: 'Festa Perfeita',
      steps: [
        {
          icon: 'coffee',
          title: 'O Alinhamento',
          description:
            'Briefing minucioso para entender o perfil musical dos noivos, músicas indispensáveis e detalhar o que não deve tocar sob nenhuma hipótese no evento.',
          mediaType: 'image',
          mediaSrc: processMedia.alignment,
          mediaAlt: 'Alinhamento de repertório para casamento',
          mediaPositionClassName: 'object-top',
        },
        {
          icon: 'music',
          title: 'A Curadoria',
          description:
            'Construção da identidade sonora da sua festa, com transições mapeadas e blocos desenhados com ritmo certo para cada etapa da celebração.',
          mediaType: 'image',
          mediaSrc: processMedia.curation,
          mediaAlt: 'Curadoria musical para casamento',
          mediaPositionClassName: 'object-top',
        },
        {
          icon: 'speaker',
          title: 'A Estrutura',
          description:
            'Montagem de equipamentos de áudio premium, com presença visual limpa e alta fidelidade acústica para a cerimônia, a recepção e a balada.',
          mediaType: 'video',
          mediaSrc: processMedia.structure,
          mediaAlt: 'Estrutura de som e iluminação para casamento',
          mediaPositionClassName: 'object-center',
        },
        {
          icon: 'party',
          title: 'A Execução',
          description:
            'Leitura de pista afiada e timing preciso durante o casamento para manter a energia da festa sempre no alto.',
          mediaType: 'image',
          mediaSrc: processMedia.execution,
          mediaAlt: 'Execução do DJ durante festa de casamento',
          mediaPositionClassName: 'object-center',
        },
      ],
    },
    stories: {
      kicker: 'Acervo & Histórias',
      title: 'Memórias de',
      highlight: 'Noites Inesquecíveis',
      variant: 'testimonial',
      ctaLabel: 'Solicitar Minha Data',
      items: [
        {
          title: 'Amanda & Lucas',
          text: 'A pista ficou cheia a noite inteira. O repertório parecia feito sob medida para cada momento e a conexão com os convidados foi fantástica e imediata.',
          mediaType: 'video',
          mediaSrc: '/videos/casamento.mp4',
          mediaAlt: 'Pista de casamento lotada',
        },
        {
          title: 'Mariana & Felipe',
          text: 'Sensibilidade total para conduzir a energia da recepção até a balada pesada. A festa ficou super elegante e imersiva do início ao final.',
          mediaType: 'video',
          mediaSrc: '/videos/vid2.mp4',
          mediaAlt: 'Convidados celebrando em casamento',
        },
        {
          title: 'Bruna & Caio',
          text: 'Som cristalino, transições perfeitas e atendimento incrivelmente próximo desde o primeiro bate-papo. A entrega visual e sonora foi digna de cinema.',
          mediaType: 'image',
          mediaSrc: '/imagens/japa1.jpg',
          mediaAlt: 'DJ Japa em apresentação noturna',
        },
      ],
    },
    contact: {
      kicker: 'Inicie o seu Planejamento',
      title: 'Prontos para a festa',
      highlight: 'da sua vida?',
      description:
        'Dê o primeiro passo rumo a uma experiência sonora marcante. Preencha os dados abaixo e receba instantaneamente uma proposta VIP.',
      backgroundImageSrc: '/imagens/principal.JPG',
      backgroundImageAlt: 'DJ Japa em apresentação ao vivo',
      formTitle: 'Solicitar Proposta',
      formSubtitle: 'Atendimento Exclusivo',
      nameLabel: 'Nome dos Noivos *',
      namePlaceholder: 'Ex: João e Maria',
      dateLabel: 'Data do Casamento *',
      buttonLabel: 'Solicitar Orçamento VIP',
      whatsappTemplate:
        'Olá, DJ Japa! Nós somos *{nome}* e vamos nos casar no dia *{data}*.',
      whatsappFollowUp:
        'Queremos uma festa espetacular, com uma pista viva do começo ao fim, e gostaríamos de avaliar uma proposta musical para o nosso grande dia.',
      floatingWhatsappMessage:
        'Olá! Gostaria de conversar mais sobre os serviços de DJ para casamento.',
    },
    footerDescription:
      'Landing page arquitetada com alta conversão focada no nicho casamento premium em alto padrão musical.',
  },
  '15-anos': {
    slug: '15-anos',
    path: '/15-anos',
    serviceName: 'DJ para festa de 15 anos premium',
    metadataTitle: 'DJ para 15 anos premium | DJ Japa',
    metadataDescription:
      'DJ para festa de 15 anos com repertório personalizado, estrutura premium e condução da pista do cerimonial à balada final.',
    ogImage: '/imagens/fotoDJ.JPG',
    hero: {
      eyebrow: 'DJ para Festa de 15 Anos',
      intro: 'A pista certa para',
      phrases: [
        'a entrada triunfal.',
        'uma noite sem pausa.',
        'a festa que vira assunto.',
        'a pista até de manhã.',
      ],
      imageSrc: '/imagens/fotoDJ.JPG',
      imageAlt: 'DJ Japa comandando uma festa de 15 anos',
    },
    about: {
      kicker: 'A Entrega',
      title: 'Mais de 15 anos criando pistas que unem debutante e amigos.',
      paragraphs: [
        'Uma festa de 15 anos exige mais que caixas de som; <strong>ela precisa equilibrar um fluxo narrativo dinâmico</strong> passando por cerimonial, valsas e homenagens até finalmente explodir na balada impecável na hora certa.',
        'A minha entrega e curadoria são moldadas <strong>para blindar o evento contra quedas de energia</strong>, garantindo que a pista sustente todas as gerações da família.',
      ],
      primaryImageSrc: '/imagens/fotoDJ.JPG',
      primaryImageAlt: 'DJ Japa em performance ao vivo',
      secondaryImageSrc: '/imagens/japa1.jpg',
      secondaryImageAlt: 'DJ Japa em ambiente de pista',
      ctaLabel: 'Solicitar proposta',
    },
    process: {
      kicker: 'O Processo',
      title: 'A Condução de uma',
      highlight: 'Festa Memorável',
      steps: [
        {
          icon: 'coffee',
          title: 'O Briefing',
          description:
            'Alinhamento com a debutante para traçar o DNA da festa, os hits indispensáveis e principalmente as faixas proibidas.',
          mediaType: 'image',
          mediaSrc: processMedia.alignment,
          mediaAlt: 'Briefing para festa de 15 anos',
          mediaPositionClassName: 'object-top',
        },
        {
          icon: 'music',
          title: 'A Curadoria',
          description:
            'A construção minuciosa dos blocos musicais: da trilha sonora clássica da valsa à surpresa nas coreografias com muita pressão.',
          mediaType: 'image',
          mediaSrc: processMedia.curation,
          mediaAlt: 'Curadoria musical para 15 anos',
          mediaPositionClassName: 'object-top',
        },
        {
          icon: 'speaker',
          title: 'A Estrutura',
          description:
            'Som cristalino e iluminação de impacto que transportam a atmosfera do local para o clima de um club premium exclusivo.',
          mediaType: 'video',
          mediaSrc: processMedia.structure,
          mediaAlt: 'Estrutura de som e luz para 15 anos',
          mediaPositionClassName: 'object-center',
        },
        {
          icon: 'party',
          title: 'A Pista',
          description:
            'Toda a execução focada no controle de clima e de transições que mantêm jovens, pais e convidados pulando até o amanhecer.',
          mediaType: 'image',
          mediaSrc: processMedia.execution,
          mediaAlt: 'Pista animada em festa de 15 anos',
          mediaPositionClassName: 'object-center',
        },
      ],
    },
    stories: {
      kicker: 'Momentos-chave',
      title: 'Uma balada de 15 anos precisa brilhar em',
      highlight: 'todos os blocos',
      variant: 'story',
      ctaLabel: 'Quero essa experiência',
      items: [
        {
          title: 'Entrada da debutante',
          text: 'Abertura imponente, cortes de silêncio e timing cirúrgico para a passagem épica, garantindo um primeiro impacto fortíssimo.',
          mediaType: 'image',
          mediaSrc: '/imagens/principal.JPG',
          mediaAlt: 'DJ Japa iniciando a festa',
        },
        {
          title: 'Valsa, homenagens e coreografias',
          text: 'Entregas musicais cronometradas ao protocolo social e à performance da estrela da noite.',
          mediaType: 'image',
          mediaSrc: '/imagens/japa2.jpg',
          mediaAlt: 'Retrato do DJ Japa para evento social',
        },
        {
          title: 'Balada épica final',
          text: 'Variações intensas no som que engajam todos na pista de dança e fazem do auge a parte mais esperada do evento.',
          mediaType: 'image',
          mediaSrc: '/imagens/japa1.jpg',
          mediaAlt: 'DJ Japa em ambiente de festa',
        },
      ],
    },
    contact: {
      kicker: 'Planeje a sua Data',
      title: 'Prontos para uma festa',
      highlight: 'de 15 anos inesquecível?',
      description:
        'Peça um orçamento de serviço e repertório personalizado para elevar o protagonismo com uma pressão sonora diferenciada.',
      backgroundImageSrc: '/imagens/principal.JPG',
      backgroundImageAlt: 'DJ Japa sorrindo durante evento',
      formTitle: 'Solicitar Proposta',
      formSubtitle: 'Atendimento para 15 anos',
      nameLabel: 'Nome da Debutante *',
      namePlaceholder: 'Ex: Ana Clara',
      dateLabel: 'Data da Festa *',
      buttonLabel: 'Solicitar Proposta VIP',
      whatsappTemplate:
        'Olá, DJ Japa! Sou *{nome}* e minha festa de 15 anos será no dia *{data}*.',
      whatsappFollowUp:
        'Quero entrar com o pé direito através da sua assessoria e ter absoluta convicção musical para nossa noite.',
      floatingWhatsappMessage:
        'Olá! Gostaria de uma proposta exclusiva para minha festa de 15 anos.',
    },
    footerDescription:
      'Site voltado para agendamento online da DJ Japa com foco comercial estratégico e SEO bem resolvido.',
  },
};

export function getLandingContent(slug: EventLandingSlug) {
  return landingContent[slug];
}

export function buildLandingMetadata(content: EventLandingContent): Metadata {
  return {
    title: content.metadataTitle,
    description: content.metadataDescription,
    alternates: {
      canonical: content.path,
    },
    openGraph: {
      type: 'website',
      locale: siteConfig.locale,
      siteName: siteConfig.name,
      title: content.metadataTitle,
      description: content.metadataDescription,
      url: absoluteUrl(content.path),
      images: [
        {
          url: absoluteUrl(content.ogImage),
          width: 1200,
          height: 630,
          alt: content.serviceName,
        },
      ],
    },
    twitter: {
      card: 'summary_large_image',
      title: content.metadataTitle,
      description: content.metadataDescription,
      images: [absoluteUrl(content.ogImage)],
    },
  };
}

export function buildLandingStructuredData(content: EventLandingContent) {
  const pageUrl = absoluteUrl(content.path);

  return {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': 'WebSite',
        '@id': `${absoluteUrl('/')}#website`,
        url: absoluteUrl('/'),
        name: siteConfig.name,
        alternateName: siteConfig.alternateName,
        inLanguage: 'pt-BR',
      },
      {
        '@type': 'Organization',
        '@id': `${absoluteUrl('/')}#organization`,
        url: absoluteUrl('/'),
        name: siteConfig.name,
        alternateName: siteConfig.alternateName,
        telephone: siteConfig.phoneE164,
        image: absoluteUrl(siteConfig.ogImage),
        logo: absoluteUrl(siteConfig.logo),
        contactPoint: [
          {
            '@type': 'ContactPoint',
            contactType: 'sales',
            telephone: siteConfig.phoneE164,
            availableLanguage: ['Portuguese'],
            url: `https://wa.me/${siteConfig.whatsappNumber}`,
          },
        ],
      },
      {
        '@type': 'WebPage',
        '@id': `${pageUrl}#webpage`,
        url: pageUrl,
        name: content.metadataTitle,
        description: content.metadataDescription,
        isPartOf: {
          '@id': `${absoluteUrl('/')}#website`,
        },
        about: {
          '@id': `${pageUrl}#service`,
        },
      },
      {
        '@type': 'Service',
        '@id': `${pageUrl}#service`,
        name: content.serviceName,
        description: content.metadataDescription,
        url: pageUrl,
        provider: {
          '@id': `${absoluteUrl('/')}#organization`,
        },
      },
    ],
  };
}
