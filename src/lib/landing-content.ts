import type { Metadata } from 'next';
import { absoluteUrl, siteConfig } from '@/lib/site';

export type EventLandingSlug = 'casamento' | 'debutante' | 'festa-corporativa';
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
    videoSrc?: string;
    secondaryCtaLabel: string;
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

import { casamento as imgCasamento, debutante as imgDebutante, 'festa-corporativa' as imgCorporativo } from '@/data/landingImages.json';

export const landingContent: Record<EventLandingSlug, EventLandingContent> = {
  casamento: {
    slug: 'casamento',
    path: '/casamento',
    serviceName: 'DJ para casamento premium',
    metadataTitle: 'DJ para casamento premium | DJ Japa',
    metadataDescription:
      'DJ para casamento com curadoria musical personalizada, estrutura premium e atendimento via WhatsApp para cerimônia, recepção e pista.',
    ogImage: imgCasamento.hero,
    hero: {
      eyebrow: 'DJ para Casamento Premium',
      intro: 'A trilha sonora perfeita para',
      phrases: [
        'o seu casamento.',
        'a festa dos sonhos.',
        'a sua história.',
        'uma noite inesquecível.',
      ],
      imageSrc: imgCasamento.hero,
      imageAlt: 'Pista de casamento comandada pelo DJ Japa',
      videoSrc: imgCasamento.heroVideo ?? undefined,
      secondaryCtaLabel: 'Ver casamentos reais',
    },
    about: {
      kicker: 'A Garantia',
      title: 'Mais de 15 anos entregando DJ para casamento com pista viva.',
      paragraphs: [
        'O sucesso do seu casamento <strong>não acontece por acaso</strong>. Ele nasce de leitura de pista contínua, o repertório certo na hora exata e de uma estrutura robusta que <strong>sustenta cada momento importante da noite</strong> sem oscilações.',
        'Da cerimônia ao último bloco da madrugada, a minha entrega é milimetricamente desenhada para garantir <strong>uma pista viva, elegante, e com a energia no teto</strong> até as luzes se acenderem.',
      ],
      primaryImageSrc: imgCasamento.about.primary,
      primaryImageAlt: 'DJ Japa se apresentando em evento premium',
      secondaryImageSrc: imgCasamento.about.secondary,
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
          mediaType: imgCasamento.process.alignment.type as 'image' | 'video',
          mediaSrc: imgCasamento.process.alignment.src,
          mediaAlt: 'Alinhamento de repertório para casamento',
          mediaPositionClassName: 'object-top',
        },
        {
          icon: 'music',
          title: 'A Curadoria',
          description:
            'Construção da identidade sonora da sua festa, com transições mapeadas e blocos desenhados com ritmo certo para cada etapa da celebração.',
          mediaType: imgCasamento.process.curation.type as 'image' | 'video',
          mediaSrc: imgCasamento.process.curation.src,
          mediaAlt: 'Curadoria musical para casamento',
          mediaPositionClassName: 'object-top',
        },
        {
          icon: 'speaker',
          title: 'A Estrutura',
          description:
            'Montagem de equipamentos de áudio premium, com presença visual limpa e alta fidelidade acústica para a cerimônia, a recepção e a balada.',
          mediaType: imgCasamento.process.structure.type as 'image' | 'video',
          mediaSrc: imgCasamento.process.structure.src,
          mediaAlt: 'Estrutura de som e iluminação para casamento',
          mediaPositionClassName: 'object-center',
        },
        {
          icon: 'party',
          title: 'A Execução',
          description:
            'Leitura de pista afiada e timing preciso durante o casamento para manter a energia da festa sempre no alto.',
          mediaType: imgCasamento.process.execution.type as 'image' | 'video',
          mediaSrc: imgCasamento.process.execution.src,
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
          mediaType: imgCasamento.stories[0].type as 'image' | 'video',
          mediaSrc: imgCasamento.stories[0].src,
          mediaAlt: 'Pista de casamento lotada',
        },
        {
          title: 'Mariana & Felipe',
          text: 'Sensibilidade total para conduzir a energia da recepção até a balada pesada. A festa ficou super elegante e imersiva do início ao final.',
          mediaType: imgCasamento.stories[1].type as 'image' | 'video',
          mediaSrc: imgCasamento.stories[1].src,
          mediaAlt: 'Convidados celebrando em casamento',
        },
        {
          title: 'Bruna & Caio',
          text: 'Som cristalino, transições perfeitas e atendimento incrivelmente próximo desde o primeiro bate-papo. A entrega visual e sonora foi digna de cinema.',
          mediaType: imgCasamento.stories[2].type as 'image' | 'video',
          mediaSrc: imgCasamento.stories[2].src,
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
      backgroundImageSrc: imgCasamento.contact,
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
      'DJ Japa, mais de 15 anos transformando casamentos em noites inesquecíveis com som de alta fidelidade e pista cheia do início ao fim.',
  },
  debutante: {
    slug: 'debutante',
    path: '/debutante',
    serviceName: 'DJ para debutante premium',
    metadataTitle: 'DJ para Debutante Premium | DJ Japa',
    metadataDescription:
      'DJ para festa de debutante com entrada épica, valsa impecável, coreografias e balada que ninguém esquece. Proposta personalizada.',
    ogImage: imgDebutante.hero,
    hero: {
      eyebrow: 'DJ para Debutante Premium',
      intro: 'A noite mais especial da sua vida merece',
      phrases: [
        'a trilha sonora dos sonhos.',
        'uma entrada inesquecível.',
        'uma pista que não para.',
        'memórias para sempre.',
      ],
      imageSrc: imgDebutante.hero,
      imageAlt: 'DJ Japa comandando festa de debutante',
      videoSrc: imgDebutante.heroVideo ?? undefined,
      secondaryCtaLabel: 'Ver festas reais',
    },
    about: {
      kicker: 'O Momento',
      title: '15 anos acontece uma vez. A pista precisa honrar cada segundo.',
      paragraphs: [
        'Sua festa de 15 anos não é um evento qualquer. <strong>É o marco mais especial da sua vida até aqui</strong>. Da entrada épica às coreografias ensaiadas, cada bloco carrega uma emoção diferente que precisa ser traduzida em som impecável.',
        'Com mais de 15 anos de experiência em debutantes de alto padrão, eu construo uma <strong>jornada musical que emociona, impressiona e faz todo mundo falar da sua festa por anos</strong>.',
      ],
      primaryImageSrc: imgDebutante.about.primary,
      primaryImageAlt: 'DJ Japa em performance ao vivo',
      secondaryImageSrc: imgDebutante.about.secondary,
      secondaryImageAlt: 'DJ Japa em ambiente de pista',
      ctaLabel: 'Garantir minha data',
    },
    process: {
      kicker: 'O Processo',
      title: 'A Construção de uma',
      highlight: 'Noite Mágica',
      steps: [
        {
          icon: 'coffee',
          title: 'O Briefing',
          description:
            'Conversa aprofundada para entender sua vibe, os hits favoritos da galera e as músicas que não podem tocar de jeito nenhum.',
          mediaType: imgDebutante.process.alignment.type as 'image' | 'video',
          mediaSrc: imgDebutante.process.alignment.src,
          mediaAlt: 'Briefing para debutante',
          mediaPositionClassName: 'object-top',
        },
        {
          icon: 'music',
          title: 'A Curadoria',
          description:
            'Roteiro musical completo: da abertura dramática da entrada à valsa, coreografias, homenagens e a balada épica que fecha com chave de ouro.',
          mediaType: imgDebutante.process.curation.type as 'image' | 'video',
          mediaSrc: imgDebutante.process.curation.src,
          mediaAlt: 'Curadoria musical para debutante',
          mediaPositionClassName: 'object-top',
        },
        {
          icon: 'speaker',
          title: 'A Estrutura',
          description:
            'Equipamentos de ponta que transformam qualquer salão em um club exclusivo feito sob medida só para você.',
          mediaType: imgDebutante.process.structure.type as 'image' | 'video',
          mediaSrc: imgDebutante.process.structure.src,
          mediaAlt: 'Estrutura premium para debutante',
          mediaPositionClassName: 'object-center',
        },
        {
          icon: 'party',
          title: 'A Pista',
          description:
            'Controle absoluto da energia para que jovens, adultos e toda a família dancem juntos e a noite vire memória para sempre.',
          mediaType: imgDebutante.process.execution.type as 'image' | 'video',
          mediaSrc: imgDebutante.process.execution.src,
          mediaAlt: 'Pista animada em festa de debutante',
          mediaPositionClassName: 'object-center',
        },
      ],
    },
    stories: {
      kicker: 'Momentos-chave',
      title: 'Uma debutante de verdade brilha em',
      highlight: 'cada bloco da noite',
      variant: 'story',
      ctaLabel: 'Quero essa experiência',
      items: [
        {
          title: 'A entrada que para tudo',
          text: 'Timing milimétrico, corte de silêncio e a música perfeita no momento exato. Sua entrada será o pico emocional da noite. Todo mundo vai pausar, olhar e sentir.',
          mediaType: imgDebutante.stories[0].type as 'image' | 'video',
          mediaSrc: imgDebutante.stories[0].src,
          mediaAlt: 'Abertura épica de festa de debutante',
        },
        {
          title: 'Valsa, surpresas e coreografias',
          text: 'Cada performance cronometrada ao segundo. A debutante brilha no centro das atenções com backing sonoro impecável que garante que tudo saia como ensaiado.',
          mediaType: imgDebutante.stories[1].type as 'image' | 'video',
          mediaSrc: imgDebutante.stories[1].src,
          mediaAlt: 'DJ Japa em evento social de debutante',
        },
        {
          title: 'A balada que ninguém quer que acabe',
          text: 'Do hit atual ao clássico que todo mundo sabe de cor, a pista fica cheia até a última música. Seus amigos vão pedir bis e você vai adorar cada segundo.',
          mediaType: imgDebutante.stories[2].type as 'image' | 'video',
          mediaSrc: imgDebutante.stories[2].src,
          mediaAlt: 'DJ Japa animando a pista',
        },
      ],
    },
    contact: {
      kicker: 'Reserve sua Data',
      title: 'Sua festa de 15 anos',
      highlight: 'começa aqui.',
      description:
        'As datas exclusivas enchem rápido. Preencha agora e receba uma proposta personalizada para o dia mais especial da sua vida.',
      backgroundImageSrc: imgDebutante.contact,
      backgroundImageAlt: 'DJ Japa em apresentação ao vivo',
      formTitle: 'Solicitar Proposta',
      formSubtitle: 'Atendimento Exclusivo',
      nameLabel: 'Nome da Debutante *',
      namePlaceholder: 'Ex: Isabela',
      dateLabel: 'Data da Festa *',
      buttonLabel: 'Quero Minha Proposta VIP',
      whatsappTemplate:
        'Olá, DJ Japa! Meu nome é *{nome}* e minha festa de 15 anos será no dia *{data}*.',
      whatsappFollowUp:
        'Quero uma entrada épica, a valsa perfeita e uma pista que não para. Adoraria receber uma proposta especial!',
      floatingWhatsappMessage:
        'Olá! Gostaria de saber mais sobre DJ para minha festa de 15 anos.',
    },
    footerDescription:
      'DJ Japa, referência em festas de debutante com entrada épica, valsa perfeita e pista animada que transforma a noite em memória para sempre.',
  },
  'festa-corporativa': {
    slug: 'festa-corporativa',
    path: '/festa-corporativa',
    serviceName: 'DJ para eventos corporativos',
    metadataTitle: 'DJ para Eventos Corporativos | DJ Japa',
    metadataDescription:
      'DJ para confraternização, premiação e eventos corporativos. Estrutura profissional, pontualidade absoluta e repertório calibrado para engajar toda a equipe.',
    ogImage: imgCorporativo.hero,
    hero: {
      eyebrow: 'DJ para Eventos Corporativos',
      intro: 'A festa da empresa que',
      phrases: [
        'todo mundo vai lembrar.',
        'engaja e une o time.',
        'eleva a imagem da marca.',
        'impressiona clientes e parceiros.',
      ],
      imageSrc: imgCorporativo.hero,
      imageAlt: 'DJ Japa em evento corporativo premium',
      videoSrc: imgCorporativo.heroVideo ?? undefined,
      secondaryCtaLabel: 'Ver eventos reais',
    },
    about: {
      kicker: 'A Diferença',
      title: 'Eventos corporativos que fidelizam equipes e impressionam parceiros.',
      paragraphs: [
        'Uma festa corporativa bem executada <strong>vale mais do que meses de discurso motivacional</strong>. É o momento em que a empresa mostra que se importa com as pessoas, e a trilha sonora é o elemento que define se o evento vai ser esquecível ou memorável.',
        'Com pontualidade de relógio, <strong>repertório calibrado para o perfil da sua empresa</strong> e estrutura que não dá margem para falhas técnicas, garanto que o seu evento eleve o moral do time e fortaleça a imagem da marca.',
      ],
      primaryImageSrc: imgCorporativo.about.primary,
      primaryImageAlt: 'DJ Japa em evento corporativo',
      secondaryImageSrc: imgCorporativo.about.secondary,
      secondaryImageAlt: 'DJ Japa em performance profissional',
      ctaLabel: 'Solicitar proposta',
    },
    process: {
      kicker: 'O Processo',
      title: 'A Execução de um',
      highlight: 'Evento Impecável',
      steps: [
        {
          icon: 'coffee',
          title: 'O Briefing Corporativo',
          description:
            'Entendimento completo do perfil da empresa, faixa etária dos colaboradores, objetivos do evento e nível de formalidade esperado.',
          mediaType: imgCorporativo.process.alignment.type as 'image' | 'video',
          mediaSrc: imgCorporativo.process.alignment.src,
          mediaAlt: 'Briefing para evento corporativo',
          mediaPositionClassName: 'object-top',
        },
        {
          icon: 'music',
          title: 'A Curadoria Estratégica',
          description:
            'Repertório construído para criar engajamento gradual: do momento de network descontraído ao clímax da pista que une toda a empresa.',
          mediaType: imgCorporativo.process.curation.type as 'image' | 'video',
          mediaSrc: imgCorporativo.process.curation.src,
          mediaAlt: 'Curadoria musical para evento corporativo',
          mediaPositionClassName: 'object-top',
        },
        {
          icon: 'speaker',
          title: 'A Estrutura Profissional',
          description:
            'Equipamentos premium montados com antecedência e suporte técnico presente que garante zero falhas e zero surpresas durante o evento.',
          mediaType: imgCorporativo.process.structure.type as 'image' | 'video',
          mediaSrc: imgCorporativo.process.structure.src,
          mediaAlt: 'Estrutura de som para evento corporativo',
          mediaPositionClassName: 'object-center',
        },
        {
          icon: 'party',
          title: 'A Execução Impecável',
          description:
            'Presença profissional e discreta que lê a sala, adapta o ritmo e mantém a energia no nível certo do coquetel ao encerramento.',
          mediaType: imgCorporativo.process.execution.type as 'image' | 'video',
          mediaSrc: imgCorporativo.process.execution.src,
          mediaAlt: 'DJ Japa em execução de evento corporativo',
          mediaPositionClassName: 'object-center',
        },
      ],
    },
    stories: {
      kicker: 'Cases & Depoimentos',
      title: 'Empresas que transformaram',
      highlight: 'sua festa em resultado',
      variant: 'testimonial',
      ctaLabel: 'Quero o mesmo para minha empresa',
      items: [
        {
          title: 'Confraternização de fim de ano',
          text: 'A equipe ficou na pista até o fim. O repertório agradou do estagiário ao CEO e o feedback foi unânime: a melhor confraternização que já fizemos.',
          mediaType: imgCorporativo.stories[0].type as 'image' | 'video',
          mediaSrc: imgCorporativo.stories[0].src,
          mediaAlt: 'Pista animada em evento corporativo',
        },
        {
          title: 'Premiação e reconhecimento',
          text: 'Pontualidade total, estrutura de primeira e trilha sonora que deu o tom certo para cada momento. Profissionalismo do início ao fim, sem nenhuma intercorrência.',
          mediaType: imgCorporativo.stories[1].type as 'image' | 'video',
          mediaSrc: imgCorporativo.stories[1].src,
          mediaAlt: 'DJ Japa em premiação corporativa',
        },
        {
          title: 'Lançamento de produto',
          text: 'A atmosfera sonora certa elevou a energia do nosso lançamento. Parceiros e clientes saíram impressionados, e parte do crédito foi para a experiência que o DJ criou.',
          mediaType: imgCorporativo.stories[2].type as 'image' | 'video',
          mediaSrc: imgCorporativo.stories[2].src,
          mediaAlt: 'DJ Japa em evento de lançamento',
        },
      ],
    },
    contact: {
      kicker: 'Planeje o Seu Evento',
      title: 'Sua empresa merece uma festa',
      highlight: 'à altura da equipe.',
      description:
        'Solicite agora uma proposta personalizada. Atendemos confraternizações, premiações, lançamentos e eventos corporativos de qualquer porte.',
      backgroundImageSrc: imgCorporativo.contact,
      backgroundImageAlt: 'DJ Japa em apresentação ao vivo',
      formTitle: 'Solicitar Proposta',
      formSubtitle: 'Atendimento Corporativo',
      nameLabel: 'Empresa / Responsável *',
      namePlaceholder: 'Ex: Ana Lima, Empresa XYZ',
      dateLabel: 'Data do Evento *',
      buttonLabel: 'Solicitar Proposta Corporativa',
      whatsappTemplate:
        'Olá, DJ Japa! Sou *{nome}* e estamos planejando um evento corporativo para o dia *{data}*.',
      whatsappFollowUp:
        'Queremos uma trilha sonora impecável que engaje toda a equipe. Poderia nos enviar uma proposta?',
      floatingWhatsappMessage:
        'Olá! Gostaria de uma proposta de DJ para evento corporativo.',
    },
    footerDescription:
      'DJ Japa, DJ profissional para eventos corporativos com pontualidade, estrutura premium e repertório calibrado para engajar toda a equipe.',
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
        '@type': ['LocalBusiness', 'Organization'],
        '@id': `${absoluteUrl('/')}#organization`,
        url: absoluteUrl('/'),
        name: siteConfig.name,
        alternateName: siteConfig.alternateName,
        telephone: siteConfig.phoneE164,
        image: absoluteUrl(siteConfig.ogImage),
        logo: absoluteUrl(siteConfig.logo),
        priceRange: siteConfig.priceRange,
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
        serviceType: content.serviceName,
        areaServed: siteConfig.areaServed.map((name) => ({
          '@type': 'AdministrativeArea',
          name,
        })),
        provider: {
          '@id': `${absoluteUrl('/')}#organization`,
        },
      },
    ],
  };
}
