"use client";

import { motion, type Variants } from "framer-motion";
import { cn } from "@/lib/utils";

interface TextRevealProps {
    children: string;
    className?: string;
    delay?: number;
    stagger?: number;
    as?: "h1" | "h2" | "h3" | "p" | "span";
    once?: boolean;
}

/**
 * Editorial text reveal — each line slides up from behind a clipping mask.
 * No opacity fade. Pure positional reveal for a bespoke, print-editorial feel.
 */
export function TextReveal({
    children,
    className,
    delay = 0,
    stagger = 0.08,
    as: Tag = "h2",
    once = true,
}: TextRevealProps) {
    const words = children.split(" ");

    const container: Variants = {
        hidden: {},
        visible: {
            transition: {
                staggerChildren: stagger,
                delayChildren: delay,
            },
        },
    };

    const wordVariant: Variants = {
        hidden: {
            y: "0%", // Force visible (was 110%)
        },
        visible: {
            y: "0%",
            transition: {
                duration: 1.2,
                ease: [0.16, 1, 0.3, 1],
            },
        },
    };

    return (
        <Tag className={cn("leading-[1.1]", className)}>
            <motion.span
                className="inline-flex flex-wrap"
                variants={container}
                initial="hidden"
                whileInView="visible"
                viewport={{ once }}
            >
                {words.map((word, i) => (
                    <span
                        key={i}
                        className="inline-block overflow-visible mr-[0.3em]" // Changed overflow-hidden to overflow-visible for safety
                    >
                        <motion.span
                            className="inline-block will-change-transform"
                            variants={wordVariant}
                        >
                            {word}
                        </motion.span>
                    </span>
                ))}
            </motion.span>
        </Tag>
    );
}
