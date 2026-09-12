import SectionHeading from "../components/SectionHeading";
import Reveal from "../components/Reveal";
import TimelineFill from "../components/TimelineFill";
import { IconGraduation, IconLocation } from "../components/Icons";
import education from "../data/education";

export default function Education() {
  return (
    <section id="education" className="relative overflow-hidden py-16 sm:py-20 lg:py-28">
      <div
        className="animate-aurora pointer-events-none absolute -right-20 top-20 h-64 w-64 rounded-full bg-accent/10 blur-[100px]"
        aria-hidden="true"
      />
      <div className="mx-auto max-w-5xl px-5 sm:px-8">
        <SectionHeading
          eyebrow="Education"
          title="My Academic Journey"
          description="The academic qualifications and milestones that have shaped my technical foundation."
        />

        <div className="relative">
          <div
            className="absolute left-10 top-0 bottom-0 w-px bg-gradient-to-b from-primary/50 via-primary/30 to-edge/40 lg:left-1/2"
            aria-hidden="true"
          />

          <div className="space-y-14">
            {education.map((item, i) => {
              const isLeft = i % 2 === 0;
              return (
                <div key={item.id} className="relative">
                  <TimelineFill
                    delay={i * 140 + 180}
                    className="left-10 from-primary/60 via-primary/40 to-primary/20 lg:left-1/2"
                  />
                  <div
                    className="absolute left-10 top-6 z-10 flex h-3.5 w-3.5 -translate-x-1/2 items-center justify-center rounded-full border-2 border-primary bg-void transition-shadow duration-300 lg:left-1/2"
                    aria-hidden="true"
                  >
                    <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-primary/30 opacity-50" />
                  </div>

                  <div className="lg:grid lg:grid-cols-2 lg:gap-20">
                    {isLeft ? (
                      <>
                        <Reveal direction="right" delay={i * 140}>
                          <article className="group ml-12 rounded-2xl border border-edge bg-panel/60 p-6 backdrop-blur transition-all duration-300 hover:-translate-y-1 hover:border-primary/40 hover:shadow-xl hover:shadow-primary/10 sm:p-7 lg:ml-0">
                            <div className="flex flex-wrap items-start justify-between gap-3">
                              <div className="flex items-start gap-3">
<span className="mt-0.5 flex h-8 w-8 shrink-0 items-center justify-center rounded-xl border border-primary/40 bg-primary/10 text-primary-light transition-transform duration-300 group-hover:-rotate-6 group-hover:scale-110">
  <IconGraduation className="h-4 w-4" />
</span>
                                <h3 className="font-display text-xl font-semibold text-soft">
                                  {item.degree}
                                </h3>
                              </div>
                              <span className="rounded-full border border-edge bg-ink px-4 py-1.5 font-mono text-[11px] text-muted">
                                {item.period}
                              </span>
                            </div>
                            <p className="mt-4 ml-11 font-mono text-sm text-primary-light">
                              {item.school}
                            </p>
                            <p className="mt-2 ml-11 flex items-center gap-2 text-sm text-muted">
                              <IconLocation className="h-4 w-4" />
                              {item.location}
                            </p>
                          </article>
                        </Reveal>
                        <div className="hidden lg:block" />
                      </>
                    ) : (
                      <>
                        <div className="hidden lg:block" />
                        <Reveal direction="left" delay={i * 140}>
                          <article className="group ml-12 rounded-2xl border border-edge bg-panel/60 p-6 backdrop-blur transition-all duration-300 hover:-translate-y-1 hover:border-primary/40 hover:shadow-xl hover:shadow-primary/10 sm:p-7 lg:ml-0">
                            <div className="flex flex-wrap items-start justify-between gap-3">
                              <div className="flex items-start gap-3">
<span className="mt-0.5 flex h-8 w-8 shrink-0 items-center justify-center rounded-xl border border-primary/40 bg-primary/10 text-primary-light transition-transform duration-300 group-hover:-rotate-6 group-hover:scale-110">
  <IconGraduation className="h-4 w-4" />
</span>
                                <h3 className="font-display text-xl font-semibold text-soft">
                                  {item.degree}
                                </h3>
                              </div>
                              <span className="rounded-full border border-edge bg-ink px-4 py-1.5 font-mono text-[11px] text-muted">
                                {item.period}
                              </span>
                            </div>
                            <p className="mt-4 ml-11 font-mono text-sm text-primary-light">
                              {item.school}
                            </p>
                            <p className="mt-2 ml-11 flex items-center gap-2 text-sm text-muted">
                              <IconLocation className="h-4 w-4" />
                              {item.location}
                            </p>
                          </article>
                        </Reveal>
                      </>
                    )}
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}