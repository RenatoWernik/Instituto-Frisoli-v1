import type { Metadata } from "next";
import { CinematicHero } from "@/components/sections/CinematicHero";
import { PageTransition } from "@/components/motion/PageTransition";
import { ScrollReveal } from "@/components/motion/ScrollReveal";
import { SITE_CONTENT } from "@/content/site";

export const metadata: Metadata = {
    title: "Localização",
    description: "Nosso espaço na Vila Olímpia — endereço, horários e como chegar ao Instituto Frisoli.",
};

export default function LocalizacaoPage() {
    const { localizacao, contact } = SITE_CONTENT;

    return (
        <PageTransition>
            <CinematicHero
                variant="page"
                imageSrc="/images/4.jpeg"
                imageAlt="Localização do Instituto Frisoli"
                headline={localizacao.headline}
                subheadline={localizacao.subheadline}
                label="Localização"
            />

            {/* Map + Details — editorial, not a card */}
            <section className="px-8 md:px-16 py-32 bg-white">
                <div className="max-w-[1400px] mx-auto grid grid-cols-1 lg:grid-cols-[3fr_2fr] gap-16 lg:gap-24">
                    {/* Map */}
                    <ScrollReveal className="relative aspect-[4/3] bg-brand-muted overflow-hidden">
                        <iframe
                            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3656.847889!2d-46.686!3d-23.596!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMjPCsDM1JzQ1LjYiUyA0NsKwNDEnMDkuNiJX!5e0!3m2!1spt-BR!2sbr!4v1"
                            className="absolute inset-0 w-full h-full border-0"
                            allowFullScreen
                            loading="lazy"
                            referrerPolicy="no-referrer-when-downgrade"
                            title="Localização do Instituto Frisoli"
                        />
                    </ScrollReveal>

                    {/* Address — whisper details */}
                    <ScrollReveal delay={0.3} className="flex flex-col justify-end pb-4">
                        <div className="space-y-12">
                            <div>
                                <span className="whisper text-brand-amber/70 block mb-4">Endereço</span>
                                <p className="text-brand-charcoal text-base leading-relaxed">
                                    {contact.address}
                                </p>
                            </div>
                            <div>
                                <span className="whisper text-brand-amber/70 block mb-4">Horários</span>
                                <p className="text-brand-gray text-base">
                                    {contact.hours}
                                </p>
                            </div>
                            <div>
                                <span className="whisper text-brand-amber/70 block mb-4">Telefone</span>
                                <a
                                    href={`tel:+55${contact.phone.replace(/\D/g, "")}`}
                                    className="font-serif text-xl text-brand-charcoal hover:text-brand-amber transition-colors duration-500"
                                >
                                    {contact.phone}
                                </a>
                            </div>
                            <div className="editorial-line" />
                        </div>
                    </ScrollReveal>
                </div>
            </section>
        </PageTransition>
    );
}
