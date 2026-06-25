"use client";

import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import { ArrowDown, Download, Github, Linkedin, Mail, MapPin } from "lucide-react";
import { profile } from "@/data/resume";

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
  show: { transition: { staggerChildren: 0.12, delayChildren: 0.1 } },
};
const item = {
  hidden: { opacity: 0, y: 24 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] } },
};

export default function Hero() {
  const typed = useTypewriter(profile.roles);

  return (
    <section id="home" className="relative flex min-h-screen items-center overflow-hidden">
      <div className="pointer-events-none absolute inset-0 grid-bg" />

      {/* floating orbs */}
      <div className="pointer-events-none absolute left-[8%] top-[20%] h-72 w-72 rounded-full bg-accent/20 blur-[100px] animate-float" />
      <div className="pointer-events-none absolute right-[10%] bottom-[15%] h-80 w-80 rounded-full bg-cyan-glow/20 blur-[110px] animate-float [animation-delay:2s]" />

      <div className="section-pad relative z-10 w-full pt-32">
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
            Hi, I&apos;m <span className="gradient-text animate-gradient-shift">{profile.name}</span>
          </motion.h1>

          <motion.div
            variants={item}
            className="mt-5 flex items-center text-xl font-medium text-slate-300 sm:text-2xl"
          >
            <span className="text-slate-400">I&apos;m a&nbsp;</span>
            <span className="text-white">{typed}</span>
            <span className="ml-1 inline-block h-6 w-[2px] animate-pulse bg-accent sm:h-7" />
          </motion.div>

          <motion.p variants={item} className="mt-6 max-w-2xl text-base leading-relaxed text-slate-400 sm:text-lg">
            {profile.summary}
          </motion.p>

          <motion.div variants={item} className="mt-9 flex flex-wrap items-center gap-3">
            <a
              href={profile.resumeUrl}
              download
              className="group flex items-center gap-2 rounded-xl bg-gradient-to-r from-accent to-cyan-glow px-6 py-3 text-sm font-semibold text-white shadow-xl shadow-accent/30 transition-transform hover:scale-[1.03]"
            >
              <Download className="h-4 w-4 transition-transform group-hover:translate-y-0.5" />
              Download Resume
            </a>
            <a
              href="#contact"
              className="flex items-center gap-2 rounded-xl glass px-6 py-3 text-sm font-semibold text-white transition-colors hover:bg-white/10"
            >
              <Mail className="h-4 w-4" />
              Get in touch
            </a>
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
        transition={{ delay: 1.2 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 text-slate-500 hover:text-white"
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
