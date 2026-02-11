import type { Metadata } from "next";
import { CinematicHero } from "@/components/sections/CinematicHero";
import { PageTransition } from "@/components/motion/PageTransition";
import { ServiceGrid } from "@/components/ui/ServiceGrid";
import { ScrollReveal } from "@/components/motion/ScrollReveal";
import { TextReveal } from "@/components/motion/TextReveal";
import { SITE_CONTENT } from "@/content/site";

export const metadata: Metadata = {
    title: "O Instituto",
    description: "Conheça o Instituto Frisoli — nossa filosofia, valores e compromisso com a longevidade saudável.",
};

export default function InstitutoPage() {
    const { instituto } = SITE_CONTENT;

    return (
        <PageTransition>
            <CinematicHero
                variant="page"
                imageSrc="/images/4.jpeg"
                imageAlt="Interior do Instituto Frisoli"
                headline={instituto.headline}
                subheadline={instituto.tagline}
                label="Quem Somos"
            />

            {/* Philosophy — a single statement in space */}
            <section className="min-h-[60vh] flex items-center px-8 md:px-16 py-32 bg-white">
                <div className="max-w-[1400px] mx-auto w-full">
                    <ScrollReveal className="max-w-3xl lg:ml-[10%]">
                        <p className="font-serif text-2xl md:text-4xl text-brand-charcoal italic leading-[1.4] tracking-tight">
                            {instituto.philosophy.text}
                        </p>
                        <div className="editorial-line mt-12" />
                    </ScrollReveal>
                </div>
            </section>

            {/* Narrative / History */}
            <section className="px-8 md:px-16 pb-32 bg-white">
                <div className="max-w-[1400px] mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
                    <ScrollReveal>
                        <div className="relative aspect-[4/5] bg-brand-muted">
                            {/* Placeholder for History Image - reusing existing image for now */}
                            <div className="absolute inset-0 bg-brand-charcoal/5" />
                            {/* Ideally imports Image from next/image and uses /images/1.jpeg */}
                            <img src="/images/1.jpeg" alt="História do Instituto" className="object-cover w-full h-full grayscale hover:grayscale-0 transition-all duration-700" />
                        </div>
                    </ScrollReveal>

                    <ScrollReveal delay={0.2} className="lg:pl-12">
                        <h2 className="font-serif text-3xl text-brand-charcoal mb-8">Tradição e Evolução</h2>
                        <div className="space-y-6 text-brand-gray text-lg leading-relaxed">
                            <p>{instituto.paragraphs[0]}</p>
                            <p>{instituto.paragraphs[1]}</p>
                            <p>{instituto.paragraphs[2]}</p>
                        </div>
                    </ScrollReveal>
                </div>
            </section>

            {/* Values — as Service Grid */}
            <section className="bg-brand-cream px-8 md:px-16 py-32">
                <div className="max-w-[1400px] mx-auto">
                    <ScrollReveal>
                        <p className="whisper text-brand-amber/70 mb-16">Nossos Pilares</p>
                    </ScrollReveal>
                    <ServiceGrid
                        items={instituto.values.map(v => ({
                            title: v.title,
                            description: v.text,
                        }))}
                        className="bg-transparent"
                    />
                </div>
            </section>
        </PageTransition>
    );
}
