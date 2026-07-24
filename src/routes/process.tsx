import { createFileRoute } from "@tanstack/react-router";
import { PageHero, Section } from "../components/ui-primitives";

export const Route = createFileRoute("/process")({
  head: () => ({
    meta: [
      { title: "My Process — Discovery to Continuous Optimization" },
      { name: "description", content: "The 9-step process I use to design and ship automation systems." },
      { property: "og:title", content: "My Process" },
      { property: "og:description", content: "Discovery, planning, architecture, development, testing, deployment, documentation, optimization." },
    ],
  }),
  component: Process,
});

const steps = [
  { n: "01", t: "Discovery Call", d: "Understand goals, bottlenecks, and success criteria." },
  { n: "02", t: "Business Analysis", d: "Audit current workflows, tools, and data flows." },
  { n: "03", t: "Workflow Planning", d: "Design future-state processes and automation map." },
  { n: "04", t: "Solution Architecture", d: "Choose tools, integrations, models, and safeguards." },
  { n: "05", t: "Development", d: "Build automations, CRMs, funnels, and AI agents." },
  { n: "06", t: "Testing", d: "Validate every branch with real-world scenarios." },
  { n: "07", t: "Deployment", d: "Roll out with monitoring and safe rollbacks." },
  { n: "08", t: "Documentation", d: "Ship SOPs, diagrams, and video walkthroughs." },
  { n: "09", t: "Optimization", d: "Iterate continuously using real usage data." },
];

function Process() {
  return (
    <div>
      <PageHero
        eyebrow="Process"
        title={<>From discovery to <span className="gradient-text">continuous optimization</span>.</>}
        sub="A repeatable engineering process that turns messy operations into scalable automation systems."
      />
      <Section>
        <div className="relative">
          {/* Vertical rail with traveling light */}
          <div className="pointer-events-none absolute left-6 md:left-1/2 md:-translate-x-1/2 top-0 bottom-0 w-px overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-b from-transparent via-primary/40 to-transparent" />
            <div
              className="absolute left-1/2 -translate-x-1/2 w-[6px] h-24 rounded-full bg-gradient-to-b from-transparent via-accent to-transparent blur-[2px] animate-light-travel-vert"
              style={{ boxShadow: "0 0 22px 5px rgb(6 182 212 / 0.7)" }}
            />
          </div>

          <div className="space-y-6">
            {steps.map((s, i) => {
              const left = i % 2 === 0;
              return (
                <div
                  key={s.n}
                  style={{ animationDelay: `${i * 90}ms` }}
                  className={`relative grid md:grid-cols-2 gap-4 md:gap-10 items-center animate-fade-in`}
                >
                  {/* Node marker */}
                  <div className="absolute left-6 md:left-1/2 md:-translate-x-1/2 top-6">
                    <span className="absolute inset-0 rounded-full bg-accent/40 animate-pulse-ring" />
                    <div className="relative size-4 rounded-full bg-gradient-to-br from-primary via-secondary to-accent ring-4 ring-background shadow-lg shadow-accent/40" />
                  </div>

                  <div className={`${left ? "md:order-1" : "md:order-2"} pl-16 md:pl-0 ${left ? "md:pr-16 md:text-right" : "md:pl-16"}`}>
                    <div className="group relative rounded-2xl border border-border bg-card/50 backdrop-blur p-6 overflow-hidden hover:border-primary/60 hover:shadow-2xl hover:shadow-primary/20 hover:-translate-y-1 transition-all duration-300">
                      <div className="absolute inset-0 -z-10 opacity-0 group-hover:opacity-100 bg-gradient-to-br from-primary/15 via-secondary/15 to-accent/15 transition-opacity duration-500" />
                      <div className={`flex items-center gap-3 ${left ? "md:justify-end" : ""}`}>
                        <div className="size-12 rounded-xl bg-gradient-to-br from-primary via-secondary to-accent flex items-center justify-center text-white font-black shadow-lg shadow-secondary/30">
                          {s.n}
                        </div>
                        <div className="text-lg font-bold text-foreground">{s.t}</div>
                      </div>
                      <p className="mt-3 text-sm text-muted-foreground">{s.d}</p>
                    </div>
                  </div>
                  <div className={`${left ? "md:order-2" : "md:order-1"} hidden md:block`} />
                </div>
              );
            })}
          </div>
        </div>
      </Section>
    </div>
  );
}
