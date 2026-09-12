import socialLinks from "../data/socialLinks";
import Reveal from "./Reveal";
import Stagger from "./Stagger";
import { IconArrowUp, IconGitHub, IconLinkedIn, IconMail } from "./Icons";

const FOOTER_NAV = [
  { label: "Home", href: "#home" },
  { label: "About", href: "#about" },
  { label: "Skills", href: "#skills" },
  { label: "Experience", href: "#experience" },
  { label: "Education", href: "#education" },
  { label: "Projects", href: "#projects" },
  { label: "Contact", href: "#contact" },
];

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="relative overflow-hidden border-t border-edge bg-ink">
      <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-primary/50 to-transparent" />
      <Reveal direction="up">
        <div className="mx-auto max-w-6xl px-5 pt-16 pb-8 sm:px-8">
        <Stagger className="grid gap-10 md:grid-cols-3 xl:grid-cols-[1.5fr_1fr_1fr]" base={80}>
          <div>
            <a
              href="#home"
              className="font-display text-lg font-bold text-soft focus-visible:ring-2 focus-visible:ring-primary/50 focus-visible:outline-none"
            >
              Shivam<span className="text-gradient">.prajapati</span>
            </a>
            <p className="mt-3 max-w-sm text-sm leading-relaxed text-muted">
              MERN Stack Developer building modern, responsive and full-stack
              web applications.
            </p>
            <div className="mt-5 flex items-center gap-3">
              <a
                href={socialLinks.github}
                target="_blank"
                rel="noreferrer"
                aria-label="GitHub"
                className="flex h-9 w-9 items-center justify-center rounded-xl border border-edge bg-panel/60 text-muted transition-all duration-200 hover:-translate-y-0.5 hover:-rotate-3 hover:border-primary/50 hover:text-soft focus-visible:ring-2 focus-visible:ring-primary/50 focus-visible:outline-none"
              >
                <IconGitHub className="h-4 w-4" />
              </a>
              <a
                href={socialLinks.email}
                aria-label="Email"
                className="flex h-9 w-9 items-center justify-center rounded-xl border border-edge bg-panel/60 text-muted transition-all duration-200 hover:-translate-y-0.5 hover:-rotate-3 hover:border-primary/50 hover:text-soft focus-visible:ring-2 focus-visible:ring-primary/50 focus-visible:outline-none"
              >
                <IconMail className="h-4 w-4" />
              </a>
              {socialLinks.linkedin && (
                <a
                  href={socialLinks.linkedin}
                  target="_blank"
                  rel="noreferrer"
                  aria-label="LinkedIn"
                  className="flex h-9 w-9 items-center justify-center rounded-xl border border-edge bg-panel/60 text-muted transition-all duration-200 hover:-translate-y-0.5 hover:-rotate-3 hover:border-primary/50 hover:text-soft focus-visible:ring-2 focus-visible:ring-primary/50 focus-visible:outline-none"
                >
                  <IconLinkedIn className="h-4 w-4" />
                </a>
              )}
            </div>
          </div>

          <nav aria-label="Footer navigation">
            <h3 className="font-display text-sm font-semibold tracking-wider text-soft uppercase">
              Navigation
            </h3>
            <ul className="mt-4 grid grid-cols-2 gap-x-6 gap-y-2">
              {FOOTER_NAV.map((item) => (
                <li key={item.href}>
                  <a
                    href={item.href}
                    className="text-sm text-muted transition-all duration-200 hover:translate-x-0.5 hover:text-soft focus-visible:ring-2 focus-visible:ring-primary/50 focus-visible:outline-none"
                  >
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>
          </nav>

          <div>
            <h3 className="font-display text-sm font-semibold tracking-wider text-soft uppercase">
              Location
            </h3>
            <p className="mt-4 text-sm leading-relaxed text-muted">
              Gola Gokaran Nath,
              <br />
              Lakhimpur Kheri, Uttar Pradesh,
              <br />
              India
            </p>
            <a
              href="#home"
              className="group mt-5 inline-flex items-center gap-2 text-sm font-medium text-primary-light transition-colors hover:text-accent focus-visible:ring-2 focus-visible:ring-primary/50 focus-visible:outline-none"
            >
              Back to top
              <IconArrowUp className="h-4 w-4 transition-transform duration-300 group-hover:-translate-y-0.5" />
            </a>
          </div>
        </Stagger>
        </div>
      </Reveal>

      <Reveal>
        <div className="border-t border-edge py-6">
          <p className="mx-auto max-w-6xl px-5 text-center text-sm text-muted sm:px-8">
            © {currentYear} Shivam Prajapati. Built with React.js & Tailwind CSS.
          </p>
        </div>
      </Reveal>
    </footer>
  );
}