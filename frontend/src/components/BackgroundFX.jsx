export default function BackgroundFX() {
  return (
    <div
      aria-hidden="true"
      className="pointer-events-none fixed inset-0 z-0 overflow-hidden"
    >
      <div className="bg-grid absolute inset-0" />
      <div className="animate-drift absolute -top-40 -left-40 h-[520px] w-[520px] rounded-full bg-primary/10 blur-[150px]" />
      <div className="animate-drift-slow absolute top-1/4 -right-48 h-[560px] w-[560px] rounded-full bg-accent/10 blur-[160px]" />
      <div className="animate-drift-rev absolute -bottom-48 left-1/4 h-[460px] w-[460px] rounded-full bg-emerald-400/10 blur-[150px]" />
      <div className="animate-aurora absolute top-1/2 left-2/3 h-[380px] w-[380px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-primary/8 blur-[140px]" />
    </div>
  );
}