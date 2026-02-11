"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import { cn } from "@/lib/utils";

interface ParallaxProps {
    children: React.ReactNode;
    className?: string;
    speed?: number; // 0.1 = subtle, 0.5 = dramatic
    direction?: "up" | "down";
}

export function Parallax({
    children,
    className,
    speed = 0.15,
    direction = "up",
}: ParallaxProps) {
    const ref = useRef<HTMLDivElement>(null);
    const { scrollYProgress } = useScroll({
        target: ref,
        offset: ["start end", "end start"],
    });

    const factor = direction === "up" ? -1 : 1;
    const y = useTransform(scrollYProgress, [0, 1], [factor * speed * 100, factor * speed * -100]);

    return (
        <div ref={ref} className={cn("overflow-hidden", className)}>
            <motion.div style={{ y }}>
                {children}
            </motion.div>
        </div>
    );
}
