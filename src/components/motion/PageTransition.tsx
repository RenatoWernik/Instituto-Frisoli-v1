"use client";

import { motion } from "framer-motion";
import { useReducedMotion } from "./MotionProvider";

const variants = {
    initial: { opacity: 1, y: 0 }, // Changed from opacity: 0, y: 20 to ensure visibility
    enter: {
        opacity: 1,
        y: 0,
        transition: { duration: 0.8, ease: [0.25, 0.46, 0.45, 0.94] }
    },
    exit: {
        opacity: 0,
        y: -10,
        transition: { duration: 0.4, ease: [0.25, 0.46, 0.45, 0.94] }
    },
};

const staticVariants = {
    initial: { opacity: 1 },
    enter: { opacity: 1 },
    exit: { opacity: 1 },
};

export function PageTransition({ children }: { children: React.ReactNode }) {
    const reduced = useReducedMotion();

    return (
        <motion.div
            initial="initial"
            animate="enter"
            exit="exit"
            variants={reduced ? staticVariants : variants}
        >
            {children}
        </motion.div>
    );
}
