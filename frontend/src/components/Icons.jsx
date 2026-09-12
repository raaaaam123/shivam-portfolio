const svgProps = {
  fill: "none",
  viewBox: "0 0 24 24",
  stroke: "currentColor",
  strokeWidth: 1.8,
  strokeLinecap: "round",
  strokeLinejoin: "round",
};

export function IconGitHub({ className = "w-5 h-5" }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M12 .5A11.5 11.5 0 0 0 .5 12a11.5 11.5 0 0 0 7.86 10.92c.58.1.79-.25.79-.56v-2.13c-3.2.7-3.87-1.36-3.87-1.36-.52-1.33-1.28-1.68-1.28-1.68-1.04-.71.08-.7.08-.7 1.15.08 1.76 1.18 1.76 1.18 1.03 1.76 2.7 1.25 3.35.96.1-.75.4-1.25.72-1.54-2.55-.29-5.23-1.28-5.23-5.7 0-1.26.45-2.29 1.19-3.1-.12-.29-.52-1.46.11-3.05 0 0 .97-.31 3.18 1.18a11.04 11.04 0 0 1 5.79 0c2.2-1.49 3.17-1.18 3.17-1.18.63 1.59.23 2.76.11 3.05.74.81 1.19 1.84 1.19 3.1 0 4.43-2.69 5.4-5.25 5.69.41.35.78 1.05.78 2.12v3.15c0 .31.2.67.8.56A11.5 11.5 0 0 0 23.5 12 11.5 11.5 0 0 0 12 .5Z" />
    </svg>
  );
}

export function IconLinkedIn({ className = "w-5 h-5" }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M20.45 20.45h-3.55v-5.57c0-1.33-.03-3.04-1.85-3.04-1.85 0-2.14 1.45-2.14 2.94v5.67H9.36V9h3.41v1.56h.05c.48-.9 1.64-1.85 3.37-1.85 3.6 0 4.27 2.37 4.27 5.46v6.28ZM5.34 7.43a2.06 2.06 0 1 1 0-4.12 2.06 2.06 0 0 1 0 4.12ZM7.12 20.45H3.55V9h3.57v11.45ZM22.22 0H1.77C.79 0 0 .77 0 1.73v20.54C0 23.22.79 24 1.77 24h20.45c.98 0 1.78-.78 1.78-1.73V1.73C24 .77 23.2 0 22.22 0Z" />
    </svg>
  );
}

export function IconMail({ className = "w-5 h-5" }) {
  return (
    <svg {...svgProps} className={className} aria-hidden="true">
      <rect x="2" y="4" width="20" height="16" rx="2" />
      <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
    </svg>
  );
}

export function IconExternalLink({ className = "w-5 h-5" }) {
  return (
    <svg {...svgProps} className={className} aria-hidden="true">
      <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" />
      <path d="M15 3h6v6" />
      <path d="M10 14 21 3" />
    </svg>
  );
}

export function IconDownload({ className = "w-5 h-5" }) {
  return (
    <svg {...svgProps} className={className} aria-hidden="true">
      <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
      <path d="m7 10 5 5 5-5" />
      <path d="M12 15V3" />
    </svg>
  );
}

export function IconArrowRight({ className = "w-5 h-5" }) {
  return (
    <svg {...svgProps} className={className} aria-hidden="true">
      <path d="M5 12h14" />
      <path d="m12 5 7 7-7 7" />
    </svg>
  );
}

export function IconMenu({ className = "w-6 h-6" }) {
  return (
    <svg {...svgProps} className={className} aria-hidden="true">
      <path d="M4 6h16" />
      <path d="M4 12h16" />
      <path d="M4 18h16" />
    </svg>
  );
}

export function IconClose({ className = "w-6 h-6" }) {
  return (
    <svg {...svgProps} className={className} aria-hidden="true">
      <path d="M18 6 6 18" />
      <path d="m6 6 12 12" />
    </svg>
  );
}

export function IconLocation({ className = "w-5 h-5" }) {
  return (
    <svg {...svgProps} className={className} aria-hidden="true">
      <path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z" />
      <circle cx="12" cy="10" r="3" />
    </svg>
  );
}

export function IconCode({ className = "w-6 h-6" }) {
  return (
    <svg {...svgProps} className={className} aria-hidden="true">
      <path d="m16 18 6-6-6-6" />
      <path d="m8 6-6 6 6 6" />
    </svg>
  );
}

export function IconServer({ className = "w-6 h-6" }) {
  return (
    <svg {...svgProps} className={className} aria-hidden="true">
      <rect x="2" y="2" width="20" height="8" rx="2" />
      <rect x="2" y="14" width="20" height="8" rx="2" />
      <path d="M6 6h.01" />
      <path d="M6 18h.01" />
    </svg>
  );
}

