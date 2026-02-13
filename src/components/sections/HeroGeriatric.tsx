"use client";

import { useRef } from "react";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/Button";
import { WaveDivider } from "@/components/ui/WaveDivider";
import { motion, useScroll, useTransform } from "framer-motion";

export function HeroGeriatric() {
    const heroRef = useRef<HTMLElement>(null);

    const { scrollYProgress } = useScroll({
        target: heroRef,
        offset: ["start start", "end start"],
    });

    // Main content fade out on scroll
    const contentOpacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);
    const contentY = useTransform(scrollYProgress, [0, 0.5], [0, -50]);

    return (
        <section
            ref={heroRef}
            className="relative w-full min-h-[100vh] flex flex-col bg-background overflow-hidden"
        >
            {/* Main Hero Content Area */}
            <motion.div
                style={{ opacity: contentOpacity, y: contentY }}
                className="flex-1 flex items-center justify-center relative z-10 pt-24 pb-20"
            >
                <div className="container px-4 md:px-6 relative z-10">
                    <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
                        {/* Left: Text Content */}
                        <motion.div
                            initial={{ opacity: 0, y: 30 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.8, ease: "easeOut" }}
                            className="flex flex-col justify-center space-y-8"
                        >
                            <div className="space-y-6">
                                <motion.div
                                    initial={{ opacity: 0, y: 20 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    transition={{ delay: 0.2, duration: 0.6 }}
                                    className="inline-flex items-center gap-2 bg-primary/10 rounded-full px-5 py-2"
                                >
                                    <span className="w-2 h-2 rounded-full bg-primary animate-pulse" />
                                    <span className="text-sm font-medium text-foreground/70 tracking-wide">
                                        Referência em Geriatria em SP
                                    </span>
                                </motion.div>

                                <h1 className="text-5xl font-serif tracking-tight sm:text-6xl md:text-7xl text-foreground leading-[1.1]">
                                    Envelhecer com{" "}
                                    <span className="italic text-primary">Vitalidade,</span>
                                    <br />
                                    Saúde e Dignidade
                                </h1>

                                <motion.p
                                    initial={{ opacity: 0 }}
                                    animate={{ opacity: 1 }}
                                    transition={{ delay: 0.6, duration: 0.8 }}
                                    className="max-w-[540px] text-lg md:text-xl text-foreground/60 leading-relaxed font-light"
                                >
                                    Clínica geriátrica de excelência em São Paulo. Cuidado especializado
                                    para uma longevidade plena e saudável, com a atenção que sua
                                    família merece.
                                </motion.p>
                            </div>

                            <motion.div
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: 0.8, duration: 0.6 }}
                                className="flex flex-col gap-4 sm:flex-row pt-2"
                            >
                                <Button
                                    size="lg"
                                    href="/contato"
                                    className="rounded-full px-10 h-14 text-base bg-mayo-blue text-white hover:bg-mayo-blue/90 shadow-lg shadow-mayo-blue/20"
                                >
                                    Agende sua Avaliação Geriátrica
                                    <ArrowRight className="ml-2 h-5 w-5" />
                                </Button>
                                <Button
                                    size="lg"
                                    variant="outline"
                                    href="/equipe"
                                    className="rounded-full px-10 h-14 text-base border-2 border-foreground/20 text-foreground hover:border-primary hover:bg-primary/5"
                                >
                                    Conheça Nossa Equipe
                                </Button>
                            </motion.div>

                            {/* Trust Badges */}
                            <motion.div
                                initial={{ opacity: 0 }}
                                animate={{ opacity: 1 }}
                                transition={{ delay: 1.2, duration: 0.8 }}
                                className="flex flex-wrap gap-6 pt-4"
                            >
                                {[
                                    { num: "15+", label: "Anos de Experiência" },
                                    { num: "5mil+", label: "Pacientes Atendidos" },
                                    { num: "4.9", label: "Avaliação Google" },
                                ].map((stat, i) => (
                                    <div key={i} className="flex items-center gap-3">
                                        <span className="text-2xl font-serif text-primary">{stat.num}</span>
                                        <span className="text-sm text-foreground/50 leading-tight">{stat.label}</span>
                                    </div>
                                ))}
                            </motion.div>
                        </motion.div>

                        {/* Right: Circular Image Composition */}
                        <motion.div
                            initial={{ opacity: 0, scale: 0.9 }}
                            animate={{ opacity: 1, scale: 1 }}
                            transition={{ duration: 1, ease: "easeOut", delay: 0.3 }}
                            className="relative mx-auto w-full max-w-[520px] lg:max-w-none flex items-center justify-center"
                        >
                            {/* Main circular image */}
                            <div className="relative w-[340px] h-[340px] md:w-[440px] md:h-[440px] lg:w-[480px] lg:h-[480px] rounded-full overflow-hidden border-8 border-white shadow-2xl shadow-black/10">
                                <img
                                    src="https://images.unsplash.com/photo-1576765608535-5f04d1e3f289?q=80&w=2568&auto=format&fit=crop"
                                    alt="Médica geriatra em consulta personalizada - clínica geriátrica São Paulo"
                                    className="object-cover w-full h-full hover:scale-105 transition-transform duration-700"
                                />
                            </div>

                            {/* Floating badge - top right */}
                            <motion.div
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: 1, duration: 0.6 }}
                                className="absolute top-8 -right-2 md:right-4 bg-white rounded-2xl shadow-xl shadow-black/10 px-5 py-4"
                            >
                                <p className="text-xs font-medium text-foreground/50 uppercase tracking-wider">Localização</p>
                                <p className="text-sm font-sans font-bold text-foreground">Vila Olímpia, SP</p>
                            </motion.div>

                            {/* Floating badge - bottom left */}
                            <motion.div
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: 1.2, duration: 0.6 }}
                                className="absolute bottom-8 -left-2 md:left-4 bg-primary rounded-2xl shadow-xl shadow-primary/30 px-5 py-4"
                            >
                                <p className="text-xs font-medium text-white/70 uppercase tracking-wider">Geriatria</p>
                                <p className="text-sm font-sans font-bold text-white">Cuidado Integral</p>
                            </motion.div>
                        </motion.div>
                    </div>
                </div>
            </motion.div>

            {/* Wave Divider at bottom */}
            <div className="absolute bottom-0 left-0 w-full z-[3]">
                <WaveDivider variant="primary" />
            </div>
        </section>
    );
}
