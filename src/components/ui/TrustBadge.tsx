"use client";

import { ScrollReveal, RevealItem } from "@/components/motion/ScrollReveal";
import { resolveIcon } from "@/lib/icons";
import { cn } from "@/lib/utils";

interface TrustItem {
    iconName: string;
    title: string;
    description: string;
}

interface TrustBadgeProps {
    items: TrustItem[];
    variant?: "light" | "dark";
    className?: string;
}

export function TrustBadge({ items, variant = "light", className }: TrustBadgeProps) {
    const isDark = variant === "dark";

    return (
        <ScrollReveal staggerChildren={0.12} className={cn("grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8", className)}>
            {items.map((item) => {
                const Icon = resolveIcon(item.iconName);
                return (
                    <RevealItem key={item.title}>
                        <div className="flex flex-col items-center text-center">
                            <div className={cn(
                                "w-16 h-16 rounded-full flex items-center justify-center mb-5",
                                isDark ? "bg-white/10 text-brand-amber" : "bg-brand-amber/10 text-brand-amber",
                            )}>
                                <Icon size={28} strokeWidth={1.5} />
                            </div>
                            <h4 className={cn(
                                "font-serif text-lg mb-2",
                                isDark ? "text-white" : "text-brand-charcoal",
                            )}>
                                {item.title}
                            </h4>
                            <p className={cn(
                                "text-sm leading-relaxed max-w-xs",
                                isDark ? "text-white/60" : "text-brand-gray",
                            )}>
                                {item.description}
                            </p>
                        </div>
                    </RevealItem>
                );
            })}
        </ScrollReveal>
    );
}
