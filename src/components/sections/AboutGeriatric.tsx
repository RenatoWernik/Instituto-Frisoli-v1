"use client";

import { Check } from "lucide-react";
import { Button } from "@/components/ui/Button";
import { motion } from "framer-motion";

const features = [
    "Atendimento domiciliar humanizado",
    "Foco em desprescrição segura e efetiva",
    "Equipe multidisciplinar integrada",
    "Acompanhamento personalizado 24h",
];

export function AboutGeriatric() {
    return (
        <section className="py-24 md:py-32 bg-background overflow-hidden relative">
            {/* Decorative Background Pattern */}
            <div className="absolute top-0 right-0 w-1/3 h-full bg-[#f8f9fa] -z-10 rounded-l-[100px]" />

            <div className="container px-4 md:px-6 relative z-10">
                <div className="grid lg:grid-cols-2 gap-16 lg:gap-24 items-center">
                    {/* Left: Image Composition */}
                    <motion.div
                        initial={{ opacity: 0, x: -40 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8 }}
                        className="relative order-2 lg:order-1"
                    >
                        <div className="relative rounded-2xl overflow-hidden shadow-2xl shadow-black/5 aspect-[4/5] lg:aspect-square">
                            <img
                                src="https://images.unsplash.com/photo-1551076805-e1869033e561?q=80&w=2532&auto=format&fit=crop"
                                alt="Médico geriatra atendendo paciente idoso com atenção e cuidado"
                                className="object-cover w-full h-full hover:scale-105 transition-transform duration-700"
                            />

                            {/* Experience Badge */}
                            <div className="absolute bottom-8 right-8 bg-white p-6 rounded-xl shadow-lg border border-border/50">
                                <p className="text-4xl font-serif text-primary font-bold">15+</p>
                                <p className="text-sm font-medium text-muted-foreground uppercase tracking-wider mt-1">
                                    Anos de<br />Experiência
                                </p>
                            </div>
                        </div>

                        {/* Decorative dots grid */}
                        <div className="absolute -z-10 -bottom-10 -left-10 w-40 h-40 opacity-20"
                            style={{ backgroundImage: "radial-gradient(#BE5103 2px, transparent 2px)", backgroundSize: "20px 20px" }}></div>
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
                            <div className="inline-flex items-center gap-2">
                                <span className="h-px w-8 bg-primary"></span>
                                <span className="text-sm font-bold text-primary tracking-widest uppercase">
                                    Sobre o Instituto
                                </span>
                            </div>

                            <h2 className="text-4xl font-serif tracking-tight sm:text-5xl text-foreground leading-[1.2]">
                                Experiência, Ciência e <br />
                                <span className="italic text-primary">Compaixão Humana.</span>
                            </h2>

                            <p className="text-lg text-muted-foreground leading-relaxed">
                                Acreditamos que envelhecer é um privilégio. No Instituto Frisoli,
                                nosso compromisso é tornar cada ano mais saudável e significativo,
                                unindo a precisão da medicina baseada em evidências ao acolhimento que sua família merece.
                            </p>

                            <p className="text-base text-muted-foreground/80 leading-relaxed border-l-4 border-primary/20 pl-6">
                                "Não tratamos apenas doenças. Cuidamos de histórias, memórias e pessoas
                                que merecem viver com dignidade e autonomia máxima."
                            </p>
                        </div>

                        <ul className="grid sm:grid-cols-2 gap-4 pt-4">
                            {features.map((item, i) => (
                                <motion.li
                                    key={i}
                                    initial={{ opacity: 0, y: 10 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ delay: 0.2 + i * 0.1 }}
                                    className="flex items-start gap-3"
                                >
                                    <div className="w-6 h-6 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0 mt-0.5">
                                        <Check className="h-3.5 w-3.5 text-primary" />
                                    </div>
                                    <span className="text-foreground/80 font-medium text-sm">{item}</span>
                                </motion.li>
                            ))}
                        </ul>

                        <div className="pt-6">
                            <Button
                                size="lg"
                                href="/instituto"
                                variant="outline"
                                className="rounded-full px-10 h-14 border-2 border-primary text-primary hover:bg-primary hover:text-white text-base font-semibold transition-all"
                            >
                                Conheça Nossa História
                            </Button>
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
}
