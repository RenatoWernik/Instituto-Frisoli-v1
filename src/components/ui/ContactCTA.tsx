"use client";

import { motion } from "framer-motion";
import { Phone, MessageCircle, Mail } from "lucide-react";
import { cn } from "@/lib/utils";

interface ContactItem {
    icon: typeof Phone;
    label: string;
    value: string;
    href: string;
    accent?: boolean;
}

const CONTACT_ITEMS: ContactItem[] = [
    {
        icon: MessageCircle,
        label: "WhatsApp",
        value: "(11) 98765-4321",
        href: "https://wa.me/5511987654321?text=Olá,%20gostaria%20de%20agendar%20uma%20consulta.",
        accent: true,
    },
    {
        icon: Phone,
        label: "Telefone",
        value: "(11) 3045-1234",
        href: "tel:+551130451234",
    },
    {
        icon: Mail,
        label: "E-mail",
        value: "contato@institutofrisoli.com.br",
        href: "mailto:contato@institutofrisoli.com.br",
    },
];

export function ContactCTA({ className }: { className?: string }) {
    return (
        <div className={cn("grid grid-cols-1 md:grid-cols-3 gap-6", className)}>
            {CONTACT_ITEMS.map((item) => (
                <motion.a
                    key={item.label}
                    href={item.href}
                    target={item.href.startsWith("http") ? "_blank" : undefined}
                    rel={item.href.startsWith("http") ? "noopener noreferrer" : undefined}
                    className={cn(
                        "group flex flex-col items-center text-center p-8 rounded-2xl border transition-all duration-500",
                        item.accent
                            ? "bg-primary text-white border-primary hover:bg-primary/90"
                            : "bg-background text-foreground border-border hover:border-primary/30 hover:shadow-lg",
                    )}
                    whileHover={{ y: -4 }}
                    whileTap={{ scale: 0.98 }}
                    transition={{ type: "spring", stiffness: 300, damping: 20 }}
                >
                    <motion.div
                        className={cn(
                            "w-14 h-14 rounded-full flex items-center justify-center mb-5 transition-colors duration-300",
                            item.accent
                                ? "bg-white/20 text-white"
                                : "bg-surface text-primary group-hover:bg-primary group-hover:text-white",
                        )}
                        whileHover={{ rotate: [0, -8, 8, 0] }}
                        transition={{ duration: 0.5 }}
                    >
                        <item.icon size={24} strokeWidth={1.5} />
                    </motion.div>
                    <span className="text-xs uppercase tracking-[0.15em] font-medium mb-2 opacity-70">
                        {item.label}
                    </span>
                    <span className={cn(
                        "text-base font-medium",
                        item.accent ? "text-white" : "text-foreground",
                    )}>
                        {item.value}
                    </span>
                </motion.a>
            ))}
        </div>
    );
}
