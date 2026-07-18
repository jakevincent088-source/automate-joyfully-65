import { useEffect, useRef, useState } from "react";

export function HeroDashboard() {
  const [tick, setTick] = useState(0);
  useEffect(() => {
    const id = setInterval(() => setTick((t) => (t + 1) % 100), 1800);
    return () => clearInterval(id);
  }, []);

  const stages = ["New Lead", "Qualified", "Booked", "Won"];
  const counts = [42 + (tick % 5), 28 + (tick % 4), 17 + (tick % 3), 9 + (tick % 2)];

  return (
    <div className="relative w-full">
      {/* glow */}
      <div className="absolute -inset-6 rounded-[2rem] bg-gradient-to-br from-primary/30 via-secondary/30 to-accent/30 blur-3xl opacity-60" />

      <div className="relative rounded-3xl border border-border bg-card/80 backdrop-blur-xl shadow-2xl overflow-hidden">
        {/* window chrome */}
        <div className="flex items-center gap-2 px-4 py-3 border-b border-border bg-background/60">
          <div className="flex gap-1.5">
            <span className="size-3 rounded-full bg-red-500/70" />
            <span className="size-3 rounded-full bg-yellow-500/70" />
            <span className="size-3 rounded-full bg-emerald-500/70" />
          </div>
          <div className="mx-auto text-[11px] font-mono text-muted">
            automation.jaketalaba.io / dashboard
          </div>
          <div className="inline-flex items-center gap-1.5 text-[10px] font-mono text-emerald-400">
            <span className="size-1.5 rounded-full bg-emerald-400 animate-pulse" />
            LIVE
          </div>
        </div>

        <div className="grid grid-cols-12 gap-3 p-4">
          {/* KPIs */}
          <div className="col-span-12 grid grid-cols-3 gap-3">
            {[
              { l: "MRR Pipeline", v: "$84,320", d: "+18.4%", c: "text-emerald-400" },
              { l: "Automations", v: "1,247", d: "+312 wk", c: "text-primary" },
              { l: "CSAT", v: "98.6%", d: "▲ 2.1", c: "text-accent" },
            ].map((k) => (
              <div key={k.l} className="rounded-xl border border-border bg-background/60 p-3">
                <div className="text-[10px] font-mono uppercase text-muted tracking-widest">{k.l}</div>
                <div className="mt-1 text-lg font-bold text-foreground">{k.v}</div>
                <div className={`text-[10px] font-mono ${k.c}`}>{k.d}</div>
              </div>
            ))}
          </div>

          {/* Pipeline */}
          <div className="col-span-7 rounded-xl border border-border bg-background/40 p-3">
            <div className="flex items-center justify-between mb-3">
              <div className="text-xs font-semibold text-foreground">CRM Pipeline</div>
              <div className="text-[10px] font-mono text-muted">GoHighLevel · Live</div>
            </div>
            <div className="grid grid-cols-4 gap-2">
              {stages.map((s, i) => (
                <div key={s} className="rounded-lg border border-border/60 bg-card/60 p-2">
                  <div className="text-[10px] uppercase text-muted font-mono">{s}</div>
                  <div className="mt-1 text-base font-bold text-foreground">{counts[i]}</div>
                  <div className="mt-2 space-y-1">
                    {[0, 1, 2].map((k) => (
                      <div
                        key={k}
                        className="h-1.5 rounded-full bg-gradient-to-r from-primary/60 via-secondary/60 to-accent/60"
                        style={{ width: `${60 + ((tick + i * 7 + k * 13) % 40)}%` }}
                      />
                    ))}
                  </div>
                </div>
              ))}
            </div>
            {/* chart */}
            <svg viewBox="0 0 300 80" className="mt-3 w-full h-20">
              <defs>
                <linearGradient id="area" x1="0" x2="0" y1="0" y2="1">
                  <stop offset="0%" stopColor="#7C3AED" stopOpacity="0.5" />
                  <stop offset="100%" stopColor="#7C3AED" stopOpacity="0" />
                </linearGradient>
              </defs>
              <path
                d="M0,60 L30,55 L60,50 L90,45 L120,38 L150,42 L180,30 L210,22 L240,18 L270,12 L300,8 L300,80 L0,80 Z"
                fill="url(#area)"
              />
              <path
                d="M0,60 L30,55 L60,50 L90,45 L120,38 L150,42 L180,30 L210,22 L240,18 L270,12 L300,8"
                fill="none"
                stroke="#06B6D4"
                strokeWidth="2"
              />
            </svg>
          </div>

          {/* AI Chat */}
          <div className="col-span-5 rounded-xl border border-border bg-background/40 p-3 flex flex-col">
            <div className="flex items-center justify-between mb-3">
              <div className="text-xs font-semibold text-foreground">AI Assistant</div>
              <div className="inline-flex items-center gap-1.5 text-[10px] font-mono text-accent">
                <span className="size-1.5 rounded-full bg-accent animate-pulse" />
                Typing
              </div>
            </div>
            <div className="space-y-2 text-[11px] flex-1">
              <div className="max-w-[85%] rounded-2xl rounded-tl-sm bg-card/70 border border-border px-3 py-2 text-muted-foreground">
                Hi! I&apos;d like to book a cleaning.
              </div>
              <div className="ml-auto max-w-[85%] rounded-2xl rounded-tr-sm bg-gradient-to-br from-primary/25 to-secondary/25 border border-primary/30 px-3 py-2 text-foreground">
                Sure — I have Tue 10am or Wed 2pm open. Which works?
              </div>
              <div className="max-w-[85%] rounded-2xl rounded-tl-sm bg-card/70 border border-border px-3 py-2 text-muted-foreground">
                Wednesday 2pm please.
              </div>
              <div className="ml-auto max-w-[90%] rounded-2xl rounded-tr-sm bg-gradient-to-br from-secondary/25 to-accent/25 border border-accent/30 px-3 py-2 text-foreground">
                Booked ✓ Confirmation sent by SMS + Email. Reminder set for 24h prior.
              </div>
            </div>
          </div>

          {/* Workflow */}
          <div className="col-span-12 rounded-xl border border-border bg-background/40 p-3">
            <div className="flex items-center justify-between mb-2">
              <div className="text-xs font-semibold text-foreground">Live Workflow · Lead → Booked</div>
              <div className="text-[10px] font-mono text-muted">Zapier · GHL · Twilio</div>
            </div>
            <svg viewBox="0 0 600 90" className="w-full h-24">
              <defs>
                <linearGradient id="line" x1="0" x2="1" y1="0" y2="0">
                  <stop offset="0%" stopColor="#2563EB" />
                  <stop offset="50%" stopColor="#7C3AED" />
                  <stop offset="100%" stopColor="#06B6D4" />
                </linearGradient>
              </defs>
              {[
                { x: 40, l: "Form" },
                { x: 160, l: "AI Qualify" },
                { x: 290, l: "CRM" },
                { x: 420, l: "SMS + Email" },
                { x: 550, l: "Booked" },
              ].map((n, i, a) => (
                <g key={n.l}>
                  {i < a.length - 1 && (
                    <line
                      x1={n.x + 22}
                      y1="45"
                      x2={a[i + 1].x - 22}
                      y2="45"
                      stroke="url(#line)"
                      strokeWidth="2"
                      strokeDasharray="4 4"
                      className="animate-flow-dash"
                    />
                  )}
                  <circle cx={n.x} cy="45" r="18" fill="#111827" stroke="url(#line)" strokeWidth="2" />
                  <circle cx={n.x} cy="45" r="5" fill="url(#line)" className="animate-node-pulse" />
                  <text
                    x={n.x}
                    y="80"
                    textAnchor="middle"
                    fontSize="10"
                    fontFamily="ui-monospace, monospace"
                    fill="#9CA3AF"
                  >
                    {n.l}
                  </text>
                </g>
              ))}
            </svg>
          </div>
        </div>
      </div>

      {/* Floating tag chips */}
      <FloatingChip
        className="absolute -left-6 top-24"
        color="from-primary to-secondary"
        title="Lead captured"
        sub="acme@dental.com · 0.4s ago"
      />
      <FloatingChip
        className="absolute -right-4 bottom-40"
        color="from-secondary to-accent"
        title="Appointment booked"
        sub="Wed 2:00 PM · confirmed"
      />
    </div>
  );
}

function FloatingChip({
  className,
  color,
  title,
  sub,
}: {
  className?: string;
  color: string;
  title: string;
  sub: string;
}) {
  const ref = useRef<HTMLDivElement>(null);
  return (
    <div
      ref={ref}
      className={`hidden md:flex items-center gap-3 rounded-2xl border border-border bg-card/90 backdrop-blur-xl px-3 py-2 shadow-2xl animate-float ${className ?? ""}`}
    >
      <div className={`size-8 rounded-lg bg-gradient-to-br ${color} shadow-lg`} />
      <div className="text-left">
        <div className="text-xs font-semibold text-foreground">{title}</div>
        <div className="text-[10px] font-mono text-muted">{sub}</div>
      </div>
    </div>
  );
}
