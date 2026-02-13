"use client";

import { useEffect, useMemo, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

interface ScrollFloatProps {
    children: string;
    scrollContainerRef?: React.RefObject<HTMLElement>;
    containerClassName?: string;
    textClassName?: string;
    animationDuration?: number;
    ease?: string;
    scrollStart?: string;
    scrollEnd?: string;
    stagger?: number;
}

export function ScrollFloat({
    children,
    scrollContainerRef,
    containerClassName = "",
    textClassName = "",
    animationDuration = 1,
    ease = "power3.out",
    scrollStart = "top 85%",
    scrollEnd = "top 20%",
    stagger = 0.04,
}: ScrollFloatProps) {
    const containerRef = useRef<HTMLHeadingElement>(null);

    const splitText = useMemo(() => {
        const text = typeof children === "string" ? children : "";
        return text.split("").map((char, index) => (
            <span
                className="scroll-float-char"
                style={{ display: "inline-block" }}
                key={index}
            >
                {char === " " ? "\u00A0" : char}
            </span>
        ));
    }, [children]);

    useEffect(() => {
        const el = containerRef.current;
        if (!el) return;

        const scroller =
            scrollContainerRef && scrollContainerRef.current
                ? scrollContainerRef.current
                : window;

        const charElements = el.querySelectorAll(".scroll-float-char");

        gsap.fromTo(
            charElements,
            {
                willChange: "opacity, transform",
                opacity: 0,
                yPercent: 50,
                scaleY: 1.15,
                scaleX: 0.95,
                transformOrigin: "50% 100%",
            },
            {
                duration: animationDuration,
                ease: ease,
                opacity: 1,
                yPercent: 0,
                scaleY: 1,
                scaleX: 1,
                stagger: stagger,
                scrollTrigger: {
                    trigger: el,
                    scroller,
                    start: scrollStart,
                    end: scrollEnd,
                    scrub: 1.5,
                },
            }
        );

        return () => {
            ScrollTrigger.getAll().forEach((trigger) => {
                if (trigger.trigger === el) {
                    trigger.kill();
                }
            });
        };
    }, [scrollContainerRef, animationDuration, ease, scrollStart, scrollEnd, stagger]);

    return (
        <h2 ref={containerRef} className={`overflow-hidden ${containerClassName}`}>
            <span className={`inline-block ${textClassName}`}>{splitText}</span>
        </h2>
    );
}
