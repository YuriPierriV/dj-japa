'use client';

import { motion, AnimatePresence } from 'framer-motion';
import { Play, Camera, Music, Eye, X, ChevronLeft, ChevronRight } from 'lucide-react';
import { useState, useRef, useEffect } from 'react';
import Image from 'next/image';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Autoplay, FreeMode } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/free-mode';

// Componente para thumbnail de vídeo
const VideoThumbnail = ({ src, alt, className }: { src: string; alt: string; className?: string }) => {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [thumbnailLoaded, setThumbnailLoaded] = useState(false);

  useEffect(() => {
    const video = videoRef.current;
    if (video) {
      video.currentTime = 1; // Pega frame do segundo 1
      const handleLoadedData = () => setThumbnailLoaded(true);
      video.addEventListener('loadeddata', handleLoadedData);
      return () => video.removeEventListener('loadeddata', handleLoadedData);
    }
  }, []);

  return (
    <div className="relative w-full h-full">
      <video
        ref={videoRef}
        src={src}
        preload="metadata"
        className={`w-full h-full object-cover transition-transform duration-300 ${className} ${
          thumbnailLoaded ? 'opacity-100' : 'opacity-0'
        }`}
        muted
        playsInline
      />
      {!thumbnailLoaded && (
        <div className="absolute inset-0 bg-gradient-to-br from-japan-gray to-japan-dark flex items-center justify-center">
          <Play className="w-16 h-16 text-neon-blue opacity-50" />
        </div>
      )}
      {/* Overlay de play */}
      <div className="absolute inset-0 bg-black/20 flex items-center justify-center">
        <div className="w-16 h-16 bg-neon-blue/80 rounded-full flex items-center justify-center backdrop-blur-sm">
          <Play className="w-8 h-8 text-white ml-1" />
        </div>
      </div>
    </div>
  );
};

