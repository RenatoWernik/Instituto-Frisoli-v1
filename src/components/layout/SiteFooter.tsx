"use client";

import { MapPin, Phone, Mail, Instagram, Facebook, Linkedin } from "lucide-react";
import Link from "next/link";

export function SiteFooter() {
    return (
        <footer className="bg-black text-white pt-16 pb-8">
            <div className="max-w-7xl mx-auto px-4 md:px-6">
                <div className="grid lg:grid-cols-3 gap-12 mb-12">
                    {/* Brand */}
                    <div className="space-y-5">
                        <Link href="/" className="inline-block">
                            <span className="text-2xl font-serif text-white hover:text-mayo-blue transition-colors duration-200">
                                Instituto Frisoli
                            </span>
                        </Link>
                        <p className="text-white/50 max-w-xs text-sm leading-relaxed">
                            Dedicados a promover a longevidade com dignidade. Referência em
                            geriatria e cuidados integrais para idosos em São Paulo.
                        </p>

                        {/* Social Icons */}
                        <div className="flex gap-3 pt-1">
                            {[
                                { icon: Instagram, label: "Instagram" },
                                { icon: Facebook, label: "Facebook" },
                                { icon: Linkedin, label: "LinkedIn" },
                            ].map((social, i) => (
                                <a
                                    key={i}
                                    href="#"
                                    aria-label={social.label}
                                    className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-mayo-blue transition-colors duration-200"
                                >
                                    <social.icon className="h-4 w-4 text-white" />
                                </a>
                            ))}
                        </div>
                    </div>

                    {/* Quick Links */}
                    <div className="space-y-5">
                        <h4 className="text-xs font-medium text-white/40 uppercase tracking-wider">
                            Links
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
                                        className="text-white/60 hover:text-mayo-blue transition-colors duration-200 text-sm"
                                    >
                                        {link.name}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Contact */}
                    <div className="space-y-5">
                        <h4 className="text-xs font-medium text-white/40 uppercase tracking-wider">
                            Contato
                        </h4>
                        <ul className="space-y-4">
                            <li className="flex items-start gap-3">
                                <MapPin className="h-4 w-4 text-mayo-blue flex-shrink-0 mt-0.5" />
                                <span className="text-white/60 text-sm leading-relaxed">
                                    Rua Gomes de Carvalho, 1356
                                    <br />Vila Olímpia, SP
                                </span>
                            </li>
                            <li className="flex items-center gap-3">
                                <Phone className="h-4 w-4 text-mayo-blue flex-shrink-0" />
                                <span className="text-white/60 text-sm">
                                    (11) 3045-1234
                                </span>
                            </li>
                            <li className="flex items-center gap-3">
                                <Mail className="h-4 w-4 text-mayo-blue flex-shrink-0" />
                                <span className="text-white/60 text-sm">
                                    contato@institutofrisoli.com.br
                                </span>
                            </li>
                        </ul>
                    </div>
                </div>

                {/* Bottom bar */}
                <div className="pt-6 mt-12 border-t border-white/10 flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-white/30">
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
