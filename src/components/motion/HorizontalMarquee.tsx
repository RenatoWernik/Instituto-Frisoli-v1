"use client";

import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

interface HorizontalMarqueeProps {
    text: string;
    className?: string;
    separator?: string;
    speed?: number; // seconds for one full cycle
    reverse?: boolean;
}

/**
 * Ambient editorial text strip — slow-moving marquee used as visual separator.
 * Creates rhythm between sections without being a "section" itself.
 */
export function HorizontalMarquee({
    text,
    className,
    separator = " • ",
    speed = 40,
    reverse = false,
}: HorizontalMarqueeProps) {
    const fullText = Array(6).fill(text).join(separator);

    return (
        <div
            className={cn(
                "overflow-hidden whitespace-nowrap py-8 select-none",
                className,
            )}
        >
            <motion.div
                className="inline-flex"
                animate={{ x: reverse ? ["0%", "-50%"] : ["-50%", "0%"] }}
                transition={{
                    duration: speed,
                    ease: "linear",
                    repeat: Infinity,
                }}
            >
                <span className="inline-block font-serif text-[clamp(0.75rem,1.5vw,1rem)] tracking-[0.3em] uppercase opacity-15">
                    {fullText}
                    {separator}
                    {fullText}
                </span>
            </motion.div>
        </div>
    );
}
