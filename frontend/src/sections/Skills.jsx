import SectionHeading from "../components/SectionHeading";
import Reveal from "../components/Reveal";
import SkillGroupCard from "../components/SkillGroupCard";
import skillGroups from "../data/skills";

export default function Skills() {
  return (
    <section id="skills" className="relative py-16 sm:py-20 lg:py-28">
      <div
        className="animate-aurora pointer-events-none absolute left-0 top-1/3 h-72 w-72 rounded-full bg-primary/10 blur-[100px]"
        aria-hidden="true"
      />
      <div className="mx-auto max-w-6xl px-5 sm:px-8">
        <SectionHeading
          eyebrow="Technical Skills"
          title="My Tech Stack"
          description="The tools and technologies I use to design, build and ship full-stack web applications."
        />

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {skillGroups.map((group, i) => (
            <Reveal key={group.title} delay={i * 90}>
              <SkillGroupCard group={group} />
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}