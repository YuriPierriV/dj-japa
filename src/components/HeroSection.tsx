'use client';

import React, { useState, useRef, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Play, Calendar, Volume2, VolumeX } from 'lucide-react';

export default function HeroSection() {
  const videos = [
    '/vid1.mp4',
    '/vid2.mp4',
    '/vid3.mp4',
  ];
  const [current, setCurrent] = useState(0);
  const [mounted, setMounted] = useState(false);
  const [muted, setMuted] = useState(true);
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    setMounted(true);
  }, []);

  useEffect(() => {
    if (!mounted) return;
    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % videos.length);
    }, 8000);
    return () => clearInterval(interval);
  }, [mounted, videos.length]);

  const toggleMute = () => {
    setMuted((m) => !m);
    if (videoRef.current) {
      videoRef.current.muted = !muted;
    }
  };

  return (
  <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Vídeo de fundo carrossel */}
      <div className="absolute inset-0 z-0">
        <video
          key={videos[current]}
          ref={videoRef}
          className="w-full h-full object-cover brightness-[.55] saturate-150"
          autoPlay
          loop
          muted={muted}
          playsInline
          style={{ display: mounted ? 'block' : 'none' }}
        >
          <source src={videos[current]} type="video/mp4" />
          <source src={videos[current]} type="video/quicktime" />
          Seu navegador não suporta o vídeo. Tente usar um vídeo em formato .mp4 para máxima compatibilidade.
        </video>
        {/* Efeito de holofotes e overlay suave no vídeo */}
        <div className="absolute inset-0 pointer-events-none z-10">
          {/* Holofote esquerdo */}
          <div className="absolute left-1/4 top-0 w-1/3 h-full bg-gradient-to-br from-white/40 via-white/0 to-transparent rounded-full blur-2xl opacity-40 rotate-[-18deg]" style={{filter:'brightness(1.2)'}} />
          {/* Holofote direito */}
          <div className="absolute right-1/4 top-0 w-1/3 h-full bg-gradient-to-bl from-white/40 via-white/0 to-transparent rounded-full blur-2xl opacity-40 rotate-[18deg]" style={{filter:'brightness(1.2)'}} />
          {/* Overlay escuro suave para contraste geral */}
          <div className="absolute inset-0 bg-black/40" />
        </div>
        {/* Neon decorativo */}
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-neon-blue/20 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-neon-purple/20 rounded-full blur-3xl animate-pulse delay-1000"></div>
      </div>

      {/* Botão de mute/unmute */}
      <button
        onClick={toggleMute}
        className="absolute top-8 right-8 z-20 bg-black/40 hover:bg-black/70 p-3 rounded-full text-neon-blue transition-colors"
        aria-label={muted ? 'Ativar som' : 'Desativar som'}
      >
        {muted ? <VolumeX className="w-6 h-6" /> : <Volume2 className="w-6 h-6 animate-pulse" />}
      </button>

      {/* Troca manual de vídeo */}
      <div className="absolute bottom-8 right-8 z-20 flex gap-2">
        {videos.map((v, i) => (
          <button
            key={v}
            onClick={() => setCurrent(i)}
            className={`w-3 h-3 rounded-full border-2 border-neon-blue transition-all ${current === i ? 'bg-neon-blue scale-125' : 'bg-black/40'}`}
            aria-label={`Trocar para vídeo ${i + 1}`}
          />
        ))}
      </div>

      {/* Conteúdo principal */}
      <div className="relative z-20 text-center max-w-2xl mx-auto px-2 sm:px-4 flex flex-col items-center justify-center">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="space-y-8"
        >
          {/* Logo/Título do DJ com animação de batida */}
          <motion.h1
            initial={{ opacity: 0.5, scale: 0.9 }}
            animate={{ opacity: 1, scale: [1, 1.08, 1] }}
            transition={{ duration: 1.2, delay: 0.2, repeat: Infinity, repeatType: 'reverse', ease: 'easeInOut' }}
            className="text-2xl md:text-3xl lg:text-4xl font-bold font-japanese drop-shadow-[0_0_30px_rgba(16,215,255,0.4)]"
          >
            <span className="gradient-text block">DJ</span>
            <span className="text-japan-white japanese-glow">JAPA</span>
          </motion.h1>

          {/* Headline principal com efeito de "ondas sonoras" */}
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="text-base md:text-xl lg:text-2xl font-bold text-japan-white leading-tight flex flex-col items-center"
          >
            <span className="inline-block">Transforme seu evento em uma</span>
            <span className="gradient-text block mt-2 animate-pulse">experiência inesquecível</span>
            <span className="flex gap-1 justify-center mt-2">
              {[...Array(12)].map((_, i) => (
                <span
                  key={i}
                  className={`inline-block w-1.5 rounded-full bg-neon-blue animate-wave`} 
                  style={{ height: `${8 + Math.abs(Math.sin(i + current)) * 18}px`, animationDelay: `${i * 0.08}s` }}
                />
              ))}
            </span>
          </motion.h2>

          {/* Subheadline */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="text-xs md:text-sm text-gray-300 max-w-md mx-auto leading-relaxed"
          >
            Som profissional • Equipamentos de ponta • Mixagens exclusivas
            <br />
            <span className="text-neon-blue">Elevando a energia da sua festa ao próximo nível</span>
          </motion.p>

          {/* Botões CTA */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.8 }}
            className="flex flex-col sm:flex-row gap-2 justify-center items-center pt-2"
          >
            {/* Botão principal */}
            <button className="group relative px-4 py-2 bg-gradient-to-r from-neon-blue to-neon-purple text-white font-bold text-xs rounded-lg overflow-hidden transition-all duration-300 hover:scale-105 hover:shadow-[0_0_30px_rgba(16,215,255,0.5)]">
              <span className="relative z-10 flex items-center gap-3">
                <Calendar className="w-6 h-6" />
                Reserve seu evento agora
              </span>
              <div className="absolute inset-0 bg-gradient-to-r from-neon-purple to-neon-pink opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            </button>

            {/* Botão secundário: rolar para vídeo */}
            <a href="#showreel" className="group flex items-center gap-2 px-4 py-2 border-2 border-neon-blue text-neon-blue font-semibold rounded-lg transition-all duration-300 hover:bg-neon-blue hover:text-japan-dark hover:shadow-[0_0_20px_rgba(16,215,255,0.4)] cursor-pointer text-xs">
              <Play className="w-5 h-5 transition-transform group-hover:scale-110" />
              Ver showreel
            </a>
          </motion.div>

          {/* Estatísticas com animação de contagem */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1 }}
            className="grid grid-cols-1 sm:grid-cols-3 gap-2 pt-2 max-w-md mx-auto text-xs md:text-sm"
          >
            <div className="text-center">
              <motion.div className="text-2xl md:text-3xl font-bold gradient-text mb-1" initial={{ scale: 0.8 }} animate={{ scale: 1 }} transition={{ repeat: Infinity, repeatType: 'reverse', duration: 1.2 }}>
                5000+
              </motion.div>
              <div className="text-gray-400 text-xs md:text-sm">Eventos realizados</div>
            </div>
            <div className="text-center">
              <motion.div className="text-2xl md:text-3xl font-bold gradient-text mb-1" initial={{ scale: 0.8 }} animate={{ scale: 1 }} transition={{ repeat: Infinity, repeatType: 'reverse', duration: 1.4, delay: 0.2 }}>
                15+
              </motion.div>
              <div className="text-gray-400 text-xs md:text-sm">Anos de experiência</div>
            </div>
            <div className="text-center">
              <motion.div className="text-2xl md:text-3xl font-bold gradient-text mb-1" initial={{ scale: 0.8 }} animate={{ scale: 1 }} transition={{ repeat: Infinity, repeatType: 'reverse', duration: 1.1, delay: 0.4 }}>
                100%
              </motion.div>
              <div className="text-gray-400 text-xs md:text-sm">Clientes satisfeitos</div>
            </div>
          </motion.div>
        </motion.div>
      </div>

      {/* Indicador de scroll */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 1.5 }}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-20"
      >
        <div className="flex flex-col items-center gap-2 text-gray-400">
          <span className="text-sm font-medium">Descubra mais</span>
          <div className="w-6 h-10 border-2 border-gray-400 rounded-full flex justify-center">
            <div className="w-1 h-3 bg-gradient-to-b from-neon-blue to-transparent rounded-full mt-2 animate-bounce"></div>
          </div>
        </div>
      </motion.div>

  {/* Elementos decorativos japoneses */}
  <div className="absolute top-20 right-20 w-2 h-2 bg-neon-pink rounded-full animate-ping hidden lg:block"></div>
  <div className="absolute bottom-32 left-20 w-3 h-3 bg-neon-blue rounded-full animate-pulse hidden lg:block"></div>
  <div className="absolute top-1/2 right-10 w-1 h-1 bg-neon-purple rounded-full animate-ping delay-500 hidden lg:block"></div>
  {/* Sombra para contraste do conteúdo */}
  <div className="absolute inset-0 pointer-events-none bg-gradient-to-t from-black/60 via-transparent to-black/20 z-0" />
    </section>
  );
}
