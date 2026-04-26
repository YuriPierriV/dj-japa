'use client';

import { motion } from 'framer-motion';
import { Coffee, Music, Speaker, PartyPopper } from 'lucide-react';
import Image from 'next/image';
import type { ProcessIconName } from '@/lib/landing-content';

const iconMap: Record<ProcessIconName, typeof Coffee> = {
    coffee: Coffee,
    music: Music,
    speaker: Speaker,
    party: PartyPopper,
};

type DeliveryProcessSectionProps = {
    kicker: string;
    title: string;
    highlight: string;
    steps: Array<{
        icon: ProcessIconName;
        title: string;
        description: string;
        mediaType: 'image' | 'video';
        mediaSrc: string;
        mediaAlt: string;
        mediaPositionClassName: string;
    }>;
};

export default function DeliveryProcessSection({
    kicker,
    title,
    highlight,
    steps,
}: DeliveryProcessSectionProps) {
    return (
        <section id="como-funciona" className="relative z-20 -mt-12 overflow-visible rounded-t-[2.5rem] bg-wedding-navy px-6 py-20 shadow-[0_-20px_40px_rgba(0,0,0,0.4)] sm:-mt-24 sm:rounded-t-[4rem] sm:px-12 sm:py-32">
            <div className="mx-auto max-w-7xl">
                {/* Header Embutido Sem Escala Gigante no Mobile */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-100px" }}
                    transition={{ duration: 0.8 }}
                    className="mb-16 text-center sm:mb-24"
                >
                    <div className="mb-4 flex items-center justify-center gap-4 sm:mb-6">
                        <div className="h-[1px] w-12 bg-wedding-gold/30"></div>
                        <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-wedding-gold">
                            {kicker}
                        </span>
                        <div className="h-[1px] w-12 bg-wedding-gold/30"></div>
                    </div>
                    <h2 className="font-serif text-[2.2rem] font-medium leading-[1.1] tracking-tight text-white sm:text-5xl md:text-[3.5rem] [text-wrap:balance]">
                        {title} <span className="italic text-wedding-gold">{highlight}</span>
                    </h2>
                </motion.div>

                {/* 2x2 Bento Grid Cinematográfico */}
                <div className="grid gap-6 md:grid-cols-2 lg:gap-8">
                    {steps.map((step) => {
                        const StepIcon = iconMap[step.icon];
                        return (
                            <motion.div
                                key={step.title}
                                initial={{ opacity: 0.3, scale: 0.95, filter: 'brightness(0.3)', boxShadow: '0px 0px 30px rgba(0,0,0,0.5)', borderColor: 'rgba(255,255,255,0.05)' }}
                                whileInView={{ opacity: 1, scale: 1, filter: 'brightness(1)', boxShadow: '0px 0px 40px rgba(201,166,113,0.08)', borderColor: 'rgba(201,166,113,0.15)' }}
                                viewport={{ once: true, margin: "-15% 0px -15% 0px" }}
                                transition={{ duration: 0.7, ease: "easeOut" }}
                                className="group relative flex flex-col overflow-hidden rounded-3xl bg-zinc-900 border transition-all duration-700 aspect-[4/5] sm:aspect-[4/3] lg:aspect-[16/10]"
                            >
                                {/* Imagem de Fundo Completa */}
                                <div className="absolute inset-0 h-full w-full overflow-hidden bg-zinc-900">
                                    {step.mediaType === 'video' ? (
                                        <video
                                            src={step.mediaSrc}
                                            autoPlay
                                            muted
                                            loop
                                            playsInline
                                            className={`h-full w-full object-cover ${step.mediaPositionClassName} opacity-50 sm:transition-transform sm:duration-[2s] sm:group-hover:scale-105 sm:group-hover:opacity-70`}
                                        />
                                    ) : (
                                        <Image
                                            src={step.mediaSrc}
                                            alt={step.mediaAlt}
                                            fill
                                            className={`object-cover ${step.mediaPositionClassName} opacity-50 transition-transform duration-[2s] group-hover:scale-105 group-hover:opacity-70`}
                                            sizes="(max-width: 768px) 100vw, 50vw"
                                        />
                                    )}
                                    {/* Overlay Fade */}
                                    <div className="absolute inset-0 bg-gradient-to-t from-zinc-950 via-zinc-950/60 to-transparent opacity-90" />
                                </div>

                                {/* Conteúdo do Card Alinhado ao Bottom */}
                                <div className="relative z-10 flex h-full flex-col justify-end p-6 sm:p-10">
                                    <div className="mb-4 sm:mb-6 inline-flex h-12 w-12 items-center justify-center rounded-2xl bg-wedding-gold/20 backdrop-blur-sm border border-wedding-gold/30">
                                        <StepIcon className="h-6 w-6 text-wedding-gold" strokeWidth={1.5} />
                                    </div>
                                    <h3 className="mb-2 sm:mb-3 font-serif text-2xl font-medium text-white sm:text-3xl">
                                        {step.title}
                                    </h3>
                                    <p className="max-w-md text-sm font-light leading-relaxed text-white/70 sm:text-base">
                                        {step.description}
                                    </p>
                                </div>
                            </motion.div>
                        )
                    })}
                </div>
            </div>
        </section>
    );
}
