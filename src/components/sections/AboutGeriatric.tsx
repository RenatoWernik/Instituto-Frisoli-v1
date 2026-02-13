"use client";

import { CheckCircle2 } from "lucide-react";
import { Button } from "@/components/ui/Button";
import { motion } from "framer-motion";

const features = [
    "Atendimento domiciliar especializado",
    "Foco em desprescrição e uso racional de medicamentos",
    "Equipe multidisciplinar integrada",
    "Acompanhamento hospitalar personalizado",
];

export function AboutGeriatric() {
    return (
        <section className="py-24 md:py-32 bg-primary overflow-hidden relative">
            {/* Background organic blob */}
            <div className="absolute inset-0 pointer-events-none overflow-hidden">
                <div className="absolute top-[10%] left-[50%] -translate-x-1/2 w-[800px] h-[800px] rounded-full bg-white/[0.05] blur-3xl" />
                <div className="absolute bottom-[5%] -right-[10%] w-[400px] h-[400px] rounded-full bg-black/[0.08] blur-3xl" />
            </div>

            <div className="container px-4 md:px-6 relative z-10">
                <div className="grid lg:grid-cols-2 gap-16 lg:gap-24 items-center">
                    {/* Left: Circular Image Composition */}
                    <motion.div
                        initial={{ opacity: 0, x: -40 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8 }}
                        className="relative order-2 lg:order-1 flex items-center justify-center"
                    >
                        {/* Decorative blob behind image */}
                        <div className="absolute -top-8 -left-8 w-[110%] h-[110%] rounded-full bg-white/[0.06] blur-xl" />

                        {/* Main circular image */}
                        <div className="relative w-[320px] h-[320px] md:w-[420px] md:h-[420px] rounded-full overflow-hidden border-8 border-white/20 shadow-2xl shadow-black/20">
                            <img
                                src="https://images.unsplash.com/photo-1551076805-e1869033e561?q=80&w=2532&auto=format&fit=crop"
                                alt="Médico geriatra atendendo paciente idoso - clínica geriatria São Paulo"
                                className="object-cover w-full h-full hover:scale-105 transition-transform duration-700"
                            />
                        </div>

                        {/* Experience Badge - Circular */}
                        <motion.div
                            initial={{ opacity: 0, scale: 0.8 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.5, duration: 0.5 }}
                            className="absolute -bottom-4 -right-4 md:bottom-4 md:right-0 w-28 h-28 rounded-full bg-offwhite text-primary flex flex-col items-center justify-center shadow-xl shadow-black/20"
                        >
                            <span className="text-3xl font-serif leading-none">15+</span>
                            <span className="text-[10px] font-medium uppercase tracking-wider mt-1">Anos</span>
                        </motion.div>

                        {/* Small decorative circle */}
                        <div className="absolute -top-4 right-12 w-16 h-16 rounded-full border-2 border-white/15" />
                    </motion.div>

                    {/* Right: Text Content */}
                    <motion.div
                        initial={{ opacity: 0, x: 40 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8 }}
                        className="order-1 lg:order-2 space-y-8"
                    >
                        <div className="space-y-6">
                            <div className="inline-flex items-center gap-2 bg-white/10 rounded-full px-5 py-2 backdrop-blur-sm">
                                <span className="text-sm font-medium text-white tracking-wide">
                                    Sobre o Instituto
                                </span>
                            </div>

                            <h2 className="text-4xl font-serif tracking-tight sm:text-5xl text-white leading-tight">
                                Experiência, Compaixão{" "}
                                <span className="italic">e Ciência</span>
                            </h2>

                            <p className="text-lg text-white/75 leading-relaxed">
                                Acreditamos que envelhecer é um privilégio, e nosso compromisso é tornar
                                cada ano mais saudável, mais ativo e mais significativo. No Instituto Frisoli,
                                unimos a precisão diagnóstica ao acolhimento humano.
                            </p>

                            <p className="text-base text-white/60 leading-relaxed">
                                Dr. Roberto Frisoli e sua equipe oferecem um porto seguro para famílias.
                                Investigamos as causas profundas, desenhamos planos personalizados e
                                garantimos autonomia e respeito em cada etapa.
                            </p>
                        </div>

                        <ul className="space-y-4 pt-2">
                            {features.map((item, i) => (
                                <motion.li
                                    key={i}
                                    initial={{ opacity: 0, x: 20 }}
                                    whileInView={{ opacity: 1, x: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ delay: 0.2 + i * 0.1 }}
                                    className="flex items-center gap-4"
                                >
                                    <div className="w-8 h-8 rounded-full bg-white/10 flex items-center justify-center flex-shrink-0">
                                        <CheckCircle2 className="h-4 w-4 text-white" />
                                    </div>
                                    <span className="text-white/80 font-medium">{item}</span>
                                </motion.li>
                            ))}
                        </ul>

                        <div className="pt-4">
                            <Button
                                size="lg"
                                href="/equipe"
                                className="rounded-full px-10 h-14 bg-offwhite text-primary hover:bg-white shadow-lg shadow-black/15"
                            >
                                Conheça a Equipe
                            </Button>
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
}
