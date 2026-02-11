"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { cn } from "@/lib/utils";
import Link from "next/link";
import { usePathname } from "next/navigation";

const NAV_LINKS = [
    { label: "Instituto", href: "/instituto" },
    { label: "Equipe", href: "/equipe" },
    { label: "Especialidades", href: "/especialidades" },
    { label: "Atendimento", href: "/atendimento" },
    { label: "Programas", href: "/programas" },
    { label: "Concierge", href: "/concierge" },
    // { label: "Localização", href: "/localizacao" }, // Removed to save space on desktop, can be in footer or contact
    { label: "Contato", href: "/contato" },
];

export function SiteHeader() {
    const [scrolled, setScrolled] = useState(false);
    const [menuOpen, setMenuOpen] = useState(false);
    const pathname = usePathname();

    useEffect(() => {
        const onScroll = () => setScrolled(window.scrollY > 80);
        window.addEventListener("scroll", onScroll, { passive: true });
        return () => window.removeEventListener("scroll", onScroll);
    }, []);

    useEffect(() => setMenuOpen(false), [pathname]);

    useEffect(() => {
        document.body.style.overflow = menuOpen ? "hidden" : "";
        return () => { document.body.style.overflow = ""; };
    }, [menuOpen]);

    return (
        <>
            {/* ─── Header Bar ─── */}
            <header
                className={cn(
                    "fixed top-0 left-0 right-0 z-[2000] transition-all duration-300",
                    // Scrolled: Solid White, Charcoal Text
                    // Top: Dark Gradient, White Text
                    scrolled && !menuOpen
                        ? "bg-brand-light/95 backdrop-blur-md shadow-sm border-b border-brand-charcoal/5"
                        : "bg-gradient-to-b from-black/60 to-transparent",
                )}
            >
                <div className="max-w-[1400px] mx-auto flex items-center justify-between px-6 md:px-12 h-24 relative z-10">
                    {/* 1. Logo */}
                    {/* 1. Logo */}
                    {/* 1. Logo: Symbol "F" + Text */}
                    <Link href="/" className="group relative z-50 flex items-center gap-4">
                        {/* Symbol "F" */}
                        <div className={cn(
                            "relative h-10 w-10 transition-all duration-300",
                            menuOpen
                                ? "brightness-0 invert"
                                : scrolled
                                    ? "" // Original (Terra Cotta) on White
                                    : "brightness-0 invert" // Keeping white for contrast on dark hero
                        )}>
                            <img
                                src="/images/logotipo1.png"
                                alt="F"
                                className="h-full w-full object-contain"
                            />
                        </div>

                        {/* Text "Instituto Frisoli" */}
                        <span
                            className={cn(
                                "font-serif text-xl tracking-tight transition-colors duration-300 font-medium",
                                menuOpen
                                    ? "text-white"
                                    : scrolled
                                        ? "text-brand-charcoal"
                                        : "text-white drop-shadow-md"
                            )}
                        >
                            Instituto Frisoli
                        </span>
                    </Link>

                    {/* 2. Universal Hamburger Trigger (Visible on ALL devices) */}
                    <button
                        onClick={() => setMenuOpen(!menuOpen)}
                        className={cn(
                            "group transition-colors duration-300 relative z-50 p-2 flex items-center gap-3",
                            menuOpen
                                ? "text-white"
                                : scrolled ? "text-brand-charcoal" : "text-white drop-shadow-md",
                        )}
                        aria-label={menuOpen ? "Fechar menu" : "Abrir menu"}
                    >
                        <span className="text-xs uppercase tracking-[0.25em] font-medium hidden md:block">
                            {menuOpen ? "Fechar" : "Menu"}
                        </span>
                        <div className="flex flex-col items-end gap-[6px]">
                            <span className={cn("block h-[2px] bg-current transition-all duration-300", menuOpen ? "w-6 rotate-45 translate-y-[8px]" : "w-6")} />
                            <span className={cn("block h-[2px] bg-current transition-all duration-300", menuOpen ? "opacity-0" : "w-4")} />
                            <span className={cn("block h-[2px] bg-current transition-all duration-300", menuOpen ? "w-6 -rotate-45 -translate-y-[8px]" : "w-6")} />
                        </div>
                    </button>
                </div>
            </header>

            {/* ─── Full-Screen Menu Overlay (Visible on ALL devices) ─── */}
            <AnimatePresence>
                {menuOpen && (
                    <motion.div
                        className="fixed inset-0 z-[1999] bg-brand-black flex items-center"
                        initial={{ clipPath: "inset(0 0 100% 0)" }}
                        animate={{ clipPath: "inset(0 0 0% 0)" }}
                        exit={{ clipPath: "inset(0 0 100% 0)" }}
                        transition={{ duration: 0.6, ease: [0.77, 0, 0.175, 1] }}
                    >
                        <div className="w-full max-w-[1400px] mx-auto px-6 md:px-12 grid grid-cols-1 lg:grid-cols-[1fr_1px_auto] gap-12 lg:gap-24 items-center h-full sm:h-auto overflow-y-auto sm:overflow-visible py-24 sm:py-0">

                            {/* Navigation Links */}
                            <nav className="flex flex-col gap-2">
                                {NAV_LINKS.map((link, i) => (
                                    <motion.div
                                        key={link.href}
                                        initial={{ y: 40, opacity: 0 }}
                                        animate={{ y: 0, opacity: 1 }}
                                        exit={{ y: -20, opacity: 0 }}
                                        transition={{
                                            delay: 0.2 + i * 0.05,
                                            duration: 0.6,
                                            ease: [0.16, 1, 0.3, 1],
                                        }}
                                    >
                                        <Link
                                            href={link.href}
                                            className={cn(
                                                "block font-serif text-4xl md:text-5xl lg:text-6xl transition-colors duration-300 py-1",
                                                pathname === link.href
                                                    ? "text-brand-amber"
                                                    : "text-white/40 hover:text-white",
                                            )}
                                        >
                                            {link.label}
                                        </Link>
                                    </motion.div>
                                ))}
                            </nav>

                            {/* Separator (Desktop) */}
                            <div className="hidden lg:block h-80 bg-white/10" />

                            {/* Contact Info */}
                            <motion.div
                                className="flex flex-col gap-8"
                                initial={{ opacity: 0 }}
                                animate={{ opacity: 1 }}
                                transition={{ delay: 0.6, duration: 0.8 }}
                            >
                                <div>
                                    <span className="whisper block mb-3 text-white/40">Telefone</span>
                                    <a href="tel:+551130451234" className="text-white/80 text-lg hover:text-white transition-colors">
                                        (11) 3045-1234
                                    </a>
                                </div>
                                <div>
                                    <span className="whisper block mb-3 text-white/40">E-mail</span>
                                    <a href="mailto:contato@institutofrisoli.com.br" className="text-white/80 text-lg hover:text-white transition-colors">
                                        contato@institutofrisoli.com.br
                                    </a>
                                </div>
                                <div>
                                    <span className="whisper block mb-3 text-white/40">Endereço</span>
                                    <p className="text-white/60 text-base max-w-[200px]">
                                        Vila Olímpia,<br />São Paulo
                                    </p>
                                </div>
                            </motion.div>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </>
    );
}
