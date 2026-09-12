import {
  IconCode,
  IconDatabase,
  IconServer,
  IconWrench,
} from "./Icons";
import Stagger from "./Stagger";
import TechIcon from "./TechIcon";

const GROUP_ICONS = {
  Frontend: IconCode,
  Backend: IconServer,
  Database: IconDatabase,
  Tools: IconWrench,
};

const GRADIENT_BY_GROUP = {
  Frontend: "from-primary/25 to-accent/10",
  Backend: "from-accent/25 to-primary/10",
  Database: "from-emerald-400/20 to-accent/10",
  Tools: "from-sky-400/20 to-accent/10",
};

export default function SkillGroupCard({ group }) {
  const Icon = GROUP_ICONS[group.title] ?? IconCode;

  return (
    <article className="group relative flex h-full flex-col overflow-hidden rounded-2xl border border-edge bg-panel/60 p-6 backdrop-blur transition-all duration-300 hover:-translate-y-1.5 hover:border-primary/40 hover:shadow-xl hover:shadow-primary/10 active:scale-[0.99]">
      <div
        className={`pointer-events-none absolute -top-16 -right-16 h-44 w-44 rounded-full bg-gradient-to-br ${GRADIENT_BY_GROUP[group.title] ?? "from-primary/20 to-accent/10"} opacity-60 blur-2xl transition-opacity duration-300 group-hover:opacity-100`}
        aria-hidden="true"
      />

      <div className="relative flex flex-1 flex-col">
        <div className="mb-5 inline-flex h-13 w-13 items-center justify-center rounded-xl border border-primary/30 bg-primary/10 p-3 text-primary-light transition-transform duration-300 group-hover:-rotate-6 group-hover:scale-110">
          <Icon />
        </div>
        <h3 className="font-display text-lg font-semibold text-soft">
          {group.title}
        </h3>

        <Stagger as="ul" className="mt-4 flex flex-wrap gap-2">
          {group.skills.map((skill) => (
            <li key={skill}>
              <span className="flex items-center gap-2 rounded-full border border-edge bg-ink px-3 py-1.5 text-xs font-medium text-muted transition-all duration-300 hover:scale-105 hover:border-primary/40 hover:text-soft">
                <TechIcon tech={skill} className="h-3.5 w-3.5" />
                {skill}
              </span>
            </li>
          ))}
        </Stagger>
      </div>
    </article>
  );
}