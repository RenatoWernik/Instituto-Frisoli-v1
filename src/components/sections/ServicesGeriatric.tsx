"use client";

import {
    ClipboardCheck,
    HeartPulse,
    Brain,
    PersonStanding,
    Pill,
    Apple,
    HandHeart,
    Users,
} from "lucide-react";
import { Button } from "@/components/ui/Button";
import { motion } from "framer-motion";

const services = [
    {
        icon: ClipboardCheck,
        title: "Avaliação Geriátrica Completa",
        description: "Análise multidimensional da saúde do idoso que vai além dos exames tradicionais, avaliando memória, funcionalidade e riscos.",
    },
    {
        icon: HeartPulse,
        title: "Gestão de Doenças Crônicas",
        description: "Diabetes, hipertensão, artrite \u2014 controle especializado com acompanhamento contínuo e personalizado.",
    },
    {
        icon: Brain,
        title: "Saúde Cognitiva & Memória",
        description: "Prevenção e tratamento de declínio cognitivo, com diagnóstico precoce de Alzheimer e outras condições.",
    },
    {
        icon: PersonStanding,
        title: "Prevenção de Quedas & Mobilidade",
        description: "Estratégias para fortalecer equilíbrio, força muscular e preservar a independência no dia a dia.",
    },
    {
        icon: Pill,
        title: "Gestão de Medicamentos",
        description: "Revisão e otimização farmacológica para garantir eficácia, segurança e evitar interações medicamentosas.",
    },
    {
        icon: Apple,
        title: "Nutrição para Longevidade",
        description: "Planos alimentares personalizados focados na saúde do idoso, promovendo vitalidade e bem-estar.",
    },
    {
        icon: HandHeart,
        title: "Cuidados Paliativos Coordenados",
        description: "Conforto e dignidade em todas as fases da vida, com foco no alívio do sofrimento e qualidade de vida.",
    },
    {
        icon: Users,
        title: "Apoio Familiar & Cuidadores",
        description: "Orientação prática e emocional para quem cuida, porque a saúde do idoso envolve toda a família.",
    },
];

const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
        opacity: 1,
        transition: { staggerChildren: 0.08 },
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

export function ServicesGeriatric() {
    return (
        <section className="relative overflow-hidden">
            <div className="bg-primary py-24 relative">
                {/* Organic background blobs */}
                <div className="absolute inset-0 pointer-events-none overflow-hidden">
                    <div className="absolute top-[5%] -left-[10%] w-[500px] h-[500px] rounded-full bg-white/[0.05] blur-3xl" />
                    <div className="absolute bottom-[5%] -right-[10%] w-[600px] h-[600px] rounded-full bg-black/[0.06] blur-3xl" />
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
                                Nossos Serviços de Geriatria
                            </span>
                        </motion.div>

                        <motion.h2
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.1 }}
                            className="text-4xl font-serif tracking-tight sm:text-5xl md:text-6xl text-white"
                        >
                            Cuidado integral em{" "}
                            <span className="italic">cada etapa</span>
                        </motion.h2>

                        <motion.p
                            initial={{ opacity: 0 }}
                            whileInView={{ opacity: 1 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.2 }}
                            className="max-w-[600px] text-white/65 text-lg leading-relaxed font-light"
                        >
                            Oferecemos uma abordagem completa para a saúde do idoso.
                            Tratamento, prevenção e autonomia para cada paciente.
                        </motion.p>
                    </div>

                    <motion.div
                        variants={containerVariants}
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true, margin: "-50px" }}
                        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6"
                    >
                        {services.map((service, index) => (
                            <motion.div
                                variants={itemVariants}
                                key={index}
                                className="group relative bg-offwhite rounded-3xl p-8 hover:shadow-xl hover:shadow-black/10 hover:-translate-y-1 transition-all duration-500"
                            >
                                {/* Circular icon container */}
                                <div className="mb-6 w-14 h-14 rounded-full bg-primary/10 flex items-center justify-center group-hover:bg-primary group-hover:scale-110 transition-all duration-300">
                                    <service.icon className="h-6 w-6 text-primary group-hover:text-white transition-colors duration-300" />
                                </div>

                                <h3 className="mb-3 text-xl font-serif text-black">
                                    {service.title}
                                </h3>
                                <p className="text-black/60 leading-relaxed text-[15px]">
                                    {service.description}
                                </p>
                            </motion.div>
                        ))}
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.3 }}
                        className="mt-16 flex justify-center"
                    >
                        <Button
                            size="lg"
                            href="/especialidades"
                            className="rounded-full px-10 h-14 bg-offwhite text-primary hover:bg-white text-base font-medium transition-all shadow-lg shadow-black/10"
                        >
                            Ver Todos os Serviços
                        </Button>
                    </motion.div>
                </div>
            </div>
        </section>
    );
}
