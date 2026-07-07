"use client";

import { useRef, useState } from "react";
import { motion } from "framer-motion";

type Props = {
  children: React.ReactNode;
  className?: string;
  strength?: number;
  as?: "button" | "a";
  href?: string;
  download?: boolean;
  target?: string;
  rel?: string;
  onClick?: () => void;
  type?: "button" | "submit";
  disabled?: boolean;
  ariaLabel?: string;
};

export default function MagneticButton({
  children,
  className = "",
  strength = 0.35,
  as = "button",
  href,
  download,
  target,
  rel,
  onClick,
  type,
  disabled,
  ariaLabel,
}: Props) {
  const ref = useRef<HTMLElement>(null);
  const [pos, setPos] = useState({ x: 0, y: 0 });

  const handleMove = (e: React.MouseEvent) => {
    const el = ref.current;
    if (!el) return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    const rect = el.getBoundingClientRect();
    const x = (e.clientX - (rect.left + rect.width / 2)) * strength;
    const y = (e.clientY - (rect.top + rect.height / 2)) * strength;
    setPos({ x, y });
  };
  const reset = () => setPos({ x: 0, y: 0 });

  const MotionTag = (as === "a" ? motion.a : motion.button) as typeof motion.button;

  return (
    <MotionTag
      // @ts-expect-error polymorphic ref
      ref={ref}
      href={href}
      download={download}
      target={target}
      rel={rel}
      onClick={onClick}
      type={type}
      disabled={disabled}
      aria-label={ariaLabel}
      onMouseMove={handleMove}
      onMouseLeave={reset}
      animate={{ x: pos.x, y: pos.y }}
      transition={{ type: "spring", stiffness: 220, damping: 16, mass: 0.5 }}
      className={className}
    >
      {children}
    </MotionTag>
  );
}
