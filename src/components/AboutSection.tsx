'use client';

import { motion } from 'framer-motion';
import { Award, Headphones, Users, Zap } from 'lucide-react';
import Image from 'next/image';

export default function AboutSection() {
  return (
    <section id="sobre" className="section-padding bg-gradient-to-b from-japan-dark to-japan-gray relative overflow-hidden">
      {/* Elementos decorativos */}
      <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-neon-blue to-transparent"></div>
      
      <div className="max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Lado esquerdo - Imagem do DJ */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="relative"
          >
            <div className="relative w-full h-[600px] rounded-2xl overflow-hidden glass-effect">
              {/* Imagem real do DJ */}
              <Image
                src="/fotoDJ.JPG"
                alt="DJ Japa em ação"
                fill
                className="object-cover object-center"
                sizes="(max-width: 768px) 100vw, 600px"
                priority={false}
              />
              
              {/* Sobreposição com efeito neon */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent"></div>
              
              {/* Elementos flutuantes */}
              <div className="absolute top-4 right-4 w-8 h-8 bg-neon-pink/30 rounded-full animate-pulse"></div>
              <div className="absolute bottom-8 left-6 w-4 h-4 bg-neon-blue/40 rounded-full animate-ping"></div>
            </div>

            {/* Card flutuante com dados */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="absolute -bottom-8 -right-8 bg-gradient-to-br from-neon-blue/10 to-neon-purple/10 backdrop-blur-xl border border-neon-blue/30 rounded-xl p-6 max-w-xs"
            >
              <div className="space-y-2">
                <h3 className="text-lg font-bold text-neon-blue">Status Atual</h3>
                <div className="flex items-center gap-2 text-sm text-gray-300">
                  <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
                  Disponível para eventos
                </div>
              </div>
            </motion.div>
          </motion.div>

          {/* Lado direito - Conteúdo */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="space-y-8"
          >
            {/* Título */}
            <div className="space-y-4">
              <motion.span
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className="inline-block text-neon-blue font-semibold text-lg tracking-wider uppercase"
              >
                Conheça o DJ
              </motion.span>
              
              <motion.h2
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.1 }}
                className="text-4xl lg:text-5xl font-bold text-japan-white leading-tight"
              >
                Mais que música,
                <span className="gradient-text block">uma experiência completa</span>
              </motion.h2>
            </div>

            {/* Descrição */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="space-y-6 text-lg text-gray-300 leading-relaxed"
            >
              <p>
                Com mais de <span className="text-neon-blue font-semibold">15 anos</span> no cenário musical, 
                DJ Japa combina técnica apurada com uma sensibilidade única para ler o público e criar 
                a atmosfera perfeita para cada momento.
              </p>
              
              <p>
                Especialista em <span className="text-neon-purple font-semibold">eventos corporativos</span>, 
                <span className="text-neon-pink font-semibold"> casamentos</span> e 
                <span className="text-neon-blue font-semibold"> festas particulares</span>, 
                sempre entregando qualidade de som profissional e mixagens exclusivas.
              </p>
            </motion.div>

            {/* Características principais */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.5 }}
              className="grid grid-cols-2 gap-6"
            >
              <div className="space-y-4">
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 bg-gradient-to-br from-neon-blue/20 to-neon-purple/20 rounded-lg flex items-center justify-center">
                    <Award className="w-6 h-6 text-neon-blue" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-japan-white">Equipamentos Premium</h3>
                    <p className="text-sm text-gray-400">Som crystal clear</p>
                  </div>
                </div>

                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 bg-gradient-to-br from-neon-purple/20 to-neon-pink/20 rounded-lg flex items-center justify-center">
                    <Users className="w-6 h-6 text-neon-purple" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-japan-white">Leitura de Público</h3>
                    <p className="text-sm text-gray-400">Energia garantida</p>
                  </div>
                </div>
              </div>

              <div className="space-y-4">
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 bg-gradient-to-br from-neon-pink/20 to-neon-blue/20 rounded-lg flex items-center justify-center">
                    <Headphones className="w-6 h-6 text-neon-pink" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-japan-white">Mixagens Exclusivas</h3>
                    <p className="text-sm text-gray-400">Transições perfeitas</p>
                  </div>
                </div>

                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 bg-gradient-to-br from-neon-blue/20 to-neon-purple/20 rounded-lg flex items-center justify-center">
                    <Zap className="w-6 h-6 text-neon-blue" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-japan-white">Alta Performance</h3>
                    <p className="text-sm text-gray-400">Sem falhas técnicas</p>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* CTA */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.7 }}
              className="pt-6"
            >
              <button className="group relative px-8 py-4 bg-gradient-to-r from-neon-blue/20 to-neon-purple/20 border border-neon-blue/50 text-neon-blue font-semibold rounded-lg transition-all duration-300 hover:bg-gradient-to-r hover:from-neon-blue hover:to-neon-purple hover:text-japan-dark hover:scale-105">
                <span className="relative z-10">Ver portfolio completo</span>
                <div className="absolute inset-0 bg-gradient-to-r from-neon-blue to-neon-purple opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-lg"></div>
              </button>
            </motion.div>
          </motion.div>
        </div>
      </div>

      {/* Elementos decorativos de fundo */}
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-neon-purple/5 rounded-full blur-3xl"></div>
      <div className="absolute top-1/2 left-0 w-64 h-64 bg-neon-blue/5 rounded-full blur-2xl"></div>
    </section>
  );
}
