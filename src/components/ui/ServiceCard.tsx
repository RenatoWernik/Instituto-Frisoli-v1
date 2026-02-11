"use client";

import { motion } from "framer-motion";
import { cn } from "@/lib/utils";
import { resolveIcon } from "@/lib/icons";

interface ServiceCardProps {
    iconName: string;
    title: string;
    description: string;
    className?: string;
    variant?: "light" | "dark";
}

export function ServiceCard({
    iconName,
    title,
    description,
    className,
    variant = "light",
}: ServiceCardProps) {
    const isDark = variant === "dark";
    const Icon = resolveIcon(iconName);

    return (
        <motion.div
            className={cn(
                "group relative p-8 lg:p-10 rounded-2xl border transition-all duration-500 h-full flex flex-col",
                isDark
                    ? "bg-white/5 border-white/10 hover:border-brand-amber/40 hover:bg-white/8"
                    : "bg-white border-brand-muted hover:border-brand-amber/30 hover:shadow-lg",
                className,
            )}
            whileHover={{ y: -4 }}
            transition={{ type: "spring" as const, stiffness: 300, damping: 20 }}
        >
            <div className={cn(
                "w-12 h-12 rounded-xl flex items-center justify-center mb-8 transition-colors duration-500",
                isDark
                    ? "bg-brand-amber/15 text-brand-amber group-hover:bg-brand-amber group-hover:text-white"
                    : "bg-brand-cream text-brand-amber group-hover:bg-brand-amber group-hover:text-white",
            )}>
                <Icon size={22} strokeWidth={1.5} />
            </div>

            <h3 className={cn(
                "font-serif text-xl mb-4 transition-colors duration-300",
                isDark
                    ? "text-white group-hover:text-brand-amber"
                    : "text-brand-charcoal group-hover:text-brand-amber",
            )}>
                {title}
            </h3>

            <p className={cn(
                "text-sm leading-relaxed",
                isDark ? "text-white/60" : "text-brand-gray",
            )}>
                {description}
            </p>
        </motion.div>
    );
}
