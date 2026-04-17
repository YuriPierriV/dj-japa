'use client';

import { useState, useEffect } from 'react';
import { ArrowRight, ArrowDown } from 'lucide-react';
import Image from 'next/image';
import { motion, AnimatePresence } from 'framer-motion';
import landingImages from '@/data/landingImages.json';
import JLogo from '@/components/JLogo';

const phrases = [
  "o seu casamento.",
  "a festa dos sonhos.",
  "a sua história.",
  "uma noite inesquecível.",
];

export default function HeroSection() {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % phrases.length);
    }, 4000);

    return () => clearInterval(interval);
  }, []);

  return (
    <section className="relative min-h-[100vh] flex items-center justify-center overflow-hidden bg-wedding-dark">
      {/* Background Image with stronger vignette overlay for contrast against bright images */}
      <div className="absolute inset-0 w-full h-full">
        <Image
          src={landingImages.hero.background.route}
          alt="Casal celebrando com o DJ ao fundo na pista de dança"
          fill
          priority
          className="object-cover object-center scale-[1.02] animate-[slow-zoom_20s_ease-in-out_infinite_alternate]"
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-wedding-dark/50" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-wedding-dark/30 via-wedding-dark/80 to-wedding-dark opacity-90" />
      </div>

      <div className="relative z-10 w-full max-w-5xl mx-auto px-4 sm:px-6 text-center pt-24 pb-16 flex flex-col items-center">
        <div className="space-y-8 sm:space-y-10 lg:space-y-12 w-full">

          {/* Main Headline */}
          <div className="space-y-6 md:space-y-8 flex flex-col items-center">

            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 1.5, ease: "easeOut", delay: 0.2 }}
              className="relative w-16 h-16 md:w-20 md:h-20 mb-2 opacity-90 drop-shadow-[0_0_15px_rgba(201,166,113,0.3)]"
            >
              <JLogo className="w-full h-full hover:scale-105 transition-transform duration-700" />
            </motion.div>

            <h2 className="text-wedding-gold text-[10px] sm:text-xs md:text-sm tracking-[0.3em] uppercase font-bold drop-shadow-md px-4 border-b border-wedding-gold/20 pb-2 inline-block">
              Música & Energia
            </h2>

            <h1 className="font-serif text-4xl sm:text-6xl md:text-7xl lg:text-[5.5rem] font-medium text-wedding-white tracking-tight drop-shadow-2xl flex flex-col items-center w-full">
              <span className="block mb-2 md:mb-3 leading-[1.2] font-light">
                A <strong className="font-bold text-white tracking-wide">Trilha Sonora</strong> <br className="sm:hidden" />
                perfeita para
              </span>
              <div className="h-[1.5em] sm:h-[1.3em] flex flex-col justify-center items-center overflow-visible w-full">
                <AnimatePresence mode="wait">
                  <motion.span
                    key={index}
                    initial={{ opacity: 0, filter: 'blur(8px)', scale: 0.95 }}
                    animate={{ opacity: 1, filter: 'blur(0px)', scale: 1 }}
                    exit={{ opacity: 0, filter: 'blur(8px)', scale: 1.05 }}
                    transition={{ duration: 1.2, ease: "easeInOut" }}
                    className="italic text-wedding-gold block font-bold drop-shadow-[0_0_20px_rgba(201,166,113,0.7)]"
                  >
                    {phrases[index]}
                  </motion.span>
                </AnimatePresence>
              </div>
            </h1>
          </div>

          {/* Core Call to Action */}
          <div className="flex justify-center pt-8">
            <a
              href="#contato"
              className="group relative inline-flex items-center justify-center gap-4 overflow-hidden rounded-sm bg-wedding-gold px-8 py-5 sm:px-12 sm:py-6 font-serif text-sm sm:text-base uppercase tracking-[0.15em] sm:tracking-[0.2em] text-white transition-all duration-300 hover:bg-[#b89568] hover:scale-[1.02] hover:shadow-[0_0_40px_rgba(201,166,113,0.4)] ring-1 ring-wedding-gold/30 hover:ring-wedding-gold/60 ring-offset-4 ring-offset-wedding-dark/20"
            >
              <span className="relative z-10 flex items-center gap-3">
                Fazer Orçamento
                <ArrowRight className="h-5 w-5 transition-transform duration-300 group-hover:translate-x-2" strokeWidth={2} />
              </span>
            </a>
          </div>

        </div>
      </div>

      {/* Scroll Down Indicator replacing Trust Location */}
      <div className="absolute bottom-6 sm:bottom-10 left-1/2 -translate-x-1/2 z-20">
        <a href="#sobre" className="flex flex-col items-center gap-3 text-wedding-white/40 hover:text-wedding-white hover:drop-shadow-[0_0_15px_rgba(255,255,255,0.7)] transition-all duration-500">
          <span className="text-[9px] sm:text-[10px] uppercase tracking-[0.3em] font-light">Conheça o processo</span>
          <motion.div
            animate={{ y: [0, 8, 0] }}
            transition={{ repeat: Infinity, duration: 2, ease: "easeInOut" }}
          >
            <ArrowDown className="w-5 h-5 text-wedding-gold" strokeWidth={1.5} />
          </motion.div>
        </a>
      </div>

      {/* Decorative Line */}
      <div className="absolute bottom-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-wedding-gold/20 to-transparent" />
    </section>
  );
}
