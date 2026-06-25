"use client";

import { Github, Heart, Linkedin, Mail } from "lucide-react";
import { profile } from "@/data/resume";

export default function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer className="border-t border-white/5">
      <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-6 px-5 py-10 sm:flex-row sm:px-8">
        <div className="text-center sm:text-left">
          <div className="font-display text-lg font-semibold text-white">{profile.name}</div>
          <p className="mt-1 text-sm text-slate-500">
            {profile.title} · {profile.tagline}
          </p>
        </div>

        <div className="flex items-center gap-3">
          <a
            href={profile.socials.github}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="GitHub"
            className="grid h-10 w-10 place-items-center rounded-xl glass text-slate-300 transition-all hover:scale-110 hover:text-white"
          >
            <Github className="h-4 w-4" />
          </a>
          <a
            href={profile.socials.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LinkedIn"
            className="grid h-10 w-10 place-items-center rounded-xl glass text-slate-300 transition-all hover:scale-110 hover:text-white"
          >
            <Linkedin className="h-4 w-4" />
          </a>
          <a
            href={`mailto:${profile.email}`}
            aria-label="Email"
            className="grid h-10 w-10 place-items-center rounded-xl glass text-slate-300 transition-all hover:scale-110 hover:text-white"
          >
            <Mail className="h-4 w-4" />
          </a>
        </div>
      </div>
      <div className="border-t border-white/5 py-5">
        <p className="flex items-center justify-center gap-1.5 text-xs text-slate-500">
          © {year} {profile.name}. Built with
          <Heart className="h-3.5 w-3.5 fill-accent text-accent" />
          using Next.js, Tailwind & Framer Motion.
        </p>
      </div>
    </footer>
  );
}
