"use client";

import { Star, Quote } from "lucide-react";
import { motion } from "framer-motion";

const testimonials = [
    {
        content: "Encontrei no Instituto Frisoli não apenas médicos, mas verdadeiros parceiros no cuidado com minha mãe. A atenção personalizada fez toda diferença na qualidade de vida dela.",
        author: "Maria Helena Souza",
        role: "Filha de paciente",
        initials: "MH",
        rating: 5,
    },
    {
        content: "Como geriatra, avalio a excelência técnica. Como filho, valorizo a humanidade no atendimento. O Instituto Frisoli entrega ambos de forma excepcional.",
        author: "Carlos Eduardo Mendes",
        role: "Filho de paciente",
        initials: "CE",
        rating: 5,
    },
    {
        content: "Aos 78 anos, me sinto mais ativa e saudável do que há 10 anos. O acompanhamento preventivo e a gestão integrada da minha saúde foram transformadores.",
        author: "Dona Antônia Ferreira",
        role: "Paciente há 3 anos",
        initials: "AF",
        rating: 5,
    },
];

export function TestimonialsGeriatric() {
    return (
        <section className="relative overflow-hidden">
            {/* Thin decorative separator from previous terra cotta section */}
            <div className="h-px bg-white/10" />

            <div className="bg-primary py-24 md:py-32 relative">
                {/* Organic background shapes */}
                <div className="absolute inset-0 pointer-events-none overflow-hidden">
                    <div className="absolute top-[5%] right-[5%] w-[400px] h-[400px] rounded-full bg-white/[0.05] blur-3xl" />
                    <div className="absolute bottom-[5%] left-[5%] w-[300px] h-[300px] rounded-full bg-black/[0.06] blur-3xl" />
                    {/* Decorative circles */}
                    <div className="absolute top-[15%] left-[8%] w-20 h-20 rounded-full border-2 border-white/10" />
                    <div className="absolute bottom-[20%] right-[12%] w-14 h-14 rounded-full border-2 border-white/10" />
                </div>

                <div className="container px-4 md:px-6 relative z-10">
                    <div className="text-center mb-16 space-y-6">
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            className="inline-flex items-center gap-2 bg-white/10 rounded-full px-5 py-2 backdrop-blur-sm"
                        >
                            <span className="text-sm font-medium text-white tracking-wide">
                                Depoimentos
                            </span>
                        </motion.div>

                        <motion.h2
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.1 }}
                            className="text-4xl font-serif sm:text-5xl md:text-6xl text-white"
                        >
                            Histórias de{" "}
                            <span className="italic">confiança</span>
                        </motion.h2>

                        <motion.p
                            initial={{ opacity: 0 }}
                            whileInView={{ opacity: 1 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.2 }}
                            className="max-w-[500px] mx-auto text-white/65 text-lg leading-relaxed font-light"
                        >
                            O que nossos pacientes e familiares dizem sobre o cuidado
                            que recebem no Instituto Frisoli.
                        </motion.p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        {testimonials.map((testimonial, index) => (
                            <motion.div
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: index * 0.15, duration: 0.6 }}
                                key={index}
                                className="bg-offwhite rounded-3xl p-8 text-black relative group hover:-translate-y-2 transition-all duration-500 shadow-xl shadow-black/10"
                            >
                                {/* Quote icon */}
                                <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center mb-6">
                                    <Quote className="h-5 w-5 text-primary" />
                                </div>

                                {/* Stars */}
                                <div className="flex gap-1 mb-6">
                                    {[...Array(testimonial.rating)].map((_, i) => (
                                        <Star key={i} className="h-4 w-4 fill-primary text-primary" />
                                    ))}
                                </div>

                                {/* Content */}
                                <p className="text-black/70 leading-relaxed mb-8 text-[15px]">
                                    &ldquo;{testimonial.content}&rdquo;
                                </p>

                                {/* Author */}
                                <div className="flex items-center gap-4 pt-6 border-t border-black/[0.06]">
                                    <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center">
                                        <span className="text-sm font-sans font-bold text-primary">{testimonial.initials}</span>
                                    </div>
                                    <div>
                                        <p className="font-serif text-black">{testimonial.author}</p>
                                        <p className="text-sm text-black/50">{testimonial.role}</p>
                                    </div>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}