export function IconDatabase({ className = "w-6 h-6" }) {
  return (
    <svg {...svgProps} className={className} aria-hidden="true">
      <ellipse cx="12" cy="5" rx="9" ry="3" />
      <path d="M21 12c0 1.66-4 3-9 3s-9-1.34-9-3" />
      <path d="M3 5v14c0 1.66 4 3 9 3s9-1.34 9-3V5" />
    </svg>
  );
}

export function IconLayers({ className = "w-6 h-6" }) {
  return (
    <svg {...svgProps} className={className} aria-hidden="true">
      <path d="m12 2 9 5-9 5-9-5 9-5Z" />
      <path d="m3 12 9 5 9-5" />
      <path d="m3 17 9 5 9-5" />
    </svg>
  );
}

export function IconCheck({ className = "w-4 h-4" }) {
  return (
    <svg {...svgProps} className={className} aria-hidden="true">
      <path d="m4 12 5 5L20 6" />
    </svg>
  );
}

export function IconBriefcase({ className = "w-6 h-6" }) {
  return (
    <svg {...svgProps} className={className} aria-hidden="true">
      <rect x="2" y="7" width="20" height="14" rx="2" />
      <path d="M16 7V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v2" />
    </svg>
  );
}

export function IconGraduation({ className = "w-6 h-6" }) {
  return (
    <svg {...svgProps} className={className} aria-hidden="true">
      <path d="M22 9 12 4 2 9l10 5 10-5Z" />
      <path d="M6 11.5V16c0 1.5 2.7 3 6 3s6-1.5 6-3v-4.5" />
      <path d="M22 9v5" />
    </svg>
  );
}

export function IconTerminal({ className = "w-6 h-6" }) {
  return (
    <svg {...svgProps} className={className} aria-hidden="true">
      <rect x="2" y="4" width="20" height="16" rx="2" />
      <path d="m7 9 3 3-3 3" />
      <path d="M13 15h4" />
    </svg>
  );
}

export function IconWrench({ className = "w-6 h-6" }) {
  return (
    <svg {...svgProps} className={className} aria-hidden="true">
      <path d="M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.91 6.91a2.12 2.12 0 0 1-3-3l6.91-6.91a6 6 0 0 1 7.94-7.94l-3.76 3.76Z" />
    </svg>
  );
}

export function IconCertificate({ className = "w-6 h-6" }) {
  return (
    <svg {...svgProps} className={className} aria-hidden="true">
      <circle cx="12" cy="9" r="6" />
      <path d="M8.5 14 7 22l3.5-2 1.5 2 1.5-2 3.5 2-1.5-8" />
      <circle cx="12" cy="9" r="2" />
    </svg>
  );
}

export function IconSpinner({ className = "w-5 h-5" }) {
  return (
    <svg className={`animate-spin ${className}`} fill="none" viewBox="0 0 24 24" aria-hidden="true">
      <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
      <path
        className="opacity-90"
        fill="currentColor"
        d="M4 12a8 8 0 0 1 8-8V0C5.37 0 0 5.37 0 12h4Z"
      />
    </svg>
  );
}

export function IconSend({ className = "w-5 h-5" }) {
  return (
    <svg {...svgProps} className={className} aria-hidden="true">
      <path d="M22 2 11 13" />
      <path d="M22 2 15 22l-4-9-9-4 20-7Z" />
    </svg>
  );
}

export function IconShield({ className = "w-5 h-5" }) {
  return (
    <svg {...svgProps} className={className} aria-hidden="true">
      <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10Z" />
      <path d="m9 12 2 2 4-4" />
    </svg>
  );
}

export function IconArrowUp({ className = "w-5 h-5" }) {
  return (
    <svg {...svgProps} className={className} aria-hidden="true">
      <path d="m5 12 7-7 7 7" />
      <path d="M12 19V5" />
    </svg>
  );
}

export function IconFolder({ className = "w-5 h-5" }) {
  return (
    <svg {...svgProps} className={className} aria-hidden="true">
      <path d="M20 20a2 2 0 0 0 2-2V8a2 2 0 0 0-2-2h-7.9a2 2 0 0 1-1.69-.9L9.6 3.9A2 2 0 0 0 7.93 3H4a2 2 0 0 0-2 2v13a2 2 0 0 0 2 2Z" />
    </svg>
  );
}

export function IconHTML({ className = "w-5 h-5" }) {
  return (
    <svg {...svgProps} className={className} aria-hidden="true">
      <rect x="3" y="4" width="18" height="16" rx="3" />
      <path d="m9 9-3 3 3 3" />
      <path d="m15 9 3 3-3 3" />
    </svg>
  );
}

export function IconCSS({ className = "w-5 h-5" }) {
  return (
    <svg {...svgProps} className={className} aria-hidden="true">
      <rect x="3" y="4" width="18" height="16" rx="3" />
      <path d="M7 10h10" />
      <path d="M7 14h10" />
    </svg>
  );
}

