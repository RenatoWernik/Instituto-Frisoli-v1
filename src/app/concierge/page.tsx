import type { Metadata } from "next";
import { CinematicHero } from "@/components/sections/CinematicHero";
import { PageTransition } from "@/components/motion/PageTransition";
import { ServiceGrid } from "@/components/ui/ServiceGrid";
import { ScrollReveal } from "@/components/motion/ScrollReveal";
import { CONCIERGE_SERVICES } from "@/content/specialties";
import { SITE_CONTENT } from "@/content/site";

export const metadata: Metadata = {
    title: "Concierge Médico",
    description: "Serviço de concierge médico — cuidado sob medida para famílias que buscam excelência contínua.",
};

export default function ConciergePage() {
    const { concierge } = SITE_CONTENT;

    return (
        <PageTransition>
            <CinematicHero
                variant="page"
                imageSrc="/images/4.jpeg"
                imageAlt="Concierge médico"
                headline={concierge.headline}
                label="Concierge"
            />

            {/* Intro statement - Expanded */}
            <section className="min-h-[50vh] flex items-center px-8 md:px-16 py-32 bg-white">
                <div className="max-w-[1400px] mx-auto w-full grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
                    <ScrollReveal>
                        <h2 className="font-serif text-3xl md:text-4xl text-brand-charcoal mb-8">
                            A arte de servir na saúde
                        </h2>
                        <p className="text-brand-gray text-lg leading-relaxed mb-6">
                            Sabemos que gerenciar a saúde familiar pode ser complexo. Nosso serviço de concierge remove a burocracia e a logística da equação.
                        </p>
                        <p className="text-brand-gray text-lg leading-relaxed">
                            Desde o agendamento de exames externos até o acompanhamento em internações, nossa equipe atua como guardiã da sua experiência.
                        </p>
                    </ScrollReveal>

                    <ScrollReveal className="lg:pl-16">
                        <p className="font-serif text-2xl text-brand-charcoal/80 italic leading-[1.5] tracking-tight">
                            {concierge.intro}
                        </p>
                        <div className="editorial-line mt-12" />
                    </ScrollReveal>
                </div>
            </section>

            {/* Services as ServiceGrid */}
            <section className="bg-brand-cream px-8 md:px-16 py-32">
                <div className="max-w-[1400px] mx-auto">
                    <ScrollReveal>
                        <p className="whisper text-brand-amber/70 mb-16">Exclusividade Frisoli</p>
                    </ScrollReveal>
                    <ServiceGrid
                        items={CONCIERGE_SERVICES.map(s => ({
                            title: s.title,
                            description: s.description,
                        }))}
                        className="bg-transparent" // Override white bg if needed, or let individual cards be white
                    />
                </div>
            </section>

            {/* Closing */}
            <section className="px-8 md:px-16 py-32">
                <div className="max-w-[1400px] mx-auto">
                    <ScrollReveal className="max-w-xl lg:ml-auto text-right">
                        <p className="font-serif text-2xl md:text-3xl italic text-brand-charcoal/70 leading-[1.4]">
                            O cuidado mais sofisticado é aquele que você nem percebe acontecendo.
                        </p>
                        <div className="editorial-line mt-12 ml-auto" />
                    </ScrollReveal>
                </div>
            </section>
        </PageTransition>
    );
}
