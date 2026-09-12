import SectionHeading from "../components/SectionHeading";
import Reveal from "../components/Reveal";
import Stagger from "../components/Stagger";
import TimelineFill from "../components/TimelineFill";
import { IconBriefcase, IconCheck, IconLocation } from "../components/Icons";
import experience from "../data/experience";

export default function Experience() {
  return (
    <section id="experience" className="relative py-16 sm:py-20 lg:py-28">
      <div className="mx-auto max-w-4xl px-5 sm:px-8">
        <SectionHeading
          eyebrow="Experience"
          title="Where I've Worked"
          description="A look at the professional experience and responsibilities I've taken on."
        />

        <div className="relative space-y-8 border-l border-accent/20">
          {experience.map((item, i) => (
            <div key={item.id} className="relative pl-8 md:pl-10">
              <TimelineFill
                delay={i * 120 + 180}
                className="left-0 from-accent/60 to-accent/20"
              />
              <Reveal delay={i * 120} blur>
                <article className="group relative overflow-hidden rounded-2xl border border-edge bg-panel/60 p-6 backdrop-blur transition-all duration-300 hover:-translate-y-1 hover:border-accent/50 hover:shadow-xl hover:shadow-accent/10 sm:p-7">
                <div className="absolute inset-x-0 top-0 h-[2px] origin-left scale-x-0 bg-gradient-to-r from-primary to-accent transition-transform duration-300 group-hover:scale-x-100" />

                <span className="absolute -left-12 top-8 flex h-8 w-8 items-center justify-center rounded-full border border-accent/50 bg-ink text-accent ring-4 ring-void transition-transform duration-300 group-hover:scale-110 group-hover:ring-accent/20 md:-left-14">
                  <span
                    className="absolute inset-0 animate-ping rounded-full bg-accent/40 opacity-40"
                    aria-hidden="true"
                  />
                  <IconBriefcase className="h-4 w-4" />
                </span>

                <div className="flex flex-wrap items-start justify-between gap-3">
                  <div>
                    <h3 className="font-display text-xl font-semibold text-soft">
                      {item.role}
                    </h3>
                    <p className="mt-1 font-mono text-sm text-accent">
                      {item.company}
                    </p>
                  </div>
                  <span className="rounded-full border border-edge bg-ink px-4 py-1.5 font-mono text-xs text-muted">
                    {item.period}
                  </span>
                </div>

                <p className="mt-3 flex items-center gap-2 text-sm text-muted">
                  <IconLocation className="h-4 w-4" />
                  {item.location}
                </p>

                <p className="mt-3 inline-flex rounded-full border border-primary/30 bg-primary/10 px-3 py-1 text-xs font-medium text-primary-light">
                  {item.type}
                </p>

                <Stagger as="ul" className="mt-5 space-y-2.5">
                  {item.responsibilities.map((r) => (
                    <li
                      key={r}
                      className="flex items-start gap-3 text-sm leading-relaxed text-muted"
                    >
                      <span className="mt-1 flex h-4 w-4 shrink-0 items-center justify-center rounded-full bg-accent/15 text-accent transition-all duration-200 group-hover:scale-110 group-hover:bg-accent/25">
                        <IconCheck className="h-3 w-3" />
                      </span>
                      {r}
                    </li>
                  ))}
                </Stagger>
              </article>
            </Reveal>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}