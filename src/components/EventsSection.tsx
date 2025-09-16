'use client';

import { motion } from 'framer-motion';
import { Heart, Users, Building2, GraduationCap, PartyPopper, Music } from 'lucide-react';

const eventos = [
  {
    icon: Heart,
    title: 'Casamentos',
    description: 'Trilha sonora perfeita para o dia mais especial da sua vida',
    features: ['Cerimônia', 'Festa', 'Primeira dança'],
    color: 'from-neon-pink to-neon-purple',
    bgColor: 'bg-neon-pink/10',
    borderColor: 'border-neon-pink/30'
  },
  {
    icon: Users,
    title: 'Festas Particulares',
    description: 'Energia total para animar qualquer comemoração privada',
    features: ['Aniversários', 'Confraternizações', 'Celebrações'],
    color: 'from-neon-blue to-neon-cyan',
    bgColor: 'bg-neon-blue/10',
    borderColor: 'border-neon-blue/30'
  },
  {
    icon: Building2,
    title: 'Eventos Corporativos',
    description: 'Profissionalismo e sofisticação para o mundo empresarial',
    features: ['Lançamentos', 'Convenções', 'Happy hours'],
    color: 'from-neon-purple to-neon-blue',
    bgColor: 'bg-neon-purple/10',
    borderColor: 'border-neon-purple/30'
  },
  {
    icon: GraduationCap,
    title: 'Formaturas',
    description: 'Celebre esta conquista com a trilha sonora ideal',
    features: ['Cerimônia', 'Festa', 'Baile de gala'],
    color: 'from-neon-green to-neon-blue',
    bgColor: 'bg-neon-green/10',
    borderColor: 'border-neon-green/30'
  },
  {
    icon: Music,
    title: 'Clubs & Festivais',
    description: 'Performance de alto nível para eventos de grande porte',
    features: ['Baladas', 'Festivais', 'Shows'],
    color: 'from-neon-orange to-neon-pink',
    bgColor: 'bg-neon-orange/10',
    borderColor: 'border-neon-orange/30'
  },
  {
    icon: PartyPopper,
    title: 'Eventos Especiais',
    description: 'Qualquer ocasião merece uma trilha sonora inesquecível',
    features: ['Reveillon', 'Carnaval', 'Festividades'],
    color: 'from-neon-pink to-neon-blue',
    bgColor: 'bg-neon-pink/10',
    borderColor: 'border-neon-pink/30'
  }
];

export default function EventsSection() {
  return (
    <section id="eventos" className="section-padding bg-gradient-to-b from-japan-gray to-japan-dark relative overflow-hidden">
      {/* Elementos decorativos de fundo */}
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-neon-blue/5 rounded-full blur-3xl"></div>
      <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-neon-purple/5 rounded-full blur-3xl"></div>

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
            Nossos Serviços
          </motion.span>
          
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-4xl lg:text-5xl font-bold text-japan-white leading-tight mb-6"
          >
            Eventos que 
            <span className="gradient-text block">transformamos em experiências</span>
          </motion.h2>
          
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-xl text-gray-300 max-w-3xl mx-auto"
          >
            Cada tipo de evento tem sua própria personalidade. Nossa experiência garante 
            a atmosfera perfeita para cada ocasião especial.
          </motion.p>
        </motion.div>

        {/* Grid de eventos */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {eventos.map((evento, index) => {
            const IconComponent = evento.icon;
            
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className={`group relative overflow-hidden rounded-2xl ${evento.bgColor} backdrop-blur-sm border ${evento.borderColor} p-8 transition-all duration-500 hover:scale-105 hover:shadow-2xl cursor-pointer`}
              >
                {/* Gradiente de hover */}
                <div className={`absolute inset-0 bg-gradient-to-br ${evento.color} opacity-0 group-hover:opacity-10 transition-all duration-500`}></div>
                
                {/* Conteúdo do card */}
                <div className="relative z-10 space-y-6">
                  {/* Ícone */}
                  <div className={`w-16 h-16 bg-gradient-to-br ${evento.color} rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300`}>
                    <IconComponent className="w-8 h-8 text-white" />
                  </div>

                  {/* Título */}
                  <h3 className="text-2xl font-bold text-japan-white group-hover:text-transparent group-hover:bg-gradient-to-r group-hover:bg-clip-text group-hover:from-neon-blue group-hover:to-neon-purple transition-all duration-300">
                    {evento.title}
                  </h3>

                  {/* Descrição */}
                  <p className="text-gray-300 leading-relaxed">
                    {evento.description}
                  </p>

                  {/* Features */}
                  <div className="space-y-3">
                    <h4 className="text-sm font-semibold text-neon-blue uppercase tracking-wider">
                      Especialidades:
                    </h4>
                    <ul className="space-y-2">
                      {evento.features.map((feature, featureIndex) => (
                        <li key={featureIndex} className="flex items-center gap-3 text-sm text-gray-400">
                          <div className="w-1.5 h-1.5 bg-neon-blue rounded-full animate-pulse"></div>
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Botão */}
                  <button className={`w-full py-3 bg-gradient-to-r ${evento.color} text-white font-semibold rounded-lg opacity-0 group-hover:opacity-100 transform translate-y-4 group-hover:translate-y-0 transition-all duration-500`}>
                    Solicitar orçamento
                  </button>
                </div>

                {/* Elementos decorativos */}
                <div className="absolute top-4 right-4 w-2 h-2 bg-neon-blue/30 rounded-full animate-ping"></div>
                <div className="absolute bottom-4 left-4 w-1 h-1 bg-neon-purple/40 rounded-full animate-pulse"></div>
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
          className="text-center mt-16"
        >
          <div className="glass-effect rounded-2xl p-8 max-w-4xl mx-auto border border-neon-blue/20">
            <h3 className="text-2xl font-bold text-japan-white mb-4">
              Não encontrou seu tipo de evento?
            </h3>
            <p className="text-gray-300 mb-6">
              Cada festa é única! Entre em contato e vamos criar juntos a trilha sonora perfeita para sua ocasião especial.
            </p>
            <button className="btn-neon">
              Conversar agora
            </button>
          </div>
        </motion.div>
      </div>

      {/* Linha decorativa */}
      <div className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-neon-purple to-transparent"></div>
    </section>
  );
}
