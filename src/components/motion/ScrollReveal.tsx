"use client";

import { motion, type Variants } from "framer-motion";
import { cn } from "@/lib/utils";

interface ScrollRevealProps {
    children: React.ReactNode;
    className?: string;
    delay?: number;
    duration?: number;
    once?: boolean;
    amount?: number;
    staggerChildren?: number;
    as?: "div" | "section" | "article" | "li" | "span";
}

/**
 * Refined scroll reveal — uses clip-path wipe instead of opacity fade.
 * Much more editorial and bespoke than standard fade-up.
 */
export function ScrollReveal({
    children,
    className,
    delay = 0,
    duration = 1,
    once = true,
    amount = 0.2,
    staggerChildren,
    as = "div",
}: ScrollRevealProps) {
    const container: Variants = {
        hidden: {
            clipPath: "inset(0% 0% 0% 0%)", // Force visible
            opacity: 1, // Force visible
        },
        visible: {
            clipPath: "inset(0% 0% 0% 0%)",
            opacity: 1,
            transition: {
                clipPath: { duration, delay, ease: [0.77, 0, 0.175, 1] },
                opacity: { duration: 0.01, delay },
                ...(staggerChildren ? { staggerChildren, delayChildren: delay } : {}),
            },
        },
    };

    const MotionTag = motion.create(as);

    return (
        <MotionTag
            className={cn(className)}
            variants={container}
            initial="hidden" // Still triggers 'hidden' variant, but now 'hidden' is visible
            whileInView="visible"
            viewport={{ once, amount }}
        >
            {children}
        </MotionTag>
    );
}

export function RevealItem({
    children,
    className,
}: {
    children: React.ReactNode;
    className?: string;
}) {
    const item: Variants = {
        hidden: { y: 0, opacity: 1 }, // Force visible
        visible: {
            y: 0,
            opacity: 1,
            transition: { duration: 0.9, ease: [0.16, 1, 0.3, 1] },
        },
    };

    return (
        <motion.div className={cn(className)} variants={item}>
            {children}
        </motion.div>
    );
}
