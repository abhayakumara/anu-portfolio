"use client";

import dynamic from "next/dynamic";
import { useEffect, useRef, useState } from "react";

const Scene = dynamic(() => import("./Scene"), {
  ssr: false,
  loading: () => null,
});

/**
 * Lazily mounts the Three.js scene only on capable, non-reduced-motion,
 * larger-than-mobile devices, and after first paint. Pauses the render loop
 * when the hero scrolls out of view to protect performance and battery.
 */
export default function Hero3D() {
  const [show, setShow] = useState(false);
  const [inView, setInView] = useState(true);
  const wrapRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    const smallScreen = window.matchMedia("(max-width: 640px)").matches;
    if (reduced || smallScreen) return;

    const idle =
      (window as unknown as { requestIdleCallback?: (cb: () => void) => number })
        .requestIdleCallback ?? ((cb: () => void) => setTimeout(cb, 300));
    const id = idle(() => setShow(true));
    return () => {
      if (typeof id === "number") clearTimeout(id);
    };
  }, []);

  useEffect(() => {
    const el = wrapRef.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      ([entry]) => setInView(entry.isIntersecting),
      { threshold: 0.05 }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, [show]);

  return (
    <div ref={wrapRef} className="absolute inset-0 -z-0" aria-hidden="true">
      {/* Gradient fallback that always renders (and stays on mobile) */}
      <div className="absolute inset-0">
        <div className="absolute left-1/2 top-1/2 h-[26rem] w-[26rem] -translate-x-1/2 -translate-y-1/2 rounded-full bg-accent/20 blur-[90px]" />
      </div>
      {show && <Scene active={inView} />}
    </div>
  );
}
