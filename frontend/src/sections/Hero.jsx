import { useEffect, useState } from "react";
import {
  IconArrowRight,
  IconDownload,
  IconGitHub,
  IconLinkedIn,
  IconMail,
} from "../components/Icons";
import TechIcon from "../components/TechIcon";
import socialLinks from "../data/socialLinks";

const ROLES = ["MERN Stack Developer", "Full Stack Developer", "React.js Developer"];

const CODE_LINES = [
  [
    { text: "const", className: "text-primary-light" },
    { text: " developer", className: "text-accent" },
    { text: " = {", className: "text-muted" },
  ],
  [
    { text: "  name", className: "text-sky-400" },
    { text: ": ", className: "text-muted" },
    { text: '"Shivam Prajapati"', className: "text-amber-300" },
    { text: ",", className: "text-muted" },
  ],
  [
    { text: "  role", className: "text-sky-400" },
    { text: ": ", className: "text-muted" },
    { text: '"MERN Stack Developer"', className: "text-amber-300" },
    { text: ",", className: "text-muted" },
  ],
  [
    { text: "  stack", className: "text-sky-400" },
    { text: ": [", className: "text-muted" },
    { text: '"React"', className: "text-amber-300" },
    { text: ", ", className: "text-muted" },
    { text: '"Node"', className: "text-amber-300" },
    { text: ", ", className: "text-muted" },
    { text: '"Express"', className: "text-amber-300" },
    { text: ", ", className: "text-muted" },
    { text: '"MongoDB"', className: "text-amber-300" },
    { text: "],", className: "text-muted" },
  ],
  [
    { text: "  location", className: "text-sky-400" },
    { text: ": ", className: "text-muted" },
    { text: '"Uttar Pradesh, India"', className: "text-amber-300" },
    { text: ",", className: "text-muted" },
  ],
  [
    { text: "  hireable", className: "text-sky-400" },
    { text: ": ", className: "text-muted" },
    { text: "true", className: "text-emerald-400" },
    { text: ",", className: "text-muted" },
  ],
  [
    { text: "};", className: "text-muted" },
  ],
];

const FLOATING_CHIPS = [
  {
    key: "react",
    tech: "React.js",
    className: "-top-5 -left-2 sm:-left-8",
    delay: "0s",
  },
  {
    key: "mongo",
    tech: "MongoDB",
    className: "-bottom-5 -left-2 sm:bottom-8 sm:-left-10",
    delay: "1.2s",
  },
  {
    key: "node",
    tech: "Node.js",
    className: "-top-4 -right-2 sm:-right-8",
    delay: "0.6s",
  },
  {
    key: "tailwind",
    tech: "Tailwind CSS",
    className: "-bottom-4 -right-2 sm:bottom-20 sm:-right-10",
    delay: "1.8s",
  },
];

function FloatingChips() {
  return (
    <>
      {FLOATING_CHIPS.map((chip) => (
        <div
          key={chip.key}
          aria-hidden="true"
          style={{ animationDelay: chip.delay }}
          className={`animate-pop-in absolute z-10 ${chip.className}`}
        >
          <div className="animate-float">
            <span className="flex items-center gap-2 rounded-2xl border border-edge bg-panel/90 px-3 py-2 text-xs font-semibold text-soft shadow-lg shadow-black/40 backdrop-blur">
              <TechIcon tech={chip.tech} className="h-4 w-4" />
              {chip.tech}
            </span>
          </div>
        </div>
      ))}
    </>
  );
}

