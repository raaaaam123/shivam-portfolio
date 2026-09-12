import {
  IconCode,
  IconCSS,
  IconExpress,
  IconGit,
  IconGitHub,
  IconHTML,
  IconJavaScript,
  IconMongoDB,
  IconMongoose,
  IconNode,
  IconReact,
  IconShield,
  IconTailwind,
  IconVSCode,
} from "./Icons";

const normalize = (value) =>
  value.toLowerCase().replace(/[^a-z0-9]/g, "");

const REGISTRY = [
  { keys: ["html", "html5"], Icon: IconHTML, color: "#e34f26" },
  { keys: ["css", "css3"], Icon: IconCSS, color: "#1572b6" },
  { keys: ["javascript", "js", "es6"], Icon: IconJavaScript, color: "#f7df1e" },
  { keys: ["react", "reactjs"], Icon: IconReact, color: "#61dafb" },
  { keys: ["tailwindcss", "tailwind"], Icon: IconTailwind, color: "#38bdf8" },
  { keys: ["nodejs", "node"], Icon: IconNode, color: "#5fa04e" },
  { keys: ["expressjs", "express"], Icon: IconExpress, color: "#5eead4" },
  { keys: ["mongodb"], Icon: IconMongoDB, color: "#47a248" },
  { keys: ["mongoose"], Icon: IconMongoose, color: "#e07a5f" },
  { keys: ["git"], Icon: IconGit, color: "#f05032" },
  { keys: ["github"], Icon: IconGitHub, color: "#e2e8f0" },
  { keys: ["vscode", "visualstudiocode"], Icon: IconVSCode, color: "#2299e6" },
  { keys: ["jwt", "jwtauthentication"], Icon: IconShield, color: "#b18cff" },
];

const FALLBACK = { Icon: IconCode, color: "#94a3b8" };

export default function TechIcon({ tech, className = "h-4 w-4" }) {
  const entry =
    REGISTRY.find((item) => item.keys.includes(normalize(tech))) ?? FALLBACK;
  const { Icon } = entry;

  return (
    <span className="inline-flex shrink-0" style={{ color: entry.color }} aria-hidden="true">
      <Icon className={className} />
    </span>
  );
}   