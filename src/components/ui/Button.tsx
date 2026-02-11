"use client";

import { motion } from "framer-motion";
import { cn } from "@/lib/utils";
import Link from "next/link";

interface ButtonProps {
    children: React.ReactNode;
    variant?: "primary" | "secondary" | "ghost" | "outline";
    size?: "sm" | "md" | "lg";
    href?: string;
    onClick?: () => void;
    className?: string;
    external?: boolean;
}

const variantStyles = {
    primary: "bg-brand-amber text-white hover:bg-brand-amber-dark shadow-sm",
    secondary: "bg-brand-charcoal text-white hover:bg-brand-black",
    ghost: "bg-transparent text-brand-charcoal hover:text-brand-amber",
    outline: "bg-transparent border-2 border-brand-charcoal text-brand-charcoal hover:border-brand-amber hover:text-brand-amber",
};

const sizeStyles = {
    sm: "px-5 py-2.5 text-sm",
    md: "px-7 py-3.5 text-base",
    lg: "px-10 py-4.5 text-lg",
};

export function Button({
    children,
    variant = "primary",
    size = "md",
    href,
    onClick,
    className,
    external,
}: ButtonProps) {
    const classes = cn(
        "inline-flex items-center justify-center gap-2 font-medium tracking-wide rounded-full transition-colors duration-300 cursor-pointer",
        variantStyles[variant],
        sizeStyles[size],
        className,
    );

    if (href && external) {
        return (
            <motion.a
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                className={classes}
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                transition={{ type: "spring" as const, stiffness: 400, damping: 25 }}
            >
                {children}
            </motion.a>
        );
    }

    if (href) {
        return (
            <Link href={href} className={classes}>
                {children}
            </Link>
        );
    }

    return (
        <motion.button
            onClick={onClick}
            className={classes}
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            transition={{ type: "spring" as const, stiffness: 400, damping: 25 }}
        >
            {children}
        </motion.button>
    );
}
