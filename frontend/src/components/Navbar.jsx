import { useCallback, useEffect, useRef, useState } from "react";
import { IconClose, IconMenu, IconMail } from "./Icons";

const NAV_LINKS = [
  { label: "Home", href: "#home" },
  { label: "About", href: "#about" },
  { label: "Skills", href: "#skills" },
  { label: "Experience", href: "#experience", showFromLg: true },
  { label: "Education", href: "#education", showFromLg: true },
  { label: "Projects", href: "#projects" },
  { label: "Contact", href: "#contact" },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [closing, setClosing] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [active, setActive] = useState("#home");
  const [progress, setProgress] = useState(0);
  const closeTimer = useRef(null);

  const handleOpen = useCallback(() => {
    clearTimeout(closeTimer.current);
    setClosing(false);
    setOpen(true);
  }, []);

  const handleClose = useCallback(() => {
    if (closing || !open) return;
    setClosing(true);
    closeTimer.current = setTimeout(() => {
      setClosing(false);
      setOpen(false);
    }, 240);
  }, [closing, open]);

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 12);

      const maxScroll =
        document.documentElement.scrollHeight - window.innerHeight;
      setProgress(maxScroll > 0 ? Math.min(window.scrollY / maxScroll, 1) : 0);

      const scrollPos = window.scrollY + 140;
      let current = "#home";
      for (const link of NAV_LINKS) {
        const el = document.getElementById(link.href.slice(1));
        if (el && el.offsetTop <= scrollPos) {
          current = link.href;
        }
      }
      if (window.innerHeight + window.scrollY >= document.documentElement.scrollHeight - 4) {
        current = "#contact";
      }
      setActive(current);
    };

    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  useEffect(() => {
    if (closing || !open) return;
    const onKey = (e) => {
      if (e.key === "Escape") handleClose();
    };
    const onDocumentClick = (e) => {
      if (!e.target.closest("[data-nav-root]")) handleClose();
    };
    window.addEventListener("keydown", onKey);
    document.addEventListener("pointerdown", onDocumentClick);
    return () => {
      window.removeEventListener("keydown", onKey);
      document.removeEventListener("pointerdown", onDocumentClick);
    };
  }, [open, closing, handleClose]);

  return (
    <header
      data-nav-root
      className={`animate-fade-in-down fixed inset-x-0 top-0 z-50 transition-all duration-300 ${
        scrolled
          ? "border-b border-edge bg-void/85 shadow-lg shadow-black/30 backdrop-blur-xl"
          : "border-b border-transparent bg-transparent"
      }`}
    >
      <div
        aria-hidden="true"
        className="absolute inset-x-0 top-0 z-[60] h-0.5 origin-left bg-gradient-to-r from-primary via-accent to-cyan-300 transition-transform duration-150 ease-out"
        style={{ transform: `scaleX(${progress})` }}
      />
      <nav className="mx-auto flex h-16 max-w-6xl items-center justify-between px-5 sm:h-[72px] sm:px-8">
        <a
          href="#home"
          onClick={handleClose}
          className="animate-fade-in-down font-display text-lg font-bold tracking-tight text-soft focus-visible:ring-2 focus-visible:ring-primary/50 focus-visible:outline-none"
        >
          Shivam<span className="text-gradient">.prajapati</span>
        </a>

        <ul className="hidden items-center md:flex md:gap-6 lg:gap-7">
          {NAV_LINKS.map((link, index) => {
            const isActive = active === link.href;
            return (
              <li
                key={link.href}
                className={`animate-fade-in-down ${link.showFromLg ? "hidden lg:block" : ""}`}
                style={{ animationDelay: `${0.1 + index * 0.06}s` }}
              >
                <a
                  href={link.href}
                  aria-current={isActive ? "true" : undefined}
                  className={`relative whitespace-nowrap text-sm font-medium transition-colors after:absolute after:-bottom-1.5 after:left-0 after:h-0.5 after:w-full after:origin-left after:scale-x-0 after:rounded-full after:bg-gradient-to-r after:from-primary after:to-accent after:transition-transform after:duration-300 hover:after:scale-x-100 focus-visible:ring-2 focus-visible:ring-primary/50 focus-visible:outline-none ${
                    isActive
                      ? "text-soft after:scale-x-100"
                      : "text-muted hover:text-soft"
                  }`}
                >
                  {link.label}
                </a>
              </li>
            );
          })}
        </ul>

        <div className="flex items-center gap-3">
          <a
            href="#contact"
            className="btn-shine hidden items-center gap-2 rounded-full bg-gradient-to-r from-primary to-accent px-5 py-2.5 text-sm font-semibold text-white shadow-lg shadow-primary/25 transition-all hover:shadow-primary/40 hover:brightness-110 active:scale-[0.98] focus-visible:ring-2 focus-visible:ring-accent/60 focus-visible:outline-none lg:inline-flex"
          >
            <IconMail className="h-4 w-4" />
            Let's Talk
          </a>

          <button
            type="button"
            aria-label={open ? "Close menu" : "Open menu"}
            aria-expanded={open}
            aria-controls="mobile-menu"
            onClick={() => (open ? handleClose() : handleOpen())}
            className="inline-flex h-11 w-11 items-center justify-center rounded-xl border border-edge bg-panel/60 text-soft transition-all hover:border-primary/50 hover:shadow-lg hover:shadow-primary/10 active:scale-95 focus-visible:ring-2 focus-visible:ring-primary/50 focus-visible:outline-none md:hidden"
          >
            <span className="relative block h-6 w-6">
              <IconMenu
                className={`absolute inset-0 h-6 w-6 transition-all duration-300 ${
                  open ? "rotate-90 scale-50 opacity-0" : "rotate-0 scale-100 opacity-100"
                }`}
              />
              <IconClose
                className={`absolute inset-0 h-6 w-6 transition-all duration-300 ${
                  open ? "rotate-0 scale-100 opacity-100" : "-rotate-90 scale-50 opacity-0"
                }`}
              />
            </span>
          </button>
        </div>
      </nav>

      {(open || closing) && (
        <div
          data-menu-root
          id="mobile-menu"
          aria-hidden={!open}
          className="fixed inset-0 top-16 z-40 sm:top-[72px] md:hidden"
        >
          <div
            className={`animate-fade-in absolute inset-0 bg-void/70 backdrop-blur-sm transition-opacity duration-200 ${
              open ? "opacity-100" : "opacity-0 pointer-events-none"
            }`}
            onClick={handleClose}
          />
          <div
            className={`animate-slide-down absolute inset-x-0 top-0 max-h-[calc(100dvh-4rem)] origin-top overflow-y-auto border-b border-edge bg-ink/95 px-5 py-6 shadow-2xl shadow-black/40 transition-[opacity,transform] duration-200 ${
              open ? "opacity-100" : "-translate-y-3 opacity-0 pointer-events-none"
            }`}
          >
            <ul className="flex flex-col gap-1">
              {NAV_LINKS.map((link, index) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    onClick={handleClose}
                    style={{ animationDelay: `${0.05 + index * 0.06}s` }}
                    className={`animate-fade-in-up block rounded-xl px-4 py-3 text-base font-medium transition-all duration-200 active:scale-[0.98] focus-visible:ring-2 focus-visible:ring-primary/50 focus-visible:outline-none ${
                      active === link.href
                        ? "bg-panel text-soft"
                        : "text-muted hover:bg-panel hover:text-soft"
                    }`}
                  >
                    {link.label}
                  </a>
                </li>
              ))}
              <li className="mt-3">
                <a
                  href="#contact"
                  onClick={handleClose}
                  style={{ animationDelay: `${0.05 + NAV_LINKS.length * 0.06}s` }}
                  className="btn-shine animate-fade-in-up flex items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-primary to-accent px-4 py-3 text-sm font-semibold text-white shadow-lg shadow-primary/25 focus-visible:ring-2 focus-visible:ring-accent/60 focus-visible:outline-none"
                >
                  <IconMail className="h-4 w-4" />
                  Let's Talk
                </a>
              </li>
            </ul>
          </div>
        </div>
      )}
    </header>
  );
}