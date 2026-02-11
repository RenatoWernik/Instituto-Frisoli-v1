import type { Metadata } from "next";
import { CinematicHero } from "@/components/sections/CinematicHero";
import { PageTransition } from "@/components/motion/PageTransition";
import { ServiceGrid } from "@/components/ui/ServiceGrid";
import { ScrollReveal } from "@/components/motion/ScrollReveal";
import { SPECIALTIES } from "@/content/specialties";

export const metadata: Metadata = {
    title: "Especialidades",
    description: "Geriatria, Cardiologia Geriátrica, Clínica Médica e Check-up Preventivo — conheça nossas especialidades.",
};

export default function EspecialidadesPage() {
    return (
        <PageTransition>
            <CinematicHero
                variant="page"
                imageSrc="/images/1.jpeg"
                imageAlt="Especialidades do Instituto Frisoli"
                headline="Especialidades"
                subheadline="Cada especialidade é exercida com profundidade, atenção e tempo."
                label="Áreas de Atuação"
            />

            {/* Specialties as Service Grid */}
            <section className="px-8 md:px-16 py-32 bg-white">
                <div className="max-w-[1400px] mx-auto">
                    <ScrollReveal>
                        <div className="max-w-2xl mb-16">
                            <h2 className="font-serif text-3xl md:text-4xl text-brand-charcoal mb-6">
                                Medicina de precisão e cuidado integral
                            </h2>
                            <p className="text-brand-gray text-lg leading-relaxed">
                                Nossas áreas de atuação não são silos isolados. Elas se conectam para oferecer uma visão completa da sua saúde.
                            </p>
                        </div>
                    </ScrollReveal>

                    <ServiceGrid
                        items={SPECIALTIES.map(s => ({
                            title: s.title,
                            description: s.description,
                        }))}
                    />
                </div>
            </section>

            {/* Closing thought */}
            <section className="bg-brand-cream px-8 md:px-16 py-32">
                <div className="max-w-[1400px] mx-auto">
                    <ScrollReveal className="max-w-xl lg:ml-[15%]">
                        <p className="font-serif text-2xl md:text-3xl italic text-brand-charcoal/70 leading-[1.4]">
                            A verdadeira especialidade é dedicar tempo a quem precisa.
                        </p>
                        <div className="editorial-line mt-12" />
                    </ScrollReveal>
                </div>
            </section>
        </PageTransition>
    );
}
