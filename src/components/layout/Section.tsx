import { cn } from "@/lib/utils";

interface SectionProps {
    children: React.ReactNode;
    id?: string;
    variant?: "light" | "white" | "dark" | "brand" | "muted";
    className?: string;
    size?: "default" | "tight" | "wide" | "full";
}

const variantStyles = {
    light: "bg-brand-light text-brand-charcoal",
    white: "bg-brand-white text-brand-charcoal",
    dark: "bg-brand-black text-brand-white",
    brand: "bg-brand-amber text-white",
    muted: "bg-brand-cream text-brand-charcoal",
};

const sizeStyles = {
    default: "py-[var(--spacing-section)] px-6 md:px-12 lg:px-20",
    tight: "py-[var(--spacing-section-sm)] px-6 md:px-12 lg:px-20",
    wide: "py-[var(--spacing-section)] px-0",
    full: "py-0 px-0",
};

export function Section({
    children,
    id,
    variant = "light",
    className,
    size = "default",
}: SectionProps) {
    return (
        <section
            id={id}
            className={cn(variantStyles[variant], sizeStyles[size], className)}
        >
            <div className={cn(
                size !== "wide" && size !== "full" && "max-w-7xl mx-auto",
            )}>
                {children}
            </div>
        </section>
    );
}
