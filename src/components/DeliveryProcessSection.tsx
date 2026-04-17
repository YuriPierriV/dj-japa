'use client';

import { motion } from 'framer-motion';
import { Coffee, Music, Speaker, PartyPopper } from 'lucide-react';
import Image from 'next/image';
import landingImages from '@/data/landingImages.json';
import JLogo from '@/components/JLogo';

const steps = [
    {
        icon: Coffee,
        title: '1. O Alinhamento',
        description: <>Reunião para <strong className="text-wedding-gold font-medium">entender o seu perfil</strong>, as músicas indispensáveis e o que <strong className="text-wedding-white font-medium">não pode tocar</strong> de jeito nenhum.</>,
        mediaType: 'image',
        mediaSrc: landingImages.deliveryProcess.alignment.route,
        mediaPositionClassName: 'object-top'
    },
    {
        icon: Music,
        title: '2. A Curadoria',
        description: <>Criação da <strong className="text-wedding-gold font-medium">identidade sonora</strong> da sua festa. Trilhas exclusivas desenhadas milimetricamente.</>,
        mediaType: 'image',
        mediaSrc: landingImages.deliveryProcess.curation.route,
        mediaPositionClassName: 'object-top'
    },
    {
        icon: Speaker,
        title: '3. A Estrutura',
        description: <>Montagem de equipamentos premium, de <strong className="text-wedding-gold font-medium">alta fidelidade</strong> e estética que valoriza a decoração.</>,
        mediaType: 'video',
        mediaSrc: landingImages.deliveryProcess.structure.route,
        mediaPositionClassName: 'object-center'
    },
    {
        icon: PartyPopper,
        title: '4. A Execução',
        description: <>Leitura de pista e <strong className="text-wedding-gold font-medium">timing perfeito</strong>. Sem intervalos, mantendo a energia sempre lá no alto.</>,
        mediaType: 'image',
        mediaSrc: landingImages.deliveryProcess.execution.route,
        mediaPositionClassName: 'object-center'
    }
];

export default function DeliveryProcessSection() {
    return (
        <section id="como-funciona" className="py-24 bg-wedding-navy relative overflow-hidden">

            {/* Giant Luxury Watermark */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] opacity-[0.03] pointer-events-none z-0 animate-[slow-zoom_30s_ease-in-out_infinite_alternate]">
                <JLogo className="w-full h-full" />
            </div>

            <div className="max-w-7xl mx-auto px-6 lg:px-12 relative z-10">
                <div className="text-center mb-20">
                    <div className="flex items-center justify-center gap-4 mb-4">
                        <div className="h-[1px] w-12 bg-wedding-gold/30"></div>
                        <span className="uppercase tracking-[0.2em] text-xs font-semibold text-wedding-gold">
                            O Processo
                        </span>
                        <div className="h-[1px] w-12 bg-wedding-gold/30"></div>
                    </div>
                    <h2 className="font-serif text-4xl lg:text-5xl font-medium text-wedding-white leading-tight">
                        A Engenharia de uma <span className="italic text-wedding-gold">Festa Perfeita</span>
                    </h2>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
                    {steps.map((step, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6, delay: index * 0.15 }}
                            className="group relative bg-[#131824] rounded-sm overflow-hidden border border-wedding-white/5 hover:border-wedding-gold/40 transition-colors duration-500 shadow-xl"
                        >
                            {/* Image Header */}
                            <div className="relative h-48 w-full overflow-hidden">
                                {step.mediaType === 'video' ? (
                                    <video
                                        src={step.mediaSrc}
                                        autoPlay
                                        muted
                                        loop
                                        playsInline
                                        preload="auto"
                                        onLoadedData={(event) => {
                                            event.currentTarget.playbackRate = 0.6;
                                            event.currentTarget.currentTime = 0.2;
                                        }}
                                        className={`h-full w-full object-cover ${step.mediaPositionClassName} opacity-60 transition-all duration-700 group-hover:scale-105 group-hover:opacity-100`}
                                    />
                                ) : (
                                    <Image
                                        src={step.mediaSrc}
                                        alt={step.title}
                                        fill
                                        className={`object-cover ${step.mediaPositionClassName} group-hover:scale-105 transition-transform duration-700 opacity-60 group-hover:opacity-100`}
                                        sizes="(max-width: 768px) 100vw, 25vw"
                                    />
                                )}
                                <div className="absolute inset-0 bg-gradient-to-t from-[#131824] to-transparent opacity-90" />
                                <div className="absolute bottom-5 left-6">
                                    <step.icon className="w-8 h-8 text-wedding-gold" strokeWidth={1.5} />
                                </div>
                            </div>

                            {/* Content */}
                            <div className="p-6 pt-2 h-full bg-[#131824]">
                                <h3 className="font-serif text-xl font-medium text-wedding-white mb-3">
                                    {step.title}
                                </h3>
                                <p className="text-sm font-light text-wedding-white/70 leading-relaxed">
                                    {step.description}
                                </p>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
