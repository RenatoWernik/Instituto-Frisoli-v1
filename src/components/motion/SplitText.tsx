"use client";

import { motion, type Variants } from "framer-motion";
import { cn } from "@/lib/utils";

interface SplitTextProps {
    children: string;
    className?: string;
    splitBy?: "word" | "char";
    delay?: number;
    stagger?: number;
    duration?: number;
    once?: boolean;
}

export function SplitText({
    children,
    className,
    splitBy = "word",
    delay = 0,
    stagger = 0.04,
    duration = 0.6,
    once = true,
}: SplitTextProps) {
    const units = splitBy === "word" ? children.split(" ") : children.split("");

    const container: Variants = {
        hidden: {},
        visible: {
            transition: {
                staggerChildren: stagger,
                delayChildren: delay,
            },
        },
    };

    const child: Variants = {
        hidden: {
            opacity: 0,
            y: 20,
            filter: "blur(4px)",
        },
        visible: {
            opacity: 1,
            y: 0,
            filter: "blur(0px)",
            transition: {
                duration,
                ease: [0.25, 0.46, 0.45, 0.94],
            },
        },
    };

    return (
        <motion.span
            className={cn("inline-flex flex-wrap", className)}
            variants={container}
            initial="hidden"
            whileInView="visible"
            viewport={{ once }}
        >
            {units.map((unit, i) => (
                <motion.span
                    key={i}
                    variants={child}
                    className="inline-block"
                    style={{ marginRight: splitBy === "word" ? "0.3em" : undefined }}
                >
                    {unit}
                </motion.span>
            ))}
        </motion.span>
    );
}
