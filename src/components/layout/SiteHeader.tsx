"use client";

import { useState, useEffect } from "react";
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
                    "fixed top-0 inset-x-0 z-50 bg-background border-b transition-shadow duration-300",
                    scrolled
                        ? "border-border shadow-sm"
                        : "border-transparent"
                )}
            >
                <div className="max-w-7xl mx-auto px-4 md:px-6 flex items-center justify-between h-16">
                    {/* Logo */}
                    <Link href="/" className="flex items-center z-50 relative">
                        <span className="text-xl md:text-2xl font-serif text-primary">
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
                                    "text-sm font-medium transition-colors duration-200 relative py-1",
                                    "after:content-[''] after:absolute after:-bottom-[1px] after:left-0 after:right-0 after:h-0.5 after:bg-primary after:origin-center after:scale-x-0 after:transition-transform after:duration-300",
                                    pathname === link.href
                                        ? "text-mayo-blue"
                                        : "text-foreground/70 hover:text-mayo-blue hover:after:scale-x-100"
                                )}
                            >
                                {link.name}
                                {pathname === link.href && (
                                    <motion.div
                                        layoutId="nav-indicator"
                                        className="absolute -bottom-[1px] left-0 right-0 h-0.5 bg-mayo-blue z-10"
                                    />
                                )}
                            </Link>
                        ))}
                        <button
                            onClick={() => setAgendamentoOpen(true)}
                            className="bg-mayo-blue text-white text-sm font-medium px-6 py-2.5 rounded-lg hover:bg-mayo-blue/90 transition-colors duration-200 cursor-pointer"
                        >
                            Agendar
                        </button>
                    </nav>

                    {/* Mobile Toggle */}
                    <button
                        onClick={() => setMenuOpen(!menuOpen)}
                        className="md:hidden z-50 relative p-2 text-foreground rounded-lg hover:bg-surface transition-colors"
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
                                                ? "text-mayo-blue bg-mayo-blue/5"
                                                : "text-foreground hover:bg-mayo-blue/5 hover:text-mayo-blue"
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
                                    className="w-full bg-mayo-blue text-white text-lg font-medium py-4 rounded-lg hover:bg-mayo-blue/90 transition-colors cursor-pointer"
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
