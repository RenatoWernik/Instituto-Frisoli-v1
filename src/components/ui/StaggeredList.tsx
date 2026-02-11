"use client";

import { motion, type Variants } from "framer-motion";
import { cn } from "@/lib/utils";

interface StaggeredListProps {
    items: { title: string; description?: string }[];
    className?: string;
}

/**
 * Vertical editorial list with subtle horizontal offset on each item.
 * Hover shifts item right with amber accent line. No cards. Pure typography.
 */
export function StaggeredList({ items, className }: StaggeredListProps) {
    const container: Variants = {
        hidden: {},
        visible: {
            transition: {
                staggerChildren: 0.08,
                delayChildren: 0.2,
            },
        },
    };

    const item: Variants = {
        hidden: {
            clipPath: "inset(0% 0% 100% 0%)",
            opacity: 0,
        },
        visible: {
            clipPath: "inset(0% 0% 0% 0%)",
            opacity: 1,
            transition: {
                clipPath: { duration: 0.8, ease: [0.77, 0, 0.175, 1] },
                opacity: { duration: 0.01 },
            },
        },
    };

    return (
        <motion.ul
            className={cn("space-y-0", className)}
            variants={container}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.1 }}
        >
            {items.map((entry, i) => (
                <motion.li
                    key={entry.title}
                    variants={item}
                    className="group border-t border-brand-charcoal/8 last:border-b"
                >
                    <div
                        className="flex items-baseline justify-between gap-8 py-6 md:py-8 cursor-default transition-all duration-500 group-hover:pl-4"
                        style={{ paddingLeft: `${(i % 3) * 8}px` }}
                    >
                        <div className="flex items-baseline gap-6">
                            {/* Amber accent on hover */}
                            <span className="w-0 group-hover:w-6 h-px bg-brand-amber transition-all duration-500" />
                            <h4 className="font-serif text-xl md:text-2xl text-brand-charcoal group-hover:text-brand-amber transition-colors duration-300">
                                {entry.title}
                            </h4>
                        </div>
                        {entry.description && (
                            <p className="hidden md:block text-brand-gray text-sm max-w-xs text-right">
                                {entry.description}
                            </p>
                        )}
                    </div>
                </motion.li>
            ))}
        </motion.ul>
    );
}
