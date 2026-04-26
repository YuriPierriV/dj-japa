'use client';

import { useState, useEffect } from 'react';
import { ArrowRight, PlayCircle } from 'lucide-react';
import Image from 'next/image';
import { motion, AnimatePresence } from 'framer-motion';
import JLogo from '@/components/JLogo';
import { trackContactIntent } from '@/lib/tracking';

type HeroSectionProps = {
  eyebrow: string;
  intro: string;
  phrases: string[];
  imageSrc: string;
  imageAlt: string;
  videoSrc?: string;
  secondaryCtaLabel: string;
  trackingPrefix: string;
};

export default function HeroSection({
  eyebrow,
  intro,
  phrases,
  imageSrc,
  imageAlt,
  videoSrc,
  secondaryCtaLabel,
  trackingPrefix,
}: HeroSectionProps) {
  const [index, setIndex] = useState(0);
  const phraseCount = phrases.length;

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % phraseCount);
    }, 4000);
    return () => clearInterval(interval);
  }, [phraseCount]);

  return (
    <section className="relative w-full bg-wedding-sand pt-4 sm:pt-8 pb-4 sm:pb-8">
      <div className="relative mx-auto w-[96%] max-w-[1600px] flex flex-col items-center justify-center overflow-hidden rounded-t-[2.5rem] bg-zinc-900 pb-28 pt-20 shadow-[0_20px_40px_rgba(0,0,0,0.3)] sm:rounded-t-[3.5rem] sm:pb-36 sm:pt-28">

        <div className="absolute inset-0 h-full w-full">
          {videoSrc ? (
            <video
              src={videoSrc}
              poster={imageSrc}
              autoPlay
              muted
              loop
              playsInline
              preload="auto"
              aria-hidden="true"
              className="absolute inset-0 h-full w-full object-cover object-center opacity-80"
            />
          ) : (
            <Image
              src={imageSrc}
              alt={imageAlt}
              fill
              priority
              className="object-cover object-center opacity-80"
              sizes="100vw"
            />
          )}
          <div className="absolute inset-0 bg-zinc-950/60" />
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-zinc-950/20 via-zinc-950/70 to-zinc-950/95" />
        </div>

        <div className="relative z-10 flex w-full flex-col items-center px-4 text-center sm:px-6">

          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1.5, ease: 'easeOut' }}
            className="mb-8 h-14 w-14 drop-shadow-[0_0_15px_rgba(201,166,113,0.3)] sm:mb-10 sm:h-20 sm:w-20"
          >
            <JLogo className="h-full w-full text-wedding-gold" />
          </motion.div>

          <h2 className="mb-6 inline-block border-b border-wedding-gold/20 px-4 pb-2 text-[9px] font-bold uppercase tracking-[0.3em] text-wedding-gold sm:mb-8 sm:text-xs">
            {eyebrow}
          </h2>

          <h1 className="flex w-full max-w-4xl flex-col items-center font-serif text-[2.2rem] sm:text-5xl md:text-6xl lg:text-[4.5rem] font-medium tracking-tight text-white drop-shadow-2xl">
            <span className="mb-2 block leading-[1.15] sm:leading-[1.1] [text-wrap:balance]">
              {intro}
            </span>
            <div className="flex min-h-[3em] sm:min-h-[1.5em] w-full items-center justify-center">
              <AnimatePresence mode="wait">
                <motion.span
                  key={index}
                  initial={{ opacity: 0, y: 10, filter: 'blur(5px)' }}
                  animate={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
                  exit={{ opacity: 0, y: -10, filter: 'blur(5px)' }}
                  transition={{ duration: 0.8, ease: 'easeOut' }}
                  className="block px-2 italic font-bold leading-[1.1] text-wedding-gold drop-shadow-[0_0_15px_rgba(201,166,113,0.6)] [text-wrap:balance]"
                >
                  {phrases[index]}
                </motion.span>
              </AnimatePresence>
            </div>
          </h1>

          <div className="mt-10 sm:mt-14 flex flex-col items-center gap-3 sm:gap-4">
            <a
              href="#contato"
              onClick={() => trackContactIntent(`${trackingPrefix}_hero_cta`)}
              className="group relative flex items-center justify-center gap-3 overflow-hidden rounded-sm bg-wedding-gold px-8 py-4 font-serif text-xs uppercase tracking-[0.15em] text-white ring-1 ring-wedding-gold/30 ring-offset-4 ring-offset-zinc-950/40 transition-all hover:scale-[1.02] hover:bg-[#b89568] sm:px-12 sm:py-5 sm:text-sm sm:tracking-[0.2em]"
            >
              <span className="relative z-10 flex items-center gap-3">
                Fazer Orçamento
                <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1 sm:h-5 sm:w-5" strokeWidth={2} />
              </span>
            </a>
            <a
              href="#depoimentos"
              onClick={() => trackContactIntent(`${trackingPrefix}_hero_proof_cta`)}
              className="group inline-flex items-center justify-center gap-2 font-serif text-xs uppercase tracking-[0.18em] text-white/85 underline-offset-[6px] transition-colors hover:text-wedding-gold hover:underline sm:text-sm sm:tracking-[0.22em]"
            >
              <PlayCircle className="h-4 w-4 transition-transform group-hover:scale-110 sm:h-[18px] sm:w-[18px]" strokeWidth={1.5} />
              {secondaryCtaLabel}
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
