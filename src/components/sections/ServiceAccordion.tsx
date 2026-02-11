"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { cn } from "@/lib/utils";
import Image from "next/image";

interface ServiceItem {
    number: string;
    title: string;
    description: string;
    imageSrc: string;
}

const SERVICES: ServiceItem[] = [
    {
        number: "01",
        title: "Geriatria de Precisão",
        description:
            "Uma abordagem multidimensional que vai além do tratamento de doenças. Avaliamos a capacidade funcional, cognitiva e emocional, desenhando estratégias para um envelhecimento com autonomia e vitalidade.",
        imageSrc: "/images/geriatria.jpg",
    },
    {
        number: "02",
        title: "Cardiologia Geriátrica",
        description:
            "O coração envelhece conosco. Nossa cardiologia é especializada nas alterações cardiovasculares típicas da idade, focando em prevenção, controle de pressão e insuficiência cardíaca com um olhar conservador e seguro.",
        imageSrc: "/images/cardiology.jpg",
    },
    {
        number: "03",
        title: "Concierge de Saúde",
        description:
            "A gestão completa da sua jornada médica. Organizamos exames, integramos especialistas e centralizamos seu histórico, oferecendo conveniência e garantindo que nenhum detalhe da sua saúde seja perdido.",
        imageSrc: "/images/health concierge.jpg",
    }
];

export function ServiceAccordion() {
    const [activeIndex, setActiveIndex] = useState<number | null>(0);

    return (
        <div className="flex flex-col lg:flex-row gap-16 lg:gap-8 min-h-[600px]">
            {/* List */}
            <div className="flex-1 flex flex-col justify-center">
                {SERVICES.map((service, index) => (
                    <div
                        key={index}
                        className="border-b border-brand-charcoal/10 last:border-none"
                    >
                        <button
                            onClick={() => setActiveIndex(index)}
                            className="w-full text-left py-8 group transition-colors duration-300"
                        >
                            <div className="flex items-baseline gap-6">
                                <span
                                    className={cn(
                                        "font-sans text-sm font-medium tracking-widest transition-colors duration-300",
                                        activeIndex === index
                                            ? "text-brand-amber"
                                            : "text-brand-gray-light group-hover:text-brand-charcoal"
                                    )}
                                >
                                    {service.number}
                                </span>
                                <h3
                                    className={cn(
                                        "font-serif text-3xl md:text-4xl transition-colors duration-300",
                                        activeIndex === index
                                            ? "text-brand-charcoal"
                                            : "text-brand-gray/50 group-hover:text-brand-charcoal"
                                    )}
                                >
                                    {service.title}
                                </h3>
                            </div>
                            <AnimatePresence>
                                {activeIndex === index && (
                                    <motion.div
                                        initial={{ height: 0, opacity: 0 }}
                                        animate={{ height: "auto", opacity: 1 }}
                                        exit={{ height: 0, opacity: 0 }}
                                        transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
                                        className="overflow-hidden"
                                    >
                                        <div className="pl-0 lg:pl-12 pt-6">
                                            {/* Mobile Image (Visible < lg) */}
                                            <div className="relative w-full h-[250px] mb-6 lg:hidden rounded-sm overflow-hidden">
                                                <Image
                                                    src={service.imageSrc}
                                                    alt={service.title}
                                                    fill
                                                    className="object-cover"
                                                />
                                            </div>

                                            <p className="text-brand-gray text-lg leading-relaxed max-w-lg">
                                                {service.description}
                                            </p>
                                        </div>
                                    </motion.div>
                                )}
                            </AnimatePresence>
                        </button>
                    </div>
                ))}
            </div>

            {/* Desktop Visuals (Hidden < lg) */}
            <div className="flex-1 relative h-[400px] lg:h-auto hidden lg:block overflow-hidden rounded-sm">
                <AnimatePresence mode="wait">
                    {activeIndex !== null && (
                        <motion.div
                            key={activeIndex}
                            initial={{ opacity: 0, scale: 1.05 }}
                            animate={{ opacity: 1, scale: 1 }}
                            exit={{ opacity: 0 }}
                            transition={{ duration: 0.6, ease: "easeInOut" }}
                            className="absolute inset-0"
                        >
                            <Image
                                src={SERVICES[activeIndex].imageSrc}
                                alt={SERVICES[activeIndex].title}
                                fill
                                className="object-cover grayscale hover:grayscale-0 transition-all duration-700"
                            />
                            <div className="absolute inset-0 bg-brand-charcoal/10" />
                        </motion.div>
                    )}
                </AnimatePresence>
            </div>
        </div>
    );
}
