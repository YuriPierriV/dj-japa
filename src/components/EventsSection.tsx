'use client';

import { motion } from 'framer-motion';
import { Heart, Users, Building2, GraduationCap, PartyPopper, Music } from 'lucide-react';

const eventos = [
  {
    icon: Heart,
    title: 'Casamento',
    description: 'Sua trilha sonora perfeita',
    color: 'from-neon-pink to-neon-purple',
    bgColor: 'bg-neon-pink/10',
    borderColor: 'border-neon-pink/30'
  },
  {
    icon: Users,
    title: 'Festa Particular',
    description: 'Energia para sua celebração',
    color: 'from-neon-blue to-neon-cyan',
    bgColor: 'bg-neon-blue/10',
    borderColor: 'border-neon-blue/30'
  },
  {
    icon: Building2,
    title: 'Evento Corporativo',
    description: 'Profissional e sofisticado',
    color: 'from-neon-purple to-neon-blue',
    bgColor: 'bg-neon-purple/10',
    borderColor: 'border-neon-purple/30'
  },
  {
    icon: GraduationCap,
    title: 'Formatura',
    description: 'Celebre sua conquista',
    color: 'from-neon-green to-neon-blue',
    bgColor: 'bg-neon-green/10',
    borderColor: 'border-neon-green/30'
  },
  {
    icon: PartyPopper,
    title: 'Aniversário',
    description: 'Festa inesquecível',
    color: 'from-neon-orange to-neon-pink',
    bgColor: 'bg-neon-orange/10',
    borderColor: 'border-neon-orange/30'
  },
  {
    icon: Music,
    title: 'Outro',
    description: 'Conte-nos sobre seu evento',
    color: 'from-neon-cyan to-neon-blue',
    bgColor: 'bg-neon-cyan/10',
    borderColor: 'border-neon-cyan/30'
  }
];

export default function EventsSection() {
  return (
    <section id="eventos" className="py-12 md:py-20 bg-gradient-to-b from-japan-gray to-japan-dark relative overflow-hidden">
      {/* Elementos decorativos de fundo */}
      <div className="absolute top-0 left-1/4 w-64 h-64 md:w-96 md:h-96 bg-neon-blue/5 rounded-full blur-3xl"></div>
      <div className="absolute bottom-0 right-1/4 w-64 h-64 md:w-96 md:h-96 bg-neon-purple/5 rounded-full blur-3xl"></div>

      <div className="max-w-6xl mx-auto relative z-10">
        {/* Header da seção */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-12"
        >
          <motion.span
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="inline-block text-neon-blue font-semibold text-sm md:text-lg tracking-wider uppercase mb-3"
          >
            Tipos de Eventos
          </motion.span>
          
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-2xl md:text-4xl lg:text-5xl font-bold text-japan-white leading-tight mb-4"
          >
            Escolha seu
            <span className="gradient-text block">tipo de evento</span>
          </motion.h2>
          
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-base md:text-xl text-gray-300 max-w-2xl mx-auto px-4"
          >
            Clique no tipo do seu evento e solicite um orçamento personalizado
          </motion.p>
        </motion.div>

        {/* Grid de eventos - Mobile First */}
        <div className="grid grid-cols-2 md:grid-cols-3 gap-4 md:gap-6 px-4 md:px-0">
          {eventos.map((evento, index) => {
            const IconComponent = evento.icon;
            
            const handleEventClick = () => {
              // Navegar para a seção de contato
              const contactSection = document.getElementById('contato');
              if (contactSection) {
                contactSection.scrollIntoView({ behavior: 'smooth' });
                
                // Aguardar um pouco para a rolagem acontecer, então preencher o campo
                setTimeout(() => {
                  const tipoEventoSelect = document.querySelector('select[name="tipoEvento"]') as HTMLSelectElement;
                  if (tipoEventoSelect) {
                    tipoEventoSelect.value = evento.title;
                    tipoEventoSelect.dispatchEvent(new Event('change', { bubbles: true }));
                  }
                }, 800);
              }
            };
            
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                onClick={handleEventClick}
                className={`group relative overflow-hidden rounded-xl ${evento.bgColor} backdrop-blur-sm border ${evento.borderColor} p-4 md:p-6 transition-all duration-300 hover:scale-105 hover:shadow-xl cursor-pointer active:scale-95`}
              >
                {/* Gradiente de hover */}
                <div className={`absolute inset-0 bg-gradient-to-br ${evento.color} opacity-0 group-hover:opacity-10 transition-all duration-300`}></div>
                
                {/* Conteúdo do card */}
                <div className="relative z-10 text-center space-y-3 md:space-y-4">
                  {/* Ícone */}
                  <div className={`w-12 h-12 md:w-16 md:h-16 bg-gradient-to-br ${evento.color} rounded-lg mx-auto flex items-center justify-center group-hover:scale-110 transition-transform duration-300`}>
                    <IconComponent className="w-6 h-6 md:w-8 md:h-8 text-white" />
                  </div>

                  {/* Título */}
                  <h3 className="text-sm md:text-lg font-bold text-japan-white group-hover:text-transparent group-hover:bg-gradient-to-r group-hover:bg-clip-text group-hover:from-neon-blue group-hover:to-neon-purple transition-all duration-300">
                    {evento.title}
                  </h3>

                  {/* Descrição */}
                  <p className="text-xs md:text-sm text-gray-300 leading-relaxed">
                    {evento.description}
                  </p>

                  {/* CTA sutil */}
                  <div className="text-xs text-neon-blue font-medium opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    Solicitar orçamento
                  </div>
                </div>

                {/* Elemento decorativo */}
                <div className="absolute top-2 right-2 w-1.5 h-1.5 bg-neon-blue/40 rounded-full animate-pulse"></div>
              </motion.div>
            );
          })}
        </div>

        {/* Call to action da seção */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="text-center mt-12 px-4"
        >
          <div className="glass-effect rounded-xl p-6 md:p-8 max-w-2xl mx-auto border border-neon-blue/20">
            <h3 className="text-lg md:text-2xl font-bold text-japan-white mb-3">
              Evento diferente?
            </h3>
            <p className="text-sm md:text-base text-gray-300 mb-4 md:mb-6">
              Clique em &quot;Outro&quot; acima ou fale conosco diretamente
            </p>
            <button 
              onClick={() => {
                const contactSection = document.getElementById('contato');
                if (contactSection) {
                  contactSection.scrollIntoView({ behavior: 'smooth' });
                }
              }}
              className="btn-neon text-sm md:text-base px-6 md:px-8 py-2 md:py-3"
            >
              Falar agora
            </button>
          </div>
        </motion.div>
      </div>

      {/* Linha decorativa */}
      <div className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-neon-purple to-transparent"></div>
    </section>
  );
}