export function IconJavaScript({ className = "w-5 h-5" }) {
  return (
    <svg className={className} viewBox="0 0 24 24" aria-hidden="true">
      <rect width="24" height="24" rx="4" fill="#f7df1e" />
      <text
        x="12"
        y="17.5"
        textAnchor="middle"
        fontSize="11.5"
        fontWeight="700"
        fontFamily="Inter, system-ui, sans-serif"
        fill="#111827"
      >
        JS
      </text>
    </svg>
  );
}

export function IconReact({ className = "w-5 h-5" }) {
  return (
    <svg {...svgProps} className={className} strokeWidth={1.5} aria-hidden="true">
      <ellipse cx="12" cy="12" rx="10" ry="4.4" />
      <ellipse cx="12" cy="12" rx="10" ry="4.4" transform="rotate(60 12 12)" />
      <ellipse cx="12" cy="12" rx="10" ry="4.4" transform="rotate(120 12 12)" />
      <circle cx="12" cy="12" r="1.6" fill="currentColor" />
    </svg>
  );
}

export function IconTailwind({ className = "w-5 h-5" }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M12 6c-2.7 0-4.43 1.35-5.2 4.05 1.04-1.35 2.25-1.86 3.63-1.53.79.19 1.35.76 1.97 1.39 1.02 1.01 2.19 2.18 4.77 2.18 2.7 0 4.43-1.35 5.2-4.05-1.04 1.35-2.25 1.86-3.63 1.53-.79-.19-1.35-.76-1.97-1.39C14.55 7.18 13.38 6 12 6Z" />
      <path d="M4.43 11.79c-.79.19-1.35.76-1.97 1.39C1.44 14.19.27 15.36 3 15.36c2.7 0 4.43-1.35 5.2-4.05-1.04 1.35-2.25 1.86-3.63 1.53-.79-.19-1.35-.76-1.97-1.39L4.43 11.79Z" />
    </svg>
  );
}

export function IconNode({ className = "w-5 h-5" }) {
  return (
    <svg {...svgProps} className={className} strokeWidth={1.6} aria-hidden="true">
      <path d="M12 2.5 20.4 7v10L12 21.5 3.6 17V7L12 2.5Z" />
      <path d="M8.4 9.8c-.5 2 1.2 3 1.6 3.4.4-.8 1-1.2 1.4-1.4-.6-.3-2.2-1.5-1.4-3" />
    </svg>
  );
}

export function IconExpress({ className = "w-5 h-5" }) {
  return (
    <svg {...svgProps} className={className} strokeWidth={1.8} aria-hidden="true">
      <path d="M21 17c-1.8.6-3.6-.2-4.4-1.7" />
      <path d="M13 18.5c-2.5-.2-4.7-1.3-5.8-3.9" />
      <path d="M3.5 3v14" />
      <path d="M5.2 9.2c2.2 0 3.6 1.6 3.6 3.9V20.2" />
      <path d="M3.5 6l3.4 1.4" />
    </svg>
  );
}

export function IconMongoDB({ className = "w-5 h-5" }) {
  return (
    <svg {...svgProps} className={className} strokeWidth={1.7} aria-hidden="true">
      <path d="M12 3c.5 2.2 1.2 6.8-1.1 13.2" />
      <path d="M12 3c-1.2 2.6-1.2 8.9.9 14.9" />
      <path d="M9.6 10a6 6 0 0 0 4.8 0" />
      <path d="M10.9 17.9h2.2" />
    </svg>
  );
}

export function IconMongoose({ className = "w-5 h-5" }) {
  return (
    <svg {...svgProps} className={className} strokeWidth={1.7} aria-hidden="true">
      <path d="M4 4c1.5-1 3.5-.6 4.6.6" />
      <path d="M8.6 4.6c-2.8 2.8-3 8.3.6 11.8 3 3 7 1.6 8-1.2" />
      <path d="M12.8 9.4c-1-.3-2 .2-2.4 1.2" />
      <path d="M19 4c-1.5-1-3.5-.6-4.6.6" />
    </svg>
  );
}

export function IconGit({ className = "w-5 h-5" }) {
  return (
    <svg {...svgProps} className={className} strokeWidth={1.7} aria-hidden="true">
      <circle cx="6" cy="5" r="2.2" />
      <circle cx="6" cy="19" r="2.2" />
      <circle cx="18" cy="8" r="2.2" />
      <path d="M6 7.2v9.6" />
      <path d="M6 12h9.8a2.2 2.2 0 0 0 2.2-1.8V10" />
    </svg>
  );
}

export function IconVSCode({ className = "w-5 h-5" }) {
  return (
    <svg {...svgProps} className={className} strokeWidth={1.8} aria-hidden="true">
      <path d="m8.5 8.5-1-2a2 2 0 0 1 2.2-2.8l11 2.6a2 2 0 0 1 1.5 2V12.7a2 2 0 0 1 .2 2.7l-4 5a2 2 0 0 1-3 .3L3.3 13a2 2 0 0 1 .2-3.2" />
      <path d="m7 8.5 8.5 1.4L3 16.5" />
      <path d="M16.5 3.5 9.5 12l7 4.5" />
    </svg>
  );
}