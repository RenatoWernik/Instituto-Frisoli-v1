"use client";

import { motion } from "framer-motion";
import { cn } from "@/lib/utils";
import Link from "next/link";

interface ButtonProps {
    children: React.ReactNode;
    variant?: "primary" | "mayo" | "secondary" | "ghost" | "outline";
    size?: "sm" | "md" | "lg" | "icon";
    href?: string;
    onClick?: () => void;
    className?: string;
    external?: boolean;
}

const variantStyles = {
    primary: "bg-primary text-white hover:bg-primary/90 shadow-lg shadow-primary/20",
    mayo: "bg-mayo-blue text-white hover:bg-mayo-blue/90 shadow-lg shadow-mayo-blue/20",
    secondary: "bg-black text-white hover:bg-black/90",
    ghost: "bg-transparent text-foreground hover:text-primary hover:bg-primary/5",
    outline: "bg-transparent border-2 border-foreground/20 text-foreground hover:border-primary hover:text-primary hover:bg-primary/5",
};

const sizeStyles = {
    sm: "px-6 py-2.5 text-sm",
    md: "px-8 py-3.5 text-base",
    lg: "px-10 py-4.5 text-lg",
    icon: "p-3",
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
        "inline-flex items-center justify-center gap-2 font-medium tracking-wide rounded-full transition-all duration-300 cursor-pointer",
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
                whileHover={{ y: -4, boxShadow: "0 12px 24px rgba(0,0,0,0.1)" }}
                whileTap={{ scale: 0.98 }}
                transition={{ type: "spring", stiffness: 400, damping: 25 }}
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
            whileHover={{ y: -4, boxShadow: "0 12px 24px rgba(0,0,0,0.1)" }}
            whileTap={{ scale: 0.98 }}
            transition={{ type: "spring", stiffness: 400, damping: 25 }}
        >
            {children}
        </motion.button>
    );
}
