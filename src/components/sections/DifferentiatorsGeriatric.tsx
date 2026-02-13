"use client";

import { Users, Fingerprint, HeartHandshake, MapPin } from "lucide-react";
import { motion } from "framer-motion";

const differentiators = [
    {
        icon: Users,
        title: "Equipe Multidisciplinar Especializada",
        description: "Geriatras, enfermeiros, fisioterapeutas e nutricionistas trabalhando de forma integrada pelo seu bem-estar.",
    },
    {
        icon: Fingerprint,
        title: "Abordagem Personalizada",
        description: "Cada paciente é único, cada plano é individualizado. Respeitamos sua história e suas necessidades específicas.",
    },
    {
        icon: HeartHandshake,
        title: "Tecnologia & Humanização",
        description: "Medicina baseada em evidências científicas com o calor humano que faz toda diferença no cuidado.",
    },
    {
        icon: MapPin,
        title: "Localização Privilegiada",
        description: "Na Vila Olímpia, São Paulo. Fácil acesso com estacionamento, acessibilidade e próximo ao transporte público.",
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
    hidden: { opacity: 0, y: 30 },
    visible: {
        opacity: 1,
        y: 0,
        transition: { duration: 0.6, ease: "easeOut" as const },
    },
};

export function DifferentiatorsGeriatric() {
    return (
        <section className="relative overflow-hidden">
            <div className="bg-primary py-24 md:py-32 relative">
                {/* Organic blob shapes */}
                <div className="absolute inset-0 pointer-events-none overflow-hidden">
                    <div className="absolute top-[20%] -right-[15%] w-[500px] h-[500px] rounded-full bg-white/[0.05] blur-3xl" />
                    <div className="absolute bottom-[10%] -left-[10%] w-[400px] h-[400px] rounded-full bg-black/[0.06] blur-3xl" />
                    {/* Decorative circles */}
                    <div className="absolute top-[15%] left-[10%] w-24 h-24 rounded-full border-2 border-white/10" />
                    <div className="absolute bottom-[20%] right-[15%] w-16 h-16 rounded-full border-2 border-white/10" />
                </div>

                <div className="container px-4 md:px-6 relative z-10">
                    <div className="flex flex-col items-center text-center space-y-6 mb-16">
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            className="inline-flex items-center gap-2 bg-white/10 rounded-full px-5 py-2 backdrop-blur-sm"
                        >
                            <span className="text-sm font-medium text-white tracking-wide">
                                Por Que Nos Escolher
                            </span>
                        </motion.div>

                        <motion.h2
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.1 }}
                            className="text-4xl font-serif tracking-tight sm:text-5xl text-white"
                        >
                            O que nos torna{" "}
                            <span className="italic">diferentes</span>
                        </motion.h2>

                        <motion.p
                            initial={{ opacity: 0 }}
                            whileInView={{ opacity: 1 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.2 }}
                            className="max-w-[560px] text-white/65 text-lg leading-relaxed font-light"
                        >
                            Combinamos excelência médica com acolhimento genuíno para oferecer
                            a melhor experiência em cuidado geriátrico.
                        </motion.p>
                    </div>

                    <motion.div
                        variants={containerVariants}
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true, margin: "-50px" }}
                        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8"
                    >
                        {differentiators.map((item, index) => (
                            <motion.div
                                variants={itemVariants}
                                key={index}
                                className="flex flex-col items-center text-center group"
                            >
                                {/* Circular icon with ring */}
                                <div className="relative mb-6">
                                    <div className="w-20 h-20 rounded-full bg-offwhite flex items-center justify-center shadow-lg shadow-black/10 group-hover:shadow-xl group-hover:shadow-black/15 group-hover:scale-105 transition-all duration-500">
                                        <item.icon className="h-8 w-8 text-primary" />
                                    </div>
                                    <div className="absolute inset-0 w-20 h-20 rounded-full border-2 border-white/15 animate-[ping_3s_ease-in-out_infinite] opacity-20" />
                                </div>

                                <h3 className="text-xl font-serif text-white mb-3">
                                    {item.title}
                                </h3>
                                <p className="text-white/60 leading-relaxed text-[15px]">
                                    {item.description}
                                </p>
                            </motion.div>
                        ))}
                    </motion.div>
                </div>
            </div>
        </section>
    );
}
