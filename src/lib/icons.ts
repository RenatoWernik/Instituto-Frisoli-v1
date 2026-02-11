import {
    Stethoscope,
    Heart,
    Activity,
    UserCheck,
    ShieldCheck,
    Clock,
    Home,
    Headphones,
    Syringe,
    BriefcaseMedical,
    Ambulance,
    HeartHandshake,
    CalendarCheck,
    Star,
    Users,
    Building2,
    type LucideIcon,
} from "lucide-react";

const ICON_MAP: Record<string, LucideIcon> = {
    Stethoscope,
    Heart,
    Activity,
    UserCheck,
    ShieldCheck,
    Clock,
    Home,
    Headphones,
    Syringe,
    BriefcaseMedical,
    Ambulance,
    HeartHandshake,
    CalendarCheck,
    Star,
    Users,
    Building2,
};

export function resolveIcon(name: string): LucideIcon {
    return ICON_MAP[name] || Star;
}
