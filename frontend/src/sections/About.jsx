import SectionHeading from "../components/SectionHeading";
import Reveal from "../components/Reveal";
import Stagger from "../components/Stagger";
import {
  IconBriefcase,
  IconCode,
  IconGraduation,
  IconLayers,
  IconLocation,
} from "../components/Icons";

const HIGHLIGHT_CARDS = [
  {
    title: "MCA",
    line: "Master of Computer Application, 2025",
    Icon: IconGraduation,
    gradient: "from-primary/25 to-accent/10",
  },
  {
    title: "MERN Stack",
    line: "React.js, Node.js, Express.js, MongoDB",
    Icon: IconLayers,
    gradient: "from-accent/25 to-primary/10",
  },
  {
    title: "Web Development Internship",
    line: "Analyze Infotech, Lucknow",
    Icon: IconBriefcase,
    gradient: "from-emerald-400/20 to-accent/10",
  },
  {
    title: "Full-Stack Projects",
    line: "E-commerce platform & job portal",
    Icon: IconCode,
    gradient: "from-amber-400/20 to-primary/10",
  },
];

export default function About() {
  return (
    <section id="about" className="relative overflow-hidden py-16 sm:py-20 lg:py-28">
      <div className="mx-auto max-w-6xl px-5 sm:px-8">
        <SectionHeading eyebrow="About Me" title="Get to Know Me" />

        <div className="grid items-start gap-12 lg:grid-cols-2">
          <Stagger direction="left" className="min-w-0">
            <h3 className="font-display text-2xl font-semibold text-soft sm:text-[1.7rem]">
              A MERN Stack Developer focused on shipping real products
            </h3>
            <p className="mt-5 leading-relaxed text-muted">
              I'm Shivam Prajapati, a MERN Stack Developer from Uttar
              Pradesh, India. I completed my Master of Computer Application
              (MCA) in 2025, and during my internship at Analyze Infotech I
              built a full Student Information System with the MERN stack —
              handling student registration, record management, admin
              authentication and responsive interfaces end to end.
            </p>
            <p className="mt-4 leading-relaxed text-muted">
              Since then I've continued to build full-stack applications on
              my own, including a multi-vendor e-commerce platform and a job
              portal, both powered by React.js on the frontend and Node.js,
              Express.js and MongoDB on the backend. I enjoy turning ideas
              into clean, working, responsive products.
            </p>
            <p className="mt-5 inline-flex items-center gap-2 rounded-xl border border-edge bg-panel/60 px-4 py-2.5 text-sm text-muted backdrop-blur">
              <IconLocation className="h-4 w-4 text-accent" />
              Gola Gokaran Nath, Lakhimpur Kheri, Uttar Pradesh, India
            </p>
          </Stagger>

          <div className="grid gap-5 sm:grid-cols-2">
            {HIGHLIGHT_CARDS.map((card, i) => {
              const Icon = card.Icon;
              return (
                <Reveal key={card.title} delay={i * 90}>
                  <article className="group relative h-full overflow-hidden rounded-2xl border border-edge bg-panel/60 p-5 backdrop-blur transition-all duration-300 hover:-translate-y-1 hover:border-primary/40 hover:shadow-xl hover:shadow-primary/10 active:scale-[0.99]">
                    <div
                      className={`pointer-events-none absolute -top-14 -right-14 h-36 w-36 rounded-full bg-gradient-to-br ${card.gradient} blur-2xl opacity-60 transition-opacity duration-300 group-hover:opacity-100`}
                      aria-hidden="true"
                    />
                    <div className="relative">
                      <div className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-xl border border-primary/30 bg-primary/10 text-primary-light transition-transform duration-300 group-hover:-rotate-6 group-hover:scale-110">
                        <Icon />
                      </div>
                      <h3 className="font-display text-base font-semibold text-soft">
                        {card.title}
                      </h3>
                      <p className="mt-1.5 text-sm leading-relaxed text-muted">
                        {card.line}
                      </p>
                    </div>
                  </article>
                </Reveal>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}