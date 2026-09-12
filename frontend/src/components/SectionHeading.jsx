import Reveal from "./Reveal";

export default function SectionHeading({ eyebrow, title, description }) {
  return (
    <div className="mx-auto mb-14 max-w-2xl text-center">
      {eyebrow && (
        <Reveal>
          <span className="mb-4 inline-block rounded-full border border-primary/30 bg-primary/10 px-4 py-1.5 font-mono text-xs font-medium tracking-widest text-primary-light uppercase">
            {eyebrow}
          </span>
        </Reveal>
      )}
      <Reveal delay={80} blur>
        <h2 className="font-display text-3xl font-bold text-soft sm:text-4xl">
          {title}
        </h2>
      </Reveal>
      <Reveal direction="zoom" delay={150}>
        <div className="mx-auto mt-4 h-1 w-16 rounded-full bg-gradient-to-r from-primary to-accent" />
      </Reveal>
      {description && (
        <Reveal delay={220}>
          <p className="mt-5 text-base leading-relaxed text-muted">
            {description}
          </p>
        </Reveal>
      )}
    </div>
  );
}