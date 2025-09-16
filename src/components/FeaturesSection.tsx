'use client';

import { motion } from 'framer-motion';
import { Volume2, Zap, Headphones, Settings, Users, Trophy } from 'lucide-react';

const diferenciais = [
  {
    icon: Volume2,
    title: 'Som Profissional',
    description: 'Equipamentos de alta qualidade que garantem áudio cristalino em qualquer ambiente',
    features: ['Alto-falantes JBL', 'Mesa de som digital', 'Processadores de áudio'],
    color: 'from-neon-blue to-neon-cyan'
  },
  {
    icon: Headphones,
    title: 'Mixagens Exclusivas',
    description: 'Transições perfeitas e remixes personalizados que mantêm a energia sempre alta',
    features: ['Transições suaves', 'Remixes autorais', 'Efeitos especiais'],
    color: 'from-neon-purple to-neon-pink'
  },
  {
    icon: Zap,
    title: 'Energia Garantida',
    description: 'Leitura de público especializada para manter a pista sempre animada',
    features: ['Leitura de ambiente', 'Repertório variado', 'Interação com público'],
    color: 'from-neon-pink to-neon-orange'
  },
  {
    icon: Settings,
    title: 'Setup Completo',
    description: 'Estrutura completa de iluminação e som para eventos de qualquer porte',
    features: ['Iluminação LED', 'Máquina de fumaça', 'Backup de equipamentos'],
    color: 'from-neon-green to-neon-blue'
  },
  {
    icon: Users,
    title: 'Experiência Comprovada',
    description: 'Mais de 15 anos animando eventos e fazendo histórias inesquecíveis',
    features: ['500+ eventos', '100% satisfação', 'Referências comprovadas'],
    color: 'from-neon-orange to-neon-purple'
  },
  {
    icon: Trophy,
    title: 'Atendimento Premium',
    description: 'Suporte completo desde o planejamento até a execução do seu evento',
    features: ['Consultoria musical', 'Suporte técnico', 'Pós-evento'],
    color: 'from-neon-cyan to-neon-pink'
  }
];

