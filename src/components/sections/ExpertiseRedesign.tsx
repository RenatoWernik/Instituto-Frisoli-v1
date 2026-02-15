"use client";

import { motion } from "framer-motion";
import {
    ClipboardCheck,
    HeartPulse,
    Brain,
    Apple,
    HandHeart,
    Users,
    ArrowRight
} from "lucide-react";
import { cn } from "@/lib/utils";
import Image from "next/image";
import { Button } from "@/components/ui/Button";

const services = [
    {
        id: "01",
        icon: ClipboardCheck,
        title: "Avaliação Global",
        description: "Análise multidimensional da saúde do idoso: memória, funcionalidade, humor e nutrição. Um olhar completo para identificar vulnerabilidades e potencializar a vitalidade.",
        image: "/images/1.jpeg"
    },
    {
        id: "02",
        icon: HeartPulse,
        title: "Doenças Crônicas",
        description: "Controle especializado de diabetes, hipertensão e outras condições. Monitoramento constante para garantir estabilidade clínica e prevenir complicações.",
        image: "/images/2.jpeg"
    },
    {
        id: "03",
        icon: Brain,
        title: "Saúde da Memória",
        description: "Prevenção e tratamento de Alzheimer e demências. Estratégias focadas na preservação cognitiva e no suporte integral ao paciente e familiares.",
        image: "/images/3.jpeg"
    },
    {
        id: "04",
        icon: Apple,
        title: "Nutrição Sénior",
        description: "Planos alimentares que respeitam o metabolismo e as necessidades específicas do envelhecimento, combatendo a sarcopenia e fortalecendo a imunidade.",
        image: "/images/4.jpeg"
    },
    {
        id: "05",
        icon: HandHeart,
        title: "Cuidados Paliativos",
        description: "Conforto, dignidade e alívio de sintomas em fases avançadas. Um cuidado humanizado que prioriza a qualidade de vida e o acolhimento.",
        image: "/images/6.jpeg"
    },
    {
        id: "06",
        icon: Users,
        title: "Apoio à Família",
        description: "Treinamento e suporte emocional para cuidadores e familiares. Entendemos que cuidar de quem cuida é fundamental para o sucesso do tratamento.",
        image: "/images/hero-tree.jpg"
    },
];

export function ExpertiseRedesign() {
    return (
        <section className="py-24 md:py-32 bg-background overflow-hidden">
            <div className="container mx-auto px-4 md:px-6">

                {/* Header */}
                <div className="mb-24 text-center max-w-3xl mx-auto">
                    <motion.span
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="text-sm font-bold text-primary tracking-widest uppercase mb-4 block"
                    >
                        Nossa Expertise
                    </motion.span>
                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.1 }}
                        className="text-4xl md:text-5xl lg:text-6xl font-serif font-medium text-mayo-blue mb-6"
                    >
                        Cuidado Geriátrico <span className="italic underline decoration-primary/40 underline-offset-8">Integral</span>
                    </motion.h2>
                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.2 }}
                        className="text-lg text-muted-foreground leading-relaxed"
                    >
                        Combinamos excelência técnica com acolhimento humano para promover saúde e autonomia em todas as fases do envelhecimento.
                    </motion.p>
                </div>

                {/* Zig-Zag List */}
                <div className="space-y-24 md:space-y-32">
                    {services.map((service, index) => {
                        const isEven = index % 2 === 0;
                        return (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, y: 40 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true, margin: "-100px" }}
                                transition={{ duration: 0.7, ease: "easeOut" }}
                                className={cn(
                                    "flex flex-col md:flex-row items-center gap-12 md:gap-20 lg:gap-32",
                                    !isEven && "md:flex-row-reverse"
                                )}
                            >
                                {/* Text Content */}
                                <div className="flex-1 space-y-8">
                                    <div className="flex items-center gap-4 text-primary mb-2">
                                        <service.icon className="w-8 h-8" strokeWidth={1.5} />
                                        <span className="text-sm font-bold tracking-widest uppercase opacity-70">
                                            {service.id}
                                        </span>
                                    </div>

                                    <h3 className="text-3xl md:text-4xl lg:text-5xl font-serif text-mayo-blue leading-tight">
                                        {service.title}
                                    </h3>

                                    <p className="text-lg text-muted-foreground leading-relaxed">
                                        {service.description}
                                    </p>

                                    <Button variant="outline" className="group rounded-full border-primary/30 text-primary hover:bg-primary hover:text-white transition-all duration-300">
                                        Saiba mais
                                        <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
                                    </Button>
                                </div>

                                {/* Image Content */}
                                <div className="flex-1 w-full">
                                    <div className="relative aspect-[4/3] md:aspect-square lg:aspect-[5/4] overflow-hidden rounded-sm bg-surface-secondary">
                                        <Image
                                            src={service.image}
                                            alt={service.title}
                                            fill
                                            className="object-cover transition-transform duration-700 hover:scale-105"
                                        />
                                        {/* Subtle overlay */}
                                        <div className="absolute inset-0 bg-black/5" />
                                    </div>
                                </div>
                            </motion.div>
                        );
                    })}
                </div>

            </div>
        </section>
    );
}
