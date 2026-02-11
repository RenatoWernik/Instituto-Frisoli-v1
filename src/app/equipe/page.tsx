import type { Metadata } from "next";
import { CinematicHero } from "@/components/sections/CinematicHero";
import { PageTransition } from "@/components/motion/PageTransition";
import { ScrollReveal } from "@/components/motion/ScrollReveal";
import { TeamGrid } from "@/components/ui/TeamGrid";
import { DOCTORS } from "@/content/doctors";

export const metadata: Metadata = {
    title: "Equipe Médica",
    description: "Conheça os médicos que lideram o cuidado no Instituto Frisoli.",
};

export default function EquipePage() {
    return (
        <PageTransition>
            <CinematicHero
                variant="page"
                imageSrc="/images/2.jpeg"
                imageAlt="Equipe médica do Instituto Frisoli"
                headline="As pessoas por trás do cuidado"
                label="Equipe"
            />

            {/* Team Grid Layout */}
            <section className="px-8 md:px-16 py-32 bg-white">
                <div className="max-w-[1400px] mx-auto">
                    <ScrollReveal>
                        <p className="font-serif text-2xl md:text-3xl text-brand-charcoal mb-16 max-w-3xl leading-relaxed">
                            Nossa equipe é formada por especialistas que compartilham a mesma visão: a medicina deve ser técnica, mas acima de tudo, humana.
                        </p>
                    </ScrollReveal>

                    <TeamGrid members={DOCTORS} />
                </div>
            </section>
        </PageTransition>
    );
}