export default function FeaturesSection() {
  return (
    <section id="diferenciais" className="section-padding bg-gradient-to-b from-japan-gray to-japan-dark relative overflow-hidden">
      {/* Elementos decorativos de fundo */}
      <div className="absolute top-1/4 left-0 w-96 h-96 bg-neon-blue/5 rounded-full blur-3xl"></div>
      <div className="absolute bottom-1/4 right-0 w-96 h-96 bg-neon-purple/5 rounded-full blur-3xl"></div>
      <div className="absolute top-0 right-1/4 w-64 h-64 bg-neon-pink/5 rounded-full blur-2xl"></div>

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
            Nossos Diferenciais
          </motion.span>
          
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-4xl lg:text-5xl font-bold text-japan-white leading-tight mb-6"
          >
            Por que escolher
            <span className="gradient-text block">o DJ Japa?</span>
          </motion.h2>
          
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-xl text-gray-300 max-w-3xl mx-auto"
          >
            Combinamos tecnologia de ponta, experiência consolidada e paixão pela música 
            para entregar sempre o melhor para o seu evento.
          </motion.p>
        </motion.div>

        {/* Grid de diferenciais */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {diferenciais.map((diferencial, index) => {
            const IconComponent = diferencial.icon;
            
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="group relative"
              >
                <div className="glass-effect rounded-2xl p-8 border border-neon-blue/20 h-full transition-all duration-500 hover:scale-105 hover:border-neon-blue/40 hover:shadow-[0_10px_30px_rgba(16,215,255,0.2)]">
                  {/* Ícone */}
                  <div className={`w-16 h-16 bg-gradient-to-br ${diferencial.color} rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}>
                    <IconComponent className="w-8 h-8 text-white" />
                  </div>

                  {/* Título */}
                  <h3 className="text-2xl font-bold text-japan-white mb-4 group-hover:text-transparent group-hover:bg-gradient-to-r group-hover:bg-clip-text group-hover:from-neon-blue group-hover:to-neon-purple transition-all duration-300">
                    {diferencial.title}
                  </h3>

                  {/* Descrição */}
                  <p className="text-gray-300 leading-relaxed mb-6">
                    {diferencial.description}
                  </p>

                  {/* Features */}
                  <div className="space-y-3">
                    {diferencial.features.map((feature, featureIndex) => (
                      <div key={featureIndex} className="flex items-center gap-3 text-sm text-gray-400">
                        <div className="w-1.5 h-1.5 bg-neon-blue rounded-full animate-pulse"></div>
                        {feature}
                      </div>
                    ))}
                  </div>

                  {/* Elementos decorativos */}
                  <div className="absolute top-4 right-4 w-2 h-2 bg-neon-pink/30 rounded-full animate-ping"></div>
                  <div className="absolute bottom-4 left-4 w-1 h-1 bg-neon-blue/40 rounded-full animate-pulse"></div>
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Seção de equipamentos em destaque */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="glass-effect rounded-2xl p-8 lg:p-12 border border-neon-purple/20 mb-16"
        >
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Lado esquerdo - Texto */}
            <div className="space-y-6">
              <h3 className="text-3xl font-bold text-japan-white">
                Equipamentos de
                <span className="gradient-text block">Última Geração</span>
              </h3>
              
              <p className="text-lg text-gray-300 leading-relaxed">
                Investimos constantemente em tecnologia de ponta para garantir que seu evento 
                tenha o melhor em qualidade de som e efeitos visuais.
              </p>

              <div className="grid grid-cols-2 gap-4">
                <div className="space-y-2">
                  <h4 className="font-semibold text-neon-blue">Audio</h4>
                  <ul className="text-sm text-gray-400 space-y-1">
                    <li>• Pioneer DJM-900NXS2</li>
                    <li>• CDJ-3000 (Par)</li>
                    <li>• JBL VTX Series</li>
                    <li>• Shure SM58 (Microfones)</li>
                  </ul>
                </div>
                
                <div className="space-y-2">
                  <h4 className="font-semibold text-neon-purple">Iluminação</h4>
                  <ul className="text-sm text-gray-400 space-y-1">
                    <li>• LED Par 64 RGB</li>
                    <li>• Moving Head Spot</li>
                    <li>• Máquina de Fumaça</li>
                    <li>• Laser Multicolor</li>
                  </ul>
                </div>
              </div>
            </div>

            {/* Lado direito - Visual dos equipamentos */}
            <div className="relative">
              <div className="grid grid-cols-2 gap-4">
                <div className="h-32 bg-gradient-to-br from-neon-blue/20 to-neon-cyan/20 rounded-lg border border-neon-blue/30 flex items-center justify-center">
                  <Volume2 className="w-12 h-12 text-neon-blue" />
                </div>
                <div className="h-32 bg-gradient-to-br from-neon-purple/20 to-neon-pink/20 rounded-lg border border-neon-purple/30 flex items-center justify-center">
                  <Zap className="w-12 h-12 text-neon-purple" />
                </div>
                <div className="h-32 bg-gradient-to-br from-neon-pink/20 to-neon-orange/20 rounded-lg border border-neon-pink/30 flex items-center justify-center">
                  <Headphones className="w-12 h-12 text-neon-pink" />
                </div>
                <div className="h-32 bg-gradient-to-br from-neon-green/20 to-neon-blue/20 rounded-lg border border-neon-green/30 flex items-center justify-center">
                  <Settings className="w-12 h-12 text-neon-green" />
                </div>
              </div>
              
              {/* Efeito de conexão */}
              <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
                <div className="w-2 h-2 bg-neon-blue rounded-full animate-pulse"></div>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Call to action da seção */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="text-center"
        >
          <div className="glass-effect rounded-2xl p-8 max-w-4xl mx-auto border border-neon-blue/20">
            <h3 className="text-2xl font-bold text-japan-white mb-4">
              Pronto para elevar seu evento ao próximo nível?
            </h3>
            <p className="text-gray-300 mb-6">
              Combinamos todos esses diferenciais para criar a experiência perfeita para você e seus convidados.
            </p>
            <button className="btn-neon">
              Garantir minha data
            </button>
          </div>
        </motion.div>
      </div>

      {/* Linha decorativa */}
      <div className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-neon-blue to-transparent"></div>
    </section>
  );
}
