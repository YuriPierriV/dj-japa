'use client';

import { useEffect, useRef, useState } from 'react';
import Image from 'next/image';
import { Quote, Volume2, VolumeX } from 'lucide-react';
import { trackContactIntent } from '@/lib/tracking';

type TestimonialItem = {
  title: string;
  text: string;
  mediaType: 'image' | 'video';
  mediaSrc: string;
  mediaAlt: string;
};

type TestimonialsSectionProps = {
  kicker: string;
  title: string;
  highlight: string;
  variant: 'testimonial' | 'story';
  ctaLabel: string;
  trackingPrefix: string;
  items: TestimonialItem[];
};

export default function TestimonialsSection({
  kicker,
  title,
  highlight,
  variant,
  ctaLabel,
  trackingPrefix,
  items,
}: TestimonialsSectionProps) {
  const scrollRef = useRef<HTMLDivElement>(null);
  const [activeIndex, setActiveIndex] = useState(0);
  const [unmutedIndex, setUnmutedIndex] = useState<number | null>(null);

  useEffect(() => {
    const el = scrollRef.current;
    if (!el) return;
    const handler = () => {
      if (el.children.length === 0) return;
      const firstCard = el.children[0] as HTMLElement;
      const step = firstCard.offsetWidth + parseFloat(getComputedStyle(el).columnGap || '0');
      const i = Math.round(el.scrollLeft / step);
      setActiveIndex(Math.min(items.length - 1, Math.max(0, i)));
    };
    el.addEventListener('scroll', handler, { passive: true });
    return () => el.removeEventListener('scroll', handler);
  }, [items.length]);

  const goTo = (i: number) => {
    const el = scrollRef.current;
    if (!el || el.children.length === 0) return;
    const firstCard = el.children[0] as HTMLElement;
    const step = firstCard.offsetWidth + parseFloat(getComputedStyle(el).columnGap || '0');
    el.scrollTo({ left: step * i, behavior: 'smooth' });
  };

  return (
    <section id="depoimentos" className="py-16 lg:py-24 bg-wedding-sand overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-10 lg:mb-20 px-6 lg:px-12">
          <div className="flex items-center justify-center gap-4 mb-4">
            <div className="h-[1px] w-12 bg-wedding-navy/30"></div>
            <span className="uppercase tracking-[0.2em] text-xs font-bold text-wedding-navy">
              {kicker}
            </span>
            <div className="h-[1px] w-12 bg-wedding-navy/30"></div>
          </div>
          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-medium text-wedding-navy leading-tight">
            {title} <span className="italic font-bold">{highlight}</span>
          </h2>
        </div>

        <div
          ref={scrollRef}
          className="flex gap-4 sm:gap-6 lg:gap-10 overflow-x-auto lg:overflow-x-visible snap-x snap-mandatory lg:snap-none scroll-smooth px-6 lg:px-12 pb-2 lg:pb-0 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden"
        >
          {items.map((item, index) => (
            <article
              key={item.title}
              className="snap-center shrink-0 lg:shrink w-[85%] sm:w-[60%] lg:w-auto lg:flex-1 flex flex-col group bg-wedding-white rounded-sm overflow-hidden shadow-lg border border-wedding-navy/5"
            >
              <div className="relative aspect-[4/5] sm:aspect-[3/4] lg:aspect-[4/5] w-full overflow-hidden shrink-0 bg-wedding-navy/10">
                {item.mediaType === 'video' ? (
                  <>
                    <video
                      src={item.mediaSrc}
                      autoPlay
                      muted={unmutedIndex !== index}
                      loop
                      playsInline
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                    />
                    <button
                      type="button"
                      onClick={() =>
                        setUnmutedIndex(unmutedIndex === index ? null : index)
                      }
                      aria-label={
                        unmutedIndex === index ? 'Mutar vídeo' : 'Ouvir áudio do vídeo'
                      }
                      className="absolute bottom-3 right-3 z-10 flex h-10 w-10 items-center justify-center rounded-full bg-wedding-navy/70 text-white backdrop-blur-sm transition hover:bg-wedding-navy"
                    >
                      {unmutedIndex === index ? (
                        <Volume2 className="h-4 w-4" strokeWidth={2} />
                      ) : (
                        <VolumeX className="h-4 w-4" strokeWidth={2} />
                      )}
                    </button>
                  </>
                ) : (
                  <Image
                    src={item.mediaSrc}
                    alt={item.mediaAlt}
                    fill
                    className="object-cover transition-transform duration-700 group-hover:scale-105"
                    sizes="(max-width: 640px) 85vw, (max-width: 1024px) 60vw, 33vw"
                  />
                )}
                <div className="pointer-events-none absolute inset-0 bg-wedding-navy/10 group-hover:bg-transparent transition-colors duration-500" />
              </div>

              <div className="p-6 sm:p-8 lg:p-10 flex flex-col flex-1 relative bg-wedding-white">
                {variant === 'testimonial' ? (
                  <Quote className="absolute top-5 left-5 w-10 h-10 text-wedding-gold/10 rotate-180" />
                ) : null}
                <p
                  className={`relative z-10 mt-1 mb-6 flex-1 leading-relaxed text-wedding-navy ${
                    variant === 'testimonial'
                      ? 'text-base sm:text-lg font-medium italic'
                      : 'text-sm sm:text-base font-normal'
                  }`}
                >
                  {variant === 'testimonial' ? `“${item.text}”` : item.text}
                </p>
                <div className="flex items-center gap-4 mt-auto">
                  <div className="w-8 h-[2px] bg-wedding-gold/60"></div>
                  <span className="font-serif text-wedding-navy text-lg sm:text-xl font-bold">
                    {item.title}
                  </span>
                </div>
              </div>
            </article>
          ))}
        </div>

        <div className="flex justify-center gap-2 mt-6 lg:hidden" aria-hidden="true">
          {items.map((_, i) => (
            <button
              key={i}
              type="button"
              onClick={() => goTo(i)}
              aria-label={`Ir para depoimento ${i + 1}`}
              className={`h-1.5 rounded-full transition-all duration-300 ${
                activeIndex === i ? 'w-8 bg-wedding-navy' : 'w-1.5 bg-wedding-navy/30'
              }`}
            />
          ))}
        </div>

        <div className="flex justify-center mt-10 lg:mt-16 px-6 lg:px-12">
          <a
            href="#contato"
            onClick={() => trackContactIntent(`${trackingPrefix}_testimonials_cta`)}
            className="inline-flex items-center justify-center rounded-sm border border-wedding-navy bg-transparent px-8 py-4 sm:px-10 sm:py-5 font-serif text-xs sm:text-sm uppercase tracking-[0.2em] text-wedding-navy transition-all duration-300 hover:bg-wedding-navy hover:text-wedding-white"
          >
            {ctaLabel}
          </a>
        </div>
      </div>
    </section>
  );
}
