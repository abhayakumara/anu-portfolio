"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import {
  CheckCircle2,
  Download,
  Github,
  Linkedin,
  Loader2,
  Mail,
  MapPin,
  Phone,
  Send,
} from "lucide-react";
import SectionHeading from "./SectionHeading";
import { profile } from "@/data/resume";

type Status = "idle" | "loading" | "success" | "error";

const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

export default function Contact() {
  const [status, setStatus] = useState<Status>("idle");
  const [error, setError] = useState("");
  const [form, setForm] = useState({ name: "", email: "", message: "", company: "" });
  const [touched, setTouched] = useState<Record<string, boolean>>({});
  const [fallbackMailto, setFallbackMailto] = useState<string | null>(null);

  const fieldError = (field: keyof typeof form): string | null => {
    if (!touched[field]) return null;
    if (field === "name" && !form.name.trim()) return "Please enter your name.";
    if (field === "email") {
      if (!form.email.trim()) return "Please enter your email.";
      if (!emailRegex.test(form.email.trim())) return "Enter a valid email address.";
    }
    if (field === "message") {
      if (!form.message.trim()) return "Please enter a message.";
      if (form.message.trim().length < 5) return "Message is too short.";
    }
    return null;
  };

  const onChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => setForm((f) => ({ ...f, [e.target.name]: e.target.value }));

  const onBlur = (e: React.FocusEvent<HTMLInputElement | HTMLTextAreaElement>) =>
    setTouched((t) => ({ ...t, [e.target.name]: true }));

  const isValid =
    form.name.trim() &&
    emailRegex.test(form.email.trim()) &&
    form.message.trim().length >= 5;

  const onSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setTouched({ name: true, email: true, message: true });
    if (!isValid || status === "loading" || status === "success") return;

    setStatus("loading");
    setError("");
    setFallbackMailto(null);
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });
      const data = await res.json();
      if (!res.ok) throw new Error(data.error || "Something went wrong");

      // If the server accepted the message but has no email provider wired up,
      // give the visitor a one-click prefilled email so it still reaches me.
      if (data.delivered === false) {
        const subject = encodeURIComponent(`Portfolio message from ${form.name}`);
        const body = encodeURIComponent(`${form.message}\n\n— ${form.name} (${form.email})`);
        setFallbackMailto(`mailto:${profile.email}?subject=${subject}&body=${body}`);
      }

      setStatus("success");
      setForm({ name: "", email: "", message: "", company: "" });
      setTouched({});
      setTimeout(() => setStatus("idle"), 12000);
    } catch (err) {
      setStatus("error");
      setError(err instanceof Error ? err.message : "Something went wrong");
    }
  };

  const contactItems = [
    { icon: Mail, label: "Email", value: profile.email, href: `mailto:${profile.email}` },
    { icon: Phone, label: "Phone", value: profile.phone, href: `tel:${profile.phone}` },
    { icon: MapPin, label: "Location", value: profile.location, href: undefined },
  ];

  return (
    <section id="contact" className="section-pad">
      <SectionHeading
        eyebrow="Contact"
        title="Let's build something together"
        subtitle="Have a role, project, or idea in mind? Drop me a message and I'll get back to you."
      />

      <div className="grid gap-6 lg:grid-cols-[1fr_1.2fr]">
        {/* Left: contact info */}
        <motion.div
          initial={{ opacity: 0, x: -24 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          className="flex flex-col gap-4"
        >
          <div className="card-glow rounded-2xl glass p-7">
            <h3 className="font-display text-lg font-semibold text-white">Contact details</h3>
            <div className="mt-5 space-y-4">
              {contactItems.map(({ icon: Icon, label, value, href }) => {
                const inner = (
                  <>
                    <span className="grid h-10 w-10 flex-shrink-0 place-items-center rounded-xl bg-gradient-to-br from-accent/30 to-cyan-glow/20 text-accent-soft">
                      <Icon className="h-5 w-5" />
                    </span>
                    <div>
                      <div className="text-xs text-slate-500">{label}</div>
                      <div className="text-sm font-medium text-white">{value}</div>
                    </div>
                  </>
                );
                return href ? (
                  <a
                    key={label}
                    href={href}
                    className="flex items-center gap-4 transition-opacity hover:opacity-80"
                  >
                    {inner}
                  </a>
                ) : (
                  <div key={label} className="flex items-center gap-4">
                    {inner}
                  </div>
                );
              })}
            </div>

            <div className="mt-7 flex gap-3">
              <SocialLink href={profile.socials.github} label="GitHub">
                <Github className="h-5 w-5" />
              </SocialLink>
              <SocialLink href={profile.socials.linkedin} label="LinkedIn">
                <Linkedin className="h-5 w-5" />
              </SocialLink>
            </div>
          </div>

          <a
            href={profile.resumeUrl}
            download
            className="card-glow group flex items-center justify-between rounded-2xl glass p-6 transition-colors hover:bg-white/[0.06]"
          >
            <div>
              <div className="font-display text-base font-semibold text-white">
                Download my resume
              </div>
              <div className="text-sm text-slate-400">Grab the full PDF version</div>
            </div>
            <span className="grid h-11 w-11 place-items-center rounded-xl bg-gradient-to-br from-accent to-cyan-glow text-white transition-transform group-hover:scale-110">
              <Download className="h-5 w-5" />
            </span>
          </a>
        </motion.div>

        {/* Right: form */}
        <motion.form
          onSubmit={onSubmit}
          noValidate
          initial={{ opacity: 0, x: 24 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          className="card-glow rounded-2xl glass p-7"
        >
          {/* honeypot */}
          <input
            type="text"
            name="company"
            value={form.company}
            onChange={onChange}
            tabIndex={-1}
            autoComplete="off"
            aria-hidden="true"
            className="absolute left-[-9999px] h-0 w-0 opacity-0"
          />

          <div className="grid gap-5 sm:grid-cols-2">
            <Field label="Name" error={fieldError("name")}>
              <input
                required
                name="name"
                value={form.name}
                onChange={onChange}
                onBlur={onBlur}
                placeholder="Your name"
                aria-invalid={!!fieldError("name")}
                className="input"
              />
            </Field>
            <Field label="Email" error={fieldError("email")}>
              <input
                required
                type="email"
                name="email"
                value={form.email}
                onChange={onChange}
                onBlur={onBlur}
                placeholder="you@example.com"
                aria-invalid={!!fieldError("email")}
                className="input"
              />
            </Field>
          </div>
          <div className="mt-5">
            <Field label="Message" error={fieldError("message")}>
              <textarea
                required
                name="message"
                value={form.message}
                onChange={onChange}
                onBlur={onBlur}
                rows={5}
                placeholder="Tell me about your project or role…"
                aria-invalid={!!fieldError("message")}
                className="input resize-none"
              />
            </Field>
          </div>

          <button
            type="submit"
            disabled={status === "loading" || status === "success"}
            className="mt-6 flex w-full items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-accent to-cyan-glow px-6 py-3.5 text-sm font-semibold text-white shadow-glow transition-transform hover:scale-[1.01] disabled:cursor-not-allowed disabled:opacity-70"
          >
            {status === "loading" && <Loader2 className="h-4 w-4 animate-spin" />}
            {status === "success" && <CheckCircle2 className="h-4 w-4" />}
            {(status === "idle" || status === "error") && <Send className="h-4 w-4" />}
            {status === "loading"
              ? "Sending…"
              : status === "success"
              ? "Message sent!"
              : "Send message"}
          </button>

          <div aria-live="polite" className="min-h-[1.25rem]">
            {status === "success" && (
              <div className="mt-3 text-center text-sm text-emerald-400">
                <p>Thanks for reaching out — I&apos;ll reply soon.</p>
                {fallbackMailto && (
                  <a
                    href={fallbackMailto}
                    className="mt-1 inline-block text-slate-400 underline decoration-dotted underline-offset-4 hover:text-white"
                  >
                    Prefer email? Send it directly →
                  </a>
                )}
              </div>
            )}
            {status === "error" && (
              <p className="mt-3 text-center text-sm text-rose-400">{error}</p>
            )}
          </div>
        </motion.form>
      </div>
    </section>
  );
}

function SocialLink({
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

function Field({
  label,
  error,
  children,
}: {
  label: string;
  error?: string | null;
  children: React.ReactNode;
}) {
  return (
    <label className="block">
      <span className="mb-1.5 block text-xs font-medium text-slate-400">{label}</span>
      {children}
      {error && <span className="mt-1 block text-xs text-rose-400">{error}</span>}
    </label>
  );
}
