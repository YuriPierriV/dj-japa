'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';

type AboutSectionProps = {
  kicker: string;
  title: string;
  paragraphs: string[];
  primaryImageSrc: string;
  primaryImageAlt: string;
  secondaryImageSrc: string;
  secondaryImageAlt: string;
  ctaLabel: string;
};

export default function AboutSection({
  kicker,
  title,
  paragraphs,
  primaryImageSrc,
  primaryImageAlt,
  secondaryImageSrc,
  secondaryImageAlt,
  ctaLabel,
}: AboutSectionProps) {
  return (
    <section id="sobre" className="relative z-20 -mt-12 overflow-visible rounded-t-[2.5rem] bg-wedding-sand px-6 py-20 shadow-[0_-20px_40px_rgba(0,0,0,0.4)] sm:-mt-24 sm:rounded-t-[4rem] sm:px-12 sm:py-32">
      <div className="mx-auto max-w-6xl">

        {/* Storytelling Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
          className="mb-12 max-w-3xl sm:mb-20"
        >
          <div className="mb-4 flex items-center gap-4 sm:mb-6">
            <div className="h-[1px] w-12 bg-wedding-navy/40"></div>
            <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-wedding-navy">
              {kicker}
            </span>
          </div>
          <h2 className="font-serif text-[2.2rem] font-medium leading-[1.1] tracking-tight text-wedding-navy sm:text-5xl md:text-[3.5rem] [text-wrap:balance]">
            {title}
          </h2>
        </motion.div>

        {/* Layout Interativo / Storytelling */}
        <div className="grid items-start gap-12 lg:grid-cols-12 lg:gap-24">

          {/* Coluna Texto (Flow Guiado) */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="space-y-8 lg:col-span-5"
          >
            <div className="space-y-6 text-base font-light leading-relaxed text-wedding-muted sm:text-lg [&_strong]:font-medium [&_strong]:text-wedding-navy">
              {paragraphs.map((paragraph, i) => (
                <p key={i} className="leading-loose tracking-wide" dangerouslySetInnerHTML={{ __html: paragraph }} />
              ))}
            </div>

            <div className="pt-2 sm:pt-4">
              <a href="#contato" className="group inline-flex items-center gap-3 text-[11px] font-bold uppercase tracking-[0.2em] text-wedding-navy transition-colors hover:text-[#b89568] sm:text-xs">
                <span className="border-b border-wedding-navy/30 pb-1 transition-colors group-hover:border-[#b89568]">{ctaLabel}</span>
                <span className="mb-1 transition-transform group-hover:translate-x-1">→</span>
              </a>
            </div>
          </motion.div>

          {/* Coluna Visual (Bento Composition) */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="relative w-full max-w-2xl mx-auto lg:col-span-7 lg:max-w-none"
          >
            <div className="relative aspect-[4/5] w-full sm:aspect-[3/2] lg:aspect-[4/3]">

              {/* Foto Principal (Ao fundo, lado direito) */}
              <div className="absolute right-0 top-0 h-[85%] w-[85%] overflow-hidden rounded-2xl bg-zinc-200">
                <Image
                  src={primaryImageSrc}
                  alt={primaryImageAlt}
                  fill
                  className="object-cover object-center transition-transform hover:scale-105 duration-[2s]"
                  sizes="(max-width: 768px) 100vw, 50vw"
                />
              </div>

              {/* Foto Secundária (Flutuando na base esquerda) */}
              <div className="absolute bottom-0 left-0 h-[55%] w-[55%] overflow-hidden rounded-2xl border-8 border-wedding-sand bg-zinc-100 shadow-2xl">
                <Image
                  src={secondaryImageSrc}
                  alt={secondaryImageAlt}
                  fill
                  className="object-cover object-top transition-transform hover:scale-105 duration-[2s]"
                  sizes="(max-width: 768px) 100vw, 30vw"
                />
              </div>

            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
