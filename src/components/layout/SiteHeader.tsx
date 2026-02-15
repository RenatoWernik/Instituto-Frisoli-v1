"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { cn } from "@/lib/utils";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { AgendamentoModal } from "@/components/ui/AgendamentoModal";
import { Menu, X } from "lucide-react";

export function SiteHeader() {
    const [scrolled, setScrolled] = useState(false);
    const [menuOpen, setMenuOpen] = useState(false);
    const [agendamentoOpen, setAgendamentoOpen] = useState(false);
    const pathname = usePathname();

    useEffect(() => {
        const onScroll = () => setScrolled(window.scrollY > 20);
        window.addEventListener("scroll", onScroll, { passive: true });
        return () => window.removeEventListener("scroll", onScroll);
    }, []);

    useEffect(() => setMenuOpen(false), [pathname]);

    useEffect(() => {
        document.body.style.overflow = menuOpen ? "hidden" : "";
        return () => { document.body.style.overflow = ""; };
    }, [menuOpen]);

    const navLinks = [
        { name: "Início", href: "/" },
        { name: "Instituto", href: "/instituto" },
        { name: "Especialidades", href: "/especialidades" },
        { name: "Corpo Clínico", href: "/equipe" },
        { name: "Contato", href: "/contato" },
    ];

    return (
        <>
            <header
                className={cn(
                    "fixed top-0 inset-x-0 z-50 bg-background/95 backdrop-blur-sm border-b transition-all duration-300",
                    scrolled
                        ? "border-border shadow-sm py-2"
                        : "border-transparent py-4"
                )}
            >
                <div className="container mx-auto flex items-center justify-between">
                    {/* Logo */}
                    {/* Logo */}
                    {/* Logo */}
                    <Link href="/" className="flex flex-col items-center z-50 relative group w-max mx-auto md:mx-0">
                        <div className="flex flex-col items-center leading-none pointer-events-none">
                            <span className="font-serif font-normal text-sm md:text-base text-primary uppercase tracking-widest translate-y-0.5">
                                Instituto
                            </span>
                            <span className="font-serif font-bold text-3xl md:text-5xl text-primary uppercase -mt-1 tracking-wide">
                                Frisoli
                            </span>
                        </div>
                        <span className="text-[0.65rem] md:text-[0.85rem] text-[#8a3c03] font-sans font-medium text-center tracking-wide mt-0.5">
                            Medicina Interna & Geriatria
                        </span>
                    </Link>

                    {/* Desktop Nav */}
                    <nav className="hidden md:flex items-center gap-8">
                        {navLinks.map((link) => (
                            <Link
                                key={link.href}
                                href={link.href}
                                className={cn(
                                    "text-[15px] font-medium transition-colors duration-200 relative py-1",
                                    "after:content-[''] after:absolute after:-bottom-[1px] after:left-0 after:right-0 after:h-0.5 after:bg-primary after:origin-right after:scale-x-0 after:transition-transform after:duration-300 hover:after:origin-left hover:after:scale-x-100",
                                    pathname === link.href
                                        ? "text-primary font-semibold"
                                        : "text-foreground/80 hover:text-primary"
                                )}
                            >
                                {link.name}
                            </Link>
                        ))}
                        <button
                            onClick={() => setAgendamentoOpen(true)}
                            className="bg-primary text-primary-foreground text-sm font-semibold px-6 py-2.5 rounded-full hover:bg-primary/90 hover:shadow-md transition-all duration-200 cursor-pointer active:scale-95"
                        >
                            Agendar Consulta
                        </button>
                    </nav>

                    {/* Mobile Toggle */}
                    <button
                        onClick={() => setMenuOpen(!menuOpen)}
                        className="md:hidden z-50 relative p-2 text-foreground/80 rounded-lg hover:bg-surface transition-colors"
                        aria-label="Toggle Menu"
                    >
                        {menuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
                    </button>
                </div>
            </header>

            {/* Mobile Menu Overlay */}
            <AnimatePresence>
                {menuOpen && (
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        transition={{ duration: 0.2 }}
                        className="fixed inset-0 z-40 bg-background pt-20 px-6 pb-8 md:hidden flex flex-col"
                    >
                        <nav className="flex flex-col gap-1">
                            {navLinks.map((link, i) => (
                                <motion.div
                                    key={link.href}
                                    initial={{ opacity: 0, x: -16 }}
                                    animate={{ opacity: 1, x: 0 }}
                                    transition={{ delay: i * 0.04 }}
                                >
                                    <Link
                                        href={link.href}
                                        className={cn(
                                            "text-xl font-serif py-4 block rounded-lg px-4 transition-colors",
                                            pathname === link.href
                                                ? "text-primary bg-primary/5"
                                                : "text-foreground hover:bg-primary/5 hover:text-primary"
                                        )}
                                        onClick={() => setMenuOpen(false)}
                                    >
                                        {link.name}
                                    </Link>
                                </motion.div>
                            ))}
                            <motion.div
                                initial={{ opacity: 0, y: 16 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: 0.25 }}
                                className="pt-6"
                            >
                                <button
                                    onClick={() => {
                                        setMenuOpen(false);
                                        setAgendamentoOpen(true);
                                    }}
                                    className="w-full bg-primary text-white text-lg font-medium py-4 rounded-lg hover:bg-primary/90 transition-colors cursor-pointer shadow-lg"
                                >
                                    Agendar Consulta
                                </button>
                            </motion.div>
                        </nav>
                    </motion.div>
                )}
            </AnimatePresence>

            {/* Agendamento Modal */}
            <AgendamentoModal
                open={agendamentoOpen}
                onClose={() => setAgendamentoOpen(false)}
            />
        </>
    );
}
