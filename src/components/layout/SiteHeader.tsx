"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { cn } from "@/lib/utils";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Button } from "@/components/ui/Button";
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
                    "fixed top-0 inset-x-0 z-50 transition-all duration-500",
                    scrolled
                        ? "bg-offwhite/95 backdrop-blur-lg shadow-sm py-3"
                        : "bg-transparent py-5"
                )}
            >
                <div className="container px-4 md:px-6 flex items-center justify-between">
                    <Link href="/" className="flex items-center gap-2 z-50 relative">
                        <span className="text-xl md:text-2xl font-serif text-primary transition-colors">
                            Instituto Frisoli
                        </span>
                    </Link>

                    {/* Desktop Nav */}
                    <nav className="hidden md:flex items-center gap-8">
                        {navLinks.map((link) => (
                            <Link
                                key={link.href}
                                href={link.href}
                                className={cn(
                                    "text-sm font-medium transition-colors duration-300 hover:text-primary relative",
                                    pathname === link.href
                                        ? "text-primary"
                                        : scrolled ? "text-black/70" : "text-black/70"
                                )}
                            >
                                {link.name}
                                {pathname === link.href && (
                                    <motion.div
                                        layoutId="nav-indicator"
                                        className="absolute -bottom-1 left-0 right-0 h-0.5 bg-primary rounded-full"
                                    />
                                )}
                            </Link>
                        ))}
                        <Button
                            size="sm"
                            onClick={() => setAgendamentoOpen(true)}
                            className="rounded-full px-6 bg-primary text-white hover:bg-primary/90 shadow-md shadow-primary/20"
                        >
                            Agendar
                        </Button>
                    </nav>

                    {/* Mobile Toggle */}
                    <button
                        onClick={() => setMenuOpen(!menuOpen)}
                        className="md:hidden z-50 relative p-2 text-black rounded-full hover:bg-primary/10 transition-colors"
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
                        transition={{ duration: 0.3 }}
                        className="fixed inset-0 z-40 bg-offwhite pt-24 px-6 pb-8 md:hidden flex flex-col"
                    >
                        <nav className="flex flex-col gap-2">
                            {navLinks.map((link, i) => (
                                <motion.div
                                    key={link.href}
                                    initial={{ opacity: 0, x: -20 }}
                                    animate={{ opacity: 1, x: 0 }}
                                    transition={{ delay: i * 0.05 }}
                                >
                                    <Link
                                        href={link.href}
                                        className={cn(
                                            "text-2xl font-serif font-medium py-4 block rounded-2xl px-4 transition-colors",
                                            pathname === link.href
                                                ? "text-primary bg-primary/5"
                                                : "text-black hover:bg-primary/5"
                                        )}
                                        onClick={() => setMenuOpen(false)}
                                    >
                                        {link.name}
                                    </Link>
                                </motion.div>
                            ))}
                            <motion.div
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: 0.3 }}
                                className="pt-6"
                            >
                                <Button
                                    onClick={() => {
                                        setMenuOpen(false);
                                        setAgendamentoOpen(true);
                                    }}
                                    className="w-full rounded-full h-14 text-lg bg-primary text-white shadow-lg shadow-primary/25"
                                >
                                    Agendar Consulta
                                </Button>
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
