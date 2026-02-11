"use client";

import Image from "next/image";
import { MaskReveal } from "@/components/motion/MaskReveal";
import { ScrollReveal } from "@/components/motion/ScrollReveal";
import { cn } from "@/lib/utils";

interface EditorialBlockProps {
    children: React.ReactNode;
    imageSrc: string;
    imageAlt: string;
    reverse?: boolean;
    className?: string;
}

export function EditorialBlock({
    children,
    imageSrc,
    imageAlt,
    reverse = false,
    className,
}: EditorialBlockProps) {
    return (
        <div className={cn(
            "grid grid-cols-1 lg:grid-cols-[3fr_4fr] gap-16 lg:gap-24 items-start",
            reverse && "lg:[&>*:first-child]:order-2 lg:grid-cols-[4fr_3fr]",
            className,
        )}>
            {/* Image — mask reveal */}
            <MaskReveal
                direction={reverse ? "right" : "left"}
                className="relative aspect-[3/4] rounded-none overflow-hidden"
            >
                <Image
                    src={imageSrc}
                    alt={imageAlt}
                    fill
                    className="object-cover"
                    sizes="(max-width: 768px) 100vw, 45vw"
                />
            </MaskReveal>

            {/* Text */}
            <ScrollReveal delay={0.3}>
                <div className="editorial-text lg:pt-16">
                    {children}
                </div>
            </ScrollReveal>
        </div>
    );
}
