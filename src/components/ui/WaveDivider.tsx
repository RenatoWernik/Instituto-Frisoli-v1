"use client";

import { cn } from "@/lib/utils";

interface WaveDividerProps {
  variant?: "primary" | "white" | "black" | "offwhite";
  flip?: boolean;
  className?: string;
}

export function WaveDivider({ variant = "primary", flip = false, className }: WaveDividerProps) {
  const fills: Record<string, string> = {
    primary: "#BE5103",
    white: "#F8F5F0",
    black: "#000000",
    offwhite: "#F8F5F0",
  };

  return (
    <div
      className={cn(
        "w-full overflow-hidden leading-[0] pointer-events-none",
        flip && "rotate-180",
        className
      )}
    >
      <svg
        viewBox="0 0 1440 120"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="w-full h-auto block"
        preserveAspectRatio="none"
      >
        <path
          d="M0,64 C180,120 360,0 540,48 C720,96 900,16 1080,56 C1200,80 1320,32 1440,64 L1440,120 L0,120 Z"
          fill={fills[variant]}
        />
      </svg>
    </div>
  );
}

export function WaveDividerSubtle({ variant = "primary", flip = false, className }: WaveDividerProps) {
  const fills: Record<string, string> = {
    primary: "#BE5103",
    white: "#F8F5F0",
    black: "#000000",
    offwhite: "#F8F5F0",
  };

  return (
    <div
      className={cn(
        "w-full overflow-hidden leading-[0] pointer-events-none",
        flip && "rotate-180",
        className
      )}
    >
      <svg
        viewBox="0 0 1440 80"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="w-full h-auto block"
        preserveAspectRatio="none"
      >
        <path
          d="M0,40 C240,80 480,0 720,40 C960,80 1200,0 1440,40 L1440,80 L0,80 Z"
          fill={fills[variant]}
        />
      </svg>
    </div>
  );
}
