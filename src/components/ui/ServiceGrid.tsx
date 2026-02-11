"use client";

import { ScrollReveal } from "@/components/motion/ScrollReveal";
import { cn } from "@/lib/utils";
import { ArrowUpRight } from "lucide-react";
import Link from "next/link";

interface ServiceItem {
    title: string;
    description: string;
    href?: string;
    icon?: React.ElementType;
}

interface ServiceGridProps {
    items: ServiceItem[];
    className?: string;
}

export function ServiceGrid({ items, className }: ServiceGridProps) {
    return (
        <div className={cn("grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8", className)}>
            {items.map((item, i) => (
                <ScrollReveal key={i} delay={i * 0.05} className="h-full">
                    <div className="group relative h-full bg-white border border-black/5 p-8 hover:border-brand-amber/30 transition-all duration-300 hover:shadow-sm flex flex-col justify-between">

                        <div>
                            {/* Icon or Decorative Line */}
                            <div className="w-8 h-px bg-brand-amber/40 mb-6 group-hover:w-12 transition-all duration-300" />

                            <h3 className="font-serif text-2xl text-brand-charcoal mb-4 group-hover:text-brand-amber transition-colors">
                                {item.title}
                            </h3>

                            <p className="text-brand-gray text-base leading-relaxed mb-8">
                                {item.description}
                            </p>
                        </div>

                        {/* Action (Optional) */}
                        {item.href && (
                            <Link
                                href={item.href}
                                className="inline-flex items-center gap-2 text-xs uppercase tracking-widest text-brand-charcoal/60 font-medium group-hover:text-brand-amber transition-colors mt-auto"
                            >
                                Saiba mais
                                <ArrowUpRight className="w-4 h-4" />
                            </Link>
                        )}
                    </div>
                </ScrollReveal>
            ))}
        </div>
    );
}
