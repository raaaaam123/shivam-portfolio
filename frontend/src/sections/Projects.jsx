import SectionHeading from "../components/SectionHeading";
import Reveal from "../components/Reveal";
import ProjectCard from "../components/ProjectCard";
import { IconFolder } from "../components/Icons";
import projects from "../data/projects";

const featuredProjects = projects.filter((p) => p.featured);
const otherProjects = projects.filter((p) => !p.featured);

function ProjectGrid({ items }) {
  return (
    <div className="grid gap-8 sm:grid-cols-2">
      {items.map((project, i) => (
        <Reveal key={project.id} delay={i * 120}>
          <ProjectCard project={project} />
        </Reveal>
      ))}
    </div>
  );
}

export default function Projects() {
  return (
    <section id="projects" className="relative overflow-hidden py-16 sm:py-20 lg:py-28">
      <div
        className="animate-aurora pointer-events-none absolute left-1/2 top-0 h-64 w-80 -translate-x-1/2 rounded-full bg-primary/10 blur-[100px]"
        aria-hidden="true"
      />
      <div className="mx-auto max-w-6xl px-5 sm:px-8">
        <SectionHeading
          eyebrow="Projects"
          title="What I've Built"
          description="Real applications I've designed and built using the MERN stack."
        />

        {featuredProjects.length > 0 && (
          <Reveal>
            <div className="mb-8 flex items-center gap-4">
              <IconFolder className="text-accent" />
              <h3 className="font-display text-lg font-semibold text-soft sm:text-xl">
                Featured Projects
              </h3>
              <div className="h-px flex-1 bg-gradient-to-r from-edge to-transparent" />
              <span className="shrink-0 rounded-full border border-edge bg-ink px-3 py-1 font-mono text-xs text-muted">
                {featuredProjects.length} project{featuredProjects.length > 1 ? "s" : ""}
              </span>
            </div>
          </Reveal>
        )}

        {featuredProjects.length > 0 && <ProjectGrid items={featuredProjects} />}

        {otherProjects.length > 0 && (
          <Reveal>
            <div className="mb-8 mt-16 flex items-center gap-4">
              <IconFolder className="text-accent" />
              <h3 className="font-display text-lg font-semibold text-soft sm:text-xl">
                More Projects
              </h3>
              <div className="h-px flex-1 bg-gradient-to-r from-edge to-transparent" />
              <span className="shrink-0 rounded-full border border-edge bg-ink px-3 py-1 font-mono text-xs text-muted">
                {otherProjects.length} project{otherProjects.length > 1 ? "s" : ""}
              </span>
            </div>
          </Reveal>
        )}

        {otherProjects.length > 0 && <ProjectGrid items={otherProjects} />}
      </div>
    </section>
  );
}