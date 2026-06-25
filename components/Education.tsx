"use client";

import { motion } from "framer-motion";
import { GraduationCap } from "lucide-react";
import SectionHeading from "./SectionHeading";
import { education } from "@/data/resume";

export default function Education() {
  return (
    <section id="education" className="section-pad">
      <SectionHeading eyebrow="Education" title="Academic background" />

      <div className="grid gap-5 md:grid-cols-2">
        {education.map((e, i) => (
          <motion.div
            key={e.degree}
            initial={{ opacity: 0, y: 28 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ delay: i * 0.1, duration: 0.5 }}
            className="card-glow flex gap-5 rounded-2xl glass p-7"
          >
            <span className="grid h-12 w-12 flex-shrink-0 place-items-center rounded-xl bg-gradient-to-br from-accent/30 to-cyan-glow/20 text-accent-soft">
              <GraduationCap className="h-6 w-6" />
            </span>
            <div>
              <h3 className="font-display text-lg font-semibold leading-snug text-white">
                {e.degree}
              </h3>
              <p className="mt-1 text-sm text-slate-400">{e.institution}</p>
              <p className="mt-3 inline-block rounded-full bg-accent/10 px-3 py-1 text-xs font-medium text-accent-soft">
                {e.detail}
              </p>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
