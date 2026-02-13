"use client";

import { useRef } from "react";
import { ArrowRight, Calendar, Phone } from "lucide-react";
import Link from "next/link";
import { Button } from "@/components/ui/Button";
import { motion, useScroll, useTransform } from "framer-motion";

export function HeroGeriatric() {
    const heroRef = useRef<HTMLElement>(null);

    const { scrollYProgress } = useScroll({
        target: heroRef,
        offset: ["start start", "end start"],
    });

    const contentY = useTransform(scrollYProgress, [0, 0.5], [0, 50]);

    return (
        <section
            ref={heroRef}
            className="relative w-full min-h-screen flex items-end md:items-end overflow-hidden bg-background"
        >
            {/* Full Screen Background Image */}
            <div className="absolute inset-0 z-0">
                <img
                    src="/images/hero-tree.jpg"
                    alt="Árvore da vida e longevidade"
                    className="w-full h-full object-cover object-center"
                />
                {/* Gradient Overlay for Text Readability */}
                <div className="absolute inset-0 bg-gradient-to-t from-white/70 via-white/20 to-transparent md:bg-gradient-to-t md:from-white/70 md:via-white/20 md:to-transparent z-10" />
            </div>

            <div className="container mx-auto px-4 md:px-6 relative z-20 pb-12 md:pb-12 md:pt-20">
                <div className="max-w-2xl">
                    <motion.div
                        style={{ y: contentY }}
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, ease: "easeOut" }}
                        className="flex flex-col space-y-8"
                    >
                        <div className="space-y-6">


                            <h1 className="text-4xl md:text-5xl lg:text-7xl font-serif font-medium text-foreground leading-[1.15]">
                                Acolhimento que <br />
                                <span className="text-primary italic">transforma vidas.</span>
                            </h1>


                        </div>

                        <div className="flex flex-col sm:flex-row gap-8 pt-4 items-center pl-1">
                            {/* Button 1: Bordered, With Arrow, Minimalist */}
                            <Link href="/contato" className="group relative flex items-center gap-3 border border-[#111] rounded-full px-8 py-3 transition-colors duration-300 hover:border-primary">
                                <div className="relative">
                                    <span className="text-xl font-semibold text-[#111]">
                                        Agendar Consulta
                                    </span>
                                    <span className="absolute inset-0 w-0 overflow-hidden text-primary whitespace-nowrap transition-[width] duration-300 ease-out group-hover:w-full text-xl font-semibold">
                                        Agendar Consulta
                                    </span>
                                </div>
                                <ArrowRight className="w-5 h-5 text-[#111] transition-all duration-300 group-hover:translate-x-1 group-hover:text-primary" />
                            </Link>

                            {/* Button 2: Text Only, No Border, No Arrow */}
                            <Link href="/instituto" className="group relative flex items-center gap-2">
                                <div className="relative">
                                    <span className="text-xl font-semibold text-[#111]">
                                        Conheça o Instituto
                                    </span>
                                    <span className="absolute inset-0 w-0 overflow-hidden text-primary whitespace-nowrap transition-[width] duration-300 ease-out group-hover:w-full text-xl font-semibold">
                                        Conheça o Instituto
                                    </span>
                                    <span className="absolute -bottom-1 left-0 h-[2px] w-0 bg-primary transition-all duration-300 ease-out group-hover:w-full" />
                                </div>
                            </Link>
                        </div>


                    </motion.div>
                </div>
            </div>
        </section>
    );
}
