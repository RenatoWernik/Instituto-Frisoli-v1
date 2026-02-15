"use client";

import Link from "next/link";
import { Facebook, Instagram, Linkedin, Mail, MapPin, Phone } from "lucide-react";

export function SiteFooter() {
    const currentYear = new Date().getFullYear();

    return (
        <footer className="bg-[#1a1a1a] text-white pt-16 pb-8 border-t border-white/10">
            <div className="container mx-auto">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
                    {/* Brand Column */}
                    <div className="space-y-6">
                        <Link href="/" className="inline-block group">
                            <div className="flex items-center gap-3">
                                <div className="flex flex-col items-center leading-none pointer-events-none">
                                    <span className="font-serif font-normal text-sm md:text-base text-primary uppercase tracking-widest translate-y-0.5">
                                        Instituto
                                    </span>
                                    <span className="font-serif font-bold text-3xl md:text-5xl text-primary uppercase -mt-1 tracking-wide">
                                        Frisoli
                                    </span>
                                </div>

                            </div>
                        </Link>
                        <p className="text-white/70 text-sm leading-relaxed max-w-xs">
                            Promovendo longevidade com qualidade de vida através de um cuidado humanizado e de excelência.
                        </p>
                        <div className="flex items-center gap-4">
                            <SocialLink href="#" icon={<Instagram className="w-5 h-5" />} label="Instagram" />
                            <SocialLink href="#" icon={<Facebook className="w-5 h-5" />} label="Facebook" />
                            <SocialLink href="#" icon={<Linkedin className="w-5 h-5" />} label="LinkedIn" />
                        </div>
                    </div>

                    {/* Quick Links */}
                    <div>
                        <h4 className="text-lg font-serif font-medium mb-6 text-white border-l-2 border-primary pl-3">
                            Instituto
                        </h4>
                        <ul className="space-y-3">
                            <FooterLink href="/instituto">Sobre Nós</FooterLink>
                            <FooterLink href="/equipe">Corpo Clínico</FooterLink>
                            <FooterLink href="/especialidades">Especialidades</FooterLink>
                            <FooterLink href="/contato">Fale Conosco</FooterLink>
                        </ul>
                    </div>

                    {/* Services */}
                    <div>
                        <h4 className="text-lg font-serif font-medium mb-6 text-white border-l-2 border-primary pl-3">
                            Especialidades
                        </h4>
                        <ul className="space-y-3">
                            <FooterLink href="/especialidades/geriatria">Geriatria</FooterLink>
                            <FooterLink href="/especialidades/cardiologia">Cardiologia</FooterLink>
                            <FooterLink href="/especialidades/neurologia">Neurologia</FooterLink>
                            <FooterLink href="/especialidades/reabilitacao">Reabilitação</FooterLink>
                        </ul>
                    </div>

                    {/* Contact Info */}
                    <div>
                        <h4 className="text-lg font-serif font-medium mb-6 text-white border-l-2 border-primary pl-3">
                            Contato
                        </h4>
                        <ul className="space-y-4">
                            <li className="flex items-start gap-3 text-white/80 text-sm">
                                <MapPin className="w-5 h-5 text-primary shrink-0 mt-0.5" />
                                <span>
                                    R. Gomes de Carvalho, 1356<br />
                                    Vila Olímpia, São Paulo - SP
                                </span>
                            </li>
                            <li className="flex items-center gap-3 text-white/80 text-sm">
                                <Phone className="w-5 h-5 text-primary shrink-0" />
                                <span>(11) 3845-1234</span>
                            </li>
                            <li className="flex items-center gap-3 text-white/80 text-sm">
                                <Mail className="w-5 h-5 text-primary shrink-0" />
                                <span>contato@institutofrisoli.com.br</span>
                            </li>
                        </ul>
                    </div>
                </div>

                {/* Copyright */}
                <div className="pt-8 border-t border-white/10 flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-white/50">
                    <p>© {currentYear} Instituto Frisoli. Todos os direitos reservados.</p>
                    <div className="flex gap-6">
                        <Link href="/privacidade" className="hover:text-white transition-colors">
                            Política de Privacidade
                        </Link>
                        <Link href="/termos" className="hover:text-white transition-colors">
                            Termos de Uso
                        </Link>
                    </div>
                </div>
            </div>
        </footer>
    );
}

function SocialLink({ href, icon, label }: { href: string; icon: React.ReactNode; label: string }) {
    return (
        <a
            href={href}
            className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center text-white/70 hover:bg-primary hover:text-white transition-all duration-300"
            aria-label={label}
        >
            {icon}
        </a>
    );
}

function FooterLink({ href, children }: { href: string; children: React.ReactNode }) {
    return (
        <li>
            <Link
                href={href}
                className="text-white/70 hover:text-white hover:translate-x-1 transition-all duration-200 inline-block text-sm"
            >
                {children}
            </Link>
        </li>
    );
}
