# Anushree P D — Portfolio

A premium, animated full-stack portfolio built with **Next.js 14 (App Router)**, **TypeScript**, **Tailwind CSS**, **Framer Motion**, and **React Three Fiber**. All resume content is hardcoded in [`data/resume.ts`](data/resume.ts) — no database required.

## ✨ Features

- **Interactive 3D hero** — a Three.js / React Three Fiber scene (distorted core + floating geometry) with mouse parallax, lazy-loaded and paused off-screen for performance
- **Premium motion** — custom cursor, magnetic buttons, Lenis smooth scrolling, a loading screen, scroll-triggered reveals, staggered entrances, an animated tech marquee, and a scroll-progress bar
- **Sections**: Hero, tech marquee, About + stats, Skills, Experience timeline, Projects (challenge / impact / GitHub), Education, Contact
- **Working contact form** — a Next.js API route (`/api/contact`) with full validation, loading/success/error states, duplicate-submission prevention, a honeypot, rate limiting, and real email delivery via **Resend** (falls back to logging when no key is set)
- **Download Resume** everywhere (served from `public/Anushree_PD_Resume.pdf`)
- **Accessible & fast** — semantic HTML, skip link, focus-visible rings, `prefers-reduced-motion` support, ARIA live regions, JSON-LD + Open Graph SEO, code-splitting
- **Fully responsive** dark glassmorphism design with an ambient aurora background
- **Zero-config Vercel deploy**

## 🚀 Getting started

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## 🏗️ Build

```bash
npm run build
npm run start
```

## ▲ Deploy to Vercel

1. Push this repo to GitHub.
2. Import it on [vercel.com](https://vercel.com/new) — Vercel auto-detects Next.js.
3. Click **Deploy**. No environment variables are required to deploy; add the Resend variables below when you want live email delivery.

## 📝 Editing content

All text, skills, experience, projects, and education live in [`data/resume.ts`](data/resume.ts). Update that single file to change the site. To replace the downloadable resume, swap `public/Anushree_PD_Resume.pdf`.

## 🔌 Contact form & email delivery

The form posts to `app/api/contact/route.ts`. It validates input, blocks bots (honeypot), and rate-limits requests. Email delivery uses [Resend](https://resend.com):

1. Create a Resend account and API key.
2. Copy `.env.example` to `.env.local` (local) or add the variables in **Vercel → Project → Settings → Environment Variables**:
   - `RESEND_API_KEY` — your key (required to actually send mail)
   - `CONTACT_TO_EMAIL` — where messages land (defaults to the email in `data/resume.ts`)
   - `CONTACT_FROM_EMAIL` — a verified sender (defaults to Resend's shared `onboarding@resend.dev`)
3. Redeploy.

Without a key the route still returns success and logs the submission, so the site works out of the box.

## 🧰 Tech stack

| Layer      | Tech                              |
| ---------- | --------------------------------- |
| Framework  | Next.js 14 (App Router)           |
| Language   | TypeScript                        |
| Styling    | Tailwind CSS                      |
| Animation  | Framer Motion                     |
| 3D         | Three.js · React Three Fiber · Drei |
| Smooth scroll | Lenis                          |
| Email      | Resend                            |
| Icons      | lucide-react                      |
| Hosting    | Vercel                            |
