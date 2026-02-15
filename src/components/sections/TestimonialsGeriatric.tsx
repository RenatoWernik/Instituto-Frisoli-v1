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
        image: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?q=80&w=100&auto=format&fit=crop"
    },
    {
        content: "Como geriatra, avalio a excelência técnica. Como filho, valorizo a humanidade no atendimento. O Instituto Frisoli entrega ambos de forma excepcional.",
        author: "Carlos Eduardo Mendes",
        role: "Filho de paciente",
        initials: "CE",
        rating: 5,
        image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=100&auto=format&fit=crop"
    },
    {
        content: "Aos 78 anos, me sinto mais ativa e saudável do que há 10 anos. O acompanhamento preventivo e a gestão integrada da minha saúde foram transformadores.",
        author: "Dona Antônia Ferreira",
        role: "Paciente há 3 anos",
        initials: "AF",
        rating: 5,
        image: "/images/dona.jpg"
    },
];

const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
        opacity: 1,
        transition: { staggerChildren: 0.15 },
    },
};

export function TestimonialsGeriatric() {
    return (
        <section className="py-24 md:py-32 bg-background relative overflow-hidden">
            {/* Decorative Background Pattern */}
            <div className="absolute top-0 right-0 w-1/3 h-full bg-[#f8f9fa] -z-10 rounded-l-[100px] opacity-50" />

            <div className="container px-4 md:px-6 relative z-10">
                <div className="text-center mb-16 space-y-6">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="inline-block"
                    >
                        <span className="text-sm font-bold text-primary tracking-widest uppercase mb-4 block">
                            Depoimentos
                        </span>
                        <h2 className="text-4xl font-serif sm:text-5xl text-foreground">
                            Histórias de <span className="text-primary italic">Confiança</span>
                        </h2>
                    </motion.div>

                    <motion.p
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.2 }}
                        className="max-w-2xl mx-auto text-muted-foreground text-lg leading-relaxed"
                    >
                        O que nossos pacientes e familiares dizem sobre o cuidado
                        que recebem no Instituto Frisoli.
                    </motion.p>
                </div>

                <motion.div
                    variants={containerVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, margin: "-50px" }}
                    className="grid grid-cols-1 md:grid-cols-3 gap-8"
                >
                    {testimonials.map((testimonial, index) => (
                        <motion.div
                            variants={{
                                hidden: { opacity: 0, y: 20 },
                                visible: { opacity: 1, y: 0 }
                            }}
                            key={index}
                            className="bg-surface p-8 lg:p-10 rounded-2xl relative group hover:shadow-xl hover:shadow-black/5 transition-all duration-500 border border-border/50"
                        >
                            {/* Quote icon */}
                            <div className="mb-6">
                                <Quote className="h-8 w-8 text-primary/20 group-hover:text-primary transition-colors duration-300" />
                            </div>

                            {/* Stars */}
                            <div className="flex gap-1 mb-6">
                                {[...Array(testimonial.rating)].map((_, i) => (
                                    <Star key={i} className="h-4 w-4 fill-primary text-primary" />
                                ))}
                            </div>

                            {/* Content */}
                            <p className="text-foreground/80 leading-relaxed mb-8 text-[15px] italic">
                                "{testimonial.content}"
                            </p>

                            {/* Author */}
                            <div className="flex items-center gap-4 pt-6 border-t border-border/50">
                                <div className="w-12 h-12 rounded-full bg-white border border-border flex items-center justify-center text-primary font-bold shadow-sm overflow-hidden">
                                    <img src={testimonial.image} alt={testimonial.author} className="w-full h-full object-cover" />
                                </div>
                                <div>
                                    <p className="font-serif text-foreground font-medium">{testimonial.author}</p>
                                    <p className="text-xs text-muted-foreground uppercase tracking-wider mt-0.5">{testimonial.role}</p>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </motion.div>
            </div>
        </section>
    );
}
