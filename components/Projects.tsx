"use client";

import { motion } from "framer-motion";
import { Github, Target, Trophy } from "lucide-react";
import SectionHeading from "./SectionHeading";
import { projects } from "@/data/resume";

export default function Projects() {
  return (
    <section id="projects" className="section-pad">
      <SectionHeading
        eyebrow="Projects"
        title="Selected work & highlights"
        subtitle="Production systems I designed, built, and shipped — with the problems they solved."
      />

      <div className="grid gap-5 md:grid-cols-2">
        {projects.map((p, i) => (
          <motion.article
            key={p.title}
            initial={{ opacity: 0, y: 28 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ delay: (i % 2) * 0.08, duration: 0.5 }}
            whileHover={{ y: -6 }}
            className="card-glow group relative flex flex-col rounded-2xl glass p-7"
          >
            <div className="mb-4 flex items-start justify-between">
              <span className="font-display text-5xl font-bold text-white/5 transition-colors group-hover:text-accent/20">
                {String(i + 1).padStart(2, "0")}
              </span>
              <a
                href={p.github}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={`View ${p.title} on GitHub`}
                className="grid h-10 w-10 place-items-center rounded-xl glass text-slate-400 transition-all hover:scale-110 hover:text-white"
              >
                <Github className="h-4 w-4" />
              </a>
            </div>

            <h3 className="font-display text-xl font-semibold text-white">{p.title}</h3>
            <p className="mt-2 text-sm leading-relaxed text-slate-400">{p.blurb}</p>

            <div className="mt-5 space-y-3 border-t border-white/5 pt-5">
              <div className="flex items-start gap-3">
                <span className="mt-0.5 grid h-6 w-6 flex-shrink-0 place-items-center rounded-md bg-pink-glow/10 text-pink-glow">
                  <Target className="h-3.5 w-3.5" />
                </span>
                <p className="text-xs leading-relaxed text-slate-400">
                  <span className="font-semibold text-slate-300">Challenge · </span>
                  {p.challenge}
                </p>
              </div>
              <div className="flex items-start gap-3">
                <span className="mt-0.5 grid h-6 w-6 flex-shrink-0 place-items-center rounded-md bg-emerald-400/10 text-emerald-400">
                  <Trophy className="h-3.5 w-3.5" />
                </span>
                <p className="text-xs leading-relaxed text-slate-400">
                  <span className="font-semibold text-slate-300">Impact · </span>
                  {p.achievement}
                </p>
              </div>
            </div>

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
