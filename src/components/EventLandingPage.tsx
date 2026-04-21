import AboutSection from '@/components/AboutSection';
import ContactSection from '@/components/ContactSection';
import DeliveryProcessSection from '@/components/DeliveryProcessSection';
import FloatingWhatsApp from '@/components/FloatingWhatsApp';
import HeroSection from '@/components/HeroSection';
import SiteFooter from '@/components/SiteFooter';
import TestimonialsSection from '@/components/TestimonialsSection';
import type { EventLandingContent } from '@/lib/landing-content';
import { buildLandingStructuredData } from '@/lib/landing-content';

type EventLandingPageProps = {
  content: EventLandingContent;
};

export default function EventLandingPage({ content }: EventLandingPageProps) {
  const structuredData = buildLandingStructuredData(content);

  return (
    <>
      <script
        dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
        type="application/ld+json"
      />
      <main className="min-h-screen">
        <HeroSection
          eyebrow={content.hero.eyebrow}
          imageAlt={content.hero.imageAlt}
          imageSrc={content.hero.imageSrc}
          intro={content.hero.intro}
          phrases={content.hero.phrases}
          trackingPrefix={content.slug}
        />
        <DeliveryProcessSection
          highlight={content.process.highlight}
          kicker={content.process.kicker}
          steps={content.process.steps}
          title={content.process.title}
        />
        <AboutSection
          ctaLabel={content.about.ctaLabel}
          kicker={content.about.kicker}
          paragraphs={content.about.paragraphs}
          primaryImageAlt={content.about.primaryImageAlt}
          primaryImageSrc={content.about.primaryImageSrc}
          secondaryImageAlt={content.about.secondaryImageAlt}
          secondaryImageSrc={content.about.secondaryImageSrc}
          title={content.about.title}
        />
        <TestimonialsSection
          ctaLabel={content.stories.ctaLabel}
          highlight={content.stories.highlight}
          items={content.stories.items}
          kicker={content.stories.kicker}
          title={content.stories.title}
          trackingPrefix={content.slug}
          variant={content.stories.variant}
        />
        <ContactSection
          backgroundImageAlt={content.contact.backgroundImageAlt}
          backgroundImageSrc={content.contact.backgroundImageSrc}
          buttonLabel={content.contact.buttonLabel}
          dateLabel={content.contact.dateLabel}
          description={content.contact.description}
          formSubtitle={content.contact.formSubtitle}
          formTitle={content.contact.formTitle}
          highlight={content.contact.highlight}
          kicker={content.contact.kicker}
          nameLabel={content.contact.nameLabel}
          namePlaceholder={content.contact.namePlaceholder}
          title={content.contact.title}
          trackingPrefix={content.slug}
          whatsappFollowUp={content.contact.whatsappFollowUp}
          whatsappTemplate={content.contact.whatsappTemplate}
        />
        <FloatingWhatsApp
          message={content.contact.floatingWhatsappMessage}
          trackingSource={`${content.slug}_floating_whatsapp`}
        />
      </main>
      <SiteFooter description={content.footerDescription} />
    </>
  );
}
