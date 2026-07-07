"use client";

import { techMarquee } from "@/data/resume";

export default function TechMarquee() {
  const items = [...techMarquee, ...techMarquee];
  return (
    <div className="relative overflow-hidden border-y border-white/5 py-6">
      <div className="mask-fade-x flex w-max animate-marquee gap-4 hover:[animation-play-state:paused]">
        {items.map((tech, i) => (
          <span
            key={i}
            className="flex items-center gap-2 whitespace-nowrap rounded-full border border-white/10 bg-white/[0.03] px-5 py-2 text-sm font-medium text-slate-300"
          >
            <span className="h-1.5 w-1.5 rounded-full bg-gradient-to-r from-accent to-cyan-glow" />
            {tech}
          </span>
        ))}
      </div>
    </div>
  );
}
