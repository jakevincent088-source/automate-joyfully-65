import { type ReactNode } from "react";

export function PageHero({
  eyebrow,
  title,
  sub,
}: {
  eyebrow: string;
  title: ReactNode;
  sub?: string;
}) {
  return (
    <section className="relative overflow-hidden grid-bg border-b border-border">
      <div className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute -top-40 left-1/4 h-[400px] w-[400px] rounded-full bg-primary/20 blur-[100px]" />
        <div className="absolute -top-20 right-1/4 h-[400px] w-[400px] rounded-full bg-secondary/20 blur-[100px]" />
      </div>
      <div className="max-w-7xl mx-auto px-6 pt-16 pb-16 md:pt-24 md:pb-20">
        <div className="inline-flex items-center gap-2 text-xs font-mono uppercase tracking-widest text-primary">
          <span className="size-1.5 rounded-full bg-primary" /> {eyebrow}
        </div>
        <h1 className="mt-3 text-4xl md:text-6xl font-black tracking-tight text-foreground leading-[1.05] max-w-4xl">
          {title}
        </h1>
        {sub && (
          <p className="mt-5 text-lg text-muted-foreground max-w-2xl">{sub}</p>
        )}
      </div>
    </section>
  );
}

export function Section({ children }: { children: ReactNode }) {
  return (
    <section className="max-w-7xl mx-auto px-6 py-16 md:py-20">{children}</section>
  );
}

export function GlassCard({
  children,
  className = "",
}: {
  children: ReactNode;
  className?: string;
}) {
  return (
    <div className={`rounded-2xl border border-border bg-card/50 backdrop-blur p-6 ${className}`}>
      {children}
    </div>
  );
}
