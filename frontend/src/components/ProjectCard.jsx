import { useEffect, useRef, useState } from "react";
import { IconExternalLink, IconFolder, IconGitHub } from "./Icons";
import Stagger from "./Stagger";
import TechIcon from "./TechIcon";

function initialsOf(title) {
  return title
    .replace(/[^a-zA-Z ]/g, " ")
    .split(/\s+/)
    .filter(Boolean)
    .slice(0, 2)
    .map((w) => w[0])
    .join("")
    .toUpperCase();
}

function TiltWrapper({ children }) {
  const ref = useRef(null);
  const [transform, setTransform] = useState("");

  useEffect(() => {
    if (
      typeof window === "undefined" ||
      window.matchMedia("(hover: none)").matches ||
      window.matchMedia("(prefers-reduced-motion: reduce)").matches
    ) {
      return;
    }
    const el = ref.current;
    if (!el) return;
    let frame = 0;
    const onMove = (e) => {
      cancelAnimationFrame(frame);
      frame = requestAnimationFrame(() => {
        const r = el.getBoundingClientRect();
        const px = (e.clientX - r.left) / r.width - 0.5;
        const py = (e.clientY - r.top) / r.height - 0.5;
        setTransform(
          `perspective(900px) rotateX(${(-py * 4).toFixed(2)}deg) rotateY(${(px * 4).toFixed(2)}deg) translateY(-3px)`
        );
      });
    };
    const onLeave = () => {
      cancelAnimationFrame(frame);
      setTransform("");
    };
    el.addEventListener("mousemove", onMove);
    el.addEventListener("mouseleave", onLeave);
    return () => {
      cancelAnimationFrame(frame);
      el.removeEventListener("mousemove", onMove);
      el.removeEventListener("mouseleave", onLeave);
    };
  }, []);

  return (
    <div
      ref={ref}
      style={{ transform, transformStyle: "preserve-3d" }}
      className="h-full will-change-transform"
    >
      {children}
    </div>
  );
}

export default function ProjectCard({ project }) {
  const initials = initialsOf(project.title);

  return (
    <TiltWrapper>
      <article className="group relative flex h-full flex-col overflow-hidden rounded-2xl border border-edge bg-panel/60 backdrop-blur transition-all duration-300 hover:-translate-y-1.5 hover:border-primary/40 hover:shadow-2xl hover:shadow-primary/15 active:scale-[0.99]">
        <div
          aria-hidden="true"
          className="absolute inset-x-8 top-6 bottom-10 z-0 rounded-full bg-gradient-to-br from-primary/25 via-accent/15 to-transparent blur-2xl opacity-50 animate-glow transition-opacity duration-500 group-hover:opacity-90"
        />

        <div
          aria-hidden="true"
          className="card-sheen opacity-0 transition-opacity duration-300 group-hover:opacity-100"
        />

        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-[-30%] z-[1] rounded-2xl opacity-0 animate-card-glow-spin transition-opacity duration-500 group-hover:opacity-100"
          style={{
            background:
              "conic-gradient(from 0deg, transparent 0deg, rgb(99 102 241 / 0.55) 40deg, rgb(34 211 238 / 0.45) 60deg, transparent 90deg)",
          }}
        />

        <div className="relative z-10 flex items-center gap-2.5 border-b border-edge bg-ink/60 px-4 py-2.5">
          <span className="h-2.5 w-2.5 rounded-full bg-rose-500/70" />
          <span className="h-2.5 w-2.5 rounded-full bg-amber-400/70" />
          <span className="h-2.5 w-2.5 rounded-full bg-emerald-400/70" />
          <span className="ml-2 flex min-w-0 flex-1 items-center gap-1.5 font-mono text-xs text-muted">
            <span className="shrink-0 transition-transform duration-300 group-hover:-rotate-6 group-hover:scale-110">
              <IconFolder className="h-3 w-3 text-accent/60" />
            </span>
            <span className="truncate">{project.title}</span>
          </span>
          {project.featured && (
            <span className="ml-auto shrink-0 rounded-full border border-amber-400/30 bg-amber-400/10 px-2.5 py-0.5 text-[10px] font-semibold text-amber-300 uppercase">
              Featured
            </span>
          )}
        </div>

        <div className="relative z-10 flex flex-1 flex-col p-6">
          <div className="flex justify-center lg:justify-start">
            <div
              aria-hidden="true"
              className="flex h-12 w-12 items-center justify-center overflow-hidden rounded-xl border border-primary/30 bg-gradient-to-br from-primary/25 via-panel to-accent/15 font-display text-base font-bold text-gradient shadow-lg shadow-primary/10 transition-transform duration-300 group-hover:-translate-y-1 group-hover:scale-110 lg:h-14 lg:w-14"
            >
              {initials}
            </div>
          </div>

          <h3 className="mt-4 font-display text-xl font-semibold text-soft">
            {project.title}
          </h3>
          <p className="mt-3 text-sm leading-relaxed text-muted">
            {project.description}
          </p>

          <Stagger className="mt-5 flex flex-wrap gap-2">
            {project.technologies.map((tech) => (
              <span
                key={tech}
                className="flex items-center gap-1.5 rounded-full border border-edge bg-ink px-3 py-1 text-[11px] font-medium text-muted transition-all duration-200 hover:-translate-y-0.5 hover:scale-105 hover:border-primary/40 hover:text-soft"
              >
                <TechIcon tech={tech} className="h-3 w-3" />
                {tech}
              </span>
            ))}
          </Stagger>

          <div className="mt-auto flex flex-wrap items-center gap-3 pt-6">
            {project.liveUrl && (
              <a
                href={project.liveUrl}
                target="_blank"
                rel="noreferrer"
                aria-label={`${project.title} live demo`}
                className="btn-shine inline-flex items-center gap-2 rounded-full border border-primary/40 bg-primary/10 px-5 py-2 text-sm font-semibold text-primary-light transition-all duration-200 hover:-translate-y-0.5 hover:border-primary hover:bg-primary hover:text-white hover:shadow-lg hover:shadow-primary/25 active:scale-[0.98]"
              >
                <IconExternalLink className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                Live Demo
              </a>
            )}
            {project.githubUrl && (
              <a
                href={project.githubUrl}
                target="_blank"
                rel="noreferrer"
                aria-label={`${project.title} GitHub repository`}
                className="inline-flex items-center gap-2 rounded-full border border-edge bg-ink px-5 py-2 text-sm font-semibold text-muted transition-all duration-200 hover:-translate-y-0.5 hover:border-muted/40 hover:text-soft active:scale-[0.98]"
              >
                <IconGitHub className="h-4 w-4 transition-transform duration-300 group-hover:-translate-y-0.5" />
                Code
              </a>
            )}
          </div>
        </div>
      </article>
    </TiltWrapper>
  );
}