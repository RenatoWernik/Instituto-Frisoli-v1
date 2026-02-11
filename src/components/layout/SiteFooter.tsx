"use client";

import { ScrollReveal } from "@/components/motion/ScrollReveal";
import { TextReveal } from "@/components/motion/TextReveal";

export function SiteFooter() {
    return (
        <footer className="bg-brand-black text-white/40">
            {/* Editorial closing */}
            <div className="max-w-[1400px] mx-auto px-8 md:px-16 pt-40 pb-20 relative">

                {/* 1. Watermark Symbol */}
                <div className="absolute top-10 right-8 md:right-16 w-32 md:w-48 opacity-[0.03] select-none pointer-events-none">
                    <img src="/images/logotipo1.png" alt="" className="w-full h-auto" />
                </div>

                <ScrollReveal>
                    <div className="max-w-3xl">
                        {/* 2. Full Brand Logo (Natural Color) */}
                        <div className="mb-12 w-48 md:w-56 opacity-90">
                            <img src="/images/logotipo2.png" alt="Instituto Frisoli" className="w-full h-auto" />
                        </div>

                        <p className="whisper text-brand-amber/60 mb-8">Uma nota pessoal</p>
                        <blockquote className="font-serif text-2xl md:text-3xl lg:text-4xl text-white/80 leading-[1.2] tracking-tight">
                            <TextReveal as="span" delay={0.2}>
                                Cuidar é um ato de coragem e gentileza. É olhar nos olhos, ouvir com atenção, e estar presente.
                            </TextReveal>
                        </blockquote>
                        <p className="mt-10 text-sm text-white/30">
                            — Dr. Alberto Frisoli
                        </p>
                    </div>
                </ScrollReveal>
            </div>

            {/* Whisper contact */}
            <div className="max-w-[1400px] mx-auto px-8 md:px-16 pb-12">
                <div className="h-px bg-white/8 mb-12" />
                <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-6">
                    <div className="flex items-center gap-12">
                        <a href="tel:+551130451234" className="whisper hover:text-white/60 transition-colors">
                            (11) 3045-1234
                        </a>
                        <a href="mailto:contato@institutofrisoli.com.br" className="whisper hover:text-white/60 transition-colors">
                            contato@institutofrisoli.com.br
                        </a>
                    </div>
                    <p className="whisper text-white/20">
                        © {new Date().getFullYear()} Instituto Frisoli
                    </p>
                </div>
            </div>
        </footer>
    );
}
