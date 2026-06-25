"use client";

import { motion } from "framer-motion";
import { Briefcase, MapPin } from "lucide-react";
import SectionHeading from "./SectionHeading";
import { experiences } from "@/data/resume";

export default function Experience() {
  return (
    <section id="experience" className="section-pad">
      <SectionHeading
        eyebrow="Experience"
        title="Where I've made an impact"
        subtitle="4+ years shipping production full stack applications."
      />

      <div className="relative">
        {/* timeline line */}
        <div className="absolute left-4 top-2 h-full w-px bg-gradient-to-b from-accent via-cyan-glow/50 to-transparent sm:left-1/2" />

        <div className="space-y-10">
          {experiences.map((exp, i) => (
            <motion.div
              key={exp.role + exp.period}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.55 }}
              className={`relative pl-12 sm:w-1/2 sm:pl-0 ${
                i % 2 === 0
                  ? "sm:ml-auto sm:pl-12"
                  : "sm:mr-auto sm:pr-12 sm:text-left"
              }`}
            >
              {/* node */}
              <span className="absolute left-[9px] top-2 grid h-4 w-4 place-items-center rounded-full bg-ink-950 ring-2 ring-accent sm:left-auto sm:right-auto">
                <span className="h-1.5 w-1.5 rounded-full bg-accent" />
              </span>

              <div className="card-glow rounded-2xl glass p-6">
                <div className="mb-3 flex flex-wrap items-center justify-between gap-2">
                  <span className="inline-flex items-center gap-2 rounded-full bg-accent/10 px-3 py-1 text-xs font-medium text-accent-soft">
                    <Briefcase className="h-3.5 w-3.5" />
                    {exp.period}
                  </span>
                </div>
                <h3 className="font-display text-xl font-semibold text-white">{exp.role}</h3>
                <p className="mt-0.5 text-sm font-medium text-accent-soft">{exp.company}</p>
                <p className="mt-1 flex items-center gap-1.5 text-xs text-slate-500">
                  <MapPin className="h-3.5 w-3.5" /> {exp.location}
                </p>
                <ul className="mt-4 space-y-2.5">
                  {exp.highlights.map((h, j) => (
                    <li key={j} className="flex items-start gap-2.5 text-sm leading-relaxed text-slate-300">
                      <span className="mt-1.5 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-gradient-to-r from-accent to-cyan-glow" />
                      {h}
                    </li>
                  ))}
                </ul>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
