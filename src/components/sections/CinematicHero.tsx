"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { TextReveal } from "@/components/motion/TextReveal";
import { cn } from "@/lib/utils";

interface CinematicHeroProps {
    variant?: "home" | "page";
    imageSrc: string;
    imageAlt: string;
    headline: string;
    subheadline?: string;
    label?: string;
}

export function CinematicHero({
    variant = "home",
    imageSrc,
    imageAlt,
    headline,
    subheadline,
    label,
}: CinematicHeroProps) {
    if (variant === "home") return <ApertureHero imageSrc={imageSrc} imageAlt={imageAlt} headline={headline} label={label} />;
    return <DivideHero imageSrc={imageSrc} imageAlt={imageAlt} headline={headline} subheadline={subheadline} label={label} />;
}

/* ─── The Aperture ─── */
function ApertureHero({
    imageSrc,
    imageAlt,
    headline,
    label,
}: Omit<CinematicHeroProps, "variant" | "subheadline">) {
    return (
        <section className="relative w-full h-screen overflow-hidden bg-brand-black">
            {/* Image — reveals via clipPath — DISABLED INITIAL HIDE MASK for reliability */}
            <motion.div
                className="absolute inset-0"
                initial={{ clipPath: "inset(0% 0% 0% 0%)" }}
                animate={{ clipPath: "inset(0% 0% 0% 0%)" }}
                transition={{ duration: 2.2, delay: 0.1, ease: [0.77, 0, 0.175, 1] }}
            >
                <motion.div
                    className="absolute inset-0"
                    initial={{ scale: 1.05 }}
                    animate={{ scale: 1 }}
                    transition={{ duration: 3, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
                >
                    <Image
                        src={imageSrc}
                        alt={imageAlt}
                        fill
                        priority
                        className="object-cover"
                        sizes="100vw"
                    />
                </motion.div>
                {/* Cinematic vignette */}
                <div className="absolute inset-0 bg-gradient-to-t from-brand-black/70 via-transparent to-brand-black/20" />
                <div className="absolute inset-0 bg-gradient-to-r from-brand-black/50 to-transparent" />
            </motion.div>

            {/* Content — bottom-left, editorial */}
            <div className="absolute bottom-0 left-0 right-0 z-10 px-8 md:px-16 pb-16 md:pb-24">
                <div className="max-w-[1400px] mx-auto">
                    {label && (
                        <motion.p
                            className="whisper text-brand-amber/70 mb-6"
                            initial={{ opacity: 1 }}
                            animate={{ opacity: 1 }}
                        >
                            {label}
                        </motion.p>
                    )}
                    <h1 className="text-white max-w-[800px]">
                        <TextReveal as="span" delay={0.5} stagger={0.06}>
                            {headline}
                        </TextReveal>
                    </h1>
                </div>
            </div>

            {/* Scroll line — thin amber */}
            <motion.div
                className="absolute bottom-0 left-1/2 -translate-x-1/2 z-10"
                initial={{ opacity: 1 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 1, duration: 1 }}
            >
                <motion.div
                    className="w-px h-16 bg-brand-amber/40"
                    animate={{ scaleY: [1, 0.3, 1] }}
                    transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
                    style={{ originY: 1 }}
                />
            </motion.div>
        </section>
    );
}

/* ─── The Divide ─── */
function DivideHero({
    imageSrc,
    imageAlt,
    headline,
    subheadline,
    label,
}: Omit<CinematicHeroProps, "variant">) {
    return (
        <section className="relative w-full min-h-[70vh] grid grid-cols-1 lg:grid-cols-[2fr_3fr] overflow-hidden">
            {/* Left — Text on cream */}
            <div className="relative bg-brand-cream flex items-end px-8 md:px-16 pb-16 pt-40 lg:pb-24 lg:pt-48">
                {/* Rotated label */}
                {label && (
                    <motion.span
                        className="hidden lg:block absolute left-6 top-1/2 -translate-y-1/2 -rotate-90 origin-center whisper text-brand-amber/50 tracking-[0.3em]"
                        initial={{ opacity: 1 }}
                        animate={{ opacity: 1 }}
                    >
                        {label}
                    </motion.span>
                )}

                <div className="max-w-lg">
                    {label && (
                        <motion.p
                            className="whisper text-brand-amber/70 mb-6 lg:hidden"
                            initial={{ opacity: 1 }}
                            animate={{ opacity: 1 }}
                        >
                            {label}
                        </motion.p>
                    )}
                    <h1 className="text-brand-charcoal mb-6">
                        <TextReveal as="span" delay={0.2} stagger={0.07}>
                            {headline}
                        </TextReveal>
                    </h1>
                    {subheadline && (
                        <motion.p
                            className="text-brand-gray text-base leading-relaxed max-w-md"
                            initial={{ opacity: 1, y: 0 }}
                            animate={{ opacity: 1, y: 0 }}
                        >
                            {subheadline}
                        </motion.p>
                    )}
                </div>
            </div>

            {/* Right — Masked image */}
            <motion.div
                className="relative min-h-[50vh] lg:min-h-0"
                initial={{ clipPath: "inset(0 0% 0 0)" }}
                animate={{ clipPath: "inset(0 0% 0 0)" }}
            >
                <div className="absolute inset-0">
                    <Image
                        src={imageSrc}
                        alt={imageAlt}
                        fill
                        priority
                        className="object-cover"
                        sizes="(max-width: 1024px) 100vw, 60vw"
                    />
                </div>
            </motion.div>
        </section>
    );
}
