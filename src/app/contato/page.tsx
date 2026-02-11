import type { Metadata } from "next";
import { CinematicHero } from "@/components/sections/CinematicHero";
import { PageTransition } from "@/components/motion/PageTransition";
import { ScrollReveal } from "@/components/motion/ScrollReveal";
import { SITE_CONTENT } from "@/content/site";

export const metadata: Metadata = {
    title: "Contato",
    description: "Entre em contato com o Instituto Frisoli — telefone, WhatsApp, e-mail ou visite-nos.",
};

export default function ContatoPage() {
    const { contact } = SITE_CONTENT;

    return (
        <PageTransition>
            <CinematicHero
                variant="page"
                imageSrc="/images/4.jpeg"
                imageAlt="Contato Instituto Frisoli"
                headline="Fale Conosco"
                label="Contato"
            />

            {/* Contact Layout */}
            <section className="px-8 md:px-16 py-32 bg-white">
                <div className="max-w-[1400px] mx-auto grid grid-cols-1 lg:grid-cols-2 gap-20">

                    {/* Left: Info */}
                    <ScrollReveal>
                        <h2 className="font-serif text-4xl text-brand-charcoal mb-12">Canais de Atendimento</h2>

                        <div className="space-y-12">
                            <div>
                                <p className="whisper text-brand-gray-light mb-4">Telefone Principal</p>
                                <a href={`tel:+55${contact.phone.replace(/\D/g, "")}`} className="font-serif text-3xl text-brand-amber hover:text-brand-amber-dark transition-colors">
                                    {contact.phone}
                                </a>
                            </div>

                            <div>
                                <p className="whisper text-brand-gray-light mb-4">WhatsApp</p>
                                <a href={`https://wa.me/55${contact.whatsapp.replace(/\D/g, "")}`} className="font-serif text-3xl text-brand-charcoal hover:text-brand-amber transition-colors">
                                    {contact.whatsapp}
                                </a>
                            </div>

                            <div>
                                <p className="whisper text-brand-gray-light mb-4">E-mail</p>
                                <a href={`mailto:${contact.email}`} className="text-lg text-brand-gray hover:text-brand-charcoal transition-colors underline decoration-brand-amber/30 underline-offset-4">
                                    {contact.email}
                                </a>
                            </div>

                            <div className="pt-12 border-t border-brand-charcoal/10">
                                <p className="whisper text-brand-gray-light mb-2">Endereço</p>
                                <p className="text-brand-charcoal text-lg max-w-xs">{contact.address}</p>
                            </div>

                            <div>
                                <p className="whisper text-brand-gray-light mb-2">Horário</p>
                                <p className="text-brand-charcoal text-lg">{contact.hours}</p>
                            </div>
                        </div>
                    </ScrollReveal>

                    {/* Right: Form Placeholder */}
                    <ScrollReveal delay={0.2} className="bg-brand-light border border-brand-charcoal/5 p-10 md:p-12">
                        <h3 className="font-serif text-2xl text-brand-charcoal mb-8">Envie uma mensagem</h3>
                        <form className="space-y-6">
                            <div className="space-y-2">
                                <label className="text-xs uppercase tracking-widest text-brand-gray-light font-medium">Nome Completo</label>
                                <input type="text" className="w-full bg-white border border-brand-charcoal/10 px-4 py-3 focus:outline-none focus:border-brand-amber transition-colors text-brand-charcoal" placeholder="Seu nome" />
                            </div>

                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                <div className="space-y-2">
                                    <label className="text-xs uppercase tracking-widest text-brand-gray-light font-medium">E-mail</label>
                                    <input type="email" className="w-full bg-white border border-brand-charcoal/10 px-4 py-3 focus:outline-none focus:border-brand-amber transition-colors text-brand-charcoal" placeholder="seu@email.com" />
                                </div>
                                <div className="space-y-2">
                                    <label className="text-xs uppercase tracking-widest text-brand-gray-light font-medium">Telefone</label>
                                    <input type="tel" className="w-full bg-white border border-brand-charcoal/10 px-4 py-3 focus:outline-none focus:border-brand-amber transition-colors text-brand-charcoal" placeholder="(11) 99999-9999" />
                                </div>
                            </div>

                            <div className="space-y-2">
                                <label className="text-xs uppercase tracking-widest text-brand-gray-light font-medium">Mensagem</label>
                                <textarea className="w-full bg-white border border-brand-charcoal/10 px-4 py-3 h-32 focus:outline-none focus:border-brand-amber transition-colors text-brand-charcoal resize-none" placeholder="Como podemos ajudar?" />
                            </div>

                            <button type="button" className="w-full bg-brand-charcoal text-white uppercase tracking-widest text-xs font-medium py-4 hover:bg-brand-amber transition-colors duration-300">
                                Enviar Mensagem
                            </button>
                        </form>
                    </ScrollReveal>
                </div>
            </section>
        </PageTransition>
    );
}
