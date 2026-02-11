import type { Metadata } from "next";
import { CinematicHero } from "@/components/sections/CinematicHero";
import { PageTransition } from "@/components/motion/PageTransition";
import { ServiceGrid } from "@/components/ui/ServiceGrid";
import { ScrollReveal } from "@/components/motion/ScrollReveal";
import { SITE_CONTENT } from "@/content/site";

export const metadata: Metadata = {
    title: "Atuação Hospitalar",
    description: "Cuidado do Instituto Frisoli também em ambiente hospitalar — continuidade e excelência.",
};

export default function HospitalarPage() {
    const { hospitalar } = SITE_CONTENT;

    return (
        <PageTransition>
            <CinematicHero
                variant="page"
                imageSrc="/images/1.jpeg"
                imageAlt="Atuação hospitalar"
                headline={hospitalar.headline}
                subheadline={hospitalar.subheadline}
                label="Hospitalar"
            />

            {/* Narrative */}
            <section className="px-8 md:px-16 py-32 bg-white">
                <div className="max-w-[1400px] mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
                    <ScrollReveal>
                        <h2 className="font-serif text-3xl text-brand-charcoal mb-8">Continuidade é Segurança</h2>
                        <div className="space-y-6 text-brand-gray text-lg leading-relaxed">
                            <p>{hospitalar.paragraphs[0]}</p>
                            <p>{hospitalar.paragraphs[1]}</p>
                        </div>
                    </ScrollReveal>

                    <ScrollReveal delay={0.2}>
                        <div className="relative aspect-[4/3] bg-brand-muted">
                            <img src="/images/4.jpeg" alt="Ambiente Hospitalar" className="object-cover w-full h-full" />
                        </div>
                    </ScrollReveal>
                </div>
            </section>

            {/* Differentials */}
            <section className="bg-brand-cream px-8 md:px-16 py-32">
                <div className="max-w-[1400px] mx-auto">
                    <ScrollReveal>
                        <h2 className="font-serif text-3xl text-brand-charcoal mb-16">Nosso Protocolo Hospitalar</h2>
                    </ScrollReveal>

                    <ServiceGrid
                        items={[
                            { title: "Visita Médica Diária", description: "Acompanhamento presencial todos os dias, ajustando condutas em tempo real." },
                            { title: "Gestão do Caso", description: "Dialogamos diretamente com os especialistas do hospital e a família, unificando a comunicação." },
                            { title: "Planejamento de Alta", description: "Preparamos o retorno para casa com segurança, organizando home care e reabilitação se necessário." }
                        ]}
                        className="bg-transparent"
                    />
                </div>
            </section>

            {/* Closing */}
            <section className="bg-brand-cream px-8 md:px-16 py-32">
                <div className="max-w-[1400px] mx-auto">
                    <ScrollReveal className="max-w-xl lg:ml-[15%]">
                        <p className="font-serif text-2xl md:text-3xl italic text-brand-charcoal/70 leading-[1.4]">
                            O cuidado não muda de endereço. Muda apenas o cenário.
                        </p>
                        <div className="editorial-line mt-12" />
                    </ScrollReveal>
                </div>
            </section>
        </PageTransition>
    );
}
