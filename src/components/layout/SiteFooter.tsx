"use client";

import { MapPin, Phone, Mail, Instagram, Facebook, Linkedin } from "lucide-react";
import Link from "next/link";

export function SiteFooter() {
    return (
        <footer className="bg-black text-white pt-20 pb-10 relative overflow-hidden">
            {/* Organic background */}
            <div className="absolute inset-0 pointer-events-none overflow-hidden">
                <div className="absolute top-[10%] right-[10%] w-[400px] h-[400px] rounded-full bg-primary/[0.04] blur-3xl" />
                <div className="absolute bottom-[20%] left-[5%] w-[300px] h-[300px] rounded-full bg-white/[0.02] blur-3xl" />
            </div>

            <div className="container px-4 md:px-6 relative z-10">
                <div className="grid lg:grid-cols-4 gap-12 mb-16">
                    {/* Brand */}
                    <div className="space-y-6 lg:col-span-2">
                        <Link href="/" className="inline-block group">
                            <span className="text-3xl font-serif text-white group-hover:text-primary transition-colors duration-300">
                                Instituto Frisoli
                            </span>
                        </Link>
                        <p className="text-white/60 max-w-sm text-base leading-relaxed">
                            Dedicados a promover a longevidade com dignidade. Referência em geriatria e
                            cuidados integrais para idosos em São Paulo.
                        </p>

                        {/* Social Icons - Circular */}
                        <div className="flex gap-3 pt-2">
                            {[
                                { icon: Instagram, label: "Instagram" },
                                { icon: Facebook, label: "Facebook" },
                                { icon: Linkedin, label: "LinkedIn" },
                            ].map((social, i) => (
                                <a
                                    key={i}
                                    href="#"
                                    aria-label={social.label}
                                    className="w-11 h-11 rounded-full bg-white/10 flex items-center justify-center hover:bg-primary hover:scale-105 transition-all duration-300"
                                >
                                    <social.icon className="h-5 w-5 text-white" />
                                </a>
                            ))}
                        </div>
                    </div>

                    {/* Quick Links */}
                    <div className="space-y-6">
                        <h4 className="text-sm font-medium text-white/40 uppercase tracking-wider">
                            Links Rápidos
                        </h4>
                        <ul className="space-y-3">
                            {[
                                { name: "Instituto", href: "/instituto" },
                                { name: "Especialidades", href: "/especialidades" },
                                { name: "Corpo Clínico", href: "/equipe" },
                                { name: "Agendar Consulta", href: "/contato" },
                            ].map((link, i) => (
                                <li key={i}>
                                    <Link
                                        href={link.href}
                                        className="text-white/70 hover:text-primary transition-colors duration-300 text-[15px]"
                                    >
                                        {link.name}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Contact */}
                    <div className="space-y-6">
                        <h4 className="text-sm font-medium text-white/40 uppercase tracking-wider">
                            Contato
                        </h4>
                        <ul className="space-y-4">
                            <li className="flex items-start gap-3 group">
                                <div className="w-8 h-8 rounded-full bg-white/10 flex items-center justify-center flex-shrink-0 mt-0.5">
                                    <MapPin className="h-4 w-4 text-primary" />
                                </div>
                                <span className="text-white/70 group-hover:text-primary transition-colors text-[15px] leading-relaxed">
                                    Rua Gomes de Carvalho, 1356
                                    <br />Vila Olímpia, SP
                                </span>
                            </li>
                            <li className="flex items-center gap-3 group">
                                <div className="w-8 h-8 rounded-full bg-white/10 flex items-center justify-center flex-shrink-0">
                                    <Phone className="h-4 w-4 text-primary" />
                                </div>
                                <span className="text-white/70 group-hover:text-primary transition-colors text-[15px]">
                                    (11) 3045-1234
                                </span>
                            </li>
                            <li className="flex items-center gap-3 group">
                                <div className="w-8 h-8 rounded-full bg-white/10 flex items-center justify-center flex-shrink-0">
                                    <Mail className="h-4 w-4 text-primary" />
                                </div>
                                <span className="text-white/70 group-hover:text-primary transition-colors text-[15px]">
                                    contato@institutofrisoli.com.br
                                </span>
                            </li>
                        </ul>
                    </div>
                </div>

                {/* Bottom bar */}
                <div className="pt-8 border-t border-white/10 flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-white/40">
                    <p>&copy; {new Date().getFullYear()} Instituto Frisoli. Todos os direitos reservados.</p>
                    <div className="flex gap-6">
                        <Link href="/privacidade" className="hover:text-white transition-colors">Privacidade</Link>
                        <Link href="/termos" className="hover:text-white transition-colors">Termos de Uso</Link>
                    </div>
                </div>
            </div>
        </footer>
    );
}
