import { useState } from "react";
import SectionHeading from "../components/SectionHeading";
import Reveal from "../components/Reveal";
import Stagger from "../components/Stagger";
import {
  IconGitHub,
  IconLinkedIn,
  IconLocation,
  IconMail,
  IconSend,
  IconSpinner,
} from "../components/Icons";
import socialLinks from "../data/socialLinks";

const INPUT_CLASSES =
  "w-full rounded-xl border border-edge bg-panel/60 px-4 py-3.5 text-sm text-soft placeholder:text-muted/50 backdrop-blur transition-[border-color,box-shadow,color,background-color] duration-200 focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/25";

const LABEL_CLASSES =
  "mb-2 block text-xs font-semibold tracking-wide text-muted";

export default function Contact() {
  const [status, setStatus] = useState("idle"); // idle | sending | sent | error
  const [error, setError] = useState("");
  const [form, setForm] = useState({ name: "", email: "", subject: "", message: "" });

  const handleChange = (e) => {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
    if (status === "error") setStatus("idle");
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (status === "sending") return;
    setStatus("sending");
    setError("");
    try {
      const res = await fetch("/api/send-email", {
        method: "POST",
        headers: { "Content-Type": "application/json", Accept: "application/json" },
        body: JSON.stringify(form),
      });
      const data = await res.json().catch(() => ({}));
      if (!res.ok) throw new Error(data.message || `Request failed (${res.status}). Please try again.`);
      setStatus("sent");
    } catch (err) {
      setError(err.message || "Something went wrong. Please try again.");
      setStatus("error");
    }
  };

  const handleReset = () => {
    setForm({ name: "", email: "", subject: "", message: "" });
    setStatus("idle");
  };

  const contactItems = [
    {
      label: "Email",
      value: "shivamprajapati.it@gmail.com",
      href: socialLinks.email,
      Icon: IconMail,
    },
    {
      label: "GitHub",
      value: "github.com/raaaaam123",
      href: socialLinks.github,
      external: true,
      Icon: IconGitHub,
    },
    ...(socialLinks.linkedin
      ? [
          {
            label: "LinkedIn",
            value: socialLinks.linkedin.replace(/^https?:\/\//, ""),
            href: socialLinks.linkedin,
            external: true,
            Icon: IconLinkedIn,
          },
        ]
      : []),
  ];

  return (
    <section id="contact" className="relative overflow-hidden py-16 sm:py-20 lg:py-28">
      <div
        className="animate-aurora pointer-events-none absolute -left-20 bottom-1/3 h-72 w-72 rounded-full bg-primary/10 blur-[100px]"
        aria-hidden="true"
      />
      <div className="mx-auto max-w-6xl px-5 sm:px-8">
        <SectionHeading
          eyebrow="Get In Touch"
          title="Contact Me"
          description="Have a role in mind or a project idea? Send me a message and I'll get back to you."
        />

        <div className="grid items-start gap-10 lg:grid-cols-[1fr_1.2fr]">
          <Reveal direction="right">
            <div>
              <h3 className="font-display text-2xl font-semibold text-soft sm:text-3xl">
                Let's <span className="text-gradient">work together</span>
              </h3>
              <p className="mt-3 max-w-md leading-relaxed text-muted">
                I'm open to MERN stack developer roles, freelance projects and
                collaboration. Reach out through any of the channels below or
                drop a message using the form.
              </p>

              <Stagger className="mt-8 space-y-4">
                {contactItems.map(
                  ({ label, value, href, external, Icon }) => (
                    <a
                      key={label}
                      href={href}
                      target={external ? "_blank" : undefined}
                      rel={external ? "noreferrer" : undefined}
                      className="group flex items-center gap-4 rounded-2xl border border-edge bg-panel/60 p-5 backdrop-blur transition-all duration-200 hover:-translate-y-0.5 hover:border-primary/40 hover:shadow-lg hover:shadow-primary/10"
                    >
                      <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl border border-primary/30 bg-primary/10 text-primary-light transition-transform duration-200 group-hover:-rotate-6 group-hover:scale-110">
                        <Icon />
                      </div>
                      <div className="min-w-0">
                        <p className="font-display text-sm font-semibold text-soft">
                          {label}
                        </p>
                        <p className="mt-0.5 truncate text-sm text-muted">
                          {value}
                        </p>
                      </div>
                    </a>
                  )
                )}

                <div className="flex items-center gap-4 rounded-2xl border border-edge bg-panel/60 p-5 backdrop-blur">
                  <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl border border-accent/30 bg-accent/10 text-accent">
                    <IconLocation />
                  </div>
                  <div>
                    <p className="font-display text-sm font-semibold text-soft">
                      Location
                    </p>
                    <p className="mt-0.5 text-sm text-muted">
                      Uttar Pradesh, India
                    </p>
                  </div>
                </div>
              </Stagger>
            </div>
          </Reveal>

          <Reveal direction="left" delay={120}>
            <div>
              <div className="rounded-2xl border border-edge bg-panel/60 p-6 backdrop-blur sm:p-8">
                {status === "sent" ? (
                  <div aria-live="polite" className="py-12 text-center">
                    <div className="animate-fade-in-up mx-auto mb-6 flex h-16 w-16 items-center justify-center rounded-full border border-emerald-400/30 bg-emerald-400/10">
                      <IconMail className="h-7 w-7 text-emerald-400" />
                    </div>
                    <h3 className="font-display text-2xl font-bold text-soft">
                      Message sent successfully!
                    </h3>
                    <p className="mx-auto mt-3 max-w-sm text-sm leading-relaxed text-muted">
                      Thank you, {form.name || "there"}. I've received your message
                      and will get back to you at {form.email} as soon as possible.
                    </p>
                    <button
                      type="button"
                      onClick={handleReset}
                      className="mt-7 inline-flex items-center gap-2 rounded-full border border-edge bg-ink px-6 py-2.5 text-sm font-semibold text-soft transition-all hover:border-primary/50 hover:bg-panel focus-visible:ring-2 focus-visible:ring-primary/50 focus-visible:outline-none"
                    >
                      Send another message
                    </button>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit}>
                    <Stagger className="space-y-5">
                      <div className="grid gap-5 sm:grid-cols-2">
                        <div>
                          <label htmlFor="name" className={LABEL_CLASSES}>
                            Name
                          </label>
                          <input
                            id="name"
                            type="text"
                            name="name"
                            value={form.name}
                            onChange={handleChange}
                            required
                            autoComplete="name"
                            placeholder="Your name"
                            className={INPUT_CLASSES}
                          />
                        </div>
                        <div>
                          <label htmlFor="email" className={LABEL_CLASSES}>
                            Email
                          </label>
                          <input
                            id="email"
                            type="email"
                            name="email"
                            value={form.email}
                            onChange={handleChange}
                            required
                            autoComplete="email"
                            placeholder="you@example.com"
                            className={INPUT_CLASSES}
                          />
                        </div>
                      </div>

                      <div>
                        <label htmlFor="subject" className={LABEL_CLASSES}>
                          Subject
                        </label>
                        <input
                          id="subject"
                          type="text"
                          name="subject"
                          value={form.subject}
                          onChange={handleChange}
                          required
                          placeholder="What is this about?"
                          className={INPUT_CLASSES}
                        />
                      </div>

                      <div>
                        <label htmlFor="message" className={LABEL_CLASSES}>
                          Message
                        </label>
                        <textarea
                          id="message"
                          name="message"
                          value={form.message}
                          onChange={handleChange}
                          required
                          rows={6}
                          placeholder="Write your message..."
                          className={`${INPUT_CLASSES} resize-none`}
                        />
                      </div>

                      {status === "error" && error && (
                        <div
                          role="alert"
                          aria-live="polite"
                          className="rounded-xl border border-red-400/30 bg-red-400/10 px-4 py-3 text-sm text-red-300"
                        >
                          {error}
                        </div>
                      )}

                      <button
                        type="submit"
                        disabled={status === "sending"}
                        aria-busy={status === "sending"}
                        className="btn-shine flex w-full items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-primary to-accent px-6 py-3.5 text-sm font-semibold text-white shadow-lg shadow-primary/25 transition-all hover:shadow-primary/40 hover:brightness-110 active:scale-[0.98] focus-visible:ring-2 focus-visible:ring-accent/60 focus-visible:outline-none disabled:cursor-not-allowed disabled:opacity-70 disabled:hover:shadow-primary/25"
                      >
                        {status === "sending" ? (
                          <>
                            <IconSpinner className="h-4 w-4" />
                            Sending...
                          </>
                        ) : (
                          <>
                            <IconSend className="h-4 w-4" />
                            Send Message
                          </>
                        )}
                      </button>
                    </Stagger>
                  </form>
                )}
              </div>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}