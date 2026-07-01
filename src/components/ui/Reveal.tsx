"use client";

import { useEffect, useRef, useState, type ReactNode } from "react";
import { cn } from "@/lib/utils";
import { useReducedMotion } from "@/hooks/useReducedMotion";

interface RevealProps {
  children: ReactNode;
  className?: string;
  /** Stagger, in milliseconds. */
  delay?: number;
  as?: "div" | "li" | "section" | "article";
}

/**
 * Fades content up as it scrolls into view. When reduced motion is requested
 * — or before hydration — content is simply shown, never hidden.
 */
export function Reveal({ children, className, delay = 0, as = "div" }: RevealProps) {
  const ref = useRef<HTMLElement | null>(null);
  const reduced = useReducedMotion();
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    if (reduced) {
      setVisible(true);
      return;
    }
    const node = ref.current;
    if (!node) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setVisible(true);
            observer.disconnect();
          }
        });
      },
      { threshold: 0.12, rootMargin: "0px 0px -8% 0px" },
    );

    observer.observe(node);
    return () => observer.disconnect();
  }, [reduced]);

  const Tag = as;

  return (
    <Tag
      ref={ref as React.Ref<never>}
      className={cn("reveal", visible && "is-visible", className)}
      style={reduced ? undefined : { transitionDelay: `${delay}ms` }}
    >
      {children}
    </Tag>
  );
}