const mediaItems = [
  // Embaralhado entre imagens e vídeos para melhor distribuição visual
  {
    id: 1,
    type: 'image',
    title: 'DJ Japa - Perfil Profissional',
    description: 'Retrato oficial do DJ',
    src: '/imagens/fotoDJ.JPG',
    category: 'performance'
  },
  {
    id: 2,
    type: 'video',
    title: 'Performance Destaque',
    description: 'DJ Japa em ação - Vídeo exclusivo',
    src: '/vid1.mp4',
    category: 'performance'
  },
  {
    id: 3,
    type: 'image',
    title: 'Evento Especial',
    description: 'Alta qualidade em ação',
    src: '/imagens/_DSC8553.JPEG',
    category: 'casamento'
  },
  {
    id: 4,
    type: 'video',
    title: 'Momento Especial',
    description: 'Celebração única',
    src: '/videos/IMG_2451.MOV',
    category: 'casamento'
  },
  {
    id: 5,
    type: 'image',
    title: 'Setup Profissional',
    description: 'Equipamentos de ponta',
    src: '/imagens/_DSC8556.JPEG',
    category: 'equipamentos'
  },
  {
    id: 6,
    type: 'video',
    title: 'Setup em Ação',
    description: 'Equipamentos profissionais',
    src: '/videos/IMG_2460.MOV',
    category: 'equipamentos'
  },
  {
    id: 7,
    type: 'image',
    title: 'Ambiente Festivo',
    description: 'Energia contagiante',
    src: '/imagens/_DSC8567.JPEG',
    category: 'festa'
  },
  {
    id: 8,
    type: 'video',
    title: 'Energia da Pista',
    description: 'Público animado',
    src: '/videos/IMG_3104.MOV',
    category: 'festa'
  },
  {
    id: 9,
    type: 'image',
    title: 'Performance ao Vivo',
    description: 'DJ em plena ação',
    src: '/imagens/_DSC8584.JPEG',
    category: 'performance'
  },
  {
    id: 10,
    type: 'video',
    title: 'Mixagem Técnica',
    description: 'Habilidades avançadas',
    src: '/videos/IMG_3112.MOV',
    category: 'performance'
  },
  {
    id: 11,
    type: 'image',
    title: 'Evento Corporativo',
    description: 'Profissionalismo garantido',
    src: '/imagens/_DSC8586.JPEG',
    category: 'corporativo'
  },
  {
    id: 12,
    type: 'video',
    title: 'Festa Corporativa',
    description: 'Ambiente profissional',
    src: '/videos/IMG_2463.MOV',
    category: 'corporativo'
  },
  {
    id: 13,
    type: 'image',
    title: 'Registro Especial',
    description: 'Momentos únicos',
    src: '/imagens/IMG_2702.JPG',
    category: 'premium'
  },
  {
    id: 14,
    type: 'video',
    title: 'Evento Exclusivo',
    description: 'Registro profissional',
    src: '/videos/IMG_2211.MOV',
    category: 'premium'
  },
  {
    id: 15,
    type: 'image',
    title: 'Momento Especial',
    description: 'Celebração inesquecível',
    src: '/imagens/_DSC8572.JPEG',
    category: 'casamento'
  },
  {
    id: 16,
    type: 'video',
    title: 'Casamento Especial',
    description: 'Momentos únicos',
    src: '/videos/IMG_2458.MOV',
    category: 'casamento'
  },
  {
    id: 17,
    type: 'image',
    title: 'Evento Principal',
    description: 'Momentos especiais capturados',
    src: '/imagens/principal.JPG',
    category: 'festa'
  },
  {
    id: 18,
    type: 'video',
    title: 'Evento ao Vivo',
    description: 'Energia da pista de dança',
    src: '/vid2.mp4',
    category: 'festa'
  },
  {
    id: 19,
    type: 'image',
    title: 'Iluminação Especial',
    description: 'Efeitos visuais únicos',
    src: '/imagens/_DSC8588.JPEG',
    category: 'iluminacao'
  },
  {
    id: 20,
    type: 'video',
    title: 'Performance Premium',
    description: 'Alta qualidade visual',
    src: '/videos/IMG_2473.MOV',
    category: 'premium'
  },
  {
    id: 21,
    type: 'image',
    title: 'Grande Evento',
    description: 'Multidão se divertindo',
    src: '/imagens/_DSC8596.JPEG',
    category: 'festa'
  },
  {
    id: 22,
    type: 'video',
    title: 'Show Exclusivo',
    description: 'Apresentação especial',
    src: '/videos/IMG_3113.MOV',
    category: 'performance'
  },
  {
    id: 23,
    type: 'image',
    title: 'Evento Exclusivo',
    description: 'Qualidade premium',
    src: '/imagens/IMG_4159.JPG',
    category: 'premium'
  },
  {
    id: 24,
    type: 'video',
    title: 'Mixagem Especial',
    description: 'Técnicas profissionais',
    src: '/vid3.mp4',
    category: 'performance'
  },
  {
    id: 25,
    type: 'video',
    title: 'Evento Premium',
    description: 'Qualidade excepcional',
    src: '/videos/IMG_3114.MOV',
    category: 'premium'
  },
  {
    id: 26,
    type: 'video',
    title: 'Festa Animada',
    description: 'Energia contagiante',
    src: '/videos/IMG_3115.MOV',
    category: 'festa'
  },
  {
    id: 27,
    type: 'video',
    title: 'Performance Técnica',
    description: 'Demonstração de habilidades',
    src: '/videos/IMG_3116.MOV',
    category: 'performance'
  },
  {
    id: 28,
    type: 'video',
    title: 'Evento Corporativo Premium',
    description: 'Profissionalismo máximo',
    src: '/videos/IMG_3118.MOV',
    category: 'corporativo'
  },
  {
    id: 29,
    type: 'video',
    title: 'Show Especial',
    description: 'Momento único',
    src: '/videos/IMG_3119.MOV',
    category: 'performance'
  },
  {
    id: 30,
    type: 'video',
    title: 'Grande Celebração',
    description: 'Festa memorável',
    src: '/videos/IMG_3125.MOV',
    category: 'festa'
  },
  {
    id: 31,
    type: 'video',
    title: 'Evento Especial Premium',
    description: 'Momentos únicos',
    src: '/videos/IMG_3273.mov',
    category: 'premium'
  },
  {
    id: 32,
    type: 'video',
    title: 'Performance Noturna',
    description: 'Energia da noite',
    src: '/videos/IMG_6984.MOV',
    category: 'performance'
  },
  {
    id: 33,
    type: 'video',
    title: 'Show Completo',
    description: 'Apresentação integral',
    src: '/videos/IMG_7009.MOV',
    category: 'performance'
  },
  {
    id: 34,
    type: 'video',
    title: 'Evento Final',
    description: 'Grande encerramento',
    src: '/videos/IMG_7011.MOV',
    category: 'festa'
  },
  {
    id: 35,
    type: 'video',
    title: 'Performance Exclusiva',
    description: 'Show especial',
    src: '/videos/IMG_7032.MOV',
    category: 'performance'
  }
];

