"use client";

import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import { ArrowDown, Download, Github, Linkedin, Mail, MapPin } from "lucide-react";
import { profile } from "@/data/resume";
import Hero3D from "./three/Hero3D";
import MagneticButton from "./MagneticButton";

function useTypewriter(words: string[], speed = 90, pause = 1600) {
  const [index, setIndex] = useState(0);
  const [text, setText] = useState("");
  const [deleting, setDeleting] = useState(false);

  useEffect(() => {
    const current = words[index % words.length];
    let timeout: ReturnType<typeof setTimeout>;

    if (!deleting && text === current) {
      timeout = setTimeout(() => setDeleting(true), pause);
    } else if (deleting && text === "") {
      setDeleting(false);
      setIndex((i) => i + 1);
    } else {
      timeout = setTimeout(
        () => {
          setText((t) =>
            deleting ? current.slice(0, t.length - 1) : current.slice(0, t.length + 1)
          );
        },
        deleting ? speed / 2 : speed
      );
    }
    return () => clearTimeout(timeout);
  }, [text, deleting, index, words, speed, pause]);

  return text;
}

const container = {
  hidden: {},
  show: { transition: { staggerChildren: 0.12, delayChildren: 0.2 } },
};
const item = {
  hidden: { opacity: 0, y: 24 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] } },
};

export default function Hero() {
  const typed = useTypewriter(profile.roles);

  return (
    <section
      id="home"
      className="relative flex min-h-[100svh] items-center overflow-hidden"
    >
      <div className="pointer-events-none absolute inset-0 grid-bg" />
      <Hero3D />
      {/* contrast scrim so hero copy stays legible over the 3D scene */}
      <div className="pointer-events-none absolute inset-0 z-[1] bg-gradient-to-r from-ink-950 via-ink-950/85 to-transparent sm:via-ink-950/60" />
      <div className="pointer-events-none absolute inset-x-0 bottom-0 z-[1] h-40 bg-gradient-to-t from-ink-950 to-transparent" />

      <div className="section-pad relative z-10 w-full pt-28">
        <motion.div variants={container} initial="hidden" animate="show" className="max-w-3xl">
          <motion.div
            variants={item}
            className="mb-6 inline-flex items-center gap-2 rounded-full glass px-4 py-1.5 text-xs font-medium text-slate-300"
          >
            <span className="relative flex h-2 w-2">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-75" />
              <span className="relative inline-flex h-2 w-2 rounded-full bg-emerald-400" />
            </span>
            Open to opportunities · {profile.location}
          </motion.div>

          <motion.h1
            variants={item}
            className="font-display text-4xl font-bold leading-[1.05] tracking-tight text-white sm:text-6xl lg:text-7xl"
          >
            Hi, I&apos;m{" "}
            <span className="gradient-text animate-gradient-shift">{profile.name}</span>
          </motion.h1>

          <motion.div
            variants={item}
            className="mt-5 flex h-8 items-center text-xl font-medium text-slate-300 sm:text-2xl"
          >
            <span className="text-slate-400">I&apos;m a&nbsp;</span>
            <span className="font-mono text-white">{typed}</span>
            <span className="ml-1 inline-block h-6 w-[2px] animate-pulse bg-accent sm:h-7" />
          </motion.div>

          <motion.p
            variants={item}
            className="mt-6 max-w-2xl text-base leading-relaxed text-slate-400 sm:text-lg"
          >
            {profile.summary}
          </motion.p>

          <motion.div variants={item} className="mt-9 flex flex-wrap items-center gap-3">
            <MagneticButton
              as="a"
              href={profile.resumeUrl}
              download
              className="group flex items-center gap-2 rounded-xl bg-gradient-to-r from-accent to-cyan-glow px-6 py-3 text-sm font-semibold text-white shadow-glow"
            >
              <Download className="h-4 w-4 transition-transform group-hover:translate-y-0.5" />
              Download Resume
            </MagneticButton>
            <MagneticButton
              as="a"
              href="#contact"
              className="flex items-center gap-2 rounded-xl glass px-6 py-3 text-sm font-semibold text-white transition-colors hover:bg-white/10"
            >
              <Mail className="h-4 w-4" />
              Get in touch
            </MagneticButton>
          </motion.div>

          <motion.div variants={item} className="mt-8 flex items-center gap-4">
            <SocialIcon href={profile.socials.github} label="GitHub">
              <Github className="h-5 w-5" />
            </SocialIcon>
            <SocialIcon href={profile.socials.linkedin} label="LinkedIn">
              <Linkedin className="h-5 w-5" />
            </SocialIcon>
            <SocialIcon href={`mailto:${profile.email}`} label="Email">
              <Mail className="h-5 w-5" />
            </SocialIcon>
            <span className="ml-1 hidden items-center gap-1.5 text-sm text-slate-500 sm:flex">
              <MapPin className="h-4 w-4" /> {profile.location}
            </span>
          </motion.div>
        </motion.div>
      </div>

      <motion.a
        href="#about"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.4 }}
        className="absolute bottom-8 left-1/2 z-10 -translate-x-1/2 text-slate-500 hover:text-white"
        aria-label="Scroll down"
      >
        <ArrowDown className="h-6 w-6 animate-bounce" />
      </motion.a>
    </section>
  );
}

function SocialIcon({
  href,
  label,
  children,
}: {
  href: string;
  label: string;
  children: React.ReactNode;
}) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      aria-label={label}
      className="grid h-11 w-11 place-items-center rounded-xl glass text-slate-300 transition-all hover:scale-110 hover:text-white"
    >
      {children}
    </a>
  );
}
