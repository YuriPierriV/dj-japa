'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import landingImages from '@/data/landingImages.json';

export default function AboutSection() {
  return (
    <section id="sobre" className="section-padding bg-wedding-sand relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <div className="grid lg:grid-cols-2 gap-16 lg:gap-24 items-center">

          {/* Left Side - Images */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1 }}
            className="relative w-full aspect-[4/5] sm:aspect-auto sm:h-[550px] max-w-md mx-auto lg:max-w-none"
          >
            <div className="absolute top-0 right-0 w-[90%] sm:w-[85%] h-[85%] rounded-sm overflow-hidden z-10">
              <Image
                src={landingImages.about.primary.route}
                alt="DJ em casamento"
                fill
                className="object-cover object-center transition-all duration-700"
                sizes="(max-width: 768px) 100vw, 50vw"
              />
              <div className="absolute inset-0 border border-white/20 m-3 sm:m-4 rounded-sm pointer-events-none"></div>
            </div>

            <div className="absolute bottom-0 left-0 w-[65%] sm:w-[60%] h-[45%] sm:h-[50%] rounded-sm overflow-hidden shadow-2xl z-20 border-4 sm:border-8 border-wedding-sand">
              <Image
                src={landingImages.about.secondary.route}
                alt="Detalhe DJ premium"
                fill
                className="object-cover object-top"
                sizes="(max-width: 768px) 100vw, 50vw"
              />
            </div>
          </motion.div>

          {/* Right Side - Extremely Focused Content */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1, delay: 0.2 }}
            className="space-y-8"
          >
            <div className="space-y-4">
              <div className="flex items-center gap-4">
                <div className="h-[1px] w-12 bg-wedding-navy/40"></div>
                <span className="uppercase tracking-[0.2em] text-xs font-bold text-wedding-navy">
                  A Garantia
                </span>
              </div>

              <h2 className="font-serif text-4xl lg:text-5xl font-medium text-wedding-navy leading-[1.2]">
                Mais de 15 anos transformando festas em <span className="italic font-bold">espetáculos.</span>
              </h2>
            </div>

            <div className="text-base sm:text-lg text-wedding-muted font-light leading-relaxed space-y-6">
              <p>
                O sucesso do seu casamento não acontece por acaso. Ele é o resultado de uma pista liderada com <strong className="text-wedding-navy font-bold">leitura afiada</strong> e uma estrutura de som <strong className="text-wedding-navy font-bold">visualmente impecável</strong>.
              </p>
              <p>
                Eu entrego exatamente isso: a certeza de que a trilha sonora será <strong className="text-wedding-navy font-bold">inesquecível</strong> e livre de preocupações, da cerimônia até <strong className="text-wedding-navy font-bold">o último convidado sair</strong>.
              </p>
            </div>

            <div className="pt-4">
              <a href="#como-funciona" className="btn-outline inline-block text-sm uppercase tracking-widest font-semibold text-wedding-navy">
                Entenda a minha entrega
              </a>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
