'use client';

import Link from 'next/link';
import { FaWhatsapp } from "react-icons/fa";
import { motion } from 'framer-motion';
import { useState } from 'react';
import Image from 'next/image';
import JLogo from '@/components/JLogo';
import { trackLead } from '@/lib/tracking';

type ContactSectionProps = {
  trackingPrefix: string;
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
};

function renderWhatsappTemplate(template: string, nome: string, data: string) {
  return template
    .replace('{nome}', nome)
    .replace('{data}', data);
}

export default function ContactSection({
  trackingPrefix,
  kicker,
  title,
  highlight,
  description,
  backgroundImageSrc,
  backgroundImageAlt,
  formTitle,
  formSubtitle,
  nameLabel,
  namePlaceholder,
  dateLabel,
  buttonLabel,
  whatsappTemplate,
  whatsappFollowUp,
}: ContactSectionProps) {
  const [formData, setFormData] = useState({
    nome: '',
    telefone: '',
    email: '',
    dataEvento: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const camposObrigatoriosPreenchidos =
    formData.nome.trim() &&
    formData.telefone.trim() &&
    formData.email.trim() &&
    formData.dataEvento.trim();

  async function abrirWhatsapp(e: React.MouseEvent<HTMLButtonElement>) {
    if (!camposObrigatoriosPreenchidos) {
      e.preventDefault();
      return;
    }

    setIsSubmitting(true);

    try {
      await fetch('/api/leads', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          ...formData,
          source: `${trackingPrefix}_vip_whatsapp_button`,
        }),
      });
    } catch (error) {
      console.error('Erro ao salvar lead antes do WhatsApp.', error);
    }

    const numero = '556198383473'; // WhatsApp real do DJ Japa
    const dataFormatada = new Date(formData.dataEvento).toLocaleDateString('pt-BR');

    const url =
      `https://wa.me/${numero}?text=` +
      encodeURIComponent(
        `${renderWhatsappTemplate(whatsappTemplate, formData.nome, dataFormatada)}\n\n` +
        `${whatsappFollowUp}\n\n` +
        'Ficamos no aguardo para conhecer os proximos passos.'
      );
    trackLead(`${trackingPrefix}_vip_whatsapp_button`);
    window.open(url, '_blank');
    setIsSubmitting(false);
  }

  return (
    <section id="contato" className="relative bg-wedding-dark overflow-hidden min-h-[90vh] flex items-center">

      {/* Background with luxury image overlay */}
      <div className="absolute inset-0 w-full h-full">
        <Image
          src={backgroundImageSrc}
          alt={backgroundImageAlt}
          fill
          className="object-cover object-center opacity-30 grayscale-[70%]"
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-wedding-dark/60" />
        <div className="absolute inset-0 bg-gradient-to-r from-wedding-dark via-wedding-dark/90 to-wedding-dark/40" />
        <div className="absolute inset-0 bg-gradient-to-t from-wedding-dark via-transparent to-wedding-dark/80" />
      </div>

      <div className="max-w-7xl mx-auto px-6 lg:px-12 relative z-10 py-24 w-full">
        <div className="grid lg:grid-cols-2 gap-16 lg:gap-24 items-center">

          {/* Left Side - Luxury Hook */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="space-y-8"
          >
            <div className="space-y-4">
              <div className="flex items-center gap-4">
                <div className="h-[1px] w-12 bg-wedding-gold"></div>
                <span className="uppercase tracking-[0.2em] text-xs font-semibold text-wedding-gold">
                  {kicker}
                </span>
              </div>

              <h2 className="font-serif text-5xl lg:text-7xl font-medium text-wedding-white leading-[1.1]">
                {title} <span className="italic text-wedding-gold block mt-2">{highlight}</span>
              </h2>
            </div>

            <p className="text-lg text-wedding-white/70 font-light max-w-md leading-relaxed">
              {description}
            </p>
          </motion.div>

          {/* Right Side - Floating Form */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="w-full"
          >
            <div className="bg-[#131824]/80 backdrop-blur-md p-8 md:p-12 rounded-sm border border-wedding-white/10 shadow-2xl relative">

              <div className="mb-10 text-center sm:text-left flex flex-col sm:flex-row items-center sm:items-start gap-4">
                <div className="relative w-12 h-12 opacity-90 shrink-0">
                  <JLogo className="w-full h-full" />
                </div>
                <div>
                  <h3 className="font-serif text-2xl sm:text-3xl font-medium text-wedding-white mb-1">
                    {formTitle}
                  </h3>
                  <p className="text-wedding-white/50 font-light text-xs uppercase tracking-widest hidden sm:block">
                    {formSubtitle}
                  </p>
                </div>
              </div>

              <form className="space-y-8" autoComplete="on">
                <div>
                  <label className="block text-[10px] uppercase tracking-widest text-wedding-white/50 mb-2">{nameLabel}</label>
                  <input
                    type="text"
                    autoComplete="name"
                    name="nome"
                    value={formData.nome}
                    onChange={e => setFormData({ ...formData, nome: e.target.value })}
                    required
                    className="w-full px-0 py-3 bg-transparent border-b border-wedding-white/20 text-wedding-white placeholder-wedding-white/20 focus:border-wedding-gold focus:outline-none transition-colors font-light text-base md:text-lg"
                    placeholder={namePlaceholder}
                  />
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  <div>
                    <label className="block text-[10px] uppercase tracking-widest text-wedding-white/50 mb-2">WhatsApp *</label>
                    <input
                      type="tel"
                      autoComplete="tel"
                      inputMode="tel"
                      name="telefone"
                      value={formData.telefone}
                      onChange={e => setFormData({ ...formData, telefone: e.target.value })}
                      required
                      className="w-full px-0 py-3 bg-transparent border-b border-wedding-white/20 text-wedding-white placeholder-wedding-white/20 focus:border-wedding-gold focus:outline-none transition-colors font-light text-base md:text-lg"
                      placeholder="(DD) 99999-9999"
                    />
                  </div>

                  <div>
                    <label className="block text-[10px] uppercase tracking-widest text-wedding-white/50 mb-2">{dateLabel}</label>
                    <input
                      type="date"
                      name="dataEvento"
                      value={formData.dataEvento}
                      onChange={e => setFormData({ ...formData, dataEvento: e.target.value })}
                      required
                      className="w-full px-0 py-3 bg-transparent border-b border-wedding-white/20 text-wedding-white placeholder-wedding-white/20 focus:border-wedding-gold focus:outline-none transition-colors font-light text-base md:text-lg [color-scheme:dark]"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-[10px] uppercase tracking-widest text-wedding-white/50 mb-2">E-mail *</label>
                  <input
                    type="email"
                    autoComplete="email"
                    name="email"
                    value={formData.email}
                    onChange={e => setFormData({ ...formData, email: e.target.value })}
                    required
                    className="w-full px-0 py-3 bg-transparent border-b border-wedding-white/20 text-wedding-white placeholder-wedding-white/20 focus:border-wedding-gold focus:outline-none transition-colors font-light text-base md:text-lg"
                    placeholder="contato@exemplo.com"
                  />
                </div>

                <div className="pt-6">
                  <button
                    type="button"
                    onClick={abrirWhatsapp}
                    disabled={!camposObrigatoriosPreenchidos || isSubmitting}
                    className={`w-full relative flex items-center justify-center gap-4 overflow-hidden rounded-sm bg-wedding-gold px-8 py-5 md:py-6 font-serif text-sm md:text-base uppercase tracking-[0.2em] text-white transition-all duration-500 hover:bg-[#b89568] hover:shadow-[0_0_30px_rgba(201,166,113,0.4)] ${!camposObrigatoriosPreenchidos || isSubmitting ? 'opacity-50 cursor-not-allowed hover:shadow-none' : 'hover:scale-[1.02]'}`}
                  >
                    <FaWhatsapp className="w-5 h-5 md:w-6 md:h-6 relative z-10" />
                    <span className="relative z-10">
                      {isSubmitting ? 'Preparando...' : buttonLabel}
                    </span>
                  </button>
                  <p className="mt-6 text-center text-[10px] uppercase tracking-widest text-wedding-white/40">
                    Seus dados são usados apenas para contato comercial.
                    {' '}
                    <Link className="underline underline-offset-4" href="/privacidade">
                      Política de privacidade
                    </Link>
                  </p>
                </div>
              </form>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
