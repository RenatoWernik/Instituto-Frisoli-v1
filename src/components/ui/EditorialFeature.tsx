"use client";

import { motion } from "framer-motion";
import { TextReveal } from "@/components/motion/TextReveal";
import { cn } from "@/lib/utils";

interface EditorialFeatureProps {
    number: string;
    title: string;
    description: string;
    align?: "left" | "right";
    className?: string;
}

/**
 * Full-width editorial moment. Not a card. A narrative beat.
 * Large number + title + single sentence. Asymmetric, generous spacing.
 */
export function EditorialFeature({
    number,
    title,
    description,
    align = "left",
    className,
}: EditorialFeatureProps) {
    const isRight = align === "right";

    return (
        <div className={cn(
            "py-24 md:py-32 relative",
            className,
        )}>
            <div className={cn(
                "max-w-[1400px] mx-auto px-8 md:px-16",
                isRight && "flex flex-col items-end text-right",
            )}>
                {/* Number — ambient */}
                <motion.span
                    className="block font-serif text-[clamp(4rem,10vw,8rem)] leading-none text-brand-amber/8 mb-4"
                    initial={{ opacity: 1 }} // Force visible
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                >
                    {number}
                </motion.span>

                {/* Title */}
                <h3 className="font-serif text-2xl md:text-3xl lg:text-4xl text-brand-charcoal mb-6 max-w-lg">
                    <TextReveal as="span" delay={0.1}>
                        {title}
                    </TextReveal>
                </h3>

                {/* Description — restrained */}
                <motion.p
                    className={cn(
                        "text-brand-gray text-base leading-relaxed max-w-md",
                        isRight && "ml-auto",
                    )}
                    initial={{ opacity: 1, y: 0 }} // Force visible
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                >
                    {description}
                </motion.p>
            </div>
        </div>
    );
}
