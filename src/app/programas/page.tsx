import type { Metadata } from "next";
import { CinematicHero } from "@/components/sections/CinematicHero";
import { PageTransition } from "@/components/motion/PageTransition";
import { ServiceGrid } from "@/components/ui/ServiceGrid";
import { ScrollReveal } from "@/components/motion/ScrollReveal";
import { PROGRAMS } from "@/content/specialties";
import Link from "next/link";

export const metadata: Metadata = {
    title: "Programas de Saúde",
    description: "Programas de acompanhamento contínuo para longevidade, saúde cardiovascular e cuidado pós-hospitalar.",
};

export default function ProgramasPage() {
    return (
        <PageTransition>
            <CinematicHero
                variant="page"
                imageSrc="/images/4.jpeg"
                imageAlt="Programas de Saúde"
                headline="Programas de Saúde"
                subheadline="Cuidado contínuo, não pontual."
                label="Programas"
            />

            {/* Programs as Grid */}
            <section className="bg-white px-8 md:px-16 py-24 border-b border-brand-charcoal/5">
                <div className="max-w-[1400px] mx-auto">
                    <ServiceGrid
                        items={PROGRAMS.map((prog, i) => ({
                            title: prog.title,
                            description: prog.description,
                            // Add checkmark or icon later if defined
                            href: "/contato" // Call to action for each program
                        }))}
                    />
                </div>
            </section>

            {/* Detailed Tracks Section */}
            <section className="py-32 px-8 md:px-16 bg-white">
                <div className="max-w-[1400px] mx-auto">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-24">
                        <ScrollReveal>
                            <h2 className="font-serif text-4xl text-brand-charcoal mb-8">Por que um Programa?</h2>
                            <p className="text-brand-gray text-lg leading-relaxed mb-6">
                                A medicina tradicional muitas vezes atua de forma reativa: trata-se a doença quando ela aparece. Nossos programas invertem essa lógica.
                            </p>
                            <p className="text-brand-gray text-lg leading-relaxed mb-12">
                                Através de um acompanhamento estruturado, monitoramos biomarcadores, ajustamos condutas preventivamente e garantimos que você esteja sempre na sua melhor versão física e mental.
                            </p>
                            <Link href="/contato" className="text-brand-amber uppercase tracking-widest text-sm font-medium border-b border-brand-amber pb-1 hover:text-brand-charcoal hover:border-brand-charcoal transition-colors">
                                Agende uma avaliação
                            </Link>
                        </ScrollReveal>

                        <div className="flex flex-col gap-12">
                            <ScrollReveal delay={0.2} className="border-l-2 border-brand-amber/30 pl-8">
                                <h3 className="font-serif text-2xl text-brand-charcoal mb-4">Check-up Executivo</h3>
                                <p className="text-brand-gray text-base leading-relaxed">
                                    Para quem tem pouco tempo e precisa de respostas rápidas. Um dia dedicado à sua saúde, com bateria completa de exames e parecer médico imediato.
                                </p>
                            </ScrollReveal>

                            <ScrollReveal delay={0.3} className="border-l-2 border-brand-amber/30 pl-8">
                                <h3 className="font-serif text-2xl text-brand-charcoal mb-4">Gestão de Crônicos</h3>
                                <p className="text-brand-gray text-base leading-relaxed">
                                    Monitoramento rigoroso para hipertensão, diabetes e outras condições. O objetivo é a estabilidade clínica e a redução drástica de complicações.
                                </p>
                            </ScrollReveal>

                            <ScrollReveal delay={0.4} className="border-l-2 border-brand-amber/30 pl-8">
                                <h3 className="font-serif text-2xl text-brand-charcoal mb-4">Neuro-Longevidade</h3>
                                <p className="text-brand-gray text-base leading-relaxed">
                                    Foco total na preservação cognitiva. Estimulação, rastreio de demências e estratégias neuroprotetoras para manter a mente afiada aos 80, 90 anos.
                                </p>
                            </ScrollReveal>
                        </div>
                    </div>
                </div>
            </section>

            {/* Closing */}
            <section className="bg-brand-cream px-8 md:px-16 py-32">
                <div className="max-w-[1400px] mx-auto">
                    <ScrollReveal className="max-w-xl mx-auto text-center">
                        <p className="font-serif text-2xl md:text-3xl italic text-brand-charcoal/70 leading-[1.4]">
                            Saúde não é um evento. É um processo que merece atenção continuada.
                        </p>
                        <div className="editorial-line mt-12 mx-auto" />
                    </ScrollReveal>
                </div>
            </section>
        </PageTransition>
    );
}
