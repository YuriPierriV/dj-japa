'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import { Quote } from 'lucide-react';
import { trackContactIntent } from '@/lib/tracking';

type TestimonialsSectionProps = {
  kicker: string;
  title: string;
  highlight: string;
  variant: 'testimonial' | 'story';
  ctaLabel: string;
  trackingPrefix: string;
  items: Array<{
    title: string;
    text: string;
    mediaType: 'image' | 'video';
    mediaSrc: string;
    mediaAlt: string;
  }>;
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
  return (
    <section id="depoimentos" className="py-24 bg-wedding-sand">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <div className="text-center mb-20">
          <div className="flex items-center justify-center gap-4 mb-4">
            <div className="h-[1px] w-12 bg-wedding-navy/30"></div>
            <span className="uppercase tracking-[0.2em] text-xs font-bold text-wedding-navy">
              {kicker}
            </span>
            <div className="h-[1px] w-12 bg-wedding-navy/30"></div>
          </div>
          <h2 className="font-serif text-4xl lg:text-5xl font-medium text-wedding-navy leading-tight">
            {title} <span className="italic font-bold">{highlight}</span>
          </h2>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 lg:gap-10">
          {items.map((item, index) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.15 }}
              className="flex flex-col group bg-wedding-white rounded-sm overflow-hidden shadow-lg border border-wedding-navy/5"
            >
              {/* Media Part */}
              <div className="relative h-60 w-full overflow-hidden shrink-0">
                {item.mediaType === 'video' ? (
                  <video
                    src={item.mediaSrc}
                    autoPlay
                    muted
                    loop
                    playsInline
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                ) : (
                  <Image
                    src={item.mediaSrc}
                    alt={item.mediaAlt}
                    fill
                    className="object-cover transition-transform duration-700 group-hover:scale-105"
                    sizes="(max-width: 1024px) 100vw, 33vw"
                  />
                )}
                {/* Subtle Overlay */}
                <div className="absolute inset-0 bg-wedding-navy/10 group-hover:bg-transparent transition-colors duration-500" />
              </div>

              {/* Testimonial Text Part */}
              <div className="p-8 sm:p-10 flex flex-col flex-1 relative bg-wedding-white">
                {variant === 'testimonial' ? (
                  <Quote className="absolute top-6 left-6 w-12 h-12 text-wedding-gold/10 rotate-180" />
                ) : null}
                <p className={`relative z-10 mt-2 mb-8 flex-1 leading-relaxed text-wedding-navy ${variant === 'testimonial' ? 'text-lg font-medium italic' : 'text-base font-normal'}`}>
                  {variant === 'testimonial' ? `“${item.text}”` : item.text}
                </p>
                <div className="flex items-center gap-4 mt-auto">
                  <div className="w-8 h-[2px] bg-wedding-gold/60"></div>
                  <span className="font-serif text-wedding-navy text-xl font-bold">{item.title}</span>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        <div className="flex justify-center mt-16">
          <a
            href="#contato"
            onClick={() => trackContactIntent(`${trackingPrefix}_testimonials_cta`)}
            className="inline-flex items-center justify-center rounded-sm border border-wedding-navy bg-transparent px-10 py-5 font-serif text-sm uppercase tracking-[0.2em] text-wedding-navy transition-all duration-300 hover:bg-wedding-navy hover:text-wedding-white"
          >
            {ctaLabel}
          </a>
        </div>
      </div>
    </section>
  );
}
