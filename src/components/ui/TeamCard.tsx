"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

interface TeamCardProps {
    name: string;
    role: string;
    crm: string;
    imageSrc: string;
    bio?: string;
    className?: string;
}

export function TeamCard({
    name,
    role,
    crm,
    imageSrc,
    bio,
    className,
}: TeamCardProps) {
    return (
        <motion.div
            className={cn("group relative", className)}
            whileHover={{ y: -4 }}
            transition={{ type: "spring", stiffness: 300, damping: 20 }}
        >
            {/* Image */}
            <div className="relative aspect-[3/4] rounded-2xl overflow-hidden mb-6">
                <Image
                    src={imageSrc}
                    alt={name}
                    fill
                    className="object-cover transition-transform duration-700 group-hover:scale-105"
                    sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                />
                {/* Hover overlay with bio */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-end p-6">
                    {bio && (
                        <p className="text-white/80 text-sm leading-relaxed">
                            {bio}
                        </p>
                    )}
                </div>
            </div>

            {/* Info */}
            <div>
                <h3 className="font-serif text-xl text-foreground group-hover:text-primary transition-colors duration-300">
                    {name}
                </h3>
                <p className="text-primary text-sm font-medium mt-1">{role}</p>
                <p className="text-muted-foreground text-xs mt-1">CRM {crm}</p>
            </div>
        </motion.div>
    );
}
