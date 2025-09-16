'use client';
import { FaWhatsapp } from "react-icons/fa";
import { motion } from 'framer-motion';
import {  Phone, Mail, MapPin, Clock } from 'lucide-react';
import { useState } from 'react';

export default function ContactSection() {
  const [formData, setFormData] = useState({
    nome: '',
    telefone: '',
    email: '',
    tipoEvento: '',
    dataEvento: '',
    localEvento: '',
    numeroConvidados: '',
    observacoes: ''
  });

  const camposObrigatoriosPreenchidos =
    formData.nome.trim() &&
    formData.telefone.trim() &&
    formData.email.trim() &&
    formData.tipoEvento.trim() &&
    formData.dataEvento.trim();

  function abrirWhatsapp(e: React.MouseEvent<HTMLButtonElement>) {
    if (!camposObrigatoriosPreenchidos) {
      e.preventDefault();
      return;
    }
    const numero = ''; // Substitua pelo num
    const url =
      `https://wa.me/${numero}?text=` +
      encodeURIComponent(
        `*Formulário de Contato*\n\n` +
        `*Nome*: ${formData.nome}\n` +
        `*Telefone*: ${formData.telefone}\n` +
        `*E-mail*: ${formData.email}\n` +
        `*Tipo de Evento*: ${formData.tipoEvento}\n` +
        `*Data do Evento*: ${formData.dataEvento}\n` +
        (formData.localEvento ? `*Local*: ${formData.localEvento}\n` : '') +
        (formData.numeroConvidados ? `*Nº de Convidados*: ${formData.numeroConvidados}\n` : '') +
        (formData.observacoes ? `*Observações*: ${formData.observacoes}` : '')
      );
    window.open(url, '_blank');
  }

  const tiposEventos = [
    'Casamento',
    'Festa Particular',
    'Evento Corporativo',
    'Formatura',
    'Aniversário',
    'Confraternização',
    'Outro'
  ];

  return (
    <section id="contato" className="section-padding bg-gradient-to-b from-japan-gray to-black relative overflow-hidden">
      {/* Elementos decorativos de fundo */}
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-neon-pink/5 rounded-full blur-3xl"></div>
      <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-neon-blue/5 rounded-full blur-3xl"></div>

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Header da seção */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <motion.span
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="inline-block text-neon-blue font-semibold text-lg tracking-wider uppercase mb-4"
          >
            Última Chance
          </motion.span>
          
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-4xl lg:text-6xl font-bold text-japan-white leading-tight mb-6"
          >
            Garanta sua data
            <span className="gradient-text block">antes que esgote!</span>
          </motion.h2>
          
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-xl text-gray-300 max-w-3xl mx-auto"
          >
            As melhores datas voam rápido! Preencha o formulário e receba seu orçamento personalizado 
            em até 2 horas.
          </motion.p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-16 items-start">
          {/* Lado esquerdo - Informações e urgência */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="space-y-8"
          >
            {/* Box de urgência */}
            <div className="glass-effect rounded-2xl p-8 border border-neon-red/30 bg-gradient-to-br from-neon-red/5 to-neon-pink/5">
              <div className="flex items-center gap-4 mb-4">
                <div className="w-3 h-3 bg-neon-red rounded-full animate-pulse"></div>
                <h3 className="text-2xl font-bold text-neon-red">Atenção!</h3>
              </div>
              <p className="text-gray-300 leading-relaxed">
                Não perca a oportunidade de ter o DJ mais requisitado da região no seu evento!
              </p>
            </div>

            {/* Informações de contato */}
            <div className="space-y-6">
              <h3 className="text-2xl font-bold text-japan-white mb-6">
                Informações de <span className="gradient-text">Contato</span>
              </h3>
              
              <div className="space-y-4">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-gradient-to-br from-neon-blue/20 to-neon-purple/20 rounded-lg flex items-center justify-center">
                    <Phone className="w-6 h-6 text-neon-blue" />
                  </div>
                  <div>
                    <p className="text-gray-400 text-sm">WhatsApp</p>
                    <p className="text-japan-white font-semibold">(11) 99999-9999</p>
                  </div>
                </div>

                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-gradient-to-br from-neon-purple/20 to-neon-pink/20 rounded-lg flex items-center justify-center">
                    <Mail className="w-6 h-6 text-neon-purple" />
                  </div>
                  <div>
                    <p className="text-gray-400 text-sm">E-mail</p>
                    <p className="text-japan-white font-semibold">contato@djjapa.com</p>
                  </div>
                </div>

                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-gradient-to-br from-neon-pink/20 to-neon-blue/20 rounded-lg flex items-center justify-center">
                    <MapPin className="w-6 h-6 text-neon-pink" />
                  </div>
                  <div>
                    <p className="text-gray-400 text-sm">Atendimento</p>
                    <p className="text-japan-white font-semibold">São Paulo e Região</p>
                  </div>
                </div>

                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-gradient-to-br from-neon-green/20 to-neon-blue/20 rounded-lg flex items-center justify-center">
                    <Clock className="w-6 h-6 text-neon-green" />
                  </div>
                  <div>
                    <p className="text-gray-400 text-sm">Resposta</p>
                    <p className="text-japan-white font-semibold">Em até 2 horas</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Garantias */}
            <div className="glass-effect rounded-2xl p-6 border border-neon-blue/20">
              <h4 className="text-lg font-bold text-japan-white mb-4">🛡️ Nossas Garantias</h4>
              <ul className="space-y-2 text-gray-300">
                <li className="flex items-center gap-2">
                  <div className="w-1.5 h-1.5 bg-neon-blue rounded-full"></div>
                  Equipamento reserva disponível
                </li>
                <li className="flex items-center gap-2">
                  <div className="w-1.5 h-1.5 bg-neon-purple rounded-full"></div>
                  Pontualidade garantida
                </li>
                <li className="flex items-center gap-2">
                  <div className="w-1.5 h-1.5 bg-neon-pink rounded-full"></div>
                  Satisfação ou seu dinheiro de volta
                </li>
              </ul>
            </div>
          </motion.div>

          {/* Lado direito - Formulário */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <form className="glass-effect rounded-2xl p-8 border border-neon-blue/20 space-y-6" autoComplete="off">
              <div className="text-center mb-8">
                <h3 className="text-2xl font-bold text-japan-white mb-2">
                  Solicite seu <span className="gradient-text">orçamento</span>
                </h3>
                <p className="text-gray-400">Preencha os dados e receba uma proposta personalizada</p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-neon-blue font-semibold mb-2">Nome Completo *</label>
                  <input
                    type="text"
                    name="nome"
                    value={formData.nome}
                    onChange={e => setFormData({ ...formData, nome: e.target.value })}
                    required
                    className="w-full px-4 py-3 bg-japan-gray/50 border border-neon-blue/30 rounded-lg text-japan-white placeholder-gray-500 focus:border-neon-blue focus:outline-none focus:ring-2 focus:ring-neon-blue/20 transition-all duration-300"
                    placeholder="Seu nome completo"
                  />
                </div>

                <div>
                  <label className="block text-neon-blue font-semibold mb-2">WhatsApp *</label>
                  <input
                    type="tel"
                    name="telefone"
                    value={formData.telefone}
                    onChange={e => setFormData({ ...formData, telefone: e.target.value })}
                    required
                    className="w-full px-4 py-3 bg-japan-gray/50 border border-neon-blue/30 rounded-lg text-japan-white placeholder-gray-500 focus:border-neon-blue focus:outline-none focus:ring-2 focus:ring-neon-blue/20 transition-all duration-300"
                    placeholder="(11) 99999-9999"
                  />
                </div>
              </div>

              <div>
                <label className="block text-neon-blue font-semibold mb-2">E-mail *</label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={e => setFormData({ ...formData, email: e.target.value })}
                  required
                  className="w-full px-4 py-3 bg-japan-gray/50 border border-neon-blue/30 rounded-lg text-japan-white placeholder-gray-500 focus:border-neon-blue focus:outline-none focus:ring-2 focus:ring-neon-blue/20 transition-all duration-300"
                  placeholder="seu@email.com"
                />
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-neon-blue font-semibold mb-2">Tipo de Evento *</label>
                  <select
                    name="tipoEvento"
                    value={formData.tipoEvento}
                    onChange={e => setFormData({ ...formData, tipoEvento: e.target.value })}
                    required
                    className="w-full px-4 py-3 bg-japan-gray/50 border border-neon-blue/30 rounded-lg text-japan-white focus:border-neon-blue focus:outline-none focus:ring-2 focus:ring-neon-blue/20 transition-all duration-300"
                  >
                    <option value="">Selecione o tipo</option>
                    {tiposEventos.map(tipo => (
                      <option key={tipo} value={tipo} className="bg-japan-gray">{tipo}</option>
                    ))}
                  </select>
                </div>

                <div>
                  <label className="block text-neon-blue font-semibold mb-2">Data do Evento *</label>
                  <input
                    type="date"
                    name="dataEvento"
                    value={formData.dataEvento}
                    onChange={e => setFormData({ ...formData, dataEvento: e.target.value })}
                    required
                    className="w-full px-4 py-3 bg-japan-gray/50 border border-neon-blue/30 rounded-lg text-japan-white focus:border-neon-blue focus:outline-none focus:ring-2 focus:ring-neon-blue/20 transition-all duration-300"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-neon-blue font-semibold mb-2">Local do Evento</label>
                  <input
                    type="text"
                    name="localEvento"
                    value={formData.localEvento}
                    onChange={e => setFormData({ ...formData, localEvento: e.target.value })}
                    className="w-full px-4 py-3 bg-japan-gray/50 border border-neon-blue/30 rounded-lg text-japan-white placeholder-gray-500 focus:border-neon-blue focus:outline-none focus:ring-2 focus:ring-neon-blue/20 transition-all duration-300"
                    placeholder="Cidade/Bairro"
                  />
                </div>

                <div>
                  <label className="block text-neon-blue font-semibold mb-2">Nº de Convidados</label>
                  <input
                    type="number"
                    name="numeroConvidados"
                    value={formData.numeroConvidados}
                    onChange={e => setFormData({ ...formData, numeroConvidados: e.target.value })}
                    className="w-full px-4 py-3 bg-japan-gray/50 border border-neon-blue/30 rounded-lg text-japan-white placeholder-gray-500 focus:border-neon-blue focus:outline-none focus:ring-2 focus:ring-neon-blue/20 transition-all duration-300"
                    placeholder="Aproximadamente"
                  />
                </div>
              </div>

              <div>
                <label className="block text-neon-blue font-semibold mb-2">Observações</label>
                <textarea
                  name="observacoes"
                  value={formData.observacoes}
                  onChange={e => setFormData({ ...formData, observacoes: e.target.value })}
                  rows={4}
                  className="w-full px-4 py-3 bg-japan-gray/50 border border-neon-blue/30 rounded-lg text-japan-white placeholder-gray-500 focus:border-neon-blue focus:outline-none focus:ring-2 focus:ring-neon-blue/20 transition-all duration-300 resize-none"
                  placeholder="Conte-nos mais sobre seu evento, estilo musical preferido, horários, etc."
                />
              </div>
              <button
                type="button"
                onClick={abrirWhatsapp}
                disabled={!camposObrigatoriosPreenchidos}
                className={`w-full mt-4 flex items-center justify-center gap-3 py-4 bg-gradient-to-r from-green-400 via-green-500 to-neon-blue text-white font-bold text-lg rounded-lg shadow-lg transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-green-400 ${
                  camposObrigatoriosPreenchidos
                    ? 'hover:scale-105 hover:shadow-[0_0_30px_rgba(16,215,255,0.5)] animate-pulse cursor-pointer'
                    : 'opacity-50 cursor-not-allowed'
                }`}
                style={{ letterSpacing: '0.02em' }}
              >
                <FaWhatsapp className="w-7 h-7 text-white drop-shadow-[0_0_8px_#25D366]" />
                Falar no WhatsApp agora
              </button>
              <p className="text-center text-sm text-gray-400">
                Seus dados estão seguros e não serão compartilhados com terceiros.
              </p>
            </form>
          </motion.div>
        </div>
      </div>

      {/* Linha decorativa */}
      <div className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-neon-blue to-transparent"></div>
    </section>
  );
}
