import { createFileRoute } from "@tanstack/react-router";
import { PageHero, Section, GlassCard } from "../components/ui-primitives";

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
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
          {steps.map((s) => (
            <GlassCard key={s.n}>
              <div className="flex items-center gap-3">
                <div className="size-12 rounded-xl bg-gradient-to-br from-primary via-secondary to-accent flex items-center justify-center text-white font-black shadow-lg shadow-secondary/30">{s.n}</div>
                <div className="text-lg font-bold text-foreground">{s.t}</div>
              </div>
              <p className="mt-4 text-sm text-muted-foreground">{s.d}</p>
            </GlassCard>
          ))}
        </div>
      </Section>
    </div>
  );
}
