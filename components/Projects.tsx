"use client";

import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import SectionHeading from "./SectionHeading";
import { projects } from "@/data/resume";

export default function Projects() {
  return (
    <section id="projects" className="section-pad">
      <SectionHeading
        eyebrow="Projects"
        title="Selected work & highlights"
        subtitle="Production systems I designed, built, and shipped."
      />

      <div className="grid gap-5 md:grid-cols-2">
        {projects.map((p, i) => (
          <motion.article
            key={p.title}
            initial={{ opacity: 0, y: 28 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ delay: (i % 2) * 0.08, duration: 0.5 }}
            className="card-glow group relative flex flex-col rounded-2xl glass p-7"
          >
            <div className="mb-4 flex items-start justify-between">
              <span className="font-display text-5xl font-bold text-white/5 transition-colors group-hover:text-accent/20">
                {String(i + 1).padStart(2, "0")}
              </span>
              <ArrowUpRight className="h-5 w-5 text-slate-600 transition-all group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-accent-soft" />
            </div>
            <h3 className="font-display text-xl font-semibold text-white">{p.title}</h3>
            <p className="mt-3 flex-1 text-sm leading-relaxed text-slate-400">{p.blurb}</p>
            <div className="mt-5 flex flex-wrap gap-2">
              {p.tags.map((t) => (
                <span
                  key={t}
                  className="rounded-md border border-white/5 bg-white/[0.04] px-2 py-0.5 text-[11px] font-medium text-slate-300"
                >
                  {t}
                </span>
              ))}
            </div>
          </motion.article>
        ))}
      </div>
    </section>
  );
}
