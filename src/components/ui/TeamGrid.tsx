"use client";

import { ScrollReveal } from "@/components/motion/ScrollReveal";
import { MaskReveal } from "@/components/motion/MaskReveal";
import Image from "next/image";

interface TeamMember {
    name: string;
    role: string;
    crm?: string;
    imageSrc: string;
    bioShort?: string;
}

interface TeamGridProps {
    members: TeamMember[];
}

export function TeamGrid({ members }: TeamGridProps) {
    return (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-16">
            {members.map((member, i) => (
                <ScrollReveal key={member.name} delay={i * 0.05}>
                    <div className="group">
                        {/* Image */}
                        <div className="aspect-[3/4] relative overflow-hidden bg-brand-cream mb-6">
                            <MaskReveal className="absolute inset-0">
                                <Image
                                    src={member.imageSrc}
                                    alt={member.name}
                                    fill
                                    className="object-cover transition-transform duration-700 group-hover:scale-105"
                                    sizes="(max-width: 768px) 100vw, 33vw"
                                />
                            </MaskReveal>
                        </div>

                        {/* Info */}
                        <div>
                            <p className="whisper text-brand-amber/80 mb-2">{member.role}</p>
                            <h3 className="font-serif text-2xl text-brand-charcoal mb-2 group-hover:text-brand-amber transition-colors">
                                {member.name}
                            </h3>
                            {member.crm && (
                                <p className="text-xs text-brand-gray-light font-mono tracking-wide uppercase">
                                    CRM {member.crm}
                                </p>
                            )}
                        </div>
                    </div>
                </ScrollReveal>
            ))}
        </div>
    );
}
