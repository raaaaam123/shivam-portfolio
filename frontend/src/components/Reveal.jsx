import { useEffect, useRef, useState } from "react";

const DIRECTION_CLASSES = {
  none: "",
  up: "translate-y-6 sm:translate-y-10",
  down: "-translate-y-6 sm:-translate-y-10",
  left: "translate-x-6 sm:translate-x-10",
  right: "-translate-x-6 sm:-translate-x-10",
  zoom: "scale-95",
};

export default function Reveal({
  as: Tag = "div",
  className = "",
  direction = "up",
  delay = 0,
  blur = false,
  children,
}) {
  const ref = useRef(null);
  const [visible, setVisible] = useState(() => {
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
    if (!el || visible) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0, rootMargin: "0px 0px -32px 0px" }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, [visible]);

  const hiddenState = `will-change-transform opacity-0 ${
    DIRECTION_CLASSES[direction] ?? DIRECTION_CLASSES.up
  }${blur ? " blur-md" : ""}`;

  return (
    <Tag
      ref={ref}
      style={delay ? { transitionDelay: `${delay}ms` } : undefined}
      className={`min-w-0 transition-all duration-700 ease-out ${
        visible
          ? `translate-x-0 translate-y-0 scale-100 opacity-100 will-change-auto sm:translate-x-0 sm:translate-y-0${blur ? " blur-0" : ""}`
          : hiddenState
      } ${className}`}
    >
      {children}
    </Tag>
  );
}
