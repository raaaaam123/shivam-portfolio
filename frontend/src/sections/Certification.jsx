import SectionHeading from "../components/SectionHeading";
import Reveal from "../components/Reveal";
import { IconCertificate, IconLocation } from "../components/Icons";
import certifications from "../data/certifications";

export default function Certification() {
  return (
    <section className="relative py-16 sm:py-20 lg:py-28">
      <div className="mx-auto max-w-6xl px-5 sm:px-8">
        <SectionHeading
          eyebrow="Certifications"
          title="Professional Certifications"
        />

        <div className="mx-auto grid max-w-3xl gap-8">
          {certifications.map((cert, i) => (
            <Reveal key={cert.id} delay={i * 90} direction="zoom" blur>
              <article className="group relative overflow-hidden rounded-2xl border border-edge bg-panel/60 p-7 backdrop-blur transition-all duration-300 hover:-translate-y-1 hover:border-accent/50 hover:shadow-xl hover:shadow-accent/10 active:scale-[0.99] sm:p-9">
                <div className="absolute inset-x-0 top-0 h-[2px] origin-left scale-x-0 bg-gradient-to-r from-accent to-primary transition-transform duration-300 group-hover:scale-x-100" />
                <div className="absolute -top-16 -right-16 h-48 w-48 rounded-full bg-gradient-to-br from-accent/15 to-primary/10 opacity-60 blur-2xl transition-opacity duration-300 group-hover:opacity-100" />

                <div className="relative flex flex-col gap-5 sm:flex-row">
                  <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl border border-accent/30 bg-accent/10 text-accent transition-transform duration-300 group-hover:-rotate-6 group-hover:scale-110 sm:h-16 sm:w-16">
                    <IconCertificate className="h-7 w-7" />
                  </div>

                  <div className="flex-1">
                    <h3 className="font-display text-xl font-semibold text-soft">
                      {cert.title}
                    </h3>
                    <div className="mt-3 flex flex-wrap items-center gap-3 text-sm text-muted">
                      <span className="inline-flex items-center gap-2 text-primary-light">
                        <IconLocation className="h-4 w-4" />
                        {cert.issuer}
                      </span>
                      <span className="hidden text-edge sm:inline">•</span>
                      <span className="rounded-full border border-edge bg-ink px-3 py-1 font-mono text-xs text-muted">
                        {cert.period}
                      </span>
                    </div>

                    <p className="mt-4 text-sm leading-relaxed text-muted">
                      {cert.description}
                    </p>
                  </div>
                </div>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}