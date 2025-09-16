'use client';

import { motion } from 'framer-motion';
import { Play, Camera, Music, Eye } from 'lucide-react';
import { useState } from 'react';

const mediaItems = [
  {
    id: 1,
    type: 'video',
    title: 'Casamento Ana & Ricardo',
    description: 'Momentos especiais da festa',
    thumbnail: '/api/placeholder/400/300',
    category: 'casamento'
  },
  {
    id: 2,
    type: 'image',
    title: 'Setup Profissional',
    description: 'Equipamentos em ação',
    thumbnail: '/api/placeholder/400/300',
    category: 'equipamentos'
  },
  {
    id: 3,
    type: 'video',
    title: 'Evento Corporativo Tech',
    description: 'Energia profissional',
    thumbnail: '/api/placeholder/400/300',
    category: 'corporativo'
  },
  {
    id: 4,
    type: 'image',
    title: 'Festa de Formatura',
    description: 'Celebrando conquistas',
    thumbnail: '/api/placeholder/400/300',
    category: 'formatura'
  },
  {
    id: 5,
    type: 'image',
    title: 'Pista de Dança Animada',
    description: 'Público se divertindo',
    thumbnail: '/api/placeholder/400/300',
    category: 'festa'
  },
  {
    id: 6,
    type: 'video',
    title: 'Mixagem ao Vivo',
    description: 'DJ Japa em ação',
    thumbnail: '/api/placeholder/400/300',
    category: 'performance'
  },
  {
    id: 7,
    type: 'image',
    title: 'Iluminação Especial',
    description: 'Efeitos visuais únicos',
    thumbnail: '/api/placeholder/400/300',
    category: 'iluminacao'
  },
  {
    id: 8,
    type: 'image',
    title: 'Evento Premium',
    description: 'Alta qualidade garantida',
    thumbnail: '/api/placeholder/400/300',
    category: 'premium'
  }
];

const categories = [
  { id: 'all', name: 'Todos', count: 8 },
  { id: 'casamento', name: 'Casamentos', count: 1 },
  { id: 'corporativo', name: 'Corporativo', count: 1 },
  { id: 'festa', name: 'Festas', count: 2 },
  { id: 'performance', name: 'Performance', count: 2 },
];

