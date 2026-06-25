# Anushree P D — Portfolio

A modern, animated full-stack portfolio built with **Next.js 14 (App Router)**, **TypeScript**, **Tailwind CSS**, and **Framer Motion**. All resume content is hardcoded in [`data/resume.ts`](data/resume.ts) — no database required.

## ✨ Features

- **Animated hero** with typewriter role rotation, floating gradient orbs, and scroll-reveal sections
- **Sections**: About + stats, Skills, Experience timeline, Projects, Education, Contact
- **Download Resume** button (served from `public/Anushree_PD_Resume.pdf`)
- **Contact form** backed by a Next.js API route (`/api/contact`) with validation — logs submissions server-side; ready to wire to an email service or DB
- **Responsive**, accessible, dark glassmorphism design with a scroll-progress bar
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
3. Click **Deploy**. No environment variables are required.

## 📝 Editing content

All text, skills, experience, projects, and education live in [`data/resume.ts`](data/resume.ts). Update that single file to change the site. To replace the downloadable resume, swap `public/Anushree_PD_Resume.pdf`.

## 🔌 Wiring up the contact form

The form posts to `app/api/contact/route.ts`, which currently validates and logs the submission. To actually deliver messages, integrate a provider such as [Resend](https://resend.com) or [SendGrid](https://sendgrid.com) inside that route.

## 🧰 Tech stack

| Layer      | Tech                              |
| ---------- | --------------------------------- |
| Framework  | Next.js 14 (App Router)           |
| Language   | TypeScript                        |
| Styling    | Tailwind CSS                      |
| Animation  | Framer Motion                     |
| Icons      | lucide-react                      |
| Hosting    | Vercel                            |
