"use client";

import { motion } from "framer-motion";
import { Code2, Cpu, Gauge, Users } from "lucide-react";
import SectionHeading from "./SectionHeading";
import { profile, stats } from "@/data/resume";

const icons = [Gauge, Users, Code2, Cpu];

const highlights = [
  "End-to-end full stack delivery across React.js and Golang",
  "Performance-obsessed: code-splitting, memoisation, lazy loading",
  "Accessibility-first engineering (WCAG 2.1, NVDA audits)",
  "Microservices, REST APIs, Redis caching & CI/CD pipelines",
];

export default function About() {
  return (
    <section id="about" className="section-pad">
      <SectionHeading
        eyebrow="About"
        title="Engineering scalable, accessible products"
        subtitle="A quick look at what I bring to a team."
      />

      <div className="grid gap-10 lg:grid-cols-[1.2fr_1fr]">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          className="card-glow rounded-3xl glass p-8"
        >
          <p className="text-lg leading-relaxed text-slate-300">{profile.summary}</p>
          <ul className="mt-7 grid gap-3 sm:grid-cols-2">
            {highlights.map((h) => (
              <li key={h} className="flex items-start gap-3 text-sm text-slate-300">
                <span className="mt-1 h-2 w-2 flex-shrink-0 rounded-full bg-gradient-to-r from-accent to-cyan-glow" />
                {h}
              </li>
            ))}
          </ul>
        </motion.div>

        <div className="grid grid-cols-2 gap-4">
          {stats.map((s, i) => {
            const Icon = icons[i % icons.length];
            return (
              <motion.div
                key={s.label}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true, margin: "-60px" }}
                transition={{ delay: i * 0.08 }}
                whileHover={{ y: -6 }}
                className="card-glow flex flex-col justify-between rounded-2xl glass p-5"
              >
                <Icon className="h-6 w-6 text-accent-soft" />
                <div>
                  <div className="font-display text-3xl font-bold gradient-text">{s.value}</div>
                  <div className="mt-1 text-xs text-slate-400">{s.label}</div>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