function CodeEditorVisual() {
  return (
    <div
      className="animate-fade-in-up relative mx-auto w-full max-w-xl"
      style={{ animationDelay: "0.25s" }}
    >
      <div
        className="animate-glow absolute -inset-6 rounded-3xl bg-gradient-to-tr from-primary/25 via-transparent to-accent/25 blur-2xl"
        aria-hidden="true"
      />
      <div className="animate-float relative overflow-hidden rounded-2xl border border-edge bg-panel/90 shadow-2xl shadow-black/50 backdrop-blur">
        <div className="flex items-center gap-2 border-b border-edge bg-ink/60 px-4 py-3">
          <span className="h-3 w-3 rounded-full bg-rose-500/80" />
          <span className="h-3 w-3 rounded-full bg-amber-400/80" />
          <span className="h-3 w-3 rounded-full bg-emerald-400/80" />
          <span className="ml-3 font-mono text-xs text-muted">
            developer.js
          </span>
          <span className="ml-auto hidden rounded-full border border-edge bg-panel px-2 py-0.5 font-mono text-[10px] text-muted sm:inline">
            JavaScript
          </span>
        </div>

        <div className="p-5 font-mono text-[12.5px] leading-7 sm:text-[13px]">
          {CODE_LINES.map((line, lineIndex) => (
            <div key={lineIndex} className="flex">
              <span className="w-6 shrink-0 pr-3 text-right text-edge select-none sm:w-8">
                {lineIndex + 1}
              </span>
              <span className="whitespace-pre-wrap break-words">
                {line.map((token, tokenIndex) => (
                  <span key={tokenIndex} className={token.className}>
                    {token.text}
                  </span>
                ))}
                {lineIndex === CODE_LINES.length - 1 && (
                  <span className="animate-blink ml-1 inline-block h-4 w-2 translate-y-1 bg-accent align-middle" />
                )}
              </span>
            </div>
          ))}
        </div>

        <div className="flex items-center gap-3 border-t border-edge bg-ink/60 px-4 py-2.5 font-mono text-[10px] text-muted">
          <span className="flex items-center gap-1.5">
            <span className="text-emerald-400">✓</span> main
          </span>
          <span className="hidden sm:inline">•</span>
          <span className="hidden sm:inline">MERN Stack Developer</span>
          <span className="ml-auto hidden items-center gap-1.5 sm:flex">
            <span className="relative flex h-2 w-2">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-60" />
              <span className="relative inline-flex h-2 w-2 rounded-full bg-emerald-400" />
            </span>
            ready to build
          </span>
        </div>
      </div>

      <FloatingChips />
    </div>
  );
}

function ScrollIndicator() {
  return (
    <a
      href="#about"
      aria-label="Scroll to About section"
      className="animate-fade-in-up absolute bottom-6 left-1/2 hidden -translate-x-1/2 flex-col items-center gap-2 text-muted transition-colors hover:text-soft md:flex"
      style={{ animationDelay: "0.8s" }}
    >
      <span className="text-[10px] font-semibold tracking-[0.25em] uppercase">
        Scroll
      </span>
      <span className="flex h-9 w-5.5 items-start justify-center rounded-full border border-edge p-1">
        <span className="animate-float h-2 w-1 rounded-full bg-accent" />
      </span>
    </a>
  );
}

const SOCIAL_BUTTONS = [
  { href: socialLinks.github, Icon: IconGitHub, label: "GitHub" },
  { href: socialLinks.email, Icon: IconMail, label: "Email" },
];

