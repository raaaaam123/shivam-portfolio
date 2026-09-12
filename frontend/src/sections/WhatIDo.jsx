import SectionHeading from "../components/SectionHeading";
import Reveal from "../components/Reveal";
import { IconCode, IconDatabase, IconLayers, IconServer } from "../components/Icons";

const services = [
  {
    title: "Frontend Development",
    description:
      "I build fast, responsive and accessible user interfaces with React.js and Tailwind CSS, focusing on clean layout, interactive components and mobile-first design.",
    icon: IconCode,
    gradient: "from-primary/25 to-accent/10",
  },
  {
    title: "Backend Development",
    description:
      "I design and build REST APIs and server-side logic with Node.js and Express.js, including authentication, route protection and business logic.",
    icon: IconServer,
    gradient: "from-accent/25 to-primary/10",
  },
  {
    title: "Database Integration",
    description:
      "I model and connect databases using MongoDB and Mongoose, structuring schemas for efficient queries and smooth CRUD operations.",
    icon: IconDatabase,
    gradient: "from-emerald-400/20 to-accent/10",
  },
  {
    title: "Full-Stack Development",
    description:
      "I bring frontend and backend together to deliver complete web applications, from initial idea through to a deployable MERN stack product.",
    icon: IconLayers,
    gradient: "from-amber-400/20 to-primary/10",
  },
];

export default function WhatIDo() {
  return (
    <section className="relative py-16 sm:py-20 lg:py-28">
      <div className="mx-auto max-w-6xl px-5 sm:px-8">
        <SectionHeading
          eyebrow="What I Do"
          title="Services I Offer"
          description="Focused capabilities across the full stack — from UI to API to database."
        />

        <div className="grid gap-6 sm:grid-cols-2">
          {services.map((svc, i) => {
            const Icon = svc.icon;
            return (
              <Reveal key={svc.title} delay={(i % 2) * 90}>
                <article className="group relative h-full overflow-hidden rounded-2xl border border-edge bg-panel/60 p-7 backdrop-blur transition-all duration-300 hover:-translate-y-1 hover:border-primary/40 hover:shadow-xl hover:shadow-primary/10 active:scale-[0.99] sm:p-8">
                  <div
                    className={`pointer-events-none absolute -top-20 -right-20 h-52 w-52 rounded-full bg-gradient-to-br ${svc.gradient} opacity-60 blur-2xl transition-opacity duration-300 group-hover:opacity-100`}
                    aria-hidden="true"
                  />

                  <div className="relative">
                    <div className="mb-5 inline-flex h-13 w-13 items-center justify-center rounded-xl border border-primary/30 bg-primary/10 p-3 text-primary-light transition-transform duration-300 group-hover:-rotate-6 group-hover:scale-110">
                      <Icon />
                    </div>
                    <h3 className="font-display text-xl font-semibold text-soft">
                      {svc.title}
                    </h3>
                    <p className="mt-3 text-sm leading-relaxed text-muted">
                      {svc.description}
                    </p>
                  </div>
                </article>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}