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
import { ServiceCard } from "@/components/ui/ServiceCard";
import { motion } from "framer-motion";

const services = [
    {
        iconName: "ClipboardCheck",
        title: "Avaliação Global",
        description: "Análise multidimensional da saúde do idoso: memória, funcionalidade, humor e nutrição.",
    },
    {
        iconName: "HeartPulse",
        title: "Doenças Crônicas",
        description: "Controle especializado de diabetes, hipertensão e outras condições para uma vida estável.",
    },
    {
        iconName: "Brain",
        title: "Saúde da Memória",
        description: "Prevenção e tratamento de Alzheimer e demências com foco na preservação cognitiva.",
    },
    {
        iconName: "PersonStanding",
        title: "Prevenção de Quedas",
        description: "Fortalecimento muscular e equilíbrio para garantir autonomia e segurança no dia a dia.",
    },
    {
        iconName: "Pill",
        title: "Desprescrição",
        description: "Revisão criteriosa de medicamentos para evitar interações perigosas e excessos desnecessários.",
    },
    {
        iconName: "Apple",
        title: "Nutrição Sénior",
        description: "Planos alimentares que respeitam o metabolismo e as necessidades específicas do envelhecimento.",
    },
    {
        iconName: "HandHeart",
        title: "Cuidados Paliativos",
        description: "Conforto, dignidade e alívio de sintomas em fases avançadas de doenças.",
    },
    {
        iconName: "Users",
        title: "Apoio à Família",
        description: "Treinamento e suporte emocional para cuidadores e familiares. Cuidamos de quem cuida.",
    },
];

const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
        opacity: 1,
        transition: { staggerChildren: 0.1 },
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

export function ServicesGeriatric() {
    return (
        <section className="py-24 bg-surface text-foreground relative overflow-hidden">
            {/* Decorative background element */}
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
                            Nossa Expertise
                        </span>
                        <h2 className="text-4xl md:text-5xl font-serif text-foreground">
                            Cuidado Geriátrico <span className="text-primary italic">Integral</span>
                        </h2>
                    </motion.div>

                    <motion.p
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.2 }}
                        className="max-w-2xl text-lg text-muted-foreground leading-relaxed"
                    >
                        Nossa abordagem vai além da doença. Focamos na funcionalidade,
                        na independência e na qualidade de vida do paciente idoso.
                    </motion.p>
                </div>

                <motion.div
                    variants={containerVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, margin: "-100px" }}
                    className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6"
                >
                    {services.map((service, index) => (
                        <motion.div key={index} variants={itemVariants} className="h-full">
                            <ServiceCard
                                iconName={service.iconName}
                                title={service.title}
                                description={service.description}
                                variant="light"
                                className="h-full bg-white border-none shadow-sm hover:shadow-xl hover:shadow-primary/5 transition-all duration-300"
                            />
                        </motion.div>
                    ))}
                </motion.div>

                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.4 }}
                    className="mt-20 text-center"
                >
                    <Button
                        size="lg"
                        href="/especialidades"
                        className="bg-primary text-white hover:bg-primary/90 rounded-full px-10 h-14 text-base shadow-lg shadow-primary/20"
                    >
                        Ver Todas as Especialidades
                    </Button>
                </motion.div>
            </div>
        </section>
    );
}
