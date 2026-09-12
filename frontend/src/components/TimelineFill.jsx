import { useEffect, useRef, useState } from "react";

export default function TimelineFill({ className = "", delay = 0 }) {
  const ref = useRef(null);
  const [on, setOn] = useState(() => {
    if (
      typeof window !== "undefined" &&
      window.matchMedia("(prefers-reduced-motion: reduce)").matches
    ) {
      return true;
    }
    return false;
  });

  useEffect(() => {
    const el = ref.current;
    if (!el || on) return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setOn(true);
          observer.disconnect();
        }
      },
      { threshold: 0, rootMargin: "0px 0px -32px 0px" }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, [on]);

  return (
    <div
      ref={ref}
      aria-hidden="true"
      style={delay ? { transitionDelay: `${delay}ms` } : undefined}
      className={`absolute top-0 bottom-0 w-px origin-top bg-gradient-to-b transition-transform duration-700 ease-out ${on ? "scale-y-100" : "scale-y-0"} ${className}`}
    />
  );
}