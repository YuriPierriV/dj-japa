'use client';

import { motion } from 'framer-motion';
import { Star, Quote } from 'lucide-react';

const depoimentos = [
  {
    nome: 'Larissa Lima',
    texto: `Quero deixar aqui registrado a minha total satisfação com o atendimento e trabalho do Japa , um profissional excelente, estou totalmente apaixonada pelo trabalho dele, o pessoal só elogios sobre a festa que ele entregou.
Pode ter certeza que todos os meus eventos serão com ele , prometeu e entregou tudo ♥️ Indico 100 milhões de vezes
Obrigada por todo comprometimento você é nota mil 🥹💥`,
    rating: 5,
    destaque: 'Casamento dos sonhos realizado!'
  },
  {
    nome: 'Priscila Oliveira',
    texto: 'DJ Japa é excepcional, extremamente profissional e sabe como deixar a pista de dança de qualquer evento animada. Para o cerimonial organizar um evento tendo como DJ o JAPA é maravilhoso, pois o trabalho deste profissional interfere no resultado do evento.',
    rating: 5,
    destaque: 'Sabe como deixar a pista de dança de qualquer evento animada'
  },
  {
    nome: 'Gabriella Nakandakari',
    evento: 'Evento Corporativo',
    texto: 'Simplesmente o melhor! Faz set list de acordo com o que você pede e está sempre animado e disposto a deixar todos os convidados entretidos. Sem contar no ótimo custo benefício... Profissional dedicado ao que faz. Muito obrigada por tudo!',
    rating: 5,
    destaque: 'Simplesmente o melhor! '
  },
  {
    nome: 'Gabi Pereira',
    texto: `Parabéns por ter escolhido ser DJ, você nasceu pra isso!
Poucos tem esse feeling, essa responsabilidade e organização, faz toda a diferença em um evento.
Conte comigo, estou aqui para o que precisar <3`,
    rating: 5,
    destaque: 'Você nasceu pra isso!'
  },
  {
    nome: 'Nakah',
    texto: `Melhor dj do mundo!! Sabe como animar uma festa da maneira correta , transmiti uma energia ótima no palco`,
    rating: 5,
    destaque: 'Energia ótima no palco'
  },
  {
    nome: 'Agoncilio Canoa',
    texto: `Espetacular, equipe pontual extrovertida, com uma sem fim de playlists, ele faz a festa !!!!!`,
    rating: 5,
    destaque: 'Equipe pontual extrovertida'
  },
];

export default function TestimonialsSection() {
  return (
    <section id="depoimentos" className="section-padding bg-gradient-to-b from-japan-dark to-japan-gray relative overflow-hidden">
      {/* Elementos decorativos de fundo */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-neon-pink/5 rounded-full blur-3xl"></div>
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-neon-blue/5 rounded-full blur-3xl"></div>

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
            Prova Social
          </motion.span>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-4xl lg:text-5xl font-bold text-japan-white leading-tight mb-6"
          >
            O que nossos clientes
            <span className="gradient-text block">estão falando</span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-xl text-gray-300 max-w-3xl mx-auto"
          >
            A satisfação dos nossos clientes é nossa maior recompensa.
            Veja os depoimentos de quem já viveu uma experiência inesquecível.
          </motion.p>
        </motion.div>

        {/* Estatísticas rápidas */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-16"
        >
          <div className="text-center">
            <div className="text-4xl font-bold gradient-text mb-2">100%</div>
            <div className="text-gray-400">Satisfação</div>
          </div>
          <div className="text-center">
            <div className="text-4xl font-bold gradient-text mb-2">500+</div>
            <div className="text-gray-400">Eventos</div>
          </div>
          <div className="text-center">
            <div className="text-4xl font-bold gradient-text mb-2">5.0★</div>
            <div className="text-gray-400">Avaliação</div>
          </div>
          <div className="text-center">
            <div className="text-4xl font-bold gradient-text mb-2">95%</div>
            <div className="text-gray-400">Recontratação</div>
          </div>
        </motion.div>

        {/* Grid de depoimentos */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {depoimentos.map((depoimento, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="group relative"
            >
              <div className="glass-effect rounded-2xl p-8 border border-neon-blue/20 h-full transition-all duration-500 hover:scale-105 hover:border-neon-blue/40 hover:shadow-[0_10px_30px_rgba(16,215,255,0.2)]">
                {/* Quote icon */}
                <div className="absolute top-6 right-6 opacity-10 group-hover:opacity-20 transition-opacity duration-300">
                  <Quote className="w-12 h-12 text-neon-blue" />
                </div>

                {/* Avatar e destaque */}
                <div className="flex items-center gap-4 mb-6">
                  <div className="flex-1">
                    <h3 className="font-bold text-japan-white">{depoimento.nome}</h3>
                    <p className="text-sm text-neon-blue">{depoimento.evento}</p>
                  </div>
                </div>

                {/* Rating */}
                <div className="flex gap-1 mb-4">
                  {[...Array(depoimento.rating)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                  ))}
                </div>

                {/* Destaque */}
                <div className="bg-gradient-to-r from-neon-blue/10 to-neon-purple/10 rounded-lg p-3 mb-4 border border-neon-blue/20">
                  <p className="text-sm font-semibold text-neon-blue">
                    &ldquo;{depoimento.destaque}&rdquo;
                  </p>
                </div>

                {/* Texto do depoimento */}
                <p className="text-gray-300 leading-relaxed">
                  &ldquo;{depoimento.texto}&rdquo;
                </p>

                {/* Elementos decorativos */}
                <div className="absolute bottom-4 left-4 w-2 h-2 bg-neon-pink/30 rounded-full animate-pulse"></div>
                <div className="absolute top-1/2 left-2 w-1 h-1 bg-neon-blue/40 rounded-full animate-ping"></div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Call to action da seção */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="text-center mt-16"
        >
          <div className="glass-effect rounded-2xl p-8 max-w-4xl mx-auto border border-neon-purple/20">
            <h3 className="text-2xl font-bold text-japan-white mb-4">
              Quer ser o próximo depoimento de sucesso?
            </h3>
            <p className="text-gray-300 mb-6">
              Junte-se a centenas de clientes satisfeitos e transforme seu evento
              em uma experiência inesquecível.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="btn-neon">
                Solicitar orçamento
              </button>
              <a target='_blanck' href='https://www.google.com/search?sca_esv=cdd4458fa27f824d&sxsrf=AE3TifN9uso0wWDYY78n1c1mwtzQcHu3Cw:1757981430546&si=AMgyJEtREmoPL4P1I5IDCfuA8gybfVI2d5Uj7QMwYCZHKDZ-E3CmmHPj8r7tic8Oxqy7bYbVV4Au4fkjuFs7d1xhGmbmncpPcH5jQv5BEg0ex5YpiFDGsQxpknH73EJY_fPyL1wD-UPKlKJeT4z2zrlOqjk9pNKqoA%3D%3D&q=Dj+Japa+-+Dj+em+Bras%C3%ADlia+Reviews&sa=X&ved=2ahUKEwjo3MGV_9uPAxWdp5UCHXScO0oQ0bkNegQIGxAC&biw=1478&bih=711&dpr=1.25'
                className="px-8 py-4 bg-transparent border border-neon-purple/50 text-neon-purple font-semibold rounded-lg transition-all duration-300 hover:bg-neon-purple/10 hover:scale-105">
                Ver mais depoimentos
              </a>
            </div>
          </div>
        </motion.div>
      </div>

      {/* Linha decorativa */}
      <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-neon-pink to-transparent"></div>
    </section>
  );
}