const categories = [
  { id: 'all', name: 'Todos', count: 35 },
  { id: 'performance', name: 'Performance', count: 9 },
  { id: 'festa', name: 'Festas', count: 7 },
  { id: 'premium', name: 'Premium', count: 6 },
  { id: 'casamento', name: 'Casamentos', count: 4 },
  { id: 'corporativo', name: 'Corporativo', count: 3 },
  { id: 'equipamentos', name: 'Equipamentos', count: 2 },
  { id: 'iluminacao', name: 'Iluminação', count: 1 },
];

export default function GallerySection() {
  const [activeCategory, setActiveCategory] = useState('all');
  const [hoveredItem, setHoveredItem] = useState<number | null>(null);
  const [selectedItem, setSelectedItem] = useState<typeof mediaItems[0] | null>(null);
  const [currentIndex, setCurrentIndex] = useState(0);

  const filteredItems = activeCategory === 'all' 
    ? mediaItems 
    : mediaItems.filter(item => item.category === activeCategory);

  const openModal = (item: typeof mediaItems[0]) => {
    setSelectedItem(item);
    const index = filteredItems.findIndex(i => i.id === item.id);
    setCurrentIndex(index);
  };

  const closeModal = () => {
    setSelectedItem(null);
  };

  const goToPrevious = () => {
    const newIndex = currentIndex > 0 ? currentIndex - 1 : filteredItems.length - 1;
    setCurrentIndex(newIndex);
    setSelectedItem(filteredItems[newIndex]);
  };

  const goToNext = () => {
    const newIndex = currentIndex < filteredItems.length - 1 ? currentIndex + 1 : 0;
    setCurrentIndex(newIndex);
    setSelectedItem(filteredItems[newIndex]);
  };

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

        {/* Carrossel da galeria */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mb-16"
        >
          <Swiper
            modules={[Navigation, Pagination, Autoplay, FreeMode]}
            spaceBetween={16}
            slidesPerView={1.2}
            breakpoints={{
              480: {
                slidesPerView: 2.2,
                spaceBetween: 16,
              },
              768: {
                slidesPerView: 3.2,
                spaceBetween: 20,
              },
              1024: {
                slidesPerView: 4.2,
                spaceBetween: 24,
              },
              1280: {
                slidesPerView: 5.2,
                spaceBetween: 24,
              },
            }}
            freeMode={true}
            navigation={{
              nextEl: '.gallery-swiper-button-next',
              prevEl: '.gallery-swiper-button-prev',
            }}
            pagination={{
              clickable: true,
              dynamicBullets: true,
            }}
            autoplay={{
              delay: 3000,
              disableOnInteraction: false,
              pauseOnMouseEnter: true,
            }}
            className="gallery-swiper !pb-12"
          >
            {filteredItems.map((item, index) => (
              <SwiperSlide key={item.id}>
                <motion.div
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.4, delay: index * 0.05 }}
                  className="group relative overflow-hidden rounded-2xl cursor-pointer h-64 md:h-80"
                  onMouseEnter={() => setHoveredItem(item.id)}
                  onMouseLeave={() => setHoveredItem(null)}
                  onClick={() => openModal(item)}
                >
                  {/* Container da imagem */}
                  <div className="relative w-full h-full overflow-hidden bg-gradient-to-br from-neon-blue/20 to-neon-purple/20">
                    {item.type === 'image' ? (
                      /* Imagem */
                      <>
                        <Image
                          src={item.src}
                          alt={item.title}
                          fill
                          className="object-cover object-center transition-transform duration-300 group-hover:scale-110"
                          sizes="(max-width: 480px) 80vw, (max-width: 768px) 40vw, (max-width: 1024px) 30vw, 20vw"
                          quality={85}
                        />
                        {/* Overlay escuro para melhor legibilidade do texto */}
                        <div className="absolute inset-0 bg-black/20"></div>
                      </>
                    ) : (
                      /* Thumbnail do vídeo */
                      <VideoThumbnail
                        src={item.src}
                        alt={item.title}
                        className="group-hover:scale-110"
                      />
                    )}

                    {/* Overlay com informações */}
                    <div className={`absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent transition-all duration-300 ${
                      hoveredItem === item.id ? 'opacity-100' : 'opacity-0 group-hover:opacity-100'
                    }`}>
                      <div className="absolute bottom-4 left-4 right-4">
                        <h3 className="text-white font-bold text-sm md:text-base mb-1 line-clamp-1">{item.title}</h3>
                        <p className="text-gray-300 text-xs md:text-sm line-clamp-2">{item.description}</p>
                      </div>
                    </div>

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
                  <div className="absolute top-3 right-3">
                    <div className={`px-2 py-1 rounded-full text-xs font-semibold ${
                      item.type === 'video' 
                        ? 'bg-neon-blue/80 text-white' 
                        : 'bg-neon-purple/80 text-white'
                    } backdrop-blur-sm`}>
                      {item.type === 'video' ? 'Vídeo' : 'Foto'}
                    </div>
                  </div>
                </motion.div>
              </SwiperSlide>
            ))}
          </Swiper>

          {/* Navegação customizada */}
          <div className="flex items-center justify-center gap-4 mt-6">
            <button className="gallery-swiper-button-prev w-10 h-10 bg-gradient-to-r from-neon-blue/20 to-neon-purple/20 border border-neon-blue/30 rounded-full flex items-center justify-center hover:bg-gradient-to-r hover:from-neon-blue/40 hover:to-neon-purple/40 transition-all duration-300">
              <ChevronLeft className="w-5 h-5 text-neon-blue" />
            </button>
            <button className="gallery-swiper-button-next w-10 h-10 bg-gradient-to-r from-neon-blue/20 to-neon-purple/20 border border-neon-blue/30 rounded-full flex items-center justify-center hover:bg-gradient-to-r hover:from-neon-blue/40 hover:to-neon-purple/40 transition-all duration-300">
              <ChevronRight className="w-5 h-5 text-neon-blue" />
            </button>
          </div>
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
            <Camera className="w-12 h-12 mx-auto mb-4 text-neon-blue" />
            <div className="text-3xl font-bold gradient-text mb-2">12</div>
            <div className="text-gray-400">Fotos profissionais</div>
          </div>
          <div className="text-center">
            <Play className="w-12 h-12 mx-auto mb-4 text-neon-purple" />
            <div className="text-3xl font-bold gradient-text mb-2">23</div>
            <div className="text-gray-400">Vídeos exclusivos</div>
          </div>
          <div className="text-center">
            <Music className="w-12 h-12 mx-auto mb-4 text-neon-pink" />
            <div className="text-3xl font-bold gradient-text mb-2">8</div>
            <div className="text-gray-400">Categorias diferentes</div>
          </div>
          <div className="text-center">
            <Eye className="w-12 h-12 mx-auto mb-4 text-neon-green" />
            <div className="text-3xl font-bold gradient-text mb-2">35</div>
            <div className="text-gray-400">Itens na galeria</div>
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

      {/* Modal de Visualização */}
      <AnimatePresence>
        {selectedItem && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center bg-black/90 backdrop-blur-sm"
            onClick={closeModal}
          >
            {/* Container do Modal */}
            <motion.div
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.8, opacity: 0 }}
              transition={{ duration: 0.3 }}
              className="relative max-w-7xl max-h-[90vh] mx-4"
              onClick={(e) => e.stopPropagation()}
            >
              {/* Botão Fechar */}
              <button
                onClick={closeModal}
                className="absolute top-4 right-4 z-10 w-10 h-10 bg-black/50 hover:bg-black/70 rounded-full flex items-center justify-center transition-colors backdrop-blur-sm"
              >
                <X className="w-6 h-6 text-white" />
              </button>

              {/* Navegação Anterior */}
              {filteredItems.length > 1 && (
                <button
                  onClick={goToPrevious}
                  className="absolute left-4 top-1/2 -translate-y-1/2 z-10 w-12 h-12 bg-black/50 hover:bg-black/70 rounded-full flex items-center justify-center transition-colors backdrop-blur-sm"
                >
                  <ChevronLeft className="w-8 h-8 text-white" />
                </button>
              )}

              {/* Navegação Próxima */}
              {filteredItems.length > 1 && (
                <button
                  onClick={goToNext}
                  className="absolute right-4 top-1/2 -translate-y-1/2 z-10 w-12 h-12 bg-black/50 hover:bg-black/70 rounded-full flex items-center justify-center transition-colors backdrop-blur-sm"
                >
                  <ChevronRight className="w-8 h-8 text-white" />
                </button>
              )}

              {/* Conteúdo do Modal */}
              <div className="relative bg-japan-dark rounded-2xl overflow-hidden border border-neon-blue/20">
                {selectedItem.type === 'image' ? (
                  // Exibição de Imagem
                  <div className="relative">
                    <Image
                      src={selectedItem.src}
                      alt={selectedItem.title}
                      width={1200}
                      height={800}
                      className="w-full h-auto max-h-[70vh] object-contain"
                      quality={95}
                    />
                  </div>
                ) : (
                  // Exibição de Vídeo
                  <div className="relative">
                    <video
                      src={selectedItem.src}
                      controls
                      autoPlay
                      className="w-full h-auto max-h-[70vh] object-contain"
                    >
                      Seu navegador não suporta vídeo.
                    </video>
                  </div>
                )}

                {/* Informações do Item */}
                <div className="p-6 bg-gradient-to-t from-black/80 to-transparent">
                  <div className="flex items-center gap-3 mb-2">
                    <div className={`px-3 py-1 rounded-full text-xs font-semibold ${
                      selectedItem.type === 'video' 
                        ? 'bg-neon-blue/80 text-white' 
                        : 'bg-neon-purple/80 text-white'
                    }`}>
                      {selectedItem.type === 'video' ? 'Vídeo' : 'Foto'}
                    </div>
                    <span className="text-neon-blue text-sm capitalize">
                      {categories.find(cat => cat.id === selectedItem.category)?.name}
                    </span>
                  </div>
                  
                  <h3 className="text-2xl font-bold text-white mb-2">
                    {selectedItem.title}
                  </h3>
                  
                  <p className="text-gray-300">
                    {selectedItem.description}
                  </p>

                  {/* Indicador de posição */}
                  {filteredItems.length > 1 && (
                    <div className="mt-4 flex items-center justify-center">
                      <span className="text-sm text-gray-400">
                        {currentIndex + 1} de {filteredItems.length}
                      </span>
                    </div>
                  )}
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
