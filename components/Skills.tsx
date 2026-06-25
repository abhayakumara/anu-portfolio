"use client";

import { motion } from "framer-motion";
import {
  Cloud,
  GitBranch,
  Layout,
  Server,
  ShieldCheck,
  Sparkles,
  type LucideIcon,
} from "lucide-react";
import SectionHeading from "./SectionHeading";
import { skillCategories } from "@/data/resume";

const iconMap: Record<string, LucideIcon> = {
  layout: Layout,
  server: Server,
  sparkles: Sparkles,
  cloud: Cloud,
  "shield-check": ShieldCheck,
  "git-branch": GitBranch,
};

export default function Skills() {
  return (
    <section id="skills" className="section-pad">
      <SectionHeading
        eyebrow="Skills"
        title="The stack I build with"
        subtitle="A full toolkit across frontend, backend, AI, cloud, and quality engineering."
      />

      <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
        {skillCategories.map((cat, i) => {
          const Icon = iconMap[cat.icon] ?? Layout;
          return (
            <motion.div
              key={cat.title}
              initial={{ opacity: 0, y: 28 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ delay: (i % 3) * 0.08, duration: 0.5 }}
              className="card-glow group rounded-2xl glass p-6"
            >
              <div className="mb-4 flex items-center gap-3">
                <span className="grid h-11 w-11 place-items-center rounded-xl bg-gradient-to-br from-accent/30 to-cyan-glow/20 text-accent-soft transition-transform group-hover:scale-110">
                  <Icon className="h-5 w-5" />
                </span>
                <h3 className="font-display text-lg font-semibold text-white">{cat.title}</h3>
              </div>
              <div className="flex flex-wrap gap-2">
                {cat.skills.map((skill) => (
                  <span
                    key={skill}
                    className="rounded-lg border border-white/5 bg-white/[0.04] px-2.5 py-1 text-xs text-slate-300 transition-colors hover:border-accent/40 hover:text-white"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </motion.div>
          );
        })}
      </div>
    </section>
  );
}
