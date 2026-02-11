"use client";

import { ScrollReveal } from "@/components/motion/ScrollReveal";
import { cn } from "@/lib/utils";

interface Step {
    title: string;
    description: string;
    number?: string;
}

interface ProcessStepsProps {
    steps: Step[];
    className?: string;
}

export function ProcessSteps({ steps, className }: ProcessStepsProps) {
    return (
        <div className={cn("flex flex-col gap-12", className)}>
            {steps.map((step, i) => (
                <ScrollReveal key={i} delay={i * 0.1}>
                    <div className="flex flex-col md:flex-row gap-6 md:gap-12 group">

                        {/* Number / Indicator */}
                        <div className="flex-shrink-0">
                            <span className="font-serif text-4xl md:text-5xl text-brand-amber/20 group-hover:text-brand-amber/80 transition-colors duration-500">
                                {step.number || `0${i + 1}`}
                            </span>
                        </div>

                        {/* Content */}
                        <div className="pt-2 border-t border-brand-charcoal/10 md:border-t-0 md:pt-0 w-full md:border-l md:border-brand-charcoal/10 md:pl-12 group-hover:border-brand-amber/30 transition-colors duration-500">
                            <h3 className="font-serif text-2xl text-brand-charcoal mb-3">
                                {step.title}
                            </h3>
                            <p className="text-brand-gray text-lg leading-relaxed max-w-2xl">
                                {step.description}
                            </p>
                        </div>
                    </div>
                </ScrollReveal>
            ))}
        </div>
    );
}
