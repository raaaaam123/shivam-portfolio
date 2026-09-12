import { Children, cloneElement, isValidElement, useEffect, useRef, useState } from "react";

const DIRECTION_CLASS = {
  up: "stagger-from-up",
  down: "stagger-from-down",
  left: "stagger-from-left",
  right: "stagger-from-right",
  zoom: "stagger-from-zoom",
};

export default function Stagger({
  as: Tag = "div",
  className = "",
  direction = "up",
  step = 90,
  base = 0,
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
      { threshold: 0, rootMargin: "0px 0px -40px 0px" }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, [visible]);

  return (
    <Tag
      ref={ref}
      className={`stagger ${DIRECTION_CLASS[direction] ?? DIRECTION_CLASS.up} ${
        visible ? "is-visible" : ""
      } ${className}`}
    >
      {Children.map(children, (child, index) => {
        if (!isValidElement(child)) return child;
        return cloneElement(child, {
          style: {
            "--stagger-i": index,
            "--stagger-base": `${base}ms`,
            "--stagger-step": `${step}ms`,
            ...(child.props.style ?? {}),
          },
        });
      })}
    </Tag>
  );
}