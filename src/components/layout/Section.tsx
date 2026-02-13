import { cn } from "@/lib/utils";

interface SectionProps {
    children: React.ReactNode;
    id?: string;
    variant?: "light" | "white" | "surface" | "dark" | "brand" | "muted";
    className?: string;
    size?: "default" | "tight" | "wide" | "full";
}

const variantStyles = {
    light: "bg-surface text-foreground",
    white: "bg-background text-foreground",
    surface: "bg-surface text-foreground",
    dark: "bg-black text-white",
    brand: "bg-primary text-white",
    muted: "bg-muted text-foreground",
};

const sizeStyles = {
    default: "py-20 md:py-28 px-6 md:px-12 lg:px-20",
    tight: "py-12 md:py-16 px-6 md:px-12 lg:px-20",
    wide: "py-20 md:py-28 px-0",
    full: "py-0 px-0",
};

export function Section({
    children,
    id,
    variant = "white",
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
