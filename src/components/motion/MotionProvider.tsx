"use client";

import { AnimatePresence } from "framer-motion";
import { usePathname } from "next/navigation";
import { createContext, useContext, useEffect, useState } from "react";

const ReducedMotionContext = createContext(false);

export function useReducedMotion() {
    return useContext(ReducedMotionContext);
}

export function MotionProvider({ children }: { children: React.ReactNode }) {
    const pathname = usePathname();
    const [reducedMotion, setReducedMotion] = useState(false);

    useEffect(() => {
        const mq = window.matchMedia("(prefers-reduced-motion: reduce)");
        setReducedMotion(mq.matches);
        const handler = (e: MediaQueryListEvent) => setReducedMotion(e.matches);
        mq.addEventListener("change", handler);
        return () => mq.removeEventListener("change", handler);
    }, []);

    return (
        <ReducedMotionContext.Provider value={reducedMotion}>
            <AnimatePresence mode="wait">
                <div key={pathname}>
                    {children}
                </div>
            </AnimatePresence>
        </ReducedMotionContext.Provider>
    );
}
