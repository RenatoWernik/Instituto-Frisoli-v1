"use client";

import { Users, Fingerprint, HeartHandshake, MapPin } from "lucide-react";
import { motion } from "framer-motion";

const differentiators = [
    {
        icon: Users,
        title: "Equipe Integrada",
        description: "Mais que especialistas: um time coeso que discute cada caso para oferecer soluções completas.",
    },
    {
        icon: Fingerprint,
        title: "Plano Único",
        description: "Não existem protocolos rígidos. Existe você, sua história e o que faz sentido para sua vida.",
    },
    {
        icon: HeartHandshake,
        title: "Vínculo Real",
        description: "Medicina não se faz apenas com exames. Se faz com escuta, olho no olho e confiança mútua.",
    },
    {
        icon: MapPin,
        title: "Fácil Acesso",
        description: "Localizado na Vila Olímpia, com estrutura pensada para acessibilidade e conforto total.",
    },
];

const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
        opacity: 1,
        transition: { staggerChildren: 0.15 },
    },
};

const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
        opacity: 1,
        y: 0,
        transition: { duration: 0.5 },
    },
};

export function DifferentiatorsGeriatric() {
    return (
        <section className="py-24 bg-surface text-foreground relative overflow-hidden">
            {/* Decorative Elements */}
            <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-primary/20 to-transparent" />

            <div className="container px-4 md:px-6 relative z-10">
                <div className="flex flex-col items-center text-center space-y-8 mb-20">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="inline-block"
                    >
                        <span className="text-sm font-bold text-primary tracking-widest uppercase mb-4 block">
                            Nossa Essência
                        </span>
                        <h2 className="text-4xl md:text-5xl font-serif text-foreground">
                            Por que o <span className="text-primary italic">Frisoli?</span>
                        </h2>
                    </motion.div>

                    <motion.p
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.2 }}
                        className="max-w-2xl text-lg text-muted-foreground leading-relaxed"
                    >
                        Não somos apenas uma clínica. Somos um centro de longevidade focado
                        em devolver autonomia e alegria de viver.
                    </motion.p>
                </div>

                <motion.div
                    variants={containerVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, margin: "-50px" }}
                    className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12"
                >
                    {differentiators.map((item, index) => (
                        <motion.div
                            variants={itemVariants}
                            key={index}
                            className="flex flex-col items-center text-center group"
                        >
                            <div className="mb-6 relative">
                                <div className="w-20 h-20 rounded-2xl bg-white border border-border/50 flex items-center justify-center shadow-lg shadow-black/5 group-hover:shadow-primary/20 group-hover:-translate-y-2 transition-all duration-500">
                                    <item.icon className="h-8 w-8 text-primary opacity-80 group-hover:opacity-100 transition-opacity" strokeWidth={1.5} />
                                </div>
                                <div className="absolute -z-10 bg-primary/20 inset-0 rounded-2xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                            </div>

                            <h3 className="text-xl font-serif text-foreground mb-3 group-hover:text-primary transition-colors duration-300">
                                {item.title}
                            </h3>
                            <p className="text-muted-foreground leading-relaxed text-[15px]">
                                {item.description}
                            </p>
                        </motion.div>
                    ))}
                </motion.div>
            </div>
        </section>
    );
}
