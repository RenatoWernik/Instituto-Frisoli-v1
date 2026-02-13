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
                    ? "bg-white/5 border-white/10 hover:border-primary/40 hover:bg-white/8"
                    : "bg-background border-border hover:border-primary/30 hover:shadow-lg",
                className,
            )}
            whileHover={{ y: -4 }}
            transition={{ type: "spring" as const, stiffness: 300, damping: 20 }}
        >
            <div className={cn(
                "w-12 h-12 rounded-xl flex items-center justify-center mb-8 transition-colors duration-500",
                isDark
                    ? "bg-primary/15 text-primary group-hover:bg-primary group-hover:text-white"
                    : "bg-surface text-primary group-hover:bg-primary group-hover:text-white",
            )}>
                <Icon size={22} strokeWidth={1.5} />
            </div>

            <h3 className={cn(
                "font-serif text-xl mb-4 transition-colors duration-300",
                isDark
                    ? "text-white group-hover:text-primary"
                    : "text-foreground group-hover:text-primary",
            )}>
                {title}
            </h3>

            <p className={cn(
                "text-sm leading-relaxed",
                isDark ? "text-white/60" : "text-muted-foreground",
            )}>
                {description}
            </p>
        </motion.div>
    );
}