export default function Hero() {
  const [roleIndex, setRoleIndex] = useState(0);
  const [scrollY, setScrollY] = useState(0);
  const [typeText, setTypeText] = useState(() => {
    if (
      typeof window !== "undefined" &&
      window.matchMedia("(prefers-reduced-motion: reduce)").matches
    ) {
      return ROLES[0];
    }
    return "";
  });
  const [deleting, setDeleting] = useState(false);

  useEffect(() => {
    if (
      typeof window !== "undefined" &&
      window.matchMedia("(prefers-reduced-motion: reduce)").matches
    ) {
      return;
    }
    let raf = 0;
    const onScroll = () => {
      cancelAnimationFrame(raf);
      raf = requestAnimationFrame(() => setScrollY(window.scrollY));
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => {
      cancelAnimationFrame(raf);
      window.removeEventListener("scroll", onScroll);
    };
  }, []);

  const blobOneY = Math.max(-30, Math.min(30, scrollY * -0.06));
  const blobTwoY = Math.max(-24, Math.min(24, scrollY * 0.05));
  const visualY = Math.max(-20, Math.min(20, scrollY * 0.045));

  useEffect(() => {
    if (
      typeof window !== "undefined" &&
      window.matchMedia("(prefers-reduced-motion: reduce)").matches
    ) {
      return;
    }
    const current = ROLES[roleIndex % ROLES.length];
    const timer = setTimeout(
      () => {
        if (!deleting) {
          const next = current.slice(0, typeText.length + 1);
          setTypeText(next);
          if (next === current) setDeleting(true);
        } else {
          const next = current.slice(0, Math.max(0, typeText.length - 1));
          setTypeText(next);
          if (next === "") {
            setDeleting(false);
            setRoleIndex((i) => i + 1);
          }
        }
      },
      deleting ? 40 : 85
    );
    return () => clearTimeout(timer);
  }, [typeText, deleting, roleIndex]);

  return (
    <section id="home" className="relative overflow-hidden pt-32 pb-24 sm:pt-40 md:pb-32">
      <div
        className="pointer-events-none absolute -top-40 left-1/2 h-[500px] w-[800px] -translate-x-1/2 rounded-full bg-primary/10 blur-[120px]"
        style={{ transform: `translateY(${blobOneY}px)` }}
        aria-hidden="true"
      />
      <div
        className="pointer-events-none absolute right-0 top-40 h-72 w-72 rounded-full bg-accent/10 blur-[100px]"
        style={{ transform: `translateY(${blobTwoY}px)` }}
        aria-hidden="true"
      />

      <div className="mx-auto grid max-w-6xl items-center gap-12 px-5 sm:px-8 lg:grid-cols-2 lg:gap-12">
        <div className="text-center lg:text-left">
          <div
            className="animate-fade-in-up mb-6 flex justify-center lg:justify-start"
            style={{ animationDelay: "0s" }}
          >
            <span className="group relative inline-flex transition-transform duration-500 ease-out will-change-transform hover:scale-105">
              <span
                aria-hidden="true"
                className="profile-ring animate-ring-spin absolute -inset-2 rounded-full blur-[2px]"
              />
              <span
                aria-hidden="true"
                className="absolute -inset-1 rounded-full bg-gradient-to-tr from-primary/50 to-accent/50 opacity-70 blur-md transition-all duration-500 group-hover:opacity-100 group-hover:blur-lg"
              />
              <span
                aria-hidden="true"
                className="absolute -inset-2 rounded-full border-2 border-primary/30 transition-colors duration-500 group-hover:border-accent/60"
              />
              <img
                src="/shivam%20photo%20with%20tai.png"
                alt="Shivam Prajapati"
                loading="eager"
                decoding="async"
                className="relative h-48 w-48 rounded-full border border-edge/80 object-cover shadow-lg shadow-black/40 transition-transform duration-500 group-hover:scale-[1.03] md:h-56 md:w-56 lg:h-44 lg:w-44"
              />
            </span>
          </div>

          <span
            className="animate-fade-in-up mb-6 inline-flex items-center gap-2 rounded-full border border-edge bg-panel/60 px-4 py-1.5 text-xs font-medium text-muted backdrop-blur sm:text-sm"
            style={{ animationDelay: "0.05s" }}
          >
            <span className="relative flex h-2.5 w-2.5">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-60" />
              <span className="relative inline-flex h-2.5 w-2.5 rounded-full bg-emerald-400" />
            </span>
            Available for MERN Stack roles
          </span>

          <p
            className="animate-fade-in-up font-mono text-sm tracking-[0.3em] text-accent uppercase sm:text-base"
            style={{ animationDelay: "0.15s" }}
          >
            Hi, I'm
          </p>

          <h1
            className="animate-fade-in-up mt-3 font-display text-4xl font-bold leading-tight text-soft sm:text-5xl lg:text-6xl"
            style={{ animationDelay: "0.25s" }}
          >
            Shivam <span className="text-gradient text-gradient-animate animate-gradient-x">Prajapati</span>
          </h1>

          <p
            className="animate-fade-in-up mt-4 font-mono text-base text-accent sm:text-lg"
            style={{ animationDelay: "0.35s" }}
          >
            &lt; / &gt; <span data-probe="typewriter">{typeText}</span>
            <span
              aria-hidden="true"
              className="animate-blink ml-0.5 inline-block h-4 w-2 translate-y-1 bg-accent align-middle"
            />
          </p>

          <p
            className="animate-fade-in-up mx-auto mt-5 max-w-xl text-base leading-relaxed text-muted sm:text-lg lg:mx-0"
            style={{ animationDelay: "0.45s" }}
          >
            I build modern, responsive and full-stack web applications using
            React.js, Node.js, Express.js and MongoDB.
          </p>

          <div
            className="animate-fade-in-up mt-9 flex flex-wrap items-center justify-center gap-4 lg:justify-start"
            style={{ animationDelay: "0.55s" }}
          >
            <a
              href="#projects"
              className="btn-shine group inline-flex w-full items-center justify-center gap-2 rounded-full bg-gradient-to-r from-primary to-accent px-6 py-3 text-sm font-semibold text-white shadow-lg shadow-primary/25 transition-all hover:shadow-primary/40 hover:brightness-110 active:scale-[0.98] focus-visible:ring-2 focus-visible:ring-accent/60 focus-visible:outline-none sm:w-auto"
            >
              View Projects
              <IconArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
            </a>
            <a
              href="#contact"
              className="inline-flex w-full items-center justify-center gap-2 rounded-full border border-edge bg-panel/60 px-6 py-3 text-sm font-semibold text-soft backdrop-blur transition-all hover:border-primary/50 hover:bg-panel active:scale-[0.98] focus-visible:ring-2 focus-visible:ring-primary/50 focus-visible:outline-none sm:w-auto"
            >
              Contact Me
            </a>
            <a
              href="/resume.pdf"
              download="Shivam-Prajapati-Resume.pdf"
              className="group inline-flex w-full items-center justify-center gap-2 rounded-full border border-edge bg-panel/60 px-6 py-3 text-sm font-semibold text-soft backdrop-blur transition-all hover:border-primary/50 hover:bg-panel active:scale-[0.98] focus-visible:ring-2 focus-visible:ring-primary/50 focus-visible:outline-none sm:w-auto"
            >
              <IconDownload className="h-4 w-4 transition-transform group-hover:translate-y-0.5" />
              Download Resume
            </a>
          </div>

          <div
            className="animate-fade-in-up mt-8 flex items-center justify-center gap-5 lg:justify-start"
            style={{ animationDelay: "0.65s" }}
          >
            <span className="h-px w-8 bg-edge" aria-hidden="true" />
            {SOCIAL_BUTTONS.map(({ href, Icon, label }) => (
              <a
                key={label}
                href={href}
                target={href.startsWith("http") ? "_blank" : undefined}
                rel={href.startsWith("http") ? "noreferrer" : undefined}
                aria-label={label}
                className="flex h-10 w-10 items-center justify-center rounded-xl border border-edge bg-panel/60 text-muted transition-all hover:-translate-y-0.5 hover:border-primary/50 hover:text-soft focus-visible:ring-2 focus-visible:ring-primary/50 focus-visible:outline-none"
              >
                <Icon className="h-4.5 w-4.5" />
              </a>
            ))}
            {socialLinks.linkedin && (
              <a
                href={socialLinks.linkedin}
                target="_blank"
                rel="noreferrer"
                aria-label="LinkedIn"
                className="flex h-10 w-10 items-center justify-center rounded-xl border border-edge bg-panel/60 text-muted transition-all hover:-translate-y-0.5 hover:border-primary/50 hover:text-soft focus-visible:ring-2 focus-visible:ring-primary/50 focus-visible:outline-none"
              >
                <IconLinkedIn className="h-4.5 w-4.5" />
              </a>
            )}
          </div>
        </div>

        <div
          className="relative"
          style={{
            transform: `translateY(${visualY}px)`,
            willChange: "transform",
          }}
        >
          <CodeEditorVisual />
        </div>
      </div>

      <ScrollIndicator />
    </section>
  );
}