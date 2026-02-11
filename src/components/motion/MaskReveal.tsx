"use client";

import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

interface MaskRevealProps {
    children: React.ReactNode;
    className?: string;
    direction?: "center" | "left" | "right" | "bottom";
    delay?: number;
    duration?: number;
    once?: boolean;
}

/**
 * Image/content reveal via clipPath inset animation.
 * Content expands from a thin slit to full visibility.
 * Subtle scale-down creates organic, cinematic feel.
 */
export function MaskReveal({
    children,
    className,
    direction = "center",
    delay = 0,
    duration = 1.6,
    once = true,
}: MaskRevealProps) {

    // Default to fully visible logic
    const initialClip = "inset(0% 0% 0% 0%)";

    return (
        <motion.div
            className={cn("overflow-hidden", className)}
            initial={{
                clipPath: initialClip,
                scale: 1, // Start at normal scale
            }}
            whileInView={{
                clipPath: "inset(0% 0% 0% 0%)",
                scale: 1,
            }}
            viewport={{ once, amount: 0.15 }}
            transition={{
                clipPath: {
                    duration,
                    delay,
                    ease: [0.77, 0, 0.175, 1],
                },
                scale: {
                    duration: duration + 0.4,
                    delay,
                    ease: [0.16, 1, 0.3, 1],
                },
            }}
        >
            {children}
        </motion.div>
    );
}