export default function GallerySection() {
  const [activeCategory, setActiveCategory] = useState('all');
  const [hoveredItem, setHoveredItem] = useState<number | null>(null);

  const filteredItems = activeCategory === 'all' 
    ? mediaItems 
    : mediaItems.filter(item => item.category === activeCategory);

  return (
    <section id="galeria" className="section-padding bg-gradient-to-b from-japan-dark to-japan-gray relative overflow-hidden">
      {/* Elementos decorativos de fundo */}
      <div className="absolute top-0 left-1/3 w-96 h-96 bg-neon-purple/5 rounded-full blur-3xl"></div>
      <div className="absolute bottom-0 right-1/3 w-96 h-96 bg-neon-blue/5 rounded-full blur-3xl"></div>

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
            Portfolio Visual
          </motion.span>
          
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-4xl lg:text-5xl font-bold text-japan-white leading-tight mb-6"
          >
            Veja o DJ Japa
            <span className="gradient-text block">em ação</span>
          </motion.h2>
          
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-xl text-gray-300 max-w-3xl mx-auto"
          >
            Uma imagem vale mais que mil palavras. Confira nosso trabalho em diversos 
            tipos de eventos e veja por que somos a escolha certa.
          </motion.p>
        </motion.div>

        {/* Filtros de categoria */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="flex flex-wrap justify-center gap-4 mb-12"
        >
          {categories.map((category, index) => (
            <motion.button
              key={category.id}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: index * 0.1 }}
              onClick={() => setActiveCategory(category.id)}
              className={`px-6 py-3 rounded-lg font-semibold transition-all duration-300 ${
                activeCategory === category.id
                  ? 'bg-gradient-to-r from-neon-blue to-neon-purple text-white shadow-[0_0_20px_rgba(16,215,255,0.4)]'
                  : 'bg-transparent border border-neon-blue/30 text-neon-blue hover:bg-neon-blue/10'
              }`}
            >
              {category.name}
              <span className="ml-2 text-sm opacity-75">({category.count})</span>
            </motion.button>
          ))}
        </motion.div>

        {/* Grid da galeria */}
        <motion.div
          layout
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16"
        >
          {filteredItems.map((item, index) => (
            <motion.div
              key={item.id}
              layout
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.9 }}
              transition={{ duration: 0.4, delay: index * 0.1 }}
              className="group relative overflow-hidden rounded-2xl cursor-pointer"
              onMouseEnter={() => setHoveredItem(item.id)}
              onMouseLeave={() => setHoveredItem(null)}
            >
              {/* Container da imagem */}
              <div className="relative aspect-square overflow-hidden bg-gradient-to-br from-neon-blue/20 to-neon-purple/20">
                {/* Placeholder da imagem */}
                <div className="w-full h-full bg-gradient-to-br from-japan-gray to-japan-dark flex items-center justify-center">
                  {item.type === 'video' ? (
                    <Play className="w-16 h-16 text-neon-blue opacity-50" />
                  ) : (
                    <Camera className="w-16 h-16 text-neon-purple opacity-50" />
                  )}
                </div>

                {/* Overlay com informações */}
                <div className={`absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent transition-all duration-300 ${
                  hoveredItem === item.id ? 'opacity-100' : 'opacity-0 group-hover:opacity-100'
                }`}>
                  <div className="absolute bottom-4 left-4 right-4">
                    <h3 className="text-white font-bold text-lg mb-1">{item.title}</h3>
                    <p className="text-gray-300 text-sm">{item.description}</p>
                  </div>
                </div>

                {/* Ícone de play para vídeos */}
                {item.type === 'video' && (
                  <div className={`absolute inset-0 flex items-center justify-center transition-all duration-300 ${
                    hoveredItem === item.id ? 'scale-110' : 'scale-100 group-hover:scale-110'
                  }`}>
                    <div className="w-16 h-16 bg-neon-blue/80 rounded-full flex items-center justify-center backdrop-blur-sm">
                      <Play className="w-8 h-8 text-white ml-1" />
                    </div>
                  </div>
                )}

                {/* Efeito de hover */}
                <div className={`absolute inset-0 bg-neon-blue/10 transition-all duration-300 ${
                  hoveredItem === item.id ? 'opacity-100' : 'opacity-0 group-hover:opacity-100'
                }`}></div>

                {/* Bordas neon no hover */}
                <div className={`absolute inset-0 border-2 border-neon-blue transition-all duration-300 rounded-2xl ${
                  hoveredItem === item.id ? 'opacity-50 shadow-[0_0_20px_rgba(16,215,255,0.3)]' : 'opacity-0'
                }`}></div>
              </div>

              {/* Badge do tipo */}
              <div className="absolute top-4 right-4">
                <div className={`px-3 py-1 rounded-full text-xs font-semibold ${
                  item.type === 'video' 
                    ? 'bg-neon-blue/80 text-white' 
                    : 'bg-neon-purple/80 text-white'
                } backdrop-blur-sm`}>
                  {item.type === 'video' ? 'Vídeo' : 'Foto'}
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Estatísticas da galeria */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-16"
        >
          <div className="text-center">
            <Music className="w-12 h-12 mx-auto mb-4 text-neon-blue" />
            <div className="text-3xl font-bold gradient-text mb-2">200+</div>
            <div className="text-gray-400">Fotos de eventos</div>
          </div>
          <div className="text-center">
            <Play className="w-12 h-12 mx-auto mb-4 text-neon-purple" />
            <div className="text-3xl font-bold gradient-text mb-2">50+</div>
            <div className="text-gray-400">Vídeos exclusivos</div>
          </div>
          <div className="text-center">
            <Camera className="w-12 h-12 mx-auto mb-4 text-neon-pink" />
            <div className="text-3xl font-bold gradient-text mb-2">25+</div>
            <div className="text-gray-400">Tipos de eventos</div>
          </div>
          <div className="text-center">
            <Eye className="w-12 h-12 mx-auto mb-4 text-neon-green" />
            <div className="text-3xl font-bold gradient-text mb-2">10k+</div>
            <div className="text-gray-400">Visualizações</div>
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
              Gostou do que viu? Que tal vermos seu evento aqui também?
            </h3>
            <p className="text-gray-300 mb-6">
              Entre em contato e vamos criar juntos memórias visuais incríveis para sua festa.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="btn-neon">
                Quero contratar
              </button>
              <button className="px-8 py-4 bg-transparent border border-neon-purple/50 text-neon-purple font-semibold rounded-lg transition-all duration-300 hover:bg-neon-purple/10 hover:scale-105">
                Ver galeria completa
              </button>
            </div>
          </div>
        </motion.div>
      </div>

      {/* Linha decorativa */}
      <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-neon-pink to-transparent"></div>
    </section>
  );
}
